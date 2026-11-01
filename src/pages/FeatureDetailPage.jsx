import React, { useState } from 'react'
import {
  Map,
  BookOpen,
  Sparkles,
  GraduationCap,
  Clock,
  Compass,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Layers,
  Send,
  Award,
  Monitor,
  BookMarked
} from 'lucide-react'
import { FEATURES_DATA } from '../data/homeData'
import InteractiveEastSeaMap from '../components/InteractiveEastSeaMap'
import KnowledgeLibraryModule from '../components/KnowledgeLibraryModule'

const ICON_MAP = {
  Map: Map,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Clock: Clock,
  Compass: Compass
}

export default function FeatureDetailPage({
  featureId,
  activeRole,
  onRoleChange,
  onNavigateFeature,
  onBackEcosystem,
  onBackHome
}) {
  const normalizedId =
    featureId === 'khong-gian-kham-pha' ? 'trien-lam-so' : featureId

  const currentIndex = FEATURES_DATA.findIndex((f) => f.id === normalizedId)
  const feature =
    currentIndex !== -1 ? FEATURES_DATA[currentIndex] : FEATURES_DATA[0]
  const IconComponent = ICON_MAP[feature.iconName] || Compass

  const prevFeature =
    FEATURES_DATA[
      (currentIndex - 1 + FEATURES_DATA.length) % FEATURES_DATA.length
    ]
  const nextFeature =
    FEATURES_DATA[(currentIndex + 1) % FEATURES_DATA.length]

  // Local UI state for interactive controls inside each functional workspace
  const [activeLayer, setActiveLayer] = useState('all')
  const [selectedGrade, setSelectedGrade] = useState('khoi-10')
  const [selectedGameMode, setSelectedGameMode] = useState('flashcard')
  const [selectedRoom, setSelectedRoom] = useState(0)
  const [studentMessage, setStudentMessage] = useState('')
  const [submittedNote, setSubmittedNote] = useState(null)

  const handleSendNote = (e) => {
    e.preventDefault()
    if (!studentMessage.trim()) return
    setSubmittedNote(studentMessage.trim())
    setStudentMessage('')
  }

  return (
    <div className="feature-detail-page">
      {/* Top Breadcrumb & Quick Switcher Header */}
      <section className="feature-detail-hero">
        <div className="container">
          <div className="ecosystem-breadcrumb">
            <button
              type="button"
              className="breadcrumb-back-btn"
              onClick={onBackHome}
            >
              <ArrowLeft size={15} />
              <span>Trang chủ</span>
            </button>
            <span className="breadcrumb-sep">/</span>
            <button
              type="button"
              className="breadcrumb-link-btn"
              onClick={onBackEcosystem}
            >
              Hệ sinh thái số
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{feature.title}</span>
          </div>

          {/* Quick Jump Strip Across All 6 Functional Zones */}
          <div className="feature-quick-switcher" role="navigation" aria-label="Chuyển nhanh 6 khu vực chức năng">
            {FEATURES_DATA.map((item) => {
              const ItemIcon = ICON_MAP[item.iconName] || Compass
              const isActive = item.id === feature.id
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`quick-switch-pill ${isActive ? 'active' : ''}`}
                  onClick={() => onNavigateFeature(item.id)}
                >
                  <ItemIcon size={15} />
                  <span>
                    {item.code}. {item.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Main Banner of the Current Functional Page */}
          <div className="feature-detail-banner">
            <div className="feature-detail-info">
              <div className="feature-detail-badges">
                <span className="hero-badge-gold">
                  KHU VỰC CHỨC NĂNG #{feature.code}
                </span>
                <span className="hero-badge-coordinates">{feature.badge}</span>
              </div>

              <h1 className="feature-detail-title">{feature.title}</h1>
              <p className="feature-detail-subtitle">{feature.subtitle}</p>
              <p className="feature-detail-desc">{feature.shortDesc}</p>

              <div className="feature-detail-role-box">
                <div className="role-box-header">
                  <strong>
                    {activeRole === 'student'
                      ? '🎓 Hướng dẫn dành cho Học sinh THPT:'
                      : '📋 Hướng dẫn dành cho Giáo viên THPT:'}
                  </strong>
                  <div className="mini-role-switch">
                    <button
                      type="button"
                      className={activeRole === 'student' ? 'active' : ''}
                      onClick={() => onRoleChange('student')}
                    >
                      Học sinh
                    </button>
                    <button
                      type="button"
                      className={activeRole === 'teacher' ? 'active' : ''}
                      onClick={() => onRoleChange('teacher')}
                    >
                      Giáo viên
                    </button>
                  </div>
                </div>
                <p>
                  {activeRole === 'student'
                    ? feature.studentTip
                    : feature.teacherTip}
                </p>
              </div>
            </div>

            <div className="feature-detail-visual">
              <div className="feature-detail-img-card">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-detail-img"
                />
                <div className="feature-detail-img-caption">
                  <IconComponent size={18} />
                  <span>{feature.samplePreview.coordinate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Functional Workspace */}
      <section className="feature-workspace-section">
        <div className="container">
          {/* Standard Academic / Technical Notice Banner */}
          <div className="verification-alert-banner">
            <ShieldAlert size={20} className="verification-icon" />
            <p>{feature.verificationNote}</p>
          </div>

          {/* Dynamic Workspace Based on the Selected Function */}
          <div className="workspace-Shell">
            <div className="workspace-shell-header">
              <div className="workspace-shell-title">
                <IconComponent size={22} />
                <h2>Không gian Chức năng: {feature.title}</h2>
              </div>
              <span className="workspace-status-pill">
                Giao diện Tương tác THPT (Máy tính &amp; Điện thoại)
              </span>
            </div>

            {/* 1. BẢN ĐỒ SỐ HOÀNG SA - TRƯỜNG SA */}
            {feature.id === 'ban-do-so' && (
              <div className="workspace-interactive-area">
                <InteractiveEastSeaMap activeRole={activeRole} />
              </div>
            )}

            {/* 2. THƯ VIỆN TRI THỨC BIỂN ĐẢO */}
            {feature.id === 'thu-vien-tri-thuc' && (
              <div className="workspace-interactive-area">
                <KnowledgeLibraryModule activeRole={activeRole} />
              </div>
            )}

            {/* 3. TRỢ LÝ AI */}
            {feature.id === 'tro-ly-ai' && (
              <div className="workspace-interactive-area">
                <div
                  id="ai-chatbot-mount-point"
                  className="ai-assistant-preserved-slot"
                >
                  <div className="ai-slot-badge">
                    <Sparkles size={18} />
                    <span>KHU VỰC KẾT NỐI TRỢ LÝ AI (GIỮ NGUYÊN LOGIC CHATBOT AI)</span>
                  </div>
                  <h3>Trợ lý AI Giáo dục Biển đảo THPT</h3>
                  <p>
                    Không gian này được thiết kế để tích hợp trực tiếp mô-đun Chatbot AI của dự án
                    mà không xóa hoặc thay đổi bất kỳ logic xử lý AI nào hiện có.
                  </p>
                  <div className="ai-suggested-prompts">
                    <span>Gợi ý chủ đề hỏi đáp cho học sinh THPT:</span>
                    <div className="prompt-chips-row">
                      <span className="prompt-chip">
                        ✦ Hướng dẫn phương pháp ôn tập chủ đề Địa lý biển đảo THPT
                      </span>
                      <span className="prompt-chip">
                        ✦ Gợi ý dàn ý thuyết trình ngoại khóa "Em yêu Biển đảo quê hương"
                      </span>
                      <span className="prompt-chip">
                        ✦ Cách tra cứu học liệu hiệu quả trên Hệ sinh thái số
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. PHÒNG HỌC TƯƠNG TÁC VÀ TRÒ CHƠI HỌC TẬP */}
            {feature.id === 'phong-hoc-tuong-tac' && (
              <div className="workspace-interactive-area">
                <div className="workspace-toolbar">
                  <span className="toolbar-label">Chọn hoạt động học tập:</span>
                  <div className="toolbar-btn-group">
                    {[
                      { id: 'flashcard', label: 'Thẻ Học tập Tương tác' },
                      { id: 'quiz-game', label: 'Trò chơi Vượt sóng Ra khơi' },
                      { id: 'group-class', label: 'Hoạt động Nhóm trên Lớp' }
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        className={`toolbar-pill-btn ${selectedGameMode === mode.id ? 'active' : ''}`}
                        onClick={() => setSelectedGameMode(mode.id)}
                      >
                        <Award size={15} />
                        <span>{mode.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="classroom-game-stage">
                  {selectedGameMode === 'flashcard' && (
                    <div className="game-stage-card">
                      <h4>Hoạt động: Thẻ Ghi nhớ Kiến thức Nhanh (Flashcard THPT)</h4>
                      <p>
                        Giúp học sinh THPT ôn luyện từ khóa bài học thông qua thao tác lật thẻ trực
                        quan trên máy tính và điện thoại.
                      </p>
                    </div>
                  )}
                  {selectedGameMode === 'quiz-game' && (
                    <div className="game-stage-card">
                      <h4>Trò chơi Học tập: "Hành trình Vượt sóng Ra khơi"</h4>
                      <p>
                        Khung trò chơi trắc nghiệm tương tác theo từng chặng thử thách, sẵn sàng nạp
                        bộ câu hỏi chuẩn chương trình GDPT 2018.
                      </p>
                    </div>
                  )}
                  {selectedGameMode === 'group-class' && (
                    <div className="game-stage-card">
                      <h4>Phòng học Tương tác &amp; Thi đua Nhóm tại Lớp</h4>
                      <p>
                        Hỗ trợ giáo viên chia tổ thi đua trả lời nhanh trong các tiết sinh hoạt
                        chuyên đề và ngoại khóa biển đảo.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 5. DÒNG THỜI GIAN LỊCH SỬ */}
            {feature.id === 'dong-thoi-gian-lich-su' && (
              <div className="workspace-interactive-area">
                <div className="timeline-framework-preview">
                  <div className="timeline-axis-visual">
                    <div className="timeline-node-placeholder">
                      <span className="node-step">Giai đoạn 01</span>
                      <h4>Thời kỳ Phong kiến</h4>
                      <p>Khung hiển thị các mốc sử liệu chính thống đã qua kiểm chứng.</p>
                    </div>
                    <div className="timeline-node-placeholder">
                      <span className="node-step">Giai đoạn 02</span>
                      <h4>Thời kỳ Cận - Hiện đại</h4>
                      <p>Khung hiển thị quá trình bảo vệ và thực thi chủ quyền liên tục.</p>
                    </div>
                    <div className="timeline-node-placeholder">
                      <span className="node-step">Giai đoạn 03</span>
                      <h4>Văn bản Pháp luật Hiện đại</h4>
                      <p>Khung đối chiếu các mốc pháp lý theo sách giáo khoa THPT.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. TRIỂN LÃM SỐ */}
            {feature.id === 'trien-lam-so' && (
              <div className="workspace-interactive-area">
                <div className="workspace-toolbar">
                  <span className="toolbar-label">Chọn không gian trưng bày:</span>
                  <div className="toolbar-btn-group">
                    {[
                      'Phòng 01: Văn hóa Biển đảo',
                      'Phòng 02: Sinh thái Đại dương xanh',
                      'Phòng 03: Góc Sáng tác Học sinh THPT'
                    ].map((roomLabel, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`toolbar-pill-btn ${selectedRoom === idx ? 'active' : ''}`}
                        onClick={() => setSelectedRoom(idx)}
                      >
                        <Compass size={15} />
                        <span>{roomLabel}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="exhibition-interactive-box">
                  <div className="exhibition-message-form-card">
                    <h4>Góc Tương tác THPT: Gửi Thông điệp hướng về Biển đảo</h4>
                    <p>
                      Học sinh có thể viết cảm nghĩ hoặc lời chúc gửi tới các chiến sĩ và đồng bào
                      nơi đảo xa trong hoạt động ngoại khóa.
                    </p>
                    <form onSubmit={handleSendNote} className="exhibition-form">
                      <input
                        type="text"
                        value={studentMessage}
                        onChange={(e) => setStudentMessage(e.target.value)}
                        placeholder="Nhập thông điệp của bạn (Ví dụ: Tuổi trẻ THPT luôn hướng về biển đảo quê hương!)"
                        aria-label="Nhập thông điệp của học sinh"
                      />
                      <button type="submit" className="btn-primary-gold">
                        <Send size={16} />
                        <span>Đăng thông điệp mẫu</span>
                      </button>
                    </form>
                    {submittedNote && (
                      <div className="submitted-note-preview">
                        <strong>✦ Thông điệp vừa tạo:</strong> "{submittedNote}"
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 3 Core Workspace Sub-Modules Grid */}
            <div className="workspace-modules-grid">
              {feature.workspaceModules.map((mod, idx) => (
                <div key={idx} className="workspace-module-card">
                  <div className="workspace-module-top">
                    <span className="module-index">Thành phần 0{idx + 1}</span>
                    <span className="module-status">{mod.status}</span>
                  </div>
                  <h3>{mod.title}</h3>
                  <p>{mod.desc}</p>
                </div>
              ))}
            </div>

            {/* Key Highlights Checklist */}
            <div className="workspace-highlights-panel">
              <h3>Các điểm nổi bật phục vụ Học sinh &amp; Giáo viên THPT:</h3>
              <ul className="workspace-highlights-list">
                {feature.highlights.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className="workspace-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Prev / Ecosystem / Next Navigation Bar */}
          <div className="feature-detail-bottom-nav">
            <button
              type="button"
              className="detail-nav-card prev"
              onClick={() => onNavigateFeature(prevFeature.id)}
            >
              <span className="nav-dir-label">
                <ArrowLeft size={14} /> Khu vực trước
              </span>
              <strong>
                {prevFeature.code}. {prevFeature.title}
              </strong>
            </button>

            <button
              type="button"
              className="btn-primary-gold"
              onClick={onBackEcosystem}
            >
              <Compass size={18} />
              <span>Quay lại Trang Hệ sinh thái số</span>
            </button>

            <button
              type="button"
              className="detail-nav-card next"
              onClick={() => onNavigateFeature(nextFeature.id)}
            >
              <span className="nav-dir-label">
                Khu vực tiếp theo <ArrowRight size={14} />
              </span>
              <strong>
                {nextFeature.code}. {nextFeature.title}
              </strong>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
