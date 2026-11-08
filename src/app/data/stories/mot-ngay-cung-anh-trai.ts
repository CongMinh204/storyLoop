import type { BranchingStory } from "../../types";

// Truyện "Một Ngày Cùng Anh Trai" (HSK 2, Bài 10), truyện rẽ nhánh với 6 kết thúc. Người chơi vào vai 小安, cậu em trai.
// Bản gốc của người viết: src/imports/stories/mot-ngay-cung-anh-trai.md (tên gốc: 和哥哥的一天; tab "Bài 10 – Anh trai không có ở nhà" trong Doc thứ hai "(2) HSK 2")
// Mỗi câu nói của 小安 là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Lời dẫn của tác giả hiện dạng chữ Hán + pinyin + phụ đề (quote); câu nói của nhân vật khác tách khỏi câu dẫn thành npc.
// Doc chỉ ghi lựa chọn bằng tiếng Việt: câu chữ Hán của mỗi lựa chọn (zh) là bản dịch ngắn của lựa chọn đó.
// Tên kết thúc bằng chữ Hán là bản dịch từ tên tiếng Việt của tác giả (Doc chỉ có tên tiếng Việt).
// Từ vựng: bảng của tác giả có 9 từ; thêm 2 từ có trong truyện để đủ 11 thẻ flashcard.
// Không đổi câu chữ hay cách nối cảnh so với bản gốc.
export const MOT_NGAY_CUNG_ANH_TRAI: BranchingStory = {
  start: "01",
  characters: {
    "哥哥": "👦",
    "妈妈": "👩",
    "小美": "👧",
  },
  vocab: [
    { word: "课", py: "kè", vi: "giờ học, môn học, tiết học",
      ex: { zh: "星期六早上，小安没有课。", py: "Xīngqīliù zǎoshang, Xiǎo Ān méiyǒu kè.", vi: "Sáng thứ Bảy, Tiểu An không có tiết học." } },
    { word: "帮助", py: "bāngzhù", vi: "giúp đỡ",
      ex: { zh: "好，但是你要先帮助我。", py: "Hǎo, dànshì nǐ yào xiān bāngzhù wǒ.", vi: "Được, nhưng trước tiên em phải giúp anh." } },
    { word: "别", py: "bié", vi: "đừng",
      ex: { zh: "别让鸡蛋掉在地上！", py: "Bié ràng jīdàn diào zài dìshang!", vi: "Đừng để trứng gà rơi xuống sàn!" } },
    { word: "哥哥", py: "gēge", vi: "anh trai",
      ex: { zh: "哥哥一个人在厨房做早饭。", py: "Gēge yí ge rén zài chúfáng zuò zǎofàn.", vi: "Anh trai một mình chuẩn bị bữa sáng trong bếp." } },
    { word: "鸡蛋", py: "jīdàn", vi: "trứng gà",
      ex: { zh: "小安拿了几个鸡蛋，准备做早饭。", py: "Xiǎo Ān ná le jǐ ge jīdàn, zhǔnbèi zuò zǎofàn.", vi: "Tiểu An lấy vài quả trứng gà, chuẩn bị làm bữa sáng." } },
    { word: "西瓜", py: "xīguā", vi: "dưa hấu",
      ex: { zh: "我想吃鸡蛋和西瓜！", py: "Wǒ xiǎng chī jīdàn hé xīguā!", vi: "Em muốn ăn trứng gà và dưa hấu!" } },
    { word: "正在", py: "zhèngzài", vi: "đang",
      ex: { zh: "他正在家里看电视，哥哥正在做早饭。", py: "Tā zhèngzài jiālǐ kàn diànshì, gēge zhèngzài zuò zǎofàn.", vi: "Cậu ấy đang xem TV ở nhà, anh trai đang chuẩn bị bữa sáng." } },
    { word: "手机", py: "shǒujī", vi: "điện thoại di động",
      ex: { zh: "吃完早饭以后，小安的手机响了。", py: "Chī wán zǎofàn yǐhòu, Xiǎo Ān de shǒujī xiǎng le.", vi: "Sau khi ăn sáng xong, điện thoại của Tiểu An reo lên." } },
    { word: "洗", py: "xǐ", vi: "rửa, giặt",
      ex: { zh: "他帮助哥哥洗水果、打扫房间。", py: "Tā bāngzhù gēge xǐ shuǐguǒ, dǎsǎo fángjiān.", vi: "Cậu ấy giúp anh trai rửa hoa quả và dọn dẹp phòng." } },
    { word: "告诉", py: "gàosu", vi: "nói cho biết, bảo",
      ex: { zh: "哥哥告诉小安怎么洗西瓜。", py: "Gēge gàosu Xiǎo Ān zěnme xǐ xīguā.", vi: "Anh trai chỉ cho Tiểu An cách rửa dưa hấu." } },
    { word: "时间", py: "shíjiān", vi: "thời gian",
      ex: { zh: "你今天有时间吗？我们一起去公园吧！", py: "Nǐ jīntiān yǒu shíjiān ma? Wǒmen yìqǐ qù gōngyuán ba!", vi: "Hôm nay cậu có thời gian không? Chúng ta cùng đi công viên nhé!" } },
  ],
  nodes: {
    // CẢNH 01 — MỘT BUỔI SÁNG CUỐI TUẦN
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "📍 Sáng thứ Bảy · Ở nhà · Tiểu An không có tiết học, anh trai đang chuẩn bị bữa sáng." },
        { kind: "quote", zh: "星期六早上，小安没有课。", py: "Xīngqīliù zǎoshang, Xiǎo Ān méiyǒu kè.", vi: "Sáng thứ Bảy, Tiểu An không có tiết học." },
        { kind: "quote", zh: "他正在家里看电视，哥哥正在做早饭。", py: "Tā zhèngzài jiālǐ kàn diànshì, gēge zhèngzài zuò zǎofàn.", vi: "Cậu ấy đang xem TV ở nhà, anh trai đang chuẩn bị bữa sáng." },
        { kind: "npc", speaker: "哥哥", zh: "你想吃什么？", py: "Nǐ xiǎng chī shénme?", vi: "Em muốn ăn gì?" },
        { kind: "pick", options: [
          { zh: "我吃想鸡蛋和西瓜！", py: "Wǒ chī xiǎng jīdàn hé xīguā!", vi: "Em ăn muốn trứng gà và dưa hấu!", correct: false,
            analysis: { structure: "Sai trật tự 想", explain: "想 (muốn) phải đứng trước động từ chính: 想吃, không đặt sau 吃." },
            vocab: [{ word: "想", py: "xiǎng", vi: "muốn" }] },
          { zh: "我想吃鸡蛋和西瓜！", py: "Wǒ xiǎng chī jīdàn hé xīguā!", vi: "Em muốn ăn trứng gà và dưa hấu!", correct: true,
            analysis: { structure: "想 + Động từ + Tân ngữ; A 和 B", explain: "想吃 = muốn ăn: 想 đứng trước động từ. 和 nối hai danh từ ngang hàng: 鸡蛋和西瓜." },
            vocab: [{ word: "想", py: "xiǎng", vi: "muốn" }, { word: "鸡蛋", py: "jīdàn", vi: "trứng gà" }, { word: "西瓜", py: "xīguā", vi: "dưa hấu" }] },
          { zh: "我想吃鸡蛋西瓜和！", py: "Wǒ xiǎng chī jīdàn xīguā hé!", vi: "Em muốn ăn trứng gà dưa hấu và!", correct: false,
            analysis: { structure: "Sai vị trí 和", explain: "和 phải đứng giữa hai danh từ được nối: 鸡蛋和西瓜, không đặt ở cuối câu." },
            vocab: [{ word: "和", py: "hé", vi: "và" }] },
        ] },
        { kind: "npc", speaker: "哥哥", zh: "好，但是你要先帮助我。", py: "Hǎo, dànshì nǐ yào xiān bāngzhù wǒ.", vi: "Được, nhưng trước tiên em phải giúp anh." },
      ],
      choices: [
        {
          label: "Giúp anh trai chuẩn bị bữa sáng",
          zh: "帮助哥哥准备早饭。", py: "Bāngzhù gēge zhǔnbèi zǎofàn.", vi: "Giúp anh trai chuẩn bị bữa sáng.",
          next: "02",
          analysis: { structure: "帮助 + Người + Động từ", explain: "帮助哥哥准备早饭 = giúp anh chuẩn bị bữa sáng: 帮助 + người được giúp + việc cần làm." },
          vocab: [{ word: "帮助", py: "bāngzhù", vi: "giúp đỡ" }, { word: "准备", py: "zhǔnbèi", vi: "chuẩn bị" }],
        },
        {
          label: "Tiếp tục xem TV và chờ anh trai",
          zh: "继续看电视，等哥哥。", py: "Jìxù kàn diànshì, děng gēge.", vi: "Tiếp tục xem TV và chờ anh trai.",
          next: "03",
          analysis: { structure: "继续 + Động từ", explain: "继续看电视 = tiếp tục xem TV: 继续 đứng trước động từ. 等哥哥 = chờ anh trai." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "等", py: "děng", vi: "chờ" }],
        },
      ],
    },
    // CẢNH 02 — BỮA SÁNG CÙNG ANH TRAI
    "02": {
      id: "02",
      lines: [
        { kind: "quote", zh: "小安走进厨房，哥哥正在洗水果。", py: "Xiǎo Ān zǒu jìn chúfáng, gēge zhèngzài xǐ shuǐguǒ.", vi: "Tiểu An đi vào bếp, anh trai đang rửa hoa quả." },
        { kind: "quote", zh: "小安拿了几个鸡蛋，准备做早饭。", py: "Xiǎo Ān ná le jǐ ge jīdàn, zhǔnbèi zuò zǎofàn.", vi: "Tiểu An lấy vài quả trứng gà, chuẩn bị làm bữa sáng." },
        { kind: "npc", speaker: "哥哥", zh: "别让鸡蛋掉在地上！", py: "Bié ràng jīdàn diào zài dìshang!", vi: "Đừng để trứng gà rơi xuống sàn!" },
        { kind: "pick", options: [
          { zh: "我知道了！", py: "Wǒ zhīdào le!", vi: "Em biết rồi!", correct: true,
            analysis: { structure: "Động từ + 了 (đã rõ, đã hiểu)", explain: "知道了 = biết rồi: 了 ở cuối câu báo trạng thái mới 'giờ đã hiểu', thường dùng để đáp lại lời dặn." },
            vocab: [{ word: "知道", py: "zhīdào", vi: "biết" }] },
          { zh: "我知了道！", py: "Wǒ zhī le dào!", vi: "Em biết rồi (chen 了 vào giữa)!", correct: false,
            analysis: { structure: "Chen 了 vào giữa từ", explain: "知道 là từ hai âm tiết không tách rời; 了 đặt sau cả từ: 知道了." },
            vocab: [{ word: "知道", py: "zhīdào", vi: "biết" }] },
          { zh: "我知道了吗！", py: "Wǒ zhīdào le ma!", vi: "Em biết rồi à!", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Đây là câu đáp lại lời dặn, bày tỏ đã hiểu, không phải câu hỏi nên không thêm 吗." },
            vocab: [{ word: "知道", py: "zhīdào", vi: "biết" }] },
        ] },
      ],
      choices: [
        {
          label: "Đập trứng để làm bữa sáng",
          zh: "打开鸡蛋，做早饭。", py: "Dǎkāi jīdàn, zuò zǎofàn.", vi: "Đập trứng để làm bữa sáng.",
          next: "04",
          analysis: { structure: "Động từ 1, Động từ 2 (hai việc nối nhau)", explain: "打开鸡蛋 = đập trứng ra; 做早饭 = làm bữa sáng. Hai cụm động từ nối nhau diễn tả việc làm theo thứ tự." },
          vocab: [{ word: "打开", py: "dǎkāi", vi: "mở ra, đập ra" }, { word: "早饭", py: "zǎofàn", vi: "bữa sáng" }],
        },
        {
          label: "Giúp anh trai rửa dưa hấu",
          zh: "帮哥哥洗西瓜。", py: "Bāng gēge xǐ xīguā.", vi: "Giúp anh trai rửa dưa hấu.",
          next: "05",
          analysis: { structure: "帮 + Người + Động từ", explain: "帮 là dạng ngắn của 帮助: 帮哥哥洗西瓜 = giúp anh rửa dưa hấu." },
          vocab: [{ word: "帮", py: "bāng", vi: "giúp" }, { word: "洗", py: "xǐ", vi: "rửa" }],
        },
      ],
    },
    // CẢNH 03 — MẢI MÊ XEM TV
    "03": {
      id: "03",
      lines: [
        { kind: "quote", zh: "小安没有帮助哥哥，一直坐在沙发上看电视。", py: "Xiǎo Ān méiyǒu bāngzhù gēge, yìzhí zuò zài shāfā shàng kàn diànshì.", vi: "Tiểu An không giúp anh trai mà cứ ngồi trên ghế sofa xem TV." },
        { kind: "quote", zh: "哥哥一个人在厨房做早饭。", py: "Gēge yí ge rén zài chúfáng zuò zǎofàn.", vi: "Anh trai một mình chuẩn bị bữa sáng trong bếp." },
        { kind: "quote", zh: "过了一会儿，哥哥说：“小安，过来帮我一下！”", py: "Guò le yíhuìr, gēge shuō: “Xiǎo Ān, guòlái bāng wǒ yíxià!”", vi: "Một lúc sau, anh trai nói: “Tiểu An, qua đây giúp anh một chút!”" },
      ],
      choices: [
        {
          label: "Đứng dậy và vào bếp giúp anh",
          zh: "站起来，去厨房帮哥哥。", py: "Zhàn qǐlái, qù chúfáng bāng gēge.", vi: "Đứng dậy và vào bếp giúp anh.",
          next: "02",
          analysis: { structure: "去 + Nơi chốn + Động từ", explain: "去厨房帮哥哥 = vào bếp giúp anh: 去 + nơi chốn rồi đến việc cần làm. 站起来 = đứng dậy." },
          vocab: [{ word: "站起来", py: "zhàn qǐlái", vi: "đứng dậy" }, { word: "厨房", py: "chúfáng", vi: "nhà bếp" }],
        },
        {
          label: "Nói rằng mình đang bận xem TV",
          zh: "我很忙，正在看电视。", py: "Wǒ hěn máng, zhèngzài kàn diànshì.", vi: "Nói rằng mình đang bận xem TV.",
          next: "END_1",
          analysis: { structure: "正在 + Động từ", explain: "正在看电视 = đang xem TV: 正在 đứng trước động từ để nói việc đang diễn ra. 很忙 = rất bận." },
          vocab: [{ word: "忙", py: "máng", vi: "bận" }, { word: "正在", py: "zhèngzài", vi: "đang" }],
        },
      ],
    },
    // CẢNH 04 — SỰ CỐ VỚI TRỨNG GÀ
    "04": {
      id: "04",
      lines: [
        { kind: "quote", zh: "小安拿起一个鸡蛋，准备打开放进碗里。", py: "Xiǎo Ān ná qǐ yí ge jīdàn, zhǔnbèi dǎkāi fàng jìn wǎn lǐ.", vi: "Tiểu An cầm một quả trứng, chuẩn bị đập vào bát." },
        { kind: "quote", zh: "但是，他不小心让鸡蛋掉到了地上。", py: "Dànshì, tā bù xiǎoxīn ràng jīdàn diào dào le dìshang.", vi: "Nhưng cậu ấy vô tình để quả trứng rơi xuống sàn." },
        { kind: "quote", zh: "哥哥看见了，说：", py: "Gēge kànjiàn le, shuō:", vi: "Anh trai nhìn thấy và nói:" },
        { kind: "npc", speaker: "哥哥", zh: "没关系，我们再拿一个吧。", py: "Méi guānxi, wǒmen zài ná yí ge ba.", vi: "Không sao, chúng ta lấy một quả khác nhé." },
        { kind: "quote", zh: "小安觉得很不好意思。", py: "Xiǎo Ān juéde hěn bù hǎoyìsi.", vi: "Tiểu An cảm thấy rất ngại." },
      ],
      choices: [
        {
          label: "Dọn sạch sàn nhà rồi tiếp tục",
          zh: "把地上打扫干净，再继续。", py: "Bǎ dìshang dǎsǎo gānjìng, zài jìxù.", vi: "Dọn sạch sàn nhà rồi tiếp tục.",
          next: "06",
          analysis: { structure: "把 + Tân ngữ + Động từ + Bổ ngữ", explain: "把地上打扫干净 = quét sàn cho sạch: câu chữ 把 nhấn mạnh việc xử lý cho xong. 再继续 = rồi mới tiếp tục." },
          vocab: [{ word: "打扫", py: "dǎsǎo", vi: "quét dọn" }, { word: "干净", py: "gānjìng", vi: "sạch" }],
        },
        {
          label: "Nhờ anh trai chỉ cách rửa dưa hấu",
          zh: "请哥哥告诉我怎么洗西瓜。", py: "Qǐng gēge gàosu wǒ zěnme xǐ xīguā.", vi: "Nhờ anh trai chỉ cách rửa dưa hấu.",
          next: "05",
          analysis: { structure: "请 + Người + Động từ; 怎么 + Động từ", explain: "请哥哥告诉我 = nhờ anh nói cho em biết. 怎么洗 = rửa như thế nào (hỏi cách thức)." },
          vocab: [{ word: "请", py: "qǐng", vi: "nhờ, mời" }, { word: "怎么", py: "zěnme", vi: "như thế nào" }],
        },
      ],
    },
    // CẢNH 05 — ANH TRAI HƯỚNG DẪN
    "05": {
      id: "05",
      lines: [
        { kind: "quote", zh: "哥哥告诉小安怎么洗西瓜。", py: "Gēge gàosu Xiǎo Ān zěnme xǐ xīguā.", vi: "Anh trai chỉ cho Tiểu An cách rửa dưa hấu." },
        { kind: "quote", zh: "小安认真地听哥哥说话。", py: "Xiǎo Ān rènzhēn de tīng gēge shuōhuà.", vi: "Tiểu An chăm chú nghe anh trai nói." },
        { kind: "npc", speaker: "哥哥", zh: "别着急，慢慢来。", py: "Bié zháojí, mànmàn lái.", vi: "Đừng vội, cứ từ từ thôi." },
        { kind: "quote", zh: "小安终于洗好了西瓜。", py: "Xiǎo Ān zhōngyú xǐ hǎo le xīguā.", vi: "Cuối cùng Tiểu An cũng rửa xong dưa hấu." },
      ],
      choices: [
        {
          label: "Cắt dưa hấu để ăn",
          zh: "把西瓜切好，拿来吃。", py: "Bǎ xīguā qiē hǎo, ná lái chī.", vi: "Cắt dưa hấu để ăn.",
          next: "07",
          analysis: { structure: "把 + Tân ngữ + Động từ + 好", explain: "把西瓜切好 = cắt dưa hấu xong xuôi (好 là bổ ngữ kết quả). 拿来吃 = lấy đến ăn." },
          vocab: [{ word: "切", py: "qiē", vi: "cắt" }, { word: "好", py: "hǎo", vi: "xong, tốt" }],
        },
        {
          label: "Tiếp tục giúp anh trai chuẩn bị bữa sáng",
          zh: "继续帮哥哥准备早饭。", py: "Jìxù bāng gēge zhǔnbèi zǎofàn.", vi: "Tiếp tục giúp anh trai chuẩn bị bữa sáng.",
          next: "06",
          analysis: { structure: "继续 + 帮 + Người + Động từ", explain: "继续帮哥哥准备早饭 = tiếp tục giúp anh chuẩn bị bữa sáng: 继续 đứng trước cả cụm động từ." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "准备", py: "zhǔnbèi", vi: "chuẩn bị" }],
        },
      ],
    },
    // CẢNH 06 — MỘT TIN NHẮN BẤT NGỜ
    "06": {
      id: "06",
      lines: [
        { kind: "quote", zh: "吃完早饭以后，小安的手机响了。", py: "Chī wán zǎofàn yǐhòu, Xiǎo Ān de shǒujī xiǎng le.", vi: "Sau khi ăn sáng xong, điện thoại của Tiểu An reo lên." },
        { kind: "quote", zh: "原来是小美发来的消息。", py: "Yuánlái shì Xiǎo Měi fā lái de xiāoxi.", vi: "Hóa ra là tin nhắn Tiểu Mỹ gửi đến." },
        { kind: "npc", speaker: "小美", zh: "你今天有时间吗？我们一起去公园吧！", py: "Nǐ jīntiān yǒu shíjiān ma? Wǒmen yìqǐ qù gōngyuán ba!", vi: "Hôm nay cậu có thời gian không? Chúng ta cùng đi công viên nhé!" },
        { kind: "quote", zh: "小安很想去，但是妈妈还没有回来。", py: "Xiǎo Ān hěn xiǎng qù, dànshì māma hái méiyǒu huílái.", vi: "Tiểu An rất muốn đi, nhưng mẹ vẫn chưa về." },
      ],
      choices: [
        {
          label: "Nhắn tin hỏi mẹ trước",
          zh: "先给妈妈发消息。", py: "Xiān gěi māma fā xiāoxi.", vi: "Nhắn tin hỏi mẹ trước.",
          next: "08",
          analysis: { structure: "先 + 给 + Người + Động từ", explain: "给妈妈发消息 = nhắn tin cho mẹ: 给 + người nhận đứng trước động từ. 先 = trước tiên." },
          vocab: [{ word: "先", py: "xiān", vi: "trước tiên" }, { word: "消息", py: "xiāoxi", vi: "tin nhắn" }],
        },
        {
          label: "Hỏi ý kiến anh trai",
          zh: "问问哥哥的意见。", py: "Wènwen gēge de yìjiàn.", vi: "Hỏi ý kiến anh trai.",
          next: "09",
          analysis: { structure: "Động từ lặp; 哥哥的意见", explain: "问问 = hỏi thử (lặp động từ làm nhẹ ý). 哥哥的意见 = ý kiến của anh: 的 nối người với danh từ." },
          vocab: [{ word: "问", py: "wèn", vi: "hỏi" }, { word: "意见", py: "yìjiàn", vi: "ý kiến" }],
        },
      ],
    },
    // CẢNH 07 — ĂN DƯA HẤU
    "07": {
      id: "07",
      lines: [
        { kind: "quote", zh: "小安把西瓜切好，放在桌子上。", py: "Xiǎo Ān bǎ xīguā qiē hǎo, fàng zài zhuōzi shàng.", vi: "Tiểu An cắt dưa hấu xong và đặt lên bàn." },
        { kind: "quote", zh: "他拿了一块西瓜给哥哥。", py: "Tā ná le yí kuài xīguā gěi gēge.", vi: "Cậu ấy lấy một miếng dưa hấu đưa cho anh trai." },
        { kind: "npc", speaker: "哥哥", zh: "谢谢你！今天你帮助了我很多。", py: "Xièxie nǐ! Jīntiān nǐ bāngzhù le wǒ hěn duō.", vi: "Cảm ơn em! Hôm nay em đã giúp anh rất nhiều." },
        { kind: "pick", options: [
          { zh: "用不谢！", py: "Yòng bú xiè!", vi: "Dùng không cảm ơn!", correct: false,
            analysis: { structure: "Sai trật tự 不用", explain: "不用 (không cần) là một cụm đứng liền nhau trước động từ; không tách 不 ra sau 用." },
            vocab: [{ word: "不用", py: "bú yòng", vi: "không cần" }] },
          { zh: "没用谢！", py: "Méi yòng xiè!", vi: "Vô ích cảm ơn!", correct: false,
            analysis: { structure: "Dùng sai 没", explain: "没 phủ định hành động đã xảy ra. Muốn nói 'không cần' phải dùng 不用; 没用 lại có nghĩa là 'vô ích'." },
            vocab: [{ word: "不用", py: "bú yòng", vi: "không cần" }] },
          { zh: "不用谢！", py: "Bú yòng xiè!", vi: "Không cần cảm ơn đâu ạ!", correct: true,
            analysis: { structure: "不用 + Động từ", explain: "不用谢 = không cần cảm ơn: 不用 (không cần) đứng trước động từ 谢, là cách đáp lại lời cảm ơn." },
            vocab: [{ word: "不用", py: "bú yòng", vi: "không cần" }, { word: "谢", py: "xiè", vi: "cảm ơn" }] },
        ] },
      ],
      choices: [
        {
          label: "Cùng anh trai xem TV",
          zh: "和哥哥一起看电视。", py: "Hé gēge yìqǐ kàn diànshì.", vi: "Cùng anh trai xem TV.",
          next: "10",
          analysis: { structure: "和 + Người + 一起 + Động từ", explain: "和哥哥一起看电视 = cùng anh xem TV: 和 + người và 一起 đứng trước động từ." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "电视", py: "diànshì", vi: "TV" }],
        },
        {
          label: "Kiểm tra điện thoại xem có tin nhắn mới không",
          zh: "看看手机有没有新消息。", py: "Kànkan shǒujī yǒu méiyǒu xīn xiāoxi.", vi: "Kiểm tra điện thoại xem có tin nhắn mới không.",
          next: "06",
          analysis: { structure: "有没有 + Danh từ (hỏi có/không)", explain: "有没有新消息 = có tin nhắn mới không: 有没有 là dạng hỏi chính phản, không cần thêm 吗." },
          vocab: [{ word: "手机", py: "shǒujī", vi: "điện thoại" }, { word: "新", py: "xīn", vi: "mới" }],
        },
      ],
    },
    // CẢNH 08 — MẸ TRẢ LỜI
    "08": {
      id: "08",
      lines: [
        { kind: "quote", zh: "小安给妈妈发了一条消息。", py: "Xiǎo Ān gěi māma fā le yì tiáo xiāoxi.", vi: "Tiểu An gửi cho mẹ một tin nhắn." },
        { kind: "quote", zh: "妈妈很快回复：", py: "Māma hěn kuài huífù:", vi: "Mẹ nhanh chóng trả lời:" },
        { kind: "npc", speaker: "妈妈", zh: "可以，但是别回家太晚。", py: "Kěyǐ, dànshì bié huí jiā tài wǎn.", vi: "Được, nhưng đừng về nhà quá muộn." },
        { kind: "quote", zh: "小安很高兴，马上告诉小美。", py: "Xiǎo Ān hěn gāoxìng, mǎshàng gàosu Xiǎo Měi.", vi: "Tiểu An rất vui và lập tức nói cho Tiểu Mỹ biết." },
        { kind: "quote", zh: "但是，哥哥还不知道这件事。", py: "Dànshì, gēge hái bù zhīdào zhè jiàn shì.", vi: "Nhưng anh trai vẫn chưa biết chuyện này." },
      ],
      choices: [
        {
          label: "Nói với anh trai trước khi ra ngoài",
          zh: "出去以前，先告诉哥哥。", py: "Chūqù yǐqián, xiān gàosu gēge.", vi: "Nói với anh trai trước khi ra ngoài.",
          next: "11",
          analysis: { structure: "…以前 (trước khi…)", explain: "出去以前 = trước khi ra ngoài: 以前 đặt sau động từ chỉ mốc thời gian. 先告诉哥哥 = nói với anh trước." },
          vocab: [{ word: "以前", py: "yǐqián", vi: "trước khi" }, { word: "告诉", py: "gàosu", vi: "nói cho biết" }],
        },
        {
          label: "Chuẩn bị đi ngay vì sợ bạn phải đợi",
          zh: "我怕小美等，马上准备出门。", py: "Wǒ pà Xiǎo Měi děng, mǎshàng zhǔnbèi chūmén.", vi: "Chuẩn bị đi ngay vì sợ bạn phải đợi.",
          next: "12",
          analysis: { structure: "怕 + câu; 马上 + Động từ", explain: "怕小美等 = sợ Tiểu Mỹ phải đợi. 马上准备出门 = lập tức chuẩn bị ra ngoài: 马上 đứng trước động từ." },
          vocab: [{ word: "怕", py: "pà", vi: "sợ" }, { word: "马上", py: "mǎshàng", vi: "lập tức" }],
        },
      ],
    },
    // CẢNH 09 — HỎI Ý KIẾN ANH TRAI
    "09": {
      id: "09",
      lines: [
        { kind: "quote", zh: "小安去问哥哥。", py: "Xiǎo Ān qù wèn gēge.", vi: "Tiểu An đi hỏi anh trai." },
        { kind: "quote", zh: "哥哥正在看书，听了小安的话以后，说：", py: "Gēge zhèngzài kàn shū, tīng le Xiǎo Ān de huà yǐhòu, shuō:", vi: "Anh trai đang đọc sách. Sau khi nghe Tiểu An nói, anh bảo:" },
        { kind: "npc", speaker: "哥哥", zh: "你先问妈妈吧。", py: "Nǐ xiān wèn māma ba.", vi: "Em hỏi mẹ trước đi." },
        { kind: "pick", options: [
          { zh: "好，知道我了。", py: "Hǎo, zhīdào wǒ le.", vi: "Vâng, biết em rồi.", correct: false,
            analysis: { structure: "Sai trật tự chủ ngữ", explain: "Chủ ngữ 我 phải đứng trước động từ 知道: 我知道了, không đảo thành 知道我了." },
            vocab: [{ word: "知道", py: "zhīdào", vi: "biết" }] },
          { zh: "好，我知道了。", py: "Hǎo, wǒ zhīdào le.", vi: "Vâng, em biết rồi.", correct: true,
            analysis: { structure: "好 + câu đáp; Chủ ngữ + Động từ + 了", explain: "好 mở đầu để đồng ý, rồi 我知道了 = em biết rồi. Chủ ngữ 我 đứng trước động từ 知道." },
            vocab: [{ word: "好", py: "hǎo", vi: "được, vâng" }, { word: "知道", py: "zhīdào", vi: "biết" }] },
          { zh: "好，我知道没了。", py: "Hǎo, wǒ zhīdào méi le.", vi: "Vâng, em biết không rồi.", correct: false,
            analysis: { structure: "Dùng sai 没", explain: "Để nói đã hiểu dùng 了 ngay sau động từ: 知道了. 没 dùng để phủ định (没有) và không ghép với 了 như vậy." },
            vocab: [{ word: "知道", py: "zhīdào", vi: "biết" }] },
        ] },
      ],
      choices: [
        {
          label: "Nhắn tin hỏi mẹ",
          zh: "给妈妈发消息。", py: "Gěi māma fā xiāoxi.", vi: "Nhắn tin hỏi mẹ.",
          next: "08",
          analysis: { structure: "给 + Người + Động từ", explain: "给妈妈发消息 = nhắn tin cho mẹ: 给 + người nhận đứng trước động từ 发." },
          vocab: [{ word: "给", py: "gěi", vi: "cho" }, { word: "发", py: "fā", vi: "gửi" }],
        },
        {
          label: "Đợi anh trai rảnh rồi mới quyết định",
          zh: "等哥哥有空再决定。", py: "Děng gēge yǒu kòng zài juédìng.", vi: "Đợi anh trai rảnh rồi mới quyết định.",
          next: "13",
          analysis: { structure: "等…再… (đợi… rồi mới…)", explain: "等哥哥有空再决定 = đợi anh rảnh rồi mới quyết định: 等 + điều kiện + 再 + hành động." },
          vocab: [{ word: "等", py: "děng", vi: "đợi" }, { word: "决定", py: "juédìng", vi: "quyết định" }],
        },
      ],
    },
    // CẢNH 10 — MỘT BUỔI SÁNG YÊN BÌNH
    "10": {
      id: "10",
      lines: [
        { kind: "quote", zh: "小安和哥哥坐在沙发上看电视。", py: "Xiǎo Ān hé gēge zuò zài shāfā shàng kàn diànshì.", vi: "Tiểu An và anh trai ngồi trên ghế sofa xem TV." },
        { kind: "npc", speaker: "哥哥", zh: "你今天开心吗？", py: "Nǐ jīntiān kāixīn ma?", vi: "Hôm nay em có vui không?" },
        { kind: "pick", options: [
          { zh: "很开心！谢谢哥哥的帮助。", py: "Hěn kāixīn! Xièxie gēge de bāngzhù.", vi: "Rất vui ạ! Cảm ơn sự giúp đỡ của anh.", correct: true,
            analysis: { structure: "很 + Tính từ; 哥哥的帮助", explain: "很开心 = rất vui: 很 đứng trước tính từ. 哥哥的帮助 = sự giúp đỡ của anh: 的 nối người sở hữu với danh từ." },
            vocab: [{ word: "开心", py: "kāixīn", vi: "vui vẻ" }, { word: "帮助", py: "bāngzhù", vi: "sự giúp đỡ" }] },
          { zh: "开心很！谢谢哥哥的帮助。", py: "Kāixīn hěn! Xièxie gēge de bāngzhù.", vi: "Vui rất! Cảm ơn sự giúp đỡ của anh.", correct: false,
            analysis: { structure: "Sai vị trí 很", explain: "Phó từ mức độ 很 phải đứng trước tính từ: 很开心, không đặt sau." },
            vocab: [{ word: "开心", py: "kāixīn", vi: "vui vẻ" }] },
          { zh: "很开心！谢谢哥哥帮助的。", py: "Hěn kāixīn! Xièxie gēge bāngzhù de.", vi: "Rất vui! Cảm ơn anh giúp đỡ của.", correct: false,
            analysis: { structure: "Sai vị trí 的", explain: "的 phải nằm giữa người sở hữu và danh từ: 哥哥的帮助, không đặt ở cuối câu." },
            vocab: [{ word: "的", py: "de", vi: "của" }] },
        ] },
      ],
      choices: [
        {
          label: "Cùng anh trai chuẩn bị bữa tối",
          zh: "和哥哥一起做晚饭。", py: "Hé gēge yìqǐ zuò wǎnfàn.", vi: "Cùng anh trai chuẩn bị bữa tối.",
          next: "END_2",
          analysis: { structure: "和 + Người + 一起 + Động từ", explain: "和哥哥一起做晚饭 = cùng anh làm bữa tối: 和 + người và 一起 đứng trước động từ." },
          vocab: [{ word: "晚饭", py: "wǎnfàn", vi: "bữa tối" }, { word: "做", py: "zuò", vi: "làm" }],
        },
        {
          label: "Nhắn tin hỏi thăm Tiểu Mỹ",
          zh: "发消息问问小美今天怎么样。", py: "Fā xiāoxi wènwen Xiǎo Měi jīntiān zěnmeyàng.", vi: "Nhắn tin hỏi thăm Tiểu Mỹ.",
          next: "06",
          analysis: { structure: "Động từ 1 + Động từ 2; 怎么样", explain: "发消息问问小美 = nhắn tin hỏi thăm Tiểu Mỹ. 今天怎么样 = hôm nay thế nào (hỏi tình hình)." },
          vocab: [{ word: "发", py: "fā", vi: "gửi" }, { word: "怎么样", py: "zěnmeyàng", vi: "thế nào" }],
        },
      ],
    },
    // CẢNH 11 — NÓI VỚI ANH TRAI
    "11": {
      id: "11",
      lines: [
        { kind: "quote", zh: "小安走到哥哥面前，说：", py: "Xiǎo Ān zǒu dào gēge miànqián, shuō:", vi: "Tiểu An đi đến trước mặt anh trai và nói:" },
        { kind: "pick", options: [
          { zh: "妈妈我让去公园，但是别回家太晚。", py: "Māma wǒ ràng qù gōngyuán, dànshì bié huí jiā tài wǎn.", vi: "Mẹ em cho đi công viên, nhưng đừng về nhà quá muộn.", correct: false,
            analysis: { structure: "Sai trật tự 让", explain: "让 phải đứng trước người được phép: 让我去. Đặt 我 trước 让 làm câu sai cấu trúc." },
            vocab: [{ word: "让", py: "ràng", vi: "cho, để, bảo" }] },
          { zh: "妈妈让我去公园，但是别回家晚太。", py: "Māma ràng wǒ qù gōngyuán, dànshì bié huí jiā wǎn tài.", vi: "Mẹ cho em đi công viên, nhưng đừng về nhà muộn quá (sai trật tự).", correct: false,
            analysis: { structure: "Sai vị trí 太", explain: "太 là phó từ nên đứng trước tính từ: 太晚, không đặt sau 晚." },
            vocab: [{ word: "太", py: "tài", vi: "quá" }, { word: "晚", py: "wǎn", vi: "muộn" }] },
          { zh: "妈妈让我去公园，但是别回家太晚。", py: "Māma ràng wǒ qù gōngyuán, dànshì bié huí jiā tài wǎn.", vi: "Mẹ cho em đi công viên, nhưng bảo đừng về nhà quá muộn.", correct: true,
            analysis: { structure: "让 + Người + Động từ; 别 + Động từ", explain: "妈妈让我去 = mẹ cho/bảo em đi: 让 + người + động từ. 别回家太晚 = đừng về nhà quá muộn: 别 đứng trước động từ." },
            vocab: [{ word: "让", py: "ràng", vi: "cho, để, bảo" }, { word: "别", py: "bié", vi: "đừng" }, { word: "公园", py: "gōngyuán", vi: "công viên" }] },
        ] },
        { kind: "npc", speaker: "哥哥", zh: "好，路上小心。", py: "Hǎo, lùshang xiǎoxīn.", vi: "Được, đi đường cẩn thận nhé." },
        { kind: "quote", zh: "小安拿起手机，准备出门。", py: "Xiǎo Ān ná qǐ shǒujī, zhǔnbèi chūmén.", vi: "Tiểu An cầm điện thoại lên, chuẩn bị ra ngoài." },
      ],
      choices: [
        {
          label: "Đi công viên gặp Tiểu Mỹ",
          zh: "去公园找小美。", py: "Qù gōngyuán zhǎo Xiǎo Měi.", vi: "Đi công viên gặp Tiểu Mỹ.",
          next: "14",
          analysis: { structure: "去 + Nơi chốn + 找 + Người", explain: "去公园找小美 = đến công viên tìm Tiểu Mỹ: 去 + nơi chốn rồi đến mục đích." },
          vocab: [{ word: "公园", py: "gōngyuán", vi: "công viên" }, { word: "找", py: "zhǎo", vi: "tìm" }],
        },
        {
          label: "Ở nhà thêm một lúc rồi mới đi",
          zh: "在家再待一会儿再去。", py: "Zài jiā zài dāi yíhuìr zài qù.", vi: "Ở nhà thêm một lúc rồi mới đi.",
          next: "12",
          analysis: { structure: "再 + Động từ (rồi mới…)", explain: "再待一会儿 = ở thêm một lát; 再去 = rồi mới đi: 再 đứng trước động từ để nói việc làm sau." },
          vocab: [{ word: "待", py: "dāi", vi: "ở lại" }, { word: "一会儿", py: "yíhuìr", vi: "một lát" }],
        },
      ],
    },
    // CẢNH 12 — ĐIỆN THOẠI HẾT PIN
    "12": {
      id: "12",
      lines: [
        { kind: "quote", zh: "小安正在准备出门，突然发现手机没电了。", py: "Xiǎo Ān zhèngzài zhǔnbèi chūmén, tūrán fāxiàn shǒujī méi diàn le.", vi: "Tiểu An đang chuẩn bị ra ngoài thì đột nhiên phát hiện điện thoại hết pin." },
        { kind: "quote", zh: "他不知道小美在哪里，也不能给她打电话。", py: "Tā bù zhīdào Xiǎo Měi zài nǎlǐ, yě bù néng gěi tā dǎ diànhuà.", vi: "Cậu ấy không biết Tiểu Mỹ đang ở đâu, cũng không thể gọi điện cho cô ấy." },
        { kind: "npc", speaker: "哥哥", zh: "别着急，先给手机充电吧。", py: "Bié zháojí, xiān gěi shǒujī chōngdiàn ba.", vi: "Đừng vội, trước tiên hãy sạc điện thoại đi." },
      ],
      choices: [
        {
          label: "Sạc điện thoại rồi gọi cho Tiểu Mỹ",
          zh: "先给手机充电，再给小美打电话。", py: "Xiān gěi shǒujī chōngdiàn, zài gěi Xiǎo Měi dǎ diànhuà.", vi: "Sạc điện thoại rồi gọi cho Tiểu Mỹ.",
          next: "14",
          analysis: { structure: "先…再…", explain: "先…再… = trước… rồi mới…: 先给手机充电 (sạc điện thoại trước), 再给小美打电话 (rồi gọi cho Tiểu Mỹ)." },
          vocab: [{ word: "充电", py: "chōngdiàn", vi: "sạc điện" }, { word: "打电话", py: "dǎ diànhuà", vi: "gọi điện" }],
        },
        {
          label: "Không đi nữa, ở nhà giúp anh trai",
          zh: "不去了，在家帮助哥哥。", py: "Bú qù le, zài jiā bāngzhù gēge.", vi: "Không đi nữa, ở nhà giúp anh trai.",
          next: "END_3",
          analysis: { structure: "不…了 (không… nữa)", explain: "不去了 = không đi nữa: 不 + động từ + 了 báo quyết định thay đổi. 在家 = ở nhà." },
          vocab: [{ word: "不…了", py: "bù…le", vi: "không… nữa" }, { word: "帮助", py: "bāngzhù", vi: "giúp đỡ" }],
        },
      ],
    },
    // CẢNH 13 — CHỜ ANH TRAI RẢNH
    "13": {
      id: "13",
      lines: [
        { kind: "quote", zh: "小安在家等哥哥忙完。", py: "Xiǎo Ān zài jiā děng gēge máng wán.", vi: "Tiểu An ở nhà đợi anh trai xong việc." },
        { kind: "quote", zh: "哥哥忙完以后，小安对他说：", py: "Gēge máng wán yǐhòu, Xiǎo Ān duì tā shuō:", vi: "Sau khi anh trai xong việc, Tiểu An nói với anh:" },
        { kind: "pick", options: [
          { zh: "小美想去和我公园。", py: "Xiǎo Měi xiǎng qù hé wǒ gōngyuán.", vi: "Tiểu Mỹ muốn đi cùng em công viên.", correct: false,
            analysis: { structure: "Sai vị trí 和", explain: "Cụm 和 + người phải đứng trước động từ: 和我去, không chen sau 去." },
            vocab: [{ word: "和", py: "hé", vi: "cùng, với" }] },
          { zh: "小美想和我去公园。", py: "Xiǎo Měi xiǎng hé wǒ qù gōngyuán.", vi: "Tiểu Mỹ muốn đi công viên cùng em.", correct: true,
            analysis: { structure: "想 + 和 + Người + Động từ", explain: "和我去公园 = cùng em đi công viên: cụm 和 + người đứng trước động từ 去; 想 đứng trước cả cụm." },
            vocab: [{ word: "想", py: "xiǎng", vi: "muốn" }, { word: "和", py: "hé", vi: "cùng, với" }] },
          { zh: "小美和想我去公园。", py: "Xiǎo Měi hé xiǎng wǒ qù gōngyuán.", vi: "Tiểu Mỹ cùng muốn em đi công viên.", correct: false,
            analysis: { structure: "Sai trật tự 想 và 和", explain: "想 (muốn) đứng ngay trước cụm động từ, sau chủ ngữ: 小美想和我去…; không để 和 đứng trước 想." },
            vocab: [{ word: "想", py: "xiǎng", vi: "muốn" }] },
        ] },
        { kind: "npc", speaker: "哥哥", zh: "妈妈已经同意了，你可以去。", py: "Māma yǐjīng tóngyì le, nǐ kěyǐ qù.", vi: "Mẹ đã đồng ý rồi, em có thể đi." },
      ],
      choices: [
        {
          label: "Đi công viên ngay",
          zh: "马上去公园。", py: "Mǎshàng qù gōngyuán.", vi: "Đi công viên ngay.",
          next: "14",
          analysis: { structure: "马上 + Động từ", explain: "马上去公园 = đi công viên ngay: 马上 đứng trước động từ." },
          vocab: [{ word: "马上", py: "mǎshàng", vi: "lập tức" }, { word: "公园", py: "gōngyuán", vi: "công viên" }],
        },
        {
          label: "Ở nhà ăn tối cùng anh trai",
          zh: "在家和哥哥一起吃晚饭。", py: "Zài jiā hé gēge yìqǐ chī wǎnfàn.", vi: "Ở nhà ăn tối cùng anh trai.",
          next: "END_2",
          analysis: { structure: "在 + Nơi chốn + 和 + Người + 一起 + Động từ", explain: "在家 (nơi chốn) và 和哥哥一起 (cùng ai) cùng đứng trước động từ 吃." },
          vocab: [{ word: "在", py: "zài", vi: "ở" }, { word: "晚饭", py: "wǎnfàn", vi: "bữa tối" }],
        },
      ],
    },
    // CẢNH 14 — CUỘC GẶP GỠ Ở CÔNG VIÊN
    "14": {
      id: "14",
      lines: [
        { kind: "quote", zh: "小安终于到了公园，看见小美正在等他。", py: "Xiǎo Ān zhōngyú dào le gōngyuán, kànjiàn Xiǎo Měi zhèngzài děng tā.", vi: "Cuối cùng Tiểu An cũng đến công viên và nhìn thấy Tiểu Mỹ đang đợi mình." },
        { kind: "npc", speaker: "小美", zh: "你怎么来得这么晚？", py: "Nǐ zěnme lái de zhème wǎn?", vi: "Sao cậu đến muộn thế?" },
        { kind: "quote", zh: "小安告诉她，自己刚才遇到了一些事情。", py: "Xiǎo Ān gàosu tā, zìjǐ gāngcái yùdào le yìxiē shìqing.", vi: "Tiểu An nói với cô ấy rằng lúc nãy mình gặp một vài chuyện." },
        { kind: "npc", speaker: "小美", zh: "没关系，我们一起去买西瓜吧！", py: "Méi guānxi, wǒmen yìqǐ qù mǎi xīguā ba!", vi: "Không sao, chúng ta cùng đi mua dưa hấu nhé!" },
      ],
      choices: [
        {
          label: "Cùng nhau mua dưa hấu",
          zh: "我们一起去买西瓜吧。", py: "Wǒmen yìqǐ qù mǎi xīguā ba.", vi: "Cùng nhau mua dưa hấu.",
          next: "15",
          analysis: { structure: "一起 + 去 + Động từ + 吧", explain: "一起去买西瓜 = cùng đi mua dưa hấu: 一起 đứng trước động từ; 吧 cuối câu để rủ rê." },
          vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "买", py: "mǎi", vi: "mua" }],
        },
        {
          label: "Đi dạo trước rồi mới mua đồ ăn",
          zh: "先走走，再买吃的。", py: "Xiān zǒuzou, zài mǎi chī de.", vi: "Đi dạo trước rồi mới mua đồ ăn.",
          next: "16",
          analysis: { structure: "先…再…; 吃的 (thứ để ăn)", explain: "先走走，再买 = đi dạo trước rồi mới mua. 吃的 = đồ ăn: động từ + 的 có thể làm danh từ." },
          vocab: [{ word: "走", py: "zǒu", vi: "đi" }, { word: "吃的", py: "chī de", vi: "đồ ăn" }],
        },
      ],
    },
    // CẢNH 15 — MUA DƯA HẤU
    "15": {
      id: "15",
      lines: [
        { kind: "quote", zh: "小安和小美来到水果店。", py: "Xiǎo Ān hé Xiǎo Měi lái dào shuǐguǒ diàn.", vi: "Tiểu An và Tiểu Mỹ đến cửa hàng hoa quả." },
        { kind: "quote", zh: "小美选了一个大西瓜。", py: "Xiǎo Měi xuǎn le yí ge dà xīguā.", vi: "Tiểu Mỹ chọn một quả dưa hấu lớn." },
        { kind: "pick", options: [
          { zh: "我们买回家和哥哥一起吃吧！", py: "Wǒmen mǎi huí jiā hé gēge yìqǐ chī ba!", vi: "Chúng ta mua về nhà ăn cùng anh trai nhé!", correct: true,
            analysis: { structure: "买回家; 和 + Người + 一起 + Động từ + 吧", explain: "买回家 = mua mang về nhà. 和哥哥一起吃 = cùng anh ăn: cụm 和…一起 đứng trước động từ. 吧 cuối câu để rủ rê." },
            vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "吧", py: "ba", vi: "nhé (rủ rê)" }] },
          { zh: "我们买回家一起和哥哥吃吧！", py: "Wǒmen mǎi huí jiā yìqǐ hé gēge chī ba!", vi: "Chúng ta mua về nhà cùng nhau với anh ăn nhé!", correct: false,
            analysis: { structure: "Sai trật tự 和 và 一起", explain: "Phải là 和哥哥一起 (和 + người đứng trước 一起), rồi mới đến động từ 吃." },
            vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
          { zh: "我们买回家和哥哥一起吃吗！", py: "Wǒmen mǎi huí jiā hé gēge yìqǐ chī ma!", vi: "Chúng ta mua về nhà ăn cùng anh à!", correct: false,
            analysis: { structure: "Dùng sai 吗", explain: "Lời rủ rê dùng 吧, không dùng 吗 (trợ từ hỏi có/không)." },
            vocab: [{ word: "吧", py: "ba", vi: "nhé (rủ rê)" }] },
        ] },
        { kind: "npc", speaker: "小美", zh: "好主意！", py: "Hǎo zhǔyi!", vi: "Ý kiến hay đấy!" },
      ],
      choices: [
        {
          label: "Mua dưa hấu rồi về nhà",
          zh: "买了西瓜就回家。", py: "Mǎi le xīguā jiù huí jiā.", vi: "Mua dưa hấu rồi về nhà.",
          next: "END_4",
          analysis: { structure: "Động từ + 了 … 就 …", explain: "买了西瓜就回家 = mua dưa hấu xong là về nhà: 了 báo việc xong, 就 nối hành động ngay sau đó." },
          vocab: [{ word: "了", py: "le", vi: "xong, rồi" }, { word: "就", py: "jiù", vi: "thì, là" }],
        },
        {
          label: "Ngồi lại công viên ăn một chút",
          zh: "坐在公园里吃一点儿。", py: "Zuò zài gōngyuán lǐ chī yìdiǎnr.", vi: "Ngồi lại công viên ăn một chút.",
          next: "16",
          analysis: { structure: "Động từ + 在 + Nơi chốn", explain: "坐在公园里 = ngồi ở trong công viên: 在 + nơi chốn sau động từ chỉ nơi hành động dừng lại. 一点儿 = một chút." },
          vocab: [{ word: "坐", py: "zuò", vi: "ngồi" }, { word: "一点儿", py: "yìdiǎnr", vi: "một chút" }],
        },
      ],
    },
    // CẢNH 16 — MỘT NGÀY THẬT VUI
    "16": {
      id: "16",
      lines: [
        { kind: "quote", zh: "小安和小美在公园里走了很长时间。", py: "Xiǎo Ān hé Xiǎo Měi zài gōngyuán lǐ zǒu le hěn cháng shíjiān.", vi: "Tiểu An và Tiểu Mỹ đi dạo trong công viên rất lâu." },
        { kind: "quote", zh: "他们看见很多人在跑步，还有人在跳舞。", py: "Tāmen kànjiàn hěn duō rén zài pǎobù, hái yǒu rén zài tiào wǔ.", vi: "Họ nhìn thấy rất nhiều người đang chạy bộ, còn có người đang nhảy múa." },
        { kind: "npc", speaker: "小美", zh: "今天真开心！下次我们再来吧！", py: "Jīntiān zhēn kāixīn! Xià cì wǒmen zài lái ba!", vi: "Hôm nay thật vui! Lần sau chúng ta lại đến nhé!" },
      ],
      choices: [
        {
          label: "Chụp ảnh kỷ niệm trước khi về",
          zh: "回家以前，先拍几张照片。", py: "Huí jiā yǐqián, xiān pāi jǐ zhāng zhàopiàn.", vi: "Chụp ảnh kỷ niệm trước khi về.",
          next: "END_5",
          analysis: { structure: "…以前; 几张 + Danh từ", explain: "回家以前 = trước khi về nhà. 几张照片 = vài tấm ảnh: 张 là lượng từ cho vật phẳng như ảnh." },
          vocab: [{ word: "拍", py: "pāi", vi: "chụp" }, { word: "照片", py: "zhàopiàn", vi: "ảnh" }],
        },
        {
          label: "Về nhà sớm để ăn tối cùng gia đình",
          zh: "早点儿回家，和家人一起吃晚饭。", py: "Zǎo diǎnr huí jiā, hé jiārén yìqǐ chī wǎnfàn.", vi: "Về nhà sớm để ăn tối cùng gia đình.",
          next: "END_6",
          analysis: { structure: "早点儿 + Động từ", explain: "早点儿回家 = về nhà sớm hơn một chút: 早点儿 đứng trước động từ. 和家人一起 = cùng người nhà." },
          vocab: [{ word: "早点儿", py: "zǎo diǎnr", vi: "sớm hơn" }, { word: "家人", py: "jiārén", vi: "người nhà" }],
        },
      ],
    },
    // KẾT THÚC 1 — KHÔNG CHỊU GIÚP ĐỠ
    "END_1": {
      id: "END_1",
      ending: { title: "不肯帮忙", titleVi: "Không chịu giúp đỡ" },
      lines: [
        { kind: "quote", zh: "小安一直看电视，没有帮助哥哥。", py: "Xiǎo Ān yìzhí kàn diànshì, méiyǒu bāngzhù gēge.", vi: "Tiểu An cứ xem TV và không giúp anh trai." },
        { kind: "quote", zh: "哥哥一个人做完了早饭。", py: "Gēge yí ge rén zuò wán le zǎofàn.", vi: "Anh trai một mình làm xong bữa sáng." },
        { kind: "quote", zh: "吃饭的时候，哥哥没有生气，只是告诉小安：", py: "Chīfàn de shíhou, gēge méiyǒu shēngqì, zhǐshì gàosu Xiǎo Ān:", vi: "Khi ăn cơm, anh trai không tức giận, chỉ nói với Tiểu An:" },
        { kind: "npc", speaker: "哥哥", zh: "下次别忘了帮助别人。", py: "Xià cì bié wàng le bāngzhù biérén.", vi: "Lần sau đừng quên giúp đỡ người khác nhé." },
        { kind: "quote", zh: "小安觉得自己应该做得更好。", py: "Xiǎo Ān juéde zìjǐ yīnggāi zuò de gèng hǎo.", vi: "Tiểu An cảm thấy mình nên làm tốt hơn." },
      ],
    },
    // KẾT THÚC 2 — BỮA TỐI CÙNG GIA ĐÌNH
    "END_2": {
      id: "END_2",
      ending: { title: "全家的晚餐", titleVi: "Bữa tối cùng gia đình" },
      lines: [
        { kind: "quote", zh: "晚上，妈妈回家了。", py: "Wǎnshang, māma huí jiā le.", vi: "Buổi tối, mẹ đã về nhà." },
        { kind: "quote", zh: "小安和哥哥一起做晚饭，妈妈也来帮助他们。", py: "Xiǎo Ān hé gēge yìqǐ zuò wǎnfàn, māma yě lái bāngzhù tāmen.", vi: "Tiểu An và anh trai cùng làm bữa tối, mẹ cũng đến giúp họ." },
        { kind: "quote", zh: "吃饭的时候，妈妈说：“今天你们都做得很好！”", py: "Chīfàn de shíhou, māma shuō: “Jīntiān nǐmen dōu zuò de hěn hǎo!”", vi: "Khi ăn cơm, mẹ nói: “Hôm nay các con đều làm rất tốt!”" },
        { kind: "quote", zh: "小安觉得，和家人在一起就是最开心的事情。", py: "Xiǎo Ān juéde, hé jiārén zài yìqǐ jiù shì zuì kāixīn de shìqing.", vi: "Tiểu An cảm thấy được ở bên gia đình chính là điều vui vẻ nhất." },
      ],
    },
    // KẾT THÚC 3 — MỘT NGÀY Ở NHÀ
    "END_3": {
      id: "END_3",
      ending: { title: "在家的一天", titleVi: "Một ngày ở nhà" },
      lines: [
        { kind: "quote", zh: "小安决定不去公园了。", py: "Xiǎo Ān juédìng bú qù gōngyuán le.", vi: "Tiểu An quyết định không đi công viên nữa." },
        { kind: "quote", zh: "他帮助哥哥洗水果、打扫房间。", py: "Tā bāngzhù gēge xǐ shuǐguǒ, dǎsǎo fángjiān.", vi: "Cậu ấy giúp anh trai rửa hoa quả và dọn dẹp phòng." },
        { kind: "npc", speaker: "哥哥", zh: "谢谢你，今天你帮了我很多。", py: "Xièxie nǐ, jīntiān nǐ bāng le wǒ hěn duō.", vi: "Cảm ơn em, hôm nay em đã giúp anh rất nhiều." },
        { kind: "quote", zh: "小安笑了，他觉得今天也很有意思。", py: "Xiǎo Ān xiào le, tā juéde jīntiān yě hěn yǒu yìsi.", vi: "Tiểu An mỉm cười, cậu ấy cảm thấy hôm nay cũng rất thú vị." },
      ],
    },
    // KẾT THÚC 4 — MÓN QUÀ CHO ANH TRAI
    "END_4": {
      id: "END_4",
      ending: { title: "送给哥哥的礼物", titleVi: "Món quà cho anh trai" },
      lines: [
        { kind: "quote", zh: "小安和小美买了西瓜，一起回家。", py: "Xiǎo Ān hé Xiǎo Měi mǎi le xīguā, yìqǐ huí jiā.", vi: "Tiểu An và Tiểu Mỹ mua dưa hấu rồi cùng nhau về nhà." },
        { kind: "quote", zh: "哥哥看见西瓜，很高兴。", py: "Gēge kànjiàn xīguā, hěn gāoxìng.", vi: "Anh trai nhìn thấy dưa hấu và rất vui." },
        { kind: "pick", options: [
          { zh: "这是给的你，谢谢你今天让我出去玩！", py: "Zhè shì gěi de nǐ, xièxie nǐ jīntiān ràng wǒ chūqù wán!", vi: "Đây là tặng của anh, cảm ơn anh hôm nay cho em ra ngoài chơi!", correct: false,
            analysis: { structure: "Sai trật tự 给…的", explain: "给 + người nhận đứng trước 的: 给你的, không đảo thành 给的你." },
            vocab: [{ word: "给", py: "gěi", vi: "cho, tặng" }] },
          { zh: "这是给你的，谢谢你今天让我出去玩！", py: "Zhè shì gěi nǐ de, xièxie nǐ jīntiān ràng wǒ chūqù wán!", vi: "Đây là dành cho anh, cảm ơn anh đã cho em đi chơi hôm nay!", correct: true,
            analysis: { structure: "给 + Người + 的; 让 + Người + Động từ", explain: "这是给你的 = cái này là dành cho anh: 给 + người nhận. 让我出去玩 = cho em ra ngoài chơi: 让 + người + động từ." },
            vocab: [{ word: "给", py: "gěi", vi: "cho, tặng" }, { word: "让", py: "ràng", vi: "cho, để" }, { word: "出去", py: "chūqù", vi: "đi ra" }] },
          { zh: "这是给你的，谢谢你今天我让出去玩！", py: "Zhè shì gěi nǐ de, xièxie nǐ jīntiān wǒ ràng chūqù wán!", vi: "Đây là dành cho anh, cảm ơn anh hôm nay em cho ra ngoài chơi!", correct: false,
            analysis: { structure: "Sai trật tự 让", explain: "让 phải đứng trước người được phép: 让我出去玩. Không chen 我 trước 让." },
            vocab: [{ word: "让", py: "ràng", vi: "cho, để" }] },
        ] },
        { kind: "npc", speaker: "哥哥", zh: "你真是我的好弟弟！", py: "Nǐ zhēn shì wǒ de hǎo dìdi!", vi: "Em đúng là cậu em trai tốt của anh!" },
      ],
    },
    // KẾT THÚC 5 — BỨC ẢNH CUỐI TUẦN
    "END_5": {
      id: "END_5",
      ending: { title: "周末的照片", titleVi: "Bức ảnh cuối tuần" },
      lines: [
        { kind: "quote", zh: "小安和小美在公园里拍了很多照片。", py: "Xiǎo Ān hé Xiǎo Měi zài gōngyuán lǐ pāi le hěn duō zhàopiàn.", vi: "Tiểu An và Tiểu Mỹ chụp rất nhiều ảnh trong công viên." },
        { kind: "quote", zh: "他们把照片发给了朋友。", py: "Tāmen bǎ zhàopiàn fā gěi le péngyou.", vi: "Họ gửi ảnh cho bạn bè." },
        { kind: "npc", speaker: "小美", zh: "下次我们还要一起出来玩！", py: "Xià cì wǒmen hái yào yìqǐ chūlái wán!", vi: "Lần sau chúng ta vẫn phải cùng nhau đi chơi nhé!" },
        { kind: "pick", options: [
          { zh: "当然吗！", py: "Dāngrán ma!", vi: "Tất nhiên à!", correct: false,
            analysis: { structure: "Thừa 吗", explain: "当然 là lời đồng ý chắc chắn, không phải câu hỏi nên không thêm 吗." },
            vocab: [{ word: "当然", py: "dāngrán", vi: "tất nhiên" }] },
          { zh: "是当然！", py: "Shì dāngrán!", vi: "Là tất nhiên!", correct: false,
            analysis: { structure: "Thừa 是 đặt trước", explain: "当然 tự đứng làm câu trả lời; đặt 是 trước nó không tạo thành câu đáp tự nhiên." },
            vocab: [{ word: "当然", py: "dāngrán", vi: "tất nhiên" }] },
          { zh: "当然！", py: "Dāngrán!", vi: "Tất nhiên rồi!", correct: true,
            analysis: { structure: "当然 (đồng ý chắc chắn)", explain: "当然 = tất nhiên; đứng một mình làm câu trả lời khẳng định cho lời rủ 下次我们还要一起出来玩." },
            vocab: [{ word: "当然", py: "dāngrán", vi: "tất nhiên" }] },
        ] },
      ],
    },
    // KẾT THÚC 6 — VỀ NHÀ ĐÚNG GIỜ
    "END_6": {
      id: "END_6",
      ending: { title: "按时回家", titleVi: "Về nhà đúng giờ" },
      lines: [
        { kind: "quote", zh: "小安看了看时间，决定早点儿回家。", py: "Xiǎo Ān kàn le kàn shíjiān, juédìng zǎo diǎnr huí jiā.", vi: "Tiểu An nhìn đồng hồ và quyết định về nhà sớm hơn." },
        { kind: "quote", zh: "回家以后，妈妈正在做晚饭，哥哥正在洗菜。", py: "Huí jiā yǐhòu, māma zhèngzài zuò wǎnfàn, gēge zhèngzài xǐ cài.", vi: "Sau khi về nhà, mẹ đang nấu bữa tối, anh trai đang rửa rau." },
        { kind: "quote", zh: "小安马上走进厨房帮助他们。", py: "Xiǎo Ān mǎshàng zǒu jìn chúfáng bāngzhù tāmen.", vi: "Tiểu An lập tức đi vào bếp giúp họ." },
        { kind: "npc", speaker: "妈妈", zh: "你回来得正好，快来吃饭吧！", py: "Nǐ huílái de zhèng hǎo, kuài lái chīfàn ba!", vi: "Con về đúng lúc lắm, mau đến ăn cơm nào!" },
      ],
    },
  },
};
