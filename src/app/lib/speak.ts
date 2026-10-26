import { useSyncExternalStore } from "react";

// Phát âm tiếng Trung bằng giọng đọc có sẵn của trình duyệt (Web Speech API), không cần file âm thanh hay thư viện.
// Chất lượng phụ thuộc thiết bị; máy không có giọng tiếng Trung thì giao diện ẩn nút loa và báo cho người dùng.

export type SpeechStatus = "ok" | "no-voice" | "unsupported";

const synth: SpeechSynthesis | null =
  typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined" ? window.speechSynthesis : null;

const RATE = 0.85; // chậm hơn tốc độ thường một chút để người mới học nghe rõ

// Tiếng Trung phổ thông (zh-CN, zh-TW; bỏ tiếng Quảng zh-HK / yue)
const isMandarin = (v: SpeechSynthesisVoice) => /^(zh[-_](CN|TW|Hans|Hant)|zh$|cmn)/i.test(v.lang) && !/yue|HK/i.test(v.lang + v.name);

// Giọng nào tự nhiên hơn thì điểm cao hơn
function score(v: SpeechSynthesisVoice) {
  let s = /^zh[-_]CN/i.test(v.lang) ? 4 : 0;
  if (/natural|xiaoxiao|xiaoyi|yunxi|yunyang/i.test(v.name)) s += 3;
  if (/google/i.test(v.name)) s += 2;
  if (/ting-?ting|meijia|lili|siri/i.test(v.name)) s += 2;
  if (v.localService) s += 1;
  return s;
}

function pickVoice(): SpeechSynthesisVoice | null {
  if (!synth) return null;
  const list = synth.getVoices().filter(isMandarin);
  return list.sort((a, b) => score(b) - score(a))[0] ?? null;
}

// Bỏ phần trong ngoặc và ký hiệu không đọc được (vd. "~", "…") trước khi đọc
export function speechText(text: string) {
  return text.replace(/[（(][^）)]*[）)]/g, "").replace(/[~～…]/g, " ").replace(/\s+/g, " ").trim();
}

type State = { status: SpeechStatus; speaking: string | null };
let state: State = { status: synth ? "ok" : "unsupported", speaking: null };
const listeners = new Set<() => void>();
function set(patch: Partial<State>) {
  const next = { ...state, ...patch };
  if (next.status === state.status && next.speaking === state.speaking) return;
  state = next;
  listeners.forEach(l => l());
}

// Danh sách giọng nạp trễ trên nhiều trình duyệt: chưa nạp xong (rỗng) thì cứ coi là có (không ẩn nút vội),
// nạp xong mà không có giọng tiếng Trung nào thì báo "no-voice".
function refreshVoices() {
  if (!synth) return;
  const voices = synth.getVoices();
  set({ status: voices.length === 0 || pickVoice() ? "ok" : "no-voice" });
}
if (synth) {
  refreshVoices();
  synth.addEventListener?.("voiceschanged", refreshVoices);
}

export function stopSpeaking() {
  if (!synth) return;
  synth.cancel();
  set({ speaking: null });
}

// Đọc một đoạn. Đang đọc thì ngắt đoạn cũ rồi đọc đoạn mới. Với nút loa (toggle = true), bấm lần nữa khi đang đọc
// đúng đoạn đó thì dừng; "tự đọc" thì truyền toggle = false để luôn đọc.
export function speak(raw: string, toggle = true) {
  const text = speechText(raw);
  if (!synth || !text) return;
  if (toggle && state.speaking === text) { stopSpeaking(); return; }
  synth.cancel(); // Chrome hay kẹt hàng đợi nếu không huỷ trước khi đọc câu mới
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = RATE;
  const voice = pickVoice();
  if (voice) u.voice = voice;
  const done = () => { if (state.speaking === text) set({ speaking: null }); };
  u.onend = done;
  u.onerror = done;
  set({ speaking: text });
  synth.speak(u);
}

const subscribe = (l: () => void) => { listeners.add(l); return () => { listeners.delete(l); }; };
const snapshot = () => state;

export function useSpeech() {
  const s = useSyncExternalStore(subscribe, snapshot, snapshot);
  return { status: s.status, available: s.status === "ok", speaking: s.speaking, speak, stop: stopSpeaking };
}
