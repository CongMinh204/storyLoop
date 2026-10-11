import { C } from "../../lib/colors";
import type { Lesson } from "../../types";

// Hàng chip chọn bài ở đầu Phòng tập, dùng chung cho tab BLOOM và Flashcard
export function LessonPicker({ lessons, value, onChange }: { lessons: Lesson[]; value: string; onChange: (id: string) => void }) {
  return (
    <div style={{ display: "flex", gap: 6, overflowX: "auto", scrollbarWidth: "none" as const }}>
      {lessons.map(l => {
        const on = l.id === value;
        return (
          <button key={l.id} onClick={() => onChange(l.id)} title={l.title}
            style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 5, background: on ? C.teal : C.bg, color: on ? "#fff" : C.muted, border: `0.5px solid ${on ? C.teal : C.border}`, borderRadius: 20, padding: "5px 12px", fontSize: 11, cursor: "pointer", fontFamily: "inherit", fontWeight: on ? 600 : 400 }}>
            <span style={{ fontSize: 13 }}>{l.emoji}</span> {l.chip}
          </button>
        );
      })}
    </div>
  );
}
