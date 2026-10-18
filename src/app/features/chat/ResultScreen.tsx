import { C } from "../../lib/colors";

export function ResultScreen({ score, total, onRestart, onHome }: { score: number; total: number; onRestart: () => void; onHome: () => void }) {
  const stars = score >= total ? 3 : score >= Math.ceil(total / 2) ? 2 : 1;
  const label = score === total ? "Hoàn hảo! 🏆" : score >= 3 ? "Rất tốt! 🥈" : "Cố gắng thêm nhé!";
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px", background: C.bg, gap: 14 }}>
      <div style={{ fontSize: 52 }}>{stars === 3 ? "🏆" : stars === 2 ? "🥈" : "🎯"}</div>
      <div style={{ fontSize: 18, fontWeight: 800, color: C.ink }}>{label}</div>
      <div style={{ fontSize: 13, color: C.inkMuted }}>{score}/{total} câu trả lời đúng · {"⭐".repeat(stars)}</div>
      <div style={{ display: "flex", gap: 10 }}>
        {[
          { val: `${score}`, lbl: "Đúng", bg: C.successBg, bdr: C.successBorder, col: C.success },
          { val: `${total - score}`, lbl: "Sai", bg: C.dangerBg, bdr: C.dangerBorder, col: C.danger },
        ].map((s, i) => (
          <div key={i} style={{ background: s.bg, border: `0.5px solid ${s.bdr}`, borderRadius: 14, padding: "14px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: s.col }}>{s.val}</div>
            <div style={{ fontSize: 11, color: C.inkMuted }}>{s.lbl}</div>
          </div>
        ))}
      </div>
      <button onClick={onRestart} style={{ width: "100%", maxWidth: 280, background: C.ink, color: C.onFill, border: "none", borderRadius: 14, padding: "13px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
        Chơi lại từ đầu
      </button>
      <button onClick={onHome} style={{ width: "100%", maxWidth: 280, background: C.bg, color: C.inkMuted, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: "11px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
        Về trang chủ
      </button>
    </div>
  );
}
