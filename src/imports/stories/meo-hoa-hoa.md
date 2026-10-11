# Truyện chú mèo Hoa Hoa (HSK 2)

## Sơ đồ nhánh

```
NODE 01 → CHOICE 1
├─ A → 02A → 03A → CHOICE 2A ─┬─ A → 04A1 ┐
│                             ├─ B → 04A2 │
│                             └─ C → 04A3 │
├─ B → 02B → 03B → CHOICE 2B ─┬─ A → 04B1 │
│                             ├─ B → 04B2 ├→ 04C → CHOICE 3
│                             └─ C → 04B3 │
└─ C → 02C → 03C ─────────────────────────┘
04C → CHOICE 3 ─┬─ A → 05A ┐
                ├─ B → 05B ├→ 06 (cao trào) → FINAL CHOICE ─┬─ A → ENDING A “一起出发”
                └─ C → 05C ┘                                ├─ B → ENDING B “花花的旅游” ⚽
                                                            └─ C → ENDING C “最喜欢的地方” 🐱
```

---

## Nhân vật

- **你** — sinh viên.

- **小美** — bạn của bạn.

- **花花** — con mèo của 小美.

- **它** — 花花, chú mèo đang chuẩn bị cho một “chuyến du lịch” rất đặc biệt.

## NODE 01 — HOOK

**星期五，18:30**

**小美：** 你明天有时间吗？  
_Nǐ míngtiān yǒu shíjiān ma?_  
Ngày mai cậu có thời gian không?

**你：** 有啊，怎么了？  
_Yǒu a, zěnme le?_  
Có, sao thế?

**小美：** 我们一起去旅游吧！  
_Wǒmen yìqǐ qù lǚyóu ba!_  
Chúng mình cùng đi du lịch nhé!

**你：** 旅游？去哪儿？  
_Lǚyóu? Qù nǎr?_  
Du lịch? Đi đâu?

**小美：** 现在还不能告诉你。  
_Xiànzài hái bù néng gàosu nǐ._  
Bây giờ vẫn chưa thể nói cho cậu.

**你：** 为什么？  
_Wèishénme?_  
Tại sao?

**小美：** 因为有一个新朋友要一起去。  
_Yīnwèi yǒu yí ge xīn péngyou yào yìqǐ qù._  
Vì có một người bạn mới sẽ đi cùng.

**你：** 新朋友？谁？  
_Xīn péngyou? Shéi?_  
Bạn mới? Ai?

**小美：** 明天你就知道了。  
_Míngtiān nǐ jiù zhīdào le._  
Ngày mai cậu sẽ biết.

### CHOICE 1

**A. Đồng ý ngay**

**你：** 好啊！我要去！  
_Hǎo a! Wǒ yào qù!_  
Được đó! Tớ muốn đi!

→ **NODE 02A**

**B. Hỏi địa điểm**

**你：** 你先告诉我去哪儿。  
_Nǐ xiān gàosu wǒ qù nǎr._  
Cậu nói trước cho tớ biết đi đâu đã.

→ **NODE 02B**

**C. Nghi ngờ**

**你：** 我觉得有点奇怪。  
_Wǒ juéde yǒudiǎn qíguài._  
Tớ thấy hơi kỳ lạ.

→ **NODE 02C**

## NODE 02A — “Bạn mới”

**小美：** 好！明天早上八点见！  
_Hǎo! Míngtiān zǎoshang bā diǎn jiàn!_  
Được! Sáng mai 8 giờ gặp nhé!

**你：** 等一下。  
_Děng yíxià._  
Khoan.

**你：** 这个“新朋友”喜欢什么？  
_Zhège “xīn péngyou” xǐhuan shénme?_  
“Người bạn mới” này thích gì?

**小美：** 它最喜欢运动。  
_Tā zuì xǐhuan yùndòng._  
Nó thích vận động nhất.

**你：** 它？  
_Tā?_  
Nó?

**小美：** 对。  
_Duì._  
Ừ.

Bạn bắt đầu thấy có gì đó không đúng.

→ **NODE 03A**

## NODE 02B — Đi đâu?

**你：** 你先告诉我去哪儿。  
_Nǐ xiān gàosu wǒ qù nǎr._  
Cậu nói trước cho tớ biết đi đâu đã.

**小美：** 一个很漂亮的地方。  
_Yí ge hěn piàoliang de dìfang._  
Một nơi rất đẹp.

**你：** 北京？上海？  
_Běijīng? Shànghǎi?_  
Bắc Kinh? Thượng Hải?

