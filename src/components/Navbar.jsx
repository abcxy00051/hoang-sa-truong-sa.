import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Compass, Menu, X, Sparkles, GraduationCap, ShieldCheck } from 'lucide-react'
import { NAV_LINKS } from '../data/homeData'

const ECOSYSTEM_CHILD_PATHS = new Set([
  '/he-sinh-thai-so',
  '/ban-do-so',
  '/thu-vien-tri-thuc',
  '/tro-ly-ai',
  '/phong-hoc-tuong-tac',
  '/trai-nghiem-360',
  '/trien-lam-so',
  '/ho-so-ban-do'
])

export default function Navbar({
  activeRole,
  onRoleChange
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const isNavItemActive = (item) => {
    const pathname = location.pathname
    if (item.path === '/') {
      return pathname === '/'
    }
    if (item.path === '/he-sinh-thai-so') {
      return (
        ECOSYSTEM_CHILD_PATHS.has(pathname) ||
        pathname.startsWith('/he-sinh-thai')
      )
    }
    if (item.path === '/cot-moc-chu-quyen') {
      return pathname === '/cot-moc-chu-quyen' || pathname === '/dong-thoi-gian-lich-su'
    }
    return pathname === item.path || pathname.startsWith(item.path + '/')
  }

  return (
    <header className={`site-navbar ${isScrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Identity */}
        <Link
          to="/"
          className="brand-logo"
          aria-label="Biển Đảo Việt Nam - Trang chủ"
        >
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

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <ul className="nav-list">
            {NAV_LINKS.map((item) => {
              const isItemActive = isNavItemActive(item)
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isItemActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Quick Audience Switch & CTA */}
        <div className="navbar-actions">
          <div className="role-pill-switch" role="group" aria-label="Chọn đối tượng sử dụng">
            <button
              type="button"
              className={`role-pill-btn ${activeRole === 'student' ? 'active' : ''}`}
              onClick={() => onRoleChange('student')}
            >
              <Sparkles size={14} />
              <span>Học sinh THPT</span>
            </button>
            <button
              type="button"
              className={`role-pill-btn ${activeRole === 'teacher' ? 'active' : ''}`}
              onClick={() => onRoleChange('teacher')}
            >
              <GraduationCap size={14} />
              <span>Giáo viên</span>
            </button>
          </div>

          <Link to="/he-sinh-thai-so" className="btn-gold-nav">
            <ShieldCheck size={16} />
            <span>Hệ sinh thái số</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            <div className="mobile-role-selector">
              <span className="mobile-role-label">Chế độ trải nghiệm:</span>
              <div className="mobile-role-buttons">
                <button
                  type="button"
                  className={`role-pill-btn ${activeRole === 'student' ? 'active' : ''}`}
                  onClick={() => {
                    onRoleChange('student')
                    setMobileMenuOpen(false)
                  }}
                >
                  <Sparkles size={14} />
                  <span>Học sinh THPT</span>
                </button>
                <button
                  type="button"
                  className={`role-pill-btn ${activeRole === 'teacher' ? 'active' : ''}`}
                  onClick={() => {
                    onRoleChange('teacher')
                    setMobileMenuOpen(false)
                  }}
                >
                  <GraduationCap size={14} />
                  <span>Giáo viên</span>
                </button>
              </div>
            </div>

            <ul className="mobile-nav-list">
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${isNavItemActive(item) ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/he-sinh-thai-so"
              className="btn-primary-gold mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShieldCheck size={18} />
              <span>Khám phá Hệ sinh thái số</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
