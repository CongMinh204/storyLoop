import { C } from "../lib/colors";
import type { Screen, StoryEntry } from "../types";
import { DEFAULT_STORY } from "../data/library";
import { MobileStatusBar, MobileBottomNav } from "./mobile/MobileChrome";
import { MobileHomeScreen } from "../features/home/MobileHome";
import { LibraryScreen } from "../features/library/LibraryScreen";
import { MobileChatScreen } from "../features/chat/MobileChatScreen";
import { MobileBloomScreen } from "../features/bloom/MobileBloom";
import { MobileProgressWrapper } from "../features/progress/MobileProgress";
import { MobileProfileScreen } from "../features/profile/MobileProfile";

export function MobileApp({ screen, setScreen, story, onOpenStory }: { screen: Screen; setScreen: (s: Screen) => void; story: StoryEntry; onOpenStory: (s: StoryEntry) => void }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(160deg,#0f172a 0%,#1e293b 50%,#0f2d4a 100%)", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "20px 0" }}>
      <div style={{ width: 375, height: 812, borderRadius: 44, overflow: "hidden", boxShadow: "0 48px 96px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.09)", display: "flex", flexDirection: "column", position: "relative", background: C.bg }}>
        <MobileStatusBar />
        <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          {screen === "home"     && <MobileHomeScreen onChat={() => onOpenStory(DEFAULT_STORY)} />}
          {screen === "library"  && <LibraryScreen onOpenStory={onOpenStory} />}
          {screen === "chat"     && <MobileChatScreen story={story} onHome={() => setScreen("home")} />}
          {screen === "bloom"    && <MobileBloomScreen />}
          {screen === "progress" && <MobileProgressWrapper />}
          {screen === "profile"  && <MobileProfileScreen />}
        </div>
        <MobileBottomNav active={screen} onChange={setScreen} />
        <div style={{ height: 28, background: C.white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ width: 120, height: 4, background: C.dark, borderRadius: 2, opacity: 0.14 }} />
        </div>
      </div>
    </div>
  );
}
