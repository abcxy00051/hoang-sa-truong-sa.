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
import { FEATURES_DATA } from '../data/homeData'
import SovereigntyTimelineModule from './SovereigntyTimelineModule'

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
          <span className="section-eyebrow">8 PHÂN HỆ CHỨC NĂNG TRỌNG TÂM</span>
          <h2 className="section-title">
            Hệ sinh thái Học tập &amp; Khám phá <span className="text-ocean">Biển Đảo Số</span>
          </h2>
          <p className="section-subtitle">
            Mỗi phân hệ mở ra một phương thức tiếp cận tri thức chuyên sâu — từ{' '}
            <strong>Bản đồ số</strong>, <strong>Thư viện tri thức</strong>,{' '}
            <strong>Trợ lý AI</strong>, <strong>Phòng học tương tác</strong> đến{' '}
            <strong>Dòng thời gian lịch sử</strong>, <strong>Trải nghiệm 360 độ</strong>,{' '}
            <strong>Không gian triển lãm</strong> và <strong>Hồ sơ bản đồ</strong>.
          </p>

          {onOpenEcosystemPage && (
            <div className="section-header-cta">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={onOpenEcosystemPage}
              >
                <Layers size={18} />
                <span>Mở Trung tâm Hệ sinh thái số (8 Phân hệ)</span>
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

        {/* Sovereignty Milestone Interactive Section (#cot-moc) */}
        <div id="cot-moc" className="sovereignty-home-section">
          <div className="section-header">
            <span className="section-eyebrow">
              CỘT MỐC CHỦ QUYỀN • BIÊN NIÊN SỬ BIỂN ĐẢO VIỆT NAM
            </span>
            <h2 className="section-title">
              Dòng thời gian <span className="text-ocean">Xác lập &amp; Thực thi Chủ quyền</span> qua 6 Thời kỳ Lịch sử
            </h2>
            <p className="section-subtitle">
              Từ hoạt động truyền thống của cư dân Việt cổ, đội Hoàng Sa kiêm quản Bắc Hải thời chúa
              Nguyễn – Tây Sơn, Châu bản triều Nguyễn đến Công ước Liên Hợp Quốc về Luật Biển năm
              1982 và Luật Biển Việt Nam năm 2012.
            </p>
          </div>

          <SovereigntyTimelineModule
            isCompactHome={true}
            onOpenFullTimelinePage={() =>
              handleExploreClick('dong-thoi-gian-lich-su')
            }
          />
        </div>
      </div>
    </section>
  )
}
