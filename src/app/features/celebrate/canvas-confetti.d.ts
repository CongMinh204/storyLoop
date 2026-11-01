// canvas-confetti không kèm sẵn kiểu TypeScript: khai báo phần app dùng tới
declare module "canvas-confetti" {
  type Options = {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    ticks?: number;
    gravity?: number;
    scalar?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    zIndex?: number;
    disableForReducedMotion?: boolean;
  };
  export default function confetti(options?: Options): Promise<null> | null;
}
