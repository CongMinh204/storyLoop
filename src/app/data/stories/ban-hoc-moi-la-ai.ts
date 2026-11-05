import type { BranchingStory } from "../../types";

// Truyện "Bạn Học Mới Là Ai?" (HSK 2, Bài 11 Câu chuyện 1), rẽ nhánh với 4 kết thúc. Người chơi vào vai 小雨.
// Bản gốc của người viết: src/imports/stories/ban-hoc-moi-la-ai.md (tên gốc: 《新同学是谁？》)
// Mọi câu thoại/suy nghĩ của 小雨 là bước chọn (pick) 3 đáp án có chấm điểm.
// Rẽ nhánh cuối cảnh 07 cho phép mở cả END_3 và END_4 từ bản thảo.
export const BAN_HOC_MOI_LA_AI: BranchingStory = {
  start: "01",
  characters: {
    "老师": "👨‍🏫",
    "新同学": "👦",
    "李明": "👦",
    "女同学": "👧",
    "孩子": "🧒",
    "服务员": "🧑‍💼",
  },
  vocab: [
    { word: "唱歌", py: "chànggē", vi: "hát, ca hát",
      ex: { zh: "今天学校有一个唱歌比赛。", py: "Jīntiān xuéxiào yǒu yí ge chànggē bǐsài.", vi: "Hôm nay trường có một cuộc thi hát." } },
    { word: "男", py: "nán", vi: "nam, phái nam",
      ex: { zh: "我们的老师都是男老师吗？", py: "Wǒmen de lǎoshī dōu shì nán lǎoshī ma?", vi: "Các giáo viên của chúng ta đều là giáo viên nam sao?" } },
    { word: "女", py: "nǚ", vi: "nữ, phái nữ",
      ex: { zh: "不是，也有女老师。", py: "Bú shì, yě yǒu nǚ lǎoshī.", vi: "Không phải, cũng có giáo viên nữ." } },
    { word: "孩子", py: "háizi", vi: "trẻ con, đứa trẻ",
      ex: { zh: "原来，这个孩子是李明的弟弟。", py: "Yuánlái, zhège háizi shì Lǐ Míng de dìdi.", vi: "Hóa ra, đứa trẻ này là em trai của Lý Minh." } },
    { word: "右边", py: "yòubian", vi: "bên phải",
      ex: { zh: "她的右边坐着一个女同学。", py: "Tā de yòubian zuòzhe yí ge nǚ tóngxué.", vi: "Bên phải cô ấy có một bạn học nữ đang ngồi." } },
    { word: "比", py: "bǐ", vi: "hơn (so sánh)",
      ex: { zh: "你唱得比刚才好多了！", py: "Nǐ chàng de bǐ gāngcái hǎo duō le!", vi: "Bạn hát hay hơn lúc nãy nhiều rồi!" } },
    { word: "便宜", py: "piányi", vi: "rẻ",
      ex: { zh: "这个手机比那个便宜吗？", py: "Zhège shǒujī bǐ nàge piányi ma?", vi: "Chiếc điện thoại này có rẻ hơn chiếc kia không?" } },
    { word: "说话", py: "shuōhuà", vi: "nói chuyện",
      ex: { zh: "还不认识，我想和他说话。", py: "Hái bú rènshi, wǒ xiǎng hé tā shuōhuà.", vi: "Mình vẫn chưa quen, mình muốn nói chuyện với bạn ấy." } },
    { word: "可能", py: "kěnéng", vi: "có thể, có lẽ",
      ex: { zh: "我可能会忘记歌词。", py: "Wǒ kěnéng huì wàngjì gēcí.", vi: "Có lẽ mình sẽ quên lời bài hát." } },
    { word: "去年", py: "qùnián", vi: "năm ngoái",
      ex: { zh: "我去年在北京学习。", py: "Wǒ qùnián zài Běijīng xuéxí.", vi: "Năm ngoái mình học ở Bắc Kinh." } },
    { word: "姓", py: "xìng", vi: "mang họ",
      ex: { zh: "你好，我姓李，叫李明。", py: "Nǐ hǎo, wǒ xìng Lǐ, jiào Lǐ Míng.", vi: "Chào bạn, mình họ Lý, tên là Lý Minh." } },
  ],
  nodes: {
    // NODE 01 — GẶP BẠN HỌC MỚI
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "📍 Sáng thứ Hai · Lớp học tiếng Trung" },
        { kind: "quote", zh: "今天是星期一，小雨来到学校。教室里有一个新同学。", py: "Jīntiān shì xīngqīyī, Xiǎo Yǔ lái dào xuéxiào. Jiàoshì lǐ yǒu yí ge xīn tóngxué.", vi: "Hôm nay là thứ Hai, Tiểu Vũ đến trường. Trong lớp có một bạn học mới." },
        { kind: "npc", speaker: "老师", zh: "大家好，这是新同学。", py: "Dàjiā hǎo, zhè shì xīn tóngxué.", vi: "Chào các em, đây là bạn học mới." },
        { kind: "quote", zh: "小雨想认识他，就走过去。", py: "Xiǎo Yǔ xiǎng rènshi tā, jiù zǒu guòqù.", vi: "Tiểu Vũ muốn làm quen với bạn ấy nên đi đến gần." },
      ],
      choices: [
        {
          label: "Chủ động nói chuyện",
          zh: "主动和新同学说话。", py: "Zhǔdòng hé xīn tóngxué shuōhuà.", vi: "Chủ động nói chuyện với bạn học mới.",
          next: "02",
          analysis: { structure: "和 + Người + 说话", explain: "和…说话 = nói chuyện với ai. 主动 = chủ động, đứng trước cụm giới từ." },
          vocab: [{ word: "说话", py: "shuōhuà", vi: "nói chuyện" }, { word: "新", py: "xīn", vi: "mới" }, { word: "同学", py: "tóngxué", vi: "bạn học" }],
        },
        {
          label: "Về chỗ ngồi trước",
          zh: "先回自己的座位。", py: "Xiān huí zìjǐ de zuòwèi.", vi: "Trở về chỗ ngồi của mình trước.",
          next: "03",
          analysis: { structure: "先 + Động từ + Tân ngữ", explain: "先 = trước tiên. 自己的座位 = chỗ ngồi của chính mình." },
          vocab: [{ word: "先", py: "xiān", vi: "trước" }, { word: "回", py: "huí", vi: "về" }, { word: "自己", py: "zìjǐ", vi: "tự mình" }],
        },
      ],
    },

    // NODE 02 — BẠN ẤY HỌ GÌ?
    "02": {
      id: "02",
      lines: [
        { kind: "pick", options: [
          { zh: "你好，你叫什么名字？", py: "Nǐ hǎo, nǐ jiào shénme míngzi?", vi: "Chào bạn, bạn tên là gì?", correct: true,
            analysis: { structure: "叫 + 什么名字？", explain: "叫什么名字 là cách hỏi tên thông dụng trong tiếng Trung. 什么 đứng trước danh từ 名字." },
            vocab: [{ word: "叫", py: "jiào", vi: "gọi là, tên là" }, { word: "什么", py: "shénme", vi: "gì" }, { word: "名字", py: "míngzi", vi: "tên" }] },
          { zh: "你好，你名字叫什么吗？", py: "Nǐ hǎo, nǐ míngzi jiào shénme ma?", vi: "Chào bạn, bạn tên gọi là gì à?", correct: false,
            analysis: { structure: "Thừa trợ từ 吗", explain: "Câu đã có đại từ nghi vấn 什么 thì không dùng trợ từ 吗 ở cuối." },
            vocab: [{ word: "什么", py: "shénme", vi: "gì" }] },
          { zh: "你好，你叫名字什么？", py: "Nǐ hǎo, nǐ jiào míngzi shénme?", vi: "Chào bạn, bạn gọi tên gì?", correct: false,
            analysis: { structure: "Sai trật tự 什么", explain: "Đại từ 什么 phải đứng trước danh từ: 什么名字, không đảo thành 名字什么." },
            vocab: [{ word: "名字", py: "míngzi", vi: "tên" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "你好，我姓李，叫李明。", py: "Nǐ hǎo, wǒ xìng Lǐ, jiào Lǐ Míng.", vi: "Chào bạn, mình họ Lý, tên là Lý Minh." },
        { kind: "pick", options: [
          { zh: "很认识你高兴！", py: "Hěn rènshi nǐ gāoxìng!", vi: "Rất quen biết bạn vui vẻ!", correct: false,
            analysis: { structure: "Sai trật tự câu chào", explain: "Mẫu câu đúng là 很高兴 (rất vui) đứng trước, rồi mới đến hành động 认识你 (được quen bạn)." },
            vocab: [{ word: "高兴", py: "gāoxìng", vi: "vui vẻ" }] },
          { zh: "很高兴认识你！", py: "Hěn gāoxìng rènshi nǐ!", vi: "Rất vui được làm quen với bạn!", correct: true,
            analysis: { structure: "很高兴 + 认识你", explain: "很高兴认识你 là câu xã giao tiêu chuẩn khi lần đầu gặp mặt: rất vui được làm quen với bạn." },
            vocab: [{ word: "高兴", py: "gāoxìng", vi: "vui mừng" }, { word: "认识", py: "rènshi", vi: "quen biết" }] },
          { zh: "很高兴认识你吗？", py: "Hěn gāoxìng rènshi nǐ ma?", vi: "Rất vui được làm quen với bạn à?", correct: false,
            analysis: { structure: "Thừa trợ từ 吗", explain: "Đây là câu chào bày tỏ cảm xúc, không phải câu hỏi có/không nên không thêm 吗." },
            vocab: [{ word: "认识", py: "rènshi", vi: "quen biết" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "我也很高兴！", py: "Wǒ yě hěn gāoxìng!", vi: "Mình cũng rất vui!" },
      ],
      choices: [
        {
          label: "Hỏi trường cũ của Lý Minh",
          zh: "问李明以前在哪个学校学习。", py: "Wèn Lǐ Míng yǐqián zài nǎge xuéxiào xuéxí.", vi: "Hỏi Lý Minh trước đây học ở trường nào.",
          next: "04",
          analysis: { structure: "问 + Người + (câu hỏi); 在 + Nơi chốn + Động từ", explain: "问李明 = hỏi Lý Minh. 在哪个学校学习 = học ở trường nào (nơi chốn đứng trước hành động)." },
          vocab: [{ word: "以前", py: "yǐqián", vi: "trước đây" }, { word: "学校", py: "xuéxiào", vi: "trường học" }, { word: "学习", py: "xuéxí", vi: "học tập" }],
        },
        {
          label: "Mời Lý Minh tham quan trường",
          zh: "邀请李明一起去看学校。", py: "Yāoqǐng Lǐ Míng yìqǐ qù kàn xuéxiào.", vi: "Mời Lý Minh cùng đi tham quan trường.",
          next: "05",
          analysis: { structure: "邀请 + Người + 一起 + Động từ", explain: "邀请 = mời. 一起去看学校 = cùng đi xem trường học." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "看", py: "kàn", vi: "xem, tham quan" }],
        },
      ],
    },

    // NODE 03 — NHÌN THẤY BẠN Ở BÊN PHẢI
    "03": {
      id: "03",
      lines: [
        { kind: "quote", zh: "小雨回到自己的座位。她的右边坐着一个女同学。", py: "Xiǎo Yǔ huí dào zìjǐ de zuòwèi. Tā de yòubian zuòzhe yí ge nǚ tóngxué.", vi: "Tiểu Vũ trở về chỗ ngồi của mình. Bên phải cô ấy có một bạn học nữ đang ngồi." },
        { kind: "npc", speaker: "女同学", zh: "你认识那个新同学吗？", py: "Nǐ rènshi nàge xīn tóngxué ma?", vi: "Bạn có quen bạn học mới kia không?" },
        { kind: "pick", options: [
          { zh: "还认识不，我想和他说话。", py: "Hái rènshi bù, wǒ xiǎng hé tā shuōhuà.", vi: "Còn quen không, mình muốn cùng bạn ấy nói chuyện.", correct: false,
            analysis: { structure: "Sai vị trí 不", explain: "Phủ định 'vẫn chưa' dùng 还不 + Động từ: 还不认识, không đưa 不 ra sau động từ." },
            vocab: [{ word: "认识", py: "rènshi", vi: "quen biết" }] },
          { zh: "还不认识，我想说和他话。", py: "Hái bú rènshi, wǒ xiǎng shuō hé tā huà.", vi: "Mình vẫn chưa quen, mình muốn nói cùng bạn ấy chuyện.", correct: false,
            analysis: { structure: "Sai vị trí cụm 和他", explain: "Giới từ 和 + đối tượng phải đứng trước động từ: 和他说话, không chen vào giữa động từ ly hợp 说话." },
            vocab: [{ word: "说话", py: "shuōhuà", vi: "nói chuyện" }] },
          { zh: "还不认识，我想和他说话。", py: "Hái bú rènshi, wǒ xiǎng hé tā shuōhuà.", vi: "Mình vẫn chưa quen, mình muốn nói chuyện với bạn ấy.", correct: true,
            analysis: { structure: "还不 + Động từ; 想 + 和 + Người + 说话", explain: "还不认识 = vẫn chưa quen biết. 和他说话 = nói chuyện với bạn ấy (cụm 和 đứng trước động từ)." },
            vocab: [{ word: "说话", py: "shuōhuà", vi: "nói chuyện" }, { word: "还", py: "hái", vi: "vẫn" }, { word: "想", py: "xiǎng", vi: "muốn" }] },
        ] },
        { kind: "npc", speaker: "女同学", zh: "那我们一起去吧！", py: "Nà wǒmen yìqǐ qù ba!", vi: "Vậy chúng ta cùng đi nhé!" },
      ],
      next: "02",
    },

    // NODE 04 — BẠN HỌC CŨ
    "04": {
      id: "04",
      lines: [
        { kind: "pick", options: [
          { zh: "你以前在哪个学校学习？", py: "Nǐ yǐqián zài nǎge xuéxiào xuéxí?", vi: "Trước đây bạn học ở trường nào?", correct: true,
            analysis: { structure: "以前 + 在 + 哪个学校 + 学习？", explain: "Trạng ngữ chỉ nơi chốn 在哪个学校 đứng trước động từ 学习 (học ở đâu)." },
            vocab: [{ word: "以前", py: "yǐqián", vi: "trước đây" }, { word: "学校", py: "xuéxiào", vi: "trường học" }, { word: "学习", py: "xuéxí", vi: "học tập" }] },
          { zh: "你以前学习在哪个学校？", py: "Nǐ yǐqián xuéxí zài nǎge xuéxiào?", vi: "Trước đây bạn học ở trường nào?", correct: false,
            analysis: { structure: "Sai vị trí trạng ngữ nơi chốn", explain: "Trong tiếng Trung, trạng ngữ chỉ địa điểm 在 + Nơi chốn đứng trước động từ chính: 在哪个学校学习." },
            vocab: [{ word: "学习", py: "xuéxí", vi: "học tập" }] },
          { zh: "你以前在哪个学校学习吗？", py: "Nǐ yǐqián zài nǎge xuéxiào xuéxí ma?", vi: "Trước đây bạn học ở trường nào à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ nghi vấn 哪个 (nào) thì không thêm 吗 ở cuối câu." },
            vocab: [{ word: "学校", py: "xuéxiào", vi: "trường học" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "我去年在北京学习。", py: "Wǒ qùnián zài Běijīng xuéxí.", vi: "Năm ngoái mình học ở Bắc Kinh." },
        { kind: "pick", options: [
          { zh: "真的吗？北京怎么？", py: "Zhēn de ma? Běijīng zěnme?", vi: "Thật sao? Bắc Kinh làm sao?", correct: false,
            analysis: { structure: "Dùng sai đại từ nghi vấn", explain: "Hỏi về tính chất/tình hình của một nơi dùng 怎么样, không dùng 怎么 (dùng hỏi nguyên nhân/cách thức hành động)." },
            vocab: [{ word: "怎么", py: "zěnme", vi: "sao, làm sao" }] },
          { zh: "真的吗？北京怎么样？", py: "Zhēn de ma? Běijīng zěnmeyàng?", vi: "Thật sao? Bắc Kinh thế nào?", correct: true,
            analysis: { structure: "Nơi chốn + 怎么样？", explain: "怎么样 dùng ở vị ngữ để hỏi thăm tình hình, đặc điểm của người hoặc địa điểm: 北京怎么样？" },
            vocab: [{ word: "去年", py: "qùnián", vi: "năm ngoái" }, { word: "怎么样", py: "zěnmeyàng", vi: "thế nào" }] },
          { zh: "真的吗？怎么样北京？", py: "Zhēn de ma? Zěnmeyàng Běijīng?", vi: "Thật sao? Thế nào Bắc Kinh?", correct: false,
            analysis: { structure: "Sai trật tự chủ ngữ vị ngữ", explain: "Chủ ngữ 北京 đứng trước vị ngữ nghi vấn: 北京怎么样, không đảo ngược." },
            vocab: [{ word: "怎么样", py: "zěnmeyàng", vi: "thế nào" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "北京很好，我很喜欢那里。", py: "Běijīng hěn hǎo, wǒ hěn xǐhuan nàli.", vi: "Bắc Kinh rất tuyệt, mình rất thích nơi đó." },
        { kind: "pick", options: [
          { zh: "以后你可以讲讲我给北京吗？", py: "Yǐhòu nǐ kěyǐ jiǎngjiang wǒ gěi Běijīng ma?", vi: "Sau này bạn có thể kể mình cho Bắc Kinh không?", correct: false,
            analysis: { structure: "Sai cấu trúc 给 + Người", explain: "Cụm 给 + người nghe đứng trước động từ: 给我讲讲, không đặt sau động từ." },
            vocab: [{ word: "给", py: "gěi", vi: "cho" }] },
          { zh: "以后你可以给我讲讲吗北京？", py: "Yǐhòu nǐ kěyǐ gěi wǒ jiǎngjiang ma Běijīng?", vi: "Sau này bạn có thể kể cho mình không Bắc Kinh?", correct: false,
            analysis: { structure: "Sai vị trí tân ngữ và 吗", explain: "吗 phải đứng ở cuối toàn bộ câu, sau tân ngữ 北京: 给我讲讲北京吗？" },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "以后你可以给我讲讲北京吗？", py: "Yǐhòu nǐ kěyǐ gěi wǒ jiǎngjiang Běijīng ma?", vi: "Sau này bạn có thể kể cho mình nghe về Bắc Kinh không?", correct: true,
            analysis: { structure: "给 + Người + 讲讲 + Danh từ", explain: "讲讲 là hình thức lặp động từ (kể nghe thử chút). 给 + người + động từ = làm gì cho ai." },
            vocab: [{ word: "以后", py: "yǐhòu", vi: "sau này" }, { word: "讲", py: "jiǎng", vi: "nói, kể" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "当然可以！", py: "Dāngrán kěyǐ!", vi: "Tất nhiên là được!" },
      ],
      next: "06",
    },

    // NODE 05 — THAM QUAN TRƯỜNG
    "05": {
      id: "05",
      lines: [
        { kind: "quote", zh: "小雨带李明去看学校。他们先去了图书馆。然后，他们看见一个男老师和一个女老师。", py: "Xiǎo Yǔ dài Lǐ Míng qù kàn xuéxiào. Tāmen xiān qù le túshūguǎn. Ránhòu, tāmen kànjiàn yí ge nán lǎoshī hé yí ge nǚ lǎoshī.", vi: "Tiểu Vũ dẫn Lý Minh đi tham quan trường. Đầu tiên, họ đến thư viện. Sau đó, họ nhìn thấy một thầy giáo và một cô giáo." },
        { kind: "npc", speaker: "李明", zh: "我们的老师都是男老师吗？", py: "Wǒmen de lǎoshī dōu shì nán lǎoshī ma?", vi: "Các giáo viên của chúng ta đều là giáo viên nam sao?" },
        { kind: "pick", options: [
          { zh: "不是，有女老师也。", py: "Bú shì, yǒu nǚ lǎoshī yě.", vi: "Không phải, có cô giáo cũng.", correct: false,
            analysis: { structure: "Sai vị trí 也", explain: "Phó từ 也 (cũng) phải đứng trước vị ngữ/động từ: 也有, không đứng ở cuối câu." },
            vocab: [{ word: "女", py: "nǚ", vi: "nữ" }] },
          { zh: "不是，也有女老师。", py: "Bú shì, yě yǒu nǚ lǎoshī.", vi: "Không phải, cũng có giáo viên nữ.", correct: true,
            analysis: { structure: "也 + 有 + 女老师", explain: "女 đứng trước danh từ chỉ người: 女老师 (cô giáo / giáo viên nữ). 也 đứng trước động từ 有." },
            vocab: [{ word: "男", py: "nán", vi: "nam" }, { word: "女", py: "nǚ", vi: "nữ" }, { word: "老师", py: "lǎoshī", vi: "thầy cô giáo" }] },
          { zh: "不是，也是女老师有。", py: "Bú shì, yě shì nǚ lǎoshī yǒu.", vi: "Không phải, cũng là cô giáo có.", correct: false,
            analysis: { structure: "Sai cấu trúc tồn hiện", explain: "Nói 'cũng có...' dùng 也有 + danh từ, không ghép lẫn lộn 也是...有." },
            vocab: [{ word: "老师", py: "lǎoshī", vi: "giáo viên" }] },
        ] },
      ],
      choices: [
        {
          label: "Tiếp tục đi đến sân trường",
          zh: "继续去操场。", py: "Jìxù qù cāochǎng.", vi: "Tiếp tục đi đến sân trường.",
          next: "06",
          analysis: { structure: "继续 + 去 + Nơi chốn", explain: "继续 = tiếp tục, đứng trước động từ 去. 操场 = sân thể dục / sân trường." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "操场", py: "cāochǎng", vi: "sân trường" }],
        },
        {
          label: "Đến cửa hàng trong trường mua đồ",
          zh: "去学校商店买东西。", py: "Qù xuéxiào shāngdiàn mǎi dōngxi.", vi: "Đến cửa hàng trong trường mua đồ.",
          next: "07",
          analysis: { structure: "去 + Nơi chốn + 买东西", explain: "Câu liên động: 去学校商店 (đến cửa hàng trường) rồi làm hành động 买东西 (mua đồ)." },
          vocab: [{ word: "商店", py: "shāngdiàn", vi: "cửa hàng" }, { word: "买", py: "mǎi", vi: "mua" }, { word: "东西", py: "dōngxi", vi: "đồ đạc" }],
        },
      ],
    },

    // NODE 06 — BUỔI BIỂU DIỄN
    "06": {
      id: "06",
      lines: [
        { kind: "quote", zh: "操场上有很多学生。今天学校有一个唱歌比赛。", py: "Cāochǎng shàng yǒu hěn duō xuésheng. Jīntiān xuéxiào yǒu yí ge chànggē bǐsài.", vi: "Trên sân trường có rất nhiều học sinh. Hôm nay trường có một cuộc thi hát." },
        { kind: "pick", options: [
          { zh: "你唱歌喜欢吗？", py: "Nǐ chànggē xǐhuan ma?", vi: "Bạn ca hát thích không?", correct: false,
            analysis: { structure: "Sai trật tự động từ và tân ngữ", explain: "Động từ tâm lý 喜欢 đứng trước hành động: 喜欢唱歌 (thích hát)." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }] },
          { zh: "你喜欢唱歌吗？", py: "Nǐ xǐhuan chànggē ma?", vi: "Bạn có thích hát không?", correct: true,
            analysis: { structure: "喜欢 + 唱歌 + 吗？", explain: "唱歌 là động từ ly hợp (hát bài hát), làm tân ngữ cho động từ 喜欢." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "喜欢", py: "xǐhuan", vi: "thích" }] },
          { zh: "你喜欢唱歌不吗？", py: "Nǐ xǐhuan chànggē bù ma?", vi: "Bạn thích hát không à?", correct: false,
            analysis: { structure: "Lẫn lộn câu hỏi chính phản và 吗", explain: "Dùng 吗 thì không thêm 不: 你喜欢唱歌吗？ Hoặc hỏi chính phản: 你喜不喜欢唱歌？" },
            vocab: [{ word: "喜欢", py: "xǐhuan", vi: "thích" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "喜欢，但是我唱得不太好。", py: "Xǐhuan, dànshì wǒ chàng de bú tài hǎo.", vi: "Có thích, nhưng mình hát không được hay lắm." },
        { kind: "quote", zh: "这时候，一个孩子走过来。", py: "Zhè shíhou, yí ge háizi zǒu guòlái.", vi: "Lúc này, một đứa trẻ đi đến." },
        { kind: "npc", speaker: "孩子", zh: "哥哥，你也来参加比赛吧！", py: "Gēge, nǐ yě lái cānjiā bǐsài ba!", vi: "Anh trai, anh cũng tham gia cuộc thi đi!" },
        { kind: "quote", zh: "原来，这个孩子是李明的弟弟。李明有点儿不好意思。", py: "Yuánlái, zhège háizi shì Lǐ Míng de dìdi. Lǐ Míng yǒudiǎnr bù hǎoyìsi.", vi: "Hóa ra, đứa trẻ này là em trai của Lý Minh. Lý Minh có chút ngại ngùng." },
      ],
      choices: [
        {
          label: "Động viên Lý Minh tham gia cuộc thi",
          zh: "鼓励李明参加比赛。", py: "Gǔlì Lǐ Míng cānjiā bǐsài.", vi: "Động viên Lý Minh tham gia cuộc thi.",
          next: "08",
          analysis: { structure: "鼓励 + Người + Động từ", explain: "鼓励 = động viên, cổ vũ. 参加比赛 = tham gia cuộc thi." },
          vocab: [{ word: "孩子", py: "háizi", vi: "đứa trẻ" }, { word: "参加", py: "cānjiā", vi: "tham gia" }, { word: "比赛", py: "bǐsài", vi: "cuộc thi" }],
        },
        {
          label: "Cùng Lý Minh đến cửa hàng",
          zh: "和李明一起去商店。", py: "Hé Lǐ Míng yìqǐ qù shāngdiàn.", vi: "Cùng Lý Minh đến cửa hàng.",
          next: "07",
          analysis: { structure: "和 + Người + 一起 + 去 + Nơi chốn", explain: "和李明一起 = cùng với Lý Minh. 去商店 = đi đến cửa hàng." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "商店", py: "shāngdiàn", vi: "cửa hàng" }],
        },
      ],
    },

    // NODE 07 — CHIẾC ĐIỆN THOẠI GIÁ RẺ
    "07": {
      id: "07",
      lines: [
        { kind: "quote", zh: "学校商店里有很多东西。小雨看见一个手机。", py: "Xuéxiào shāngdiàn lǐ yǒu hěn duō dōngxi. Xiǎo Yǔ kànjiàn yí ge shǒujī.", vi: "Trong cửa hàng trường học có rất nhiều đồ. Tiểu Vũ nhìn thấy một chiếc điện thoại." },
        { kind: "pick", options: [
          { zh: "这个手机多少钱吗？", py: "Zhège shǒujī duōshao qián ma?", vi: "Chiếc điện thoại này bao nhiêu tiền à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "多少钱 là cụm từ để hỏi giá tiền rồi, không thêm 吗 ở cuối câu." },
            vocab: [{ word: "手机", py: "shǒujī", vi: "điện thoại" }] },
          { zh: "这个手机多少钱？", py: "Zhège shǒujī duōshao qián?", vi: "Chiếc điện thoại này bao nhiêu tiền?", correct: true,
            analysis: { structure: "Chủ ngữ + 多少钱？", explain: "多少钱 là câu hỏi giá tiền kinh điển trong tiếng Trung. 手机 = điện thoại di động." },
            vocab: [{ word: "手机", py: "shǒujī", vi: "điện thoại di động" }, { word: "多少", py: "duōshao", vi: "bao nhiêu" }, { word: "钱", py: "qián", vi: "tiền" }] },
          { zh: "这个手机钱多少？", py: "Zhège shǒujī qián duōshao?", vi: "Chiếc điện thoại này tiền bao nhiêu?", correct: false,
            analysis: { structure: "Sai trật tự 多少钱", explain: "Cụm hỏi giá là 多少钱 (bao nhiêu tiền), không đảo thành 钱多少." },
            vocab: [{ word: "钱", py: "qián", vi: "tiền" }] },
        ] },
        { kind: "npc", speaker: "服务员", zh: "三百块。", py: "Sān bǎi kuài.", vi: "300 tệ." },
        { kind: "pick", options: [
          { zh: "这个手机那个便宜比吗？", py: "Zhège shǒujī nàge piányi bǐ ma?", vi: "Chiếc điện thoại này cái kia rẻ hơn à?", correct: false,
            analysis: { structure: "Sai vị trí giới từ 比", explain: "Giới từ 比 phải đứng trước đối tượng so sánh: 比那个 + Tính từ (比那个便宜)." },
            vocab: [{ word: "便宜", py: "piányi", vi: "rẻ" }] },
          { zh: "这个手机比那个便宜吗？", py: "Zhège shǒujī bǐ nàge piányi ma?", vi: "Chiếc điện thoại này có rẻ hơn chiếc kia không?", correct: true,
            analysis: { structure: "A + 比 + B + Tính từ + 吗？", explain: "Cấu trúc so sánh hơn: A 比 B + Tính từ (便宜 = rẻ). Thêm 吗 thành câu hỏi so sánh." },
            vocab: [{ word: "比", py: "bǐ", vi: "hơn (so sánh)" }, { word: "便宜", py: "piányi", vi: "rẻ" }, { word: "手机", py: "shǒujī", vi: "điện thoại" }] },
          { zh: "这个手机比便宜那个吗？", py: "Zhège shǒujī bǐ piányi nàge ma?", vi: "Chiếc điện thoại này hơn rẻ cái kia à?", correct: false,
            analysis: { structure: "Sai vị trí đối tượng so sánh", explain: "Đối tượng so sánh 那个 phải đứng ngay sau 比: 比那个, rồi mới đến tính từ 便宜." },
            vocab: [{ word: "比", py: "bǐ", vi: "hơn" }] },
        ] },
        { kind: "npc", speaker: "服务员", zh: "对，这个比较便宜。", py: "Duì, zhège bǐjiào piányi.", vi: "Đúng vậy, chiếc này rẻ hơn." },
        { kind: "quote", zh: "小雨想了想，决定先不买。她和李明来到操场。操场上正在举行唱歌比赛，李明的弟弟也在旁边看着他。", py: "Xiǎo Yǔ xiǎng le xiǎng, juédìng xiān bú mǎi. Tā hé Lǐ Míng lái dào cāochǎng. Cāochǎng shàng zhèngzài jǔxíng chànggē bǐsài, Lǐ Míng de dìdi yě zài pángbiān kànzhe tā.", vi: "Tiểu Vũ suy nghĩ một lát rồi quyết định tạm thời không mua. Cô và Lý Minh đi ra sân trường. Trên sân trường đang diễn ra cuộc thi hát, em trai của Lý Minh cũng đang đứng bên cạnh nhìn cậu." },
      ],
      choices: [
        {
          label: "Khuyên Lý Minh thi hát",
          zh: "鼓励李明参加比赛。", py: "Gǔlì Lǐ Míng cānjiā bǐsài.", vi: "Động viên Lý Minh tham gia cuộc thi hát.",
          next: "08",
          analysis: { structure: "鼓励 + Người + 参加比赛", explain: "鼓励 = động viên. Khuyên bạn thử sức tại sân khấu cuộc thi hát." },
          vocab: [{ word: "参加", py: "cānjiā", vi: "tham gia" }, { word: "比赛", py: "bǐsài", vi: "cuộc thi" }],
        },
        {
          label: "Cùng xem rồi về",
          zh: "一起看完比赛，再和李明一起回家。", py: "Yìqǐ kàn wán bǐsài, zài hé Lǐ Míng yìqǐ huí jiā.", vi: "Cùng xem xong cuộc thi rồi cùng Lý Minh về nhà.",
          next: "END_3",
          analysis: { structure: "看完 + Tân ngữ; 再 + Động từ", explain: "看完 = xem xong (完 là bổ ngữ kết quả). 再 = sau đó mới." },
          vocab: [{ word: "完", py: "wán", vi: "xong" }, { word: "回", py: "huí", vi: "về" }, { word: "家", py: "jiā", vi: "nhà" }],
        },
        {
          label: "Quay lại mua điện thoại",
          zh: "想了想，还是回商店买那个便宜的手机。", py: "Xiǎng le xiǎng, háishi huí shāngdiàn mǎi nàge piányi de shǒujī.", vi: "Nghĩ một lát, vẫn nên quay lại cửa hàng mua chiếc điện thoại giá rẻ đó.",
          next: "END_4",
          analysis: { structure: "还是 + Động từ; 便宜的 + Danh từ", explain: "还是 ở đây biểu thị sự lựa chọn sau khi cân nhắc (vẫn nên làm gì). 便宜的手机 = điện thoại giá rẻ." },
          vocab: [{ word: "便宜", py: "piányi", vi: "rẻ" }, { word: "手机", py: "shǒujī", vi: "điện thoại" }, { word: "买", py: "mǎi", vi: "mua" }],
        },
      ],
    },

    // NODE 08 — LỜI MỜI THAM GIA
    "08": {
      id: "08",
      lines: [
        { kind: "pick", options: [
          { zh: "你唱歌一定好听很！", py: "Nǐ chànggē yídìng hǎotīng hěn!", vi: "Bạn hát bài nhất định hay rất!", correct: false,
            analysis: { structure: "Sai vị trí 很", explain: "Phó từ mức độ 很 phải đứng trước tính từ: 很好听, không để ở cuối." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }] },
          { zh: "你唱歌一定很好听！", py: "Nǐ chànggē yídìng hěn hǎotīng!", vi: "Chắc chắn bạn hát rất hay!", correct: true,
            analysis: { structure: "一定 + 很 + Tính từ", explain: "一定 = nhất định, chắc chắn (thể hiện sự tin tưởng, động viên). 很好听 = rất hay (tai nghe)." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "一定", py: "yídìng", vi: "nhất định" }] },
          { zh: "你一定唱歌好听很吗？", py: "Nǐ yídìng chànggē hǎotīng hěn ma?", vi: "Bạn nhất định hát hay rất à?", correct: false,
            analysis: { structure: "Sai trật tự và thừa 吗", explain: "Đây là lời khẳng định động viên, không dùng 吗; phó từ 很 đứng trước 好听." },
            vocab: [{ word: "一定", py: "yídìng", vi: "nhất định" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "我可能会忘记歌词。", py: "Wǒ kěnéng huì wàngjì gēcí.", vi: "Có lẽ mình sẽ quên lời bài hát." },
        { kind: "pick", options: [
          { zh: "别担心，我们可以练习一起。", py: "Bié dānxīn, wǒmen kěyǐ liànxí yìqǐ.", vi: "Đừng lo, chúng ta có thể luyện tập cùng nhau.", correct: false,
            analysis: { structure: "Sai vị trí 一起", explain: "Phó từ 一起 (cùng nhau) đứng trước động từ: 一起练习, không đặt sau động từ như tiếng Việt." },
            vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
          { zh: "不担心，我们可以一起练习。", py: "Bù dānxīn, wǒmen kěyǐ yìqǐ liànxí.", vi: "Không lo, chúng ta có thể cùng luyện tập.", correct: false,
            analysis: { structure: "Khuyên nhủ dùng 别", explain: "Khuyên bảo đừng làm gì dùng 别 (hoặc 不要): 别担心, không dùng 不担心." },
            vocab: [{ word: "不", py: "bù", vi: "không" }] },
          { zh: "别担心，我们可以一起练习。", py: "Bié dānxīn, wǒmen kěyǐ yìqǐ liànxí.", vi: "Đừng lo, chúng ta có thể cùng luyện tập.", correct: true,
            analysis: { structure: "别 + Động từ; 一起 + Động từ", explain: "别担心 = đừng lo lắng. 可以 = có thể. 一起练习 = cùng nhau luyện tập." },
            vocab: [{ word: "可能", py: "kěnéng", vi: "có thể, có lẽ" }, { word: "别", py: "bié", vi: "đừng" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
        ] },
        { kind: "quote", zh: "李明看了看弟弟，又看了看小雨。他终于笑了：", py: "Lǐ Míng kàn le kàn dìdi, yòu kàn le kàn Xiǎo Yǔ. Tā zhōngyú xiào le:", vi: "Lý Minh nhìn em trai rồi lại nhìn Tiểu Vũ. Cuối cùng, cậu ấy mỉm cười:" },
        { kind: "npc", speaker: "李明", zh: "好，我参加！", py: "Hǎo, wǒ cānjiā!", vi: "Được, mình tham gia!" },
      ],
      choices: [
        {
          label: "Cùng Lý Minh luyện hát",
          zh: "和李明一起练习唱歌。", py: "Hé Lǐ Míng yìqǐ liànxí chànggē.", vi: "Cùng Lý Minh luyện hát.",
          next: "09",
          analysis: { structure: "和 + Người + 一起 + Động từ", explain: "和李明一起 = cùng với Lý Minh. 练习唱歌 = luyện hát." },
          vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "练习", py: "liànxí", vi: "luyện tập" }],
        },
        {
          label: "Để Lý Minh tự chuẩn bị",
          zh: "让李明自己准备。", py: "Ràng Lǐ Míng zìjǐ zhǔnbèi.", vi: "Để Lý Minh tự chuẩn bị.",
          next: "10",
          analysis: { structure: "让 + Người + Động từ", explain: "Câu chữ 让 biểu thị cho phép, để ai làm gì: 让李明自己准备." },
          vocab: [{ word: "让", py: "ràng", vi: "để, cho phép" }, { word: "自己", py: "zìjǐ", vi: "tự mình" }, { word: "准备", py: "zhǔnbèi", vi: "chuẩn bị" }],
        },
      ],
    },

    // NODE 09 — CÙNG NHAU LUYỆN TẬP
    "09": {
      id: "09",
      lines: [
        { kind: "quote", zh: "小雨和李明找了一个安静的地方。他们一起练习唱歌。李明唱了几次，唱得越来越好。", py: "Xiǎo Yǔ hé Lǐ Míng zhǎo le yí ge ānjìng de dìfang. Tāmen yìqǐ liànxí chànggē. Lǐ Míng chàng le jǐ cì, chàng de yuèláiyuè hǎo.", vi: "Tiểu Vũ và Lý Minh tìm một nơi yên tĩnh. Họ cùng nhau luyện hát. Lý Minh hát vài lần, càng lúc càng hay." },
        { kind: "pick", options: [
          { zh: "你唱得比刚才好多了！", py: "Nǐ chàng de bǐ gāngcái hǎo duō le!", vi: "Bạn hát hay hơn lúc nãy nhiều rồi!", correct: true,
            analysis: { structure: "Động từ + 得 + 比 + B + Tính từ + 多了", explain: "Bổ ngữ trình độ kết hợp so sánh hơn: 唱得比刚才好多了 (hát tốt hơn lúc nãy rất nhiều)." },
            vocab: [{ word: "比", py: "bǐ", vi: "hơn" }, { word: "刚才", py: "gāngcái", vi: "vừa nãy" }, { word: "好", py: "hǎo", vi: "tốt, hay" }] },
          { zh: "你比刚才唱得好多了吗？", py: "Nǐ bǐ gāngcái chàng de hǎo duō le ma?", vi: "Bạn so với lúc nãy hát hay hơn nhiều à?", correct: false,
            analysis: { structure: "Thừa 吗 trong câu khen", explain: "Đây là câu khen ngợi cảm thán, dùng 多了! chứ không đặt câu hỏi với 吗." },
            vocab: [{ word: "比", py: "bǐ", vi: "hơn" }] },
          { zh: "你唱得好比刚才多了！", py: "Nǐ chàng de hǎo bǐ gāngcái duō le!", vi: "Bạn hát hay hơn lúc nãy nhiều!", correct: false,
            analysis: { structure: "Sai vị trí cụm so sánh 比", explain: "Cụm 比刚才 phải đứng trước tính từ: 比刚才好多了, không chen vào giữa 好 và 多." },
            vocab: [{ word: "刚才", py: "gāngcái", vi: "vừa nãy" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "谢谢你帮助我！", py: "Xièxie nǐ bāngzhù wǒ!", vi: "Cảm ơn bạn đã giúp mình!" },
      ],
      next: "END_1",
    },

    // NODE 10 — MỘT QUYẾT ĐỊNH KHÁC
    "10": {
      id: "10",
      lines: [
        { kind: "pick", options: [
          { zh: "你自己准备也可以，我在这里等你。", py: "Nǐ zìjǐ zhǔnbèi yě kěyǐ, wǒ zài zhèlǐ děng nǐ.", vi: "Bạn tự chuẩn bị cũng được, mình sẽ đợi bạn ở đây.", correct: true,
            analysis: { structure: "在 + Nơi chốn + 等 + Người", explain: "自己准备 = tự chuẩn bị. 在这里等你 = đợi bạn ở đây (nơi chốn 在这里 đứng trước động từ 等)." },
            vocab: [{ word: "自己", py: "zìjǐ", vi: "tự mình" }, { word: "准备", py: "zhǔnbèi", vi: "chuẩn bị" }, { word: "等", py: "děng", vi: "đợi" }] },
          { zh: "你自己准备可以也，我在等你这里。", py: "Nǐ zìjǐ zhǔnbèi kěyǐ yě, wǒ zài děng nǐ zhèlǐ.", vi: "Bạn tự chuẩn bị được cũng, mình ở đợi bạn đây.", correct: false,
            analysis: { structure: "Sai vị trí 也 và nơi chốn", explain: "Phó từ 也 đứng trước 可以: 也可以. Cụm nơi chốn 在这里 phải đứng trước động từ: 在这里等你." },
            vocab: [{ word: "准备", py: "zhǔnbèi", vi: "chuẩn bị" }] },
          { zh: "你准备自己也可以，我这里在等你。", py: "Nǐ zhǔnbèi zìjǐ yě kěyǐ, wǒ zhèlǐ zài děng nǐ.", vi: "Bạn chuẩn bị tự mình cũng được, mình đây ở đợi bạn.", correct: false,
            analysis: { structure: "Sai vị trí 自己", explain: "Đại từ 自己 đứng trước động từ nó bổ nghĩa: 自己准备 (tự chuẩn bị)." },
            vocab: [{ word: "自己", py: "zìjǐ", vi: "tự mình" }] },
        ] },
        { kind: "quote", zh: "李明点点头，自己练习。过了一会儿，比赛开始了。李明走上台，但是他有点儿紧张。他看见台下的小雨和弟弟。他们一起给他加油。李明深吸一口气，开始唱歌。", py: "Lǐ Míng diǎndiǎn tóu, zìjǐ liànxí. Guò le yíhuìr, bǐsài kāishǐ le. Lǐ Míng zǒu shàng tái, dànshì tā yǒudiǎnr jǐnzhāng. Tā kànjiàn táixià de Xiǎo Yǔ hé dìdi. Tāmen yìqǐ gěi tā jiāyóu. Lǐ Míng shēn xī yì kǒu qì, kāishǐ chànggē.", vi: "Lý Minh gật đầu rồi tự luyện tập. Một lát sau, cuộc thi bắt đầu. Lý Minh bước lên sân khấu nhưng cậu ấy hơi căng thẳng. Cậu ấy nhìn thấy Tiểu Vũ và em trai ở phía dưới sân khấu. Họ cùng cổ vũ cho cậu ấy. Lý Minh hít một hơi thật sâu rồi bắt đầu hát." },
      ],
      next: "END_2",
    },

    // ENDING 1 — CÙNG NHAU CỐ GẮNG
    "END_1": {
      id: "END_1",
      lines: [
        { kind: "quote", zh: "比赛开始了，李明走上台。他唱了一首很好听的歌。大家都为他鼓掌。最后，李明得了第二名。", py: "Bǐsài kāishǐ le, Lǐ Míng zǒu shàng tái. Tā chàng le yì shǒu hěn hǎotīng de gē. Dàjiā dōu wèi tā gǔzhǎng. Zuìhòu, Lǐ Míng dé le dì èr míng.", vi: "Cuộc thi bắt đầu, Lý Minh bước lên sân khấu. Cậu ấy hát một bài hát rất hay. Mọi người đều vỗ tay cho cậu ấy. Cuối cùng, Lý Minh đạt giải nhì." },
        { kind: "npc", speaker: "李明", zh: "谢谢你，小雨！", py: "Xièxie nǐ, Xiǎo Yǔ!", vi: "Cảm ơn bạn, Tiểu Vũ!" },
        { kind: "pick", options: [
          { zh: "这是你自己努力结果的！", py: "Zhè shì nǐ zìjǐ nǔlì jiéguǒ de!", vi: "Đây là chính bạn cố gắng kết quả của!", correct: false,
            analysis: { structure: "Sai vị trí 的", explain: "Trợ từ 的 nối định ngữ với trung tâm ngữ: 努力的结果 (kết quả của sự cố gắng)." },
            vocab: [{ word: "努力", py: "nǔlì", vi: "cố gắng" }] },
          { zh: "这是你自己努力的结果！", py: "Zhè shì nǐ zìjǐ nǔlì de jiéguǒ!", vi: "Đây là kết quả của sự cố gắng của chính bạn!", correct: true,
            analysis: { structure: "是…的结果", explain: "你自己努力的结果 = kết quả nỗ lực của chính bạn. Câu khen ngợi chân thành và chính xác." },
            vocab: [{ word: "自己", py: "zìjǐ", vi: "tự mình" }, { word: "努力", py: "nǔlì", vi: "cố gắng, nỗ lực" }] },
          { zh: "这是你自己努力的结果吗！", py: "Zhè shì nǐ zìjǐ nǔlì de jiéguǒ ma!", vi: "Đây là kết quả cố gắng của chính bạn à!", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Đây là câu cảm thán khẳng định thành quả, không dùng trợ từ nghi vấn 吗." },
            vocab: [{ word: "努力", py: "nǔlì", vi: "cố gắng" }] },
        ] },
        { kind: "quote", zh: "从那天开始，他们成了好朋友。", py: "Cóng nà tiān kāishǐ, tāmen chéng le hǎo péngyou.", vi: "Từ ngày hôm đó, họ trở thành bạn tốt." },
      ],
      ending: { title: "一起努力 🤝", titleVi: "Cùng nhau cố gắng" },
    },

    // ENDING 2 — DŨNG CẢM CẤT TIẾNG HÁT
    "END_2": {
      id: "END_2",
      lines: [
        { kind: "quote", zh: "李明开始唱歌。刚开始，他有点儿紧张，但是后来越来越放松。虽然他没有得到第一名，但是大家都很喜欢他的歌。", py: "Lǐ Míng kāishǐ chànggē. Gāng kāishǐ, tā yǒudiǎnr jǐnzhāng, dànshì hòulái yuèláiyuè fàngsōng. Suīrán tā méiyǒu dédào dì yī míng, dànshì dàjiā dōu hěn xǐhuan tā de gē.", vi: "Lý Minh bắt đầu hát. Ban đầu, cậu ấy hơi căng thẳng, nhưng sau đó ngày càng thoải mái hơn. Mặc dù không đạt giải nhất, nhưng mọi người đều rất thích bài hát của cậu ấy." },
        { kind: "npc", speaker: "李明", zh: "今天我很开心！", py: "Jīntiān wǒ hěn kāixīn!", vi: "Hôm nay mình rất vui!" },
        { kind: "pick", options: [
          { zh: "下次我们一起再唱歌吧！", py: "Xià cì wǒmen yìqǐ zài chànggē ba!", vi: "Lần sau chúng mình cùng lại hát nhé!", correct: false,
            analysis: { structure: "Sai vị trí 再", explain: "Phó từ 再 (lại) đứng trước cụm 一起: 再一起唱歌, biểu thị sự lặp lại của hành động." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }] },
          { zh: "下次我们再唱歌一起吧！", py: "Xià cì wǒmen zài chànggē yìqǐ ba!", vi: "Lần sau chúng mình lại hát cùng nhau nhé!", correct: false,
            analysis: { structure: "Sai vị trí 一起", explain: "Phó từ 一起 phải đứng trước động từ: 一起唱歌, không đặt ở cuối câu." },
            vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
          { zh: "下次我们再一起唱歌吧！", py: "Xià cì wǒmen zài yìqǐ chànggē ba!", vi: "Lần sau chúng ta lại cùng hát nhé!", correct: true,
            analysis: { structure: "下次 + 再 + 一起 + 唱歌 + 吧", explain: "下次 = lần sau. 再 = lại (trong tương lai). 吧 = nhé (lời rủ thân mật)." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "再", py: "zài", vi: "lại (tương lai)" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
        ] },
      ],
      ending: { title: "勇敢地唱歌 🎤", titleVi: "Dũng cảm cất tiếng hát" },
    },

    // ENDING 3 — NGƯỜI BẠN MỚI
    "END_3": {
      id: "END_3",
      lines: [
        { kind: "quote", zh: "比赛结束以后，小雨和李明一起回家。", py: "Bǐsài jiéshù yǐhòu, Xiǎo Yǔ hé Lǐ Míng yìqǐ huí jiā.", vi: "Sau khi cuộc thi kết thúc, Tiểu Vũ và Lý Minh cùng về nhà." },
        { kind: "npc", speaker: "李明", zh: "今天认识你，我很高兴。", py: "Jīntiān rènshi nǐ, wǒ hěn gāoxìng.", vi: "Hôm nay được làm quen với bạn, mình rất vui." },
        { kind: "pick", options: [
          { zh: "我也是！明天学校见！", py: "Wǒ yě shì! Míngtiān xuéxiào jiàn!", vi: "Mình cũng vậy! Hẹn gặp bạn ngày mai ở trường!", correct: true,
            analysis: { structure: "我也是！ Thời gian + Nơi chốn + 见！", explain: "我也是 = mình cũng thế. 明天学校见 = mai gặp ở trường nhé (thời gian + địa điểm + 见)." },
            vocab: [{ word: "明天", py: "míngtiān", vi: "ngày mai" }, { word: "学校", py: "xuéxiào", vi: "trường học" }] },
          { zh: "我是也！学校明天见！", py: "Wǒ shì yě! Xuéxiào míngtiān jiàn!", vi: "Mình là cũng! Trường học mai gặp!", correct: false,
            analysis: { structure: "Sai trật tự 也 và thời gian", explain: "Cụm đúng là 我也是 (phó từ 也 đứng trước động từ 是). Thời gian 明天 đứng trước địa điểm 学校." },
            vocab: [{ word: "学校", py: "xuéxiào", vi: "trường học" }] },
          { zh: "我也是！明天见学校！", py: "Wǒ yě shì! Míngtiān jiàn xuéxiào!", vi: "Mình cũng vậy! Mai gặp trường học!", correct: false,
            analysis: { structure: "Sai vị trí 见", explain: "Động từ 见 (hẹn gặp) đứng sau địa điểm: 学校见 (hẹn gặp ở trường)." },
            vocab: [{ word: "明天", py: "míngtiān", vi: "ngày mai" }] },
        ] },
        { kind: "npc", speaker: "李明", zh: "明天见！", py: "Míngtiān jiàn!", vi: "Hẹn gặp ngày mai!" },
        { kind: "quote", zh: "虽然他们今天才认识，但是已经成了朋友。", py: "Suīrán tāmen jīntiān cái rènshi, dànshì yǐjīng chéng le péngyou.", vi: "Mặc dù hôm nay họ mới quen nhau, nhưng đã trở thành bạn bè." },
      ],
      ending: { title: "新朋友 🌟", titleVi: "Người bạn mới" },
    },

    // ENDING 4 — MUA ĐƯỢC CHIẾC ĐIỆN THOẠI RẺ
    "END_4": {
      id: "END_4",
      lines: [
        { kind: "quote", zh: "小雨和李明回到商店。小雨买了那个便宜的手机。", py: "Xiǎo Yǔ hé Lǐ Míng huí dào shāngdiàn. Xiǎo Yǔ mǎi le nàge piányi de shǒujī.", vi: "Tiểu Vũ và Lý Minh quay lại cửa hàng. Tiểu Vũ mua chiếc điện thoại giá rẻ đó." },
        { kind: "npc", speaker: "李明", zh: "这个手机不错！", py: "Zhège shǒujī búcuò!", vi: "Chiếc điện thoại này khá tốt!" },
        { kind: "pick", options: [
          { zh: "是啊，不而且贵！", py: "Shì a, bù érqiě guì!", vi: "Đúng vậy, không hơn nữa đắt!", correct: false,
            analysis: { structure: "Sai vị trí 而且", explain: "Liên từ 而且 (hơn nữa) đứng đầu phân câu thứ hai: 而且不贵." },
            vocab: [{ word: "贵", py: "guì", vi: "đắt" }] },
          { zh: "是啊，而且贵不！", py: "Shì a, érqiě guì bù!", vi: "Đúng vậy, hơn nữa đắt không!", correct: false,
            analysis: { structure: "Sai trật tự phủ định 不", explain: "Phủ định tính từ: 不贵 (không đắt), phó từ 不 đứng trước tính từ 贵." },
            vocab: [{ word: "贵", py: "guì", vi: "đắt" }] },
          { zh: "是啊，而且不贵！", py: "Shì a, érqiě bú guì!", vi: "Đúng vậy, hơn nữa còn không đắt!", correct: true,
            analysis: { structure: "而且 + 不贵", explain: "而且 biểu thị quan hệ tăng tiến (hơn nữa). 不贵 = không đắt (rẻ hợp lý)." },
            vocab: [{ word: "便宜", py: "piányi", vi: "rẻ" }, { word: "贵", py: "guì", vi: "đắt" }] },
        ] },
        { kind: "quote", zh: "他们一起回到操场，继续看比赛。", py: "Tāmen yìqǐ huí dào cāochǎng, jìxù kàn bǐsài.", vi: "Họ cùng quay lại sân trường và tiếp tục xem cuộc thi." },
      ],
      ending: { title: "买到了便宜的手机 📱", titleVi: "Mua được chiếc điện thoại rẻ" },
    },
  },
};
