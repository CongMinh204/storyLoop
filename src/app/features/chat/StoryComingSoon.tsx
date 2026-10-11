import { ArrowLeft } from "lucide-react";
import { C } from "../../lib/colors";
import type { StoryEntry } from "../../types";

export function StoryComingSoon({ story, onHome }: { story: StoryEntry; onHome: () => void }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: 24, background: "#f0f2f7", textAlign: "center" }}>
      <div style={{ width: 64, height: 64, borderRadius: 18, background: story.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>{story.emoji}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: C.dark }}>{story.title}</div>
      <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, maxWidth: 260 }}>Câu chuyện này sắp ra mắt. Bạn hãy thử truyện khác trong Thư viện nhé!</div>
      <button onClick={onHome} style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6, background: C.purple, color: "#fff", border: "none", borderRadius: 20, padding: "8px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
        <ArrowLeft size={14} /> Về trang chủ
      </button>
    </div>
  );
}
