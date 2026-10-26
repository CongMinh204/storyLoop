import { Library } from "lucide-react";
import { C } from "../../lib/colors";
import type { StoryEntry } from "../../types";

// Truyện chưa có kịch bản. Nút "Quay lại" (thanh trên desktop) về màn vừa đến; nút ở giữa dẫn sang Thư viện để chọn truyện khác.
export function StoryComingSoon({ story, onLibrary }: { story: StoryEntry; onLibrary: () => void }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: 24, background: C.bgSunken, textAlign: "center" }}>
      <div style={{ width: 64, height: 64, borderRadius: 18, background: story.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>{story.emoji}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: C.ink }}>{story.title}</div>
      <div style={{ fontSize: 12, color: C.inkMuted, lineHeight: 1.6, maxWidth: 260 }}>Câu chuyện này sắp ra mắt. Bạn hãy thử truyện khác trong Thư viện nhé!</div>
      <button onClick={onLibrary} style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6, background: C.ink, color: C.onFill, border: "none", borderRadius: 20, padding: "8px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
        <Library size={14} /> Chọn truyện khác
      </button>
    </div>
  );
}
