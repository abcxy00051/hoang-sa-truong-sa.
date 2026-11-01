import React from 'react'
import {
  BookOpenCheck,
  Cpu,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react'
import { PROJECT_PILLARS, AUDIENCE_MODES } from '../data/homeData'

const PILLAR_ICONS = {
  knowledge: BookOpenCheck,
  technology: Cpu,
  patriotism: HeartHandshake
}

export default function AboutSection({ activeRole, onRoleChange, onStartExplore }) {
  const currentAudience = AUDIENCE_MODES[activeRole] || AUDIENCE_MODES.student

  return (
    <section id="gioi-thieu" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">GIỚI THIỆU DỰ ÁN GIÁO DỤC SỐ</span>
          <h2 className="section-title">
            Khơi dậy tình yêu Biển đảo từ <span className="text-ocean">Tri thức Chuẩn</span> &amp;{' '}
            <span className="text-navy">Công nghệ Mới</span>
          </h2>
          <p className="section-subtitle">
            Dự án <strong>BIỂN ĐẢO VIỆT NAM — Chạm tri thức, Vững chủ quyền</strong> được xây dựng
            nhằm mang đến một nền tảng học liệu trực quan, kết nối chặt chẽ kiến thức liên môn Lịch
            sử - Địa lý - Giáo dục Quốc phòng &amp; An ninh cho học sinh và giáo viên THPT trên toàn
            quốc.
          </p>
        </div>

        {/* 3 Core Project Pillars */}
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

        {/* Dedicated High School Student & Teacher Switcher Banner */}
        <div id="doi-tuong" className="audience-showcase-box">
          <div className="audience-header-bar">
            <div className="audience-header-text">
              <span className="audience-label-tag">ĐỐI TƯỢNG SỬ DỤNG TRỌNG TÂM</span>
              <h3>Thiết kế chuyên biệt cho nhà trường THPT</h3>
            </div>
            <div className="audience-tab-buttons" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeRole === 'student'}
                className={`audience-tab-btn ${activeRole === 'student' ? 'active' : ''}`}
                onClick={() => onRoleChange('student')}
              >
                <Sparkles size={18} />
                <span>Dành cho Học sinh THPT</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeRole === 'teacher'}
                className={`audience-tab-btn ${activeRole === 'teacher' ? 'active' : ''}`}
                onClick={() => onRoleChange('teacher')}
              >
                <GraduationCap size={18} />
                <span>Dành cho Giáo viên</span>
              </button>
            </div>
          </div>

          <div className="audience-content-grid">
            <div className="audience-info-col">
              <span className="audience-mode-badge">{currentAudience.badge}</span>
              <h4 className="audience-mode-title">{currentAudience.title}</h4>
              <p className="audience-mode-subtitle">{currentAudience.subtitle}</p>
              <button type="button" className="btn-primary-gold" onClick={onStartExplore}>
                <span>{currentAudience.ctaLabel}</span>
                <ArrowUpRight size={18} />
              </button>
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
      </div>
    </section>
  )
}
