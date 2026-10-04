import { useState, useRef, useEffect } from "react";
import { ProgressScreen } from "./components/ProgressScreen";
import {
  Flame, Home, BookOpen, TrendingUp, User, Lock,
  ArrowLeft, Mic, ArrowUp, Eye, EyeOff,
  CheckCircle2, ChevronRight, Zap, Trophy,
  Castle, Shield,
  Phone, Mail, Crown, Calendar, KeyRound, LogOut, Star, RefreshCw, X,
  Library,
} from "lucide-react";
import { C } from "./lib/colors";
import { useIsMobile } from "./lib/useIsMobile";
import type { Screen } from "./types";
import { LIBRARY } from "./data/library";
import { VOCAB_MAP } from "./data/vocab";
import { BLOOM_STAGES, BLOOM_ICONS } from "./data/bloom";
import { BloomContent } from "./features/bloom/BloomContent";
import { FlashcardScreen } from "./features/flashcard/FlashcardScreen";
import { LibraryScreen } from "./features/library/LibraryScreen";
import { ChatStoryEngine } from "./features/chat/ChatStoryEngine";

// ═══════════════════════════════════════════════════════════════════════════════
// MOBILE COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function MobileStatusBar() {
  return (
    <div style={{ height: 50, background: C.white, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 22px 8px", flexShrink: 0 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5 }}>{[4,6,8,10,12].map((h, i) => <div key={i} style={{ width: 3, height: h, borderRadius: 1.5, background: i < 4 ? C.dark : C.border }} />)}</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>{[10,7,4].map((w, i) => <div key={i} style={{ width: w, height: 2, borderRadius: 1, background: i < 2 ? C.dark : C.border }} />)}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
          <div style={{ width: 22, height: 11, borderRadius: 3, border: `1.5px solid ${C.dark}`, padding: "1.5px", display: "flex" }}><div style={{ width: "82%", background: C.dark, borderRadius: 1.5 }} /></div>
          <div style={{ width: 2, height: 5, background: C.dark, borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

const M_NAV = [
  { key: "home"     as Screen, Icon: Home,       label: "Trang chủ" },
  { key: "library"  as Screen, Icon: Library,    label: "Thư viện"  },
  { key: "bloom"    as Screen, Icon: Shield,     label: "Phòng tập" },
  { key: "progress" as Screen, Icon: TrendingUp, label: "Tiến trình"},
  { key: "profile"  as Screen, Icon: User,       label: "Hồ sơ"     },
];

function MobileBottomNav({ active, onChange }: { active: Screen; onChange: (s: Screen) => void }) {
  return (
    <div style={{ height: 56, background: C.white, borderTop: `0.5px solid ${C.border}`, display: "flex", flexShrink: 0 }}>
      {M_NAV.map(({ key, Icon, label }) => (
        <button key={key} onClick={() => onChange(key)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", color: active === key ? C.teal : C.muted }}>
          <Icon size={20} strokeWidth={active === key ? 2.5 : 1.8} />
          <span style={{ fontSize: 9, fontWeight: active === key ? 600 : 400 }}>{label}</span>
        </button>
      ))}
    </div>
  );
}

function MobileHomeScreen({ onChat }: { onChat: () => void }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg }}>
      <div style={{ background: C.white, padding: "10px 18px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, background: C.teal, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>🐼</div>
          <div><div style={{ fontSize: 10, color: C.muted }}>Chào buổi sáng 👋</div><div style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>Nguyễn Minh Anh</div></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: "#fff4ee", color: C.orange, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4 }}><Flame size={12} /> 14</div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.teal, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}>MA</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ background: `linear-gradient(135deg, ${C.teal} 0%, #0e7490 100%)`, borderRadius: 18, padding: "20px 18px 18px", position: "relative", overflow: "hidden", minHeight: 206, flexShrink: 0 }}>
          <div style={{ position: "absolute", right: -16, bottom: -12, fontSize: 90, opacity: 0.12, lineHeight: 1, pointerEvents: "none" }}>🐼</div>
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.75)", marginBottom: 4 }}>Thử thách của Ngọc Hoàng · Chương 4</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.35, marginBottom: 12 }}>Tiếp tục hành trình<br />của Wei Lin!</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ background: "rgba(255,255,255,.2)", color: "#fff", fontSize: 9, padding: "3px 9px", borderRadius: 20, fontWeight: 600 }}>HSK 1</span>
              <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,.25)", borderRadius: 20, maxWidth: 120 }}><div style={{ height: 5, borderRadius: 20, background: C.orange, width: "68%" }} /></div>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,.9)", fontWeight: 600 }}>68%</span>
            </div>
            <button onClick={onChat} style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 24, padding: "11px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 154, boxShadow: "0 8px 18px rgba(249,115,22,.28)", position: "relative", zIndex: 2 }}>▶ Tiếp tục chơi</button>
          </div>
        </div>
        <div style={{ background: "#fffbf0", border: `0.5px solid #fde8c0`, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, background: C.orange, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Flame size={20} color="#fff" /></div>
          <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 700, color: C.dark, marginBottom: 2 }}>Thử thách hàng ngày <span style={{ background: "#fde8c0", color: "#854f0b", fontSize: 8, padding: "1px 6px", borderRadius: 20, marginLeft: 4, fontWeight: 600 }}>Mới</span></div><div style={{ fontSize: 10, color: "#8a6830" }}>Hoàn thành 3 cảnh trong câu chuyện hôm nay</div></div>
          <div style={{ background: C.orange, color: "#fff", fontSize: 10, fontWeight: 700, padding: "5px 10px", borderRadius: 20, display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}><Zap size={10} /> +50</div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}><span style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>Thư viện câu chuyện</span><span style={{ fontSize: 11, color: C.teal }}>Xem tất cả ›</span></div>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" as const }}>
            {LIBRARY.map((s, i) => (
              <div key={i} style={{ flexShrink: 0, width: 116, background: C.white, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden", cursor: "pointer" }}>
                <div style={{ height: 68, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: 28 }}>{s.emoji}</span>
                  {s.premium && <div style={{ position: "absolute", top: 5, right: 5 }}><Lock size={11} color="rgba(255,255,255,.85)" /></div>}
                </div>
                <div style={{ padding: "8px 9px" }}><div style={{ fontSize: 10, fontWeight: 600, color: C.dark, marginBottom: 5, lineHeight: 1.35 }}>{s.title}</div><div style={{ display: "flex", gap: 4 }}><span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 20, background: C.tealBg, color: C.teal, fontWeight: 600 }}>{s.hsk}</span><span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 20, background: C.purpleBg, color: C.purple, fontWeight: 600 }}>{s.lv}</span></div></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[{ icon: "📚", bg: "#eef8fa", val: "1,247", lbl: "Từ đã học" }, { icon: "🎮", bg: "#fff4ee", val: "8", lbl: "Câu chuyện" }, { icon: "⚡", bg: "#fffbf0", val: "3,890", lbl: "Tổng XP" }].map((s, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 14, border: `0.5px solid ${C.border}`, padding: "14px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.dark }}>{s.val}</div>
              <div style={{ fontSize: 9, color: C.faint, textAlign: "center" }}>{s.lbl}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fffbf0", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 8, border: `0.5px solid #fde8c0` }}>
          <Flame size={16} color={C.orange} />
          <span style={{ fontSize: 12, color: "#8a6830" }}><strong style={{ color: C.dark }}>14 ngày streak 🔥</strong> — Còn 6 ngày đến huy hiệu 20 ngày!</span>
        </div>
      </div>
    </div>
  );
}

function MobileChatScreen({ onHome }: { onHome: () => void }) {
  return <ChatStoryEngine onHome={onHome} />;
}

function MobileBloomScreen() {
  const [mode, setMode] = useState<"bloom" | "flashcard">("bloom");
  const [stage, setStage] = useState(0), [complete, setComplete] = useState(false);
  const [pinyinOn, setPinyinOn] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }, [stage]);

  const tabBtn = (m: "bloom" | "flashcard", label: string) => (
    <button onClick={() => setMode(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", border: "none", background: mode === m ? C.white : "none", color: mode === m ? C.dark : C.muted, boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,.09)" : "none", transition: "all .15s" }}>{label}</button>
  );

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.bg }}>
      {/* Header */}
      <div style={{ background: C.white, borderBottom: `0.5px solid ${C.border}`, padding: "12px 16px 10px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>Phòng tập</div>
          {mode === "bloom" && (
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <button onClick={() => setPinyinOn(v => !v)} style={{ display: "flex", alignItems: "center", gap: 4, background: pinyinOn ? C.purpleBg : C.bg, border: `0.5px solid ${pinyinOn ? "#ddd8f9" : C.border}`, borderRadius: 20, padding: "4px 10px", fontSize: 10, color: pinyinOn ? C.purple : C.muted, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
                {pinyinOn ? <Eye size={11} /> : <EyeOff size={11} />} Pinyin
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 4, background: C.greenBg, border: `0.5px solid ${C.greenBorder}`, borderRadius: 20, padding: "4px 10px", fontSize: 10, color: C.greenDim, fontWeight: 600 }}><Zap size={11} /> +{(stage+1)*10} XP</div>
            </div>
          )}
        </div>
        {/* Mode tabs */}
        <div style={{ background: C.bg, borderRadius: 10, padding: "3px", display: "flex", gap: 2, marginBottom: mode === "bloom" ? 10 : 0 }}>
          {tabBtn("bloom", "🧠 BLOOM")}
          {tabBtn("flashcard", "🃏 Flashcard")}
        </div>
        {/* Bloom stage indicators — only in bloom mode */}
        {mode === "bloom" && (
          <div style={{ display: "flex", gap: 6 }}>
            {BLOOM_STAGES.map((bs, i) => { const Icon = BLOOM_ICONS[i], isDone = complete || i < stage, isActive = !complete && i === stage; return <div key={i} style={{ flex: 1, padding: "8px 4px 7px", borderRadius: 10, textAlign: "center", background: isDone ? C.greenBg : isActive ? C.tealBg : C.bg, border: `0.5px solid ${isDone ? C.greenBorder : isActive ? "#bdeaf0" : C.border}` }}><div style={{ color: isDone ? C.greenDim : isActive ? C.teal : C.muted, marginBottom: 3, display: "flex", justifyContent: "center" }}><Icon size={13} /></div><div style={{ fontSize: 10, fontWeight: 600, color: isDone ? C.greenDim : isActive ? C.teal : C.muted }}>{bs.label}</div></div>; })}
          </div>
        )}
      </div>

      {mode === "flashcard" ? (
        <FlashcardScreen compact />
      ) : (
        <>
          <div style={{ height: 3, background: C.border, flexShrink: 0 }}><div style={{ height: 3, background: C.teal, width: `${Math.round(((stage+1)/4)*100)}%`, transition: "width .35s" }} /></div>
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 16px 28px", background: C.dBg }}>
            {complete ? (
              <div style={{ textAlign: "center", paddingTop: 24 }}>
                <div style={{ fontSize: 64, marginBottom: 12 }}>🏆</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.dText, marginBottom: 6 }}>Hoàn thành 4 cấp độ!</div>
                <div style={{ fontSize: 12, color: C.dSub, marginBottom: 22 }}>Bạn đã thành thạo từ vựng Chương 4</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 22 }}>
                  {[{ val: "+40", sub: "XP kiếm được", bg: C.greenBg, bdr: C.greenBorder, col: C.greenDim }, { val: "7", sub: "Từ đã nắm", bg: C.purpleBg, bdr: "#ddd8f9", col: C.purple }].map((s, i) => <div key={i} style={{ background: s.bg, border: `0.5px solid ${s.bdr}`, borderRadius: 14, padding: "12px 22px", textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 700, color: s.col }}>{s.val}</div><div style={{ fontSize: 10, color: C.muted }}>{s.sub}</div></div>)}
                </div>
                <button onClick={() => { setStage(0); setComplete(false); }} style={{ width: "100%", background: C.teal, color: "#fff", border: "none", borderRadius: 14, padding: 14, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Luyện lại từ đầu</button>
              </div>
            ) : <BloomContent key={stage} stage={stage} onNext={() => setStage(s => s+1)} onComplete={() => setComplete(true)} pinyinOn={pinyinOn} />}
          </div>
        </>
      )}
    </div>
  );
}

