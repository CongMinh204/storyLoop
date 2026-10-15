import { createHash, randomBytes } from "node:crypto";
import jwt from "jsonwebtoken";
import { pool } from "../db.js";
import { env } from "../env.js";

export type Role = "user" | "admin";
// sub = id người dùng, sid = id phiên trong bảng sessions
export type AccessPayload = { sub: string; role: Role; sid: string };
export type Tokens = { accessToken: string; refreshToken: string };

const ACCESS_TTL = "15m";
const REFRESH_DAYS = 30;

export function signAccess(p: AccessPayload) {
  return jwt.sign({ role: p.role, sid: p.sid }, env.JWT_SECRET, {
    subject: p.sub, expiresIn: ACCESS_TTL, algorithm: "HS256",
  });
}

export function verifyAccess(token: string): AccessPayload | null {
  try {
    const d = jwt.verify(token, env.JWT_SECRET, { algorithms: ["HS256"] });
    if (typeof d === "string" || !d.sub || typeof d.sid !== "string") return null;
    if (d.role !== "user" && d.role !== "admin") return null;
    return { sub: d.sub, role: d.role, sid: d.sid };
  } catch {
    return null;
  }
}

// Refresh token là chuỗi ngẫu nhiên đủ dài nên lưu SHA-256 là đủ (không cần bcrypt), lại tra cứu được
const hashToken = (token: string) => createHash("sha256").update(token).digest("hex");
const newRefreshToken = () => randomBytes(32).toString("base64url");
const expiry = () => new Date(Date.now() + REFRESH_DAYS * 24 * 3600_000);

export async function createSession(userId: string, role: Role): Promise<Tokens> {
  await pool.query("DELETE FROM sessions WHERE user_id = $1 AND expires_at <= now()", [userId]);
  const refreshToken = newRefreshToken();
  const { rows } = await pool.query<{ id: string }>(
    "INSERT INTO sessions (user_id, refresh_token_hash, expires_at) VALUES ($1, $2, $3) RETURNING id",
    [userId, hashToken(refreshToken), expiry()],
  );
  return { accessToken: signAccess({ sub: userId, role, sid: rows[0].id }), refreshToken };
}

// Đổi refresh token lấy cặp token mới; token cũ hết dùng được. Một câu UPDATE nên hai request
// cùng gửi một token thì chỉ một cái thành công. Role đọc lại từ users để đổi quyền có hiệu lực.
export async function rotateSession(refreshToken: string): Promise<Tokens | null> {
  const next = newRefreshToken();
  const { rows } = await pool.query<{ id: string; user_id: string; role: Role }>(
    `UPDATE sessions s SET refresh_token_hash = $2, expires_at = $3
       FROM users u
      WHERE s.refresh_token_hash = $1 AND s.expires_at > now() AND u.id = s.user_id
     RETURNING s.id, s.user_id, u.role`,
    [hashToken(refreshToken), hashToken(next), expiry()],
  );
  const s = rows[0];
  if (!s) return null;
  return { accessToken: signAccess({ sub: s.user_id, role: s.role, sid: s.id }), refreshToken: next };
}

export async function revokeSession(refreshToken: string) {
  await pool.query("DELETE FROM sessions WHERE refresh_token_hash = $1", [hashToken(refreshToken)]);
}

// Đăng xuất mọi máy khác, giữ phiên đang dùng
export async function revokeOtherSessions(userId: string, keepSessionId: string) {
  await pool.query("DELETE FROM sessions WHERE user_id = $1 AND id <> $2", [userId, keepSessionId]);
}
