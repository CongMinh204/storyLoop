import type { Lesson } from "../../types";
import { C } from "../../lib/colors";
import type { PracticeEntry } from "./practiceProgress";

// Quá ngần này ngày không luyện lại thì bài đang học dở chuyển sang "Cần ôn"
export const REVIEW_AFTER_DAYS = 7;

export type StatusKind = "none" | "learning" | "review" | "done";

export type LessonSummary = {
  kind: StatusKind;
  chip: string;          // nhãn ngắn trên dòng danh sách ("" = chưa luyện)
  bloomLabel: string;    // nhãn trên thẻ chế độ Bloom ("" = không có gì đặc biệt)
  flashLabel: string;    // nhãn trên thẻ chế độ Flashcard
  knownCount: number;
  bloomStarted: boolean;
  started: boolean;
};

export const CHIP_STYLE: Record<StatusKind, { bg: string; fg: string; bd: string }> = {
  learning: { bg: C.primaryBg, fg: C.primaryText, bd: C.primaryBorder },
  review: { bg: C.ctaBg, fg: C.ctaText, bd: C.ctaBorder },
  done: { bg: C.rewardBg, fg: C.ink, bd: C.rewardBorder },
  none: { bg: C.surface, fg: C.ink, bd: C.border },
};

export function summarize(lesson: Lesson, e: PracticeEntry | undefined, now = Date.now()): LessonSummary {
  const total = lesson.cards.length;
  const knownCount = e ? e.known.filter(i => i < total).length : 0;
  const bloomStarted = !!lesson.bloom && !!e && e.bloomStage >= 1;
  const hasBloom = !!lesson.bloom;
  const flashOnlyDone = !hasBloom && total > 0 && knownCount >= total;
  const done = hasBloom ? !!e?.bloomDone : flashOnlyDone;
  const started = !!e && (bloomStarted || knownCount > 0 || e.bloomDone);
  const stale = !!e && e.lastPlayed > 0 && now - e.lastPlayed > REVIEW_AFTER_DAYS * 86_400_000;

  const kind: StatusKind = done ? "done" : !started ? "none" : stale ? "review" : "learning";

  const progressChip = bloomStarted ? `Bloom ${e!.bloomStage + 1}/4` : knownCount > 0 ? `Thuộc ${knownCount}/${total}` : "";
  const chip = kind === "done" ? "Đã xong" : kind === "review" ? "Cần ôn" : kind === "learning" ? progressChip : "";

  const bloomLabel = !hasBloom ? "" : bloomStarted ? `Đang dở · cấp ${e!.bloomStage + 1}/4` : e?.bloomDone ? "Đã xong" : "";
  const flashLabel = knownCount > 0 ? `Đã thuộc ${knownCount}/${total}` : `${total} thẻ`;

  return { kind, chip, bloomLabel, flashLabel, knownCount, bloomStarted, started };
}

// "5 chương · 7 thẻ" (bộ HSK1 tổng hợp không có chương)
export function metaLine(lesson: Lesson): string {
  const cards = `${lesson.cards.length} thẻ`;
  return lesson.chapters ? `${lesson.chapters} chương · ${cards}` : cards;
}

// Bài luyện gần nhất còn dở (dùng cho "Tiếp tục" và chọn bài mặc định)
export function lastPlayedLessonId(lessons: Lesson[], store: Record<string, PracticeEntry>): string | undefined {
  let best: string | undefined, at = 0;
  for (const l of lessons) { const t = store[l.id]?.lastPlayed ?? 0; if (t > at) { at = t; best = l.id; } }
  return best;
}
