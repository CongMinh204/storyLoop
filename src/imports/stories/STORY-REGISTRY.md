# Sổ theo dõi cốt truyện: Google Doc ↔ app

Doc cốt truyện: https://docs.google.com/document/d/1bsYDMmd7TKtire_IMHMA-3v5U0HGMjzxpE4PTf3f0JU

## Cách dùng

- Đối chiếu theo **Bài + vị trí trong bài** (hai truyện của mỗi bài xếp theo thứ tự tab trong Doc), không theo tên: tên hiển thị trong app thường khác tên tab.
- Trạng thái: `Chưa thêm` → `Đã code, chờ merge` (hoặc `Đã code, chưa vào main` nếu nằm ở nhánh khác) → `Đã có trên main`. Tab trùng nội dung với tab khác ghi `Trùng`, không làm truyện riêng.
- Truyện mới trong Doc: thêm một dòng cuối bảng, ghi đủ số Bài và tên tab. Mỗi lần import hay merge một truyện, cập nhật dòng của nó trong cùng PR.
- Khoá kỹ thuật (id trong `data/stories/index.ts`, file `.md` gốc ở `src/imports/stories/`) đặt theo tên không dấu của truyện, ví dụ `bi-mat-luc-sau-gio-sang`. Id chỉ gồm `a-z 0-9 -` và không đổi sau khi lên web.

## Bảng

| Bài | Tên truyện trong Doc | Trong app | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Chuyến du lịch của Hoa Hoa | Chú Mèo Hoa Hoa | Đã có trên main |  |
| 1 | Hoa Hoa biến mất! | Chú Mèo Hoa Hoa 2 | Đã có trên main |  |
| 2 | Bí mật lúc sáu giờ sáng | Bí Mật Lúc Sáu Giờ Sáng | Đã code, chờ merge | Theo bản Doc tác giả viết lại đủ nhánh (15 kết thúc). Chỉnh nhẹ: thêm chi tiết đôi giày chạy bộ ở cảnh 02A và 03D (người chơi hỏi về chạy bộ khi chưa ai nhắc tới); cảnh 02C sửa mốc thời gian cho khớp câu "hôm qua"; tên kết thúc bằng chữ Hán là bản dịch từ tên tiếng Việt |
| 2 | Tại sao cậu ấy không đến lớp? | Trốn Học | Đã có trên main |  |
| 3 | Ai đã tặng nhầm quà? | Chiếc Đồng Hồ Biến Mất | Đã có trên main | Đổi tên vì không ai tặng nhầm quà; sửa mạch truyện cho khớp mọi đường vào |
| 3 | Ai đã cầm nhầm quà? | Ai Đã Cầm Nhầm Quà? | Đã có trên main | Viết lại một phần lời giải: đồng hồ nằm trong túi đỏ, ông Lý nói "vợ" |
| 4 | Ai đã gọi điện đến? | Ai Đã Gọi Điện Đến? | Đã có trên main |  |
| 4 | Hai người bạn mới trong bữa tiệc sinh nhật | Tiệc Sinh Nhật | Đã có trên main |  |
| 5 | Ai đã gửi bức ảnh? | Ai Đã Gửi Bức Ảnh? | Đã có trên main | Đã cập nhật theo bản Doc tác giả sửa lại (nhánh VynhVQ12). Còn 2 điểm nhờ tác giả xem: Tiểu Mỹ là bạn thân mà Tiểu Minh "không nhớ đã gặp" hôm đó; hộp vừa là đồ bị cầm nhầm vừa là quà tặng |
| 5 | Ai đã gửi bức ảnh? (bản 2) | không có | Bản cũ, không thêm | Là bản trước khi tác giả sửa tab chính; nên xoá hoặc đánh dấu "bản cũ" trong Doc |
| 6 | Chiếc xe đạp ngoài cửa | Chiếc Xe Đạp Ngoài Cửa | Đã code, chờ merge | Doc đã sửa: một chỗ chỉnh nhẹ ở cảnh 03A (lựa chọn B hỏi vì sao túi đỏ nằm trên xe, thay vì "mang theo túi"). Còn nhờ tác giả xem: cảnh 06A đi từ 05A thì chị gái đang ngồi đó nhưng Tiểu Lan kể về chị ở ngôi thứ ba; cảnh 04A đi từ 03C có câu "có người nói chị không muốn em biết" khi chưa ai nói |
| 6 | Người ngoài cửa là ai? | Người Ngoài Cửa Là Ai? | Đã có trên main |  |
| 7 | Một giờ cuối cùng | Một Giờ Cuối Cùng | Đã có trên main |  |
| 7 | Chị đi đâu rồi? | chưa có | Chưa thêm |  |
| 8 | Ai đã lấy quần áo của tôi? | Ai Đã Lấy Quần Áo Của Tôi? | Đã có trên main |  |
| 8 | Ai nói thật? | chưa có | Chưa thêm |  |

Không thuộc Doc này: "Thử thách của Ngọc Hoàng" (HSK1).