**小美：** 都不是。  
_Dōu bú shì._  
Đều không phải.

**你：** 那是什么地方？  
_Nà shì shénme dìfang?_  
Thế là nơi nào?

**小美：** 明天你就知道。  
_Míngtiān nǐ jiù zhīdào._  
Ngày mai cậu sẽ biết.

**你：** ……为什么什么都不能告诉我？  
_…Wèishénme shénme dōu bù néng gàosu wǒ?_  
…Tại sao cái gì cậu cũng không chịu nói?

**小美：** 因为它不喜欢。  
_Yīnwèi tā bù xǐhuan._  
Vì nó không thích.

**你：** “它”？  
_“Tā”?_  
“Nó”?

→ **NODE 03B**

## NODE 02C — “Có gì đó sai sai”

**你：** 我觉得有点奇怪。  
_Wǒ juéde yǒudiǎn qíguài._  
Tớ thấy hơi kỳ lạ.

**小美：** 哪里奇怪？  
_Nǎli qíguài?_  
Kỳ lạ chỗ nào?

**你：** 你说“新朋友”，但是你一直说“它”。  
_Nǐ shuō “xīn péngyou”, dànshì nǐ yìzhí shuō “tā”._  
Cậu nói “bạn mới”, nhưng cứ gọi là “nó”.

**小美：** ……  
…

**你：** 它不会是动物吧？  
_Tā bú huì shì dòngwù ba?_  
Không lẽ nó là động vật?

**小美：** 明天见。  
_Míngtiān jiàn._  
Mai gặp nhé.

→ **NODE 03C**

## NODE 03A — Bí mật được hé lộ

**你：** 它是谁？  
_Tā shì shéi?_  
Nó là ai?

**小美：** 你真的想知道？  
_Nǐ zhēn de xiǎng zhīdào?_  
Cậu thật sự muốn biết à?

**你：** 当然。  
_Dāngrán._  
Tất nhiên.

小美 gửi một tấm ảnh.

Trong ảnh là một con mèo.

**你：** ……

**你：** 这是猫？  
_Zhè shì māo?_  
Đây là mèo à?

**小美：** 对。它叫花花。  
_Duì. Tā jiào Huāhua._  
Ừ. Nó tên là Hoa Hoa.

**你：** 所以你的“新朋友”是猫？  
_Suǒyǐ nǐ de “xīn péngyou” shì māo?_  
Vậy “người bạn mới” của cậu là mèo?

**小美：** 对！  
_Duì!_  
Đúng!

### CHOICE 2A

**A. 「花花也要旅游吗？」**  
_Huāhua yě yào lǚyóu ma?_  
Hoa Hoa cũng đi du lịch à?

→ **NODE 04A1** _(bổ sung)_

**B. 「它为什么要一起去？」**  
_Tā wèishénme yào yìqǐ qù?_  
Tại sao nó phải đi cùng?

→ **NODE 04A2** _(bổ sung)_

**C. 「我不想和猫一起旅游。」**  
_Wǒ bù xiǎng hé māo yìqǐ lǚyóu._  
Tớ không muốn đi du lịch cùng mèo.

→ **NODE 04A3** _(bổ sung)_

## NODE 04A1 — Hoa Hoa cũng đi du lịch _(bổ sung)_

**小美：** 当然！它第一次去旅游。  
_Dāngrán! Tā dì-yī cì qù lǚyóu._  
Tất nhiên! Đây là lần đầu nó đi du lịch.

**你：** 猫也喜欢旅游吗？  
_Māo yě xǐhuan lǚyóu ma?_  
Mèo cũng thích du lịch à?

**小美：** 我不知道，但是它最喜欢运动。  
_Wǒ bù zhīdào, dànshì tā zuì xǐhuan yùndòng._  
Tớ không biết, nhưng nó thích vận động nhất.

**你：** 好吧，明天见。  
_Hǎo ba, míngtiān jiàn._  
Được rồi, mai gặp.

**小美：** 明天早上八点，别忘了！  
_Míngtiān zǎoshang bā diǎn, bié wàng le!_  
Sáng mai 8 giờ, đừng quên nhé!

→ **NODE 04C**

## NODE 04A2 — Vì sao phải đi cùng _(bổ sung)_

**小美：** 因为它自己在家会不高兴。  
_Yīnwèi tā zìjǐ zài jiā huì bù gāoxìng._  
Vì ở nhà một mình nó sẽ buồn.

