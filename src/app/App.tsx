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
  // Màn mà người dùng đến từ đó khi vào một câu chuyện, để nút "Quay lại" về đúng chỗ (Thư viện, Trang chủ...)
  const [backTo, setBackTo] = useState<Screen>("home");
  // Lượt xem trang đầu đã được gửi lúc mở app, chỉ gửi thêm khi đổi màn
  const firstScreen = useRef(true);
  useEffect(() => {
    if (firstScreen.current) { firstScreen.current = false; return; }
    trackScreen(screen);
  }, [screen]);
  // Đổi màn. Vào câu chuyện từ một màn khác thì nhớ màn đó (kể cả khi vào bằng mục "Câu chuyện" ở thanh bên)
  function navigate(next: Screen) {
    if (next === "chat" && screen !== "chat") setBackTo(screen);
    setScreen(next);
  }
  function openStory(s: StoryEntry) {
    track("story_start", { story_id: s.id, story_title: s.title });
    setStory(s);
    navigate("chat");
  }
  const goBack = () => setScreen(backTo);
  const openLibrary = () => setScreen("library");
  const shared = { screen, setScreen: navigate, story, onOpenStory: openStory, onBack: goBack, onLibrary: openLibrary };
  return isMobile ? <MobileApp {...shared} /> : <DesktopApp {...shared} />;
}
