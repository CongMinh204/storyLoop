import type { BranchingStory } from "../../types";

// Truyện "Chiếc Đồng Hồ Biến Mất" (HSK 2), truyện rẽ nhánh với 2 kết thúc. Người chơi vào vai 小雨.
// Bản gốc của người viết: src/imports/stories/dong-ho-bien-mat.md (tên gốc trong Google Doc: 谁送错了礼物？ — "Ai đã tặng nhầm quà?")
// Đổi tên truyện vì không ai tặng nhầm quà: nội dung là đi tìm chiếc đồng hồ bị giấu.
// Mỗi câu nói của 小雨 là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Lựa chọn hướng đi trong bản gốc là hành động, nên các câu 小雨 nói được lấy từ những câu thoại có sẵn của nhân vật này.
// Chỉnh nhỏ so với bản gốc để mạch truyện khớp với mọi đường đi (đồng hồ luôn nằm trong chiếc hộp lớn):
// - 03D: ảnh trong hộp đỏ chỉ cho thấy nhiều món quà; thêm câu "chưa tìm hết" vì 4A, 4C nói đồng hồ ở trong hộp lớn
// - 04A: 小美 giải thích rõ lý do (gom quà của mọi người vào hộp lớn để tạo bất ngờ, lỡ bỏ cả đồng hồ vào), bỏ chi tiết "hai chiếc đồng hồ" khó hiểu
// - 04B: hộp nhỏ dưới bàn chứa tấm thiệp cho ông Vương (bản gốc: đồng hồ nằm đây, mâu thuẫn với 4A và 4C)
// - 04C: bỏ "đưa ảnh và mẩu giấy" vì đi tới được từ 3B (chưa có ảnh)
// - END_1: bỏ "hai chiếc đồng hồ"
// - 04A, 04B: thêm câu "hai người cùng mở hộp lớn và tìm thấy đồng hồ" (bản gốc: 04A nói đồng hồ không tìm thấy nữa, 04B để đồng hồ ở hộp lớn, nhưng END_1 và END_2 đều coi như đã có đồng hồ)
// - 04C: lựa chọn "hỏi rõ Tiểu Mỹ" dẫn tới END_2 thay vì 04A (04C đã tìm thấy đồng hồ, còn 04A kể đồng hồ vẫn thất lạc)
// - END_2: đáp án sai "你先应该告诉我" nghe vẫn tự nhiên nên thay bằng câu sai thật sự
// - vocab: mỗi từ một câu ví dụ riêng (bản đầu nhiều từ dùng chung một câu)
export const DONG_HO_BIEN_MAT: BranchingStory = {
  start: "01",
  characters: {
    "小美": "👩",
    "王先生": "👨",
  },
  vocab: [
    { word: "手表", py: "shǒubiǎo", vi: "đồng hồ đeo tay",
      ex: { zh: "小雨想送他一块手表。", py: "Xiǎoyǔ xiǎng sòng tā yí kuài shǒubiǎo.", vi: "Tiểu Vũ muốn tặng ông ấy một chiếc đồng hồ đeo tay." } },
    { word: "报纸", py: "bàozhǐ", vi: "báo",
      ex: { zh: "小雨打开柜子，发现里面有牛奶、报纸，还有一个红色的袋子。", py: "Xiǎoyǔ dǎkāi guìzi, fāxiàn lǐmiàn yǒu niúnǎi, bàozhǐ, hái yǒu yí ge hóngsè de dàizi.", vi: "Tiểu Vũ mở tủ, phát hiện bên trong có sữa bò, báo và một chiếc túi màu đỏ." } },
    { word: "送", py: "sòng", vi: "tặng",
      ex: { zh: "小美送给小雨一条粉色的裙子，因为她知道小雨最喜欢粉色。", py: "Xiǎoměi sòng gěi Xiǎoyǔ yì tiáo fěnsè de qúnzi, yīnwèi tā zhīdào Xiǎoyǔ zuì xǐhuan fěnsè.", vi: "Tiểu Mỹ tặng Tiểu Vũ một chiếc váy màu hồng vì cô biết Tiểu Vũ thích màu hồng nhất." } },
    { word: "牛奶", py: "niúnǎi", vi: "sữa bò",
      ex: { zh: "小雨把礼物放在房间里，然后去买牛奶。", py: "Xiǎoyǔ bǎ lǐwù fàng zài fángjiān lǐ, ránhòu qù mǎi niúnǎi.", vi: "Tiểu Vũ đặt món quà trong phòng rồi đi mua sữa bò." } },
    { word: "房间", py: "fángjiān", vi: "căn phòng",
      ex: { zh: "小美走进房间，很久都没有出来。", py: "Xiǎoměi zǒu jìn fángjiān, hěn jiǔ dōu méiyǒu chūlái.", vi: "Tiểu Mỹ đi vào phòng, rất lâu vẫn chưa ra." } },
    { word: "丈夫", py: "zhàngfu", vi: "chồng",
      ex: { zh: "小美的丈夫王先生今天过生日。", py: "Xiǎoměi de zhàngfu Wáng xiānsheng jīntiān guò shēngrì.", vi: "Chồng của Tiểu Mỹ, ông Vương, hôm nay tổ chức sinh nhật." } },
    { word: "旁边", py: "pángbiān", vi: "bên cạnh",
      ex: { zh: "桌子旁边有一张报纸，报纸上写着：“今天，红色的东西会带来好运！”", py: "Zhuōzi pángbiān yǒu yì zhāng bàozhǐ, bàozhǐ shàng xiězhe: “Jīntiān, hóngsè de dōngxi huì dài lái hǎoyùn!”", vi: "Bên cạnh bàn có một tờ báo. Trên báo viết: “Hôm nay, đồ vật màu đỏ sẽ mang lại may mắn!”" } },
    { word: "粉色", py: "fěnsè", vi: "màu hồng",
      ex: { zh: "小雨还发现，房间左边有一件粉色的衣服。", py: "Xiǎoyǔ hái fāxiàn, fángjiān zuǒbiān yǒu yí jiàn fěnsè de yīfu.", vi: "Tiểu Vũ còn phát hiện một chiếc áo màu hồng ở bên trái căn phòng." } },
    { word: "颜色", py: "yánsè", vi: "màu sắc",
      ex: { zh: "问他为什么知道手表的颜色。", py: "Wèn tā wèishénme zhīdào shǒubiǎo de yánsè.", vi: "Hỏi tại sao ông ấy biết màu của chiếc đồng hồ." } },
    { word: "左边", py: "zuǒbiān", vi: "bên trái",
      ex: { zh: "红色的礼物在左边。", py: "Hóngsè de lǐwù zài zuǒbiān.", vi: "Món quà màu đỏ ở bên trái." } },
    { word: "红色", py: "hóngsè", vi: "màu đỏ",
      ex: { zh: "小美手里拿着一个红色的小盒子。", py: "Xiǎoměi shǒu lǐ názhe yí ge hóngsè de xiǎo hézi.", vi: "Trong tay Tiểu Mỹ có một chiếc hộp nhỏ màu đỏ." } },
    { word: "惊喜", py: "jīngxǐ", vi: "bất ngờ",
      ex: { zh: "也许她想给你一个惊喜。", py: "Yěxǔ tā xiǎng gěi nǐ yí ge jīngxǐ.", vi: "Có lẽ cô ấy muốn tạo bất ngờ cho cháu." } },
    { word: "原谅", py: "yuánliàng", vi: "tha thứ",
      ex: { zh: "原谅小美，一起准备生日礼物。", py: "Yuánliàng Xiǎoměi, yìqǐ zhǔnbèi shēngrì lǐwù.", vi: "Tha thứ cho Tiểu Mỹ và cùng chuẩn bị quà sinh nhật." } },
    { word: "一下", py: "yíxià", vi: "một chút, thử",
      ex: { zh: "你等我一下，我去看看。", py: "Nǐ děng wǒ yíxià, wǒ qù kànkan.", vi: "Đợi tớ một chút, tớ đi xem thử." } },
  ],
  nodes: {
    // NODE 01 — MÓN QUÀ BÍ ẨN
    "01": {
      id: "01",
      lines: [
        { kind: "quote", zh: "星期六早上，小雨去朋友小美家玩。", py: "Xīngqīliù zǎoshang, Xiǎoyǔ qù péngyou Xiǎoměi jiā wán.", vi: "Sáng thứ Bảy, Tiểu Vũ đến nhà bạn là Tiểu Mỹ chơi." },
        { kind: "quote", zh: "小美的丈夫王先生今天过生日。小雨想送他一块手表。", py: "Xiǎoměi de zhàngfu Wáng xiānsheng jīntiān guò shēngrì. Xiǎoyǔ xiǎng sòng tā yí kuài shǒubiǎo.", vi: "Chồng của Tiểu Mỹ, ông Vương, hôm nay tổ chức sinh nhật. Tiểu Vũ muốn tặng ông ấy một chiếc đồng hồ đeo tay." },
        { kind: "quote", zh: "这块手表很漂亮，但是很贵，要三千块钱。", py: "Zhè kuài shǒubiǎo hěn piàoliang, dànshì hěn guì, yào sān qiān kuài qián.", vi: "Chiếc đồng hồ này rất đẹp nhưng đắt, giá ba nghìn tệ." },
        { kind: "quote", zh: "小雨把礼物放在房间里，然后去买牛奶。", py: "Xiǎoyǔ bǎ lǐwù fàng zài fángjiān lǐ, ránhòu qù mǎi niúnǎi.", vi: "Tiểu Vũ đặt món quà trong phòng rồi đi mua sữa bò." },
        { kind: "quote", zh: "可是，她回来的时候，礼物不见了！", py: "Kěshì, tā huílái de shíhou, lǐwù bú jiàn le!", vi: "Nhưng khi cô ấy quay lại, món quà đã biến mất!" },
        { kind: "quote", zh: "桌子旁边有一张报纸，报纸上写着：“今天，红色的东西会带来好运！”", py: "Zhuōzi pángbiān yǒu yì zhāng bàozhǐ, bàozhǐ shàng xiězhe: “Jīntiān, hóngsè de dōngxi huì dài lái hǎoyùn!”", vi: "Bên cạnh bàn có một tờ báo. Trên báo viết: “Hôm nay, đồ vật màu đỏ sẽ mang lại may mắn!”" },
        { kind: "quote", zh: "小雨还发现，房间左边有一件粉色的衣服。", py: "Xiǎoyǔ hái fāxiàn, fángjiān zuǒbiān yǒu yí jiàn fěnsè de yīfu.", vi: "Tiểu Vũ còn phát hiện một chiếc áo màu hồng ở bên trái căn phòng." },
        { kind: "quote", zh: "她觉得真奇怪：谁拿走了手表？", py: "Tā juéde zhēn qíguài: shéi ná zǒu le shǒubiǎo?", vi: "Cô ấy cảm thấy thật kỳ lạ: Ai đã lấy chiếc đồng hồ đi?" },
      ],
      choices: [
        {
          label: "Hỏi Tiểu Mỹ",
          zh: "先问小美。", py: "Xiān wèn Xiǎoměi.", vi: "Hỏi Tiểu Mỹ trước.",
          next: "02A",
          analysis: { structure: "先 + Động từ + Tân ngữ", explain: "先 đứng trước động từ, nghĩa là \"trước tiên\": 先问小美 = hỏi Tiểu Mỹ trước." },
          vocab: [{ word: "先", py: "xiān", vi: "trước tiên" }, { word: "问", py: "wèn", vi: "hỏi" }],
        },
        {
          label: "Tìm ông Vương",
          zh: "去找王先生。", py: "Qù zhǎo Wáng xiānsheng.", vi: "Đi tìm ông Vương.",
          next: "02B",
          analysis: { structure: "去 + Động từ + Tân ngữ", explain: "去找 = đi tìm. 去 chỉ việc di chuyển để làm gì, đứng trước động từ chính 找." },
          vocab: [{ word: "去", py: "qù", vi: "đi" }, { word: "找", py: "zhǎo", vi: "tìm" }],
        },
        {
          label: "Xem chiếc áo hồng",
          zh: "先看看那件粉色的衣服。", py: "Xiān kànkan nà jiàn fěnsè de yīfu.", vi: "Kiểm tra chiếc áo màu hồng trước.",
          next: "02C",
          analysis: { structure: "先 + 看看 + 那件 + Danh từ", explain: "看看 là dạng lặp của 看, nghĩa là xem thử. 件 là lượng từ của quần áo: 那件粉色的衣服." },
          vocab: [{ word: "看看", py: "kànkan", vi: "xem thử" }, { word: "件", py: "jiàn", vi: "(lượng từ quần áo)" }],
        },
      ],
    },
    // NODE 02A — TIỂU MỸ ĐANG GIẤU ĐIỀU GÌ ĐÓ
    "02A": {
      id: "02A",
      lines: [
        { kind: "pick", options: [
          { zh: "你看见我的手表了吗？", py: "Nǐ kànjiàn wǒ de shǒubiǎo le ma?", vi: "Cậu có nhìn thấy đồng hồ của tớ không?", correct: true,
            analysis: { structure: "Chủ ngữ + 看见 + Tân ngữ + 了吗？", explain: "看见 = nhìn thấy. 了吗 ở cuối câu hỏi xem việc đã xảy ra chưa." },
            vocab: [{ word: "看见", py: "kànjiàn", vi: "nhìn thấy" }, { word: "手表", py: "shǒubiǎo", vi: "đồng hồ đeo tay" }] },
          { zh: "你我的手表看见了吗？", py: "Nǐ wǒ de shǒubiǎo kànjiàn le ma?", vi: "Cậu đồng hồ của tớ nhìn thấy rồi không?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Tiếng Trung xếp Chủ ngữ + Động từ + Tân ngữ: 你看见我的手表, không đặt tân ngữ trước động từ." },
            vocab: [{ word: "看见", py: "kànjiàn", vi: "nhìn thấy" }] },
          { zh: "你看见了我的手表吗了？", py: "Nǐ kànjiàn le wǒ de shǒubiǎo ma le?", vi: "Cậu đã nhìn thấy đồng hồ của tớ không rồi?", correct: false,
            analysis: { structure: "Sai vị trí 了 và 吗", explain: "吗 là trợ từ nghi vấn đứng cuối câu, không thêm 了 sau nó. Dạng đúng: 你看见我的手表了吗？" },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
        ] },
        { kind: "npc", speaker: "小美", zh: "不知道。你等我一下，我去看看。", py: "Bù zhīdào. Nǐ děng wǒ yíxià, wǒ qù kànkan.", vi: "Tớ không biết. Đợi tớ một chút, tớ đi xem thử." },
        { kind: "quote", zh: "小美走进房间，很久都没有出来。", py: "Xiǎoměi zǒu jìn fángjiān, hěn jiǔ dōu méiyǒu chūlái.", vi: "Tiểu Mỹ đi vào phòng, rất lâu vẫn chưa ra." },
        { kind: "quote", zh: "小雨听见房间里有声音，好像有人在找东西。", py: "Xiǎoyǔ tīngjiàn fángjiān lǐ yǒu shēngyīn, hǎoxiàng yǒu rén zài zhǎo dōngxi.", vi: "Tiểu Vũ nghe thấy tiếng động trong phòng, hình như có người đang tìm đồ." },
      ],
      choices: [
        {
          label: "Vào xem",
          zh: "进去看看。", py: "Jìnqù kànkan.", vi: "Đi vào xem.",
          next: "03A",
          analysis: { structure: "Động từ hướng + 看看", explain: "进去 = đi vào (từ ngoài vào trong). 看看 = xem thử một chút." },
          vocab: [{ word: "进去", py: "jìnqù", vi: "đi vào" }, { word: "看看", py: "kànkan", vi: "xem thử" }],
        },
        {
          label: "Đợi ngoài cửa",
          zh: "站在门外等她。", py: "Zhàn zài mén wài děng tā.", vi: "Đứng ngoài cửa đợi cô ấy.",
          next: "03B",
          analysis: { structure: "站在 + Nơi chốn + Động từ", explain: "站在门外 = đứng ở ngoài cửa. Cụm 在 + nơi chốn đứng trước động từ 等 (đợi)." },
          vocab: [{ word: "站", py: "zhàn", vi: "đứng" }, { word: "门外", py: "mén wài", vi: "ngoài cửa" }, { word: "等", py: "děng", vi: "đợi" }],
        },
      ],
    },
    // NODE 02B — ÔNG VƯƠNG NÓI MỘT CÂU KỲ LẠ
    "02B": {
      id: "02B",
      lines: [
        { kind: "pick", options: [
          { zh: "你看见吗我的礼物了？", py: "Nǐ kànjiàn ma wǒ de lǐwù le?", vi: "Cậu nhìn thấy không quà của tớ rồi?", correct: false,
            analysis: { structure: "Sai vị trí 吗", explain: "吗 phải đứng ở cuối câu: 你看见我的礼物了吗？" },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "你看见我的礼物了吗？", py: "Nǐ kànjiàn wǒ de lǐwù le ma?", vi: "Chú có nhìn thấy món quà của cháu không?", correct: true,
            analysis: { structure: "Chủ ngữ + 看见 + 我的礼物 + 了吗？", explain: "我的礼物 = quà của tớ (đại từ + 的 + danh từ). Câu hỏi kết thúc bằng 了吗." },
            vocab: [{ word: "礼物", py: "lǐwù", vi: "quà tặng" }, { word: "的", py: "de", vi: "(trợ từ sở hữu)" }] },
          { zh: "你看见我礼物的了吗？", py: "Nǐ kànjiàn wǒ lǐwù de le ma?", vi: "Cậu nhìn thấy tớ quà của rồi không?", correct: false,
            analysis: { structure: "Sai vị trí 的", explain: "的 nằm giữa định ngữ và danh từ: 我的礼物, không đặt sau 礼物." },
            vocab: [{ word: "的", py: "de", vi: "(trợ từ sở hữu)" }] },
        ] },
        { kind: "npc", speaker: "王先生", zh: "没有。可是，你为什么买红色的手表？", py: "Méiyǒu. Kěshì, nǐ wèishénme mǎi hóngsè de shǒubiǎo?", vi: "Không. Nhưng tại sao cháu lại mua đồng hồ màu đỏ?" },
        { kind: "pick", options: [
          { zh: "你知道怎么它是红色的？", py: "Nǐ zhīdào zěnme tā shì hóngsè de?", vi: "Chú biết làm sao nó là màu đỏ?", correct: false,
            analysis: { structure: "Sai vị trí 怎么", explain: "怎么 đứng ngay trước động từ mà nó hỏi: 你怎么知道…？" },
            vocab: [{ word: "怎么", py: "zěnme", vi: "làm sao" }] },
          { zh: "你怎么知道它是红色的吗？", py: "Nǐ zěnme zhīdào tā shì hóngsè de ma?", vi: "Làm sao chú biết nó màu đỏ không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 怎么 thì không thêm 吗 ở cuối câu." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "你怎么知道它是红色的？", py: "Nǐ zěnme zhīdào tā shì hóngsè de?", vi: "Sao chú biết nó màu đỏ?", correct: true,
            analysis: { structure: "怎么 + Động từ?", explain: "怎么知道 = làm sao biết. 是…的 nhấn mạnh tính chất của sự vật (红色的)." },
            vocab: [{ word: "知道", py: "zhīdào", vi: "biết" }, { word: "红色", py: "hóngsè", vi: "màu đỏ" }] },
        ] },
        { kind: "quote", zh: "王先生没有回答，只是看了看房间的方向。", py: "Wáng xiānsheng méiyǒu huídá, zhǐshì kàn le kàn fángjiān de fāngxiàng.", vi: "Ông Vương không trả lời, chỉ nhìn về phía căn phòng." },
      ],
      choices: [
        {
          label: "Hỏi vì sao biết màu",
          zh: "问他为什么知道手表的颜色。", py: "Wèn tā wèishénme zhīdào shǒubiǎo de yánsè.", vi: "Hỏi tại sao ông ấy biết màu của chiếc đồng hồ.",
          next: "03C",
          analysis: { structure: "问 + Người + 为什么…", explain: "为什么 mở đầu phần hỏi lý do. 手表的颜色 = màu của chiếc đồng hồ (的 nối định ngữ và danh từ)." },
          vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }, { word: "颜色", py: "yánsè", vi: "màu sắc" }],
        },
        {
          label: "Nhìn theo ánh mắt",
          zh: "跟着他的眼睛看向房间。", py: "Gēnzhe tā de yǎnjing kàn xiàng fángjiān.", vi: "Nhìn theo hướng mắt ông ấy về phía căn phòng.",
          next: "03A",
          analysis: { structure: "跟着 + Danh từ + 看向 + Nơi chốn", explain: "跟着 = đi theo, làm theo. 看向房间 = nhìn về phía căn phòng." },
          vocab: [{ word: "跟着", py: "gēnzhe", vi: "đi theo" }, { word: "眼睛", py: "yǎnjing", vi: "mắt" }],
        },
      ],
    },
    // NODE 02C — CHIẾC ÁO MÀU HỒNG
    "02C": {
      id: "02C",
      lines: [
        { kind: "quote", zh: "小雨拿起那件粉色的衣服。", py: "Xiǎoyǔ ná qǐ nà jiàn fěnsè de yīfu.", vi: "Tiểu Vũ cầm chiếc áo màu hồng lên." },
        { kind: "quote", zh: "衣服里面有一张小纸条，上面写着：“红色的礼物在左边。”", py: "Yīfu lǐmiàn yǒu yì zhāng xiǎo zhǐtiáo, shàngmiàn xiězhe: “Hóngsè de lǐwù zài zuǒbiān.”", vi: "Bên trong áo có một mẩu giấy nhỏ, trên đó viết: “Món quà màu đỏ ở bên trái.”" },
        { kind: "quote", zh: "小雨看了看房间。左边有一个柜子，旁边还有一个大箱子。", py: "Xiǎoyǔ kàn le kàn fángjiān. Zuǒbiān yǒu yí ge guìzi, pángbiān hái yǒu yí ge dà xiāngzi.", vi: "Tiểu Vũ nhìn quanh căn phòng. Bên trái có một chiếc tủ, bên cạnh còn có một cái hộp lớn." },
      ],
      choices: [
        {
          label: "Mở tủ",
          zh: "打开柜子。", py: "Dǎkāi guìzi.", vi: "Mở tủ.",
          next: "03B",
          analysis: { structure: "打开 + Tân ngữ", explain: "打开 = mở ra (động từ 打 + bổ ngữ kết quả 开)." },
          vocab: [{ word: "打开", py: "dǎkāi", vi: "mở" }, { word: "柜子", py: "guìzi", vi: "tủ" }],
        },
        {
          label: "Mở hộp lớn",
          zh: "打开大箱子。", py: "Dǎkāi dà xiāngzi.", vi: "Mở chiếc hộp lớn.",
          next: "03D",
          analysis: { structure: "打开 + Tính từ + Danh từ", explain: "大箱子 = hộp lớn: tính từ 大 đứng trước danh từ 箱子." },
          vocab: [{ word: "大", py: "dà", vi: "lớn" }, { word: "箱子", py: "xiāngzi", vi: "hộp, rương" }],
        },
      ],
    },
    // NODE 03A — NGƯỜI TRONG PHÒNG
    "03A": {
      id: "03A",
      lines: [
        { kind: "quote", zh: "小雨轻轻地打开门，看见小美正在找东西。", py: "Xiǎoyǔ qīngqīng de dǎkāi mén, kànjiàn Xiǎoměi zhèngzài zhǎo dōngxi.", vi: "Tiểu Vũ nhẹ nhàng mở cửa và nhìn thấy Tiểu Mỹ đang tìm đồ." },
        { kind: "quote", zh: "小美手里拿着一个红色的小盒子。", py: "Xiǎoměi shǒu lǐ názhe yí ge hóngsè de xiǎo hézi.", vi: "Trong tay Tiểu Mỹ có một chiếc hộp nhỏ màu đỏ." },
        { kind: "quote", zh: "小美马上把盒子放在桌子下面。", py: "Xiǎoměi mǎshàng bǎ hézi fàng zài zhuōzi xiàmiàn.", vi: "Tiểu Mỹ lập tức đặt chiếc hộp xuống dưới bàn." },
        { kind: "pick", options: [
          { zh: "你拿着什么？是不是我的手表？", py: "Nǐ názhe shénme? Shì bú shì wǒ de shǒubiǎo?", vi: "Cậu đang cầm gì vậy? Có phải đồng hồ của tớ không?", correct: true,
            analysis: { structure: "Động từ + 什么？; 是不是 + cụm từ？", explain: "拿着什么 = đang cầm gì. 是不是 + cụm = có phải… không (câu hỏi chính phản)." },
            vocab: [{ word: "拿着", py: "názhe", vi: "đang cầm" }, { word: "是不是", py: "shì bu shì", vi: "có phải không" }] },
          { zh: "你什么拿着？是不是我的手表？", py: "Nǐ shénme názhe? Shì bú shì wǒ de shǒubiǎo?", vi: "Cậu gì đang cầm? Có phải đồng hồ của tớ không?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Từ để hỏi 什么 làm tân ngữ vẫn đứng sau động từ: 你拿着什么？" },
            vocab: [{ word: "什么", py: "shénme", vi: "cái gì" }] },
          { zh: "你拿着什么吗？是不是我的手表？", py: "Nǐ názhe shénme ma? Shì bú shì wǒ de shǒubiǎo?", vi: "Cậu đang cầm gì không? Có phải đồng hồ của tớ không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 什么 thì không thêm 吗." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
        ] },
      ],
      choices: [
        {
          label: "Hỏi thẳng",
          zh: "直接问她为什么拿走礼物。", py: "Zhíjiē wèn tā wèishénme ná zǒu lǐwù.", vi: "Hỏi thẳng tại sao cô ấy lấy món quà đi.",
          next: "04A",
          analysis: { structure: "直接 + Động từ", explain: "直接 = trực tiếp, đứng trước động từ. 拿走 = lấy đi (走 là bổ ngữ chỉ hướng)." },
          vocab: [{ word: "直接", py: "zhíjiē", vi: "trực tiếp" }, { word: "拿走", py: "ná zǒu", vi: "lấy đi" }],
        },
        {
          label: "Xem dưới bàn",
          zh: "先看看桌子下面。", py: "Xiān kànkan zhuōzi xiàmiàn.", vi: "Kiểm tra dưới bàn trước.",
          next: "04B",
          analysis: { structure: "先 + 看看 + Nơi chốn", explain: "下面 = bên dưới, đứng sau danh từ: 桌子下面 = dưới bàn." },
          vocab: [{ word: "桌子", py: "zhuōzi", vi: "bàn" }, { word: "下面", py: "xiàmiàn", vi: "bên dưới" }],
        },
      ],
    },
    // NODE 03B — CHIẾC TỦ BÊN TRÁI
    "03B": {
      id: "03B",
      lines: [
        { kind: "quote", zh: "小雨打开柜子，发现里面有牛奶、报纸，还有一个红色的袋子。", py: "Xiǎoyǔ dǎkāi guìzi, fāxiàn lǐmiàn yǒu niúnǎi, bàozhǐ, hái yǒu yí ge hóngsè de dàizi.", vi: "Tiểu Vũ mở tủ, phát hiện bên trong có sữa bò, báo và một chiếc túi màu đỏ." },
        { kind: "quote", zh: "她打开袋子，里面只有一张纸。", py: "Tā dǎkāi dàizi, lǐmiàn zhǐ yǒu yì zhāng zhǐ.", vi: "Cô ấy mở túi, bên trong chỉ có một tờ giấy." },
        { kind: "quote", zh: "纸上写着：“礼物不在这里。去问今天过生日的人。”", py: "Zhǐ shàng xiězhe: “Lǐwù bú zài zhèlǐ. Qù wèn jīntiān guò shēngrì de rén.”", vi: "Trên giấy viết: “Món quà không ở đây. Hãy đi hỏi người có sinh nhật hôm nay.”" },
        { kind: "quote", zh: "小雨想：今天过生日的人就是王先生！", py: "Xiǎoyǔ xiǎng: “Jīntiān guò shēngrì de rén jiù shì Wáng xiānsheng!”", vi: "Tiểu Vũ nghĩ: Người có sinh nhật hôm nay chính là ông Vương!" },
      ],
      choices: [
        {
          label: "Đi tìm ông Vương ngay",
          zh: "马上去找王先生。", py: "Mǎshàng qù zhǎo Wáng xiānsheng.", vi: "Lập tức đi tìm ông Vương.",
          next: "04C",
          analysis: { structure: "马上 + 去 + Động từ", explain: "马上 = ngay lập tức, đứng trước động từ." },
          vocab: [{ word: "马上", py: "mǎshàng", vi: "ngay lập tức" }],
        },
        {
          label: "Đưa mẩu giấy cho Tiểu Mỹ",
          zh: "先把纸条给小美看。", py: "Xiān bǎ zhǐtiáo gěi Xiǎoměi kàn.", vi: "Đưa mẩu giấy cho Tiểu Mỹ xem trước.",
          next: "04A",
          analysis: { structure: "先 + 把 + Tân ngữ + 给 + Người + 看", explain: "Câu chữ 把: 把纸条给小美看 = đưa mẩu giấy cho Tiểu Mỹ xem. Tân ngữ đứng sau 把." },
          vocab: [{ word: "把", py: "bǎ", vi: "(đưa tân ngữ lên trước động từ)" }, { word: "纸条", py: "zhǐtiáo", vi: "mẩu giấy" }],
        },
      ],
    },
    // NODE 03C — BÍ MẬT VỀ MÀU ĐỎ
    "03C": {
      id: "03C",
      lines: [
        { kind: "pick", options: [
          { zh: "你怎么手表知道是红色的？", py: "Nǐ zěnme shǒubiǎo zhīdào shì hóngsè de?", vi: "Sao chú đồng hồ biết là màu đỏ?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Mệnh đề 手表是红色的 là nội dung được biết, phải đứng sau 知道." },
            vocab: [{ word: "知道", py: "zhīdào", vi: "biết" }] },
          { zh: "你怎么知道手表是红色的？", py: "Nǐ zěnme zhīdào shǒubiǎo shì hóngsè de?", vi: "Sao chú biết đồng hồ màu đỏ?", correct: true,
            analysis: { structure: "怎么知道 + Mệnh đề (是…的)", explain: "手表是红色的 là mệnh đề đứng sau 知道; 是…的 nhấn mạnh màu sắc của đồng hồ." },
            vocab: [{ word: "手表", py: "shǒubiǎo", vi: "đồng hồ đeo tay" }, { word: "红色", py: "hóngsè", vi: "màu đỏ" }] },
          { zh: "你怎么知道手表红色是的？", py: "Nǐ zěnme zhīdào shǒubiǎo hóngsè shì de?", vi: "Sao chú biết đồng hồ đỏ là?", correct: false,
            analysis: { structure: "Sai trật tự 是…的", explain: "Cấu trúc nhấn mạnh là 是 + tính chất + 的: 是红色的; 是 không đứng sau 红色." },
            vocab: [{ word: "是…的", py: "shì…de", vi: "(cấu trúc nhấn mạnh)" }] },
        ] },
        { kind: "npc", speaker: "王先生", zh: "因为小美昨天告诉我了。", py: "Yīnwèi Xiǎoměi zuótiān gàosu wǒ le.", vi: "Vì hôm qua Tiểu Mỹ đã nói với chú rồi." },
        { kind: "pick", options: [
          { zh: "那她不为什么告诉我？", py: "Nà tā bù wèishénme gàosu wǒ?", vi: "Vậy cô ấy không tại sao nói cho cháu?", correct: false,
            analysis: { structure: "Sai vị trí 不", explain: "Từ phủ định 不 đứng ngay trước động từ, sau 为什么: 为什么不告诉我." },
            vocab: [{ word: "不", py: "bù", vi: "không" }] },
          { zh: "那她为什么不告诉我吗？", py: "Nà tā wèishénme bú gàosu wǒ ma?", vi: "Vậy tại sao cô ấy không nói cho cháu không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 为什么 thì không thêm 吗 ở cuối câu." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "那她为什么不告诉我？", py: "Nà tā wèishénme bù gàosu wǒ?", vi: "Vậy tại sao cô ấy không nói cho cháu?", correct: true,
            analysis: { structure: "为什么 + 不 + Động từ", explain: "为什么不… = tại sao không…, dùng để hỏi lý do của việc không làm." },
            vocab: [{ word: "告诉", py: "gàosu", vi: "nói cho biết" }, { word: "为什么", py: "wèishénme", vi: "tại sao" }] },
        ] },
        { kind: "npc", speaker: "王先生", zh: "我不知道。也许她想给你一个惊喜。", py: "Wǒ bù zhīdào. Yěxǔ tā xiǎng gěi nǐ yí ge jīngxǐ.", vi: "Chú không biết. Có lẽ cô ấy muốn tạo bất ngờ cho cháu." },
      ],
      choices: [
        {
          label: "Tin ông Vương",
          zh: "相信王先生，回去找小美。", py: "Xiāngxìn Wáng xiānsheng, huíqù zhǎo Xiǎoměi.", vi: "Tin ông Vương và quay lại tìm Tiểu Mỹ.",
          next: "04A",
          analysis: { structure: "相信 + Người; 回去 + Động từ", explain: "相信 = tin tưởng. 回去找小美 = quay lại tìm Tiểu Mỹ." },
          vocab: [{ word: "相信", py: "xiāngxìn", vi: "tin tưởng" }, { word: "回去", py: "huíqù", vi: "quay lại" }],
        },
        {
          label: "Tiếp tục tìm manh mối",
          zh: "觉得王先生也有秘密，继续找线索。", py: "Juéde Wáng xiānsheng yě yǒu mìmì, jìxù zhǎo xiànsuǒ.", vi: "Cảm thấy ông Vương cũng có bí mật nên tiếp tục tìm manh mối.",
          next: "04C",
          analysis: { structure: "觉得 + Mệnh đề; 继续 + Động từ", explain: "觉得 = cảm thấy, cho rằng. 继续找线索 = tiếp tục tìm manh mối." },
          vocab: [{ word: "觉得", py: "juéde", vi: "cảm thấy" }, { word: "秘密", py: "mìmì", vi: "bí mật" }, { word: "继续", py: "jìxù", vi: "tiếp tục" }, { word: "线索", py: "xiànsuǒ", vi: "manh mối" }],
        },
      ],
    },
    // NODE 03D — CHIẾC HỘP LỚN
    "03D": {
      id: "03D",
      lines: [
        { kind: "quote", zh: "小雨打开大箱子，里面有很多礼物。", py: "Xiǎoyǔ dǎkāi dà xiāngzi, lǐmiàn yǒu hěn duō lǐwù.", vi: "Tiểu Vũ mở chiếc hộp lớn, bên trong có rất nhiều món quà." },
        { kind: "quote", zh: "有红色的盒子、粉色的衣服，还有一个小纸袋。", py: "Yǒu hóngsè de hézi, fěnsè de yīfu, hái yǒu yí ge xiǎo zhǐdài.", vi: "Có hộp màu đỏ, quần áo màu hồng và một chiếc túi giấy nhỏ." },
        { kind: "quote", zh: "小雨打开红色的盒子，发现里面不是手表，而是一张照片。", py: "Xiǎoyǔ dǎkāi hóngsè de hézi, fāxiàn lǐmiàn bú shì shǒubiǎo, ér shì yì zhāng zhàopiàn.", vi: "Tiểu Vũ mở hộp màu đỏ, phát hiện bên trong không phải đồng hồ mà là một tấm ảnh." },
        { kind: "quote", zh: "照片上，小美和王先生站在一起，他们后面有很多礼物。", py: "Zhàopiàn shàng, Xiǎoměi hé Wáng xiānsheng zhàn zài yìqǐ, tāmen hòumiàn yǒu hěn duō lǐwù.", vi: "Trong ảnh, Tiểu Mỹ và ông Vương đứng cạnh nhau, phía sau có rất nhiều món quà." },
        { kind: "quote", zh: "箱子里的东西太多了，小雨还没有找完。", py: "Xiāngzi lǐ de dōngxi tài duō le, Xiǎoyǔ hái méiyǒu zhǎo wán.", vi: "Đồ trong hộp nhiều quá, Tiểu Vũ vẫn chưa tìm hết." },
      ],
      choices: [
        {
          label: "Cầm ảnh hỏi Tiểu Mỹ",
          zh: "拿着照片去问小美。", py: "Názhe zhàopiàn qù wèn Xiǎoměi.", vi: "Cầm ảnh đi hỏi Tiểu Mỹ.",
          next: "04A",
          analysis: { structure: "拿着 + Tân ngữ + 去 + Động từ", explain: "着 chỉ trạng thái đang cầm. Hai động từ nối liền: cầm ảnh (拿着照片) rồi đi hỏi (去问)." },
          vocab: [{ word: "拿着", py: "názhe", vi: "đang cầm" }, { word: "照片", py: "zhàopiàn", vi: "bức ảnh" }],
        },
        {
          label: "Cầm ảnh hỏi ông Vương",
          zh: "拿着照片去问王先生。", py: "Názhe zhàopiàn qù wèn Wáng xiānsheng.", vi: "Cầm ảnh đi hỏi ông Vương.",
          next: "04C",
          analysis: { structure: "拿着 + Tân ngữ + 去 + Động từ", explain: "Cùng cấu trúc: 拿着照片 (cầm ảnh) rồi 去问王先生 (đi hỏi ông Vương)." },
          vocab: [{ word: "问", py: "wèn", vi: "hỏi" }],
        },
      ],
    },
    // NODE 04A — SỰ THẬT ĐƯỢC TIẾT LỘ
    "04A": {
      id: "04A",
      lines: [
        { kind: "quote", zh: "小雨把看到的东西都告诉小美。", py: "Xiǎoyǔ bǎ kàndào de dōngxi dōu gàosu Xiǎoměi.", vi: "Tiểu Vũ kể cho Tiểu Mỹ tất cả những gì mình đã nhìn thấy." },
        { kind: "npc", speaker: "小美", zh: "对不起！我拿走了你的手表。", py: "Duìbuqǐ! Wǒ ná zǒu le nǐ de shǒubiǎo.", vi: "Xin lỗi! Tớ đã lấy chiếc đồng hồ của cậu." },
        { kind: "pick", options: [
          { zh: "为什么？", py: "Wèishénme?", vi: "Tại sao?", correct: true,
            analysis: { structure: "为什么？", explain: "Hỏi lý do bằng 为什么. Đứng một mình cũng đã là một câu hỏi hoàn chỉnh." },
            vocab: [{ word: "为什么", py: "wèishénme", vi: "tại sao" }] },
          { zh: "什么为？", py: "Shénme wèi?", vi: "Gì tại?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Từ để hỏi lý do là 为什么 (tại sao), không đảo thành 什么为." },
            vocab: [{ word: "什么", py: "shénme", vi: "cái gì" }] },
          { zh: "为什么吗？", py: "Wèishénme ma?", vi: "Tại sao không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "为什么 đã là từ để hỏi nên không thêm 吗." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
        ] },
        { kind: "npc", speaker: "小美", zh: "我想把大家的礼物都放进大箱子里，给王先生一个惊喜。可是，我不小心把你的手表也放进去了，现在找不到了。", py: "Wǒ xiǎng bǎ dàjiā de lǐwù dōu fàng jìn dà xiāngzi lǐ, gěi Wáng xiānsheng yí ge jīngxǐ. Kěshì, wǒ bù xiǎoxīn bǎ nǐ de shǒubiǎo yě fàng jìn qù le, xiànzài zhǎo bú dào le.", vi: "Tớ muốn bỏ quà của mọi người vào chiếc hộp lớn để tạo bất ngờ cho ông Vương. Nhưng tớ vô ý bỏ cả đồng hồ của cậu vào, giờ không tìm thấy nữa." },
        { kind: "quote", zh: "原来，这不是偷东西，而是一个误会！", py: "Yuánlái, zhè bú shì tōu dōngxi, ér shì yí ge wùhuì!", vi: "Hóa ra đây không phải là trộm đồ, mà chỉ là một sự hiểu lầm!" },
        { kind: "quote", zh: "她们一起打开大箱子，终于找到了手表。", py: "Tāmen yìqǐ dǎkāi dà xiāngzi, zhōngyú zhǎodào le shǒubiǎo.", vi: "Hai người cùng mở chiếc hộp lớn, cuối cùng cũng tìm thấy chiếc đồng hồ." },
      ],
      choices: [
        {
          label: "Tha thứ, cùng chuẩn bị",
          zh: "原谅小美，一起准备生日礼物。", py: "Yuánliàng Xiǎoměi, yìqǐ zhǔnbèi shēngrì lǐwù.", vi: "Tha thứ cho Tiểu Mỹ và cùng chuẩn bị quà sinh nhật.",
          next: "END_1",
          analysis: { structure: "原谅 + Người; 一起 + Động từ", explain: "原谅 = tha thứ. 一起准备 = cùng nhau chuẩn bị." },
          vocab: [{ word: "原谅", py: "yuánliàng", vi: "tha thứ" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }, { word: "准备", py: "zhǔnbèi", vi: "chuẩn bị" }],
        },
        {
          label: "Nhắc phải hỏi trước",
          zh: "告诉小美，以后不能不问就拿别人的东西。", py: "Gàosu Xiǎoměi, yǐhòu bù néng bú wèn jiù ná biérén de dōngxi.", vi: "Nói với Tiểu Mỹ rằng sau này không được tự ý lấy đồ của người khác khi chưa hỏi.",
          next: "END_2",
          analysis: { structure: "告诉 + Người + Nội dung; 不…就…", explain: "告诉小美… = nói với Tiểu Mỹ rằng… 不问就拿 = chưa hỏi đã lấy. 别人 = người khác." },
          vocab: [{ word: "告诉", py: "gàosu", vi: "nói cho biết" }, { word: "别人", py: "biérén", vi: "người khác" }, { word: "以后", py: "yǐhòu", vi: "sau này" }],
        },
      ],
    },
    // NODE 04B — CHIẾC ĐỒNG HỒ DƯỚI BÀN
    "04B": {
      id: "04B",
      lines: [
        { kind: "quote", zh: "小雨低头一看，发现红色的小盒子就在桌子下面。", py: "Xiǎoyǔ dītóu yí kàn, fāxiàn hóngsè de xiǎo hézi jiù zài zhuōzi xiàmiàn.", vi: "Tiểu Vũ cúi xuống nhìn và phát hiện chiếc hộp nhỏ màu đỏ nằm ngay dưới bàn." },
        { kind: "quote", zh: "她打开盒子，里面不是手表，而是一张生日卡。", py: "Tā dǎkāi hézi, lǐmiàn bú shì shǒubiǎo, ér shì yì zhāng shēngrì kǎ.", vi: "Cô mở hộp ra, bên trong không phải đồng hồ mà là một tấm thiệp sinh nhật." },
        { kind: "npc", speaker: "小美", zh: "对不起，这是给王先生的生日卡。我想给他一个惊喜，所以先把它藏起来了。", py: "Duìbuqǐ, zhè shì gěi Wáng xiānsheng de shēngrì kǎ. Wǒ xiǎng gěi tā yí ge jīngxǐ, suǒyǐ xiān bǎ tā cáng qǐlái le.", vi: "Xin lỗi, đây là thiệp sinh nhật cho ông Vương. Tớ muốn tạo bất ngờ cho ông ấy nên đã giấu nó đi trước." },
        { kind: "npc", speaker: "小美", zh: "你的手表我放进大箱子里了，我正在找。", py: "Nǐ de shǒubiǎo wǒ fàng jìn dà xiāngzi lǐ le, wǒ zhèngzài zhǎo.", vi: "Đồng hồ của cậu tớ để vào hộp lớn rồi, tớ đang tìm." },
        { kind: "quote", zh: "小雨松了一口气。", py: "Xiǎoyǔ sōng le yì kǒu qì.", vi: "Tiểu Vũ thở phào nhẹ nhõm." },
        { kind: "quote", zh: "她们一起打开大箱子，终于找到了手表。", py: "Tāmen yìqǐ dǎkāi dà xiāngzi, zhōngyú zhǎodào le shǒubiǎo.", vi: "Hai người cùng mở chiếc hộp lớn, cuối cùng cũng tìm thấy chiếc đồng hồ." },
      ],
      choices: [
        {
          label: "Giúp chuẩn bị bất ngờ",
          zh: "帮小美准备生日惊喜。", py: "Bāng Xiǎoměi zhǔnbèi shēngrì jīngxǐ.", vi: "Giúp Tiểu Mỹ chuẩn bị bất ngờ sinh nhật.",
          next: "END_1",
          analysis: { structure: "帮 + Người + Động từ", explain: "帮小美准备 = giúp Tiểu Mỹ chuẩn bị. 帮 + người + động từ = giúp ai làm gì." },
          vocab: [{ word: "帮", py: "bāng", vi: "giúp" }, { word: "惊喜", py: "jīngxǐ", vi: "bất ngờ" }],
        },
        {
          label: "Lấy lại đồng hồ trước",
          zh: "先把手表拿回来，再决定要不要原谅她。", py: "Xiān bǎ shǒubiǎo ná huílái, zài juédìng yào bú yào yuánliàng tā.", vi: "Lấy lại đồng hồ trước rồi mới quyết định có tha thứ cho cô ấy hay không.",
          next: "END_2",
          analysis: { structure: "先…再…; 要不要", explain: "先…再… nối hai việc theo thứ tự. 要不要 là câu hỏi chính phản: có… hay không." },
          vocab: [{ word: "决定", py: "juédìng", vi: "quyết định" }, { word: "拿回来", py: "ná huílái", vi: "lấy lại" }],
        },
      ],
    },
    // NODE 04C — NGƯỜI BIẾT SỰ THẬT
    "04C": {
      id: "04C",
      lines: [
        { kind: "quote", zh: "小雨找到王先生，把看到的东西都告诉了他。", py: "Xiǎoyǔ zhǎodào Wáng xiānsheng, bǎ kàndào de dōngxi dōu gàosu le tā.", vi: "Tiểu Vũ tìm ông Vương và kể cho ông ấy tất cả những gì mình đã thấy." },
        { kind: "npc", speaker: "王先生", zh: "我知道了！小美想给我一个生日惊喜。", py: "Wǒ zhīdào le! Xiǎoměi xiǎng gěi wǒ yí ge shēngrì jīngxǐ.", vi: "Chú hiểu rồi! Tiểu Mỹ muốn tạo bất ngờ sinh nhật cho chú." },
        { kind: "pick", options: [
          { zh: "那我的手表哪里在？", py: "Nà wǒ de shǒubiǎo nǎlǐ zài?", vi: "Vậy đồng hồ của cháu đâu ở?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Từ để hỏi nơi chốn 哪里 đứng sau 在: 在哪里." },
            vocab: [{ word: "哪里", py: "nǎlǐ", vi: "ở đâu" }] },
          { zh: "那我的手表在哪里？", py: "Nà wǒ de shǒubiǎo zài nǎlǐ?", vi: "Vậy đồng hồ của cháu ở đâu?", correct: true,
            analysis: { structure: "Danh từ + 在 + 哪里？", explain: "在哪里 = ở đâu, dùng để hỏi vị trí của vật." },
            vocab: [{ word: "在", py: "zài", vi: "ở, tại" }, { word: "哪里", py: "nǎlǐ", vi: "ở đâu" }] },
          { zh: "那我的手表在哪里吗？", py: "Nà wǒ de shǒubiǎo zài nǎlǐ ma?", vi: "Vậy đồng hồ của cháu ở đâu không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 哪里 thì không thêm 吗." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
        ] },
        { kind: "npc", speaker: "王先生", zh: "也许在里面。我们一起找一下吧！", py: "Yěxǔ zài lǐmiàn. Wǒmen yìqǐ zhǎo yíxià ba!", vi: "Có lẽ ở trong đó. Chúng ta cùng tìm thử nhé!" },
        { kind: "quote", zh: "他们打开箱子，终于找到了手表。", py: "Tāmen dǎkāi xiāngzi, zhōngyú zhǎodào le shǒubiǎo.", vi: "Họ mở hộp và cuối cùng cũng tìm thấy chiếc đồng hồ." },
      ],
      choices: [
        {
          label: "Tặng đồng hồ cho ông Vương",
          zh: "把手表送给王先生。", py: "Bǎ shǒubiǎo sòng gěi Wáng xiānsheng.", vi: "Tặng đồng hồ cho ông Vương.",
          next: "END_1",
          analysis: { structure: "把 + Tân ngữ + 送给 + Người", explain: "把手表送给王先生 = đem đồng hồ tặng cho ông Vương. 送给 = tặng cho." },
          vocab: [{ word: "送给", py: "sòng gěi", vi: "tặng cho" }],
        },
        {
          label: "Hỏi rõ Tiểu Mỹ",
          zh: "先问清楚小美为什么藏礼物。", py: "Xiān wèn qīngchu Xiǎoměi wèishénme cáng lǐwù.", vi: "Hỏi rõ Tiểu Mỹ tại sao lại giấu món quà trước.",
          next: "END_2",
          analysis: { structure: "先 + 问清楚 + …", explain: "清楚 là bổ ngữ kết quả: 问清楚 = hỏi cho rõ. 藏 = giấu." },
          vocab: [{ word: "清楚", py: "qīngchu", vi: "rõ ràng" }, { word: "藏", py: "cáng", vi: "giấu" }],
        },
      ],
    },
    // ENDING 1 — 一个特别的生日
    "END_1": {
      id: "END_1",
      lines: [
        { kind: "quote", zh: "小雨和小美一起把手表和其他礼物放在桌子上。", py: "Xiǎoyǔ hé Xiǎoměi yìqǐ bǎ shǒubiǎo hé qítā lǐwù fàng zài zhuōzi shàng.", vi: "Tiểu Vũ và Tiểu Mỹ cùng đặt chiếc đồng hồ và các món quà khác lên bàn." },
        { kind: "quote", zh: "王先生看到礼物，非常高兴。", py: "Wáng xiānsheng kàndào lǐwù, fēicháng gāoxìng.", vi: "Ông Vương nhìn thấy món quà và vô cùng vui vẻ." },
        { kind: "quote", zh: "小美送给小雨一条粉色的裙子，因为她知道小雨最喜欢粉色。", py: "Xiǎoměi sòng gěi Xiǎoyǔ yì tiáo fěnsè de qúnzi, yīnwèi tā zhīdào Xiǎoyǔ zuì xǐhuan fěnsè.", vi: "Tiểu Mỹ tặng Tiểu Vũ một chiếc váy màu hồng vì cô biết Tiểu Vũ thích màu hồng nhất." },
        { kind: "pick", options: [
          { zh: "今天真开心！", py: "Jīntiān zhēn kāixīn!", vi: "Hôm nay thật vui!", correct: true,
            analysis: { structure: "Thời gian + 真 + Tính từ", explain: "真 = thật là, biểu thị cảm thán. 开心 = vui." },
            vocab: [{ word: "真", py: "zhēn", vi: "thật là" }, { word: "开心", py: "kāixīn", vi: "vui vẻ" }] },
          { zh: "今天开心真！", py: "Jīntiān kāixīn zhēn!", vi: "Hôm nay vui thật là!", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Phó từ 真 đứng trước tính từ: 真开心." },
            vocab: [{ word: "真", py: "zhēn", vi: "thật là" }] },
          { zh: "今天很真开心！", py: "Jīntiān hěn zhēn kāixīn!", vi: "Hôm nay rất thật là vui!", correct: false,
            analysis: { structure: "Dùng thừa 很", explain: "真 và 很 đều là phó từ chỉ mức độ, chỉ dùng một trong hai: 今天真开心." },
            vocab: [{ word: "很", py: "hěn", vi: "rất" }] },
        ] },
        { kind: "narration", text: "Mọi người cùng vui vẻ. Tiểu Vũ hiểu rằng đôi khi một bí mật có thể tạo nên bất ngờ, nhưng hỏi rõ vẫn tốt hơn tự đoán." },
      ],
      ending: { title: "一个特别的生日", titleVi: "Một sinh nhật đặc biệt" },
    },
    // ENDING 2 — 一次不开心的误会
    "END_2": {
      id: "END_2",
      lines: [
        { kind: "quote", zh: "小雨拿回了手表，但是她没有马上原谅小美。", py: "Xiǎoyǔ ná huí le shǒubiǎo, dànshì tā méiyǒu mǎshàng yuánliàng Xiǎoměi.", vi: "Tiểu Vũ lấy lại đồng hồ nhưng không lập tức tha thứ cho Tiểu Mỹ." },
        { kind: "pick", options: [
          { zh: "我知道你想给王先生惊喜一个，但是你应该先告诉我。", py: "Wǒ zhīdào nǐ xiǎng gěi Wáng xiānsheng jīngxǐ yí ge, dànshì nǐ yīnggāi xiān gàosu wǒ.", vi: "Tớ biết cậu muốn cho ông Vương bất ngờ một cái, nhưng cậu nên nói với tớ trước.", correct: false,
            analysis: { structure: "Sai vị trí số lượng từ", explain: "Số từ + lượng từ đứng trước danh từ: 一个惊喜, không đặt sau." },
            vocab: [{ word: "个", py: "ge", vi: "(lượng từ chung)" }] },
          { zh: "我知道你想给王先生一个惊喜，但是你应该告诉先我。", py: "Wǒ zhīdào nǐ xiǎng gěi Wáng xiānsheng yí ge jīngxǐ, dànshì nǐ yīnggāi gàosu xiān wǒ.", vi: "Tớ biết cậu muốn tạo bất ngờ cho ông Vương, nhưng cậu nên nói trước tớ.", correct: false,
            analysis: { structure: "Sai vị trí 先", explain: "Phó từ 先 (trước) đứng trước động từ mà nó bổ nghĩa: 应该先告诉我. Không đặt 先 giữa 告诉 và 我." },
            vocab: [{ word: "先", py: "xiān", vi: "trước" }] },
          { zh: "我知道你想给王先生一个惊喜，但是你应该先告诉我。", py: "Wǒ zhīdào nǐ xiǎng gěi Wáng xiānsheng yí ge jīngxǐ, dànshì nǐ yīnggāi xiān gàosu wǒ.", vi: "Tớ biết cậu muốn tạo bất ngờ cho ông Vương, nhưng cậu nên nói với tớ trước.", correct: true,
            analysis: { structure: "知道 + Mệnh đề; 但是…应该先…", explain: "我知道… = tớ biết rằng… 应该先告诉我 = nên nói với tớ trước (应该 + 先 + động từ)." },
            vocab: [{ word: "应该", py: "yīnggāi", vi: "nên" }, { word: "惊喜", py: "jīngxǐ", vi: "bất ngờ" }] },
        ] },
        { kind: "npc", speaker: "小美", zh: "对不起。下次我会先问你。", py: "Duìbuqǐ. Xià cì wǒ huì xiān wèn nǐ.", vi: "Xin lỗi. Lần sau tớ sẽ hỏi cậu trước." },
        { kind: "narration", text: "Buổi sinh nhật vẫn tiếp tục, nhưng cả hai hiểu rằng tôn trọng đồ đạc của nhau cũng quan trọng như việc tạo bất ngờ." },
      ],
      ending: { title: "一次不开心的误会", titleVi: "Một hiểu lầm không vui" },
    },
  },
};
