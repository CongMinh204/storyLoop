# StoryLoop

StoryLoop là ứng dụng học tiếng Trung (HSK1) qua hội thoại nhập vai theo truyện, kèm ôn tập theo các giai đoạn, flashcard và theo dõi tiến độ. Đây là dự án nhóm môn EXE201.

**Stack chính:** React 18, TypeScript, Vite 6, Tailwind CSS v4, shadcn/ui (Radix).

## Yêu cầu cài đặt trước

- **Node.js bản LTS**: tối thiểu 18 (yêu cầu của Vite 6), khuyên dùng 20 trở lên. Tải tại [nodejs.org](https://nodejs.org), chọn **Windows Installer (.msi)**.
- **npm**: đi kèm Node.js, không cần cài riêng.
- **Git**: tải tại [git-scm.com](https://git-scm.com).

Kiểm tra đã cài đúng:

```bash
node -v
npm -v
git --version
```

## Chạy dự án

1. Clone dự án:

```bash
git clone https://github.com/CongMinh204/storyLoop.git
cd storyLoop
```

2. Cài thư viện (dự án dùng **npm**, không dùng pnpm hay yarn):

```bash
npm install
```

3. Chạy chế độ phát triển, rồi mở http://localhost:5173:

```bash
npm run dev
```

4. Kiểm tra bản build (tùy chọn):

```bash
npm run build
npm run preview
```

## Lỗi thường gặp trên Windows

**PowerShell báo "running scripts is disabled on this system" khi chạy npm.** Chạy lệnh sau rồi gõ `Y`:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Báo "not recognized" (node, npm) ngay sau khi cài Node.js.** Tắt hẳn VS Code và terminal rồi mở lại để nhận PATH mới.

**Cổng 5173 đang bị chiếm.** Đổi cổng khi chạy, hoặc tắt tiến trình đang dùng cổng đó:

```bash
npm run dev -- --port 3000
```

**`npm install` bị lỗi.** Xóa `node_modules` và `package-lock.json` rồi cài lại:

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

Sau đó đừng commit `package-lock.json` mới nếu chưa báo nhóm.

## Cấu trúc thư mục chính

```
storyLoop/
├── index.html              Trang HTML gốc
├── package.json            Thư viện và các lệnh
├── vite.config.ts          Cấu hình Vite (React, Tailwind, alias @ = src)
└── src/
    ├── main.tsx            Điểm khởi động
    ├── app/
    │   ├── App.tsx         Gần như toàn bộ ứng dụng (màn hình, dữ liệu mẫu)
    │   └── components/
    │       ├── ProgressScreen.tsx   Màn hình tiến độ
    │       └── ui/                  Component shadcn/ui
    ├── styles/             CSS: font, Tailwind, theme
    └── imports/            Tài liệu tham khảo từ Figma, app không dùng
```

## Quy ước làm việc nhóm

- Không commit thư mục `node_modules` (đã có trong `.gitignore`).
- Commit theo từng thay đổi nhỏ, message rõ ràng.
- Chạy `git pull` trước khi `git push`.
- Tính năng mới nên tạo file riêng trong `src/app/components/` thay vì viết thêm vào `App.tsx`.
