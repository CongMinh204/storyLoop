import { C } from "../lib/colors";
import type { Screen, StoryEntry } from "../types";
import { DEFAULT_STORY } from "../data/library";
import { DesktopSidebar } from "./desktop/DesktopChrome";
import { DesktopHomeScreen } from "../features/home/DesktopHome";
import { LibraryScreen } from "../features/library/LibraryScreen";
import { DesktopChatScreen } from "../features/chat/DesktopChatScreen";
import { DesktopBloomScreen } from "../features/bloom/DesktopBloom";
import { DesktopProgressWrapper } from "../features/progress/DesktopProgress";
import { DesktopProfileScreen } from "../features/profile/DesktopProfile";

export function DesktopApp({ screen, setScreen, story, onOpenStory }: { screen: Screen; setScreen: (s: Screen) => void; story: StoryEntry; onOpenStory: (s: StoryEntry) => void }) {
  return (
    <div style={{ display: "flex", height: "100vh", background: C.bg, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <DesktopSidebar active={screen} onChange={setScreen} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {screen === "home"     && <DesktopHomeScreen onChat={() => onOpenStory(DEFAULT_STORY)} />}
        {screen === "library"  && <LibraryScreen onOpenStory={onOpenStory} />}
        {screen === "chat"     && <DesktopChatScreen story={story} onHome={() => setScreen("home")} />}
        {screen === "bloom"    && <DesktopBloomScreen />}
        {screen === "progress" && <DesktopProgressWrapper />}
        {screen === "profile"  && <DesktopProfileScreen />}
      </div>
    </div>
  );
}
