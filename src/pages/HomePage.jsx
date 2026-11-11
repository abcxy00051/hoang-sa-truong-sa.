import React from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  BookOpen,
  Layers,
  GraduationCap,
  ShieldCheck,
  Mail,
  ArrowRight,
  Map,
  Sparkles,
  Clock,
  Check,
  Eye,
  Anchor,
  Award
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import { FEATURES_DATA, getFeatureRoutePath } from '../data/homeData'

const ICON_MAP = {
  Map: Map,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Clock: Clock,
  Compass: Compass
}

const PORTAL_SECTIONS = [
  {
    id: 'portal-about',
    badge: 'CHUYÊN TRANG 01',
    title: 'Giới thiệu Dự án Giáo dục Số',
    path: '/gioi-thieu',
    icon: Award,
    desc: 'Tìm hiểu tầm nhìn, sứ mệnh, 3 trụ cột cốt lõi, phương pháp sư phạm số chuẩn GDPT 2018 và hệ thống tư liệu chính thống của dự án.',
    cta: 'Xem trang Giới thiệu'
  },
  {
    id: 'portal-ecosystem',
    badge: 'CHUYÊN TRANG 02',
    title: 'Trung tâm Hệ sinh thái Số',
    path: '/he-sinh-thai-so',
    icon: Layers,
    desc: 'Không gian tích hợp toàn bộ các phân hệ công nghệ: Bản đồ GIS 2D/3D, Thư viện tri thức, Trợ lý AI, Phòng học tương tác, 360° và Triển lãm số.',
    cta: 'Vào Hệ sinh thái số'
  },
  {
    id: 'portal-audience',
    badge: 'CHUYÊN TRANG 03',
    title: 'Góc Học sinh & Giáo viên THPT',
    path: '/goc-hoc-sinh-giao-vien',
    icon: GraduationCap,
    desc: 'Lộ trình học tập phân hóa theo khối 10, 11, 12; kịch bản tổ chức tiết học liên môn 45 phút, ngoại khóa và kho tư liệu trình chiếu.',
    cta: 'Mở Góc Học sinh & Giáo viên'
  },
  {
    id: 'portal-sovereignty',
    badge: 'CHUYÊN TRANG 04',
    title: 'Cột mốc Chủ quyền & Lịch sử',
    path: '/cot-moc-chu-quyen',
    icon: ShieldCheck,
    desc: 'Trục thời gian tương tác chuyên sâu qua 6 thời kỳ lịch sử từ trước thế kỷ XVII, Đội Hoàng Sa, Châu bản triều Nguyễn đến UNCLOS 1982.',
    cta: 'Khám phá Cột mốc Chủ quyền'
  },
  {
    id: 'portal-contact',
    badge: 'CHUYÊN TRANG 05',
    title: 'Liên hệ & Hợp tác Giáo dục',
    path: '/lien-he',
    icon: Mail,
    desc: 'Kết nối với nhóm phát triển dự án KHKT, đóng góp tư liệu biển đảo và đăng ký triển khai mô hình học tập số tại trường THPT.',
    cta: 'Liên hệ ngay'
  }
]

const CORE_ECOSYSTEM_SUBPAGES = [
  'ban-do-so',
  'thu-vien-tri-thuc',
  'tro-ly-ai',
  'phong-hoc-tuong-tac',
  'trai-nghiem-360',
  'trien-lam-so'
]

