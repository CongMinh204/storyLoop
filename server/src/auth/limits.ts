import type { Request } from "express";
import { ipKeyGenerator, rateLimit } from "express-rate-limit";
import { normalizeEmail } from "../shared/validation.js";

const WINDOW = 15 * 60_000;
const common = { standardHeaders: "draft-8", legacyHeaders: false } as const;

const ip = (req: Request) => ipKeyGenerator(req.ip ?? "");
// Email trong body; limiter chạy trước zod nên phải tự kiểm kiểu
const bodyEmail = (req: Request) =>
  typeof req.body?.email === "string" ? normalizeEmail(req.body.email).slice(0, 254) : "";

// Đăng nhập sai quá 10 lần / 15 phút cho cùng IP + email thì tạm khoá email đó trên IP đó; lần đúng
// (status < 400) không bị tính. Đếm theo cả email để cả lớp dùng chung wifi trường (một IP) không bị
// khoá lây vì vài người gõ sai.
export const loginLimiter = rateLimit({
  ...common,
  windowMs: WINDOW,
  limit: 10,
  skipSuccessfulRequests: true,
  keyGenerator: req => `${ip(req)}|${bodyEmail(req)}`,
  message: { error: "Đăng nhập sai quá nhiều lần, hãy thử lại sau 15 phút" },
});

// Chặn một IP dò mật khẩu trên rất nhiều email khác nhau. Mức 100 cao hơn nhiều so với cả lớp gõ sai.
export const loginIpLimiter = rateLimit({
  ...common,
  windowMs: WINDOW,
  limit: 100,
  skipSuccessfulRequests: true,
  message: { error: "Mạng này đăng nhập sai quá nhiều lần, hãy thử lại sau 15 phút" },
});

// PATCH /api/me (sau requireAuth): nhập sai mật khẩu hiện tại quá 10 lần / 15 phút / tài khoản
export const passwordLimiter = rateLimit({
  ...common,
  windowMs: WINDOW,
  limit: 10,
  skipSuccessfulRequests: true,
  keyGenerator: req => `user|${req.auth?.sub ?? ip(req)}`,
  message: { error: "Nhập sai quá nhiều lần, hãy thử lại sau 15 phút" },
});

// Chặn spam tạo tài khoản. Để rộng vì cả lớp có thể dùng chung một IP.
export const signupLimiter = rateLimit({
  ...common,
  windowMs: 60 * 60_000,
  limit: 30,
  message: { error: "Mạng này tạo quá nhiều tài khoản, hãy thử lại sau" },
});
