import type { StoryEntry } from "../../types";
import { getStoryScript } from "../../data/stories";
import { ChatStoryEngine } from "./ChatStoryEngine";
import { BranchingStoryEngine } from "./BranchingStoryEngine";
import { StoryComingSoon } from "./StoryComingSoon";

export function MobileChatScreen({ story, onHome }: { story: StoryEntry; onHome: () => void }) {
  const script = getStoryScript(story.id);
  if (!script) return <StoryComingSoon story={story} onHome={onHome} />;
  return script.kind === "quiz"
    ? <ChatStoryEngine key={story.id} story={story} turns={script.turns} onHome={onHome} />
    : <BranchingStoryEngine key={story.id} story={story} tree={script.story} onHome={onHome} />;
}
