import { Award, BookOpen, Brain, Compass, Flame, Star, Target, Trophy, type LucideIcon } from "lucide-react";

// Thành tích ở màn Tiến trình. Tiến độ tính từ dữ liệu thật (features/progress/learningStats.ts); đạt được
// không cộng XP.
// - metric: chỉ số dùng để tính
// - target: mức cần đạt; "all" = toàn bộ nội dung đang có (vd. mọi truyện HSK 2), tự tăng khi thêm truyện
// - tone: tông màu của thành tích
export type AchievementMetric =
  | "storiesDone"   // số truyện đã hoàn thành
  | "hsk2Done"      // số truyện HSK 2 đã hoàn thành
  | "endings"       // số kết thúc đã mở (truyện rẽ nhánh)
  | "bestStreak"    // chuỗi ngày học dài nhất (chỉ khi đăng nhập)
  | "words"         // số từ đã học
  | "bloomDone"     // số bài đã xong đủ 4 cấp Bloom
  | "xp";           // tổng XP (chỉ khi đăng nhập)

export type Achievement = {
  id: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  metric: AchievementMetric;
  target: number | "all";
  tone: "reward" | "primary" | "ink";
};

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-story", title: "Chinh Phục Thiên Đình", desc: "Hoàn thành câu chuyện đầu tiên", Icon: Trophy, metric: "storiesDone", target: 1, tone: "reward" },
  { id: "five-stories", title: "Mọt Truyện", desc: "Hoàn thành 5 câu chuyện", Icon: Award, metric: "storiesDone", target: 5, tone: "primary" },
  { id: "hsk2", title: "Chinh Phục HSK 2", desc: "Hoàn thành mọi truyện HSK 2 đang có", Icon: Target, metric: "hsk2Done", target: "all", tone: "primary" },
  { id: "explorer", title: "Nhà Thám Hiểm", desc: "Mở 10 kết thúc khác nhau", Icon: Compass, metric: "endings", target: 10, tone: "ink" },
  { id: "streak-3", title: "Khởi Động", desc: "Học 3 ngày liên tiếp", Icon: Flame, metric: "bestStreak", target: 3, tone: "reward" },
  { id: "streak-14", title: "Streak Thần Thánh", desc: "Học 14 ngày liên tiếp", Icon: Flame, metric: "bestStreak", target: 14, tone: "reward" },
  { id: "streak-30", title: "Rồng Lửa", desc: "Duy trì streak 30 ngày", Icon: Flame, metric: "bestStreak", target: 30, tone: "reward" },
  { id: "words-100", title: "Từ Điển Sống", desc: "Học 100 từ vựng", Icon: BookOpen, metric: "words", target: 100, tone: "primary" },
  { id: "bloom", title: "Bloom Master", desc: "Hoàn thành cả 4 cấp Bloom của một bài", Icon: Brain, metric: "bloomDone", target: 1, tone: "ink" },
  { id: "xp-1000", title: "Ngôi Sao Đang Lên", desc: "Đạt 1,000 XP tổng cộng", Icon: Star, metric: "xp", target: 1000, tone: "reward" },
];
