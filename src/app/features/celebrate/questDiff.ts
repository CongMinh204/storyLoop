import type { DailyStats } from "../../lib/progress";
import type { AchievementState } from "../progress/learningStats";

// "Nhiệm vụ" ở màn sau bài học = Thử thách hàng ngày + Thành tích (data/achievements.ts). Không có luật riêng:
// so số liệu lúc bắt đầu lượt chơi với lúc kết thúc để biết nhiệm vụ nào vừa có thêm tiến độ.

// Số liệu lúc bắt đầu lượt chơi. daily = null khi chưa đăng nhập.
export type QuestSnapshot = {
  day: string;   // YYYY-MM-DD, giờ Việt Nam
  daily: { xp: number; done: boolean } | null;
  achievements: AchievementState[];
};

export type QuestItem =
  | { kind: "daily"; from: number; to: number; goal: number; bonus: number; claimed: boolean }
  | { kind: "achievement"; achievement: AchievementState; from: number; to: number; unlocked: boolean };

export const MAX_QUESTS = 5;   // số hàng tối đa trên màn nhiệm vụ

// Nhiệm vụ vừa tăng tiến độ: thử thách hôm nay đứng đầu, rồi thành tích vừa mở khoá, rồi thành tích đang làm.
// after.daily = null khi là khách hoặc chưa có kết quả của server.
export function questItems(before: QuestSnapshot, after: { daily: DailyStats | null; achievements: AchievementState[] }): QuestItem[] {
  const items: QuestItem[] = [];

  const d = after.daily;
  if (d) {
    // Lượt chơi bắt đầu từ hôm trước (qua nửa đêm) thì hôm nay tính từ 0
    const start = d.day === before.day ? before.daily : null;
    const from = start?.xp ?? 0;
    const wasDone = start?.done ?? false;
    const claimed = d.done && !wasDone;
    if (!wasDone && (d.xp > from || claimed)) items.push({ kind: "daily", from, to: d.xp, goal: d.goal, bonus: d.bonus, claimed });
  }

  const prev = new Map(before.achievements.map(a => [a.id, a]));
  const achievements = after.achievements.flatMap(a => {
    const b = prev.get(a.id);
    if (!b || b.status === "done" || a.progress <= b.progress) return [];
    return [{ kind: "achievement" as const, achievement: a, from: b.progress, to: a.progress, unlocked: a.status === "done" }];
  });
  achievements.sort((x, y) => Number(y.unlocked) - Number(x.unlocked));

  return [...items, ...achievements];
}
