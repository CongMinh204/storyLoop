import { useEffect, useRef, useState } from "react";
import { ApiError } from "../../lib/api";
import { loginWithGoogle } from "./useAuth";

// Nút "Đăng nhập bằng Google" của Google Identity Services. Nút do Google vẽ (theo quy định thương hiệu
// của Google), chạy trong trình duyệt và trả về một ID token; server kiểm tra token đó rồi đăng nhập.
// Chỉ hiện khi có VITE_GOOGLE_CLIENT_ID (xem useAuth().googleEnabled).

type GoogleId = {
  initialize(config: { client_id: string; callback: (r: { credential?: string }) => void }): void;
  renderButton(el: HTMLElement, options: Record<string, unknown>): void;
};
declare global {
  interface Window { google?: { accounts: { id: GoogleId } } }
}

let script: Promise<void> | null = null;

function loadScript() {
  script ??= new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => { script = null; reject(new Error("gsi")); };
    document.head.appendChild(s);
  });
  return script;
}

export function GoogleButton({ text, width, onError }: {
  text: "signup_with" | "signin_with";
  width: number;                     // px, Google cho phép 200–400
  onError: (message: string) => void;
}) {
  const box = useRef<HTMLDivElement>(null);
  const report = useRef(onError);
  report.current = onError;
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    loadScript()
      .then(() => {
        const id = window.google?.accounts.id;
        if (!alive || !box.current || !id) return;
        id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "",
          callback: async ({ credential }) => {
            if (!credential) return;
            setBusy(true);
            try {
              await loginWithGoogle(credential); // thành công thì màn đăng nhập tự đóng
            } catch (err) {
              report.current(err instanceof ApiError ? err.message : "Đăng nhập Google không thành công, hãy thử lại");
            } finally {
              if (alive) setBusy(false);
            }
          },
        });
        id.renderButton(box.current, { type: "standard", theme: "outline", size: "large", shape: "pill", text, width, locale: "vi" });
      })
      .catch(() => report.current("Không tải được nút Google. Hãy kiểm tra mạng hoặc dùng email."));
    return () => { alive = false; };
  }, [text, width]);

  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: 44, opacity: busy ? 0.55 : 1, pointerEvents: busy ? "none" : undefined }}>
      <div ref={box} />
    </div>
  );
}
