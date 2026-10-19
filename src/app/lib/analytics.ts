// Google Analytics 4 (gtag.js). Chỉ chạy ở bản build (npm run build), lúc npm run dev không gửi gì
// để số liệu không lẫn lượt chạy thử. Measurement ID là mã công khai; muốn đổi thì đặt VITE_GA_ID.

const GA_ID = (import.meta.env.VITE_GA_ID ?? "G-T3735NH85E").trim();
const ENABLED = import.meta.env.PROD && !!GA_ID;

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: Gtag }
}

// Gọi một lần lúc mở app: nạp gtag.js và gửi lượt xem trang đầu tiên
export function initAnalytics() {
  if (!ENABLED || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  // gtag.js đọc đúng đối tượng arguments, nên không đổi thành (...args) => push(args)
  window.gtag = function gtag() { window.dataLayer!.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (ENABLED) window.gtag?.("event", event, params);
}

// App đổi màn bằng state chứ không đổi địa chỉ, nên mỗi lần đổi màn gửi một lượt xem trang "ảo"
// (vd. /library) để báo cáo Pages and screens tách được từng màn.
export function trackScreen(screen: string) {
  track("page_view", {
    page_title: `StoryLoop - ${screen}`,
    page_location: `${location.origin}/${screen}`,
  });
}
