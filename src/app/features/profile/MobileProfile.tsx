import { useState } from "react";
import { User, Phone, Mail, Crown, Calendar, KeyRound, LogOut, ChevronRight, CheckCircle2, Eye, EyeOff, Star, RefreshCw } from "lucide-react";
import { C } from "../../lib/colors";

export function MobileProfileScreen() {
  const [showPwModal, setShowPwModal] = useState(false), [showUpgradeModal, setShowUpgradeModal] = useState(false), [logoutConfirm, setLogoutConfirm] = useState(false);
  const [oldPw, setOldPw] = useState(""), [newPw, setNewPw] = useState(""), [confirmPw, setConfirmPw] = useState("");
  const [showOld, setShowOld] = useState(false), [showNew, setShowNew] = useState(false), [showConfirm, setShowConfirm] = useState(false);
  const [pwMsg, setPwMsg] = useState<{ ok: boolean; text: string } | null>(null);
  function handlePwSubmit() {
    if (!oldPw || !newPw || !confirmPw) { setPwMsg({ ok: false, text: "Vui lòng điền đầy đủ thông tin." }); return; }
    if (newPw.length < 8) { setPwMsg({ ok: false, text: "Mật khẩu mới phải có ít nhất 8 ký tự." }); return; }
    if (newPw !== confirmPw) { setPwMsg({ ok: false, text: "Mật khẩu xác nhận không khớp." }); return; }
    setPwMsg({ ok: true, text: "Đổi mật khẩu thành công!" });
    setTimeout(() => { setShowPwModal(false); setOldPw(""); setNewPw(""); setConfirmPw(""); setPwMsg(null); }, 1500);
  }
  const inp: React.CSSProperties = { width: "100%", background: C.bg, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: "11px 14px", fontSize: 13, color: C.dark, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };
  const sRow: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 16px", borderBottom: `0.5px solid ${C.border}` };
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg, position: "relative" }}>
      <div style={{ background: C.white, padding: "12px 16px", borderBottom: `0.5px solid ${C.border}`, flexShrink: 0 }}><div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>Hồ sơ cá nhân</div></div>
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 32px" }}>
        <div style={{ background: `linear-gradient(135deg, ${C.teal} 0%, #0e7490 100%)`, borderRadius: 18, padding: "20px 18px", display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,.18)", border: "2px solid rgba(255,255,255,.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>🐼</div>
          <div style={{ flex: 1 }}><div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Nguyễn Minh Anh</div><div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}><span style={{ background: C.orange, color: "#fff", fontSize: 9, padding: "3px 9px", borderRadius: 20, fontWeight: 700, display: "flex", alignItems: "center", gap: 3 }}><Crown size={9} /> Student Premium</span><span style={{ fontSize: 10, color: "rgba(255,255,255,.8)" }}>HSK 1 · 🔥 14</span></div></div>
          <div style={{ textAlign: "center", flexShrink: 0 }}><div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>3,890</div><div style={{ fontSize: 9, color: "rgba(255,255,255,.7)" }}>Tổng XP</div></div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Thông tin tài khoản</div>
        <div style={{ background: C.white, borderRadius: 16, border: `0.5px solid ${C.border}`, overflow: "hidden", marginBottom: 16 }}>
          {[{ icon: <User size={14} color={C.teal} />, bg: C.tealBg, lbl: "Họ và tên", val: "Nguyễn Minh Anh" }, { icon: <Phone size={14} color={C.orange} />, bg: "#fff4ee", lbl: "Số điện thoại", val: "0912 345 678" }, { icon: <Mail size={14} color={C.purple} />, bg: C.purpleBg, lbl: "Email", val: "minhanh@email.com", last: true }].map((r, i) => (
            <div key={i} style={{ ...sRow, ...(r.last ? { borderBottom: "none" } : {}) }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: r.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{r.icon}</div><div><div style={{ fontSize: 10, color: C.muted, marginBottom: 1 }}>{r.lbl}</div><div style={{ fontSize: 13, fontWeight: 500, color: C.dark }}>{r.val}</div></div></div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Gói đăng ký</div>
        <div style={{ background: C.white, borderRadius: 16, border: `0.5px solid ${C.border}`, overflow: "hidden", marginBottom: 16 }}>
          <div style={{ padding: "14px 16px", borderBottom: `0.5px solid ${C.border}` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#f97316,#f4b432)", display: "flex", alignItems: "center", justifyContent: "center" }}><Crown size={17} color="#fff" /></div><div><div style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>Student Premium</div><div style={{ fontSize: 10, color: C.muted }}>Đang hoạt động</div></div></div>
              <span style={{ background: C.greenBg, color: C.green, fontSize: 9, padding: "3px 9px", borderRadius: 20, fontWeight: 700 }}>● Active</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>{["Toàn bộ câu chuyện", "Bloom nâng cao", "Không quảng cáo"].map((f, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: C.muted }}><CheckCircle2 size={11} color={C.green} /> {f}</div>)}</div>
          </div>
          <div style={{ padding: "12px 16px", borderBottom: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Calendar size={14} color={C.muted} /><div><div style={{ fontSize: 10, color: C.muted }}>Ngày hết hạn</div><div style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>12 / 01 / 2027</div></div></div>
            <span style={{ fontSize: 11, color: C.orange, fontWeight: 600 }}>Còn 563 ngày</span>
          </div>
          <div style={{ padding: "12px 16px", display: "flex", gap: 8 }}>
            <button onClick={() => setShowUpgradeModal(true)} style={{ flex: 1, background: C.orange, color: "#fff", border: "none", borderRadius: 12, padding: "10px 0", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><Star size={13} /> Nâng cấp</button>
            <button onClick={() => setShowUpgradeModal(true)} style={{ flex: 1, background: C.tealBg, color: C.teal, border: `0.5px solid #bdeaf0`, borderRadius: 12, padding: "10px 0", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><RefreshCw size={13} /> Gia hạn</button>
          </div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Bảo mật & Tài khoản</div>
        <div style={{ background: C.white, borderRadius: 16, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
          <button onClick={() => setShowPwModal(true)} style={{ ...sRow, width: "100%", cursor: "pointer", background: "none", fontFamily: "inherit", textAlign: "left" as const }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: "#fff4ee", display: "flex", alignItems: "center", justifyContent: "center" }}><KeyRound size={14} color={C.orange} /></div><span style={{ fontSize: 13, fontWeight: 500, color: C.dark }}>Đổi mật khẩu</span></div>
            <ChevronRight size={15} color={C.muted} />
          </button>
          <button onClick={() => setLogoutConfirm(true)} style={{ ...sRow, borderBottom: "none", width: "100%", cursor: "pointer", background: "none", fontFamily: "inherit", textAlign: "left" as const }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center" }}><LogOut size={14} color="#e24b4a" /></div><span style={{ fontSize: 13, fontWeight: 500, color: "#e24b4a" }}>Đăng xuất</span></div>
            <ChevronRight size={15} color="#e24b4a" />
          </button>
        </div>
      </div>
      {showPwModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "flex-end", zIndex: 50 }}>
          <div style={{ background: C.white, borderRadius: "22px 22px 0 0", padding: "20px 18px 32px", width: "100%" }}>
            <div style={{ width: 36, height: 4, background: C.border, borderRadius: 2, margin: "0 auto 16px" }} />
            <div style={{ fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 16 }}>Đổi mật khẩu</div>
            {[{ label: "Mật khẩu hiện tại", val: oldPw, set: setOldPw, show: showOld, toggle: () => setShowOld(v => !v) }, { label: "Mật khẩu mới", val: newPw, set: setNewPw, show: showNew, toggle: () => setShowNew(v => !v) }, { label: "Xác nhận mật khẩu mới", val: confirmPw, set: setConfirmPw, show: showConfirm, toggle: () => setShowConfirm(v => !v) }].map((f, i) => (
              <div key={i} style={{ marginBottom: 12 }}><div style={{ fontSize: 11, color: C.muted, marginBottom: 5 }}>{f.label}</div><div style={{ position: "relative" }}><input type={f.show ? "text" : "password"} value={f.val} onChange={e => f.set(e.target.value)} style={{ ...inp, paddingRight: 40 }} /><button onClick={f.toggle} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", padding: 0 }}>{f.show ? <EyeOff size={15} /> : <Eye size={15} />}</button></div></div>
            ))}
            {pwMsg && <div style={{ fontSize: 12, color: pwMsg.ok ? C.green : "#e24b4a", background: pwMsg.ok ? C.greenBg : "#fff1f2", border: `0.5px solid ${pwMsg.ok ? C.greenBorder : "#fecdd3"}`, borderRadius: 10, padding: "9px 12px", marginBottom: 12 }}>{pwMsg.text}</div>}
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => { setShowPwModal(false); setOldPw(""); setNewPw(""); setConfirmPw(""); setPwMsg(null); }} style={{ flex: 1, background: C.bg, color: C.muted, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: "12px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Huỷ</button>
              <button onClick={handlePwSubmit} style={{ flex: 1, background: C.teal, color: "#fff", border: "none", borderRadius: 12, padding: "12px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Lưu</button>
            </div>
          </div>
        </div>
      )}
      {showUpgradeModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "flex-end", zIndex: 50 }}>
          <div style={{ background: C.white, borderRadius: "22px 22px 0 0", padding: "20px 18px 36px", width: "100%" }}>
            <div style={{ width: 36, height: 4, background: C.border, borderRadius: 2, margin: "0 auto 16px" }} />
            <div style={{ textAlign: "center", marginBottom: 18 }}><div style={{ fontSize: 32, marginBottom: 6 }}>👑</div><div style={{ fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 3 }}>Nâng cấp / Gia hạn</div><div style={{ fontSize: 12, color: C.muted }}>Chọn gói phù hợp</div></div>
            {[{ name: "Student Premium", price: "99.000đ", period: "/ tháng", highlight: false, badge: "Đang dùng" }, { name: "Pro Annual", price: "799.000đ", period: "/ năm", highlight: true, badge: "Tiết kiệm 34%" }].map((p, i) => <div key={i} style={{ border: `1.5px solid ${p.highlight ? C.orange : C.border}`, borderRadius: 14, padding: "13px 15px", marginBottom: 10, background: p.highlight ? "#fff8f4" : C.white }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><div style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>{p.name}</div><span style={{ fontSize: 9, padding: "3px 8px", borderRadius: 20, background: p.highlight ? C.orange : C.greenBg, color: p.highlight ? "#fff" : C.green, fontWeight: 700 }}>{p.badge}</span></div><div style={{ fontSize: 18, fontWeight: 700, color: p.highlight ? C.orange : C.teal }}>{p.price}<span style={{ fontSize: 11, fontWeight: 400, color: C.muted }}>{p.period}</span></div></div>)}
            <button style={{ width: "100%", background: C.orange, color: "#fff", border: "none", borderRadius: 14, padding: "13px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginBottom: 10 }}>Tiến hành thanh toán</button>
            <button onClick={() => setShowUpgradeModal(false)} style={{ width: "100%", background: "none", color: C.muted, border: "none", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Để sau</button>
          </div>
        </div>
      )}
      {logoutConfirm && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.5)", display: "flex", alignItems: "flex-end", zIndex: 50 }}>
          <div style={{ background: C.white, borderRadius: "22px 22px 0 0", padding: "24px 18px 36px", width: "100%", textAlign: "center" }}>
            <div style={{ width: 36, height: 4, background: C.border, borderRadius: 2, margin: "0 auto 20px" }} />
            <div style={{ fontSize: 36, marginBottom: 10 }}>👋</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 6 }}>Đăng xuất?</div>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 22 }}>Bạn có chắc muốn đăng xuất khỏi tài khoản?</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setLogoutConfirm(false)} style={{ flex: 1, background: C.bg, color: C.muted, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: "12px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Huỷ</button>
              <button style={{ flex: 1, background: "#e24b4a", color: "#fff", border: "none", borderRadius: 12, padding: "12px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Đăng xuất</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
