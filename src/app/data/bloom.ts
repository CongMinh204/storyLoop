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
  "cuoc-goi-bi-an": {
    doneShort: "bài Ai Đã Gọi Điện Đến?", doneLong: "bài Ai Đã Gọi Điện Đến?", words: 4,
    items: [
      { type: "nhớ", char: "接", pinyin: "Jiē", pinyinColor: C.success, story: "Ai Đã Gọi Điện Đến?", q: "Nghĩa của từ này trong 接电话 là gì?", opts: ["Gọi điện thoại", "Nghe / nhận điện thoại", "Tắt điện thoại", "Mua điện thoại"], correct: 1, explain: "接 (jiē) = nhận, đón; 接电话 = nghe hoặc nhận cuộc gọi. Trong truyện: 小雨给小林打电话，可是没有人接 (Tiểu Vũ gọi cho Tiểu Lâm nhưng không ai nghe máy)." },
      { type: "hiểu", sent: "已经 (yǐjīng)", sentVi: "Đã (hoàn thành việc gì đó)", story: "Ai Đã Gọi Điện Đến?", q: "Câu nào dùng đúng 已经 trong tình huống câu chuyện?", opts: ["我买了一个已经。", "这个已经非常快乐。", "晚上七点，小雨已经准备好了生日蛋糕。", "已经是一位好朋友。"], optsVi: ["Tôi đã mua một cái đã.", "Cái đã này vô cùng vui vẻ.", "Lúc 7 giờ tối, Tiểu Vũ đã chuẩn bị xong bánh sinh nhật.", "Đã là một người bạn tốt."], correct: 2, explain: "已经 là phó từ chỉ việc đã diễn ra hoặc hoàn tất, đứng trước động từ (已经准备好了 = đã chuẩn bị xong), không phải danh từ nên không đứng sau lượng từ." },
      { type: "dùng", story: "Ai Đã Gọi Điện Đến?", q: "Hoàn thành câu theo tình huống:", prompt: "Ở cửa rạp chiếu phim, 小美 muốn giới thiệu anh trai của Tiểu Lâm với Tiểu Vũ.\nĐiền vào chỗ trống:", tmpl: "你终于来了！我想给你___一个人。", tmplVi: "Cuối cùng cậu cũng đến! Tớ muốn ___ với cậu một người.", ans: "介绍", hint: "Gợi ý: 介绍 (jièshào)", explain: "介绍 (jièshào) = giới thiệu. Cấu trúc 给 + người + 介绍… = giới thiệu… cho ai." },
      { type: "viết", story: "Ai Đã Gọi Điện Đến?", q: "Viết một câu dùng từ 给 (gěi = cho):", prompt: "Viết một câu theo cấu trúc 给 + người + động từ (ví dụ: gọi điện cho bạn hoặc tặng quà sinh nhật cho bạn). Nhớ dùng 给.", ph: "Ví dụ: 我给小林打电话。", explain: "Mẫu: 我给小林打电话。 / 小林给小雨送了一本书。", check: (v: string) => v.includes("给") && v.length > 3,
        word: "给", wordPy: "gěi", wordVi: "cho — 给 + người + động từ (làm gì cho ai)", missMsg: "Hãy dùng từ 给 trong câu!" },
    ],
  },
  "buc-anh-bi-an": {
    doneShort: "bài Ai Đã Gửi Bức Ảnh?", doneLong: "bài Ai Đã Gửi Bức Ảnh?", words: 4,
    items: [
      { type: "nhớ", char: "准备", pinyin: "Zhǔnbèi", pinyinColor: C.success, story: "Ai Đã Gửi Bức Ảnh?", q: "Nghĩa của từ này là gì?", opts: ["Ôn tập", "Chuẩn bị", "Bắt đầu", "Nghỉ ngơi"], correct: 1, explain: "准备 = chuẩn bị. Trong truyện: 明天就要考试了，我还没准备好！ (Ngày mai thi rồi mà tớ vẫn chưa chuẩn bị xong!)." },
      { type: "hiểu", sent: "意思 (yìsi)", sentVi: "Ý nghĩa, ý", story: "Ai Đã Gửi Bức Ảnh?", q: "Câu nào dùng đúng 意思 trong tình huống câu chuyện?", opts: ["我买了一个意思。", "这个咖啡很意思。", "这是什么意思？你是谁？", "意思在桌子上。"], optsVi: ["Tôi mua một cái ý.", "Cà phê này rất ý.", "Ý này là sao? Cậu là ai?", "Ý ở trên bàn."], correct: 2, explain: "是什么意思 = có ý gì / ý nghĩa gì (dùng để hỏi ý định hoặc nội dung chưa hiểu)." },
      { type: "dùng", story: "Ai Đã Gửi Bức Ảnh?", q: "Hoàn thành câu theo tình huống:", prompt: "Người lạ nhắn tin hẹn Tiểu Minh đến điểm gặp trước cổng trường.\nĐiền vào chỗ trống:", tmpl: "如果你想知道真相，明天来学校___。", tmplVi: "Nếu muốn biết sự thật, ngày mai hãy đến bên ___ trường.", ans: "外面", hint: "Gợi ý: 外面 (wàimiàn)", explain: "外面 = bên ngoài (danh từ phương vị chỉ không gian phía ngoài trường học)." },
      { type: "viết", story: "Ai Đã Gửi Bức Ảnh?", q: "Viết một câu dùng từ 以后 (yǐhòu = sau này, sau khi):", prompt: "Viết câu hẹn làm một việc gì đó sau khi thi xong, nhớ dùng 以后.", ph: "Ví dụ: 考试以后，我们去喝咖啡吧。", explain: "Mẫu: 考试以后，我们去喝咖啡吧。 / 明天考试以后，我会告诉你。", check: (v: string) => v.includes("以后") && v.length > 3,
        word: "以后", wordPy: "yǐhòu", wordVi: "sau này, sau khi — 考试以后 (sau kỳ thi)", missMsg: "Hãy dùng từ 以后 trong câu!" },
    ],
  },
  "dong-ho-bien-mat": {
    doneShort: "bài Chiếc Đồng Hồ Biến Mất", doneLong: "bài Chiếc Đồng Hồ Biến Mất", words: 4,
    items: [
      { type: "nhớ", char: "粉色", pinyin: "Fěnsè", pinyinColor: C.success, story: "Chiếc Đồng Hồ Biến Mất", q: "Nghĩa của từ này là gì?", opts: ["Màu đỏ", "Màu hồng", "Màu đen", "Màu xanh"], correct: 1, explain: "粉 (fěn) = hồng, 色 (sè) = màu. Trong truyện: 房间左边有一件粉色的衣服 (Bên trái căn phòng có một chiếc áo màu hồng)." },
      { type: "hiểu", sent: "旁边 (pángbiān)", sentVi: "Bên cạnh", story: "Chiếc Đồng Hồ Biến Mất", q: "Câu nào dùng đúng 旁边 trong tình huống câu chuyện?", opts: ["桌子旁边有一张报纸。", "我旁边了一杯水。", "旁边在很好吃。", "他旁边手表。"], optsVi: ["Bên cạnh bàn có một tờ báo.", "Tôi bên cạnh một cốc nước.", "Bên cạnh ở rất ngon.", "Anh ấy bên cạnh đồng hồ."], correct: 0, explain: "旁边 là danh từ chỉ vị trí, đứng sau danh từ: 桌子旁边 = bên cạnh bàn. Nó không làm động từ và không ăn được." },
      { type: "dùng", story: "Chiếc Đồng Hồ Biến Mất", q: "Hoàn thành câu theo tình huống:", prompt: "Hôm nay là sinh nhật ông Vương, Tiểu Vũ đã mua quà cho ông ấy.\nĐiền vào chỗ trống:", tmpl: "小雨想送王先生一块___。", tmplVi: "Tiểu Vũ muốn tặng ông Vương một chiếc ___.", ans: "手表", hint: "Gợi ý: 手表 (shǒubiǎo)", explain: "手表 = đồng hồ đeo tay, lượng từ là 块 (kuài): 一块手表. Trong truyện: 小雨想送他一块手表." },
      { type: "viết", story: "Chiếc Đồng Hồ Biến Mất", q: "Viết một câu dùng từ 送 (sòng = tặng):", prompt: "Hôm nay là sinh nhật một người bạn của bạn. Viết một câu nói bạn tặng gì cho ai, nhớ dùng 送.", ph: "Ví dụ: 我想送朋友一本书。", explain: "Mẫu: 我想送朋友一本书。 / 小雨送王先生一块手表。", check: (v: string) => v.includes("送") && v.length > 3,
        word: "送", wordPy: "sòng", wordVi: "tặng — 送 + người + món quà (送他一块手表)", missMsg: "Hãy dùng từ 送 trong câu!" },
    ],
  },
  "cam-nham-qua": {
    doneShort: "bài Ai Đã Cầm Nhầm Quà?", doneLong: "bài Ai Đã Cầm Nhầm Quà?", words: 4,
    items: [
      { type: "nhớ", char: "袋子", pinyin: "Dàizi", pinyinColor: C.success, story: "Ai Đã Cầm Nhầm Quà?", q: "Nghĩa của từ này là gì?", opts: ["Cái bàn", "Tờ báo", "Cái túi", "Chiếc áo"], correct: 2, explain: "袋子 (dàizi) = cái túi. Trong truyện: 粉色的袋子不见了 (Chiếc túi màu hồng đã biến mất)." },
      { type: "hiểu", sent: "颜色 (yánsè)", sentVi: "Màu sắc", story: "Ai Đã Cầm Nhầm Quà?", q: "Câu nào dùng đúng 颜色 trong tình huống câu chuyện?", opts: ["看颜色，不如看里面。", "颜色在桌子上吃。", "我颜色了一个朋友。", "他颜色很好吃。"], optsVi: ["Đừng chỉ nhìn màu sắc, hãy xem bên trong.", "Màu sắc ăn ở trên bàn.", "Tôi màu sắc một người bạn.", "Anh ấy màu sắc rất ngon."], correct: 0, explain: "颜色 là danh từ \"màu sắc\": làm tân ngữ của 看 (看颜色) chứ không làm động từ, không ăn được." },
      { type: "dùng", story: "Ai Đã Cầm Nhầm Quà?", q: "Hoàn thành câu theo tình huống:", prompt: "Mẩu giấy trên bàn cửa hàng cho biết vị trí của đồ vật màu đỏ.\nĐiền vào chỗ trống:", tmpl: "红色的东西在___，粉色的东西在右边。", tmplVi: "Đồ vật màu đỏ ở ___, đồ vật màu hồng ở bên phải.", ans: "左边", hint: "Gợi ý: 左边 (zuǒbiān)", explain: "左边 = bên trái, đối lập với 右边 (yòubiān) = bên phải. Trong truyện: 红色的东西在左边，粉色的东西在右边." },
      { type: "viết", story: "Ai Đã Cầm Nhầm Quà?", q: "Viết một câu dùng từ 一下 (yíxià = một chút):", prompt: "Nhờ ai đó làm giúp bạn một việc nhỏ, nhớ dùng 一下, ví dụ 等一下 hoặc 看一下.", ph: "Ví dụ: 请你等我一下。", explain: "Mẫu: 请你等我一下。 / 请男人打开袋子看一下。", check: (v: string) => v.includes("一下") && v.length > 3,
        word: "一下", wordPy: "yíxià", wordVi: "một chút — đứng sau động từ để làm nhẹ ngữ khí (看一下)", missMsg: "Hãy dùng từ 一下 trong câu!" },
    ],
  },
  "nguoi-ngoai-cua-la-ai": {
    doneShort: "bài Người Ngoài Cửa Là Ai?", doneLong: "bài Người Ngoài Cửa Là Ai?", words: 4,
    items: [
      { type: "nhớ", char: "游泳", pinyin: "Yóuyǒng", pinyinColor: C.success, story: "Người Ngoài Cửa Là Ai?", q: "Nghĩa của từ này là gì?", opts: ["Chạy bộ", "Bơi", "Chơi bóng rổ", "Đi xe đạp"], correct: 1, explain: "游泳 (yóuyǒng) = bơi. Trong truyện: 记住，不要一个人去游泳 (Nhớ nhé, đừng đi bơi một mình)." },
      { type: "hiểu", sent: "经常 (jīngcháng)", sentVi: "Thường, thường xuyên", story: "Người Ngoài Cửa Là Ai?", q: "Câu nào dùng đúng 经常 trong tình huống câu chuyện?", opts: ["这个经常很好吃。", "我买了两公斤经常。", "姐姐经常去打篮球。", "经常在桌子上。"], optsVi: ["Cái thường này rất ngon.", "Tôi mua hai ki-lô-gam thường.", "Chị gái thường đi chơi bóng rổ.", "Thường ở trên bàn."], correct: 2, explain: "经常 là phó từ chỉ việc lặp lại nhiều lần, đứng trước động từ (经常去打篮球 = thường đi chơi bóng rổ). Nó không phải danh từ nên không ăn, mua hay đặt lên bàn được. Trong truyện: 去我经常打篮球的地方." },
      { type: "dùng", story: "Người Ngoài Cửa Là Ai?", q: "Hoàn thành câu theo tình huống:", prompt: "Chị gái về nhà, hỏi vì sao Tiểu Minh khóa cửa.\nTiểu Minh giải thích lý do. Điền vào chỗ trống:", tmpl: "___我很害怕，所以我在家等你。", tmplVi: "___ em rất sợ, cho nên em ở nhà đợi chị.", ans: "因为", hint: "Gợi ý: 因为 (yīnwèi)", explain: "因为…，所以… = bởi vì…, cho nên…: 因为 nêu nguyên nhân (我很害怕), 所以 nêu kết quả (我在家等你)." },
      { type: "viết", story: "Người Ngoài Cửa Là Ai?", q: "Viết một câu dùng từ 告诉 (gàosu = nói cho biết):", prompt: "Tiểu Minh muốn lần sau chị gái báo cho mình biết chị đi đâu. Hãy viết một câu nhờ ai đó nói cho bạn biết một điều, nhớ dùng 告诉.", ph: "Ví dụ: 下次告诉我你去哪儿，好吗？", explain: "Mẫu: 下次告诉我你去哪儿，好吗？ / 那你告诉我，你在哪儿！", check: (v: string) => v.includes("告诉") && v.length > 3,
        word: "告诉", wordPy: "gàosu", wordVi: "nói cho biết — 告诉 + người + việc (告诉我你在哪儿)", missMsg: "Hãy dùng từ 告诉 trong câu!" },
    ],
  },
  "mot-gio-cuoi-cung": {
    doneShort: "bài Một Giờ Cuối Cùng", doneLong: "bài Một Giờ Cuối Cùng", words: 4,
    items: [
      { type: "nhớ", char: "机场", pinyin: "Jīchǎng", pinyinColor: C.success, story: "Một Giờ Cuối Cùng", q: "Nghĩa của từ này là gì?", opts: ["Nhà ga", "Sân bay", "Bến xe buýt", "Trường học"], correct: 1, explain: "机场 (jīchǎng) = sân bay: 机 trong 飞机 (máy bay), 场 = bãi, nơi rộng. Trong truyện: 这里离机场很近，但是离学校很远！ (Chỗ này rất gần sân bay, nhưng cách trường rất xa!)" },
      { type: "hiểu", sent: "离 (lí)", sentVi: "Cách (khoảng cách giữa hai nơi)", story: "Một Giờ Cuối Cùng", q: "Câu nào dùng đúng 离 trong tình huống câu chuyện?", opts: ["我买了一个离。", "学校离机场很远。", "这个离很好吃。", "离在桌子上。"], optsVi: ["Tôi mua một cái cách.", "Trường cách sân bay rất xa.", "Cái cách này rất ngon.", "Cách ở trên bàn."], correct: 1, explain: "离 nối hai nơi để nói khoảng cách: A 离 B + 远/近 (学校离机场很远 = trường cách sân bay rất xa). 离 không phải danh từ nên không mua, ăn hay đặt lên bàn được." },
      { type: "dùng", story: "Một Giờ Cuối Cùng", q: "Hoàn thành câu theo tình huống:", prompt: "Tiểu Vũ ngồi xe buýt rất lâu mà vẫn chưa tới, liền nhắn cho Tiểu Lâm.\nĐiền vào chỗ trống:", tmpl: "___过了半个小时！", tmplVi: "___ trôi qua nửa tiếng rồi!", ans: "已经", hint: "Gợi ý: 已经 (yǐjīng)", explain: "已经 = đã, đứng trước động từ để nói việc đã xảy ra: 已经过了半个小时 = đã nửa tiếng trôi qua rồi." },
      { type: "viết", story: "Một Giờ Cuối Cùng", q: "Viết một câu dùng từ 路 (lù = con đường):", prompt: "Tiểu Vũ phải hỏi đường để đến trường. Hãy viết một câu hỏi đường hoặc chỉ đường, nhớ dùng 路.", ph: "Ví dụ: 你可以走这条路。", explain: "Mẫu: 你可以走这条路。 / 这条路很长。 / 我应该走哪条路？ (lượng từ của 路 là 条)", check: (v: string) => v.includes("路") && v.length > 2,
        word: "路", wordPy: "lù", wordVi: "con đường — 一条路, 走这条路 (đi đường này)", missMsg: "Hãy dùng từ 路 trong câu!" },
    ],
  },
  "ai-lay-quan-ao": {
    doneShort: "bài Ai Đã Lấy Quần Áo Của Tôi?", doneLong: "bài Ai Đã Lấy Quần Áo Của Tôi?", words: 4,
    items: [
      { type: "nhớ", char: "颜色", pinyin: "Yánsè", pinyinColor: C.success, story: "Ai Đã Lấy Quần Áo Của Tôi?", q: "Nghĩa của từ này là gì?", opts: ["Kích cỡ", "Màu sắc", "Giá tiền", "Kiểu dáng"], correct: 1, explain: "颜色 (yánsè) = màu sắc. Trong truyện: 那个人穿什么颜色的衣服？ (Người đó mặc quần áo màu gì?)" },
      { type: "hiểu", sent: "一直 (yìzhí)", sentVi: "Cứ, suốt, liên tục", story: "Ai Đã Lấy Quần Áo Của Tôi?", q: "Câu nào dùng đúng 一直 trong tình huống câu chuyện?", opts: ["我买了一个一直。", "这件衣服一直很贵。", "因为我一直在找衣服！", "一直在椅子上。"], optsVi: ["Tôi mua một cái cứ.", "Chiếc áo này cứ rất đắt.", "Bởi vì tôi cứ phải tìm quần áo!", "Cứ ở trên ghế."], correct: 2, explain: "一直 là phó từ chỉ việc liên tục không dừng, đứng trước động từ (一直在找衣服 = cứ liên tục tìm quần áo). Nó không phải danh từ nên không mua được hay đặt lên ghế được; còn 一直很贵 không hợp vì \"đắt\" không phải hành động kéo dài." },
      { type: "dùng", story: "Ai Đã Lấy Quần Áo Của Tôi?", q: "Hoàn thành câu theo tình huống:", prompt: "Ăn xong, Tiểu Minh phát hiện quần áo biến mất.\nĐiền vào chỗ trống:", tmpl: "小明很___。", tmplVi: "Tiểu Minh rất ___.", ans: "着急", hint: "Gợi ý: 着急 (zháojí)", explain: "着急 (zháojí) = sốt ruột, lo lắng. Trong truyện: 小明很着急 (Tiểu Minh rất sốt ruột)." },
      { type: "viết", story: "Ai Đã Lấy Quần Áo Của Tôi?", q: "Viết một câu dùng từ 看见 (kànjiàn = nhìn thấy):", prompt: "Tiểu Minh hỏi một người xem họ có nhìn thấy quần áo của mình không. Hãy viết một câu hỏi như vậy, nhớ dùng 看见.", ph: "Ví dụ: 你看见我的衣服了吗？", explain: "Mẫu: 你看见我的衣服了吗？ / 请问，你看见我的朋友了吗？", check: (v: string) => v.includes("看见") && v.length > 3,
        word: "看见", wordPy: "kànjiàn", wordVi: "nhìn thấy — 看见 + người/vật (看见我的衣服了吗)", missMsg: "Hãy dùng từ 看见 trong câu!" },
    ],
  },
  "ban-hoc-moi-la-ai": {
    doneShort: "bài Bạn Học Mới Là Ai?", doneLong: "bài Bạn Học Mới Là Ai?", words: 4,
    items: [
      { type: "nhớ", char: "姓", pinyin: "Xìng", pinyinColor: C.success, story: "Bạn Học Mới Là Ai?", q: "Nghĩa của từ này là gì?", opts: ["Tên gọi", "Mang họ", "Tuổi tác", "Quê quán"], correct: 1, explain: "姓 (xìng) = mang họ, họ. Trong truyện: 我姓李，叫李明 (Mình họ Lý, tên là Lý Minh)." },
      { type: "hiểu", sent: "去年 (qùnián)", sentVi: "Năm ngoái", story: "Bạn Học Mới Là Ai?", q: "Câu nào dùng đúng 去年 trong tình huống câu chuyện?", opts: ["我买了一个去年。", "我去年在北京学习。", "去年在桌子上。", "这个去年很好吃。"], optsVi: ["Tôi mua một cái năm ngoái.", "Năm ngoái mình học ở Bắc Kinh.", "Năm ngoái ở trên bàn.", "Năm ngoái này rất ngon."], correct: 1, explain: "去年 là danh từ chỉ thời gian \"năm ngoái\", đứng trước hoặc sau chủ ngữ làm trạng ngữ thời gian (我去年在北京学习). Không phải danh từ cụ thể nên không mua, ăn hay để trên bàn được." },
      { type: "dùng", story: "Bạn Học Mới Là Ai?", q: "Hoàn thành câu theo tình huống:", prompt: "Tiểu Vũ trở về chỗ ngồi, thấy có bạn nữ ngồi bên phải.\nĐiền vào chỗ trống:", tmpl: "她的___坐着一个女同学。", tmplVi: "Bên ___ cô ấy có một bạn học nữ đang ngồi.", ans: "右边", hint: "Gợi ý: 右边 (yòubian)", explain: "右边 (yòubian) = bên phải. Trong truyện: 她的右边坐着一个女同学 (Bên phải bạn ấy có một bạn nữ đang ngồi)." },
      { type: "viết", story: "Bạn Học Mới Là Ai?", q: "Viết một câu dùng từ 说话 (shuōhuà = nói chuyện):", prompt: "Viết câu làm quen hoặc nói chuyện với bạn mới, nhớ dùng 说话.", ph: "Ví dụ: 我想和他说话。", explain: "Mẫu: 我想和他说话。 / 为什么不和他说话？ / 她在和谁说话？", check: (v: string) => v.includes("说话") && v.length > 3,
        word: "说话", wordPy: "shuōhuà", wordVi: "nói chuyện — 和他说话 (nói chuyện với bạn ấy)", missMsg: "Hãy dùng từ 说话 trong câu!" },
    ],
  },
  "buoi-hoa-nhac-cuoi-tuan": {
    doneShort: "bài Buổi Hòa Nhạc Cuối Tuần", doneLong: "bài Buổi Hòa Nhạc Cuối Tuần", words: 4,
    items: [
      { type: "nhớ", char: "便宜", pinyin: "Piányi", pinyinColor: C.success, story: "Buổi Hòa Nhạc Cuối Tuần", q: "Nghĩa của từ này là gì?", opts: ["Đắt đỏ", "Rẻ", "Đẹp", "Mới"], correct: 1, explain: "便宜 (piányi) = rẻ. Trong truyện: 这个红色的比那个黑色的便宜 (Chiếc màu đỏ này rẻ hơn chiếc màu đen kia)." },
      { type: "hiểu", sent: "可能 (kěnéng)", sentVi: "Có thể, có lẽ", story: "Buổi Hòa Nhạc Cuối Tuần", q: "Câu nào dùng đúng 可能 trong tình huống câu chuyện?", opts: ["别着急，我们可能很快就能找到你的妈妈。", "我买了两斤可能。", "可能在桌子上吃。", "他是一个可能老师。"], optsVi: ["Đừng lo, có lẽ chúng ta sẽ sớm tìm được mẹ em.", "Tôi mua hai cân có thể.", "Có thể ăn ở trên bàn.", "Anh ấy là một có lẽ giáo viên."], correct: 0, explain: "可能 là năng nguyện động từ / phó từ biểu thị khả năng hoặc phỏng đoán (\"có thể, có lẽ\"), đứng trước vị ngữ (可能很快就能找到). Không phải danh từ chỉ đồ vật nên không mua bằng cân, không ăn hay định lượng được." },
      { type: "dùng", story: "Buổi Hòa Nhạc Cuối Tuần", q: "Hoàn thành câu theo tình huống:", prompt: "Tiểu Mỹ rất thích hát nên đi công viên xem hòa nhạc.\nĐiền vào chỗ trống:", tmpl: "小美很喜欢___，所以她很高兴。", tmplVi: "Tiểu Mỹ rất thích ___, nên cô bé rất vui.", ans: "唱歌", hint: "Gợi ý: 唱歌 (chànggē)", explain: "唱歌 (chànggē) = ca hát. Trong truyện: 小美很喜欢唱歌，所以她很高兴 (Tiểu Mỹ rất thích hát nên rất vui)." },
      { type: "viết", story: "Buổi Hòa Nhạc Cuối Tuần", q: "Viết một câu so sánh dùng từ 比 (bǐ = hơn):", prompt: "Viết câu so sánh dùng chữ 比 (ví dụ khen giọng hát hay hơn hoặc đồ rẻ hơn).", ph: "Ví dụ: 你的声音比我的好听！", explain: "Mẫu: 你的声音比我的好听！ / 这里的手机比那里的便宜。", check: (v: string) => v.includes("比") && v.length > 3,
        word: "比", wordPy: "bǐ", wordVi: "hơn — A 比 B + Tính từ (比我的好听)", missMsg: "Hãy dùng từ 比 trong câu!" },
    ],
  },
  "chiec-xe-dap-ngoai-cua": {
    doneShort: "bài Chiếc Xe Đạp Ngoài Cửa", doneLong: "bài Chiếc Xe Đạp Ngoài Cửa", words: 4,
    items: [
      { type: "nhớ", char: "自行车", pinyin: "Zìxíngchē", pinyinColor: C.success, story: "Chiếc Xe Đạp Ngoài Cửa", q: "Nghĩa của từ này là gì?", opts: ["Xe máy", "Xe buýt", "Xe đạp", "Xe hơi"], correct: 2, explain: "自行车 (zìxíngchē) = xe đạp. Trong truyện: 不就在门外吗？ (Chẳng phải xe đạp ở bên ngoài cửa sao?) và 在我的自行车上啊 (Trên xe đạp của em ấy)." },
      { type: "hiểu", sent: "经常 (jīngcháng)", sentVi: "Thường, thường xuyên", story: "Chiếc Xe Đạp Ngoài Cửa", q: "Câu nào dùng đúng 经常 trong tình huống câu chuyện?", opts: ["这个经常很好吃。", "我买了一个经常。", "你们以前经常来这里吗？", "经常在桌子上。"], optsVi: ["Cái thường này rất ngon.", "Tôi mua một cái thường.", "Trước đây hai người thường đến đây à?", "Thường ở trên bàn."], correct: 2, explain: "经常 là phó từ chỉ việc lặp lại nhiều lần, đứng trước động từ (经常来这里 = thường đến đây). Nó không phải danh từ nên không ăn, mua hay đặt lên bàn được." },
      { type: "dùng", story: "Chiếc Xe Đạp Ngoài Cửa", q: "Hoàn thành câu theo tình huống:", prompt: "Tiểu Lan giải thích vì sao bây giờ cô mới tìm đến chị gái của Tiểu Minh.\nĐiền vào chỗ trống:", tmpl: "___我终于准备好了。", tmplVi: "___ cuối cùng em cũng đã sẵn sàng.", ans: "因为", hint: "Gợi ý: 因为 (yīnwèi)", explain: "因为 = bởi vì, mở đầu phần nêu nguyên nhân: 因为我终于准备好了 = vì cuối cùng em cũng đã sẵn sàng." },
      { type: "viết", story: "Chiếc Xe Đạp Ngoài Cửa", q: "Viết một câu dùng từ 以前 (yǐqián = trước đây):", prompt: "Viết một câu kể chuyện ngày trước của bạn hoặc của một người bạn, nhớ dùng 以前.", ph: "Ví dụ: 以前，我和朋友经常一起打篮球。", explain: "Mẫu: 以前，我和朋友经常一起打篮球。 / 她是小兰，我以前的朋友。", check: (v: string) => v.includes("以前") && v.length > 3,
        word: "以前", wordPy: "yǐqián", wordVi: "trước đây — 以前 + sự việc (以前，我们经常一起…)", missMsg: "Hãy dùng từ 以前 trong câu!" },
    ],
  },
  "bi-mat-luc-sau-gio-sang": {
    doneShort: "bài Bí Mật Lúc Sáu Giờ Sáng", doneLong: "bài Bí Mật Lúc Sáu Giờ Sáng", words: 4,
    items: [
      { type: "nhớ", char: "跑步", pinyin: "Pǎobù", pinyinColor: C.success, story: "Bí Mật Lúc Sáu Giờ Sáng", q: "Nghĩa của từ này là gì?", opts: ["Đi bộ", "Chạy bộ", "Bơi", "Đá bóng"], correct: 1, explain: "跑步 (pǎobù) = chạy bộ (跑 = chạy, 步 = bước). Trong truyện: 你每天早上都去跑步吗？ (Mỗi buổi sáng anh đều đi chạy bộ à?)" },
      { type: "hiểu", sent: "忙 (máng)", sentVi: "Bận", story: "Bí Mật Lúc Sáu Giờ Sáng", q: "Câu nào dùng đúng 忙 trong tình huống câu chuyện?", opts: ["我买了一个忙。", "忙在桌子上。", "没关系，我知道你很忙。", "我很喜欢喝忙。"], optsVi: ["Tôi đã mua một cái bận.", "Bận ở trên bàn.", "Không sao, tớ biết cậu rất bận.", "Tôi rất thích uống bận."], correct: 2, explain: "忙 là tính từ chỉ trạng thái bận rộn, làm vị ngữ sau 很 (你很忙 = cậu rất bận). Nó không phải đồ vật nên không mua, không đặt lên bàn hay uống được." },
      { type: "dùng", story: "Bí Mật Lúc Sáu Giờ Sáng", q: "Hoàn thành câu theo tình huống:", prompt: "Anh trai Tiểu Vũ kể về giờ thức dậy mỗi sáng của mình.\nĐiền vào chỗ trống:", tmpl: "我每天早上六点___。", tmplVi: "Mỗi buổi sáng anh ___ lúc 6 giờ.", ans: "起床", hint: "Gợi ý: 起床 (qǐchuáng)", explain: "起床 = thức dậy, rời khỏi giường. Giờ giấc đứng trước động từ: 每天早上六点起床 = mỗi sáng thức dậy lúc 6 giờ." },
      { type: "viết", story: "Bí Mật Lúc Sáu Giờ Sáng", q: "Viết một câu dùng từ 身体 (shēntǐ = sức khỏe, cơ thể):", prompt: "Viết một câu khuyên một người bận rộn chú ý đến sức khỏe, nhớ dùng 身体.", ph: "Ví dụ: 身体很重要，你应该多休息。", explain: "Mẫu: 你不要太忙了。身体很重要，你应该多休息。 / 身体健康比什么都重要。", check: (v: string) => v.includes("身体") && v.length > 3,
        word: "身体", wordPy: "shēntǐ", wordVi: "sức khỏe, cơ thể — 身体 + 很重要 / 注意身体", missMsg: "Hãy dùng từ 身体 trong câu!" },
    ],
  },
  "bai-kiem-tra-hom-nay": {
    doneShort: "truyện Bài Kiểm Tra Hôm Nay", doneLong: "truyện Bài Kiểm Tra Hôm Nay", words: 4,
    items: [
      { type: "nhớ", char: "鱼", pinyin: "Yú", pinyinColor: C.success, story: "Bài Kiểm Tra Hôm Nay", q: "Nghĩa của từ này là gì?", opts: ["Thịt", "Cá", "Gà", "Rau"], correct: 1, explain: "鱼 (yú) = cá. Trong truyện: 妈妈，我去买鱼了！ (Mẹ ơi, con đi mua cá đây!). Lượng từ của cá là 条: 一条鱼." },
      { type: "hiểu", sent: "件 (jiàn)", sentVi: "Lượng từ cho quần áo, sự việc", story: "Bài Kiểm Tra Hôm Nay", q: "Câu nào dùng đúng 件 trong tình huống câu chuyện?", opts: ["我去买一件鱼。", "这是一件不错的办法。", "你看看那件蓝色的衣服旁边吧。", "我再喝一件咖啡。"], optsVi: ["Con đi mua một chiếc cá.", "Đây là một chiếc cách khá tốt.", "Con thử nhìn bên cạnh chiếc áo màu xanh kia xem.", "Mình uống thêm một chiếc cà phê."], correct: 2, explain: "件 là lượng từ cho quần áo (一件衣服) và sự việc (一件事). Cá dùng 条 (一条鱼), cách làm dùng 个 (一个办法), cà phê dùng 杯 (一杯咖啡)." },
      { type: "dùng", story: "Bài Kiểm Tra Hôm Nay", q: "Hoàn thành câu theo tình huống:", prompt: "Giáo viên nhắn tin nhắc giờ làm bài ngày mai.\nĐiền vào chỗ trống:", tmpl: "明天早上九点___，请不要迟到。", tmplVi: "Ngày mai ___ lúc 9 giờ sáng, xin đừng đến muộn.", ans: "考试", hint: "Gợi ý: 考试 (kǎoshì)", explain: "考试 = thi, làm bài kiểm tra. Giờ giấc đứng trước động từ: 明天早上九点考试 = ngày mai thi lúc 9 giờ sáng." },
      { type: "viết", story: "Bài Kiểm Tra Hôm Nay", q: "Viết một câu dùng từ 不错 (búcuò = khá tốt, không tệ):", prompt: "Viết một câu khen thời tiết, một món ăn hoặc một cách học, nhớ dùng 不错.", ph: "Ví dụ: 今天天气不错。", explain: "Mẫu: 外面天气不错。 / 这真是一个不错的办法！ / 听说那家饭馆的菜不错。", check: (v: string) => v.includes("不错") && v.length > 3,
        word: "不错", wordPy: "búcuò", wordVi: "khá tốt, không tệ — Danh từ + 不错 / 不错的 + Danh từ", missMsg: "Hãy dùng từ 不错 trong câu!" },
    ],
  },
  "chi-di-dau-roi": {
    doneShort: "truyện Chị Đi Đâu Rồi?", doneLong: "truyện Chị Đi Đâu Rồi?", words: 4,
    items: [
      { type: "nhớ", char: "公司", pinyin: "Gōngsī", pinyinColor: C.success, story: "Chị Đi Đâu Rồi?", q: "Nghĩa của từ này là gì?", opts: ["Trường học", "Công ty", "Sân bay", "Chợ"], correct: 1, explain: "公司 (gōngsī) = công ty. Trong truyện: 我现在在公司。 (Bây giờ chị đang ở công ty.). Trường học là 学校, sân bay là 机场, chợ là 市场." },
      { type: "hiểu", sent: "过 (guo)", sentVi: "Đã từng (đứng sau động từ)", story: "Chị Đi Đâu Rồi?", q: "Câu nào dùng đúng 过 trong tình huống câu chuyện?", opts: ["他看了过手机。", "今天我没有发消息过。", "姐姐真的来过这里吗？", "我明天去过机场。"], optsVi: ["Cậu ấy đã đã từng xem điện thoại.", "Hôm nay chị chưa gửi tin nhắn từng.", "Chị tôi thật sự đã đến đây sao?", "Ngày mai tôi đã từng đi sân bay."], correct: 2, explain: "过 đứng ngay sau động từ để nói việc đã từng làm: 来过, 发过, 打过. Nó không đi liền với 了 (了过), không đứng sau tân ngữ (发消息过 → 发过消息) và không dùng cho việc ở tương lai (明天)." },
      { type: "dùng", story: "Chị Đi Đâu Rồi?", q: "Hoàn thành câu theo tình huống:", prompt: "Tiểu Lâm ngồi trên xe buýt đi sân bay, xe chạy mãi không tới nơi.\nĐiền vào chỗ trống:", tmpl: "公共汽车开得很___。", tmplVi: "Xe buýt chạy rất ___.", ans: "慢", hint: "Gợi ý: 慢 (màn)", explain: "慢 = chậm, trái nghĩa với 快 (nhanh). Động từ + 得 + 很 + Tính từ: 开得很慢 = chạy rất chậm." },
      { type: "viết", story: "Chị Đi Đâu Rồi?", q: "Viết một câu dùng từ 消息 (xiāoxi = tin nhắn, tin tức):", prompt: "Viết một câu kể về một tin nhắn bạn đã gửi hoặc nhận, nhớ dùng 消息.", ph: "Ví dụ: 我给姐姐发了一条消息。", explain: "Mẫu: 姐姐又发来一条消息。 / 这条消息是昨天的。 / 我没有看到你的消息。 Lượng từ của 消息 là 条: 一条消息.", check: (v: string) => v.includes("消息") && v.length > 3,
        word: "消息", wordPy: "xiāoxi", wordVi: "tin nhắn, tin tức — 一条消息 / 发消息", missMsg: "Hãy dùng từ 消息 trong câu!" },
    ],
  },
  "do-cua-toi-dau-mat-roi": {
    doneShort: "truyện Đồ Của Tôi Đâu Mất Rồi?", doneLong: "truyện Đồ Của Tôi Đâu Mất Rồi?", words: 4,
    items: [
      { type: "nhớ", char: "贵", pinyin: "Guì", pinyinColor: C.success, story: "Đồ Của Tôi Đâu Mất Rồi?", q: "Nghĩa của từ này là gì?", opts: ["Rẻ", "Đắt", "Đẹp", "Mới"], correct: 1, explain: "贵 (guì) = đắt. Trong truyện: 太贵了！有没有便宜一点儿的？ (Đắt quá! Có chiếc nào rẻ hơn một chút không?). Trái nghĩa là 便宜 (rẻ)." },
      { type: "hiểu", sent: "让 (ràng)", sentVi: "Bảo, để (ai làm gì)", story: "Đồ Của Tôi Đâu Mất Rồi?", q: "Câu nào dùng đúng 让 trong tình huống câu chuyện?", opts: ["这件衣服让八百块。", "妈妈让我买一件白色的衣服。", "我让在商店门口等你。", "让，我知道了！"], optsVi: ["Chiếc áo này bảo 800 tệ.", "Mẹ bảo tôi mua một chiếc áo màu trắng.", "Tôi bảo ở cửa hàng đợi cậu.", "Bảo, con biết rồi!"], correct: 1, explain: "让 + người + việc = bảo / để ai làm gì: 妈妈让我买… (mẹ bảo tôi mua…). Sau 让 phải có người nhận lời bảo rồi mới tới việc. Nói giá thì nói thẳng 八百块, đồng ý thì dùng 好." },
      { type: "dùng", story: "Đồ Của Tôi Đâu Mất Rồi?", q: "Hoàn thành câu theo tình huống:", prompt: "Chiếc áo thứ hai chỉ 300 tệ, trong khi chiếc đầu tiên tới 800 tệ.\nĐiền vào chỗ trống:", tmpl: "三百块？___多了！我买这件吧。", tmplVi: "300 tệ à? ___ hơn nhiều rồi! Tôi mua chiếc này nhé.", ans: "便宜", hint: "Gợi ý: 便宜 (piányi)", explain: "便宜 = rẻ, trái nghĩa với 贵 (đắt). Tính từ + 多了 = … hơn nhiều: 便宜多了 = rẻ hơn nhiều." },
      { type: "viết", story: "Đồ Của Tôi Đâu Mất Rồi?", q: "Viết một câu dùng từ 告诉 (gàosu = nói cho biết):", prompt: "Viết một câu nhờ ai đó báo cho bạn biết một việc, nhớ dùng 告诉.", ph: "Ví dụ: 买完东西就告诉我。", explain: "Mẫu: 你告诉我价格，我帮你选。 / 我想告诉妈妈这件事。 / 请告诉我你的电话。 Cấu trúc: 告诉 + người + điều muốn nói.", check: (v: string) => v.includes("告诉") && v.length > 3,
        word: "告诉", wordPy: "gàosu", wordVi: "nói cho biết — 告诉 + người + việc", missMsg: "Hãy dùng từ 告诉 trong câu!" },
    ],
  },
  "mot-buoi-bieu-dien-dac-biet": {
    doneShort: "truyện Một Buổi Biểu Diễn Đặc Biệt", doneLong: "truyện Một Buổi Biểu Diễn Đặc Biệt", words: 4,
    items: [
      { type: "nhớ", char: "跳舞", pinyin: "Tiào wǔ", pinyinColor: C.success, story: "Một Buổi Biểu Diễn Đặc Biệt", q: "Nghĩa của từ này là gì?", opts: ["Hát", "Nhảy múa", "Chạy bộ", "Vẽ tranh"], correct: 1, explain: "跳舞 (tiào wǔ) = nhảy múa. Trong truyện: 小明很喜欢跳舞。 (Tiểu Minh rất thích nhảy múa.). Hát là 唱歌, chạy bộ là 跑步, vẽ tranh là 画画." },
      { type: "hiểu", sent: "希望 (xīwàng)", sentVi: "Mong, hy vọng", story: "Một Buổi Biểu Diễn Đặc Biệt", q: "Câu nào dùng đúng 希望 trong tình huống câu chuyện?", opts: ["我买了一个希望。", "这个希望很好吃。", "希望在桌子上。", "我希望你在表演的时候开心一点儿。"], optsVi: ["Tôi đã mua một cái hy vọng.", "Cái hy vọng này rất ngon.", "Hy vọng ở trên bàn.", "Bố hy vọng con sẽ vui vẻ hơn khi biểu diễn."], correct: 3, explain: "希望 là động từ \"mong, hy vọng\", theo sau là cả một việc: 希望 + (ai) + làm gì (我希望你开心一点儿). Nó không phải đồ vật nên không mua, không ăn hay đặt lên bàn được." },
      { type: "dùng", story: "Một Buổi Biểu Diễn Đặc Biệt", q: "Hoàn thành câu theo tình huống:", prompt: "Tiểu Hồng làm thật chậm động tác khó một lần, Tiểu Minh chăm chú nhìn theo.\nĐiền vào chỗ trống:", tmpl: "小明认真地看着她，终于___了。", tmplVi: "Tiểu Minh chăm chú nhìn cô ấy, cuối cùng cũng ___.", ans: "懂", hint: "Gợi ý: 懂 (dǒng)", explain: "懂 = hiểu. 终于懂了 = cuối cùng cũng hiểu: 了 cho biết đã có thay đổi (trước chưa hiểu, giờ đã hiểu)." },
      { type: "viết", story: "Một Buổi Biểu Diễn Đặc Biệt", q: "Viết một câu dùng từ 欢迎 (huānyíng = hoan nghênh, chào đón):", prompt: "Viết một câu chào đón một người bạn mới đến lớp, đến nhà hoặc vào đội của bạn, nhớ dùng 欢迎.", ph: "Ví dụ: 欢迎你来我家！", explain: "Mẫu: 欢迎你加入我们的舞蹈队！ / 欢迎你们来中国。 / 小红欢迎小明加入舞蹈队。 Cấu trúc: 欢迎 + người + (làm gì).", check: (v: string) => v.includes("欢迎") && v.length > 3,
        word: "欢迎", wordPy: "huānyíng", wordVi: "hoan nghênh, chào đón — 欢迎 + người + việc", missMsg: "Hãy dùng từ 欢迎 trong câu!" },
    ],
  },
  "mot-chuyen-di-dang-nho": {
    doneShort: "truyện Một Chuyến Đi Đáng Nhớ", doneLong: "truyện Một Chuyến Đi Đáng Nhớ", words: 4,
    items: [
      { type: "nhớ", char: "公园", pinyin: "Gōngyuán", pinyinColor: C.success, story: "Một Chuyến Đi Đáng Nhớ", q: "Nghĩa của từ này là gì?", opts: ["Trường học", "Cửa hàng", "Công viên", "Nhà hàng"], correct: 2, explain: "公园 (gōngyuán) = công viên. Trong truyện: 三个朋友终于到了公园。 (Ba người bạn cuối cùng cũng đến công viên.). Trường học là 学校, cửa hàng là 商店, nhà hàng là 饭店." },
      { type: "hiểu", sent: "从 (cóng)", sentVi: "Từ (chỉ điểm xuất phát)", story: "Một Chuyến Đi Đáng Nhớ", q: "Câu nào dùng đúng 从 trong tình huống câu chuyện?", opts: ["我们从学校坐车去公园吧！", "我想吃从米饭。", "从小刚是我的好朋友。", "她今天从很开心。"], optsVi: ["Chúng ta đi xe từ trường đến công viên nhé!", "Tớ muốn ăn từ cơm.", "Từ Tiểu Cương là bạn thân của tớ.", "Hôm nay cô ấy từ rất vui."], correct: 0, explain: "从 + nơi chốn (hoặc thời điểm) + động từ chỉ điểm xuất phát: 从学校去公园 = từ trường đến công viên. 从 không đứng trước món ăn, tên người làm chủ ngữ hay tính từ." },
      { type: "dùng", story: "Một Chuyến Đi Đáng Nhớ", q: "Hoàn thành câu theo tình huống:", prompt: "Cả nhóm hẹn 9 giờ có mặt ở trường. Tiểu Mỹ nhắc mọi người đi cho đúng giờ.\nĐiền vào chỗ trống:", tmpl: "九点，我们不要___！", tmplVi: "Chín giờ, chúng ta đừng ___ nhé!", ans: "迟到", hint: "Gợi ý: 迟到 (chídào)", explain: "迟到 = đến muộn. 不要 + Động từ = đừng làm gì: 不要迟到 = đừng đến muộn." },
      { type: "viết", story: "Một Chuyến Đi Đáng Nhớ", q: "Viết một câu dùng từ 照片 (zhàopiàn = ảnh, bức ảnh):", prompt: "Viết một câu kể về một bức ảnh bạn đã chụp hoặc muốn chụp, nhớ dùng 照片.", ph: "Ví dụ: 我们一起拍了一张照片。", explain: "Mẫu: 这是我和朋友的照片。 / 我把照片发给了妈妈。 / 我们一起拍张照片吧！ Lượng từ của 照片 là 张: 一张照片.", check: (v: string) => v.includes("照片") && v.length > 3,
        word: "照片", wordPy: "zhàopiàn", wordVi: "ảnh, bức ảnh — 一张照片 / 拍照片", missMsg: "Hãy dùng từ 照片 trong câu!" },
    ],
  },
  "mot-ngay-cung-anh-trai": {
    doneShort: "truyện Một Ngày Cùng Anh Trai", doneLong: "truyện Một Ngày Cùng Anh Trai", words: 4,
    items: [
      { type: "nhớ", char: "鸡蛋", pinyin: "Jīdàn", pinyinColor: C.success, story: "Một Ngày Cùng Anh Trai", q: "Nghĩa của từ này là gì?", opts: ["Dưa hấu", "Trứng gà", "Bữa sáng", "Điện thoại"], correct: 1, explain: "鸡蛋 (jīdàn) = trứng gà. Trong truyện: 小安拿了几个鸡蛋，准备做早饭。 (Tiểu An lấy vài quả trứng gà, chuẩn bị làm bữa sáng.). Dưa hấu là 西瓜, bữa sáng là 早饭, điện thoại là 手机." },
      { type: "hiểu", sent: "别 (bié)", sentVi: "Đừng", story: "Một Ngày Cùng Anh Trai", q: "Câu nào dùng đúng 别 trong tình huống câu chuyện?", opts: ["哥哥别厨房做早饭。", "西瓜很别好吃。", "别让鸡蛋掉在地上！", "我昨天别去公园了。"], optsVi: ["Anh trai đừng nhà bếp làm bữa sáng.", "Dưa hấu rất đừng ngon.", "Đừng để trứng gà rơi xuống sàn!", "Hôm qua tôi đừng đi công viên rồi."], correct: 2, explain: "别 + Động từ = đừng làm gì (lời khuyên, lời dặn): 别让鸡蛋掉在地上. 别 phải đứng trước động từ; không đứng trước danh từ hay tính từ và không dùng cho việc đã xảy ra." },
      { type: "dùng", story: "Một Ngày Cùng Anh Trai", q: "Hoàn thành câu theo tình huống:", prompt: "Sáng thứ Bảy, Tiểu An xem TV ở nhà còn anh trai thì đang làm bữa sáng.\nĐiền vào chỗ trống:", tmpl: "哥哥___做早饭。", tmplVi: "Anh trai ___ làm bữa sáng.", ans: "正在", hint: "Gợi ý: 正在 (zhèngzài)", explain: "正在 + Động từ = đang làm gì: 哥哥正在做早饭 = anh trai đang làm bữa sáng. 正在 đứng trước động từ." },
      { type: "viết", story: "Một Ngày Cùng Anh Trai", q: "Viết một câu dùng từ 洗 (xǐ = rửa, giặt):", prompt: "Viết một câu nói về việc rửa một thứ gì đó, nhớ dùng 洗.", ph: "Ví dụ: 哥哥在洗水果。", explain: "Mẫu: 我帮哥哥洗西瓜。 / 他正在洗水果。 / 吃饭以前请先洗手。", check: (v: string) => v.includes("洗") && v.length > 3,
        word: "洗", wordPy: "xǐ", wordVi: "rửa, giặt — 洗水果 / 洗西瓜", missMsg: "Hãy dùng từ 洗 trong câu!" },
    ],
  },
  "dien-thoai-di-dau-mat-roi": {
    doneShort: "truyện Điện Thoại Đi Đâu Mất Rồi?", doneLong: "truyện Điện Thoại Đi Đâu Mất Rồi?", words: 4,
    items: [
      { type: "nhớ", char: "手机", pinyin: "Shǒujī", pinyinColor: C.success, story: "Điện Thoại Đi Đâu Mất Rồi?", q: "Nghĩa của từ này là gì?", opts: ["Cặp sách", "Điện thoại", "Bàn học", "Quyển sách"], correct: 1, explain: "手机 (shǒujī) = điện thoại di động. Trong truyện: 小雨的手机突然响了。 (Điện thoại của Tiểu Vũ đột nhiên reo lên.). Cặp sách là 书包, bàn là 桌子, sách là 书." },
      { type: "hiểu", sent: "帮助 (bāngzhù)", sentVi: "Giúp đỡ", story: "Điện Thoại Đi Đâu Mất Rồi?", q: "Câu nào dùng đúng 帮助 trong tình huống câu chuyện?", opts: ["我很帮助哥哥西瓜。", "帮助我老师回答这个问题。", "老师帮助了的我很多。", "谁可以帮助我回答这个问题？"], optsVi: ["Tôi rất giúp đỡ anh trai dưa hấu.", "Giúp đỡ tôi cô giáo trả lời câu hỏi này.", "Cô giáo giúp đỡ rồi của tôi rất nhiều.", "Ai có thể giúp tôi trả lời câu hỏi này?"], correct: 3, explain: "帮助 + người + việc cần làm: 帮助我回答这个问题 = giúp tôi trả lời câu hỏi này. Người được giúp đứng ngay sau 帮助; không chen 的 sau 了 và không ghép tân ngữ vô nghĩa phía sau." },
      { type: "dùng", story: "Điện Thoại Đi Đâu Mất Rồi?", q: "Hoàn thành câu theo tình huống:", prompt: "Giáo viên nhắc Tiểu Vũ khi điện thoại reo giữa giờ học.\nĐiền vào chỗ trống:", tmpl: "上课的时候，___玩手机！", tmplVi: "Trong giờ học, ___ chơi điện thoại!", ans: "别", hint: "Gợi ý: 别 (bié)", explain: "别 + Động từ = đừng làm gì: 别玩手机 = đừng chơi điện thoại. 别 đứng trước động từ." },
      { type: "viết", story: "Điện Thoại Đi Đâu Mất Rồi?", q: "Viết một câu dùng từ 正在 (zhèngzài = đang):", prompt: "Viết một câu nói về việc ai đó đang làm, nhớ dùng 正在.", ph: "Ví dụ: 老师正在教学生说汉语。", explain: "Mẫu: 我正在找我的手机。 / 他正在看书。 / 哥哥正在洗西瓜。 正在 đứng trước động từ.", check: (v: string) => v.includes("正在") && v.length > 3,
        word: "正在", wordPy: "zhèngzài", wordVi: "đang — 正在 + Động từ (正在找手机)", missMsg: "Hãy dùng từ 正在 trong câu!" },
    ],
  },
  "sinh-nhat-o-khach-san": {
    doneShort: "truyện Sinh Nhật Ở Khách Sạn", doneLong: "truyện Sinh Nhật Ở Khách Sạn", words: 4,
    items: [
      { type: "nhớ", char: "宾馆", pinyin: "Bīnguǎn", pinyinColor: C.success, story: "Sinh Nhật Ở Khách Sạn", q: "Nghĩa của từ này là gì?", opts: ["Nhà ga", "Trường học", "Khách sạn", "Cửa hàng"], correct: 2, explain: "宾馆 (bīnguǎn) = khách sạn. Trong truyện: 他今天在宾馆，我想去看他。 (Hôm nay bố tớ ở khách sạn, tớ muốn đến thăm bố.). Nhà ga là 火车站, trường học là 学校, cửa hàng là 商店." },
      { type: "hiểu", sent: "一直 (yìzhí)", sentVi: "Luôn, liên tục, cứ", story: "Sinh Nhật Ở Khách Sạn", q: "Câu nào dùng đúng 一直 trong tình huống câu chuyện?", opts: ["她看着一直手机很高兴。", "她一直看着手机，好像在等一个电话。", "宾馆很一直漂亮。", "一直桌子在上有书。"], optsVi: ["Cô ấy nhìn cứ điện thoại rất vui.", "Cô ấy cứ nhìn điện thoại, dường như đang đợi một cuộc gọi.", "Khách sạn rất cứ đẹp.", "Cứ bàn ở trên có sách."], correct: 1, explain: "一直 là phó từ (luôn, cứ), đứng trước động từ để nói hành động kéo dài liên tục: 一直看着手机. Không đứng sau động từ, không đứng trước tính từ hay danh từ." },
      { type: "dùng", story: "Sinh Nhật Ở Khách Sạn", q: "Hoàn thành câu theo tình huống:", prompt: "Hai bạn rời trường và đi về phía bên ngoài cổng.\nĐiền vào chỗ trống:", tmpl: "你们___学校外面走。", tmplVi: "Hai người đi ___ bên ngoài trường học.", ans: "往", hint: "Gợi ý: 往 (wǎng)", explain: "往 + hướng + Động từ = đi về phía…: 往学校外面走 = đi về phía bên ngoài trường. 往 là giới từ, đứng trước hướng và động từ." },
      { type: "viết", story: "Sinh Nhật Ở Khách Sạn", q: "Viết một câu dùng từ 着 (zhe = đang, giữ trạng thái):", prompt: "Viết một câu mô tả ai đó đang cầm hoặc mặc gì đó, nhớ dùng 着.", ph: "Ví dụ: 她拿着一支铅笔。", explain: "Mẫu: 她穿着红色的衣服。 / 他看着手机。 / 我拿着一本书。 着 đứng ngay sau động từ để nói trạng thái đang kéo dài.", check: (v: string) => v.includes("着") && v.length > 3,
        word: "着", wordPy: "zhe", wordVi: "(trợ từ) đang, giữ trạng thái — 拿着 / 穿着 / 看着", missMsg: "Hãy dùng từ 着 trong câu!" },
    ],
  },
};
