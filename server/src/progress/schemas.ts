import { z } from "zod";
import type { ProgressDto, Score } from "./merge.js";

export const STORY_ID_RE = /^[a-z0-9][a-z0-9-]{0,63}$/;
const STEP_KEY_RE = /^[A-Za-z0-9_.:#-]{1,64}$/;

export const storyIdSchema = z.string().regex(STORY_ID_RE, "Mã truyện không hợp lệ");

const score = z.object({
  right: z.number().int().min(0).max(500),
  total: z.number().int().min(1).max(500),
}).refine(s => s.right <= s.total, "Điểm không hợp lệ");

// PUT /api/progress/:storyId. Bước (step) = một lần người chơi chọn đáp án; key phân biệt các bước
// trong cùng truyện (vd. "t3" với truyện quiz, "<cảnh>#<số thứ tự câu>" với truyện rẽ nhánh).
export const reportSchema = z.object({
  pct: z.number().min(0).max(100).optional(),
  step: z.object({ key: z.string().regex(STEP_KEY_RE, "Khoá bước không hợp lệ"), correct: z.boolean() }).optional(),
  complete: z.object({
    ending: z.string().min(1).max(64).optional(),
    score: score.optional(),
  }).optional(),
}).refine(b => b.pct !== undefined || b.step !== undefined || b.complete !== undefined, "Không có tiến độ nào để báo");

// ─── Tiến độ import từ localStorage: bỏ qua mục không hợp lệ thay vì báo lỗi cả lượt ───

export const MAX_IMPORT = 100;

function cleanScore(v: unknown): Score | undefined {
  const s = v as Score | undefined;
  if (!s || !Number.isInteger(s.right) || !Number.isInteger(s.total)) return undefined;
  return s.total >= 1 && s.total <= 500 && s.right >= 0 && s.right <= s.total ? { right: s.right, total: s.total } : undefined;
}

export function cleanImported(raw: unknown, now: number): Record<string, ProgressDto> {
  const out: Record<string, ProgressDto> = {};
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return out;
  for (const [id, v] of Object.entries(raw)) {
    if (Object.keys(out).length >= MAX_IMPORT) break;
    const p = v as Partial<ProgressDto> | null;
    if (!STORY_ID_RE.test(id) || !p || typeof p !== "object") continue;
    if (p.status !== "started" && p.status !== "completed") continue;
    if (typeof p.pct !== "number" || !Number.isFinite(p.pct)) continue;
    if (typeof p.lastPlayed !== "number" || !Number.isFinite(p.lastPlayed)) continue;

    const endings = Array.isArray(p.endings)
      ? [...new Set(p.endings.filter((e): e is string => typeof e === "string" && e.length > 0 && e.length <= 64))].slice(0, 50)
      : [];
    const bestScore = cleanScore(p.bestScore);
    out[id] = {
      status: p.status,
      pct: p.status === "completed" ? 100 : Math.max(0, Math.min(100, Math.round(p.pct))),
      lastPlayed: Math.max(0, Math.min(now, Math.round(p.lastPlayed))), // không nhận ngày ở tương lai
      ...(endings.length ? { endings } : {}),
      ...(bestScore ? { bestScore } : {}),
    };
  }
  return out;
}
