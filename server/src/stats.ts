import { pool } from "./db.js";

// Ngày hiện tại theo giờ Việt Nam (UTC+7), dạng YYYY-MM-DD
export function vnDay(d = new Date()) {
  return new Date(d.getTime() + 7 * 3600_000).toISOString().slice(0, 10);
}

function prevDay(day: string) {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

// Số ngày liên tiếp có hoạt động tính tới hôm nay. Hôm nay chưa học mà hôm qua có thì chuỗi vẫn còn.
export function computeStreak(days: string[], today = vnDay()) {
  const set = new Set(days);
  let day = set.has(today) ? today : prevDay(today);
  let streak = 0;
  while (set.has(day)) {
    streak++;
    day = prevDay(day);
  }
  return streak;
}

// Chuỗi ngày liên tiếp dài nhất từng có (thành tích streak: đã đạt thì giữ dù chuỗi bị đứt)
export function longestStreak(days: string[]) {
  let best = 0, run = 0, prev = "";
  for (const day of [...new Set(days)].sort()) {
    run = prev !== "" && prevDay(day) === prev ? run + 1 : 1;
    best = Math.max(best, run);
    prev = day;
  }
  return best;
}

// Tổng XP và streak từ activity_days
export async function getStats(userId: string) {
  const { rows } = await pool.query<{ day: string; xp: number }>(
    "SELECT to_char(day, 'YYYY-MM-DD') AS day, xp FROM activity_days WHERE user_id = $1",
    [userId],
  );
  const days = rows.map(r => r.day);
  return {
    xp: rows.reduce((sum, r) => sum + r.xp, 0),
    streak: computeStreak(days),
    bestStreak: longestStreak(days),
  };
}

// Ngày đầu tháng, lùi `back` tháng so với tháng chứa `day`
function monthStart(day: string, back: number) {
  const d = new Date(`${day.slice(0, 7)}-01T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() - back);
  return d.toISOString().slice(0, 10);
}

export const ACTIVITY_MONTHS = 6;

export type ActivityDay = { day: string; xp: number; correct: number; completed: number };

// Hoạt động từng ngày (giờ Việt Nam) trong ACTIVITY_MONTHS tháng gần nhất, cho biểu đồ ở màn Tiến trình.
// correct: số câu chọn đúng lần đầu, completed: số truyện hoàn thành lần đầu (đếm các mốc cộng XP ở xp_claims).
export async function getActivity(userId: string) {
  const today = vnDay();
  const since = monthStart(today, ACTIVITY_MONTHS - 1);
  const vnDate = "(claimed_at AT TIME ZONE 'UTC') + interval '7 hours'";
  const [xp, claims] = await Promise.all([
    pool.query<{ day: string; xp: number }>(
      "SELECT to_char(day, 'YYYY-MM-DD') AS day, xp FROM activity_days WHERE user_id = $1 AND day >= $2",
      [userId, since],
    ),
    pool.query<{ day: string; correct: number; completed: number }>(
      `SELECT to_char(${vnDate}, 'YYYY-MM-DD') AS day,
              count(*) FILTER (WHERE claim_key LIKE 'step:%')::int AS correct,
              count(*) FILTER (WHERE claim_key = 'complete')::int AS completed
         FROM xp_claims WHERE user_id = $1 AND ${vnDate} >= $2::date
        GROUP BY 1`,
      [userId, since],
    ),
  ]);
  const byDay = new Map<string, ActivityDay>();
  const at = (day: string) => {
    let d = byDay.get(day);
    if (!d) byDay.set(day, d = { day, xp: 0, correct: 0, completed: 0 });
    return d;
  };
  for (const r of xp.rows) at(r.day).xp = r.xp;
  for (const r of claims.rows) Object.assign(at(r.day), { correct: r.correct, completed: r.completed });
  return { today, since, days: [...byDay.values()].sort((a, b) => a.day.localeCompare(b.day)) };
}
