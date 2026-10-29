import type { BranchingStory } from "../../types";

// Truyện "Ai Đã Cầm Nhầm Quà?" (HSK 2), truyện rẽ nhánh với 2 kết thúc. Người chơi vào vai 小安.
// Bản gốc của người viết: src/imports/stories/cam-nham-qua.md (tên gốc: 谁拿错了礼物？)
// Mỗi câu nói của 小安 là một bước chọn (pick): câu gốc là đáp án đúng, hai đáp án sai và phần phân tích chỉ có ở file này.
// Lựa chọn hướng đi trong bản gốc là hành động, nên các câu 小安 nói được lấy từ những câu thoại có sẵn của nhân vật này.
// Chỉnh so với bản gốc để mạch truyện khớp với mọi đường đi (đồng hồ nằm trong chiếc túi ĐỎ ở bên phải bàn; túi HỒNG chỉ có thiệp và áo):
// - 01: 小丽 không nhớ để đồng hồ ở túi nào ("có thể cũng ở trong đó") thay vì khẳng định đồng hồ ở túi hồng
// - 01: 红色的盒子 -> 红色的袋子 (các cảnh sau đều nói "túi đỏ")
// - 02A: A1 hỏi tiếp cô Trần (bản gốc "sang trái tìm người đàn ông" nhưng 3A là cuộc trò chuyện với cô Trần)
// - 02C, 03C: C2 đi xem có ai cầm túi hồng không (bản gốc nói "người đàn ông đang cầm túi" khi chưa gặp ai); 03C mở đầu bằng việc nhờ mở túi
// - 02B: người đàn ông nói "hình như là của tôi, chưa mở xem" (bản gốc khẳng định là của mình rồi ở 3C lại nói không phải); 一个红色的小花 -> 一朵红色的小花
// - 03A: viết lại; cô Trần nói người phụ nữ bỏ đồng hồ vào túi đỏ (bản gốc: người mua đồng hồ đỏ rồi lại nói đen, tự mâu thuẫn); lựa chọn B hỏi ai khác mua túi hồng để dẫn tới 4B
// - 03B: bỏ chi tiết "người đàn ông lúc nãy" (3B đi tới được từ 2A khi chưa gặp ông ấy)
// - 04A: 小丽 nhớ đã bỏ đồng hồ vào túi đỏ ở bên phải bàn, còn mẩu giấy ghi sai trái/phải
// - 04B: ông Lý trả túi hồng (không có đồng hồ); 我丈夫 -> 我妻子 (ông Lý là nam); bản gốc ghi đồng hồ vẫn ở trong túi hồng, mâu thuẫn với 3C
// - END_2: vẫn tìm được đồng hồ ở túi đỏ nhưng muộn (bản gốc: túi đỏ không có đồng hồ, mâu thuẫn với END_1 và 4A)
export const CAM_NHAM_QUA: BranchingStory = {
  start: "01",
  characters: {
    "小丽": "👩",
    "陈阿姨": "👵",
    "李先生": "👨",
    "男人": "👨",
  },
  vocab: [
    { word: "手表", py: "shǒubiǎo", vi: "đồng hồ đeo tay",
      ex: { zh: "小丽想送丈夫一块手表。", py: "Xiǎo Lì xiǎng sòng zhàngfu yí kuài shǒubiǎo.", vi: "Tiểu Lệ muốn tặng chồng một chiếc đồng hồ." } },
    { word: "报纸", py: "bàozhǐ", vi: "báo",
      ex: { zh: "桌子上只剩下一张报纸。", py: "Zhuōzi shàng zhǐ shèngxià yì zhāng bàozhǐ.", vi: "Trên bàn chỉ còn lại một tờ báo." } },
    { word: "牛奶", py: "niúnǎi", vi: "sữa bò",
      ex: { zh: "小安去买牛奶。", py: "Xiǎo Ān qù mǎi niúnǎi.", vi: "Tiểu An đi mua sữa bò." } },
    { word: "丈夫", py: "zhàngfu", vi: "chồng",
      ex: { zh: "小丽想送丈夫一块手表。", py: "Xiǎo Lì xiǎng sòng zhàngfu yí kuài shǒubiǎo.", vi: "Tiểu Lệ muốn tặng chồng một chiếc đồng hồ." } },
    { word: "旁边", py: "pángbiān", vi: "bên cạnh",
      ex: { zh: "她们买好东西以后，把两个袋子放在商店门口的桌子旁边。", py: "Tāmen mǎi hǎo dōngxi yǐhòu, bǎ liǎng ge dàizi fàng zài shāngdiàn ménkǒu de zhuōzi pángbiān.", vi: "Sau khi mua đồ xong, họ đặt hai chiếc túi bên cạnh chiếc bàn ở cửa cửa hàng." } },
    { word: "粉色", py: "fěnsè", vi: "màu hồng",
      ex: { zh: "小安觉得红色的袋子很好看，小丽却喜欢粉色的袋子。", py: "Xiǎo Ān juéde hóngsè de dàizi hěn hǎokàn, Xiǎo Lì què xǐhuan fěnsè de dàizi.", vi: "Tiểu An thấy chiếc túi màu đỏ rất đẹp, còn Tiểu Lệ lại thích chiếc túi màu hồng." } },
    { word: "颜色", py: "yánsè", vi: "màu sắc",
      ex: { zh: "她看见纸条的另一面还有几个字：“看颜色，不如看里面。”", py: "Tā kànjiàn zhǐtiáo de lìng yí miàn hái yǒu jǐ ge zì: “Kàn yánsè, bùrú kàn lǐmiàn.”", vi: "Cô nhìn thấy mặt sau của mẩu giấy còn có mấy chữ: “Đừng chỉ nhìn màu sắc, hãy kiểm tra bên trong.”" } },
    { word: "左边", py: "zuǒbiān", vi: "bên trái",
      ex: { zh: "“红色的东西在左边，粉色的东西在右边。”", py: "“Hóngsè de dōngxi zài zuǒbiān, fěnsè de dōngxi zài yòubiān.”", vi: "“Đồ vật màu đỏ ở bên trái, đồ vật màu hồng ở bên phải.”" } },
    { word: "红色", py: "hóngsè", vi: "màu đỏ",
      ex: { zh: "小安觉得红色的袋子很好看，小丽却喜欢粉色的袋子。", py: "Xiǎo Ān juéde hóngsè de dàizi hěn hǎokàn, Xiǎo Lì què xǐhuan fěnsè de dàizi.", vi: "Tiểu An thấy chiếc túi màu đỏ rất đẹp, còn Tiểu Lệ lại thích chiếc túi màu hồng." } },
    { word: "袋子", py: "dàizi", vi: "cái túi",
      ex: { zh: "小安觉得红色的袋子很好看，小丽却喜欢粉色的袋子。", py: "Xiǎo Ān juéde hóngsè de dàizi hěn hǎokàn, Xiǎo Lì què xǐhuan fěnsè de dàizi.", vi: "Tiểu An thấy chiếc túi màu đỏ rất đẹp, còn Tiểu Lệ lại thích chiếc túi màu hồng." } },
    { word: "老板", py: "lǎobǎn", vi: "chủ cửa hàng",
      ex: { zh: "去问商店的老板。", py: "Qù wèn shāngdiàn de lǎobǎn.", vi: "Đi hỏi chủ cửa hàng." } },
    { word: "线索", py: "xiànsuǒ", vi: "manh mối",
      ex: { zh: "先向男人道歉，再回商店找线索。", py: "Xiān xiàng nánrén dàoqiàn, zài huí shāngdiàn zhǎo xiànsuǒ.", vi: "Xin lỗi người đàn ông trước, sau đó quay lại cửa hàng tìm manh mối." } },
    { word: "原谅", py: "yuánliàng", vi: "tha thứ",
      ex: { zh: "原谅李先生，一起回商店。", py: "Yuánliàng Lǐ xiānsheng, yìqǐ huí shāngdiàn.", vi: "Tha thứ cho ông Lý và cùng quay lại cửa hàng." } },
    { word: "一下", py: "yíxià", vi: "một chút, thử",
      ex: { zh: "请男人打开袋子看一下。", py: "Qǐng nánrén dǎkāi dàizi kàn yíxià.", vi: "Nhờ người đàn ông mở túi ra kiểm tra." } },
  ],
  nodes: {
    // NODE 01 — CHIẾC TÚI BIẾN MẤT
    "01": {
      id: "01",
      lines: [
        { kind: "quote", zh: "星期天早上，小安和小丽去商店买生日礼物。", py: "Xīngqītiān zǎoshang, Xiǎo Ān hé Xiǎo Lì qù shāngdiàn mǎi shēngrì lǐwù.", vi: "Sáng Chủ nhật, Tiểu An và Tiểu Lệ đi cửa hàng mua quà sinh nhật." },
        { kind: "quote", zh: "小丽想送丈夫一块手表。这块手表很漂亮，但是要三千块钱。", py: "Xiǎo Lì xiǎng sòng zhàngfu yí kuài shǒubiǎo. Zhè kuài shǒubiǎo hěn piàoliang, dànshì yào sān qiān kuài qián.", vi: "Tiểu Lệ muốn tặng chồng một chiếc đồng hồ. Chiếc đồng hồ này rất đẹp nhưng giá tới ba nghìn tệ." },
        { kind: "quote", zh: "小安觉得红色的袋子很好看，小丽却喜欢粉色的袋子。", py: "Xiǎo Ān juéde hóngsè de dàizi hěn hǎokàn, Xiǎo Lì què xǐhuan fěnsè de dàizi.", vi: "Tiểu An thấy chiếc túi màu đỏ rất đẹp, còn Tiểu Lệ lại thích chiếc túi màu hồng." },
        { kind: "quote", zh: "她们买好东西以后，把两个袋子放在商店门口的桌子旁边。", py: "Tāmen mǎi hǎo dōngxi yǐhòu, bǎ liǎng ge dàizi fàng zài shāngdiàn ménkǒu de zhuōzi pángbiān.", vi: "Sau khi mua đồ xong, họ đặt hai chiếc túi bên cạnh chiếc bàn ở cửa cửa hàng." },
        { kind: "quote", zh: "小安去买牛奶。回来以后，她发现粉色的袋子不见了！", py: "Xiǎo Ān qù mǎi niúnǎi. Huílái yǐhòu, tā fāxiàn fěnsè de dàizi bú jiàn le!", vi: "Tiểu An đi mua sữa bò. Khi quay lại, cô phát hiện chiếc túi màu hồng đã biến mất!" },
        { kind: "quote", zh: "桌子上只剩下一张报纸。报纸下面有一张纸条：", py: "Zhuōzi shàng zhǐ shèngxià yì zhāng bàozhǐ. Bàozhǐ xiàmiàn yǒu yì zhāng zhǐtiáo:", vi: "Trên bàn chỉ còn lại một tờ báo. Bên dưới tờ báo có một mẩu giấy:" },
        { kind: "quote", zh: "“红色的东西在左边，粉色的东西在右边。”", py: "“Hóngsè de dōngxi zài zuǒbiān, fěnsè de dōngxi zài yòubiān.”", vi: "“Đồ vật màu đỏ ở bên trái, đồ vật màu hồng ở bên phải.”" },
        { kind: "npc", speaker: "小丽", zh: "怎么办？我的手表可能也在里面！", py: "Zěnme bàn? Wǒ de shǒubiǎo kěnéng yě zài lǐmiàn!", vi: "Phải làm sao đây? Đồng hồ của tớ có thể cũng ở trong đó!" },
      ],
      choices: [
        {
          label: "Hỏi chủ cửa hàng",
          zh: "去问商店的老板。", py: "Qù wèn shāngdiàn de lǎobǎn.", vi: "Đi hỏi chủ cửa hàng.",
          next: "02A",
          analysis: { structure: "去 + 问 + Người (的)", explain: "去问商店的老板 = đi hỏi chủ cửa hàng. 的 nối 商店 với 老板 (cửa hàng + của + chủ)." },
          vocab: [{ word: "商店", py: "shāngdiàn", vi: "cửa hàng" }, { word: "老板", py: "lǎobǎn", vi: "chủ cửa hàng" }],
        },
        {
          label: "Tìm người đàn ông gần đó",
          zh: "去找旁边的男人。", py: "Qù zhǎo pángbiān de nánrén.", vi: "Đi tìm người đàn ông ở gần đó.",
          next: "02B",
          analysis: { structure: "去找 + 旁边的 + Người", explain: "旁边的男人 = người đàn ông ở bên cạnh. 旁边 (bên cạnh) làm định ngữ nhờ 的." },
          vocab: [{ word: "旁边", py: "pángbiān", vi: "bên cạnh" }, { word: "男人", py: "nánrén", vi: "đàn ông" }],
        },
        {
          label: "Xem tờ báo và mẩu giấy",
          zh: "先看看报纸和纸条。", py: "Xiān kànkan bàozhǐ hé zhǐtiáo.", vi: "Kiểm tra tờ báo và mẩu giấy trước.",
          next: "02C",
          analysis: { structure: "先 + 看看 + A 和 B", explain: "先看看 = xem thử trước. 和 nối hai danh từ ngang hàng: 报纸和纸条." },
          vocab: [{ word: "报纸", py: "bàozhǐ", vi: "báo" }, { word: "纸条", py: "zhǐtiáo", vi: "mẩu giấy" }],
        },
      ],
    },
    // NODE 02A — CÔ CHỦ CỬA HÀNG
    "02A": {
      id: "02A",
      lines: [
        { kind: "pick", options: [
          { zh: "您看见粉色的一个袋子了吗？", py: "Nín kànjiàn fěnsè de yí ge dàizi le ma?", vi: "Cô nhìn thấy màu hồng một cái túi không?", correct: false,
            analysis: { structure: "Sai trật tự định ngữ", explain: "Số từ + lượng từ đứng trước định ngữ khác: 一个粉色的袋子, không đặt 粉色的 lên trước 一个." },
            vocab: [{ word: "个", py: "ge", vi: "(lượng từ chung)" }] },
          { zh: "您看见一个粉色的袋子了吗？", py: "Nín kànjiàn yí ge fěnsè de dàizi le ma?", vi: "Cô có nhìn thấy một chiếc túi màu hồng không ạ?", correct: true,
            analysis: { structure: "Số từ + lượng từ + định ngữ + danh từ", explain: "一个粉色的袋子: 一 + lượng từ 个 + 粉色的 + 袋子. 您 là cách nói kính trọng của 你." },
            vocab: [{ word: "您", py: "nín", vi: "ngài, cô/chú (kính trọng)" }, { word: "袋子", py: "dàizi", vi: "cái túi" }] },
          { zh: "您看见一个粉色的袋子吗了？", py: "Nín kànjiàn yí ge fěnsè de dàizi ma le?", vi: "Cô nhìn thấy một cái túi màu hồng không rồi?", correct: false,
            analysis: { structure: "Sai vị trí 了 và 吗", explain: "Hai trợ từ cuối câu xếp theo thứ tự 了 rồi 吗: 了吗." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
        ] },
        { kind: "npc", speaker: "陈阿姨", zh: "刚才有一个男人拿走了一个袋子。他穿着红色的衣服。", py: "Gāngcái yǒu yí ge nánrén ná zǒu le yí ge dàizi. Tā chuānzhe hóngsè de yīfu.", vi: "Vừa rồi có một người đàn ông cầm đi một chiếc túi. Anh ta mặc quần áo màu đỏ." },
        { kind: "pick", options: [
          { zh: "他去哪儿了？", py: "Tā qù nǎr le?", vi: "Anh ta đi đâu rồi ạ?", correct: true,
            analysis: { structure: "Chủ ngữ + 去 + 哪儿 + 了？", explain: "去哪儿了 = đi đâu rồi; 了 ở cuối câu chỉ sự việc đã xảy ra." },
            vocab: [{ word: "去", py: "qù", vi: "đi" }, { word: "哪儿", py: "nǎr", vi: "ở đâu" }] },
          { zh: "他去了哪儿吗？", py: "Tā qù le nǎr ma?", vi: "Anh ta đã đi đâu không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 哪儿 thì không thêm 吗 ở cuối câu." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "他哪儿了去？", py: "Tā nǎr le qù?", vi: "Anh ta đâu rồi đi?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Từ để hỏi nơi chốn 哪儿 đứng sau động từ 去: 去哪儿了." },
            vocab: [{ word: "哪儿", py: "nǎr", vi: "ở đâu" }] },
        ] },
        { kind: "npc", speaker: "陈阿姨", zh: "他往那边走了。", py: "Tā wǎng nàbiān zǒu le.", vi: "Anh ta đi về phía đó rồi." },
      ],
      choices: [
        {
          label: "Hỏi tiếp cô Trần",
          zh: "接着问陈阿姨，今天谁买了手表。", py: "Jiēzhe wèn Chén āyí, jīntiān shéi mǎi le shǒubiǎo.", vi: "Hỏi tiếp cô Trần hôm nay ai đã mua đồng hồ.",
          next: "03A",
          analysis: { structure: "接着 + Động từ; 谁 + Động từ", explain: "接着 = tiếp theo. 谁买了手表 = ai đã mua đồng hồ (谁 làm chủ ngữ trong mệnh đề)." },
          vocab: [{ word: "接着", py: "jiēzhe", vi: "tiếp theo" }, { word: "谁", py: "shéi", vi: "ai" }],
        },
        {
          label: "Hỏi người đó trông thế nào",
          zh: "先问陈阿姨，那个男人长什么样。", py: "Xiān wèn Chén āyí, nà ge nánrén zhǎng shénme yàng.", vi: "Hỏi cô Trần xem người đàn ông trông như thế nào.",
          next: "03B",
          analysis: { structure: "先 + 问 + Người + 长什么样", explain: "长什么样 = trông như thế nào (hỏi về diện mạo)." },
          vocab: [{ word: "长", py: "zhǎng", vi: "trông, có dáng vẻ" }, { word: "什么样", py: "shénme yàng", vi: "như thế nào" }],
        },
      ],
    },
    // NODE 02B — NGƯỜI ĐÀN ÔNG ÁO ĐỎ
    "02B": {
      id: "02B",
      lines: [
        { kind: "quote", zh: "小安在商店旁边看见一个穿红色衣服的男人。", py: "Xiǎo Ān zài shāngdiàn pángbiān kànjiàn yí ge chuān hóngsè yīfu de nánrén.", vi: "Tiểu An nhìn thấy một người đàn ông mặc áo đỏ bên cạnh cửa hàng." },
        { kind: "quote", zh: "他手里拿着一个粉色的袋子。", py: "Tā shǒu lǐ názhe yí ge fěnsè de dàizi.", vi: "Anh ta đang cầm một chiếc túi màu hồng." },
        { kind: "pick", options: [
          { zh: "先生，不好意思！这个袋子是吗我们的？", py: "Xiānsheng, bù hǎoyìsi! Zhège dàizi shì ma wǒmen de?", vi: "Xin lỗi anh! Chiếc túi này là không của chúng tôi?", correct: false,
            analysis: { structure: "Sai vị trí 吗", explain: "吗 luôn đứng cuối câu: 是我们的吗？" },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "先生，不好意思！这个袋子我们是的吗？", py: "Xiānsheng, bù hǎoyìsi! Zhège dàizi wǒmen shì de ma?", vi: "Xin lỗi anh! Chiếc túi này chúng tôi là của không ạ?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Động từ 是 đứng giữa chủ ngữ và phần bổ sung: 袋子是我们的, không đặt 我们 trước 是." },
            vocab: [{ word: "是", py: "shì", vi: "là" }] },
          { zh: "先生，不好意思！这个袋子是我们的吗？", py: "Xiānsheng, bù hǎoyìsi! Zhège dàizi shì wǒmen de ma?", vi: "Xin lỗi anh! Chiếc túi này có phải của chúng tôi không ạ?", correct: true,
            analysis: { structure: "Danh từ + 是 + 我们的 + 吗？", explain: "我们的 = của chúng tôi (đại từ + 的, thay cho danh từ đã nói). 不好意思 dùng để xin lỗi lịch sự." },
            vocab: [{ word: "不好意思", py: "bù hǎoyìsi", vi: "xin lỗi, ngại quá" }, { word: "袋子", py: "dàizi", vi: "cái túi" }] },
        ] },
        { kind: "npc", speaker: "男人", zh: "好像是我的。我刚才买了一个粉色的袋子，可是还没有打开看过。", py: "Hǎoxiàng shì wǒ de. Wǒ gāngcái mǎi le yí ge fěnsè de dàizi, kěshì hái méiyǒu dǎkāi kànguo.", vi: "Hình như là của tôi. Tôi vừa mua một chiếc túi màu hồng nhưng chưa mở ra xem." },
        { kind: "quote", zh: "小安发现，袋子上有一朵红色的小花。", py: "Xiǎo Ān fāxiàn, dàizi shàng yǒu yì duǒ hóngsè de xiǎo huā.", vi: "Tiểu An phát hiện trên túi có một bông hoa nhỏ màu đỏ." },
        { kind: "quote", zh: "但是小丽的袋子上也有一朵花！", py: "Dànshì Xiǎo Lì de dàizi shàng yě yǒu yì duǒ huā!", vi: "Nhưng trên túi của Tiểu Lệ cũng có một bông hoa!" },
      ],
      choices: [
        {
          label: "Nhờ mở túi ra xem",
          zh: "请男人打开袋子看一下。", py: "Qǐng nánrén dǎkāi dàizi kàn yíxià.", vi: "Nhờ người đàn ông mở túi ra kiểm tra.",
          next: "03C",
          analysis: { structure: "请 + Người + Động từ; Động từ + 一下", explain: "请 + người + động từ = nhờ ai làm gì. 看一下 = xem một chút (一下 làm nhẹ ngữ khí)." },
          vocab: [{ word: "请", py: "qǐng", vi: "nhờ, mời" }, { word: "一下", py: "yíxià", vi: "một chút" }],
        },
        {
          label: "Xin lỗi rồi quay lại cửa hàng",
          zh: "先向男人道歉，再回商店找线索。", py: "Xiān xiàng nánrén dàoqiàn, zài huí shāngdiàn zhǎo xiànsuǒ.", vi: "Xin lỗi người đàn ông trước, sau đó quay lại cửa hàng tìm manh mối.",
          next: "03B",
          analysis: { structure: "先…再…; 向 + Người + 道歉", explain: "先向男人道歉，再回商店 = xin lỗi trước rồi mới quay lại cửa hàng. 向 + người + 道歉 = xin lỗi ai." },
          vocab: [{ word: "向", py: "xiàng", vi: "hướng tới, với" }, { word: "道歉", py: "dàoqiàn", vi: "xin lỗi" }, { word: "线索", py: "xiànsuǒ", vi: "manh mối" }],
        },
      ],
    },
    // NODE 02C — MANH MỐI TRÊN TỜ BÁO
    "02C": {
      id: "02C",
      lines: [
        { kind: "quote", zh: "小安拿起报纸，发现报纸上有一张商店的照片。", py: "Xiǎo Ān ná qǐ bàozhǐ, fāxiàn bàozhǐ shàng yǒu yì zhāng shāngdiàn de zhàopiàn.", vi: "Tiểu An cầm tờ báo lên và phát hiện trên đó có một bức ảnh cửa hàng." },
        { kind: "quote", zh: "照片旁边写着：“今天买东西，可以得到一个粉色的袋子。”", py: "Zhàopiàn pángbiān xiězhe: “Jīntiān mǎi dōngxi, kěyǐ dédào yí ge fěnsè de dàizi.”", vi: "Bên cạnh bức ảnh có dòng chữ: “Hôm nay mua đồ sẽ được tặng một chiếc túi màu hồng.”" },
        { kind: "quote", zh: "小安想：“如果每个人都有一个粉色的袋子，我们怎么知道哪个是小丽的？”", py: "Xiǎo Ān xiǎng: “Rúguǒ měi ge rén dōu yǒu yí ge fěnsè de dàizi, wǒmen zěnme zhīdào nǎ ge shì Xiǎo Lì de?”", vi: "Tiểu An nghĩ: “Nếu ai cũng có một chiếc túi màu hồng, làm sao chúng ta biết chiếc nào là của Tiểu Lệ?”" },
        { kind: "quote", zh: "她看见纸条的另一面还有几个字：“看颜色，不如看里面。”", py: "Tā kànjiàn zhǐtiáo de lìng yí miàn hái yǒu jǐ ge zì: “Kàn yánsè, bùrú kàn lǐmiàn.”", vi: "Cô nhìn thấy mặt sau của mẩu giấy còn có mấy chữ: “Đừng chỉ nhìn màu sắc, hãy kiểm tra bên trong.”" },
      ],
      choices: [
        {
          label: "Quay lại hỏi cô Trần",
          zh: "回去问陈阿姨，今天谁买了手表。", py: "Huíqù wèn Chén āyí, jīntiān shéi mǎi le shǒubiǎo.", vi: "Quay lại hỏi cô Trần hôm nay ai đã mua đồng hồ.",
          next: "03A",
          analysis: { structure: "回去 + 问 + Người + Mệnh đề", explain: "回去问陈阿姨 = quay lại hỏi cô Trần. 今天谁买了手表 là mệnh đề nằm sau 问." },
          vocab: [{ word: "回去", py: "huíqù", vi: "quay lại" }, { word: "手表", py: "shǒubiǎo", vi: "đồng hồ đeo tay" }],
        },
        {
          label: "Tìm người cầm túi hồng",
          zh: "去商店旁边找找，看有没有人拿着粉色的袋子。", py: "Qù shāngdiàn pángbiān zhǎozhao, kàn yǒu méiyǒu rén názhe fěnsè de dàizi.", vi: "Ra bên cạnh cửa hàng tìm thử, xem có ai đang cầm túi màu hồng không.",
          next: "03C",
          analysis: { structure: "看有没有 + Người + Động từ着 + Tân ngữ", explain: "有没有 là câu hỏi chính phản: có hay không. 拿着粉色的袋子 = đang cầm chiếc túi màu hồng (着 chỉ trạng thái đang cầm)." },
          vocab: [{ word: "有没有", py: "yǒu méiyǒu", vi: "có hay không" }, { word: "拿着", py: "názhe", vi: "đang cầm" }],
        },
      ],
    },
    // NODE 03A — HAI CHIẾC ĐỒNG HỒ
    "03A": {
      id: "03A",
      lines: [
        { kind: "npc", speaker: "陈阿姨", zh: "今天有两个人买了手表。一个是年轻女人，另一个是男人，他买了一块黑色的手表。", py: "Jīntiān yǒu liǎng ge rén mǎi le shǒubiǎo. Yí ge shì niánqīng nǚrén, lìng yí ge shì nánrén, tā mǎi le yí kuài hēisè de shǒubiǎo.", vi: "Hôm nay có hai người mua đồng hồ. Một người là phụ nữ trẻ, người kia là đàn ông, anh ta mua một chiếc đồng hồ màu đen." },
        { kind: "pick", options: [
          { zh: "那个年轻女人谁是？", py: "Nà ge niánqīng nǚrén shéi shì?", vi: "Người phụ nữ trẻ đó ai là?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Từ để hỏi 谁 đứng sau động từ 是: 是谁？" },
            vocab: [{ word: "谁", py: "shéi", vi: "ai" }] },
          { zh: "那个年轻女人是谁吗？", py: "Nà ge niánqīng nǚrén shì shéi ma?", vi: "Người phụ nữ trẻ đó là ai không?", correct: false,
            analysis: { structure: "Thừa 吗", explain: "Câu đã có từ để hỏi 谁 thì không thêm 吗." },
            vocab: [{ word: "吗", py: "ma", vi: "trợ từ nghi vấn" }] },
          { zh: "那个年轻女人是谁？", py: "Nà ge niánqīng nǚrén shì shéi?", vi: "Người phụ nữ trẻ đó là ai ạ?", correct: true,
            analysis: { structure: "Danh từ + 是 + 谁？", explain: "年轻 = trẻ, 女人 = phụ nữ. 谁 đứng sau 是 để hỏi người." },
            vocab: [{ word: "年轻", py: "niánqīng", vi: "trẻ" }, { word: "女人", py: "nǚrén", vi: "phụ nữ" }] },
        ] },
        { kind: "npc", speaker: "陈阿姨", zh: "我记得她的丈夫今天过生日。", py: "Wǒ jìde tā de zhàngfu jīntiān guò shēngrì.", vi: "Cô nhớ chồng cô ấy hôm nay sinh nhật." },
        { kind: "pick", options: [
          { zh: "那一定是小丽！", py: "Nà yídìng shì Xiǎo Lì!", vi: "Vậy chắc chắn là Tiểu Lệ!", correct: true,
            analysis: { structure: "一定 + 是 + Danh từ", explain: "一定 = chắc chắn, đứng trước động từ 是." },
            vocab: [{ word: "一定", py: "yídìng", vi: "chắc chắn" }] },
          { zh: "那是一定小丽！", py: "Nà shì yídìng Xiǎo Lì!", vi: "Đó là chắc chắn Tiểu Lệ!", correct: false,
            analysis: { structure: "Sai vị trí 一定", explain: "Phó từ 一定 phải đứng trước động từ: 一定是." },
            vocab: [{ word: "一定", py: "yídìng", vi: "chắc chắn" }] },
          { zh: "那一定是的小丽！", py: "Nà yídìng shì de Xiǎo Lì!", vi: "Vậy chắc chắn là của Tiểu Lệ!", correct: false,
            analysis: { structure: "Thừa 的", explain: "Sau 是 nói thẳng tên người, không thêm 的." },
            vocab: [{ word: "的", py: "de", vi: "(trợ từ)" }] },
        ] },
        { kind: "npc", speaker: "陈阿姨", zh: "等一下！她买完手表以后，把它放进了一个红色的袋子里。", py: "Děng yíxià! Tā mǎi wán shǒubiǎo yǐhòu, bǎ tā fàng jìn le yí ge hóngsè de dàizi lǐ.", vi: "Khoan đã! Sau khi mua đồng hồ xong, cô ấy bỏ nó vào một chiếc túi màu đỏ." },
      ],
      choices: [
        {
          label: "Cho là cô Trần nhớ nhầm",
          zh: "觉得陈阿姨记错了，去找小丽。", py: "Juéde Chén āyí jì cuò le, qù zhǎo Xiǎo Lì.", vi: "Cho rằng cô Trần nhớ nhầm nên đi tìm Tiểu Lệ.",
          next: "04A",
          analysis: { structure: "觉得 + Mệnh đề; Động từ + 错", explain: "记错 = nhớ nhầm (错 là bổ ngữ kết quả chỉ sự sai). 觉得 = cảm thấy, cho rằng." },
          vocab: [{ word: "记错", py: "jì cuò", vi: "nhớ nhầm" }, { word: "觉得", py: "juéde", vi: "cảm thấy" }],
        },
        {
          label: "Hỏi ai khác mua túi hồng",
          zh: "再问问陈阿姨，今天还有谁买了粉色的袋子。", py: "Zài wènwen Chén āyí, jīntiān hái yǒu shéi mǎi le fěnsè de dàizi.", vi: "Hỏi thêm cô Trần xem hôm nay còn ai mua túi màu hồng.",
          next: "04B",
          analysis: { structure: "再问问; 还有谁", explain: "再问问 = hỏi thêm (lặp động từ làm nhẹ ngữ khí). 还有谁 = còn ai nữa." },
          vocab: [{ word: "还", py: "hái", vi: "còn, nữa" }, { word: "粉色", py: "fěnsè", vi: "màu hồng" }],
        },
      ],
    },
    // NODE 03B — MỘT CHI TIẾT BỊ BỎ SÓT
    "03B": {
      id: "03B",
      lines: [
        { kind: "quote", zh: "小安又拿起桌子上的那张纸条。", py: "Xiǎo Ān yòu ná qǐ zhuōzi shàng de nà zhāng zhǐtiáo.", vi: "Tiểu An lại cầm mẩu giấy trên bàn lên." },
        { kind: "quote", zh: "她突然发现，纸条上有一个很小的字：“李”。", py: "Tā tūrán fāxiàn, zhǐtiáo shàng yǒu yí ge hěn xiǎo de zì: “Lǐ”.", vi: "Cô đột nhiên phát hiện trên mẩu giấy có một chữ rất nhỏ: “Lý”." },
        { kind: "pick", options: [
          { zh: "您认识一个姓的李先生吗？", py: "Nín rènshi yí ge xìng de Lǐ xiānsheng ma?", vi: "Cô quen một họ của ông Lý không?", correct: false,
            analysis: { structure: "Sai vị trí 的", explain: "姓 phải đi liền với họ: 姓李的, rồi mới đến 先生." },
            vocab: [{ word: "的", py: "de", vi: "(trợ từ)" }] },
          { zh: "您认识一个姓李的先生吗？", py: "Nín rènshi yí ge xìng Lǐ de xiānsheng ma?", vi: "Cô có quen một ông họ Lý không ạ?", correct: true,
            analysis: { structure: "认识 + Số từ + lượng từ + 姓 X 的 + Danh từ + 吗？", explain: "姓李的先生 = ông họ Lý (姓 + họ + 的 làm định ngữ cho 先生)." },
            vocab: [{ word: "认识", py: "rènshi", vi: "quen biết" }, { word: "姓", py: "xìng", vi: "họ" }] },
          { zh: "您一个姓李的先生认识吗？", py: "Nín yí ge xìng Lǐ de xiānsheng rènshi ma?", vi: "Cô một ông họ Lý quen không?", correct: false,
            analysis: { structure: "Sai trật tự từ", explain: "Tân ngữ 一个姓李的先生 phải đứng sau động từ 认识." },
            vocab: [{ word: "认识", py: "rènshi", vi: "quen biết" }] },
        ] },
        { kind: "npc", speaker: "陈阿姨", zh: "认识！他每天早上都来这里买牛奶。", py: "Rènshi! Tā měitiān zǎoshang dōu lái zhèlǐ mǎi niúnǎi.", vi: "Có! Sáng nào ông ấy cũng đến đây mua sữa bò." },
        { kind: "quote", zh: "小安想：“拿走袋子的男人，会不会就是李先生？”", py: "Xiǎo Ān xiǎng: “Ná zǒu dàizi de nánrén, huì bu huì jiù shì Lǐ xiānsheng?”", vi: "Tiểu An nghĩ: “Người đàn ông cầm túi đi, có khi nào chính là ông Lý không?”" },
      ],
      choices: [
        {
          label: "Đi tìm ông Lý",
          zh: "去找李先生。", py: "Qù zhǎo Lǐ xiānsheng.", vi: "Đi tìm ông Lý.",
          next: "04B",
          analysis: { structure: "去找 + Người", explain: "去找李先生 = đi tìm ông Lý. 先生 đặt sau họ để gọi người đàn ông một cách lịch sự." },
          vocab: [{ word: "李先生", py: "Lǐ xiānsheng", vi: "ông Lý" }],
        },
        {
          label: "Hỏi Tiểu Lệ trong túi có gì",
          zh: "先问小丽，袋子里有什么。", py: "Xiān wèn Xiǎo Lì, dàizi lǐ yǒu shénme.", vi: "Hỏi Tiểu Lệ xem bên trong túi có gì.",
          next: "04A",
          analysis: { structure: "先 + 问 + Người + Mệnh đề", explain: "袋子里有什么 = trong túi có gì. 里 đứng sau danh từ để chỉ \"bên trong\"." },
          vocab: [{ word: "里", py: "lǐ", vi: "bên trong" }, { word: "什么", py: "shénme", vi: "cái gì" }],
        },
      ],
    },
    // NODE 03C — MỞ NHẦM TÚI?
    "03C": {
      id: "03C",
      lines: [
        { kind: "quote", zh: "小安请拿着粉色袋子的男人打开袋子。男人同意了。", py: "Xiǎo Ān qǐng názhe fěnsè dàizi de nánrén dǎkāi dàizi. Nánrén tóngyì le.", vi: "Tiểu An nhờ người đàn ông đang cầm túi màu hồng mở túi ra. Người đàn ông đồng ý." },
        { kind: "quote", zh: "里面没有手表，只有一件粉色的衣服和一张生日卡。", py: "Lǐmiàn méiyǒu shǒubiǎo, zhǐ yǒu yí jiàn fěnsè de yīfu hé yì zhāng shēngrì kǎ.", vi: "Bên trong không có đồng hồ, chỉ có một chiếc áo màu hồng và một tấm thiệp sinh nhật." },
        { kind: "npc", speaker: "男人", zh: "这不是我的东西！我买的是一袋牛奶和一张报纸！", py: "Zhè bú shì wǒ de dōngxi! Wǒ mǎi de shì yí dài niúnǎi hé yì zhāng bàozhǐ!", vi: "Đây không phải đồ của tôi! Tôi mua một túi sữa bò và một tờ báo!" },
        { kind: "quote", zh: "小安发现，袋子可能真的拿错了。", py: "Xiǎo Ān fāxiàn, dàizi kěnéng zhēn de ná cuò le.", vi: "Tiểu An nhận ra có lẽ chiếc túi thật sự đã bị cầm nhầm." },
        { kind: "quote", zh: "生日卡上写着：“亲爱的丈夫，生日快乐！”", py: "Shēngrì kǎ shàng xiězhe: “Qīn'ài de zhàngfu, shēngrì kuàilè!”", vi: "Trên thiệp sinh nhật viết: “Chồng yêu quý, chúc mừng sinh nhật!”" },
      ],
      choices: [
        {
          label: "Đưa thiệp cho Tiểu Lệ xem",
          zh: "把生日卡拿给小丽看。", py: "Bǎ shēngrì kǎ ná gěi Xiǎo Lì kàn.", vi: "Đưa thiệp sinh nhật cho Tiểu Lệ xem.",
          next: "04A",
          analysis: { structure: "把 + Tân ngữ + 拿给 + Người + 看", explain: "把生日卡拿给小丽看 = đem thiệp sinh nhật đưa cho Tiểu Lệ xem. Câu chữ 把 đặt tân ngữ lên trước động từ." },
          vocab: [{ word: "生日卡", py: "shēngrì kǎ", vi: "thiệp sinh nhật" }, { word: "拿给", py: "ná gěi", vi: "đưa cho" }],
        },
        {
          label: "Cùng đi tìm chủ cửa hàng",
          zh: "跟男人一起去找商店老板。", py: "Gēn nánrén yìqǐ qù zhǎo shāngdiàn lǎobǎn.", vi: "Cùng người đàn ông đi tìm chủ cửa hàng.",
          next: "04B",
          analysis: { structure: "跟 + Người + 一起 + Động từ", explain: "跟男人一起去 = cùng đi với người đàn ông. 跟 + người + 一起 = cùng với ai." },
          vocab: [{ word: "跟", py: "gēn", vi: "cùng với" }, { word: "一起", py: "yìqǐ", vi: "cùng nhau" }],
        },
      ],
    },
    // NODE 04A — CHIẾC TÚI ĐÚNG CHỦ
    "04A": {
      id: "04A",
      lines: [
        { kind: "quote", zh: "小安把自己看到的一切都告诉了小丽。", py: "Xiǎo Ān bǎ zìjǐ kàndào de yíqiè dōu gàosu le Xiǎo Lì.", vi: "Tiểu An kể cho Tiểu Lệ tất cả những gì mình đã thấy." },
        { kind: "npc", speaker: "小丽", zh: "粉色的袋子里只有生日卡和衣服。可是，我的手表在哪里？", py: "Fěnsè de dàizi lǐ zhǐ yǒu shēngrì kǎ hé yīfu. Kěshì, wǒ de shǒubiǎo zài nǎlǐ?", vi: "Trong túi màu hồng chỉ có thiệp sinh nhật và quần áo. Nhưng đồng hồ của tớ ở đâu?" },
        { kind: "pick", options: [
          { zh: "你记得自己把放手表在哪里吗？", py: "Nǐ jìde zìjǐ bǎ fàng shǒubiǎo zài nǎlǐ ma?", vi: "Cậu nhớ mình để đặt đồng hồ ở đâu không?", correct: false,
            analysis: { structure: "Sai trật tự câu chữ 把", explain: "Tân ngữ phải đứng ngay sau 把 rồi mới đến động từ: 把手表放在…" },
            vocab: [{ word: "手表", py: "shǒubiǎo", vi: "đồng hồ đeo tay" }] },
          { zh: "你记得自己把手表放在哪里吗？", py: "Nǐ jìde zìjǐ bǎ shǒubiǎo fàng zài nǎlǐ ma?", vi: "Cậu có nhớ mình đã để đồng hồ ở đâu không?", correct: true,
            analysis: { structure: "把 + Tân ngữ + 放在 + Nơi chốn", explain: "把手表放在哪里 = để đồng hồ ở đâu: tân ngữ đứng ngay sau 把, trước động từ." },
            vocab: [{ word: "把", py: "bǎ", vi: "(đưa tân ngữ lên trước động từ)" }, { word: "放", py: "fàng", vi: "đặt, để" }] },
          { zh: "你记得自己手表把放在哪里吗？", py: "Nǐ jìde zìjǐ shǒubiǎo bǎ fàng zài nǎlǐ ma?", vi: "Cậu nhớ mình đồng hồ đặt ở đâu không?", correct: false,
            analysis: { structure: "Sai vị trí 把", explain: "把 đứng trước tân ngữ: 把手表, không đặt sau 手表." },
            vocab: [{ word: "把", py: "bǎ", vi: "(đưa tân ngữ lên trước động từ)" }] },
        ] },
        { kind: "npc", speaker: "小丽", zh: "我把它放进红色的袋子里，放在桌子右边。可是，纸条上说红色的东西在左边。", py: "Wǒ bǎ tā fàng jìn hóngsè de dàizi lǐ, fàng zài zhuōzi yòubiān. Kěshì, zhǐtiáo shàng shuō hóngsè de dōngxi zài zuǒbiān.", vi: "Tớ bỏ nó vào chiếc túi màu đỏ, đặt bên phải bàn. Nhưng trên mẩu giấy nói đồ màu đỏ ở bên trái." },
        { kind: "quote", zh: "小安突然明白了：纸条写错了，她们一直在找错地方！", py: "Xiǎo Ān tūrán míngbai le: zhǐtiáo xiě cuò le, tāmen yìzhí zài zhǎo cuò dìfang!", vi: "Tiểu An đột nhiên hiểu ra: mẩu giấy ghi sai, hai người đã tìm sai chỗ suốt nãy giờ!" },
        { kind: "quote", zh: "她们跑到桌子右边，发现一个红色的袋子。", py: "Tāmen pǎo dào zhuōzi yòubiān, fāxiàn yí ge hóngsè de dàizi.", vi: "Hai người chạy sang bên phải bàn và phát hiện một chiếc túi màu đỏ." },
      ],
      choices: [
        {
          label: "Mở ngay túi đỏ",
          zh: "马上打开红色的袋子。", py: "Mǎshàng dǎkāi hóngsè de dàizi.", vi: "Lập tức mở chiếc túi màu đỏ.",
          next: "END_1",
          analysis: { structure: "马上 + 打开 + Tân ngữ", explain: "马上 = ngay lập tức, đứng trước động từ. 打开 = mở ra." },
          vocab: [{ word: "马上", py: "mǎshàng", vi: "ngay lập tức" }, { word: "打开", py: "dǎkāi", vi: "mở" }],
        },
        {
          label: "Hỏi cô Trần túi của ai",
          zh: "先问陈阿姨这个袋子是谁的。", py: "Xiān wèn Chén āyí zhège dàizi shì shéi de.", vi: "Hỏi cô Trần trước xem chiếc túi này của ai.",
          next: "END_2",
          analysis: { structure: "先 + 问 + Người + 是谁的", explain: "谁的 = của ai. Dùng 的 để thay cho danh từ đã nói: 这个袋子是谁的?" },
          vocab: [{ word: "谁", py: "shéi", vi: "ai" }, { word: "的", py: "de", vi: "(trợ từ sở hữu)" }],
        },
      ],
    },
    // NODE 04B — ÔNG LÝ VÀ BÍ MẬT CUỐI CÙNG
    "04B": {
      id: "04B",
      lines: [
        { kind: "quote", zh: "陈阿姨把李先生叫来了。", py: "Chén āyí bǎ Lǐ xiānsheng jiào lái le.", vi: "Cô Trần gọi ông Lý tới." },
        { kind: "npc", speaker: "李先生", zh: "对不起！我拿错袋子了！", py: "Duìbuqǐ! Wǒ ná cuò dàizi le!", vi: "Xin lỗi! Tôi đã cầm nhầm túi rồi!" },
        { kind: "quote", zh: "原来，他也买了一个粉色的袋子。他把两个袋子放在一起，离开的时候拿错了。", py: "Yuánlái, tā yě mǎi le yí ge fěnsè de dàizi. Tā bǎ liǎng ge dàizi fàng zài yìqǐ, líkāi de shíhou ná cuò le.", vi: "Hóa ra ông ấy cũng mua một chiếc túi màu hồng. Ông đặt hai chiếc túi cạnh nhau rồi cầm nhầm khi rời đi." },
        { kind: "npc", speaker: "李先生", zh: "真不好意思！我妻子也喜欢粉色的东西，所以我买了这个袋子。", py: "Zhēn bù hǎoyìsi! Wǒ qīzi yě xǐhuan fěnsè de dōngxi, suǒyǐ wǒ mǎi le zhège dàizi.", vi: "Thật xin lỗi! Vợ tôi cũng thích đồ màu hồng nên tôi đã mua chiếc túi này." },
        { kind: "quote", zh: "小丽打开袋子，里面有生日卡和粉色的衣服，可是没有手表。", py: "Xiǎo Lì dǎkāi dàizi, lǐmiàn yǒu shēngrì kǎ hé fěnsè de yīfu, kěshì méiyǒu shǒubiǎo.", vi: "Tiểu Lệ mở túi, bên trong có thiệp sinh nhật và áo màu hồng, nhưng không có đồng hồ." },
        { kind: "npc", speaker: "小丽", zh: "手表一定在红色的袋子里！我想起来了！", py: "Shǒubiǎo yídìng zài hóngsè de dàizi lǐ! Wǒ xiǎng qǐlái le!", vi: "Đồng hồ nhất định ở trong chiếc túi màu đỏ! Tớ nhớ ra rồi!" },
      ],
      choices: [
        {
          label: "Tha thứ, cùng quay lại cửa hàng",
          zh: "原谅李先生，一起回商店。", py: "Yuánliàng Lǐ xiānsheng, yìqǐ huí shāngdiàn.", vi: "Tha thứ cho ông Lý và cùng quay lại cửa hàng.",
          next: "END_1",
          analysis: { structure: "原谅 + Người; 一起 + 回", explain: "原谅 = tha thứ. 一起回商店 = cùng quay lại cửa hàng." },
          vocab: [{ word: "原谅", py: "yuánliàng", vi: "tha thứ" }, { word: "回", py: "huí", vi: "quay về" }],
        },
        {
          label: "Nhờ ông Lý giúp tìm túi",
          zh: "请李先生帮忙找回自己的袋子。", py: "Qǐng Lǐ xiānsheng bāngmáng zhǎo huí zìjǐ de dàizi.", vi: "Nhờ ông Lý giúp tìm lại chiếc túi của mình.",
          next: "END_2",
          analysis: { structure: "请 + Người + 帮忙 + Động từ", explain: "请李先生帮忙找回 = nhờ ông Lý giúp tìm lại. 帮忙 = giúp đỡ; 找回 = tìm lại được." },
          vocab: [{ word: "帮忙", py: "bāngmáng", vi: "giúp đỡ" }, { word: "找回", py: "zhǎohuí", vi: "tìm lại" }],
        },
      ],
    },
    // ENDING 1 — 找到了！
    "END_1": {
      id: "END_1",
      lines: [
        { kind: "quote", zh: "小安和小丽打开袋子，终于找到了手表。", py: "Xiǎo Ān hé Xiǎo Lì dǎkāi dàizi, zhōngyú zhǎodào le shǒubiǎo.", vi: "Tiểu An và Tiểu Lệ mở túi, cuối cùng cũng tìm thấy chiếc đồng hồ." },
        { kind: "npc", speaker: "小丽", zh: "太好了！我可以把手表送给丈夫了！", py: "Tài hǎo le! Wǒ kěyǐ bǎ shǒubiǎo sòng gěi zhàngfu le!", vi: "Tuyệt quá! Tớ có thể tặng đồng hồ cho chồng rồi!" },
        { kind: "quote", zh: "陈阿姨请她们喝牛奶，还送给小安一个粉色的小袋子。", py: "Chén āyí qǐng tāmen hē niúnǎi, hái sòng gěi Xiǎo Ān yí ge fěnsè de xiǎo dàizi.", vi: "Cô Trần mời hai người uống sữa bò, còn tặng Tiểu An một chiếc túi nhỏ màu hồng." },
        { kind: "pick", options: [
          { zh: "今天真是一天特别的！", py: "Jīntiān zhēn shì yì tiān tèbié de!", vi: "Hôm nay thật là một ngày đặc biệt của!", correct: false,
            analysis: { structure: "Sai trật tự định ngữ", explain: "Định ngữ 特别的 đứng trước danh từ 一天, không đứng sau." },
            vocab: [{ word: "特别", py: "tèbié", vi: "đặc biệt" }] },
          { zh: "今天真是特别一天！", py: "Jīntiān zhēn shì tèbié yì tiān!", vi: "Hôm nay thật là đặc biệt một ngày!", correct: false,
            analysis: { structure: "Thiếu 的", explain: "Tính từ làm định ngữ trước 一天 cần có 的: 特别的一天." },
            vocab: [{ word: "的", py: "de", vi: "(trợ từ)" }] },
          { zh: "今天真是特别的一天！", py: "Jīntiān zhēn shì tèbié de yì tiān!", vi: "Hôm nay đúng là một ngày thật đặc biệt!", correct: true,
            analysis: { structure: "真是 + Tính từ + 的 + 一天", explain: "真是 nhấn mạnh nhận định. 特别的一天 = một ngày đặc biệt (tính từ + 的 + danh từ)." },
            vocab: [{ word: "特别", py: "tèbié", vi: "đặc biệt" }, { word: "一天", py: "yì tiān", vi: "một ngày" }] },
        ] },
        { kind: "narration", text: "Hai người tìm được món quà trước giờ sinh nhật. Một vụ cầm nhầm túi đã trở thành câu chuyện vui để kể lại." },
      ],
      ending: { title: "找到了！", titleVi: "Tìm thấy rồi!" },
    },
    // ENDING 2 — 又找错了！
    "END_2": {
      id: "END_2",
      lines: [
        { kind: "quote", zh: "她们花了很多时间，才打开红色的袋子。手表就在里面。", py: "Tāmen huā le hěn duō shíjiān, cái dǎkāi hóngsè de dàizi. Shǒubiǎo jiù zài lǐmiàn.", vi: "Hai người mất rất nhiều thời gian mới mở chiếc túi màu đỏ. Đồng hồ nằm ngay bên trong." },
        { kind: "npc", speaker: "陈阿姨", zh: "下次先看看里面，不要只看颜色。", py: "Xià cì xiān kànkan lǐmiàn, bú yào zhǐ kàn yánsè.", vi: "Lần sau hãy xem bên trong trước, đừng chỉ nhìn màu sắc." },
        { kind: "npc", speaker: "小丽", zh: "我们浪费了很多时间！", py: "Wǒmen làngfèi le hěn duō shíjiān!", vi: "Chúng ta đã lãng phí rất nhiều thời gian!" },
        { kind: "pick", options: [
          { zh: "别着急。手表找到了，生日也不会晚。", py: "Bié zháojí. Shǒubiǎo zhǎodào le, shēngrì yě bú huì wǎn.", vi: "Đừng lo. Tìm được đồng hồ rồi, sinh nhật cũng không bị muộn đâu.", correct: true,
            analysis: { structure: "Động từ + 到 + 了; 也不会 + Tính từ", explain: "找到了 = tìm thấy rồi (到 là bổ ngữ kết quả). 也不会晚 = cũng sẽ không muộn." },
            vocab: [{ word: "着急", py: "zháojí", vi: "lo lắng, sốt ruột" }, { word: "晚", py: "wǎn", vi: "muộn" }] },
          { zh: "别着急。手表找了到，生日也不会晚。", py: "Bié zháojí. Shǒubiǎo zhǎo le dào, shēngrì yě bú huì wǎn.", vi: "Đừng lo. Đồng hồ tìm rồi thấy, sinh nhật cũng sẽ không muộn.", correct: false,
            analysis: { structure: "Sai vị trí 了", explain: "Bổ ngữ kết quả 到 dính liền với động từ, 了 đứng sau cả cụm: 找到了." },
            vocab: [{ word: "找到", py: "zhǎodào", vi: "tìm thấy" }] },
          { zh: "别着急。手表找到了，生日不也会晚。", py: "Bié zháojí. Shǒubiǎo zhǎodào le, shēngrì bù yě huì wǎn.", vi: "Đừng lo. Tìm được đồng hồ rồi, sinh nhật không cũng sẽ muộn.", correct: false,
            analysis: { structure: "Sai vị trí 也", explain: "也 đứng trước từ phủ định: 也不会晚." },
            vocab: [{ word: "也", py: "yě", vi: "cũng" }] },
        ] },
        { kind: "narration", text: "Hai người tìm được đồng hồ nhưng mất nhiều thời gian hơn. Họ hiểu rằng không nên chỉ dựa vào màu sắc để xác định đồ vật của ai, mà cần kiểm tra bên trong." },
      ],
      ending: { title: "找到了，可是晚了", titleVi: "Tìm thấy rồi, nhưng hơi muộn" },
    },
  },
};
