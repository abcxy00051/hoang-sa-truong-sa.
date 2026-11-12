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
import CozeAiAssistant from '../components/CozeAiAssistant'
import InteractiveClassroomModule from '../components/InteractiveClassroomModule'
import SovereigntyTimelineModule from '../components/SovereigntyTimelineModule'
import CartographicDossierModule from '../components/CartographicDossierModule'

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
  const currentIndex = FEATURES_DATA.findIndex((f) => f.id === featureId)
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

            {/* 3. TRỢ LÝ AI (TÍCH HỢP COZE WEBCHAT SDK 1.2.0-beta.6) */}
            {feature.id === 'tro-ly-ai' && (
              <div className="workspace-interactive-area">
                <CozeAiAssistant activeRole={activeRole} />
              </div>
            )}

            {/* 4. PHÒNG HỌC TƯƠNG TÁC VÀ TRÒ CHƠI HỌC TẬP */}
            {feature.id === 'phong-hoc-tuong-tac' && (
              <div className="workspace-interactive-area">
                <InteractiveClassroomModule
                  activeRole={activeRole}
                  onRoleChange={onRoleChange}
                />
              </div>
            )}

            {/* 5. DÒNG THỜI GIAN LỊCH SỬ (CỘT MỐC CHỦ QUYỀN 6 GIAI ĐOẠN) */}
            {feature.id === 'dong-thoi-gian-lich-su' && (
              <div className="workspace-interactive-area">
                <SovereigntyTimelineModule activeRole={activeRole} />
              </div>
            )}

            {/* 6. HỒ SƠ BẢN ĐỒ (KHO BẢN ĐỒ CỔ VIỆT NAM, PHƯƠNG TÂY & PHÁP LÝ HIỆN ĐẠI) */}
            {feature.id === 'ho-so-ban-do' && (
              <div className="workspace-interactive-area">
                <CartographicDossierModule
                  activeRole={activeRole}
                  onNavigateFeature={onNavigateFeature}
                />
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
