import { Brain, Coffee, Bolt, Pencil } from "lucide-react";
import { C } from "../lib/colors";
import type { BloomStage } from "../types";

export const BLOOM_STAGES: BloomStage[] = [
  { id: 0, type: "nhớ",  label: "Nhớ",  color: C.greenDim, bg: C.greenBg,  border: C.greenBorder },
  { id: 1, type: "hiểu", label: "Hiểu", color: C.orange,   bg: "#fff4ee",  border: "#fed7aa"     },
  { id: 2, type: "dùng", label: "Dùng", color: C.purple,   bg: C.purpleBg, border: "#ddd8f9"     },
  { id: 3, type: "viết", label: "Viết", color: C.teal,     bg: C.tealBg,   border: "#bdeaf0"     },
];
export const BLOOM_ICONS = [Brain, Coffee, Bolt, Pencil];

export const BLOOM_DATA = [
  { type: "nhớ" as const, char: "天庭", pinyin: "Tiāntíng", pinyinColor: C.greenDim, story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Nghĩa của Hán tự này là gì?", opts: ["Ngôi làng nhỏ", "Triều đình mặt đất", "Thiên Đình — cung điện trên trời", "Con đường thiên lý"], correct: 2, explain: "天 (tiān) = trời, 庭 (tíng) = sân/triều. Thiên Đình là cung điện Ngọc Hoàng." },
  { type: "hiểu" as const, sent: "使者 (shǐzhě)", sentVi: "Sứ giả, người được phái đi thực hiện nhiệm vụ", story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Câu nào dùng đúng 使者 trong tình huống câu chuyện?", opts: ["我是玉皇大帝的使者，请让我进入。", "使者喝了很多水。", "这个使者很便宜。", "我买了一个使者。"], optsVi: ["Tôi là sứ giả Ngọc Hoàng, xin cho tôi vào.", "Sứ giả uống rất nhiều nước.", "Sứ giả này rất rẻ.", "Tôi đã mua một sứ giả."], correct: 0, explain: "Đúng! Câu này dùng 使者 đúng ngữ cảnh: tự giới thiệu thân phận với thần canh gác." },
  { type: "dùng" as const, story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Hoàn thành câu theo tình huống:", prompt: "Thần canh gác hỏi: \"你来天庭有何贵干？\"\nWei Lin đến tìm viên ngọc đã mất. Điền vào chỗ trống:", tmpl: "我来天庭是为了寻找___。", tmplVi: "Tôi đến Thiên Đình để tìm ___.", ans: "失落的玉", hint: "Gợi ý: 失落的玉 (shīluò de yù)", explain: "完全正确！ 失落 (shīluò) = mất, 玉 (yù) = ngọc." },
  { type: "viết" as const, story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Viết một câu dùng từ 证明 (zhèngmíng = chứng minh):", prompt: "Wei Lin cần chứng minh (证明) danh tính với thần canh gác.", ph: "Ví dụ: 我能证明我是使者...", explain: "Mẫu: 我能证明我是玉皇大帝的使者。", check: (v: string) => v.includes("证明") && v.length > 4 },
];
