// Luật kiểm tra dữ liệu tài khoản, dùng chung cho server (bọc trong zod) và form ở frontend.
// File này không import gì để frontend import thẳng được (frontend không có zod).
// Mỗi hàm check* trả về câu báo lỗi, hoặc null nếu hợp lệ.

export const NAME_MIN = 2;
export const NAME_MAX = 60;
export const PASSWORD_MIN = 12;
export const PASSWORD_MAX = 64; // bcrypt chỉ xét 72 byte đầu
export const PASSWORD_HINT = "Tối thiểu 12 ký tự, gồm chữ hoa, chữ thường và số";

export const MSG = {
  nameRequired: "Vui lòng nhập họ và tên",
  nameLength: `Họ và tên từ ${NAME_MIN} đến ${NAME_MAX} ký tự`,
  emailRequired: "Vui lòng nhập email",
  emailInvalid: "Email không hợp lệ",
  emailTaken: "Email này đã có tài khoản",
  passwordRequired: "Vui lòng nhập mật khẩu",
  passwordWeak: PASSWORD_HINT,
  passwordTooLong: `Mật khẩu tối đa ${PASSWORD_MAX} ký tự`,
  confirmMismatch: "Mật khẩu xác nhận không khớp",
};

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function checkFullName(v: string): string | null {
  const s = v.trim();
  if (!s) return MSG.nameRequired;
  if (s.length < NAME_MIN || s.length > NAME_MAX) return MSG.nameLength;
  return null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function checkEmail(v: string): string | null {
  const s = v.trim();
  if (!s) return MSG.emailRequired;
  if (s.length > 254 || !EMAIL_RE.test(s)) return MSG.emailInvalid;
  return null;
}

// Từng điều kiện của mật khẩu, để form đổi màu gợi ý khi đạt
export function passwordChecks(v: string) {
  return {
    length: v.length >= PASSWORD_MIN,
    upper: /\p{Lu}/u.test(v),
    lower: /\p{Ll}/u.test(v),
    digit: /\d/.test(v),
  };
}

export function checkPassword(v: string): string | null {
  if (!v) return MSG.passwordRequired;
  if (v.length > PASSWORD_MAX) return MSG.passwordTooLong;
  const c = passwordChecks(v);
  return c.length && c.upper && c.lower && c.digit ? null : MSG.passwordWeak;
}

export function checkConfirm(password: string, confirm: string): string | null {
  return password === confirm ? null : MSG.confirmMismatch;
}
