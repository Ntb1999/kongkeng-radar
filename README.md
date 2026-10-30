# KongKeng Radar - Nền tảng Phân tích & Tư vấn Đầu tư Chứng khoán Thế hệ mới
> **Tích hợp Hệ sinh thái Quad-MCP đa tầng: DNSE, VNDIRECT, FINHAY & SSI**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github)](https://ntb1999.github.io/maris-advisor/#market)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile%20Responsive-orange.svg)]()

---

## 🌐 Live Demo & Trải nghiệm trực tuyến

Trải nghiệm trực tiếp nền tảng Maris Advisor trên GitHub Pages:

* 📊 **Tổng quan thị trường (Market Overview):** [https://ntb1999.github.io/maris-advisor/#market](https://ntb1999.github.io/maris-advisor/#market)
* 📰 **Tin tức thị trường & Lịch cổ tức (Market News):** [https://ntb1999.github.io/maris-advisor/#mnews](https://ntb1999.github.io/maris-advisor/#mnews)
* 🏢 **Company 360 (Toàn cảnh cổ phiếu MSB, FPT, VNM...):** [https://ntb1999.github.io/maris-advisor/#c360](https://ntb1999.github.io/maris-advisor/#c360)
* 🔍 **Bộ lọc Cổ phiếu Thông minh v2 (Smart Screener):** [https://ntb1999.github.io/maris-advisor/#screener](https://ntb1999.github.io/maris-advisor/#screener)
* ⚖️ **So sánh Cổ phiếu Đa chiều (Stock Comparison):** [https://ntb1999.github.io/maris-advisor/#compare](https://ntb1999.github.io/maris-advisor/#compare)
* 📑 **Báo cáo Phân tích Chuyên sâu (Research Reports):** [https://ntb1999.github.io/maris-advisor/#reports](https://ntb1999.github.io/maris-advisor/#reports)

---

## 🚀 Giới thiệu Nền tảng

**Maris Advisor** là nền tảng phân tích tài chính và tư vấn đầu tư chứng khoán được thiết kế chuẩn mực dành cho nhà đầu tư cá nhân và tổ chức tại thị trường Việt Nam. Hệ thống kết hợp giao diện hiện đại (Modern Financial UI/UX), cơ chế phản hồi siêu tốc dưới 16ms và tích hợp sâu kiến trúc **Quad-MCP (Model Context Protocol)** từ 4 định chế tài chính & công nghệ hàng đầu:

```
                  ┌──────────────────────────────────────────────┐
                  │          MARIS ADVISOR FRONTEND CORE         │
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
```

---

## 🧩 Hệ sinh thái Quad-MCP (Model Context Protocol)

Maris Advisor tiên phong ứng dụng giao thức mở MCP nhằm hợp nhất dữ liệu từ nhiều nguồn độc lập vào chung một luồng ngữ cảnh (Context Stream):

| Nhà cung cấp MCP | Tài nguyên / Tools tích hợp | Phạm vi phục vụ trên Maris Advisor |
| :--- | :--- | :--- |
| **DNSE MCP** *(OpenData)* | `dnse://market/snapshot`, `dnse://screener/quant`, `tools/fetch_realtime_orderbook` | Bảng giá thời gian thực, sổ lệnh bước giá L2, dòng tiền khối ngoại, dữ liệu khớp lệnh Tick-by-Tick. |
| **VNDIRECT MCP** *(D-Research)* | `vndirect://industry/peers`, `vndirect://valuation/multiples`, `tools/calc_peer_valuation` | Định giá ngành tương quan (P/E, P/B vs Median ngành), vị thế thị phần, xếp hạng tài chính doanh nghiệp. |
| **FINHAY MCP** *(Community)* | `finhay://sentiment/retail`, `finhay://fund/nav-flow`, `tools/analyze_retail_sentiment` | Chỉ số tâm lý nhà đầu tư cá nhân (Fear & Greed), xu hướng dòng tiền quỹ mở và NAV tracker. |
| **SSI MCP** *(Institutional)* | `ssi://institutional/reports`, `ssi://market/fastquote`, `tools/fetch_institutional_coverage` | Báo cáo khuyến nghị định chế tài chính, consensus target price, radar sức mạnh cổ phiếu và dòng tiền tổ chức. |

*Hệ thống trang bị tính năng **Quad-MCP Inspector Modal** cho phép trực tiếp kiểm tra cấu hình JSON-RPC, trạng thái kết nối socket, danh sách endpoints và gọi test tools ngay trên giao diện.*

---

## ✨ Các Phân hệ Tính năng Chính

### 1. 📊 Tổng quan Thị trường (`#market`)
- **Market Indexes:** VN-Index, VN30, HNX-Index, UPCoM với chỉ báo thay đổi điểm số, thanh khoản và biên độ dao động.
- **Biểu đồ Dòng tiền & Tác động chỉ số:** Top 10 cổ phiếu kéo tăng / giảm điểm số VN-Index, bản đồ phân bổ dòng tiền tăng - giảm - tham chiếu.
- **Khối ngoại & Tự doanh:** Thống kê giá trị mua/bán ròng của khối ngoại theo phiên và chuỗi 10 phiên liên tiếp.
- **Sức nóng Ngành (Sector Pulse):** Phân bổ hiệu suất các nhóm ngành trọng điểm: Ngân hàng, Bất động sản, Chứng khoán, Thép, Bán lẻ...

### 2. 📰 Tin tức Thị trường & Vĩ mô (`#mnews`)
- **18 luồng tin tức độc quyền:** Phân loại đa tầng: Tin Nổi bật, Vĩ mô & Chính sách, KQKD & Doanh nghiệp, Dòng tiền & Khối ngoại, Báo cáo Chiến lược, Lịch Cổ tức.
- **Interactive Reader Modal:** Hỗ trợ đọc toàn văn tin tức, phân tích tác động trực tiếp lên nhóm cổ phiếu liên quan (Impact Analysis) và gắn thẻ hành động khuyến nghị.
- **Lịch Cổ tức & Đại hội cổ đông:** Thống kê chi tiết ngày GDKHQ, tỷ lệ chi trả tiền mặt / cổ phiếu, ngày thực hiện.
- **Top Cổ phiếu được chú ý nhất (Trending Tickers):** Cập nhật liên tục các mã có lượng tìm kiếm và khối lượng đột biến.

### 3. 🏢 Company 360 (`#c360`)
- **Tổng quan giao diện đa tab:** Bao gồm 8 góc nhìn chuyên sâu:
  1. *Tổng quan:* Mini chart nến Nhật, sổ lệnh thời gian thực, sức mạnh giá RS, định giá P/E, P/B, EPS, Beta.
  2. *Hồ sơ Doanh nghiệp:* Lịch sử hình thành, ban lãnh đạo, cơ cấu công ty con và liên kết.
  3. *Cổ đông:* Cơ cấu sở hữu nhà nước, ban lãnh đạo, cổ đông lớn nước ngoài và biến động giao dịch nội bộ.
  4. *Tài chính:* Bảng cân đối kế toán, Kết quả HĐKD, Lưu chuyển tiền tệ dạng biểu đồ trực quan hóa.
  5. *Cùng ngành:* So sánh tương quan định giá và hiệu quả sinh lời với các doanh nghiệp trong ngành (tích hợp VNDIRECT MCP).
  6. *Tin tức & Sự kiện:* Lịch sử công bố thông tin, biên bản họp ĐHCĐ, giao dịch người nội bộ.
  7. *Dữ liệu Lịch sử:* Thống kê giá đóng cửa, khối lượng, tỷ lệ khớp lệnh qua từng phiên.

### 4. 🔍 Bộ lọc Cổ phiếu Thông minh v2 (`#screener`)
- Tích hợp sẵn các chiến lược đầu tư kinh điển: **CANSLIM**, **Cổ tức cao**, **Định giá rẻ (Deep Value)**, **Bứt phá đỉnh 52 tuần**, **Dòng tiền bắt đáy**.
- Hỗ trợ kết hợp bộ lọc kỹ thuật (RSI, MA20, MA50, Bollinger Bands) cùng chỉ tiêu cơ bản (ROE > 15%, Tăng trưởng LNST > 20%, P/E < 12).
- Xuất dữ liệu tức thì, lọc tức thời trong trình duyệt không cần chờ tải lại trang.

### 5. ⚖️ So sánh Cổ phiếu Đa chiều (`#compare`)
- Đặt cạnh nhau tối đa 4 mã cổ phiếu trên cùng một hệ quy chiếu.
- So sánh toàn diện: Biên lợi nhuận gộp, Biên lợi nhuận ròng, Tỷ lệ đòn bẩy D/E, Khả năng sinh lời ROA/ROE, Định giá P/E & P/B.

### 6. 📑 Báo cáo Phân tích Khuyến nghị (`#reports`)
- Tập hợp hệ thống báo cáo từ các công ty chứng khoán hàng đầu (SSI, VNDIRECT, DNSE, Vietcap, HSC).
- Đánh giá khuyến nghị: Mua / Khả quan / Nắm giữ / Bán với Giá mục tiêu (Target Price) và Tiềm năng tăng giá (Upside Potential).
- Hỗ trợ bộ lọc theo Ngành, Khuyến nghị và Thời gian phát hành.

---

## 🎨 Trải nghiệm Thiết kế & Công nghệ (Tech Stack)

- **Pure HTML5 / CSS3 / ES6+:** 100% mã nguồn độc lập, không phụ thuộc framework cồng kềnh (No React/Vue overhead), tốc độ tải trang tức thì (< 0.2s).
- **Dark Mode & Light Mode:** Hỗ trợ chuyển đổi chủ đề sáng/tối mượt mà với biến màu CSS CSS Custom Properties, tự động ghi nhớ trạng thái người dùng vào LocalStorage.
- **Canvas 2D Graphics:** Toàn bộ biểu đồ nến kỹ thuật, phân bổ dòng tiền, radar định giá được vẽ trực tiếp qua Canvas 2D API với tần số quét 60fps.
- **Typography:** Chuẩn Google Sans Flex phối hợp cùng IBM Plex Mono sắc nét cho số liệu tài chính.
- **Không lỗi Console:** Đảm bảo 0 console errors/warnings, tương thích tối đa trên Chrome, Edge, Firefox, Safari và Mobile Browsers.

---

## 💻 Hướng dẫn Chạy Thử trên Local

Chỉ cần clone repository và mở trực tiếp file `index.html` trên trình duyệt:

```bash
# 1. Clone repository
git clone https://github.com/Ntb1999/maris-advisor.git

# 2. Di chuyển vào thư mục dự án
cd maris-advisor

# 3. Mở trên trình duyệt
# Windows:
start index.html#market

# macOS:
open index.html#market

# Linux:
xdg-open index.html#market
```

Hoặc sử dụng bất kỳ HTTP Server đơn giản nào (Live Server, Python HTTP, Node http-server):

```bash
python -m http.server 8080
# Truy cập: http://localhost:8080/#market
```

---

## 📝 Bản quyền & Giấy phép

Dự án được xây dựng và phát triển bởi **Ntb1999** (Đặng Kim Bảo).  
Bản quyền thuộc về © 2026 Maris Advisor. Phát hành theo giấy phép [MIT License](LICENSE).
