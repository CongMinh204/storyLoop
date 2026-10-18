import { useState } from "react";
import { User, Mail, Crown, Calendar, KeyRound, LogOut, ChevronRight, CheckCircle2, Eye, EyeOff, Star, RefreshCw } from "lucide-react";
import { C, GRADIENT } from "../../lib/colors";
import { DesktopTopbar } from "../../layouts/desktop/DesktopChrome";
import { useViewer, formatNumber } from "../auth/viewer";
import { logout } from "../auth/useAuth";
import { useChangePassword } from "../auth/useChangePassword";
import { GuestReminder } from "../auth/GuestReminder";
import { PasswordHint } from "../auth/AuthForms";

export function DesktopProfileScreen() {
  const u = useViewer();
  const [showPwModal, setShowPwModal] = useState(false), [showUpgrade, setShowUpgrade] = useState(false), [logoutConfirm, setLogoutConfirm] = useState(false);
  const { oldPw, setOldPw, newPw, setNewPw, confirmPw, setConfirmPw, msg: pwMsg, saving: pwSaving, submit: submitPw, reset: resetPw } = useChangePassword(u.hasPassword);
  const [showOld, setShowOld] = useState(false), [showNew, setShowNew] = useState(false), [showConf, setShowConf] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  function handlePw() {
    void submitPw(() => setShowPwModal(false));
  }
  async function handleLogout() {
    setLoggingOut(true);
    await logout(); // xong thì màn chào hiện ra thay cho app
  }
  const inp: React.CSSProperties = { width: "100%", background: C.bg, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: "10px 13px", fontSize: 13, color: C.ink, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };
  const sRow: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 18px", borderBottom: `0.5px solid ${C.border}` };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
      <DesktopTopbar title="Hồ sơ cá nhân" />
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px", background: C.bg }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: GRADIENT.primary, borderRadius: 18, padding: "24px 22px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 68, height: 68, borderRadius: "50%", background: "rgba(255,255,255,.18)", border: "2px solid rgba(255,255,255,.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>🐼</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.onFill, marginBottom: 6 }}>{u.name}</div>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" as const, marginBottom: 6 }}><span style={{ background: C.reward, color: C.ink, fontSize: 10, padding: "3px 10px", borderRadius: 20, fontWeight: 700, display: "flex", alignItems: "center", gap: 3 }}><Crown size={10} /> Student Premium</span></div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.92)" }}>{u.signedIn ? `🔥 ${u.streak} ngày streak · ${formatNumber(u.xp)} XP` : "Đang chơi với tư cách khách"}</div>
              </div>
            </div>
            {(u.signedIn || u.authEnabled) && <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.inkMuted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Thông tin tài khoản</div>
              {!u.signedIn ? <GuestReminder /> : (
              <div style={{ background: C.surface, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
                {[{ icon: <User size={14} color={C.primary} />, bg: C.primaryBg, lbl: "Họ và tên", val: u.name }, { icon: <Mail size={14} color={C.ink} />, bg: C.inkBg, lbl: "Email", val: u.email, last: true }].map((r, i) => (
                  <div key={i} style={{ ...sRow, ...(r.last ? { borderBottom: "none" } : {}) }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 11 }}><div style={{ width: 34, height: 34, borderRadius: 9, background: r.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{r.icon}</div><div><div style={{ fontSize: 10, color: C.inkMuted, marginBottom: 1 }}>{r.lbl}</div><div style={{ fontSize: 13, fontWeight: 500, color: C.ink }}>{r.val}</div></div></div>
                  </div>
                ))}
              </div>
              )}
            </div>}
          </div>
          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.inkMuted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Gói đăng ký</div>
              <div style={{ background: C.surface, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
                <div style={{ padding: "16px 18px", borderBottom: `0.5px solid ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 38, height: 38, borderRadius: 11, background: GRADIENT.premium, display: "flex", alignItems: "center", justifyContent: "center" }}><Crown size={18} color={C.onFill} /></div><div><div style={{ fontSize: 14, fontWeight: 700, color: C.ink }}>Student Premium</div><div style={{ fontSize: 11, color: C.inkMuted }}>Đang hoạt động</div></div></div>
                    <span style={{ background: C.successBg, color: C.success, fontSize: 10, padding: "3px 10px", borderRadius: 20, fontWeight: 700 }}>● Active</span>
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>{["Toàn bộ câu chuyện", "Bloom nâng cao", "Không quảng cáo"].map((f, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: C.inkMuted }}><CheckCircle2 size={12} color={C.success} /> {f}</div>)}</div>
                </div>
                <div style={{ padding: "13px 18px", borderBottom: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Calendar size={15} color={C.inkMuted} /><div><div style={{ fontSize: 11, color: C.inkMuted }}>Ngày hết hạn</div><div style={{ fontSize: 14, fontWeight: 700, color: C.ink }}>12 / 01 / 2027</div></div></div>
                  <span style={{ fontSize: 12, color: C.ctaText, fontWeight: 600 }}>Còn 563 ngày</span>
                </div>
                <div style={{ padding: "13px 18px", display: "flex", gap: 10 }}>
                  <button onClick={() => setShowUpgrade(true)} style={{ flex: 1, background: C.cta, color: C.onFill, border: "none", borderRadius: 10, padding: "10px 0", fontSize: 19, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><Star size={14} /> Nâng cấp gói</button>
                  <button onClick={() => setShowUpgrade(true)} style={{ flex: 1, background: C.primaryBg, color: C.primaryText, border: `0.5px solid ${C.primaryBorder}`, borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><RefreshCw size={14} /> Gia hạn</button>
                </div>
              </div>
            </div>
            {u.signedIn && <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.inkMuted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Bảo mật & Tài khoản</div>
              <div style={{ background: C.surface, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
                <button onClick={() => setShowPwModal(true)} style={{ ...sRow, width: "100%", cursor: "pointer", background: "none", fontFamily: "inherit", textAlign: "left" as const }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}><div style={{ width: 34, height: 34, borderRadius: 9, background: C.ctaBg, display: "flex", alignItems: "center", justifyContent: "center" }}><KeyRound size={15} color={C.cta} /></div><span style={{ fontSize: 13, fontWeight: 500, color: C.ink }}>{u.hasPassword ? "Đổi mật khẩu" : "Đặt mật khẩu"}</span></div>
                  <ChevronRight size={15} color={C.inkMuted} />
                </button>
                <button onClick={() => setLogoutConfirm(true)} style={{ ...sRow, borderBottom: "none", width: "100%", cursor: "pointer", background: "none", fontFamily: "inherit", textAlign: "left" as const }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}><div style={{ width: 34, height: 34, borderRadius: 9, background: C.dangerBg, display: "flex", alignItems: "center", justifyContent: "center" }}><LogOut size={15} color={C.danger} /></div><span style={{ fontSize: 13, fontWeight: 500, color: C.danger }}>Đăng xuất</span></div>
                  <ChevronRight size={15} color={C.danger} />
                </button>
              </div>
            </div>}
          </div>
        </div>
      </div>
      {/* Modals */}
      {showPwModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div style={{ background: C.surface, borderRadius: 18, padding: "28px 26px", width: 380, boxShadow: "0 8px 40px rgba(0,0,0,.18)" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{u.hasPassword ? "Đổi mật khẩu" : "Đặt mật khẩu"}</div>
            <div style={{ fontSize: 12, color: C.inkMuted, marginBottom: 20 }}>{u.hasPassword ? "Nhập mật khẩu hiện tại và mật khẩu mới." : "Đặt mật khẩu để đăng nhập được bằng email."}</div>
            {[...(u.hasPassword ? [{ label: "Mật khẩu hiện tại", val: oldPw, set: setOldPw, show: showOld, toggle: () => setShowOld(v => !v), hint: false }] : []), { label: "Mật khẩu mới", val: newPw, set: setNewPw, show: showNew, toggle: () => setShowNew(v => !v), hint: true }, { label: "Xác nhận mật khẩu mới", val: confirmPw, set: setConfirmPw, show: showConf, toggle: () => setShowConf(v => !v), hint: false }].map((f, i) => (
              <div key={i} style={{ marginBottom: 13 }}><div style={{ fontSize: 11, color: C.inkMuted, marginBottom: 5 }}>{f.label}</div><div style={{ position: "relative" }}><input type={f.show ? "text" : "password"} value={f.val} onChange={e => f.set(e.target.value)} style={{ ...inp, paddingRight: 40 }} /><button onClick={f.toggle} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.inkMuted, display: "flex", padding: 0 }}>{f.show ? <EyeOff size={15} /> : <Eye size={15} />}</button></div>{f.hint && <div style={{ marginTop: 6 }}><PasswordHint value={newPw} /></div>}</div>
            ))}
            {pwMsg && <div style={{ fontSize: 12, color: pwMsg.ok ? C.success : C.danger, background: pwMsg.ok ? C.successBg : C.dangerBg, border: `0.5px solid ${pwMsg.ok ? C.successBorder : C.dangerBorder}`, borderRadius: 9, padding: "9px 12px", marginBottom: 14 }}>{pwMsg.text}</div>}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { setShowPwModal(false); resetPw(); }} style={{ flex: 1, background: C.bg, color: C.inkMuted, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: "11px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Huỷ</button>
              <button onClick={handlePw} disabled={pwSaving} style={{ flex: 1, background: C.primaryDeep, color: C.onFill, border: "none", borderRadius: 10, padding: "11px 0", fontSize: 13, fontWeight: 700, cursor: pwSaving ? "default" : "pointer", opacity: pwSaving ? 0.7 : 1, fontFamily: "inherit" }}>{pwSaving ? "Đang lưu..." : "Lưu"}</button>
            </div>
          </div>
        </div>
      )}
      {showUpgrade && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div style={{ background: C.surface, borderRadius: 18, padding: "28px 26px", width: 380, boxShadow: "0 8px 40px rgba(0,0,0,.18)" }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}><div style={{ fontSize: 36, marginBottom: 8 }}>👑</div><div style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 4 }}>Nâng cấp / Gia hạn</div><div style={{ fontSize: 12, color: C.inkMuted }}>Chọn gói phù hợp với bạn</div></div>
            {[{ name: "Student Premium", price: "99.000đ", period: "/ tháng", highlight: false, badge: "Đang dùng" }, { name: "Pro Annual", price: "799.000đ", period: "/ năm", highlight: true, badge: "Tiết kiệm 34%" }].map((p, i) => <div key={i} style={{ border: `1.5px solid ${p.highlight ? C.cta : C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 10, background: p.highlight ? C.ctaBg : C.surface }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><div style={{ fontSize: 14, fontWeight: 700, color: C.ink }}>{p.name}</div><span style={{ fontSize: 9, padding: "3px 8px", borderRadius: 20, background: p.highlight ? C.cta : C.successBg, color: p.highlight ? C.onFill : C.success, fontWeight: 700 }}>{p.badge}</span></div><div style={{ fontSize: 20, fontWeight: 700, color: p.highlight ? C.cta : C.primaryText }}>{p.price}<span style={{ fontSize: 12, fontWeight: 400, color: C.inkMuted }}>{p.period}</span></div></div>)}
            <button style={{ width: "100%", background: C.cta, color: C.onFill, border: "none", borderRadius: 12, padding: "13px 0", fontSize: 19, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginBottom: 10 }}>Tiến hành thanh toán</button>
            <button onClick={() => setShowUpgrade(false)} style={{ width: "100%", background: "none", color: C.inkMuted, border: "none", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Để sau</button>
          </div>
        </div>
      )}
      {logoutConfirm && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div style={{ background: C.surface, borderRadius: 18, padding: "32px 28px", width: 320, boxShadow: "0 8px 40px rgba(0,0,0,.18)", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>👋</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 8 }}>Đăng xuất?</div>
            <div style={{ fontSize: 12, color: C.inkMuted, marginBottom: 24 }}>Bạn có chắc muốn đăng xuất khỏi tài khoản không?</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setLogoutConfirm(false)} style={{ flex: 1, background: C.bg, color: C.inkMuted, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: "11px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Huỷ</button>
              <button onClick={handleLogout} disabled={loggingOut} style={{ flex: 1, background: C.danger, color: C.onFill, border: "none", borderRadius: 10, padding: "11px 0", fontSize: 13, fontWeight: 700, cursor: loggingOut ? "default" : "pointer", opacity: loggingOut ? 0.7 : 1, fontFamily: "inherit" }}>{loggingOut ? "Đang đăng xuất..." : "Đăng xuất"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
