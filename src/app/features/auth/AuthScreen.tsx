import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { C } from "../../lib/colors";
import { Dialog } from "../../components/ui/dialog";
import { closeAuth } from "./useAuth";
import { LoginForm, RegisterForm } from "./AuthForms";

// Đăng nhập / đăng ký là hộp thoại nổi lên giữa màn hình, nền phía sau (trang giới thiệu, hoặc chính app nếu
// đang chơi khách) bị làm tối và mờ. Dùng Dialog của Radix nên có sẵn: khoá cuộn nền, giữ phím Tab trong hộp
// thoại, đóng bằng Esc hoặc bấm ra ngoài, và trình đọc màn hình hiểu đây là hộp thoại.

// Chiều rộng nút Google (Google cho phép 200–400px): theo bề ngang thật của hộp thoại
function useGoogleWidth() {
  const calc = () => {
    const vw = typeof window === "undefined" ? 500 : window.innerWidth;
    const card = Math.min(500, vw - 24);
    return Math.min(400, Math.max(200, card - (vw >= 640 ? 80 : 48)));
  };
  const [w, setW] = useState(calc);
  useEffect(() => {
    const on = () => setW(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return w;
}

export function AuthScreen({ view }: { view: "login" | "register" }) {
  const googleWidth = useGoogleWidth();
  return (
    <Dialog open onOpenChange={open => { if (!open) closeAuth(); }}>
      <DialogPrimitive.Portal>
        {/* Dùng thẳng Overlay của Radix: DialogOverlay trong ui/dialog.tsx không nhận ref nên React báo cảnh báo */}
        <DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-[rgba(25,62,65,.5)] backdrop-blur-[6px]" />
        <DialogPrimitive.Content
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-50 max-h-[calc(100dvh-24px)] w-[calc(100%-24px)] max-w-[500px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[28px] bg-[var(--sl-surface)] px-6 py-9 shadow-[0_30px_80px_rgba(25,62,65,.35)] duration-200 outline-none sm:px-10"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {view === "login" ? <LoginForm googleWidth={googleWidth} /> : <RegisterForm googleWidth={googleWidth} />}
          {/* Nằm sau form trong DOM nên ô nhập đầu tiên được focus khi mở; vị trí hiển thị là góc phải trên */}
          <DialogPrimitive.Close aria-label="Đóng"
            className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full text-[var(--sl-ink-muted)] transition-colors hover:bg-[var(--sl-bg-sunken)] hover:text-[var(--sl-ink)] focus-visible:ring-2 focus-visible:ring-[var(--sl-primary)] focus-visible:outline-none">
            <X size={20} style={{ color: C.inkMuted }} />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
}