function MobileProgressWrapper() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ background: C.white, padding: "12px 16px", borderBottom: `0.5px solid ${C.border}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>Tiến trình học tập</div>
        <div style={{ background: "#fff4ee", color: C.orange, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4 }}><Flame size={12} /> 14 ngày</div>
      </div>
      <ProgressScreen />
    </div>
  );
}

function MobileProfileScreen() {
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

function MobileApp({ screen, setScreen }: { screen: Screen; setScreen: (s: Screen) => void }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(160deg,#0f172a 0%,#1e293b 50%,#0f2d4a 100%)", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "20px 0" }}>
      <div style={{ width: 375, height: 812, borderRadius: 44, overflow: "hidden", boxShadow: "0 48px 96px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.09)", display: "flex", flexDirection: "column", position: "relative", background: C.bg }}>
        <MobileStatusBar />
        <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          {screen === "home"     && <MobileHomeScreen onChat={() => setScreen("chat")} />}
          {screen === "library"  && <LibraryScreen onOpenStory={() => setScreen("chat")} />}
          {screen === "chat"     && <MobileChatScreen onHome={() => setScreen("home")} />}
          {screen === "bloom"    && <MobileBloomScreen />}
          {screen === "progress" && <MobileProgressWrapper />}
          {screen === "profile"  && <MobileProfileScreen />}
        </div>
        <MobileBottomNav active={screen} onChange={setScreen} />
        <div style={{ height: 28, background: C.white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ width: 120, height: 4, background: C.dark, borderRadius: 2, opacity: 0.14 }} />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DESKTOP COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

const D_NAV = [
  { key: "home"     as Screen, Icon: Home,       label: "Trang chủ"  },
  { key: "library"  as Screen, Icon: Library,    label: "Thư viện"   },
  { key: "chat"     as Screen, Icon: Castle,     label: "Câu chuyện" },
  { key: "bloom"    as Screen, Icon: Shield,     label: "Phòng tập"  },
  { key: "progress" as Screen, Icon: TrendingUp, label: "Tiến trình" },
  { key: "profile"  as Screen, Icon: User,       label: "Hồ sơ"      },
];

function DesktopSidebar({ active, onChange }: { active: Screen; onChange: (s: Screen) => void }) {
  return (
    <aside style={{ width: 220, height: "100vh", background: C.white, borderRight: `0.5px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ padding: "22px 18px 18px", display: "flex", alignItems: "center", gap: 9, borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ width: 34, height: 34, background: C.teal, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>🐼</div>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.dark }}>StoryLoop</span>
      </div>
      <div style={{ padding: "10px 0", flex: 1 }}>
        {D_NAV.map(({ key, Icon, label }) => (
          <button key={key} onClick={() => onChange(key)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", fontSize: 13, cursor: "pointer", fontFamily: "inherit", width: "100%", textAlign: "left", background: active === key ? C.tealBg : "none", color: active === key ? C.teal : C.muted, borderTop: "none", borderRight: "none", borderBottom: "none", borderLeft: `3px solid ${active === key ? C.teal : "transparent"}`, fontWeight: active === key ? 600 : 400, transition: "all .15s" }}
            onMouseEnter={e => { if (active !== key) e.currentTarget.style.background = C.bg; }}
            onMouseLeave={e => { if (active !== key) e.currentTarget.style.background = "none"; }}>
            <Icon size={17} strokeWidth={active === key ? 2.5 : 1.8} />
            {label}
          </button>
        ))}
      </div>
      <div style={{ padding: "14px 16px", borderTop: `0.5px solid ${C.border}` }}>
        <div style={{ background: "#fff4ee", borderRadius: 12, padding: "11px 13px", display: "flex", alignItems: "center", gap: 9 }}>
          <Flame size={16} color={C.orange} />
          <div><div style={{ fontSize: 12, fontWeight: 700, color: C.dark }}>14 ngày streak</div><div style={{ fontSize: 10, color: C.muted }}>Giữ vững mỗi ngày!</div></div>
        </div>
      </div>
    </aside>
  );
}

