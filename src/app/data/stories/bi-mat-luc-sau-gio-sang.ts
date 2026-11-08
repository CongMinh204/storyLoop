import type { BranchingStory, StoryLine } from "../../types";

// Truyện "Bí Mật Lúc Sáu Giờ Sáng" (HSK 2, Bài 2 phần 1), truyện rẽ nhánh với 15 kết thúc. Người chơi vào vai "你", một sinh viên đang rất bận.
// Bản gốc của người viết: src/imports/stories/bi-mat-luc-sau-gio-sang.md (tên gốc: 早上六点的秘密)
// Mỗi câu thoại của "你" là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Doc ghi lựa chọn bằng tiếng Việt, câu "你" nói ngay sau đó là câu của lựa chọn (zh); nhãn lựa chọn được rút gọn.
// Tin nhắn và lời nói của 小雨, 哥哥 dùng npc; lời dẫn tiếng Việt dùng narration; lời dẫn có chữ Hán và đoạn kết chung dùng quote.
// Chỉnh nhỏ so với bản gốc để mạch truyện khớp với mọi đường đi:
// - Tên kết thúc bằng chữ Hán là bản dịch từ tên tiếng Việt của tác giả (Doc chỉ có tên tiếng Việt)
// - 02A, 03D: thêm câu "cạnh giường có một đôi giày chạy bộ" (sau đó "你" hỏi anh trai có chạy bộ mỗi sáng không, nhưng chưa ai nhắc tới chạy bộ)
// - Lựa chọn 3A, đáp án B: nhãn "ăn uống đầy đủ và tiếp tục chạy bộ khi khỏe lại" → "Khỏe rồi hãy chạy lại" (câu thoại không nói gì tới ăn uống)
// - 02C: "Sáng hôm sau" → "cả ngày hôm sau cũng bận rộn. Sáng ngày tiếp theo" (để câu 昨天我没有时间去医院 và 昨天我很担心 đúng thời gian);
//   câu 真的吗？太好了！ chuyển lên ngay sau tin "anh ấy sắp xuất viện", trước tin về bí mật (không đáp "tốt quá" khi nghe anh ấy ngủ quá ít)
// - END_B: nghĩa câu 我也希望他以后能多休息 "Em cũng hy vọng…" → "Tớ cũng hy vọng…" (小雨 đang nói với bạn, không phải với anh trai)
// - Đoạn "KẾT THÚC CÂU CHUYỆN" của Doc hiện ở cuối mọi kết thúc (EPILOGUE)

// Đoạn kết chung của Doc, hiện sau mọi kết thúc
const EPILOGUE: StoryLine[] = [
  { kind: "narration", text: "Dù bạn lựa chọn con đường nào, câu chuyện lúc 6 giờ sáng cũng nhắc nhở chúng ta rằng sức khỏe rất quan trọng." },
  { kind: "narration", text: "Có những người luôn bận rộn với công việc, học tập và những kế hoạch của riêng mình. Nhưng chúng ta không nên quên dành thời gian để nghỉ ngơi và quan tâm đến những người xung quanh." },
  { kind: "quote", zh: "每个人都应该照顾好自己的身体。", py: "Měi ge rén dōu yīnggāi zhàogù hǎo zìjǐ de shēntǐ.", vi: "Mỗi người đều nên chăm sóc tốt cho sức khỏe của mình." },
  { kind: "quote", zh: "每天早上起床以后，可以去跑步，但是也要记得休息。", py: "Měitiān zǎoshang qǐchuáng yǐhòu, kěyǐ qù pǎobù, dànshì yě yào jìde xiūxi.", vi: "Sau khi thức dậy mỗi buổi sáng, chúng ta có thể đi chạy bộ, nhưng cũng cần nhớ nghỉ ngơi." },
  { kind: "quote", zh: "身体健康比什么都重要。", py: "Shēntǐ jiànkāng bǐ shénme dōu zhòngyào.", vi: "Sức khỏe quan trọng hơn tất cả mọi thứ." },
];

