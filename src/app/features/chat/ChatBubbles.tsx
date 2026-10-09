import { C } from "../../lib/colors";
import type { ChatChoice, ChatTurn, PickOption, StoryChoice } from "../../types";

export function SituationBubble({ text }: { text: string }) {
  return (
    <div style={{ textAlign: "center", padding: "0 8px" }}>
      <span style={{ background: "#e8ecf5", borderRadius: 20, padding: "5px 14px", fontSize: 10, color: C.muted, fontWeight: 600 }}>{text}</span>
    </div>
  );
}

export function NpcBubble({ turn, pinyinOn }: { turn: Pick<ChatTurn, "speaker" | "emoji" | "zh" | "py" | "vi">; pinyinOn: boolean }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.purple + "22", border: `1.5px solid ${C.purple}44`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
        {turn.emoji}
      </div>
      <div style={{ maxWidth: "78%" }}>
        <div style={{ fontSize: 10, color: C.muted, marginBottom: 3, fontWeight: 600 }}>{turn.speaker}</div>
        <div style={{ background: C.white, borderRadius: "4px 16px 16px 16px", padding: "11px 14px", border: `0.5px solid ${C.border}`, boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
          <div style={{ fontSize: 15, color: C.dark, lineHeight: 1.6, marginBottom: pinyinOn ? 5 : 4 }}>{turn.zh}</div>
          {pinyinOn && <div style={{ fontSize: 10, color: C.faint, lineHeight: 1.6, marginBottom: 5 }}>{turn.py}</div>}
          <div style={{ fontSize: 11, color: C.muted, paddingTop: 5, borderTop: `0.5px solid ${C.border}`, fontStyle: "italic", lineHeight: 1.5 }}>{turn.vi}</div>
        </div>
      </div>
    </div>
  );
}

export function NpcReplyBubble({ text, emoji }: { text: string; emoji: string }) {
  const lines = text.split("\n");
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.purple + "22", border: `1.5px solid ${C.purple}44`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
        {emoji}
      </div>
      <div style={{ background: C.white, borderRadius: "4px 16px 16px 16px", padding: "11px 14px", border: `0.5px solid ${C.border}`, boxShadow: "0 1px 4px rgba(0,0,0,.07)", maxWidth: "78%" }}>
        {lines.map((l, i) => <div key={i} style={{ fontSize: i === 0 ? 14 : 11, color: i === 0 ? C.dark : C.muted, lineHeight: 1.6, fontStyle: i > 0 ? "italic" : "normal" }}>{l}</div>)}
      </div>
    </div>
  );
}

export function PlayerBubble({ choice, pinyinOn }: { choice: ChatChoice; pinyinOn: boolean }) {
  const ok = choice.correct;
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div style={{ background: ok ? "#e6f9f0" : "#fff1f2", border: `0.5px solid ${ok ? "#86efac" : "#fca5a5"}`, borderRadius: "16px 4px 16px 16px", padding: "11px 14px", maxWidth: "78%" }}>
        <div style={{ fontSize: 14, color: C.dark, lineHeight: 1.5, marginBottom: pinyinOn ? 4 : 0 }}>{choice.zh}</div>
        {pinyinOn && <div style={{ fontSize: 10, color: C.faint, lineHeight: 1.5 }}>{choice.py}</div>}
      </div>
    </div>
  );
}

export function AnalysisBubble({ choice }: { choice: ChatChoice }) {
  const ok = choice.correct;
  return (
    <div style={{ background: ok ? "#f0fdf4" : "#fff8f8", border: `1px solid ${ok ? "#86efac" : "#fca5a5"}`, borderRadius: 14, padding: "12px 14px" }}>
      <div style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 8 }}>
        <span style={{ fontSize: 16, flexShrink: 0 }}>{ok ? "✅" : "❌"}</span>
        <div style={{ fontSize: 12, color: ok ? "#166534" : "#991b1b", lineHeight: 1.55, fontWeight: 600 }}>{choice.analysis}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {choice.vocab.map(v => (
          <div key={v.word} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.7)", borderRadius: 8, padding: "6px 10px" }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.purple, minWidth: 48 }}>{v.word}</span>
            <span style={{ fontSize: 10, color: C.teal, fontStyle: "italic", minWidth: 72 }}>{v.py}</span>
            <span style={{ fontSize: 11, color: C.dark }}>{v.vi}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Bong bóng cho truyện rẽ nhánh (BranchingStoryEngine) ─────────────────────

// Lời dẫn truyện dài (câu ngắn như mốc thời gian dùng SituationBubble)
export function NarrationBubble({ text }: { text: string }) {
  return (
    <div style={{ textAlign: "center", padding: "0 18px", fontSize: 11, color: C.muted, fontStyle: "italic", lineHeight: 1.6 }}>{text}</div>
  );
}

// Chữ viết hoặc âm thanh xuất hiện trong truyện, vd. dòng chữ trên vòng cổ
export function QuoteBubble({ zh, py, vi, pinyinOn }: { zh: string; py?: string; vi?: string; pinyinOn: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ background: C.white, border: `1px dashed ${C.border}`, borderRadius: 14, padding: "10px 16px", textAlign: "center", maxWidth: "85%" }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: C.dark, lineHeight: 1.6 }}>{zh}</div>
        {pinyinOn && py && <div style={{ fontSize: 10, color: C.faint, lineHeight: 1.6 }}>{py}</div>}
        {vi && <div style={{ fontSize: 11, color: C.muted, fontStyle: "italic", lineHeight: 1.5, marginTop: 3 }}>{vi}</div>}
      </div>
    </div>
  );
}

