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
  Layers
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

  return (
    <div className="ecosystem-page">
      {/* Page Hero Header */}
      <section className="ecosystem-hero">
        <div className="container">
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

          <div className="ecosystem-hero-grid">
            <div className="ecosystem-hero-content">
              <div className="ecosystem-badge-row">
                <span className="hero-badge-gold">
                  <Layers size={14} />
                  <span>TRANG CHỨC NĂNG HỆ SINH THÁI SỐ</span>
                </span>
                <span className="hero-badge-coordinates">
                  <ShieldCheck size={14} />
                  <span>6 Khu vực Học tập &amp; Trải nghiệm THPT</span>
                </span>
              </div>

              <h1 className="ecosystem-hero-title">
                Hệ sinh thái Giáo dục Số{' '}
                <span className="text-gold-highlight">Biển Đảo Việt Nam</span>
              </h1>

              <p className="ecosystem-hero-desc">
                Không gian tích hợp <strong>6 khu vực chức năng chuyên biệt</strong> giúp{' '}
                <strong>Học sinh THPT</strong> và <strong>Giáo viên</strong> tra cứu bản đồ,
                khai thác tư liệu, hỏi đáp cùng Trợ lý AI, tham gia trò chơi học tập và
                khám phá triển lãm số trực quan trên cả máy tính lẫn điện thoại.
              </p>
            </div>

            {/* Role Switcher Card for THPT Students & Teachers */}
            <div className="ecosystem-role-card">
              <span className="ecosystem-role-eyebrow">CHẾ ĐỘ GỢI Ý HỌC TẬP</span>
              <h3>Bạn đang truy cập với vai trò:</h3>
              <div className="ecosystem-role-buttons">
                <button
                  type="button"
                  className={`eco-role-btn ${activeRole === 'student' ? 'active' : ''}`}
                  onClick={() => onRoleChange('student')}
                >
                  <Sparkles size={16} />
                  <span>Học sinh THPT</span>
                </button>
                <button
                  type="button"
                  className={`eco-role-btn ${activeRole === 'teacher' ? 'active' : ''}`}
                  onClick={() => onRoleChange('teacher')}
                >
                  <GraduationCap size={16} />
                  <span>Giáo viên THPT</span>
                </button>
              </div>
              <p className="ecosystem-role-note">
                {activeRole === 'student'
                  ? '✦ Hiển thị mẹo tự học, ôn luyện và trò chơi tương tác phù hợp với học sinh Khối 10, 11, 12.'
                  : '✦ Hiển thị gợi ý sử dụng học liệu, bản đồ trình chiếu và tổ chức hoạt động trên lớp.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="ecosystem-toolbar-section">
        <div className="container">
          <div className="ecosystem-toolbar">
            <div className="ecosystem-category-tabs" role="tablist" aria-label="Lọc khu vực chức năng">
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
                placeholder="Tìm nhanh khu vực chức năng..."
                aria-label="Tìm nhanh khu vực chức năng"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Functional Areas Grid */}
      <section className="ecosystem-cards-section">
        <div className="container">
          <div className="features-grid ecosystem-page-grid">
            {filteredFeatures.map((feature) => {
              const IconComponent = ICON_MAP[feature.iconName] || Compass
              return (
                <article
                  key={feature.id}
                  className={`feature-card ecosystem-card accent-${feature.accentColor}`}
                >
                  {/* Illustrative Image Banner */}
                  <div
                    className="feature-illustration-wrap"
                    onClick={() => onNavigateFeature(feature.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onNavigateFeature(feature.id)}
                    aria-label={`Mở trang ${feature.title}`}
                  >
                    <img
                      src={feature.image}
                      alt={`Minh họa ${feature.title}`}
                      className="feature-illustration-img"
                      loading="lazy"
                    />
                    <div className="feature-illustration-overlay">
                      <span className="feature-code-pill">Khu vực #{feature.code}</span>
                      <span className="feature-badge-pill">{feature.badge}</span>
                    </div>
                  </div>

                  <div className="feature-card-body">
                    <div className="feature-title-row">
                      <div className="feature-icon-wrapper">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h2 className="feature-title">{feature.title}</h2>
                        <p className="feature-subtitle">{feature.subtitle}</p>
                      </div>
                    </div>

                    <p className="feature-description">{feature.shortDesc}</p>

                    <ul className="feature-highlights">
                      {feature.highlights.map((point, i) => (
                        <li key={i}>
                          <Check size={15} className="highlight-icon" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Role-based Tip for THPT Student / Teacher */}
                    <div className="feature-role-tip">
                      <strong>
                        {activeRole === 'student' ? '💡 Gợi ý cho Học sinh:' : '📌 Gợi ý cho Giáo viên:'}
                      </strong>{' '}
                      <span>
                        {activeRole === 'student' ? feature.studentTip : feature.teacherTip}
                      </span>
                    </div>
                  </div>

                  <div className="feature-card-footer">
                    <div className="feature-action-row">
                      <button
                        type="button"
                        className="feature-action-btn primary-explore-btn"
                        onClick={() => onNavigateFeature(feature.id)}
                      >
                        <span>{feature.samplePreview.actionText || 'Khám phá ngay'}</span>
                        <ArrowRight size={17} />
                      </button>

                      <button
                        type="button"
                        className="feature-quick-view-btn"
                        onClick={() => onQuickPreview(feature.id)}
                        title="Xem tóm tắt nhanh"
                      >
                        <Eye size={17} />
                        <span>Xem nhanh</span>
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="ecosystem-empty-state">
              <p>Không tìm thấy khu vực chức năng phù hợp với từ khóa "{searchQuery}".</p>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
              >
                <span>Hiển thị tất cả 6 khu vực</span>
              </button>
            </div>
          )}

          {/* 4-Step Learning Flow for THPT Students */}
          <div className="ecosystem-flow-box">
            <div className="ecosystem-flow-header">
              <span className="section-eyebrow">LỘ TRÌNH HỌC TẬP ĐỀ XUẤT</span>
              <h3>4 Bước Khai thác Hệ sinh thái số Hiệu quả cho Học sinh THPT</h3>
              <p>
                Kết hợp tuần tự 6 khu vực chức năng giúp học sinh nắm vững kiến thức Địa lý, Lịch sử
                và Giáo dục Quốc phòng - An ninh một cách tự nhiên, sinh động.
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
                  onKeyDown={(e) => e.key === 'Enter' && onNavigateFeature(item.moduleId)}
                >
                  <span className="flow-step-tag">{item.step}</span>
                  <h4>{item.title}</h4>
                  <span className="flow-module-name">{item.moduleTitle}</span>
                  <p>{item.desc}</p>
                  <span className="flow-jump-link">
                    Truy cập ngay <ArrowRight size={14} />
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