export const BI_MAT_LUC_SAU_GIO_SANG: BranchingStory = {
  start: "01",
  characters: {
    "小雨": "👧",
    "哥哥": "🧑",
  },
  vocab: [
    { word: "生病", py: "shēngbìng", vi: "bị bệnh, bị ốm",
      ex: { zh: "我哥哥生病了，现在不太舒服。", py: "Wǒ gēge shēngbìng le, xiànzài bú tài shūfu.", vi: "Anh trai tớ bị bệnh rồi, bây giờ anh ấy không được khỏe lắm." } },
    { word: "每", py: "měi", vi: "mỗi",
      ex: { zh: "每个人都应该照顾好自己的身体。", py: "Měi ge rén dōu yīnggāi zhàogù hǎo zìjǐ de shēntǐ.", vi: "Mỗi người đều nên chăm sóc tốt cho sức khỏe của mình." } },
    { word: "早上", py: "zǎoshang", vi: "buổi sáng",
      ex: { zh: "明天早上六点，你有时间吗？", py: "Míngtiān zǎoshang liù diǎn, nǐ yǒu shíjiān ma?", vi: "Sáng mai lúc 6 giờ, cậu có thời gian không?" } },
    { word: "跑步", py: "pǎobù", vi: "chạy bộ",
      ex: { zh: "你每天早上都去跑步吗？", py: "Nǐ měitiān zǎoshang dōu qù pǎobù ma?", vi: "Mỗi buổi sáng anh đều đi chạy bộ à?" } },
    { word: "起床", py: "qǐchuáng", vi: "thức dậy",
      ex: { zh: "我每天早上六点起床。", py: "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.", vi: "Mỗi buổi sáng anh thức dậy lúc 6 giờ." } },
    { word: "药", py: "yào", vi: "thuốc",
      ex: { zh: "你每天都需要吃药吗？", py: "Nǐ měitiān dōu xūyào chī yào ma?", vi: "Mỗi ngày anh đều cần uống thuốc à?" } },
    { word: "身体", py: "shēntǐ", vi: "sức khỏe, cơ thể",
      ex: { zh: "身体健康比什么都重要。", py: "Shēntǐ jiànkāng bǐ shénme dōu zhòngyào.", vi: "Sức khỏe quan trọng hơn tất cả mọi thứ." } },
    { word: "出院", py: "chūyuàn", vi: "xuất viện",
      ex: { zh: "医生说，如果我好好休息，明天就可以出院。", py: "Yīshēng shuō, rúguǒ wǒ hǎohǎo xiūxi, míngtiān jiù kěyǐ chūyuàn.", vi: "Bác sĩ nói nếu anh nghỉ ngơi thật tốt thì ngày mai có thể xuất viện." } },
    { word: "高", py: "gāo", vi: "cao",
      ex: { zh: "哥哥很高，可是现在看起来很累。", py: "Gēge hěn gāo, kěshì xiànzài kàn qǐlái hěn lèi.", vi: "Anh trai rất cao, nhưng bây giờ trông rất mệt." } },
    { word: "米", py: "mǐ", vi: "mét",
      ex: { zh: "我每天跑五千米。", py: "Wǒ měitiān pǎo wǔqiān mǐ.", vi: "Mỗi ngày anh chạy 5.000 mét." } },
    { word: "知道", py: "zhīdào", vi: "biết",
      ex: { zh: "对。可是这是我的秘密，家里人都不知道。", py: "Duì. Kěshì zhè shì wǒ de mìmì, jiālǐ rén dōu bù zhīdào.", vi: "Đúng vậy. Nhưng đây là bí mật của anh, người nhà đều không biết." } },
    { word: "休息", py: "xiūxi", vi: "nghỉ ngơi",
      ex: { zh: "他好多了，但是还需要休息。", py: "Tā hǎo duō le, dànshì hái xūyào xiūxi.", vi: "Anh ấy đỡ hơn nhiều rồi, nhưng vẫn cần nghỉ ngơi." } },
    { word: "忙", py: "máng", vi: "bận",
      ex: { zh: "没关系，我知道你很忙。", py: "Méi guānxi, wǒ zhīdào nǐ hěn máng.", vi: "Không sao, tớ biết cậu rất bận." } },
    { word: "时间", py: "shíjiān", vi: "thời gian",
      ex: { zh: "那你每天有多少时间休息？", py: "Nà nǐ měitiān yǒu duōshǎo shíjiān xiūxi?", vi: "Vậy mỗi ngày anh có bao nhiêu thời gian nghỉ ngơi?" } },
  ],
  nodes: {
    // NODE 01 — MỞ ĐẦU: TIN NHẮN LÚC 23:47
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "Đã gần 12 giờ đêm. Bạn vẫn đang ngồi trước bàn học. Ngày mai bạn có rất nhiều việc phải làm nên chưa thể đi ngủ." },
        { kind: "narration", text: "Đột nhiên, điện thoại sáng lên. Tiểu Vũ gửi cho bạn một tin nhắn." },
        { kind: "npc", speaker: "小雨", zh: "明天早上六点，你有时间吗？", py: "Míngtiān zǎoshang liù diǎn, nǐ yǒu shíjiān ma?", vi: "Sáng mai lúc 6 giờ, cậu có thời gian không?" },
        { kind: "pick", options: [
          { zh: "这么早？什么有事吗？", py: "Zhème zǎo? Shénme yǒu shì ma?", vi: "Sớm thế à? Gì có chuyện không?", correct: false,
            analysis: { structure: "Sai vị trí 什么", explain: "什么 bổ nghĩa cho danh từ 事 nên phải đứng ngay trước nó: 有什么事, không đặt trước động từ 有." },
            vocab: [{ word: "什么", py: "shénme", vi: "gì" }] },
          { zh: "这么早？有什么事吗？", py: "Zhème zǎo? Yǒu shénme shì ma?", vi: "Sớm thế à? Có chuyện gì vậy?", correct: true,
            analysis: { structure: "这么 + Tính từ; 有什么事吗？", explain: "这么早 = sớm thế này (这么 đứng trước tính từ để nhấn mạnh mức độ). 有什么事吗 = có chuyện gì không: ở đây 什么 mang nghĩa \"chuyện gì đó\", nên câu vẫn dùng 吗." },
            vocab: [{ word: "这么", py: "zhème", vi: "như thế này" }, { word: "事", py: "shì", vi: "chuyện, việc" }] },
          { zh: "早这么？有什么事吗？", py: "Zǎo zhème? Yǒu shénme shì ma?", vi: "Thế sớm à? Có chuyện gì vậy?", correct: false,
            analysis: { structure: "Sai vị trí 这么", explain: "这么 là phó từ chỉ mức độ, đứng trước tính từ: 这么早, không đặt sau 早." },
            vocab: [{ word: "这么", py: "zhème", vi: "như thế này" }] },
        ] },
        { kind: "npc", speaker: "小雨", zh: "我哥哥生病了，现在不太舒服。", py: "Wǒ gēge shēngbìng le, xiànzài bú tài shūfu.", vi: "Anh trai tớ bị bệnh rồi, bây giờ anh ấy không được khỏe lắm." },
        { kind: "pick", options: [
          { zh: "他现在怎么样吗？", py: "Tā xiànzài zěnmeyàng ma?", vi: "Bây giờ anh ấy thế nào rồi à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 怎么样 thì không thêm 吗 ở cuối." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "他怎么样现在？", py: "Tā zěnmeyàng xiànzài?", vi: "Anh ấy thế nào bây giờ?", correct: false,
            analysis: { structure: "Sai vị trí từ chỉ thời gian", explain: "Từ chỉ thời gian như 现在 đứng sau chủ ngữ, trước vị ngữ: 他现在怎么样, không đặt ở cuối câu như tiếng Việt." },
            vocab: [{ word: "现在", py: "xiànzài", vi: "bây giờ" }] },
          { zh: "他现在怎么样？", py: "Tā xiànzài zěnmeyàng?", vi: "Bây giờ anh ấy thế nào rồi?", correct: true,
            analysis: { structure: "Chủ ngữ + 现在 + 怎么样？", explain: "怎么样 = thế nào, dùng để hỏi tình trạng. Từ chỉ thời gian 现在 đứng sau chủ ngữ, trước 怎么样." },
            vocab: [{ word: "现在", py: "xiànzài", vi: "bây giờ" }, { word: "怎么样", py: "zěnmeyàng", vi: "thế nào" }] },
        ] },
        { kind: "npc", speaker: "小雨", zh: "他在医院。我想请你明天早上来陪我。", py: "Tā zài yīyuàn. Wǒ xiǎng qǐng nǐ míngtiān zǎoshang lái péi wǒ.", vi: "Anh ấy đang ở bệnh viện. Tớ muốn nhờ cậu sáng mai đến ở cùng tớ." },
        { kind: "narration", text: "Bạn nhìn đồng hồ. Đã 23:47. Bạn vừa buồn ngủ vừa lo lắng cho anh trai Tiểu Vũ." },
      ],
      choices: [
        {
          label: "Đồng ý đến lúc 6 giờ",
          zh: "好，我明天早上六点去。", py: "Hǎo, wǒ míngtiān zǎoshang liù diǎn qù.", vi: "Được, sáng mai 6 giờ tớ sẽ đến.",
          next: "02A",
          analysis: { structure: "Thời gian + 去", explain: "Các từ chỉ thời gian đứng trước động từ và xếp từ lớn đến nhỏ: 明天 → 早上 → 六点, rồi mới tới 去." },
          vocab: [{ word: "明天", py: "míngtiān", vi: "ngày mai" }, { word: "早上", py: "zǎoshang", vi: "buổi sáng" }, { word: "点", py: "diǎn", vi: "giờ" }],
        },
        {
          label: "Hỏi thêm về anh trai",
          zh: "你哥哥怎么了？他生什么病了？", py: "Nǐ gēge zěnme le? Tā shēng shénme bìng le?", vi: "Anh trai cậu bị sao vậy? Anh ấy mắc bệnh gì?",
          next: "02B",
          analysis: { structure: "怎么了？; 生 + 什么 + 病", explain: "怎么了 = bị sao vậy, có chuyện gì. 生病 = bị bệnh; chèn 什么 vào giữa thành 生什么病 để hỏi bệnh gì." },
          vocab: [{ word: "怎么了", py: "zěnme le", vi: "bị sao vậy" }, { word: "生病", py: "shēngbìng", vi: "bị bệnh" }],
        },
        {
          label: "Từ chối vì ngày mai bận",
          zh: "对不起，我明天很忙，没有时间去医院。", py: "Duìbuqǐ, wǒ míngtiān hěn máng, méiyǒu shíjiān qù yīyuàn.", vi: "Xin lỗi, ngày mai tớ rất bận, không có thời gian đến bệnh viện.",
          next: "02C",
          analysis: { structure: "没有时间 + Động từ", explain: "对不起 = xin lỗi. 没有时间去医院 = không có thời gian đi bệnh viện (没有时间 + việc cần làm)." },
          vocab: [{ word: "忙", py: "máng", vi: "bận" }, { word: "时间", py: "shíjiān", vi: "thời gian" }, { word: "医院", py: "yīyuàn", vi: "bệnh viện" }],
        },
      ],
    },
    // NODE 02A — CUỘC GẶP LÚC 6 GIỜ (nhánh A: đồng ý đến bệnh viện)
    "02A": {
      id: "02A",
      lines: [
        { kind: "npc", speaker: "小雨", zh: "谢谢你！明天见。", py: "Xièxie nǐ! Míngtiān jiàn.", vi: "Cảm ơn cậu! Hẹn gặp ngày mai." },
        { kind: "narration", text: "Sáng hôm sau, bạn thức dậy lúc 5:30 và nhanh chóng chuẩn bị. Dù vẫn còn buồn ngủ, bạn không muốn đến muộn." },
        { kind: "narration", text: "Khi đến bệnh viện, bạn nhìn thấy Tiểu Vũ đang đứng chờ ở cửa." },
        { kind: "npc", speaker: "小雨", zh: "你来了！谢谢你这么早来。", py: "Nǐ lái le! Xièxie nǐ zhème zǎo lái.", vi: "Cậu đến rồi! Cảm ơn cậu đã đến sớm như vậy." },
        { kind: "pick", options: [
          { zh: "不用谢。你哥哥现在怎么样？", py: "Bú yòng xiè. Nǐ gēge xiànzài zěnmeyàng?", vi: "Không cần cảm ơn đâu. Anh trai cậu bây giờ thế nào rồi?", correct: true,
            analysis: { structure: "不用谢; Danh từ + 现在怎么样？", explain: "不用谢 = không cần cảm ơn (đáp lại 谢谢). 你哥哥 = anh trai cậu: với người thân, có thể bỏ 的 (你哥哥 = 你的哥哥)." },
            vocab: [{ word: "不用", py: "bú yòng", vi: "không cần" }, { word: "哥哥", py: "gēge", vi: "anh trai" }] },
          { zh: "没用谢。你哥哥现在怎么样？", py: "Méi yòng xiè. Nǐ gēge xiànzài zěnmeyàng?", vi: "Vô ích cảm ơn. Anh trai cậu bây giờ thế nào rồi?", correct: false,
            analysis: { structure: "Nhầm 不用 và 没用", explain: "Đáp lại lời cảm ơn là 不用谢 (không cần cảm ơn). 没用 nghĩa là \"vô ích\", không dùng ở đây." },
            vocab: [{ word: "不用", py: "bú yòng", vi: "không cần" }] },
          { zh: "不谢用。你哥哥现在怎么样？", py: "Bú xiè yòng. Nǐ gēge xiànzài zěnmeyàng?", vi: "Không cảm ơn cần. Anh trai cậu bây giờ thế nào rồi?", correct: false,
            analysis: { structure: "Sai trật tự 不用谢", explain: "不用 (không cần) đứng trước động từ 谢: 不用谢, không tách 用 ra sau." },
            vocab: [{ word: "不用", py: "bú yòng", vi: "không cần" }] },
        ] },
        { kind: "npc", speaker: "小雨", zh: "他好多了，但是还需要休息。", py: "Tā hǎo duō le, dànshì hái xūyào xiūxi.", vi: "Anh ấy đỡ hơn nhiều rồi, nhưng vẫn cần nghỉ ngơi." },
        { kind: "narration", text: "Hai người cùng đi vào phòng. Anh trai Tiểu Vũ đang nằm trên giường." },
        { kind: "quote", zh: "哥哥很高，可是现在看起来很累。", py: "Gēge hěn gāo, kěshì xiànzài kàn qǐlái hěn lèi.", vi: "Anh trai rất cao, nhưng bây giờ trông rất mệt." },
        { kind: "npc", speaker: "哥哥", zh: "小雨，这是谁？", py: "Xiǎoyǔ, zhè shì shéi?", vi: "Tiểu Vũ, đây là ai vậy?" },
        { kind: "npc", speaker: "小雨", zh: "这是我的同学，今天早上来看你。", py: "Zhè shì wǒ de tóngxué, jīntiān zǎoshang lái kàn nǐ.", vi: "Đây là bạn học của em, sáng nay đến thăm anh." },
        { kind: "npc", speaker: "哥哥", zh: "谢谢你。", py: "Xièxie nǐ.", vi: "Cảm ơn em." },
        { kind: "narration", text: "Bạn nhìn thấy thuốc đặt trên bàn cạnh giường. Anh trai Tiểu Vũ có vẻ vẫn còn mệt." },
        { kind: "pick", options: [
          { zh: "你都每天需要吃药吗？", py: "Nǐ dōu měitiān xūyào chī yào ma?", vi: "Anh đều mỗi ngày cần uống thuốc à?", correct: false,
            analysis: { structure: "Sai vị trí 都", explain: "Trong mẫu 每天…都, 都 đứng sau 每天 và ngay trước động từ: 每天都需要." },
            vocab: [{ word: "都", py: "dōu", vi: "đều" }] },
          { zh: "你每天都吃需要药吗？", py: "Nǐ měitiān dōu chī xūyào yào ma?", vi: "Mỗi ngày anh đều uống cần thuốc à?", correct: false,
            analysis: { structure: "Sai vị trí 需要", explain: "需要 (cần) đứng trước cả cụm động từ nó đi kèm: 需要吃药, không chen vào giữa 吃 và 药." },
            vocab: [{ word: "需要", py: "xūyào", vi: "cần" }] },
          { zh: "你每天都需要吃药吗？", py: "Nǐ měitiān dōu xūyào chī yào ma?", vi: "Mỗi ngày anh đều cần uống thuốc à?", correct: true,
            analysis: { structure: "每天 + 都 + 需要 + Động từ + 吗？", explain: "每天…都 = ngày nào cũng. 需要 = cần, đứng trước động từ 吃药 (uống thuốc: tiếng Trung dùng 吃 với thuốc)." },
            vocab: [{ word: "每天", py: "měitiān", vi: "mỗi ngày" }, { word: "需要", py: "xūyào", vi: "cần" }, { word: "吃药", py: "chī yào", vi: "uống thuốc" }] },
        ] },
        { kind: "npc", speaker: "哥哥", zh: "对，医生让我每天按时吃药，也要多休息。", py: "Duì, yīshēng ràng wǒ měitiān ànshí chī yào, yě yào duō xiūxi.", vi: "Đúng vậy, bác sĩ bảo anh mỗi ngày phải uống thuốc đúng giờ và nghỉ ngơi nhiều hơn." },
        { kind: "narration", text: "Bạn để ý thấy cạnh giường có một đôi giày chạy bộ." },
        { kind: "narration", text: "Bạn muốn tìm hiểu thêm về thói quen sinh hoạt của anh ấy." },
      ],
      choices: [
        {
          label: "Hỏi về thói quen buổi sáng",
          zh: "哥哥，你每天早上几点起床？", py: "Gēge, nǐ měitiān zǎoshang jǐ diǎn qǐchuáng?", vi: "Anh ơi, mỗi buổi sáng anh thức dậy lúc mấy giờ?",
          next: "03A",
          analysis: { structure: "几点 + Động từ", explain: "几点 = mấy giờ. Như mọi từ chỉ thời gian, 几点 đứng trước động từ: 每天早上几点起床." },
          vocab: [{ word: "几点", py: "jǐ diǎn", vi: "mấy giờ" }, { word: "起床", py: "qǐchuáng", vi: "thức dậy" }],
        },
        {
          label: "Khuyên anh ấy nghỉ ngơi",
          zh: "你现在应该多休息，不要太忙了。", py: "Nǐ xiànzài yīnggāi duō xiūxi, bú yào tài máng le.", vi: "Bây giờ anh nên nghỉ ngơi nhiều hơn, đừng quá bận rộn nữa.",
          next: "03B",
          analysis: { structure: "应该 + 多 + Động từ; 不要太 + Tính từ + 了", explain: "应该 = nên. 多休息 = nghỉ ngơi nhiều hơn (多 đứng trước động từ). 不要太忙了 = đừng bận quá." },
          vocab: [{ word: "应该", py: "yīnggāi", vi: "nên" }, { word: "休息", py: "xiūxi", vi: "nghỉ ngơi" }, { word: "忙", py: "máng", vi: "bận" }],
        },
        {
          label: "Hỏi khi nào được xuất viện",
          zh: "哥哥，你什么时候可以出院？", py: "Gēge, nǐ shénme shíhou kěyǐ chūyuàn?", vi: "Anh ơi, khi nào anh có thể xuất viện?",
          next: "03C",
          analysis: { structure: "什么时候 + 可以 + Động từ", explain: "什么时候 = khi nào, đứng sau chủ ngữ và trước động từ. 可以出院 = có thể xuất viện." },
          vocab: [{ word: "什么时候", py: "shénme shíhou", vi: "khi nào" }, { word: "可以", py: "kěyǐ", vi: "có thể" }, { word: "出院", py: "chūyuàn", vi: "xuất viện" }],
        },
      ],
    },
    // NODE 03A — HỎI VỀ THÓI QUEN SINH HOẠT (nhánh A1)
    "03A": {
      id: "03A",
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "我每天早上六点起床。", py: "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.", vi: "Mỗi buổi sáng anh thức dậy lúc 6 giờ." },
        { kind: "pick", options: [
          { zh: "你每天早上去都跑步吗？", py: "Nǐ měitiān zǎoshang qù dōu pǎobù ma?", vi: "Mỗi buổi sáng anh đi đều chạy bộ à?", correct: false,
            analysis: { structure: "Sai vị trí 都", explain: "都 đứng trước cả cụm động từ 去跑步: 都去跑步, không chen vào giữa 去 và 跑步." },
            vocab: [{ word: "都", py: "dōu", vi: "đều" }] },
          { zh: "你每天早上都去跑步吗？", py: "Nǐ měitiān zǎoshang dōu qù pǎobù ma?", vi: "Mỗi buổi sáng anh đều đi chạy bộ à?", correct: true,
            analysis: { structure: "每天早上 + 都 + 去 + Động từ + 吗？", explain: "都 đứng trước cụm động từ 去跑步 (đi chạy bộ). 去 + động từ = đi làm việc gì đó." },
            vocab: [{ word: "跑步", py: "pǎobù", vi: "chạy bộ" }, { word: "都", py: "dōu", vi: "đều" }] },
          { zh: "你每天早上都去走步吗？", py: "Nǐ měitiān zǎoshang dōu qù zǒubù ma?", vi: "Mỗi buổi sáng anh đều đi \"đi bước\" à?", correct: false,
            analysis: { structure: "Sai từ", explain: "Chạy bộ là 跑步 (跑 = chạy). 走 là đi bộ, và tiếng Trung không có từ 走步." },
            vocab: [{ word: "跑步", py: "pǎobù", vi: "chạy bộ" }] },
        ] },
        { kind: "npc", speaker: "哥哥", zh: "对。可是这是我的秘密，家里人都不知道。", py: "Duì. Kěshì zhè shì wǒ de mìmì, jiālǐ rén dōu bù zhīdào.", vi: "Đúng vậy. Nhưng đây là bí mật của anh, người nhà đều không biết." },
        { kind: "npc", speaker: "小雨", zh: "什么？你每天六点去跑步？可是你每天都很晚睡觉！", py: "Shénme? Nǐ měitiān liù diǎn qù pǎobù? Kěshì nǐ měitiān dōu hěn wǎn shuìjiào!", vi: "Cái gì? Ngày nào anh cũng đi chạy lúc 6 giờ à? Nhưng ngày nào anh cũng ngủ rất muộn!" },
        { kind: "npc", speaker: "哥哥", zh: "我每天跑五千米。我觉得身体很好，所以没告诉你们。", py: "Wǒ měitiān pǎo wǔqiān mǐ. Wǒ juéde shēntǐ hěn hǎo, suǒyǐ méi gàosu nǐmen.", vi: "Mỗi ngày anh chạy 5.000 mét. Anh thấy mình khỏe nên không nói với mọi người." },
        { kind: "pick", options: [
          { zh: "那你每天有多少时间休息？", py: "Nà nǐ měitiān yǒu duōshǎo shíjiān xiūxi?", vi: "Vậy mỗi ngày anh có bao nhiêu thời gian nghỉ ngơi?", correct: true,
            analysis: { structure: "有 + 多少 + 时间 + Động từ", explain: "多少 = bao nhiêu, đứng trước danh từ 时间. 有时间休息 = có thời gian để nghỉ ngơi (động từ đứng sau cho biết thời gian dùng vào việc gì)." },
            vocab: [{ word: "多少", py: "duōshǎo", vi: "bao nhiêu" }, { word: "时间", py: "shíjiān", vi: "thời gian" }] },
          { zh: "那你每天有几时间休息？", py: "Nà nǐ měitiān yǒu jǐ shíjiān xiūxi?", vi: "Vậy mỗi ngày anh có mấy thời gian nghỉ ngơi?", correct: false,
            analysis: { structure: "Nhầm 几 và 多少", explain: "几 dùng để hỏi số lượng nhỏ và cần lượng từ (几个小时). 时间 không đếm như vậy, nên hỏi 多少时间." },
            vocab: [{ word: "多少", py: "duōshǎo", vi: "bao nhiêu" }] },
          { zh: "那你每天有时间多少休息？", py: "Nà nǐ měitiān yǒu shíjiān duōshǎo xiūxi?", vi: "Vậy mỗi ngày anh có thời gian bao nhiêu nghỉ ngơi?", correct: false,
            analysis: { structure: "Sai vị trí 多少", explain: "多少 đứng trước danh từ nó hỏi: 多少时间, không đặt sau 时间 như tiếng Việt." },
            vocab: [{ word: "多少", py: "duōshǎo", vi: "bao nhiêu" }] },
        ] },
        { kind: "npc", speaker: "哥哥", zh: "很少。我每天只睡五个小时。", py: "Hěn shǎo. Wǒ měitiān zhǐ shuì wǔ ge xiǎoshí.", vi: "Rất ít. Mỗi ngày anh chỉ ngủ 5 tiếng." },
        { kind: "narration", text: "Bạn nhận ra anh trai Tiểu Vũ đã không chăm sóc tốt cho sức khỏe của mình." },
      ],
      choices: [
        {
          label: "Khuyên bớt bận, nghỉ nhiều hơn",
          zh: "你不要太忙了。身体很重要，你应该多休息。", py: "Nǐ bú yào tài máng le. Shēntǐ hěn zhòngyào, nǐ yīnggāi duō xiūxi.", vi: "Anh đừng quá bận rộn nữa. Sức khỏe rất quan trọng, anh nên nghỉ ngơi nhiều hơn.",
          next: "END_A",
          analysis: { structure: "不要太 + Tính từ + 了; 应该 + 多 + Động từ", explain: "不要太忙了 = đừng bận quá. 身体很重要 = sức khỏe rất quan trọng. 应该多休息 = nên nghỉ ngơi nhiều hơn." },
          vocab: [{ word: "身体", py: "shēntǐ", vi: "sức khỏe" }, { word: "重要", py: "zhòngyào", vi: "quan trọng" }],
        },
        {
          label: "Khỏe rồi hãy chạy lại",
          zh: "你应该好好休息。身体好了以后，可以再去跑步。", py: "Nǐ yīnggāi hǎohǎo xiūxi. Shēntǐ hǎo le yǐhòu, kěyǐ zài qù pǎobù.", vi: "Anh nên nghỉ ngơi thật tốt. Sau khi sức khỏe tốt hơn, anh có thể đi chạy bộ lại.",
          next: "END_B",
          analysis: { structure: "…了以后，可以再 + Động từ", explain: "好好休息 = nghỉ ngơi cho tốt. 身体好了以后 = sau khi khỏe lại. 再 = lại, làm lại việc gì đó (再去跑步)." },
          vocab: [{ word: "好好", py: "hǎohǎo", vi: "cho tốt" }, { word: "以后", py: "yǐhòu", vi: "sau khi" }, { word: "再", py: "zài", vi: "lại" }],
        },
        {
          label: "Chỉ chúc anh ấy sớm khỏe",
          zh: "希望你早点好起来。", py: "Xīwàng nǐ zǎodiǎn hǎo qǐlái.", vi: "Mong anh sớm khỏe lại.",
          next: "END_C",
          analysis: { structure: "希望 + Câu", explain: "希望 = mong, hy vọng, theo sau là cả một câu. 早点 = sớm một chút; 好起来 = khỏe lên, tốt lên." },
          vocab: [{ word: "希望", py: "xīwàng", vi: "hy vọng" }, { word: "早点", py: "zǎodiǎn", vi: "sớm" }],
        },
      ],
    },
    // NODE 03B — KHUYÊN ANH TRAI NGHỈ NGƠI (nhánh A2)
    "03B": {
      id: "03B",
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "我知道，但是我还有很多事情要做。", py: "Wǒ zhīdào, dànshì wǒ hái yǒu hěn duō shìqing yào zuò.", vi: "Anh biết, nhưng anh vẫn còn rất nhiều việc phải làm." },
        { kind: "npc", speaker: "小雨", zh: "哥哥，你应该先照顾好自己的身体。", py: "Gēge, nǐ yīnggāi xiān zhàogù hǎo zìjǐ de shēntǐ.", vi: "Anh ơi, anh nên chăm sóc tốt cho sức khỏe của mình trước." },
        { kind: "narration", text: "Anh trai Tiểu Vũ im lặng một lúc. Có lẽ anh ấy cũng nhận ra mình đã quá bận rộn." },
      ],
      choices: [
        {
          label: "Ở lại trò chuyện",
          zh: "如果你觉得无聊，我可以陪你聊天。", py: "Rúguǒ nǐ juéde wúliáo, wǒ kěyǐ péi nǐ liáotiān.", vi: "Nếu anh cảm thấy buồn chán, em có thể ở lại trò chuyện với anh.",
          next: "END_D",
          analysis: { structure: "如果…，我可以…", explain: "如果 = nếu, nêu điều kiện ở vế trước. 陪你聊天 = ở bên trò chuyện cùng anh (陪 = ở cùng, đi cùng)." },
          vocab: [{ word: "如果", py: "rúguǒ", vi: "nếu" }, { word: "陪", py: "péi", vi: "ở cùng" }, { word: "聊天", py: "liáotiān", vi: "trò chuyện" }],
        },
        {
          label: "Hỏi có cần mua đồ ăn sáng",
          zh: "小雨，你吃早饭了吗？要不要我去买？", py: "Xiǎoyǔ, nǐ chī zǎofàn le ma? Yào bu yào wǒ qù mǎi?", vi: "Tiểu Vũ, cậu ăn sáng chưa? Có cần tớ đi mua không?",
          next: "END_E",
          analysis: { structure: "Động từ + 了吗？; 要不要…？", explain: "吃早饭了吗 = ăn sáng chưa (了 chỉ việc đã xảy ra). 要不要 là câu hỏi chính phản: có cần… không." },
          vocab: [{ word: "早饭", py: "zǎofàn", vi: "bữa sáng" }, { word: "买", py: "mǎi", vi: "mua" }],
        },
        {
          label: "Chào về vì còn nhiều việc",
          zh: "我今天还有很多事情要做，先回去了。", py: "Wǒ jīntiān hái yǒu hěn duō shìqing yào zuò, xiān huíqù le.", vi: "Hôm nay tớ còn rất nhiều việc phải làm, tớ về trước nhé.",
          next: "END_F",
          analysis: { structure: "还有 + 很多事情 + 要做; 先 + Động từ + 了", explain: "还有很多事情要做 = còn nhiều việc phải làm (要做 bổ nghĩa cho 事情). 先回去了 = về trước đây (先 = trước)." },
          vocab: [{ word: "事情", py: "shìqing", vi: "việc" }, { word: "先", py: "xiān", vi: "trước" }, { word: "回去", py: "huíqù", vi: "trở về" }],
        },
      ],
    },
    // NODE 03C — HỎI KHI NÀO ANH TRAI CÓ THỂ XUẤT VIỆN (nhánh A3)
    "03C": {
      id: "03C",
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "医生说，如果我好好休息，明天就可以出院。", py: "Yīshēng shuō, rúguǒ wǒ hǎohǎo xiūxi, míngtiān jiù kěyǐ chūyuàn.", vi: "Bác sĩ nói nếu anh nghỉ ngơi thật tốt thì ngày mai có thể xuất viện." },
        { kind: "npc", speaker: "小雨", zh: "真的吗？太好了！", py: "Zhēn de ma? Tài hǎo le!", vi: "Thật sao? Tốt quá!" },
        { kind: "pick", options: [
          { zh: "那你今天要休息好好。", py: "Nà nǐ jīntiān yào xiūxi hǎohǎo.", vi: "Vậy hôm nay anh phải nghỉ ngơi tốt tốt.", correct: false,
            analysis: { structure: "Sai vị trí 好好", explain: "好好 (cho tốt, cho đàng hoàng) đứng trước động từ: 好好休息, không đặt sau như tiếng Việt." },
            vocab: [{ word: "好好", py: "hǎohǎo", vi: "cho tốt" }] },
          { zh: "那你昨天要好好休息。", py: "Nà nǐ zuótiān yào hǎohǎo xiūxi.", vi: "Vậy hôm qua anh phải nghỉ ngơi thật tốt nhé.", correct: false,
            analysis: { structure: "Sai từ chỉ thời gian", explain: "要 ở đây là lời dặn cho việc sắp làm, nên không đi với 昨天 (hôm qua). Anh trai cần nghỉ ngơi hôm nay: 今天." },
            vocab: [{ word: "今天", py: "jīntiān", vi: "hôm nay" }] },
          { zh: "那你今天要好好休息。", py: "Nà nǐ jīntiān yào hǎohǎo xiūxi.", vi: "Vậy hôm nay anh phải nghỉ ngơi thật tốt nhé.", correct: true,
            analysis: { structure: "要 + 好好 + Động từ", explain: "那 = vậy thì. 要 = phải, cần (lời dặn). 好好休息 = nghỉ ngơi cho tốt: 好好 đứng trước động từ." },
            vocab: [{ word: "那", py: "nà", vi: "vậy thì" }, { word: "要", py: "yào", vi: "phải" }, { word: "好好", py: "hǎohǎo", vi: "cho tốt" }] },
        ] },
      ],
      choices: [
        {
          label: "Chúc anh ấy sớm xuất viện",
          zh: "希望你明天可以出院。", py: "Xīwàng nǐ míngtiān kěyǐ chūyuàn.", vi: "Mong ngày mai anh có thể xuất viện.",
          next: "END_G",
          analysis: { structure: "希望 + Chủ ngữ + 明天 + 可以 + Động từ", explain: "希望 theo sau là cả một câu: 你明天可以出院. Từ chỉ thời gian 明天 đứng trước 可以." },
          vocab: [{ word: "希望", py: "xīwàng", vi: "hy vọng" }, { word: "出院", py: "chūyuàn", vi: "xuất viện" }],
        },
        {
          label: "Nhắc uống thuốc đúng giờ",
          zh: "出院以后，也要记得按时吃药。", py: "Chūyuàn yǐhòu, yě yào jìde ànshí chī yào.", vi: "Sau khi xuất viện, anh cũng phải nhớ uống thuốc đúng giờ.",
          next: "END_H",
          analysis: { structure: "…以后，也要 + 记得 + Động từ", explain: "出院以后 = sau khi xuất viện. 记得 = nhớ (làm việc gì). 按时 = đúng giờ, đứng trước động từ 吃药." },
          vocab: [{ word: "记得", py: "jìde", vi: "nhớ" }, { word: "按时", py: "ànshí", vi: "đúng giờ" }, { word: "药", py: "yào", vi: "thuốc" }],
        },
        {
          label: "Hỏi Tiểu Vũ có vui không",
          zh: "小雨，你现在开心吗？", py: "Xiǎoyǔ, nǐ xiànzài kāixīn ma?", vi: "Tiểu Vũ, bây giờ cậu vui không?",
          next: "END_I",
          analysis: { structure: "Chủ ngữ + 现在 + Tính từ + 吗？", explain: "开心 = vui. Tính từ làm vị ngữ trực tiếp, câu hỏi có/không thêm 吗 ở cuối." },
          vocab: [{ word: "开心", py: "kāixīn", vi: "vui" }],
        },
      ],
    },
    // NODE 02B — CÂU CHUYỆN ĐƯỢC TIẾT LỘ (nhánh B: hỏi thêm về tình trạng của anh trai)
    "02B": {
      id: "02B",
      lines: [
        { kind: "npc", speaker: "小雨", zh: "他最近太忙了，身体不太好。昨天晚上突然不舒服，所以去了医院。", py: "Tā zuìjìn tài máng le, shēntǐ bú tài hǎo. Zuótiān wǎnshang tūrán bù shūfu, suǒyǐ qù le yīyuàn.", vi: "Gần đây anh ấy quá bận, sức khỏe không được tốt. Tối qua anh ấy đột nhiên cảm thấy không khỏe nên đã đến bệnh viện." },
        { kind: "pick", options: [
          { zh: "他现在需要吃药不吗？", py: "Tā xiànzài xūyào chī yào bù ma?", vi: "Bây giờ anh ấy cần uống thuốc không à?", correct: false,
            analysis: { structure: "Lẫn hai kiểu câu hỏi", explain: "Câu hỏi có/không dùng 吗 (需要吃药吗) hoặc dạng chính phản (需要不需要吃药), không ghép 不 với 吗 ở cuối câu." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "他现在需要吃药吗？", py: "Tā xiànzài xūyào chī yào ma?", vi: "Bây giờ anh ấy có cần uống thuốc không?", correct: true,
            analysis: { structure: "需要 + Động từ + 吗？", explain: "需要吃药吗 = có cần uống thuốc không. 吗 luôn đứng ở cuối câu hỏi có/không." },
            vocab: [{ word: "需要", py: "xūyào", vi: "cần" }, { word: "药", py: "yào", vi: "thuốc" }] },
          { zh: "他现在需要吃吗药？", py: "Tā xiànzài xūyào chī ma yào?", vi: "Bây giờ anh ấy cần uống không thuốc?", correct: false,
            analysis: { structure: "Sai vị trí 吗", explain: "吗 đứng ở cuối câu, sau tân ngữ 药: 吃药吗." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
        ] },
        { kind: "npc", speaker: "小雨", zh: "需要。医生还让他多休息。", py: "Xūyào. Yīshēng hái ràng tā duō xiūxi.", vi: "Có. Bác sĩ còn bảo anh ấy nghỉ ngơi nhiều hơn." },
        { kind: "narration", text: "Bạn cảm thấy lo lắng. Sau khi suy nghĩ, bạn quyết định đến bệnh viện." },
        { kind: "pick", options: [
          { zh: "好，我明天早上去医院。", py: "Hǎo, wǒ míngtiān zǎoshang qù yīyuàn.", vi: "Được, sáng mai tớ sẽ đến bệnh viện.", correct: true,
            analysis: { structure: "Thời gian + 去 + Nơi chốn", explain: "Từ chỉ thời gian (明天早上) đứng trước động từ; 去 nhận nơi chốn ngay sau nó: 去医院." },
            vocab: [{ word: "医院", py: "yīyuàn", vi: "bệnh viện" }, { word: "去", py: "qù", vi: "đi" }] },
          { zh: "好，我去医院明天早上。", py: "Hǎo, wǒ qù yīyuàn míngtiān zǎoshang.", vi: "Được, tớ đến bệnh viện sáng mai.", correct: false,
            analysis: { structure: "Sai vị trí từ chỉ thời gian", explain: "Tiếng Việt có thể nói \"đến bệnh viện sáng mai\", nhưng tiếng Trung đặt thời gian trước động từ: 明天早上去医院." },
            vocab: [{ word: "明天", py: "míngtiān", vi: "ngày mai" }] },
          { zh: "好，我明天早上去在医院。", py: "Hǎo, wǒ míngtiān zǎoshang qù zài yīyuàn.", vi: "Được, sáng mai tớ đi ở bệnh viện.", correct: false,
            analysis: { structure: "Thừa 在", explain: "去 nhận nơi chốn trực tiếp: 去医院. Không chèn 在 vào giữa." },
            vocab: [{ word: "去", py: "qù", vi: "đi" }] },
        ] },
        { kind: "npc", speaker: "小雨", zh: "谢谢你！", py: "Xièxie nǐ!", vi: "Cảm ơn cậu!" },
      ],
      next: "03D",
    },
    // NODE 03D — ĐẾN THĂM ANH TRAI
    "03D": {
      id: "03D",
      lines: [
        { kind: "narration", text: "Sáng hôm sau, bạn đến bệnh viện. Tiểu Vũ đang chờ bạn ở cửa." },
        { kind: "npc", speaker: "小雨", zh: "你来了！我们进去吧。", py: "Nǐ lái le! Wǒmen jìnqù ba.", vi: "Cậu đến rồi! Chúng ta vào trong nhé." },
        { kind: "npc", speaker: "哥哥", zh: "你好，谢谢你来看我。", py: "Nǐ hǎo, xièxie nǐ lái kàn wǒ.", vi: "Chào em, cảm ơn em đã đến thăm anh." },
        { kind: "pick", options: [
          { zh: "不用谢。你现在感觉怎么样吗？", py: "Bú yòng xiè. Nǐ xiànzài gǎnjué zěnmeyàng ma?", vi: "Không cần cảm ơn đâu. Bây giờ anh cảm thấy thế nào à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 怎么样 thì không thêm 吗 ở cuối." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "不用谢。你现在怎么样感觉？", py: "Bú yòng xiè. Nǐ xiànzài zěnmeyàng gǎnjué?", vi: "Không cần cảm ơn đâu. Bây giờ anh thế nào cảm thấy?", correct: false,
            analysis: { structure: "Sai trật tự 感觉 + 怎么样", explain: "怎么样 đứng sau động từ để hỏi về động từ đó: 感觉怎么样 (cảm thấy thế nào)." },
            vocab: [{ word: "感觉", py: "gǎnjué", vi: "cảm thấy" }] },
          { zh: "不用谢。你现在感觉怎么样？", py: "Bú yòng xiè. Nǐ xiànzài gǎnjué zěnmeyàng?", vi: "Không cần cảm ơn đâu. Bây giờ anh cảm thấy thế nào?", correct: true,
            analysis: { structure: "感觉 + 怎么样？", explain: "感觉怎么样 = cảm thấy thế nào, cách hỏi thăm người bệnh. 怎么样 đứng sau động từ 感觉." },
            vocab: [{ word: "感觉", py: "gǎnjué", vi: "cảm thấy" }, { word: "怎么样", py: "zěnmeyàng", vi: "thế nào" }] },
        ] },
        { kind: "npc", speaker: "哥哥", zh: "好多了。我今天可以下床走一走了。", py: "Hǎo duō le. Wǒ jīntiān kěyǐ xià chuáng zǒu yi zǒu le.", vi: "Đỡ hơn nhiều rồi. Hôm nay anh đã có thể xuống giường đi lại một chút." },
        { kind: "narration", text: "Bạn để ý thấy cạnh giường có một đôi giày chạy bộ." },
      ],
      choices: [
        {
          label: "Hỏi về thói quen chạy bộ",
          zh: "你以前每天早上都跑步吗？", py: "Nǐ yǐqián měitiān zǎoshang dōu pǎobù ma?", vi: "Trước đây mỗi buổi sáng anh đều chạy bộ à?",
          next: "END_J",
          analysis: { structure: "以前 + 每天早上 + 都 + Động từ + 吗？", explain: "以前 = trước đây, đứng đầu cụm chỉ thời gian. 每天早上都跑步 = sáng nào cũng chạy bộ." },
          vocab: [{ word: "以前", py: "yǐqián", vi: "trước đây" }, { word: "跑步", py: "pǎobù", vi: "chạy bộ" }],
        },
        {
          label: "Hỏi khi nào được xuất viện",
          zh: "你什么时候可以出院？", py: "Nǐ shénme shíhou kěyǐ chūyuàn?", vi: "Khi nào anh có thể xuất viện?",
          next: "END_K",
          analysis: { structure: "Chủ ngữ + 什么时候 + 可以 + Động từ？", explain: "什么时候 = khi nào. Trong câu hỏi, nó đứng đúng chỗ của từ chỉ thời gian: sau chủ ngữ, trước động từ." },
          vocab: [{ word: "什么时候", py: "shénme shíhou", vi: "khi nào" }, { word: "出院", py: "chūyuàn", vi: "xuất viện" }],
        },
        {
          label: "Hỏi anh ấy có hay bận không",
          zh: "你平时很忙吗？", py: "Nǐ píngshí hěn máng ma?", vi: "Bình thường anh có bận lắm không?",
          next: "END_L",
          analysis: { structure: "平时 + 很 + Tính từ + 吗？", explain: "平时 = ngày thường, bình thường. 很忙 = bận: tính từ làm vị ngữ thường có 很 đứng trước." },
          vocab: [{ word: "平时", py: "píngshí", vi: "bình thường" }, { word: "忙", py: "máng", vi: "bận" }],
        },
      ],
    },
    // NODE 02C — QUYẾT ĐỊNH CỦA BẠN (nhánh C: từ chối đến bệnh viện)
    "02C": {
      id: "02C",
      lines: [
        { kind: "npc", speaker: "小雨", zh: "没关系，我知道你很忙。", py: "Méi guānxi, wǒ zhīdào nǐ hěn máng.", vi: "Không sao, tớ biết cậu rất bận." },
        { kind: "pick", options: [
          { zh: "希望你哥哥好起来早点。", py: "Xīwàng nǐ gēge hǎo qǐlái zǎodiǎn.", vi: "Mong anh trai cậu khỏe lại sớm.", correct: false,
            analysis: { structure: "Sai vị trí 早点", explain: "Tiếng Việt nói \"khỏe lại sớm\", nhưng 早点 làm trạng ngữ phải đứng trước động từ: 早点好起来." },
            vocab: [{ word: "早点", py: "zǎodiǎn", vi: "sớm" }] },
          { zh: "希望你哥哥早点好起来。", py: "Xīwàng nǐ gēge zǎodiǎn hǎo qǐlái.", vi: "Mong anh trai cậu sớm khỏe lại nhé.", correct: true,
            analysis: { structure: "希望 + Câu; 早点 + 好起来", explain: "希望 theo sau là cả một câu. 早点 = sớm, đứng trước 好起来 (khỏe lên, tốt lên)." },
            vocab: [{ word: "希望", py: "xīwàng", vi: "hy vọng" }, { word: "早点", py: "zǎodiǎn", vi: "sớm" }, { word: "好起来", py: "hǎo qǐlái", vi: "khỏe lại" }] },
          { zh: "希望你哥哥早点好起去。", py: "Xīwàng nǐ gēge zǎodiǎn hǎo qǐqù.", vi: "Mong anh trai cậu sớm khỏe đi.", correct: false,
            analysis: { structure: "Sai bổ ngữ 起来", explain: "好起来 = khỏe lên, tốt lên (起来 chỉ trạng thái bắt đầu tốt dần). Không có cách nói 好起去." },
            vocab: [{ word: "好起来", py: "hǎo qǐlái", vi: "khỏe lại" }] },
        ] },
        { kind: "npc", speaker: "小雨", zh: "谢谢你。", py: "Xièxie nǐ.", vi: "Cảm ơn cậu." },
        { kind: "narration", text: "Bạn tiếp tục hoàn thành công việc của mình, và cả ngày hôm sau cũng bận rộn. Sáng ngày tiếp theo, bạn nhận được tin nhắn từ Tiểu Vũ." },
        { kind: "npc", speaker: "小雨", zh: "我哥哥好多了，医生说他明天可以出院。", py: "Wǒ gēge hǎo duō le, yīshēng shuō tā míngtiān kěyǐ chūyuàn.", vi: "Anh trai tớ đỡ hơn nhiều rồi, bác sĩ nói ngày mai anh ấy có thể xuất viện." },
        { kind: "pick", options: [
          { zh: "真的吗？太好了！", py: "Zhēn de ma? Tài hǎo le!", vi: "Thật sao? Tốt quá!", correct: true,
            analysis: { structure: "真的吗？; 太 + Tính từ + 了", explain: "真的吗 = thật vậy sao. 太好了 = tốt quá: mẫu 太…了 cần đủ cả hai phần." },
            vocab: [{ word: "真的", py: "zhēn de", vi: "thật" }, { word: "太…了", py: "tài… le", vi: "quá" }] },
          { zh: "真的吗？太好！", py: "Zhēn de ma? Tài hǎo!", vi: "Thật sao? Quá tốt!", correct: false,
            analysis: { structure: "Thiếu 了", explain: "Khi khen hay cảm thán, 太 đi cùng 了 ở cuối: 太好了." },
            vocab: [{ word: "太…了", py: "tài… le", vi: "quá" }] },
          { zh: "的真吗？太好了！", py: "De zhēn ma? Tài hǎo le!", vi: "Của thật sao? Tốt quá!", correct: false,
            analysis: { structure: "Sai trật tự 真的", explain: "真的 = thật: 真 đứng trước 的. Đảo thành 的真 thì không có nghĩa." },
            vocab: [{ word: "真的", py: "zhēn de", vi: "thật" }] },
        ] },
        { kind: "npc", speaker: "小雨", zh: "我今天才知道哥哥的秘密：他每天早上六点去跑步，可是晚上睡得太少。", py: "Wǒ jīntiān cái zhīdào gēge de mìmì: tā měitiān zǎoshang liù diǎn qù pǎobù, kěshì wǎnshang shuì de tài shǎo.", vi: "Hôm nay tớ mới biết bí mật của anh trai: sáng nào anh ấy cũng đi chạy lúc 6 giờ, nhưng buổi tối lại ngủ quá ít." },
        { kind: "npc", speaker: "小雨", zh: "昨天我很担心，但是现在我放心了。", py: "Zuótiān wǒ hěn dānxīn, dànshì xiànzài wǒ fàngxīn le.", vi: "Hôm qua tớ rất lo lắng, nhưng bây giờ tớ yên tâm rồi." },
      ],
      choices: [
        {
          label: "Chúc anh ấy sớm khỏe",
          zh: "太好了！希望他早点康复。", py: "Tài hǎo le! Xīwàng tā zǎodiǎn kāngfù.", vi: "Tốt quá! Mong anh ấy sớm hồi phục.",
          next: "END_M",
          analysis: { structure: "希望 + Chủ ngữ + 早点 + Động từ", explain: "康复 = hồi phục (sau khi ốm). 早点康复 = sớm hồi phục: 早点 đứng trước động từ." },
          vocab: [{ word: "康复", py: "kāngfù", vi: "hồi phục" }, { word: "早点", py: "zǎodiǎn", vi: "sớm" }],
        },
        {
          label: "Xin lỗi vì không đến được",
          zh: "对不起，昨天我没有时间去医院。", py: "Duìbuqǐ, zuótiān wǒ méiyǒu shíjiān qù yīyuàn.", vi: "Xin lỗi, hôm qua tớ không có thời gian đến bệnh viện.",
          next: "END_N",
          analysis: { structure: "Thời gian + 没有时间 + Động từ", explain: "昨天 có thể đứng đầu câu hoặc sau chủ ngữ. 没有时间去医院 = không có thời gian đi bệnh viện." },
          vocab: [{ word: "对不起", py: "duìbuqǐ", vi: "xin lỗi" }, { word: "昨天", py: "zuótiān", vi: "hôm qua" }],
        },
        {
          label: "Hẹn đi ăn buổi chiều",
          zh: "今天下午你有时间吗？我们一起吃饭吧。", py: "Jīntiān xiàwǔ nǐ yǒu shíjiān ma? Wǒmen yìqǐ chīfàn ba.", vi: "Chiều nay cậu có thời gian không? Chúng ta cùng đi ăn nhé.",
          next: "END_O",
          analysis: { structure: "有时间吗？; 一起 + Động từ + 吧", explain: "有时间吗 = có rảnh không. 一起吃饭吧 = cùng đi ăn nhé (吧 ở cuối câu để rủ, đề nghị)." },
          vocab: [{ word: "下午", py: "xiàwǔ", vi: "buổi chiều" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "吧", py: "ba", vi: "nhé" }],
        },
      ],
    },
    // KẾT THÚC A — Thay đổi thói quen
    "END_A": {
      id: "END_A",
      ending: { title: "改变习惯", titleVi: "Thay đổi thói quen" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "你说得对。我以后会注意身体的。", py: "Nǐ shuō de duì. Wǒ yǐhòu huì zhùyì shēntǐ de.", vi: "Em nói đúng. Sau này anh sẽ chú ý đến sức khỏe." },
        { kind: "narration", text: "Anh trai Tiểu Vũ quyết định sắp xếp lại thời gian làm việc. Anh sẽ không thức quá khuya và dành nhiều thời gian hơn để nghỉ ngơi." },
        { kind: "narration", text: "Tiểu Vũ rất vui vì cuối cùng anh trai cũng chịu lắng nghe lời khuyên." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC B — Bắt đầu từ sức khỏe
    "END_B": {
      id: "END_B",
      ending: { title: "从身体开始", titleVi: "Bắt đầu từ sức khỏe" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "好，我知道了。", py: "Hǎo, wǒ zhīdào le.", vi: "Được, anh biết rồi." },
        { kind: "npc", speaker: "小雨", zh: "我也希望他以后能多休息。", py: "Wǒ yě xīwàng tā yǐhòu néng duō xiūxi.", vi: "Tớ cũng hy vọng sau này anh ấy có thể nghỉ ngơi nhiều hơn." },
        { kind: "narration", text: "Anh trai Tiểu Vũ hứa sẽ chỉ chạy bộ trở lại khi sức khỏe đã ổn định. Anh cũng quyết định dành thời gian nghỉ ngơi mỗi ngày." },
        { kind: "narration", text: "Bạn nhận ra rằng chạy bộ rất tốt, nhưng biết khi nào cần nghỉ ngơi cũng quan trọng không kém." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC C — Một lời chúc tốt đẹp
    "END_C": {
      id: "END_C",
      ending: { title: "早点好起来", titleVi: "Một lời chúc tốt đẹp" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "谢谢你，我会好好休息的。", py: "Xièxie nǐ, wǒ huì hǎohǎo xiūxi de.", vi: "Cảm ơn em, anh sẽ nghỉ ngơi thật tốt." },
        { kind: "narration", text: "Bạn không nói thêm vì nghĩ rằng anh trai Tiểu Vũ đã hiểu mình cần làm gì. Bạn tạm biệt hai anh em và trở về nhà." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC D — Buổi sáng vui vẻ
    "END_D": {
      id: "END_D",
      ending: { title: "快乐的早上", titleVi: "Buổi sáng vui vẻ" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "好啊，谢谢你。", py: "Hǎo a, xièxie nǐ.", vi: "Được chứ, cảm ơn em." },
        { kind: "narration", text: "Bạn ở lại trò chuyện với hai anh em. Không khí trong phòng bệnh trở nên vui vẻ hơn." },
        { kind: "narration", text: "Anh trai Tiểu Vũ kể về những lần chạy bộ vào buổi sáng. Tiểu Vũ cũng kể nhiều câu chuyện thú vị khiến cả ba cùng bật cười." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC E — Một bữa sáng nhỏ
    "END_E": {
      id: "END_E",
      ending: { title: "一顿早饭", titleVi: "Một bữa sáng nhỏ" },
      lines: [
        { kind: "npc", speaker: "小雨", zh: "我还没吃。你可以帮我买一点吗？", py: "Wǒ hái méi chī. Nǐ kěyǐ bāng wǒ mǎi yìdiǎn ma?", vi: "Tớ vẫn chưa ăn. Cậu có thể mua giúp tớ một chút không?" },
        { kind: "pick", options: [
          { zh: "当然可以。你在这儿里等我。", py: "Dāngrán kěyǐ. Nǐ zài zhèr lǐ děng wǒ.", vi: "Tất nhiên rồi. Cậu đợi tớ ở chỗ đây này.", correct: false,
            analysis: { structure: "Ghép sai 这里 / 这儿", explain: "Ở đây là 这里 hoặc 这儿, hai cách nói có nghĩa như nhau; không ghép thành 这儿里." },
            vocab: [{ word: "这里", py: "zhèlǐ", vi: "ở đây" }] },
          { zh: "当然可以。你等我在这里。", py: "Dāngrán kěyǐ. Nǐ děng wǒ zài zhèlǐ.", vi: "Tất nhiên rồi. Cậu đợi tớ ở đây nhé.", correct: false,
            analysis: { structure: "Sai vị trí cụm 在 + nơi chốn", explain: "Tiếng Việt nói \"đợi ở đây\", nhưng tiếng Trung đặt nơi diễn ra hành động trước động từ: 在这里等我." },
            vocab: [{ word: "在", py: "zài", vi: "ở" }] },
          { zh: "当然可以。你在这里等我。", py: "Dāngrán kěyǐ. Nǐ zài zhèlǐ děng wǒ.", vi: "Tất nhiên rồi. Cậu đợi tớ ở đây nhé.", correct: true,
            analysis: { structure: "当然可以; 在 + Nơi chốn + Động từ", explain: "当然可以 = tất nhiên là được. 在这里等我 = đợi tớ ở đây: cụm 在 + nơi chốn đứng trước động từ 等." },
            vocab: [{ word: "当然", py: "dāngrán", vi: "tất nhiên" }, { word: "等", py: "děng", vi: "đợi" }, { word: "这里", py: "zhèlǐ", vi: "ở đây" }] },
        ] },
        { kind: "narration", text: "Bạn mua đồ ăn sáng cho Tiểu Vũ và anh trai cô ấy. Hai anh em rất cảm ơn bạn." },
        { kind: "narration", text: "Bạn cảm thấy vui vì có thể giúp đỡ họ bằng một hành động đơn giản." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC F — Mỗi người đều có công việc riêng
    "END_F": {
      id: "END_F",
      ending: { title: "每个人都很忙", titleVi: "Mỗi người đều có công việc riêng" },
      lines: [
        { kind: "npc", speaker: "小雨", zh: "好，谢谢你今天来看我们。", py: "Hǎo, xièxie nǐ jīntiān lái kàn wǒmen.", vi: "Được, cảm ơn cậu hôm nay đã đến thăm chúng tớ." },
        { kind: "narration", text: "Bạn trở về nhà để tiếp tục hoàn thành công việc. Dù không ở lại lâu, bạn vẫn cảm thấy vui vì đã đến thăm anh trai Tiểu Vũ." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC G — Tin vui
    "END_G": {
      id: "END_G",
      ending: { title: "好消息", titleVi: "Tin vui" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "谢谢你！", py: "Xièxie nǐ!", vi: "Cảm ơn em!" },
        { kind: "narration", text: "Ngày hôm sau, anh trai Tiểu Vũ được xuất viện. Tiểu Vũ vui vẻ gửi tin nhắn thông báo cho bạn." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC H — Đừng quên uống thuốc
    "END_H": {
      id: "END_H",
      ending: { title: "别忘了吃药", titleVi: "Đừng quên uống thuốc" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "好，我知道了。", py: "Hǎo, wǒ zhīdào le.", vi: "Được, anh biết rồi." },
        { kind: "narration", text: "Anh trai Tiểu Vũ hứa sẽ uống thuốc theo hướng dẫn. Anh cũng hiểu rằng xuất viện không có nghĩa là đã hoàn toàn khỏe mạnh, vì vậy vẫn cần nghỉ ngơi." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC I — Niềm vui của Tiểu Vũ
    "END_I": {
      id: "END_I",
      ending: { title: "小雨很开心", titleVi: "Niềm vui của Tiểu Vũ" },
      lines: [
        { kind: "npc", speaker: "小雨", zh: "当然开心！哥哥明天就可以出院了。", py: "Dāngrán kāixīn! Gēge míngtiān jiù kěyǐ chūyuàn le.", vi: "Tất nhiên là vui rồi! Ngày mai anh trai tớ có thể xuất viện rồi." },
        { kind: "narration", text: "Tiểu Vũ cuối cùng cũng có thể yên tâm. Bạn vui vì anh trai cô ấy sắp được về nhà." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC J — Trở lại với thói quen tốt
    "END_J": {
      id: "END_J",
      ending: { title: "再去跑步", titleVi: "Trở lại với thói quen tốt" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "对。告诉你一个秘密：我每天早上六点起床跑步，可是晚上只睡五个小时。", py: "Duì. Gàosu nǐ yí ge mìmì: wǒ měitiān zǎoshang liù diǎn qǐchuáng pǎobù, kěshì wǎnshang zhǐ shuì wǔ ge xiǎoshí.", vi: "Đúng vậy. Nói cho em một bí mật: mỗi sáng anh dậy lúc 6 giờ để chạy, nhưng buổi tối chỉ ngủ 5 tiếng." },
        { kind: "pick", options: [
          { zh: "身体好了以前，可以再跑步。", py: "Shēntǐ hǎo le yǐqián, kěyǐ zài pǎobù.", vi: "Trước khi sức khỏe tốt hơn, anh có thể chạy bộ lại.", correct: false,
            analysis: { structure: "Nhầm 以前 và 以后", explain: "以前 = trước khi, 以后 = sau khi. Phải đợi khỏe lại rồi mới chạy: 身体好了以后." },
            vocab: [{ word: "以后", py: "yǐhòu", vi: "sau khi" }] },
          { zh: "身体好了以后，可以再跑步。", py: "Shēntǐ hǎo le yǐhòu, kěyǐ zài pǎobù.", vi: "Sau khi sức khỏe tốt hơn, anh có thể chạy bộ lại.", correct: true,
            analysis: { structure: "…了以后，可以再 + Động từ", explain: "身体好了以后 = sau khi khỏe lại (以后 đứng cuối vế chỉ thời gian). 再 = lại, đứng trước động từ: 再跑步." },
            vocab: [{ word: "以后", py: "yǐhòu", vi: "sau khi" }, { word: "再", py: "zài", vi: "lại" }] },
          { zh: "身体好了以后，可以跑步再。", py: "Shēntǐ hǎo le yǐhòu, kěyǐ pǎobù zài.", vi: "Sau khi sức khỏe tốt hơn, anh có thể chạy bộ lại.", correct: false,
            analysis: { structure: "Sai vị trí 再", explain: "Tiếng Việt để \"lại\" ở cuối, nhưng 再 là phó từ nên đứng trước động từ: 再跑步." },
            vocab: [{ word: "再", py: "zài", vi: "lại" }] },
        ] },
        { kind: "narration", text: "Anh trai Tiểu Vũ quyết định sẽ chạy bộ trở lại khi sức khỏe ổn định. Anh cũng hứa không làm việc quá sức nữa." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC K — Chờ đợi tin vui
    "END_K": {
      id: "END_K",
      ending: { title: "等好消息", titleVi: "Chờ đợi tin vui" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "如果我明天感觉很好，就可以出院。", py: "Rúguǒ wǒ míngtiān gǎnjué hěn hǎo, jiù kěyǐ chūyuàn.", vi: "Nếu ngày mai anh cảm thấy khỏe thì có thể xuất viện." },
        { kind: "npc", speaker: "小雨", zh: "希望明天一切都好。", py: "Xīwàng míngtiān yíqiè dōu hǎo.", vi: "Hy vọng ngày mai mọi chuyện đều tốt đẹp." },
        { kind: "narration", text: "Bạn và Tiểu Vũ cùng hy vọng anh trai có thể sớm trở về nhà. Anh ấy cũng hứa sẽ nghỉ ngơi và uống thuốc đầy đủ." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC L — Công việc không phải tất cả
    "END_L": {
      id: "END_L",
      ending: { title: "工作不是一切", titleVi: "Công việc không phải tất cả" },
      lines: [
        { kind: "npc", speaker: "哥哥", zh: "是的，我每天都有很多事情要做。", py: "Shì de, wǒ měitiān dōu yǒu hěn duō shìqing yào zuò.", vi: "Đúng vậy, ngày nào anh cũng có rất nhiều việc phải làm." },
        { kind: "pick", options: [
          { zh: "你应该多休息，也要注意身体。", py: "Nǐ yīnggāi duō xiūxi, yě yào zhùyì shēntǐ.", vi: "Anh nên nghỉ ngơi nhiều hơn và cũng cần chú ý đến sức khỏe.", correct: true,
            analysis: { structure: "应该 + 多 + Động từ; 也要 + Động từ", explain: "多休息 = nghỉ ngơi nhiều hơn (多 đứng trước động từ). 也要注意身体 = cũng phải chú ý sức khỏe: 也 đứng trước 要." },
            vocab: [{ word: "注意", py: "zhùyì", vi: "chú ý" }, { word: "也", py: "yě", vi: "cũng" }] },
          { zh: "你应该多休息，要也注意身体。", py: "Nǐ yīnggāi duō xiūxi, yào yě zhùyì shēntǐ.", vi: "Anh nên nghỉ ngơi nhiều hơn, cần cũng chú ý đến sức khỏe.", correct: false,
            analysis: { structure: "Sai vị trí 也", explain: "Phó từ 也 đứng trước động từ năng nguyện 要: 也要注意." },
            vocab: [{ word: "也", py: "yě", vi: "cũng" }] },
          { zh: "你应该很多休息，也要注意身体。", py: "Nǐ yīnggāi hěn duō xiūxi, yě yào zhùyì shēntǐ.", vi: "Anh nên rất nhiều nghỉ ngơi, và cũng cần chú ý đến sức khỏe.", correct: false,
            analysis: { structure: "Dùng sai 很多", explain: "很多 đứng trước danh từ (很多事情). Muốn nói \"làm nhiều hơn\" thì đặt 多 trước động từ: 多休息." },
            vocab: [{ word: "多", py: "duō", vi: "nhiều (hơn)" }] },
        ] },
        { kind: "narration", text: "Anh trai Tiểu Vũ nhận ra rằng mình cần cân bằng giữa công việc và thời gian nghỉ ngơi. Anh quyết định thay đổi thói quen sau khi xuất viện." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC M — Tin vui buổi sáng
    "END_M": {
      id: "END_M",
      ending: { title: "早上的好消息", titleVi: "Tin vui buổi sáng" },
      lines: [
        { kind: "npc", speaker: "小雨", zh: "谢谢你，我会告诉他的。", py: "Xièxie nǐ, wǒ huì gàosu tā de.", vi: "Cảm ơn cậu, tớ sẽ nói với anh ấy." },
        { kind: "narration", text: "Bạn cảm thấy vui khi biết anh trai Tiểu Vũ đã khỏe hơn. Dù không thể đến bệnh viện, bạn vẫn quan tâm và hỏi thăm tình hình của cô ấy." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC N — Sự thông cảm
    "END_N": {
      id: "END_N",
      ending: { title: "没关系", titleVi: "Sự thông cảm" },
      lines: [
        { kind: "npc", speaker: "小雨", zh: "没关系，你不用道歉。", py: "Méi guānxi, nǐ bú yòng dàoqiàn.", vi: "Không sao, cậu không cần xin lỗi đâu." },
        { kind: "narration", text: "Tiểu Vũ hiểu rằng bạn cũng có những công việc riêng. Cô ấy không trách bạn mà còn cảm ơn vì bạn vẫn quan tâm đến gia đình mình." },
        ...EPILOGUE,
      ],
    },
    // KẾT THÚC O — Cuộc hẹn sau cơn lo lắng
    "END_O": {
      id: "END_O",
      ending: { title: "下午见", titleVi: "Cuộc hẹn sau cơn lo lắng" },
      lines: [
        { kind: "npc", speaker: "小雨", zh: "有时间！我也想和你见面。", py: "Yǒu shíjiān! Wǒ yě xiǎng hé nǐ jiànmiàn.", vi: "Có thời gian! Tớ cũng muốn gặp cậu." },
        { kind: "pick", options: [
          { zh: "好，那我们见下午。", py: "Hǎo, nà wǒmen jiàn xiàwǔ.", vi: "Được, vậy chúng ta gặp chiều nay.", correct: false,
            analysis: { structure: "Sai vị trí từ chỉ thời gian", explain: "Câu hẹn gặp đặt thời gian trước 见: 下午见, 明天见." },
            vocab: [{ word: "下午", py: "xiàwǔ", vi: "buổi chiều" }] },
          { zh: "好，那我们上午见。", py: "Hǎo, nà wǒmen shàngwǔ jiàn.", vi: "Được, vậy sáng nay gặp nhé.", correct: false,
            analysis: { structure: "Sai từ chỉ thời gian", explain: "Hai người hẹn ăn buổi chiều (下午), không phải buổi sáng (上午)." },
            vocab: [{ word: "上午", py: "shàngwǔ", vi: "buổi sáng" }] },
          { zh: "好，那我们下午见。", py: "Hǎo, nà wǒmen xiàwǔ jiàn.", vi: "Được, vậy chiều nay gặp nhé.", correct: true,
            analysis: { structure: "Thời gian + 见", explain: "下午见 = hẹn gặp buổi chiều: thời gian + 见 là cách chào hẹn gặp (明天见, 下午见). 那 = vậy thì." },
            vocab: [{ word: "下午", py: "xiàwǔ", vi: "buổi chiều" }, { word: "见", py: "jiàn", vi: "gặp" }] },
        ] },
        { kind: "narration", text: "Buổi chiều, bạn và Tiểu Vũ cùng đi ăn. Cô ấy kể rằng anh trai đã khỏe hơn và sắp được xuất viện." },
        { kind: "narration", text: "Hai người trò chuyện vui vẻ. Bạn nhận ra rằng tình bạn không chỉ nằm ở việc luôn có mặt bên cạnh nhau, mà còn ở sự quan tâm và chia sẻ." },
        ...EPILOGUE,
      ],
    },
  },
};
