/// <reference path="./canvas-confetti.d.ts" />
import confetti from "canvas-confetti";
import { C } from "../../lib/colors";

const COLORS = [C.reward, C.cta, C.primary, C.rewardBorder];

// Bắn pháo giấy một lần (tăng chuỗi, mở khoá thành tích). Tắt khi người dùng bật giảm chuyển động.
export function burst(size: "big" | "small" = "big") {
  try {
    void confetti(size === "big"
      ? { particleCount: 90, spread: 75, startVelocity: 42, origin: { y: 0.42 }, colors: COLORS, disableForReducedMotion: true }
      : { particleCount: 40, spread: 55, startVelocity: 30, origin: { y: 0.5 }, colors: COLORS, disableForReducedMotion: true });
  } catch { /* không vẽ được canvas thì thôi */ }
}
