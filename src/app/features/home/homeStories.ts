import { useStoryProgress, type StoryProgress } from "../../lib/progress";
import type { StoryEntry } from "../../types";
import { PLAYABLE } from "./continueStory";

const HOME_STORY_COUNT = 5;

// Các truyện ở mục "Thư viện câu chuyện" trang chủ, chỉ lấy truyện chơi được: đang học dở (chơi gần nhất
// trước), rồi chưa chơi (theo thứ tự thư viện), rồi đã hoàn thành. Bỏ truyện đang ở banner (excludeId).
export function useHomeStories(excludeId: string): { story: StoryEntry; prog?: StoryProgress }[] {
  const progress = useStoryProgress();
  const list = PLAYABLE.filter(s => s.id !== excludeId);
  const byRecent = (a: StoryEntry, b: StoryEntry) => (progress[b.id]?.lastPlayed ?? 0) - (progress[a.id]?.lastPlayed ?? 0);
  return [
    ...list.filter(s => progress[s.id]?.status === "started").sort(byRecent),
    ...list.filter(s => !progress[s.id]),
    ...list.filter(s => progress[s.id]?.status === "completed").sort(byRecent),
  ].slice(0, HOME_STORY_COUNT).map(story => ({ story, prog: progress[story.id] }));
}
