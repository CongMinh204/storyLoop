import { useSyncExternalStore } from "react";
import { api, API_ENABLED, ApiError, getTokens, onSessionExpired, setTokens, TOKENS_KEY, type Tokens } from "../../lib/api";
import { flushProgress, onProgressStats, setProgressAccount } from "../../lib/progress";

// Trạng thái đăng nhập dùng chung cho cả app (mobile và desktop), đồng bộ giữa các tab.
// Không có VITE_API_URL thì luôn là khách và không hiện màn chào, app chạy như trước khi có backend.

export type Me = {
  id: string;
  email: string;
  fullName: string;
  role: "user" | "admin";
  hasPassword: boolean;
  hasGoogle: boolean;
  createdAt: string;
  xp: number;
  streak: number;
};
export type RegisterForm = { fullName: string; email: string; password: string; confirmPassword: string };
export type UpdateMeForm = { fullName?: string; currentPassword?: string; newPassword?: string; confirmPassword?: string };
type AuthResponse = Tokens & { user: Me };

const ME_KEY = "storyloop.me.v1";       // thông tin người dùng, để mở app là hiện tên ngay
const ENTRY_KEY = "storyloop.entry.v1"; // "guest" khi người chơi đã chọn chơi với tư cách khách

export type AuthView = "welcome" | "login" | "register";

type State = {
  session: boolean;        // đang có phiên đăng nhập
  user: Me | null;         // null khi là khách (hoặc vừa mở app, đang tải thông tin)
  guestChosen: boolean;    // đã bấm "Chơi với tư cách khách"
  view: AuthView | null;   // màn chào / đăng nhập / đăng ký đang được mở
};

function readMe(): Me | null {
  try {
    const v = JSON.parse(localStorage.getItem(ME_KEY) ?? "null");
    return v && typeof v.id === "string" ? v : null;
  } catch {
    return null;
  }
}

function writeMe(me: Me | null) {
  try {
    if (me) localStorage.setItem(ME_KEY, JSON.stringify(me));
    else localStorage.removeItem(ME_KEY);
  } catch { /* chỉ giữ trong bộ nhớ */ }
}

function readGuestChosen() {
  try { return localStorage.getItem(ENTRY_KEY) === "guest"; } catch { return false; }
}

function writeGuestChosen(guest: boolean) {
  try {
    if (guest) localStorage.setItem(ENTRY_KEY, "guest");
    else localStorage.removeItem(ENTRY_KEY);
  } catch { /* chỉ giữ trong bộ nhớ */ }
}

function fromStorage(): Omit<State, "view"> {
  const session = API_ENABLED && !!getTokens();
  return { session, user: session ? readMe() : null, guestChosen: readGuestChosen() };
}

let state: State = { ...fromStorage(), view: null };
const listeners = new Set<() => void>();

function set(next: Partial<State>) {
  state = { ...state, ...next };
  listeners.forEach(l => l());
}

function setUser(user: Me) {
  writeMe(user);
  set({ session: true, user });
  setProgressAccount(user.id);
}

function signIn(res: AuthResponse) {
  setTokens({ accessToken: res.accessToken, refreshToken: res.refreshToken });
  setUser(res.user);
  set({ view: null });
}

// Về trạng thái chưa đăng nhập; màn chào sẽ hiện lại
function signOutLocal() {
  setTokens(null);
  writeMe(null);
  writeGuestChosen(false);
  setProgressAccount(null);
  set({ session: false, user: null, guestChosen: false, view: null });
}

// Mở trang giới thiệu / hộp thoại đăng nhập / đăng ký (vd. khách bấm "Đăng ký" ở trang chủ hay Profile)
export function openAuth(view: AuthView) {
  if (API_ENABLED) set({ view });
}

// Khách quay lại trang giới thiệu (bỏ lựa chọn "chơi khách"). Tiến độ chơi khách vẫn còn trên máy.
// Người đã đăng nhập không dùng lối này (muốn thoát thì đăng xuất).
export function showIntro() {
  if (!API_ENABLED || state.session) return;
  writeGuestChosen(false);
  set({ guestChosen: false, view: null });
}

// Đóng hộp thoại đăng nhập / đăng ký: về trang giới thiệu (nếu chưa chọn gì) hoặc về lại app (nếu đang chơi khách)
export function closeAuth() {
  set({ view: null });
}

// Các hàm dưới ném ApiError khi thất bại: message là câu báo lỗi, fields là lỗi của từng ô trong form

export async function login(email: string, password: string) {
  signIn(await api<AuthResponse>("/api/auth/login", { method: "POST", body: { email, password } }));
}

export async function register(form: RegisterForm) {
  signIn(await api<AuthResponse>("/api/auth/register", { method: "POST", body: form }));
}

// idToken: chuỗi Google Identity Services trả về sau khi người dùng chọn tài khoản Google
export async function loginWithGoogle(idToken: string) {
  signIn(await api<AuthResponse>("/api/auth/google", { method: "POST", body: { idToken } }));
}

export async function logout() {
  // Gửi nốt tiến độ còn trong hàng đợi (chờ tối đa 3 giây), rồi mới huỷ phiên
  await Promise.race([flushProgress(), new Promise(r => setTimeout(r, 3000))]);
  const tokens = getTokens();
  signOutLocal();
  if (tokens) api("/api/auth/logout", { method: "POST", body: { refreshToken: tokens.refreshToken } }).catch(() => {});
}

export function chooseGuest() {
  writeGuestChosen(true);
  set({ guestChosen: true, view: null });
}

// Đổi họ tên và/hoặc mật khẩu; đổi mật khẩu thì các máy khác bị đăng xuất, máy này vẫn giữ phiên
export async function updateMe(form: UpdateMeForm) {
  setUser(await api<Me>("/api/me", { method: "PATCH", body: form, auth: true }));
}

// Tải lại thông tin, XP và streak từ server
export async function refreshMe() {
  if (!getTokens()) return;
  try {
    setUser(await api<Me>("/api/me", { auth: true }));
  } catch (err) {
    // Tài khoản đã bị xoá thì đăng xuất; mất mạng thì giữ thông tin cũ (phiên hết hạn đã được xử lý ở api.ts)
    if (err instanceof ApiError && err.status === 404) signOutLocal();
  }
}

onSessionExpired(signOutLocal);

// Mỗi lần gửi tiến độ, server trả về XP và streak mới
onProgressStats(s => {
  if (state.user) setUser({ ...state.user, xp: s.xp, streak: s.streak });
});

if (state.user) setProgressAccount(state.user.id);
if (state.session) void refreshMe();

// Đăng nhập / đăng xuất ở tab khác của cùng trình duyệt
if (typeof window !== "undefined") {
  window.addEventListener("storage", e => {
    if (e.key !== null && e.key !== TOKENS_KEY && e.key !== ME_KEY && e.key !== ENTRY_KEY) return;
    const next = fromStorage();
    setProgressAccount(next.user?.id ?? null);
    set(next);
  });
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => { listeners.delete(l); };
}

export function useAuth() {
  const s = useSyncExternalStore(subscribe, () => state, () => state);
  // Chưa đăng nhập và chưa chọn chơi khách: hiện màn chào. Đã đăng nhập thì không bao giờ hiện các màn này.
  const needsEntry = API_ENABLED && !s.session && !s.guestChosen;
  return {
    ...s,
    needsEntry,
    enabled: API_ENABLED,
    googleEnabled: API_ENABLED && !!import.meta.env.VITE_GOOGLE_CLIENT_ID,
    screen: s.session ? null : s.view ?? (needsEntry ? "welcome" as const : null),
  };
}
