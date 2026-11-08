import type { BranchingStory } from "../../types";

// Truyện "Buổi Hòa Nhạc Cuối Tuần" (HSK 2, Bài 11 Câu chuyện 2), rẽ nhánh với 4 kết thúc. Người chơi vào vai 小美.
// Bản gốc của người viết: src/imports/stories/buoi-hoa-nhac-cuoi-tuan.md (tên gốc: 《周末的音乐会》)
// Mọi câu thoại của 小美 là bước chọn (pick) 3 đáp án có chấm điểm.
// Bổ sung hai cảnh đệm 03A và 04B để nối mạch hợp lý và đảm bảo đủ 11 flashcards Bài 11.
export const BUOI_HOA_NHAC_CUOI_TUAN: BranchingStory = {
  start: "01",
  characters: {
    "妈妈": "👩",
    "女孩": "👧",
    "小丽": "👧",
    "工作人员": "🧑‍💼",
    "孩子": "🧒",
    "女人": "👩‍👦",
    "小明的妈妈": "👩‍👦",
  },
  vocab: [
    { word: "唱歌", py: "chànggē", vi: "hát, ca hát",
      ex: { zh: "小美很喜欢唱歌，所以她很高兴。", py: "Xiǎo Měi hěn xǐhuan chànggē, suǒyǐ tā hěn gāoxìng.", vi: "Tiểu Mỹ rất thích hát nên cô bé rất vui." } },
    { word: "男", py: "nán", vi: "nam, phái nam",
      ex: { zh: "她们看见一个小男孩在哭着找妈妈。", py: "Tāmen kànjiàn yí ge xiǎo nánhái zài kūzhe zhǎo māma.", vi: "Họ nhìn thấy một cậu bé đang khóc tìm mẹ." } },
    { word: "女", py: "nǚ", vi: "nữ, phái nữ",
      ex: { zh: "小美来到音乐会的地方，看见一个熟悉的女孩。", py: "Xiǎo Měi lái dào yīnyuèhuì de dìfang, kànjiàn yí ge shúxī de nǚhái.", vi: "Tiểu Mỹ đến địa điểm tổ chức hòa nhạc và nhìn thấy một cô gái quen thuộc." } },
    { word: "孩子", py: "háizi", vi: "trẻ con, đứa trẻ",
      ex: { zh: "她们看见一个小孩子在找妈妈。", py: "Tāmen kànjiàn yí ge xiǎo háizi zài zhǎo māma.", vi: "Họ nhìn thấy một đứa trẻ đang tìm mẹ." } },
    { word: "右边", py: "yòubian", vi: "bên phải",
      ex: { zh: "小美看见商店右边有一个女孩。", py: "Xiǎo Měi kànjiàn shāngdiàn yòubian yǒu yí ge nǚhái.", vi: "Tiểu Mỹ nhìn thấy bên phải cửa hàng có một cô gái." } },
    { word: "比", py: "bǐ", vi: "hơn (so sánh)",
      ex: { zh: "你的声音比我的好听！", py: "Nǐ de shēngyīn bǐ wǒ de hǎotīng!", vi: "Giọng hát của bạn hay hơn giọng của mình!" } },
    { word: "便宜", py: "piányi", vi: "rẻ",
      ex: { zh: "这个红色的比那个黑色的便宜。", py: "Zhège hóngsè de bǐ nàge hēisè de piányi.", vi: "Chiếc màu đỏ này rẻ hơn chiếc màu đen kia." } },
    { word: "说话", py: "shuōhuà", vi: "nói chuyện",
      ex: { zh: "小美走过去和小丽说话。", py: "Xiǎo Měi zǒu guòqu hé Xiǎo Lì shuōhuà.", vi: "Tiểu Mỹ bước qua nói chuyện với Tiểu Lệ." } },
    { word: "可能", py: "kěnéng", vi: "có thể, có lẽ",
      ex: { zh: "别着急，我们可能很快就能找到你的妈妈。", py: "Bié zhāojí, wǒmen kěnéng hěn kuài jiù néng zhǎodào nǐ de māma.", vi: "Đừng lo lắng, có lẽ chúng ta sẽ sớm tìm được mẹ của em." } },
    { word: "去年", py: "qùnián", vi: "năm ngoái",
      ex: { zh: "是啊！去年我们在学校见过。", py: "Shì a! Qùnián wǒmen zài xuéxiào jiàn guo.", vi: "Đúng vậy! Năm ngoái chúng ta từng gặp nhau ở trường." } },
    { word: "姓", py: "xìng", vi: "mang họ",
      ex: { zh: "我姓王，小丽姓李。", py: "Wǒ xìng Wáng, Xiǎo Lì xìng Lǐ.", vi: "Tôi họ Vương, Tiểu Lệ họ Lý." } },
  ],
  nodes: {
    // NODE 01 — CUỐI TUẦN ĐI CÔNG VIÊN
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "📍 Sáng thứ Bảy · Công viên thành phố" },
        { kind: "quote", zh: "今天是星期六，天气很好。小美和妈妈一起去公园。公园里有很多人，还有一个音乐会。小美很喜欢唱歌，所以她很高兴。", py: "Jīntiān shì xīngqīliù, tiānqì hěn hǎo. Xiǎo Měi hé māma yìqǐ qù gōngyuán. Gōngyuán lǐ yǒu hěn duō rén, hái yǒu yí ge yīnyuèhuì. Xiǎo Měi hěn xǐhuan chànggē, suǒyǐ tā hěn gāoxìng.", vi: "Hôm nay là thứ Bảy, thời tiết rất đẹp. Tiểu Mỹ cùng mẹ đi công viên. Trong công viên có rất nhiều người, còn có một buổi hòa nhạc. Tiểu Mỹ rất thích hát nên cô bé rất vui." },
        { kind: "npc", speaker: "妈妈", zh: "你想先去哪里？", py: "Nǐ xiǎng xiān qù nǎlǐ?", vi: "Con muốn đi đâu trước?" },
      ],
      choices: [
        {
          label: "Đi xem buổi hòa nhạc",
          zh: "去看音乐会。", py: "Qù kàn yīnyuèhuì.", vi: "Đi xem buổi hòa nhạc.",
          next: "02",
          analysis: { structure: "去 + 看 + Tân ngữ", explain: "去 (đi) biểu thị mục đích di chuyển, theo sau là hành động 看音乐会 (xem hòa nhạc)." },
          vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "去", py: "qù", vi: "đi" }, { word: "看", py: "kàn", vi: "xem" }],
        },
        {
          label: "Đi mua sắm",
          zh: "去买东西。", py: "Qù mǎi dōngxi.", vi: "Đi mua đồ.",
          next: "03",
          analysis: { structure: "去 + 买 + 东西", explain: "去买东西 = đi mua đồ: 去 kết hợp động từ 买 chỉ mục đích mua sắm." },
          vocab: [{ word: "买", py: "mǎi", vi: "mua" }, { word: "东西", py: "dōngxi", vi: "đồ đạc" }],
        },
      ],
    },

    // NODE 02 — GẶP NGƯỜI BẠN CŨ
    "02": {
      id: "02",
      lines: [
        { kind: "quote", zh: "小美来到音乐会的地方，看见一个熟悉的女孩。", py: "Xiǎo Měi lái dào yīnyuèhuì de dìfang, kànjiàn yí ge shúxī de nǚhái.", vi: "Tiểu Mỹ đến địa điểm tổ chức hòa nhạc và nhìn thấy một cô gái quen thuộc." },
        { kind: "pick", options: [
          { zh: "你是小丽吗？", py: "Nǐ shì Xiǎo Lì ma?", vi: "Bạn là Tiểu Lệ phải không?", correct: true,
            analysis: { structure: "是 + Tên riêng + 吗？", explain: "Câu hỏi xác nhận danh tính: 你是...吗？ (Bạn có phải là... không?)." },
            vocab: [{ word: "女", py: "nǚ", vi: "nữ" }, { word: "是", py: "shì", vi: "là" }] },
          { zh: "你小丽是吗？", py: "Nǐ Xiǎo Lì shì ma?", vi: "Bạn Tiểu Lệ là à?", correct: false,
            analysis: { structure: "Sai vị trí động từ 是", explain: "Động từ 是 phải đứng trước danh từ/tên riêng: 是小丽, không đảo tên lên trước 是." },
            vocab: [{ word: "是", py: "shì", vi: "là" }] },
          { zh: "你是小丽不吗？", py: "Nǐ shì Xiǎo Lì bù ma?", vi: "Bạn là Tiểu Lệ không à?", correct: false,
            analysis: { structure: "Lẫn lộn 不 và 吗", explain: "Không dùng 不 và 吗 cùng lúc trong câu hỏi đơn. Dùng 吗 là chuẩn xác." },
            vocab: [{ word: "不", py: "bù", vi: "không" }] },
        ] },
        { kind: "npc", speaker: "女孩", zh: "对！你是小美吧？", py: "Duì! Nǐ shì Xiǎo Měi ba?", vi: "Đúng rồi! Bạn là Tiểu Mỹ phải không?" },
        { kind: "pick", options: [
          { zh: "是啊！我们在学校见过去年。", py: "Shì a! Wǒmen zài xuéxiào jiàn guo qùnián.", vi: "Đúng vậy! Chúng mình ở trường từng gặp năm ngoái.", correct: false,
            analysis: { structure: "Sai vị trí trạng ngữ thời gian", explain: "Trạng ngữ chỉ thời gian 去年 phải đứng đầu câu hoặc trước động từ, không để cuối câu." },
            vocab: [{ word: "去年", py: "qùnián", vi: "năm ngoái" }] },
          { zh: "是啊！去年我们在学校见过。", py: "Shì a! Qùnián wǒmen zài xuéxiào jiàn guo.", vi: "Đúng vậy! Năm ngoái chúng ta từng gặp nhau ở trường.", correct: true,
            analysis: { structure: "Thời gian + 在 + Nơi chốn + Động từ + 过", explain: "去年 (thời gian) + 在学校 (địa điểm) + 见过 (từng gặp mặt: 过 là trợ từ động thái trải nghiệm)." },
            vocab: [{ word: "去年", py: "qùnián", vi: "năm ngoái" }, { word: "学校", py: "xuéxiào", vi: "trường học" }, { word: "见", py: "jiàn", vi: "gặp" }] },
          { zh: "是啊！去年我们见过在学校。", py: "Shì a! Qùnián wǒmen jiàn guo zài xuéxiào.", vi: "Đúng vậy! Năm ngoái chúng mình từng gặp ở trường.", correct: false,
            analysis: { structure: "Sai vị trí trạng ngữ nơi chốn", explain: "Cụm 在学校 phải đứng trước động từ: 在学校见过, không đặt sau động từ." },
            vocab: [{ word: "学校", py: "xuéxiào", vi: "trường học" }] },
        ] },
        { kind: "npc", speaker: "小丽", zh: "好久不见！你现在还喜欢唱歌吗？", py: "Hǎojiǔ bú jiàn! Nǐ xiànzài hái xǐhuan chànggē ma?", vi: "Lâu rồi không gặp! Bây giờ bạn vẫn thích hát chứ?" },
        { kind: "pick", options: [
          { zh: "喜欢当然！", py: "Xǐhuan dāngrán!", vi: "Thích đương nhiên!", correct: false,
            analysis: { structure: "Sai vị trí 当然", explain: "Phó từ 当然 (đương nhiên) đứng trước động từ: 当然喜欢, không đặt sau động từ." },
            vocab: [{ word: "喜欢", py: "xǐhuan", vi: "thích" }] },
          { zh: "当然不讨厌吗！", py: "Dāngrán bù tǎoyàn ma!", vi: "Đương nhiên không ghét à!", correct: false,
            analysis: { structure: "Thừa 吗 và không tự nhiên", explain: "Đáp lại lời hỏi han khẳng định dùng 当然喜欢! gọn gàng và không dùng 吗." },
            vocab: [{ word: "当然", py: "dāngrán", vi: "đương nhiên" }] },
          { zh: "当然喜欢！", py: "Dāngrán xǐhuan!", vi: "Tất nhiên là thích rồi!", correct: true,
            analysis: { structure: "当然 + 喜欢！", explain: "当然 (đương nhiên, tất nhiên) đứng trước động từ để khẳng định chắc chắn sở thích." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "当然", py: "dāngrán", vi: "đương nhiên" }, { word: "喜欢", py: "xǐhuan", vi: "thích" }] },
        ] },
      ],
      choices: [
        {
          label: "Rủ Tiểu Lệ tham gia cuộc thi",
          zh: "问小丽要不要一起参加比赛。", py: "Wèn Xiǎo Lì yào bú yào yìqǐ cānjiā bǐsài.", vi: "Hỏi Tiểu Lệ có muốn cùng tham gia cuộc thi không.",
          next: "04",
          analysis: { structure: "要不要 + 一起 + Động từ", explain: "要不要 = có muốn... hay không (câu hỏi chính phản). 一起参加 = cùng nhau tham gia." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "参加", py: "cānjiā", vi: "tham gia" }, { word: "比赛", py: "bǐsài", vi: "cuộc thi" }],
        },
        {
          label: "Cùng Tiểu Lệ đi mua đồ uống",
          zh: "和小丽一起去买饮料。", py: "Hé Xiǎo Lì yìqǐ qù mǎi yǐnliào.", vi: "Cùng Tiểu Lệ đi mua đồ uống.",
          next: "05",
          analysis: { structure: "和 + Người + 一起 + 去 + Động từ", explain: "和小丽一起 = cùng Tiểu Lệ. 去买饮料 = đi mua đồ uống." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "买", py: "mǎi", vi: "mua" }],
        },
      ],
    },

    // NODE 03 — CỬA HÀNG TRONG CÔNG VIÊN
    "03": {
      id: "03",
      lines: [
        { kind: "quote", zh: "小美和妈妈来到一个小商店。小美看见两个漂亮的包。", py: "Xiǎo Měi hé māma lái dào yí ge xiǎo shāngdiàn. Xiǎo Měi kànjiàn liǎng ge piàoliang de bāo. ", vi: "Tiểu Mỹ và mẹ đến một cửa hàng nhỏ. Tiểu Mỹ nhìn thấy hai chiếc túi xinh đẹp." },
        { kind: "pick", options: [
          { zh: "妈妈，哪个包比较好？", py: "Māma, nǎge bāo bǐjiào hǎo?", vi: "Mẹ ơi, chiếc túi nào tốt hơn ạ?", correct: true,
            analysis: { structure: "哪个 + Danh từ + 比较 + Tính từ？", explain: "哪个包 = chiếc túi nào (chọn lựa trong 2 cái). 比较好 = tương đối tốt, tốt hơn." },
            vocab: [{ word: "哪个", py: "nǎge", vi: "cái nào" }, { word: "比较", py: "bǐjiào", vi: "tương đối, hơn" }, { word: "好", py: "hǎo", vi: "tốt, đẹp" }] },
          { zh: "妈妈，包哪个好比较？", py: "Māma, bāo nǎge hǎo bǐjiào?", vi: "Mẹ ơi, túi cái nào tốt hơn?", correct: false,
            analysis: { structure: "Sai trật tự 哪个 và 比较", explain: "Đại từ 哪个 đứng trước danh từ: 哪个包. Phó từ 比较 đứng trước tính từ: 比较好." },
            vocab: [{ word: "比较", py: "bǐjiào", vi: "tương đối" }] },
          { zh: "妈妈，哪个包比较好吗？", py: "Māma, nǎge bāo bǐjiào hǎo ma?", vi: "Mẹ ơi, chiếc túi nào tốt hơn à?", correct: false,
            analysis: { structure: "Thừa trợ từ 吗", explain: "Câu đã có từ để hỏi 哪个 thì không dùng thêm trợ từ 吗 ở cuối." },
            vocab: [{ word: "哪个", py: "nǎge", vi: "cái nào" }] },
        ] },
        { kind: "npc", speaker: "妈妈", zh: "这个红色的比那个黑色的便宜。", py: "Zhège hóngsè de bǐ nàge hēisè de piányi.", vi: "Chiếc màu đỏ này rẻ hơn chiếc màu đen kia." },
        { kind: "quote", zh: "小美看了看价格，觉得很不错。", py: "Xiǎo Měi kàn le kàn jiàgé, juéde hěn búcuò.", vi: "Tiểu Mỹ nhìn giá rồi cảm thấy khá ổn." },
      ],
      choices: [
        {
          label: "Mua chiếc túi màu đỏ",
          zh: "买红色的包。", py: "Mǎi hóngsè de bāo.", vi: "Mua chiếc túi màu đỏ.",
          next: "03A",
          analysis: { structure: "买 + Tính từ + 的 + Danh từ", explain: "红色的包 = chiếc túi màu đỏ (định ngữ nối bằng 的)." },
          vocab: [{ word: "便宜", py: "piányi", vi: "rẻ" }, { word: "买", py: "mǎi", vi: "mua" }, { word: "红色", py: "hóngsè", vi: "màu đỏ" }],
        },
        {
          label: "Không mua túi, đi xem hòa nhạc",
          zh: "不买包，去看音乐会。", py: "Bù mǎi bāo, qù kàn yīnyuèhuì.", vi: "Không mua túi, đi xem hòa nhạc.",
          next: "02",
          analysis: { structure: "不 + Động từ; 去 + Động từ", explain: "不买包 = không mua túi. 去看音乐会 = đi xem buổi hòa nhạc." },
          vocab: [{ word: "不", py: "bù", vi: "không" }, { word: "看", py: "kàn", vi: "xem" }],
        },
      ],
    },

    // NODE 03A — CẢNH NỐI: GẶP TIỂU LỆ BÊN PHẢI CỬA HÀNG
    "03A": {
      id: "03A",
      lines: [
        { kind: "quote", zh: "小美买了红色的包。妈妈走去旁边的椅子休息。", py: "Xiǎo Měi mǎi le hóngsè de bāo. Māma zǒu qù pángbiān de yǐzi xiūxi.", vi: "Tiểu Mỹ mua chiếc túi màu đỏ. Mẹ đi ra chiếc ghế bên cạnh nghỉ ngơi." },
        { kind: "quote", zh: "小美看见商店右边有一个女孩，仔细一看原来是好朋友小丽。", py: "Xiǎo Měi kànjiàn shāngdiàn yòubian yǒu yí ge nǚhái, zǐxì yí kàn yuánlái shì hǎo péngyou Xiǎo Lì.", vi: "Tiểu Mỹ nhìn thấy bên phải cửa hàng có một cô gái, nhìn kỹ thì ra là người bạn tốt Tiểu Lệ." },
        { kind: "quote", zh: "小美走过去和小丽说话，听说她想买饮料，就一起过去。", py: "Xiǎo Měi zǒu guòqu hé Xiǎo Lì shuōhuà, tīngshuō tā xiǎng mǎi yǐnliào, jiù yìqǐ guòqu.", vi: "Tiểu Mỹ bước qua nói chuyện với Tiểu Lệ, nghe nói bạn ấy muốn mua đồ uống liền cùng đi qua." },
      ],
      next: "05",
    },

    // NODE 04 — CUỘC THI HÁT
    "04": {
      id: "04",
      lines: [
        { kind: "npc", speaker: "小丽", zh: "好啊！我们一起参加吧！", py: "Hǎo a! Wǒmen yìqǐ cānjiā ba!", vi: "Được đấy! Chúng ta cùng tham gia nhé!" },
        { kind: "npc", speaker: "工作人员", zh: "你们叫什么名字？", py: "Nǐmen jiào shénme míngzi?", vi: "Hai bạn tên là gì?" },
        { kind: "pick", options: [
          { zh: "我叫名字小美，她叫小丽。", py: "Wǒ jiào míngzi Xiǎo Měi, tā jiào Xiǎo Lì.", vi: "Tôi gọi tên Tiểu Mỹ, bạn ấy gọi Tiểu Lệ.", correct: false,
            analysis: { structure: "Sai vị trí 名字", explain: "Sau 叫 là chính cái tên: 我叫小美. Muốn nói 名字 thì đặt trước 叫: 我名字叫小美 hoặc 我的名字叫小美." },
            vocab: [{ word: "叫", py: "jiào", vi: "tên là" }] },
          { zh: "我叫小美，她叫小丽。", py: "Wǒ jiào Xiǎo Měi, tā jiào Xiǎo Lì.", vi: "Tôi tên Tiểu Mỹ, bạn ấy tên Tiểu Lệ.", correct: true,
            analysis: { structure: "我叫 + Tên, 她叫 + Tên", explain: "Cấu trúc giới thiệu tên thông dụng: 叫 + Tên gọi (叫小美, 叫小丽)." },
            vocab: [{ word: "叫", py: "jiào", vi: "tên là" }] },
          { zh: "我是叫小美，她是叫小丽吗？", py: "Wǒ shì jiào Xiǎo Měi, tā shì jiào Xiǎo Lì ma?", vi: "Tôi là tên Tiểu Mỹ, bạn ấy là tên Tiểu Lệ à?", correct: false,
            analysis: { structure: "Lạm dụng động từ 是 và thừa 吗", explain: "Đây là câu trả lời nhân viên, nói thẳng 我叫... 她叫..., không thêm 吗 và 是 thừa." },
            vocab: [{ word: "叫", py: "jiào", vi: "tên là" }] },
        ] },
        { kind: "npc", speaker: "工作人员", zh: "你们姓什么？", py: "Nǐmen xìng shénme?", vi: "Hai bạn họ gì?" },
        { kind: "pick", options: [
          { zh: "我姓什么王，小丽姓李。", py: "Wǒ xìng shénme Wáng, Xiǎo Lì xìng Lǐ.", vi: "Tôi họ gì Vương, Tiểu Lệ họ Lý.", correct: false,
            analysis: { structure: "Thừa đại từ 什么 trong câu trả lời", explain: "Câu trả lời đưa trực tiếp họ sau 姓: 我姓王, bỏ đại từ nghi vấn 什么 đi." },
            vocab: [{ word: "姓", py: "xìng", vi: "mang họ" }] },
          { zh: "我叫王，小丽叫李。", py: "Wǒ jiào Wáng, Xiǎo Lì jiào Lǐ.", vi: "Tôi tên Vương, Tiểu Lệ tên Lý.", correct: false,
            analysis: { structure: "Nhầm lẫn giữa 叫 và 姓", explain: "Nhân viên hỏi họ (姓什么), phải dùng động từ 姓 để trả lời họ: 我姓王，小丽姓李." },
            vocab: [{ word: "姓", py: "xìng", vi: "mang họ" }] },
          { zh: "我姓王，小丽姓李。", py: "Wǒ xìng Wáng, Xiǎo Lì xìng Lǐ.", vi: "Tôi họ Vương, Tiểu Lệ họ Lý.", correct: true,
            analysis: { structure: "姓 + Họ", explain: "Động từ 姓 dùng để nói về họ: 姓王 (họ Vương), 姓李 (họ Lý)." },
            vocab: [{ word: "姓", py: "xìng", vi: "mang họ" }] },
        ] },
        { kind: "quote", zh: "工作人员给她们登记了名字。", py: "Gōngzuò rényuán gěi tāmen dēngjì le míngzi.", vi: "Nhân viên đăng ký tên cho hai cô bé." },
      ],
      choices: [
        {
          label: "Chăm chỉ luyện tập bài hát",
          zh: "认真练习歌曲。", py: "Rènzhēn liànxí gēqǔ.", vi: "Chăm chỉ luyện tập bài hát.",
          next: "06",
          analysis: { structure: "Phó từ + Động từ + Tân ngữ", explain: "认真 = chăm chỉ, nghiêm túc. 练习歌曲 = luyện tập bài hát." },
          vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "练习", py: "liànxí", vi: "luyện tập" }],
        },
        {
          label: "Đi tìm mẹ trước",
          zh: "先去找妈妈。", py: "Xiān qù zhǎo māma.", vi: "Đi tìm mẹ trước.",
          next: "04B",
          analysis: { structure: "先 + 去 + 找 + Người", explain: "先 = trước. 去找妈妈 = đi tìm mẹ." },
          vocab: [{ word: "先", py: "xiān", vi: "trước" }, { word: "找", py: "zhǎo", vi: "tìm" }, { word: "妈妈", py: "māma", vi: "mẹ" }],
        },
      ],
    },

    // NODE 04B — CẢNH NỐI: BẮT GẶP BÉ TRAI ĐI LẠC
    "04B": {
      id: "04B",
      lines: [
        { kind: "quote", zh: "小美和小丽准备先去找妈妈。走到半路，她们看见一个小男孩在哭着找妈妈。", py: "Xiǎo Měi hé Xiǎo Lì zhǔnbèi xiān qù zhǎo māma. Zǒu dào bànlù, tāmen kànjiàn yí ge xiǎo nánhái zài kūzhe zhǎo māma.", vi: "Tiểu Mỹ và Tiểu Lệ chuẩn bị đi tìm mẹ trước. Đi đến nửa đường, họ nhìn thấy một cậu bé đang khóc tìm mẹ." },
        { kind: "quote", zh: "小美决定先带孩子去问工作人员。", py: "Xiǎo Měi juédìng xiān dài háizi qù wèn gōngzuò rényuán.", vi: "Tiểu Mỹ quyết định trước hết dẫn đứa trẻ đến hỏi nhân viên." },
      ],
      next: "07",
    },

    // NODE 05 — MỘT NGƯỜI BẠN NHỎ
    "05": {
      id: "05",
      lines: [
        { kind: "quote", zh: "小美和小丽在商店买了饮料。她们看见一个小孩子在找妈妈。", py: "Xiǎo Měi hé Xiǎo Lì zài shāngdiàn mǎi le yǐnliào. Tāmen kànjiàn yí ge xiǎo háizi zài zhǎo māma.", vi: "Tiểu Mỹ và Tiểu Lệ mua đồ uống ở cửa hàng. Họ nhìn thấy một đứa trẻ đang tìm mẹ." },
        { kind: "pick", options: [
          { zh: "小朋友，你怎么了？", py: "Xiǎo péngyou, nǐ zěnme le?", vi: "Em ơi, em sao vậy?", correct: true,
            analysis: { structure: "你怎么了？", explain: "Câu hỏi thăm quen thuộc khi thấy người khác có dấu hiệu bất thường hay khóc lóc: Bạn/em sao vậy?" },
            vocab: [{ word: "孩子", py: "háizi", vi: "trẻ con" }, { word: "怎么", py: "zěnme", vi: "sao, thế nào" }] },
          { zh: "小朋友，你什么怎么了？", py: "Xiǎo péngyou, nǐ shénme zěnme le?", vi: "Em ơi, em gì sao vậy?", correct: false,
            analysis: { structure: "Thừa từ 什么", explain: "Mẫu câu hỏi thăm là 怎么了, không chèn thêm từ 什么." },
            vocab: [{ word: "什么", py: "shénme", vi: "gì" }] },
          { zh: "小朋友，你怎么样了吗？", py: "Xiǎo péngyou, nǐ zěnmeyàng le ma?", vi: "Em ơi, em thế nào rồi à?", correct: false,
            analysis: { structure: "Dùng sai 怎么样 và thừa 吗", explain: "Hỏi xảy ra chuyện gì dùng 怎么了 (hoặc 发生什么事了), không nói 怎么样了吗." },
            vocab: [{ word: "孩子", py: "háizi", vi: "trẻ con" }] },
        ] },
        { kind: "npc", speaker: "孩子", zh: "我找不到妈妈了。", py: "Wǒ zhǎo bú dào māma le.", vi: "Em không tìm thấy mẹ." },
        { kind: "npc", speaker: "小丽", zh: "别担心，我们帮你找。", py: "Bié dānxīn, wǒmen bāng nǐ zhǎo.", vi: "Đừng lo, bọn chị sẽ giúp em tìm." },
      ],
      choices: [
        {
          label: "Dẫn đứa trẻ đến hỏi nhân viên",
          zh: "带孩子去问工作人员。", py: "Dài háizi qù wèn gōngzuò rényuán.", vi: "Dẫn đứa trẻ đến hỏi nhân viên.",
          next: "07",
          analysis: { structure: "带 + Người + 去 + Động từ", explain: "带孩子去 = dẫn đứa bé đi. 问工作人员 = hỏi nhân viên phục vụ." },
          vocab: [{ word: "孩子", py: "háizi", vi: "trẻ con" }, { word: "带", py: "dài", vi: "dẫn, mang" }, { word: "问", py: "wèn", vi: "hỏi" }],
        },
        {
          label: "Đợi mẹ của đứa trẻ ở đây",
          zh: "在这里等孩子的妈妈。", py: "Zài zhèlǐ děng háizi de māma.", vi: "Đợi mẹ của đứa trẻ ở đây.",
          next: "08",
          analysis: { structure: "在 + Nơi chốn + 等 + Người", explain: "在这里 = ở đây. 等孩子的妈妈 = đợi mẹ của đứa trẻ." },
          vocab: [{ word: "孩子", py: "háizi", vi: "đứa trẻ" }, { word: "等", py: "děng", vi: "đợi" }, { word: "妈妈", py: "māma", vi: "mẹ" }],
        },
      ],
    },

    // NODE 06 — BUỔI LUYỆN TẬP
    "06": {
      id: "06",
      lines: [
        { kind: "quote", zh: "小美和小丽找了一个安静的地方。她们开始练习唱歌。", py: "Xiǎo Měi hé Xiǎo Lì zhǎo le yí ge ānjìng de dìfang. Tāmen kāishǐ liànxí chànggē.", vi: "Tiểu Mỹ và Tiểu Lệ tìm một nơi yên tĩnh. Họ bắt đầu luyện hát." },
        { kind: "npc", speaker: "小丽", zh: "你的声音比我的好听！", py: "Nǐ de shēngyīn bǐ wǒ de hǎotīng!", vi: "Giọng hát của bạn hay hơn giọng của mình!" },
        { kind: "pick", options: [
          { zh: "没，你唱得也很好吗！", py: "Méi, nǐ chàng de yě hěn hǎo ma!", vi: "Không, bạn hát cũng rất hay à!", correct: false,
            analysis: { structure: "Thừa 吗 trong câu khen", explain: "Đáp lại lời khen bằng lời khẳng định động viên, không dùng 吗 ở cuối." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }] },
          { zh: "没有，你唱得也很好！", py: "Méiyǒu, nǐ chàng de yě hěn hǎo!", vi: "Không đâu, bạn hát cũng rất hay!", correct: true,
            analysis: { structure: "没有 (khiêm tốn) + Động từ + 得 + Bổ ngữ trình độ", explain: "没有 thường dùng để đáp lại lời khen một cách khiêm tốn. 唱得也很好 = hát cũng rất hay." },
            vocab: [{ word: "比", py: "bǐ", vi: "hơn" }, { word: "也", py: "yě", vi: "cũng" }, { word: "好", py: "hǎo", vi: "tốt, hay" }] },
          { zh: "没有，你也很唱得好！", py: "Méiyǒu, nǐ yě hěn chàng de hǎo!", vi: "Không đâu, bạn cũng rất hát được hay!", correct: false,
            analysis: { structure: "Sai vị trí 很 trong bổ ngữ trình độ", explain: "Phó từ mức độ 很 phải đứng sau 得 và trước tính từ: 唱得很好, không để trước động từ." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }] },
        ] },
        { kind: "quote", zh: "练习结束以后，她们觉得很有信心。", py: "Liànxí jiéshù yǐhòu, tāmen juéde hěn yǒu xìnxīn.", vi: "Sau khi luyện tập xong, họ cảm thấy rất tự tin." },
      ],
      next: "09",
    },

    // NODE 07 — TÌM NHÂN VIÊN GIÚP ĐỠ
    "07": {
      id: "07",
      lines: [
        { kind: "quote", zh: "小美带孩子去找工作人员。", py: "Xiǎo Měi dài háizi qù zhǎo gōngzuò rényuán.", vi: "Tiểu Mỹ dẫn đứa trẻ đi tìm nhân viên." },
        { kind: "npc", speaker: "工作人员", zh: "小朋友，你叫什么名字？", py: "Xiǎo péngyou, nǐ jiào shénme míngzi?", vi: "Em nhỏ ơi, em tên gì?" },
        { kind: "npc", speaker: "孩子", zh: "我叫小明。", py: "Wǒ jiào Xiǎo Míng.", vi: "Em tên Tiểu Minh." },
        { kind: "npc", speaker: "工作人员", zh: "别着急，我们可能很快就能找到你的妈妈。", py: "Bié zhāojí, wǒmen kěnéng hěn kuài jiù néng zhǎodào nǐ de māma.", vi: "Đừng lo lắng, có lẽ chúng ta sẽ sớm tìm được mẹ của em." },
        { kind: "quote", zh: "过了一会儿，一个女人跑过来了。她看见孩子，非常高兴。原来她就是小明的妈妈。", py: "Guò le yíhuìr, yí ge nǚrén pǎo guòlái le. Tā kànjiàn háizi, fēicháng gāoxìng. Yuánlái tā jiù shì Xiǎo Míng de māma.", vi: "Một lát sau, một người phụ nữ chạy đến. Cô ấy nhìn thấy đứa trẻ và vô cùng vui mừng. Hóa ra cô ấy chính là mẹ của Tiểu Minh." },
      ],
      next: "END_1",
    },

    // NODE 08 — ĐỢI MẸ CỦA ĐỨA TRẺ
    "08": {
      id: "08",
      lines: [
        { kind: "quote", zh: "小美和小丽没有离开。她们陪着孩子在商店旁边等。过了十分钟，一个女人来了。", py: "Xiǎo Měi hé Xiǎo Lì méiyǒu líkāi. Tāmen péizhe háizi zài shāngdiàn pángbiān děng. Guò le shí fēnzhōng, yí ge nǚrén lái le.", vi: "Tiểu Mỹ và Tiểu Lệ không rời đi. Họ ở bên cạnh đứa trẻ và đợi gần cửa hàng. Mười phút sau, một người phụ nữ đến." },
        { kind: "npc", speaker: "女人", zh: "你们看见我的孩子了吗？", py: "Nǐmen kànjiàn wǒ de háizi le ma?", vi: "Các cháu có nhìn thấy con của cô không?" },
        { kind: "pick", options: [
          { zh: "在这里他在！", py: "Zài zhèlǐ tā zài!", vi: "Ở đây cậu ấy ở!", correct: false,
            analysis: { structure: "Lặp từ 在 và sai trật tự", explain: "Câu chỉ vị trí đúng là Chủ ngữ + 在 + Nơi chốn: 他在这里." },
            vocab: [{ word: "在", py: "zài", vi: "ở" }] },
          { zh: "他这里在！", py: "Tā zhèlǐ zài!", vi: "Cậu ấy đây ở!", correct: false,
            analysis: { structure: "Sai vị trí động từ 在", explain: "Động từ 在 đứng trước từ chỉ nơi chốn: 在这里, không nói 这里在." },
            vocab: [{ word: "在", py: "zài", vi: "ở" }] },
          { zh: "他在这里！", py: "Tā zài zhèlǐ!", vi: "Em ấy ở đây ạ!", correct: true,
            analysis: { structure: "Chủ ngữ + 在 + Nơi chốn", explain: "他在这里 = em ấy đang ở đây (在 chỉ nơi chốn của chủ ngữ)." },
            vocab: [{ word: "孩子", py: "háizi", vi: "đứa trẻ" }, { word: "在", py: "zài", vi: "ở" }] },
        ] },
        { kind: "quote", zh: "女人高兴地抱住孩子。", py: "Nǚrén gāoxìng de bào zhù háizi.", vi: "Người phụ nữ vui mừng ôm lấy đứa trẻ." },
        { kind: "npc", speaker: "女人", zh: "谢谢你们！", py: "Xièxie nǐmen!", vi: "Cảm ơn các cháu!" },
      ],
      next: "END_2",
    },

    // NODE 09 — TRƯỚC GIỜ BIỂU DIỄN
    "09": {
      id: "09",
      lines: [
        { kind: "quote", zh: "音乐会快开始了。小美和小丽站在舞台旁边。小丽有点儿紧张。", py: "Yīnyuèhuì kuài kāishǐ le. Xiǎo Měi hé Xiǎo Lì zhàn zài wǔtái pángbiān. Xiǎo Lì yǒudiǎnr jǐnzhāng.", vi: "Buổi hòa nhạc sắp bắt đầu. Tiểu Mỹ và Tiểu Lệ đứng bên cạnh sân khấu. Tiểu Lệ hơi căng thẳng." },
        { kind: "pick", options: [
          { zh: "别担心，我们一定可以唱好的！", py: "Bié dānxīn, wǒmen yídìng kěyǐ chàng hǎo de!", vi: "Đừng lo, chúng ta nhất định có thể hát thật tốt!", correct: true,
            analysis: { structure: "一定 + 可以 + Động từ + 好 + 的", explain: "一定 = nhất định. 可以 = có thể. 唱好 = hát hay/tốt (好 là bổ ngữ kết quả)." },
            vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "一定", py: "yídìng", vi: "nhất định" }, { word: "别", py: "bié", vi: "đừng" }] },
          { zh: "担心别，我们一定可以唱好的！", py: "Dānxīn bié, wǒmen yídìng kěyǐ chàng hǎo de!", vi: "Lo đừng, chúng ta nhất định có thể hát thật tốt!", correct: false,
            analysis: { structure: "Sai trật tự 别", explain: "别 (đừng) phải đứng trước động từ: 别担心, không đặt sau 担心." },
            vocab: [{ word: "不", py: "bù", vi: "không" }] },
          { zh: "别担心，我们一定唱可以好的！", py: "Bié dānxīn, wǒmen yídìng chàng kěyǐ hǎo de!", vi: "Đừng lo, chúng ta nhất định hát có thể tốt!", correct: false,
            analysis: { structure: "Sai vị trí động từ năng nguyện 可以", explain: "Động từ năng nguyện 可以 phải đứng trước động từ chính: 可以唱好, không chen giữa 唱 và 好." },
            vocab: [{ word: "可以", py: "kěyǐ", vi: "có thể" }] },
        ] },
        { kind: "quote", zh: "这时候，主持人叫她们的名字。她们一起走上舞台。", py: "Zhè shíhou, zhǔchírén jiào tāmen de míngzi. Tāmen yìqǐ zǒu shàng wǔtái.", vi: "Lúc này, người dẫn chương trình gọi tên hai cô bé. Họ cùng bước lên sân khấu." },
      ],
      choices: [
        {
          label: "Hát thật to",
          zh: "大声地唱歌。", py: "Dàshēng de chànggē.", vi: "Hát thật to.",
          next: "END_3",
          analysis: { structure: "Tính từ + 地 + Động từ", explain: "大声地 = một cách to tiếng/dõng dạc (trợ từ 地 liên kết trạng ngữ với động từ 唱歌)." },
          vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "大", py: "dà", vi: "lớn, to" }],
        },
        {
          label: "Hát nhỏ vì quá căng thẳng",
          zh: "小声地唱歌，因为太紧张了。", py: "Xiǎoshēng de chànggē, yīnwèi tài jǐnzhāng le.", vi: "Hát nhỏ vì quá căng thẳng.",
          next: "END_4",
          analysis: { structure: "小声地 + Động từ; 因为…", explain: "小声地唱歌 = hát nhỏ tiếng. 因为太紧张了 = bởi vì quá căng thẳng (giải thích lý do)." },
          vocab: [{ word: "唱歌", py: "chànggē", vi: "hát" }, { word: "因为", py: "yīnwèi", vi: "bởi vì" }],
        },
      ],
    },

    // ENDING 1 — GIÚP ĐỠ NGƯỜI KHÁC
    "END_1": {
      id: "END_1",
      lines: [
        { kind: "quote", zh: "小明的妈妈一直感谢小美和小丽。", py: "Xiǎo Míng de māma yìzhí gǎnxiè Xiǎo Měi hé Xiǎo Lì.", vi: "Mẹ của Tiểu Minh liên tục cảm ơn Tiểu Mỹ và Tiểu Lệ." },
        { kind: "npc", speaker: "小明的妈妈", zh: "你们真是好孩子！", py: "Nǐmen zhēn shì hǎo háizi!", vi: "Các cháu đúng là những đứa trẻ tốt!" },
        { kind: "quote", zh: "小美和小丽笑了。虽然她们没有马上参加音乐会，但是帮助了别人，她们觉得很开心。", py: "Xiǎo Měi hé Xiǎo Lì xiào le. Suīrán tāmen méiyǒu mǎshàng cānjiā yīnyuèhuì, dànshì bāngzhù le biérén, tāmen juéde hěn kāixīn.", vi: "Mặc dù không thể tham gia buổi hòa nhạc ngay lập tức, nhưng vì đã giúp đỡ người khác nên họ cảm thấy rất vui." },
      ],
      ending: { title: "帮助别人 💖", titleVi: "Giúp đỡ người khác" },
    },

    // ENDING 2 — MỘT GIA ĐÌNH HẠNH PHÚC
    "END_2": {
      id: "END_2",
      lines: [
        { kind: "quote", zh: "小明的妈妈带孩子回家以前，再次感谢两个女孩。小美和小丽继续去看音乐会。她们听见好听的音乐，也看见很多开心的人。", py: "Xiǎo Míng de māma dài háizi huí jiā yǐqián, zàicì gǎnxiè liǎng ge nǚhái. Xiǎo Měi hé Xiǎo Lì jìxù qù kàn yīnyuèhuì. Tāmen tīngjiàn hǎotīng de yīnyuè, yě kànjiàn hěn duō kāixīn de rén.", vi: "Trước khi đưa con về nhà, mẹ Tiểu Minh một lần nữa cảm ơn hai cô bé. Tiểu Mỹ và Tiểu Lệ tiếp tục đi xem hòa nhạc. Họ nghe thấy âm nhạc hay và nhìn thấy rất nhiều người vui vẻ." },
        { kind: "pick", options: [
          { zh: "今天特别真的一天！", py: "Jīntiān tèbié zhēn de yì tiān!", vi: "Hôm nay đặc biệt thật một ngày!", correct: false,
            analysis: { structure: "Sai trật tự câu cảm thán", explain: "Cấu trúc đúng là 真是 + Tính từ + 的一天: 真是特别的一天!" },
            vocab: [{ word: "天", py: "tiān", vi: "ngày" }] },
          { zh: "今天真是特别的一天！", py: "Jīntiān zhēn shì tèbié de yì tiān!", vi: "Hôm nay đúng là một ngày thật đặc biệt!", correct: true,
            analysis: { structure: "真是 + Tính từ + 的一天！", explain: "真是...的一天 = đúng là một ngày thật là... (câu cảm thán bày tỏ sự ấn tượng sâu sắc)." },
            vocab: [{ word: "真", py: "zhēn", vi: "thật" }, { word: "是", py: "shì", vi: "là" }] },
          { zh: "今天真特别的一天吗？", py: "Jīntiān zhēn tèbié de yì tiān ma?", vi: "Hôm nay thật một ngày đặc biệt à?", correct: false,
            analysis: { structure: "Thừa 吗 trong câu cảm thán", explain: "Đây là câu cảm thán khen ngợi ngày đẹp trời, không dùng trợ từ nghi vấn 吗." },
            vocab: [{ word: "真", py: "zhēn", vi: "thật" }] },
        ] },
      ],
      ending: { title: "一个快乐的家庭 👨‍👩‍👦", titleVi: "Một gia đình hạnh phúc" },
    },

    // ENDING 3 — HÁT RẤT HAY
    "END_3": {
      id: "END_3",
      lines: [
        { kind: "quote", zh: "小美和小丽开始唱歌。她们唱得很好听，大家都为她们鼓掌。最后，她们得了第一名！", py: "Xiǎo Měi hé Xiǎo Lì kāishǐ chànggē. Tāmen chàng de hěn hǎotīng, dàjiā dōu wèi tāmen gǔzhǎng. Zuìhòu, tāmen dé le dì yī míng!", vi: "Tiểu Mỹ và Tiểu Lệ bắt đầu hát. Họ hát rất hay, mọi người đều vỗ tay cổ vũ. Cuối cùng, họ giành được giải nhất!" },
        { kind: "pick", options: [
          { zh: "今天好了太！", py: "Jīntiān hǎo le tài!", vi: "Hôm nay tốt rồi quá!", correct: false,
            analysis: { structure: "Sai vị trí 太 trong câu cảm thán", explain: "Cấu trúc cảm thán là 太 + Tính từ + 了: 太好了, không đưa 太 ra sau." },
            vocab: [{ word: "太", py: "tài", vi: "quá" }] },
          { zh: "今天太好吗！", py: "Jīntiān tài hǎo ma!", vi: "Hôm nay quá tốt à!", correct: false,
            analysis: { structure: "Dùng sai 吗 thay vì 了", explain: "Cấu trúc 太...了 dùng trợ từ 了, không dùng 吗." },
            vocab: [{ word: "太", py: "tài", vi: "quá" }] },
          { zh: "今天太好了！", py: "Jīntiān tài hǎo le!", vi: "Hôm nay tuyệt quá!", correct: true,
            analysis: { structure: "太 + Tính từ + 了！", explain: "太好了 = tuyệt vời quá (mẫu câu thể hiện niềm vui tột cùng)." },
            vocab: [{ word: "太", py: "tài", vi: "quá, rất" }, { word: "好", py: "hǎo", vi: "tốt, tuyệt" }, { word: "了", py: "le", vi: "(trợ từ cảm thán)" }] },
        ] },
        { kind: "npc", speaker: "小丽", zh: "下次我们还要一起参加！", py: "Xià cì wǒmen hái yào yìqǐ cānjiā!", vi: "Lần sau chúng ta vẫn sẽ cùng tham gia nhé!" },
      ],
      ending: { title: "唱得很好 🏆", titleVi: "Hát rất hay" },
    },

    // ENDING 4 — LẦN SAU LẠI ĐẾN
    "END_4": {
      id: "END_4",
      lines: [
        { kind: "quote", zh: "小美和小丽开始唱歌，但是声音很小。她们唱完以后，觉得有一点儿不好意思。", py: "Xiǎo Měi hé Xiǎo Lì kāishǐ chànggē, dànshì shēngyīn hěn xiǎo. Tāmen chàng wán yǐhòu, juéde yǒu yìdiǎnr bù hǎoyìsi. ", vi: "Tiểu Mỹ và Tiểu Lệ bắt đầu hát, nhưng giọng hát rất nhỏ. Sau khi hát xong, họ cảm thấy hơi ngại." },
        { kind: "npc", speaker: "小丽", zh: "我刚才太紧张了。", py: "Wǒ gāngcái tài jǐnzhāng le.", vi: "Vừa nãy mình căng thẳng quá." },
        { kind: "pick", options: [
          { zh: "没关系，我们下次来再！", py: "Méi guānxi, wǒmen xià cì lái zài!", vi: "Không sao, lần sau chúng mình đến lại!", correct: false,
            analysis: { structure: "Sai vị trí 再", explain: "Phó từ 再 (lại) phải đứng trước động từ: 再来, không để ở cuối câu." },
            vocab: [{ word: "来", py: "lái", vi: "đến" }] },
          { zh: "没关系，我们下次再来！", py: "Méi guānxi, wǒmen xià cì zài lái!", vi: "Không sao, lần sau chúng ta lại đến!", correct: true,
            analysis: { structure: "下次 + 再 + Động từ！", explain: "没关系 = không sao (an ủi). 下次再来 = lần sau lại đến nhé (tinh thần lạc quan)." },
            vocab: [{ word: "关系", py: "guānxi", vi: "quan hệ (没关系 = không sao)" }, { word: "再", py: "zài", vi: "lại" }, { word: "来", py: "lái", vi: "đến" }] },
          { zh: "没有关系，我们再来下次！", py: "Méiyǒu guānxi, wǒmen zài lái xià cì!", vi: "Không có sao, chúng mình lại đến lần sau!", correct: false,
            analysis: { structure: "Sai vị trí cụm thời gian 下次", explain: "Trạng ngữ thời gian 下次 đứng trước cụm động từ: 下次再来." },
            vocab: [{ word: "再", py: "zài", vi: "lại" }] },
        ] },
        { kind: "quote", zh: "她们决定以后多练习唱歌。", py: "Tāmen juédìng yǐhòu duō liànxí chànggē.", vi: "Họ quyết định sau này sẽ luyện hát nhiều hơn." },
      ],
      ending: { title: "下次再来 🎶", titleVi: "Lần sau lại đến" },
    },
  },
};
