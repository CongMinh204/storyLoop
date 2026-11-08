import type { BranchingStory } from "../../types";

// Truyện "Sinh Nhật Ở Khách Sạn" (HSK 2, Bài 12), truyện rẽ nhánh với 8 kết thúc. Người chơi vào vai bạn (你), một học sinh cùng lớp với 杨笑笑 (nhân vật không có tên).
// Bản gốc của người viết: src/imports/stories/sinh-nhat-o-khach-san.md (tên gốc: 宾馆里的生日; tab "BÀI 12– Sinh nhật ở khách sạn - Vynh" trong Doc thứ hai "(2) HSK 2")
// Mỗi câu nói của 你 là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Lời dẫn của tác giả hiện dạng chữ Hán + pinyin + phụ đề (quote); câu nói của nhân vật khác tách khỏi câu dẫn thành npc.
// Doc chỉ ghi lựa chọn bằng tiếng Việt: câu chữ Hán của mỗi lựa chọn (zh) là bản dịch ngắn của lựa chọn đó.
// Tên kết thúc bằng chữ Hán là bản dịch từ tên tiếng Việt của tác giả (Doc chỉ có tên tiếng Việt).
// Từ vựng: bảng của tác giả có 12 từ; thêm 0 từ có trong truyện để đủ 12 thẻ flashcard.
// Người chơi là "你" (không có tên), nên câu của "你" trong Doc đều là bước chọn (pick).
// Cảnh có ba lựa chọn ở cảnh 01 (A, B, C); các cảnh còn lại hai lựa chọn.
// Không đổi câu chữ hay cách nối cảnh so với bản gốc.
export const SINH_NHAT_O_KHACH_SAN: BranchingStory = {
  start: "01",
  characters: {
    "老师": "🧑‍🏫",
    "杨笑笑": "👧",
    "爸爸": "👨",
    "路人": "🧑",
  },
  vocab: [
    { word: "着", py: "zhe", vi: "(trợ từ) đang, giữ trạng thái",
      ex: { zh: "杨笑笑穿着一件红色的衣服，手里拿着一支铅笔。", py: "Yáng Xiàoxiao chuānzhe yí jiàn hóngsè de yīfu, shǒu lǐ názhe yì zhī qiānbǐ.", vi: "Dương Tiếu Tiếu mặc một chiếc áo màu đỏ, tay cầm một chiếc bút chì." } },
    { word: "手", py: "shǒu", vi: "tay",
      ex: { zh: "她还在原来的地方，手里拿着一支铅笔。", py: "Tā hái zài yuánlái de dìfang, shǒu lǐ názhe yì zhī qiānbǐ.", vi: "Cô ấy vẫn ở chỗ cũ, tay cầm một chiếc bút chì." } },
    { word: "拿", py: "ná", vi: "cầm, lấy",
      ex: { zh: "杨笑笑一直拿着那支铅笔。", py: "Yáng Xiàoxiao yìzhí názhe nà zhī qiānbǐ.", vi: "Dương Tiếu Tiếu cứ cầm chiếc bút chì đó." } },
    { word: "铅笔", py: "qiānbǐ", vi: "bút chì",
      ex: { zh: "她拿着铅笔，在纸上写了几个字。", py: "Tā názhe qiānbǐ, zài zhǐ shàng xiě le jǐ ge zì.", vi: "Cô ấy cầm bút chì, viết vài chữ lên giấy." } },
    { word: "杨笑笑", py: "Yáng Xiàoxiao", vi: "Dương Tiếu Tiếu (tên riêng)",
      ex: { zh: "杨笑笑跑到爸爸身边，抱住了他。", py: "Yáng Xiàoxiao pǎo dào bàba shēnbiān, bào zhù le tā.", vi: "Dương Tiếu Tiếu chạy đến bên bố và ôm lấy ông." } },
    { word: "班", py: "bān", vi: "lớp học",
      ex: { zh: "今天是星期六，杨笑笑的班要一起去看一个人。", py: "Jīntiān shì xīngqīliù, Yáng Xiàoxiao de bān yào yìqǐ qù kàn yí ge rén.", vi: "Hôm nay là thứ Bảy, lớp của Dương Tiếu Tiếu sẽ cùng nhau đi thăm một người." } },
    { word: "长", py: "zhǎng", vi: "lớn lên, mọc",
      ex: { zh: "你长高了！", py: "Nǐ zhǎng gāo le!", vi: "Con cao lớn hơn rồi!" } },
    { word: "笑", py: "xiào", vi: "cười",
      ex: { zh: "杨笑笑也笑了。", py: "Yáng Xiàoxiao yě xiào le.", vi: "Dương Tiếu Tiếu cũng cười." } },
    { word: "宾馆", py: "bīnguǎn", vi: "khách sạn",
      ex: { zh: "他今天在宾馆，我想去看他。", py: "Tā jīntiān zài bīnguǎn, wǒ xiǎng qù kàn tā.", vi: "Hôm nay bố tớ ở khách sạn, tớ muốn đến thăm bố." } },
    { word: "一直", py: "yìzhí", vi: "luôn, liên tục, cứ",
      ex: { zh: "她一直看着手机，好像在等一个电话。", py: "Tā yìzhí kànzhe shǒujī, hǎoxiàng zài děng yí ge diànhuà.", vi: "Cô ấy cứ nhìn điện thoại, dường như đang đợi một cuộc gọi." } },
    { word: "往", py: "wǎng", vi: "về phía, hướng về",
      ex: { zh: "你们往学校外面走。", py: "Nǐmen wǎng xuéxiào wàimiàn zǒu.", vi: "Hai người đi về phía bên ngoài trường học." } },
    { word: "路口", py: "lùkǒu", vi: "giao lộ, ngã tư",
      ex: { zh: "到了路口，她停了下来。", py: "Dào le lùkǒu, tā tíng le xiàlái.", vi: "Đến giao lộ, cô ấy dừng lại." } },
  ],
  nodes: {
    // CẢNH 01 — MỘT TIN NHẮN LẠ
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "📍 Thứ Bảy · Trước giờ đi · Cả lớp sắp cùng đi thăm một người, còn 杨笑笑 cứ nhìn điện thoại như đang đợi ai gọi." },
        { kind: "quote", zh: "今天是星期六，杨笑笑的班要一起去看一个人。", py: "Jīntiān shì xīngqīliù, Yáng Xiàoxiao de bān yào yìqǐ qù kàn yí ge rén.", vi: "Hôm nay là thứ Bảy, lớp của Dương Tiếu Tiếu sẽ cùng nhau đi thăm một người." },
        { kind: "quote", zh: "杨笑笑穿着一件红色的衣服，手里拿着一支铅笔。", py: "Yáng Xiàoxiao chuānzhe yí jiàn hóngsè de yīfu, shǒu lǐ názhe yì zhī qiānbǐ.", vi: "Dương Tiếu Tiếu mặc một chiếc áo màu đỏ, tay cầm một chiếc bút chì." },
        { kind: "quote", zh: "她一直看着手机，好像在等一个电话。", py: "Tā yìzhí kànzhe shǒujī, hǎoxiàng zài děng yí ge diànhuà.", vi: "Cô ấy cứ nhìn điện thoại, dường như đang đợi một cuộc gọi." },
        { kind: "quote", zh: "老师问她：", py: "Lǎoshī wèn tā:", vi: "Giáo viên hỏi cô ấy:" },
        { kind: "npc", speaker: "老师", zh: "你今天怎么了？", py: "Nǐ jīntiān zěnme le?", vi: "Hôm nay em sao vậy?" },
        { kind: "quote", zh: "杨笑笑笑了笑，说：", py: "Yáng Xiàoxiao xiào le xiào, shuō:", vi: "Dương Tiếu Tiếu cười một cái rồi nói:" },
        { kind: "npc", speaker: "杨笑笑", zh: "没什么。", py: "Méi shénme.", vi: "Không có gì ạ." },
      ],
      choices: [
        {
          label: "Hỏi thẳng Dương Tiếu Tiếu đang đợi ai",
          zh: "直接问杨笑笑在等谁。", py: "Zhíjiē wèn Yáng Xiàoxiao zài děng shéi.", vi: "Hỏi thẳng Dương Tiếu Tiếu đang đợi ai.",
          next: "02A",
          analysis: { structure: "问 + Người + (câu hỏi)", explain: "直接问杨笑笑 = hỏi thẳng Tiếu Tiếu: 直接 đứng trước động từ. 在等谁 = đang đợi ai." },
          vocab: [{ word: "直接", py: "zhíjiē", vi: "thẳng, trực tiếp" }, { word: "等", py: "děng", vi: "đợi" }],
        },
        {
          label: "Hỏi giáo viên xem hôm nay cả lớp đi đâu",
          zh: "问老师今天全班去哪儿。", py: "Wèn lǎoshī jīntiān quán bān qù nǎr.", vi: "Hỏi giáo viên xem hôm nay cả lớp đi đâu.",
          next: "02B",
          analysis: { structure: "问 + Người + (câu hỏi)", explain: "问老师 = hỏi giáo viên. 全班 = cả lớp. 去哪儿 = đi đâu." },
          vocab: [{ word: "全班", py: "quán bān", vi: "cả lớp" }, { word: "哪儿", py: "nǎr", vi: "đâu" }],
        },
        {
          label: "Không hỏi gì, chờ xem chuyện gì xảy ra",
          zh: "什么都不问，看看会发生什么。", py: "Shénme dōu bú wèn, kànkan huì fāshēng shénme.", vi: "Không hỏi gì, chờ xem chuyện gì xảy ra.",
          next: "02C",
          analysis: { structure: "什么…都不…", explain: "什么都不问 = không hỏi gì cả: 什么…都不… là cấu trúc phủ định toàn bộ. 看看 = xem thử (lặp động từ)." },
          vocab: [{ word: "发生", py: "fāshēng", vi: "xảy ra" }, { word: "看看", py: "kànkan", vi: "xem thử" }],
        },
      ],
    },
    // CẢNH 02A — CÂU TRẢ LỜI CỦA TIẾU TIẾU
    "02A": {
      id: "02A",
      lines: [
        { kind: "quote", zh: "你问杨笑笑：", py: "Nǐ wèn Yáng Xiàoxiao:", vi: "Bạn hỏi Dương Tiếu Tiếu:" },
        { kind: "pick", options: [
          { zh: "你谁在等？", py: "Nǐ shéi zài děng?", vi: "Cậu ai đang đợi?", correct: false,
            analysis: { structure: "Sai vị trí 谁", explain: "Từ nghi vấn 谁 đứng ở vị trí tân ngữ, sau động từ: 等谁, không đưa lên trước 在." },
            vocab: [{ word: "谁", py: "shéi", vi: "ai" }] },
          { zh: "你在等谁？", py: "Nǐ zài děng shéi?", vi: "Cậu đang đợi ai vậy?", correct: true,
            analysis: { structure: "在 + Động từ; 谁 (hỏi người)", explain: "你在等谁 = cậu đang đợi ai: 在 đứng trước động từ báo hành động đang diễn ra; 谁 là từ nghi vấn hỏi người, đứng ở vị trí tân ngữ." },
            vocab: [{ word: "在", py: "zài", vi: "đang" }, { word: "等", py: "děng", vi: "đợi" }, { word: "谁", py: "shéi", vi: "ai" }] },
          { zh: "你在等谁吗？", py: "Nǐ zài děng shéi ma?", vi: "Cậu đang đợi ai à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ nghi vấn 谁 thì không thêm 吗 ở cuối." },
            vocab: [{ word: "谁", py: "shéi", vi: "ai" }] },
        ] },
        { kind: "quote", zh: "她看着你，说：", py: "Tā kànzhe nǐ, shuō:", vi: "Cô ấy nhìn bạn rồi nói:" },
        { kind: "npc", speaker: "杨笑笑", zh: "我在等我爸爸。", py: "Wǒ zài děng wǒ bàba.", vi: "Tớ đang đợi bố tớ." },
        { kind: "npc", speaker: "杨笑笑", zh: "他今天在宾馆，我想去看他。", py: "Tā jīntiān zài bīnguǎn, wǒ xiǎng qù kàn tā.", vi: "Hôm nay bố tớ ở khách sạn, tớ muốn đến thăm bố." },
        { kind: "pick", options: [
          { zh: "那我们一起去吗？", py: "Nà wǒmen yìqǐ qù ma?", vi: "Vậy chúng ta cùng đi nhé?", correct: true,
            analysis: { structure: "那 + câu; 一起 + Động từ + 吗", explain: "那 = vậy thì (nối với điều vừa nghe). 一起去 = cùng đi: 一起 đứng trước động từ. 吗 cuối câu để hỏi." },
            vocab: [{ word: "那", py: "nà", vi: "vậy thì" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
          { zh: "那我们去一起吗？", py: "Nà wǒmen qù yìqǐ ma?", vi: "Vậy chúng ta đi cùng nhau à?", correct: false,
            analysis: { structure: "Sai vị trí 一起", explain: "一起 phải đứng trước động từ: 一起去, không đặt sau 去." },
            vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
          { zh: "那我们一起去吧吗？", py: "Nà wǒmen yìqǐ qù ba ma?", vi: "Vậy chúng ta cùng đi nhé à?", correct: false,
            analysis: { structure: "Dùng cùng lúc 吧 và 吗", explain: "吧 (rủ rê) và 吗 (hỏi có/không) không đi chung một câu; chỉ chọn một trong hai." },
            vocab: [{ word: "吗", py: "ma", vi: "(trợ từ hỏi)" }] },
        ] },
        { kind: "quote", zh: "她没有马上回答。", py: "Tā méiyǒu mǎshàng huídá.", vi: "Cô ấy không trả lời ngay." },
      ],
      choices: [
        {
          label: "Nói rằng bạn muốn đi cùng cô ấy",
          zh: "我想和你一起去。", py: "Wǒ xiǎng hé nǐ yìqǐ qù.", vi: "Nói rằng bạn muốn đi cùng cô ấy.",
          next: "03A",
          analysis: { structure: "想 + 和 + Người + 一起 + Động từ", explain: "想和你一起去 = muốn cùng cậu đi: 想 đứng trước cả cụm; 和你一起 đứng trước động từ 去." },
          vocab: [{ word: "想", py: "xiǎng", vi: "muốn" }, { word: "和", py: "hé", vi: "cùng" }],
        },
        {
          label: "Hỏi tại sao bố cô ấy ở khách sạn",
          zh: "问她爸爸为什么在宾馆。", py: "Wèn tā bàba wèishénme zài bīnguǎn.", vi: "Hỏi tại sao bố cô ấy ở khách sạn.",
          next: "03B",
          analysis: { structure: "问 + Người + 为什么 + 在 + Nơi chốn", explain: "问她 = hỏi cô ấy; 为什么在宾馆 = tại sao ở khách sạn: 为什么 đứng trước 在." },
          vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }, { word: "宾馆", py: "bīnguǎn", vi: "khách sạn" }],
        },
      ],
    },
    // CẢNH 02B — ĐỊA ĐIỂM HÔM NAY
    "02B": {
      id: "02B",
      lines: [
        { kind: "npc", speaker: "老师", zh: "我们今天要去一个宾馆。", py: "Wǒmen jīntiān yào qù yí ge bīnguǎn.", vi: "Hôm nay chúng ta sẽ đến một khách sạn." },
        { kind: "quote", zh: "你觉得很奇怪，问：", py: "Nǐ juéde hěn qíguài, wèn:", vi: "Bạn cảm thấy rất lạ và hỏi:" },
        { kind: "pick", options: [
          { zh: "我们去宾馆为什么？", py: "Wǒmen qù bīnguǎn wèishénme?", vi: "Chúng ta đến khách sạn tại sao?", correct: false,
            analysis: { structure: "Sai vị trí 为什么", explain: "为什么 hỏi lý do nên đứng trước động từ chính: 为什么去, không đặt ở cuối câu." },
            vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }] },
          { zh: "我们为什么去宾馆吗？", py: "Wǒmen wèishénme qù bīnguǎn ma?", vi: "Tại sao chúng ta đến khách sạn à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ nghi vấn 为什么 thì không thêm 吗." },
            vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }] },
          { zh: "我们为什么去宾馆？", py: "Wǒmen wèishénme qù bīnguǎn?", vi: "Tại sao chúng ta lại đến khách sạn ạ?", correct: true,
            analysis: { structure: "为什么 + Động từ", explain: "为什么 = tại sao, đứng trước động từ: 为什么去宾馆 = tại sao lại đến khách sạn." },
            vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }, { word: "宾馆", py: "bīnguǎn", vi: "khách sạn" }] },
        ] },
        { kind: "npc", speaker: "老师", zh: "到了你就知道了。", py: "Dào le nǐ jiù zhīdào le.", vi: "Đến nơi em sẽ biết." },
        { kind: "quote", zh: "这时，杨笑笑走过来，说：", py: "Zhè shí, Yáng Xiàoxiao zǒu guòlái, shuō:", vi: "Lúc này, Dương Tiếu Tiếu đi tới và nói:" },
        { kind: "npc", speaker: "杨笑笑", zh: "我也想去。", py: "Wǒ yě xiǎng qù.", vi: "Em cũng muốn đi ạ." },
      ],
      choices: [
        {
          label: "Đi cùng giáo viên và hỏi thêm về chuyến đi",
          zh: "跟老师一起去，再多问一点儿。", py: "Gēn lǎoshī yìqǐ qù, zài duō wèn yìdiǎnr.", vi: "Đi cùng giáo viên và hỏi thêm về chuyến đi.",
          next: "03C",
          analysis: { structure: "跟 + Người + 一起 + Động từ", explain: "跟老师一起去 = cùng giáo viên đi. 再多问一点儿 = hỏi thêm một chút: 再 và 多 đứng trước động từ." },
          vocab: [{ word: "跟", py: "gēn", vi: "cùng với" }, { word: "多", py: "duō", vi: "nhiều, thêm" }],
        },
        {
          label: "Đi cùng Dương Tiếu Tiếu và hỏi cô ấy về khách sạn",
          zh: "和杨笑笑一起走，问她宾馆的事。", py: "Hé Yáng Xiàoxiao yìqǐ zǒu, wèn tā bīnguǎn de shì.", vi: "Đi cùng Dương Tiếu Tiếu và hỏi cô ấy về khách sạn.",
          next: "03D",
          analysis: { structure: "和 + Người + 一起 + Động từ; 宾馆的事", explain: "和杨笑笑一起走 = cùng Tiếu Tiếu đi. 宾馆的事 = chuyện về khách sạn: 的 nối danh từ với 事." },
          vocab: [{ word: "走", py: "zǒu", vi: "đi" }, { word: "事", py: "shì", vi: "chuyện" }],
        },
      ],
    },
    // CẢNH 02C — MỘT HÀNH ĐỘNG LẠ
    "02C": {
      id: "02C",
      lines: [
        { kind: "quote", zh: "你没有问杨笑笑，只是看着她。", py: "Nǐ méiyǒu wèn Yáng Xiàoxiao, zhǐshì kànzhe tā.", vi: "Bạn không hỏi Dương Tiếu Tiếu, chỉ quan sát cô ấy." },
        { kind: "quote", zh: "她拿着铅笔，在纸上写了几个字。", py: "Tā názhe qiānbǐ, zài zhǐ shàng xiě le jǐ ge zì.", vi: "Cô ấy cầm bút chì, viết vài chữ lên giấy." },
        { kind: "quote", zh: "然后，她把纸放进书包里。", py: "Ránhòu, tā bǎ zhǐ fàng jìn shūbāo lǐ.", vi: "Sau đó, cô ấy bỏ tờ giấy vào trong cặp." },
        { kind: "quote", zh: "你看见纸上有一个地址，还有一个时间。", py: "Nǐ kànjiàn zhǐ shàng yǒu yí ge dìzhǐ, hái yǒu yí ge shíjiān.", vi: "Bạn nhìn thấy trên tờ giấy có một địa chỉ và một thời gian." },
      ],
      choices: [
        {
          label: "Hỏi Tiếu Tiếu về tờ giấy",
          zh: "问杨笑笑那张纸的事。", py: "Wèn Yáng Xiàoxiao nà zhāng zhǐ de shì.", vi: "Hỏi Tiếu Tiếu về tờ giấy.",
          next: "03E",
          analysis: { structure: "那张纸 (Chỉ định + Lượng từ + Danh từ)", explain: "那张纸 = tờ giấy kia: 张 là lượng từ của vật phẳng như giấy. 的事 = chuyện về…" },
          vocab: [{ word: "纸", py: "zhǐ", vi: "giấy" }, { word: "张", py: "zhāng", vi: "(lượng từ cho giấy, vé)" }],
        },
        {
          label: "Giữ im lặng và đi theo cả lớp",
          zh: "不说话，跟着大家走。", py: "Bù shuōhuà, gēnzhe dàjiā zǒu.", vi: "Giữ im lặng và đi theo cả lớp.",
          next: "03F",
          analysis: { structure: "跟着 + Người + Động từ", explain: "不说话 = không nói gì. 跟着大家走 = đi theo mọi người: 跟着 (theo sau) đứng trước động từ." },
          vocab: [{ word: "说话", py: "shuōhuà", vi: "nói chuyện" }, { word: "跟着", py: "gēnzhe", vi: "theo sau" }],
        },
      ],
    },
    // CẢNH 03A — CÙNG ĐẾN KHÁCH SẠN
    "03A": {
      id: "03A",
      lines: [
        { kind: "pick", options: [
          { zh: "好，我跟你一起去。", py: "Hǎo, wǒ gēn nǐ yìqǐ qù.", vi: "Được, tớ đi cùng cậu.", correct: true,
            analysis: { structure: "跟 + Người + 一起 + Động từ", explain: "跟你一起去 = cùng cậu đi: 跟 (cùng với) + người, rồi 一起, rồi động từ. 好 mở đầu để nhận lời." },
            vocab: [{ word: "跟", py: "gēn", vi: "cùng với" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
          { zh: "好，我一起跟你去。", py: "Hǎo, wǒ yìqǐ gēn nǐ qù.", vi: "Được, tớ cùng đi với cậu (sai trật tự).", correct: false,
            analysis: { structure: "Sai trật tự 跟 và 一起", explain: "跟 + người phải đứng trước 一起: 跟你一起去." },
            vocab: [{ word: "跟", py: "gēn", vi: "cùng với" }] },
          { zh: "好，我跟你去一起。", py: "Hǎo, wǒ gēn nǐ qù yìqǐ.", vi: "Được, tớ với cậu đi cùng nhau.", correct: false,
            analysis: { structure: "Sai vị trí 一起", explain: "一起 phải đứng trước động từ, không đặt sau 去." },
            vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
        ] },
        { kind: "quote", zh: "杨笑笑笑了，说：", py: "Yáng Xiàoxiao xiào le, shuō:", vi: "Dương Tiếu Tiếu cười và nói:" },
        { kind: "npc", speaker: "杨笑笑", zh: "谢谢你！", py: "Xièxie nǐ!", vi: "Cảm ơn cậu!" },
        { kind: "quote", zh: "你们往学校外面走。", py: "Nǐmen wǎng xuéxiào wàimiàn zǒu.", vi: "Hai người đi về phía bên ngoài trường học." },
        { kind: "quote", zh: "到了路口，她停了下来。", py: "Dào le lùkǒu, tā tíng le xiàlái.", vi: "Đến giao lộ, cô ấy dừng lại." },
        { kind: "npc", speaker: "杨笑笑", zh: "我爸爸可能不想见我。", py: "Wǒ bàba kěnéng bù xiǎng jiàn wǒ.", vi: "Có lẽ bố tớ không muốn gặp tớ." },
      ],
      choices: [
        {
          label: "Nói rằng hai người cứ đến gặp bố cô ấy",
          zh: "说我们直接去见她爸爸。", py: "Shuō wǒmen zhíjiē qù jiàn tā bàba.", vi: "Nói rằng hai người cứ đến gặp bố cô ấy.",
          next: "04A",
          analysis: { structure: "直接 + Động từ", explain: "直接去见她爸爸 = đi thẳng gặp bố cô ấy: 直接 đứng trước động từ. 见 = gặp." },
          vocab: [{ word: "直接", py: "zhíjiē", vi: "thẳng" }, { word: "见", py: "jiàn", vi: "gặp" }],
        },
        {
          label: "Gọi điện cho bố cô ấy trước",
          zh: "先给她爸爸打电话。", py: "Xiān gěi tā bàba dǎ diànhuà.", vi: "Gọi điện cho bố cô ấy trước.",
          next: "04B",
          analysis: { structure: "先 + 给 + Người + 打电话", explain: "给她爸爸打电话 = gọi điện cho bố cô ấy: 给 + người nhận đứng trước 打电话. 先 = trước tiên." },
          vocab: [{ word: "先", py: "xiān", vi: "trước tiên" }, { word: "打电话", py: "dǎ diànhuà", vi: "gọi điện" }],
        },
      ],
    },
    // CẢNH 03B — VÌ SAO BỐ Ở KHÁCH SẠN?
    "03B": {
      id: "03B",
      lines: [
        { kind: "pick", options: [
          { zh: "你爸爸在宾馆为什么？", py: "Nǐ bàba zài bīnguǎn wèishénme?", vi: "Bố cậu ở khách sạn tại sao?", correct: false,
            analysis: { structure: "Sai vị trí 为什么", explain: "为什么 hỏi lý do, phải đứng trước 在宾馆, không đặt ở cuối câu." },
            vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }] },
          { zh: "你爸爸为什么在宾馆？", py: "Nǐ bàba wèishénme zài bīnguǎn?", vi: "Tại sao bố cậu lại ở khách sạn?", correct: true,
            analysis: { structure: "为什么 + 在 + Nơi chốn", explain: "为什么在宾馆 = tại sao ở khách sạn: 为什么 đứng trước 在. 你爸爸 = bố của cậu." },
            vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }, { word: "在", py: "zài", vi: "ở" }] },
          { zh: "你爸爸为什么宾馆在？", py: "Nǐ bàba wèishénme bīnguǎn zài?", vi: "Bố cậu tại sao khách sạn ở?", correct: false,
            analysis: { structure: "Sai vị trí 在", explain: "在 phải đứng trước nơi chốn: 在宾馆, không đặt sau 宾馆." },
            vocab: [{ word: "在", py: "zài", vi: "ở" }] },
        ] },
        { kind: "npc", speaker: "杨笑笑", zh: "他从别的地方来，今天晚上就走。", py: "Tā cóng bié de dìfang lái, jīntiān wǎnshang jiù zǒu.", vi: "Bố tớ từ nơi khác đến, tối nay sẽ đi rồi." },
        { kind: "npc", speaker: "杨笑笑", zh: "我很久没见他了。", py: "Wǒ hěn jiǔ méi jiàn tā le.", vi: "Tớ đã lâu không gặp bố." },
        { kind: "quote", zh: "她看着你，又笑了。", py: "Tā kànzhe nǐ, yòu xiào le.", vi: "Cô ấy nhìn bạn rồi lại cười." },
      ],
      choices: [
        {
          label: "Cùng cô ấy đến khách sạn",
          zh: "和她一起去宾馆。", py: "Hé tā yìqǐ qù bīnguǎn.", vi: "Cùng cô ấy đến khách sạn.",
          next: "04C",
          analysis: { structure: "和 + Người + 一起 + 去 + Nơi chốn", explain: "和她一起去宾馆 = cùng cô ấy đến khách sạn: 和她一起 đứng trước động từ 去." },
          vocab: [{ word: "和", py: "hé", vi: "cùng" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
        {
          label: "Khuyên cô ấy gọi điện cho bố trước",
          zh: "劝她先给爸爸打电话。", py: "Quàn tā xiān gěi bàba dǎ diànhuà.", vi: "Khuyên cô ấy gọi điện cho bố trước.",
          next: "04D",
          analysis: { structure: "劝 + Người + Động từ", explain: "劝她 = khuyên cô ấy; 先给爸爸打电话 = gọi điện cho bố trước." },
          vocab: [{ word: "劝", py: "quàn", vi: "khuyên" }, { word: "先", py: "xiān", vi: "trước" }],
        },
      ],
    },
    // CẢNH 03C — LỜI NÓI CỦA GIÁO VIÊN
    "03C": {
      id: "03C",
      lines: [
        { kind: "quote", zh: "你跟着老师往宾馆走。", py: "Nǐ gēnzhe lǎoshī wǎng bīnguǎn zǒu.", vi: "Bạn đi theo giáo viên về phía khách sạn." },
        { kind: "npc", speaker: "老师", zh: "今天有一个人要来见我们。", py: "Jīntiān yǒu yí ge rén yào lái jiàn wǒmen.", vi: "Hôm nay có một người sẽ đến gặp chúng ta." },
        { kind: "pick", options: [
          { zh: "谁是？", py: "Shéi shì?", vi: "Ai là?", correct: false,
            analysis: { structure: "Sai trật tự", explain: "Hỏi danh tính 'là ai' dùng 是谁: 是 đứng trước 谁." },
            vocab: [{ word: "谁", py: "shéi", vi: "ai" }] },
          { zh: "是谁吗？", py: "Shì shéi ma?", vi: "Là ai à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ nghi vấn 谁 thì không thêm 吗." },
            vocab: [{ word: "谁", py: "shéi", vi: "ai" }] },
          { zh: "是谁？", py: "Shì shéi?", vi: "Là ai ạ?", correct: true,
            analysis: { structure: "是 + 谁", explain: "是谁 = là ai: 是 nối với từ nghi vấn 谁 để hỏi danh tính." },
            vocab: [{ word: "是", py: "shì", vi: "là" }, { word: "谁", py: "shéi", vi: "ai" }] },
        ] },
        { kind: "quote", zh: "老师没有回答，只是笑了。", py: "Lǎoshī méiyǒu huídá, zhǐshì xiào le.", vi: "Giáo viên không trả lời, chỉ cười." },
      ],
      choices: [
        {
          label: "Hỏi thêm một lần nữa",
          zh: "再问一次。", py: "Zài wèn yí cì.", vi: "Hỏi thêm một lần nữa.",
          next: "04E",
          analysis: { structure: "再 + Động từ + 一次", explain: "再问一次 = hỏi thêm một lần nữa: 再 đứng trước động từ; 一次 là số lần, đứng sau động từ." },
          vocab: [{ word: "再", py: "zài", vi: "lại, thêm" }, { word: "次", py: "cì", vi: "lần" }],
        },
        {
          label: "Không hỏi nữa, chờ đến khách sạn",
          zh: "不再问了，等到了宾馆就知道了。", py: "Bú zài wèn le, děng dào le bīnguǎn jiù zhīdào le.", vi: "Không hỏi nữa, chờ đến khách sạn.",
          next: "04F",
          analysis: { structure: "不再…了; 等…就…", explain: "不再问了 = không hỏi nữa. 等到了宾馆就知道了 = đợi đến khách sạn là biết: 等…就… nối điều kiện với kết quả." },
          vocab: [{ word: "不再", py: "bú zài", vi: "không… nữa" }, { word: "就", py: "jiù", vi: "thì, là" }],
        },
      ],
    },
    // CẢNH 03D — TIẾU TIẾU CÓ ĐIỀU MUỐN NÓI
    "03D": {
      id: "03D",
      lines: [
        { kind: "quote", zh: "你问杨笑笑：", py: "Nǐ wèn Yáng Xiàoxiao:", vi: "Bạn hỏi Dương Tiếu Tiếu:" },
        { kind: "pick", options: [
          { zh: "你以前来这个宾馆过吗？", py: "Nǐ yǐqián lái zhège bīnguǎn guo ma?", vi: "Trước đây cậu đến khách sạn này từng à?", correct: false,
            analysis: { structure: "Sai vị trí 过", explain: "过 phải đứng ngay sau động từ, trước tân ngữ: 来过这个宾馆." },
            vocab: [{ word: "过", py: "guo", vi: "từng" }] },
          { zh: "你以前来过这个宾馆吗？", py: "Nǐ yǐqián lái guo zhège bīnguǎn ma?", vi: "Trước đây cậu từng đến khách sạn này chưa?", correct: true,
            analysis: { structure: "Động từ + 过 (từng); 这个 + Danh từ", explain: "来过 = từng đến: 过 sau động từ nói về kinh nghiệm đã có. 这个宾馆 = khách sạn này. 以前 = trước đây." },
            vocab: [{ word: "过", py: "guo", vi: "từng" }, { word: "这个", py: "zhège", vi: "này" }] },
          { zh: "你以前来过宾馆这个吗？", py: "Nǐ yǐqián lái guo bīnguǎn zhège ma?", vi: "Trước đây cậu từng đến khách sạn này à (sai trật tự)?", correct: false,
            analysis: { structure: "Sai trật tự 这个", explain: "这个 (này) là từ chỉ định, đứng trước danh từ: 这个宾馆." },
            vocab: [{ word: "这个", py: "zhège", vi: "này" }] },
        ] },
        { kind: "npc", speaker: "杨笑笑", zh: "来过，我爸爸住在这里。", py: "Lái guo, wǒ bàba zhù zài zhèlǐ.", vi: "Từng đến rồi, bố tớ ở đây." },
        { kind: "npc", speaker: "杨笑笑", zh: "可是，我不知道他今天想不想见我。", py: "Kěshì, wǒ bù zhīdào tā jīntiān xiǎng bu xiǎng jiàn wǒ.", vi: "Nhưng tớ không biết hôm nay bố có muốn gặp tớ không." },
      ],
      choices: [
        {
          label: "Nói rằng cô ấy nên tự hỏi bố",
          zh: "说她应该自己问爸爸。", py: "Shuō tā yīnggāi zìjǐ wèn bàba.", vi: "Nói rằng cô ấy nên tự hỏi bố.",
          next: "04G",
          analysis: { structure: "应该 + 自己 + Động từ", explain: "应该自己问爸爸 = nên tự hỏi bố: 应该 (nên) và 自己 (tự mình) đều đứng trước động từ." },
          vocab: [{ word: "应该", py: "yīnggāi", vi: "nên" }, { word: "自己", py: "zìjǐ", vi: "tự mình" }],
        },
        {
          label: "Nói rằng bạn sẽ đi cùng cô ấy",
          zh: "说我会跟她一起去。", py: "Shuō wǒ huì gēn tā yìqǐ qù.", vi: "Nói rằng bạn sẽ đi cùng cô ấy.",
          next: "04H",
          analysis: { structure: "会 + 跟 + Người + 一起 + Động từ", explain: "我会跟她一起去 = tớ sẽ đi cùng cô ấy: 会 (sẽ) đứng trước cụm 跟…一起." },
          vocab: [{ word: "会", py: "huì", vi: "sẽ" }, { word: "跟", py: "gēn", vi: "cùng với" }],
        },
      ],
    },
    // CẢNH 03E — TỜ GIẤY
    "03E": {
      id: "03E",
      lines: [
        { kind: "pick", options: [
          { zh: "你写的是什么？", py: "Nǐ xiě de shì shénme?", vi: "Cậu viết gì vậy?", correct: true,
            analysis: { structure: "Động từ + 的 + 是 + 什么", explain: "你写的是什么 = cái cậu viết là gì: 你写的 (mệnh đề + 的) làm chủ ngữ, 是什么 hỏi nội dung." },
            vocab: [{ word: "写", py: "xiě", vi: "viết" }, { word: "什么", py: "shénme", vi: "gì" }] },
          { zh: "你写是的什么？", py: "Nǐ xiě shì de shénme?", vi: "Cậu viết là của gì?", correct: false,
            analysis: { structure: "Sai vị trí 的", explain: "的 đứng ngay sau động từ để gom thành 'cái cậu viết' (写的), rồi mới đến 是." },
            vocab: [{ word: "的", py: "de", vi: "(trợ từ định ngữ)" }] },
          { zh: "你写的是什么吗？", py: "Nǐ xiě de shì shénme ma?", vi: "Cậu viết gì vậy à?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ nghi vấn 什么 thì không thêm 吗." },
            vocab: [{ word: "什么", py: "shénme", vi: "gì" }] },
        ] },
        { kind: "npc", speaker: "杨笑笑", zh: "这是我爸爸住的宾馆。", py: "Zhè shì wǒ bàba zhù de bīnguǎn.", vi: "Đây là khách sạn bố tớ ở." },
        { kind: "pick", options: [
          { zh: "你要去一个人吗？", py: "Nǐ yào qù yí ge rén ma?", vi: "Cậu định đi một người à?", correct: false,
            analysis: { structure: "Sai vị trí 一个人", explain: "一个人 (một mình) là trạng ngữ nên đứng trước động từ: 一个人去, không đặt sau 去." },
            vocab: [{ word: "一个人", py: "yí ge rén", vi: "một mình" }] },
          { zh: "你要一个人去不吗？", py: "Nǐ yào yí ge rén qù bu ma?", vi: "Cậu định đi một mình không à?", correct: false,
            analysis: { structure: "Thừa 不 trước 吗", explain: "Hỏi có/không dùng 吗 hoặc dạng chính phản (去不去), không dùng cả hai." },
            vocab: [{ word: "吗", py: "ma", vi: "(trợ từ hỏi)" }] },
          { zh: "你要一个人去吗？", py: "Nǐ yào yí ge rén qù ma?", vi: "Cậu định đi một mình à?", correct: true,
            analysis: { structure: "一个人 + Động từ", explain: "一个人去 = đi một mình: 一个人 là trạng ngữ đứng trước động từ. 要 = định, sẽ." },
            vocab: [{ word: "一个人", py: "yí ge rén", vi: "một mình" }, { word: "要", py: "yào", vi: "định, sẽ" }] },
        ] },
        { kind: "quote", zh: "她点点头。", py: "Tā diǎn diǎn tóu.", vi: "Cô ấy gật đầu." },
      ],
      choices: [
        {
          label: "Đi cùng cô ấy",
          zh: "跟她一起去。", py: "Gēn tā yìqǐ qù.", vi: "Đi cùng cô ấy.",
          next: "04I",
          analysis: { structure: "跟 + Người + 一起 + Động từ", explain: "跟她一起去 = cùng cô ấy đi: 跟 + người đi cùng và 一起 đứng trước động từ." },
          vocab: [{ word: "跟", py: "gēn", vi: "cùng với" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
        {
          label: "Nói với giáo viên để cô ấy không phải đi một mình",
          zh: "告诉老师，不让她一个人去。", py: "Gàosu lǎoshī, bú ràng tā yí ge rén qù.", vi: "Nói với giáo viên để cô ấy không phải đi một mình.",
          next: "04J",
          analysis: { structure: "不让 + Người + Động từ", explain: "告诉老师 = nói với giáo viên. 不让她一个人去 = không để cô ấy đi một mình: 让 + người + động từ, 不 đứng trước 让." },
          vocab: [{ word: "告诉", py: "gàosu", vi: "nói cho biết" }, { word: "让", py: "ràng", vi: "để, cho" }],
        },
      ],
    },
    // CẢNH 03F — ĐI THEO CẢ LỚP
    "03F": {
      id: "03F",
      lines: [
        { kind: "quote", zh: "你没有问她，跟着大家一起走。", py: "Nǐ méiyǒu wèn tā, gēnzhe dàjiā yìqǐ zǒu.", vi: "Bạn không hỏi cô ấy, đi cùng mọi người." },
        { kind: "quote", zh: "走到路口的时候，杨笑笑没有跟上来。", py: "Zǒu dào lùkǒu de shíhou, Yáng Xiàoxiao méiyǒu gēn shànglái.", vi: "Khi đi đến giao lộ, Dương Tiếu Tiếu không đi theo kịp." },
        { kind: "npc", speaker: "老师", zh: "杨笑笑呢？", py: "Yáng Xiàoxiao ne?", vi: "Dương Tiếu Tiếu đâu rồi?" },
      ],
      choices: [
        {
          label: "Quay lại tìm cô ấy",
          zh: "回去找她。", py: "Huíqù zhǎo tā.", vi: "Quay lại tìm cô ấy.",
          next: "04K",
          analysis: { structure: "回去 + Động từ", explain: "回去找她 = quay lại tìm cô ấy: 回去 (quay lại) rồi mới đến mục đích 找." },
          vocab: [{ word: "回去", py: "huíqù", vi: "quay lại" }, { word: "找", py: "zhǎo", vi: "tìm" }],
        },
        {
          label: "Nói với giáo viên về tờ giấy bạn đã nhìn thấy",
          zh: "告诉老师我看见的那张纸。", py: "Gàosu lǎoshī wǒ kànjiàn de nà zhāng zhǐ.", vi: "Nói với giáo viên về tờ giấy bạn đã nhìn thấy.",
          next: "04L",
          analysis: { structure: "Mệnh đề + 的 + Danh từ", explain: "我看见的那张纸 = tờ giấy mà tớ đã thấy: mệnh đề + 的 + danh từ. 告诉老师 = nói với giáo viên." },
          vocab: [{ word: "看见", py: "kànjiàn", vi: "nhìn thấy" }, { word: "纸", py: "zhǐ", vi: "giấy" }],
        },
      ],
    },
    // CẢNH 04A — MỘT CUỘC GẶP MẶT
    "04A": {
      id: "04A",
      lines: [
        { kind: "pick", options: [
          { zh: "我们去吧，他也许很想你见。", py: "Wǒmen qù ba, tā yěxǔ hěn xiǎng nǐ jiàn.", vi: "Chúng ta đi đi, ông ấy có lẽ rất muốn cậu gặp.", correct: false,
            analysis: { structure: "Sai vị trí tân ngữ", explain: "Tân ngữ 你 đứng sau động từ 见: 见你, không đặt trước 见." },
            vocab: [{ word: "见", py: "jiàn", vi: "gặp" }] },
          { zh: "我们去吧，也许他很想见你。", py: "Wǒmen qù ba, yěxǔ tā hěn xiǎng jiàn nǐ.", vi: "Chúng ta đi đi, có lẽ bố cậu rất muốn gặp cậu.", correct: true,
            analysis: { structure: "也许 + câu; 很想 + Động từ", explain: "也许 = có lẽ, đứng đầu vế sau. 很想见你 = rất muốn gặp cậu: 很 đứng trước 想, tân ngữ 你 đứng sau 见. 吧 ở vế đầu để rủ rê." },
            vocab: [{ word: "也许", py: "yěxǔ", vi: "có lẽ" }, { word: "想", py: "xiǎng", vi: "muốn" }] },
          { zh: "我们去吗，也许他很想见你。", py: "Wǒmen qù ma, yěxǔ tā hěn xiǎng jiàn nǐ.", vi: "Chúng ta đi à, có lẽ bố cậu rất muốn gặp cậu.", correct: false,
            analysis: { structure: "Dùng sai 吗", explain: "Lời rủ rê, đề nghị dùng 吧, không dùng 吗 (trợ từ hỏi có/không)." },
            vocab: [{ word: "吧", py: "ba", vi: "nhé (rủ rê)" }] },
        ] },
        { kind: "quote", zh: "杨笑笑点点头。", py: "Yáng Xiàoxiao diǎn diǎn tóu.", vi: "Dương Tiếu Tiếu gật đầu." },
        { kind: "quote", zh: "到了宾馆，她看见爸爸在门口等她。", py: "Dào le bīnguǎn, tā kànjiàn bàba zài ménkǒu děng tā.", vi: "Đến khách sạn, cô ấy nhìn thấy bố đang đợi mình ở cửa." },
        { kind: "quote", zh: "爸爸看见她，马上走过来。", py: "Bàba kànjiàn tā, mǎshàng zǒu guòlái.", vi: "Bố nhìn thấy cô ấy và lập tức đi tới." },
      ],
      choices: [
        {
          label: "Để hai bố con nói chuyện riêng",
          zh: "让她和爸爸自己说话。", py: "Ràng tā hé bàba zìjǐ shuōhuà.", vi: "Để hai bố con nói chuyện riêng.",
          next: "END_1",
          analysis: { structure: "让 + Người + Động từ", explain: "让她和爸爸自己说话 = để cô ấy và bố tự nói chuyện: 让 + người + động từ; 自己 = riêng với nhau." },
          vocab: [{ word: "让", py: "ràng", vi: "để, cho" }, { word: "说话", py: "shuōhuà", vi: "nói chuyện" }],
        },
        {
          label: "Ở lại và cùng ăn tối với hai bố con",
          zh: "留下来，和他们一起吃晚饭。", py: "Liú xiàlái, hé tāmen yìqǐ chī wǎnfàn.", vi: "Ở lại và cùng ăn tối với hai bố con.",
          next: "END_2",
          analysis: { structure: "和 + Người + 一起 + Động từ", explain: "留下来 = ở lại. 和他们一起吃晚饭 = cùng họ ăn tối: 和 + người và 一起 đứng trước động từ." },
          vocab: [{ word: "留", py: "liú", vi: "ở lại" }, { word: "晚饭", py: "wǎnfàn", vi: "bữa tối" }],
        },
      ],
    },
    // CẢNH 04B — CUỘC GỌI
    "04B": {
      id: "04B",
      lines: [
        { kind: "quote", zh: "你拿出手机，给她爸爸打电话。", py: "Nǐ ná chū shǒujī, gěi tā bàba dǎ diànhuà.", vi: "Bạn lấy điện thoại ra, gọi cho bố cô ấy." },
        { kind: "quote", zh: "电话里，一个男人说：", py: "Diànhuà lǐ, yí ge nánrén shuō:", vi: "Trong điện thoại, một người đàn ông nói:" },
        { kind: "npc", speaker: "爸爸", zh: "我在宾馆等她。", py: "Wǒ zài bīnguǎn děng tā.", vi: "Bố đang đợi con bé ở khách sạn." },
        { kind: "quote", zh: "杨笑笑听见了，笑了。", py: "Yáng Xiàoxiao tīngjiàn le, xiào le.", vi: "Dương Tiếu Tiếu nghe thấy, liền cười." },
      ],
      choices: [
        {
          label: "Đi ngay đến khách sạn",
          zh: "马上去宾馆。", py: "Mǎshàng qù bīnguǎn.", vi: "Đi ngay đến khách sạn.",
          next: "END_1",
          analysis: { structure: "马上 + Động từ", explain: "马上去宾馆 = đi ngay đến khách sạn: 马上 đứng trước động từ." },
          vocab: [{ word: "马上", py: "mǎshàng", vi: "ngay lập tức" }, { word: "宾馆", py: "bīnguǎn", vi: "khách sạn" }],
        },
        {
          label: "Cùng cô ấy hỏi đường rồi đến khách sạn",
          zh: "和她问路，然后去宾馆。", py: "Hé tā wènlù, ránhòu qù bīnguǎn.", vi: "Cùng cô ấy hỏi đường rồi đến khách sạn.",
          next: "END_3",
          analysis: { structure: "然后 + Động từ", explain: "问路 = hỏi đường. 然后去宾馆 = sau đó đến khách sạn: 然后 nối hai việc theo thứ tự." },
          vocab: [{ word: "问路", py: "wènlù", vi: "hỏi đường" }, { word: "然后", py: "ránhòu", vi: "sau đó" }],
        },
      ],
    },
    // CẢNH 04C — ĐI CÙNG NHAU
    "04C": {
      id: "04C",
      lines: [
        { kind: "quote", zh: "你们一起往宾馆走。", py: "Nǐmen yìqǐ wǎng bīnguǎn zǒu.", vi: "Hai người cùng đi về phía khách sạn." },
        { kind: "quote", zh: "杨笑笑一直拿着那支铅笔。", py: "Yáng Xiàoxiao yìzhí názhe nà zhī qiānbǐ.", vi: "Dương Tiếu Tiếu cứ cầm chiếc bút chì đó." },
        { kind: "pick", options: [
          { zh: "你为什么拿一直着它？", py: "Nǐ wèishénme ná yìzhí zhe tā?", vi: "Tại sao cậu cầm cứ đang nó?", correct: false,
            analysis: { structure: "Sai vị trí 一直", explain: "一直 (luôn, cứ) là phó từ nên đứng trước động từ: 一直拿着." },
            vocab: [{ word: "一直", py: "yìzhí", vi: "cứ, luôn" }] },
          { zh: "你为什么一直着拿它？", py: "Nǐ wèishénme yìzhí zhe ná tā?", vi: "Tại sao cậu cứ đang cầm nó?", correct: false,
            analysis: { structure: "Sai vị trí 着", explain: "着 phải đứng ngay sau động từ: 拿着, rồi mới đến tân ngữ 它." },
            vocab: [{ word: "着", py: "zhe", vi: "đang (giữ trạng thái)" }] },
          { zh: "你为什么一直拿着它？", py: "Nǐ wèishénme yìzhí názhe tā?", vi: "Tại sao cậu cứ cầm nó vậy?", correct: true,
            analysis: { structure: "为什么 + 一直 + Động từ + 着", explain: "为什么 hỏi lý do, đứng trước. 一直拿着 = cứ cầm mãi: 一直 đứng trước động từ, 着 đứng ngay sau động từ để báo trạng thái kéo dài." },
            vocab: [{ word: "一直", py: "yìzhí", vi: "cứ, luôn" }, { word: "着", py: "zhe", vi: "đang (giữ trạng thái)" }] },
        ] },
        { kind: "npc", speaker: "杨笑笑", zh: "这是爸爸送我的。", py: "Zhè shì bàba sòng wǒ de.", vi: "Đây là món quà bố tặng tớ." },
      ],
      choices: [
        {
          label: "Để cô ấy tự đưa bút chì cho bố",
          zh: "让她自己把铅笔给爸爸。", py: "Ràng tā zìjǐ bǎ qiānbǐ gěi bàba.", vi: "Để cô ấy tự đưa bút chì cho bố.",
          next: "END_2",
          analysis: { structure: "让 + Người + 把 + Tân ngữ + 给 + Người", explain: "让她自己 = để cô ấy tự làm. 把铅笔给爸爸 = đưa bút chì cho bố: câu chữ 把." },
          vocab: [{ word: "铅笔", py: "qiānbǐ", vi: "bút chì" }, { word: "给", py: "gěi", vi: "đưa, cho" }],
        },
        {
          label: "Giúp cô ấy nói với bố rằng cô ấy rất nhớ bố",
          zh: "帮她告诉爸爸她很想他。", py: "Bāng tā gàosu bàba tā hěn xiǎng tā.", vi: "Giúp cô ấy nói với bố rằng cô ấy rất nhớ bố.",
          next: "END_4",
          analysis: { structure: "帮 + Người + Động từ", explain: "帮她告诉爸爸 = giúp cô ấy nói với bố. 她很想他 = cô ấy rất nhớ ông: 想 ở đây là 'nhớ'." },
          vocab: [{ word: "帮", py: "bāng", vi: "giúp" }, { word: "想", py: "xiǎng", vi: "nhớ" }],
        },
      ],
    },
    // CẢNH 04D — GỌI ĐIỆN TRƯỚC
    "04D": {
      id: "04D",
      lines: [
        { kind: "pick", options: [
          { zh: "你先给爸爸打电话吧。", py: "Nǐ xiān gěi bàba dǎ diànhuà ba.", vi: "Cậu gọi điện cho bố trước đi.", correct: true,
            analysis: { structure: "先 + 给 + Người + 打电话 + 吧", explain: "先 = trước tiên, đứng trước động từ. 给爸爸打电话 = gọi điện cho bố: 给 + người nhận đứng trước 打电话. 吧 ở cuối để khuyên." },
            vocab: [{ word: "先", py: "xiān", vi: "trước tiên" }, { word: "打电话", py: "dǎ diànhuà", vi: "gọi điện" }] },
          { zh: "你先打给电话爸爸吧。", py: "Nǐ xiān dǎ gěi diànhuà bàba ba.", vi: "Cậu trước gọi cho điện thoại bố đi.", correct: false,
            analysis: { structure: "Sai trật tự 给…打电话", explain: "Cụm 给 + người nhận phải đứng trước 打电话 (给爸爸打电话); không chen 给 vào giữa 打 và 电话." },
            vocab: [{ word: "给", py: "gěi", vi: "cho" }] },
          { zh: "你先给爸爸打电话吗。", py: "Nǐ xiān gěi bàba dǎ diànhuà ma.", vi: "Cậu gọi điện cho bố trước à.", correct: false,
            analysis: { structure: "Dùng sai 吗", explain: "Lời khuyên dùng 吧, không dùng 吗 (trợ từ hỏi có/không)." },
            vocab: [{ word: "吧", py: "ba", vi: "nhé (khuyên)" }] },
        ] },
        { kind: "quote", zh: "杨笑笑给爸爸打了电话。", py: "Yáng Xiàoxiao gěi bàba dǎ le diànhuà.", vi: "Dương Tiếu Tiếu gọi điện cho bố." },
        { kind: "npc", speaker: "爸爸", zh: "我一直在等你。", py: "Wǒ yìzhí zài děng nǐ.", vi: "Bố vẫn luôn đợi con." },
      ],
      choices: [
        {
          label: "Cùng cô ấy đến gặp bố",
          zh: "和她一起去见爸爸。", py: "Hé tā yìqǐ qù jiàn bàba.", vi: "Cùng cô ấy đến gặp bố.",
          next: "END_1",
          analysis: { structure: "和 + Người + 一起 + 去 + Động từ", explain: "和她一起去见爸爸 = cùng cô ấy đi gặp bố: 去 + động từ 见 chỉ mục đích." },
          vocab: [{ word: "见", py: "jiàn", vi: "gặp" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
        {
          label: "Nói rằng cô ấy nên tự đi gặp bố",
          zh: "说她应该自己去见爸爸。", py: "Shuō tā yīnggāi zìjǐ qù jiàn bàba.", vi: "Nói rằng cô ấy nên tự đi gặp bố.",
          next: "END_5",
          analysis: { structure: "应该 + 自己 + Động từ", explain: "应该自己去见 = nên tự đi gặp: 应该 và 自己 đứng trước động từ." },
          vocab: [{ word: "应该", py: "yīnggāi", vi: "nên" }, { word: "自己", py: "zìjǐ", vi: "tự mình" }],
        },
      ],
    },
    // CẢNH 04E — GIÁO VIÊN NÓI THẬT
    "04E": {
      id: "04E",
      lines: [
        { kind: "quote", zh: "你又问了一次。", py: "Nǐ yòu wèn le yí cì.", vi: "Bạn hỏi thêm một lần nữa." },
        { kind: "npc", speaker: "老师", zh: "今天是杨笑笑爸爸的生日。", py: "Jīntiān shì Yáng Xiàoxiao bàba de shēngrì.", vi: "Hôm nay là sinh nhật bố của Dương Tiếu Tiếu." },
        { kind: "npc", speaker: "老师", zh: "我们想给他一个生日礼物。", py: "Wǒmen xiǎng gěi tā yí ge shēngrì lǐwù.", vi: "Chúng ta muốn tặng ông ấy một món quà sinh nhật." },
      ],
      choices: [
        {
          label: "Giúp cả lớp chuẩn bị quà",
          zh: "帮大家准备礼物。", py: "Bāng dàjiā zhǔnbèi lǐwù.", vi: "Giúp cả lớp chuẩn bị quà.",
          next: "END_6",
          analysis: { structure: "帮 + Người + Động từ", explain: "帮大家准备礼物 = giúp mọi người chuẩn bị quà: 帮 + người + việc cần làm." },
          vocab: [{ word: "准备", py: "zhǔnbèi", vi: "chuẩn bị" }, { word: "礼物", py: "lǐwù", vi: "quà" }],
        },
        {
          label: "Hỏi Tiếu Tiếu xem cô ấy muốn tặng bố món quà gì",
          zh: "问杨笑笑想送爸爸什么礼物。", py: "Wèn Yáng Xiàoxiao xiǎng sòng bàba shénme lǐwù.", vi: "Hỏi Tiếu Tiếu xem cô ấy muốn tặng bố món quà gì.",
          next: "END_7",
          analysis: { structure: "想 + 送 + Người + 什么 + Danh từ", explain: "想送爸爸什么礼物 = muốn tặng bố món quà gì: 送 + người nhận + vật tặng; 什么 đứng trước danh từ." },
          vocab: [{ word: "送", py: "sòng", vi: "tặng" }, { word: "礼物", py: "lǐwù", vi: "quà" }],
        },
      ],
    },
    // CẢNH 04F — ĐẾN KHÁCH SẠN
    "04F": {
      id: "04F",
      lines: [
        { kind: "quote", zh: "你没有再问，跟着老师到了宾馆。", py: "Nǐ méiyǒu zài wèn, gēnzhe lǎoshī dào le bīnguǎn.", vi: "Bạn không hỏi nữa, đi theo giáo viên đến khách sạn." },
        { kind: "quote", zh: "大家都在笑，杨笑笑的爸爸也来了。桌子上有一个生日蛋糕和一份班里的礼物。", py: "Dàjiā dōu zài xiào, Yáng Xiàoxiao de bàba yě lái le. Zhuōzi shàng yǒu yí ge shēngrì dàngāo hé yí fèn bān lǐ de lǐwù.", vi: "Mọi người đều cười, bố của Dương Tiếu Tiếu cũng đã đến. Trên bàn có một chiếc bánh sinh nhật và một món quà của lớp." },
      ],
      choices: [
        {
          label: "Cùng mọi người hát chúc mừng sinh nhật",
          zh: "和大家一起唱生日歌。", py: "Hé dàjiā yìqǐ chàng shēngrì gē.", vi: "Cùng mọi người hát chúc mừng sinh nhật.",
          next: "END_6",
          analysis: { structure: "和 + Người + 一起 + Động từ", explain: "和大家一起唱生日歌 = cùng mọi người hát bài sinh nhật: 和 + người và 一起 đứng trước động từ." },
          vocab: [{ word: "唱", py: "chàng", vi: "hát" }, { word: "生日", py: "shēngrì", vi: "sinh nhật" }],
        },
        {
          label: "Đưa món quà của lớp cho bố Tiếu Tiếu",
          zh: "把班里的礼物送给杨笑笑的爸爸。", py: "Bǎ bān lǐ de lǐwù sòng gěi Yáng Xiàoxiao de bàba.", vi: "Đưa món quà của lớp cho bố Tiếu Tiếu.",
          next: "END_8",
          analysis: { structure: "把 + Tân ngữ + 送给 + Người", explain: "把礼物送给…的爸爸 = tặng món quà cho bố của…: câu chữ 把, 送给 + người nhận. 班里的 = của lớp." },
          vocab: [{ word: "送给", py: "sònggěi", vi: "tặng cho" }, { word: "班", py: "bān", vi: "lớp" }],
        },
      ],
    },
    // CẢNH 04G — TỰ HỎI BỐ
    "04G": {
      id: "04G",
      lines: [
        { kind: "pick", options: [
          { zh: "你自己爸爸问吧。", py: "Nǐ zìjǐ bàba wèn ba.", vi: "Cậu tự bố hỏi đi.", correct: false,
            analysis: { structure: "Sai vị trí tân ngữ", explain: "Tân ngữ 爸爸 phải đứng sau động từ 问: 问爸爸, không đặt trước." },
            vocab: [{ word: "问", py: "wèn", vi: "hỏi" }] },
          { zh: "你自己问爸爸吧。", py: "Nǐ zìjǐ wèn bàba ba.", vi: "Cậu tự hỏi bố đi.", correct: true,
            analysis: { structure: "自己 + Động từ + Người + 吧", explain: "自己问爸爸 = tự hỏi bố: 自己 (tự mình) đứng trước động từ, tân ngữ 爸爸 đứng sau 问. 吧 ở cuối để khuyên." },
            vocab: [{ word: "自己", py: "zìjǐ", vi: "tự mình" }, { word: "问", py: "wèn", vi: "hỏi" }] },
          { zh: "你自己问爸爸吗。", py: "Nǐ zìjǐ wèn bàba ma.", vi: "Cậu tự hỏi bố à.", correct: false,
            analysis: { structure: "Dùng sai 吗", explain: "Lời khuyên dùng 吧, không dùng 吗 (trợ từ hỏi có/không)." },
            vocab: [{ word: "吧", py: "ba", vi: "nhé (khuyên)" }] },
        ] },
        { kind: "quote", zh: "杨笑笑给爸爸打电话。", py: "Yáng Xiàoxiao gěi bàba dǎ diànhuà.", vi: "Dương Tiếu Tiếu gọi điện cho bố." },
        { kind: "npc", speaker: "爸爸", zh: "我很想你，快来吧！", py: "Wǒ hěn xiǎng nǐ, kuài lái ba!", vi: "Bố rất nhớ con, mau đến đây đi!" },
      ],
      choices: [
        {
          label: "Cùng cô ấy đến khách sạn",
          zh: "和她一起去宾馆。", py: "Hé tā yìqǐ qù bīnguǎn.", vi: "Cùng cô ấy đến khách sạn.",
          next: "END_1",
          analysis: { structure: "和 + Người + 一起 + 去 + Nơi chốn", explain: "和她一起去宾馆 = cùng cô ấy đến khách sạn: 和她一起 đứng trước động từ 去." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "宾馆", py: "bīnguǎn", vi: "khách sạn" }],
        },
        {
          label: "Chờ cô ấy đi rồi quay lại lớp",
          zh: "等她走了，再回教室。", py: "Děng tā zǒu le, zài huí jiàoshì.", vi: "Chờ cô ấy đi rồi quay lại lớp.",
          next: "END_5",
          analysis: { structure: "等…，再…", explain: "等她走了，再回教室 = đợi cô ấy đi rồi mới quay lại lớp: 等 + điều kiện, 再 + hành động sau." },
          vocab: [{ word: "等", py: "děng", vi: "đợi" }, { word: "教室", py: "jiàoshì", vi: "lớp học" }],
        },
      ],
    },
    // CẢNH 04H — CÓ BẠN ĐI CÙNG
    "04H": {
      id: "04H",
      lines: [
        { kind: "pick", options: [
          { zh: "我跟一起你去。", py: "Wǒ gēn yìqǐ nǐ qù.", vi: "Tớ với cùng nhau cậu đi.", correct: false,
            analysis: { structure: "Sai vị trí 一起", explain: "跟 và người đi cùng phải đứng liền nhau (跟你); 一起 đứng sau cả cụm đó, không chen vào giữa." },
            vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
          { zh: "跟你我一起去。", py: "Gēn nǐ wǒ yìqǐ qù.", vi: "Cùng cậu tớ cùng nhau đi.", correct: false,
            analysis: { structure: "Sai vị trí chủ ngữ", explain: "Chủ ngữ 我 đứng đầu câu, trước 跟: 我跟你一起去." },
            vocab: [{ word: "跟", py: "gēn", vi: "cùng với" }] },
          { zh: "我跟你一起去。", py: "Wǒ gēn nǐ yìqǐ qù.", vi: "Tớ sẽ đi cùng cậu.", correct: true,
            analysis: { structure: "Chủ ngữ + 跟 + Người + 一起 + Động từ", explain: "我跟你一起去 = tớ đi cùng cậu: chủ ngữ 我 đứng đầu, rồi 跟你, rồi 一起, rồi động từ 去." },
            vocab: [{ word: "跟", py: "gēn", vi: "cùng với" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
        ] },
        { kind: "quote", zh: "杨笑笑笑了。", py: "Yáng Xiàoxiao xiào le.", vi: "Dương Tiếu Tiếu cười." },
        { kind: "quote", zh: "到了宾馆，爸爸看见你们，马上请你们进去。", py: "Dào le bīnguǎn, bàba kànjiàn nǐmen, mǎshàng qǐng nǐmen jìnqù.", vi: "Đến khách sạn, bố cô ấy nhìn thấy hai bạn và lập tức mời hai bạn vào." },
      ],
      choices: [
        {
          label: "Cùng ăn tối với bố cô ấy",
          zh: "和她爸爸一起吃晚饭。", py: "Hé tā bàba yìqǐ chī wǎnfàn.", vi: "Cùng ăn tối với bố cô ấy.",
          next: "END_2",
          analysis: { structure: "和 + Người + 一起 + Động từ", explain: "和她爸爸一起吃晚饭 = cùng bố cô ấy ăn tối: 和 + người và 一起 đứng trước động từ." },
          vocab: [{ word: "晚饭", py: "wǎnfàn", vi: "bữa tối" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
        {
          label: "Nói lời chào rồi để hai bố con ở riêng",
          zh: "打个招呼，让他们单独在一起。", py: "Dǎ ge zhāohu, ràng tāmen dāndú zài yìqǐ.", vi: "Nói lời chào rồi để hai bố con ở riêng.",
          next: "END_1",
          analysis: { structure: "让 + Người + Động từ", explain: "打个招呼 = chào một tiếng. 让他们单独在一起 = để họ ở riêng với nhau: 让 + người + động từ." },
          vocab: [{ word: "招呼", py: "zhāohu", vi: "chào hỏi" }, { word: "单独", py: "dāndú", vi: "riêng, một mình" }],
        },
      ],
    },
    // CẢNH 04I — ĐI CÙNG TIẾU TIẾU
    "04I": {
      id: "04I",
      lines: [
        { kind: "quote", zh: "你跟杨笑笑一起走。", py: "Nǐ gēn Yáng Xiàoxiao yìqǐ zǒu.", vi: "Bạn đi cùng Dương Tiếu Tiếu." },
        { kind: "quote", zh: "到了路口，她停下来，看着你。", py: "Dào le lùkǒu, tā tíng xiàlái, kànzhe nǐ.", vi: "Đến giao lộ, cô ấy dừng lại và nhìn bạn." },
        { kind: "npc", speaker: "杨笑笑", zh: "谢谢你跟我一起去。", py: "Xièxie nǐ gēn wǒ yìqǐ qù.", vi: "Cảm ơn cậu đã đi cùng tớ." },
      ],
      choices: [
        {
          label: "Nói rằng không có gì và tiếp tục đi",
          zh: "说不客气，继续往前走。", py: "Shuō bú kèqi, jìxù wǎng qián zǒu.", vi: "Nói rằng không có gì và tiếp tục đi.",
          next: "END_1",
          analysis: { structure: "继续 + 往 + Hướng + Động từ", explain: "不客气 = không có gì. 继续往前走 = tiếp tục đi về phía trước: 往 + hướng đứng trước động từ." },
          vocab: [{ word: "不客气", py: "bú kèqi", vi: "đừng khách sáo" }, { word: "往", py: "wǎng", vi: "về phía" }],
        },
        {
          label: "Hỏi cô ấy có muốn mua quà cho bố không",
          zh: "问她想不想给爸爸买礼物。", py: "Wèn tā xiǎng bu xiǎng gěi bàba mǎi lǐwù.", vi: "Hỏi cô ấy có muốn mua quà cho bố không.",
          next: "END_7",
          analysis: { structure: "想不想 + Động từ (hỏi chính phản)", explain: "想不想给爸爸买礼物 = có muốn mua quà cho bố không: dạng hỏi chính phản, không thêm 吗; 给 + người nhận đứng trước 买." },
          vocab: [{ word: "礼物", py: "lǐwù", vi: "quà" }, { word: "买", py: "mǎi", vi: "mua" }],
        },
      ],
    },
    // CẢNH 04J — NHỜ GIÁO VIÊN GIÚP
    "04J": {
      id: "04J",
      lines: [
        { kind: "quote", zh: "你告诉老师，杨笑笑想去宾馆。", py: "Nǐ gàosu lǎoshī, Yáng Xiàoxiao xiǎng qù bīnguǎn.", vi: "Bạn nói với giáo viên rằng Dương Tiếu Tiếu muốn đến khách sạn." },
        { kind: "npc", speaker: "老师", zh: "好，我们一起去。", py: "Hǎo, wǒmen yìqǐ qù.", vi: "Được, chúng ta cùng đi." },
        { kind: "quote", zh: "杨笑笑听见了，很高兴。", py: "Yáng Xiàoxiao tīngjiàn le, hěn gāoxìng.", vi: "Dương Tiếu Tiếu nghe thấy, rất vui." },
      ],
      choices: [
        {
          label: "Đi cùng giáo viên và Tiếu Tiếu",
          zh: "跟老师和杨笑笑一起去。", py: "Gēn lǎoshī hé Yáng Xiàoxiao yìqǐ qù.", vi: "Đi cùng giáo viên và Tiếu Tiếu.",
          next: "END_6",
          analysis: { structure: "跟 + A 和 B + 一起 + Động từ", explain: "跟老师和杨笑笑一起去 = cùng giáo viên và Tiếu Tiếu đi: 和 nối hai người, cả cụm đứng sau 跟." },
          vocab: [{ word: "跟", py: "gēn", vi: "cùng với" }, { word: "和", py: "hé", vi: "và" }],
        },
        {
          label: "Để giáo viên đi cùng Tiếu Tiếu, còn bạn về nhà",
          zh: "让老师陪杨笑笑去，我回家。", py: "Ràng lǎoshī péi Yáng Xiàoxiao qù, wǒ huí jiā.", vi: "Để giáo viên đi cùng Tiếu Tiếu, còn bạn về nhà.",
          next: "END_5",
          analysis: { structure: "让 + Người + 陪 + Người + Động từ", explain: "让老师陪杨笑笑去 = để giáo viên đi cùng Tiếu Tiếu: 让 + người + động từ, 陪 = đi cùng, làm bạn." },
          vocab: [{ word: "陪", py: "péi", vi: "đi cùng" }, { word: "回家", py: "huí jiā", vi: "về nhà" }],
        },
      ],
    },
    // CẢNH 04K — QUAY LẠI
    "04K": {
      id: "04K",
      lines: [
        { kind: "quote", zh: "你回去找杨笑笑。", py: "Nǐ huíqù zhǎo Yáng Xiàoxiao.", vi: "Bạn quay lại tìm Dương Tiếu Tiếu." },
        { kind: "quote", zh: "她还在原来的地方，手里拿着一支铅笔。", py: "Tā hái zài yuánlái de dìfang, shǒu lǐ názhe yì zhī qiānbǐ.", vi: "Cô ấy vẫn ở chỗ cũ, tay cầm một chiếc bút chì." },
        { kind: "npc", speaker: "杨笑笑", zh: "我不敢一个人去宾馆。", py: "Wǒ bù gǎn yí ge rén qù bīnguǎn.", vi: "Tớ không dám đi một mình đến khách sạn." },
      ],
      choices: [
        {
          label: "Cùng cô ấy đến khách sạn, gặp ai thì hỏi đường",
          zh: "和她去宾馆，遇到人就问路。", py: "Hé tā qù bīnguǎn, yùdào rén jiù wènlù.", vi: "Cùng cô ấy đến khách sạn, gặp ai thì hỏi đường.",
          next: "END_3",
          analysis: { structure: "…就… ", explain: "遇到人就问路 = gặp người nào là hỏi đường: 遇到 + danh từ, 就 nối hành động ngay sau đó." },
          vocab: [{ word: "遇到", py: "yùdào", vi: "gặp phải" }, { word: "问路", py: "wènlù", vi: "hỏi đường" }],
        },
        {
          label: "Gọi giáo viên đến đón cô ấy",
          zh: "叫老师来接她。", py: "Jiào lǎoshī lái jiē tā.", vi: "Gọi giáo viên đến đón cô ấy.",
          next: "END_6",
          analysis: { structure: "叫 + Người + Động từ", explain: "叫老师来接她 = gọi giáo viên đến đón cô ấy: 叫 + người + động từ; 来 chỉ hướng đến đây." },
          vocab: [{ word: "叫", py: "jiào", vi: "gọi" }, { word: "接", py: "jiē", vi: "đón" }],
        },
      ],
    },
    // CẢNH 04L — NÓI VỚI GIÁO VIÊN
    "04L": {
      id: "04L",
      lines: [
        { kind: "quote", zh: "你告诉老师，你看见了那张纸。", py: "Nǐ gàosu lǎoshī, nǐ kànjiàn le nà zhāng zhǐ.", vi: "Bạn nói với giáo viên rằng mình đã nhìn thấy tờ giấy đó." },
        { kind: "npc", speaker: "老师", zh: "那是她爸爸住的宾馆。", py: "Nà shì tā bàba zhù de bīnguǎn.", vi: "Đó là khách sạn bố của em ấy đang ở." },
        { kind: "quote", zh: "老师马上给杨笑笑打电话。", py: "Lǎoshī mǎshàng gěi Yáng Xiàoxiao dǎ diànhuà.", vi: "Giáo viên lập tức gọi điện cho Dương Tiếu Tiếu." },
      ],
      choices: [
        {
          label: "Cùng giáo viên đến gặp Tiếu Tiếu",
          zh: "和老师一起去找杨笑笑。", py: "Hé lǎoshī yìqǐ qù zhǎo Yáng Xiàoxiao.", vi: "Cùng giáo viên đến gặp Tiếu Tiếu.",
          next: "END_6",
          analysis: { structure: "和 + Người + 一起 + 去 + Động từ", explain: "和老师一起去找杨笑笑 = cùng giáo viên đi tìm Tiếu Tiếu: 去 + động từ chỉ mục đích." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "找", py: "zhǎo", vi: "tìm" }],
        },
        {
          label: "Chờ ở đây và đợi tin của giáo viên",
          zh: "在这里等老师的消息。", py: "Zài zhèlǐ děng lǎoshī de xiāoxi.", vi: "Chờ ở đây và đợi tin của giáo viên.",
          next: "END_5",
          analysis: { structure: "在 + Nơi chốn + Động từ", explain: "在这里等 = đợi ở đây: nơi chốn đứng trước động từ. 老师的消息 = tin của giáo viên." },
          vocab: [{ word: "等", py: "děng", vi: "đợi" }, { word: "消息", py: "xiāoxi", vi: "tin tức" }],
        },
      ],
    },
    // KẾT THÚC 1 — MỘT CÁI ÔM
    "END_1": {
      id: "END_1",
      ending: { title: "一个拥抱", titleVi: "Một cái ôm" },
      lines: [
        { kind: "quote", zh: "杨笑笑跑到爸爸身边，抱住了他。", py: "Yáng Xiàoxiao pǎo dào bàba shēnbiān, bào zhù le tā.", vi: "Dương Tiếu Tiếu chạy đến bên bố và ôm lấy ông." },
        { kind: "npc", speaker: "爸爸", zh: "你长高了！", py: "Nǐ zhǎng gāo le!", vi: "Con cao lớn hơn rồi!" },
        { kind: "quote", zh: "杨笑笑也笑了。", py: "Yáng Xiàoxiao yě xiào le.", vi: "Dương Tiếu Tiếu cũng cười." },
        { kind: "quote", zh: "她终于见到了爸爸，还对他说：", py: "Tā zhōngyú jiàn dào le bàba, hái duì tā shuō:", vi: "Cuối cùng cô ấy cũng gặp được bố, còn nói với bố:" },
        { kind: "npc", speaker: "杨笑笑", zh: "生日快乐！", py: "Shēngrì kuàilè!", vi: "Chúc mừng sinh nhật!" },
        { kind: "narration", text: "Kết quả: Một cuộc gặp mặt đơn giản nhưng rất vui." },
      ],
    },
    // KẾT THÚC 2 — BỮA ĂN TỐI
    "END_2": {
      id: "END_2",
      ending: { title: "晚饭", titleVi: "Bữa ăn tối" },
      lines: [
        { kind: "quote", zh: "爸爸请你们一起吃饭。", py: "Bàba qǐng nǐmen yìqǐ chī fàn.", vi: "Bố mời hai bạn cùng ăn cơm." },
        { kind: "quote", zh: "杨笑笑一直在笑。", py: "Yáng Xiàoxiao yìzhí zài xiào.", vi: "Dương Tiếu Tiếu cứ cười mãi." },
        { kind: "npc", speaker: "杨笑笑", zh: "今天真好，爸爸，生日快乐！", py: "Jīntiān zhēn hǎo, bàba, shēngrì kuàilè!", vi: "Hôm nay thật tuyệt, chúc mừng sinh nhật bố!" },
        { kind: "narration", text: "Kết quả: Bạn có thêm một buổi tối vui vẻ cùng gia đình bạn mình." },
      ],
    },
    // KẾT THÚC 3 — ĐI ĐÚNG ĐƯỜNG
    "END_3": {
      id: "END_3",
      ending: { title: "走对了路", titleVi: "Đi đúng đường" },
      lines: [
        { kind: "quote", zh: "你们到了路口，不知道往哪边走。", py: "Nǐmen dào le lùkǒu, bù zhīdào wǎng nǎ biān zǒu.", vi: "Hai bạn đến giao lộ nhưng không biết phải đi về phía nào." },
        { kind: "quote", zh: "一个人告诉你们：", py: "Yí ge rén gàosu nǐmen:", vi: "Một người nói với hai bạn:" },
        { kind: "npc", speaker: "路人", zh: "往前走就到了。", py: "Wǎng qián zǒu jiù dào le.", vi: "Đi thẳng về phía trước là đến." },
        { kind: "quote", zh: "你们终于到了宾馆。", py: "Nǐmen zhōngyú dào le bīnguǎn.", vi: "Cuối cùng hai bạn cũng đến khách sạn." },
        { kind: "narration", text: "Kết quả: Hai bạn tự tìm được đường và đến nơi an toàn." },
      ],
    },
    // KẾT THÚC 4 — MÓN QUÀ NHỎ
    "END_4": {
      id: "END_4",
      ending: { title: "小礼物", titleVi: "Món quà nhỏ" },
      lines: [
        { kind: "quote", zh: "杨笑笑把铅笔送给爸爸。", py: "Yáng Xiàoxiao bǎ qiānbǐ sòng gěi bàba.", vi: "Dương Tiếu Tiếu tặng chiếc bút chì cho bố." },
        { kind: "npc", speaker: "杨笑笑", zh: "这是你以前送我的。", py: "Zhè shì nǐ yǐqián sòng wǒ de.", vi: "Đây là món quà trước đây bố tặng con." },
        { kind: "quote", zh: "爸爸拿着铅笔，笑了。", py: "Bàba názhe qiānbǐ, xiào le.", vi: "Bố cầm chiếc bút chì và cười." },
        { kind: "narration", text: "Kết quả: Một món quà nhỏ gợi lại nhiều kỷ niệm." },
      ],
    },
    // KẾT THÚC 5 — TIN NHẮN BUỔI TỐI
    "END_5": {
      id: "END_5",
      ending: { title: "晚上的消息", titleVi: "Tin nhắn buổi tối" },
      lines: [
        { kind: "quote", zh: "晚上，杨笑笑给你发来一条消息：", py: "Wǎnshang, Yáng Xiàoxiao gěi nǐ fā lái yì tiáo xiāoxi:", vi: "Buổi tối, Dương Tiếu Tiếu gửi cho bạn một tin nhắn:" },
        { kind: "npc", speaker: "杨笑笑", zh: "今天谢谢你，我见到爸爸了。", py: "Jīntiān xièxie nǐ, wǒ jiàndào bàba le.", vi: "Hôm nay cảm ơn cậu, tớ đã gặp bố rồi." },
        { kind: "quote", zh: "杨笑笑还发来一张笑脸。", py: "Yáng Xiàoxiao hái fā lái yì zhāng xiàoliǎn.", vi: "Dương Tiếu Tiếu còn gửi thêm một mặt cười." },
        { kind: "quote", zh: "她说今天是爸爸的生日，她很开心。", py: "Tā shuō jīntiān shì bàba de shēngrì, tā hěn kāixīn.", vi: "Cô ấy nói hôm nay là sinh nhật bố, cô ấy rất vui." },
        { kind: "narration", text: "Kết quả: Một tin nhắn nhỏ cuối ngày cho thấy cô ấy đã gặp được bố." },
      ],
    },
    // KẾT THÚC 6 — BÍ MẬT CỦA CẢ LỚP
    "END_6": {
      id: "END_6",
      ending: { title: "全班的秘密", titleVi: "Bí mật của cả lớp" },
      lines: [
        { kind: "quote", zh: "你们到了宾馆，看到桌子上有一个生日蛋糕。", py: "Nǐmen dào le bīnguǎn, kàn dào zhuōzi shàng yǒu yí ge shēngrì dàngāo.", vi: "Các bạn đến khách sạn và nhìn thấy một chiếc bánh sinh nhật trên bàn." },
        { kind: "quote", zh: "原来，老师和大家早就准备好了。", py: "Yuánlái, lǎoshī hé dàjiā zǎo jiù zhǔnbèi hǎo le.", vi: "Hóa ra giáo viên và mọi người đã chuẩn bị từ trước." },
        { kind: "quote", zh: "杨笑笑看着爸爸，开心地笑了。", py: "Yáng Xiàoxiao kànzhe bàba, kāixīn de xiào le.", vi: "Dương Tiếu Tiếu nhìn bố và vui vẻ cười." },
        { kind: "narration", text: "Kết quả: Cả lớp đã cùng nhau tạo nên một bất ngờ." },
      ],
    },
    // KẾT THÚC 7 — MÓN QUÀ DO TIẾU TIẾU CHỌN
    "END_7": {
      id: "END_7",
      ending: { title: "笑笑选的礼物", titleVi: "Món quà do Tiếu Tiếu chọn" },
      lines: [
        { kind: "quote", zh: "杨笑笑想了很久，最后买了一支笔。", py: "Yáng Xiàoxiao xiǎng le hěn jiǔ, zuìhòu mǎi le yì zhī bǐ.", vi: "Dương Tiếu Tiếu suy nghĩ rất lâu, cuối cùng mua một chiếc bút." },
        { kind: "npc", speaker: "杨笑笑", zh: "爸爸以前也送过我一支笔。", py: "Bàba yǐqián yě sòng guo wǒ yì zhī bǐ.", vi: "Trước đây bố cũng từng tặng con một chiếc bút." },
        { kind: "quote", zh: "爸爸收到礼物，很高兴。", py: "Bàba shōudào lǐwù, hěn gāoxìng.", vi: "Bố nhận được món quà và rất vui." },
        { kind: "narration", text: "Kết quả: Tiếu Tiếu chọn một món quà có ý nghĩa riêng với hai bố con." },
      ],
    },
    // KẾT THÚC 8 — CẢ LỚP CÙNG VUI
    "END_8": {
      id: "END_8",
      ending: { title: "全班一起开心", titleVi: "Cả lớp cùng vui" },
      lines: [
        { kind: "quote", zh: "你把礼物送给杨笑笑的爸爸。", py: "Nǐ bǎ lǐwù sòng gěi Yáng Xiàoxiao de bàba.", vi: "Bạn tặng món quà cho bố của Dương Tiếu Tiếu." },
        { kind: "npc", speaker: "爸爸", zh: "谢谢你们！", py: "Xièxie nǐmen!", vi: "Cảm ơn các cháu!" },
        { kind: "quote", zh: "大家一起笑了。", py: "Dàjiā yìqǐ xiào le.", vi: "Mọi người cùng cười." },
        { kind: "narration", text: "Kết quả: Món quà của cả lớp khiến buổi sinh nhật trở nên vui vẻ." },
      ],
    },
  },
};
