import type { StoryEntry } from "../../types";
import { getStoryTurns } from "../../data/stories";
import { ChatStoryEngine } from "./ChatStoryEngine";
import { StoryComingSoon } from "./StoryComingSoon";

export function MobileChatScreen({ story, onHome }: { story: StoryEntry; onHome: () => void }) {
  const turns = getStoryTurns(story.id);
  if (!turns) return <StoryComingSoon story={story} onHome={onHome} />;
  return <ChatStoryEngine key={story.id} story={story} turns={turns} onHome={onHome} />;
}
