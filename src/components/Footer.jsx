import React from 'react'
import { Compass, Mail, Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react'
import { NAV_LINKS, FEATURES_DATA } from '../data/homeData'

export default function Footer({ onSelectFeature, onNavigateNav }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, link) => {
    if (onNavigateNav) {
      e.preventDefault()
      onNavigateNav(link)
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Mission */}
          <div className="footer-brand-col">
            <div className="brand-logo footer-logo">
              <div className="brand-emblem">
                <Compass className="brand-icon" size={26} />
                <span className="brand-star">★</span>
              </div>
              <div className="brand-text">
                <span className="brand-title">BIỂN ĐẢO VIỆT NAM</span>
                <span className="brand-slogan">Chạm tri thức - Vững chủ quyền</span>
              </div>
            </div>

            <p className="footer-mission">
              Hệ sinh thái giáo dục số hỗ trợ giảng dạy và học tập kiến thức Lịch sử, Địa lý, Pháp
              luật về chủ quyền Biển đảo Việt Nam dành cho học sinh THPT và giáo viên.
            </p>

            <div className="footer-sovereignty-pill">
              <ShieldCheck size={16} />
              <span>Quần đảo Hoàng Sa &amp; Quần đảo Trường Sa thuộc chủ quyền Việt Nam</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-links-col">
            <h4>Điều hướng</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 6 Core Modules */}
          <div className="footer-links-col">
            <h4>6 Khu vực chức năng</h4>
            <ul>
              {FEATURES_DATA.map((feature) => (
                <li key={feature.id}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => onSelectFeature(feature.id)}
                  >
                    {feature.code}. {feature.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Educational Contact Info */}
          <div className="footer-contact-col">
            <h4>Thông tin Dự án Giáo dục</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} />
                <span>Dành cho các trường Trung học Phổ thông (Khối 10, 11, 12)</span>
              </li>
              <li>
                <Mail size={16} />
                <span>lienhe@biendaovietnam.edu.vn</span>
              </li>
              <li>
                <Phone size={16} />
                <span>Hỗ trợ học liệu số &amp; ngoại khóa THPT</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <strong>BIỂN ĐẢO VIỆT NAM</strong> — Chạm tri thức, Vững chủ
            quyền. Thiết kế chuẩn mực phục vụ giáo dục THPT.
          </p>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Lên đầu trang"
          >
            <span>Lên đầu trang</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
