// Nội dung chữ của trang giới thiệu (features/landing). Sửa chữ ở đây, không cần động vào giao diện.

export const FACEBOOK_URL = "https://www.facebook.com/people/StoryLoop/61594960546602/";
// Email liên hệ của nhóm. Để trống thì chân trang không hiện dòng email; điền vào là hiện.
export const CONTACT_EMAIL = "";

export const NAV = [
  { id: "bloom", label: "Ôn tập" },
  { id: "tinh-nang", label: "Tính năng" },
  { id: "truyen", label: "Truyện" },
  { id: "goi", label: "Gói học" },
];

export const HERO = {
  label: "Học tiếng Trung HSK",
  title: "Học tiếng Trung,",
  titleAccent: "qua từng câu chuyện.",
  sub: "Nhập vai cùng nhân vật, chọn câu trả lời, nhận phân tích ngữ pháp ngay trong truyện, rồi ôn lại từ vựng với Bloom và flashcard.",
  primary: "Chơi thử miễn phí",
  secondary: "Tạo tài khoản",
  checks: ["Không cần thẻ thanh toán", "Chơi ngay trong vài giây", "Lưu tiến độ trên mọi thiết bị"],
};

// Bốn bước Bloom lấy màu và biểu tượng từ data/bloom.ts; ở đây chỉ có mô tả ngắn
export const BLOOM = {
  label: "Ôn tập Bloom",
  title: "Ôn từ vựng theo bốn bước",
  sub: "Mỗi truyện có một bộ Bloom riêng, đi từ nhận mặt chữ tới tự đặt câu, kèm flashcard để nhớ lâu.",
  subs: ["Nhận mặt chữ, nghĩa của từ", "Hiểu từ trong ngữ cảnh", "Áp dụng vào tình huống", "Tự tạo câu hoàn chỉnh"],
  flashcard: { label: "Flashcard", sub: "Thẻ từ vựng lật hai mặt" },
};

export const FEATURES = {
  label: "Tất cả trong một",
  title: "Học bằng câu chuyện, không phải bảng từ",
  sub: "StoryLoop nối ba việc thường tách rời: đọc truyện, hiểu ngữ pháp và ôn tập, thành một vòng lặp đơn giản.",
  items: [
    { title: "Nhập vai theo cốt truyện", text: "Trò chuyện với nhân vật bằng tiếng Trung. Mỗi lựa chọn mở ra một hướng đi khác, có truyện rẽ nhánh với nhiều kết thúc.", cta: "Chơi thử", action: "guest" as const },
    { title: "Phân tích ngay khi chọn", text: "Chọn xong là thấy vì sao đúng, vì sao sai, kèm cấu trúc câu và từ vựng của chính câu đó.", cta: "Xem thử trong truyện", action: "guest" as const },
    { title: "Theo dõi tiến độ", text: "Tích XP, giữ chuỗi ngày học và học tiếp trên mọi thiết bị khi có tài khoản.", cta: "Tạo tài khoản", action: "register" as const },
  ],
};

export const HOW = {
  label: "Quy trình",
  title: "Từ một câu chuyện đến vốn từ của bạn.",
  steps: [
    { title: "Chọn một câu chuyện", text: "Chọn truyện hợp trình độ, từ thần thoại Thiên Đình tới chuyện du lịch cùng chú mèo Hoa Hoa." },
    { title: "Trò chuyện và chọn đáp án", text: "Đọc lời nhân vật, chọn câu trả lời của bạn. Chọn sai vẫn đi tiếp, chỉ bị tính vào điểm." },
    { title: "Xem phân tích và ôn lại", text: "Từ vựng của truyện được đưa vào Bloom và flashcard để bạn ôn ngay sau đó." },
  ],
  card: {
    badge: "Ví dụ minh hoạ",
    title: "Kết quả bài học",
    story: "Thử thách của Ngọc Hoàng",
    pct: 80,
    // to: số cuối cùng (đếm từ 0 lên khi thẻ cuộn tới); text: ô không phải số
    stats: [
      { label: "Câu đúng", to: 4, suffix: "/5" },
      { label: "XP nhận được", to: 90, prefix: "+" },
      { label: "Cấp Bloom", text: "Nhớ" },
    ] as { label: string; to?: number; prefix?: string; suffix?: string; text?: string }[],
    note: "Số liệu trong thẻ chỉ để minh hoạ cách hiển thị kết quả.",
  },
};

export const SHELF = {
  label: "Thư viện truyện",
  title: "Câu chuyện đang chờ bạn",
  sub: "Truyện chia theo cấp HSK. Các cấp đang mở chơi được ngay, các cấp cao hơn sẽ lần lượt ra mắt.",
  cta: "Vào thư viện",
};

export const PRICING = {
  label: "Gói học",
  title: "Bắt đầu miễn phí, nâng cấp khi sẵn sàng",
  sub: "Hiện tại bạn học miễn phí. Các gói trả phí đang được chuẩn bị.",
  free: {
    name: "Miễn phí",
    price: "0đ",
    text: "Mọi thứ bạn cần để bắt đầu.",
    includes: ["Các truyện đang mở", "Ôn tập Bloom và flashcard", "XP và chuỗi ngày học khi có tài khoản", "Lưu tiến độ trên mọi thiết bị"],
    cta: "Chơi thử ngay",
  },
  premium: {
    name: "Premium",
    badge: "Sắp ra mắt",
    text: "Dành cho người muốn đi xa hơn.",
    includes: ["Toàn bộ câu chuyện, cả các cấp cao", "Bloom nâng cao", "Không quảng cáo"],
    cta: "Sắp ra mắt",
  },
};

export const FINAL = {
  label: "Bắt đầu hôm nay",
  title: "Hành trình tiếng Trung bắt đầu từ một câu chuyện.",
  sub: "Tạo tài khoản miễn phí để lưu tiến độ, hoặc chơi thử ngay không cần đăng ký.",
  cta: "Tạo tài khoản",
};

export const FOOTER = {
  about: "StoryLoop giúp bạn học tiếng Trung HSK qua những câu chuyện tương tác, từ nhập vai, phân tích câu tới ôn tập từ vựng.",
  social: "Kênh truyền thông và cộng đồng",
  facebook: "StoryLoop",
  copyright: "© 2026 StoryLoop",
};
