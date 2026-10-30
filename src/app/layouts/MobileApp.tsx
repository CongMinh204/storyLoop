import { C, GRADIENT } from "../lib/colors";
import type { Screen, StoryEntry } from "../types";
import { MobileBottomNav } from "./mobile/MobileChrome";
import { MobileHomeScreen } from "../features/home/MobileHome";
import { LibraryScreen } from "../features/library/LibraryScreen";
import { MobileChatScreen } from "../features/chat/MobileChatScreen";
import { MobileBloomScreen } from "../features/bloom/MobileBloom";
import { MobileProgressWrapper } from "../features/progress/MobileProgress";
import { MobileProfileScreen } from "../features/profile/MobileProfile";
import { useAuth } from "../features/auth/useAuth";
import { AuthScreen } from "../features/auth/AuthScreen";
import { LandingScreen } from "../features/landing/LandingScreen";

export function MobileApp({ screen, setScreen, story, onOpenStory, onBack, onLibrary }: { screen: Screen; setScreen: (s: Screen) => void; story: StoryEntry; onOpenStory: (s: StoryEntry) => void; onBack: () => void; onLibrary: () => void }) {
  const { screen: authScreen, needsEntry } = useAuth();
  // Đăng nhập / đăng ký là hộp thoại nổi lên trên nền: trang giới thiệu (chưa chọn gì) hoặc chính app (đang chơi khách)
  const dialog = authScreen === "login" || authScreen === "register" ? <AuthScreen view={authScreen} /> : null;
  // Trang giới thiệu là trang cuộn toàn màn hình
  if (needsEntry || authScreen === "welcome") return <><LandingScreen />{dialog}</>;
  // App chiếm trọn màn hình điện thoại (class sl-shell ở index.html: cao đúng bằng phần nhìn thấy, kể cả khi thanh địa chỉ ẩn/hiện).
  // Cửa sổ hẹp trên máy tính: cột rộng tối đa 480px nằm giữa, hai bên là nền tối.
  return (
    <>
      <div className="sl-shell" style={{ display: "flex", justifyContent: "center", background: GRADIENT.frame, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div style={{ width: "100%", maxWidth: 480, height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", background: C.bg }}>
          {/* Chừa chỗ cho tai thỏ / thanh trạng thái khi mở như app cài trên màn hình chính */}
          <div style={{ height: "env(safe-area-inset-top)", background: C.surface, flexShrink: 0 }} />
          <div style={{ flex: 1, minHeight: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {screen === "home"     && <MobileHomeScreen onOpenStory={onOpenStory} onOpenLibrary={onLibrary} />}
            {screen === "library"  && <LibraryScreen onOpenStory={onOpenStory} />}
            {screen === "chat"     && <MobileChatScreen story={story} onHome={() => setScreen("home")} onBack={onBack} onLibrary={onLibrary} />}
            {screen === "bloom"    && <MobileBloomScreen />}
            {screen === "progress" && <MobileProgressWrapper />}
            {screen === "profile"  && <MobileProfileScreen />}
          </div>
          <MobileBottomNav active={screen} onChange={setScreen} />
        </div>
      </div>
      {dialog}
    </>
  );
}
