import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Flame } from "lucide-react";
import { C } from "../../lib/colors";
import { streakLine } from "../auth/viewer";
import { burst } from "./confetti";

// Màn tăng chuỗi ngày: ngọn lửa hiện lên, số chạy từ streak - 1 lên streak như đồng hồ đếm, rồi ô hôm nay
// trong dải 7 ngày được tô. Giảm chuyển động: hiện ngay số mới, không pháo giấy.

const WEEK = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const FLIP_AT = 700;   // ms: lúc số bắt đầu chạy

// 7 ngày Thứ Hai → Chủ Nhật của tuần chứa `day` (YYYY-MM-DD); offset: số ngày so với `day`, âm = đã qua
function weekOf(day: string) {
  const monday = (new Date(`${day}T00:00:00Z`).getUTCDay() + 6) % 7;
  return WEEK.map((label, i) => ({ label, offset: i - monday }));
}

export function StreakStep({ streak, day }: { streak: number; day: string }) {
  const reduce = !!useReducedMotion();
  const [flipped, setFlipped] = useState(reduce);

  useEffect(() => {
    if (reduce) { setFlipped(true); return; }
    const t = setTimeout(() => { setFlipped(true); burst("big"); }, FLIP_AT);
    return () => clearTimeout(t);
  }, [reduce]);

  const shown = flipped ? streak : streak - 1;
  const title = streak === 1 ? "Bắt đầu chuỗi mới!" : `${streak} ngày streak!`;
  const reveal = { initial: { opacity: 0, y: 8 }, animate: flipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 } };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={reduce ? { duration: 0.3 } : { type: "spring", stiffness: 260, damping: 16 }}
      >
        <motion.div
          animate={flipped && !reduce ? { scale: [1, 1.18, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ width: 128, height: 128, borderRadius: "50%", background: C.rewardBg, border: `0.5px solid ${C.rewardBorder}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 0 12px ${C.rewardBg}` }}
        >
          <Flame size={66} color={C.cta} fill={C.reward} strokeWidth={1.8} />
        </motion.div>
      </motion.div>

      {/* Số chạy: số cũ trượt lên, số mới trượt từ dưới lên. Trình đọc màn hình đọc tiêu đề bên dưới. */}
      <div aria-hidden style={{ position: "relative", width: "100%", height: 92, overflow: "hidden", marginTop: 18 }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={shown}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ position: "absolute", inset: 0, fontSize: 84, fontWeight: 800, lineHeight: "92px", color: C.cta, fontVariantNumeric: "tabular-nums" }}
          >
            {shown}
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.ctaText, letterSpacing: ".08em", textTransform: "uppercase" }}>ngày streak</div>

      <motion.div {...reveal} transition={{ duration: 0.35, delay: 0.25 }} style={{ marginTop: 14 }}>
        <DialogPrimitive.Title style={{ fontSize: 22, fontWeight: 800, color: C.ink, margin: 0 }}>{title}</DialogPrimitive.Title>
        <div style={{ fontSize: 13, color: C.inkMuted, marginTop: 4 }}>{streakLine(streak).sub}</div>
      </motion.div>

      {/* Tuần này: chuỗi là các ngày liên tiếp tới hôm nay nên tô được chỉ từ số streak */}
      <div style={{ display: "flex", width: "100%", maxWidth: 340, marginTop: 22, padding: "12px 6px", border: `0.5px solid ${C.border}`, borderRadius: 16, background: C.surface }}>
        {weekOf(day).map(({ label, offset }) => {
          const today = offset === 0;
          const lit = offset <= 0 && offset > -streak && (!today || flipped);
          return (
            <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: today ? 800 : 600, color: today ? C.ink : C.inkMuted }}>{label}</span>
              <motion.div
                animate={today && flipped && !reduce ? { scale: [0.6, 1.25, 1] } : { scale: 1 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                style={{
                  width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  background: lit ? C.reward : C.bgSunken,
                  border: `1.5px ${today && !lit ? "dashed" : "solid"} ${lit ? C.reward : today ? C.rewardDeep : C.border}`,
                }}
              >
                {lit && <Check size={15} color={C.ink} strokeWidth={3} />}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