**你：** 猫也会不高兴？  
_Māo yě huì bù gāoxìng?_  
Mèo cũng biết buồn à?

**小美：** 会啊！上次我出去玩，它三天没吃饭。  
_Huì a! Shàng cì wǒ chūqù wán, tā sān tiān méi chī fàn._  
Có chứ! Lần trước tớ đi chơi, nó ba ngày không ăn.

**小美：** 而且它最喜欢运动，一定要带它出去。  
_Érqiě tā zuì xǐhuan yùndòng, yídìng yào dài tā chūqù._  
Với lại nó thích vận động nhất, nhất định phải dẫn nó ra ngoài.

**你：** ……好吧，那就一起去。  
_…Hǎo ba, nà jiù yìqǐ qù._  
…Thôi được, vậy thì đi cùng.

**小美：** 太好了！明天早上八点见！  
_Tài hǎo le! Míngtiān zǎoshang bā diǎn jiàn!_  
Tuyệt quá! Sáng mai 8 giờ gặp nhé!

→ **NODE 04C**

## NODE 04A3 — Không muốn đi cùng mèo _(bổ sung)_

**小美：** 为什么？花花很可爱！  
_Wèishénme? Huāhua hěn kě'ài!_  
Tại sao? Hoa Hoa dễ thương lắm!

**你：** 猫不喜欢坐车，也不喜欢人多的地方。  
_Māo bù xǐhuan zuò chē, yě bù xǐhuan rén duō de dìfang._  
Mèo không thích đi xe, cũng không thích chỗ đông người.

**小美：** 花花不一样。它最喜欢运动，也不怕人。  
_Huāhua bù yíyàng. Tā zuì xǐhuan yùndòng, yě bú pà rén._  
Hoa Hoa khác. Nó thích vận động nhất, cũng không sợ người.

**你：** ……真的吗？  
_…Zhēn de ma?_  
…Thật không?

**小美：** 你明天来看看就知道了。  
_Nǐ míngtiān lái kànkan jiù zhīdào le._  
Mai cậu đến xem là biết.

Bạn thở dài. Có vẻ không từ chối được rồi.

→ **NODE 04C**

## NODE 03B — Clue về Hoa Hoa

**你：** “它”？  
_“Tā”?_  
“Nó”?

**小美：** 对啊。  
_Duì a._  
Đúng mà.

**小美：** 它的眼睛很好看。  
_Tā de yǎnjing hěn hǎokàn._  
Mắt nó rất đẹp.

**你：** 是猫吗？  
_Shì māo ma?_  
Là mèo à?

**小美：** 你猜。  
_Nǐ cāi._  
Đoán đi.

**你：** ……我觉得是。  
_…Wǒ juéde shì._  
…Tớ nghĩ là vậy.

**小美：** 哈哈，明天你就知道。  
_Hāhā, míngtiān nǐ jiù zhīdào._  
Haha, ngày mai cậu sẽ biết.

### CHOICE 2B

**A. 「那我明天一定去。」**  
_Nà wǒ míngtiān yídìng qù._  
Vậy mai nhất định tớ sẽ đi.

→ **NODE 04B1** _(bổ sung)_

**B. 「我还是觉得很奇怪。」**  
_Wǒ háishi juéde hěn qíguài._  
Tớ vẫn thấy rất kỳ.

→ **NODE 04B2** _(bổ sung)_

**C. 「它喜欢什么运动？」**  
_Tā xǐhuan shénme yùndòng?_  
Nó thích môn thể thao nào?

→ **NODE 04B3** _(bổ sung)_

## NODE 04B1 — Nhất định sẽ đi _(bổ sung)_

**小美：** 好！明天早上八点见。  
_Hǎo! Míngtiān zǎoshang bā diǎn jiàn._  
Được! Sáng mai 8 giờ gặp nhé.

**你：** 那个“它”也会来吗？  
_Nàge “tā” yě huì lái ma?_  
Cái “nó” đó cũng đến à?

**小美：** 当然。它叫花花，是我的猫。  
_Dāngrán. Tā jiào Huāhua, shì wǒ de māo._  
Tất nhiên. Nó tên là Hoa Hoa, là mèo của tớ.

**你：** 我就知道！  
_Wǒ jiù zhīdào!_  
Tớ biết ngay mà!

**小美：** 哈哈。对了，花花最喜欢运动，你要跑得快一点。  
_Hāhā. Duì le, Huāhua zuì xǐhuan yùndòng, nǐ yào pǎo de kuài yìdiǎn._  
Haha. À này, Hoa Hoa thích vận động nhất, cậu phải chạy nhanh một chút đấy.