function DesktopTopbar({ title, onBack, right }: { title: string; onBack?: () => void; right?: React.ReactNode }) {
  return (
    <div style={{ height: 58, background: C.white, borderBottom: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {onBack && <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontFamily: "inherit", padding: 0 }}><ArrowLeft size={16} /> Quay lại</button>}
        {onBack && <span style={{ color: C.border }}>|</span>}
        <span style={{ fontSize: 15, fontWeight: 700, color: C.dark }}>{title}</span>
        {right}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ background: "#fff4ee", color: C.orange, fontSize: 12, fontWeight: 700, padding: "5px 13px", borderRadius: 20, display: "flex", alignItems: "center", gap: 5 }}><Flame size={13} /> 14 ngày streak</div>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.teal, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>MA</div>
      </div>
    </div>
  );
}

function DesktopHomeScreen({ onChat }: { onChat: () => void }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title="Chào buổi sáng, Nguyễn Minh Anh 👋" />
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px", background: C.bg }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, marginBottom: 24 }}>
          {/* Left: Hero + Continue */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: `linear-gradient(135deg, ${C.teal} 0%, #0e7490 100%)`, borderRadius: 18, padding: "28px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -20, bottom: -20, fontSize: 130, opacity: 0.1, lineHeight: 1 }}>🐼</div>
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.8)", marginBottom: 6, fontWeight: 500 }}>Thử thách của Ngọc Hoàng · Chương 4</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 16 }}>Tiếp tục hành trình<br />của Wei Lin!</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                  <span style={{ background: "rgba(255,255,255,.2)", color: "#fff", fontSize: 11, padding: "4px 11px", borderRadius: 20, fontWeight: 600 }}>HSK 1</span>
                  <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,.25)", borderRadius: 20, maxWidth: 200 }}><div style={{ height: 6, borderRadius: 20, background: C.orange, width: "68%" }} /></div>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,.9)", fontWeight: 600 }}>68% hoàn thành</span>
                </div>
                <button onClick={onChat} style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 28, padding: "13px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8 }}>▶ Tiếp tục chơi ngay</button>
              </div>
            </div>
            <div style={{ background: C.white, borderRadius: 16, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
              <div style={{ display: "flex", gap: 0 }}>
                <div style={{ width: 100, background: C.purple, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, flexShrink: 0 }}>🏯</div>
                <div style={{ padding: "16px 20px", flex: 1 }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 8 }}><span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: C.tealBg, color: C.teal, fontWeight: 600 }}>HSK 1</span><span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: C.purpleBg, color: C.purple, fontWeight: 600 }}>Beginner</span></div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 4 }}>Thử thách của Ngọc Hoàng</div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 8 }}>Nhân vật: Wei Lin · Chương 4/12 · ~12 phút</div>
                  <div style={{ fontSize: 12, color: C.faint, lineHeight: 1.6, fontStyle: "italic" }}>&ldquo;Hoàng đế cần người tìm viên ngọc đã mất — con đường phía trước đầy hiểm nguy...&rdquo;</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Stats + Daily */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[{ icon: "📚", bg: "#eef8fa", val: "1,247", lbl: "Từ đã học" }, { icon: "🎮", bg: "#fff4ee", val: "8", lbl: "Câu chuyện" }, { icon: "⚡", bg: "#fffbf0", val: "3,890", lbl: "Tổng XP" }, { icon: "🏆", bg: "#fffbeb", val: "5/10", lbl: "Thành tích" }].map((s, i) => (
                <div key={i} style={{ background: C.white, borderRadius: 14, border: `0.5px solid ${C.border}`, padding: "14px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>{s.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.dark }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: C.faint }}>{s.lbl}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#fffbf0", border: `0.5px solid #fde8c0`, borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, background: C.orange, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Flame size={22} color="#fff" /></div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 3 }}>Thử thách hàng ngày <span style={{ background: "#fde8c0", color: "#854f0b", fontSize: 9, padding: "1px 7px", borderRadius: 20, marginLeft: 4, fontWeight: 600 }}>Mới</span></div><div style={{ fontSize: 11, color: "#8a6830" }}>Hoàn thành 3 cảnh trong câu chuyện hôm nay</div></div>
              <div style={{ background: C.orange, color: "#fff", fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}><Zap size={12} /> +50 XP</div>
            </div>
            <div style={{ background: "#fffbf0", borderRadius: 14, padding: "13px 16px", display: "flex", alignItems: "center", gap: 8, border: `0.5px solid #fde8c0` }}>
              <Flame size={16} color={C.orange} />
              <span style={{ fontSize: 12, color: "#8a6830" }}><strong style={{ color: C.dark }}>14 ngày streak 🔥</strong> — Còn 6 ngày đến huy hiệu 20 ngày!</span>
            </div>
          </div>
        </div>
        {/* Library grid */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}><span style={{ fontSize: 15, fontWeight: 700, color: C.dark }}>Thư viện câu chuyện</span><span style={{ fontSize: 12, color: C.teal, cursor: "pointer", fontWeight: 500 }}>Xem tất cả ›</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 }}>
            {LIBRARY.map((s, i) => (
              <div key={i} style={{ background: C.white, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = C.teal)} onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
                <div style={{ height: 80, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: 32 }}>{s.emoji}</span>
                  {s.premium && <div style={{ position: "absolute", top: 6, right: 6 }}><Lock size={12} color="rgba(255,255,255,.85)" /></div>}
                </div>
                <div style={{ padding: "10px 11px" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.dark, marginBottom: 6, lineHeight: 1.35 }}>{s.title}</div>
                  <div style={{ display: "flex", gap: 5 }}><span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 20, background: C.tealBg, color: C.teal, fontWeight: 600 }}>{s.hsk}</span><span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 20, background: C.purpleBg, color: C.purple, fontWeight: 600 }}>{s.lv}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopChatScreen({ onHome }: { onHome: () => void }) {
  const [activeVocab, setActiveVocab] = useState<string | null>(null);

  const sidePanel = (
    <div style={{ width: 260, background: "#f9fafb", borderLeft: `0.5px solid ${C.border}`, display: "flex", flexDirection: "column", overflowY: "auto", flexShrink: 0 }}>
      <div style={{ padding: "14px 16px", borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 4 }}>Thử thách của Ngọc Hoàng</div>
        <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.55, marginBottom: 8 }}>Nhập vai hội thoại với các nhân vật trong Thiên Đình để học tiếng Trung HSK1.</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
          {["Thần thoại", "Phiêu lưu", "HSK 1"].map(t => (
            <span key={t} style={{ background: C.purpleBg, border: `0.5px solid #ddd8f9`, borderRadius: 20, padding: "3px 9px", fontSize: 10, color: C.purple }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "12px 16px" }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: C.faint, letterSpacing: ".06em", textTransform: "uppercase" as const, marginBottom: 10, display: "flex", alignItems: "center", gap: 4 }}><BookOpen size={11} /> Từ vựng HSK1</div>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5, marginBottom: 8 }}>
          {Object.entries(VOCAB_MAP).map(([v, def]) => (
            <button key={v} onClick={() => setActiveVocab(activeVocab === v ? null : v)}
              style={{ background: activeVocab === v ? C.purple : C.purpleBg, borderRadius: 20, padding: "3px 9px", fontSize: 12, color: activeVocab === v ? "#fff" : "#5b33a8", border: `0.5px solid #ddd8f9`, cursor: "pointer", fontFamily: "inherit" }}>
              {v}
            </button>
          ))}
        </div>
        {activeVocab && (
          <div style={{ background: C.white, border: `0.5px solid #ddd8f9`, borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: C.purple, marginBottom: 3 }}>{activeVocab}</div>
            <div style={{ fontSize: 12, color: C.dark }}>{VOCAB_MAP[activeVocab]}</div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title="Câu chuyện · Thử thách của Ngọc Hoàng" onBack={onHome}
        right={<span style={{ fontSize: 11, background: C.purpleBg, padding: "3px 10px", borderRadius: 20, border: `0.5px solid #ddd8f9`, marginLeft: 8, color: C.purple }}>HSK 1</span>} />
      <ChatStoryEngine onHome={onHome} sidePanel={sidePanel} />
    </div>
  );
}

