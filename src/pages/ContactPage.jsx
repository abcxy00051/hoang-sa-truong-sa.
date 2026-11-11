import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  MessageSquare,
  HelpCircle
} from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: 'Làm thế nào để giáo viên THPT sử dụng website trong tiết dạy Lịch sử và Địa lý?',
    a: 'Giáo viên có thể chuyển chế độ "Giáo viên" trên thanh điều hướng, sau đó truy cập trực tiếp các trang /ban-do-so, /thu-vien-tri-thuc, /cot-moc-chu-quyen, /ho-so-ban-do hoặc /phong-hoc-tuong-tac để trình chiếu trực quan trên màn hình lớn của lớp học.'
  },
  {
    q: 'Các tư liệu bản đồ và mốc lịch sử trên website được trích dẫn từ nguồn nào?',
    a: 'Toàn bộ dữ liệu trên website tuân thủ chuẩn mực học thuật từ Châu bản triều Nguyễn (Di sản tư liệu thế giới UNESCO), Phủ biên tạp lục, Đại Nam thực lục, Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982), Luật Biển Việt Nam 2012 và SGK Chương trình GDPT 2018.'
  },
  {
    q: 'Học sinh và nhà trường có thể đóng góp thêm hình ảnh thực địa hoặc tư liệu biển đảo không?',
    a: 'Hoàn toàn có thể. Bạn có thể gửi thông tin qua biểu mẫu Liên hệ & Đóng góp học liệu ngay trên trang /lien-he này để ban biên tập thẩm định và bổ sung vào Thư viện tri thức.'
  }
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: '',
    schoolOrUnit: '',
    role: 'Học sinh THPT',
    email: '',
    topic: 'Đóng góp học liệu / Tư liệu biển đảo',
    message: ''
  })
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.fullName.trim() || !formState.message.trim()) return
    setSubmittedData({
      ...formState,
      submittedAt: new Date().toLocaleString('vi-VN')
    })
    setFormState({
      fullName: '',
      schoolOrUnit: '',
      role: 'Học sinh THPT',
      email: '',
      topic: 'Đóng góp học liệu / Tư liệu biển đảo',
      message: ''
    })
  }

  return (
    <div className="page-transition-wrapper">
      {/* 1. HERO BANNER RIÊNG CỦA TRANG LIÊN HỆ (/lien-he) */}
      <section className="ecosystem-hero-premium">
        <div className="eco-hero-backdrop" aria-hidden="true">
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
              <span className="breadcrumb-current">Liên hệ &amp; Hợp tác (/lien-he)</span>
            </div>
          </div>

          <div className="eco-hero-main-layout">
            <div className="eco-hero-left">
              <div className="ecosystem-badge-row">
                <span className="hero-badge-gold">
                  <Mail size={14} />
                  <span>KẾT NỐI NHÀ TRƯỜNG – HỌC SINH – GIÁO VIÊN THPT</span>
                </span>
                <span className="hero-badge-coordinates">
                  <ShieldCheck size={14} />
                  <span>Hỗ trợ Học liệu Số &amp; Ngoại khóa Biển đảo</span>
                </span>
              </div>

              <h1 className="eco-hero-main-title">
                LIÊN HỆ &amp;{' '}
                <span className="text-gold-highlight">HỢP TÁC GIÁO DỤC</span>
              </h1>

              <p className="eco-hero-slogan">
                Chung tay xây dựng và lan tỏa nguồn học liệu số chính xác, sinh động về chủ quyền
                biển đảo Việt Nam tới các trường THPT trên cả nước.
              </p>

              <p className="eco-hero-intro-text">
                Ban phát triển dự án luôn sẵn sàng tiếp nhận ý kiến đóng góp từ quý thầy cô giáo,
                các bạn học sinh THPT và các nhà nghiên cứu để hoàn thiện hơn nữa không gian học tập
                số Biển Đảo Việt Nam.
              </p>
            </div>

            <div className="eco-hero-right">
              <div className="eco-overview-glass-panel">
                <div className="eco-panel-header">
                  <span className="eco-panel-badge">THÔNG TIN LIÊN HỆ TRỰC TIẾP</span>
                  <span className="eco-panel-status">● Trực tuyến 24/7</span>
                </div>
                <div className="eco-quick-directory">
                  <div className="eco-quick-dir-item">
                    <span className="dir-item-code">ĐV</span>
                    <div className="dir-item-text">
                      <strong>Dự án KHKT &amp; Giáo dục Số THPT</strong>
                      <span>Hệ sinh thái số Biển Đảo Việt Nam</span>
                    </div>
                  </div>
                  <div className="eco-quick-dir-item">
                    <span className="dir-item-code">EMAIL</span>
                    <div className="dir-item-text">
                      <strong>lienhe@biendaovietnam.edu.vn</strong>
                      <span>Tiếp nhận góp ý học thuật &amp; học liệu</span>
                    </div>
                  </div>
                  <div className="eco-quick-dir-item">
                    <span className="dir-item-code">AI</span>
                    <div className="dir-item-text">
                      <strong>Trợ lý AI Biển Đảo (/tro-ly-ai)</strong>
                      <span>Giải đáp tức thì mọi câu hỏi kiến thức</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BIỂU MẪU LIÊN HỆ & ĐÓNG GÓP HỌC LIỆU + THÔNG TIN HỖ TRỢ */}
      <section className="about-section">
        <div className="container">
          <div className="contact-page-grid">
            {/* Left Column: Contact Form */}
            <div className="pillar-card contact-form-card">
              <div className="pillar-card-top">
                <div className="pillar-icon-box">
                  <MessageSquare size={24} />
                </div>
                <span className="feature-badge">BIỂU MẪU TRỰC TUYẾN</span>
              </div>

              <h2 className="pillar-title">Gửi Thông điệp, Góp ý hoặc Đăng ký Học liệu</h2>
              <p className="pillar-desc" style={{ marginBottom: '20px' }}>
                Điền thông tin bên dưới để gửi ý kiến đóng góp, chia sẻ tư liệu hoặc đăng ký tổ
                chức chuyên đề ngoại khóa biển đảo tại trường THPT của bạn.
              </p>

              {submittedData && (
                <div
                  className="verification-alert-banner"
                  style={{ marginBottom: '20px', flexDirection: 'column', alignItems: 'flex-start' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}>
                    <CheckCircle2 size={20} className="verification-icon" />
                    <span>Đã gửi thông điệp thành công ({submittedData.submittedAt})!</span>
                  </div>
                  <p style={{ marginTop: '6px' }}>
                    Cảm ơn <strong>{submittedData.fullName}</strong> ({submittedData.role} –{' '}
                    {submittedData.schoolOrUnit || 'Trường THPT'}) đã gửi nội dung về chủ đề{' '}
                    <strong>“{submittedData.topic}”</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form-layout">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Họ và tên *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Nhập họ và tên của bạn..."
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-school">Trường THPT / Đơn vị công tác</label>
                    <input
                      id="contact-school"
                      type="text"
                      placeholder="VD: Trường THPT Chuyên..."
                      value={formState.schoolOrUnit}
                      onChange={(e) =>
                        setFormState({ ...formState, schoolOrUnit: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-role">Vai trò</label>
                    <select
                      id="contact-role"
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    >
                      <option value="Học sinh THPT">Học sinh THPT</option>
                      <option value="Giáo viên THPT">Giáo viên THPT</option>
                      <option value="Cán bộ Đoàn / Câu lạc bộ">Cán bộ Đoàn / Câu lạc bộ</option>
                      <option value="Chuyên gia / Phụ huynh">Chuyên gia / Phụ huynh</option>
                    </select>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email">Email liên hệ</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="name@school.edu.vn"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-topic">Chủ đề liên hệ</label>
                  <select
                    id="contact-topic"
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                  >
                    <option value="Đóng góp học liệu / Tư liệu biển đảo">
                      Đóng góp học liệu / Tư liệu biển đảo
                    </option>
                    <option value="Đăng ký sử dụng cho tiết học / Ngoại khóa THPT">
                      Đăng ký sử dụng cho tiết học / Ngoại khóa THPT
                    </option>
                    <option value="Góp ý kỹ thuật & Giao diện Hệ sinh thái số">
                      Góp ý kỹ thuật &amp; Giao diện Hệ sinh thái số
                    </option>
                    <option value="Gửi lời chúc tới cán bộ, chiến sĩ nơi đảo xa">
                      Gửi lời chúc tới cán bộ, chiến sĩ nơi đảo xa
                    </option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Nội dung chi tiết *</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Nhập nội dung góp ý, câu hỏi hoặc thông điệp của bạn..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary-gold" style={{ alignSelf: 'flex-start' }}>
                  <Send size={17} />
                  <span>Gửi Thông điệp Liên hệ</span>
                </button>
              </form>
            </div>

            {/* Right Column: FAQ & Quick Support */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div className="pillar-card">
                <div className="pillar-card-top">
                  <div className="pillar-icon-box">
                    <HelpCircle size={24} />
                  </div>
                  <span className="feature-badge">GIẢI ĐÁP NHANH</span>
                </div>
                <h3 className="pillar-title">Câu hỏi Thường gặp (FAQ)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
                  {FAQ_ITEMS.map((item, idx) => (
                    <div key={idx} className="audience-benefit-card" style={{ background: 'var(--alice-blue)' }}>
                      <div className="benefit-text">
                        <h5>{item.q}</h5>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pillar-card">
                <h3 className="pillar-title">Kênh Hỗ trợ Nhanh trong Hệ sinh thái</h3>
                <p className="pillar-desc">
                  Cần giải đáp tức thì các câu hỏi về Lịch sử, Địa lý, UNCLOS 1982 hoặc hướng dẫn
                  làm bài tập? Hãy trò chuyện trực tiếp với Trợ lý AI Biển Đảo.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link to="/tro-ly-ai" className="btn-primary-gold">
                    <span>Mở Trợ lý AI (/tro-ly-ai)</span>
                  </Link>
                  <Link to="/he-sinh-thai-so" className="btn-secondary-glass">
                    <span>Về Hệ sinh thái số</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
