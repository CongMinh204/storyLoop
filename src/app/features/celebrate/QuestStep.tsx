import { useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "motion/react";
import { Check, Flame, Zap } from "lucide-react";
import { C } from "../../lib/colors";
import { ACHIEVEMENT_TONE } from "../../data/achievements";
import { formatNumber } from "../auth/viewer";
import { burst } from "./confetti";
import { MAX_QUESTS, type QuestItem } from "./questDiff";

// Màn nhiệm vụ: mỗi nhiệm vụ vừa có thêm tiến độ là một hàng, thanh tiến độ chạy từ giá trị lúc bắt đầu
// lượt chơi tới giá trị mới, lần lượt từng hàng. Vừa nhận thưởng thử thách / mở khoá thành tích thì có nhãn
// và pháo giấy nhỏ. Giảm chuyển động: thanh hiện ngay giá trị mới.

const FIRST = 0.3;       // s: lúc thanh của hàng đầu bắt đầu chạy
const ROW_DELAY = 0.25;  // s: hàng sau chạy trễ hơn hàng trước
const FILL = 0.7;        // s: thời gian chạy của một thanh

const DAILY_TONE = { color: C.rewardDeep, bg: C.rewardBg, border: C.rewardBorder };   // giống thẻ ở trang chủ

export function QuestStep({ quests }: { quests: QuestItem[] }) {
  const reduce = !!useReducedMotion();
  const shown = quests.slice(0, MAX_QUESTS);
  const more = quests.length - shown.length;
  const firstWin = shown.findIndex(q => (q.kind === "daily" ? q.claimed : q.unlocked));

  useEffect(() => {
    if (reduce || firstWin < 0) return;
    const t = setTimeout(() => burst("small"), (FIRST + firstWin * ROW_DELAY + FILL) * 1000);
    return () => clearTimeout(t);
  }, [reduce, firstWin]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ textAlign: "center", marginBottom: 6 }}>
        <DialogPrimitive.Title style={{ fontSize: 22, fontWeight: 800, color: C.ink, margin: 0 }}>Nhiệm vụ</DialogPrimitive.Title>
        <div style={{ fontSize: 13, color: C.inkMuted, marginTop: 4 }}>Tiến độ bạn vừa đạt được trong bài này</div>
      </div>
      {shown.map((q, i) => (
        <QuestRow key={q.kind === "daily" ? "daily" : q.achievement.id} quest={q} delay={FIRST + i * ROW_DELAY} reduce={reduce} />
      ))}
      {more > 0 && <div style={{ fontSize: 12, color: C.inkMuted, textAlign: "center" }}>+{more} thành tích khác cũng tăng</div>}
    </div>
  );
}

function QuestRow({ quest: q, delay, reduce }: { quest: QuestItem; delay: number; reduce: boolean }) {
  const daily = q.kind === "daily";
  const tone = daily ? DAILY_TONE : ACHIEVEMENT_TONE[q.achievement.tone];
  const total = daily ? q.goal : q.achievement.total;
  const pct = (n: number) => (total > 0 ? Math.min(100, (n / total) * 100) : 0);
  const won = daily ? q.claimed : q.unlocked;
  const Icon = daily ? Flame : q.achievement.Icon;
  const value = Math.min(q.to, total);
  const count = daily ? `${value}/${total} XP` : `${formatNumber(value)}/${formatNumber(total)}`;
  const gain = daily ? `+${q.to - q.from} XP` : `+${formatNumber(q.to - q.from)}`;

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.max(0, delay - 0.2) }}
      style={{ display: "flex", alignItems: "center", gap: 12, background: tone.bg, border: `0.5px solid ${tone.border}`, borderRadius: 14, padding: "12px 14px" }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 12, background: daily ? C.reward : tone.color, color: daily ? C.ink : C.onFill, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={19} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {daily ? "Thử thách hàng ngày" : q.achievement.title}
          </div>
          {won ? (
            <motion.span
              initial={reduce ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 380, damping: 18, delay: reduce ? 0 : delay + FILL }}
              style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0, fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: daily ? C.reward : C.successBg, color: daily ? C.ink : C.success }}
            >
              {daily ? <><Zap size={10} /> +{q.bonus} XP</> : <><Check size={10} /> Mở khoá!</>}
            </motion.span>
          ) : (
            <span style={{ fontSize: 11, fontWeight: 700, color: C.primaryText, flexShrink: 0 }}>{gain}</span>
          )}
        </div>
        <div style={{ fontSize: 11, color: C.inkMuted, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {daily ? `Kiếm ${q.goal} XP hôm nay` : q.achievement.desc}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 7 }}>
          <div style={{ flex: 1, height: 6, background: daily ? C.rewardBorder : C.border, borderRadius: 20, overflow: "hidden" }}>
            <motion.div
              initial={{ width: `${pct(reduce ? q.to : q.from)}%` }}
              animate={{ width: `${pct(q.to)}%` }}
              transition={{ delay, duration: FILL, ease: "easeOut" }}
              style={{ height: 6, borderRadius: 20, background: tone.color }}
            />
          </div>
          <span style={{ fontSize: 10, color: C.inkFaint, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{count}</span>
        </div>
      </div>
    </motion.div>
  );
}