→ **NODE 04C**

## NODE 04B2 — Vẫn thấy kỳ _(bổ sung)_

**小美：** 好吧好吧，我告诉你。  
_Hǎo ba hǎo ba, wǒ gàosu nǐ._  
Thôi được, tớ nói cho cậu.

**小美：** 它叫花花，是我的猫。  
_Tā jiào Huāhua, shì wǒ de māo._  
Nó tên là Hoa Hoa, là mèo của tớ.

**你：** 你要带猫去旅游？  
_Nǐ yào dài māo qù lǚyóu?_  
Cậu định mang mèo đi du lịch?

**小美：** 对！它最喜欢运动，每天都想出去玩。  
_Duì! Tā zuì xǐhuan yùndòng, měitiān dōu xiǎng chūqù wán._  
Đúng! Nó thích vận động nhất, ngày nào cũng muốn ra ngoài chơi.

**你：** ……我还是觉得很奇怪。  
_…Wǒ háishi juéde hěn qíguài._  
…Tớ vẫn thấy rất kỳ.

**小美：** 明天早上八点，你来了就不奇怪了。  
_Míngtiān zǎoshang bā diǎn, nǐ lái le jiù bù qíguài le._  
8 giờ sáng mai, cậu đến rồi sẽ hết thấy kỳ.

→ **NODE 04C**

## NODE 04B3 — Nó thích môn thể thao nào _(bổ sung)_

**小美：** 你怎么知道它喜欢运动？  
_Nǐ zěnme zhīdào tā xǐhuan yùndòng?_  
Sao cậu biết nó thích vận động?

**你：** 猫不是都喜欢跑来跑去吗？  
_Māo bú shì dōu xǐhuan pǎo lái pǎo qù ma?_  
Mèo chẳng phải đều thích chạy tới chạy lui sao?

**小美：** 哈哈，花花不一样。它最喜欢的运动……是个秘密。  
_Hāhā, Huāhua bù yíyàng. Tā zuì xǐhuan de yùndòng… shì ge mìmì._  
Haha, Hoa Hoa khác. Môn thể thao nó thích nhất… là bí mật.

**你：** 花花？它叫花花？  
_Huāhua? Tā jiào Huāhua?_  
Hoa Hoa? Nó tên là Hoa Hoa à?

**小美：** 对，我的猫。明天早上八点见！  
_Duì, wǒ de māo. Míngtiān zǎoshang bā diǎn jiàn!_  
Ừ, mèo của tớ. Sáng mai 8 giờ gặp nhé!

→ **NODE 04C**

## NODE 03C — Phát hiện “bạn mới”

**小美：** 好吧，我告诉你。  
_Hǎo ba, wǒ gàosu nǐ._  
Được rồi, tớ nói cho cậu.

**小美：** 它叫花花。  
_Tā jiào Huāhua._  
Nó tên là Hoa Hoa.

**你：** 花花？  
_Huāhua?_  
Hoa Hoa?

**小美：** 对，我的猫。  
_Duì, wǒ de māo._  
Ừ, mèo của tớ.

**你：** 所以你叫我和你的猫一起旅游？  
_Suǒyǐ nǐ jiào wǒ hé nǐ de māo yìqǐ lǚyóu?_  
Vậy cậu rủ tớ đi du lịch cùng mèo của cậu?

**小美：** 对！  
_Duì!_  
Đúng!

**你：** 我觉得你疯了。  
_Wǒ juéde nǐ fēng le._  
Tớ nghĩ cậu điên rồi.

**小美：** 花花很可爱，它最喜欢运动！ _(bổ sung)_  
_Huāhua hěn kě'ài, tā zuì xǐhuan yùndòng!_  
Hoa Hoa dễ thương lắm, nó thích vận động nhất!

→ **NODE 04C**

## NODE 04C — Hoa Hoa biến mất

**第二天，08:00**

Bạn đến điểm hẹn.

小美 đang đứng một mình.

**你：** 花花呢？  
_Huāhua ne?_  
Hoa Hoa đâu?

**小美：** 不知道。  
_Bù zhīdào._  
Không biết.

**你：** 什么？  
_Shénme?_  
Cái gì?

**小美：** 它不见了。  
_Tā bú jiàn le._  
Nó biến mất rồi.

