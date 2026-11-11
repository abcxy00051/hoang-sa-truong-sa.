import React, { useState } from 'react'
import {
  Map,
  BookOpen,
  Sparkles,
  GraduationCap,
  Clock,
  Compass,
  ArrowRight,
  ArrowLeft,
  Check,
  Search,
  Eye,
  ShieldCheck,
  Layers,
  Anchor,
  Globe,
  Award
} from 'lucide-react'
import {
  FEATURES_DATA,
  ECOSYSTEM_CATEGORIES,
  ECOSYSTEM_LEARNING_FLOW
} from '../data/homeData'

const ICON_MAP = {
  Map: Map,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Clock: Clock,
  Compass: Compass
}

const ECOSYSTEM_MISSION_POINTS = [
  {
    icon: Globe,
    tag: 'CÔNG NGHỆ & KHÔNG GIAN SỐ',
    title: 'Trực quan hóa Không gian Biển Đảo bằng Công nghệ Hiện đại',
    desc: 'Ứng dụng Bản đồ số GIS 2D, Sa bàn địa hình biển 3D và Trợ lý AI Coze giúp chuyển hóa các tọa độ địa lý, hải lý và văn bản pháp lý thành trải nghiệm trực quan, sinh động.'
  },
  {
    icon: BookOpen,
    tag: 'GIÁO DỤC & HỌC THUẬT CHUẨN XÁC',
    title: 'Chuẩn hóa Học liệu Lịch sử – Địa lý – Pháp lý Cấp THPT',
    desc: 'Tích hợp đồng bộ 8 chuyên đề thư viện, 25 cột mốc biên niên sử, 8 hồ sơ bản đồ cổ và 80 câu hỏi tương tác bám sát chương trình Giáo dục phổ thông 2018.'
  },
  {
    icon: Award,
    tag: 'Ý NGHĨA & MỤC TIÊU CỐT LÕI',
    title: 'Bồi đắp Tri thức Vững vàng – Lan tỏa Tình yêu Chủ quyền',
    desc: 'Giúp thế hệ trẻ hiểu rõ căn cứ lịch sử và cơ sở pháp lý quốc tế (UNCLOS 1982, Luật Biển Việt Nam 2012), từ đó nâng cao trách nhiệm bảo vệ chủ quyền Hoàng Sa – Trường Sa.'
  }
]

