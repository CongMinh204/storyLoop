# storyLoop server

Backend Node + Express + TypeScript + Postgres. Frontend vẫn ở GitHub Pages, hai bên nối nhau qua `VITE_API_URL`.

## Chạy local

```powershell
# 1. Postgres
docker run --name storyloop-db -e POSTGRES_PASSWORD=pw -p 5432:5432 -d postgres:16

# 2. Server
cd server
copy .env.example .env      # điền JWT_SECRET, sửa DATABASE_URL nếu cần
npm i
npm run dev
```

Server tự đọc `server/.env` và tự chạy các file trong `migrations/` khi khởi động. Kiểm tra:

```powershell
curl http://localhost:3000/api/health   # {"ok":true,"db":true}
```

## Biến môi trường

| Biến | Ý nghĩa |
| --- | --- |
| `DATABASE_URL` | Chuỗi kết nối Postgres (bắt buộc) |
| `JWT_SECRET` | Khoá ký access token, ít nhất 32 ký tự ngẫu nhiên (bắt buộc) |
| `PORT` | Cổng server, mặc định 3000 (Railway tự đặt) |
| `CORS_ORIGIN` | Origin frontend được phép, ngăn cách bằng dấu phẩy. Bản deploy: `https://congminh204.github.io` |
| `NODE_ENV` | `development` hoặc `production` (production bật SSL cho DB từ xa) |
| `ALLOW_SIGNUP` | `false` thì tắt đăng ký mới, kể cả tạo tài khoản mới qua Google. Mặc định bật |
| `GOOGLE_CLIENT_ID` | OAuth Client ID của Google. Để trống thì tắt đăng nhập Google |

## Scripts

- `npm run dev`: chạy với tsx watch.
- `npm run build`: biên dịch ra `dist/`.
- `npm start`: chạy bản build.
- `npm run seed:testers -- 20`: tạo 20 tài khoản `testerNN@storyloop.test` (số nối tiếp các tester đã có) với mật khẩu ngẫu nhiên, in ra và ghi file `testers-<thời gian>.csv`. File CSV chứa mật khẩu nên đã nằm trong `.gitignore`. Muốn tạo trên DB Railway thì đặt `DATABASE_URL` trong `.env` bằng `DATABASE_PUBLIC_URL` của Railway rồi chạy ở máy mình.

## API

Lỗi trả dạng `{ "error": "câu báo lỗi", "fields": { "email": "..." } }` (`fields` chỉ có khi lỗi ở từng ô).

| Method | Đường dẫn | Body | Ghi chú |
| --- | --- | --- | --- |
| GET | `/api/health` | | Healthcheck, kiểm tra cả DB |
| POST | `/api/auth/register` | `fullName, email, password, confirmPassword` | 409 nếu email đã có. Tắt bằng `ALLOW_SIGNUP=false` |
| POST | `/api/auth/login` | `email, password` | Sai quá 10 lần / 15 phút cho cùng IP + email thì tạm khoá email đó; một IP sai quá 100 lần (mọi email) cũng bị khoá |
| POST | `/api/auth/google` | `idToken` | ID token từ Google Identity Services. Email đã đăng ký bằng mật khẩu thì không gắn Google, trả 409 |
| POST | `/api/auth/refresh` | `refreshToken` | Trả cặp token mới; refresh token cũ hết dùng được |
| POST | `/api/auth/logout` | `refreshToken` | Huỷ phiên |
| GET | `/api/me` | | Cần đăng nhập. Thông tin, `xp`, `streak`, `bestStreak` (chuỗi dài nhất từng có) |
| GET | `/api/me/activity` | | Cần đăng nhập. `{ today, since, days: [{ day, xp, correct, completed }] }`: từng ngày có hoạt động trong 6 tháng gần nhất (giờ Việt Nam). `correct` = số câu chọn đúng lần đầu, `completed` = số truyện hoàn thành lần đầu |
| PATCH | `/api/me` | `fullName` và/hoặc `currentPassword, newPassword, confirmPassword` | Đổi mật khẩu thì đăng xuất các máy khác. Sai mật khẩu hiện tại quá 10 lần / 15 phút thì tạm khoá |
| GET | `/api/progress` | | Cần đăng nhập. `{ progress: { "<storyId>": { status, pct, lastPlayed, endings?, bestScore? } } }`, cùng dạng localStorage |
| PUT | `/api/progress/:storyId` | `pct?`, `step?: { key, correct }`, `complete?: { ending?, score?: { right, total } }` | Cần đăng nhập. Cập nhật tiến độ, cộng XP. Trả `{ progress, xpGained, xp, streak, bestStreak }` |
| POST | `/api/progress/import` | `progress` (object như localStorage) | Cần đăng nhập. Gộp tiến độ lúc chơi khách lên tài khoản, mục không hợp lệ bị bỏ qua |
| GET | `/api/admin/users?q=&limit=&offset=` | | Chỉ admin. Danh sách người dùng kèm XP, streak, số truyện đã chơi/hoàn thành |
| POST | `/api/admin/users/bulk` | `count` (1–200) | Chỉ admin. Tạo tài khoản dùng thử, trả email + mật khẩu (chỉ hiện một lần) |

Đăng nhập, đăng ký và Google trả `{ accessToken, refreshToken, user }`. Access token sống 15 phút, gửi qua header `Authorization: Bearer <token>`; refresh token sống 30 ngày.

Luật họ tên, email, mật khẩu nằm ở `src/shared/validation.ts`, viết bằng TS thuần để form ở frontend import dùng chung.

Muốn cấp quyền admin cho một tài khoản: `UPDATE users SET role = 'admin' WHERE email = '...';` rồi đăng nhập lại (quyền nằm trong access token, token cũ còn hiệu lực tối đa 15 phút).

## Tiến độ và XP

- Luật gộp tiến độ giống `src/app/lib/progress.ts` của frontend: `pct` chỉ tăng, đã hoàn thành thì giữ, gộp các kết thúc đã mở, giữ điểm tốt nhất theo tỉ lệ đúng.
- 10 XP mỗi bước đúng. Mỗi `step.key` của mỗi truyện chỉ cộng một lần (ghi ở bảng `xp_claims`); chọn sai không chiếm mốc nên làm lại đúng vẫn được cộng. Khoá bước: truyện quiz `t<id lượt>`, truyện rẽ nhánh `<id cảnh>#<số thứ tự câu>`.
- 50 XP khi hoàn thành truyện lần đầu. Tối đa 500 XP mỗi ngày theo giờ Việt Nam.
- Mỗi lần `PUT` đánh dấu hôm đó có hoạt động, kể cả khi được 0 XP. Streak là số ngày liên tiếp có hoạt động; hôm nay chưa chơi mà hôm qua có thì chuỗi vẫn còn.
- Import không cộng XP và không tính là hoạt động trong ngày (localStorage không có từng bước và ngày chơi). Truyện đã hoàn thành qua import thì chơi lại không nhận thêm 50 XP.
- Server không kiểm chứng được câu trả lời (nội dung truyện nằm ở frontend), nên XP chỉ được chặn gian lận bằng mốc một lần và trần ngày.

## Railway

Root Directory = `server`, thêm PostgreSQL, đặt `DATABASE_URL`, `JWT_SECRET`, `CORS_ORIGIN`, `ALLOW_SIGNUP`, `GOOGLE_CLIENT_ID`. Build `npm run build`, Start `npm start`, Healthcheck `/api/health`.

## Migration

Thêm file SQL mới vào `migrations/` với tên tăng dần (`002_*.sql`). File đã chạy được ghi vào bảng `schema_migrations` nên không chạy lại.
