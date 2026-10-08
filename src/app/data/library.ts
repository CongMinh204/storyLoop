import type { StoryEntry } from "../types";

export const STORY_LIBRARY: Record<number, StoryEntry[]> = {
  1: [
    { id: "ngoc-hoang",       title: "Thử thách của Ngọc Hoàng", hsk: 1, lv: "Beginner",    color: "#6c3fc5", emoji: "🏯", tags: ["Thần thoại","Phiêu lưu","Thiên đình"], chapters: 5, progress: 1,
      summary: "Nhập vai hội thoại với các nhân vật trong Thiên Đình để học tiếng Trung HSK1." },
    { id: "bac-kinh-xua",     title: "Một Đêm Ở Bắc Kinh Xưa",  hsk: 1, lv: "Beginner",    color: "#e0417f", emoji: "🌸", tags: ["Lịch sử","Gia đình","Đêm khuya"],       chapters: 4 },
    { id: "le-hoi-rong",      title: "Lễ Hội Rồng",              hsk: 1, lv: "Beginner",    color: "#f97316", emoji: "🐉", tags: ["Lễ hội","Văn hóa","Mùa hè"],            chapters: 3 },
    { id: "hoa-anh-dao",      title: "Thư Gửi Từ Hoa Anh Đào",  hsk: 1, lv: "Beginner",    color: "#1a8fa0", emoji: "🌊", tags: ["Tình bạn","Thư từ","Nhật Bản"],          chapters: 4 },
    { id: "to-lua",           title: "Thương Nhân Tơ Lụa",      hsk: 1, lv: "Beginner",    color: "#16a34a", emoji: "🎋", tags: ["Kinh doanh","Con đường tơ lụa"],         chapters: 6, premium: true },
  ],
  2: [
    { id: "thay-tuong",       title: "Bí Mật Của Thầy Tướng",   hsk: 2, lv: "Elementary",  color: "#0891b2", emoji: "🔮", tags: ["Bí ẩn","Dự đoán","Thành phố"],          chapters: 5 },
    { id: "thuong-hai",       title: "Người Bạn Từ Thượng Hải", hsk: 2, lv: "Elementary",  color: "#7c3aed", emoji: "🏙️", tags: ["Bạn bè","Hiện đại","Du học"],           chapters: 6 },
    { id: "cho-dem-thanh-do", title: "Chợ Đêm Thành Đô",        hsk: 2, lv: "Elementary",  color: "#b45309", emoji: "🏮", tags: ["Ẩm thực","Chợ đêm","Tứ Xuyên"],         chapters: 4 },
  ],
  3: [
    { id: "tham-tu",          title: "Thám Tử Trên Đường Phố",  hsk: 3, lv: "Intermediate",color: "#1d4ed8", emoji: "🕵️", tags: ["Trinh thám","Logic","Đô thị"],          chapters: 8 },
    { id: "mua-xuan-mei",     title: "Mùa Xuân Của Mei",        hsk: 3, lv: "Intermediate",color: "#be185d", emoji: "🌿", tags: ["Tình cảm","Nông thôn","Gia đình"],       chapters: 6 },
    { id: "vo-thuat",         title: "Cuộc Thi Võ Thuật",       hsk: 3, lv: "Intermediate",color: "#b91c1c", emoji: "🥋", tags: ["Võ thuật","Thi đấu","Truyền thống"],     chapters: 7, premium: true },
  ],
  4: [
    { id: "nha-tho-trieu-duong", title: "Nhà Thơ Của Triều Đường", hsk: 4, lv: "Upper-Int.",  color: "#92400e", emoji: "📜", tags: ["Thơ cổ","Lịch sử","Triều Đường"],        chapters: 6 },
    { id: "startup-bac-kinh", title: "Startup Ở Bắc Kinh",      hsk: 4, lv: "Upper-Int.",  color: "#065f46", emoji: "💼", tags: ["Kinh doanh","Công nghệ","Hiện đại"],      chapters: 8, premium: true },
  ],
  5: [
    { id: "tra-dao",          title: "Triết Học Từ Trà Đạo",    hsk: 5, lv: "Advanced",    color: "#1e3a5f", emoji: "🍵", tags: ["Triết học","Trà đạo","Thiền"],            chapters: 5, premium: true },
    { id: "khong-tu",         title: "Hậu Duệ Khổng Tử",       hsk: 5, lv: "Advanced",    color: "#4a1942", emoji: "🏛️", tags: ["Nho giáo","Lịch sử","Triết học"],        chapters: 7, premium: true },
  ],
  6: [
    { id: "lao-tu",           title: "Lão Tử Và Đạo Đức Kinh",  hsk: 6, lv: "Mastery",    color: "#0f172a", emoji: "☯️", tags: ["Đạo giáo","Triết học cổ đại","Kinh điển"],chapters: 6, premium: true },
  ],
};
export const LIBRARY = STORY_LIBRARY[1];

// Truyện mở mặc định: nút "Tiếp tục chơi" và tab "Câu chuyện" khi chưa chọn truyện nào
export const DEFAULT_STORY = STORY_LIBRARY[1][0];
