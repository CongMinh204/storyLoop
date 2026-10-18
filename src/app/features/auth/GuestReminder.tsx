import { CloudUpload } from "lucide-react";
import { C } from "../../lib/colors";
import { openAuth, showIntro, useAuth } from "./useAuth";

const linkStyle: React.CSSProperties = { background: "none", border: "none", padding: 0, color: C.primaryText, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "inherit" };

// Lời nhắc cho khách ở trang chủ và Profile. Không có backend (thiếu VITE_API_URL) thì không hiện.
export function GuestReminder() {
  const { enabled, session } = useAuth();
  if (!enabled || session) return null;
  return (
    <div style={{ background: C.primaryBg, border: `0.5px solid ${C.primaryBorder}`, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 38, height: 38, background: C.primary, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <CloudUpload size={18} color={C.onFill} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, marginBottom: 2 }}>Đăng ký để lưu tiến độ trên mọi máy</div>
        <div style={{ fontSize: 10.5, color: C.inkMuted, lineHeight: 1.5 }}>
          Bạn đang chơi với tư cách khách.{" "}
          <button onClick={() => openAuth("login")} style={linkStyle}>Đăng nhập</button>
          {" · "}
          <button onClick={showIntro} style={linkStyle}>Về trang giới thiệu</button>
        </div>
      </div>
      <button onClick={() => openAuth("register")} style={{ background: C.primaryDeep, color: C.onFill, border: "none", borderRadius: 20, padding: "7px 13px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>
        Đăng ký
      </button>
    </div>
  );
}
