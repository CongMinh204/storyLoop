import { Router } from "express";
import { z } from "zod";
import { requireAdmin, requireAuth } from "../auth/middleware.js";
import { createTesters, MAX_TESTERS } from "../auth/testers.js";
import { pool } from "../db.js";
import { h, parse } from "../http.js";
import { computeStreak } from "../stats.js";

export const adminRouter = Router();
adminRouter.use(requireAuth, requireAdmin);

const listQuery = z.object({
  q: z.string().trim().max(100).optional(),
  limit: z.coerce.number().int().min(1).max(200).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});

type UserStatsRow = {
  id: string; email: string; full_name: string; role: "user" | "admin";
  created_at: Date; last_login_at: Date | null; last_played_at: Date | null;
  xp: number; stories_played: number; stories_completed: number;
};

const SEARCH = "($1::text IS NULL OR u.email ILIKE $1 OR u.full_name ILIKE $1)";

// Danh sách người dùng kèm mức độ học, tài khoản mới tạo đứng trước.
// ?q= tìm theo email hoặc họ tên, ?limit=&offset= để phân trang.
adminRouter.get("/users", h(async (req, res) => {
  const { q, limit, offset } = parse(listQuery, req.query);
  // Tìm chuỗi con; thoát % và _ để chúng không thành ký tự đại diện của ILIKE
  const pattern = q ? `%${q.replace(/[\\%_]/g, "\\$&")}%` : null;

  const [{ rows }, count] = await Promise.all([
    pool.query<UserStatsRow>(
      `SELECT u.id, u.email, u.full_name, u.role, u.created_at, u.last_login_at,
              COALESCE(a.xp, 0)::int AS xp,
              COALESCE(p.played, 0)::int AS stories_played,
              COALESCE(p.completed, 0)::int AS stories_completed,
              p.last_played_at
         FROM users u
         LEFT JOIN (SELECT user_id, sum(xp) AS xp FROM activity_days GROUP BY user_id) a ON a.user_id = u.id
         LEFT JOIN (SELECT user_id, count(*) AS played,
                           count(*) FILTER (WHERE status = 'completed') AS completed,
                           max(last_played_at) AS last_played_at
                      FROM story_progress GROUP BY user_id) p ON p.user_id = u.id
        WHERE ${SEARCH}
        ORDER BY u.created_at DESC
        LIMIT $2 OFFSET $3`,
      [pattern, limit, offset],
    ),
    pool.query<{ total: number }>(`SELECT count(*)::int AS total FROM users u WHERE ${SEARCH}`, [pattern]),
  ]);

  // Streak tính theo từng người trong trang này
  const days = new Map<string, string[]>();
  if (rows.length) {
    const r = await pool.query<{ user_id: string; day: string }>(
      "SELECT user_id, to_char(day, 'YYYY-MM-DD') AS day FROM activity_days WHERE user_id = ANY($1::uuid[])",
      [rows.map(u => u.id)],
    );
    for (const d of r.rows) {
      const list = days.get(d.user_id) ?? [];
      list.push(d.day);
      days.set(d.user_id, list);
    }
  }

  res.json({
    total: count.rows[0].total,
    limit,
    offset,
    users: rows.map(u => ({
      id: u.id,
      email: u.email,
      fullName: u.full_name,
      role: u.role,
      createdAt: u.created_at,
      lastLoginAt: u.last_login_at,
      lastPlayedAt: u.last_played_at,
      xp: u.xp,
      streak: computeStreak(days.get(u.id) ?? []),
      storiesPlayed: u.stories_played,
      storiesCompleted: u.stories_completed,
    })),
  });
}));

const bulkSchema = z.object({
  count: z.number({ required_error: "Thiếu số tài khoản cần tạo", invalid_type_error: "Số tài khoản phải là số" })
    .int("Số tài khoản phải là số nguyên")
    .min(1, "Tạo ít nhất 1 tài khoản")
    .max(MAX_TESTERS, `Tối đa ${MAX_TESTERS} tài khoản mỗi lần`),
});

// Tạo hàng loạt tài khoản dùng thử testerNN@storyloop.test. Mật khẩu chỉ trả về một lần ở đây.
adminRouter.post("/users/bulk", h(async (req, res) => {
  const { count } = parse(bulkSchema, req.body);
  res.status(201).json({ accounts: await createTesters(count) });
}));
