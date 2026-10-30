import { useMemo } from "react";
import { ACHIEVEMENTS, type Achievement, type AchievementMetric } from "../../data/achievements";
import { LESSONS } from "../../data/lessons";
import { STORY_LIBRARY } from "../../data/library";
import { getStoryScript } from "../../data/stories";
import { useStoryProgress, type StoryProgress } from "../../lib/progress";
import { usePracticeProgress, type PracticeEntry } from "../practice/practiceProgress";
import { useViewer } from "../auth/viewer";
import type { ActivityDay } from "./useActivity";

// Số liệu học tập cho màn Tiến trình và trang chủ, tính từ dữ liệu thật:
// - tiến độ truyện (lib/progress.ts, đồng bộ lên server khi đăng nhập)
// - tiến độ Phòng tập (practiceProgress.ts, chỉ nằm trên máy này)
// - XP và chuỗi ngày học dài nhất (server, chỉ có khi đăng nhập)

// ─── Nội dung đang có trong app ───

const STORIES = Object.values(STORY_LIBRARY).flat().flatMap(entry => {
  const script = getStoryScript(entry.id);
  return script ? [{ entry, script }] : [];
});
// Id các cảnh kết thúc của từng truyện rẽ nhánh
const ENDINGS = new Map(STORIES.flatMap(({ entry, script }) =>
  script.kind === "branching"
    ? [[entry.id, new Set(Object.values(script.story.nodes).filter(n => n.ending).map(n => n.id))] as const]
    : []));
const TOTAL_ENDINGS = [...ENDINGS.values()].reduce((sum, s) => sum + s.size, 0);
const HSK2_IDS = STORIES.filter(s => s.entry.hsk === 2).map(s => s.entry.id);
const BLOOM_IDS = LESSONS.filter(l => l.bloom).map(l => l.id);
const CARDS = new Map(LESSONS.map(l => [l.id, l.cards]));
// Mọi từ có trong app: từ vựng của các truyện và thẻ flashcard (gồm bộ HSK1)
const ALL_WORDS = new Set([
  ...STORIES.flatMap(s => s.script.vocab.map(v => v.word.trim())),
  ...LESSONS.flatMap(l => l.cards.map(c => c.ch.trim())),
]);

// ─── Tổng hợp ───

export type Skill = { skill: string; value: number; detail: string };
export type AchievementStatus = "done" | "active" | "locked";
export type AchievementState = Achievement & { progress: number; total: number; status: AchievementStatus };

const percent = (n: number, d: number) => (d > 0 ? Math.round((n / d) * 100) : 0);

export function learningSummary(
  stories: Record<string, StoryProgress>,
  practice: Record<string, PracticeEntry>,
  account: { xp: number; bestStreak: number },
) {
  const done = STORIES.filter(s => stories[s.entry.id]?.status === "completed");

  // Từ đã học: từ vựng của truyện đã hoàn thành và thẻ đã đánh dấu thuộc ở Phòng tập, không đếm trùng
  const words = new Set<string>();
  for (const s of done) for (const v of s.script.vocab) words.add(v.word.trim());
  for (const [id, e] of Object.entries(practice)) {
    const cards = CARDS.get(id);
    if (cards) for (const i of e.known) if (cards[i]) words.add(cards[i].ch.trim());
  }

  let endings = 0;
  for (const [id, ids] of ENDINGS) endings += (stories[id]?.endings ?? []).filter(e => ids.has(e)).length;

  const ratios = STORIES.flatMap(s => {
    const b = stories[s.entry.id]?.bestScore;
    return b && b.total > 0 ? [b.right / b.total] : [];
  });
  const grammar = ratios.length ? Math.round((ratios.reduce((a, b) => a + b, 0) / ratios.length) * 100) : 0;
  const bloomDone = BLOOM_IDS.filter(id => practice[id]?.bloomDone).length;
  const hsk2Done = HSK2_IDS.filter(id => stories[id]?.status === "completed").length;

  const skills: Skill[] = [
    { skill: "Từ vựng", value: percent(words.size, ALL_WORDS.size), detail: `${words.size}/${ALL_WORDS.size} từ` },
    { skill: "Ngữ pháp", value: grammar, detail: ratios.length ? `câu đúng · ${ratios.length} truyện` : "chưa có điểm" },
    { skill: "Đọc hiểu", value: percent(done.length, STORIES.length), detail: `${done.length}/${STORIES.length} truyện` },
    { skill: "Khám phá", value: percent(endings, TOTAL_ENDINGS), detail: `${endings}/${TOTAL_ENDINGS} kết thúc` },
    { skill: "Vận dụng", value: percent(bloomDone, BLOOM_IDS.length), detail: `${bloomDone}/${BLOOM_IDS.length} bài Bloom` },
  ];

  // value: tiến độ hiện tại; all: mức "all" của thành tích (toàn bộ nội dung đang có)
  const metrics: Record<AchievementMetric, { value: number; all?: number }> = {
    storiesDone: { value: done.length, all: STORIES.length },
    hsk2Done: { value: hsk2Done, all: HSK2_IDS.length },
    endings: { value: endings, all: TOTAL_ENDINGS },
    bestStreak: { value: account.bestStreak },
    words: { value: words.size, all: ALL_WORDS.size },
    bloomDone: { value: bloomDone, all: BLOOM_IDS.length },
    xp: { value: account.xp },
  };
  const achievements: AchievementState[] = ACHIEVEMENTS.map(a => {
    const m = metrics[a.metric];
    const total = a.target === "all" ? m.all ?? 0 : a.target;
    const status: AchievementStatus = total > 0 && m.value >= total ? "done" : m.value > 0 ? "active" : "locked";
    return { ...a, progress: m.value, total, status };
  });

  return {
    words: words.size,
    skills,
    achievements,
    achievementsDone: achievements.filter(a => a.status === "done").length,
  };
}

