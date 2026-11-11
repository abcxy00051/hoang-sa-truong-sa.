import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Map,
  Compass,
  Clock,
  Layers,
  Award,
  FileText,
  Users
} from 'lucide-react'
import { AUDIENCE_MODES } from '../data/homeData'

const GRADE_CURRICULUM_PATHWAYS = [
  {
    grade: 'KHỐI 10 THPT',
    subject: 'Lịch sử 10 • Địa lý 10 • GDQP-AN 10',
    focus: 'Tổng quan Biển Đông, Vị trí Địa chiến lược & Văn minh Biển của Người Việt',
    topics: [
      'Vị trí địa lý, điều kiện tự nhiên và tài nguyên vùng biển đảo Việt Nam.',
      'Quá trình cư dân Việt cổ khai phá biển đảo và nhận thức về Biển Đông trước thế kỷ XVII.',
      'Các vùng biển thuộc chủ quyền, quyền chủ quyền và quyền tài phán theo UNCLOS 1982.'
    ],
    recommendedRoute: '/ban-do-so',
    recommendedLabel: 'Thực hành trên Bản đồ số GIS'
  },
  {
    grade: 'KHỐI 11 THPT',
    subject: 'Lịch sử 11 (Chuyên đề Biển Đông) • Địa lý 11 • GDKT&PL 11',
    focus: 'Quá trình Xác lập, Thực thi Chủ quyền đối với Hoàng Sa & Trường Sa',
    topics: [
      'Hoạt động của Đội Hoàng Sa và Đội Bắc Hải thời chúa Nguyễn và Tây Sơn (thế kỷ XVII–XVIII).',
      'Vương triều Nguyễn thực thi chủ quyền cấp nhà nước: Châu bản, đo đạc thủy trình, cắm mốc (1816, 1836).',
      'Tầm quan trọng chiến lược của Biển Đông đối với tuyến hàng hải và kinh tế khu vực.'
    ],
    recommendedRoute: '/cot-moc-chu-quyen',
    recommendedLabel: 'Tra cứu Cột mốc Chủ quyền'
  },
  {
    grade: 'KHỐI 12 THPT',
    subject: 'Lịch sử 12 • Địa lý 12 (Kinh tế biển) • GDQP-AN 12',
    focus: 'Phát triển Bền vững Kinh tế Biển gắn với Bảo vệ Chủ quyền & An ninh Biển đảo',
    topics: [
      'Chiến lược phát triển bền vững kinh tế biển Việt Nam và bảo vệ môi trường sinh thái biển.',
      'Đấu tranh bảo vệ chủ quyền biển đảo bằng biện pháp hòa bình trên cơ sở luật pháp quốc tế.',
      'Trách nhiệm của học sinh, thanh niên THPT trong sự nghiệp xây dựng và bảo vệ Tổ quốc.'
    ],
    recommendedRoute: '/phong-hoc-tuong-tac',
    recommendedLabel: 'Luyện tập tại Phòng học Tương tác'
  }
]

const TEACHING_SCENARIOS = [
  {
    badge: 'KỊCH BẢN SƯ PHẠM 01',
    title: 'Tiết học Liên môn 45 phút trên Lớp (Lịch sử – Địa lý)',
    duration: '45 phút • Trình chiếu trực tiếp',
    steps: [
      'Khởi động (7 phút): Quan sát tọa độ địa lý và sa bàn địa hình biển 3D tại trang /ban-do-so.',
      'Hình thành kiến thức (20 phút): Phân tích bản đồ cổ tại /ho-so-ban-do và Châu bản tại /cot-moc-chu-quyen.',
      'Luyện tập & Đánh giá (18 phút): Tổ chức thi đua trắc nghiệm & xử lý tình huống tại /phong-hoc-tuong-tac.'
    ]
  },
  {
    badge: 'KỊCH BẢN SƯ PHẠM 02',
    title: 'Hoạt động Ngoại khóa & Sinh hoạt Chuyên đề Dưới cờ',
    duration: '60 – 90 phút • Toàn khối / Câu lạc bộ',
    steps: [
      'Khám phá trục biên niên sử 6 thời kỳ và 25 cột mốc chủ quyền tại trang /cot-moc-chu-quyen.',
      'Giao lưu hỏi đáp nhanh cùng Trợ lý AI Biển Đảo tại trang /tro-ly-ai.',
      'Tổ chức thi đua ghép mốc sự kiện và nhận diện bản đồ tại trang /phong-hoc-tuong-tac.'
    ]
  },
  {
    badge: 'KỊCH BẢN SƯ PHẠM 03',
    title: 'Dự án Tự học & Nghiên cứu Khoa học của Học sinh THPT',
    duration: 'Học tập cá nhân / Nhóm 3–5 học sinh',
    steps: [
      'Tra cứu 8 chuyên đề học thuật chuyên sâu tại trang /thu-vien-tri-thuc.',
      'Trích dẫn đúng nguồn sử liệu gốc, Châu bản và điều khoản UNCLOS 1982.',
      'Hoàn thành bộ thử thách học tập và nhận Huy hiệu "Công dân Trẻ Vững Chủ quyền".'
    ]
  }
]

