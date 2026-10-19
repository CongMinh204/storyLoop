import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./lib/useIsMobile";
import type { Screen, StoryEntry } from "./types";
import { DEFAULT_STORY } from "./data/library";
import { MobileApp } from "./layouts/MobileApp";
import { DesktopApp } from "./layouts/DesktopApp";
import { track, trackScreen } from "./lib/analytics";

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  const isMobile = useIsMobile();
  const [screen, setScreen] = useState<Screen>("home");
  const [story, setStory] = useState<StoryEntry>(DEFAULT_STORY);
  // Lượt xem trang đầu đã được gửi lúc mở app, chỉ gửi thêm khi đổi màn
  const firstScreen = useRef(true);
  useEffect(() => {
    if (firstScreen.current) { firstScreen.current = false; return; }
    trackScreen(screen);
  }, [screen]);
  function openStory(s: StoryEntry) {
    track("story_start", { story_id: s.id, story_title: s.title });
    setStory(s);
    setScreen("chat");
  }
  return isMobile
    ? <MobileApp screen={screen} setScreen={setScreen} story={story} onOpenStory={openStory} />
    : <DesktopApp screen={screen} setScreen={setScreen} story={story} onOpenStory={openStory} />;
}
