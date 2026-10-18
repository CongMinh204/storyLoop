import type { CSSProperties } from "react";
import { C } from "../../lib/colors";

// Kiểu dùng chung của trang giới thiệu: tiêu đề dùng font có chân (giống chữ trong tranh minh hoạ),
// phần còn lại dùng Plus Jakarta Sans như toàn app.
export const FONT_DISPLAY = "'Playfair Display', Georgia, 'Times New Roman', serif";

// Khung nội dung chung, các phần tự co theo bề ngang màn hình
export const WRAP: CSSProperties = { width: "100%", maxWidth: 1120, margin: "0 auto", padding: "0 20px", boxSizing: "border-box" };

export const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export const heading = (size: string): CSSProperties => ({
  fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, lineHeight: 1.15, color: C.ink, margin: 0, letterSpacing: "-.01em",
  textWrap: "balance", // chia đều chữ giữa các dòng, tránh từ lẻ ở dòng cuối
});

export const sectionPad: CSSProperties = { padding: "clamp(56px, 8vw, 96px) 0", scrollMarginTop: 120 };
