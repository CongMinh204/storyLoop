import { Brain, Layers } from "lucide-react";
import { C } from "../../lib/colors";

export type PracticeMode = "bloom" | "flashcard";

// Hai chế độ luyện của một bài. Bài không có Bloom (bộ HSK1) thì tab Bloom bị khoá.
export function ModeSwitch({ mode, bloomEnabled, onChange, touch = false }: { mode: PracticeMode; bloomEnabled: boolean; onChange: (m: PracticeMode) => void; touch?: boolean }) {
  const btn = (m: PracticeMode, label: string, Icon: typeof Brain) => {
    const off = m === "bloom" && !bloomEnabled, on = mode === m;
    return (
      <button key={m} type="button" aria-pressed={on} disabled={off} title={off ? "Bộ này chỉ có Flashcard" : undefined} onClick={() => onChange(m)}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: touch ? 44 : 38, border: "none", borderRadius: 12, fontFamily: "inherit", fontSize: 14, fontWeight: on ? 700 : 600, cursor: off ? "not-allowed" : "pointer", opacity: off ? 0.4 : 1, background: on ? C.surface : "transparent", color: on ? C.ink : C.inkMuted, boxShadow: on ? "0 1px 4px rgba(25,62,65,.14)" : "none", transition: "background .15s" }}>
        <Icon size={16} aria-hidden /> {label}
      </button>
    );
  };
  return (
    <div role="group" aria-label="Chế độ luyện" style={{ display: "flex", gap: 2, padding: 4, borderRadius: 16, background: C.bgSunken }}>
      {btn("bloom", "Bloom", Brain)}
      {btn("flashcard", "Flashcard", Layers)}
    </div>
  );
}
