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

export type BloomStage = { id: number; type: "nhớ"|"hiểu"|"dùng"|"viết"; label: string; color: string; bg: string; border: string };

export type Screen = "home" | "chat" | "bloom" | "progress" | "profile" | "library";

export type HSK1Card = { ch: string; py: string; vi: string; exCh: string; exPy: string; exVi: string; topicIdx: number };