**你：** 你不是说它最喜欢运动吗？  
_Nǐ bú shì shuō tā zuì xǐhuan yùndòng ma?_  
Không phải cậu nói nó thích vận động nhất à?

**小美：** 对。  
_Duì._  
Ừ. _(bổ sung)_

**小美：** 所以我觉得它可能自己出去玩了。  
_Suǒyǐ wǒ juéde tā kěnéng zìjǐ chūqù wán le._  
Nên tớ nghĩ có thể nó tự đi chơi rồi.

Bạn nhìn thấy một sợi dây nhỏ trên mặt đất.

### CHOICE 3

**A. Đi tìm Hoa Hoa**

**你：** 我们一起找它吧。  
_Wǒmen yìqǐ zhǎo tā ba._  
Chúng ta cùng đi tìm nó đi.

→ **NODE 05A**

**B. Kiểm tra túi đồ**

**你：** 先看看你的包。  
_Xiān kànkan nǐ de bāo._  
Kiểm tra túi của cậu trước đi.

→ **NODE 05B**

**C. Đoán Hoa Hoa tự đi**

**你：** 我觉得它自己跑走了。  
_Wǒ juéde tā zìjǐ pǎo zǒu le._  
Tớ nghĩ nó tự chạy đi rồi.

→ **NODE 05C**

## NODE 05A — Cùng nhau tìm

Bạn và 小美 bắt đầu tìm.

**小美：** 花花！花花！  
_Huāhua! Huāhua!_  
Hoa Hoa! Hoa Hoa! _(bổ sung)_

Không có tiếng trả lời.

**你：** 看！那里有它的东西。  
_Kàn! Nàli yǒu tā de dōngxi._  
Nhìn kìa! Có đồ của nó ở đó.

Bạn tìm thấy một chiếc vòng cổ.

Trên vòng cổ có một dòng chữ:

“最喜欢一起旅游。”

_Zuì xǐhuan yìqǐ lǚyóu._

“Thích đi du lịch cùng nhau nhất.”

**小美：** 这是花花的！  
_Zhè shì Huāhua de!_  
Đây là của Hoa Hoa!

Đột nhiên…

“喵——”

Một tiếng mèo vang lên từ phía sau.

→ **NODE 06**

## NODE 05B — Kiểm tra túi

小美 mở túi.

Không có Hoa Hoa.

Nhưng có một tờ giấy.

**你：** 这是什么？  
_Zhè shì shénme?_  
Đây là gì?

**小美：** 我不知道。  
_Wǒ bù zhīdào._  
Tớ không biết.

Trên giấy có hình một con mèo và một mũi tên.

Mũi tên chỉ về phía sân bóng.

**你：** 那边是足球场。  
_Nàbiān shì zúqiúchǎng._  
Đằng kia là sân bóng.

**小美：** 花花不会去那里吧？  
_Huāhua bú huì qù nàli ba?_  
Không lẽ Hoa Hoa đến đó?

→ **NODE 06**

## NODE 05C — Hoa Hoa tự chạy đi

**小美：** 你觉得它去了哪里？  
_Nǐ juéde tā qù le nǎli?_  
Cậu nghĩ nó đi đâu?

**你：** 我觉得它去了有很多人的地方。  
_Wǒ juéde tā qù le yǒu hěn duō rén de dìfang._  
Tớ nghĩ nó đến nơi có nhiều người.

**小美：** 为什么？  
_Wèishénme?_  
Tại sao?

**你：** 因为它喜欢运动。  
_Yīnwèi tā xǐhuan yùndòng._  
Vì nó thích vận động.

**小美：** 猫也喜欢运动？  
_Māo yě xǐhuan yùndòng?_  
Mèo cũng thích vận động à?

**你：** 你的猫不是普通的猫。  
_Nǐ de māo bú shì pǔtōng de māo._  
Mèo của cậu không phải mèo bình thường.

Hai người nhìn nhau.

Sau đó cùng chạy về phía sân bóng.

→ **NODE 06**

## NODE 06 — CLIMAX

Sân bóng rất đông người.

Có người đang 踢足球.

Bạn nhìn quanh.

Không thấy Hoa Hoa.

**小美：** 花花！  
_Huāhua!_  
Hoa Hoa! _(bổ sung)_

Không có phản ứng.

**你：** 等一下。  
_Děng yíxià._  
Khoan đã. _(bổ sung)_

Bạn nhìn xuống.

Một quả bóng đang lăn về phía hai người.

Và phía sau quả bóng…

Một đôi mắt đang nhìn bạn.

