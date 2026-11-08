import rightUrl from "../../assets/sounds/right_answer.wav";
import wrongUrl from "../../assets/sounds/wrong_answer.wav";
import completeUrl from "../../assets/sounds/complet_lesson.wav";

// Âm thanh phản hồi khi học: chọn đúng, chọn sai, hoàn thành bài (truyện, Phòng tập).
// Dùng Web Audio thay cho thẻ <audio>: phát được cả khi gọi từ bộ hẹn giờ (vd. tới kết thúc truyện),
// còn iOS chỉ cho <audio> phát ngay trong lúc người dùng chạm. AudioContext được mở khoá ở lần chạm đầu tiên.
// Không có Web Audio hoặc tải file lỗi thì im lặng, không ảnh hưởng gì tới bài học.

export type SoundName = "right" | "wrong" | "complete";

const URLS: Record<SoundName, string> = { right: rightUrl, wrong: wrongUrl, complete: completeUrl };

type AudioCtor = typeof AudioContext;
const AC: AudioCtor | undefined =
  typeof window === "undefined" ? undefined : window.AudioContext ?? (window as unknown as { webkitAudioContext?: AudioCtor }).webkitAudioContext;

let ctx: AudioContext | null = null;
const raw = new Map<SoundName, Promise<ArrayBuffer | null>>();       // file đã tải, chưa giải mã
const decoded = new Map<SoundName, Promise<AudioBuffer | null>>();   // đã giải mã, sẵn sàng phát
let current: { src: AudioBufferSourceNode; endsAt: number } | null = null;

function getCtx(): AudioContext | null {
  if (!ctx && AC) ctx = new AC();
  return ctx;
}

function fetchRaw(name: SoundName) {
  let p = raw.get(name);
  if (!p) {
    p = fetch(URLS[name]).then(r => (r.ok ? r.arrayBuffer() : null)).catch(() => null);
    raw.set(name, p);
  }
  return p;
}

function getBuffer(name: SoundName, c: AudioContext) {
  let p = decoded.get(name);
  if (!p) {
    p = fetchRaw(name).then(b => (b ? c.decodeAudioData(b.slice(0)) : null)).catch(() => null);
    decoded.set(name, p);
  }
  return p;
}

// Tải trước cả ba file khi vào màn học, để lần phát đầu không bị trễ. Chưa tạo AudioContext ở đây.
export function preloadSounds() {
  (Object.keys(URLS) as SoundName[]).forEach(fetchRaw);
}

// Đúng / sai: cắt âm đang phát rồi phát ngay. Hoàn thành: nếu đang có âm đúng/sai thì chờ nó phát xong.
export function playSound(name: SoundName) {
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") void c.resume();
  void getBuffer(name, c).then(buf => {
    if (!buf) return;
    const now = c.currentTime;
    const startAt = name === "complete" && current && current.endsAt > now ? current.endsAt : now;
    if (startAt === now && current) {
      try { current.src.stop(); } catch { /* đã dừng */ }
    }
    const src = c.createBufferSource();
    src.buffer = buf;
    src.connect(c.destination);
    src.start(startAt);
    current = { src, endsAt: startAt + buf.duration };
  });
}

// Mở khoá AudioContext ở lần chạm / bấm phím đầu tiên (Safari, Chrome trên điện thoại)
if (typeof window !== "undefined" && AC) {
  const unlock = () => {
    const c = getCtx();
    if (c && c.state === "suspended") void c.resume();
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
  };
  window.addEventListener("pointerdown", unlock);
  window.addEventListener("keydown", unlock);
}
