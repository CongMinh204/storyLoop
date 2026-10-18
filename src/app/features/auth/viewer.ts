import { useAuth } from "./useAuth";

// Thông tin người đang dùng app để hiển thị (trang chủ, Profile, thanh bên). XP và streak chỉ có khi đã
// đăng nhập; khách hiện lời nhắc đăng ký thay cho các số này.

// "Nguyễn Minh Anh" -> "MA": chữ cái đầu của hai từ cuối (tên gọi), giống avatar trong bản Figma
export function initials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return words.slice(-2).map(w => w[0]).join("").toUpperCase() || "?";
}

const STREAK_BADGES = [3, 7, 14, 20, 30, 50, 100, 200, 365];

// Dòng streak ở trang chủ, vd. "14 ngày streak 🔥 — Còn 6 ngày đến huy hiệu 20 ngày!"
export function streakLine(streak: number) {
  if (streak <= 0) return { title: "Chưa có streak", sub: "Học hôm nay để bắt đầu chuỗi ngày học!" };
  const next = STREAK_BADGES.find(b => b > streak);
  return {
    title: `${streak} ngày streak 🔥`,
    sub: next ? `Còn ${next - streak} ngày đến huy hiệu ${next} ngày!` : "Giữ vững mỗi ngày!",
  };
}

export const formatNumber = (n: number) => n.toLocaleString("en-US"); // "3,890" như bản Figma

export function useViewer() {
  const auth = useAuth();
  const user = auth.user;
  const name = user?.fullName ?? "Khách";
  return {
    signedIn: auth.session,
    authEnabled: auth.enabled,
    user,
    name,
    initials: initials(name),
    email: user?.email ?? "",
    hasPassword: user?.hasPassword ?? false,
    xp: user?.xp ?? 0,
    streak: user?.streak ?? 0,
  };
}