export default function StudentTeacherPage({ activeRole = 'student', onRoleChange }) {
  const [selectedGradeIdx, setSelectedGradeIdx] = useState(0)
  const currentAudience = AUDIENCE_MODES[activeRole] || AUDIENCE_MODES.student

  return (
    <div className="page-transition-wrapper">
      {/* 1. HERO BANNER RIÊNG CỦA TRANG GÓC HỌC SINH & GIÁO VIÊN (/goc-hoc-sinh-giao-vien) */}
      <section className="ecosystem-hero-premium">
        <div className="eco-hero-backdrop" aria-hidden="true">
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
              <span className="breadcrumb-current">
                Góc Học sinh &amp; Giáo viên (/goc-hoc-sinh-giao-vien)
              </span>
            </div>
          </div>

          <div className="eco-hero-main-layout">
            <div className="eco-hero-left">
              <div className="ecosystem-badge-row">
                <span className="hero-badge-gold">
                  <GraduationCap size={14} />
                  <span>CHUYÊN TRANG ĐỒNG HÀNH DẠY &amp; HỌC THPT</span>
                </span>
                <span className="hero-badge-coordinates">
                  <Sparkles size={14} />
                  <span>Khối 10 • Khối 11 • Khối 12 (Chuẩn GDPT 2018)</span>
                </span>
              </div>

              <h1 className="eco-hero-main-title">
                GÓC HỌC SINH &amp;{' '}
                <span className="text-gold-highlight">GIÁO VIÊN THPT</span>
              </h1>

              <p className="eco-hero-slogan">
                Không gian định hướng lộ trình tự học cho học sinh và kịch bản tổ chức bài giảng số
                cho giáo viên THPT.
              </p>

              <p className="eco-hero-intro-text">
                Chuyên trang cung cấp lộ trình học tập phân hóa theo từng khối lớp 10, 11, 12; hướng
                dẫn khai thác học liệu số trong tiết học chính khóa, hoạt động trải nghiệm hướng
                nghiệp và câu lạc bộ biển đảo tại nhà trường.
              </p>

              <div className="hero-cta-group">
                <Link to="/phong-hoc-tuong-tac" className="btn-primary-gold">
                  <Award size={18} />
                  <span>Vào Phòng học Tương tác</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/thu-vien-tri-thuc" className="btn-secondary-glass">
                  <BookOpen size={18} />
                  <span>Mở Thư viện Tri thức</span>
                </Link>
              </div>
            </div>

            <div className="eco-hero-right">
              <div className="eco-overview-glass-panel">
                <div className="eco-panel-header">
                  <span className="eco-panel-badge">CHẾ ĐỘ ĐANG KÍCH HOẠT</span>
                  <span className="eco-panel-status">
                    ● {activeRole === 'student' ? 'Học sinh THPT' : 'Giáo viên THPT'}
                  </span>
                </div>
                <p className="eco-panel-lead">
                  Chuyển đổi linh hoạt giữa góc nhìn <strong>Học sinh THPT</strong> (tự học, ôn
                  luyện, hỏi đáp AI) và <strong>Giáo viên THPT</strong> (trình chiếu bản đồ, tổ chức
                  trò chơi, trích dẫn tư liệu gốc).
                </p>
                <div className="eco-quick-directory">
                  <Link to="/ban-do-so" className="eco-quick-dir-item">
                    <span className="dir-item-code">01</span>
                    <div className="dir-item-text">
                      <strong>Bản đồ số GIS (/ban-do-so)</strong>
                      <span>Trực quan hóa tọa độ Hoàng Sa &amp; Trường Sa</span>
                    </div>
                  </Link>
                  <Link to="/thu-vien-tri-thuc" className="eco-quick-dir-item">
                    <span className="dir-item-code">02</span>
                    <div className="dir-item-text">
                      <strong>Thư viện Tri thức (/thu-vien-tri-thuc)</strong>
                      <span>8 chuyên đề học liệu chuẩn SGK THPT</span>
                    </div>
                  </Link>
                  <Link to="/phong-hoc-tuong-tac" className="eco-quick-dir-item">
                    <span className="dir-item-code">03</span>
                    <div className="dir-item-text">
                      <strong>Phòng học Tương tác (/phong-hoc-tuong-tac)</strong>
                      <span>Trắc nghiệm, ghép mốc &amp; tình huống thực tiễn</span>
                    </div>
                  </Link>
                  <Link to="/tro-ly-ai" className="eco-quick-dir-item">
                    <span className="dir-item-code">04</span>
                    <div className="dir-item-text">
                      <strong>Trợ lý AI Biển Đảo (/tro-ly-ai)</strong>
                      <span>Hỏi đáp tri thức 24/7 cùng Coze AI</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BỘ CHUYỂN ĐỔI ĐỐI TƯỢNG HỌC SINH & GIÁO VIÊN */}
      <section className="about-section">
        <div className="container">
          <div className="audience-showcase-box">
            <div className="audience-header-bar">
              <div className="audience-header-text">
                <span className="audience-label-tag">CHẾ ĐỘ TRẢI NGHIỆM CÁ NHÂN HÓA</span>
                <h3>Lựa chọn Vai trò Sử dụng để Xem Hướng dẫn Chuyên biệt</h3>
              </div>
              <div className="audience-tab-buttons" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeRole === 'student'}
                  className={`audience-tab-btn ${activeRole === 'student' ? 'active' : ''}`}
                  onClick={() => onRoleChange && onRoleChange('student')}
                >
                  <Sparkles size={18} />
                  <span>Dành cho Học sinh THPT</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeRole === 'teacher'}
                  className={`audience-tab-btn ${activeRole === 'teacher' ? 'active' : ''}`}
                  onClick={() => onRoleChange && onRoleChange('teacher')}
                >
                  <GraduationCap size={18} />
                  <span>Dành cho Giáo viên THPT</span>
                </button>
              </div>
            </div>

            <div className="audience-content-grid">
              <div className="audience-info-col">
                <span className="audience-mode-badge">{currentAudience.badge}</span>
                <h4 className="audience-mode-title">{currentAudience.title}</h4>
                <p className="audience-mode-subtitle">{currentAudience.subtitle}</p>
                <Link to="/phong-hoc-tuong-tac" className="btn-primary-gold">
                  <span>{currentAudience.ctaLabel}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="audience-benefits-col">
                {currentAudience.benefits.map((item, idx) => (
                  <div key={idx} className="audience-benefit-card">
                    <div className="benefit-check-icon">
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="benefit-text">
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. LỘ TRÌNH HỌC TẬP THEO KHỐI LỚP 10, 11, 12 */}
          <div className="section-header" style={{ marginTop: '64px' }}>
            <span className="section-eyebrow">CHƯƠNG TRÌNH GIÁO DỤC PHỔ THÔNG 2018</span>
            <h2 className="section-title">
              Lộ trình Khai thác Học liệu theo <span className="text-ocean">Khối lớp 10 – 11 – 12</span>
            </h2>
            <p className="section-subtitle">
              Nội dung trên website được thiết kế bám sát yêu cầu cần đạt của các môn Lịch sử, Địa
              lý, Giáo dục Kinh tế &amp; Pháp luật và Giáo dục Quốc phòng &amp; An ninh ở từng khối
              lớp.
            </p>
          </div>

          <div className="pillars-grid">
            {GRADE_CURRICULUM_PATHWAYS.map((pathway, idx) => (
              <article
                key={pathway.grade}
                className="pillar-card"
                onClick={() => setSelectedGradeIdx(idx)}
              >
                <div className="pillar-card-top">
                  <span className="feature-badge">{pathway.grade}</span>
                  <span className="pillar-number">0{idx + 1}</span>
                </div>
                <h3 className="pillar-title">{pathway.focus}</h3>
                <p
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: 'var(--moonstone)',
                    marginBottom: '12px'
                  }}
                >
                  {pathway.subject}
                </p>
                <ul className="feature-highlights" style={{ flex: 1 }}>
                  {pathway.topics.map((topic, tIdx) => (
                    <li key={tIdx}>
                      <CheckCircle2 size={15} className="highlight-icon" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <div className="pillar-tag" style={{ marginTop: '16px' }}>
                  <Link
                    to={pathway.recommendedRoute}
                    className="feature-action-btn"
                    style={{ marginTop: '6px' }}
                  >
                    <span>{pathway.recommendedLabel}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* 4. KỊCH BẢN TỔ CHỨC DẠY HỌC & NGOẠI KHÓA */}
          <div className="section-header" style={{ marginTop: '56px' }}>
            <span className="section-eyebrow">HƯỚNG DẪN TRIỂN KHAI THỰC TIỄN</span>
            <h2 className="section-title">
              Kịch bản Ứng dụng trong <span className="text-ocean">Nhà trường THPT</span>
            </h2>
          </div>

          <div className="pillars-grid">
            {TEACHING_SCENARIOS.map((sc, idx) => (
              <article key={idx} className="pillar-card">
                <div className="pillar-card-top">
                  <span className="feature-badge">{sc.badge}</span>
                  <Users size={22} style={{ color: 'var(--moonstone)' }} />
                </div>
                <h3 className="pillar-title">{sc.title}</h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--moonstone)',
                    marginBottom: '12px'
                  }}
                >
                  ⏱ {sc.duration}
                </p>
                <ul className="feature-highlights">
                  {sc.steps.map((step, sIdx) => (
                    <li key={sIdx}>
                      <CheckCircle2 size={15} className="highlight-icon" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
