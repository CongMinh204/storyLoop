import { Router } from "express";
import { passwordLimiter } from "../auth/limits.js";
import { requireAuth } from "../auth/middleware.js";
import { hashPassword, verifyPassword } from "../auth/password.js";
import { updateMeSchema } from "../auth/schemas.js";
import { revokeOtherSessions } from "../auth/tokens.js";
import { pool } from "../db.js";
import { h, HttpError, parse } from "../http.js";
import { findUser, loadMe, toMe, type UserRow } from "../users.js";

export const meRouter = Router();
meRouter.use(requireAuth);

// Thông tin tài khoản kèm tổng XP và streak
meRouter.get("/", h(async (req, res) => {
  res.json(await loadMe(req.auth!.sub));
}));

// Đổi họ tên và/hoặc mật khẩu. Đổi mật khẩu thì đăng xuất mọi máy khác, giữ máy đang dùng.
meRouter.patch("/", passwordLimiter, h(async (req, res) => {
  const body = parse(updateMeSchema, req.body);
  const { sub, sid } = req.auth!;
  const user = await findUser("id", sub);
  if (!user) throw new HttpError(404, "Tài khoản không còn tồn tại");

  let passwordHash: string | null = null;
  if (body.newPassword !== undefined) {
    // Tài khoản chỉ dùng Google chưa có mật khẩu thì được đặt lần đầu mà không cần mật khẩu cũ
    if (user.password_hash) {
      const msg = !body.currentPassword ? "Vui lòng nhập mật khẩu hiện tại"
        : !(await verifyPassword(body.currentPassword, user.password_hash)) ? "Mật khẩu hiện tại không đúng"
        : null;
      if (msg) throw new HttpError(400, msg, { currentPassword: msg });
    }
    passwordHash = await hashPassword(body.newPassword);
  }

  const { rows } = await pool.query<UserRow>(
    `UPDATE users SET full_name = COALESCE($2, full_name), password_hash = COALESCE($3, password_hash)
      WHERE id = $1 RETURNING *`,
    [sub, body.fullName ?? null, passwordHash],
  );
  if (passwordHash) await revokeOtherSessions(sub, sid);
  res.json(await toMe(rows[0]));
}));
