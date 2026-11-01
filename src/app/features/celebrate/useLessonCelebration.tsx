import { useEffect, useRef, useState } from "react";
import type { ProgressStats } from "../../lib/progress";
import { useViewer, vnToday } from "../auth/viewer";
import { useLearningSummary } from "../progress/learningStats";
import { questItems, type QuestItem, type QuestSnapshot } from "./questDiff";
import { markShown, wasShown } from "./streakSeen";
import { LessonCelebration } from "./LessonCelebration";

// Màn chúc mừng sau khi kết thúc truyện, dùng cho cả hai engine (mobile và desktop):
// 1. Chuỗi ngày: bài hoàn thành đầu tiên trong ngày (giờ Việt Nam), chỉ khi đã đăng nhập. Server đã tính
//    hôm nay vào chuỗi từ lần báo tiến độ đầu tiên, nên số chạy từ streak - 1 lên streak.
// 2. Nhiệm vụ: thử thách hôm nay và thành tích vừa có thêm tiến độ trong lượt chơi này.
// Không có gì để hiện thì không mở. Engine gọi finish() lúc tới kết thúc, restart() khi chơi lại.

export type CelebrationSteps = { streak: number | null; day: string; quests: QuestItem[] };

const MIN_DELAY = 1500;   // để người chơi kịp thấy tên kết thúc trước khi hộp thoại hiện

export function useLessonCelebration() {
  const v = useViewer();
  const summary = useLearningSummary();
  const now = {
    uid: v.signedIn ? v.user?.id ?? null : null,
    snapshot: {
      day: vnToday(),
      daily: v.signedIn ? { xp: v.daily.xp, done: v.daily.done } : null,
      achievements: summary.achievements,
    } as QuestSnapshot,
  };
  const latest = useRef(now);
  latest.current = now;
  const start = useRef(now.snapshot);   // số liệu lúc bắt đầu lượt chơi
  const run = useRef(0);                // tăng mỗi lần chơi lại: kết quả của lượt cũ thì bỏ
  const mounted = useRef(true);
  const [arrived, setArrived] = useState<{ stats: ProgressStats | null } | null>(null);
  const [steps, setSteps] = useState<CelebrationSteps | null>(null);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  // Tính các bước sau lần vẽ lại do kết quả về: lúc này tiến độ và XP trên máy đã cập nhật
  useEffect(() => {
    if (!arrived) return;
    setArrived(null);
    const { stats } = arrived;
    const { uid, snapshot } = latest.current;
    const day = stats?.daily?.day ?? vnToday();
    const streak = stats && uid && stats.streak > 0 && !wasShown(uid, day) ? stats.streak : null;
    const quests = questItems(start.current, { daily: stats?.daily ?? null, achievements: snapshot.achievements });
    if (streak === null && quests.length === 0) return;
    if (streak !== null && uid) markShown(uid, day);
    setSteps({ streak, day, quests });
  }, [arrived]);

  // result: kết quả của markCompleted; later: thẻ kết thúc hiện trễ hơn lúc gọi bao nhiêu ms
  function finish(result: Promise<ProgressStats | null>, later = 0) {
    const r = run.current;
    const wait = new Promise(resolve => setTimeout(resolve, later + MIN_DELAY));
    void Promise.all([result, wait]).then(([stats]) => {
      if (mounted.current && run.current === r) setArrived({ stats });
    });
  }

  function restart() {
    run.current++;
    start.current = latest.current.snapshot;
    setArrived(null);
    setSteps(null);
  }

  const dialog = steps ? <LessonCelebration steps={steps} onClose={() => setSteps(null)} /> : null;
  return { finish, restart, dialog };
}
