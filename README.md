# BIỂN ĐẢO VIỆT NAM — Chạm tri thức - Vững chủ quyền

Website giáo dục số về chủ đề **Biển đảo Việt Nam** dành cho **Học sinh THPT và Giáo viên**, được xây dựng bằng **React** và **Vite**.

## 1. Cấu trúc dự án

```text
BIEN_ĐAO_ECOSYSTEM/
├── public/
│   └── assets/
│       └── hero-bien-dao.jpg            # Hình nền biển đảo Việt Nam chất lượng cao
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                   # Thanh menu điều hướng & chuyển đổi Học sinh / Giáo viên
│   │   ├── HeroSection.jsx              # Khu vực mở đầu, hình nền biển đảo, nút Bắt đầu khám phá & tọa độ Hoàng Sa - Trường Sa
│   │   ├── AboutSection.jsx             # Phần giới thiệu dự án & lợi ích cho Học sinh THPT / Giáo viên
│   │   ├── FeatureGrid.jsx              # 6 Thẻ chức năng cốt lõi & Cột mốc chủ quyền
│   │   ├── InteractivePreviewModal.jsx  # Cửa sổ xem nhanh từng phân hệ chức năng
│   │   └── Footer.jsx                   # Chân trang thông tin giáo dục
│   ├── data/
│   │   └── homeData.js                  # Dữ liệu cấu hình điều hướng, thống kê và 6 phân hệ
│   ├── App.jsx                          # Component ghép nối toàn bộ Trang chủ
│   ├── index.css                        # Hệ thống giao diện (Xanh đại dương, Xanh navy, Trắng, Vàng) & Responsive
│   └── main.jsx                         # Điểm khởi chạy ứng dụng React
├── index.html                           # File HTML gốc
├── package.json                         # Khai báo thư viện React, Vite, Lucide Icons
└── vite.config.js                       # Cấu hình Vite
```

## 2. Hướng dẫn cài đặt và chạy dự án

Đảm bảo máy tính đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 18 trở lên), sau đó mở Terminal tại thư mục dự án và chạy:

```bash
# Cài đặt các thư viện cần thiết
npm install

# Khởi chạy máy chủ phát triển (Development Server)
npm run dev
```

Sau đó mở trình duyệt tại địa chỉ `http://localhost:5173`.
