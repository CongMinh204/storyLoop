import type { HSK1Card, Lesson, VocabItem } from "../types";
import { STORY_LIBRARY } from "./library";
import { HSK1_TOPICS, HSK1_CARDS } from "./flashcards";
import { BLOOM_SETS } from "./bloom";
import { getStoryScript } from "./stories";

// Tên ngắn hiện trên chip chọn bài ở Phòng tập
const CHIP: Record<string, string> = {
  "ngoc-hoang": "Ngọc Hoàng",
  "meo-hoa-hoa": "Hoa Hoa",
};

// Từ vựng có câu ví dụ → thẻ flashcard
const toCards = (vocab: VocabItem[]): HSK1Card[] =>
  vocab.filter(v => v.ex).map(v => ({ ch: v.word, py: v.py, vi: v.vi, exCh: v.ex!.zh, exPy: v.ex!.py, exVi: v.ex!.vi, topicIdx: 0 }));

// Mỗi truyện đã có kịch bản là một bài (theo thứ tự trong thư viện), cuối cùng là bộ HSK1 tổng hợp.
// Truyện mới tự có bài khi được đăng ký trong data/stories; thêm bộ Bloom ở data/bloom.ts nếu có.
export const LESSONS: Lesson[] = [
  ...Object.values(STORY_LIBRARY).flat().flatMap((s): Lesson[] => {
    const script = getStoryScript(s.id);
    if (!script) return [];
    return [{ id: s.id, title: s.title, chip: CHIP[s.id] ?? s.title, emoji: s.emoji, hsk: s.hsk, cards: toCards(script.vocab), bloom: BLOOM_SETS[s.id] }];
  }),
  { id: "hsk1", title: "Từ vựng HSK1", chip: "HSK1", emoji: "📚", hsk: 1, cards: HSK1_CARDS, topics: HSK1_TOPICS },
];
