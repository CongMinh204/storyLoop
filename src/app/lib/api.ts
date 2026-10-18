// Gọi API của backend (thư mục server/). Địa chỉ lấy từ VITE_API_URL lúc build; không có thì app chỉ chạy
// chế độ khách như trước. Token lưu trong localStorage: frontend (github.io) và API (railway.app) khác site
// nên cookie httpOnly sẽ bị trình duyệt chặn.

const BASE = (import.meta.env.VITE_API_URL ?? "").trim().replace(/\/+$/, "");
export const API_ENABLED = BASE !== "";

export type Tokens = { accessToken: string; refreshToken: string };
export const TOKENS_KEY = "storyloop.auth.v1";

export class ApiError extends Error {
  constructor(public status: number, message: string, public fields?: Record<string, string>) {
    super(message);
  }
}

const OFFLINE = "Không kết nối được máy chủ. Hãy kiểm tra mạng rồi thử lại.";

// localStorage bị chặn (vd. chế độ ẩn danh chặn lưu trữ) thì giữ token trong bộ nhớ của tab
let memTokens: Tokens | null = null;

export function getTokens(): Tokens | null {
  try {
    const t = JSON.parse(localStorage.getItem(TOKENS_KEY) ?? "null");
    return t && typeof t.accessToken === "string" && typeof t.refreshToken === "string" ? t : null;
  } catch {
    return memTokens;
  }
}

export function setTokens(t: Tokens | null) {
  memTokens = t;
  try {
    if (t) localStorage.setItem(TOKENS_KEY, JSON.stringify(t));
    else localStorage.removeItem(TOKENS_KEY);
  } catch { /* không lưu được thì chỉ giữ trong bộ nhớ */ }
}

// Gọi khi phiên đăng nhập hết hạn hẳn (refresh token không còn dùng được)
let sessionExpired: () => void = () => {};
export function onSessionExpired(fn: () => void) {
  sessionExpired = fn;
}

// Khoá dùng chung giữa các tab cùng trình duyệt (Web Locks); trình duyệt cũ không có thì chỉ khoá trong tab
export async function withLock<T>(name: string, fn: () => Promise<T>): Promise<T> {
  const locks = typeof navigator !== "undefined" ? navigator.locks : undefined;
  if (!locks) return fn();
  let result!: T;
  await locks.request(name, async () => { result = await fn(); }); // giữ khoá tới khi fn xong
  return result;
}

async function send(path: string, method: string, body: unknown, token?: string): Promise<Response> {
  try {
    return await fetch(BASE + path, {
      method,
      headers: {
        ...(body !== undefined ? { "content-type": "application/json" } : {}),
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new ApiError(0, OFFLINE);
  }
}

async function read<T>(res: Response): Promise<T> {
  if (res.status === 204) return undefined as T;
  const data = await res.json().catch(() => null);
  if (res.ok) return data as T;
  throw new ApiError(res.status, data?.error ?? "Có lỗi xảy ra, hãy thử lại", data?.fields);
}

// Refresh token chỉ dùng được một lần, nên mọi request (và mọi tab) cùng gặp 401 phải chờ chung một lượt
// refresh; nếu không, lượt thứ hai dùng token cũ sẽ bị server từ chối và người dùng bị đăng xuất nhầm.
let refreshing: Promise<boolean> | null = null;

function refreshTokens(expiredAccess: string): Promise<boolean> {
  refreshing ??= withLock("storyloop-refresh", async () => {
    const current = getTokens();
    if (!current) return false;
    if (current.accessToken !== expiredAccess) return true; // tab khác vừa refresh xong
    const res = await send("/api/auth/refresh", "POST", { refreshToken: current.refreshToken });
    if (res.ok) {
      setTokens(await res.json());
      return true;
    }
    if (res.status === 401) {
      setTokens(null);
      sessionExpired();
    }
    return false;
  }).finally(() => { refreshing = null; });
  return refreshing;
}

// auth: true thì gắn access token, hết hạn thì tự refresh rồi gửi lại một lần.
// Lỗi ném ra là ApiError: status 0 = không kết nối được, fields = lỗi của từng ô trong form.
export async function api<T>(
  path: string,
  { method = "GET", body, auth = false }: { method?: string; body?: unknown; auth?: boolean } = {},
): Promise<T> {
  if (!API_ENABLED) throw new ApiError(0, "Chưa cấu hình máy chủ");
  let token = auth ? getTokens()?.accessToken : undefined;
  if (auth && !token) throw new ApiError(401, "Bạn cần đăng nhập");

  let res = await send(path, method, body, token);
  if (res.status === 401 && token && (await refreshTokens(token))) {
    token = getTokens()?.accessToken;
    res = await send(path, method, body, token);
  }
  return read<T>(res);
}
