import type { BranchingStory } from "../../types";

// Truyện "Một Buổi Biểu Diễn Đặc Biệt" (HSK 2, Bài 9 phần 1), truyện rẽ nhánh với 5 kết thúc. Người chơi vào vai 小明, học sinh chuẩn bị nhảy ở buổi biểu diễn của trường.
// Bản gốc của người viết: src/imports/stories/mot-buoi-bieu-dien-dac-biet.md (tên gốc: 一次特别的表演; Doc thứ hai "(2) HSK 2")
// Mỗi câu nói của 小明 là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Bản gốc chỉ có 3 câu nói của 小明 (cảnh 03, 06 và kết thúc 05) nên truyện có ít bước chọn câu; có đường đi (02 → 05 → 07 → 09 → 10 → kết thúc 04) không gặp bước nào.
// Lời dẫn của tác giả viết bằng chữ Hán nên hiện dạng chữ Hán + pinyin + phụ đề (quote), gộp 1–3 câu liền nhau thành một dòng;
// câu nói của 老师, 小红, 爸爸 tách khỏi câu dẫn thành npc (bỏ phần "老师告诉他：", "爸爸说：" vì đã có tên người nói).
// Doc chỉ ghi lựa chọn bằng tiếng Việt: câu chữ Hán của mỗi lựa chọn (zh) là bản dịch ngắn của lựa chọn đó.
// Tên kết thúc bằng chữ Hán là bản dịch từ tên tiếng Việt của tác giả (Doc chỉ có tên tiếng Việt).
// Không đổi câu chữ hay cách nối cảnh so với bản gốc.
export const MOT_BUOI_BIEU_DIEN_DAC_BIET: BranchingStory = {
  start: "01",
  characters: {
    "老师": "👨‍🏫",
    "小红": "👧",
    "爸爸": "👨",
  },
  vocab: [
    { word: "错", py: "cuò", vi: "sai, nhầm (做错 = làm sai)",
      ex: { zh: "不要怕做错，多练习就会跳得更好。", py: "Bú yào pà zuò cuò, duō liànxí jiù huì tiào de gèng hǎo.", vi: "Đừng sợ mắc lỗi, luyện tập nhiều thì con sẽ nhảy tốt hơn." } },
    { word: "从", py: "cóng", vi: "từ (chỉ điểm xuất phát)",
      ex: { zh: "小明从学校回家以后，开始练习跳舞。", py: "Xiǎo Míng cóng xuéxiào huí jiā yǐhòu, kāishǐ liànxí tiào wǔ.", vi: "Sau khi từ trường về nhà, Tiểu Minh bắt đầu luyện tập nhảy múa." } },
    { word: "跳舞", py: "tiào wǔ", vi: "múa, nhảy múa",
      ex: { zh: "他看见一个女孩正在跳舞。", py: "Tā kànjiàn yí ge nǚhái zhèngzài tiào wǔ.", vi: "Cậu ấy nhìn thấy một cô gái đang nhảy múa." } },
    { word: "第一", py: "dì yī", vi: "thứ nhất, đầu tiên",
      ex: { zh: "小明的同学小红是学校舞蹈队的第一名，她也要参加这次表演。", py: "Xiǎo Míng de tóngxué Xiǎo Hóng shì xuéxiào wǔdǎo duì de dì yī míng, tā yě yào cānjiā zhè cì biǎoyǎn.", vi: "Tiểu Hồng, bạn cùng lớp của Tiểu Minh, là người đứng thứ nhất đội múa của trường, cô ấy cũng sẽ tham gia buổi biểu diễn này." } },
    { word: "希望", py: "xīwàng", vi: "mong, hy vọng",
      ex: { zh: "我希望你在表演的时候开心一点儿，不要太紧张。", py: "Wǒ xīwàng nǐ zài biǎoyǎn de shíhou kāixīn yìdiǎnr, bú yào tài jǐnzhāng.", vi: "Bố hy vọng con sẽ vui vẻ hơn khi biểu diễn, đừng quá căng thẳng." } },
    { word: "问题", py: "wèntí", vi: "vấn đề, câu hỏi",
      ex: { zh: "小明很喜欢跳舞，但是他有一个问题。", py: "Xiǎo Míng hěn xǐhuan tiào wǔ, dànshì tā yǒu yí ge wèntí.", vi: "Tiểu Minh rất thích nhảy múa, nhưng cậu ấy có một vấn đề." } },
    { word: "欢迎", py: "huānyíng", vi: "hoan nghênh, chào đón",
      ex: { zh: "小红欢迎小明加入舞蹈队。", py: "Xiǎo Hóng huānyíng Xiǎo Míng jiārù wǔdǎo duì.", vi: "Tiểu Hồng chào đón Tiểu Minh tham gia đội múa." } },
    { word: "上班", py: "shàng bān", vi: "đi làm",
      ex: { zh: "他每天上班的爸爸也很支持他。", py: "Tā měitiān shàngbān de bàba yě hěn zhīchí tā.", vi: "Bố của cậu ấy, người đi làm mỗi ngày, cũng rất ủng hộ cậu ấy." } },
    { word: "懂", py: "dǒng", vi: "hiểu",
      ex: { zh: "小明认真地看着她，终于懂了。", py: "Xiǎo Míng rènzhēn de kànzhe tā, zhōngyú dǒng le.", vi: "Tiểu Minh chăm chú nhìn cô ấy và cuối cùng cũng hiểu." } },
    { word: "表演", py: "biǎoyǎn", vi: "biểu diễn, buổi biểu diễn",
      ex: { zh: "下个星期学校有一个表演，你想参加吗？", py: "Xià ge xīngqī xuéxiào yǒu yí ge biǎoyǎn, nǐ xiǎng cānjiā ma?", vi: "Tuần sau trường có một buổi biểu diễn, bạn có muốn tham gia không?" } },
    { word: "参加", py: "cānjiā", vi: "tham gia",
      ex: { zh: "小明决定参加表演。", py: "Xiǎo Míng juédìng cānjiā biǎoyǎn.", vi: "Tiểu Minh quyết định tham gia biểu diễn." } },
    { word: "练习", py: "liànxí", vi: "luyện tập",
      ex: { zh: "他每天放学以后都练习跳舞。", py: "Tā měitiān fàngxué yǐhòu dōu liànxí tiào wǔ.", vi: "Mỗi ngày sau khi tan học, cậu ấy đều luyện tập nhảy múa." } },
    { word: "动作", py: "dòngzuò", vi: "động tác",
      ex: { zh: "这个动作怎么做？", py: "Zhège dòngzuò zěnme zuò?", vi: "Động tác này thực hiện như thế nào?" } },
    { word: "紧张", py: "jǐnzhāng", vi: "căng thẳng, hồi hộp",
      ex: { zh: "小明站在舞台旁边，心里有一点儿紧张。", py: "Xiǎo Míng zhàn zài wǔtái pángbiān, xīnlǐ yǒu yìdiǎnr jǐnzhāng.", vi: "Tiểu Minh đứng bên cạnh sân khấu, trong lòng hơi căng thẳng." } },
  ],
  nodes: {
    // CẢNH 01 — MỘT CÂU HỎI KHÓ
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "📍 Ở trường · Tuần sau trường có một buổi biểu diễn. Hãy giúp Tiểu Minh vượt qua nỗi sợ nhảy sai." },
        { kind: "npc", speaker: "老师", zh: "下个星期学校有一个表演，你想参加吗？", py: "Xià ge xīngqī xuéxiào yǒu yí ge biǎoyǎn, nǐ xiǎng cānjiā ma?", vi: "Tuần sau trường có một buổi biểu diễn, bạn có muốn tham gia không?" },
        { kind: "quote", zh: "小明的老师问他。小明很喜欢跳舞，但是他有一个问题。", py: "Xiǎo Míng de lǎoshī wèn tā. Xiǎo Míng hěn xǐhuan tiào wǔ, dànshì tā yǒu yí ge wèntí.", vi: "Thầy giáo của Tiểu Minh hỏi cậu ấy. Tiểu Minh rất thích nhảy múa, nhưng cậu ấy có một vấn đề." },
        { kind: "quote", zh: "他觉得自己跳得不太好。", py: "Tā juéde zìjǐ tiào de bú tài hǎo.", vi: "Cậu ấy cảm thấy mình nhảy không được tốt lắm." },
      ],
      choices: [
        {
          label: "Đồng ý tham gia ngay",
          zh: "我想参加！", py: "Wǒ xiǎng cānjiā!", vi: "Con muốn tham gia ạ!",
          next: "02",
          analysis: { structure: "想 + Động từ", explain: "想参加 = muốn tham gia: 想 đứng trước động từ để nói điều mình muốn làm. Trả lời thẳng câu hỏi 你想参加吗 bằng chính 想参加." },
          vocab: [{ word: "想", py: "xiǎng", vi: "muốn" }, { word: "参加", py: "cānjiā", vi: "tham gia" }],
        },
        {
          label: "Từ chối vì sợ làm sai",
          zh: "我怕跳错，不想参加。", py: "Wǒ pà tiào cuò, bù xiǎng cānjiā.", vi: "Con sợ nhảy sai, không muốn tham gia.",
          next: "03",
          analysis: { structure: "怕 + Động từ + 错", explain: "Động từ + 错 = làm sai việc đó: 跳错 = nhảy sai, 做错 = làm sai. 怕 + việc = sợ điều đó xảy ra. 不想 + Động từ = không muốn làm." },
          vocab: [{ word: "怕", py: "pà", vi: "sợ" }, { word: "错", py: "cuò", vi: "sai" }],
        },
      ],
    },
    // CẢNH 02 — BẮT ĐẦU LUYỆN TẬP
    "02": {
      id: "02",
      lines: [
        { kind: "quote", zh: "小明决定参加表演。他每天放学以后都练习跳舞。", py: "Xiǎo Míng juédìng cānjiā biǎoyǎn. Tā měitiān fàngxué yǐhòu dōu liànxí tiào wǔ.", vi: "Tiểu Minh quyết định tham gia biểu diễn. Mỗi ngày sau khi tan học, cậu ấy đều luyện tập nhảy múa." },
        { kind: "quote", zh: "小明的同学小红是学校舞蹈队的第一名，她也要参加这次表演。", py: "Xiǎo Míng de tóngxué Xiǎo Hóng shì xuéxiào wǔdǎo duì de dì yī míng, tā yě yào cānjiā zhè cì biǎoyǎn.", vi: "Tiểu Hồng, bạn cùng lớp của Tiểu Minh, là người đứng thứ nhất đội múa của trường, cô ấy cũng sẽ tham gia buổi biểu diễn này." },
        { kind: "npc", speaker: "老师", zh: "不要怕做错，多练习就会跳得更好。", py: "Bú yào pà zuò cuò, duō liànxí jiù huì tiào de gèng hǎo.", vi: "Đừng sợ mắc lỗi, luyện tập nhiều thì con sẽ nhảy tốt hơn." },
        { kind: "quote", zh: "小明听了老师的话，觉得很开心。", py: "Xiǎo Míng tīng le lǎoshī de huà, juéde hěn kāixīn.", vi: "Tiểu Minh nghe lời thầy giáo và cảm thấy rất vui." },
      ],
      choices: [
        {
          label: "Đến phòng tập của trường",
          zh: "去学校的舞蹈教室练习。", py: "Qù xuéxiào de wǔdǎo jiàoshì liànxí.", vi: "Đến phòng múa của trường để luyện tập.",
          next: "04",
          analysis: { structure: "去 + Nơi chốn + Động từ", explain: "去 + nơi đến + việc làm ở đó: 去舞蹈教室练习 = đến phòng múa (để) luyện tập. 学校的舞蹈教室 = phòng múa của trường." },
          vocab: [{ word: "教室", py: "jiàoshì", vi: "phòng học" }, { word: "练习", py: "liànxí", vi: "luyện tập" }],
        },
        {
          label: "Tự luyện tập ở nhà",
          zh: "自己在家练习。", py: "Zìjǐ zài jiā liànxí.", vi: "Tự luyện tập ở nhà.",
          next: "05",
          analysis: { structure: "自己 + 在 + Nơi chốn + Động từ", explain: "在家练习 = luyện tập ở nhà: nơi chốn với 在 đứng trước động từ. 自己 = tự mình, đứng trước cả cụm." },
          vocab: [{ word: "自己", py: "zìjǐ", vi: "tự mình" }, { word: "在家", py: "zài jiā", vi: "ở nhà" }],
        },
      ],
    },
    // CẢNH 03 — SỢ MẮC LỖI
    "03": {
      id: "03",
      lines: [
        { kind: "quote", zh: "小明不想参加表演，因为他怕做错。", py: "Xiǎo Míng bù xiǎng cānjiā biǎoyǎn, yīnwèi tā pà zuò cuò.", vi: "Tiểu Minh không muốn tham gia biểu diễn vì cậu ấy sợ mắc lỗi." },
        { kind: "npc", speaker: "老师", zh: "你为什么不试一试？", py: "Nǐ wèishénme bù shì yi shì?", vi: "Tại sao con không thử một lần?" },
        { kind: "pick", options: [
          { zh: "我不跳得好，别人可能会笑我。", py: "Wǒ bú tiào de hǎo, biérén kěnéng huì xiào wǒ.", vi: "Con không nhảy được tốt, có thể mọi người sẽ cười con.", correct: false,
            analysis: { structure: "Sai vị trí 不", explain: "Với bổ ngữ trình độ (Động từ + 得 + Tính từ), 不 đứng sau 得, trước tính từ: 跳得不好. Không đặt 不 trước động từ." },
            vocab: [{ word: "得", py: "de", vi: "(nối động từ với bổ ngữ)" }] },
          { zh: "我跳得不好，别人可能会笑我。", py: "Wǒ tiào de bù hǎo, biérén kěnéng huì xiào wǒ.", vi: "Con nhảy không tốt, có thể mọi người sẽ cười con.", correct: true,
            analysis: { structure: "Động từ + 得 + 不 + Tính từ; 可能 + 会 + Động từ", explain: "跳得不好 = nhảy không tốt: 不 đứng sau 得. 可能会笑我 = có thể sẽ cười con: 可能 (có thể) đứng trước 会 (sẽ)." },
            vocab: [{ word: "可能", py: "kěnéng", vi: "có thể" }, { word: "笑", py: "xiào", vi: "cười" }] },
          { zh: "我跳得不好，别人会可能笑我。", py: "Wǒ tiào de bù hǎo, biérén huì kěnéng xiào wǒ.", vi: "Con nhảy không tốt, mọi người sẽ có thể cười con.", correct: false,
            analysis: { structure: "Sai trật tự 可能 và 会", explain: "Nói \"có thể sẽ\" thì 可能 đứng trước: 可能会笑我. Đảo thành 会可能 là sai." },
            vocab: [{ word: "可能", py: "kěnéng", vi: "có thể" }] },
        ] },
        { kind: "quote", zh: "老师告诉他，每个人都会做错，重要的是继续学习。", py: "Lǎoshī gàosu tā, měi ge rén dōu huì zuò cuò, zhòngyào de shì jìxù xuéxí.", vi: "Thầy giáo nói với cậu ấy rằng ai cũng có thể mắc lỗi, điều quan trọng là tiếp tục học hỏi." },
      ],
      choices: [
        {
          label: "Đồng ý thử tham gia",
          zh: "好，我试一试。", py: "Hǎo, wǒ shì yi shì.", vi: "Vâng, con thử xem ạ.",
          next: "02",
          analysis: { structure: "Động từ + 一 + Động từ", explain: "试一试 = thử một chút: lặp động từ với 一 ở giữa làm việc nhẹ đi. Đáp lại đúng câu thầy hỏi 你为什么不试一试." },
          vocab: [{ word: "试", py: "shì", vi: "thử" }],
        },
        {
          label: "Vẫn không tham gia",
          zh: "我还是不想参加。", py: "Wǒ háishi bù xiǎng cānjiā.", vi: "Con vẫn không muốn tham gia.",
          next: "END_1",
          analysis: { structure: "还是 + 不 + Động từ", explain: "还是 = vẫn (giữ ý cũ sau khi đã nghe khuyên). 不想参加 = không muốn tham gia." },
          vocab: [{ word: "还是", py: "háishi", vi: "vẫn" }, { word: "参加", py: "cānjiā", vi: "tham gia" }],
        },
      ],
    },
    // CẢNH 04 — GẶP NGƯỜI BẠN MỚI
    "04": {
      id: "04",
      lines: [
        { kind: "quote", zh: "小明来到学校的舞蹈教室。他看见一个女孩正在跳舞。", py: "Xiǎo Míng lái dào xuéxiào de wǔdǎo jiàoshì. Tā kànjiàn yí ge nǚhái zhèngzài tiào wǔ.", vi: "Tiểu Minh đến phòng học múa của trường. Cậu ấy nhìn thấy một cô gái đang nhảy múa." },
        { kind: "quote", zh: "她就是小红。小红欢迎小明加入舞蹈队。", py: "Tā jiù shì Xiǎo Hóng. Xiǎo Hóng huānyíng Xiǎo Míng jiārù wǔdǎo duì.", vi: "Cô ấy chính là Tiểu Hồng. Tiểu Hồng chào đón Tiểu Minh tham gia đội múa." },
        { kind: "quote", zh: "小明很高兴，马上开始练习。", py: "Xiǎo Míng hěn gāoxìng, mǎshàng kāishǐ liànxí.", vi: "Tiểu Minh rất vui và lập tức bắt đầu luyện tập." },
      ],
      choices: [
        {
          label: "Nhờ Tiểu Hồng dạy mình",
          zh: "请小红教我跳舞。", py: "Qǐng Xiǎo Hóng jiāo wǒ tiào wǔ.", vi: "Nhờ Tiểu Hồng dạy mình nhảy.",
          next: "06",
          analysis: { structure: "请 + Người + 教 + Người + Việc", explain: "请小红… = nhờ Tiểu Hồng…. 教我跳舞 = dạy tôi nhảy: 教 + người học + điều được dạy." },
          vocab: [{ word: "教", py: "jiāo", vi: "dạy" }, { word: "跳舞", py: "tiào wǔ", vi: "nhảy múa" }],
        },
        {
          label: "Tự luyện tập trước",
          zh: "我先自己练习。", py: "Wǒ xiān zìjǐ liànxí.", vi: "Mình tự luyện tập trước đã.",
          next: "05",
          analysis: { structure: "先 + Động từ", explain: "先 = trước (làm việc này trước rồi mới tới việc khác), đứng trước động từ: 先自己练习 = tự luyện tập trước." },
          vocab: [{ word: "先", py: "xiān", vi: "trước" }, { word: "自己", py: "zìjǐ", vi: "tự mình" }],
        },
      ],
    },
    // CẢNH 05 — MỘT BUỔI LUYỆN TẬP Ở NHÀ
    "05": {
      id: "05",
      lines: [
        { kind: "quote", zh: "小明从学校回家以后，开始练习跳舞。", py: "Xiǎo Míng cóng xuéxiào huí jiā yǐhòu, kāishǐ liànxí tiào wǔ.", vi: "Sau khi từ trường về nhà, Tiểu Minh bắt đầu luyện tập nhảy múa." },
        { kind: "quote", zh: "他看着视频，一边听音乐，一边学习动作。", py: "Tā kànzhe shìpín, yìbiān tīng yīnyuè, yìbiān xuéxí dòngzuò.", vi: "Cậu ấy xem video, vừa nghe nhạc vừa học các động tác." },
        { kind: "quote", zh: "但是，他做错了几个动作。小明有一点儿不开心。", py: "Dànshì, tā zuò cuò le jǐ ge dòngzuò. Xiǎo Míng yǒu yìdiǎnr bù kāixīn.", vi: "Nhưng cậu ấy đã thực hiện sai một vài động tác. Tiểu Minh hơi buồn." },
      ],
      choices: [
        {
          label: "Tiếp tục luyện tập",
          zh: "我继续练习。", py: "Wǒ jìxù liànxí.", vi: "Mình tiếp tục luyện tập.",
          next: "07",
          analysis: { structure: "继续 + Động từ", explain: "继续 = tiếp tục, đứng trước động từ: 继续练习 = tiếp tục luyện tập." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "练习", py: "liànxí", vi: "luyện tập" }],
        },
        {
          label: "Hôm sau nhờ Tiểu Hồng chỉ lại",
          zh: "明天去问小红。", py: "Míngtiān qù wèn Xiǎo Hóng.", vi: "Ngày mai đi hỏi Tiểu Hồng.",
          next: "06",
          analysis: { structure: "Thời gian + 去 + Động từ + Người", explain: "Thời gian đứng đầu câu hoặc trước động từ: 明天去问小红 = ngày mai đi hỏi Tiểu Hồng. 问 + người = hỏi ai." },
          vocab: [{ word: "明天", py: "míngtiān", vi: "ngày mai" }, { word: "问", py: "wèn", vi: "hỏi" }],
        },
      ],
    },
    // CẢNH 06 — HỌC CÙNG TIỂU HỒNG
    "06": {
      id: "06",
      lines: [
        { kind: "quote", zh: "小明问小红：", py: "Xiǎo Míng wèn Xiǎo Hóng:", vi: "Tiểu Minh hỏi Tiểu Hồng:" },
        { kind: "pick", options: [
          { zh: "这个动作什么做？", py: "Zhège dòngzuò shénme zuò?", vi: "Động tác này cái gì làm?", correct: false,
            analysis: { structure: "Nhầm 什么 và 怎么", explain: "Hỏi cách làm dùng 怎么 + Động từ: 怎么做 = làm thế nào. 什么 hỏi sự vật (cái gì), không đứng trước động từ để hỏi cách làm." },
            vocab: [{ word: "怎么", py: "zěnme", vi: "thế nào, làm sao" }] },
          { zh: "这个动作怎么做吗？", py: "Zhège dòngzuò zěnme zuò ma?", vi: "Động tác này làm thế nào à không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 怎么 thì không thêm 吗 ở cuối." },
            vocab: [{ word: "吗", py: "ma", vi: "(trợ từ hỏi)" }] },
          { zh: "这个动作怎么做？", py: "Zhège dòngzuò zěnme zuò?", vi: "Động tác này thực hiện như thế nào?", correct: true,
            analysis: { structure: "怎么 + Động từ？", explain: "怎么做 = làm thế nào: 怎么 đứng ngay trước động từ để hỏi cách làm. 这个动作 = động tác này, đặt lên đầu câu làm chủ đề." },
            vocab: [{ word: "动作", py: "dòngzuò", vi: "động tác" }, { word: "怎么", py: "zěnme", vi: "thế nào, làm sao" }] },
        ] },
        { kind: "quote", zh: "小红慢慢地做了一次。小明认真地看着她，终于懂了。", py: "Xiǎo Hóng mànmàn de zuò le yí cì. Xiǎo Míng rènzhēn de kànzhe tā, zhōngyú dǒng le.", vi: "Tiểu Hồng thực hiện động tác đó một lần thật chậm. Tiểu Minh chăm chú nhìn cô ấy và cuối cùng cũng hiểu." },
        { kind: "npc", speaker: "小红", zh: "你再练习几次，就可以做好了。", py: "Nǐ zài liànxí jǐ cì, jiù kěyǐ zuò hǎo le.", vi: "Bạn luyện tập thêm vài lần nữa thì sẽ làm tốt thôi." },
      ],
      choices: [
        {
          label: "Luyện tập cùng Tiểu Hồng",
          zh: "我们一起练习吧！", py: "Wǒmen yìqǐ liànxí ba!", vi: "Chúng mình cùng luyện tập nhé!",
          next: "07",
          analysis: { structure: "一起 + Động từ + 吧", explain: "一起 (cùng nhau) đứng trước động từ. 吧 cuối câu biến câu thành lời rủ: 一起练习吧 = cùng luyện tập nhé." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "吧", py: "ba", vi: "(trợ từ rủ rê)" }],
        },
        {
          label: "Cảm ơn Tiểu Hồng và về nhà",
          zh: "谢谢你！我先回家了。", py: "Xièxie nǐ! Wǒ xiān huí jiā le.", vi: "Cảm ơn cậu! Mình về nhà trước nhé.",
          next: "08",
          analysis: { structure: "先 + Động từ + 了", explain: "我先回家了 = mình về trước nhé: câu chào khi rời đi trước người khác. 先 = trước, 了 cho biết việc sắp xảy ra ngay." },
          vocab: [{ word: "谢谢", py: "xièxie", vi: "cảm ơn" }, { word: "回家", py: "huí jiā", vi: "về nhà" }],
        },
      ],
    },
    // CẢNH 07 — HOÀN THÀNH BÀI NHẢY
    "07": {
      id: "07",
      lines: [
        { kind: "quote", zh: "经过几天的练习，小明终于学会了所有动作。", py: "Jīngguò jǐ tiān de liànxí, Xiǎo Míng zhōngyú xuéhuì le suǒyǒu dòngzuò.", vi: "Sau vài ngày luyện tập, cuối cùng Tiểu Minh cũng học được tất cả các động tác." },
        { kind: "quote", zh: "他每天上班的爸爸也很支持他。", py: "Tā měitiān shàngbān de bàba yě hěn zhīchí tā.", vi: "Bố của cậu ấy, người đi làm mỗi ngày, cũng rất ủng hộ cậu ấy." },
        { kind: "npc", speaker: "爸爸", zh: "我希望你在表演的时候开心一点儿，不要太紧张。", py: "Wǒ xīwàng nǐ zài biǎoyǎn de shíhou kāixīn yìdiǎnr, bú yào tài jǐnzhāng.", vi: "Bố hy vọng con sẽ vui vẻ hơn khi biểu diễn, đừng quá căng thẳng." },
        { kind: "quote", zh: "小明点点头。", py: "Xiǎo Míng diǎn diǎn tóu.", vi: "Tiểu Minh gật đầu." },
      ],
      choices: [
        {
          label: "Nghỉ ngơi để giữ sức",
          zh: "今天早点儿休息。", py: "Jīntiān zǎo diǎnr xiūxi.", vi: "Hôm nay nghỉ ngơi sớm một chút.",
          next: "09",
          analysis: { structure: "早点儿 + Động từ", explain: "早点儿 = sớm một chút, đứng trước động từ: 早点儿休息 = nghỉ sớm một chút. Thời gian 今天 đứng đầu câu." },
          vocab: [{ word: "休息", py: "xiūxi", vi: "nghỉ ngơi" }, { word: "早点儿", py: "zǎo diǎnr", vi: "sớm một chút" }],
        },
        {
          label: "Luyện tập thêm một lần nữa",
          zh: "我再练习一次。", py: "Wǒ zài liànxí yí cì.", vi: "Mình luyện tập thêm một lần nữa.",
          next: "08",
          analysis: { structure: "再 + Động từ + 一次", explain: "再 = thêm, lại (việc sắp làm). 一次 = một lần, đứng sau động từ để nói số lần: 再练习一次 = luyện thêm một lần." },
          vocab: [{ word: "再", py: "zài", vi: "thêm, lại" }, { word: "次", py: "cì", vi: "lần" }],
        },
      ],
    },
    // CẢNH 08 — MỘT VẤN ĐỀ BẤT NGỜ
    "08": {
      id: "08",
      lines: [
        { kind: "quote", zh: "表演前一天，小明发现自己忘了一个动作。", py: "Biǎoyǎn qián yì tiān, Xiǎo Míng fāxiàn zìjǐ wàng le yí ge dòngzuò.", vi: "Một ngày trước buổi biểu diễn, Tiểu Minh phát hiện mình đã quên một động tác." },
        { kind: "quote", zh: "他很着急，不知道怎么办。", py: "Tā hěn zháojí, bù zhīdào zěnme bàn.", vi: "Cậu ấy rất sốt ruột, không biết phải làm thế nào." },
        { kind: "quote", zh: "他给小红打电话，希望她可以帮助自己。小红很快来到学校。", py: "Tā gěi Xiǎo Hóng dǎ diànhuà, xīwàng tā kěyǐ bāngzhù zìjǐ. Xiǎo Hóng hěn kuài lái dào xuéxiào.", vi: "Cậu ấy gọi điện cho Tiểu Hồng, hy vọng cô ấy có thể giúp mình. Tiểu Hồng nhanh chóng đến trường." },
      ],
      choices: [
        {
          label: "Cùng Tiểu Hồng ôn lại động tác",
          zh: "和小红一起再练习一次。", py: "Hé Xiǎo Hóng yìqǐ zài liànxí yí cì.", vi: "Cùng Tiểu Hồng luyện lại một lần nữa.",
          next: "09",
          analysis: { structure: "和 + Người + 一起 + Động từ", explain: "和小红一起 = cùng với Tiểu Hồng, đứng trước động từ. 再练习一次 = luyện thêm một lần." },
          vocab: [{ word: "和", py: "hé", vi: "với, và" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
        {
          label: "Tự nhớ lại động tác và luyện tập",
          zh: "我自己想一想，再练习。", py: "Wǒ zìjǐ xiǎng yi xiǎng, zài liànxí.", vi: "Mình tự nghĩ lại một chút rồi luyện tập.",
          next: "END_2",
          analysis: { structure: "Động từ + 一 + Động từ; 再 + Động từ", explain: "想一想 = nghĩ một chút. 再练习 = rồi mới luyện tập: 再 ở đây nối việc làm sau." },
          vocab: [{ word: "想", py: "xiǎng", vi: "nghĩ" }, { word: "自己", py: "zìjǐ", vi: "tự mình" }],
        },
      ],
    },
    // CẢNH 09 — NGÀY BIỂU DIỄN
    "09": {
      id: "09",
      lines: [
        { kind: "quote", zh: "今天是学校表演的日子。很多学生和老师都来了。", py: "Jīntiān shì xuéxiào biǎoyǎn de rìzi. Hěn duō xuésheng hé lǎoshī dōu lái le.", vi: "Hôm nay là ngày biểu diễn ở trường. Rất nhiều học sinh và giáo viên đã đến." },
        { kind: "quote", zh: "小明站在舞台旁边，心里有一点儿紧张。", py: "Xiǎo Míng zhàn zài wǔtái pángbiān, xīnlǐ yǒu yìdiǎnr jǐnzhāng.", vi: "Tiểu Minh đứng bên cạnh sân khấu, trong lòng hơi căng thẳng." },
        { kind: "quote", zh: "老师走过来，对他说：", py: "Lǎoshī zǒu guòlái, duì tā shuō:", vi: "Thầy giáo bước đến và nói với cậu ấy:" },
        { kind: "npc", speaker: "老师", zh: "别担心，你可以的！", py: "Bié dānxīn, nǐ kěyǐ de!", vi: "Đừng lo lắng, con làm được mà!" },
      ],
      choices: [
        {
          label: "Bình tĩnh bước lên sân khấu",
          zh: "我准备好了！", py: "Wǒ zhǔnbèi hǎo le!", vi: "Con sẵn sàng rồi ạ!",
          next: "10",
          analysis: { structure: "Động từ + 好 + 了", explain: "好 đứng sau động từ nghĩa là làm xong, làm tốt: 准备好了 = đã chuẩn bị xong, sẵn sàng rồi." },
          vocab: [{ word: "准备", py: "zhǔnbèi", vi: "chuẩn bị" }],
        },
        {
          label: "Quá lo lắng và muốn bỏ cuộc",
          zh: "我太紧张了，不想跳了。", py: "Wǒ tài jǐnzhāng le, bù xiǎng tiào le.", vi: "Con căng thẳng quá, không muốn nhảy nữa.",
          next: "END_3",
          analysis: { structure: "太 + Tính từ + 了; 不想 + Động từ + 了", explain: "太紧张了 = căng thẳng quá. 不想跳了 = không muốn nhảy nữa: 了 cuối câu cho biết ý đã đổi." },
          vocab: [{ word: "紧张", py: "jǐnzhāng", vi: "căng thẳng" }, { word: "太", py: "tài", vi: "quá" }],
        },
      ],
    },
    // CẢNH 10 — KẾT QUẢ
    "10": {
      id: "10",
      lines: [
        { kind: "quote", zh: "音乐开始了，小明和小红一起走上舞台。", py: "Yīnyuè kāishǐ le, Xiǎo Míng hé Xiǎo Hóng yìqǐ zǒu shàng wǔtái.", vi: "Nhạc bắt đầu, Tiểu Minh và Tiểu Hồng cùng bước lên sân khấu." },
        { kind: "quote", zh: "他们认真地跳舞，每一个动作都很漂亮。", py: "Tāmen rènzhēn de tiào wǔ, měi yí ge dòngzuò dōu hěn piàoliang.", vi: "Họ nhảy múa rất chăm chú, mỗi động tác đều rất đẹp." },
        { kind: "quote", zh: "表演结束以后，大家都给他们鼓掌。", py: "Biǎoyǎn jiéshù yǐhòu, dàjiā dōu gěi tāmen gǔzhǎng.", vi: "Sau khi buổi biểu diễn kết thúc, mọi người đều vỗ tay cho họ." },
        { kind: "npc", speaker: "老师", zh: "你们今天表现得不错！", py: "Nǐmen jīntiān biǎoxiàn de búcuò!", vi: "Hôm nay các em thể hiện rất tốt!" },
        { kind: "quote", zh: "小明非常开心，因为他终于完成了自己的表演。", py: "Xiǎo Míng fēicháng kāixīn, yīnwèi tā zhōngyú wánchéng le zìjǐ de biǎoyǎn.", vi: "Tiểu Minh vô cùng vui vẻ vì cuối cùng cậu ấy đã hoàn thành buổi biểu diễn của mình." },
      ],
      choices: [
        {
          label: "Cùng bạn bè ăn mừng",
          zh: "我们一起去吃饭吧！", py: "Wǒmen yìqǐ qù chīfàn ba!", vi: "Chúng mình cùng đi ăn nhé!",
          next: "END_4",
          analysis: { structure: "一起 + 去 + Động từ + 吧", explain: "一起去吃饭 = cùng đi ăn: 一起 đứng trước 去. 吧 cuối câu làm thành lời rủ." },
          vocab: [{ word: "吃饭", py: "chīfàn", vi: "ăn cơm, đi ăn" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
        {
          label: "Hỏi thầy giáo về kết quả và lời nhận xét",
          zh: "去问老师我跳得怎么样。", py: "Qù wèn lǎoshī wǒ tiào de zěnmeyàng.", vi: "Đi hỏi thầy xem mình nhảy thế nào.",
          next: "END_5",
          analysis: { structure: "问 + Người + câu hỏi", explain: "问老师 + điều muốn hỏi: 我跳得怎么样 = mình nhảy thế nào. Động từ + 得 + 怎么样 hỏi làm việc đó tốt hay không." },
          vocab: [{ word: "问", py: "wèn", vi: "hỏi" }, { word: "怎么样", py: "zěnmeyàng", vi: "thế nào" }],
        },
      ],
    },
    // KẾT THÚC 01 — BỎ LỠ CƠ HỘI
    "END_1": {
      id: "END_1",
      ending: { title: "错过机会", titleVi: "Bỏ lỡ cơ hội" },
      lines: [
        { kind: "quote", zh: "小明没有参加学校的表演。", py: "Xiǎo Míng méiyǒu cānjiā xuéxiào de biǎoyǎn.", vi: "Tiểu Minh đã không tham gia buổi biểu diễn của trường." },
        { kind: "quote", zh: "表演那天，他坐在台下，看着别的学生跳舞。", py: "Biǎoyǎn nà tiān, tā zuò zài táixià, kànzhe bié de xuésheng tiào wǔ.", vi: "Ngày biểu diễn, cậu ấy ngồi dưới sân khấu và nhìn những học sinh khác nhảy múa." },
        { kind: "quote", zh: "他觉得有一点儿可惜。他希望下一次可以勇敢一点儿。", py: "Tā juéde yǒu yìdiǎnr kěxī. Tā xīwàng xià yí cì kěyǐ yǒnggǎn yìdiǎnr.", vi: "Cậu ấy cảm thấy hơi tiếc nuối. Cậu ấy hy vọng lần sau mình có thể dũng cảm hơn một chút." },
      ],
    },
    // KẾT THÚC 02 — TỰ MÌNH VƯỢT QUA
    "END_2": {
      id: "END_2",
      ending: { title: "自己做到了", titleVi: "Tự mình vượt qua" },
      lines: [
        { kind: "quote", zh: "小明没有放弃，自己想起了那个动作。他又练习了几次，终于做对了。", py: "Xiǎo Míng méiyǒu fàngqì, zìjǐ xiǎng qǐ le nà ge dòngzuò. Tā yòu liànxí le jǐ cì, zhōngyú zuò duì le.", vi: "Tiểu Minh không bỏ cuộc và tự mình nhớ lại động tác đó. Cậu ấy luyện tập thêm vài lần và cuối cùng đã làm đúng." },
        { kind: "quote", zh: "第二天，他顺利地完成了表演。", py: "Dì èr tiān, tā shùnlì de wánchéng le biǎoyǎn.", vi: "Ngày hôm sau, cậu ấy đã hoàn thành buổi biểu diễn một cách thuận lợi." },
        { kind: "quote", zh: "他发现，只要努力，就会有进步。", py: "Tā fāxiàn, zhǐyào nǔlì, jiù huì yǒu jìnbù.", vi: "Cậu ấy nhận ra rằng chỉ cần cố gắng thì sẽ có tiến bộ." },
      ],
    },
    // KẾT THÚC 03 — CHƯA ĐỦ TỰ TIN
    "END_3": {
      id: "END_3",
      ending: { title: "还不够自信", titleVi: "Chưa đủ tự tin" },
      lines: [
        { kind: "quote", zh: "小明最后没有走上舞台。", py: "Xiǎo Míng zuìhòu méiyǒu zǒu shàng wǔtái.", vi: "Cuối cùng Tiểu Minh đã không bước lên sân khấu." },
        { kind: "quote", zh: "虽然他觉得很难过，但是老师没有批评他。", py: "Suīrán tā juéde hěn nánguò, dànshì lǎoshī méiyǒu pīpíng tā.", vi: "Mặc dù cậu ấy cảm thấy rất buồn, nhưng thầy giáo không trách mắng cậu ấy." },
        { kind: "npc", speaker: "老师", zh: "没关系，下次再试一次。", py: "Méi guānxi, xià cì zài shì yí cì.", vi: "Không sao, lần sau hãy thử lại nhé." },
        { kind: "quote", zh: "小明决定继续练习，不再害怕做错。", py: "Xiǎo Míng juédìng jìxù liànxí, bú zài hàipà zuò cuò.", vi: "Tiểu Minh quyết định tiếp tục luyện tập và không còn sợ mắc lỗi nữa." },
      ],
    },
    // KẾT THÚC 04 — MỘT NGÀY ĐÁNG NHỚ
    "END_4": {
      id: "END_4",
      ending: { title: "难忘的一天", titleVi: "Một ngày đáng nhớ" },
      lines: [
        { kind: "quote", zh: "表演结束以后，小明和小红一起去吃饭。", py: "Biǎoyǎn jiéshù yǐhòu, Xiǎo Míng hé Xiǎo Hóng yìqǐ qù chīfàn.", vi: "Sau khi buổi biểu diễn kết thúc, Tiểu Minh và Tiểu Hồng cùng đi ăn." },
        { kind: "quote", zh: "他们一边吃饭，一边说今天的事情。", py: "Tāmen yìbiān chīfàn, yìbiān shuō jīntiān de shìqing.", vi: "Họ vừa ăn vừa kể về những chuyện xảy ra hôm nay." },
        { kind: "quote", zh: "小明感谢小红帮助自己。他们希望以后还可以一起参加表演。", py: "Xiǎo Míng gǎnxiè Xiǎo Hóng bāngzhù zìjǐ. Tāmen xīwàng yǐhòu hái kěyǐ yìqǐ cānjiā biǎoyǎn.", vi: "Tiểu Minh cảm ơn Tiểu Hồng vì đã giúp đỡ mình. Họ hy vọng sau này vẫn có thể cùng nhau tham gia biểu diễn." },
      ],
    },
    // KẾT THÚC 05 — MỘT BÀI HỌC QUAN TRỌNG
    "END_5": {
      id: "END_5",
      ending: { title: "重要的一课", titleVi: "Một bài học quan trọng" },
      lines: [
        { kind: "quote", zh: "小明走到老师面前，问：", py: "Xiǎo Míng zǒu dào lǎoshī miànqián, wèn:", vi: "Tiểu Minh đi đến trước mặt thầy giáo và hỏi:" },
        { kind: "pick", options: [
          { zh: "老师，我今天跳得怎么样？", py: "Lǎoshī, wǒ jīntiān tiào de zěnmeyàng?", vi: "Thầy ơi, hôm nay con nhảy thế nào ạ?", correct: true,
            analysis: { structure: "Thời gian + Động từ + 得 + 怎么样？", explain: "跳得怎么样 = nhảy thế nào: Động từ + 得 + 怎么样 hỏi làm việc đó tốt hay không. Thời gian 今天 đứng trước động từ." },
            vocab: [{ word: "怎么样", py: "zěnmeyàng", vi: "thế nào" }, { word: "得", py: "de", vi: "(nối động từ với bổ ngữ)" }] },
          { zh: "老师，我跳得今天怎么样？", py: "Lǎoshī, wǒ tiào de jīntiān zěnmeyàng?", vi: "Thầy ơi, con nhảy hôm nay thế nào ạ?", correct: false,
            analysis: { structure: "Sai vị trí thời gian", explain: "Từ chỉ thời gian (今天) đứng trước động từ: 我今天跳得怎么样. Sau 得 chỉ còn phần đánh giá (怎么样, 很好…)." },
            vocab: [{ word: "今天", py: "jīntiān", vi: "hôm nay" }] },
          { zh: "老师，我今天跳得怎么样吗？", py: "Lǎoshī, wǒ jīntiān tiào de zěnmeyàng ma?", vi: "Thầy ơi, hôm nay con nhảy thế nào à không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 怎么样 thì không thêm 吗 ở cuối." },
            vocab: [{ word: "吗", py: "ma", vi: "(trợ từ hỏi)" }] },
        ] },
        { kind: "npc", speaker: "老师", zh: "你做得不错，但是还有一些地方可以更好。", py: "Nǐ zuò de búcuò, dànshì hái yǒu yìxiē dìfang kěyǐ gèng hǎo.", vi: "Con làm khá tốt, nhưng vẫn còn một vài chỗ có thể làm tốt hơn." },
        { kind: "quote", zh: "小明认真地听着，并记下老师说的问题。", py: "Xiǎo Míng rènzhēn de tīngzhe, bìng jì xià lǎoshī shuō de wèntí.", vi: "Tiểu Minh chăm chú lắng nghe và ghi lại những vấn đề mà thầy giáo nói." },
        { kind: "quote", zh: "他决定以后继续努力，希望下一次可以做得更好。", py: "Tā juédìng yǐhòu jìxù nǔlì, xīwàng xià yí cì kěyǐ zuò de gèng hǎo.", vi: "Cậu ấy quyết định tiếp tục cố gắng, hy vọng lần sau có thể làm tốt hơn." },
      ],
    },
  },
};
