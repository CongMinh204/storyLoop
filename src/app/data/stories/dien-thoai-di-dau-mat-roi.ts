import type { BranchingStory } from "../../types";

// Truyện "Điện Thoại Đi Đâu Mất Rồi?" (HSK 2, Bài 10), truyện rẽ nhánh với 4 kết thúc. Người chơi vào vai 小雨, học sinh lớp tiếng Trung.
// Bản gốc của người viết: src/imports/stories/dien-thoai-di-dau-mat-roi.md (tên gốc: 手机去哪儿了？; tab "Bài 10 – Điện thoại đi đâu mất rồi?" trong Doc thứ hai "(2) HSK 2")
// Mỗi câu nói của 小雨 là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Lời dẫn của tác giả hiện dạng chữ Hán + pinyin + phụ đề (quote); câu nói của nhân vật khác tách khỏi câu dẫn thành npc.
// Doc chỉ ghi lựa chọn bằng tiếng Việt: câu chữ Hán của mỗi lựa chọn (zh) là bản dịch ngắn của lựa chọn đó.
// Tên kết thúc bằng chữ Hán là bản dịch từ tên tiếng Việt của tác giả (Doc chỉ có tên tiếng Việt).
// Từ vựng: bảng của tác giả có 9 từ; thêm 2 từ có trong truyện để đủ 11 thẻ flashcard.
// Chỉnh nhỏ so với bản gốc để mạch truyện khớp với mọi đường đi:
// - Thêm cảnh 09R cho đường 11 → "Tiếp tục tìm trong lớp" (bản gốc quay lại 09, tạo vòng lặp 09 → 11 → 09 làm sai thanh tiến độ và điểm);
//   09R giống hệt 09 nhưng bỏ lựa chọn "Kiểm tra ngăn bàn của mình" vì Tiểu Vũ vừa kiểm tra xong ở cảnh 11
export const DIEN_THOAI_DI_DAU_MAT_ROI: BranchingStory = {
  start: "01",
  characters: {
    "老师": "👩‍🏫",
    "小东": "👦",
    "小丽": "👧",
    "哥哥": "👦",
    "学生": "🧒",
  },
  vocab: [
    { word: "课", py: "kè", vi: "giờ học, môn học, tiết học",
      ex: { zh: "今天上午，小雨有一节汉语课。", py: "Jīntiān shàngwǔ, Xiǎo Yǔ yǒu yì jié Hànyǔ kè.", vi: "Sáng nay, Tiểu Vũ có một tiết học tiếng Trung." } },
    { word: "帮助", py: "bāngzhù", vi: "giúp đỡ",
      ex: { zh: "谁可以帮助我回答这个问题？", py: "Shéi kěyǐ bāngzhù wǒ huídá zhège wèntí?", vi: "Ai có thể giúp tôi trả lời câu hỏi này?" } },
    { word: "别", py: "bié", vi: "đừng",
      ex: { zh: "上课的时候，别玩手机！", py: "Shàngkè de shíhou, bié wán shǒujī!", vi: "Trong giờ học, đừng chơi điện thoại!" } },
    { word: "哥哥", py: "gēge", vi: "anh trai",
      ex: { zh: "小雨打开手机，看见哥哥发来的消息。", py: "Xiǎo Yǔ dǎkāi shǒujī, kànjiàn gēge fā lái de xiāoxi.", vi: "Tiểu Vũ mở điện thoại và nhìn thấy tin nhắn anh trai gửi đến." } },
    { word: "鸡蛋", py: "jīdàn", vi: "trứng gà",
      ex: { zh: "小雨打开自己的桌子，发现里面有一本书和一个鸡蛋。", py: "Xiǎo Yǔ dǎkāi zìjǐ de zhuōzi, fāxiàn lǐmiàn yǒu yì běn shū hé yí ge jīdàn.", vi: "Tiểu Vũ mở ngăn bàn của mình và phát hiện bên trong có một quyển sách và một quả trứng gà." } },
    { word: "西瓜", py: "xīguā", vi: "dưa hấu",
      ex: { zh: "今天我给你买了一个西瓜，放在家里了。", py: "Jīntiān wǒ gěi nǐ mǎi le yí ge xīguā, fàng zài jiālǐ le.", vi: "Hôm nay anh mua cho em một quả dưa hấu, để ở nhà rồi." } },
    { word: "正在", py: "zhèngzài", vi: "đang",
      ex: { zh: "老师正在教学生说汉语。", py: "Lǎoshī zhèngzài jiāo xuésheng shuō Hànyǔ.", vi: "Giáo viên đang dạy học sinh nói tiếng Trung." } },
    { word: "手机", py: "shǒujī", vi: "điện thoại di động",
      ex: { zh: "小雨的手机突然响了。", py: "Xiǎo Yǔ de shǒujī tūrán xiǎng le.", vi: "Điện thoại của Tiểu Vũ đột nhiên reo lên." } },
    { word: "洗", py: "xǐ", vi: "rửa, giặt",
      ex: { zh: "哥哥正在厨房洗西瓜。", py: "Gēge zhèngzài chúfáng xǐ xīguā.", vi: "Anh trai đang rửa dưa hấu trong bếp." } },
    { word: "告诉", py: "gàosu", vi: "nói cho biết, bảo",
      ex: { zh: "小雨回家以后，把今天的事情告诉了哥哥。", py: "Xiǎo Yǔ huí jiā yǐhòu, bǎ jīntiān de shìqing gàosu le gēge.", vi: "Sau khi về nhà, Tiểu Vũ kể cho anh trai nghe chuyện hôm nay." } },
    { word: "问题", py: "wèntí", vi: "vấn đề, câu hỏi",
      ex: { zh: "老师给大家一个问题。", py: "Lǎoshī gěi dàjiā yí ge wèntí.", vi: "Giáo viên đưa cho mọi người một câu hỏi." } },
  ],
  nodes: {
    // CẢNH 01 — TIẾT HỌC TIẾNG TRUNG
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "📍 Sáng nay · Lớp học tiếng Trung · Điện thoại của Tiểu Vũ đột nhiên reo giữa giờ học." },
        { kind: "quote", zh: "今天上午，小雨有一节汉语课。", py: "Jīntiān shàngwǔ, Xiǎo Yǔ yǒu yì jié Hànyǔ kè.", vi: "Sáng nay, Tiểu Vũ có một tiết học tiếng Trung." },
        { kind: "quote", zh: "老师正在教学生说汉语。", py: "Lǎoshī zhèngzài jiāo xuésheng shuō Hànyǔ.", vi: "Giáo viên đang dạy học sinh nói tiếng Trung." },
        { kind: "quote", zh: "小雨的手机突然响了。", py: "Xiǎo Yǔ de shǒujī tūrán xiǎng le.", vi: "Điện thoại của Tiểu Vũ đột nhiên reo lên." },
        { kind: "npc", speaker: "老师", zh: "上课的时候，别玩手机！", py: "Shàngkè de shíhou, bié wán shǒujī!", vi: "Trong giờ học, đừng chơi điện thoại!" },
        { kind: "quote", zh: "小雨马上把手机放进书包里。", py: "Xiǎo Yǔ mǎshàng bǎ shǒujī fàng jìn shūbāo lǐ.", vi: "Tiểu Vũ lập tức bỏ điện thoại vào trong cặp sách." },
      ],
      choices: [
        {
          label: "Tiếp tục tập trung nghe giảng",
          zh: "继续认真听课。", py: "Jìxù rènzhēn tīngkè.", vi: "Tiếp tục tập trung nghe giảng.",
          next: "02",
          analysis: { structure: "继续 + 认真 + Động từ", explain: "继续认真听课 = tiếp tục chăm chú nghe giảng: 继续 và 认真 đều đứng trước động từ." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "认真", py: "rènzhēn", vi: "chăm chú" }],
        },
        {
          label: "Lén lấy điện thoại ra xem tin nhắn",
          zh: "偷偷拿出手机看消息。", py: "Tōutōu náchū shǒujī kàn xiāoxi.", vi: "Lén lấy điện thoại ra xem tin nhắn.",
          next: "03",
          analysis: { structure: "Động từ + 出 (bổ ngữ xu hướng)", explain: "拿出手机 = lấy điện thoại ra: 出 chỉ hướng ra ngoài. 偷偷 = lén lút, đứng trước động từ." },
          vocab: [{ word: "偷偷", py: "tōutōu", vi: "lén lút" }, { word: "消息", py: "xiāoxi", vi: "tin nhắn" }],
        },
      ],
    },
    // CẢNH 02 — BÀI TẬP TRÊN LỚP
    "02": {
      id: "02",
      lines: [
        { kind: "quote", zh: "老师给大家一个问题。", py: "Lǎoshī gěi dàjiā yí ge wèntí.", vi: "Giáo viên đưa cho mọi người một câu hỏi." },
        { kind: "npc", speaker: "老师", zh: "谁可以帮助我回答这个问题？", py: "Shéi kěyǐ bāngzhù wǒ huídá zhège wèntí?", vi: "Ai có thể giúp tôi trả lời câu hỏi này?" },
        { kind: "quote", zh: "小雨举手回答，但是她说错了。", py: "Xiǎo Yǔ jǔ shǒu huídá, dànshì tā shuō cuò le.", vi: "Tiểu Vũ giơ tay trả lời, nhưng cô ấy đã nói sai." },
        { kind: "quote", zh: "老师没有生气，笑着说：", py: "Lǎoshī méiyǒu shēngqì, xiàozhe shuō:", vi: "Giáo viên không tức giận, mỉm cười nói:" },
        { kind: "npc", speaker: "老师", zh: "没关系，再试一次。", py: "Méi guānxi, zài shì yí cì.", vi: "Không sao, thử lại lần nữa nhé." },
      ],
      choices: [
        {
          label: "Tiếp tục suy nghĩ và trả lời",
          zh: "再想一想，然后回答。", py: "Zài xiǎng yi xiǎng, ránhòu huídá.", vi: "Tiếp tục suy nghĩ và trả lời.",
          next: "04",
          analysis: { structure: "再 + Động từ; Động từ + 一 + Động từ", explain: "再想一想 = nghĩ thêm một chút: 再 = lại/thêm, 想一想 = lặp động từ làm nhẹ ý. 然后 = sau đó." },
          vocab: [{ word: "想", py: "xiǎng", vi: "nghĩ" }, { word: "回答", py: "huídá", vi: "trả lời" }],
        },
        {
          label: "Nhờ bạn cùng lớp giúp đỡ",
          zh: "请同学帮助我。", py: "Qǐng tóngxué bāngzhù wǒ.", vi: "Nhờ bạn cùng lớp giúp đỡ.",
          next: "05",
          analysis: { structure: "请 + Người + Động từ", explain: "请同学帮助我 = nhờ bạn cùng lớp giúp tớ: 请 + người + hành động." },
          vocab: [{ word: "请", py: "qǐng", vi: "nhờ, mời" }, { word: "同学", py: "tóngxué", vi: "bạn học" }],
        },
      ],
    },
    // CẢNH 03 — TIN NHẮN BÍ MẬT
    "03": {
      id: "03",
      lines: [
        { kind: "quote", zh: "小雨打开手机，看见哥哥发来的消息。", py: "Xiǎo Yǔ dǎkāi shǒujī, kànjiàn gēge fā lái de xiāoxi.", vi: "Tiểu Vũ mở điện thoại và nhìn thấy tin nhắn anh trai gửi đến." },
        { kind: "npc", speaker: "哥哥", zh: "今天我给你买了一个西瓜，放在家里了。", py: "Jīntiān wǒ gěi nǐ mǎi le yí ge xīguā, fàng zài jiālǐ le.", vi: "Hôm nay anh mua cho em một quả dưa hấu, để ở nhà rồi." },
        { kind: "quote", zh: "小雨很高兴，想马上回复哥哥。", py: "Xiǎo Yǔ hěn gāoxìng, xiǎng mǎshàng huífù gēge.", vi: "Tiểu Vũ rất vui và muốn trả lời anh trai ngay lập tức." },
        { kind: "quote", zh: "但是老师看见了她的手机。", py: "Dànshì lǎoshī kànjiàn le tā de shǒujī.", vi: "Nhưng giáo viên đã nhìn thấy điện thoại của cô ấy." },
      ],
      choices: [
        {
          label: "Cất điện thoại và xin lỗi giáo viên",
          zh: "把手机收起来，对老师说对不起。", py: "Bǎ shǒujī shōu qǐlái, duì lǎoshī shuō duìbuqǐ.", vi: "Cất điện thoại và xin lỗi giáo viên.",
          next: "02",
          analysis: { structure: "把 + Tân ngữ + Động từ + 起来; 对 + Người + 说", explain: "把手机收起来 = cất điện thoại đi. 对老师说对不起 = nói xin lỗi với cô: 对 + người nghe đứng trước động từ." },
          vocab: [{ word: "收起来", py: "shōu qǐlái", vi: "cất đi" }, { word: "对不起", py: "duìbuqǐ", vi: "xin lỗi" }],
        },
        {
          label: "Tiếp tục nhắn tin cho anh trai",
          zh: "继续给哥哥发消息。", py: "Jìxù gěi gēge fā xiāoxi.", vi: "Tiếp tục nhắn tin cho anh trai.",
          next: "END_1",
          analysis: { structure: "继续 + 给 + Người + Động từ", explain: "继续给哥哥发消息 = tiếp tục nhắn tin cho anh: 继续 đứng trước cả cụm 给…发." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "发", py: "fā", vi: "gửi" }],
        },
      ],
    },
    // CẢNH 04 — MỘT CÂU TRẢ LỜI ĐÚNG
    "04": {
      id: "04",
      lines: [
        { kind: "quote", zh: "小雨想了一会儿，终于回答对了。", py: "Xiǎo Yǔ xiǎng le yíhuìr, zhōngyú huídá duì le.", vi: "Tiểu Vũ suy nghĩ một lúc và cuối cùng đã trả lời đúng." },
        { kind: "npc", speaker: "老师", zh: "很好！你今天学得不错。", py: "Hěn hǎo! Nǐ jīntiān xué de búcuò.", vi: "Rất tốt! Hôm nay em học khá tốt." },
        { kind: "quote", zh: "下课以后，小雨和小东一起走出教室。", py: "Xiàkè yǐhòu, Xiǎo Yǔ hé Xiǎo Dōng yìqǐ zǒu chū jiàoshì.", vi: "Sau giờ học, Tiểu Vũ và Tiểu Đông cùng đi ra khỏi lớp." },
        { kind: "quote", zh: "小雨突然发现，自己的手机不见了！", py: "Xiǎo Yǔ tūrán fāxiàn, zìjǐ de shǒujī bú jiàn le!", vi: "Tiểu Vũ đột nhiên phát hiện điện thoại của mình biến mất!" },
      ],
      choices: [
        {
          label: "Tìm điện thoại trong cặp sách",
          zh: "在书包里找手机。", py: "Zài shūbāo lǐ zhǎo shǒujī.", vi: "Tìm điện thoại trong cặp sách.",
          next: "06",
          analysis: { structure: "在 + Nơi chốn + Động từ", explain: "在书包里找手机 = tìm điện thoại trong cặp: nơi chốn 在书包里 đứng trước động từ 找." },
          vocab: [{ word: "书包", py: "shūbāo", vi: "cặp sách" }, { word: "找", py: "zhǎo", vi: "tìm" }],
        },
        {
          label: "Hỏi Tiểu Đông xem có nhìn thấy không",
          zh: "问小东有没有看见。", py: "Wèn Xiǎo Dōng yǒu méiyǒu kànjiàn.", vi: "Hỏi Tiểu Đông xem có nhìn thấy không.",
          next: "07",
          analysis: { structure: "有没有 + Động từ (hỏi chính phản)", explain: "问小东 = hỏi Tiểu Đông. 有没有看见 = có nhìn thấy không: dạng hỏi chính phản, không cần thêm 吗." },
          vocab: [{ word: "问", py: "wèn", vi: "hỏi" }, { word: "看见", py: "kànjiàn", vi: "nhìn thấy" }],
        },
      ],
    },
    // CẢNH 05 — BẠN CÙNG LỚP GIÚP ĐỠ
    "05": {
      id: "05",
      lines: [
        { kind: "quote", zh: "小雨问小丽：", py: "Xiǎo Yǔ wèn Xiǎo Lì:", vi: "Tiểu Vũ hỏi Tiểu Lệ:" },
        { kind: "pick", options: [
          { zh: "你可以我帮助回答这个问题吗？", py: "Nǐ kěyǐ wǒ bāngzhù huídá zhège wèntí ma?", vi: "Cậu có thể tớ giúp trả lời câu hỏi này không?", correct: false,
            analysis: { structure: "Sai vị trí 我", explain: "Người được giúp phải đứng ngay sau 帮助: 帮助我, không đứng trước 帮助." },
            vocab: [{ word: "帮助", py: "bāngzhù", vi: "giúp đỡ" }] },
          { zh: "你可以帮助我回答这个问题吗？", py: "Nǐ kěyǐ bāngzhù wǒ huídá zhège wèntí ma?", vi: "Cậu có thể giúp tớ trả lời câu hỏi này không?", correct: true,
            analysis: { structure: "可以 + 帮助 + Người + Động từ + 吗", explain: "帮助我回答 = giúp tớ trả lời: 帮助 + người được giúp + động từ. 这个问题 = câu hỏi này. 吗 ở cuối để hỏi có/không." },
            vocab: [{ word: "可以", py: "kěyǐ", vi: "có thể" }, { word: "帮助", py: "bāngzhù", vi: "giúp đỡ" }, { word: "问题", py: "wèntí", vi: "câu hỏi" }] },
          { zh: "你可以帮助我回答问题这个吗？", py: "Nǐ kěyǐ bāngzhù wǒ huídá wèntí zhège ma?", vi: "Cậu có thể giúp tớ trả lời câu hỏi này không (sai trật tự)?", correct: false,
            analysis: { structure: "Sai trật tự 这个", explain: "这个 (này) là từ chỉ định, phải đứng trước danh từ: 这个问题, không đặt sau 问题." },
            vocab: [{ word: "问题", py: "wèntí", vi: "câu hỏi" }] },
        ] },
        { kind: "npc", speaker: "小丽", zh: "当然可以！你先看看这本书。", py: "Dāngrán kěyǐ! Nǐ xiān kànkan zhè běn shū.", vi: "Tất nhiên rồi! Cậu xem quyển sách này trước đi." },
        { kind: "quote", zh: "小雨认真地看书，终于知道答案了。", py: "Xiǎo Yǔ rènzhēn de kàn shū, zhōngyú zhīdào dá'àn le.", vi: "Tiểu Vũ chăm chú đọc sách và cuối cùng đã biết đáp án." },
        { kind: "quote", zh: "下课以后，小雨发现自己的手机不见了。", py: "Xiàkè yǐhòu, Xiǎo Yǔ fāxiàn zìjǐ de shǒujī bú jiàn le.", vi: "Sau giờ học, Tiểu Vũ phát hiện điện thoại của mình biến mất." },
      ],
      choices: [
        {
          label: "Quay lại lớp học tìm điện thoại",
          zh: "回教室找手机。", py: "Huí jiàoshì zhǎo shǒujī.", vi: "Quay lại lớp học tìm điện thoại.",
          next: "06",
          analysis: { structure: "回 + Nơi chốn + Động từ", explain: "回教室找手机 = quay lại lớp tìm điện thoại: 回 + nơi chốn rồi đến mục đích 找." },
          vocab: [{ word: "回", py: "huí", vi: "về, quay lại" }, { word: "教室", py: "jiàoshì", vi: "lớp học" }],
        },
        {
          label: "Hỏi Tiểu Lệ có nhìn thấy điện thoại không",
          zh: "问小丽看见手机没有。", py: "Wèn Xiǎo Lì kànjiàn shǒujī méiyǒu.", vi: "Hỏi Tiểu Lệ có nhìn thấy điện thoại không.",
          next: "08",
          analysis: { structure: "Động từ + 没有 (hỏi đã… chưa)", explain: "看见手机没有 = đã thấy điện thoại chưa: 没有 ở cuối câu để hỏi hành động đã xảy ra chưa." },
          vocab: [{ word: "问", py: "wèn", vi: "hỏi" }, { word: "没有", py: "méiyǒu", vi: "chưa, không" }],
        },
      ],
    },
    // CẢNH 06 — CHIẾC CẶP SÁCH TRỐNG
    "06": {
      id: "06",
      lines: [
        { kind: "quote", zh: "小雨打开书包，找了很长时间。", py: "Xiǎo Yǔ dǎkāi shūbāo, zhǎo le hěn cháng shíjiān.", vi: "Tiểu Vũ mở cặp sách và tìm kiếm rất lâu." },
        { kind: "quote", zh: "可是，手机不在书包里。", py: "Kěshì, shǒujī bú zài shūbāo lǐ.", vi: "Nhưng điện thoại không ở trong cặp sách." },
        { kind: "npc", speaker: "小东", zh: "你是不是把手机放在教室里了？", py: "Nǐ shì bú shì bǎ shǒujī fàng zài jiàoshì lǐ le?", vi: "Có phải cậu đã để điện thoại trong lớp học không?" },
        { kind: "pick", options: [
          { zh: "我们回去看看吗！", py: "Wǒmen huíqù kànkan ma!", vi: "Chúng ta quay lại xem thử à!", correct: false,
            analysis: { structure: "Dùng sai 吗", explain: "Lời đề nghị dùng 吧, không dùng 吗 (trợ từ hỏi có/không)." },
            vocab: [{ word: "吧", py: "ba", vi: "nhé (đề nghị)" }] },
          { zh: "我们回去看吧看！", py: "Wǒmen huíqù kàn ba kàn!", vi: "Chúng ta quay lại xem nhé xem!", correct: false,
            analysis: { structure: "Sai vị trí 吧", explain: "吧 phải đứng cuối cả câu, sau 看看; không chen vào giữa động từ lặp." },
            vocab: [{ word: "吧", py: "ba", vi: "nhé (đề nghị)" }] },
          { zh: "我们回去看看吧！", py: "Wǒmen huíqù kànkan ba!", vi: "Chúng ta quay lại xem thử nhé!", correct: true,
            analysis: { structure: "回去 + Động từ lặp + 吧", explain: "回去 = quay lại. 看看 = xem thử một chút (lặp động từ làm nhẹ ý). 吧 cuối câu để đề nghị." },
            vocab: [{ word: "回去", py: "huíqù", vi: "quay lại" }, { word: "看看", py: "kànkan", vi: "xem thử" }] },
        ] },
      ],
      choices: [
        {
          label: "Quay lại lớp học",
          zh: "回教室去。", py: "Huí jiàoshì qù.", vi: "Quay lại lớp học.",
          next: "09",
          analysis: { structure: "回 + Nơi chốn + 去", explain: "回教室去 = quay lại lớp học: 去 đặt cuối để nhấn hướng đi." },
          vocab: [{ word: "回", py: "huí", vi: "về, quay lại" }, { word: "去", py: "qù", vi: "đi" }],
        },
        {
          label: "Đến phòng giáo viên hỏi",
          zh: "去老师办公室问问。", py: "Qù lǎoshī bàngōngshì wènwen.", vi: "Đến phòng giáo viên hỏi.",
          next: "10",
          analysis: { structure: "去 + Nơi chốn + Động từ lặp", explain: "去办公室问问 = đến văn phòng hỏi thử: 去 + nơi chốn rồi đến hành động; 问问 lặp động từ làm nhẹ ý." },
          vocab: [{ word: "办公室", py: "bàngōngshì", vi: "văn phòng" }, { word: "问", py: "wèn", vi: "hỏi" }],
        },
      ],
    },
    // CẢNH 07 — LỜI KỂ CỦA TIỂU ĐÔNG
    "07": {
      id: "07",
      lines: [
        { kind: "npc", speaker: "小东", zh: "我没有看见你的手机。", py: "Wǒ méiyǒu kànjiàn nǐ de shǒujī.", vi: "Tớ không nhìn thấy điện thoại của cậu." },
        { kind: "quote", zh: "他想了一会儿，又说：", py: "Tā xiǎng le yíhuìr, yòu shuō:", vi: "Cậu ấy suy nghĩ một lúc rồi hỏi:" },
        { kind: "npc", speaker: "小东", zh: "下课以前，你正在做什么？", py: "Xiàkè yǐqián, nǐ zhèngzài zuò shénme?", vi: "Trước khi tan học, cậu đang làm gì?" },
        { kind: "pick", options: [
          { zh: "我正在看老师写的字。", py: "Wǒ zhèngzài kàn lǎoshī xiě de zì.", vi: "Tớ đang xem chữ giáo viên viết.", correct: true,
            analysis: { structure: "正在 + Động từ; Người + Động từ + 的 + Danh từ", explain: "正在看 = đang xem: 正在 đứng trước động từ. 老师写的字 = chữ do giáo viên viết: mệnh đề + 的 + danh từ." },
            vocab: [{ word: "正在", py: "zhèngzài", vi: "đang" }, { word: "写", py: "xiě", vi: "viết" }, { word: "字", py: "zì", vi: "chữ" }] },
          { zh: "我看正在老师写的字。", py: "Wǒ kàn zhèngzài lǎoshī xiě de zì.", vi: "Tớ xem đang chữ giáo viên viết.", correct: false,
            analysis: { structure: "Sai vị trí 正在", explain: "正在 (đang) phải đứng trước động từ chính: 正在看, không đặt sau 看." },
            vocab: [{ word: "正在", py: "zhèngzài", vi: "đang" }] },
          { zh: "我正在看老师写字的。", py: "Wǒ zhèngzài kàn lǎoshī xiě zì de.", vi: "Tớ đang xem giáo viên viết chữ của.", correct: false,
            analysis: { structure: "Sai vị trí 的", explain: "的 nối mệnh đề với danh từ nó bổ nghĩa: 老师写的字, không đặt ở cuối câu." },
            vocab: [{ word: "的", py: "de", vi: "của, (nối định ngữ)" }] },
        ] },
        { kind: "npc", speaker: "小东", zh: "那我们先回教室找找吧。", py: "Nà wǒmen xiān huí jiàoshì zhǎozhao ba.", vi: "Vậy chúng ta quay lại lớp tìm thử trước nhé." },
      ],
      choices: [
        {
          label: "Cùng Tiểu Đông quay lại lớp",
          zh: "和小东一起回教室。", py: "Hé Xiǎo Dōng yìqǐ huí jiàoshì.", vi: "Cùng Tiểu Đông quay lại lớp.",
          next: "09",
          analysis: { structure: "和 + Người + 一起 + Động từ", explain: "和小东一起回教室 = cùng Tiểu Đông quay lại lớp: 和 + người và 一起 đứng trước động từ." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "回", py: "huí", vi: "quay lại" }],
        },
        {
          label: "Nhờ Tiểu Đông hỏi các bạn khác",
          zh: "请小东问问别的同学。", py: "Qǐng Xiǎo Dōng wènwen bié de tóngxué.", vi: "Nhờ Tiểu Đông hỏi các bạn khác.",
          next: "08",
          analysis: { structure: "请 + Người + Động từ; 别的 + Danh từ", explain: "请小东问问 = nhờ Tiểu Đông hỏi thử. 别的同学 = các bạn khác: 别的 đứng trước danh từ." },
          vocab: [{ word: "请", py: "qǐng", vi: "nhờ" }, { word: "别的", py: "bié de", vi: "khác" }],
        },
      ],
    },
    // CẢNH 08 — TIỂU LỆ NHỚ RA MỘT CHI TIẾT
    "08": {
      id: "08",
      lines: [
        { kind: "npc", speaker: "小丽", zh: "我好像看见你的手机了。", py: "Wǒ hǎoxiàng kànjiàn nǐ de shǒujī le.", vi: "Hình như tớ đã nhìn thấy điện thoại của cậu." },
        { kind: "quote", zh: "小雨马上问：", py: "Xiǎo Yǔ mǎshàng wèn:", vi: "Tiểu Vũ lập tức hỏi:" },
        { kind: "pick", options: [
          { zh: "哪里在？", py: "Nǎlǐ zài?", vi: "Đâu ở?", correct: false,
            analysis: { structure: "Sai trật tự", explain: "Hỏi nơi chốn dùng 在哪里: 在 đứng trước 哪里, không đảo thành 哪里在." },
            vocab: [{ word: "哪里", py: "nǎlǐ", vi: "ở đâu" }] },
          { zh: "在哪里？", py: "Zài nǎlǐ?", vi: "Ở đâu?", correct: true,
            analysis: { structure: "在 + 哪里 (hỏi nơi chốn)", explain: "在哪里 = ở đâu: 在 đứng trước từ nghi vấn 哪里 để hỏi nơi chốn." },
            vocab: [{ word: "在", py: "zài", vi: "ở" }, { word: "哪里", py: "nǎlǐ", vi: "ở đâu" }] },
          { zh: "在哪里吗？", py: "Zài nǎlǐ ma?", vi: "Ở đâu à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ nghi vấn 哪里 thì không thêm 吗 ở cuối." },
            vocab: [{ word: "哪里", py: "nǎlǐ", vi: "ở đâu" }] },
        ] },
        { kind: "npc", speaker: "小丽", zh: "刚才老师拿着一本书走出教室，你的手机可能在桌子上。", py: "Gāngcái lǎoshī názhe yì běn shū zǒu chū jiàoshì, nǐ de shǒujī kěnéng zài zhuōzi shàng.", vi: "Lúc nãy giáo viên cầm một quyển sách đi ra khỏi lớp, điện thoại của cậu có thể đang ở trên bàn." },
      ],
      choices: [
        {
          label: "Quay lại lớp kiểm tra",
          zh: "回教室检查一下。", py: "Huí jiàoshì jiǎnchá yíxià.", vi: "Quay lại lớp kiểm tra.",
          next: "09",
          analysis: { structure: "Động từ + 一下", explain: "检查一下 = kiểm tra một chút: 一下 đứng sau động từ để làm nhẹ ý. 回教室 = quay lại lớp." },
          vocab: [{ word: "检查", py: "jiǎnchá", vi: "kiểm tra" }, { word: "一下", py: "yíxià", vi: "một chút" }],
        },
        {
          label: "Đến phòng giáo viên hỏi",
          zh: "去办公室问老师。", py: "Qù bàngōngshì wèn lǎoshī.", vi: "Đến phòng giáo viên hỏi.",
          next: "10",
          analysis: { structure: "去 + Nơi chốn + Động từ + Người", explain: "去办公室问老师 = đến văn phòng hỏi cô: 问 + người được hỏi." },
          vocab: [{ word: "办公室", py: "bàngōngshì", vi: "văn phòng" }, { word: "问", py: "wèn", vi: "hỏi" }],
        },
      ],
    },
    // CẢNH 09 — ĐIỆN THOẠI Ở ĐÂU?
    "09": {
      id: "09",
      lines: [
        { kind: "quote", zh: "小雨回到教室，正在认真地找手机。", py: "Xiǎo Yǔ huí dào jiàoshì, zhèngzài rènzhēn de zhǎo shǒujī.", vi: "Tiểu Vũ quay lại lớp và đang chăm chú tìm điện thoại." },
        { kind: "quote", zh: "她看了桌子下面，也看了椅子旁边。", py: "Tā kàn le zhuōzi xiàmian, yě kàn le yǐzi pángbiān.", vi: "Cô ấy nhìn dưới bàn và cả bên cạnh ghế." },
        { kind: "quote", zh: "但是，还是没有找到。", py: "Dànshì, háishi méiyǒu zhǎodào.", vi: "Nhưng vẫn không tìm thấy." },
        { kind: "npc", speaker: "小东", zh: "别着急，我们再找一次。", py: "Bié zháojí, wǒmen zài zhǎo yí cì.", vi: "Đừng lo, chúng ta tìm lại một lần nữa." },
      ],
      choices: [
        {
          label: "Kiểm tra ngăn bàn của mình",
          zh: "检查一下自己的桌子。", py: "Jiǎnchá yíxià zìjǐ de zhuōzi.", vi: "Kiểm tra ngăn bàn của mình.",
          next: "11",
          analysis: { structure: "Động từ + 一下 + Tân ngữ", explain: "检查一下自己的桌子 = kiểm tra bàn của mình một chút: 自己的 = của chính mình." },
          vocab: [{ word: "自己", py: "zìjǐ", vi: "bản thân" }, { word: "桌子", py: "zhuōzi", vi: "bàn" }],
        },
        {
          label: "Hỏi giáo viên xem có ai nhặt được không",
          zh: "问老师有没有人捡到。", py: "Wèn lǎoshī yǒu méiyǒu rén jiǎn dào.", vi: "Hỏi giáo viên xem có ai nhặt được không.",
          next: "10",
          analysis: { structure: "有没有 + Người + Động từ + 到", explain: "有没有人捡到 = có ai nhặt được không: 到 là bổ ngữ kết quả (nhặt được)." },
          vocab: [{ word: "捡", py: "jiǎn", vi: "nhặt" }, { word: "有没有", py: "yǒu méiyǒu", vi: "có… không" }],
        },
      ],
    },
    // CẢNH 09R — ĐIỆN THOẠI Ở ĐÂU? (lần tìm thứ hai; không có trong bản gốc)
    "09R": {
      id: "09R",
      lines: [
        { kind: "quote", zh: "小雨回到教室，正在认真地找手机。", py: "Xiǎo Yǔ huí dào jiàoshì, zhèngzài rènzhēn de zhǎo shǒujī.", vi: "Tiểu Vũ quay lại lớp và đang chăm chú tìm điện thoại." },
        { kind: "quote", zh: "她看了桌子下面，也看了椅子旁边。", py: "Tā kàn le zhuōzi xiàmian, yě kàn le yǐzi pángbiān.", vi: "Cô ấy nhìn dưới bàn và cả bên cạnh ghế." },
        { kind: "quote", zh: "但是，还是没有找到。", py: "Dànshì, háishi méiyǒu zhǎodào.", vi: "Nhưng vẫn không tìm thấy." },
        { kind: "npc", speaker: "小东", zh: "别着急，我们再找一次。", py: "Bié zháojí, wǒmen zài zhǎo yí cì.", vi: "Đừng lo, chúng ta tìm lại một lần nữa." },
      ],
      choices: [
        {
          label: "Hỏi giáo viên xem có ai nhặt được không",
          zh: "问老师有没有人捡到。", py: "Wèn lǎoshī yǒu méiyǒu rén jiǎn dào.", vi: "Hỏi giáo viên xem có ai nhặt được không.",
          next: "10",
          analysis: { structure: "有没有 + Người + Động từ + 到", explain: "有没有人捡到 = có ai nhặt được không: 到 là bổ ngữ kết quả (nhặt được)." },
          vocab: [{ word: "捡", py: "jiǎn", vi: "nhặt" }, { word: "有没有", py: "yǒu méiyǒu", vi: "có… không" }],
        },
      ],
    },
    // CẢNH 10 — PHÒNG GIÁO VIÊN
    "10": {
      id: "10",
      lines: [
        { kind: "quote", zh: "小雨和小东来到老师的办公室。", py: "Xiǎo Yǔ hé Xiǎo Dōng lái dào lǎoshī de bàngōngshì.", vi: "Tiểu Vũ và Tiểu Đông đến văn phòng giáo viên." },
        { kind: "pick", options: [
          { zh: "老师，您看见我手机的了吗？", py: "Lǎoshī, nín kànjiàn wǒ shǒujī de le ma?", vi: "Thưa cô, cô có nhìn thấy em điện thoại của rồi không?", correct: false,
            analysis: { structure: "Sai vị trí 的", explain: "的 nằm giữa người sở hữu và danh từ: 我的手机, không đặt sau 手机." },
            vocab: [{ word: "的", py: "de", vi: "của" }] },
          { zh: "老师，您我的手机看见了吗？", py: "Lǎoshī, nín wǒ de shǒujī kànjiàn le ma?", vi: "Thưa cô, cô điện thoại của em nhìn thấy rồi không?", correct: false,
            analysis: { structure: "Sai vị trí tân ngữ", explain: "Tân ngữ 我的手机 đứng sau động từ 看见, không đứng trước." },
            vocab: [{ word: "看见", py: "kànjiàn", vi: "nhìn thấy" }] },
          { zh: "老师，您看见我的手机了吗？", py: "Lǎoshī, nín kànjiàn wǒ de shǒujī le ma?", vi: "Thưa cô, cô có nhìn thấy điện thoại của em không ạ?", correct: true,
            analysis: { structure: "Động từ + 了 + 吗; 我的手机", explain: "看见了吗 = đã thấy chưa: 了 sau động từ báo việc đã xảy ra, 吗 hỏi có/không. 我的手机 = điện thoại của em. 您 là cách xưng kính trọng." },
            vocab: [{ word: "您", py: "nín", vi: "ngài, cô/thầy" }, { word: "看见", py: "kànjiàn", vi: "nhìn thấy" }, { word: "手机", py: "shǒujī", vi: "điện thoại" }] },
        ] },
        { kind: "npc", speaker: "老师", zh: "刚才我在教室里看见两个手机，但是不知道是谁的。", py: "Gāngcái wǒ zài jiàoshì lǐ kànjiàn liǎng ge shǒujī, dànshì bù zhīdào shì shéi de.", vi: "Lúc nãy cô nhìn thấy hai chiếc điện thoại trong lớp, nhưng không biết là của ai." },
        { kind: "quote", zh: "老师正在办公室里找那两个手机。", py: "Lǎoshī zhèngzài bàngōngshì lǐ zhǎo nà liǎng ge shǒujī.", vi: "Giáo viên đang tìm hai chiếc điện thoại đó trong văn phòng." },
      ],
      choices: [
        {
          label: "Mô tả chiếc điện thoại cho giáo viên",
          zh: "告诉老师手机是什么样的。", py: "Gàosu lǎoshī shǒujī shì shénme yàng de.", vi: "Mô tả chiếc điện thoại cho giáo viên.",
          next: "12",
          analysis: { structure: "告诉 + Người + (nội dung)", explain: "告诉老师 = nói cho cô biết; 什么样的 = như thế nào (hỏi đặc điểm)." },
          vocab: [{ word: "告诉", py: "gàosu", vi: "nói cho biết" }, { word: "什么样", py: "shénme yàng", vi: "như thế nào" }],
        },
        {
          label: "Nhờ giáo viên gọi vào số điện thoại của mình",
          zh: "请老师给我的手机打电话。", py: "Qǐng lǎoshī gěi wǒ de shǒujī dǎ diànhuà.", vi: "Nhờ giáo viên gọi vào số điện thoại của mình.",
          next: "13",
          analysis: { structure: "请 + Người + 给 + Đối tượng + 打电话", explain: "请老师 = nhờ cô; 给我的手机打电话 = gọi vào điện thoại của em: 给 + đối tượng đứng trước 打电话." },
          vocab: [{ word: "请", py: "qǐng", vi: "nhờ" }, { word: "打电话", py: "dǎ diànhuà", vi: "gọi điện" }],
        },
      ],
    },
    // CẢNH 11 — MỘT ĐIỀU BẤT NGỜ
    "11": {
      id: "11",
      lines: [
        { kind: "quote", zh: "小雨打开自己的桌子，发现里面有一本书和一个鸡蛋。", py: "Xiǎo Yǔ dǎkāi zìjǐ de zhuōzi, fāxiàn lǐmiàn yǒu yì běn shū hé yí ge jīdàn.", vi: "Tiểu Vũ mở ngăn bàn của mình và phát hiện bên trong có một quyển sách và một quả trứng gà." },
        { kind: "quote", zh: "她很奇怪：", py: "Tā hěn qíguài:", vi: "Cô ấy rất ngạc nhiên:" },
        { kind: "pick", options: [
          { zh: "谁鸡蛋把放在这里了？", py: "Shéi jīdàn bǎ fàng zài zhèlǐ le?", vi: "Ai trứng gà đã đặt ở đây rồi?", correct: false,
            analysis: { structure: "Sai vị trí 把", explain: "把 phải đứng trước tân ngữ: 把鸡蛋, rồi mới đến động từ 放." },
            vocab: [{ word: "把", py: "bǎ", vi: "(đưa tân ngữ ra trước)" }] },
          { zh: "谁把鸡蛋放在这里了？", py: "Shéi bǎ jīdàn fàng zài zhèlǐ le?", vi: "Ai đã đặt trứng gà ở đây vậy?", correct: true,
            analysis: { structure: "谁 + 把 + Tân ngữ + Động từ + 在 + Nơi chốn + 了", explain: "Câu chữ 把: 谁把鸡蛋放在这里了 = ai đã đặt trứng ở đây. 把 + vật + động từ + 在 + nơi chốn + 了." },
            vocab: [{ word: "把", py: "bǎ", vi: "(đưa tân ngữ ra trước)" }, { word: "放", py: "fàng", vi: "đặt, để" }, { word: "鸡蛋", py: "jīdàn", vi: "trứng gà" }] },
          { zh: "谁把放鸡蛋在这里了？", py: "Shéi bǎ fàng jīdàn zài zhèlǐ le?", vi: "Ai đã đặt trứng gà ở đây rồi (sai trật tự)?", correct: false,
            analysis: { structure: "Sai trật tự trong câu chữ 把", explain: "Sau 把 là tân ngữ (鸡蛋), động từ 放 đứng sau tân ngữ, không đứng ngay sau 把." },
            vocab: [{ word: "放", py: "fàng", vi: "đặt, để" }] },
        ] },
        { kind: "quote", zh: "小东笑了，说：", py: "Xiǎo Dōng xiào le, shuō:", vi: "Tiểu Đông cười và nói:" },
        { kind: "npc", speaker: "小东", zh: "这是我早上带来的鸡蛋，我忘了拿走！", py: "Zhè shì wǒ zǎoshang dài lái de jīdàn, wǒ wàng le ná zǒu!", vi: "Đây là quả trứng tớ mang đến sáng nay, tớ quên lấy đi!" },
        { kind: "quote", zh: "但是，手机还是没有找到。", py: "Dànshì, shǒujī háishi méiyǒu zhǎodào.", vi: "Nhưng điện thoại vẫn chưa được tìm thấy." },
      ],
      choices: [
        {
          label: "Tiếp tục tìm trong lớp",
          zh: "继续在教室里找。", py: "Jìxù zài jiàoshì lǐ zhǎo.", vi: "Tiếp tục tìm trong lớp.",
          next: "09R",
          analysis: { structure: "继续 + 在 + Nơi chốn + Động từ", explain: "继续在教室里找 = tiếp tục tìm trong lớp: 继续 đứng trước cả cụm 在…找." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "教室", py: "jiàoshì", vi: "lớp học" }],
        },
        {
          label: "Đến phòng giáo viên nhờ giúp đỡ",
          zh: "去办公室请老师帮助。", py: "Qù bàngōngshì qǐng lǎoshī bāngzhù.", vi: "Đến phòng giáo viên nhờ giúp đỡ.",
          next: "10",
          analysis: { structure: "去 + Nơi chốn + 请 + Người + Động từ", explain: "去办公室 = đến văn phòng; 请老师帮助 = nhờ cô giúp đỡ." },
          vocab: [{ word: "请", py: "qǐng", vi: "nhờ" }, { word: "帮助", py: "bāngzhù", vi: "giúp đỡ" }],
        },
      ],
    },
    // CẢNH 12 — MÔ TẢ CHIẾC ĐIỆN THOẠI
    "12": {
      id: "12",
      lines: [
        { kind: "quote", zh: "小雨告诉老师：", py: "Xiǎo Yǔ gàosu lǎoshī:", vi: "Tiểu Vũ nói với giáo viên:" },
        { kind: "pick", options: [
          { zh: "我的手机是黑色的，上面有一个小花。", py: "Wǒ de shǒujī shì hēisè de, shàngmiàn yǒu yí ge xiǎo huā.", vi: "Điện thoại của em màu đen, trên đó có một bông hoa nhỏ.", correct: true,
            analysis: { structure: "是…的; 上面有 + Số lượng + Danh từ", explain: "是黑色的 = có màu đen (是…的 nói về đặc điểm). 上面有 = ở trên có: từ chỉ nơi chốn + 有 + vật." },
            vocab: [{ word: "黑色", py: "hēisè", vi: "màu đen" }, { word: "上面", py: "shàngmiàn", vi: "phía trên" }] },
          { zh: "我的手机黑色是的，上面有一个小花。", py: "Wǒ de shǒujī hēisè shì de, shàngmiàn yǒu yí ge xiǎo huā.", vi: "Điện thoại của em đen là, trên đó có một bông hoa nhỏ.", correct: false,
            analysis: { structure: "Sai trật tự 是…的", explain: "是 đứng trước thành phần miêu tả, 的 đứng cuối: 是黑色的, không đảo thành 黑色是的." },
            vocab: [{ word: "是…的", py: "shì…de", vi: "là… (miêu tả)" }] },
          { zh: "我的手机是黑色的，有上面一个小花。", py: "Wǒ de shǒujī shì hēisè de, yǒu shàngmiàn yí ge xiǎo huā.", vi: "Điện thoại của em màu đen, có trên đó một bông hoa nhỏ.", correct: false,
            analysis: { structure: "Sai vị trí từ chỉ nơi chốn", explain: "Từ chỉ nơi chốn 上面 đứng trước 有: 上面有…, không đặt sau 有." },
            vocab: [{ word: "上面", py: "shàngmiàn", vi: "phía trên" }] },
        ] },
        { kind: "quote", zh: "老师想了一会儿，说：", py: "Lǎoshī xiǎng le yíhuìr, shuō:", vi: "Giáo viên suy nghĩ một lúc rồi nói:" },
        { kind: "npc", speaker: "老师", zh: "这里有两个黑色的手机，你看看哪个是你的。", py: "Zhèlǐ yǒu liǎng ge hēisè de shǒujī, nǐ kànkan nǎ ge shì nǐ de.", vi: "Ở đây có hai chiếc điện thoại màu đen, em xem chiếc nào là của em." },
        { kind: "quote", zh: "她打开抽屉，拿出两个黑色的手机。", py: "Tā dǎkāi chōuti, ná chū liǎng ge hēisè de shǒujī.", vi: "Cô mở ngăn kéo và lấy ra hai chiếc điện thoại màu đen." },
      ],
      choices: [
        {
          label: "Chọn chiếc có bông hoa nhỏ và kiểm tra",
          zh: "选有小花的那个，再检查一下。", py: "Xuǎn yǒu xiǎo huā de nàge, zài jiǎnchá yíxià.", vi: "Chọn chiếc có bông hoa nhỏ và kiểm tra.",
          next: "14",
          analysis: { structure: "…的 + 那个", explain: "有小花的那个 = cái có bông hoa nhỏ: mệnh đề + 的 + 那个. 再检查一下 = rồi kiểm tra thêm." },
          vocab: [{ word: "选", py: "xuǎn", vi: "chọn" }, { word: "检查", py: "jiǎnchá", vi: "kiểm tra" }],
        },
        {
          label: "Cầm chiếc còn lại lên xem kỹ",
          zh: "拿起另一个仔细看看。", py: "Ná qǐ lìng yí ge zǐxì kànkan.", vi: "Cầm chiếc còn lại lên xem kỹ.",
          next: "15",
          analysis: { structure: "Động từ + 起 + 另一个", explain: "拿起 = cầm lên; 另一个 = cái còn lại; 仔细看看 = nhìn kỹ (lặp động từ)." },
          vocab: [{ word: "拿起", py: "ná qǐ", vi: "cầm lên" }, { word: "仔细", py: "zǐxì", vi: "kỹ lưỡng" }],
        },
      ],
    },
    // CẢNH 13 — CUỘC GỌI BẤT NGỜ
    "13": {
      id: "13",
      lines: [
        { kind: "quote", zh: "老师用自己的手机给小雨的手机打电话。", py: "Lǎoshī yòng zìjǐ de shǒujī gěi Xiǎo Yǔ de shǒujī dǎ diànhuà.", vi: "Giáo viên dùng điện thoại của mình gọi vào điện thoại của Tiểu Vũ." },
        { kind: "quote", zh: "突然，办公室外面传来了手机的声音。", py: "Tūrán, bàngōngshì wàimiàn chuán lái le shǒujī de shēngyīn.", vi: "Đột nhiên, bên ngoài văn phòng vang lên tiếng chuông điện thoại." },
        { kind: "quote", zh: "小雨和小东马上走出去。", py: "Xiǎo Yǔ hé Xiǎo Dōng mǎshàng zǒu chūqù.", vi: "Tiểu Vũ và Tiểu Đông lập tức đi ra ngoài." },
        { kind: "quote", zh: "他们发现手机在一个椅子下面。", py: "Tāmen fāxiàn shǒujī zài yí ge yǐzi xiàmian.", vi: "Họ phát hiện điện thoại ở dưới một chiếc ghế." },
      ],
      choices: [
        {
          label: "Nhặt điện thoại lên và kiểm tra",
          zh: "拿起手机检查一下。", py: "Ná qǐ shǒujī jiǎnchá yíxià.", vi: "Nhặt điện thoại lên và kiểm tra.",
          next: "14",
          analysis: { structure: "Động từ + 起 + Tân ngữ + 一下", explain: "拿起手机 = cầm điện thoại lên; 检查一下 = kiểm tra một chút." },
          vocab: [{ word: "拿起", py: "ná qǐ", vi: "cầm lên" }, { word: "检查", py: "jiǎnchá", vi: "kiểm tra" }],
        },
        {
          label: "Hỏi giáo viên vì sao điện thoại lại ở đó",
          zh: "问老师手机为什么在那里。", py: "Wèn lǎoshī shǒujī wèishénme zài nàlǐ.", vi: "Hỏi giáo viên vì sao điện thoại lại ở đó.",
          next: "14",
          analysis: { structure: "问 + Người + (câu hỏi gián tiếp)", explain: "问老师 + 手机为什么在那里 = hỏi cô vì sao điện thoại ở đó: 为什么 đứng trước 在那里." },
          vocab: [{ word: "为什么", py: "wèishénme", vi: "vì sao" }, { word: "那里", py: "nàlǐ", vi: "ở đó" }],
        },
      ],
    },
    // CẢNH 14 — TÌM LẠI ĐIỆN THOẠI
    "14": {
      id: "14",
      lines: [
        { kind: "quote", zh: "小雨拿起手机，发现这真的是自己的手机。原来下课的时候，它从没拉好的书包里掉了出来。", py: "Xiǎo Yǔ ná qǐ shǒujī, fāxiàn zhè zhēn de shì zìjǐ de shǒujī. Yuánlái xiàkè de shíhou, tā cóng méi lā hǎo de shūbāo lǐ diào le chūlái.", vi: "Tiểu Vũ cầm điện thoại lên và phát hiện đây đúng là điện thoại của mình. Hóa ra lúc tan học, nó rơi ra khỏi chiếc cặp chưa kéo khóa." },
        { kind: "quote", zh: "她高兴地说：", py: "Tā gāoxìng de shuō:", vi: "Cô ấy vui vẻ nói:" },
        { kind: "pick", options: [
          { zh: "找到终于了！", py: "Zhǎodào zhōngyú le!", vi: "Tìm thấy cuối cùng rồi!", correct: false,
            analysis: { structure: "Sai vị trí 终于", explain: "Phó từ 终于 đứng trước động từ: 终于找到, không đặt sau." },
            vocab: [{ word: "终于", py: "zhōngyú", vi: "cuối cùng" }] },
          { zh: "终于找了到！", py: "Zhōngyú zhǎo le dào!", vi: "Cuối cùng tìm rồi thấy!", correct: false,
            analysis: { structure: "Sai vị trí 了", explain: "找到 là cụm động từ + bổ ngữ kết quả, 了 đặt sau cả cụm: 找到了, không chen vào giữa." },
            vocab: [{ word: "找到", py: "zhǎodào", vi: "tìm thấy" }] },
          { zh: "终于找到了！", py: "Zhōngyú zhǎodào le!", vi: "Cuối cùng cũng tìm thấy rồi!", correct: true,
            analysis: { structure: "终于 + Động từ + 到 + 了", explain: "终于 = cuối cùng (sau quá trình dài). 找到 = tìm thấy (到 là bổ ngữ kết quả). 了 báo kết quả đã xảy ra." },
            vocab: [{ word: "终于", py: "zhōngyú", vi: "cuối cùng" }, { word: "找到", py: "zhǎodào", vi: "tìm thấy" }] },
        ] },
        { kind: "npc", speaker: "老师", zh: "以后记得把书包拉好，别让手机掉出来。", py: "Yǐhòu jìde bǎ shūbāo lā hǎo, bié ràng shǒujī diào chūlái.", vi: "Sau này nhớ kéo khóa cặp cho kỹ, đừng để điện thoại rơi ra ngoài nhé." },
        { kind: "pick", options: [
          { zh: "谢谢老师，谢谢也小东！", py: "Xièxie lǎoshī, xièxie yě Xiǎo Dōng!", vi: "Cảm ơn cô, cảm ơn cũng Tiểu Đông!", correct: false,
            analysis: { structure: "Sai vị trí 也", explain: "也 (cũng) phải đứng trước động từ: 也谢谢, không đặt sau động từ." },
            vocab: [{ word: "也", py: "yě", vi: "cũng" }] },
          { zh: "谢谢老师，也谢谢小东！", py: "Xièxie lǎoshī, yě xièxie Xiǎo Dōng!", vi: "Em cảm ơn cô, cũng cảm ơn Tiểu Đông!", correct: true,
            analysis: { structure: "谢谢 + Người; 也 + Động từ", explain: "谢谢老师 = cảm ơn cô. 也谢谢小东 = cũng cảm ơn Tiểu Đông: 也 (cũng) đứng trước động từ." },
            vocab: [{ word: "谢谢", py: "xièxie", vi: "cảm ơn" }, { word: "也", py: "yě", vi: "cũng" }] },
          { zh: "谢谢老师，小东也谢谢！", py: "Xièxie lǎoshī, Xiǎo Dōng yě xièxie!", vi: "Cảm ơn cô, Tiểu Đông cũng cảm ơn!", correct: false,
            analysis: { structure: "Thiếu tân ngữ, đổi nghĩa", explain: "Người được cảm ơn phải đứng sau động từ: 也谢谢小东. Đặt 小东 trước thì thành 'Tiểu Đông cũng cảm ơn' và thiếu người nhận." },
            vocab: [{ word: "谢谢", py: "xièxie", vi: "cảm ơn" }] },
        ] },
      ],
      choices: [
        {
          label: "Mời Tiểu Đông đi ăn cùng mình",
          zh: "请小东和我一起吃饭。", py: "Qǐng Xiǎo Dōng hé wǒ yìqǐ chīfàn.", vi: "Mời Tiểu Đông đi ăn cùng mình.",
          next: "END_2",
          analysis: { structure: "请 + Người + 和 + Người + 一起 + Động từ", explain: "请小东 = mời Tiểu Đông; 和我一起吃饭 = cùng em ăn cơm: 和 + người và 一起 đứng trước động từ." },
          vocab: [{ word: "请", py: "qǐng", vi: "mời" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
        {
          label: "Về nhà kể chuyện này cho anh trai",
          zh: "回家把这件事告诉哥哥。", py: "Huí jiā bǎ zhè jiàn shì gàosu gēge.", vi: "Về nhà kể chuyện này cho anh trai.",
          next: "END_3",
          analysis: { structure: "把 + Tân ngữ + 告诉 + Người", explain: "把这件事告诉哥哥 = kể chuyện này cho anh: câu chữ 把 + động từ 告诉 + người nghe. 件 là lượng từ của 事." },
          vocab: [{ word: "告诉", py: "gàosu", vi: "nói cho biết" }, { word: "件", py: "jiàn", vi: "(lượng từ cho việc)" }],
        },
      ],
    },
    // CẢNH 15 — MỘT CHIẾC ĐIỆN THOẠI KHÁC
    "15": {
      id: "15",
      lines: [
        { kind: "quote", zh: "小雨仔细看了看，发现这个手机上没有小花，不是自己的。", py: "Xiǎo Yǔ zǐxì kàn le kàn, fāxiàn zhège shǒujī shàngmiàn méiyǒu xiǎo huā, bú shì zìjǐ de.", vi: "Tiểu Vũ nhìn kỹ và phát hiện chiếc điện thoại này không có bông hoa nhỏ, không phải của mình." },
        { kind: "npc", speaker: "老师", zh: "可能是别的学生忘在这里了。", py: "Kěnéng shì bié de xuésheng wàng zài zhèlǐ le.", vi: "Có thể một học sinh khác đã bỏ quên ở đây." },
        { kind: "npc", speaker: "小东", zh: "我们应该把手机交给老师。", py: "Wǒmen yīnggāi bǎ shǒujī jiāo gěi lǎoshī.", vi: "Chúng ta nên giao điện thoại cho giáo viên." },
      ],
      choices: [
        {
          label: "Để giáo viên giữ chiếc điện thoại và tiếp tục tìm",
          zh: "把手机给老师，继续找自己的。", py: "Bǎ shǒujī gěi lǎoshī, jìxù zhǎo zìjǐ de.", vi: "Để giáo viên giữ chiếc điện thoại và tiếp tục tìm.",
          next: "13",
          analysis: { structure: "把 + Tân ngữ + 给 + Người; 自己的", explain: "把手机给老师 = đưa điện thoại cho cô. 找自己的 = tìm cái của mình: 自己的 = của chính mình." },
          vocab: [{ word: "给", py: "gěi", vi: "đưa, cho" }, { word: "自己", py: "zìjǐ", vi: "bản thân" }],
        },
        {
          label: "Cùng giáo viên tìm chủ nhân chiếc điện thoại",
          zh: "和老师一起找手机的主人。", py: "Hé lǎoshī yìqǐ zhǎo shǒujī de zhǔrén.", vi: "Cùng giáo viên tìm chủ nhân chiếc điện thoại.",
          next: "END_4",
          analysis: { structure: "和 + Người + 一起 + Động từ; 手机的主人", explain: "和老师一起找 = cùng cô đi tìm. 手机的主人 = chủ nhân chiếc điện thoại: 的 nối vật với người sở hữu." },
          vocab: [{ word: "主人", py: "zhǔrén", vi: "chủ nhân" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
      ],
    },
    // KẾT THÚC 1 — MỘT BÀI HỌC TRONG GIỜ HỌC
    "END_1": {
      id: "END_1",
      ending: { title: "课堂上的一课", titleVi: "Một bài học trong giờ học" },
      lines: [
        { kind: "quote", zh: "老师看见小雨一直玩手机，很认真地告诉她：", py: "Lǎoshī kànjiàn Xiǎo Yǔ yìzhí wán shǒujī, hěn rènzhēn de gàosu tā:", vi: "Giáo viên nhìn thấy Tiểu Vũ liên tục chơi điện thoại và nghiêm túc nhắc nhở cô:" },
        { kind: "npc", speaker: "老师", zh: "上课的时候，别玩手机。", py: "Shàngkè de shíhou, bié wán shǒujī.", vi: "Trong giờ học, đừng chơi điện thoại." },
        { kind: "quote", zh: "小雨觉得不好意思，马上把手机放进书包。", py: "Xiǎo Yǔ juéde bù hǎoyìsi, mǎshàng bǎ shǒujī fàng jìn shūbāo.", vi: "Tiểu Vũ cảm thấy ngại và lập tức bỏ điện thoại vào cặp." },
        { kind: "quote", zh: "从那天开始，她决定上课的时候认真学习。", py: "Cóng nà tiān kāishǐ, tā juédìng shàngkè de shíhou rènzhēn xuéxí.", vi: "Từ ngày hôm đó, cô quyết định chăm chú học tập trong giờ học." },
      ],
    },
    // KẾT THÚC 2 — MỘT BỮA ĂN VUI VẺ
    "END_2": {
      id: "END_2",
      ending: { title: "快乐的一餐", titleVi: "Một bữa ăn vui vẻ" },
      lines: [
        { kind: "quote", zh: "小雨和小东一起去吃饭。", py: "Xiǎo Yǔ hé Xiǎo Dōng yìqǐ qù chīfàn.", vi: "Tiểu Vũ và Tiểu Đông cùng đi ăn." },
        { kind: "quote", zh: "小雨买了鸡蛋和西瓜，请小东一起吃。", py: "Xiǎo Yǔ mǎi le jīdàn hé xīguā, qǐng Xiǎo Dōng yìqǐ chī.", vi: "Tiểu Vũ mua trứng gà và dưa hấu, mời Tiểu Đông cùng ăn." },
        { kind: "npc", speaker: "小东", zh: "谢谢你！今天我也很开心。", py: "Xièxie nǐ! Jīntiān wǒ yě hěn kāixīn.", vi: "Cảm ơn cậu! Hôm nay tớ cũng rất vui." },
        { kind: "quote", zh: "他们决定以后一起学习汉语。", py: "Tāmen juédìng yǐhòu yìqǐ xuéxí Hànyǔ.", vi: "Họ quyết định sau này sẽ cùng nhau học tiếng Trung." },
      ],
    },
    // KẾT THÚC 3 — KỂ CHUYỆN CHO ANH TRAI
    "END_3": {
      id: "END_3",
      ending: { title: "告诉哥哥", titleVi: "Kể chuyện cho anh trai" },
      lines: [
        { kind: "quote", zh: "小雨回家以后，把今天的事情告诉了哥哥。", py: "Xiǎo Yǔ huí jiā yǐhòu, bǎ jīntiān de shìqing gàosu le gēge.", vi: "Sau khi về nhà, Tiểu Vũ kể cho anh trai nghe chuyện hôm nay." },
        { kind: "npc", speaker: "哥哥", zh: "以后记得把书包拉好！", py: "Yǐhòu jìde bǎ shūbāo lā hǎo!", vi: "Sau này nhớ kéo khóa cặp cho kỹ nhé!" },
        { kind: "pick", options: [
          { zh: "我知道了，谢谢哥哥！", py: "Wǒ zhīdào le, xièxie gēge!", vi: "Em biết rồi, cảm ơn anh!", correct: true,
            analysis: { structure: "知道了; 谢谢 + Người", explain: "我知道了 = em biết rồi (了 báo đã hiểu). 谢谢哥哥 = cảm ơn anh: động từ 谢谢 đứng trước người được cảm ơn." },
            vocab: [{ word: "知道", py: "zhīdào", vi: "biết" }, { word: "谢谢", py: "xièxie", vi: "cảm ơn" }] },
          { zh: "我知道了，哥哥谢谢！", py: "Wǒ zhīdào le, gēge xièxie!", vi: "Em biết rồi, anh cảm ơn!", correct: false,
            analysis: { structure: "Sai trật tự 谢谢", explain: "Động từ 谢谢 đứng trước đối tượng: 谢谢哥哥. Đảo lại thành 'anh cảm ơn' và thiếu người nhận." },
            vocab: [{ word: "谢谢", py: "xièxie", vi: "cảm ơn" }] },
          { zh: "我知道了，谢谢的哥哥！", py: "Wǒ zhīdào le, xièxie de gēge!", vi: "Em biết rồi, cảm ơn của anh!", correct: false,
            analysis: { structure: "Thừa 的", explain: "Sau 谢谢 là người được cảm ơn, không cần 的 ở giữa." },
            vocab: [{ word: "的", py: "de", vi: "của" }] },
        ] },
        { kind: "quote", zh: "哥哥正在厨房洗西瓜，听了以后说：", py: "Gēge zhèngzài chúfáng xǐ xīguā, tīng le yǐhòu shuō:", vi: "Anh trai đang rửa dưa hấu trong bếp, nghe xong liền nói:" },
        { kind: "npc", speaker: "哥哥", zh: "来吧，我们一起吃西瓜！", py: "Lái ba, wǒmen yìqǐ chī xīguā!", vi: "Lại đây, chúng ta cùng ăn dưa hấu nào!" },
      ],
    },
    // KẾT THÚC 4 — GIÚP ĐỠ MỘT NGƯỜI BẠN
    "END_4": {
      id: "END_4",
      ending: { title: "帮助一个朋友", titleVi: "Giúp đỡ một người bạn" },
      lines: [
        { kind: "quote", zh: "小雨和老师一起找到了手机的主人。", py: "Xiǎo Yǔ hé lǎoshī yìqǐ zhǎodào le shǒujī de zhǔrén.", vi: "Tiểu Vũ và giáo viên cùng tìm được chủ nhân của chiếc điện thoại." },
        { kind: "quote", zh: "原来是一个一年级的学生。", py: "Yuánlái shì yí ge yì niánjí de xuésheng.", vi: "Hóa ra đó là một học sinh năm nhất." },
        { kind: "quote", zh: "那个学生很高兴，说：", py: "Nà ge xuésheng hěn gāoxìng, shuō:", vi: "Học sinh đó rất vui và nói:" },
        { kind: "npc", speaker: "学生", zh: "谢谢你们帮助我！", py: "Xièxie nǐmen bāngzhù wǒ!", vi: "Cảm ơn mọi người đã giúp em!" },
        { kind: "quote", zh: "后来，她自己的手机也在教室的椅子下面找到了。小雨觉得帮助别人是一件很开心的事情。", py: "Hòulái, tā zìjǐ de shǒujī yě zài jiàoshì de yǐzi xiàmian zhǎodào le. Xiǎo Yǔ juéde bāngzhù biérén shì yí jiàn hěn kāixīn de shìqing.", vi: "Sau đó, điện thoại của chính cô ấy cũng được tìm thấy dưới chiếc ghế trong lớp. Tiểu Vũ cảm thấy giúp đỡ người khác là một việc rất vui." },
      ],
    },
  },
};
