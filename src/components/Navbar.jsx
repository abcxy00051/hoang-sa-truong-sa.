import React, { useState, useEffect } from 'react'
import { Compass, Menu, X, Sparkles, GraduationCap, ShieldCheck } from 'lucide-react'
import { NAV_LINKS } from '../data/homeData'

export default function Navbar({
  onStartExplore,
  activeRole,
  onRoleChange,
  currentPage = 'home',
  onNavigateNav
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, item) => {
    setMobileMenuOpen(false)
    if (onNavigateNav) {
      e.preventDefault()
      onNavigateNav(item)
    }
  }

  return (
    <header className={`site-navbar ${isScrolled || currentPage !== 'home' ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Identity */}
        <a
          href="#trang-chu"
          className="brand-logo"
          aria-label="Biển Đảo Việt Nam - Trang chủ"
          onClick={(e) => handleLinkClick(e, { id: 'home', href: '#trang-chu', page: 'home' })}
        >
          <div className="brand-emblem">
            <Compass className="brand-icon" size={26} />
            <span className="brand-star">★</span>
          </div>
          <div className="brand-text">
            <span className="brand-title">BIỂN ĐẢO VIỆT NAM</span>
            <span className="brand-slogan">Chạm tri thức - Vững chủ quyền</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <ul className="nav-list">
            {NAV_LINKS.map((item) => {
              const isEcoActive =
                item.id === 'features' &&
                (currentPage === 'ecosystem' || currentPage === 'feature')
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${isEcoActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    {item.label}
                  </a>
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

          <button type="button" className="btn-gold-nav" onClick={onStartExplore}>
            <ShieldCheck size={16} />
            <span>Hệ sinh thái số</span>
          </button>

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
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn-primary-gold mobile-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false)
                onStartExplore()
              }}
            >
              <ShieldCheck size={18} />
              <span>Khám phá Hệ sinh thái số</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
