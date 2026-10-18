import type { PoolClient } from "pg";
import { pool } from "../db.js";
import { HttpError } from "../http.js";
import { vnDay } from "../stats.js";
import { applyReport, mergeProgress, type ProgressDto, type Report } from "./merge.js";

export const XP_PER_CORRECT_STEP = 10;
export const XP_COMPLETE_STORY = 50;   // chỉ lần hoàn thành truyện đầu tiên
export const XP_DAILY_CAP = 500;       // trần XP mỗi ngày (giờ Việt Nam), chặn gian lận
export const MAX_STORIES = 200;        // số truyện tối đa mỗi tài khoản, chặn spam id bậy

type Row = {
  story_id: string; status: "started" | "completed"; pct: number; endings: string[];
  best_right: number | null; best_total: number | null; last_played_at: Date;
};

const SELECT_ALL = `SELECT story_id, status, pct, endings, best_right, best_total, last_played_at
                      FROM story_progress WHERE user_id = $1`;

function toDto(r: Row): ProgressDto {
  return {
    status: r.status,
    pct: r.pct,
    lastPlayed: r.last_played_at.getTime(),
    ...(r.endings.length ? { endings: r.endings } : {}),
    ...(r.best_right !== null && r.best_total !== null ? { bestScore: { right: r.best_right, total: r.best_total } } : {}),
  };
}

const toMap = (rows: Row[]) => Object.fromEntries(rows.map(r => [r.story_id, toDto(r)])) as Record<string, ProgressDto>;

export async function listProgress(userId: string) {
  return toMap((await pool.query<Row>(SELECT_ALL, [userId])).rows);
}

// Mỗi người dùng chỉ chạy một thao tác ghi tại một thời điểm, để trần XP/ngày và các mốc đã cộng XP
// không bị vượt khi hai request đến cùng lúc. Khoá tự nhả khi COMMIT/ROLLBACK.
async function tx<T>(userId: string, fn: (c: PoolClient) => Promise<T>): Promise<T> {
  const c = await pool.connect();
  try {
    await c.query("BEGIN");
    await c.query("SELECT pg_advisory_xact_lock(hashtext($1))", [userId]);
    const result = await fn(c);
    await c.query("COMMIT");
    return result;
  } catch (err) {
    await c.query("ROLLBACK").catch(() => {});
    throw err;
  } finally {
    c.release();
  }
}

function upsert(c: PoolClient, userId: string, storyId: string, p: ProgressDto) {
  return c.query(
    `INSERT INTO story_progress (user_id, story_id, status, pct, endings, best_right, best_total, last_played_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, to_timestamp($8::double precision / 1000))
     ON CONFLICT (user_id, story_id) DO UPDATE SET
       status = EXCLUDED.status, pct = EXCLUDED.pct, endings = EXCLUDED.endings,
       best_right = EXCLUDED.best_right, best_total = EXCLUDED.best_total,
       last_played_at = EXCLUDED.last_played_at`,
    [userId, storyId, p.status, p.pct, p.endings ?? [], p.bestScore?.right ?? null, p.bestScore?.total ?? null, p.lastPlayed],
  );
}

// true nếu mốc này chưa từng được cộng XP (và vừa được ghi lại)
async function claim(c: PoolClient, userId: string, storyId: string, key: string) {
  const r = await c.query(
    "INSERT INTO xp_claims (user_id, story_id, claim_key) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING",
    [userId, storyId, key],
  );
  return r.rowCount === 1;
}

export type StepReport = { key: string; correct: boolean };

// Báo tiến độ một truyện: cập nhật tiến độ, cộng XP (đúng một bước = 10, hoàn thành lần đầu = 50),
// và đánh dấu hôm nay có hoạt động cho streak.
export async function reportProgress(
  userId: string, storyId: string, body: Report & { step?: StepReport }, now = Date.now(),
) {
  return tx(userId, async c => {
    const prev = (await c.query<Row>(`${SELECT_ALL} AND story_id = $2`, [userId, storyId])).rows[0];
    if (!prev) {
      const { rows } = await c.query<{ n: number }>("SELECT count(*)::int AS n FROM story_progress WHERE user_id = $1", [userId]);
      if (rows[0].n >= MAX_STORIES) throw new HttpError(400, "Đã đạt số truyện tối đa của một tài khoản");
    }
    const prevDto = prev ? toDto(prev) : undefined;
    const next = applyReport(prevDto, body, now);
    await upsert(c, userId, storyId, next);

    // Chỉ bước đúng mới chiếm mốc, nên chọn sai trước rồi làm lại đúng vẫn được cộng
    let raw = 0;
    if (body.step?.correct && (await claim(c, userId, storyId, `step:${body.step.key}`))) raw += XP_PER_CORRECT_STEP;
    if (body.complete) {
      const first = await claim(c, userId, storyId, "complete");
      // Truyện đã hoàn thành từ localStorage (import) thì không thưởng lại
      if (first && prevDto?.status !== "completed") raw += XP_COMPLETE_STORY;
    }

    const day = vnDay(new Date(now));
    const today = (await c.query<{ xp: number }>("SELECT xp FROM activity_days WHERE user_id = $1 AND day = $2", [userId, day])).rows[0];
    const gain = Math.max(0, Math.min(raw, XP_DAILY_CAP - (today?.xp ?? 0)));
    await c.query(
      `INSERT INTO activity_days (user_id, day, xp) VALUES ($1, $2, $3)
       ON CONFLICT (user_id, day) DO UPDATE SET xp = activity_days.xp + EXCLUDED.xp`,
      [userId, day, gain],
    );
    return { progress: next, xpGained: gain };
  });
}

// Đưa tiến độ localStorage lên khi đăng nhập: gộp phần tốt nhất của hai bên. Không cộng XP và không
// tính là hoạt động trong ngày, vì server không biết tiến độ đó được chơi khi nào.
export async function importProgress(userId: string, incoming: Record<string, ProgressDto>) {
  return tx(userId, async c => {
    const all = toMap((await c.query<Row>(SELECT_ALL, [userId])).rows);
    let room = MAX_STORIES - Object.keys(all).length;
    let imported = 0;
    for (const [id, p] of Object.entries(incoming)) {
      if (!all[id]) {
        if (room <= 0) continue;
        room--;
      }
      all[id] = mergeProgress(all[id], p);
      await upsert(c, userId, id, all[id]);
      imported++;
    }
    return { progress: all, imported };
  });
}
