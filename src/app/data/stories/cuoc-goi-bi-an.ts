import type { BranchingStory } from "../../types";

// Truyện "Ai Đã Gọi Điện Đến?" (HSK 2), truyện rẽ nhánh với 2 kết thúc. Người chơi vào vai 小雨.
// Bản gốc của người viết: src/imports/stories/cuoc-goi-bi-an.md (tên gốc: 谁打来的电话？)
// Mỗi câu thoại/tin nhắn của 小雨 là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Lời dẫn truyện, tấm thiệp và kết quả hiện dạng chữ Hán + pinyin + phụ đề (quote).
// Chỉnh nhỏ so với bản gốc để câu văn tự nhiên và mạch truyện khớp với mọi đường đi:
// - 01: 小雨觉得非常奇怪 (bản gốc "小雨非常奇怪" nghĩa là Tiểu Vũ là người kỳ quặc), 不让她等, 你别等小林了; bạn bè hẹn nhau chứ không "đến nhà"
// - 02A: tin nhắn đầu "trước 7 giờ 30 đừng ra ngoài" (bản gốc là 8 giờ, mâu thuẫn với tin nhắn "7 giờ 30 đến rạp")
// - 02B: thêm câu 小美 gợi ý đến rạp 7 giờ 30 (để đường 02B → 03C có lý do tới rạp)
// - 03A, 03B, 04A, 04B, END_2: bỏ chi tiết chỉ đúng với một đường vào (vé xem phim, "ở nhà", "不参加生日惊喜"...)
// - hai đáp án "sai" ở 02B (打电话给我) và 04B (没能) thực ra đúng ngữ pháp nên đã thay bằng câu sai thật sự
export const CUOC_GOI_BI_AN: BranchingStory = {
  start: "01",
  characters: {
    "神秘的人": "🕵️",
    "小林": "👦",
    "小美": "👧",
    "小林的哥哥": "👨",
    "短信": "📱",
  },
  vocab: [
    { word: "生日", py: "shēngrì", vi: "sinh nhật",
      ex: { zh: "今天是小雨的生日。", py: "Jīntiān shì Xiǎoyǔ de shēngrì.", vi: "Hôm nay là sinh nhật Tiểu Vũ." } },
    { word: "快乐", py: "kuàilè", vi: "vui vẻ",
      ex: { zh: "纸上写着：“生日快乐，小雨！”", py: "Zhǐ shàng xiězhe: “Shēngrì kuàilè, Xiǎoyǔ!”", vi: "Trên giấy viết: “Chúc mừng sinh nhật, Tiểu Vũ!”" } },
    { word: "给", py: "gěi", vi: "cho",
      ex: { zh: "小林给小雨送了一本书。", py: "Xiǎolín gěi Xiǎoyǔ sòng le yì běn shū.", vi: "Tiểu Lâm tặng Tiểu Vũ một quyển sách." } },
    { word: "接", py: "jiē", vi: "nhận, nghe điện thoại",
      ex: { zh: "小雨给小林打电话，可是没有人接。", py: "Xiǎoyǔ gěi Xiǎolín dǎ diànhuà, kěshì méiyǒu rén jiē.", vi: "Tiểu Vũ gọi điện cho Tiểu Lâm nhưng không ai nghe máy." } },
    { word: "晚上", py: "wǎnshang", vi: "buổi tối",
      ex: { zh: "今天晚上，你别等小林了。", py: "Jīntiān wǎnshang, nǐ bié děng Xiǎolín le.", vi: "Tối nay, bạn đừng đợi Tiểu Lâm nữa." } },
    { word: "问", py: "wèn", vi: "hỏi",
      ex: { zh: "一个男人问：“请问，你是小雨吗？”", py: "Yí ge nánrén wèn: “Qǐngwèn, nǐ shì Xiǎoyǔ ma?”", vi: "Một người đàn ông hỏi: “Xin hỏi, bạn có phải Tiểu Vũ không?”" } },
    { word: "非常", py: "fēicháng", vi: "rất, vô cùng",
      ex: { zh: "小雨非常快乐。", py: "Xiǎoyǔ fēicháng kuàilè.", vi: "Tiểu Vũ vô cùng vui vẻ." } },
    { word: "开始", py: "kāishǐ", vi: "bắt đầu",
      ex: { zh: "电影马上就要开始了，可是小林还没有出现。", py: "Diànyǐng mǎshàng jiù yào kāishǐ le, kěshì Xiǎolín hái méiyǒu chūxiàn.", vi: "Bộ phim sắp bắt đầu rồi mà Tiểu Lâm vẫn chưa xuất hiện." } },
    { word: "已经", py: "yǐjīng", vi: "đã",
      ex: { zh: "晚上七点，小雨已经准备好了生日蛋糕和饮料。", py: "Wǎnshang qī diǎn, Xiǎoyǔ yǐjīng zhǔnbèi hǎo le shēngrì dàngāo hé yǐnliào.", vi: "Lúc 7 giờ tối, Tiểu Vũ đã chuẩn bị xong bánh sinh nhật và đồ uống." } },
    { word: "长", py: "cháng", vi: "dài, lâu",
      ex: { zh: "小雨在家等了很长时间。", py: "Xiǎoyǔ zài jiā děng le hěn cháng shíjiān.", vi: "Tiểu Vũ đã đợi ở nhà một thời gian rất dài." } },
    { word: "两", py: "liǎng", vi: "hai",
      ex: { zh: "桌子上有两张电影票，还有一张生日卡。", py: "Zhuōzi shàng yǒu liǎng zhāng diànyǐng piào, hái yǒu yì zhāng shēngrì kǎ.", vi: "Trên bàn có hai vé xem phim và một tấm thiệp sinh nhật." } },
    { word: "帮", py: "bāng", vi: "giúp",
      ex: { zh: "我不是坏人。我只是想帮小林。", py: "Wǒ bú shì huàirén. Wǒ zhǐshì xiǎng bāng Xiǎolín.", vi: "Tôi không phải người xấu. Tôi chỉ muốn giúp Tiểu Lâm." } },
    { word: "介绍", py: "jièshào", vi: "giới thiệu",
      ex: { zh: "你终于来了！我想给你介绍一个人。", py: "Nǐ zhōngyú lái le! Wǒ xiǎng gěi nǐ jièshào yí ge rén.", vi: "Cuối cùng cậu cũng đến! Tớ muốn giới thiệu với cậu một người." } },
  ],
  nodes: {
    // NODE 1 — CUỘC GỌI LÚC 7 GIỜ TỐI
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "📍 19:00 · Nhà Tiểu Vũ" },
        { kind: "quote", zh: "今天是小雨的生日。她非常快乐，因为晚上八点，她和朋友们约好一起过生日。", py: "Jīntiān shì Xiǎoyǔ de shēngrì. Tā fēicháng kuàilè, yīnwèi wǎnshang bā diǎn, tā hé péngyoumen yuēhǎo yìqǐ guò shēngrì.", vi: "Hôm nay là sinh nhật Tiểu Vũ. Cô ấy rất vui vì lúc 8 giờ tối, cô đã hẹn bạn bè cùng nhau tổ chức sinh nhật." },
        { kind: "quote", zh: "晚上七点，小雨已经准备好了生日蛋糕和饮料。可是，她最好的朋友小林还没有来。", py: "Wǎnshang qī diǎn, Xiǎoyǔ yǐjīng zhǔnbèi hǎo le shēngrì dàngāo hé yǐnliào. Kěshì, tā zuì hǎo de péngyou Xiǎolín hái méiyǒu lái.", vi: "Lúc 7 giờ tối, Tiểu Vũ đã chuẩn bị xong bánh sinh nhật và đồ uống. Nhưng người bạn thân nhất của cô, Tiểu Lâm, vẫn chưa đến." },
        { kind: "quote", zh: "突然，电话响了。小雨接了电话。", py: "Tūrán, diànhuà xiǎng le. Xiǎoyǔ jiē le diànhuà.", vi: "Đột nhiên, điện thoại reo. Tiểu Vũ nghe điện thoại." },
        { kind: "npc", speaker: "神秘的人", zh: "请问，你是小雨吗？", py: "Qǐngwèn, nǐ shì Xiǎoyǔ ma?", vi: "Xin hỏi, bạn có phải Tiểu Vũ không?" },
        { kind: "pick", options: [
          { zh: "是我。你是谁？", py: "Shì wǒ. Nǐ shì shéi?", vi: "Là tôi. Anh là ai?", correct: true,
            analysis: { structure: "是我; Chủ ngữ + 是 + 谁？", explain: "是我 = là tôi (dùng khi xưng danh qua điện thoại). 你是谁？ = anh là ai?: từ để hỏi 谁 đứng sau động từ 是." },
            vocab: [{ word: "是", py: "shì", vi: "là" }, { word: "谁", py: "shéi", vi: "ai" }] },
          { zh: "是我。是谁你？", py: "Shì wǒ. Shì shéi nǐ?", vi: "Là tôi. Là ai anh?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Chủ ngữ 你 đứng đầu câu, sau đó mới đến động từ 是 và từ để hỏi 谁: 你是谁？." },
            vocab: [{ word: "谁", py: "shéi", vi: "ai" }] },
          { zh: "是我。你是谁吗？", py: "Shì wǒ. Nǐ shì shéi ma?", vi: "Là tôi. Anh là ai không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 谁 (ai) thì không thêm trợ từ nghi vấn 吗 ở cuối câu." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
        ] },
        { kind: "npc", speaker: "神秘的人", zh: "今天晚上，你别等小林了。他不会来。", py: "Jīntiān wǎnshang, nǐ bié děng Xiǎolín le. Tā bú huì lái.", vi: "Tối nay, bạn đừng đợi Tiểu Lâm nữa. Cậu ấy sẽ không đến đâu." },
        { kind: "quote", zh: "电话马上挂了。小雨觉得非常奇怪。为什么这个人知道小林的名字？他为什么不让她等小林？", py: "Diànhuà mǎshàng guà le. Xiǎoyǔ juéde fēicháng qíguài. Wèishénme zhège rén zhīdào Xiǎolín de míngzi? Tā wèishénme bú ràng tā děng Xiǎolín?", vi: "Cuộc gọi lập tức bị ngắt. Tiểu Vũ vô cùng thắc mắc. Tại sao người này biết tên Tiểu Lâm? Tại sao anh ta không muốn cô đợi Tiểu Lâm?" },
      ],
      choices: [
        {
          label: "Gọi cho Tiểu Lâm",
          zh: "马上给小林打电话。", py: "Mǎshàng gěi Xiǎolín dǎ diànhuà.", vi: "Lập tức gọi điện cho Tiểu Lâm.",
          next: "02A",
          analysis: { structure: "马上 + 给 + Người + 打电话", explain: "马上 = ngay lập tức, đứng trước cụm động từ. Gọi điện cho ai dùng cấu trúc 给 + người + 打电话." },
          vocab: [{ word: "马上", py: "mǎshàng", vi: "ngay lập tức" }, { word: "给", py: "gěi", vi: "cho" }, { word: "打电话", py: "dǎ diànhuà", vi: "gọi điện thoại" }],
        },
        {
          label: "Gọi hỏi Tiểu Mỹ",
          zh: "给小美打电话，问她知不知道这件事。", py: "Gěi Xiǎoměi dǎ diànhuà, wèn tā zhī bu zhīdào zhè jiàn shì.", vi: "Gọi cho Tiểu Mỹ, hỏi xem cô ấy có biết chuyện này không.",
          next: "02B",
          analysis: { structure: "问 + Người + 知不知道…", explain: "知不知道 là dạng câu hỏi chính phản của 知道 (có biết hay không). 件 là lượng từ cho sự việc: 这件事 = chuyện này." },
          vocab: [{ word: "问", py: "wèn", vi: "hỏi" }, { word: "知道", py: "zhīdào", vi: "biết" }, { word: "件", py: "jiàn", vi: "(lượng từ cho sự việc)" }],
        },
        {
          label: "Tự đi tìm Tiểu Lâm",
          zh: "不告诉任何人，自己去找小林。", py: "Bú gàosu rènhé rén, zìjǐ qù zhǎo Xiǎolín.", vi: "Không nói với ai, tự mình đi tìm Tiểu Lâm.",
          next: "02C",
          analysis: { structure: "不告诉 + 任何人; 自己 + 去 + Động từ", explain: "任何人 = bất kỳ ai. 自己 (tự mình) đứng trước động từ 去找 để nhấn mạnh tự đi tìm một mình." },
          vocab: [{ word: "告诉", py: "gàosu", vi: "nói cho biết" }, { word: "自己", py: "zìjǐ", vi: "tự mình" }, { word: "找", py: "zhǎo", vi: "tìm" }],
        },
      ],
    },
    // NODE 2A — TIỂU LÂM KHÔNG NGHE MÁY
    "02A": {
      id: "02A",
      lines: [
        { kind: "quote", zh: "小雨给小林打电话，可是没有人接。她又打了两次电话，还是没有人接。", py: "Xiǎoyǔ gěi Xiǎolín dǎ diànhuà, kěshì méiyǒu rén jiē. Tā yòu dǎ le liǎng cì diànhuà, háishi méiyǒu rén jiē.", vi: "Tiểu Vũ gọi điện cho Tiểu Lâm nhưng không ai nghe máy. Cô gọi thêm hai lần nữa nhưng vẫn không có ai nghe." },
        { kind: "quote", zh: "这时候，小雨收到了一条短信：", py: "Zhè shíhou, Xiǎoyǔ shōudào le yì tiáo duǎnxìn:", vi: "Lúc này, Tiểu Vũ nhận được một tin nhắn:" },
        { kind: "npc", speaker: "短信", zh: "别找我。晚上七点半以前，不要出门。", py: "Bié zhǎo wǒ. Wǎnshang qī diǎn bàn yǐqián, bú yào chūmén.", vi: "Đừng tìm tớ. Trước 7 giờ 30 tối, đừng ra ngoài." },
        { kind: "quote", zh: "小雨认出这是小林的电话号码。", py: "Xiǎoyǔ rènchū zhè shì Xiǎolín de diànhuà hàomǎ.", vi: "Tiểu Vũ nhận ra đây là số điện thoại của Tiểu Lâm." },
      ],
      choices: [
        {
          label: "Ở nhà đợi",
          zh: "听小林的话，在家等他。", py: "Tīng Xiǎolín de huà, zài jiā děng tā.", vi: "Nghe lời Tiểu Lâm và ở nhà đợi cậu ấy.",
          next: "03A",
          analysis: { structure: "听…的话; 在 + Nơi chốn + Động từ", explain: "听小林的话 = nghe lời Tiểu Lâm. 在家等他 = đợi cậu ấy ở nhà: cụm chỉ nơi chốn 在家 đứng trước động từ 等." },
          vocab: [{ word: "话", py: "huà", vi: "lời nói" }, { word: "在家", py: "zài jiā", vi: "ở nhà" }, { word: "等", py: "děng", vi: "đợi" }],
        },
        {
          label: "Đi tìm ngay",
          zh: "不相信短信，马上去找小林。", py: "Bù xiāngxìn duǎnxìn, mǎshàng qù zhǎo Xiǎolín.", vi: "Không tin tin nhắn, lập tức đi tìm Tiểu Lâm.",
          next: "03B",
          analysis: { structure: "不相信 + Tân ngữ; 马上 + 去找", explain: "相信 = tin tưởng; 不相信短信 = không tin tin nhắn đó. 马上去找 = lập tức đi tìm." },
          vocab: [{ word: "相信", py: "xiāngxìn", vi: "tin tưởng" }, { word: "短信", py: "duǎnxìn", vi: "tin nhắn" }, { word: "马上", py: "mǎshàng", vi: "lập tức" }],
        },
      ],
    },
    // NODE 2B — TIỂU MỸ BIẾT CHUYỆN GÌ ĐÓ
    "02B": {
      id: "02B",
      lines: [
        { kind: "quote", zh: "小雨给小美打电话。", py: "Xiǎoyǔ gěi Xiǎoměi dǎ diànhuà.", vi: "Tiểu Vũ gọi điện cho Tiểu Mỹ." },
        { kind: "pick", options: [
          { zh: "你知道小林在哪里吗？刚才有一个奇怪的人给打电话我。", py: "Nǐ zhīdào Xiǎolín zài nǎlǐ ma? Gāngcái yǒu yí ge qíguài de rén gěi dǎ diànhuà wǒ.", vi: "Cậu có biết Tiểu Lâm đang ở đâu không? Vừa rồi có một người kỳ lạ cho gọi điện tớ.", correct: false,
            analysis: { structure: "Sai vị trí 给 + Người", explain: "Người nhận phải đứng ngay sau 给 và trước động từ: 给我打电话 (gọi điện cho tớ). Không chen 打电话 vào giữa 给 và 我." },
            vocab: [{ word: "给", py: "gěi", vi: "cho" }] },
          { zh: "你知道小林在哪里吗？刚才有一个奇怪的人给我打电话。", py: "Nǐ zhīdào Xiǎolín zài nǎlǐ ma? Gāngcái yǒu yí ge qíguài de rén gěi wǒ dǎ diànhuà.", vi: "Cậu có biết Tiểu Lâm đang ở đâu không? Vừa rồi có một người kỳ lạ gọi cho tớ.", correct: true,
            analysis: { structure: "知道…吗？; 给 + Người + 打电话", explain: "你知道…吗？ dùng để hỏi xem đối phương có biết thông tin không. 给我打电话 = gọi điện cho tớ (给 + người nhận + hành động)." },
            vocab: [{ word: "刚才", py: "gāngcái", vi: "vừa nãy" }, { word: "奇怪", py: "qíguài", vi: "kỳ lạ" }, { word: "给", py: "gěi", vi: "cho" }] },
          { zh: "你知不知道小林在哪里吗？刚才有一个奇怪的人给我打电话。", py: "Nǐ zhī bu zhīdào Xiǎolín zài nǎlǐ ma? Gāngcái yǒu yí ge qíguài de rén gěi wǒ dǎ diànhuà.", vi: "Cậu có biết không biết Tiểu Lâm ở đâu không? Vừa rồi có một người kỳ lạ gọi cho tớ.", correct: false,
            analysis: { structure: "Thừa 吗", explain: "知不知道 đã là cấu trúc câu hỏi chính phản, không dùng kèm 吗 ở cuối câu." },
            vocab: [{ word: "知不知道", py: "zhī bu zhīdào", vi: "có biết không" }] },
        ] },
        { kind: "quote", zh: "小美安静了一会儿。", py: "Xiǎoměi ānjìng le yíhuìr.", vi: "Tiểu Mỹ im lặng một lúc." },
        { kind: "npc", speaker: "小美", zh: "我不知道。你先别着急。", py: "Wǒ bù zhīdào. Nǐ xiān bié zháojí.", vi: "Tớ không biết. Cậu đừng lo lắng vội." },
        { kind: "npc", speaker: "小美", zh: "但是，如果你一定要找他，晚上七点半去电影院看看吧。", py: "Dànshì, rúguǒ nǐ yídìng yào zhǎo tā, wǎnshang qī diǎn bàn qù diànyǐngyuàn kànkan ba.", vi: "Nhưng nếu cậu nhất định muốn tìm cậu ấy, 7 giờ 30 tối hãy đến rạp chiếu phim xem thử nhé." },
        { kind: "quote", zh: "小雨觉得小美的声音很奇怪，好像她知道什么，但是不想告诉小雨。", py: "Xiǎoyǔ juéde Xiǎoměi de shēngyīn hěn qíguài, hǎoxiàng tā zhīdào shénme, dànshì bù xiǎng gàosu Xiǎoyǔ.", vi: "Tiểu Vũ cảm thấy giọng Tiểu Mỹ rất lạ, cứ như cô ấy biết điều gì đó nhưng không muốn nói với mình." },
      ],
      choices: [
        {
          label: "Hỏi tới cùng",
          zh: "继续问小美，不让她挂电话。", py: "Jìxù wèn Xiǎoměi, bú ràng tā guà diànhuà.", vi: "Tiếp tục hỏi Tiểu Mỹ, không để cô ấy cúp máy.",
          next: "03B",
          analysis: { structure: "继续 + Động từ; 不让 + Người + Động từ", explain: "继续问 = tiếp tục hỏi. 不让她挂电话 = không để cô ấy cúp máy (挂电话 = dập/cúp điện thoại)." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "问", py: "wèn", vi: "hỏi" }, { word: "挂电话", py: "guà diànhuà", vi: "cúp máy" }],
        },
        {
          label: "Báo sẽ đi tìm Tiểu Lâm",
          zh: "告诉小美，自己要去找小林。", py: "Gàosu Xiǎoměi, zìjǐ yào qù zhǎo Xiǎolín.", vi: "Nói với Tiểu Mỹ rằng mình sẽ đi tìm Tiểu Lâm.",
          next: "03C",
          analysis: { structure: "告诉 + Người + Nội dung", explain: "告诉 nhận người nghe (小美) làm tân ngữ trực tiếp, theo sau là việc định làm: 自己要去找小林." },
          vocab: [{ word: "告诉", py: "gàosu", vi: "nói cho biết" }, { word: "要", py: "yào", vi: "sẽ, muốn" }],
        },
      ],
    },
    // NODE 2C — CĂN PHÒNG TRỐNG
    "02C": {
      id: "02C",
      lines: [
        { kind: "narration", text: "📍 Nhà Tiểu Lâm" },
        { kind: "quote", zh: "小雨决定去小林家找他。到了以后，她发现门没有关。", py: "Xiǎoyǔ juédìng qù Xiǎolín jiā zhǎo tā. Dào le yǐhòu, tā fāxiàn mén méiyǒu guān.", vi: "Tiểu Vũ quyết định đến nhà Tiểu Lâm tìm cậu. Khi đến nơi, cô phát hiện cửa không đóng." },
        { kind: "quote", zh: "小雨走进去，发现房间里没有人。桌子上有两张电影票，还有一张生日卡。", py: "Xiǎoyǔ zǒu jìnqù, fāxiàn fángjiān lǐ méiyǒu rén. Zhuōzi shàng yǒu liǎng zhāng diànyǐng piào, hái yǒu yì zhāng shēngrì kǎ.", vi: "Tiểu Vũ bước vào, phát hiện trong phòng không có ai. Trên bàn có hai vé xem phim và một tấm thiệp sinh nhật." },
        { kind: "quote", zh: "生日卡上写着：“对不起，我不能去你的生日会了。”", py: "Shēngrì kǎ shàng xiězhe: “Duìbuqǐ, wǒ bù néng qù nǐ de shēngrì huì le.”", vi: "Trên thiệp viết: “Xin lỗi, tớ không thể đến dự tiệc sinh nhật của cậu nữa.”" },
        { kind: "quote", zh: "小雨很难过。她不知道小林为什么突然不来了。", py: "Xiǎoyǔ hěn nánguò. Tā bù zhīdào Xiǎolín wèishénme tūrán bù lái le.", vi: "Tiểu Vũ rất buồn. Cô không biết tại sao Tiểu Lâm đột nhiên không đến nữa." },
      ],
      choices: [
        {
          label: "Đến rạp chiếu phim",
          zh: "拿着电影票，去电影院看看。", py: "Názhe diànyǐng piào, qù diànyǐngyuàn kànkan.", vi: "Cầm vé xem phim và đến rạp xem thử.",
          next: "03C",
          analysis: { structure: "拿着 + Đồ vật, 去 + Nơi chốn + 看看", explain: "拿着 = cầm theo trên tay (着 chỉ trạng thái đang cầm). 去电影院看看 = đến rạp chiếu phim xem thử." },
          vocab: [{ word: "拿着", py: "názhe", vi: "cầm theo" }, { word: "电影票", py: "diànyǐng piào", vi: "vé xem phim" }, { word: "电影院", py: "diànyǐngyuàn", vi: "rạp chiếu phim" }],
        },
        {
          label: "Nhắn tin hỏi Tiểu Lâm",
          zh: "给小林发短信，问他为什么不来。", py: "Gěi Xiǎolín fā duǎnxìn, wèn tā wèishénme bù lái.", vi: "Nhắn tin hỏi Tiểu Lâm tại sao không đến.",
          next: "03A",
          analysis: { structure: "给 + Người + 发短信", explain: "给小林发短信 = gửi tin nhắn cho Tiểu Lâm. 为什么不来 = tại sao không đến." },
          vocab: [{ word: "给", py: "gěi", vi: "cho" }, { word: "发短信", py: "fā duǎnxìn", vi: "gửi tin nhắn" }, { word: "为什么", py: "wèishénme", vi: "tại sao" }],
        },
      ],
    },
    // NODE 3A — HAI VÉ XEM PHIM
    "03A": {
      id: "03A",
      lines: [
        { kind: "quote", zh: "小雨等了一会儿，突然发现手机里还有一条短信。", py: "Xiǎoyǔ děng le yíhuìr, tūrán fāxiàn shǒujī lǐ hái yǒu yì tiáo duǎnxìn.", vi: "Tiểu Vũ đợi một lúc rồi đột nhiên phát hiện điện thoại còn một tin nhắn." },
        { kind: "npc", speaker: "短信", zh: "如果你想知道真相，晚上七点半去电影院。", py: "Rúguǒ nǐ xiǎng zhīdào zhēnxiàng, wǎnshang qī diǎn bàn qù diànyǐngyuàn.", vi: "Nếu muốn biết sự thật, hãy đến rạp chiếu phim lúc 7 giờ 30 tối." },
        { kind: "quote", zh: "快到七点半了，电影马上就要开始了，可是小林还没有出现。", py: "Kuài dào qī diǎn bàn le, diànyǐng mǎshàng jiù yào kāishǐ le, kěshì Xiǎolín hái méiyǒu chūxiàn.", vi: "Sắp đến 7 giờ 30 rồi, bộ phim sắp bắt đầu mà Tiểu Lâm vẫn chưa xuất hiện." },
      ],
      choices: [
        {
          label: "Đi rạp phim ngay",
          zh: "马上去电影院。", py: "Mǎshàng qù diànyǐngyuàn.", vi: "Lập tức đến rạp chiếu phim.",
          next: "04A",
          analysis: { structure: "马上 + 去 + Nơi chốn", explain: "马上去电影院 = lập tức đến rạp chiếu phim. 马上 đứng trước động từ để chỉ hành động diễn ra ngay." },
          vocab: [{ word: "马上", py: "mǎshàng", vi: "ngay lập tức" }, { word: "电影院", py: "diànyǐngyuàn", vi: "rạp chiếu phim" }],
        },
        {
          label: "Gọi hỏi Tiểu Mỹ",
          zh: "给小美打电话，问她是不是知道真相。", py: "Gěi Xiǎoměi dǎ diànhuà, wèn tā shì bu shì zhīdào zhēnxiàng.", vi: "Gọi cho Tiểu Mỹ, hỏi cô ấy có biết sự thật không.",
          next: "04B",
          analysis: { structure: "是不是 + Động từ", explain: "是不是知道真相 = có phải là biết sự thật không: dùng 是不是 khi người hỏi đã có suy đoán và muốn xác nhận." },
          vocab: [{ word: "是不是", py: "shì bu shì", vi: "có phải… không" }, { word: "真相", py: "zhēnxiàng", vi: "sự thật" }],
        },
      ],
    },
    // NODE 3B — NGƯỜI GỌI ĐIỆN LỘ DIỆN
    "03B": {
      id: "03B",
      lines: [
        { kind: "quote", zh: "小雨又给那个电话号码打电话。这次，有人接了。", py: "Xiǎoyǔ yòu gěi nà ge diànhuà hàomǎ dǎ diànhuà. Zhè cì, yǒu rén jiē le.", vi: "Tiểu Vũ gọi lại số điện thoại đó. Lần này, có người nghe máy." },
        { kind: "pick", options: [
          { zh: "你是谁到底？为什么不让我找小林？", py: "Nǐ shì shéi dàodǐ? Wèishénme bú ràng wǒ zhǎo Xiǎolín?", vi: "Anh là ai rốt cuộc? Tại sao không cho tôi tìm Tiểu Lâm?", correct: false,
            analysis: { structure: "Sai vị trí 到底", explain: "Phó từ 到底 (rốt cuộc) phải đứng sau chủ ngữ và trước động từ 是: 你到底是谁？, không đặt ở cuối câu." },
            vocab: [{ word: "到底", py: "dàodǐ", vi: "rốt cuộc" }] },
          { zh: "你到底是谁？为什么不找让我小林？", py: "Nǐ dàodǐ shì shéi? Wèishénme bù zhǎo ràng wǒ Xiǎolín?", vi: "Rốt cuộc anh là ai? Tại sao không tìm cho tôi Tiểu Lâm?", correct: false,
            analysis: { structure: "Sai trật tự câu kiêm ngữ", explain: "Trong cấu trúc 让 + người + động từ, 不让 đứng trước người nhận lệnh (我), rồi mới đến hành động (找小林): 不让我找小林." },
            vocab: [{ word: "让", py: "ràng", vi: "cho, để" }] },
          { zh: "你到底是谁？为什么不让我找小林？", py: "Nǐ dàodǐ shì shéi? Wèishénme bú ràng wǒ zhǎo Xiǎolín?", vi: "Rốt cuộc anh là ai? Tại sao không cho tôi tìm Tiểu Lâm?", correct: true,
            analysis: { structure: "到底 + câu hỏi; 不让 + Người + Động từ", explain: "你到底是谁？ = rốt cuộc anh là ai? (nhấn mạnh sự sốt ruột). 不让我找小林 = không cho tôi tìm Tiểu Lâm." },
            vocab: [{ word: "到底", py: "dàodǐ", vi: "rốt cuộc" }, { word: "为什么", py: "wèishénme", vi: "tại sao" }, { word: "让", py: "ràng", vi: "cho, để" }] },
        ] },
        { kind: "npc", speaker: "神秘的人", zh: "我不是坏人。我只是想帮小林。", py: "Wǒ bú shì huàirén. Wǒ zhǐshì xiǎng bāng Xiǎolín.", vi: "Tôi không phải người xấu. Tôi chỉ muốn giúp Tiểu Lâm." },
        { kind: "pick", options: [
          { zh: "帮他什么忙？", py: "Bāng tā shénme máng?", vi: "Giúp cậu ấy chuyện gì?", correct: true,
            analysis: { structure: "帮 + Người + 什么忙？", explain: "帮忙 = giúp đỡ. Khi có người được giúp, tách ra: 帮 + người + 什么忙 = giúp ai việc gì. 帮他什么忙？ = giúp cậu ấy việc gì?" },
            vocab: [{ word: "帮", py: "bāng", vi: "giúp" }, { word: "什么", py: "shénme", vi: "gì, chuyện gì" }, { word: "忙", py: "máng", vi: "việc giúp" }] },
          { zh: "什么忙帮他？", py: "Shénme máng bāng tā?", vi: "Việc gì giúp cậu ấy?", correct: false,
            analysis: { structure: "Sai vị trí 什么忙", explain: "Đặt 什么忙 ở đầu câu biến nó thành chủ ngữ (\"việc gì giúp cậu ấy\"). Muốn hỏi \"giúp cậu ấy việc gì\" thì 什么忙 phải đứng sau 帮他." },
            vocab: [{ word: "帮", py: "bāng", vi: "giúp" }] },
          { zh: "帮他什么忙吗？", py: "Bāng tā shénme máng ma?", vi: "Giúp cậu ấy việc gì không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 什么 thì không thêm 吗 ở cuối." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
        ] },
        { kind: "npc", speaker: "神秘的人", zh: "晚上七点半，你去电影院就知道了。", py: "Wǎnshang qī diǎn bàn, nǐ qù diànyǐngyuàn jiù zhīdào le.", vi: "7 giờ 30 tối, cô đến rạp chiếu phim sẽ biết." },
      ],
      choices: [
        {
          label: "Tin và đến rạp phim",
          zh: "相信他，去电影院。", py: "Xiāngxìn tā, qù diànyǐngyuàn.", vi: "Tin người đó và đến rạp chiếu phim.",
          next: "04A",
          analysis: { structure: "相信 + Người, 去 + Nơi chốn", explain: "相信他 = tin anh ta. Hai động từ nối tiếp chỉ quyết định: tin lời người đó rồi đi tới rạp chiếu phim." },
          vocab: [{ word: "相信", py: "xiāngxìn", vi: "tin tưởng" }, { word: "电影院", py: "diànyǐngyuàn", vi: "rạp chiếu phim" }],
        },
        {
          label: "Tìm người nhà Tiểu Lâm",
          zh: "不相信他，去找小林的家人。", py: "Bù xiāngxìn tā, qù zhǎo Xiǎolín de jiārén.", vi: "Không tin người đó, đi tìm người nhà Tiểu Lâm.",
          next: "04C",
          analysis: { structure: "去找 + Người; Danh từ + 的 + 家人", explain: "小林的家人 = người nhà của Tiểu Lâm. 去找 = đi tìm." },
          vocab: [{ word: "家人", py: "jiārén", vi: "người nhà" }, { word: "找", py: "zhǎo", vi: "tìm" }],
        },
      ],
    },
    // NODE 3C — BÍ MẬT Ở RẠP CHIẾU PHIM
    "03C": {
      id: "03C",
      lines: [
        { kind: "narration", text: "📍 Cửa rạp chiếu phim" },
        { kind: "quote", zh: "小雨来到电影院，看见小美站在门口。", py: "Xiǎoyǔ lái dào diànyǐngyuàn, kànjiàn Xiǎoměi zhàn zài ménkǒu.", vi: "Tiểu Vũ đến rạp chiếu phim và nhìn thấy Tiểu Mỹ đứng ở cửa." },
        { kind: "npc", speaker: "小美", zh: "你终于来了！我想给你介绍一个人。", py: "Nǐ zhōngyú lái le! Wǒ xiǎng gěi nǐ jièshào yí ge rén.", vi: "Cuối cùng cậu cũng đến! Tớ muốn giới thiệu với cậu một người." },
        { kind: "quote", zh: "一个男人走了过来。", py: "Yí ge nánrén zǒu le guòlái.", vi: "Một người đàn ông bước tới." },
        { kind: "npc", speaker: "小林的哥哥", zh: "你好，我是小林的哥哥。", py: "Nǐ hǎo, wǒ shì Xiǎolín de gēge.", vi: "Xin chào, tôi là anh trai của Tiểu Lâm." },
        { kind: "pick", options: [
          { zh: "那小林在那里？", py: "Nà Xiǎolín zài nàlǐ?", vi: "Vậy Tiểu Lâm ở đằng kia?", correct: false,
            analysis: { structure: "Nhầm 那里 và 哪里", explain: "哪里 (nǎlǐ) là từ để hỏi \"ở đâu\". 那里 (nàlǐ) có nghĩa là \"ở đó / đằng kia\", không dùng để hỏi vị trí." },
            vocab: [{ word: "哪里", py: "nǎlǐ", vi: "ở đâu" }, { word: "那里", py: "nàlǐ", vi: "ở đó" }] },
          { zh: "那小林在哪里？", py: "Nà Xiǎolín zài nǎlǐ?", vi: "Vậy Tiểu Lâm đang ở đâu?", correct: true,
            analysis: { structure: "那 + Chủ ngữ + 在 + 哪里？", explain: "那 ở đầu câu nghĩa là \"vậy thì\" (nối tiếp thông tin vừa nghe). 在哪里？ = ở đâu?" },
            vocab: [{ word: "那", py: "nà", vi: "vậy, thế thì" }, { word: "在", py: "zài", vi: "ở" }, { word: "哪里", py: "nǎlǐ", vi: "đâu" }] },
          { zh: "那小林哪里在？", py: "Nà Xiǎolín nǎlǐ zài?", vi: "Vậy Tiểu Lâm đâu ở?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Từ chỉ nơi chốn 哪里 phải đứng sau giới từ/động từ 在: 在哪里." },
            vocab: [{ word: "在", py: "zài", vi: "ở" }] },
        ] },
        { kind: "npc", speaker: "小美", zh: "他就在里面。但是，他想先给你一个惊喜。", py: "Tā jiù zài lǐmiàn. Dànshì, tā xiǎng xiān gěi nǐ yí ge jīngxǐ.", vi: "Cậu ấy ở ngay bên trong. Nhưng cậu ấy muốn tạo bất ngờ cho cậu trước." },
      ],
      choices: [
        {
          label: "Vào trong ngay",
          zh: "马上进去找小林。", py: "Mǎshàng jìnqù zhǎo Xiǎolín.", vi: "Lập tức vào trong tìm Tiểu Lâm.",
          next: "04A",
          analysis: { structure: "马上 + 进去 + Động từ", explain: "进去 = đi vào trong (hướng ra xa vị trí đang đứng ở ngoài cửa). 进去找小林 = vào trong tìm Tiểu Lâm." },
          vocab: [{ word: "马上", py: "mǎshàng", vi: "lập tức" }, { word: "进去", py: "jìnqù", vi: "đi vào" }],
        },
        {
          label: "Hỏi anh trai Tiểu Lâm",
          zh: "先问小林的哥哥，为什么要打那个电话。", py: "Xiān wèn Xiǎolín de gēge, wèishénme yào dǎ nà ge diànhuà.", vi: "Hỏi anh trai Tiểu Lâm tại sao lại gọi cuộc điện thoại đó.",
          next: "04B",
          analysis: { structure: "先 + 问 + Người; 为什么要…", explain: "先问 = hỏi trước đã. 打那个电话 = gọi cuộc điện thoại đó (chèn 那个 vào giữa cụm động tân 打电话)." },
          vocab: [{ word: "先", py: "xiān", vi: "trước" }, { word: "问", py: "wèn", vi: "hỏi" }, { word: "哥哥", py: "gēge", vi: "anh trai" }],
        },
      ],
    },
    // NODE 4A — SỰ THẬT TRONG RẠP CHIẾU PHIM
    "04A": {
      id: "04A",
      lines: [
        { kind: "narration", text: "📍 Bên trong rạp chiếu phim" },
        { kind: "quote", zh: "小雨走进电影院，发现里面没有观众，只有小林和几个朋友。", py: "Xiǎoyǔ zǒu jìn diànyǐngyuàn, fāxiàn lǐmiàn méiyǒu guānzhòng, zhǐ yǒu Xiǎolín hé jǐ ge péngyou.", vi: "Tiểu Vũ bước vào rạp chiếu phim và phát hiện bên trong không có khán giả, chỉ có Tiểu Lâm và vài người bạn." },
        { kind: "quote", zh: "桌子上有一个大蛋糕，旁边还有一张纸。纸上写着：“生日快乐，小雨！”", py: "Zhuōzi shàng yǒu yí ge dà dàngāo, pángbiān hái yǒu yì zhāng zhǐ. Zhǐ shàng xiězhe: “Shēngrì kuàilè, Xiǎoyǔ!”", vi: "Trên bàn có một chiếc bánh lớn, bên cạnh còn có một tờ giấy. Trên giấy viết: “Chúc mừng sinh nhật, Tiểu Vũ!”" },
        { kind: "npc", speaker: "小林", zh: "对不起，我没有早点告诉你。我们想给你一个特别的生日。", py: "Duìbuqǐ, wǒ méiyǒu zǎodiǎn gàosu nǐ. Wǒmen xiǎng gěi nǐ yí ge tèbié de shēngrì.", vi: "Xin lỗi vì không nói với cậu sớm hơn. Bọn tớ muốn dành cho cậu một sinh nhật đặc biệt." },
        { kind: "pick", options: [
          { zh: "所以，刚才那个电话是你们打的？", py: "Suǒyǐ, gāngcái nà ge diànhuà shì nǐmen dǎ de?", vi: "Vậy cuộc gọi vừa rồi là do các cậu gọi sao?", correct: true,
            analysis: { structure: "是 + Người + Động từ + 的", explain: "Cấu trúc 是…的 dùng để nhấn mạnh tác nhân của một việc đã xảy ra: 是你们打的 = là do các cậu gọi." },
            vocab: [{ word: "所以", py: "suǒyǐ", vi: "cho nên, vậy" }, { word: "刚才", py: "gāngcái", vi: "vừa rồi" }, { word: "是…的", py: "shì… de", vi: "là do… (nhấn mạnh)" }] },
          { zh: "所以，那个电话刚才你们是打的？", py: "Suǒyǐ, nà ge diànhuà gāngcái nǐmen shì dǎ de?", vi: "Vậy cuộc gọi đó vừa rồi các cậu là gọi sao?", correct: false,
            analysis: { structure: "Sai vị trí 是", explain: "Muốn nhấn mạnh \"là do các cậu gọi\", 是 phải đứng ngay trước 你们: 是你们打的." },
            vocab: [{ word: "是…的", py: "shì… de", vi: "là do… (nhấn mạnh)" }] },
          { zh: "因为，刚才那个电话是你们打的？", py: "Yīnwèi, gāngcái nà ge diànhuà shì nǐmen dǎ de?", vi: "Bởi vì, cuộc gọi vừa rồi là do các cậu gọi sao?", correct: false,
            analysis: { structure: "Nhầm 因为 và 所以", explain: "Từ những gì vừa thấy, Tiểu Vũ suy ra kết luận nên phải dùng 所以 (vậy, cho nên), không dùng 因为 (bởi vì)." },
            vocab: [{ word: "因为", py: "yīnwèi", vi: "bởi vì" }, { word: "所以", py: "suǒyǐ", vi: "cho nên" }] },
        ] },
        { kind: "npc", speaker: "小林", zh: "是我哥哥打的。他怕你提前知道这个惊喜。", py: "Shì wǒ gēge dǎ de. Tā pà nǐ tíqián zhīdào zhège jīngxǐ.", vi: "Là anh trai tớ gọi. Anh ấy sợ cậu biết bất ngờ này từ trước." },
      ],
      choices: [
        {
          label: "Tha thứ và đón sinh nhật",
          zh: "原谅小林，和大家一起过生日。", py: "Yuánliàng Xiǎolín, hé dàjiā yìqǐ guò shēngrì.", vi: "Tha thứ cho Tiểu Lâm và cùng mọi người tổ chức sinh nhật.",
          next: "END_1",
          analysis: { structure: "和 + 大家 + 一起 + 过生日", explain: "过生日 = đón/tổ chức sinh nhật. 和大家一起 = cùng với mọi người." },
          vocab: [{ word: "原谅", py: "yuánliàng", vi: "tha thứ" }, { word: "大家", py: "dàjiā", vi: "mọi người" }, { word: "过生日", py: "guò shēngrì", vi: "đón sinh nhật" }],
        },
        {
          label: "Nhắc không đùa như vậy",
          zh: "告诉小林，以后不要用这种方法开玩笑。", py: "Gàosu Xiǎolín, yǐhòu bú yào yòng zhè zhǒng fāngfǎ kāi wánxiào.", vi: "Nói với Tiểu Lâm rằng sau này đừng đùa theo cách này nữa.",
          next: "END_2",
          analysis: { structure: "不要 + 用 + 方法 + Động từ", explain: "用这种方法 = dùng cách này. 开玩笑 = nói đùa, trêu đùa." },
          vocab: [{ word: "以后", py: "yǐhòu", vi: "sau này" }, { word: "方法", py: "fāngfǎ", vi: "cách, phương pháp" }, { word: "开玩笑", py: "kāi wánxiào", vi: "nói đùa" }],
        },
      ],
    },
    // NODE 4B — MỘT LỜI GIẢI THÍCH
    "04B": {
      id: "04B",
      lines: [
        { kind: "quote", zh: "小雨对小美说：", py: "Xiǎoyǔ duì Xiǎoměi shuō:", vi: "Tiểu Vũ nói với Tiểu Mỹ:" },
        { kind: "pick", options: [
          { zh: "你是不是早就知道这件事吗？", py: "Nǐ shì bu shì zǎo jiù zhīdào zhè jiàn shì ma?", vi: "Có phải cậu đã biết chuyện này từ trước rồi không à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Cấu trúc chính phản 是不是 đã tạo thành câu hỏi, không thêm 吗 ở cuối câu." },
            vocab: [{ word: "是不是", py: "shì bu shì", vi: "có phải… không" }] },
          { zh: "你是不是早就知道这件事？", py: "Nǐ shì bu shì zǎo jiù zhīdào zhè jiàn shì?", vi: "Có phải cậu đã biết chuyện này từ trước rồi không?", correct: true,
            analysis: { structure: "是不是 + 早就 + Động từ", explain: "早就 = đã… từ sớm/từ trước rồi. 这件事 = chuyện này (dùng lượng từ 件 cho sự việc)." },
            vocab: [{ word: "是不是", py: "shì bu shì", vi: "có phải… không" }, { word: "早就", py: "zǎo jiù", vi: "đã… từ trước" }, { word: "件", py: "jiàn", vi: "(lượng từ sự việc)" }] },
          { zh: "你是不是知道早就这件事？", py: "Nǐ shì bu shì zhīdào zǎo jiù zhè jiàn shì?", vi: "Có phải cậu biết từ trước đã chuyện này không?", correct: false,
            analysis: { structure: "Sai vị trí 早就", explain: "Cụm phó từ 早就 phải đứng trước động từ 知道: 早就知道 (đã biết từ trước)." },
            vocab: [{ word: "早就", py: "zǎo jiù", vi: "đã… từ trước" }] },
        ] },
        { kind: "npc", speaker: "小美", zh: "是的。小林想给你一个惊喜，所以请我们帮忙。", py: "Shì de. Xiǎolín xiǎng gěi nǐ yí ge jīngxǐ, suǒyǐ qǐng wǒmen bāngmáng.", vi: "Đúng vậy. Tiểu Lâm muốn tạo bất ngờ cho cậu nên nhờ bọn tớ giúp." },
        { kind: "pick", options: [
          { zh: "可是，为什么不能告诉我直接？", py: "Kěshì, wèishénme bù néng gàosu wǒ zhíjiē?", vi: "Nhưng tại sao không thể nói với tớ thẳng?", correct: false,
            analysis: { structure: "Sai vị trí 直接", explain: "Phó từ 直接 (trực tiếp, thẳng) phải đứng trước động từ 告诉: 直接告诉我." },
            vocab: [{ word: "直接", py: "zhíjiē", vi: "trực tiếp, thẳng" }] },
          { zh: "可是，为什么不能直接告诉我吗？", py: "Kěshì, wèishénme bù néng zhíjiē gàosu wǒ ma?", vi: "Nhưng tại sao không thể nói thẳng với tớ à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 为什么 (tại sao) thì không thêm trợ từ nghi vấn 吗 ở cuối câu." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "可是，为什么不能直接告诉我？", py: "Kěshì, wèishénme bù néng zhíjiē gàosu wǒ?", vi: "Nhưng tại sao không thể nói thẳng với tớ?", correct: true,
            analysis: { structure: "为什么 + 不能 + 直接 + Động từ", explain: "为什么不能…？ = tại sao không thể…? 直接告诉我 = nói thẳng cho tớ biết." },
            vocab: [{ word: "可是", py: "kěshì", vi: "nhưng" }, { word: "直接", py: "zhíjiē", vi: "trực tiếp, thẳng" }, { word: "告诉", py: "gàosu", vi: "nói cho biết" }] },
        ] },
        { kind: "npc", speaker: "小美", zh: "因为他想让你记住今天。", py: "Yīnwèi tā xiǎng ràng nǐ jìzhù jīntiān.", vi: "Vì cậu ấy muốn cậu nhớ ngày hôm nay." },
        { kind: "quote", zh: "小雨想了一会儿，终于明白了。", py: "Xiǎoyǔ xiǎng le yíhuìr, zhōngyú míngbai le.", vi: "Tiểu Vũ suy nghĩ một lúc rồi cuối cùng cũng hiểu ra." },
      ],
      choices: [
        {
          label: "Đi gặp Tiểu Lâm",
          zh: "去见小林，听他亲自解释。", py: "Qù jiàn Xiǎolín, tīng tā qīnzì jiěshì.", vi: "Đi gặp Tiểu Lâm và nghe chính cậu ấy giải thích.",
          next: "04A",
          analysis: { structure: "听 + Người + 亲自 + Động từ", explain: "亲自 = đích thân, tự mình. 听他亲自解释 = nghe chính cậu ấy giải thích." },
          vocab: [{ word: "见", py: "jiàn", vi: "gặp" }, { word: "亲自", py: "qīnzì", vi: "đích thân" }, { word: "解释", py: "jiěshì", vi: "giải thích" }],
        },
        {
          label: "Về nhà",
          zh: "回家，告诉朋友们自己不喜欢这样的惊喜。", py: "Huí jiā, gàosu péngyoumen zìjǐ bù xǐhuan zhèyàng de jīngxǐ.", vi: "Về nhà và nói với bạn bè rằng mình không thích kiểu bất ngờ như vậy.",
          next: "END_2",
          analysis: { structure: "这样的 + Danh từ", explain: "这样的惊喜 = kiểu bất ngờ như vậy. 朋友们 = những người bạn." },
          vocab: [{ word: "回家", py: "huí jiā", vi: "về nhà" }, { word: "这样", py: "zhèyàng", vi: "như vậy" }, { word: "惊喜", py: "jīngxǐ", vi: "bất ngờ" }],
        },
      ],
    },
    // NODE 4C — CUỘC GỌI KHÔNG CÓ ÁC Ý
    "04C": {
      id: "04C",
      lines: [
        { kind: "quote", zh: "小雨找到小林的家人。他们告诉她，小林今天没有危险，只是在准备一个生日惊喜。", py: "Xiǎoyǔ zhǎodào Xiǎolín de jiārén. Tāmen gàosu tā, Xiǎolín jīntiān méiyǒu wēixiǎn, zhǐ shì zài zhǔnbèi yí ge shēngrì jīngxǐ.", vi: "Tiểu Vũ tìm được người nhà Tiểu Lâm. Họ nói với cô rằng hôm nay Tiểu Lâm không gặp nguy hiểm, chỉ đang chuẩn bị một bất ngờ sinh nhật." },
        { kind: "quote", zh: "小雨松了一口气，但是她还是很生气。她给小林发短信：", py: "Xiǎoyǔ sōng le yì kǒu qì, dànshì tā háishi hěn shēngqì. Tā gěi Xiǎolín fā duǎnxìn:", vi: "Tiểu Vũ thở phào nhẹ nhõm nhưng vẫn rất tức giận. Cô nhắn tin cho Tiểu Lâm:" },
        { kind: "pick", options: [
          { zh: "我知道你想给我惊喜，但是你让我担心了。", py: "Wǒ zhīdào nǐ xiǎng gěi wǒ jīngxǐ, dànshì nǐ ràng wǒ dānxīn le.", vi: "Tớ biết cậu muốn tạo bất ngờ cho tớ, nhưng cậu đã khiến tớ lo lắng.", correct: true,
            analysis: { structure: "给 + Người + 惊喜; 让 + Người + 担心", explain: "给我惊喜 = dành cho tớ sự bất ngờ (给 nhận hai tân ngữ: người trước, vật sau). 让我担心 = làm tớ lo lắng." },
            vocab: [{ word: "给", py: "gěi", vi: "cho" }, { word: "惊喜", py: "jīngxǐ", vi: "bất ngờ" }, { word: "担心", py: "dānxīn", vi: "lo lắng" }] },
          { zh: "我知道你想给惊喜我，但是你让我担心了。", py: "Wǒ zhīdào nǐ xiǎng gěi jīngxǐ wǒ, dànshì nǐ ràng wǒ dānxīn le.", vi: "Tớ biết cậu muốn cho bất ngờ tớ, nhưng cậu đã khiến tớ lo lắng.", correct: false,
            analysis: { structure: "Sai trật tự hai tân ngữ sau 给", explain: "Sau 给, tân ngữ chỉ người (我) phải đứng trước tân ngữ chỉ sự vật (惊喜): 给我惊喜." },
            vocab: [{ word: "给", py: "gěi", vi: "cho" }] },
          { zh: "我知道你想给我惊喜，但是你担我心了。", py: "Wǒ zhīdào nǐ xiǎng gěi wǒ jīngxǐ, dànshì nǐ dān wǒ xīn le.", vi: "Tớ biết cậu muốn tạo bất ngờ cho tớ, nhưng cậu lo tớ lắng rồi.", correct: false,
            analysis: { structure: "Dùng sai 担心", explain: "Muốn nói \"khiến tớ lo lắng\" phải dùng cấu trúc 让 + người + 担心: 让我担心, không chèn 我 vào giữa 担心 theo nghĩa gây khiến." },
            vocab: [{ word: "担心", py: "dānxīn", vi: "lo lắng" }] },
        ] },
        { kind: "quote", zh: "过了一会儿，小林回了短信：", py: "Guò le yíhuìr, Xiǎolín huí le duǎnxìn:", vi: "Một lúc sau, Tiểu Lâm nhắn lại:" },
        { kind: "npc", speaker: "小林", zh: "对不起。请你给我一次机会，让我亲自跟你解释。", py: "Duìbuqǐ. Qǐng nǐ gěi wǒ yí cì jīhuì, ràng wǒ qīnzì gēn nǐ jiěshì.", vi: "Xin lỗi. Hãy cho tớ một cơ hội để tự mình giải thích với cậu." },
      ],
      choices: [
        {
          label: "Đến rạp nghe giải thích",
          zh: "去电影院听小林解释。", py: "Qù diànyǐngyuàn tīng Xiǎolín jiěshì.", vi: "Đến rạp chiếu phim nghe Tiểu Lâm giải thích.",
          next: "04A",
          analysis: { structure: "去 + Nơi chốn + 听 + Người + Động từ", explain: "去电影院 = đến rạp chiếu phim; 听小林解释 = nghe Tiểu Lâm giải thích." },
          vocab: [{ word: "电影院", py: "diànyǐngyuàn", vi: "rạp chiếu phim" }, { word: "听", py: "tīng", vi: "nghe" }, { word: "解释", py: "jiěshì", vi: "giải thích" }],
        },
        {
          label: "Đợi ngày mai",
          zh: "不去电影院，等小林明天来找自己。", py: "Bú qù diànyǐngyuàn, děng Xiǎolín míngtiān lái zhǎo zìjǐ.", vi: "Không đến rạp, đợi Tiểu Lâm đến tìm mình vào ngày mai.",
          next: "END_2",
          analysis: { structure: "等 + Người + Thời gian + 来找", explain: "不去 đọc là bú qù vì 不 đứng trước thanh 4. 等小林明天来找自己 = đợi Tiểu Lâm ngày mai đến tìm mình." },
          vocab: [{ word: "等", py: "děng", vi: "đợi" }, { word: "明天", py: "míngtiān", vi: "ngày mai" }, { word: "自己", py: "zìjǐ", vi: "mình, bản thân" }],
        },
      ],
    },
    // ENDING 1 — 最快乐的生日 (Sinh nhật vui vẻ nhất)
    "END_1": {
      id: "END_1",
      lines: [
        { kind: "quote", zh: "小雨决定原谅小林。大家一起唱生日歌。小林给小雨送了一本书，小美给她送了一束花。", py: "Xiǎoyǔ juédìng yuánliàng Xiǎolín. Dàjiā yìqǐ chàng shēngrì gē. Xiǎolín gěi Xiǎoyǔ sòng le yì běn shū, Xiǎoměi gěi tā sòng le yí shù huā.", vi: "Tiểu Vũ quyết định tha thứ cho Tiểu Lâm. Mọi người cùng hát bài hát sinh nhật. Tiểu Lâm tặng Tiểu Vũ một quyển sách, Tiểu Mỹ tặng cô một bó hoa." },
        { kind: "quote", zh: "小雨非常快乐。", py: "Xiǎoyǔ fēicháng kuàilè.", vi: "Tiểu Vũ vô cùng vui vẻ." },
        { kind: "pick", options: [
          { zh: "谢谢你们！这是我特别最的生日！", py: "Xièxie nǐmen! Zhè shì wǒ tèbié zuì de shēngrì!", vi: "Cảm ơn mọi người! Đây là sinh nhật đặc biệt nhất của tớ!", correct: false,
            analysis: { structure: "Sai vị trí 最", explain: "Phó từ chỉ mức độ cao nhất 最 phải đứng trước tính từ 特别: 最特别的生日 (sinh nhật đặc biệt nhất)." },
            vocab: [{ word: "最", py: "zuì", vi: "nhất" }] },
          { zh: "谢谢你们！这是我最特别的生日！", py: "Xièxie nǐmen! Zhè shì wǒ zuì tèbié de shēngrì!", vi: "Cảm ơn mọi người! Đây là sinh nhật đặc biệt nhất của tớ!", correct: true,
            analysis: { structure: "最 + Tính từ + 的 + Danh từ", explain: "最特别 = đặc biệt nhất; thêm 的 trước danh từ 生日: 最特别的生日 = sinh nhật đặc biệt nhất." },
            vocab: [{ word: "最", py: "zuì", vi: "nhất" }, { word: "特别", py: "tèbié", vi: "đặc biệt" }, { word: "生日", py: "shēngrì", vi: "sinh nhật" }] },
          { zh: "谢谢你们！这是我的生日最特别！", py: "Xièxie nǐmen! Zhè shì wǒ de shēngrì zuì tèbié!", vi: "Cảm ơn mọi người! Đây là sinh nhật của tớ đặc biệt nhất!", correct: false,
            analysis: { structure: "Sai vị trí cụm định ngữ", explain: "Cụm miêu tả 最特别 phải đứng trước danh từ 生日 và nối bằng 的: 我最特别的生日, không đặt sau danh từ như tiếng Việt." },
            vocab: [{ word: "特别", py: "tèbié", vi: "đặc biệt" }] },
        ] },
        { kind: "narration", text: "Tiểu Vũ có một buổi sinh nhật đáng nhớ. Cô biết bạn bè rất quan tâm đến mình, dù cách tạo bất ngờ của họ chưa thật sự hoàn hảo." },
      ],
      ending: { title: "最快乐的生日 🎂", titleVi: "Sinh nhật vui vẻ nhất" },
    },
    // ENDING 2 — 一个不太快乐的晚上 (Một buổi tối không vui lắm)
    "END_2": {
      id: "END_2",
      lines: [
        { kind: "quote", zh: "小雨没有和朋友们一起过生日。她回到家，一个人坐在房间里。晚上八点，小林给她打电话。", py: "Xiǎoyǔ méiyǒu hé péngyoumen yìqǐ guò shēngrì. Tā huídào jiā, yí ge rén zuò zài fángjiān lǐ. Wǎnshang bā diǎn, Xiǎolín gěi tā dǎ diànhuà.", vi: "Tiểu Vũ không cùng bạn bè tổ chức sinh nhật. Cô về nhà và ngồi một mình trong phòng. Tám giờ tối, Tiểu Lâm gọi điện cho cô." },
        { kind: "npc", speaker: "小林", zh: "对不起。我只是想让你快乐，没有想到你会这么担心。", py: "Duìbuqǐ. Wǒ zhǐ shì xiǎng ràng nǐ kuàilè, méi xiǎngdào nǐ huì zhème dānxīn.", vi: "Xin lỗi. Tớ chỉ muốn cậu vui, không ngờ cậu lại lo lắng đến vậy." },
        { kind: "pick", options: [
          { zh: "我知道你是为了我好，但是请你直接告诉我以后。", py: "Wǒ zhīdào nǐ shì wèile wǒ hǎo, dànshì qǐng nǐ zhíjiē gàosu wǒ yǐhòu.", vi: "Tớ biết cậu có ý tốt, nhưng hãy nói thẳng với tớ sau này.", correct: false,
            analysis: { structure: "Sai vị trí 以后", explain: "Từ chỉ thời gian 以后 (sau này) phải đứng ở đầu mệnh đề hoặc trước động từ: 以后请你直接告诉我, không đặt ở cuối câu." },
            vocab: [{ word: "以后", py: "yǐhòu", vi: "sau này" }] },
          { zh: "我知道你是为了我好，但是以后请你告诉我直接。", py: "Wǒ zhīdào nǐ shì wèile wǒ hǎo, dànshì yǐhòu qǐng nǐ gàosu wǒ zhíjiē.", vi: "Tớ biết cậu có ý tốt, nhưng sau này hãy nói với tớ thẳng.", correct: false,
            analysis: { structure: "Sai vị trí 直接", explain: "直接 (thẳng, trực tiếp) là phó từ bổ nghĩa cho động từ, phải đứng trước 告诉: 直接告诉我." },
            vocab: [{ word: "直接", py: "zhíjiē", vi: "trực tiếp, thẳng" }] },
          { zh: "我知道你是为了我好，但是以后请你直接告诉我。", py: "Wǒ zhīdào nǐ shì wèile wǒ hǎo, dànshì yǐhòu qǐng nǐ zhíjiē gàosu wǒ.", vi: "Tớ biết cậu có ý tốt, nhưng sau này hãy nói thẳng với tớ nhé.", correct: true,
            analysis: { structure: "为了 + Người + 好; 以后 + 请你 + Động từ", explain: "为了我好 = vì muốn tốt cho tớ. 以后请你直接告诉我 = sau này xin cậu hãy nói thẳng cho tớ biết." },
            vocab: [{ word: "为了", py: "wèile", vi: "vì, để" }, { word: "以后", py: "yǐhòu", vi: "sau này" }, { word: "直接", py: "zhíjiē", vi: "trực tiếp, thẳng" }] },
        ] },
        { kind: "narration", text: "Buổi tối không diễn ra như mong đợi, nhưng cả hai đã hiểu nhau hơn. Đôi khi, một lời nói thật còn quan trọng hơn một bất ngờ lớn." },
      ],
      ending: { title: "一个不太快乐的晚上 🌙", titleVi: "Một buổi tối không vui lắm" },
    },
  },
};
