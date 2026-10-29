---
name: import-story
description: Đưa một cốt truyện (một tab trong Google Doc cốt truyện của storyLoop) vào app thành truyện rẽ nhánh chơi được. Dùng khi được nhờ import, thêm, code một truyện/tab từ Doc.
---

# Import một cốt truyện từ Google Doc vào storyLoop

Đầu vào: **tên truyện (tên tab trong Doc)** do người dùng đưa, ví dụ "Người ngoài cửa là ai?". Người dùng không cần biết id. Doc: https://docs.google.com/document/d/1bsYDMmd7TKtire_IMHMA-3v5U0HGMjzxpE4PTf3f0JU
Đầu ra: 1 file `.md` sạch, 1 file `.ts`, đăng ký ở 4 chỗ, và `node scripts/check-stories.mjs` không lỗi.

Quy trình hai bước tách rời: Doc thô → `.md` sạch → `.ts`. Không convert thẳng từ Doc sang `.ts`.

## 0. Xác định tab và id

- Tìm tên truyện người dùng đưa trong bảng `src/imports/stories/STORY-REGISTRY.md` và trong các tab của Doc; nếu tên khớp nhiều tab hoặc không khớp, hỏi lại. Map theo Bài + vị trí trong bài, không chỉ theo tên (tên tab thường khác tên trong app).
- **Tự đặt id** từ tên truyện: không dấu, chữ thường, nối bằng `-` (vd. "Người ngoài cửa là ai?" → `nguoi-ngoai-cua-la-ai`). Id chỉ gồm `a-z 0-9 -`, chưa có trong `src/app/data/stories/index.ts`, và không đổi sau khi truyện đã lên web (mất tiến độ người chơi).
- Trước khi làm, báo lại người dùng bằng một bảng: Bài | Tên trong Doc | Tên sẽ hiện trong app | Id dự kiến. Khi trao đổi chỉ nói tên truyện; id chỉ xuất hiện trong bảng này và trong code.
- Tab trùng nội dung tab đã import (vd. "Ai đã gửi bức ảnh? (bản 2)") thì dừng và báo.
- Tab được đánh dấu cần người viết sửa, thiếu nhánh, hoặc có chỗ "Doc thiếu" thì dừng và báo, không tự viết lại cốt truyện. Nội dung đã duyệt nằm ở thread kiểm tra Doc.

## 1. Đọc Doc

Dùng connector Google Docs (`read_doc`). Kết quả rất lớn (~3 MB JSON): dùng script Python (`python3 -I`) đọc `content.tabs[*]` (kể cả `childTabs`), ghép `textRun.content` của từng paragraph (và từng ô bảng) thành text, mỗi tab một file. Không đọc được thì nhờ người dùng chia sẻ Doc hoặc dán nội dung tab.

## 2. Doc thô → `src/imports/stories/<id>.md`

Doc thô có hai kiểu lỗi định dạng: Hán–Pinyin–Việt dính liền một dòng, và đôi khi câu bị chèn lẫn. Tách ra theo quy ước:

```md
# BÀI 2 — Phần 1: 早上六点的秘密
**Bí mật lúc sáu giờ sáng**

**Nhân vật:** 你 (người chơi) — …; 小雨 — …

## NODE 01 — HOOK (23:47)

*Bối cảnh:* Bạn vừa đến nơi thì thấy 小雨 đang đứng trước cửa.

**小雨：** 你还没睡？
*Pinyin:* Nǐ hái méi shuì?
*Nghĩa:* Cậu vẫn chưa ngủ à?

### LỰA CHỌN 1
**A.** 好，我六点去。
*Pinyin:* Hǎo, wǒ liù diǎn qù.
*Nghĩa:* Được, 6 giờ tớ sẽ đến. → **NODE 02A**

## ENDING A — “6:00 AM”
```

- Giữ nguyên văn câu Hán, pinyin, nghĩa của tác giả. Chỉ sửa lỗi dính dòng/chèn chữ.
- Mỗi cảnh là một `## NODE <id>` (`01`, `02A`, `03B1`, `END_A`…), id dùng luôn cho `.ts`. Lời dẫn tiếng Việt viết `*Bối cảnh:*`; lời dẫn có chữ Hán viết như câu thoại của `**旁白：**`.
- Chỗ Doc thiếu ghi `> ⚠️ Doc thiếu: …`, không tự bịa vào `.md`.
- Đối chiếu lại: mọi câu Hán trong tab phải có trong `.md`.

