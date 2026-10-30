# KongKeng Radar — Nền tảng Phân tích & Radar Quét Tín hiệu Đầu tư Chứng khoán Thế hệ mới
> **Tích hợp Hệ sinh thái Quad-MCP đa tầng: DNSE, VNDIRECT, FINHAY & SSI**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github)](https://ntb1999.github.io/kongkeng-radar/#market)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile%20Responsive-orange.svg)]()

---

## 🌐 Live Demo & Trải nghiệm trực tuyến

Trải nghiệm trực tiếp hệ thống **KongKeng Radar** trên GitHub Pages:

* 📊 **Radar Tổng quan Thị trường (Market Overview):** [https://ntb1999.github.io/kongkeng-radar/#market](https://ntb1999.github.io/kongkeng-radar/#market)
* 📰 **Bản tin Thị trường & Lịch Sự kiện (Market News & Macro Calendar):** [https://ntb1999.github.io/kongkeng-radar/#mnews](https://ntb1999.github.io/kongkeng-radar/#mnews)
* 🏢 **Company 360 (Toàn cảnh cổ phiếu MSB, FPT, VNM...):** [https://ntb1999.github.io/kongkeng-radar/#c360](https://ntb1999.github.io/kongkeng-radar/#c360)
* 🔍 **Radar Lọc Cổ phiếu Thông minh v2 (Smart Screener):** [https://ntb1999.github.io/kongkeng-radar/#screener](https://ntb1999.github.io/kongkeng-radar/#screener)
* ⚖️ **So sánh Cổ phiếu Đa chiều (Stock Comparison):** [https://ntb1999.github.io/kongkeng-radar/#compare](https://ntb1999.github.io/kongkeng-radar/#compare)
* 📑 **Báo cáo Phân tích Chuyên sâu (Research Reports):** [https://ntb1999.github.io/kongkeng-radar/#reports](https://ntb1999.github.io/kongkeng-radar/#reports)

---

## 🚀 Giới thiệu Nền tảng

**KongKeng Radar** là nền tảng radar quét tín hiệu thị trường, phân tích tài chính chuyên sâu và hỗ trợ ra quyết định đầu tư chứng khoán thông minh dành cho nhà đầu tư cá nhân và tổ chức tại Việt Nam.

Hệ thống kết hợp trải nghiệm giao diện tài chính tối tân (Modern Financial UI/UX), tốc độ phản hồi tức thì dưới 16ms (60 FPS) và tích hợp sâu kiến trúc **Quad-MCP (Model Context Protocol)** từ 4 định chế tài chính & công nghệ hàng đầu:

`
                  ┌──────────────────────────────────────────────┐
                  │         KONGKENG RADAR FRONTEND CORE         │
                  │   (Pure ES6+, Canvas 2D, Light/Dark Theme)   │
                  └──────────────────────┬───────────────────────┘
                                         │
        ┌───────────────────┬────────────┴───────┬───────────────────┐
        ▼                   ▼                    ▼                   ▼
┌──────────────┐    ┌──────────────┐     ┌──────────────┐    ┌──────────────┐
│   DNSE MCP   │    │ VNDIRECT MCP │     │  FINHAY MCP  │    │   SSI MCP    │
│  (OpenData   │    │ (D-Research  │     │(Micro-Invest │    │(Institutional│
│& Ensa Trading│    │ & Industry   │     │ & Community  │    │  Research &  │
│  Lightning)  │    │  Valuation)  │     │  Sentiment)  │    │  FastQuote)  │
└──────────────┘    └──────────────┘     └──────────────┘    └──────────────┘
`

---

## 🧩 Hệ sinh thái Quad-MCP (Model Context Protocol)

KongKeng Radar tiên phong ứng dụng giao thức mở MCP nhằm hợp nhất dữ liệu từ nhiều nguồn độc lập vào chung một luồng ngữ cảnh (Context Stream):

| Nhà cung cấp MCP | Tài nguyên / Tools tích hợp | Phạm vi phục vụ trên KongKeng Radar |
| :--- | :--- | :--- |
| **DNSE MCP** *(OpenData)* | dnse://market/snapshot, dnse://screener/quant, 	ools/fetch_realtime_orderbook | Bảng giá thời gian thực, sổ lệnh bước giá L2, dòng tiền khối ngoại, dữ liệu khớp lệnh Tick-by-Tick. |
| **VNDIRECT MCP** *(D-Research)* | ndirect://industry/peers, ndirect://valuation/multiples, 	ools/calc_peer_valuation | Định giá ngành tương quan (P/E, P/B vs Median ngành), vị thế thị phần, xếp hạng tài chính doanh nghiệp. |
| **FINHAY MCP** *(Community)* | inhay://sentiment/retail, inhay://fund/nav-flow, 	ools/analyze_retail_sentiment | Chỉ số tâm lý nhà đầu tư cá nhân (Fear & Greed), xu hướng dòng tiền tích lũy và danh mục mẫu. |
| **SSI MCP** *(Institutional)* | ssi://research/consensus, ssi://macro/indicators, 	ools/fetch_consensus_rating | Đồng thuận phân tích CTCK (Target Price, Upside Potential), báo cáo vĩ mô và lịch sự kiện kinh tế. |

---

## 🌟 Tính năng Trọng tâm & Thiết kế Trải nghiệm (UX Highlights)

### 1. 📊 Radar Tổng quan Thị trường (#market)
- **Quét chỉ số thời gian thực:** VN-Index, VN30, HNX-Index, UPCOM kèm nhịp đập độ rộng thị trường (Số mã Tăng / Giảm / Không đổi / Trần / Sàn).
- **Phân bổ Dòng tiền & Tác động Chỉ số:** Biểu đồ trực quan hóa nhóm cổ phiếu đóng góp tăng/giảm mạnh nhất vào chỉ số (Index Movers) và thống kê ròng Khối ngoại (Foreign Net Flow).
- **Độ lệch Nhóm ngành (Industry Heatmap):** Nhận diện nhanh dòng tiền luân chuyển giữa Ngân hàng, Bất động sản, Chứng khoán, Thép, Bán lẻ.

### 2. 📰 Bản tin Thị trường & Sự kiện Vĩ mô (#mnews)
- **18 luồng tin tức chọn lọc:** Phân loại đa tầng: Tin Nổi bật, Vĩ mô & Chính sách, KQKD & Doanh nghiệp, Dòng tiền & Khối ngoại, Báo cáo Chiến lược, Lịch Cổ tức.
- **Interactive Reader Modal:** Hỗ trợ đọc toàn văn tin tức, phân tích tác động trực tiếp lên nhóm cổ phiếu liên quan (Impact Analysis) và gắn thẻ hành động khuyến nghị rõ ràng.
- **Lịch Cổ tức & Đại hội Cổ đông:** Thống kê chi tiết ngày GDKHQ, tỷ lệ chi trả tiền mặt / cổ phiếu, ngày thực hiện, giảm thiểu tối đa rủi ro bỏ lỡ quyền lợi.
- **Top Cổ phiếu được chú ý nhất (Trending Tickers):** Cập nhật liên tục các mã có lượng tìm kiếm và khối lượng khớp lệnh đột biến.

### 3. 🏢 Company 360 (#c360)
- **Toàn cảnh doanh nghiệp với 8 góc nhìn chuyên sâu:**
  1. *Tổng quan:* Mini chart nến Nhật, sổ lệnh thời gian thực, sức mạnh giá RS, định giá P/E, P/B, EPS, Beta.
  2. *Hồ sơ Doanh nghiệp:* Lịch sử hình thành, ban lãnh đạo, cơ cấu công ty con và liên kết.
  3. *Cổ đông:* Cơ cấu sở hữu nhà nước, ban lãnh đạo, cổ đông lớn nước ngoài và biến động giao dịch nội bộ.
  4. *Tài chính:* Bảng cân đối kế toán, Kết quả HĐKD, Lưu chuyển tiền tệ dạng biểu đồ trực quan hóa.
  5. *Cùng ngành:* So sánh tương quan định giá và hiệu quả sinh lời với các doanh nghiệp trong ngành (tích hợp VNDIRECT MCP).
  6. *Tin tức & Sự kiện:* Lịch sử công bố thông tin, biên bản họp ĐHCĐ, giao dịch người nội bộ.
  7. *Dữ liệu Lịch sử:* Thống kê giá đóng cửa, khối lượng, tỷ lệ khớp lệnh qua từng phiên.

### 4. 🔍 Radar Lọc Cổ phiếu Thông minh v2 (#screener)
- **Chiến lược đầu tư kinh điển tích hợp sẵn:** CANSLIM, Cổ tức cao, Định giá rẻ (Deep Value), Bứt phá đỉnh 52 tuần, Dòng tiền bắt đáy.
- **Bộ lọc đa chiều linh hoạt:** Kết hợp chỉ báo kỹ thuật (RSI, MA20, MA50, Bollinger Bands) cùng tiêu chí cơ bản (ROE > 15%, Tăng trưởng LNST > 20%, P/E < 12).
- **Phản hồi tức thì:** Tốc độ lọc dữ liệu mượt mà ngay trên trình duyệt, không gây giật lag hay tải lại trang.

### 5. ⚖️ So sánh Cổ phiếu Đa chiều (#compare)
- Đặt cạnh nhau tối đa 4 mã cổ phiếu trên cùng một hệ quy chiếu trực quan.
- So sánh toàn diện: Biên lợi nhuận gộp, Biên lợi nhuận ròng, Tỷ lệ đòn bẩy D/E, Khả năng sinh lời ROA/ROE, Định giá P/E & P/B.

### 6. 📑 Báo cáo Phân tích Khuyến nghị (#reports)
- Tập hợp hệ thống báo cáo từ các công ty chứng khoán hàng đầu (SSI, VNDIRECT, DNSE, Vietcap, HSC).
- Đánh giá khuyến nghị minh bạch: Mua / Khả quan / Nắm giữ / Bán với Giá mục tiêu (Target Price) và Tiềm năng tăng giá (Upside Potential).
- Hỗ trợ bộ lọc thông minh theo Ngành, Khuyến nghị và Thời gian phát hành.

---

## 🎨 Trải nghiệm Thiết kế & Công nghệ (Tech Stack)

- **Pure HTML5 / CSS3 / ES6+:** 100% mã nguồn độc lập, không phụ thuộc framework cồng kềnh (No React/Vue overhead), tốc độ tải trang tức thì (< 0.2s).
- **Dark Mode & Light Mode:** Hỗ trợ chuyển đổi chủ đề sáng/tối mượt mà với biến màu CSS Custom Properties, tự động ghi nhớ trạng thái người dùng vào LocalStorage (kongkeng_theme).
- **Canvas 2D Graphics:** Toàn bộ biểu đồ nến kỹ thuật, phân bổ dòng tiền, radar định giá được vẽ trực tiếp qua Canvas 2D API với tần số quét 60fps mượt mà.
- **Typography:** Chuẩn Google Sans Flex phối hợp cùng JetBrains Mono / IBM Plex Mono sắc nét cho số liệu tài chính.
- **Chuẩn UX Writer:** Microcopy gãy gọn, tinh giản, không dùng từ kỹ thuật gây hoang mang, tạo sự tự tin và an tâm cho nhà đầu tư khi ra quyết định.
- **Không lỗi Console:** Đảm bảo 0 console errors/warnings, tương thích tối đa trên Chrome, Edge, Firefox, Safari và Mobile Browsers.

---

## 💻 Hướng dẫn Chạy Thử trên Local

Chỉ cần clone repository và mở trực tiếp file index.html trên trình duyệt:

`ash
# 1. Clone repository
git clone https://github.com/Ntb1999/kongkeng-radar.git

# 2. Di chuyển vào thư mục dự án
cd kongkeng-radar

# 3. Mở trên trình duyệt
# Windows:
start index.html#market

# macOS:
open index.html#market

# Linux:
xdg-open index.html#market
`

Hoặc sử dụng bất kỳ HTTP Server đơn giản nào (Live Server, Python HTTP, Node http-server):

`ash
python -m http.server 8080
# Truy cập: http://localhost:8080/#market
`

---

## 📝 Bản quyền & Giấy phép

Dự án được xây dựng và phát triển bởi **Ntb1999** (Đặng Kim Bảo).  
Bản quyền thuộc về © 2026 KongKeng Radar. Phát hành theo giấy phép [MIT License](LICENSE).
