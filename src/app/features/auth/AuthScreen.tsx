import { ArrowLeft, Flame, Layers, MessageCircle } from "lucide-react";
import { C } from "../../lib/colors";
import { Button } from "../../components/ui/button";
import { chooseGuest, openAuth, type AuthView } from "./useAuth";
import { LoginForm, RegisterForm } from "./AuthForms";

// Màn chào (giới thiệu app + 3 lựa chọn), màn đăng nhập và màn đăng ký.
// Mobile: nằm trong khung điện thoại thay cho nội dung và thanh điều hướng.
// Desktop: thẻ hai cột giữa màn hình, cột trái giới thiệu app, cột phải là lựa chọn / form.

const GRADIENT = `linear-gradient(135deg, ${C.teal} 0%, #0e7490 100%)`;
const TAGLINE = "Học tiếng Trung qua những câu chuyện tương tác";

const HIGHLIGHTS = [
  { Icon: MessageCircle, color: C.teal, bg: C.tealBg, title: "Nhập vai theo cốt truyện", text: "Trò chuyện với nhân vật bằng tiếng Trung, mỗi lựa chọn mở ra một hướng đi khác." },
  { Icon: Layers, color: C.purple, bg: C.purpleBg, title: "Ôn tập Bloom và flashcard", text: "Nhớ, hiểu, dùng, viết: ôn từ vựng của từng câu chuyện theo bốn bước." },
  { Icon: Flame, color: C.orange, bg: "#fff4ee", title: "Theo dõi tiến độ", text: "Tích XP, giữ chuỗi ngày học và học tiếp trên mọi thiết bị." },
];

function Brand({ size }: { size: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: lg ? 12 : 10 }}>
      <div style={{ width: lg ? 46 : 38, height: lg ? 46 : 38, borderRadius: lg ? 14 : 12, background: "rgba(255,255,255,.18)", border: "1px solid rgba(255,255,255,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: lg ? 24 : 20 }}>🐼</div>
      <span style={{ fontSize: lg ? 24 : 20, fontWeight: 800, color: "#fff", letterSpacing: "-.01em" }}>StoryLoop</span>
    </div>
  );
}

// onDark: chữ trắng trên nền teal (cột trái desktop); không thì nền trắng (mobile)
function Highlights({ onDark }: { onDark?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: onDark ? 18 : 12 }}>
      {HIGHLIGHTS.map(({ Icon, color, bg, title, text }) => (
        <div key={title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{ width: 36, height: 36, borderRadius: 11, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: onDark ? "rgba(255,255,255,.16)" : bg }}>
            <Icon size={18} color={onDark ? "#fff" : color} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: onDark ? "#fff" : C.dark, marginBottom: 2 }}>{title}</div>
            <div style={{ fontSize: 12, lineHeight: 1.5, color: onDark ? "rgba(255,255,255,.8)" : C.muted }}>{text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function WelcomeActions() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Button onClick={() => openAuth("register")} className="h-12 rounded-full bg-[#f97316] text-[14px] font-bold text-white shadow-[0_8px_18px_rgba(249,115,22,.28)] hover:bg-[#ea6a0f]">
        Tạo tài khoản
      </Button>
      <Button variant="outline" onClick={() => openAuth("login")} className="h-12 rounded-full border-[#1a8fa0] bg-white text-[14px] font-bold text-[#1a8fa0] hover:bg-[#eef8fa] hover:text-[#1a8fa0]">
        Đăng nhập
      </Button>
      <Button variant="ghost" onClick={chooseGuest} className="h-11 rounded-full text-[13px] font-semibold text-[#6b7a99] hover:bg-[#f0f2f5]">
        Chơi với tư cách khách
      </Button>
      <p style={{ fontSize: 11, color: C.faint, textAlign: "center", margin: 0 }}>Chơi khách: tiến độ chỉ lưu trên trình duyệt này.</p>
    </div>
  );
}

function BackButton() {
  return (
    <button onClick={() => openAuth("welcome")} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontFamily: "inherit", padding: 0 }}>
      <ArrowLeft size={16} /> Quay lại
    </button>
  );
}

export function AuthScreen({ view, mobile }: { view: AuthView; mobile?: boolean }) {
  const googleWidth = mobile ? 311 : 340;
  const form = view === "login" ? <LoginForm googleWidth={googleWidth} />
    : view === "register" ? <RegisterForm googleWidth={googleWidth} />
      : null;

  if (mobile) {
    return (
      <div style={{ flex: 1, overflowY: "auto", background: C.white }}>
        {form ? (
          <div style={{ padding: "12px 24px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
            <BackButton />
            {form}
          </div>
        ) : (
          <div style={{ padding: "14px 16px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: GRADIENT, borderRadius: 20, padding: "24px 20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -14, bottom: -14, fontSize: 96, opacity: 0.12, lineHeight: 1, pointerEvents: "none" }}>🐼</div>
              <Brand size="md" />
              <div style={{ fontSize: 19, fontWeight: 700, color: "#fff", lineHeight: 1.35, marginTop: 16, position: "relative" }}>{TAGLINE}</div>
            </div>
            <div style={{ padding: "0 4px" }}><Highlights /></div>
            <WelcomeActions />
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", overflowY: "auto", background: C.bg, fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", padding: 24 }}>
      <div style={{ margin: "auto", display: "flex", width: "100%", maxWidth: 860, background: C.white, borderRadius: 24, overflow: "hidden", border: `0.5px solid ${C.border}`, boxShadow: "0 24px 60px rgba(26,35,64,.10)" }}>
        <div style={{ flex: "0 0 380px", background: GRADIENT, padding: "40px 34px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ position: "absolute", right: -24, bottom: -24, fontSize: 150, opacity: 0.1, lineHeight: 1, pointerEvents: "none" }}>🐼</div>
          <Brand size="lg" />
          <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", lineHeight: 1.35 }}>{TAGLINE}</div>
          <Highlights onDark />
        </div>
        <div style={{ flex: 1, padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
          {form ? (
            <>
              <BackButton />
              {form}
            </>
          ) : (
            <>
              <div>
                <h1 style={{ fontSize: 24, fontWeight: 800, color: C.dark, margin: 0 }}>Bắt đầu học ngay</h1>
                <p style={{ fontSize: 13, color: C.muted, margin: "8px 0 0", lineHeight: 1.6 }}>Tạo tài khoản để lưu tiến độ trên mọi thiết bị, hoặc chơi thử ngay với tư cách khách.</p>
              </div>
              <WelcomeActions />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
