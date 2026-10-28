import type { StoryEntry } from "../../types";
import { getStoryScript } from "../../data/stories";
import { ChatStoryEngine } from "./ChatStoryEngine";
import { BranchingStoryEngine } from "./BranchingStoryEngine";
import { StoryComingSoon } from "./StoryComingSoon";

// onBack: về màn người dùng vừa đến (Thư viện, Trang chủ...); onHome: nút "Về trang chủ" cuối truyện; onLibrary: chọn truyện khác
export function MobileChatScreen({ story, onHome, onBack, onLibrary }: { story: StoryEntry; onHome: () => void; onBack: () => void; onLibrary: () => void }) {
  const script = getStoryScript(story.id);
  if (!script) return <StoryComingSoon story={story} onLibrary={onLibrary} />;
  return script.kind === "quiz"
    ? <ChatStoryEngine key={story.id} story={story} turns={script.turns} onHome={onHome} onBack={onBack} />
    : <BranchingStoryEngine key={story.id} story={story} tree={script.story} onHome={onHome} onBack={onBack} />;
}
