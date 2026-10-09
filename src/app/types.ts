export type StoryEntry = {
  id: string;                                // khoá liên kết tới kịch bản trong data/stories
  title: string; hsk: number; lv: string; color: string; emoji: string;
  tags: string[]; chapters: number; progress?: number; premium?: boolean;
  summary?: string;                          // mô tả ngắn, hiện ở panel bên của desktop
};

export type ChatChoice = {
  zh: string; py: string;
  correct: boolean;
  analysis: string;
  vocab: { word: string; py: string; vi: string }[];
};
export type ChatTurn = {
  id: number;
  speaker: string; emoji: string;
  zh: string; py: string; vi: string;       // NPC line
  situation: string;                         // context shown above NPC bubble
  hint: string;
  choices: ChatChoice[];
  replyCorrect: string;                      // NPC next line if correct
  replyWrong: string;                        // NPC next line if wrong
};

// ─── Truyện rẽ nhánh (vd. data/stories/meo-hoa-hoa.ts) ───
export type VocabItem = { word: string; py: string; vi: string };   // py có thể rỗng

// Một đáp án trong bước "pick": đúng một đáp án có correct = true (câu gốc của truyện).
// Chọn sai không đổi nhánh, truyện vẫn chạy tiếp; chỉ hiện phân tích lỗi và tính vào điểm.
export type PickOption = {
  zh: string; py: string; vi: string;
  correct: boolean;
  analysis: { structure: string; explain: string };
  vocab: VocabItem[];
};

export type StoryLine =
  | { kind: "narration"; text: string }                              // lời dẫn truyện
  | { kind: "quote"; zh: string; py?: string; vi?: string }          // chữ viết/âm thanh trong truyện
  | { kind: "npc"; speaker: string; zh: string; py: string; vi: string }
  | { kind: "player"; zh: string; py: string; vi: string }           // câu im lặng của "你", vd. "……", tự hiện
  | { kind: "pick"; options: PickOption[] };                         // người chơi chọn câu của "你"

export type StoryChoice = {
  label?: string;                                                    // nhãn tiếng Việt, vd. "Đồng ý ngay"
  zh: string; py: string; vi: string;
  next: string;                                                      // id cảnh tiếp theo
  analysis: { structure: string; explain: string };                 // phân tích câu, không chấm đúng/sai
  vocab: VocabItem[];
};

export type StoryNode = {
  id: string;
  lines: StoryLine[];
  choices?: StoryChoice[];                                           // có lựa chọn → dừng chờ người chơi
  next?: string;                                                     // không có lựa chọn → tự sang cảnh này
  ending?: { title: string; titleVi: string };                      // cảnh kết thúc
};

export type BranchingStory = {
  start: string;
  characters: Record<string, string>;                               // tên nhân vật → emoji
  nodes: Record<string, StoryNode>;
  vocab: VocabItem[];                                                // từ vựng của cả truyện
};

export type BloomStage ={ id: number; type: "nhớ"|"hiểu"|"dùng"|"viết"; label: string; color: string; bg: string; border: string };

export type Screen = "home" | "chat" | "bloom" | "progress" | "profile" | "library";

export type HSK1Card = { ch: string; py: string; vi: string; exCh: string; exPy: string; exVi: string; topicIdx: number };