export default function EcosystemPage({
  activeRole,
  onRoleChange,
  onNavigateFeature,
  onQuickPreview,
  onBackHome
}) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFeatures = FEATURES_DATA.filter((feature) => {
    const matchesCategory =
      selectedCategory === 'all' || feature.category === selectedCategory
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !query ||
      feature.title.toLowerCase().includes(query) ||
      feature.shortDesc.toLowerCase().includes(query) ||
      feature.subtitle.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  const scrollToModules = () => {
    const el = document.getElementById('danh-sach-phan-he')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="ecosystem-page">
      {/* 1. FULL-WIDTH OCEANIC HERO SECTION */}
      <section className="ecosystem-hero-premium">
        {/* High-Resolution Ocean & Island Visual Backdrop with Depth Layers */}
        <div className="eco-hero-backdrop" aria-hidden="true">
          <img
            src="/assets/hero-bien-dao.jpg"
            alt="Đại dương và biển đảo Việt Nam"
            className="eco-hero-bg-img"
          />
          <div className="eco-hero-depth-overlay" />
          <div className="eco-hero-light-rays" />
          <div className="eco-hero-grid-mesh" />
        </div>

        <div className="container eco-hero-container">
          {/* Top Navigation Breadcrumb */}
          <div className="eco-hero-top-bar">
            <div className="ecosystem-breadcrumb">
              <button
                type="button"
                className="breadcrumb-back-btn"
                onClick={onBackHome}
              >
                <ArrowLeft size={16} />
                <span>Trang chủ</span>
              </button>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">Hệ sinh thái số</span>
            </div>

            <div className="eco-role-Inline-switch">
              <span className="eco-role-inline-label">Chế độ hiển thị:</span>
              <button
                type="button"
                className={`eco-role-pill ${activeRole === 'student' ? 'active' : ''}`}
                onClick={() => onRoleChange('student')}
              >
                <Sparkles size={14} />
                <span>Học sinh THPT</span>
              </button>
              <button
                type="button"
                className={`eco-role-pill ${activeRole === 'teacher' ? 'active' : ''}`}
                onClick={() => onRoleChange('teacher')}
              >
                <GraduationCap size={14} />
                <span>Giáo viên THPT</span>
              </button>
            </div>
          </div>

          {/* Main Hero Headline, Slogan & Introduction */}
          <div className="eco-hero-main-layout">
            <div className="eco-hero-left">
              <div className="ecosystem-badge-row">
                <span className="hero-badge-gold">
                  <Layers size={14} />
                  <span>TRUNG TÂM KHÁM PHÁ TRI THỨC BIỂN ĐẢO SỐ</span>
                </span>
                <span className="hero-badge-coordinates">
                  <ShieldCheck size={14} />
                  <span>6 Phân hệ Chuyên sâu • Chuẩn GDPT 2018</span>
                </span>
              </div>

              <h1 className="eco-hero-main-title">
                HỆ SINH THÁI SỐ{' '}
                <span className="text-gold-highlight">BIỂN ĐẢO VIỆT NAM</span>
              </h1>

              <p className="eco-hero-slogan">
                Chạm công nghệ <span className="slogan-sep">–</span> Khám phá tri thức{' '}
                <span className="slogan-sep">–</span> Lan tỏa tình yêu biển đảo.
              </p>

              <p className="eco-hero-intro-text">
                Trung tâm học tập và khám phá trực tuyến kết hợp giữa{' '}
                <strong>công nghệ số hiện đại (Bản đồ GIS, Sa bàn 3D, Trợ lý AI)</strong> với{' '}
                <strong>kho tàng sử liệu, bản đồ cổ và văn bản pháp lý chính thống</strong>.
                Hệ sinh thái được kiến tạo nhằm giúp học sinh và giáo viên THPT tiếp cận
                toàn diện kiến thức về vùng biển đảo Tổ quốc, đặc biệt là hai quần đảo{' '}
                <strong>Hoàng Sa</strong> và <strong>Trường Sa</strong>, một cách khoa học,
                sinh động và giàu cảm hứng.
              </p>

              <div className="eco-hero-actions">
                <button
                  type="button"
                  className="btn-primary-gold"
                  onClick={scrollToModules}
                >
                  <Compass size={19} />
                  <span>Khám phá 6 Phân hệ Chức năng</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  className="btn-secondary-glass"
                  onClick={() => onNavigateFeature('ban-do-so')}
                >
                  <Map size={18} />
                  <span>Mở Bản đồ số GIS</span>
                </button>
              </div>
            </div>

            {/* Right Architectural Compass & Quick Overview Telemetry Panel */}
            <div className="eco-hero-right">
              <div className="eco-overview-glass-panel">
                <div className="eco-panel-header">
                  <div className="eco-panel-badge">
                    <Anchor size={16} />
                    <span>CẤU TRÚC HỆ SINH THÁI SỐ</span>
                  </div>
                  <span className="eco-panel-tag">06 PHÂN HỆ</span>
                </div>

                <p className="eco-panel-lead">
                  Chạm vào bất kỳ phân hệ nào dưới đây để truy cập trực tiếp vào không gian
                  tương tác chuyên biệt:
                </p>

                <div className="eco-quick-directory-grid">
                  {FEATURES_DATA.map((item) => {
                    const ItemIcon = ICON_MAP[item.iconName] || Compass
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className="eco-quick-dir-item"
                        onClick={() => onNavigateFeature(item.id)}
                      >
                        <span className="dir-item-code">{item.code}</span>
                        <ItemIcon size={15} className="dir-item-icon" />
                        <span className="dir-item-title">{item.title}</span>
                      </button>
                    )
                  })}
                </div>

                <div className="eco-panel-footer">
                  <span>✦ Chạm tri thức – Vững chủ quyền</span>
                  <strong>Hoàng Sa &amp; Trường Sa của Việt Nam</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Meaning & Academic Objectives Strip */}
          <div className="eco-mission-strip">
            {ECOSYSTEM_MISSION_POINTS.map((point, index) => {
              const MissionIcon = point.icon
              return (
                <div key={index} className="eco-mission-card">
                  <div className="eco-mission-icon-wrap">
                    <MissionIcon size={22} />
                  </div>
                  <div className="eco-mission-text">
                    <span className="eco-mission-tag">{point.tag}</span>
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Subtle Wave Transition */}
        <div className="eco-hero-wave" aria-hidden="true">
          <svg
            viewBox="0 0 1440 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 38L80 34C160 30 320 22 480 26C640 30 800 46 960 50C1120 54 1280 44 1360 39L1440 34V74H0V38Z"
              fill="#B6E0EB"
            />
          </svg>
        </div>
      </section>

      {/* 2. STICKY FILTER & SEARCH TOOLBAR */}
      <section className="ecosystem-toolbar-section">
        <div className="container">
          <div className="ecosystem-toolbar">
            <div
              className="ecosystem-category-tabs"
              role="tablist"
              aria-label="Lọc phân hệ chức năng"
            >
              {ECOSYSTEM_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                  className={`eco-cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="ecosystem-search-box">
              <Search size={18} className="eco-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm phân hệ: Bản đồ số, Thư viện, Trợ lý AI, Hồ sơ bản đồ..."
                aria-label="Tìm nhanh phân hệ chức năng"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6 PREMIUM FUNCTIONAL SUBSYSTEMS SHOWCASE */}
      <section id="danh-sach-phan-he" className="ecosystem-cards-section">
        <div className="container">
          <div className="eco-section-heading">
            <span className="section-eyebrow">
              6 PHÂN HỆ CHỨC NĂNG CHUYÊN SÂU
            </span>
            <h2 className="section-title">
              Khám phá Toàn diện <span className="text-ocean">Không gian Tri thức Biển Đảo</span>
            </h2>
            <p className="section-subtitle">
              Mỗi phân hệ được thiết kế với hình ảnh chủ đề riêng biệt và không gian làm việc
              tương tác thực tế — kết hợp hài hòa giữa chuẩn mực học thuật lịch sử, pháp lý
              với trải nghiệm công nghệ hiện đại.
            </p>
          </div>

          <div className="ecosystem-showcase-grid">
            {filteredFeatures.map((feature) => {
              const IconComponent = ICON_MAP[feature.iconName] || Compass
              return (
                <article
                  key={feature.id}
                  className={`eco-subsystem-card accent-${feature.accentColor}`}
                >
                  {/* Dedicated Opening Visual Banner for Each Subsystem */}
                  <div
                    className="eco-subsystem-media"
                    onClick={() => onNavigateFeature(feature.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && onNavigateFeature(feature.id)
                    }
                    aria-label={`Khám phá phân hệ ${feature.title}`}
                  >
                    <img
                      src={feature.image}
                      alt={`Hình đại diện phân hệ ${feature.title}`}
                      className="eco-subsystem-img"
                      loading="lazy"
                    />
                    <div className="eco-subsystem-media-gradient" />

                    <div className="eco-subsystem-top-badges">
                      <span className="eco-subsystem-code">
                        PHÂN HỆ #{feature.code}
                      </span>
                      <span className="eco-subsystem-badge">
                        {feature.badge}
                      </span>
                    </div>

                    <div className="eco-subsystem-media-caption">
                      <span>{feature.imageCaption || feature.samplePreview.coordinate}</span>
                    </div>
                  </div>

                  {/* Card Academic Body */}
                  <div className="eco-subsystem-body">
                    <div className="eco-subsystem-heading">
                      <div className="eco-subsystem-icon">
                        <IconComponent size={24} />
                      </div>
                      <div className="eco-subsystem-titles">
                        <h3 className="eco-subsystem-title">{feature.title}</h3>
                        <p className="eco-subsystem-subtitle">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="eco-subsystem-desc">{feature.shortDesc}</p>

                    <ul className="eco-subsystem-highlights">
                      {feature.highlights.map((point, i) => (
                        <li key={i}>
                          <Check size={15} className="eco-check-icon" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Role-based Guidance Strip */}
                    <div className="eco-subsystem-role-guidance">
                      <strong>
                        {activeRole === 'student'
                          ? '🎓 Gợi ý cho Học sinh THPT:'
                          : '📋 Gợi ý cho Giáo viên THPT:'}
                      </strong>{' '}
                      <span>
                        {activeRole === 'student'
                          ? feature.studentTip
                          : feature.teacherTip}
                      </span>
                    </div>
                  </div>

                  {/* Card Interactive Footer */}
                  <div className="eco-subsystem-footer">
                    <button
                      type="button"
                      className="eco-explore-primary-btn"
                      onClick={() => onNavigateFeature(feature.id)}
                    >
                      <span>{feature.samplePreview.actionText || 'Khám phá ngay'}</span>
                      <ArrowRight size={17} />
                    </button>

                    <button
                      type="button"
                      className="eco-quick-preview-btn"
                      onClick={() => onQuickPreview(feature.id)}
                      title={`Xem tóm tắt nhanh ${feature.title}`}
                    >
                      <Eye size={16} />
                      <span>Xem nhanh</span>
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="ecosystem-empty-state">
              <p>
                Không tìm thấy phân hệ phù hợp với từ khóa "{searchQuery}".
              </p>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
              >
                <span>Hiển thị tất cả 6 phân hệ chức năng</span>
              </button>
            </div>
          )}

          {/* 4. 4-STEP INTEGRATED LEARNING ROADMAP */}
          <div className="ecosystem-flow-box">
            <div className="ecosystem-flow-header">
              <span className="section-eyebrow">LỘ TRÌNH KHÁM PHÁ ĐỀ XUẤT</span>
              <h3>4 Bước Kết nối Tri thức trong Hệ sinh thái Số Biển Đảo</h3>
              <p>
                Từ quan sát không gian địa lý, đối chiếu bản đồ – sử liệu cổ đến tương tác
                cùng AI và trải nghiệm thực hành giúp học sinh THPT làm chủ kiến thức bền vững.
              </p>
            </div>

            <div className="ecosystem-flow-grid">
              {ECOSYSTEM_LEARNING_FLOW.map((item, idx) => (
                <div
                  key={idx}
                  className="ecosystem-flow-card"
                  onClick={() => onNavigateFeature(item.moduleId)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && onNavigateFeature(item.moduleId)
                  }
                >
                  <span className="flow-step-tag">{item.step}</span>
                  <h4>{item.title}</h4>
                  <span className="flow-module-name">{item.moduleTitle}</span>
                  <p>{item.desc}</p>
                  <span className="flow-jump-link">
                    Khám phá ngay <ArrowRight size={14} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
