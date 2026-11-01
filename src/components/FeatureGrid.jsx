import React from 'react'
import {
  Map,
  BookOpen,
  Sparkles,
  GraduationCap,
  Clock,
  Compass,
  ArrowRight,
  Check,
  ShieldAlert,
  Eye,
  Layers
} from 'lucide-react'
import { FEATURES_DATA, HISTORICAL_MILESTONES_PREVIEW } from '../data/homeData'

const ICON_MAP = {
  Map: Map,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Clock: Clock,
  Compass: Compass
}

export default function FeatureGrid({
  onSelectFeature,
  onStartExplore,
  onNavigateFeature,
  onOpenEcosystemPage
}) {
  const handleExploreClick = (id) => {
    if (onNavigateFeature) {
      onNavigateFeature(id)
    } else if (onSelectFeature) {
      onSelectFeature(id)
    }
  }

  return (
    <section id="chuc-nang" className="features-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-eyebrow">6 KHU VỰC CHỨC NĂNG TRỌNG TÂM</span>
          <h2 className="section-title">
            Hệ sinh thái Học tập &amp; Khám phá <span className="text-ocean">Biển Đảo Số</span>
          </h2>
          <p className="section-subtitle">
            Mỗi khu vực chức năng mở ra một phương thức tiếp cận tri thức độc đáo — từ quan sát không
            gian địa lý trên <strong>Bản đồ số Hoàng Sa – Trường Sa</strong>, tra cứu{' '}
            <strong>Thư viện tri thức biển đảo</strong> đến tương tác trực tiếp với{' '}
            <strong>Trợ lý AI</strong>, <strong>Phòng học tương tác</strong>,{' '}
            <strong>Dòng thời gian lịch sử</strong> và <strong>Triển lãm số</strong>.
          </p>

          {onOpenEcosystemPage && (
            <div className="section-header-cta">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={onOpenEcosystemPage}
              >
                <Layers size={18} />
                <span>Mở Trang Hệ sinh thái số hoàn chỉnh</span>
                <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="features-grid">
          {FEATURES_DATA.map((feature) => {
            const IconComponent = ICON_MAP[feature.iconName] || Compass
            return (
              <article
                key={feature.id}
                className={`feature-card accent-${feature.accentColor}`}
              >
                {/* Illustrative Image Banner */}
                <div
                  className="feature-illustration-wrap"
                  onClick={() => handleExploreClick(feature.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleExploreClick(feature.id)}
                  aria-label={`Khám phá ${feature.title}`}
                >
                  <img
                    src={feature.image}
                    alt={`Hình minh họa ${feature.title}`}
                    className="feature-illustration-img"
                    loading="lazy"
                  />
                  <div className="feature-illustration-overlay">
                    <span className="feature-code-pill">#{feature.code}</span>
                    <span className="feature-badge-pill">{feature.badge}</span>
                  </div>
                </div>

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
                    {feature.highlights.map((point, i) => (
                      <li key={i}>
                        <Check size={15} className="highlight-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="feature-card-footer">
                  <div className="feature-preview-strip">
                    <span className="preview-strip-text">{feature.samplePreview.coordinate}</span>
                  </div>

                  <div className="feature-action-row">
                    <button
                      type="button"
                      className="feature-action-btn primary-explore-btn"
                      onClick={() => handleExploreClick(feature.id)}
                    >
                      <span>{feature.samplePreview.actionText || 'Khám phá ngay'}</span>
                      <ArrowRight size={17} />
                    </button>

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

        {/* Sovereignty Milestone Strip & Bottom CTA Banner */}
        <div id="cot-moc" className="sovereignty-banner">
          <div className="sovereignty-banner-content">
            <div className="sovereignty-banner-left">
              <div className="sovereignty-tag">
                <ShieldAlert size={16} />
                <span>DÒNG CHẢY CHỦ QUYỀN VIỆT NAM</span>
              </div>
              <h3>Từ đội Hoàng Sa thế kỷ XVII đến Luật Biển Việt Nam hiện đại</h3>
              <p>
                Nhà nước Việt Nam qua các thời kỳ lịch sử đã xác lập và thực thi chủ quyền liên tục,
                hòa bình đối với hai quần đảo Hoàng Sa và Trường Sa. Hãy cùng học sinh khám phá
                những bằng chứng lịch sử và pháp lý không thể chối cãi.
              </p>
              <div className="sovereignty-cta-row">
                <button
                  type="button"
                  className="btn-primary-gold"
                  onClick={onOpenEcosystemPage || onStartExplore}
                >
                  <Compass size={19} />
                  <span>Khám phá Hệ sinh thái số</span>
                </button>
                <button
                  type="button"
                  className="btn-outline-light"
                  onClick={() => handleExploreClick('dong-thoi-gian-lich-su')}
                >
                  <span>Xem Dòng thời gian lịch sử</span>
                </button>
              </div>
            </div>

            <div className="sovereignty-timeline-mini">
              {HISTORICAL_MILESTONES_PREVIEW.map((milestone, idx) => (
                <div key={idx} className="mini-milestone-card">
                  <span className="mini-milestone-period">{milestone.period}</span>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
