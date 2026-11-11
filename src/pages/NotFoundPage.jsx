import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Compass, ArrowLeft, Layers, Map, BookOpen, ShieldAlert } from 'lucide-react'

export default function NotFoundPage() {
  const location = useLocation()

  return (
    <div className="page-transition-wrapper">
      <section className="ecosystem-hero-premium" style={{ minHeight: '78vh', display: 'flex', alignItems: 'center' }}>
        <div className="container eco-hero-container">
          <div className="eco-overview-glass-panel" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', padding: '44px 32px' }}>
            <div style={{ display: 'inline-flex', padding: '14px', borderRadius: '50%', background: 'var(--alice-blue)', color: 'var(--moonstone)', marginBottom: '16px' }}>
              <ShieldAlert size={38} />
            </div>
            <span className="section-eyebrow" style={{ display: 'block', width: 'fit-content', margin: '0 auto 12px' }}>
              MÃ ĐIỀU HƯỚNG 404 • KHÔNG TÌM THẤY ĐƯỜNG DẪN
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--midnight-green)', marginBottom: '12px' }}>
              Tọa độ đường dẫn "{location.pathname}" không tồn tại
            </h1>
            <p style={{ color: 'var(--midnight-green)', marginBottom: '28px', fontSize: '1rem' }}>
              Đường dẫn bạn vừa truy cập không nằm trong hải đồ điều hướng của Hệ sinh thái số Biển
              Đảo Việt Nam. Hãy chọn một trong các chuyên trang chính bên dưới để tiếp tục hành
              trình khám phá:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <Link to="/" className="btn-primary-gold">
                <ArrowLeft size={17} />
                <span>Về Trang chủ (/)</span>
              </Link>
              <Link to="/he-sinh-thai-so" className="btn-secondary-glass">
                <Layers size={17} />
                <span>Hệ sinh thái số (/he-sinh-thai-so)</span>
              </Link>
              <Link to="/ban-do-so" className="btn-secondary-glass">
                <Map size={17} />
                <span>Bản đồ số (/ban-do-so)</span>
              </Link>
              <Link to="/thu-vien-tri-thuc" className="btn-secondary-glass">
                <BookOpen size={17} />
                <span>Thư viện tri thức (/thu-vien-tri-thuc)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
