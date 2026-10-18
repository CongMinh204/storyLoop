// Logo StoryLoop (con chim, public/logo.png) dùng ở thanh bên desktop, đầu trang chủ mobile và màn chào.
// BASE_URL để đúng đường dẫn dù app chạy ở gốc tên miền hay thư mục con.
export function BrandMark({ size, radius, border }: { size: number; radius: number; border?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: radius, objectFit: "cover", display: "block", flexShrink: 0, border }}
    />
  );
}
