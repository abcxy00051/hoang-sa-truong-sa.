import React from 'react'
import {
  Compass,
  MapPin,
  Sparkles,
  BookOpen,
  ArrowRight,
  Shield,
  Anchor,
  Radio
} from 'lucide-react'
import { HERO_STATS } from '../data/homeData'

export default function HeroSection({ onStartExplore, onSelectFeature }) {
  return (
    <section id="trang-chu" className="hero-section">
      {/* Sea & Islands Background Layer */}
      <div className="hero-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/hero-bien-dao.jpg"
          alt="Biển đảo Việt Nam"
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-main-grid">
          {/* Left Column: Main Typography & Call To Actions */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <span className="hero-badge-gold">
                <Shield size={14} />
                <span>HỆ SINH THÁI GIÁO DỤC SỐ CẤP THPT</span>
              </span>
              <span className="hero-badge-coordinates">
                <Radio size={13} className="pulse-dot" />
                <span>Hoàng Sa &amp; Trường Sa là của Việt Nam</span>
              </span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-main">BIỂN ĐẢO VIỆT NAM</span>
              <span className="hero-title-sub">
                Chạm tri thức <span className="gold-divider">—</span> Vững chủ quyền.
              </span>
            </h1>

            <p className="hero-description">
              Không gian học tập, tra cứu và trải nghiệm tương tác hiện đại dành riêng cho{' '}
              <strong>Học sinh THPT</strong> và <strong>Giáo viên</strong>. Kết nối lịch sử ngàn năm
              giữ biển của cha ông với công nghệ Bản đồ số, Thư viện tư liệu chuẩn hóa và Trợ lý AI
              thông minh.
            </p>

            {/* Primary CTA Buttons */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={onStartExplore}
              >
                <Compass size={20} />
                <span>Bắt đầu khám phá</span>
                <ArrowRight size={18} />
              </button>

              <a href="#gioi-thieu" className="btn-secondary-glass">
                <BookOpen size={18} />
                <span>Tìm hiểu dự án</span>
              </a>
            </div>

            {/* Quick Jump Chips to Core Modules */}
            <div className="hero-quick-chips">
              <span className="quick-chips-label">Truy cập nhanh:</span>
              <button
                type="button"
                className="quick-chip"
                onClick={() => onSelectFeature('ban-do-so')}
              >
                <MapPin size={13} />
                <span>Bản đồ số Hoàng Sa - Trường Sa</span>
              </button>
              <button
                type="button"
                className="quick-chip"
                onClick={() => onSelectFeature('tro-ly-ai')}
              >
                <Sparkles size={13} />
                <span>Hỏi đáp Trợ lý AI</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Naval Compass & Sovereignty Telemetry Card */}
          <div className="hero-visual-panel">
            <div className="sovereignty-glass-card">
              <div className="card-top-bar">
                <div className="radar-indicator">
                  <span className="radar-dot" />
                  <span>TRẠM DỮ LIỆU CHỦ QUYỀN SỐ</span>
                </div>
                <span className="card-coord-tag">UNCLOS 1982</span>
              </div>

              <div className="compass-showcase">
                <div className="compass-ring-outer">
                  <div className="compass-ring-inner">
                    <Anchor size={28} className="compass-center-icon" />
                  </div>
                </div>
                <div className="compass-info">
                  <h3>Tọa độ Thiêng liêng Tổ quốc</h3>
                  <p>Trực quan hóa 2 quần đảo tiền tiêu &amp; thềm lục địa Việt Nam</p>
                </div>
              </div>

              <div className="coordinate-list">
                <div
                  className="coordinate-item"
                  onClick={() => onSelectFeature('ban-do-so')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectFeature('ban-do-so')}
                >
                  <div className="coord-marker gold">HS</div>
                  <div className="coord-details">
                    <div className="coord-name-row">
                      <strong>Quần đảo Hoàng Sa</strong>
                      <span className="coord-city">TP. Đà Nẵng</span>
                    </div>
                    <span className="coord-numbers">16°32′00″ Vĩ Bắc — 111°38′00″ Kinh Đông</span>
                  </div>
                </div>

                <div
                  className="coordinate-item"
                  onClick={() => onSelectFeature('ban-do-so')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectFeature('ban-do-so')}
                >
                  <div className="coord-marker cyan">TS</div>
                  <div className="coord-details">
                    <div className="coord-name-row">
                      <strong>Quần đảo Trường Sa</strong>
                      <span className="coord-city">Tỉnh Khánh Hòa</span>
                    </div>
                    <span className="coord-numbers">08°38′30″ Vĩ Bắc — 111°55′55″ Kinh Đông</span>
                  </div>
                </div>
              </div>

              <div className="card-footer-note">
                <span>✦ Tích hợp Châu bản triều Nguyễn &amp; Học liệu GDPT 2018</span>
                <button
                  type="button"
                  className="card-mini-link"
                  onClick={() => onSelectFeature('dong-thoi-gian-lich-su')}
                >
                  Xem lịch sử →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="hero-stats-bar">
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="hero-stat-item">
              <span className="stat-badge">{stat.badge}</span>
              <strong className="stat-value">{stat.value}</strong>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="hero-wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 48L60 42.7C120 37 240 27 360 32C480 37 600 59 720 64C840 69 960 59 1080 48C1200 37 1320 27 1380 21.3L1440 16V90H1380C1320 90 1200 90 1080 90C960 90 840 90 720 90C600 90 480 90 360 90C240 90 120 90 60 90H0V48Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  )
}