**你：** ……那是？  
_…Nà shì?_  
…Đó là?

Một con mèo từ từ bước ra.

**小美：** 花花！！！  
_Huāhua!!!_  
Hoa Hoa!!! _(bổ sung)_

Hoa Hoa chạy thẳng về phía 小美.

**小美：** 你怎么跑到这里来了？  
_Nǐ zěnme pǎo dào zhèlǐ lái le?_  
Sao mày lại chạy đến đây?

Bạn nhìn Hoa Hoa.

Nó có một quả bóng nhỏ bên cạnh.

**你：** 我知道了。  
_Wǒ zhīdào le._  
Tớ hiểu rồi.

**小美：** 你知道什么？  
_Nǐ zhīdào shénme?_  
Cậu hiểu gì?

**你：** 它不是喜欢旅游。  
_Tā bú shì xǐhuan lǚyóu._  
Nó không thích du lịch.

**你：** 它最喜欢的是……  
_Tā zuì xǐhuan de shì…_  
Thứ nó thích nhất là…

Hoa Hoa chạy về phía sân bóng.

**你：** 踢足球？  
_Tī zúqiú?_  
Đá bóng?

小美 bật cười.

**小美：** 对！  
_Duì!_  
Đúng! _(bổ sung)_

**小美：** 它每天都偷我的足球！  
_Tā měitiān dōu tōu wǒ de zúqiú!_  
Ngày nào nó cũng trộm bóng đá của tớ!

### FINAL CHOICE

### Lựa chọn A — Đưa Hoa Hoa đi du lịch

**你：** 那我们还是一起去旅游吧！  
_Nà wǒmen háishi yìqǐ qù lǚyóu ba!_  
Vậy chúng ta vẫn cùng đi du lịch đi!

**小美：** 好！  
_Hǎo!_  
Được! _(bổ sung)_

**花花：** 喵！  
_Miāo!_ _(bổ sung)_  
Meo! _(bổ sung)_

## ENDING A — “一起出发”

Ba người — à không, hai người và một con mèo — bắt đầu chuyến du lịch.

Hoa Hoa ngồi trong túi.

Bạn nhìn nó.

**你：** 花花，你觉得哪里最好？  
_Huāhua, nǐ juéde nǎli zuì hǎo?_  
Hoa Hoa, mày thấy chỗ nào tuyệt nhất?

Hoa Hoa nhắm mắt.

**小美：** 它觉得哪里都很好。  
_Tā juéde nǎli dōu hěn hǎo._  
Nó thấy chỗ nào cũng tuyệt.

### Lựa chọn B — Ở lại chơi bóng

**你：** 算了，我们先一起踢足球吧！  
_Suàn le, wǒmen xiān yìqǐ tī zúqiú ba!_  
Thôi, trước tiên chúng ta cùng đá bóng đi!

**小美：** 花花一定很高兴！  
_Huāhua yídìng hěn gāoxìng!_  
Hoa Hoa chắc chắn sẽ rất vui!

Hoa Hoa chạy theo quả bóng.

## ENDING B — “花花的旅游” ⚽

Cuối cùng, chuyến du lịch bị hoãn.

Nhưng chẳng ai buồn.

Vì Hoa Hoa đã tìm được nơi nó thích nhất.

Không phải núi.

Không phải biển.

Mà là…

足球场。

Sân bóng.

### Lựa chọn C — Về nhà

**你：** 我觉得我们应该回家。  
_Wǒ juéde wǒmen yīnggāi huí jiā._  
Tớ nghĩ chúng ta nên về nhà.

**小美：** 为什么？  
_Wèishénme?_  
Tại sao?

**你：** 花花已经找到它最喜欢的地方了。  
_Huāhua yǐjīng zhǎodào tā zuì xǐhuan de dìfang le._  
Hoa Hoa đã tìm thấy nơi nó thích nhất rồi.

**小美：** 也是。  
_Yě shì._  
Cũng đúng.

Hai người nhìn Hoa Hoa đang nằm cạnh quả bóng.

## ENDING C — “最喜欢的地方” 🐱

Chuyến du lịch không diễn ra.

Nhưng bạn hiểu một điều:

“旅游”不一定是去很远的地方。

_Lǚyóu bú yídìng shì qù hěn yuǎn de dìfang._

Du lịch không nhất thiết phải là đi đến một nơi thật xa.

Đôi khi, chỉ cần 一起 đi đâu đó với người mình thích.

Vậy là đủ.