export default function HomePage({
  onStartExplore,
  onSelectFeature,
  onNavigateFeature
}) {
  const coreFeatures = CORE_ECOSYSTEM_SUBPAGES.map((id) =>
    FEATURES_DATA.find((f) => f.id === id)
  ).filter(Boolean)

  return (
    <div className="page-transition-wrapper">
      {/* 1. HERO BANNER */}
      <HeroSection
        onStartExplore={onStartExplore}
        onSelectFeature={onNavigateFeature}
      />

      {/* 2. CỔNG ĐIỀU HƯỚNG CÁC CHUYÊN TRANG ĐỘC LẬP */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">CỔNG THÔNG TIN GIÁO DỤC BIỂN ĐẢO ĐA TRANG</span>
            <h2 className="section-title">
              Khám phá Từng Chuyên mục Độc lập trong{' '}
              <span className="text-ocean">Không gian Số</span>
            </h2>
            <p className="section-subtitle">
              Website được tổ chức theo cấu trúc chuyên trang khoa học, giúp học sinh và giáo viên
              THPT truy cập trực tiếp từng lĩnh vực tri thức, học liệu, dòng thời gian lịch sử và
              công cụ tương tác.
            </p>
          </div>

          <div className="portal-directory-grid">
            {PORTAL_SECTIONS.map((item) => {
              const IconComp = item.icon
              return (
                <Link key={item.id} to={item.path} className="portal-directory-card">
                  <div className="portal-card-top">
                    <div className="pillar-icon-box">
                      <IconComp size={24} />
                    </div>
                    <span className="feature-badge">{item.badge}</span>
                  </div>
                  <h3 className="pillar-title">{item.title}</h3>
                  <p className="pillar-desc">{item.desc}</p>
                  <div className="portal-card-link">
                    <span>{item.cta}</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. TRANG CON TRONG HỆ SINH THÁI SỐ (6 TRANG CHỨC NĂNG TRỌNG TÂM) */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">CÁC TRANG CHỨC NĂNG TRONG HỆ SINH THÁI SỐ</span>
            <h2 className="section-title">
              Truy cập Trực tiếp <span className="text-ocean">6 Không gian Tương tác</span>
            </h2>
            <p className="section-subtitle">
              Mỗi phân hệ là một trang chức năng độc lập với đường dẫn riêng biệt, tích hợp công
              nghệ bản đồ số, thư viện học liệu, trí tuệ nhân tạo, phòng học số, không gian 360° và
              triển lãm trực tuyến.
            </p>
            <div className="section-header-cta">
              <Link to="/he-sinh-thai-so" className="btn-primary-gold">
                <Layers size={18} />
                <span>Xem toàn bộ Trung tâm Hệ sinh thái số</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="features-grid">
            {coreFeatures.map((feature) => {
              const IconComponent = ICON_MAP[feature.iconName] || Compass
              const routePath = getFeatureRoutePath(feature.id)
              return (
                <article
                  key={feature.id}
                  className={`feature-card accent-${feature.accentColor}`}
                >
                  <Link
                    to={routePath}
                    className="feature-illustration-wrap"
                    aria-label={`Mở trang ${feature.title}`}
                  >
                    <img
                      src={feature.image}
                      alt={`Hình minh họa ${feature.title}`}
                      className="feature-illustration-img"
                      loading="lazy"
                    />
                    <div className="feature-illustration-overlay">
                      <span className="feature-code-pill">{routePath}</span>
                      <span className="feature-badge-pill">{feature.badge}</span>
                    </div>
                  </Link>

                  <div className="feature-card-body">
                    <div className="feature-title-row">
                      <div className="feature-icon-wrapper">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-subtitle">{feature.subtitle}</p>
                      </div>
                    </div>

                    <p className="feature-description">{feature.shortDesc}</p>

                    <ul className="feature-highlights">
                      {feature.highlights.slice(0, 3).map((point, i) => (
                        <li key={i}>
                          <Check size={15} className="highlight-icon" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="feature-card-footer">
                    <div className="feature-preview-strip">
                      <span className="preview-strip-text">
                        Đường dẫn: <strong>{routePath}</strong> • {feature.samplePreview.coordinate}
                      </span>
                    </div>

                    <div className="feature-action-row">
                      <Link
                        to={routePath}
                        className="feature-action-btn primary-explore-btn"
                      >
                        <span>Mở trang {feature.title}</span>
                        <ArrowRight size={17} />
                      </Link>

                      {onSelectFeature && (
                        <button
                          type="button"
                          className="feature-quick-view-btn"
                          onClick={() => onSelectFeature(feature.id)}
                          title="Xem nhanh thông tin"
                        >
                          <Eye size={16} />
                          <span>Xem nhanh</span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* 4. KHỐI ĐIỂM NHẤN CHIỀU SÂU: CỘT MỐC CHỦ QUYỀN & GÓC HỌC TẬP */}
          <div className="sovereignty-banner">
            <div className="sovereignty-banner-content">
              <div className="sovereignty-banner-left">
                <span className="sovereignty-tag">
                  <Anchor size={15} />
                  <span>CHỦ QUYỀN THIÊNG LIÊNG • CƠ SỞ LỊCH SỬ &amp; PHÁP LÝ</span>
                </span>
                <h3>
                  Hành trình Xác lập &amp; Thực thi Chủ quyền Việt Nam đối với Hoàng Sa và Trường Sa
                </h3>
                <p>
                  Tra cứu toàn bộ biên niên sử 6 giai đoạn lịch sử, Châu bản triều Nguyễn (Di sản tư
                  liệu thế giới UNESCO), bản đồ cổ phương Tây và hệ thống pháp lý quốc tế UNCLOS
                  1982 tại chuyên trang Cột mốc Chủ quyền.
                </p>
                <div className="sovereignty-cta-row">
                  <Link to="/cot-moc-chu-quyen" className="btn-primary-gold">
                    <Clock size={18} />
                    <span>Vào trang Cột mốc Chủ quyền</span>
                    <ArrowRight size={17} />
                  </Link>
                  <Link to="/goc-hoc-sinh-giao-vien" className="btn-outline-light">
                    <GraduationCap size={18} />
                    <span>Góc Học sinh &amp; Giáo viên</span>
                  </Link>
                </div>
              </div>

              <div className="sovereignty-timeline-mini">
                <div className="mini-milestone-card">
                  <span className="mini-milestone-period">Thế kỷ XVII – XVIII</span>
                  <h4>Đội Hoàng Sa kiêm quản Đội Bắc Hải</h4>
                  <p>
                    Chúa Nguyễn lập đội Hoàng Sa hoạt động thường niên từ tháng 2 đến tháng 8 âm
                    lịch, ghi nhận trong Phủ biên tạp lục (1776).
                  </p>
                </div>
                <div className="mini-milestone-card">
                  <span className="mini-milestone-period">Thời Nguyễn (1802 – 1884)</span>
                  <h4>Châu bản triều Nguyễn &amp; Đại Nam nhất thống toàn đồ</h4>
                  <p>
                    Vua Gia Long (1816) và vua Minh Mạng cử Thủy quân cắm mốc, đo đạc thủy trình,
                    dựng miếu và vẽ bản đồ khẳng định chủ quyền nhà nước.
                  </p>
                </div>
                <div className="mini-milestone-card">
                  <span className="mini-milestone-period">1982 – 2012 – Nay</span>
                  <h4>Công ước UNCLOS 1982 &amp; Luật Biển Việt Nam 2012</h4>
                  <p>
                    Hoàn thiện cơ sở pháp lý quốc tế, quản lý hành chính huyện đảo Hoàng Sa (Đà
                    Nẵng) và huyện đảo Trường Sa (Khánh Hòa).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
