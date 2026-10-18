import { useState } from "react";
import { User, Mail, Crown, Calendar, KeyRound, LogOut, ChevronRight, CheckCircle2, Eye, EyeOff, Star, RefreshCw } from "lucide-react";
import { C, GRADIENT } from "../../lib/colors";
import { useViewer, formatNumber } from "../auth/viewer";
import { logout } from "../auth/useAuth";
import { useChangePassword } from "../auth/useChangePassword";
import { GuestReminder } from "../auth/GuestReminder";
import { PasswordHint } from "../auth/AuthForms";

export function MobileProfileScreen() {
  const u = useViewer();
  const [showPwModal, setShowPwModal] = useState(false), [showUpgradeModal, setShowUpgradeModal] = useState(false), [logoutConfirm, setLogoutConfirm] = useState(false);
  const { oldPw, setOldPw, newPw, setNewPw, confirmPw, setConfirmPw, msg: pwMsg, saving: pwSaving, submit: submitPw, reset: resetPw } = useChangePassword(u.hasPassword);
  const [showOld, setShowOld] = useState(false), [showNew, setShowNew] = useState(false), [showConfirm, setShowConfirm] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  function handlePwSubmit() {
    void submitPw(() => setShowPwModal(false));
  }
  async function handleLogout() {
    setLoggingOut(true);
    await logout(); // xong thì màn chào hiện ra thay cho app
  }
  const inp: React.CSSProperties = { width: "100%", background: C.bg, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: "11px 14px", fontSize: 13, color: C.ink, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };
  const sRow: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 16px", borderBottom: `0.5px solid ${C.border}` };
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg, position: "relative" }}>
      <div style={{ background: C.surface, padding: "12px 16px", borderBottom: `0.5px solid ${C.border}`, flexShrink: 0 }}><div style={{ fontSize: 14, fontWeight: 700, color: C.ink }}>Hồ sơ cá nhân</div></div>
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 32px" }}>
        <div style={{ background: GRADIENT.primary, borderRadius: 18, padding: "20px 18px", display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,.18)", border: "2px solid rgba(255,255,255,.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>🐼</div>
          <div style={{ flex: 1 }}><div style={{ fontSize: 16, fontWeight: 700, color: C.onFill, marginBottom: 4 }}>{u.name}</div><div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}><span style={{ background: C.reward, color: C.ink, fontSize: 9, padding: "3px 9px", borderRadius: 20, fontWeight: 700, display: "flex", alignItems: "center", gap: 3 }}><Crown size={9} /> Student Premium</span><span style={{ fontSize: 10, color: "rgba(255,255,255,.92)" }}>{u.signedIn ? `🔥 ${u.streak} ngày` : "Khách"}</span></div></div>
          {u.signedIn && <div style={{ textAlign: "center", flexShrink: 0 }}><div style={{ fontSize: 20, fontWeight: 700, color: C.onFill }}>{formatNumber(u.xp)}</div><div style={{ fontSize: 9, color: "rgba(255,255,255,.92)" }}>Tổng XP</div></div>}
        </div>
        {(u.signedIn || u.authEnabled) && <div style={{ fontSize: 10, fontWeight: 700, color: C.inkMuted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Thông tin tài khoản</div>}
        {!u.signedIn ? (u.authEnabled && <div style={{ marginBottom: 16 }}><GuestReminder /></div>) : (
        <div style={{ background: C.surface, borderRadius: 16, border: `0.5px solid ${C.border}`, overflow: "hidden", marginBottom: 16 }}>
          {[{ icon: <User size={14} color={C.primary} />, bg: C.primaryBg, lbl: "Họ và tên", val: u.name }, { icon: <Mail size={14} color={C.ink} />, bg: C.inkBg, lbl: "Email", val: u.email, last: true }].map((r, i) => (
            <div key={i} style={{ ...sRow, ...(r.last ? { borderBottom: "none" } : {}) }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: r.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{r.icon}</div><div><div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 1 }}>{r.lbl}</div><div style={{ fontSize: 13, fontWeight: 500, color: C.ink }}>{r.val}</div></div></div>
            </div>
          ))}
        </div>
        )}
        <div style={{ fontSize: 10, fontWeight: 700, color: C.inkMuted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Gói đăng ký</div>
        <div style={{ background: C.surface, borderRadius: 16, border: `0.5px solid ${C.border}`, overflow: "hidden", marginBottom: 16 }}>
          <div style={{ padding: "14px 16px", borderBottom: `0.5px solid ${C.border}` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 36, height: 36, borderRadius: 10, background: GRADIENT.premium, display: "flex", alignItems: "center", justifyContent: "center" }}><Crown size={17} color={C.onFill} /></div><div><div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>Student Premium</div><div style={{ fontSize: 10, color: C.inkMuted }}>Đang hoạt động</div></div></div>
              <span style={{ background: C.successBg, color: C.success, fontSize: 9, padding: "3px 9px", borderRadius: 20, fontWeight: 700 }}>● Active</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>{["Toàn bộ câu chuyện", "Bloom nâng cao", "Không quảng cáo"].map((f, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: C.inkMuted }}><CheckCircle2 size={11} color={C.success} /> {f}</div>)}</div>
          </div>
          <div style={{ padding: "12px 16px", borderBottom: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Calendar size={14} color={C.inkMuted} /><div><div style={{ fontSize: 10, color: C.inkMuted }}>Ngày hết hạn</div><div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>12 / 01 / 2027</div></div></div>
            <span style={{ fontSize: 11, color: C.ctaText, fontWeight: 600 }}>Còn 563 ngày</span>
          </div>
          <div style={{ padding: "12px 16px", display: "flex", gap: 8 }}>
            <button onClick={() => setShowUpgradeModal(true)} style={{ flex: 1, background: C.cta, color: C.onFill, border: "none", borderRadius: 12, padding: "10px 0", fontSize: 19, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><Star size={13} /> Nâng cấp</button>
            <button onClick={() => setShowUpgradeModal(true)} style={{ flex: 1, background: C.primaryBg, color: C.primaryText, border: `0.5px solid ${C.primaryBorder}`, borderRadius: 12, padding: "10px 0", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><RefreshCw size={13} /> Gia hạn</button>
          </div>
        </div>
        {u.signedIn && <>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.inkMuted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Bảo mật & Tài khoản</div>
        <div style={{ background: C.surface, borderRadius: 16, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
          <button onClick={() => setShowPwModal(true)} style={{ ...sRow, width: "100%", cursor: "pointer", background: "none", fontFamily: "inherit", textAlign: "left" as const }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: C.ctaBg, display: "flex", alignItems: "center", justifyContent: "center" }}><KeyRound size={14} color={C.cta} /></div><span style={{ fontSize: 13, fontWeight: 500, color: C.ink }}>{u.hasPassword ? "Đổi mật khẩu" : "Đặt mật khẩu"}</span></div>
            <ChevronRight size={15} color={C.inkMuted} />
          </button>
          <button onClick={() => setLogoutConfirm(true)} style={{ ...sRow, borderBottom: "none", width: "100%", cursor: "pointer", background: "none", fontFamily: "inherit", textAlign: "left" as const }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: C.dangerBg, display: "flex", alignItems: "center", justifyContent: "center" }}><LogOut size={14} color={C.danger} /></div><span style={{ fontSize: 13, fontWeight: 500, color: C.danger }}>Đăng xuất</span></div>
            <ChevronRight size={15} color={C.danger} />
          </button>
        </div>
        </>}
      </div>
      {showPwModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "flex-end", zIndex: 50 }}>
          <div style={{ background: C.surface, borderRadius: "22px 22px 0 0", padding: "20px 18px 32px", width: "100%" }}>
            <div style={{ width: 36, height: 4, background: C.border, borderRadius: 2, margin: "0 auto 16px" }} />
            <div style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 16 }}>{u.hasPassword ? "Đổi mật khẩu" : "Đặt mật khẩu"}</div>
            {[...(u.hasPassword ? [{ label: "Mật khẩu hiện tại", val: oldPw, set: setOldPw, show: showOld, toggle: () => setShowOld(v => !v), hint: false }] : []), { label: "Mật khẩu mới", val: newPw, set: setNewPw, show: showNew, toggle: () => setShowNew(v => !v), hint: true }, { label: "Xác nhận mật khẩu mới", val: confirmPw, set: setConfirmPw, show: showConfirm, toggle: () => setShowConfirm(v => !v), hint: false }].map((f, i) => (
              <div key={i} style={{ marginBottom: 12 }}><div style={{ fontSize: 11, color: C.inkMuted, marginBottom: 5 }}>{f.label}</div><div style={{ position: "relative" }}><input type={f.show ? "text" : "password"} value={f.val} onChange={e => f.set(e.target.value)} style={{ ...inp, paddingRight: 40 }} /><button onClick={f.toggle} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.inkMuted, display: "flex", padding: 0 }}>{f.show ? <EyeOff size={15} /> : <Eye size={15} />}</button></div>{f.hint && <div style={{ marginTop: 6 }}><PasswordHint value={newPw} /></div>}</div>
            ))}
            {pwMsg && <div style={{ fontSize: 12, color: pwMsg.ok ? C.success : C.danger, background: pwMsg.ok ? C.successBg : C.dangerBg, border: `0.5px solid ${pwMsg.ok ? C.successBorder : C.dangerBorder}`, borderRadius: 10, padding: "9px 12px", marginBottom: 12 }}>{pwMsg.text}</div>}
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => { setShowPwModal(false); resetPw(); }} style={{ flex: 1, background: C.bg, color: C.inkMuted, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: "12px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Huỷ</button>
              <button onClick={handlePwSubmit} disabled={pwSaving} style={{ flex: 1, background: C.primaryDeep, color: C.onFill, border: "none", borderRadius: 12, padding: "12px 0", fontSize: 13, fontWeight: 700, cursor: pwSaving ? "default" : "pointer", opacity: pwSaving ? 0.7 : 1, fontFamily: "inherit" }}>{pwSaving ? "Đang lưu..." : "Lưu"}</button>
            </div>
          </div>
        </div>
      )}
      {showUpgradeModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "flex-end", zIndex: 50 }}>
          <div style={{ background: C.surface, borderRadius: "22px 22px 0 0", padding: "20px 18px 36px", width: "100%" }}>
            <div style={{ width: 36, height: 4, background: C.border, borderRadius: 2, margin: "0 auto 16px" }} />
            <div style={{ textAlign: "center", marginBottom: 18 }}><div style={{ fontSize: 32, marginBottom: 6 }}>👑</div><div style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 3 }}>Nâng cấp / Gia hạn</div><div style={{ fontSize: 12, color: C.inkMuted }}>Chọn gói phù hợp</div></div>
            {[{ name: "Student Premium", price: "99.000đ", period: "/ tháng", highlight: false, badge: "Đang dùng" }, { name: "Pro Annual", price: "799.000đ", period: "/ năm", highlight: true, badge: "Tiết kiệm 34%" }].map((p, i) => <div key={i} style={{ border: `1.5px solid ${p.highlight ? C.cta : C.border}`, borderRadius: 14, padding: "13px 15px", marginBottom: 10, background: p.highlight ? C.ctaBg : C.surface }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>{p.name}</div><span style={{ fontSize: 9, padding: "3px 8px", borderRadius: 20, background: p.highlight ? C.cta : C.successBg, color: p.highlight ? C.onFill : C.success, fontWeight: 700 }}>{p.badge}</span></div><div style={{ fontSize: 18, fontWeight: 700, color: p.highlight ? C.cta : C.primaryText }}>{p.price}<span style={{ fontSize: 11, fontWeight: 400, color: C.inkMuted }}>{p.period}</span></div></div>)}
            <button style={{ width: "100%", background: C.cta, color: C.onFill, border: "none", borderRadius: 14, padding: "13px 0", fontSize: 19, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginBottom: 10 }}>Tiến hành thanh toán</button>
            <button onClick={() => setShowUpgradeModal(false)} style={{ width: "100%", background: "none", color: C.inkMuted, border: "none", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Để sau</button>
          </div>
        </div>
      )}
      {logoutConfirm && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "flex-end", zIndex: 50 }}>
          <div style={{ background: C.surface, borderRadius: "22px 22px 0 0", padding: "24px 18px 36px", width: "100%", textAlign: "center" }}>
            <div style={{ width: 36, height: 4, background: C.border, borderRadius: 2, margin: "0 auto 20px" }} />
            <div style={{ fontSize: 36, marginBottom: 10 }}>👋</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 6 }}>Đăng xuất?</div>
            <div style={{ fontSize: 12, color: C.inkMuted, marginBottom: 22 }}>Bạn có chắc muốn đăng xuất khỏi tài khoản?</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setLogoutConfirm(false)} style={{ flex: 1, background: C.bg, color: C.inkMuted, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: "12px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Huỷ</button>
              <button onClick={handleLogout} disabled={loggingOut} style={{ flex: 1, background: C.danger, color: C.onFill, border: "none", borderRadius: 12, padding: "12px 0", fontSize: 13, fontWeight: 700, cursor: loggingOut ? "default" : "pointer", opacity: loggingOut ? 0.7 : 1, fontFamily: "inherit" }}>{loggingOut ? "Đang đăng xuất..." : "Đăng xuất"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
