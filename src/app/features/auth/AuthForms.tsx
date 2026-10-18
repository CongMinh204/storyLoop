import { useState } from "react";
import { CircleAlert, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { C } from "../../lib/colors";
import { ApiError } from "../../lib/api";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { cn } from "../../components/ui/utils";
import {
  checkConfirm, checkEmail, checkFullName, checkPassword, MSG, passwordChecks,
} from "../../../../server/src/shared/validation";
import { chooseGuest, login, openAuth, register, useAuth } from "./useAuth";
import { GoogleButton } from "./GoogleButton";

// Form đăng ký / đăng nhập, dùng chung cho mobile và desktop. Luật kiểm tra lấy từ
// server/src/shared/validation.ts nên báo lỗi giống hệt server.

const INPUT = "h-11 rounded-xl border-[#e2e6f0] bg-[#f0f2f5] px-3.5 text-[#1a2340] placeholder:text-[#8a93a8] focus-visible:border-[#1a8fa0] focus-visible:ring-[#1a8fa0]/20";

export function PasswordHint({ value, strict }: { value: string; strict?: boolean }) {
  const c = passwordChecks(value);
  // Phần nào đạt thì xanh; strict (đã bấm gửi / rời ô) thì phần chưa đạt đỏ
  const part = (ok: boolean, text: string) => (
    <span style={{ color: ok ? C.green : strict ? C.red : C.muted, fontWeight: ok ? 600 : 400 }}>{text}</span>
  );
  return (
    <p style={{ fontSize: 11.5, lineHeight: 1.5, color: C.muted, margin: 0 }}>
      {part(c.length, "Tối thiểu 12 ký tự")}, gồm {part(c.upper, "chữ hoa")}, {part(c.lower, "chữ thường")} và {part(c.digit, "số")}
    </p>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string | null; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, color: C.dark }}>{label}</Label>
      {children}
      {error && <p id={`${id}-error`} role="alert" style={{ fontSize: 11.5, color: C.red, margin: 0 }}>{error}</p>}
    </div>
  );
}

type Bind = { value: string; onChange: (v: string) => void; onBlur: () => void };

function TextInput({ id, bind, invalid, ...rest }: { id: string; bind: Bind; invalid: boolean } & Omit<React.ComponentProps<"input">, "id" | "value" | "onChange" | "onBlur">) {
  return (
    <Input id={id} value={bind.value} onChange={e => bind.onChange(e.target.value)} onBlur={bind.onBlur}
      aria-invalid={invalid || undefined} aria-describedby={invalid ? `${id}-error` : undefined} className={INPUT} {...rest} />
  );
}

function PasswordInput({ id, bind, invalid, autoComplete, placeholder }: { id: string; bind: Bind; invalid: boolean; autoComplete: string; placeholder: string }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Input id={id} type={show ? "text" : "password"} value={bind.value} onChange={e => bind.onChange(e.target.value)} onBlur={bind.onBlur}
        aria-invalid={invalid || undefined} aria-describedby={invalid ? `${id}-error` : undefined}
        autoComplete={autoComplete} placeholder={placeholder} className={cn(INPUT, "pr-11")} />
      <button type="button" onClick={() => setShow(v => !v)} aria-label={show ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
        style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", padding: 6 }}>
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
}

// Trạng thái form: lỗi của một ô chỉ hiện sau khi rời ô đó hoặc bấm gửi, rồi cập nhật ngay khi gõ.
// Lỗi từ server (vd. email đã có tài khoản) hiện dưới đúng ô, các lỗi khác hiện ở đầu nút gửi.
function useForm<K extends string>(initial: Record<K, string>, checks: Record<K, (v: Record<K, string>) => string | null>) {
  const keys = Object.keys(checks) as K[];
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState<Partial<Record<K, boolean>>>({});
  const [serverErrors, setServerErrors] = useState<Partial<Record<K, string>>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const error = (k: K) => serverErrors[k] ?? (touched[k] ? checks[k](values) : null);
  const bind = (k: K): Bind => ({
    value: values[k],
    onChange: v => {
      setValues(s => ({ ...s, [k]: v }));
      setServerErrors(s => ({ ...s, [k]: undefined }));
      setFormError(null);
    },
    onBlur: () => setTouched(t => ({ ...t, [k]: true })),
  });

  async function submit(action: (v: Record<K, string>) => Promise<void>) {
    setTouched(Object.fromEntries(keys.map(k => [k, true])) as Record<K, boolean>);
    const firstInvalid = keys.find(k => checks[k](values));
    if (firstInvalid) {
      document.getElementById(`auth-${firstInvalid}`)?.focus();
      return;
    }
    setBusy(true);
    setFormError(null);
    try {
      await action(values);
    } catch (err) {
      const fields = err instanceof ApiError ? err.fields ?? {} : {};
      const mine = keys.filter(k => fields[k]);
      if (mine.length) setServerErrors(Object.fromEntries(mine.map(k => [k, fields[k]])) as Partial<Record<K, string>>);
      else setFormError(err instanceof ApiError ? err.message : "Có lỗi xảy ra, hãy thử lại");
    } finally {
      setBusy(false);
    }
  }

  return { values, error, bind, submit, busy, formError, setFormError, touched };
}

function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div role="alert" style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12, color: C.red, background: C.redBg, border: `0.5px solid ${C.redBorder}`, borderRadius: 10, padding: "9px 12px", lineHeight: 1.5 }}>
      <CircleAlert size={15} style={{ flexShrink: 0, marginTop: 1 }} /> {message}
    </div>
  );
}

function OrDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, color: C.faint, fontSize: 10.5, fontWeight: 600, letterSpacing: ".08em" }}>
      <span style={{ flex: 1, height: 1, background: C.border }} />HOẶC DÙNG EMAIL<span style={{ flex: 1, height: 1, background: C.border }} />
    </div>
  );
}

function Heading({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 800, color: C.dark, margin: 0, lineHeight: 1.25 }}>{title}</h1>
      <p style={{ fontSize: 13, color: C.muted, margin: "6px 0 0", lineHeight: 1.5 }}>{sub}</p>
    </div>
  );
}

function SubmitButton({ busy, label, busyLabel }: { busy: boolean; label: string; busyLabel: string }) {
  return (
    <Button type="submit" disabled={busy} className="h-11 w-full rounded-xl bg-[#1a8fa0] text-[14px] font-bold text-white hover:bg-[#167d8c]">
      {busy && <LoaderCircle className="animate-spin" />} {busy ? busyLabel : label}
    </Button>
  );
}

const linkBtn: React.CSSProperties = { background: "none", border: "none", padding: 0, color: C.teal, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "inherit" };

function Footer({ question, action, onAction }: { question: string; action: string; onAction: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <p style={{ fontSize: 12.5, color: C.muted, margin: 0 }}>{question} <button type="button" onClick={onAction} style={linkBtn}>{action}</button></p>
      <Button type="button" variant="ghost" onClick={chooseGuest} className="h-9 rounded-full text-[13px] font-semibold text-[#6b7a99] hover:bg-[#f0f2f5]">
        Chơi với tư cách khách
      </Button>
    </div>
  );
}

const formStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 14 };

export function RegisterForm({ googleWidth }: { googleWidth: number }) {
  const { googleEnabled } = useAuth();
  const f = useForm(
    { fullName: "", email: "", password: "", confirmPassword: "" },
    {
      fullName: v => checkFullName(v.fullName),
      email: v => checkEmail(v.email),
      password: v => checkPassword(v.password),
      confirmPassword: v => checkConfirm(v.password, v.confirmPassword),
    },
  );
  // Mật khẩu yếu đã được tô đỏ trong dòng gợi ý, không lặp lại câu báo lỗi
  const pwError = f.error("password");
  return (
    <form noValidate onSubmit={e => { e.preventDefault(); void f.submit(register); }} style={formStyle}>
      <Heading title="Tạo Tài Khoản Mới" sub="Đăng ký để lưu tiến độ học trên mọi thiết bị" />
      {googleEnabled && <><GoogleButton text="signup_with" width={googleWidth} onError={f.setFormError} /><OrDivider /></>}
      <Field id="auth-fullName" label="Họ và tên" error={f.error("fullName")}>
        <TextInput id="auth-fullName" bind={f.bind("fullName")} invalid={!!f.error("fullName")} autoComplete="name" placeholder="Nguyễn Văn A" />
      </Field>
      <Field id="auth-email" label="Địa chỉ Email" error={f.error("email")}>
        <TextInput id="auth-email" bind={f.bind("email")} invalid={!!f.error("email")} type="email" inputMode="email" autoComplete="email" placeholder="ban@email.com" />
      </Field>
      <Field id="auth-password" label="Mật khẩu" error={pwError === MSG.passwordWeak ? null : pwError}>
        <PasswordInput id="auth-password" bind={f.bind("password")} invalid={!!pwError} autoComplete="new-password" placeholder="Nhập mật khẩu" />
        <PasswordHint value={f.values.password} strict={!!f.touched.password} />
      </Field>
      <Field id="auth-confirmPassword" label="Xác nhận mật khẩu" error={f.error("confirmPassword")}>
        <PasswordInput id="auth-confirmPassword" bind={f.bind("confirmPassword")} invalid={!!f.error("confirmPassword")} autoComplete="new-password" placeholder="Nhập lại mật khẩu" />
      </Field>
      <FormError message={f.formError} />
      <SubmitButton busy={f.busy} label="Đăng Ký Tài Khoản" busyLabel="Đang tạo tài khoản..." />
      <Footer question="Đã có tài khoản?" action="Đăng nhập" onAction={() => openAuth("login")} />
    </form>
  );
}

export function LoginForm({ googleWidth }: { googleWidth: number }) {
  const { googleEnabled } = useAuth();
  const f = useForm(
    { email: "", password: "" },
    {
      email: v => checkEmail(v.email),
      password: v => (v.password ? null : MSG.passwordRequired),
    },
  );
  return (
    <form noValidate onSubmit={e => { e.preventDefault(); void f.submit(v => login(v.email, v.password)); }} style={formStyle}>
      <Heading title="Đăng Nhập" sub="Chào mừng bạn quay lại! Đăng nhập để học tiếp trên mọi thiết bị" />
      {googleEnabled && <><GoogleButton text="signin_with" width={googleWidth} onError={f.setFormError} /><OrDivider /></>}
      <Field id="auth-email" label="Địa chỉ Email" error={f.error("email")}>
        <TextInput id="auth-email" bind={f.bind("email")} invalid={!!f.error("email")} type="email" inputMode="email" autoComplete="email" placeholder="ban@email.com" />
      </Field>
      <Field id="auth-password" label="Mật khẩu" error={f.error("password")}>
        <PasswordInput id="auth-password" bind={f.bind("password")} invalid={!!f.error("password")} autoComplete="current-password" placeholder="Nhập mật khẩu" />
      </Field>
      <FormError message={f.formError} />
      <SubmitButton busy={f.busy} label="Đăng Nhập" busyLabel="Đang đăng nhập..." />
      <Footer question="Chưa có tài khoản?" action="Tạo tài khoản" onAction={() => openAuth("register")} />
    </form>
  );
}
