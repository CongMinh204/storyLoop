import { Square, Volume2 } from "lucide-react";
import { C } from "../../lib/colors";
import { speechText, useSpeech } from "../../lib/speak";

// Nút loa phát âm một đoạn tiếng Trung. Nằm trên thẻ lật nên chặn sự kiện bấm nổi lên để không làm thẻ lật.
// Không có giọng đọc tiếng Trung trên máy thì không hiện (FlashcardScreen báo riêng một dòng giải thích).
export function SpeakButton({ text, size = 36, focusable = true }: { text: string; size?: number; focusable?: boolean }) {
  const { available, speaking, speak } = useSpeech();
  if (!available) return null;
  const on = speaking === speechText(text);
  return (
    <button type="button" tabIndex={focusable ? 0 : -1}
      onClick={e => { e.stopPropagation(); speak(text); }}
      aria-label={on ? "Dừng phát âm" : "Nghe phát âm"} aria-pressed={on} title={on ? "Dừng" : "Nghe phát âm"}
      style={{ width: size, height: size, flexShrink: 0, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        background: on ? C.primaryDeep : C.primaryBg, border: `0.5px solid ${on ? C.primaryDeep : C.primaryBorder}`, color: on ? C.onFill : C.primaryText, padding: 0, transition: "background .15s, color .15s" }}>
      {on ? <Square size={Math.round(size * 0.36)} fill="currentColor" /> : <Volume2 size={Math.round(size * 0.5)} />}
    </button>
  );
}
