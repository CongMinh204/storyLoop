import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

// Cho phép phần tử hiện dần khi cuộn tới. Không có IntersectionObserver (trình duyệt cũ) thì hiện ngay.
export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useInView<T extends Element>(margin = "0px 0px -8% 0px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion()) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { rootMargin: margin, threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, seen] as const;
}

// Phần tử tự hiện dần (trượt lên + rõ dần) khi cuộn tới; delay (ms) để các thẻ trong cùng một hàng lần lượt xuất hiện
export function Reveal({ as = "div", delay = 0, className = "", style, children }: {
  as?: ElementType; delay?: number; className?: string; style?: CSSProperties; children: ReactNode;
}) {
  const Tag = as;
  const [ref, seen] = useInView<HTMLElement>();
  return (
    <Tag ref={ref} className={`ld-reveal${seen ? " is-in" : ""} ${className}`.trim()} style={{ ...style, "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}

// Đếm số từ 0 tới target khi active = true (vd. khi thẻ kết quả cuộn tới). Giảm chuyển động thì hiện luôn số cuối.
export function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion()) { setValue(target); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3)))); // chậm dần về cuối
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}
