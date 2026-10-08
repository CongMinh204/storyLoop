import { useState } from "react";
import { useIsMobile } from "./lib/useIsMobile";
import type { Screen, StoryEntry } from "./types";
import { DEFAULT_STORY } from "./data/library";
import { MobileApp } from "./layouts/MobileApp";
import { DesktopApp } from "./layouts/DesktopApp";

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  const isMobile = useIsMobile();
  const [screen, setScreen] = useState<Screen>("home");
  const [story, setStory] = useState<StoryEntry>(DEFAULT_STORY);
  function openStory(s: StoryEntry) {
    setStory(s);
    setScreen("chat");
  }
  return isMobile
    ? <MobileApp screen={screen} setScreen={setScreen} story={story} onOpenStory={openStory} />
    : <DesktopApp screen={screen} setScreen={setScreen} story={story} onOpenStory={openStory} />;
}
