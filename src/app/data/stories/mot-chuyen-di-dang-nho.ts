import type { BranchingStory } from "../../types";

// Truyện "Một Chuyến Đi Đáng Nhớ" (HSK 2, Bài 9 phần 2), truyện rẽ nhánh với 6 kết thúc. Người chơi vào vai 小美, hẹn hai bạn đi công viên ngày thứ Bảy.
// Bản gốc của người viết: src/imports/stories/mot-chuyen-di-dang-nho.md (tên gốc: 一次难忘的旅行; Doc thứ hai "(2) HSK 2")
// Mỗi câu nói của 小美 là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Lời dẫn của tác giả viết bằng chữ Hán nên hiện dạng chữ Hán + pinyin + phụ đề (quote), gộp 1–3 câu liền nhau thành một dòng;
// câu nói của 小丽, 小刚, 服务员 và cô gái trong công viên (女孩) tách khỏi câu dẫn thành npc (bỏ phần "小丽说：", "小刚问：" vì đã có tên người nói).
// Câu "好啊！" ở kết thúc 06 do 小美 và 小刚 cùng nói nên giữ nguyên trong lời dẫn (quote), không làm bước chọn.
// Doc chỉ ghi lựa chọn bằng tiếng Việt: câu chữ Hán của mỗi lựa chọn (zh) là bản dịch ngắn của lựa chọn đó.
// Tên kết thúc bằng chữ Hán là bản dịch từ tên tiếng Việt của tác giả (Doc chỉ có tên tiếng Việt).
// Không đổi câu chữ hay cách nối cảnh so với bản gốc.
export const MOT_CHUYEN_DI_DANG_NHO: BranchingStory = {
  start: "01",
  characters: {
    "小丽": "👧",
    "小刚": "👦",
    "女孩": "💃",
    "服务员": "🧑‍💼",
  },
  vocab: [
    { word: "错", py: "cuò", vi: "sai, nhầm (走错路 = đi nhầm đường)",
      ex: { zh: "对不起，我走错路了，现在不知道在哪里。", py: "Duìbuqǐ, wǒ zǒu cuò lù le, xiànzài bù zhīdào zài nǎlǐ.", vi: "Xin lỗi, tớ đi nhầm đường rồi, bây giờ không biết mình đang ở đâu." } },
    { word: "从", py: "cóng", vi: "từ (chỉ điểm xuất phát)",
      ex: { zh: "我们从学校坐车去公园吧！", py: "Wǒmen cóng xuéxiào zuò chē qù gōngyuán ba!", vi: "Chúng ta đi xe từ trường đến công viên nhé!" } },
    { word: "跳舞", py: "tiào wǔ", vi: "múa, nhảy múa",
      ex: { zh: "你每天都来这里跳舞吗？", py: "Nǐ měitiān dōu lái zhèlǐ tiào wǔ ma?", vi: "Ngày nào bạn cũng đến đây nhảy múa à?" } },
    { word: "希望", py: "xīwàng", vi: "mong, hy vọng",
      ex: { zh: "他们希望今天可以玩得很开心。", py: "Tāmen xīwàng jīntiān kěyǐ wán de hěn kāixīn.", vi: "Họ hy vọng hôm nay có thể vui chơi thật vui vẻ." } },
    { word: "欢迎", py: "huānyíng", vi: "hoan nghênh, chào đón",
      ex: { zh: "女孩欢迎他们一起跳舞。", py: "Nǚhái huānyíng tāmen yìqǐ tiào wǔ.", vi: "Cô gái chào đón họ cùng nhảy múa." } },
    { word: "懂", py: "dǒng", vi: "hiểu",
      ex: { zh: "没关系，多练习就会懂了。", py: "Méi guānxi, duō liànxí jiù huì dǒng le.", vi: "Không sao, luyện tập nhiều thì sẽ hiểu thôi." } },
    { word: "完", py: "wán", vi: "xong, hết (吃完 = ăn xong)",
      ex: { zh: "吃完饭以后，他们准备去公园。", py: "Chī wán fàn yǐhòu, tāmen zhǔnbèi qù gōngyuán.", vi: "Sau khi ăn xong, họ chuẩn bị đi công viên." } },
    { word: "公园", py: "gōngyuán", vi: "công viên",
      ex: { zh: "三个朋友终于到了公园。", py: "Sān ge péngyou zhōngyú dào le gōngyuán.", vi: "Ba người bạn cuối cùng cũng đến công viên." } },
    { word: "出发", py: "chūfā", vi: "xuất phát, khởi hành",
      ex: { zh: "几点出发？", py: "Jǐ diǎn chūfā?", vi: "Mấy giờ xuất phát?" } },
    { word: "迟到", py: "chídào", vi: "đến muộn",
      ex: { zh: "九点，我们不要迟到！", py: "Jiǔ diǎn, wǒmen bú yào chídào!", vi: "Chín giờ, chúng ta đừng đến muộn nhé!" } },
    { word: "旁边", py: "pángbiān", vi: "bên cạnh",
      ex: { zh: "我在一家白色的商店旁边。", py: "Wǒ zài yì jiā báisè de shāngdiàn pángbiān.", vi: "Tớ đang ở cạnh một cửa hàng màu trắng." } },
    { word: "地图", py: "dìtú", vi: "bản đồ",
      ex: { zh: "我看错了地图，所以走错路了。", py: "Wǒ kàn cuò le dìtú, suǒyǐ zǒu cuò lù le.", vi: "Tớ xem nhầm bản đồ nên đã đi nhầm đường." } },
    { word: "照片", py: "zhàopiàn", vi: "ảnh, bức ảnh",
      ex: { zh: "三个朋友一起拍了一张照片。", py: "Sān ge péngyou yìqǐ pāi le yì zhāng zhàopiàn.", vi: "Ba người bạn cùng chụp một bức ảnh." } },
    { word: "旅行", py: "lǚxíng", vi: "chuyến đi, du lịch",
      ex: { zh: "他们期待下一次旅行。", py: "Tāmen qīdài xià yí cì lǚxíng.", vi: "Họ mong chờ chuyến đi tiếp theo." } },
  ],
  nodes: {
    // CẢNH 01 — KẾ HOẠCH CUỐI TUẦN
    "01": {
      id: "01",
      lines: [
        { kind: "narration", text: "📍 Thứ Bảy · Tiểu Mỹ, Tiểu Lệ và Tiểu Cương hẹn nhau ở trường rồi cùng đi công viên chơi." },
        { kind: "quote", zh: "星期六，小美和朋友们准备去公园玩。他们希望今天可以玩得很开心。", py: "Xīngqīliù, Xiǎo Měi hé péngyoumen zhǔnbèi qù gōngyuán wán. Tāmen xīwàng jīntiān kěyǐ wán de hěn kāixīn.", vi: "Thứ Bảy, Tiểu Mỹ và các bạn chuẩn bị đi công viên chơi. Họ hy vọng hôm nay có thể vui chơi thật vui vẻ." },
        { kind: "npc", speaker: "小丽", zh: "我们从学校坐车去公园吧！", py: "Wǒmen cóng xuéxiào zuò chē qù gōngyuán ba!", vi: "Chúng ta đi xe từ trường đến công viên nhé!" },
        { kind: "npc", speaker: "小刚", zh: "几点出发？", py: "Jǐ diǎn chūfā?", vi: "Mấy giờ xuất phát?" },
        { kind: "pick", options: [
          { zh: "九点，我们迟到不要！", py: "Jiǔ diǎn, wǒmen chídào bú yào!", vi: "Chín giờ, chúng ta đến muộn đừng!", correct: false,
            analysis: { structure: "Sai trật tự 不要", explain: "不要 (đừng) đứng trước động từ: 不要迟到 = đừng đến muộn. Không đặt 不要 ở cuối câu." },
            vocab: [{ word: "不要", py: "bú yào", vi: "đừng" }] },
          { zh: "九点，我们没要迟到！", py: "Jiǔ diǎn, wǒmen méi yào chídào!", vi: "Chín giờ, chúng ta chưa cần đến muộn!", correct: false,
            analysis: { structure: "Nhầm 没 và 不", explain: "Khuyên, cấm (\"đừng\") dùng 不要. 没 phủ định việc đã xảy ra, không đi với 要 để nói \"đừng\"." },
            vocab: [{ word: "没", py: "méi", vi: "chưa, không (việc đã qua)" }] },
          { zh: "九点，我们不要迟到！", py: "Jiǔ diǎn, wǒmen bú yào chídào!", vi: "Chín giờ, chúng ta đừng đến muộn nhé!", correct: true,
            analysis: { structure: "不要 + Động từ", explain: "不要迟到 = đừng đến muộn: 不要 đứng trước động từ để khuyên, nhắc. Trả lời câu 几点 bằng giờ đặt ngay đầu câu: 九点." },
            vocab: [{ word: "迟到", py: "chídào", vi: "đến muộn" }, { word: "不要", py: "bú yào", vi: "đừng" }] },
        ] },
      ],
      choices: [
        {
          label: "Đến trường đúng giờ",
          zh: "我九点到学校。", py: "Wǒ jiǔ diǎn dào xuéxiào.", vi: "Mình đến trường lúc 9 giờ.",
          next: "02",
          analysis: { structure: "Thời gian + 到 + Nơi chốn", explain: "Giờ giấc đứng trước động từ: 九点到学校 = đến trường lúc 9 giờ. 到 + nơi chốn = đến nơi đó." },
          vocab: [{ word: "到", py: "dào", vi: "đến" }, { word: "学校", py: "xuéxiào", vi: "trường học" }],
        },
        {
          label: "Ngủ thêm một chút rồi mới đi",
          zh: "我再睡一会儿，然后去。", py: "Wǒ zài shuì yíhuìr, ránhòu qù.", vi: "Mình ngủ thêm một lát rồi mới đi.",
          next: "03",
          analysis: { structure: "再 + Động từ + 一会儿; 然后", explain: "再睡一会儿 = ngủ thêm một lát: 一会儿 (một lát) đứng sau động từ. 然后 = sau đó, nối việc làm tiếp theo." },
          vocab: [{ word: "睡", py: "shuì", vi: "ngủ" }, { word: "一会儿", py: "yíhuìr", vi: "một lát" }],
        },
      ],
    },
    // CẢNH 02 — MỘT NGƯỜI BẠN BỊ LẠC
    "02": {
      id: "02",
      lines: [
        { kind: "quote", zh: "小美和小丽在学校，但是小刚还没来。小美给小刚打电话。", py: "Xiǎo Měi hé Xiǎo Lì zài xuéxiào, dànshì Xiǎo Gāng hái méi lái. Xiǎo Měi gěi Xiǎo Gāng dǎ diànhuà.", vi: "Tiểu Mỹ và Tiểu Lệ ở trường, nhưng Tiểu Cương vẫn chưa đến. Tiểu Mỹ gọi điện cho Tiểu Cương." },
        { kind: "npc", speaker: "小刚", zh: "对不起，我走错路了，现在不知道在哪里。", py: "Duìbuqǐ, wǒ zǒu cuò lù le, xiànzài bù zhīdào zài nǎlǐ.", vi: "Xin lỗi, tớ đi nhầm đường rồi, bây giờ không biết mình đang ở đâu." },
        { kind: "npc", speaker: "小丽", zh: "你告诉我们你旁边有什么，我们去找你。", py: "Nǐ gàosu wǒmen nǐ pángbiān yǒu shénme, wǒmen qù zhǎo nǐ.", vi: "Cậu nói cho chúng tớ biết bên cạnh cậu có gì, chúng tớ sẽ đi tìm cậu." },
      ],
      choices: [
        {
          label: "Hỏi kỹ vị trí của Tiểu Cương",
          zh: "你现在在哪儿？旁边有什么？", py: "Nǐ xiànzài zài nǎr? Pángbiān yǒu shénme?", vi: "Bây giờ cậu đang ở đâu? Bên cạnh có gì?",
          next: "04",
          analysis: { structure: "在 + 哪儿？; Nơi chốn + 有 + 什么？", explain: "在哪儿 = ở đâu. 旁边有什么 = bên cạnh có gì: nơi chốn đứng đầu, sau đó 有 + thứ có ở đó." },
          vocab: [{ word: "旁边", py: "pángbiān", vi: "bên cạnh" }, { word: "哪儿", py: "nǎr", vi: "đâu" }],
        },
        {
          label: "Bảo Tiểu Cương đứng yên chờ",
          zh: "你别走，在那儿等我们。", py: "Nǐ bié zǒu, zài nàr děng wǒmen.", vi: "Cậu đừng đi đâu, đứng đó đợi bọn tớ.",
          next: "05",
          analysis: { structure: "别 + Động từ; 在 + Nơi chốn + 等", explain: "别走 = đừng đi: 别 giống 不要, đứng trước động từ. 在那儿等我们 = đợi bọn tớ ở đó." },
          vocab: [{ word: "别", py: "bié", vi: "đừng" }, { word: "等", py: "děng", vi: "đợi" }],
        },
      ],
    },
    // CẢNH 03 — ĐẾN MUỘN
    "03": {
      id: "03",
      lines: [
        { kind: "quote", zh: "小美睡得太晚了，九点半才到学校。小丽有一点儿生气。", py: "Xiǎo Měi shuì de tài wǎn le, jiǔ diǎn bàn cái dào xuéxiào. Xiǎo Lì yǒu yìdiǎnr shēngqì.", vi: "Tiểu Mỹ ngủ quá muộn, đến chín giờ rưỡi mới đến trường. Tiểu Lệ hơi tức giận." },
        { kind: "npc", speaker: "小丽", zh: "我们等了你半个小时！", py: "Wǒmen děng le nǐ bàn ge xiǎoshí!", vi: "Chúng tớ đã đợi cậu nửa tiếng rồi!" },
        { kind: "pick", options: [
          { zh: "对不起，上次我一定早点儿来。", py: "Duìbuqǐ, shàng cì wǒ yídìng zǎo diǎnr lái.", vi: "Xin lỗi, lần trước tớ nhất định sẽ đến sớm hơn.", correct: false,
            analysis: { structure: "Sai từ: 上次 / 下次", explain: "Hứa cho lần tới thì dùng 下次 (lần sau). 上次 = lần trước, không đi với lời hứa 一定早点儿来." },
            vocab: [{ word: "上次", py: "shàng cì", vi: "lần trước" }] },
          { zh: "对不起，下次我一定早点儿来。", py: "Duìbuqǐ, xià cì wǒ yídìng zǎo diǎnr lái.", vi: "Xin lỗi, lần sau tớ nhất định sẽ đến sớm hơn.", correct: true,
            analysis: { structure: "下次 + Chủ ngữ + 一定 + 早点儿 + Động từ", explain: "下次 = lần sau, đứng đầu câu. 一定 (nhất định) đứng trước cả cụm 早点儿来 (đến sớm một chút) để hứa chắc chắn." },
            vocab: [{ word: "一定", py: "yídìng", vi: "nhất định" }, { word: "下次", py: "xià cì", vi: "lần sau" }] },
          { zh: "对不起，下次我早点儿一定来。", py: "Duìbuqǐ, xià cì wǒ zǎo diǎnr yídìng lái.", vi: "Xin lỗi, lần sau tớ sớm hơn nhất định đến.", correct: false,
            analysis: { structure: "Sai vị trí 一定", explain: "一定 đứng trước cả cụm động từ: 一定早点儿来. Chen 一定 vào giữa 早点儿 và 来 là sai." },
            vocab: [{ word: "一定", py: "yídìng", vi: "nhất định" }] },
        ] },
      ],
      choices: [
        {
          label: "Cả nhóm tiếp tục chuyến đi",
          zh: "我们现在出发吧！", py: "Wǒmen xiànzài chūfā ba!", vi: "Bây giờ chúng mình xuất phát thôi!",
          next: "02",
          analysis: { structure: "现在 + Động từ + 吧", explain: "吧 cuối câu làm thành lời rủ: 出发吧 = xuất phát thôi. 现在 đứng trước động từ." },
          vocab: [{ word: "出发", py: "chūfā", vi: "xuất phát" }, { word: "现在", py: "xiànzài", vi: "bây giờ" }],
        },
        {
          label: "Về nhà vì thấy có lỗi",
          zh: "对不起，我还是回家吧。", py: "Duìbuqǐ, wǒ háishi huí jiā ba.", vi: "Xin lỗi, tớ về nhà thôi.",
          next: "END_1",
          analysis: { structure: "还是 + Động từ + 吧", explain: "还是…吧 = thôi thì…, nên… (chọn cách khác sau khi suy nghĩ): 我还是回家吧 = tớ về nhà thôi." },
          vocab: [{ word: "还是", py: "háishi", vi: "thôi thì, vẫn nên" }, { word: "回家", py: "huí jiā", vi: "về nhà" }],
        },
      ],
    },
    // CẢNH 04 — TÌM ĐƯỜNG
    "04": {
      id: "04",
      lines: [
        { kind: "quote", zh: "小刚告诉他们，他在一家很大的商店旁边。", py: "Xiǎo Gāng gàosu tāmen, tā zài yì jiā hěn dà de shāngdiàn pángbiān.", vi: "Tiểu Cương nói với họ rằng cậu đang ở cạnh một cửa hàng rất lớn." },
        { kind: "quote", zh: "小美和小丽从学校走到商店。但是，她们没有看见小刚。", py: "Xiǎo Měi hé Xiǎo Lì cóng xuéxiào zǒu dào shāngdiàn. Dànshì, tāmen méiyǒu kànjiàn Xiǎo Gāng.", vi: "Tiểu Mỹ và Tiểu Lệ đi bộ từ trường đến cửa hàng. Nhưng họ không nhìn thấy Tiểu Cương." },
        { kind: "npc", speaker: "小丽", zh: "是不是我们找错地方了？", py: "Shì bú shì wǒmen zhǎo cuò dìfang le?", vi: "Có phải chúng ta tìm nhầm chỗ rồi không?" },
      ],
      choices: [
        {
          label: "Gọi điện hỏi lại Tiểu Cương",
          zh: "再给小刚打个电话。", py: "Zài gěi Xiǎo Gāng dǎ ge diànhuà.", vi: "Gọi lại cho Tiểu Cương một cuộc.",
          next: "06",
          analysis: { structure: "给 + Người + 打电话", explain: "给小刚打电话 = gọi điện cho Tiểu Cương: 给 + người nhận đứng trước 打电话. 再 = lại, thêm lần nữa." },
          vocab: [{ word: "打电话", py: "dǎ diànhuà", vi: "gọi điện" }, { word: "给", py: "gěi", vi: "cho" }],
        },
        {
          label: "Đi tìm ở con đường bên cạnh",
          zh: "去旁边那条路找找。", py: "Qù pángbiān nà tiáo lù zhǎozhao.", vi: "Sang con đường bên cạnh tìm thử.",
          next: "07",
          analysis: { structure: "那 + 条 + 路; Động từ lặp", explain: "条 là lượng từ cho đường (一条路, 那条路). 找找 = tìm thử: lặp động từ cho nhẹ." },
          vocab: [{ word: "条", py: "tiáo", vi: "(lượng từ cho đường, sông)" }, { word: "找", py: "zhǎo", vi: "tìm" }],
        },
      ],
    },
    // CẢNH 05 — CHỜ BẠN
    "05": {
      id: "05",
      lines: [
        { kind: "quote", zh: "小刚听了小美的话，站在原地等她们。", py: "Xiǎo Gāng tīng le Xiǎo Měi de huà, zhàn zài yuándì děng tāmen.", vi: "Tiểu Cương nghe lời Tiểu Mỹ và đứng yên tại chỗ đợi hai người." },
        { kind: "quote", zh: "小刚发来了他的位置。过了十分钟，小美和小丽终于找到了他。", py: "Xiǎo Gāng fā lái le tā de wèizhi. Guò le shí fēnzhōng, Xiǎo Měi hé Xiǎo Lì zhōngyú zhǎodào le tā.", vi: "Tiểu Cương gửi vị trí của mình. Mười phút sau, Tiểu Mỹ và Tiểu Lệ cuối cùng cũng tìm thấy cậu ấy." },
        { kind: "npc", speaker: "小刚", zh: "谢谢你们！我刚才真的不知道怎么办。", py: "Xièxie nǐmen! Wǒ gāngcái zhēn de bù zhīdào zěnme bàn.", vi: "Cảm ơn hai cậu! Lúc nãy tớ thật sự không biết phải làm sao." },
      ],
      choices: [
        {
          label: "Cùng nhau đi công viên",
          zh: "我们一起去公园吧！", py: "Wǒmen yìqǐ qù gōngyuán ba!", vi: "Chúng mình cùng đi công viên nhé!",
          next: "08",
          analysis: { structure: "一起 + 去 + Nơi chốn + 吧", explain: "一起 đứng trước 去: 一起去公园 = cùng đi công viên. 吧 cuối câu làm thành lời rủ." },
          vocab: [{ word: "公园", py: "gōngyuán", vi: "công viên" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
        {
          label: "Tìm một quán ăn để nghỉ ngơi trước",
          zh: "先找个饭店休息一下。", py: "Xiān zhǎo ge fàndiàn xiūxi yíxià.", vi: "Tìm một nhà hàng nghỉ ngơi một chút trước đã.",
          next: "09",
          analysis: { structure: "先 + Động từ; Động từ + 一下", explain: "先 = trước (làm việc này trước). 休息一下 = nghỉ một chút: 一下 đứng sau động từ làm việc nhẹ, ngắn." },
          vocab: [{ word: "饭店", py: "fàndiàn", vi: "nhà hàng" }, { word: "休息", py: "xiūxi", vi: "nghỉ ngơi" }],
        },
      ],
    },
    // CẢNH 06 — MỘT CUỘC GỌI QUAN TRỌNG
    "06": {
      id: "06",
      lines: [
        { kind: "quote", zh: "小美又给小刚打电话。", py: "Xiǎo Měi yòu gěi Xiǎo Gāng dǎ diànhuà.", vi: "Tiểu Mỹ lại gọi điện cho Tiểu Cương." },
        { kind: "npc", speaker: "小刚", zh: "我在一家白色的商店旁边。", py: "Wǒ zài yì jiā báisè de shāngdiàn pángbiān.", vi: "Tớ đang ở cạnh một cửa hàng màu trắng." },
        { kind: "quote", zh: "小丽看了看附近，发现前面有一家白色的商店。", py: "Xiǎo Lì kàn le kàn fùjìn, fāxiàn qiánmiàn yǒu yì jiā báisè de shāngdiàn.", vi: "Tiểu Lệ nhìn xung quanh và phát hiện phía trước có một cửa hàng màu trắng." },
        { kind: "quote", zh: "她们马上走过去。终于，她们找到了小刚。", py: "Tāmen mǎshàng zǒu guòqu. Zhōngyú, tāmen zhǎodào le Xiǎo Gāng.", vi: "Hai người lập tức đi qua đó. Cuối cùng, họ đã tìm thấy Tiểu Cương." },
      ],
      choices: [
        {
          label: "Cả nhóm cùng đến công viên",
          zh: "我们现在去公园吧！", py: "Wǒmen xiànzài qù gōngyuán ba!", vi: "Bây giờ chúng mình đi công viên nhé!",
          next: "08",
          analysis: { structure: "现在 + 去 + Nơi chốn + 吧", explain: "现在去公园 = đi công viên bây giờ: thời gian đứng trước động từ. 吧 làm thành lời rủ." },
          vocab: [{ word: "现在", py: "xiànzài", vi: "bây giờ" }, { word: "公园", py: "gōngyuán", vi: "công viên" }],
        },
        {
          label: "Hỏi Tiểu Cương vì sao lại đi nhầm đường",
          zh: "你为什么走错路了？", py: "Nǐ wèishénme zǒu cuò lù le?", vi: "Sao cậu lại đi nhầm đường thế?",
          next: "10",
          analysis: { structure: "为什么 + Động từ + 错 + Tân ngữ + 了？", explain: "为什么 đứng trước động từ để hỏi lý do. 走错路 = đi nhầm đường: 错 đứng ngay sau động từ, trước tân ngữ." },
          vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }, { word: "错", py: "cuò", vi: "sai, nhầm" }],
        },
      ],
    },
    // CẢNH 07 — MỘT SỰ NHẦM LẪN
    "07": {
      id: "07",
      lines: [
        { kind: "quote", zh: "小美和小丽走到另一条路上。她们看见一个男孩，但是他不是小刚。", py: "Xiǎo Měi hé Xiǎo Lì zǒu dào lìng yì tiáo lù shàng. Tāmen kànjiàn yí ge nánhái, dànshì tā bú shì Xiǎo Gāng.", vi: "Tiểu Mỹ và Tiểu Lệ đi đến một con đường khác. Họ nhìn thấy một cậu bé, nhưng đó không phải Tiểu Cương." },
        { kind: "pick", options: [
          { zh: "我们走路错了，还是回去吧。", py: "Wǒmen zǒu lù cuò le, háishi huíqù ba.", vi: "Chúng ta đi đường nhầm rồi, vẫn nên quay lại thôi.", correct: false,
            analysis: { structure: "Sai vị trí 错", explain: "错 đứng ngay sau động từ, trước tân ngữ: 走错路 = đi nhầm đường. Đặt 错 sau 路 là sai." },
            vocab: [{ word: "错", py: "cuò", vi: "sai, nhầm" }] },
          { zh: "我们走错路了，还是去回吧。", py: "Wǒmen zǒu cuò lù le, háishi qù huí ba.", vi: "Chúng ta đi nhầm đường rồi, vẫn nên đi về lại thôi.", correct: false,
            analysis: { structure: "Sai trật tự 回去", explain: "Quay lại là 回去: 回 (về) đứng trước, 去 (hướng đi ra xa) đứng sau. 去回 là sai." },
            vocab: [{ word: "回去", py: "huíqù", vi: "quay về, quay lại" }] },
          { zh: "我们走错路了，还是回去吧。", py: "Wǒmen zǒu cuò lù le, háishi huíqù ba.", vi: "Chúng ta đi nhầm đường rồi, vẫn nên quay lại thôi.", correct: true,
            analysis: { structure: "Động từ + 错 + Tân ngữ; 还是…吧", explain: "走错路了 = đi nhầm đường rồi. 还是回去吧 = thôi quay lại đi: 还是…吧 đưa ra lựa chọn sau khi suy nghĩ." },
            vocab: [{ word: "还是", py: "háishi", vi: "thôi thì, vẫn nên" }, { word: "回去", py: "huíqù", vi: "quay về, quay lại" }] },
        ] },
      ],
      choices: [
        {
          label: "Quay lại cửa hàng",
          zh: "我们回商店那儿吧。", py: "Wǒmen huí shāngdiàn nàr ba.", vi: "Chúng mình quay lại chỗ cửa hàng nhé.",
          next: "06",
          analysis: { structure: "回 + Nơi chốn + 那儿", explain: "商店那儿 = chỗ cửa hàng: thêm 那儿 sau danh từ chỉ vật để thành nơi chốn. 回 + nơi chốn = quay về chỗ đó." },
          vocab: [{ word: "回", py: "huí", vi: "về, quay lại" }, { word: "商店", py: "shāngdiàn", vi: "cửa hàng" }],
        },
        {
          label: "Tiếp tục tìm kiếm",
          zh: "我们再找一找。", py: "Wǒmen zài zhǎo yi zhǎo.", vi: "Chúng mình tìm thêm chút nữa.",
          next: "END_2",
          analysis: { structure: "再 + Động từ + 一 + Động từ", explain: "找一找 = tìm một chút. 再 đứng trước = tìm thêm lần nữa." },
          vocab: [{ word: "找", py: "zhǎo", vi: "tìm" }, { word: "再", py: "zài", vi: "thêm, lại" }],
        },
      ],
    },
    // CẢNH 08 — ĐẾN CÔNG VIÊN
    "08": {
      id: "08",
      lines: [
        { kind: "quote", zh: "三个朋友终于到了公园。公园里有很多人，还有人在跳舞。", py: "Sān ge péngyou zhōngyú dào le gōngyuán. Gōngyuán lǐ yǒu hěn duō rén, hái yǒu rén zài tiào wǔ.", vi: "Ba người bạn cuối cùng cũng đến công viên. Trong công viên có rất nhiều người, còn có người đang nhảy múa." },
        { kind: "quote", zh: "小美看见一个女孩跳得很好。", py: "Xiǎo Měi kànjiàn yí ge nǚhái tiào de hěn hǎo.", vi: "Tiểu Mỹ nhìn thấy một cô gái nhảy rất đẹp." },
        { kind: "pick", options: [
          { zh: "你每天都来这里跳舞吗？", py: "Nǐ měitiān dōu lái zhèlǐ tiào wǔ ma?", vi: "Ngày nào bạn cũng đến đây nhảy múa à?", correct: true,
            analysis: { structure: "每天 + 都 + Động từ + 吗？", explain: "每天都来 = ngày nào cũng đến: 都 đứng sau 每天, trước động từ. 来这里 = đến đây (người nói đang ở đây). 吗 thành câu hỏi có/không." },
            vocab: [{ word: "每天", py: "měitiān", vi: "mỗi ngày" }, { word: "跳舞", py: "tiào wǔ", vi: "nhảy múa" }] },
          { zh: "你都每天来这里跳舞吗？", py: "Nǐ dōu měitiān lái zhèlǐ tiào wǔ ma?", vi: "Bạn đều mỗi ngày đến đây nhảy múa à?", correct: false,
            analysis: { structure: "Sai vị trí 都", explain: "都 tổng kết cho 每天 nên đứng sau nó: 每天都来. Đặt 都 trước 每天 là sai." },
            vocab: [{ word: "都", py: "dōu", vi: "đều" }] },
          { zh: "你每天都去这里跳舞吗？", py: "Nǐ měitiān dōu qù zhèlǐ tiào wǔ ma?", vi: "Ngày nào bạn cũng đi tới chỗ đây nhảy múa à?", correct: false,
            analysis: { structure: "Nhầm 来 và 去", explain: "Người nói đang ở công viên nên dùng 来这里 (đến đây). 去 chỉ hướng đi ra xa chỗ người nói: 去那里." },
            vocab: [{ word: "来", py: "lái", vi: "đến (về phía người nói)" }] },
        ] },
        { kind: "npc", speaker: "女孩", zh: "是的，我很喜欢跳舞。", py: "Shì de, wǒ hěn xǐhuan tiào wǔ.", vi: "Đúng vậy, tôi rất thích nhảy múa." },
      ],
      choices: [
        {
          label: "Cùng cô gái học nhảy",
          zh: "你可以教我们跳舞吗？", py: "Nǐ kěyǐ jiāo wǒmen tiào wǔ ma?", vi: "Bạn có thể dạy bọn mình nhảy không?",
          next: "11",
          analysis: { structure: "可以 + 教 + Người + Việc + 吗？", explain: "可以…吗 = có thể… không (lời nhờ lịch sự). 教我们跳舞 = dạy bọn mình nhảy: 教 + người học + điều được dạy." },
          vocab: [{ word: "教", py: "jiāo", vi: "dạy" }, { word: "可以", py: "kěyǐ", vi: "có thể" }],
        },
        {
          label: "Đi dạo quanh công viên",
          zh: "我们去公园里走走吧。", py: "Wǒmen qù gōngyuán lǐ zǒuzou ba.", vi: "Chúng mình đi dạo trong công viên nhé.",
          next: "12",
          analysis: { structure: "Nơi chốn + 里; Động từ lặp", explain: "公园里 = trong công viên. 走走 = đi dạo một chút: lặp động từ cho nhẹ, thoải mái." },
          vocab: [{ word: "走走", py: "zǒuzou", vi: "đi dạo" }, { word: "里", py: "lǐ", vi: "trong" }],
        },
      ],
    },
    // CẢNH 09 — BỮA ĂN TRƯA
    "09": {
      id: "09",
      lines: [
        { kind: "quote", zh: "三个朋友来到一家饭店。", py: "Sān ge péngyou lái dào yì jiā fàndiàn.", vi: "Ba người bạn đến một nhà hàng." },
        { kind: "npc", speaker: "服务员", zh: "你们想吃什么？", py: "Nǐmen xiǎng chī shénme?", vi: "Các bạn muốn ăn gì?" },
        { kind: "npc", speaker: "小刚", zh: "我想吃面条。", py: "Wǒ xiǎng chī miàntiáo.", vi: "Tớ muốn ăn mì." },
        { kind: "pick", options: [
          { zh: "我吃想米饭。", py: "Wǒ chī xiǎng mǐfàn.", vi: "Tớ ăn muốn cơm.", correct: false,
            analysis: { structure: "Sai trật tự 想", explain: "想 (muốn) đứng trước động từ: 想吃米饭 = muốn ăn cơm. Không đặt 想 sau 吃." },
            vocab: [{ word: "想", py: "xiǎng", vi: "muốn" }] },
          { zh: "我想喝米饭。", py: "Wǒ xiǎng hē mǐfàn.", vi: "Tớ muốn uống cơm.", correct: false,
            analysis: { structure: "Sai động từ", explain: "Cơm là đồ ăn nên dùng 吃 (ăn). 喝 (uống) dùng cho nước, trà, cà phê." },
            vocab: [{ word: "吃", py: "chī", vi: "ăn" }] },
          { zh: "我想吃米饭。", py: "Wǒ xiǎng chī mǐfàn.", vi: "Tớ muốn ăn cơm.", correct: true,
            analysis: { structure: "想 + Động từ + Tân ngữ", explain: "想吃米饭 = muốn ăn cơm: 想 đứng trước động từ, món ăn đứng sau. Đáp lại câu 你们想吃什么 theo cùng mẫu câu của Tiểu Cương." },
            vocab: [{ word: "米饭", py: "mǐfàn", vi: "cơm" }, { word: "想", py: "xiǎng", vi: "muốn" }] },
        ] },
        { kind: "quote", zh: "吃完饭以后，他们准备去公园。", py: "Chī wán fàn yǐhòu, tāmen zhǔnbèi qù gōngyuán.", vi: "Sau khi ăn xong, họ chuẩn bị đi công viên." },
      ],
      choices: [
        {
          label: "Đi thẳng đến công viên",
          zh: "我们现在就去公园。", py: "Wǒmen xiànzài jiù qù gōngyuán.", vi: "Chúng mình đi công viên ngay bây giờ.",
          next: "08",
          analysis: { structure: "现在 + 就 + Động từ", explain: "就 đứng trước động từ, nhấn mạnh làm ngay: 现在就去 = đi ngay bây giờ." },
          vocab: [{ word: "就", py: "jiù", vi: "ngay, liền" }, { word: "公园", py: "gōngyuán", vi: "công viên" }],
        },
        {
          label: "Mua nước uống rồi mới đi",
          zh: "先买点儿喝的，再去公园。", py: "Xiān mǎi diǎnr hē de, zài qù gōngyuán.", vi: "Mua chút đồ uống trước rồi mới đi công viên.",
          next: "END_3",
          analysis: { structure: "先…，再…", explain: "先 + việc thứ nhất, 再 + việc thứ hai = làm… trước rồi mới…. 喝的 = đồ uống (Động từ + 的 = thứ để làm việc đó)." },
          vocab: [{ word: "先", py: "xiān", vi: "trước" }, { word: "再", py: "zài", vi: "rồi mới" }],
        },
      ],
    },
    // CẢNH 10 — LÝ DO ĐI NHẦM ĐƯỜNG
    "10": {
      id: "10",
      lines: [
        { kind: "npc", speaker: "小刚", zh: "我看错了地图，所以走错路了。", py: "Wǒ kàn cuò le dìtú, suǒyǐ zǒu cuò lù le.", vi: "Tớ xem nhầm bản đồ nên đã đi nhầm đường." },
        { kind: "quote", zh: "小美笑了，说：", py: "Xiǎo Měi xiào le, shuō:", vi: "Tiểu Mỹ cười và nói:" },
        { kind: "pick", options: [
          { zh: "没关系，一起下次我们看地图吧。", py: "Méi guānxi, yìqǐ xià cì wǒmen kàn dìtú ba.", vi: "Không sao, cùng nhau lần sau chúng ta xem bản đồ nhé.", correct: false,
            analysis: { structure: "Sai vị trí 一起", explain: "一起 đứng ngay trước động từ, sau chủ ngữ: 下次我们一起看地图. Không đặt 一起 lên đầu câu." },
            vocab: [{ word: "一起", py: "yìqǐ", vi: "cùng nhau" }] },
          { zh: "没关系，下次我们一起看地图吧。", py: "Méi guānxi, xià cì wǒmen yìqǐ kàn dìtú ba.", vi: "Không sao, lần sau chúng ta cùng xem bản đồ nhé.", correct: true,
            analysis: { structure: "没关系; 下次 + Chủ ngữ + 一起 + Động từ + 吧", explain: "没关系 = không sao, đáp lại khi bạn mắc lỗi. 一起 đứng trước động từ: 一起看地图 = cùng xem bản đồ. 吧 làm thành lời rủ." },
            vocab: [{ word: "没关系", py: "méi guānxi", vi: "không sao" }, { word: "地图", py: "dìtú", vi: "bản đồ" }] },
          { zh: "不客气，下次我们一起看地图吧。", py: "Bú kèqi, xià cì wǒmen yìqǐ kàn dìtú ba.", vi: "Không có gì, lần sau chúng ta cùng xem bản đồ nhé.", correct: false,
            analysis: { structure: "Nhầm 不客气 và 没关系", explain: "不客气 (không có gì) đáp lại lời cảm ơn 谢谢. Bạn vừa kể lỗi của mình thì đáp 没关系 (không sao)." },
            vocab: [{ word: "不客气", py: "bú kèqi", vi: "không có gì" }] },
        ] },
        { kind: "quote", zh: "小刚点点头。", py: "Xiǎo Gāng diǎn diǎn tóu.", vi: "Tiểu Cương gật đầu." },
      ],
      choices: [
        {
          label: "Tiếp tục đến công viên",
          zh: "我们继续去公园吧。", py: "Wǒmen jìxù qù gōngyuán ba.", vi: "Chúng mình tiếp tục đi công viên nhé.",
          next: "08",
          analysis: { structure: "继续 + Động từ", explain: "继续 = tiếp tục, đứng trước động từ: 继续去公园 = tiếp tục đi công viên." },
          vocab: [{ word: "继续", py: "jìxù", vi: "tiếp tục" }],
        },
        {
          label: "Đến nhà hàng ăn trưa trước",
          zh: "我们先去饭店吃午饭。", py: "Wǒmen xiān qù fàndiàn chī wǔfàn.", vi: "Chúng mình đi nhà hàng ăn trưa trước đã.",
          next: "09",
          analysis: { structure: "先 + 去 + Nơi chốn + Động từ", explain: "先去饭店吃午饭 = đi nhà hàng ăn trưa trước: 先 đứng trước cả cụm, nơi đến sau 去, việc làm ở đó đứng sau cùng." },
          vocab: [{ word: "午饭", py: "wǔfàn", vi: "bữa trưa" }, { word: "饭店", py: "fàndiàn", vi: "nhà hàng" }],
        },
      ],
    },
    // CẢNH 11 — HỌC NHẢY
    "11": {
      id: "11",
      lines: [
        { kind: "quote", zh: "女孩欢迎他们一起跳舞。", py: "Nǚhái huānyíng tāmen yìqǐ tiào wǔ.", vi: "Cô gái chào đón họ cùng nhảy múa." },
        { kind: "quote", zh: "小美学得很快，但是小刚做错了几个动作。小刚有一点儿不好意思。", py: "Xiǎo Měi xué de hěn kuài, dànshì Xiǎo Gāng zuò cuò le jǐ ge dòngzuò. Xiǎo Gāng yǒu yìdiǎnr bù hǎoyìsi.", vi: "Tiểu Mỹ học rất nhanh, nhưng Tiểu Cương thực hiện sai một vài động tác. Tiểu Cương hơi ngại." },
        { kind: "npc", speaker: "女孩", zh: "没关系，多练习就会懂了。", py: "Méi guānxi, duō liànxí jiù huì dǒng le.", vi: "Không sao, luyện tập nhiều thì sẽ hiểu thôi." },
      ],
      choices: [
        {
          label: "Tiếp tục học nhảy",
          zh: "我们再跳一次吧！", py: "Wǒmen zài tiào yí cì ba!", vi: "Chúng mình nhảy thêm một lần nữa nhé!",
          next: "END_4",
          analysis: { structure: "再 + Động từ + 一次", explain: "再跳一次 = nhảy thêm một lần: 再 trước động từ, số lần (一次) sau động từ." },
          vocab: [{ word: "再", py: "zài", vi: "thêm, lại" }, { word: "次", py: "cì", vi: "lần" }],
        },
        {
          label: "Cảm ơn cô gái và rời đi",
          zh: "谢谢你！我们先走了。", py: "Xièxie nǐ! Wǒmen xiān zǒu le.", vi: "Cảm ơn bạn! Bọn mình đi trước nhé.",
          next: "12",
          analysis: { structure: "先 + 走 + 了", explain: "我们先走了 = bọn mình đi trước nhé: câu chào quen thuộc khi rời đi. 了 cho biết việc sắp xảy ra ngay." },
          vocab: [{ word: "谢谢", py: "xièxie", vi: "cảm ơn" }, { word: "走", py: "zǒu", vi: "đi, rời đi" }],
        },
      ],
    },
    // CẢNH 12 — MỘT NGÀY VUI VẺ
    "12": {
      id: "12",
      lines: [
        { kind: "quote", zh: "下午，三个朋友坐在公园里休息。", py: "Xiàwǔ, sān ge péngyou zuò zài gōngyuán lǐ xiūxi.", vi: "Buổi chiều, ba người bạn ngồi nghỉ trong công viên." },
        { kind: "npc", speaker: "小丽", zh: "今天虽然发生了一些事情，但是我很开心。", py: "Jīntiān suīrán fāshēng le yìxiē shìqing, dànshì wǒ hěn kāixīn.", vi: "Hôm nay tuy đã xảy ra một vài chuyện, nhưng tớ rất vui." },
        { kind: "pick", options: [
          { zh: "我是也！希望下次我们还能一起出来玩。", py: "Wǒ shì yě! Xīwàng xià cì wǒmen hái néng yìqǐ chūlái wán.", vi: "Tớ là cũng! Hy vọng lần sau chúng ta vẫn có thể cùng nhau đi chơi.", correct: false,
            analysis: { structure: "Sai vị trí 也", explain: "也 (cũng) đứng trước động từ: 我也是 = tớ cũng vậy. Không đặt 也 sau 是." },
            vocab: [{ word: "也", py: "yě", vi: "cũng" }] },
          { zh: "我也是！希望上次我们还能一起出来玩。", py: "Wǒ yě shì! Xīwàng shàng cì wǒmen hái néng yìqǐ chūlái wán.", vi: "Tớ cũng vậy! Hy vọng lần trước chúng ta vẫn có thể cùng nhau đi chơi.", correct: false,
            analysis: { structure: "Sai từ: 上次 / 下次", explain: "希望 nói về điều mong cho sau này nên đi với 下次 (lần sau). 上次 = lần trước, đã qua rồi thì không còn \"hy vọng\" được." },
            vocab: [{ word: "上次", py: "shàng cì", vi: "lần trước" }] },
          { zh: "我也是！希望下次我们还能一起出来玩。", py: "Wǒ yě shì! Xīwàng xià cì wǒmen hái néng yìqǐ chūlái wán.", vi: "Tớ cũng vậy! Hy vọng lần sau chúng ta vẫn có thể cùng nhau đi chơi.", correct: true,
            analysis: { structure: "我也是; 希望 + việc mong muốn", explain: "我也是 = tớ cũng vậy. 希望 + cả một câu: 希望下次我们还能一起出来玩 = mong lần sau vẫn có thể cùng đi chơi. Thứ tự trạng từ: 还 + 能 + 一起 + Động từ." },
            vocab: [{ word: "希望", py: "xīwàng", vi: "hy vọng" }, { word: "下次", py: "xià cì", vi: "lần sau" }] },
        ] },
      ],
      choices: [
        {
          label: "Cùng nhau chụp ảnh kỷ niệm",
          zh: "我们一起拍张照片吧！", py: "Wǒmen yìqǐ pāi zhāng zhàopiàn ba!", vi: "Chúng mình cùng chụp một tấm ảnh nhé!",
          next: "END_5",
          analysis: { structure: "拍 + (一)张 + 照片", explain: "张 là lượng từ cho ảnh, giấy: 一张照片. Khi nói nhanh có thể bỏ 一: 拍张照片 = chụp một tấm ảnh." },
          vocab: [{ word: "照片", py: "zhàopiàn", vi: "ảnh" }, { word: "张", py: "zhāng", vi: "(lượng từ cho ảnh, giấy)" }],
        },
        {
          label: "Hẹn nhau lần sau đi chơi tiếp",
          zh: "下次我们再一起来玩吧！", py: "Xià cì wǒmen zài yìqǐ lái wán ba!", vi: "Lần sau chúng mình lại cùng đến chơi nhé!",
          next: "END_6",
          analysis: { structure: "下次 + 再 + Động từ", explain: "再 = lại (việc sẽ làm lần nữa). Thứ tự: 下次 + chủ ngữ + 再 + 一起 + động từ." },
          vocab: [{ word: "下次", py: "xià cì", vi: "lần sau" }, { word: "再", py: "zài", vi: "lại" }],
        },
      ],
    },
    // KẾT THÚC 01 — MỘT LẦN THẤT HẸN
    "END_1": {
      id: "END_1",
      ending: { title: "一次失约", titleVi: "Một lần thất hẹn" },
      lines: [
        { kind: "quote", zh: "小美回家了，没有和朋友们一起去公园。", py: "Xiǎo Měi huí jiā le, méiyǒu hé péngyoumen yìqǐ qù gōngyuán.", vi: "Tiểu Mỹ đã về nhà và không đi công viên cùng các bạn." },
        { kind: "quote", zh: "她觉得很不好意思。她希望下次可以早点儿起床。", py: "Tā juéde hěn bù hǎoyìsi. Tā xīwàng xià cì kěyǐ zǎo diǎnr qǐchuáng.", vi: "Cô ấy cảm thấy rất ngại. Cô ấy hy vọng lần sau có thể dậy sớm hơn." },
      ],
    },
    // KẾT THÚC 02 — MỘT CUỘC TÌM KIẾM DÀI
    "END_2": {
      id: "END_2",
      ending: { title: "找了很久", titleVi: "Một cuộc tìm kiếm dài" },
      lines: [
        { kind: "quote", zh: "小美和小丽找了很长时间，还是没有找到小刚。", py: "Xiǎo Měi hé Xiǎo Lì zhǎo le hěn cháng shíjiān, háishi méiyǒu zhǎodào Xiǎo Gāng.", vi: "Tiểu Mỹ và Tiểu Lệ đã tìm rất lâu nhưng vẫn không tìm thấy Tiểu Cương." },
        { kind: "quote", zh: "最后，她们决定回到商店门口。小刚正在那里等她们。", py: "Zuìhòu, tāmen juédìng huí dào shāngdiàn ménkǒu. Xiǎo Gāng zhèngzài nàlǐ děng tāmen.", vi: "Cuối cùng, họ quyết định quay lại trước cửa hàng. Tiểu Cương đang đợi họ ở đó." },
        { kind: "quote", zh: "三个人终于见面了。", py: "Sān ge rén zhōngyú jiànmiàn le.", vi: "Cuối cùng, ba người cũng gặp lại nhau." },
      ],
    },
    // KẾT THÚC 03 — MỘT BUỔI TRƯA THƯ GIÃN
    "END_3": {
      id: "END_3",
      ending: { title: "轻松的中午", titleVi: "Một buổi trưa thư giãn" },
      lines: [
        { kind: "quote", zh: "三个朋友买了饮料，坐在饭店外面聊天。", py: "Sān ge péngyou mǎi le yǐnliào, zuò zài fàndiàn wàimiàn liáotiān.", vi: "Ba người bạn mua đồ uống và ngồi trò chuyện bên ngoài nhà hàng." },
        { kind: "quote", zh: "他们聊了学校里的事情，也说了很多有意思的话。", py: "Tāmen liáo le xuéxiào lǐ de shìqing, yě shuō le hěn duō yǒu yìsi de huà.", vi: "Họ trò chuyện về những chuyện ở trường và nói rất nhiều điều thú vị." },
        { kind: "quote", zh: "虽然没有去很多地方，但是大家都很开心。", py: "Suīrán méiyǒu qù hěn duō dìfang, dànshì dàjiā dōu hěn kāixīn.", vi: "Mặc dù không đi được nhiều nơi, nhưng mọi người đều rất vui." },
      ],
    },
    // KẾT THÚC 04 — MỘT SỞ THÍCH MỚI
    "END_4": {
      id: "END_4",
      ending: { title: "新的爱好", titleVi: "Một sở thích mới" },
      lines: [
        { kind: "quote", zh: "小刚练习了很多次，终于学会了这个舞蹈。", py: "Xiǎo Gāng liànxí le hěn duō cì, zhōngyú xuéhuì le zhège wǔdǎo.", vi: "Tiểu Cương luyện tập rất nhiều lần và cuối cùng đã học được điệu nhảy này." },
        { kind: "quote", zh: "小美也认识了一个新朋友。", py: "Xiǎo Měi yě rènshi le yí ge xīn péngyou.", vi: "Tiểu Mỹ cũng làm quen được một người bạn mới." },
        { kind: "quote", zh: "他们决定以后有时间就来公园跳舞。", py: "Tāmen juédìng yǐhòu yǒu shíjiān jiù lái gōngyuán tiào wǔ.", vi: "Họ quyết định sau này khi có thời gian sẽ đến công viên nhảy múa." },
      ],
    },
    // KẾT THÚC 05 — BỨC ẢNH KỶ NIỆM
    "END_5": {
      id: "END_5",
      ending: { title: "纪念照片", titleVi: "Bức ảnh kỷ niệm" },
      lines: [
        { kind: "quote", zh: "三个朋友一起拍了一张照片。", py: "Sān ge péngyou yìqǐ pāi le yì zhāng zhàopiàn.", vi: "Ba người bạn cùng chụp một bức ảnh." },
        { kind: "pick", options: [
          { zh: "今天真不是难忘的一天！", py: "Jīntiān zhēn bú shì nánwàng de yì tiān!", vi: "Hôm nay đúng là không phải một ngày đáng nhớ!", correct: false,
            analysis: { structure: "Sai nghĩa", explain: "真不是 = thật sự không phải, trái với niềm vui lúc cả nhóm đang chụp ảnh. Khen một ngày vui dùng 真是 (đúng là)." },
            vocab: [{ word: "真是", py: "zhēn shì", vi: "đúng là, thật là" }] },
          { zh: "今天真是难忘的一个天！", py: "Jīntiān zhēn shì nánwàng de yí ge tiān!", vi: "Hôm nay đúng là một cái ngày đáng nhớ!", correct: false,
            analysis: { structure: "Thừa lượng từ 个", explain: "天 (ngày) tự đứng sau số, không cần lượng từ: 一天, 两天. Nói 一个天 là sai." },
            vocab: [{ word: "天", py: "tiān", vi: "ngày" }] },
          { zh: "今天真是难忘的一天！", py: "Jīntiān zhēn shì nánwàng de yì tiān!", vi: "Hôm nay đúng là một ngày đáng nhớ!", correct: true,
            analysis: { structure: "真是 + Tính từ + 的 + 一天", explain: "真是 = đúng là. 难忘的一天 = một ngày đáng nhớ: tính từ + 的 đứng trước danh từ. 天 không cần lượng từ: 一天." },
            vocab: [{ word: "难忘", py: "nánwàng", vi: "khó quên, đáng nhớ" }, { word: "真是", py: "zhēn shì", vi: "đúng là, thật là" }] },
        ] },
        { kind: "quote", zh: "他们把照片发给了老师和家人。", py: "Tāmen bǎ zhàopiàn fā gěi le lǎoshī hé jiārén.", vi: "Họ gửi bức ảnh cho thầy giáo và gia đình." },
      ],
    },
    // KẾT THÚC 06 — HẸN GẶP LẠI
    "END_6": {
      id: "END_6",
      ending: { title: "下次见", titleVi: "Hẹn gặp lại" },
      lines: [
        { kind: "quote", zh: "太阳快下山了，三个朋友准备回家。", py: "Tàiyáng kuài xià shān le, sān ge péngyou zhǔnbèi huí jiā.", vi: "Mặt trời sắp lặn, ba người bạn chuẩn bị về nhà." },
        { kind: "npc", speaker: "小丽", zh: "下个星期我们再来吧！", py: "Xià ge xīngqī wǒmen zài lái ba!", vi: "Tuần sau chúng ta lại đến nhé!" },
        { kind: "quote", zh: "小美和小刚都说：“好啊！”", py: "Xiǎo Měi hé Xiǎo Gāng dōu shuō: “Hǎo a!”", vi: "Tiểu Mỹ và Tiểu Cương đều nói: “Được đấy!”" },
        { kind: "quote", zh: "他们期待下一次旅行。", py: "Tāmen qīdài xià yí cì lǚxíng.", vi: "Họ mong chờ chuyến đi tiếp theo." },
      ],
    },
  },
};