// Dùng chung cho màn Tiến trình và trang chủ (mobile và desktop), để hai nơi luôn cùng số
export function useLearningSummary() {
  const stories = useStoryProgress();
  const practice = usePracticeProgress();
  const v = useViewer();
  const xp = v.signedIn ? v.xp : 0, bestStreak = v.signedIn ? v.bestStreak : 0;
  return useMemo(() => learningSummary(stories, practice, { xp, bestStreak }), [stories, practice, xp, bestStreak]);
}

// ─── Chuỗi số liệu cho biểu đồ (ngày dạng YYYY-MM-DD theo giờ Việt Nam) ───

// null = ngày/tuần chưa tới: biểu đồ để trống thay vì vẽ số 0
export type ChartPoint = { label: string; full: string; xp: number | null; correct: number | null; completed: number | null };
export type MonthOption = { key: string; label: string };   // key dạng YYYY-MM

const DAY_MS = 86_400_000;
const addDays = (day: string, n: number) => new Date(Date.parse(`${day}T00:00:00Z`) + n * DAY_MS).toISOString().slice(0, 10);
const dayMonth = (day: string) => `${+day.slice(8)}/${+day.slice(5, 7)}`;
const shiftMonth = (key: string, n: number) => new Date(Date.UTC(+key.slice(0, 4), +key.slice(5, 7) - 1 + n, 1)).toISOString().slice(0, 7);

const WEEKDAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

// Tuần chứa hôm nay, từ thứ Hai tới Chủ nhật
export function weekSeries(days: ActivityDay[], today: string): ChartPoint[] {
  const byDay = new Map(days.map(d => [d.day, d]));
  const monday = addDays(today, -((new Date(`${today}T00:00:00Z`).getUTCDay() + 6) % 7));
  return WEEKDAYS.map((label, i) => {
    const day = addDays(monday, i), d = byDay.get(day), future = day > today;
    return {
      label,
      full: `${i === 6 ? "Chủ nhật" : `Thứ ${i + 2}`}, ${dayMonth(day)}`,
      xp: future ? null : d?.xp ?? 0,
      correct: future ? null : d?.correct ?? 0,
      completed: future ? null : d?.completed ?? 0,
    };
  });
}

const WEEKS_OF_MONTH = [[1, 7], [8, 14], [15, 21], [22, 31]] as const;

// Một tháng chia 4 cột: ngày 1–7, 8–14, 15–21, 22 tới cuối tháng
export function monthSeries(days: ActivityDay[], month: string, today: string): ChartPoint[] {
  const lastDay = new Date(Date.UTC(+month.slice(0, 4), +month.slice(5, 7), 0)).getUTCDate();
  const inMonth = days.filter(d => d.day.startsWith(month));
  return WEEKS_OF_MONTH.map(([from, to], i) => {
    const end = Math.min(to, lastDay);
    const point = { label: `T${i + 1}`, full: `Tuần ${i + 1} · ${from}–${end}/${+month.slice(5)}` };
    if (`${month}-${String(from).padStart(2, "0")}` > today) return { ...point, xp: null, correct: null, completed: null };
    const week = inMonth.filter(d => +d.day.slice(8) >= from && +d.day.slice(8) <= end);
    const sum = (k: "xp" | "correct" | "completed") => week.reduce((s, d) => s + d[k], 0);
    return { ...point, xp: sum("xp"), correct: sum("correct"), completed: sum("completed") };
  });
}

// Các tháng xem được: tối đa `max` tháng gần nhất (server trả 6 tháng), không trước tháng tạo tài khoản
export function monthList(today: string, createdAt?: string, max = 6): MonthOption[] {
  const end = today.slice(0, 7);
  let start = shiftMonth(end, -(max - 1));
  const created = createdAt ? Date.parse(createdAt) : NaN;
  if (Number.isFinite(created)) {
    const createdMonth = new Date(created + 7 * 3600_000).toISOString().slice(0, 7); // giờ Việt Nam
    if (createdMonth > start && createdMonth <= end) start = createdMonth;
  }
  const months: MonthOption[] = [];
  for (let key = start; key <= end; key = shiftMonth(key, 1)) {
    months.push({ key, label: `Tháng ${+key.slice(5)}${key.slice(0, 4) === end.slice(0, 4) ? "" : `/${key.slice(0, 4)}`}` });
  }
  return months;
}

export const sumPoints = (points: ChartPoint[], k: "xp" | "correct" | "completed") =>
  points.reduce((s, p) => s + (p[k] ?? 0), 0);
