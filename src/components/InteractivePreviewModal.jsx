import React from 'react'
import {
  X,
  Compass,
  Map,
  BookOpen,
  Sparkles,
  GraduationCap,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { FEATURES_DATA } from '../data/homeData'

const ICON_MAP = {
  Map: Map,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Clock: Clock,
  Compass: Compass
}

export default function InteractivePreviewModal({
  selectedFeatureId,
  onClose,
  onSelectFeature,
  onNavigateFeature
}) {
  if (!selectedFeatureId) return null

  const activeFeature =
    FEATURES_DATA.find((f) => f.id === selectedFeatureId) || FEATURES_DATA[0]
  const IconComponent = ICON_MAP[activeFeature.iconName] || Compass

  const handleOpenFullPage = () => {
    const targetId = activeFeature.id
    onClose()
    if (onNavigateFeature) {
      onNavigateFeature(targetId)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-eyebrow">XEM NHANH KHU VỰC CHỨC NĂNG</span>
            <h3 className="modal-title">
              BIỂN ĐẢO VIỆT NAM — Hệ sinh thái số
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Đóng cửa sổ"
          >
            <X size={22} />
          </button>
        </div>

        {/* Module Selector Tabs */}
        <div className="modal-tabs">
          {FEATURES_DATA.map((item) => {
            const TabIcon = ICON_MAP[item.iconName] || Compass
            return (
              <button
                key={item.id}
                type="button"
                className={`modal-tab-btn ${item.id === activeFeature.id ? 'active' : ''}`}
                onClick={() => onSelectFeature(item.id)}
              >
                <TabIcon size={16} />
                <span>{item.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Module Preview Content */}
        <div className="modal-body">
          <div className="modal-feature-banner">
            <div className="modal-feature-icon">
              <IconComponent size={34} />
            </div>
            <div>
              <span className="modal-feature-badge">
                Khu vực #{activeFeature.code} • {activeFeature.badge}
              </span>
              <h4>{activeFeature.title}</h4>
              <p className="modal-feature-subtitle">{activeFeature.subtitle}</p>
            </div>
          </div>

          <p className="modal-feature-desc">{activeFeature.shortDesc}</p>

          <div className="modal-highlights-box">
            <h5>Các tính năng nổi bật dành cho Học sinh THPT &amp; Giáo viên:</h5>
            <ul>
              {activeFeature.highlights.map((point, index) => (
                <li key={index}>
                  <CheckCircle2 size={18} className="modal-check-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-coord-strip">
            <strong>Thông tin tâm điểm:</strong> {activeFeature.samplePreview.coordinate}
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="modal-secondary-close-btn"
            onClick={onClose}
          >
            <span>Đóng cửa sổ</span>
          </button>

          <button
            type="button"
            className="btn-primary-gold"
            onClick={handleOpenFullPage}
          >
            <span>Mở trang {activeFeature.title}</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  )
}