function DesktopBloomScreen() {
  const [mode, setMode] = useState<"bloom" | "flashcard">("bloom");
  const [stage, setStage] = useState(0), [complete, setComplete] = useState(false);
  const [pinyinOn, setPinyinOn] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }, [stage]);

  const tabBtn = (m: "bloom" | "flashcard", label: string) => (
    <button onClick={() => setMode(m)} style={{ padding: "6px 18px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", border: "none", background: mode === m ? C.white : "none", color: mode === m ? C.dark : C.muted, boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,.09)" : "none", transition: "all .15s" }}>{label}</button>
  );

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title="Phòng tập"
        right={
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 16 }}>
            {/* Mode switcher */}
            <div style={{ background: C.bg, borderRadius: 10, padding: "3px", display: "flex", gap: 2 }}>
              {tabBtn("bloom", "🧠 BLOOM")}
              {tabBtn("flashcard", "🃏 Flashcard")}
            </div>
            {/* Bloom-only controls */}
            {mode === "bloom" && <>
              <button onClick={() => setPinyinOn(v => !v)} style={{ display: "flex", alignItems: "center", gap: 5, background: pinyinOn ? C.purpleBg : C.bg, border: `0.5px solid ${pinyinOn ? "#ddd8f9" : C.border}`, borderRadius: 20, padding: "5px 13px", fontSize: 12, color: pinyinOn ? C.purple : C.muted, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
                {pinyinOn ? <Eye size={13} /> : <EyeOff size={13} />} {pinyinOn ? "Pinyin: Bật" : "Pinyin: Tắt"}
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 5, background: C.greenBg, border: `0.5px solid ${C.greenBorder}`, borderRadius: 20, padding: "4px 11px", fontSize: 11, color: C.greenDim, fontWeight: 600 }}><Zap size={12} /> +{(stage+1)*10} XP</div>
            </>}
          </div>
        } />

      {mode === "flashcard" ? (
        <FlashcardScreen />
      ) : (
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* Stage panel left */}
          <div style={{ width: 200, background: C.white, borderRight: `0.5px solid ${C.border}`, flexShrink: 0, display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "16px 14px", borderBottom: `0.5px solid ${C.border}` }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: ".05em" }}>Cấp độ Bloom</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {BLOOM_STAGES.map((bs, i) => { const Icon = BLOOM_ICONS[i], isDone = complete || i < stage, isActive = !complete && i === stage; return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 11px", borderRadius: 10, background: isDone ? C.greenBg : isActive ? C.tealBg : C.bg, border: `0.5px solid ${isDone ? C.greenBorder : isActive ? "#bdeaf0" : C.border}` }}>
                    <div style={{ color: isDone ? C.greenDim : isActive ? C.teal : C.muted }}><Icon size={15} /></div>
                    <div><div style={{ fontSize: 11, fontWeight: 600, color: isDone ? C.greenDim : isActive ? C.teal : C.muted }}>{bs.label}</div><div style={{ fontSize: 9, color: isDone ? C.green : isActive ? C.teal : C.faint }}>{isDone ? "Hoàn thành ✓" : isActive ? "Đang làm..." : "Chưa mở"}</div></div>
                  </div>
                ); })}
              </div>
            </div>
            <div style={{ padding: "14px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ height: 5, background: C.border, borderRadius: 20, marginBottom: 6 }}><div style={{ height: 5, background: C.teal, width: `${Math.round(((stage+1)/4)*100)}%`, borderRadius: 20, transition: "width .35s" }} /></div>
              <div style={{ fontSize: 10, color: C.muted, textAlign: "center" }}>{stage+1}/4 cấp độ</div>
            </div>
          </div>
          {/* Content */}
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "28px", background: C.dBg }}>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              {complete ? (
                <div style={{ textAlign: "center", paddingTop: 40 }}>
                  <div style={{ fontSize: 72, marginBottom: 16 }}>🏆</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: C.dText, marginBottom: 8 }}>Hoàn thành cả 4 cấp độ!</div>
                  <div style={{ fontSize: 13, color: C.dSub, marginBottom: 28 }}>Bạn đã thành thạo từ vựng Chương 4: Cổng Thiên Đình</div>
                  <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
                    {[{ val: "+40", sub: "XP kiếm được", bg: C.greenBg, bdr: C.greenBorder, col: C.greenDim }, { val: "7", sub: "Từ đã nắm", bg: C.purpleBg, bdr: "#ddd8f9", col: C.purple }, { val: "Bloom 4", sub: "Cấp độ đạt", bg: C.tealBg, bdr: "#bdeaf0", col: C.teal }].map((s, i) => <div key={i} style={{ background: s.bg, border: `0.5px solid ${s.bdr}`, borderRadius: 14, padding: "14px 24px", textAlign: "center" }}><div style={{ fontSize: 20, fontWeight: 700, color: s.col }}>{s.val}</div><div style={{ fontSize: 10, color: C.muted, marginTop: 3 }}>{s.sub}</div></div>)}
                  </div>
                  <button onClick={() => { setStage(0); setComplete(false); }} style={{ background: C.teal, color: "#fff", border: "none", borderRadius: 14, padding: "14px 40px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Luyện lại từ đầu</button>
                </div>
              ) : <BloomContent key={stage} stage={stage} onNext={() => setStage(s => s+1)} onComplete={() => setComplete(true)} pinyinOn={pinyinOn} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopProgressWrapper() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <DesktopTopbar title="Tiến trình học tập" />
      <ProgressScreen />
    </div>
  );
}