// Câu của người chơi: không tô xanh/đỏ vì truyện rẽ nhánh không chấm đúng sai
export function PlayerLineBubble({ zh, py, vi, pinyinOn }: { zh: string; py: string; vi: string; pinyinOn: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div style={{ background: C.purpleBg, border: `0.5px solid #ddd8f9`, borderRadius: "16px 4px 16px 16px", padding: "11px 14px", maxWidth: "78%" }}>
        <div style={{ fontSize: 14, color: C.dark, lineHeight: 1.5, marginBottom: pinyinOn && py ? 4 : 0 }}>{zh}</div>
        {pinyinOn && py && <div style={{ fontSize: 10, color: C.faint, lineHeight: 1.5 }}>{py}</div>}
        {vi && <div style={{ fontSize: 11, color: C.muted, paddingTop: 5, marginTop: 5, borderTop: `0.5px solid #ddd8f9`, fontStyle: "italic", lineHeight: 1.5 }}>{vi}</div>}
      </div>
    </div>
  );
}

// Phân tích cấu trúc câu người chơi vừa chọn
export function StructureBubble({ choice }: { choice: StoryChoice }) {
  return (
    <div style={{ background: "#f5f3ff", border: `1px solid #ddd8f9`, borderRadius: 14, padding: "12px 14px" }}>
      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontSize: 15 }}>📘</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.purple, letterSpacing: ".04em" }}>PHÂN TÍCH CÂU</span>
      </div>
      <div style={{ display: "inline-block", background: C.white, border: `0.5px solid #ddd8f9`, borderRadius: 8, padding: "4px 9px", fontSize: 12, fontWeight: 700, color: "#5b33a8", marginBottom: 7 }}>{choice.analysis.structure}</div>
      <div style={{ fontSize: 12, color: C.dark, lineHeight: 1.6, marginBottom: 8 }}>{choice.analysis.explain}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {choice.vocab.map(v => (
          <div key={v.word} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.7)", borderRadius: 8, padding: "6px 10px" }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.purple, minWidth: 48 }}>{v.word}</span>
            <span style={{ fontSize: 10, color: C.teal, fontStyle: "italic", minWidth: 72 }}>{v.py}</span>
            <span style={{ fontSize: 11, color: C.dark }}>{v.vi}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Bước chọn câu của "你" (kind "pick"): có đúng/sai, truyện vẫn chạy tiếp ────

export function PlayerPickBubble({ option, pinyinOn }: { option: PickOption; pinyinOn: boolean }) {
  const ok = option.correct;
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div style={{ background: ok ? "#e6f9f0" : "#fff1f2", border: `0.5px solid ${ok ? "#86efac" : "#fca5a5"}`, borderRadius: "16px 4px 16px 16px", padding: "11px 14px", maxWidth: "78%" }}>
        <div style={{ fontSize: 14, color: C.dark, lineHeight: 1.5, marginBottom: pinyinOn ? 4 : 0 }}>{option.zh}</div>
        {pinyinOn && <div style={{ fontSize: 10, color: C.faint, lineHeight: 1.5 }}>{option.py}</div>}
      </div>
    </div>
  );
}

// Phân tích câu vừa chọn; nếu chọn sai thì chỉ ra câu đúng
export function PickAnalysisBubble({ option, correct }: { option: PickOption; correct: PickOption }) {
  const ok = option.correct;
  const vocab = ok ? option.vocab : [...option.vocab, ...correct.vocab.filter(v => !option.vocab.some(o => o.word === v.word))];
  return (
    <div style={{ background: ok ? "#f0fdf4" : "#fff8f8", border: `1px solid ${ok ? "#86efac" : "#fca5a5"}`, borderRadius: 14, padding: "12px 14px" }}>
      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 7 }}>
        <span style={{ fontSize: 16, flexShrink: 0 }}>{ok ? "✅" : "❌"}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: ok ? "#166534" : "#991b1b" }}>{ok ? "Chính xác" : "Chưa đúng"}</span>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.dark, background: "rgba(255,255,255,.8)", borderRadius: 8, padding: "2px 8px" }}>{option.analysis.structure}</span>
      </div>
      <div style={{ fontSize: 12, color: C.dark, lineHeight: 1.6, marginBottom: ok ? 8 : 6 }}>{option.analysis.explain}</div>
      {!ok && (
        <div style={{ background: "rgba(255,255,255,.8)", borderRadius: 8, padding: "7px 10px", marginBottom: 8 }}>
          <div style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginBottom: 2 }}>CÂU ĐÚNG</div>
          <div style={{ fontSize: 14, color: C.dark, fontWeight: 600 }}>{correct.zh}</div>
          <div style={{ fontSize: 10, color: C.faint }}>{correct.py}</div>
          <div style={{ fontSize: 11, color: C.muted, fontStyle: "italic" }}>{correct.vi}</div>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {vocab.map(v => (
          <div key={v.word} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.7)", borderRadius: 8, padding: "6px 10px" }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.purple, minWidth: 48 }}>{v.word}</span>
            <span style={{ fontSize: 10, color: C.teal, fontStyle: "italic", minWidth: 72 }}>{v.py}</span>
            <span style={{ fontSize: 11, color: C.dark }}>{v.vi}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
