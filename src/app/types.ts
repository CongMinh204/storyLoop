export type StoryEntry = {
  id: string;                                // khoá liên kết tới kịch bản trong data/stories
  title: string; hsk: number; lv: string; color: string; emoji: string;
  tags: string[]; chapters: number; premium?: boolean;
  summary?: string;                          // mô tả ngắn, hiện ở panel bên của desktop
  // Banner "hành trình" ở trang chủ (tiến độ thật nằm ở lib/progress.ts)
  hero?: string;                             // nối sau "Tiếp tục hành trình", vd. "của Wei Lin"
  character?: string;                        // vd. "Wei Lin"
  minutes?: number;                          // thời lượng ước tính một lượt chơi
  quote?: string;                            // câu trích dẫn trên thẻ truyện (desktop)
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
export type VocabItem = {
  word: string; py: string; vi: string;                              // py có thể rỗng
  ex?: { zh: string; py: string; vi: string };                       // câu ví dụ trong truyện → thẻ flashcard
};

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

// ─── Phòng tập: mỗi truyện là một bài, có bộ Bloom 4 cấp và bộ flashcard ───
export type BloomNho  = { type: "nhớ"; story: string; q: string; char: string; pinyin: string; pinyinColor: string; opts: string[]; correct: number; explain: string };
export type BloomHieu = { type: "hiểu"; story: string; q: string; sent: string; sentVi: string; opts: string[]; optsVi: string[]; correct: number; explain: string };
export type BloomDung = { type: "dùng"; story: string; q: string; prompt: string; tmpl: string; tmplVi: string; ans: string; hint: string; explain: string };
export type BloomViet = {
  type: "viết"; story: string; q: string; prompt: string; ph: string; explain: string;
  word: string; wordPy: string; wordVi: string;                      // từ khoá hiện trên thẻ
  missMsg: string;                                                   // báo lỗi khi câu không có từ khoá
  check: (v: string) => boolean;
};
export type BloomSet = {
  items: [BloomNho, BloomHieu, BloomDung, BloomViet];
  doneShort: string;                                                 // màn hoàn thành mobile, vd. "Chương 4"
  doneLong: string;                                                  // màn hoàn thành desktop
  words: number;                                                     // số "Từ đã nắm" ở màn hoàn thành
};

export type Lesson = {
  id: string;                                                        // = StoryEntry.id, hoặc "hsk1"
  title: string; chip: string; emoji: string; hsk: number;
  cards: HSK1Card[];
  topics?: string[];                                                 // chỉ bộ HSK1 chia chủ đề
  bloom?: BloomSet;                                                  // bộ HSK1 không có Bloom
};

export type BloomStage ={ id: number; type: "nhớ"|"hiểu"|"dùng"|"viết"; label: string; color: string; bg: string; border: string };

export type Screen = "home" | "chat" | "bloom" | "progress" | "profile" | "library";

export type HSK1Card = { ch: string; py: string; vi: string; exCh: string; exPy: string; exVi: string; topicIdx: number };
