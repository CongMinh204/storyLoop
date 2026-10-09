import type { BranchingStory, ChatTurn, VocabItem } from "../../types";
import { STORY_TURNS as NGOC_HOANG, NGOC_HOANG_VOCAB } from "./ngoc-hoang";
import { MEO_HOA_HOA } from "./meo-hoa-hoa";

// Hai loại kịch bản:
// - "quiz": hội thoại tuyến tính, mỗi lượt có đáp án đúng/sai (ChatStoryEngine)
// - "branching": truyện rẽ nhánh, lựa chọn dẫn tới cảnh khác (BranchingStoryEngine)
export type StoryScript =
  | { kind: "quiz"; turns: ChatTurn[]; vocab: VocabItem[] }
  | { kind: "branching"; story: BranchingStory; vocab: VocabItem[] };

// Khoá = StoryEntry.id trong data/library.ts.
// Thêm truyện mới: tạo file kịch bản trong thư mục này rồi đăng ký một dòng ở đây.
const STORY_SCRIPTS: Record<string, StoryScript> = {
  "ngoc-hoang": { kind: "quiz", turns: NGOC_HOANG, vocab: NGOC_HOANG_VOCAB },
  "meo-hoa-hoa": { kind: "branching", story: MEO_HOA_HOA, vocab: MEO_HOA_HOA.vocab },
};

// Trả về null nếu truyện chưa có kịch bản.
// Sau này nếu chuyển sang backend, chỉ cần đổi ruột hàm này.
export function getStoryScript(storyId: string): StoryScript | null {
  return STORY_SCRIPTS[storyId] ?? null;
}