## 3. `.md` sạch → `src/app/data/stories/<id>.ts`

Kiểu `BranchingStory` trong `src/app/types.ts`. Mẫu đầy đủ: `src/app/data/stories/cuoc-goi-bi-an.ts`. Hướng dẫn chi tiết: `guides/huong-dan-them-cot-truyen-chi-tiet.md` (mục 5 và 12) nếu có.

- Đầu file: comment tên truyện, số kết thúc, vai người chơi, đường dẫn `.md` gốc, rồi liệt kê mọi chỗ chỉnh so với bản gốc.
- Mỗi câu của nhân vật người chơi (thường là "你") là một bước `pick`: đúng 3 đáp án, đúng 1 `correct: true` (câu gốc). Hai câu sai phải sai thật (sai trật tự, thừa/thiếu 吗, sai lượng từ, sai từ, sai ngữ cảnh), có giải thích; kiểm tra để câu "sai" không vô tình đúng ngữ pháp. Đổi vị trí câu đúng giữa A/B/C. `vi` của câu sai phản ánh cái sai.
- Câu rất ngắn không có chữ Hán (“……”, “啊？”) của người chơi dùng `{ kind: "player" }`.
- Lời dẫn tiếng Việt → `narration`; có chữ Hán/tin nhắn → `quote` (kèm py, vi); nhân vật nói → `npc` (speaker phải có trong `characters`).
- `choices` (rẽ nhánh) không có đúng/sai; mỗi lựa chọn có `label`, `analysis` mẫu câu và 1–3 `vocab`.
- `vocab` của truyện: 10–15 từ, `ex` lấy nguyên câu có trong truyện (thành flashcard), ưu tiên từ HSK của bài.
- Pinyin có dấu thanh, biến điệu như khi đọc (`yí ge`, `bú yào`), dấu câu Hán toàn khổ `，。？！“”`.

## 4. Đăng ký

1. `src/app/data/stories/index.ts`: import và thêm `"<id>": { kind: "branching", story: X, vocab: X.vocab }`.
2. `src/app/data/library.ts`: thêm `StoryEntry` vào cấp HSK đúng, đủ `summary`, `hero`, `character`, `minutes`, `quote`; màu `#rrggbb` chưa dùng; không `premium`.
3. `src/app/data/bloom.ts`: `BLOOM_SETS["<id>"]` đúng 4 bài nhớ / hiểu / dùng / viết, 4 từ khác nhau, lấy từ và câu trong truyện. Bài "hiểu" có đúng một câu dùng đúng, ba câu sai rõ ràng.
4. `src/app/data/lessons.ts`: thêm tên ngắn vào `CHIP` nếu tên truyện dài.

## 5. Kiểm tra

- `node scripts/check-stories.mjs` phải "Không có lỗi"; đọc cả cảnh báo. Cần `npm i` trước nếu thiếu esbuild.
- `npm run build`.
- Nếu được, chơi thử trên cả layout mobile và desktop.

## 6. Cập nhật sổ theo dõi

Mở `src/imports/stories/STORY-REGISTRY.md`, tìm dòng theo Bài và tên tab Doc, cập nhật cột trạng thái (`Đã code, chờ merge` sau bước 5). Truyện mới ngoài bảng thì thêm một dòng cuối bảng.

## 7. Báo cáo và quy tắc dự án

Báo cáo cho người dùng bằng bảng theo tên truyện (Bài | Tên trong Doc | Tên trong app | Trạng thái), không dùng mã. Hỏi trước khi xoá/đổi tên file, thêm dependency, sửa `vite.config.ts`/`package.json`, `git commit`/`push`. Làm trên nhánh riêng và mở PR hoặc theo chỉ định của người dùng. Thêm truyện chỉ là thêm dữ liệu: không sửa `ChatStoryEngine`/`BranchingStoryEngine`/`LibraryScreen`.
