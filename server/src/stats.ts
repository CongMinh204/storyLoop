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

// Tổng XP và streak từ activity_days (PR 3 mới ghi vào bảng này)
export async function getStats(userId: string) {
  const { rows } = await pool.query<{ day: string; xp: number }>(
    "SELECT to_char(day, 'YYYY-MM-DD') AS day, xp FROM activity_days WHERE user_id = $1",
    [userId],
  );
  return {
    xp: rows.reduce((sum, r) => sum + r.xp, 0),
    streak: computeStreak(rows.map(r => r.day)),
  };
}
