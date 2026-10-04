import type { StoryEntry } from "../types";

export const STORY_LIBRARY: Record<number, StoryEntry[]> = {
  1: [
    { title: "Thử thách của Ngọc Hoàng", hsk: 1, lv: "Beginner",    color: "#6c3fc5", emoji: "🏯", tags: ["Thần thoại","Phiêu lưu","Thiên đình"], chapters: 5, progress: 1 },
    { title: "Một Đêm Ở Bắc Kinh Xưa",  hsk: 1, lv: "Beginner",    color: "#e0417f", emoji: "🌸", tags: ["Lịch sử","Gia đình","Đêm khuya"],       chapters: 4 },
    { title: "Lễ Hội Rồng",              hsk: 1, lv: "Beginner",    color: "#f97316", emoji: "🐉", tags: ["Lễ hội","Văn hóa","Mùa hè"],            chapters: 3 },
    { title: "Thư Gửi Từ Hoa Anh Đào",  hsk: 1, lv: "Beginner",    color: "#1a8fa0", emoji: "🌊", tags: ["Tình bạn","Thư từ","Nhật Bản"],          chapters: 4 },
    { title: "Thương Nhân Tơ Lụa",      hsk: 1, lv: "Beginner",    color: "#16a34a", emoji: "🎋", tags: ["Kinh doanh","Con đường tơ lụa"],         chapters: 6, premium: true },
  ],
  2: [
    { title: "Bí Mật Của Thầy Tướng",   hsk: 2, lv: "Elementary",  color: "#0891b2", emoji: "🔮", tags: ["Bí ẩn","Dự đoán","Thành phố"],          chapters: 5 },
    { title: "Người Bạn Từ Thượng Hải", hsk: 2, lv: "Elementary",  color: "#7c3aed", emoji: "🏙️", tags: ["Bạn bè","Hiện đại","Du học"],           chapters: 6 },
    { title: "Chợ Đêm Thành Đô",        hsk: 2, lv: "Elementary",  color: "#b45309", emoji: "🏮", tags: ["Ẩm thực","Chợ đêm","Tứ Xuyên"],         chapters: 4 },
  ],
  3: [
    { title: "Thám Tử Trên Đường Phố",  hsk: 3, lv: "Intermediate",color: "#1d4ed8", emoji: "🕵️", tags: ["Trinh thám","Logic","Đô thị"],          chapters: 8 },
    { title: "Mùa Xuân Của Mei",        hsk: 3, lv: "Intermediate",color: "#be185d", emoji: "🌿", tags: ["Tình cảm","Nông thôn","Gia đình"],       chapters: 6 },
    { title: "Cuộc Thi Võ Thuật",       hsk: 3, lv: "Intermediate",color: "#b91c1c", emoji: "🥋", tags: ["Võ thuật","Thi đấu","Truyền thống"],     chapters: 7, premium: true },
  ],
  4: [
    { title: "Nhà Thơ Của Triều Đường", hsk: 4, lv: "Upper-Int.",  color: "#92400e", emoji: "📜", tags: ["Thơ cổ","Lịch sử","Triều Đường"],        chapters: 6 },
    { title: "Startup Ở Bắc Kinh",      hsk: 4, lv: "Upper-Int.",  color: "#065f46", emoji: "💼", tags: ["Kinh doanh","Công nghệ","Hiện đại"],      chapters: 8, premium: true },
  ],
  5: [
    { title: "Triết Học Từ Trà Đạo",    hsk: 5, lv: "Advanced",    color: "#1e3a5f", emoji: "🍵", tags: ["Triết học","Trà đạo","Thiền"],            chapters: 5, premium: true },
    { title: "Hậu Duệ Khổng Tử",       hsk: 5, lv: "Advanced",    color: "#4a1942", emoji: "🏛️", tags: ["Nho giáo","Lịch sử","Triết học"],        chapters: 7, premium: true },
  ],
  6: [
    { title: "Lão Tử Và Đạo Đức Kinh",  hsk: 6, lv: "Mastery",    color: "#0f172a", emoji: "☯️", tags: ["Đạo giáo","Triết học cổ đại","Kinh điển"],chapters: 6, premium: true },
  ],
};
export const LIBRARY = STORY_LIBRARY[1];