function DesktopProfileScreen() {
  const [showPwModal, setShowPwModal] = useState(false), [showUpgrade, setShowUpgrade] = useState(false), [logoutConfirm, setLogoutConfirm] = useState(false);
  const [oldPw, setOldPw] = useState(""), [newPw, setNewPw] = useState(""), [confirmPw, setConfirmPw] = useState("");
  const [showOld, setShowOld] = useState(false), [showNew, setShowNew] = useState(false), [showConf, setShowConf] = useState(false);
  const [pwMsg, setPwMsg] = useState<{ ok: boolean; text: string } | null>(null);
  function handlePw() {
    if (!oldPw || !newPw || !confirmPw) { setPwMsg({ ok: false, text: "Vui lòng điền đầy đủ." }); return; }
    if (newPw.length < 8) { setPwMsg({ ok: false, text: "Mật khẩu mới phải có ít nhất 8 ký tự." }); return; }
    if (newPw !== confirmPw) { setPwMsg({ ok: false, text: "Mật khẩu xác nhận không khớp." }); return; }
    setPwMsg({ ok: true, text: "Đổi mật khẩu thành công!" });
    setTimeout(() => { setShowPwModal(false); setOldPw(""); setNewPw(""); setConfirmPw(""); setPwMsg(null); }, 1500);
  }
  const inp: React.CSSProperties = { width: "100%", background: C.bg, border: `0.5px solid ${C.border}`, borderRadius: 8, padding: "10px 13px", fontSize: 13, color: C.dark, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };
  const sRow: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 18px", borderBottom: `0.5px solid ${C.border}` };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
      <DesktopTopbar title="Hồ sơ cá nhân" />
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px", background: C.bg }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: `linear-gradient(135deg, ${C.teal} 0%, #0e7490 100%)`, borderRadius: 18, padding: "24px 22px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 68, height: 68, borderRadius: "50%", background: "rgba(255,255,255,.18)", border: "2px solid rgba(255,255,255,.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>🐼</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Nguyễn Minh Anh</div>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" as const, marginBottom: 6 }}><span style={{ background: C.orange, color: "#fff", fontSize: 10, padding: "3px 10px", borderRadius: 20, fontWeight: 700, display: "flex", alignItems: "center", gap: 3 }}><Crown size={10} /> Student Premium</span></div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.8)" }}>HSK 1 · 🔥 14 ngày streak · 3,890 XP</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Thông tin tài khoản</div>
              <div style={{ background: C.white, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
                {[{ icon: <User size={14} color={C.teal} />, bg: C.tealBg, lbl: "Họ và tên", val: "Nguyễn Minh Anh" }, { icon: <Phone size={14} color={C.orange} />, bg: "#fff4ee", lbl: "Số điện thoại", val: "0912 345 678" }, { icon: <Mail size={14} color={C.purple} />, bg: C.purpleBg, lbl: "Email", val: "minhanh@email.com", last: true }].map((r, i) => (
                  <div key={i} style={{ ...sRow, ...(r.last ? { borderBottom: "none" } : {}) }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 11 }}><div style={{ width: 34, height: 34, borderRadius: 9, background: r.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{r.icon}</div><div><div style={{ fontSize: 10, color: C.muted, marginBottom: 1 }}>{r.lbl}</div><div style={{ fontSize: 13, fontWeight: 500, color: C.dark }}>{r.val}</div></div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Gói đăng ký</div>
              <div style={{ background: C.white, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
                <div style={{ padding: "16px 18px", borderBottom: `0.5px solid ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 38, height: 38, borderRadius: 11, background: "linear-gradient(135deg,#f97316,#f4b432)", display: "flex", alignItems: "center", justifyContent: "center" }}><Crown size={18} color="#fff" /></div><div><div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>Student Premium</div><div style={{ fontSize: 11, color: C.muted }}>Đang hoạt động</div></div></div>
                    <span style={{ background: C.greenBg, color: C.green, fontSize: 10, padding: "3px 10px", borderRadius: 20, fontWeight: 700 }}>● Active</span>
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>{["Toàn bộ câu chuyện", "Bloom nâng cao", "Không quảng cáo"].map((f, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: C.muted }}><CheckCircle2 size={12} color={C.green} /> {f}</div>)}</div>
                </div>
                <div style={{ padding: "13px 18px", borderBottom: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Calendar size={15} color={C.muted} /><div><div style={{ fontSize: 11, color: C.muted }}>Ngày hết hạn</div><div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>12 / 01 / 2027</div></div></div>
                  <span style={{ fontSize: 12, color: C.orange, fontWeight: 600 }}>Còn 563 ngày</span>
                </div>
                <div style={{ padding: "13px 18px", display: "flex", gap: 10 }}>
                  <button onClick={() => setShowUpgrade(true)} style={{ flex: 1, background: C.orange, color: "#fff", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><Star size={14} /> Nâng cấp gói</button>
                  <button onClick={() => setShowUpgrade(true)} style={{ flex: 1, background: C.tealBg, color: C.teal, border: `0.5px solid #bdeaf0`, borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}><RefreshCw size={14} /> Gia hạn</button>
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: ".07em", textTransform: "uppercase" as const, marginBottom: 8 }}>Bảo mật & Tài khoản</div>
              <div style={{ background: C.white, borderRadius: 14, border: `0.5px solid ${C.border}`, overflow: "hidden" }}>
                <button onClick={() => setShowPwModal(true)} style={{ ...sRow, width: "100%", cursor: "pointer", background: "none", fontFamily: "inherit", textAlign: "left" as const }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}><div style={{ width: 34, height: 34, borderRadius: 9, background: "#fff4ee", display: "flex", alignItems: "center", justifyContent: "center" }}><KeyRound size={15} color={C.orange} /></div><span style={{ fontSize: 13, fontWeight: 500, color: C.dark }}>Đổi mật khẩu</span></div>
                  <ChevronRight size={15} color={C.muted} />
                </button>
                <button onClick={() => setLogoutConfirm(true)} style={{ ...sRow, borderBottom: "none", width: "100%", cursor: "pointer", background: "none", fontFamily: "inherit", textAlign: "left" as const }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}><div style={{ width: 34, height: 34, borderRadius: 9, background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center" }}><LogOut size={15} color="#e24b4a" /></div><span style={{ fontSize: 13, fontWeight: 500, color: "#e24b4a" }}>Đăng xuất</span></div>
                  <ChevronRight size={15} color="#e24b4a" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modals */}
      {showPwModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div style={{ background: C.white, borderRadius: 18, padding: "28px 26px", width: 380, boxShadow: "0 8px 40px rgba(0,0,0,.18)" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 4 }}>Đổi mật khẩu</div>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 20 }}>Nhập mật khẩu hiện tại và mật khẩu mới.</div>
            {[{ label: "Mật khẩu hiện tại", val: oldPw, set: setOldPw, show: showOld, toggle: () => setShowOld(v => !v) }, { label: "Mật khẩu mới", val: newPw, set: setNewPw, show: showNew, toggle: () => setShowNew(v => !v) }, { label: "Xác nhận mật khẩu mới", val: confirmPw, set: setConfirmPw, show: showConf, toggle: () => setShowConf(v => !v) }].map((f, i) => (
              <div key={i} style={{ marginBottom: 13 }}><div style={{ fontSize: 11, color: C.muted, marginBottom: 5 }}>{f.label}</div><div style={{ position: "relative" }}><input type={f.show ? "text" : "password"} value={f.val} onChange={e => f.set(e.target.value)} style={{ ...inp, paddingRight: 40 }} /><button onClick={f.toggle} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", padding: 0 }}>{f.show ? <EyeOff size={15} /> : <Eye size={15} />}</button></div></div>
            ))}
            {pwMsg && <div style={{ fontSize: 12, color: pwMsg.ok ? C.green : "#e24b4a", background: pwMsg.ok ? C.greenBg : "#fff1f2", border: `0.5px solid ${pwMsg.ok ? C.greenBorder : "#fecdd3"}`, borderRadius: 9, padding: "9px 12px", marginBottom: 14 }}>{pwMsg.text}</div>}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { setShowPwModal(false); setOldPw(""); setNewPw(""); setConfirmPw(""); setPwMsg(null); }} style={{ flex: 1, background: C.bg, color: C.muted, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: "11px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Huỷ</button>
              <button onClick={handlePw} style={{ flex: 1, background: C.teal, color: "#fff", border: "none", borderRadius: 10, padding: "11px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Lưu</button>
            </div>
          </div>
        </div>
      )}
      {showUpgrade && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div style={{ background: C.white, borderRadius: 18, padding: "28px 26px", width: 380, boxShadow: "0 8px 40px rgba(0,0,0,.18)" }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}><div style={{ fontSize: 36, marginBottom: 8 }}>👑</div><div style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 4 }}>Nâng cấp / Gia hạn</div><div style={{ fontSize: 12, color: C.muted }}>Chọn gói phù hợp với bạn</div></div>
            {[{ name: "Student Premium", price: "99.000đ", period: "/ tháng", highlight: false, badge: "Đang dùng" }, { name: "Pro Annual", price: "799.000đ", period: "/ năm", highlight: true, badge: "Tiết kiệm 34%" }].map((p, i) => <div key={i} style={{ border: `1.5px solid ${p.highlight ? C.orange : C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 10, background: p.highlight ? "#fff8f4" : C.white }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>{p.name}</div><span style={{ fontSize: 9, padding: "3px 8px", borderRadius: 20, background: p.highlight ? C.orange : C.greenBg, color: p.highlight ? "#fff" : C.green, fontWeight: 700 }}>{p.badge}</span></div><div style={{ fontSize: 20, fontWeight: 700, color: p.highlight ? C.orange : C.teal }}>{p.price}<span style={{ fontSize: 12, fontWeight: 400, color: C.muted }}>{p.period}</span></div></div>)}
            <button style={{ width: "100%", background: C.orange, color: "#fff", border: "none", borderRadius: 12, padding: "13px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginBottom: 10 }}>Tiến hành thanh toán</button>
            <button onClick={() => setShowUpgrade(false)} style={{ width: "100%", background: "none", color: C.muted, border: "none", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Để sau</button>
          </div>
        </div>
      )}
      {logoutConfirm && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div style={{ background: C.white, borderRadius: 18, padding: "32px 28px", width: 320, boxShadow: "0 8px 40px rgba(0,0,0,.18)", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>👋</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 8 }}>Đăng xuất?</div>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 24 }}>Bạn có chắc muốn đăng xuất khỏi tài khoản không?</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setLogoutConfirm(false)} style={{ flex: 1, background: C.bg, color: C.muted, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: "11px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Huỷ</button>
              <button style={{ flex: 1, background: "#e24b4a", color: "#fff", border: "none", borderRadius: 10, padding: "11px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Đăng xuất</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopApp({ screen, setScreen }: { screen: Screen; setScreen: (s: Screen) => void }) {
  return (
    <div style={{ display: "flex", height: "100vh", background: C.bg, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <DesktopSidebar active={screen} onChange={setScreen} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {screen === "home"     && <DesktopHomeScreen onChat={() => setScreen("chat")} />}
        {screen === "library"  && <LibraryScreen onOpenStory={() => setScreen("chat")} />}
        {screen === "chat"     && <DesktopChatScreen onHome={() => setScreen("home")} />}
        {screen === "bloom"    && <DesktopBloomScreen />}
        {screen === "progress" && <DesktopProgressWrapper />}
        {screen === "profile"  && <DesktopProfileScreen />}
      </div>
    </div>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  const isMobile = useIsMobile();
  const [screen, setScreen] = useState<Screen>("home");
  return isMobile
    ? <MobileApp screen={screen} setScreen={setScreen} />
    : <DesktopApp screen={screen} setScreen={setScreen} />;
}
