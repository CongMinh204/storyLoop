import { CloudUpload } from "lucide-react";
import { C } from "../../lib/colors";
import { openAuth, useAuth } from "./useAuth";

// Lời nhắc cho khách ở trang chủ và Profile. Không có backend (thiếu VITE_API_URL) thì không hiện.
export function GuestReminder() {
  const { enabled, session } = useAuth();
  if (!enabled || session) return null;
  return (
    <div style={{ background: C.tealBg, border: "0.5px solid #bdeaf0", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 38, height: 38, background: C.teal, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <CloudUpload size={18} color="#fff" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, marginBottom: 2 }}>Đăng ký để lưu tiến độ trên mọi máy</div>
        <div style={{ fontSize: 10.5, color: C.muted, lineHeight: 1.5 }}>
          Bạn đang chơi với tư cách khách.{" "}
          <button onClick={() => openAuth("login")} style={{ background: "none", border: "none", padding: 0, color: C.teal, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "inherit" }}>Đăng nhập</button>
        </div>
      </div>
      <button onClick={() => openAuth("register")} style={{ background: C.teal, color: "#fff", border: "none", borderRadius: 20, padding: "7px 13px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>
        Đăng ký
      </button>
    </div>
  );
}
