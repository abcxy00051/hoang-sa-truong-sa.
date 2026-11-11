import React from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpenCheck,
  Cpu,
  HeartHandshake,
  ShieldCheck,
  Compass,
  Layers,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Database,
  Scale,
  Globe,
  Sparkles
} from 'lucide-react'
import { PROJECT_PILLARS, HERO_STATS } from '../data/homeData'

const PILLAR_ICONS = {
  knowledge: BookOpenCheck,
  technology: Cpu,
  patriotism: HeartHandshake
}

const METHODOLOGY_CARDS = [
  {
    code: 'PHƯƠNG PHÁP 01',
    title: 'Tích hợp Liên môn Chuẩn GDPT 2018',
    icon: BookOpenCheck,
    desc: 'Kết nối mạch kiến thức Lịch sử (chủ quyền Hoàng Sa, Trường Sa qua các thời kỳ), Địa lý (vùng biển, đảo, thềm lục địa, kinh tế biển), Giáo dục Kinh tế & Pháp luật và Giáo dục Quốc phòng & An ninh cấp THPT.'
  },
  {
    code: 'PHƯƠNG PHÁP 02',
    title: 'Trực quan hóa Không gian Số (GIS 2D/3D & 360°)',
    icon: Globe,
    desc: 'Chuyển hóa các số liệu tọa độ, ranh giới pháp lý UNCLOS 1982 và cảnh quan đảo tiền tiêu thành mô hình bản đồ số tương tác 2D/3D và không gian toàn cảnh Panorama 360° Equirectangular.'
  },
  {
    code: 'PHƯƠNG PHÁP 03',
    title: 'Học tập Cá nhân hóa cùng Trợ lý AI & Phòng học Số',
    icon: Sparkles,
    desc: 'Ứng dụng Trợ lý AI Coze chuyên biệt về biển đảo Việt Nam kết hợp hệ thống ngân hàng câu hỏi trắc nghiệm, ghép mốc lịch sử và xử lý tình huống pháp lý biển.'
  }
]

const SOURCE_STANDARDS = [
  {
    title: 'Sử liệu gốc & Di sản Tư liệu Thế giới',
    detail: 'Châu bản triều Nguyễn (UNESCO công nhận năm 2014), Đại Nam thực lục, Phủ biên tạp lục (1776), Thiên Nam tứ chí lộ đồ thư (1686), Đại Nam nhất thống toàn đồ (1838).'
  },
  {
    title: 'Cơ sở Pháp lý Quốc tế & Quốc gia',
    detail: 'Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982), Tuyên bố của Chính phủ Việt Nam năm 1977 & 1982, Luật Biển Việt Nam năm 2012.'
  },
  {
    title: 'Học liệu & Văn bản Chính thống',
    detail: 'Sách giáo khoa Lịch sử, Địa lý, Giáo dục Quốc phòng & An ninh lớp 10, 11, 12 (Chương trình GDPT 2018) và tư liệu Ủy ban Biên giới Quốc gia – Bộ Ngoại giao.'
  }
]

