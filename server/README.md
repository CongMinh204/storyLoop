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
| GET | `/api/me` | | Cần đăng nhập. Thông tin, `xp`, `streak` |
| PATCH | `/api/me` | `fullName` và/hoặc `currentPassword, newPassword, confirmPassword` | Đổi mật khẩu thì đăng xuất các máy khác. Sai mật khẩu hiện tại quá 10 lần / 15 phút thì tạm khoá |

Đăng nhập, đăng ký và Google trả `{ accessToken, refreshToken, user }`. Access token sống 15 phút, gửi qua header `Authorization: Bearer <token>`; refresh token sống 30 ngày.

Luật họ tên, email, mật khẩu nằm ở `src/shared/validation.ts`, viết bằng TS thuần để form ở frontend import dùng chung.

Muốn cấp quyền admin cho một tài khoản: `UPDATE users SET role = 'admin' WHERE email = '...';`

## Railway

Root Directory = `server`, thêm PostgreSQL, đặt `DATABASE_URL`, `JWT_SECRET`, `CORS_ORIGIN`, `ALLOW_SIGNUP`, `GOOGLE_CLIENT_ID`. Build `npm run build`, Start `npm start`, Healthcheck `/api/health`.

## Migration

Thêm file SQL mới vào `migrations/` với tên tăng dần (`002_*.sql`). File đã chạy được ghi vào bảng `schema_migrations` nên không chạy lại.
