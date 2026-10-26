import { Brain, Coffee, Bolt, Pencil } from "lucide-react";
import { C } from "../lib/colors";
import type { BloomSet, BloomStage } from "../types";

export const BLOOM_STAGES: BloomStage[] = [
  // 4 cấp phân biệt bằng teal, cam, vàng, teal đậm (color dùng làm chữ / nền có chữ trắng nên lấy bậc đậm)
  { id: 0, type: "nhớ",  label: "Nhớ",  color: C.primaryText, bg: C.primaryBg, border: C.primaryBorder },
  { id: 1, type: "hiểu", label: "Hiểu", color: C.ctaText,     bg: C.ctaBg,     border: C.ctaBorder     },
  { id: 2, type: "dùng", label: "Dùng", color: C.rewardDeep,  bg: C.rewardBg,  border: C.rewardBorder  },
  { id: 3, type: "viết", label: "Viết", color: C.ink,         bg: C.inkBg,     border: C.inkBorder     },
];
export const BLOOM_ICONS = [Brain, Coffee, Bolt, Pencil];

// Bộ Bloom của từng bài, khoá = StoryEntry.id. Mỗi bộ có đúng 4 bài: Nhớ, Hiểu, Dùng, Viết.
export const BLOOM_SETS: Record<string, BloomSet> = {
  "ngoc-hoang": {
    doneShort: "Chương 4", doneLong: "Chương 4: Cổng Thiên Đình", words: 7,
    items: [
      { type: "nhớ", char: "天庭", pinyin: "Tiāntíng", pinyinColor: C.success, story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Nghĩa của Hán tự này là gì?", opts: ["Ngôi làng nhỏ", "Triều đình mặt đất", "Thiên Đình — cung điện trên trời", "Con đường thiên lý"], correct: 2, explain: "天 (tiān) = trời, 庭 (tíng) = sân/triều. Thiên Đình là cung điện Ngọc Hoàng." },
      { type: "hiểu", sent: "使者 (shǐzhě)", sentVi: "Sứ giả, người được phái đi thực hiện nhiệm vụ", story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Câu nào dùng đúng 使者 trong tình huống câu chuyện?", opts: ["我是玉皇大帝的使者，请让我进入。", "使者喝了很多水。", "这个使者很便宜。", "我买了一个使者。"], optsVi: ["Tôi là sứ giả Ngọc Hoàng, xin cho tôi vào.", "Sứ giả uống rất nhiều nước.", "Sứ giả này rất rẻ.", "Tôi đã mua một sứ giả."], correct: 0, explain: "Đúng! Câu này dùng 使者 đúng ngữ cảnh: tự giới thiệu thân phận với thần canh gác." },
      { type: "dùng", story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Hoàn thành câu theo tình huống:", prompt: "Thần canh gác hỏi: \"你来天庭有何贵干？\"\nWei Lin đến tìm viên ngọc đã mất. Điền vào chỗ trống:", tmpl: "我来天庭是为了寻找___。", tmplVi: "Tôi đến Thiên Đình để tìm ___.", ans: "失落的玉", hint: "Gợi ý: 失落的玉 (shīluò de yù)", explain: "完全正确！ 失落 (shīluò) = mất, 玉 (yù) = ngọc." },
      { type: "viết", story: "Thử thách của Ngọc Hoàng · Chương 4", q: "Viết một câu dùng từ 证明 (zhèngmíng = chứng minh):", prompt: "Wei Lin cần chứng minh (证明) danh tính với thần canh gác.", ph: "Ví dụ: 我能证明我是使者...", explain: "Mẫu: 我能证明我是玉皇大帝的使者。", check: (v: string) => v.includes("证明") && v.length > 4,
        word: "证明", wordPy: "zhèngmíng", wordVi: "chứng minh — xác nhận điều gì đó là sự thật", missMsg: "Hãy dùng từ 证明 trong câu!" },
    ],
  },
  "meo-hoa-hoa": {
    doneShort: "bài Chú Mèo Hoa Hoa", doneLong: "bài Chú Mèo Hoa Hoa", words: 4,
    items: [
      { type: "nhớ", char: "奇怪", pinyin: "Qíguài", pinyinColor: C.success, story: "Chú Mèo Hoa Hoa", q: "Nghĩa của từ này là gì?", opts: ["Vui vẻ", "Kỳ lạ", "Đáng yêu", "Bình thường"], correct: 1, explain: "奇 (qí) = lạ, 怪 (guài) = quái. Trong truyện: 我觉得有点奇怪 (Tớ thấy hơi kỳ lạ)." },
      { type: "hiểu", sent: "运动 (yùndòng)", sentVi: "Vận động, thể thao", story: "Chú Mèo Hoa Hoa", q: "Câu nào dùng đúng 运动 trong tình huống câu chuyện?", opts: ["我运动了一个苹果。", "花花最喜欢运动。", "这个运动很好吃。", "运动在桌子上。"], optsVi: ["Tôi đã vận động một quả táo.", "Hoa Hoa thích vận động nhất.", "Môn thể thao này rất ngon.", "Vận động ở trên bàn."], correct: 1, explain: "花花最喜欢运动 = Hoa Hoa thích vận động nhất. 运动 chỉ hoạt động thể chất, nên không \"ăn\" hay \"đặt lên bàn\" được." },
      { type: "dùng", story: "Chú Mèo Hoa Hoa", q: "Hoàn thành câu theo tình huống:", prompt: "Ở sân bóng, Hoa Hoa chạy theo quả bóng.\n小美 hỏi: \"花花最喜欢什么？\" Điền vào chỗ trống:", tmpl: "它最喜欢___。", tmplVi: "Nó thích ___ nhất.", ans: "踢足球", hint: "Gợi ý: 踢足球 (tī zúqiú)", explain: "踢 (tī) = đá, 足球 (zúqiú) = bóng đá. Bóng đá đi với 踢, không dùng 打." },
      { type: "viết", story: "Chú Mèo Hoa Hoa", q: "Viết một câu dùng từ 一起 (yìqǐ = cùng nhau):", prompt: "Rủ 小美 và Hoa Hoa cùng làm một việc gì đó, nhớ dùng 一起.", ph: "Ví dụ: 我们一起去旅游吧！", explain: "Mẫu: 我们一起去旅游吧！ / 我们一起踢足球吧！", check: (v: string) => v.includes("一起") && v.length > 3,
        word: "一起", wordPy: "yìqǐ", wordVi: "cùng nhau — làm việc gì đó với người khác", missMsg: "Hãy dùng từ 一起 trong câu!" },
    ],
  },
  "meo-hoa-hoa-2": {
    doneShort: "bài Chú Mèo Hoa Hoa 2", doneLong: "bài Chú Mèo Hoa Hoa 2", words: 4,
    items: [
      { type: "nhớ", char: "眼睛", pinyin: "Yǎnjing", pinyinColor: C.success, story: "Chú Mèo Hoa Hoa 2", q: "Nghĩa của từ này là gì?", opts: ["Cái mũ", "Đôi mắt", "Điện thoại", "Quả bóng"], correct: 1, explain: "眼睛 (yǎnjing) = mắt. Trong truyện: 它的眼睛又大又漂亮 (Mắt nó vừa to vừa đẹp)." },
      { type: "hiểu", sent: "新 (xīn)", sentVi: "Mới", story: "Chú Mèo Hoa Hoa 2", q: "Câu nào dùng đúng 新 trong tình huống câu chuyện?", opts: ["这个新很好吃。", "我新了一个朋友。", "小雨的手机也有一条新消息。", "花花的眼睛很新。"], optsVi: ["Cái mới này rất ngon.", "Tôi đã mới một người bạn.", "Điện thoại của Tiểu Vũ cũng có một tin nhắn mới.", "Mắt của Hoa Hoa rất mới."], correct: 2, explain: "新 là tính từ \"mới\", đứng trước danh từ: 新消息 (tin nhắn mới), 新朋友 (bạn mới). 新 không dùng làm động từ, và không dùng để tả đôi mắt." },
      { type: "dùng", story: "Chú Mèo Hoa Hoa 2", q: "Hoàn thành câu theo tình huống:", prompt: "Cô bé biết Hoa Hoa ở đâu nhưng mãi đến hôm nay mới nói.\nLâm Na trách nhẹ cô bé. Điền vào chỗ trống:", tmpl: "你___不早点告诉我？", tmplVi: "___ em không nói với chị sớm hơn?", ans: "为什么", hint: "Gợi ý: 为什么 (wèishénme)", explain: "为什么 = tại sao, đứng sau chủ ngữ để hỏi lý do. 为什么不… dùng để trách nhẹ: sao không…" },
      { type: "viết", story: "Chú Mèo Hoa Hoa 2", q: "Viết một câu dùng từ 觉得 (juéde = cảm thấy, nghĩ):", prompt: "Lâm Na nhận được một tin nhắn lạ. Bạn nghĩ gì về người gửi tin nhắn? Nhớ dùng 觉得.", ph: "Ví dụ: 我觉得这个人认识花花。", explain: "Mẫu: 我觉得这条消息是小女孩发的。 / 我觉得这个人认识花花。", check: (v: string) => v.includes("觉得") && v.length > 3,
        word: "觉得", wordPy: "juéde", wordVi: "cảm thấy, nghĩ rằng — nói ý kiến của mình", missMsg: "Hãy dùng từ 觉得 trong câu!" },
    ],
  },
  "tron-hoc": {
    doneShort: "bài Trốn Học", doneLong: "bài Trốn Học", words: 4,
    items: [
      { type: "nhớ", char: "生病", pinyin: "Shēngbìng", pinyinColor: C.success, story: "Trốn Học", q: "Nghĩa của từ này là gì?", opts: ["Nghỉ ngơi", "Bị ốm", "Xuất viện", "Chạy bộ"], correct: 1, explain: "生 (shēng) = sinh ra, 病 (bìng) = bệnh. Trong truyện: 我生病了，今天不能来 (Tớ bị ốm rồi, hôm nay không thể đến được)." },
      { type: "hiểu", sent: "休息 (xiūxi)", sentVi: "Nghỉ ngơi", story: "Trốn Học", q: "Câu nào dùng đúng 休息 trong tình huống câu chuyện?", opts: ["这个休息很好吃。", "我休息了一本书。", "休息在桌子上。", "医生让我吃药，多休息。"], optsVi: ["Cái nghỉ ngơi này rất ngon.", "Tôi đã nghỉ ngơi một quyển sách.", "Nghỉ ngơi ở trên bàn.", "Bác sĩ bảo tớ uống thuốc và nghỉ ngơi nhiều."], correct: 3, explain: "休息 là động từ \"nghỉ ngơi\": không ăn được, không đặt lên bàn được và không có tân ngữ là đồ vật. 多休息 = nghỉ ngơi nhiều." },
      { type: "dùng", story: "Trốn Học", q: "Hoàn thành câu theo tình huống:", prompt: "小林 nhắn cho Tiểu Vương rằng tuần sau cậu ấy sẽ được ra khỏi bệnh viện.\nĐiền vào chỗ trống:", tmpl: "我下个星期就能___了。", tmplVi: "Tuần sau tớ có thể ___ rồi.", ans: "出院", hint: "Gợi ý: 出院 (chūyuàn)", explain: "出 (chū) = ra, 院 (yuàn) = viện: 出院 = xuất viện. Ngược lại, phải nằm viện là 住院 (zhùyuàn)." },
      { type: "viết", story: "Trốn Học", q: "Viết một câu dùng từ 每 (měi = mỗi):", prompt: "Kể một việc bạn làm đều đặn, giống 小林 sáng nào cũng chạy bộ. Nhớ dùng 每, ví dụ 每天.", ph: "Ví dụ: 我每天早上七点起床。", explain: "Mẫu: 我每天早上跑步。 / 小林每天都来上课。", check: (v: string) => v.includes("每") && v.length > 3,
        word: "每", wordPy: "měi", wordVi: "mỗi — 每天 (mỗi ngày), 每个人 (mỗi người)", missMsg: "Hãy dùng từ 每 trong câu!" },
    ],
  },
  "sinh-nhat": {
    doneShort: "bài Tiệc Sinh Nhật", doneLong: "bài Tiệc Sinh Nhật", words: 4,
    items: [
      { type: "nhớ", char: "生日", pinyin: "Shēngrì", pinyinColor: C.success, story: "Tiệc Sinh Nhật", q: "Nghĩa của từ này là gì?", opts: ["Bánh kem", "Quà tặng", "Sinh nhật", "Nhà hàng"], correct: 2, explain: "生 (shēng) = sinh ra, 日 (rì) = ngày. Trong truyện: 今天是小丽的生日 (Hôm nay là sinh nhật của Tiểu Lệ)." },
      { type: "hiểu", sent: "介绍 (jièshào)", sentVi: "Giới thiệu", story: "Tiệc Sinh Nhật", q: "Câu nào dùng đúng 介绍 trong tình huống câu chuyện?", opts: ["这个介绍很好吃。", "我来给你介绍一下，这是小安。", "我介绍了一杯水。", "介绍在桌子上。"], optsVi: ["Cái giới thiệu này rất ngon.", "Để tớ giới thiệu với cậu một chút, đây là Tiểu An.", "Tôi đã giới thiệu một cốc nước.", "Giới thiệu ở trên bàn."], correct: 1, explain: "介绍 là động từ \"giới thiệu\", dùng với người: 介绍新朋友. Không ăn được, không đặt lên bàn được. 给你介绍一下 = giới thiệu với cậu một chút." },
      { type: "dùng", story: "Tiệc Sinh Nhật", q: "Hoàn thành câu theo tình huống:", prompt: "Tiểu Lệ hỏi bánh kem đâu rồi.\nTiểu Mỹ nói bánh đã được mua xong từ trước. Điền vào chỗ trống:", tmpl: "我___买好了蛋糕。", tmplVi: "Tớ ___ mua bánh kem xong rồi.", ans: "已经", hint: "Gợi ý: 已经 (yǐjīng)", explain: "已经 = đã, đứng trước động từ: 已经买好了 = đã mua xong rồi. Trong truyện: 小美已经买好了蛋糕." },
      { type: "viết", story: "Tiệc Sinh Nhật", q: "Viết một câu dùng từ 帮 (bāng = giúp):", prompt: "Tiểu Mỹ muốn giúp hai người bạn mới làm quen với mọi người. Hãy viết một câu nói bạn giúp ai làm gì, nhớ dùng 帮.", ph: "Ví dụ: 我可以帮你们认识大家。", explain: "Mẫu: 我可以帮你们认识大家。 / 请小安帮我拿蛋糕。", check: (v: string) => v.includes("帮") && v.length > 3,
        word: "帮", wordPy: "bāng", wordVi: "giúp — 帮 + người + động từ (帮你介绍)", missMsg: "Hãy dùng từ 帮 trong câu!" },
    ],
  },
};
