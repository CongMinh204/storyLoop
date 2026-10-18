import { Lock } from "lucide-react";
import { C } from "../../lib/colors";
import type { StoryNode, VocabItem } from "../../types";

// Thẻ cuối truyện rẽ nhánh: tên kết thúc, các kết thúc đã mở trong lượt chơi này, từ vựng của truyện.
export function EndingCard({ ending, allEndings, seen, vocab, score, onRestart, onHome }: {
  ending: NonNullable<StoryNode["ending"]>;
  allEndings: StoryNode[];
  seen: Set<string>;
  vocab: VocabItem[];
  score: { right: number; total: number };
  onRestart: () => void;
  onHome: () => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 8px 8px", gap: 12 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: C.inkMuted, letterSpacing: ".1em" }}>KẾT THÚC</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: C.ink, textAlign: "center" }}>{ending.title}</div>
      <div style={{ fontSize: 12, color: C.inkMuted, fontStyle: "italic", marginTop: -6 }}>{ending.titleVi}</div>

      {score.total > 0 && (
        <div style={{ width: "100%", maxWidth: 340, background: C.successBg, border: `0.5px solid ${C.successBorder}`, borderRadius: 14, padding: "12px 14px", textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.success }}>{score.right}/{score.total}</div>
          <div style={{ fontSize: 11, color: C.inkMuted }}>câu bạn chọn đúng trong lượt chơi này</div>
        </div>
      )}

      <div style={{ width: "100%", maxWidth: 340, background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: "12px 14px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 8 }}>Đã mở khoá {allEndings.filter(n => seen.has(n.id)).length}/{allEndings.length} kết thúc</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {allEndings.map(n => seen.has(n.id) ? (
            <div key={n.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: C.ink }}>
              <span style={{ color: C.success }}>✓</span> {n.ending!.title} <span style={{ fontSize: 10, color: C.inkMuted }}>· {n.ending!.titleVi}</span>
            </div>
          ) : (
            <div key={n.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: C.inkFaint }}>
              <Lock size={11} /> ???
            </div>
          ))}
        </div>
      </div>

      {vocab.length > 0 && (
        <div style={{ width: "100%", maxWidth: 340, background: C.surface, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 8 }}>Từ vựng trong truyện</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {vocab.map(v => (
              <div key={v.word} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.ink, minWidth: 56 }}>{v.word}</span>
                <span style={{ fontSize: 10, color: C.primaryText, fontStyle: "italic", minWidth: 70 }}>{v.py}</span>
                <span style={{ fontSize: 11, color: C.ink }}>{v.vi}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button onClick={onRestart} style={{ width: "100%", maxWidth: 280, background: C.ink, color: C.onFill, border: "none", borderRadius: 14, padding: "13px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
        Thử kết thúc khác
      </button>
      <button onClick={onHome} style={{ width: "100%", maxWidth: 280, background: C.bg, color: C.inkMuted, border: `0.5px solid ${C.border}`, borderRadius: 14, padding: "11px 0", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
        Về trang chủ
      </button>
    </div>
  );
}
