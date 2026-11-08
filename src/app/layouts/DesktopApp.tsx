import { C } from "../lib/colors";
import type { Screen, StoryEntry } from "../types";
import { DesktopSidebar } from "./desktop/DesktopChrome";
import { DesktopHomeScreen } from "../features/home/DesktopHome";
import { LibraryScreen } from "../features/library/LibraryScreen";
import { DesktopChatScreen } from "../features/chat/DesktopChatScreen";
import { DesktopBloomScreen } from "../features/bloom/DesktopBloom";
import { DesktopProgressWrapper } from "../features/progress/DesktopProgress";
import { DesktopProfileScreen } from "../features/profile/DesktopProfile";
import { useAuth } from "../features/auth/useAuth";
import { AuthScreen } from "../features/auth/AuthScreen";
import { LandingScreen } from "../features/landing/LandingScreen";

export function DesktopApp({ screen, setScreen, story, onOpenStory, onBack, onLibrary }: { screen: Screen; setScreen: (s: Screen) => void; story: StoryEntry; onOpenStory: (s: StoryEntry) => void; onBack: () => void; onLibrary: () => void }) {
  const { screen: authScreen, needsEntry } = useAuth();
  // Đăng nhập / đăng ký là hộp thoại nổi lên trên nền: trang giới thiệu (chưa chọn gì) hoặc chính app (đang chơi khách)
  const dialog = authScreen === "login" || authScreen === "register" ? <AuthScreen view={authScreen} /> : null;
  if (needsEntry || authScreen === "welcome") return <><LandingScreen />{dialog}</>;
  return (
    <>
      <div style={{ display: "flex", height: "100vh", background: C.bg, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <DesktopSidebar active={screen} onChange={setScreen} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {screen === "home"     && <DesktopHomeScreen onOpenStory={onOpenStory} onOpenLibrary={onLibrary} />}
          {screen === "library"  && <LibraryScreen onOpenStory={onOpenStory} />}
          {screen === "chat"     && <DesktopChatScreen story={story} onHome={() => setScreen("home")} onBack={onBack} onLibrary={onLibrary} />}
          {screen === "bloom"    && <DesktopBloomScreen />}
          {screen === "progress" && <DesktopProgressWrapper />}
          {screen === "profile"  && <DesktopProfileScreen />}
        </div>
      </div>
      {dialog}
    </>
  );
}
