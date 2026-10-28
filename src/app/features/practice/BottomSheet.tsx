import { useEffect, useRef, type ReactNode } from "react";
import { ChevronRight, Brain, Layers, X } from "lucide-react";
import { C } from "../../lib/colors";
import type { Lesson } from "../../types";
import type { LessonSummary } from "./lessonStatus";
import { metaLine } from "./lessonStatus";
import type { PracticeMode } from "./ModeSwitch";

// Bảng trượt từ đáy khung điện thoại. Đặt trong khung có position: relative (xem MobileBloom).
export function BottomSheet({ label, onClose, children, tall = false }: { label: string; onClose: () => void; children: ReactNode; tall?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose; // onClose thường là hàm tạo mới mỗi lần vẽ: giữ trong ref để không kéo focus về hộp thoại mỗi lần gõ
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeRef.current(); };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); prev?.focus?.(); };
  }, []);
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 20 }}>
      <div onClick={onClose} aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(25,62,65,.5)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }} />
      <div ref={ref} role="dialog" aria-modal="true" aria-label={label} tabIndex={-1}
        style={{ position: "absolute", left: 0, right: 0, bottom: 0, boxSizing: "border-box", display: "flex", flexDirection: "column", ...(tall ? { height: "88%" } : { maxHeight: "85%" }), background: C.surface, borderRadius: "28px 28px 0 0", boxShadow: "0 -12px 40px rgba(25,62,65,.25)", outline: "none", paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div aria-hidden style={{ width: 40, height: 4, borderRadius: 9999, background: C.borderStrong, margin: "10px auto 6px", flexShrink: 0 }} />
        {children}
      </div>
    </div>
  );
}

// Sau khi chọn truyện ở trang danh sách: chọn Bloom hay Flashcard
export function ModeSheet({ lesson, summary, onPick, onClose }: { lesson: Lesson; summary: LessonSummary; onPick: (m: PracticeMode) => void; onClose: () => void }) {
  const card = (m: PracticeMode, title: string, desc: string, label: string, Icon: typeof Brain, accent: boolean, off = false) => (
    <button key={m} type="button" disabled={off} onClick={() => onPick(m)}
      style={{ display: "flex", alignItems: "center", gap: 14, width: "100%", boxSizing: "border-box", textAlign: "left", padding: 14, marginBottom: 10, borderRadius: 20, cursor: off ? "not-allowed" : "pointer", opacity: off ? 0.45 : 1, fontFamily: "inherit", color: C.ink, background: accent ? C.primaryBg : C.surface, border: accent ? `1.5px solid ${C.primary}` : `0.5px solid ${C.borderStrong}` }}>
      <span aria-hidden style={{ flex: "0 0 48px", height: 48, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: m === "bloom" ? C.surface : C.rewardBg, border: `1px solid ${m === "bloom" ? C.primaryBorder : C.rewardBorder}`, color: m === "bloom" ? C.primaryText : C.rewardDeep }}><Icon size={24} /></span>
      <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontSize: 17, fontWeight: 800 }}>{title}</span>
          {label && <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 9999, background: m === "bloom" ? C.surface : C.rewardBg, color: m === "bloom" ? C.primaryText : C.ink, border: `1px solid ${m === "bloom" ? C.primaryBorder : C.rewardBorder}` }}>{label}</span>}
        </span>
        <span style={{ fontSize: 13, fontWeight: 400, lineHeight: 1.45, color: C.inkMuted }}>{desc}</span>
      </span>
      <ChevronRight size={20} color={accent ? C.primaryText : C.inkFaint} aria-hidden style={{ flexShrink: 0 }} />
    </button>
  );
  const hasBloom = !!lesson.bloom;
  return (
    <BottomSheet label={`Chọn cách luyện: ${lesson.title}`} onClose={onClose}>
      <div style={{ padding: "4px 16px 24px", overflowY: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span aria-hidden style={{ flex: "0 0 52px", height: 52, borderRadius: 16, background: C.primaryBg, border: `1px solid ${C.primaryBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{lesson.emoji}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, lineHeight: 1.25, color: C.ink }}>{lesson.title}</h2>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: C.inkMuted }}>HSK {lesson.hsk} · {metaLine(lesson)}</p>
          </div>
          <button type="button" aria-label="Đóng" onClick={onClose} style={{ flex: "0 0 44px", height: 44, border: 0, borderRadius: 9999, background: C.bgSunken, color: C.inkMuted, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><X size={18} /></button>
        </div>
        <p style={{ margin: "20px 0 10px", fontSize: 13, fontWeight: 700, color: C.inkMuted }}>Chọn cách luyện</p>
        {hasBloom && card("bloom", "Bloom", "4 cấp độ: Nhớ, Hiểu, Dùng, Viết.", summary.bloomLabel, Brain, true)}
        {card("flashcard", "Flashcard", "Lật thẻ xem nghĩa và câu ví dụ, nghe đọc từng từ.", summary.flashLabel, Layers, !hasBloom)}
      </div>
    </BottomSheet>
  );
}
