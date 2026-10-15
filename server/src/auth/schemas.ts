import { z } from "zod";
import {
  checkConfirm, checkEmail, checkFullName, checkPassword, normalizeEmail, MSG,
} from "../shared/validation.js";

// Chuỗi từ body; thiếu hoặc sai kiểu thì coi như chuỗi rỗng để báo lỗi bằng câu tiếng Việt
const str = z.unknown().transform(v => (typeof v === "string" ? v : ""));

// Biến một hàm check* của shared/validation thành luật zod
const rule = (check: (v: string) => string | null) =>
  str.superRefine((v, ctx) => {
    const message = check(v);
    if (message) ctx.addIssue({ code: z.ZodIssueCode.custom, message });
  });

const fullName = rule(checkFullName).transform(v => v.trim());
const email = rule(checkEmail).transform(normalizeEmail);
const password = rule(checkPassword);
const required = (message: string) => rule(v => (v ? null : message));

export const registerSchema = z.object({
  fullName,
  email,
  password,
  confirmPassword: str,
}).superRefine((d, ctx) => {
  const message = checkConfirm(d.password, d.confirmPassword);
  if (message) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["confirmPassword"], message });
});

export const loginSchema = z.object({
  email,
  password: required(MSG.passwordRequired),
});

export const googleSchema = z.object({
  idToken: required("Thiếu ID token của Google"),
});

export const refreshSchema = z.object({
  refreshToken: required("Thiếu refresh token"),
});

// Đổi họ tên và/hoặc mật khẩu. Mật khẩu hiện tại được kiểm tra trong route (cần đọc DB).
export const updateMeSchema = z.object({
  fullName: fullName.optional(),
  currentPassword: str.optional(),
  newPassword: password.optional(),
  confirmPassword: str.optional(),
}).superRefine((d, ctx) => {
  if (d.fullName === undefined && d.newPassword === undefined) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Không có thông tin nào để cập nhật" });
  }
  if (d.newPassword !== undefined) {
    const message = checkConfirm(d.newPassword, d.confirmPassword ?? "");
    if (message) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["confirmPassword"], message });
  }
});
