import type { StoryEntry } from "../types";

export const STORY_LIBRARY: Record<number, StoryEntry[]> = {
  1: [
    { id: "ngoc-hoang",       title: "Thử thách của Ngọc Hoàng", hsk: 1, lv: "Beginner",    color: "#6c3fc5", emoji: "🏯", tags: ["Thần thoại","Phiêu lưu","Thiên đình"], chapters: 5,
      summary: "Nhập vai hội thoại với các nhân vật trong Thiên Đình để học tiếng Trung HSK1.",
      hero: "của Wei Lin", character: "Wei Lin", minutes: 12, quote: "Hoàng đế cần người tìm viên ngọc đã mất — con đường phía trước đầy hiểm nguy..." },
    { id: "bac-kinh-xua",     title: "Một Đêm Ở Bắc Kinh Xưa",  hsk: 1, lv: "Beginner",    color: "#e0417f", emoji: "🌸", tags: ["Lịch sử","Gia đình","Đêm khuya"],       chapters: 4 },
    { id: "le-hoi-rong",      title: "Lễ Hội Rồng",              hsk: 1, lv: "Beginner",    color: "#f97316", emoji: "🐉", tags: ["Lễ hội","Văn hóa","Mùa hè"],            chapters: 3 },
    { id: "hoa-anh-dao",      title: "Thư Gửi Từ Hoa Anh Đào",  hsk: 1, lv: "Beginner",    color: "#1a8fa0", emoji: "🌊", tags: ["Tình bạn","Thư từ","Nhật Bản"],          chapters: 4 },
    { id: "to-lua",           title: "Thương Nhân Tơ Lụa",      hsk: 1, lv: "Beginner",    color: "#16a34a", emoji: "🎋", tags: ["Kinh doanh","Con đường tơ lụa"],         chapters: 6, premium: true },
  ],
  2: [
    { id: "meo-hoa-hoa",      title: "Chú Mèo Hoa Hoa",         hsk: 2, lv: "Elementary",  color: "#ca8a04", emoji: "🐱", tags: ["Hài hước","Thú cưng","Du lịch"],        chapters: 1,
      summary: "小美 rủ bạn đi du lịch cùng một “người bạn mới” bí ẩn. Mỗi lựa chọn dẫn tới một nhánh khác, với 3 kết thúc.",
      hero: "cùng Hoa Hoa", character: "小美 và 花花", minutes: 15, quote: "Chúng mình cùng đi du lịch nhé! Có một người bạn mới sẽ đi cùng..." },
    { id: "meo-hoa-hoa-2",    title: "Chú Mèo Hoa Hoa 2",       hsk: 2, lv: "Elementary",  color: "#db2777", emoji: "🐾", tags: ["Bí ẩn","Thú cưng","Du lịch"],          chapters: 1,
      summary: "Hoa Hoa biến mất giữa chuyến du lịch, rồi một tin nhắn bí ẩn hẹn bạn ra công viên. Bạn vào vai 林娜: mỗi lựa chọn dẫn tới một nhánh khác, với 3 kết thúc.",
      hero: "tìm Hoa Hoa", character: "林娜 và 小雨", minutes: 15, quote: "Tôi tìm thấy Hoa Hoa rồi. Sáu giờ sáng mai, hãy đến công viên một mình..." },
    { id: "tron-hoc",         title: "Trốn Học",                hsk: 2, lv: "Elementary",  color: "#4f46e5", emoji: "🎒", tags: ["Tình bạn","Bí ẩn","Học đường"],         chapters: 1,
      summary: "小林 nghỉ học và nói mình bị ốm, nhưng một bức ảnh lại cho thấy cậu ấy đang chạy bộ ở công viên. Bạn vào vai 小王 đi tìm sự thật: mỗi lựa chọn dẫn tới một nhánh khác, với 2 kết thúc.",
      hero: "tìm Tiểu Lâm", character: "小王 và 小林", minutes: 12, quote: "Tớ bị ốm rồi, hôm nay không thể đến được..." },
    { id: "sinh-nhat",        title: "Tiệc Sinh Nhật",          hsk: 2, lv: "Elementary",  color: "#f43f5e", emoji: "🎂", tags: ["Tình bạn","Sinh nhật","Làm quen"],      chapters: 1,
      summary: "Hôm nay là sinh nhật 小丽, nhưng 小王 bất ngờ nhờ bạn giúp hai người bạn mới chưa quen ai. Bạn vào vai 小美: đợi họ, bắt đầu tiệc trước hay dẫn họ đi làm quen? Mỗi lựa chọn dẫn tới một nhánh khác, với 5 kết thúc.",
      hero: "giúp bạn mới hòa nhập", character: "小美 và 小丽", minutes: 10, quote: "Hôm nay thật vui! Tớ đã quen được hai người bạn mới!" },
    { id: "cuoc-goi-bi-an",   title: "Ai Đã Gọi Điện Đến?",     hsk: 2, lv: "Elementary",  color: "#0d9488", emoji: "📞", tags: ["Bí ẩn","Tình bạn","Sinh nhật"],         chapters: 1,
      summary: "Tối sinh nhật, 小雨 nhận được một cuộc gọi lạ bảo đừng đợi người bạn thân 小林. Bạn vào vai 小雨 đi tìm sự thật: mỗi lựa chọn dẫn tới một nhánh khác, với 2 kết thúc.",
      hero: "cùng Tiểu Vũ", character: "小雨 và 小林", minutes: 12, quote: "Tối nay, bạn đừng đợi Tiểu Lâm. Cậu ấy sẽ không đến đâu..." },
    { id: "nguoi-ngoai-cua-la-ai", title: "Người Ngoài Cửa Là Ai?", hsk: 2, lv: "Elementary",  color: "#0369a1", emoji: "🚪", tags: ["Bí ẩn","Gia đình","Sinh nhật"],         chapters: 1,
      summary: "Một buổi tối, 小明 nhận được cuộc gọi lạ: chị gái cậu đang ở chỗ người gọi. Xe đạp của chị vẫn ở trước cửa, rồi có người gõ cửa gọi tên cậu. Bạn vào vai 小明 đi tìm chị: mỗi lựa chọn dẫn tới một nhánh khác, với 5 kết thúc.",
      hero: "cùng Tiểu Minh", character: "小明 và 姐姐", minutes: 12, quote: "Chị gái cậu đang ở chỗ tôi..." },
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
