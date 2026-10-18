import { Router } from "express";
import { pool } from "../db.js";
import { env } from "../env.js";
import { h, HttpError, isUniqueViolation, parse } from "../http.js";
import { MSG } from "../shared/validation.js";
import { findUser, toMe, type UserRow } from "../users.js";
import { verifyGoogleToken } from "./google.js";
import { loginIpLimiter, loginLimiter, signupLimiter } from "./limits.js";
import { fakeVerify, hashPassword, verifyPassword } from "./password.js";
import { googleSchema, loginSchema, refreshSchema, registerSchema } from "./schemas.js";
import { createSession, revokeSession, rotateSession } from "./tokens.js";

export const authRouter = Router();

const SIGNUP_CLOSED = "Hiện chưa mở đăng ký tài khoản mới";
const WRONG_LOGIN = "Email hoặc mật khẩu không đúng";
const emailTaken = () => new HttpError(409, MSG.emailTaken, { email: MSG.emailTaken });

async function insertUser(email: string, fullName: string, auth: { passwordHash?: string; googleId?: string }) {
  try {
    const { rows } = await pool.query<UserRow>(
      "INSERT INTO users (email, full_name, password_hash, google_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [email, fullName, auth.passwordHash ?? null, auth.googleId ?? null],
    );
    return rows[0];
  } catch (err) {
    if (isUniqueViolation(err)) throw emailTaken(); // hai request đăng ký cùng email một lúc
    throw err;
  }
}

// Tạo phiên đăng nhập, trả token kèm thông tin người dùng
async function signIn(user: UserRow) {
  await pool.query("UPDATE users SET last_login_at = now() WHERE id = $1", [user.id]);
  return { ...(await createSession(user.id, user.role)), user: await toMe(user) };
}

authRouter.post("/register", signupLimiter, h(async (req, res) => {
  if (!env.ALLOW_SIGNUP) throw new HttpError(403, SIGNUP_CLOSED);
  const body = parse(registerSchema, req.body);
  if (await findUser("email", body.email)) throw emailTaken();
  const user = await insertUser(body.email, body.fullName, { passwordHash: await hashPassword(body.password) });
  res.status(201).json(await signIn(user));
}));

// Limiter theo email đứng trước: request bị nó chặn không tính thêm vào bộ đếm của cả IP
authRouter.post("/login", loginLimiter, loginIpLimiter, h(async (req, res) => {
  const { email, password } = parse(loginSchema, req.body);
  const user = await findUser("email", email);
  if (!user) {
    await fakeVerify(password);
    throw new HttpError(401, WRONG_LOGIN);
  }
  if (!user.password_hash) throw new HttpError(401, "Tài khoản này đăng nhập bằng Google, hãy bấm nút Google");
  if (!(await verifyPassword(password, user.password_hash))) throw new HttpError(401, WRONG_LOGIN);
  res.json(await signIn(user));
}));

authRouter.post("/google", h(async (req, res) => {
  const { idToken } = parse(googleSchema, req.body);
  const g = await verifyGoogleToken(idToken);

  let user = await findUser("google_id", g.googleId);
  if (!user) {
    const byEmail = await findUser("email", g.email);
    if (byEmail) {
      // Đăng ký bằng mật khẩu chưa xác minh email, nên tài khoản đó có thể do người khác tạo trước.
      // Chỉ gắn Google vào tài khoản chưa có mật khẩu, để chủ email không dùng chung tài khoản với họ.
      if (byEmail.password_hash) {
        throw new HttpError(409, "Email này đã đăng ký bằng mật khẩu, hãy đăng nhập bằng email và mật khẩu");
      }
      if (byEmail.google_id) throw new HttpError(409, "Email này đã gắn với một tài khoản Google khác");
      const { rows } = await pool.query<UserRow>(
        "UPDATE users SET google_id = $2 WHERE id = $1 RETURNING *", [byEmail.id, g.googleId],
      );
      user = rows[0];
    } else {
      if (!env.ALLOW_SIGNUP) throw new HttpError(403, SIGNUP_CLOSED);
      user = await insertUser(g.email, g.fullName, { googleId: g.googleId });
    }
  }
  res.json(await signIn(user));
}));

authRouter.post("/refresh", h(async (req, res) => {
  const { refreshToken } = parse(refreshSchema, req.body);
  const tokens = await rotateSession(refreshToken);
  if (!tokens) throw new HttpError(401, "Phiên đăng nhập đã hết hạn, hãy đăng nhập lại");
  res.json(tokens);
}));

authRouter.post("/logout", h(async (req, res) => {
  const { refreshToken } = parse(refreshSchema, req.body);
  await revokeSession(refreshToken);
  res.status(204).end();
}));
