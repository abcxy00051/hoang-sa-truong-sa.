import React, { useState, useMemo, useRef } from 'react'
import {
  Clock,
  Search,
  ShieldCheck,
  BookOpen,
  FileText,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Compass,
  Layers,
  Eye,
  ScrollText,
  Network,
  Map,
  Scale,
  Info
} from 'lucide-react'
import {
  TIMELINE_ERAS,
  ALL_TIMELINE_MILESTONES,
  ERA_DIVISION_DIAGRAM,
  HOANG_SA_BAC_HAI_INFOGRAPHIC,
  EVENT_TO_LEGAL_VALUE_FLOW,
  HISTORICAL_SOURCES_CLASSIFICATION,
  AUTHENTIC_ARCHIVES_SHOWCASE
} from '../data/timelineData'

export default function SovereigntyTimelineModule({
  activeRole = 'student',
  isCompactHome = false,
  onOpenFullTimelinePage = null
}) {
  // Lọc theo giai đoạn ('all' hoặc 'era-1' -> 'era-6')
  const [selectedEraId, setSelectedEraId] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMilestoneId, setSelectedMilestoneId] = useState(
    ALL_TIMELINE_MILESTONES[3]?.id || ALL_TIMELINE_MILESTONES[0]?.id
  )
  const [modalMilestone, setModalMilestone] = useState(null)
  const [activeInfographicTab, setActiveInfographicTab] = useState('hoang-sa-flotilla')

  const horizontalTrackRef = useRef(null)
  const dossierPanelRef = useRef(null)

  const filteredMilestones = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return ALL_TIMELINE_MILESTONES.filter((ms) => {
      if (selectedEraId !== 'all' && ms.eraId !== selectedEraId) {
        return false
      }
      if (q) {
        const haystack = [
          ms.timeDisplay,
          ms.title,
          ms.category,
          ms.historicalContext,
          ms.historicalFact,
          ms.historicalSignificance,
          ms.documentQuote,
          ms.sourceName,
          ms.eraTitle
        ]
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [selectedEraId, searchQuery])

  const activeMilestone = useMemo(() => {
    const found = filteredMilestones.find((m) => m.id === selectedMilestoneId)
    return found || filteredMilestones[0] || ALL_TIMELINE_MILESTONES[0]
  }, [filteredMilestones, selectedMilestoneId])

  const activeMilestoneIndex = useMemo(() => {
    if (!activeMilestone) return 0
    const idx = filteredMilestones.findIndex((m) => m.id === activeMilestone.id)
    return idx >= 0 ? idx : 0
  }, [filteredMilestones, activeMilestone])

  const activeEraObj = useMemo(
    () => TIMELINE_ERAS.find((e) => e.id === selectedEraId) || null,
    [selectedEraId]
  )

  const handleSelectEra = (eraId) => {
    setSelectedEraId(eraId)
    const firstInEra =
      eraId === 'all'
        ? ALL_TIMELINE_MILESTONES[0]
        : ALL_TIMELINE_MILESTONES.find((m) => m.eraId === eraId)
    if (firstInEra) {
      setSelectedMilestoneId(firstInEra.id)
    }
  }

  const handleStepMilestone = (dir) => {
    if (!filteredMilestones.length) return
    const idx = filteredMilestones.findIndex((m) => m.id === activeMilestone.id)
    const nextIdx =
      idx === -1
        ? 0
        : (idx + dir + filteredMilestones.length) % filteredMilestones.length
    const nextMs = filteredMilestones[nextIdx]
    setSelectedMilestoneId(nextMs.id)
    if (modalMilestone) {
      setModalMilestone(nextMs)
    }
  }

  const scrollHorizontalTrack = (direction) => {
    if (!horizontalTrackRef.current) return
    horizontalTrackRef.current.scrollBy({
      left: direction * 340,
      behavior: 'smooth'
    })
  }

  const handlePickMilestoneFromAxis = (msId) => {
    setSelectedMilestoneId(msId)
    if (typeof window !== 'undefined' && window.innerWidth < 960 && dossierPanelRef.current) {
      dossierPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="sovereignty-timeline-module">
      {/* =====================================================================
          I. HERO SECTION: HÀNH TRÌNH LỊCH SỬ VÀ CHỦ QUYỀN BIỂN ĐẢO
          ===================================================================== */}
      {!isCompactHome && (
        <section className="tl-hero-banner">
          <div className="tl-hero-grid">
            <div className="tl-hero-text-col">
              <div className="tl-hero-badges">
                <span className="tl-hero-pill gold">
                  <ScrollText size={14} />
                  <span>CHÂU BẢN • MỘC BẢN • BẢN ĐỒ CỔ • CÔNG PHÁP QUỐC TẾ</span>
                </span>
                <span className="tl-hero-pill cyan">
                  <ShieldCheck size={14} />
                  <span>6 GIAI ĐOẠN • {ALL_TIMELINE_MILESTONES.length} HỒ SƠ SỰ KIỆN</span>
                </span>
              </div>

              <h2 className="tl-hero-title">
                HÀNH TRÌNH LỊCH SỬ VÀ CHỦ QUYỀN BIỂN ĐẢO
              </h2>

              <p className="tl-hero-lead">
                Khám phá các dấu mốc lịch sử qua tư liệu và thời gian.
              </p>

              <p className="tl-hero-desc">
                Không gian biên niên sử trực quan tái hiện quá trình Nhà nước Việt Nam
                xác lập, quản lý và thực thi chủ quyền liên tục, hòa bình đối với hai
                quần đảo Hoàng Sa và Trường Sa từ trước thế kỷ XVII, qua hoạt động của
                Đội Hoàng Sa – Bắc Hải, Châu bản triều Nguyễn đến Công ước Luật Biển
                UNCLOS 1982 và Luật Biển Việt Nam năm 2012.
              </p>

              {/* Cam kết chuẩn mực học thuật: Phân biệt Dữ kiện, Tài liệu gốc và Nhận định */}
              <div className="tl-hero-academic-rules">
                <span className="tl-rule-chip primary">
                  <ScrollText size={13} /> Tài liệu gốc (Châu bản, Mộc bản, Nghị định)
                </span>
                <span className="tl-rule-chip fact">
                  <CheckCircle2 size={13} /> Dữ kiện lịch sử có nguồn kiểm chứng
                </span>
                <span className="tl-rule-chip research">
                  <Award size={13} /> Nhận định nghiên cứu &amp; Ý nghĩa lịch sử
                </span>
              </div>
            </div>

            <div className="tl-hero-visual-col">
              <div className="tl-hero-artwork-frame">
                <img
                  src="/assets/timeline/hero-dong-thoi-gian.svg?v=ocean3"
                  alt="Hành trình lịch sử và chủ quyền biển đảo Việt Nam qua bản đồ cổ, châu bản và tư liệu lịch sử"
                  className="tl-hero-artwork-img"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          II. PHÂN CHIA 6 GIAI ĐOẠN LỊCH SỬ (CÓ HÌNH ẢNH ĐẠI DIỆN RIÊNG)
          ===================================================================== */}
      <div className="timeline-eras-selector-box">
        <div className="eras-box-header">
          <div>
            <span className="eras-eyebrow">
              <Clock size={15} /> PHÂN CHIA 6 GIAI ĐOẠN LỊCH SỬ CHỦ QUYỀN BIỂN ĐẢO
            </span>
            <h3>Chọn giai đoạn lịch sử để lọc cột mốc và tư liệu tương ứng</h3>
          </div>

          <div className="eras-header-actions">
            <button
              type="button"
              className={`era-all-pill ${selectedEraId === 'all' ? 'active' : ''}`}
              onClick={() => handleSelectEra('all')}
            >
              <Layers size={15} />
              <span>
                Tất cả 6 Giai đoạn ({ALL_TIMELINE_MILESTONES.length} Sự kiện)
              </span>
            </button>

            {isCompactHome && onOpenFullTimelinePage && (
              <button
                type="button"
                className="btn-primary-gold"
                onClick={onOpenFullTimelinePage}
              >
                <Compass size={16} />
                <span>Mở Trang Dòng thời gian Chuyên sâu</span>
              </button>
            )}
          </div>
        </div>

        {/* Lưới 6 Thẻ Giai đoạn Lịch sử kèm Hình ảnh Đại diện riêng */}
        <div className="timeline-eras-grid tl-eras-visual-grid">
          {TIMELINE_ERAS.map((era) => {
            const isSelected = selectedEraId === era.id
            return (
              <button
                key={era.id}
                type="button"
                className={`timeline-era-card tl-era-visual-card ${
                  isSelected ? 'active' : ''
                }`}
                onClick={() => handleSelectEra(era.id)}
              >
                <div className="tl-era-img-wrap">
                  <img
                    src={era.bannerImage}
                    alt={era.title}
                    className="tl-era-img"
                    loading="lazy"
                  />
                </div>
                <div className="tl-era-card-body">
                  <div className="tl-era-card-meta-row">
                    <span className="era-code-tag">{era.code}</span>
                    <span className="era-count-tag">
                      {era.milestones.length} sự kiện
                    </span>
                  </div>
                  <h4>{era.periodRange}</h4>
                  <p>{era.subtitle}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Thanh tìm kiếm & Chú giải phân biệt học thuật */}
        <div className="timeline-search-toolbar">
          <div className="timeline-search-input-wrap">
            <Search size={17} className="tl-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm theo năm (1490, 1686, 1776, 1816, 1836, 1933, 1938, 1951, 1982, 2012), Châu bản, Đội Hoàng Sa..."
              aria-label="Tìm kiếm sự kiện lịch sử"
            />
            {searchQuery && (
              <button
                type="button"
                className="tl-clear-btn"
                onClick={() => setSearchQuery('')}
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="timeline-academic-legend">
            <span className="legend-chip fact">
              ● Dữ kiện Lịch sử &amp; Tài liệu gốc
            </span>
            <span className="legend-chip significance">
              ✦ Ý nghĩa Lịch sử &amp; Nhận định Nghiên cứu
            </span>
          </div>
        </div>
      </div>

      {/* BANNER TÓM TẮT GIAI ĐOẠN ĐANG CHỌN */}
      {activeEraObj && (
        <div className="selected-era-summary-banner">
          <div>
            <span className="era-banner-badge">
              {activeEraObj.code} • {activeEraObj.periodRange}
            </span>
            <h4>{activeEraObj.title}</h4>
            <p>{activeEraObj.summary}</p>
          </div>
        </div>
      )}

      {/* =====================================================================
          III. TRỤC THỜI GIAN TƯƠNG TÁC NGANG (HORIZONTAL TIMELINE TRACK)
          ===================================================================== */}
      {filteredMilestones.length > 0 && (
        <div className="tl-horizontal-axis-box">
          <div className="tl-horiz-header">
            <div>
              <span className="tl-horiz-eyebrow">
                TRỤC THỜI GIAN TƯƠNG TÁC NGANG ({activeMilestoneIndex + 1}/
                {filteredMilestones.length})
              </span>
              <h4>
                Nhấn chọn điểm đánh dấu sự kiện hoặc dùng thanh điều hướng để chuyển
                mốc thời gian
              </h4>
            </div>

            <div className="tl-horiz-nav-controls">
              <button
                type="button"
                className="tl-track-btn"
                onClick={() => handleStepMilestone(-1)}
              >
                <ChevronLeft size={16} />
                <span>Sự kiện trước</span>
              </button>
              <button
                type="button"
                className="tl-track-btn"
                onClick={() => handleStepMilestone(1)}
              >
                <span>Sự kiện tiếp theo</span>
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                className="tl-track-scroll-btn"
                onClick={() => scrollHorizontalTrack(-1)}
                title="Cuộn trục thời gian sang trái"
              >
                «
              </button>
              <button
                type="button"
                className="tl-track-scroll-btn"
                onClick={() => scrollHorizontalTrack(1)}
                title="Cuộn trục thời gian sang phải"
              >
                »
              </button>
            </div>
          </div>

          {/* Thanh tiến độ vị trí cột mốc trên trục thời gian */}
          <div className="tl-horiz-progress-rail">
            <div
              className="tl-horiz-progress-fill"
              style={{
                width: `${Math.round(
                  ((activeMilestoneIndex + 1) /
                    Math.max(1, filteredMilestones.length)) *
                    100
                )}%`
              }}
            />
          </div>

          {/* Dải các điểm đánh dấu sự kiện ngang (Horizontal Nodes) */}
          <div className="tl-horiz-nodes-scroll" ref={horizontalTrackRef}>
            {filteredMilestones.map((ms, idx) => {
              const isCurrent = ms.id === activeMilestone?.id
              return (
                <button
                  key={ms.id}
                  type="button"
                  className={`tl-horiz-node-card ${isCurrent ? 'active' : ''}`}
                  onClick={() => handlePickMilestoneFromAxis(ms.id)}
                >
                  <div className="tl-horiz-node-top">
                    <span className="tl-horiz-dot">{idx + 1}</span>
                    <span className="tl-horiz-era">{ms.eraCode}</span>
                  </div>
                  <strong className="tl-horiz-time">{ms.timeDisplay}</strong>
                  <span className="tl-horiz-title">{ms.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* =====================================================================
          III & V. BỐ CỤC TRỤC THỜI GIAN DỌC + HỒ SƠ SỰ KIỆN 7 TRƯỜNG CHUẨN
          ===================================================================== */}
      {filteredMilestones.length === 0 ? (
        <div className="timeline-empty-box">
          <h4>
            Không tìm thấy cột mốc lịch sử phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;
          </h4>
          <button
            type="button"
            className="btn-primary-gold"
            onClick={() => {
              setSelectedEraId('all')
              setSearchQuery('')
            }}
          >
            <RotateCcw size={16} />
            <span>Hiển thị lại toàn bộ {ALL_TIMELINE_MILESTONES.length} cột mốc</span>
          </button>
        </div>
      ) : (
        <div className="timeline-interactive-split">
          {/* Cột Trái: Trục thời gian dọc gồm các thẻ mốc sự kiện */}
          <div className="timeline-vertical-stream">
            <div className="stream-head">
              <h4>
                Trục Biên niên sử Dọc ({filteredMilestones.length} cột mốc) — Nhấn
                vào từng mốc để mở Hồ sơ sự kiện
              </h4>
            </div>

            <div className="timeline-nodes-container">
              {filteredMilestones.map((ms, idx) => {
                const isCurrent = ms.id === activeMilestone?.id
                return (
                  <div
                    key={ms.id}
                    className={`timeline-axis-item ${isCurrent ? 'active' : ''}`}
                    onClick={() => handlePickMilestoneFromAxis(ms.id)}
                  >
                    <div className="axis-marker-col">
                      <span className="axis-dot">{idx + 1}</span>
                      <span className="axis-line" />
                    </div>

                    <div className="axis-card-body">
                      <div className="axis-card-meta">
                        <span className="axis-time-badge">{ms.timeDisplay}</span>
                        <span className="axis-cat-badge">{ms.category}</span>
                      </div>

                      <h5>{ms.title}</h5>

                      <p className="axis-short-fact">
                        {ms.historicalFact.slice(0, 145)}...
                      </p>

                      <div className="axis-card-footer">
                        <span className="axis-era-label">
                          {ms.eraCode}: {ms.eraPeriodRange}
                        </span>
                        <button
                          type="button"
                          className="axis-open-modal-btn"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedMilestoneId(ms.id)
                            setModalMilestone(ms)
                          }}
                        >
                          <Eye size={14} />
                          <span>Mở Hồ sơ rộng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Cột Phải: V. HỒ SƠ SỰ KIỆN CHI TIẾT (ĐẦY ĐỦ 7 TRƯỜNG CHUẨN) */}
          {activeMilestone && (
            <aside className="timeline-inspector-panel" ref={dossierPanelRef}>
              <div
                key={activeMilestone.id}
                className="inspector-sticky-card tl-dossier-fade-in"
              >
                <div className="inspector-top-bar">
                  <div>
                    <span className="inspector-era-pill">
                      {activeMilestone.eraCode} • {activeMilestone.eraPeriodRange}
                    </span>
                    <span className="inspector-cat-pill">
                      {activeMilestone.category}
                    </span>
                  </div>

                  <div className="inspector-step-btns">
                    <button
                      type="button"
                      onClick={() => handleStepMilestone(-1)}
                      title="Cột mốc trước"
                    >
                      <ChevronLeft size={17} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStepMilestone(1)}
                      title="Cột mốc tiếp theo"
                    >
                      <ChevronRight size={17} />
                    </button>
                  </div>
                </div>

                {/* Trường 1: Thời gian */}
                <div className="inspector-time-banner">
                  <Clock size={18} />
                  <div>
                    <strong>1. Thời gian: {activeMilestone.timeDisplay}</strong>
                    <span className="tl-chrono-precision-note">
                      {activeMilestone.sourceTypeClassification?.chronologyPrecisionNote}
                    </span>
                  </div>
                </div>

                {/* Trường 2: Tên sự kiện */}
                <div className="tl-dossier-title-box">
                  <span className="tl-field-label">2. Tên sự kiện lịch sử:</span>
                  <h3 className="inspector-milestone-title">
                    {activeMilestone.title}
                  </h3>
                </div>

                {/* Trường 6: Hình ảnh hoặc tư liệu minh họa */}
                <div className="inspector-media-box">
                  <img
                    src={activeMilestone.image || activeMilestone.eraBannerImage}
                    alt={activeMilestone.title}
                    className="inspector-img"
                    onClick={() => setModalMilestone(activeMilestone)}
                  />
                  <p className="inspector-img-caption">
                    <strong>6. Hình ảnh / Đồ họa tư liệu:</strong>{' '}
                    {activeMilestone.imageCaption}
                  </p>
                </div>

                {/* Trường 3: Bối cảnh lịch sử */}
                <div className="inspector-section-block tl-context-block">
                  <div className="block-heading">
                    <Compass size={16} />
                    <h4>3. Bối cảnh lịch sử</h4>
                  </div>
                  <p>{activeMilestone.historicalContext}</p>
                </div>

                {/* Trường 4: Nội dung sự kiện (Dữ kiện lịch sử đã kiểm chứng) */}
                <div className="inspector-section-block is-fact-block">
                  <div className="block-heading">
                    <FileText size={16} />
                    <h4>4. Nội dung sự kiện (Dữ kiện lịch sử từ sử liệu)</h4>
                  </div>
                  <p>{activeMilestone.historicalFact}</p>
                </div>

                {/* Khung trích dẫn tư liệu / văn bản gốc */}
                {activeMilestone.documentQuote && (
                  <blockquote className="inspector-quote-box">
                    <strong>
                      <ScrollText size={14} style={{ display: 'inline', marginRight: '6px' }} />
                      Trích dẫn tài liệu gốc / văn bản lưu trữ:
                    </strong>
                    <p>{activeMilestone.documentQuote}</p>
                  </blockquote>
                )}

                {/* Trường 5: Ý nghĩa lịch sử (Nhận định nghiên cứu học thuật) */}
                <div className="inspector-section-block is-significance-block">
                  <div className="block-heading">
                    <Award size={16} />
                    <h4>5. Ý nghĩa lịch sử (Nhận định nghiên cứu học thuật)</h4>
                  </div>
                  <p>{activeMilestone.historicalSignificance}</p>
                </div>

                {/* Trường 7: Nguồn tham khảo & Phân biệt Tài liệu gốc / Tài liệu nghiên cứu */}
                <div className="inspector-source-footer">
                  <div className="source-row">
                    <BookOpen size={15} />
                    <span>
                      <strong>7. Nguồn tham khảo:</strong>{' '}
                      {activeMilestone.sourceName}
                    </span>
                  </div>
                  <div className="verification-row">
                    <ShieldCheck size={15} />
                    <span>
                      <strong>Trạng thái kiểm chứng:</strong>{' '}
                      {activeMilestone.verificationStatus}
                    </span>
                  </div>
                  <div className="tl-source-distinction-box">
                    <p>
                      <strong>• Tài liệu gốc:</strong>{' '}
                      {activeMilestone.sourceTypeClassification?.primarySourceNote}
                    </p>
                    <p>
                      <strong>• Tài liệu nghiên cứu:</strong>{' '}
                      {activeMilestone.sourceTypeClassification?.secondaryResearchNote}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      )}

      {/* =====================================================================
          IV. SƠ ĐỒ, INFOGRAPHIC ĐỘI HOÀNG SA – BẮC HẢI & KHUNG TRÍCH DẪN CHÂU BẢN
          ===================================================================== */}
      {!isCompactHome && (
        <section className="tl-infographics-hub">
          <div className="tl-hub-header">
            <div>
              <span className="eras-eyebrow">
                <Network size={15} /> HỆ THỐNG SƠ ĐỒ, INFOGRAPHIC &amp; KHUNG TRÍCH DẪN TƯ LIỆU GỐC
              </span>
              <h3>
                Sơ đồ hóa Tiến trình Lịch sử, Hoạt động Đội Hoàng Sa – Bắc Hải và Hệ thống Tư liệu
              </h3>
            </div>

            <div className="tl-hub-tabs" role="tablist">
              <button
                type="button"
                className={`tl-hub-tab-btn ${
                  activeInfographicTab === 'hoang-sa-flotilla' ? 'active' : ''
                }`}
                onClick={() => setActiveInfographicTab('hoang-sa-flotilla')}
              >
                <Compass size={15} />
                <span>1. Infographic Đội Hoàng Sa &amp; Bắc Hải</span>
              </button>
              <button
                type="button"
                className={`tl-hub-tab-btn ${
                  activeInfographicTab === 'era-division' ? 'active' : ''
                }`}
                onClick={() => setActiveInfographicTab('era-division')}
              >
                <Layers size={15} />
                <span>2. Sơ đồ 6 Giai đoạn Lịch sử</span>
              </button>
              <button
                type="button"
                className={`tl-hub-tab-btn ${
                  activeInfographicTab === 'event-document-link' ? 'active' : ''
                }`}
                onClick={() => setActiveInfographicTab('event-document-link')}
              >
                <Scale size={15} />
                <span>3. Sơ đồ Sự kiện – Tư liệu – Pháp lý</span>
              </button>
              <button
                type="button"
                className={`tl-hub-tab-btn ${
                  activeInfographicTab === 'chau-ban-maps' ? 'active' : ''
                }`}
                onClick={() => setActiveInfographicTab('chau-ban-maps')}
              >
                <ScrollText size={15} />
                <span>4. Trích dẫn Châu bản &amp; Bản đồ Lịch sử</span>
              </button>
            </div>
          </div>

          {/* TAB 1: INFOGRAPHIC ĐỘI HOÀNG SA VÀ ĐỘI BẮC HẢI */}
          {activeInfographicTab === 'hoang-sa-flotilla' && (
            <div className="tl-infographic-panel">
              <div className="tl-info-banner-head">
                <h4>{HOANG_SA_BAC_HAI_INFOGRAPHIC.title}</h4>
                <p>{HOANG_SA_BAC_HAI_INFOGRAPHIC.subtitle}</p>
              </div>
              <div className="tl-flotilla-steps-grid">
                {HOANG_SA_BAC_HAI_INFOGRAPHIC.pillars.map((item) => (
                  <div key={item.step} className="tl-flotilla-card">
                    <div className="tl-flotilla-card-top">
                      <span className="tl-flotilla-step">BƯỚC {item.step}</span>
                      <span className="tl-flotilla-source-badge">
                        {item.sourceType}
                      </span>
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.fact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: SƠ ĐỒ PHÂN CHIA 6 GIAI ĐOẠN LỊCH SỬ */}
          {activeInfographicTab === 'era-division' && (
            <div className="tl-infographic-panel">
              <div className="tl-info-banner-head">
                <h4>
                  Sơ đồ Phân chia 6 Giai đoạn Lịch sử và Sự Kế thừa Chủ quyền Nhà nước Liên tục
                </h4>
                <p>
                  Minh chứng tính liên tục về mặt Nhà nước từ thời Phong kiến đến hiện đại
                </p>
              </div>
              <div className="tl-era-diagram-table-wrap">
                <table className="lib-academic-table">
                  <thead>
                    <tr>
                      <th>Giai đoạn</th>
                      <th>Thời kỳ</th>
                      <th>Chủ thể Nhà nước thực thi</th>
                      <th>Hoạt động thực thi chủ quyền cốt lõi</th>
                      <th>Tư liệu lịch sử – pháp lý tiêu biểu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ERA_DIVISION_DIAGRAM.map((row, idx) => (
                      <tr key={idx}>
                        <td>
                          <strong>{row.eraCode}</strong>
                        </td>
                        <td>{row.period}</td>
                        <td>{row.stateActor}</td>
                        <td>{row.coreAction}</td>
                        <td>{row.keyDocuments}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SƠ ĐỒ MỐI LIÊN HỆ SỰ KIỆN – TƯ LIỆU – PHÁP LÝ & PHÂN LOẠI TƯ LIỆU */}
          {activeInfographicTab === 'event-document-link' && (
            <div className="tl-infographic-panel">
              <div className="tl-info-banner-head">
                <h4>
                  Sơ đồ Mối liên hệ giữa Sự kiện Lịch sử – Tư liệu Lưu trữ – Giá trị Pháp lý Quốc tế
                </h4>
                <p>
                  Phân biệt rõ Tài liệu gốc (Primary Sources) và Tài liệu nghiên cứu (Secondary Sources)
                </p>
              </div>

              <div className="tl-flow-three-cols">
                {EVENT_TO_LEGAL_VALUE_FLOW.map((layer, idx) => (
                  <div key={idx} className="tl-flow-col-card">
                    <span className="tl-flow-code">{layer.nodeCode}</span>
                    <h5>{layer.title}</h5>
                    <ul>
                      {layer.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="tl-source-types-grid">
                {HISTORICAL_SOURCES_CLASSIFICATION.map((cls, idx) => (
                  <div
                    key={idx}
                    className="tl-source-type-card"
                    style={{ borderLeftColor: cls.color }}
                  >
                    <span
                      className="tl-source-type-pill"
                      style={{ backgroundColor: cls.color }}
                    >
                      {cls.typeBadge}
                    </span>
                    <p className="tl-source-type-def">{cls.definition}</p>
                    <ul>
                      {cls.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: KHUNG TRÍCH DẪN CHÂU BẢN, TÀI LIỆU LƯU TRỮ & BẢN ĐỒ LỊCH SỬ XÁC THỰC */}
          {activeInfographicTab === 'chau-ban-maps' && (
            <div className="tl-infographic-panel">
              <div className="tl-info-banner-head">
                <h4>
                  Khung Trích dẫn Châu bản Triều Nguyễn, Tài liệu Lưu trữ và Bản đồ Lịch sử Xác thực
                </h4>
                <p>
                  Trích nguyên văn bản dịch chuẩn từ Trung tâm Lưu trữ Quốc gia I và Viện Nghiên cứu Hán Nôm
                </p>
              </div>

              <div className="tl-archives-showcase-grid">
                {AUTHENTIC_ARCHIVES_SHOWCASE.map((item) => (
                  <div key={item.id} className="tl-archive-showcase-card">
                    <div className="tl-arch-card-top">
                      <span className="tl-arch-cat">{item.category}</span>
                      <span className="tl-arch-year">{item.year}</span>
                    </div>
                    <h5>{item.title}</h5>
                    <blockquote>{item.quote}</blockquote>
                    <div className="tl-arch-meta-footer">
                      <p>
                        <strong>Nơi lưu trữ gốc:</strong> {item.repository}
                      </p>
                      <p>
                        <strong>Giá trị xác thực:</strong> {item.verificationNote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* =====================================================================
          CỬA SỔ MODAL XEM RỘNG HỒ SƠ CHI TIẾT SỰ KIỆN
          ===================================================================== */}
      {modalMilestone && (
        <div
          className="exhibition-lightbox-backdrop"
          onClick={() => setModalMilestone(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="timeline-detail-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-top-bar">
              <div className="lightbox-title-meta">
                <span className="exhibit-code-tag">
                  {modalMilestone.eraCode}
                </span>
                <strong>{modalMilestone.timeDisplay}</strong>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setModalMilestone(null)}
                aria-label="Đóng cửa sổ"
              >
                <X size={20} />
              </button>
            </div>

            <div className="timeline-modal-body">
              <span className="inspector-cat-pill">
                {modalMilestone.category}
              </span>
              <h3>{modalMilestone.title}</h3>

              <div className="inspector-media-box">
                <img
                  src={modalMilestone.image || modalMilestone.eraBannerImage}
                  alt={modalMilestone.title}
                  className="modal-timeline-img"
                />
                <p className="inspector-img-caption">
                  <strong>Chú thích hình ảnh / tư liệu:</strong>{' '}
                  {modalMilestone.imageCaption}
                </p>
              </div>

              <div className="inspector-section-block tl-context-block">
                <div className="block-heading">
                  <Compass size={16} />
                  <h4>Bối cảnh Lịch sử</h4>
                </div>
                <p>{modalMilestone.historicalContext}</p>
              </div>

              <div className="inspector-section-block is-fact-block">
                <div className="block-heading">
                  <FileText size={16} />
                  <h4>Nội dung Sự kiện (Dữ kiện Lịch sử đã kiểm chứng)</h4>
                </div>
                <p>{modalMilestone.historicalFact}</p>
              </div>

              {modalMilestone.documentQuote && (
                <blockquote className="inspector-quote-box">
                  <strong>Trích dẫn tài liệu gốc / văn bản lưu trữ:</strong>
                  <p>{modalMilestone.documentQuote}</p>
                </blockquote>
              )}

              <div className="inspector-section-block is-significance-block">
                <div className="block-heading">
                  <Award size={16} />
                  <h4>Ý nghĩa Lịch sử &amp; Nhận định Nghiên cứu</h4>
                </div>
                <p>{modalMilestone.historicalSignificance}</p>
              </div>

              <div className="inspector-source-footer">
                <div className="source-row">
                  <BookOpen size={15} />
                  <span>
                    <strong>Nguồn tham khảo:</strong>{' '}
                    {modalMilestone.sourceName}
                  </span>
                </div>
                <div className="verification-row">
                  <ShieldCheck size={15} />
                  <span>
                    <strong>Kiểm chứng:</strong>{' '}
                    {modalMilestone.verificationStatus}
                  </span>
                </div>
              </div>

              <div className="modal-bottom-nav">
                <button
                  type="button"
                  className="quiz-nav-btn"
                  onClick={() => handleStepMilestone(-1)}
                >
                  <ChevronLeft size={16} />
                  <span>Cột mốc trước</span>
                </button>
                <button
                  type="button"
                  className="btn-primary-gold"
                  onClick={() => handleStepMilestone(1)}
                >
                  <span>Cột mốc tiếp theo</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
