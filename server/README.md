# storyLoop server

Backend Node + Express + TypeScript + Postgres. Frontend vẫn ở GitHub Pages, hai bên nối nhau qua `VITE_API_URL`.

## Chạy local

```powershell
# 1. Postgres
docker run --name storyloop-db -e POSTGRES_PASSWORD=pw -p 5432:5432 -d postgres:16

# 2. Server
cd server
copy .env.example .env      # sửa DATABASE_URL nếu cần
npm i
npm run dev
```

Khi khởi động server tự chạy các file trong `migrations/`. Kiểm tra:

```powershell
curl http://localhost:3000/api/health   # {"ok":true,"db":true}
```

## Biến môi trường

| Biến | Ý nghĩa |
| --- | --- |
| `DATABASE_URL` | Chuỗi kết nối Postgres (bắt buộc) |
| `PORT` | Cổng server, mặc định 3000 (Railway tự đặt) |
| `CORS_ORIGIN` | Origin frontend được phép, ngăn cách bằng dấu phẩy. Bản deploy: `https://congminh204.github.io` |
| `NODE_ENV` | `development` hoặc `production` (production bật SSL cho DB từ xa) |

## Scripts

- `npm run dev`: chạy với tsx watch.
- `npm run build`: biên dịch ra `dist/`.
- `npm start`: chạy bản build.

## Railway

Root Directory = `server`, thêm PostgreSQL, đặt `DATABASE_URL` và `CORS_ORIGIN`. Build `npm run build`, Start `npm start`, Healthcheck `/api/health`.

## Migration

Thêm file SQL mới vào `migrations/` với tên tăng dần (`002_*.sql`). File đã chạy được ghi vào bảng `schema_migrations` nên không chạy lại.