export default function AboutPage() {
  return (
    <div className="page-transition-wrapper">
      {/* 1. BANNER RIÊNG CỦA TRANG GIỚI THIỆU DỰ ÁN (/gioi-thieu) */}
      <section className="ecosystem-hero-premium">
        <div className="eco-hero-backdrop" aria-hidden="true">
          <img
            src="/assets/ecosystem/hero-ocean-ecosystem.svg"
            alt=""
            className="eco-hero-bg-img"
          />
          <div className="eco-hero-depth-overlay" />
          <div className="eco-hero-grid-mesh" />
        </div>

        <div className="container eco-hero-container">
          <div className="eco-top-bar">
            <div className="ecosystem-breadcrumb">
              <Link to="/" className="breadcrumb-back-btn">
                <ArrowLeft size={15} />
                <span>Trang chủ</span>
              </Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">Giới thiệu dự án (/gioi-thieu)</span>
            </div>
          </div>

          <div className="eco-hero-main-layout">
            <div className="eco-hero-left">
              <div className="ecosystem-badge-row">
                <span className="hero-badge-gold">
                  <Compass size={14} />
                  <span>HỒ SƠ DỰ ÁN KHOA HỌC KỸ THUẬT &amp; GIÁO DỤC SỐ</span>
                </span>
                <span className="hero-badge-coordinates">
                  <ShieldCheck size={14} />
                  <span>Cấp Trung học Phổ thông (Khối 10, 11, 12)</span>
                </span>
              </div>

              <h1 className="eco-hero-main-title">
                GIỚI THIỆU DỰ ÁN{' '}
                <span className="text-gold-highlight">BIỂN ĐẢO VIỆT NAM</span>
              </h1>

              <p className="eco-hero-slogan">
                Chạm tri thức chuẩn mực – Ứng dụng công nghệ hiện đại – Vững vàng ý thức chủ quyền
                biển đảo quê hương.
              </p>

              <p className="eco-hero-intro-text">
                <strong>“BIỂN ĐẢO VIỆT NAM – Chạm tri thức, Vững chủ quyền”</strong> là hệ sinh thái
                giáo dục số đa trang được nghiên cứu và phát triển nhằm đổi mới phương pháp dạy và
                học về biển đảo Việt Nam trong trường THPT, kết hợp hài hòa giữa sử liệu chính
                thống, pháp lý quốc tế và công nghệ tương tác số.
              </p>

              <div className="hero-cta-group">
                <Link to="/he-sinh-thai-so" className="btn-primary-gold">
                  <Layers size={18} />
                  <span>Khám phá Hệ sinh thái số</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/goc-hoc-sinh-giao-vien" className="btn-secondary-glass">
                  <GraduationCap size={18} />
                  <span>Góc Học sinh &amp; Giáo viên</span>
                </Link>
              </div>
            </div>

            <div className="eco-hero-right">
              <div className="eco-overview-glass-panel">
                <div className="eco-panel-header">
                  <span className="eco-panel-badge">TỔNG QUAN HỌC THUẬT &amp; CÔNG NGHỆ</span>
                  <span className="eco-panel-status">● Chuẩn GDPT 2018</span>
                </div>
                <p className="eco-panel-lead">
                  Dự án giải quyết bài toán truyền tải khối lượng lớn kiến thức lịch sử, địa lý và
                  pháp luật biển đảo thông qua trải nghiệm trực quan, sinh động và có kiểm chứng.
                </p>
                <div className="eco-quick-directory">
                  {HERO_STATS.map((stat, idx) => (
                    <div key={idx} className="eco-quick-dir-item">
                      <span className="dir-item-code">0{idx + 1}</span>
                      <div className="dir-item-text">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BA TRỤ CỘT CỐT LÕI CỦA DỰ ÁN */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">ĐỊNH HƯỚNG PHÁT TRIỂN CỐT LÕI</span>
            <h2 className="section-title">
              Ba Trụ cột Kiến tạo <span className="text-ocean">Không gian Học tập Số</span>
            </h2>
            <p className="section-subtitle">
              Mỗi phân hệ trong website đều được xây dựng dựa trên sự kết hợp chặt chẽ giữa tính
              chính xác khoa học, tính hiện đại của công nghệ và giá trị giáo dục lòng yêu nước.
            </p>
          </div>

          <div className="pillars-grid">
            {PROJECT_PILLARS.map((pillar, index) => {
              const IconComponent = PILLAR_ICONS[pillar.id] || BookOpenCheck
              return (
                <article key={pillar.id} className="pillar-card">
                  <div className="pillar-card-top">
                    <div className="pillar-icon-box">
                      <IconComponent size={26} />
                    </div>
                    <span className="pillar-number">0{index + 1}</span>
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                  <div className="pillar-tag">
                    <span>✦ {pillar.highlight}</span>
                  </div>
                </article>
              )
            })}
          </div>

          {/* 3. PHƯƠNG PHÁP SƯ PHẠM & KIẾN TRÚC CÔNG NGHỆ */}
          <div className="section-header" style={{ marginTop: '48px' }}>
            <span className="section-eyebrow">PHƯƠNG PHÁP TIẾP CẬN &amp; CÔNG NGHỆ</span>
            <h2 className="section-title">
              Kiến trúc <span className="text-ocean">Giáo dục Số Đa chiều</span>
            </h2>
          </div>

          <div className="pillars-grid">
            {METHODOLOGY_CARDS.map((item, idx) => {
              const MethodIcon = item.icon
              return (
                <article key={idx} className="pillar-card">
                  <div className="pillar-card-top">
                    <div className="pillar-icon-box">
                      <MethodIcon size={24} />
                    </div>
                    <span className="feature-badge">{item.code}</span>
                  </div>
                  <h3 className="pillar-title">{item.title}</h3>
                  <p className="pillar-desc">{item.desc}</p>
                </article>
              )
            })}
          </div>

          {/* 4. NGUYÊN TẮC HỌC THUẬT & NGUỒN TƯ LIỆU CHÍNH THỐNG */}
          <div className="audience-showcase-box" style={{ marginTop: '40px' }}>
            <div className="audience-header-bar">
              <div className="audience-header-text">
                <span className="audience-label-tag">CHUẨN MỰC DỮ LIỆU &amp; BẢN ĐỒ CHỦ QUYỀN</span>
                <h3>Hệ thống Nguồn Tham khảo &amp; Nguyên tắc Kiểm chứng Học thuật</h3>
              </div>
              <Link to="/cot-moc-chu-quyen" className="btn-primary-gold">
                <Scale size={17} />
                <span>Xem Cột mốc Chủ quyền</span>
              </Link>
            </div>

            <div className="audience-benefits-col">
              {SOURCE_STANDARDS.map((src, i) => (
                <div key={i} className="audience-benefit-card">
                  <div className="benefit-check-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="benefit-text">
                    <h5>{src.title}</h5>
                    <p>{src.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
