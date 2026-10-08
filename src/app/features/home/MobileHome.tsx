import { Flame, Lock, Zap } from "lucide-react";
import { C } from "../../lib/colors";
import { LIBRARY } from "../../data/library";

export function MobileHomeScreen({ onChat }: { onChat: () => void }) {
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
