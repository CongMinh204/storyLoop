import { pool } from "./db.js";
import { HttpError } from "./http.js";
import { getStats } from "./stats.js";
import type { Role } from "./auth/tokens.js";

export type UserRow = {
  id: string;
  email: string;
  full_name: string;
  password_hash: string | null;
  google_id: string | null;
  role: Role;
  created_at: Date;
  last_login_at: Date | null;
};

export async function findUser(where: "id" | "email" | "google_id", value: string) {
  const { rows } = await pool.query<UserRow>(`SELECT * FROM users WHERE ${where} = $1`, [value]);
  return rows[0] as UserRow | undefined;
}

// Thông tin trả cho frontend (GET /api/me và sau khi đăng nhập)
export async function toMe(u: UserRow) {
  return {
    id: u.id,
    email: u.email,
    fullName: u.full_name,
    role: u.role,
    hasPassword: !!u.password_hash,
    hasGoogle: !!u.google_id,
    createdAt: u.created_at,
    ...(await getStats(u.id)),
  };
}

export async function loadMe(userId: string) {
  const user = await findUser("id", userId);
  if (!user) throw new HttpError(404, "Tài khoản không còn tồn tại");
  return toMe(user);
}
