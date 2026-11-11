import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Clock,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Map,
  BookOpen,
  Award,
  FileText,
  Layers
} from 'lucide-react'
import SovereigntyTimelineModule from '../components/SovereigntyTimelineModule'
import CartographicDossierModule from '../components/CartographicDossierModule'

export default function SovereigntyPage({
  activeRole = 'student',
  onNavigateFeature
}) {
  const [activeSubView, setActiveSubView] = useState('timeline')

  return (
    <div className="page-transition-wrapper">
      {/* 1. HERO BANNER RIÊNG CỦA TRANG CỘT MỐC CHỦ QUYỀN (/cot-moc-chu-quyen) */}
      <section className="ecosystem-hero-premium">
        <div className="eco-hero-backdrop" aria-hidden="true">
          <img
            src="/assets/ecosystem/card-dong-thoi-gian-lich-su.svg"
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
              <span className="breadcrumb-current">
                Cột mốc Chủ quyền (/cot-moc-chu-quyen)
              </span>
            </div>
          </div>

          <div className="eco-hero-main-layout">
            <div className="eco-hero-left">
              <div className="ecosystem-badge-row">
                <span className="hero-badge-gold">
                  <Clock size={14} />
                  <span>BIÊN NIÊN SỬ &amp; BẰNG CHỨNG CHỦ QUYỀN VIỆT NAM</span>
                </span>
                <span className="hero-badge-coordinates">
                  <ShieldCheck size={14} />
                  <span>6 Giai đoạn Lịch sử • Châu bản UNESCO • UNCLOS 1982</span>
                </span>
              </div>

              <h1 className="eco-hero-main-title">
                CỘT MỐC CHỦ QUYỀN &amp;{' '}
                <span className="text-gold-highlight">DÒNG THỜI GIAN LỊCH SỬ</span>
              </h1>

              <p className="eco-hero-slogan">
                Quá trình xác lập và thực thi chủ quyền liên tục, hòa bình của Nhà nước Việt Nam đối
                với hai quần đảo Hoàng Sa và Trường Sa qua các thời kỳ lịch sử.
              </p>

              <p className="eco-hero-intro-text">
                Chuyên trang tổng hợp hệ thống dấu mốc lịch sử từ trước thế kỷ XVII, hoạt động của
                Đội Hoàng Sa và Đội Bắc Hải (thế kỷ XVII–XVIII), Châu bản triều Nguyễn, giai đoạn
                Pháp thuộc, giai đoạn 1945–1975 đến hệ thống pháp lý hiện đại từ năm 1975 đến nay.
              </p>

              <div className="hero-cta-group">
                <button
                  type="button"
                  className={
                    activeSubView === 'timeline' ? 'btn-primary-gold' : 'btn-secondary-glass'
                  }
                  onClick={() => setActiveSubView('timeline')}
                >
                  <Clock size={18} />
                  <span>Trục Thời gian 6 Giai đoạn Lịch sử</span>
                </button>
                <button
                  type="button"
                  className={
                    activeSubView === 'cartography' ? 'btn-primary-gold' : 'btn-secondary-glass'
                  }
                  onClick={() => setActiveSubView('cartography')}
                >
                  <FileText size={18} />
                  <span>Hồ sơ Bản đồ Cổ &amp; Pháp lý</span>
                </button>
              </div>
            </div>

            <div className="eco-hero-right">
              <div className="eco-overview-glass-panel">
                <div className="eco-panel-header">
                  <span className="eco-panel-badge">CHỨNG CỨ LỊCH SỬ &amp; PHÁP LÝ</span>
                  <span className="eco-panel-status">● Tư liệu Chính thống</span>
                </div>
                <p className="eco-panel-lead">
                  Mỗi cột mốc trên dòng thời gian đều đi kèm thời gian cụ thể, diễn biến lịch sử, ý
                  nghĩa pháp lý, hình ảnh tư liệu minh họa và nguồn trích dẫn kiểm chứng.
                </p>
                <div className="eco-quick-directory">
                  <Link to="/ban-do-so" className="eco-quick-dir-item">
                    <span className="dir-item-code">GIS</span>
                    <div className="dir-item-text">
                      <strong>Đối chiếu trên Bản đồ số (/ban-do-so)</strong>
                      <span>Xem vị trí địa lý Hoàng Sa &amp; Trường Sa</span>
                    </div>
                  </Link>
                  <Link to="/trien-lam-so" className="eco-quick-dir-item">
                    <span className="dir-item-code">3D/2D</span>
                    <div className="dir-item-text">
                      <strong>Triển lãm số (/trien-lam-so)</strong>
                      <span>Xem hiện vật, bản đồ cổ &amp; Châu bản</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KHÔNG GIAN TƯƠNG TÁC DÒNG THỜI GIAN LỊCH SỬ & HỒ SƠ BẢN ĐỒ */}
      <section className="feature-workspace-section">
        <div className="container">
          <div className="workspace-Shell">
            <div className="workspace-shell-header">
              <div className="workspace-shell-title">
                <Clock size={22} />
                <h2>
                  {activeSubView === 'timeline'
                    ? 'Trục Thời gian Tương tác: 6 Giai đoạn Xác lập & Thực thi Chủ quyền'
                    : 'Hồ sơ Bản đồ Cổ Việt Nam, Bản đồ Phương Tây & Pháp lý Hiện đại'}
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className={`eco-cat-btn ${activeSubView === 'timeline' ? 'active' : ''}`}
                  onClick={() => setActiveSubView('timeline')}
                >
                  Dòng thời gian 6 giai đoạn
                </button>
                <button
                  type="button"
                  className={`eco-cat-btn ${activeSubView === 'cartography' ? 'active' : ''}`}
                  onClick={() => setActiveSubView('cartography')}
                >
                  Hồ sơ Bản đồ Chủ quyền
                </button>
              </div>
            </div>

            <div className="workspace-interactive-area">
              {activeSubView === 'timeline' ? (
                <SovereigntyTimelineModule activeRole={activeRole} />
              ) : (
                <CartographicDossierModule
                  activeRole={activeRole}
                  onNavigateFeature={onNavigateFeature}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
