import { STORY_LIBRARY, DEFAULT_STORY } from "../../data/library";
import { getStoryScript } from "../../data/stories";
import { useStoryProgress } from "../../lib/progress";
import type { StoryEntry } from "../../types";

export type ContinueTarget = {
  story: StoryEntry;
  pct: number;
  mode: "continue" | "start" | "replay";   // đang học dở · chưa chơi · đã hoàn thành hết
};

// Truyện hiện ở banner "hành trình" trang chủ:
// 1. truyện đang học dở, chơi gần nhất;
// 2. nếu không có: truyện đầu tiên (theo thư viện) chưa chơi;
// 3. nếu đã hoàn thành hết: truyện chơi gần nhất, để chơi lại.
export function useContinueStory(): ContinueTarget {
  const progress = useStoryProgress();
  const playable = Object.values(STORY_LIBRARY).flat().filter(s => !s.premium && getStoryScript(s.id));
  const byRecent = (a: StoryEntry, b: StoryEntry) => (progress[b.id]?.lastPlayed ?? 0) - (progress[a.id]?.lastPlayed ?? 0);

  const started = playable.filter(s => progress[s.id]?.status === "started").sort(byRecent)[0];
  if (started) return { story: started, pct: progress[started.id].pct, mode: "continue" };

  const fresh = playable.find(s => !progress[s.id]);
  if (fresh) return { story: fresh, pct: 0, mode: "start" };

  return { story: [...playable].sort(byRecent)[0] ?? DEFAULT_STORY, pct: 100, mode: "replay" };
}

// Câu tiêu đề và nút của banner theo trạng thái
export function heroText(t: ContinueTarget) {
  const hero = t.story.hero ?? "mới";
  if (t.mode === "continue") return { headline: "Tiếp tục hành trình", hero, button: "Tiếp tục chơi" };
  if (t.mode === "start") return { headline: "Bắt đầu hành trình", hero, button: "Bắt đầu chơi" };
  return { headline: "Chơi lại hành trình", hero, button: "Chơi lại" };
}
