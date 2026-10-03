# StoryLoop — Kiến trúc & Techstack tối ưu (đơn giản + chi phí thấp)

## Context
StoryLoop hiện là prototype React + Tailwind v4 thuần frontend: toàn bộ nằm trong `src/app/App.tsx` (~1.800 dòng) + `src/app/components/ProgressScreen.tsx`. Chat roleplay ("Thử thách của Ngọc Hoàng") và flashcard HSK1 đều **hardcoded/scripted**, không backend, không persistence — reload là mất hết (điểm, streak, thẻ đã thuộc, tiến trình). ProgressScreen dùng data giả (`WEEKLY_DATA`, `SKILL_RADAR`...). File nguồn `chinese-vocab-list.md` tồn tại nhưng chưa được import (data đã chép tay vào code).

Người dùng đã chốt 2 hướng:
- **Chat = Hybrid**: giữ scripted bây giờ, kiến trúc sẵn sàng nâng cấp AI động sau.
- **Persistence = Supabase**: cần tài khoản đăng nhập + đồng bộ tiến trình đa thiết bị.

Mục tiêu: chọn architecture/techstack tối ưu **sự đơn giản** và **chi phí**.

## Khuyến nghị tổng quát
Giữ đúng stack hiện tại (React 18 + Vite + Tailwind v4) — không thêm framework nặng. Chỉ bổ sung **một backend duy nhất là Supabase** (miễn phí ở free tier: auth + Postgres + row-level security), và tách logic ra khỏi file monolith. Chi phí vận hành gần như $0 cho tới khi có nhiều người dùng thật.

### Vì sao đủ, không cần hơn
- Không cần server Node riêng, Docker, hay hạ tầng tự quản → Supabase lo auth + DB + API.
- Không cần Redux/Zustand → dữ liệu ít, dùng React Context + Supabase client là đủ.
- Không cần LLM ngay → giữ scripted, tiết kiệm 100% phí AI. Chỉ đặt sẵn ranh giới (interface) để cắm AI sau.

## Techstack chốt
| Lớp | Công cụ | Ghi chú |
|-----|---------|---------|
| UI | React 18 + Tailwind v4 (đang có) | Không đổi |
| Build | Vite (đang có) | Không đổi |
| Routing | Giữ `useState<Screen>` như hiện tại | Không cần react-router; nếu muốn deep-link mới thêm sau |
| Auth + DB + đồng bộ | **Supabase** (`@supabase/supabase-js`) | Free tier: 50k MAU auth, 500MB Postgres |
| State toàn cục | **React Context** (`AuthContext`, `ProgressContext`) | Nhẹ, không thêm lib |
| Chat engine | Interface `StoryProvider` (scripted impl bây giờ) | Sẵn sàng thay bằng AI impl sau |
| AI (tương lai) | Supabase Edge Function proxy tới LLM | Giấu API key, bật khi cần |

## Kiến trúc đề xuất

### 1. Tách data ra khỏi code (đơn giản hóa, dùng lại nguồn có sẵn)
- Tạo `src/app/data/hsk1-cards.ts` (chuyển `HSK1_CARDS` + `HSK1_TOPICS` ra đây) và `src/app/data/story-jade-emperor.ts` (chuyển `STORY_TURNS` ra đây).
- Mục tiêu: App.tsx mỏng lại, data tái sử dụng được cho cả flashcard, BLOOM và (sau này) seed lên Supabase.

### 2. Lớp Supabase (`src/app/lib/`)
- `src/app/lib/supabase.ts`: khởi tạo client từ `import.meta.env.VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`.
- Schema Postgres tối thiểu (dùng RLS, mỗi user chỉ đọc/ghi dữ liệu của mình):
  - `profiles` (id ↔ auth.user, tên, avatar, gói free/pro).
  - `progress` (user_id, xp, streak, ngày học gần nhất, tổng từ đã thuộc) — thay data giả trong ProgressScreen.
  - `card_status` (user_id, card_id, trạng thái known/learning) — thay `known-set` local.
  - `story_runs` (user_id, story_id, điểm, số lượt đúng, hoàn thành lúc nào) — lưu kết quả roleplay.
- Auth: dùng Supabase Auth (email/password hoặc magic link — magic link đơn giản, không cần quản lý mật khẩu). Thay các modal đổi mật khẩu/upgrade hiện chỉ là UI.

### 3. State toàn cục bằng Context
- `AuthContext`: session, user, đăng nhập/đăng xuất.
- `ProgressContext`: đọc/ghi `progress` + `card_status`, cache tại client, ghi lên Supabase khi thay đổi (optimistic update).
- Bọc `<App/>` bằng 2 provider này ở root.

### 4. Chat engine kiểu Hybrid (sẵn sàng AI)
- Định nghĩa interface trong `src/app/lib/story-provider.ts`:
  ```ts
  interface StoryProvider {
    getTurn(state): Promise<ChatTurn>;   // scripted trả từ mảng; AI sau này gọi Edge Function
    scoreChoice(turn, choiceId): { correct: boolean; reply: string };
  }
  ```
- Impl hiện tại: `ScriptedStoryProvider` đọc từ `story-jade-emperor.ts` (giữ nguyên hành vi hiện có).
- `ChatStoryEngine` chỉ phụ thuộc interface → sau này thêm `AiStoryProvider` (gọi Supabase Edge Function → LLM) mà không sửa UI. Đây là phần "sẵn sàng nâng cấp AI".

### 5. Chi phí & vận hành
- Bây giờ: Supabase free tier → **~$0/tháng**.
- Khi bật AI: chỉ trả phí token LLM, gọi qua Edge Function để không lộ key và có thể giới hạn số lượt/user (kiểm soát chi phí).

## Các file sẽ tạo/sửa
- Sửa: `src/app/App.tsx` (bọc provider, thay local state bằng context ở các điểm điểm/streak/known-set; import data từ file mới).
- Sửa: `src/app/components/ProgressScreen.tsx` (nhận data thật từ `ProgressContext` thay mock).
- Tạo: `src/app/data/hsk1-cards.ts`, `src/app/data/story-jade-emperor.ts`.
- Tạo: `src/app/lib/supabase.ts`, `src/app/lib/story-provider.ts`.
- Tạo: `src/app/context/AuthContext.tsx`, `src/app/context/ProgressContext.tsx`.
- Tạo: màn/nút đăng nhập (magic link) trong flow hiện có.

## Thứ tự triển khai
1. Chạy skill `make:supabase` để kết nối dự án Supabase và lấy env keys (bắt buộc trước khi code phần backend).
2. Tách data ra `src/app/data/` (refactor thuần, không đổi hành vi).
3. Thêm `supabase.ts` + `AuthContext` + màn đăng nhập magic link.
4. Tạo bảng + RLS; thêm `ProgressContext`; nối điểm/streak/known-set/story_runs vào Supabase.
5. Thay mock data trong ProgressScreen bằng data thật.
6. Refactor `ChatStoryEngine` sang interface `StoryProvider` (impl scripted) — chốt phần Hybrid.

## Verification
- Đăng nhập bằng magic link → tạo được session, `profiles` có bản ghi.
- Học vài flashcard, đánh dấu "đã thuộc" → reload trang / mở thiết bị khác cùng tài khoản → trạng thái vẫn còn (đồng bộ qua Supabase).
- Hoàn thành story "Thử thách của Ngọc Hoàng" → có bản ghi trong `story_runs`, điểm/streak cập nhật ở ProgressScreen (data thật, không phải mock).
- Kiểm RLS: user A không đọc được dữ liệu user B.
- App vẫn responsive ở mobile 375×812 và desktop 1440×900 như trước.
