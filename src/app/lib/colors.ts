// ─── Bảng màu "Story Adventure" ───────────────────────────────────────────────
// Nguồn màu duy nhất của app. Code dùng C.<vai trò>; CSS (theme.css, class Tailwind) dùng biến
// --sl-<vai-trò> do applyColorTokens() ghi từ chính bảng này lúc khởi động (main.tsx).
// 5 màu gốc; mọi màu khác suy ra từ chúng (pha với trắng/nền hoặc làm sậm). Số trong ngoặc là độ
// tương phản WCAG: chữ thường cần 4.5, chữ lớn (≥19px đậm) cần 3.

export const PALETTE = {
  cream: "#F7FBF4",    // nền chính
  deepTeal: "#193E41", // chữ, nền tối
  teal: "#178886",     // màu chính
  orange: "#D45D33",   // nút kêu gọi
  gold: "#F5C24C",     // phần thưởng
};

export const C = {
  // Nền và mặt
  bg: PALETTE.cream,          // nền trang
  surface: "#FFFFFF",         // thẻ, thanh, hộp thoại
  bgSunken: "#ECF2EB",        // ô nhập, vùng chat, tab chưa chọn
  border: "#DAE2DD",
  borderStrong: "#C0CCC7",

  // Chữ
  ink: PALETTE.deepTeal,      // chữ chính (11.1 trên bg)
  inkMuted: "#4A6868",        // chữ phụ (5.8 trên bg)
  inkFaint: "#536F70",        // chữ phụ nhỏ, gợi ý (5.2 trên bg, ≥4.7 trên mọi nền nhạt)
  inkBg: "#EDF0F0",           // chip/thẻ sắc tối nhạt (thay cho tím cũ), chữ ink (10.1)
  inkBorder: "#D1D8D9",
  onFill: "#FFFFFF",          // chữ, icon trên nền teal / cam / tối

  // Màu chính: header, tab đang chọn, liên kết, thanh tiến độ
  primary: PALETTE.teal,      // nền, thanh, icon; chữ trắng trên nền này chỉ dùng cỡ lớn (4.3)
  primaryHover: "#187675",    // (chữ trắng 5.4)
  primaryDeep: "#186C6C",     // nền có chữ trắng cỡ nhỏ (6.2), đầu gradient
  primaryText: "#187271",     // liên kết, chữ màu chính (5.4 trên bg)
  primaryBg: "#EAF4F4",
  primaryBorder: "#BEDEDD",

  // Nút kêu gọi chính (Đăng ký, Bắt đầu chơi, Tiếp tục): chữ trắng ĐẬM, cỡ ≥19px (3.9, chuẩn chữ lớn)
  cta: PALETTE.orange,
  ctaHover: "#B25736",        // (chữ trắng 4.9)
  ctaBg: "#FBF0ED",
  ctaBorder: "#F2CEC2",
  ctaText: "#9F4626",         // chữ sắc cam trên nền sáng (6.2); cam gốc làm chữ chỉ đạt 3.7

  // Phần thưởng: XP, streak, huy hiệu, ngôi sao. Chữ trên nền vàng dùng ink (7.0)
  reward: PALETTE.gold,
  rewardBg: "#FDF3DB",        // chữ ink (10.5)
  rewardBorder: "#FAE1A6",
  rewardDeep: "#7B6126",      // icon/chữ sắc vàng trên nền sáng (5.3 trên rewardBg)

  // Trạng thái
  success: "#187271",         // đúng / thành công (= primaryText)
  successBg: "#EAF4F4",
  successBorder: "#BEDEDD",
  danger: "#9F4626",          // lỗi, đăng xuất (6.2 trên trắng)
  dangerBg: "#FBF0ED",
  dangerBorder: "#F1CBBE",

  // Nền ngoài khung điện thoại (giao diện mobile trên màn rộng)
  frame: PALETTE.deepTeal,
  frameDeep: "#0F2527",
};

export const GRADIENT = {
  // Khung hero, thẻ hồ sơ, màn chào: chữ nằm ở góc trên trái nên bắt đầu từ sắc đậm
  primary: `linear-gradient(135deg, ${C.primaryDeep} 0%, ${C.primary} 100%)`,
  frame: `linear-gradient(160deg, ${C.frameDeep} 0%, ${C.frame} 100%)`,
  premium: `linear-gradient(135deg, ${C.cta}, ${C.reward})`,
};

// Chip nằm trên khung teal (vd. "HSK 1" ở hero): nền ink trong suốt, chữ trắng (≥5.7)
export const ON_PRIMARY_CHIP = "rgba(25, 62, 65, .3)";

// Đổ bóng nhẹ màu cam dưới nút kêu gọi
export const CTA_SHADOW = "0 8px 18px rgba(212, 93, 51, .28)";

// Ghi C thành biến CSS --sl-* để theme.css và class Tailwind (vd. bg-[var(--sl-primary)]) dùng chung
export function applyColorTokens(root: HTMLElement = document.documentElement) {
  for (const [k, v] of Object.entries(C)) root.style.setProperty(`--sl-${k.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`, v);
}
