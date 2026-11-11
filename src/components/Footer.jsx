import React from 'react'
import { Link } from 'react-router-dom'
import { Compass, Mail, Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react'
import { NAV_LINKS, ECOSYSTEM_SUBPAGE_ROUTES } from '../data/homeData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Mission */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo footer-logo">
              <div className="brand-emblem navbar-logo-circle">
                <img
                  src="/assets/logo-bien-dao.png"
                  alt="Logo Biển Đảo Việt Nam"
                  className="navbar-logo-img"
                />
              </div>
              <div className="brand-text">
                <span className="brand-title">BIỂN ĐẢO VIỆT NAM</span>
                <span className="brand-slogan">Chạm tri thức - Vững chủ quyền</span>
              </div>
            </Link>

            <p className="footer-mission">
              Hệ sinh thái giáo dục số đa trang hỗ trợ giảng dạy và học tập kiến thức Lịch sử, Địa
              lý, Pháp luật về chủ quyền Biển đảo Việt Nam dành cho học sinh THPT và giáo viên.
            </p>

            <div className="footer-sovereignty-pill">
              <ShieldCheck size={16} />
              <span>Quần đảo Hoàng Sa &amp; Quần đảo Trường Sa thuộc chủ quyền Việt Nam</span>
            </div>
          </div>

          {/* Column 2: 6 Main Multi-page Routes */}
          <div className="footer-links-col">
            <h4>Chuyên trang chính</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ecosystem Sub-pages */}
          <div className="footer-links-col">
            <h4>Các trang Hệ sinh thái số</h4>
            <ul>
              {ECOSYSTEM_SUBPAGE_ROUTES.slice(0, 6).map((sub) => (
                <li key={sub.id}>
                  <Link to={sub.path}>
                    {sub.label} ({sub.path})
                  </Link>
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
                <span>
                  <Link to="/lien-he" style={{ textDecoration: 'underline' }}>
                    Gửi thông điệp tại trang Liên hệ (/lien-he)
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <strong>BIỂN ĐẢO VIỆT NAM</strong> — Chạm tri thức, Vững chủ
            quyền. Thiết kế cổng thông tin đa trang phục vụ giáo dục THPT.
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
