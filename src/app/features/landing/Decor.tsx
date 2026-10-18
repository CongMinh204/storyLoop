import type { CSSProperties } from "react";
import { C } from "../../lib/colors";

// Họa tiết trang trí lấy từ tranh minh hoạ (ngôi sao lấp lánh, lá rơi). Chỉ để trang trí nên ẩn với trình đọc màn hình.

export function Sparkle({ size, color, delay = 0, style }: { size: number; color: string; delay?: number; style: CSSProperties }) {
  return (
    <svg aria-hidden="true" className="ld-twinkle" width={size} height={size} viewBox="0 0 24 24"
      style={{ position: "absolute", pointerEvents: "none", "--d": `${delay}ms`, ...style } as CSSProperties}>
      <path d="M12 0 L14.6 9.4 L24 12 L14.6 14.6 L12 24 L9.4 14.6 L0 12 L9.4 9.4 Z" fill={color} />
    </svg>
  );
}

const LEAVES = [
  { left: "6%", size: 22, color: C.primary, t: 17, d: 0, dx: 60, rot: 200 },
  { left: "22%", size: 16, color: C.rewardDeep, t: 21, d: 6, dx: -40, rot: -180 },
  { left: "44%", size: 20, color: C.primaryText, t: 19, d: 11, dx: 70, rot: 240 },
  { left: "63%", size: 15, color: C.ctaText, t: 23, d: 3, dx: -60, rot: -220 },
  { left: "80%", size: 21, color: C.primary, t: 18, d: 9, dx: 50, rot: 180 },
  { left: "92%", size: 14, color: C.rewardDeep, t: 22, d: 14, dx: -50, rot: -200 },
];

// Vài chiếc lá khẽ rơi chậm trong nền phần đầu trang. Đặt trong khung position: relative; overflow: hidden.
export function FloatingLeaves() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {LEAVES.map((l, i) => (
        <svg key={i} className="ld-leaf" width={l.size} height={l.size} viewBox="0 0 24 24"
          style={{ position: "absolute", top: 0, left: l.left, "--t": `${l.t}s`, "--d": `${l.d}s`, "--dx": `${l.dx}px`, "--rot": `${l.rot}deg` } as CSSProperties}>
          <path d="M4 20C3 11 9 3 21 3c0 11-6 17-17 17z" fill={l.color} fillOpacity=".5" />
          <path d="M4 20C9 14 13 10 18 6" stroke={l.color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}
