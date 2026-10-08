import type { ChatTurn } from "../../types";
import { STORY_TURNS as NGOC_HOANG } from "./ngoc-hoang";

// Khoá = StoryEntry.id trong data/library.ts.
// Thêm truyện mới: tạo file kịch bản trong thư mục này rồi đăng ký một dòng ở đây.
const STORY_SCRIPTS: Record<string, ChatTurn[]> = {
  "ngoc-hoang": NGOC_HOANG,
};

// Trả về null nếu truyện chưa có kịch bản.
// Sau này nếu chuyển sang backend, chỉ cần đổi ruột hàm này.
export function getStoryTurns(storyId: string): ChatTurn[] | null {
  return STORY_SCRIPTS[storyId] ?? null;
}
