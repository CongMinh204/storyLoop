import bcrypt from "bcryptjs";
import { randomInt } from "node:crypto";

const ROUNDS = 11;

export const hashPassword = (password: string) => bcrypt.hash(password, ROUNDS);
export const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash);

// Email không tồn tại thì vẫn so khớp với một hash giả, để thời gian phản hồi không lộ email nào có tài khoản
let dummyHash: string | undefined;
export async function fakeVerify(password: string) {
  dummyHash ??= await bcrypt.hash("storyloop-dummy-password", ROUNDS);
  await bcrypt.compare(password, dummyHash);
}

// Bỏ các ký tự dễ nhìn nhầm (I, l, O, 0, 1) vì mật khẩu dùng thử được đọc/chép tay
const UPPER = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const LOWER = "abcdefghijkmnpqrstuvwxyz";
const DIGIT = "23456789";

// Mật khẩu ngẫu nhiên đạt luật trong shared/validation (có chữ hoa, chữ thường, số)
export function randomPassword(length = 14) {
  const pick = (s: string) => s[randomInt(s.length)];
  const chars = [pick(UPPER), pick(LOWER), pick(DIGIT)];
  while (chars.length < length) chars.push(pick(UPPER + LOWER + DIGIT));
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}
