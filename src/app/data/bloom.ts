import { Brain, Coffee, Bolt, Pencil } from "lucide-react";
import { C } from "../lib/colors";
import type { BloomSet, BloomStage } from "../types";

export const BLOOM_STAGES: BloomStage[] = [
  { id: 0, type: "nhớ",  label: "Nhớ",  color: C.greenDim, bg: C.greenBg,  border: C.greenBorder },
  { id: 1, type: "hiểu", label: "Hiểu", color: C.orange,   bg: "#fff4ee",  border: "#fed7aa"     },
  { id: 2, type: "dùng", label: "Dùng", color: C.purple,   bg: C.purpleBg, border: "#ddd8f9"     },
  { id: 3, type: "viết", label: "Viết", color: C.teal,     bg: C.tealBg,   border: "#bdeaf0"     },
];
export const BLOOM_ICONS = [Brain, Coffee, Bolt, Pencil];

// Bộ Bloom của từng bài, khoá = StoryEntry.id. Mỗi bộ có đúng 4 bài: Nhớ, Hiểu, Dùng, Viết.
export const BLOOM_SETS: Record<string, BloomSet> = {
  "ngoc-hoang": {
    doneShort: "Chương 4", doneLong: "Chương 4: Cổng Thiên Đình", words: 7,
    items: [
      { type: "nhớ", char: "天庭", pinyin: "Tiāntíng", pinyinColor: C.greenDim, story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Nghĩa của Hán tự này là gì?", opts: ["Ngôi làng nhỏ", "Triều đình mặt đất", "Thiên Đình — cung điện trên trời", "Con đường thiên lý"], correct: 2, explain: "天 (tiān) = trời, 庭 (tíng) = sân/triều. Thiên Đình là cung điện Ngọc Hoàng." },
      { type: "hiểu", sent: "使者 (shǐzhě)", sentVi: "Sứ giả, người được phái đi thực hiện nhiệm vụ", story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Câu nào dùng đúng 使者 trong tình huống câu chuyện?", opts: ["我是玉皇大帝的使者，请让我进入。", "使者喝了很多水。", "这个使者很便宜。", "我买了一个使者。"], optsVi: ["Tôi là sứ giả Ngọc Hoàng, xin cho tôi vào.", "Sứ giả uống rất nhiều nước.", "Sứ giả này rất rẻ.", "Tôi đã mua một sứ giả."], correct: 0, explain: "Đúng! Câu này dùng 使者 đúng ngữ cảnh: tự giới thiệu thân phận với thần canh gác." },
      { type: "dùng", story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Hoàn thành câu theo tình huống:", prompt: "Thần canh gác hỏi: \"你来天庭有何贵干？\"\nWei Lin đến tìm viên ngọc đã mất. Điền vào chỗ trống:", tmpl: "我来天庭是为了寻找___。", tmplVi: "Tôi đến Thiên Đình để tìm ___.", ans: "失落的玉", hint: "Gợi ý: 失落的玉 (shīluò de yù)", explain: "完全正确！ 失落 (shīluò) = mất, 玉 (yù) = ngọc." },
      { type: "viết", story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Viết một câu dùng từ 证明 (zhèngmíng = chứng minh):", prompt: "Wei Lin cần chứng minh (证明) danh tính với thần canh gác.", ph: "Ví dụ: 我能证明我是使者...", explain: "Mẫu: 我能证明我是玉皇大帝的使者。", check: (v: string) => v.includes("证明") && v.length > 4,
        word: "证明", wordPy: "zhèngmíng", wordVi: "chứng minh — xác nhận điều gì đó là sự thật", missMsg: "Hãy dùng từ 证明 trong câu!" },
    ],
  },
  "meo-hoa-hoa": {
    doneShort: "bài Chú Mèo Hoa Hoa", doneLong: "bài Chú Mèo Hoa Hoa", words: 4,
    items: [
      { type: "nhớ", char: "奇怪", pinyin: "Qíguài", pinyinColor: C.greenDim, story: "Chú Mèo Hoa Hoa", q: "Nghĩa của từ này là gì?", opts: ["Vui vẻ", "Kỳ lạ", "Đáng yêu", "Bình thường"], correct: 1, explain: "奇 (qí) = lạ, 怪 (guài) = quái. Trong truyện: 我觉得有点奇怪 (Tớ thấy hơi kỳ lạ)." },
      { type: "hiểu", sent: "运动 (yùndòng)", sentVi: "Vận động, thể thao", story: "Chú Mèo Hoa Hoa", q: "Câu nào dùng đúng 运动 trong tình huống câu chuyện?", opts: ["我运动了一个苹果。", "花花最喜欢运动。", "这个运动很好吃。", "运动在桌子上。"], optsVi: ["Tôi đã vận động một quả táo.", "Hoa Hoa thích vận động nhất.", "Môn thể thao này rất ngon.", "Vận động ở trên bàn."], correct: 1, explain: "花花最喜欢运动 = Hoa Hoa thích vận động nhất. 运动 chỉ hoạt động thể chất, nên không \"ăn\" hay \"đặt lên bàn\" được." },
      { type: "dùng", story: "Chú Mèo Hoa Hoa", q: "Hoàn thành câu theo tình huống:", prompt: "Ở sân bóng, Hoa Hoa chạy theo quả bóng.\n小美 hỏi: \"花花最喜欢什么？\" Điền vào chỗ trống:", tmpl: "它最喜欢___。", tmplVi: "Nó thích ___ nhất.", ans: "踢足球", hint: "Gợi ý: 踢足球 (tī zúqiú)", explain: "踢 (tī) = đá, 足球 (zúqiú) = bóng đá. Bóng đá đi với 踢, không dùng 打." },
      { type: "viết", story: "Chú Mèo Hoa Hoa", q: "Viết một câu dùng từ 一起 (yìqǐ = cùng nhau):", prompt: "Rủ 小美 và Hoa Hoa cùng làm một việc gì đó, nhớ dùng 一起.", ph: "Ví dụ: 我们一起去旅游吧！", explain: "Mẫu: 我们一起去旅游吧！ / 我们一起踢足球吧！", check: (v: string) => v.includes("一起") && v.length > 3,
        word: "一起", wordPy: "yìqǐ", wordVi: "cùng nhau — làm việc gì đó với người khác", missMsg: "Hãy dùng từ 一起 trong câu!" },
    ],
  },
};
