import { useState } from "react";
import { ApiError } from "../../lib/api";
import { checkConfirm, checkPassword } from "../../../../server/src/shared/validation";
import { updateMe } from "./useAuth";

// Trạng thái hộp "Đổi mật khẩu" ở Profile (mobile và desktop). Tài khoản chỉ dùng Google chưa có mật khẩu
// thì không cần nhập mật khẩu hiện tại (đặt mật khẩu lần đầu).
export function useChangePassword(hasPassword: boolean) {
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  function reset() {
    setOldPw(""); setNewPw(""); setConfirmPw(""); setMsg(null);
  }

  async function submit(onDone: () => void) {
    const error = (hasPassword && !oldPw ? "Vui lòng nhập mật khẩu hiện tại" : null)
      ?? checkPassword(newPw) ?? checkConfirm(newPw, confirmPw);
    if (error) { setMsg({ ok: false, text: error }); return; }
    setSaving(true);
    try {
      await updateMe({ ...(hasPassword ? { currentPassword: oldPw } : {}), newPassword: newPw, confirmPassword: confirmPw });
      setMsg({ ok: true, text: "Đổi mật khẩu thành công! Các thiết bị khác đã được đăng xuất." });
      setTimeout(() => { reset(); onDone(); }, 1500);
    } catch (err) {
      const field = err instanceof ApiError && err.fields ? Object.values(err.fields)[0] : undefined;
      setMsg({ ok: false, text: field ?? (err instanceof ApiError ? err.message : "Có lỗi xảy ra, hãy thử lại") });
    } finally {
      setSaving(false);
    }
  }

  return { oldPw, setOldPw, newPw, setNewPw, confirmPw, setConfirmPw, msg, saving, submit, reset };
}
