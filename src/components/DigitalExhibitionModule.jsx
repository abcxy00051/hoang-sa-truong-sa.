import React, { useState, useMemo, useEffect } from 'react'
import {
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Bookmark,
  BookOpen,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Grid,
  List,
  ShieldCheck,
  Send,
  Layers,
  Building2,
  Info,
  Frame,
  FileText
} from 'lucide-react'
import {
  EXHIBITION_HALLS,
  ALL_EXHIBITION_ITEMS,
  FEATURED_EXHIBITION_ITEMS,
  EXHIBITION_COLLECTIONS,
  EXHIBITION_DISPLAY_FORMATS
} from '../data/exhibitionData'

const SAVED_EXHIBITS_KEY = 'bien_dao_saved_exhibition_items_v1'
const GUESTBOOK_STORAGE_KEY = 'bien_dao_exhibition_guestbook_v1'

const DEFAULT_GUESTBOOK_NOTES = [
  {
    id: 'gb-1',
    author: 'Nguyễn Minh Anh — Học sinh lớp 11A2',
    createdAt: '2026',
    message:
      'Qua không gian Châu bản triều Nguyễn và đội Hoàng Sa, em càng tự hào và trân trọng công lao giữ biển của cha ông suốt hàng trăm năm qua!'
  },
  {
    id: 'gb-2',
    author: 'Trần Quốc Bảo — Đoàn viên THPT',
    createdAt: '2026',
    message:
      'Kính chúc các chú bộ đội Hải quân nơi đảo Trường Sa và Nhà giàn DK1 luôn vững tay súng canh giữ bình yên cho biển trời Tổ quốc!'
  }
]

export default function DigitalExhibitionModule({ activeRole = 'student' }) {
  // Bộ lọc Phòng triển lãm, Bộ sưu tập, Hình thức trưng bày (6 hình thức), Loại tư liệu và Từ khóa
  const [selectedHallId, setSelectedHallId] = useState('all')
  const [selectedCollectionId, setSelectedCollectionId] = useState('all')
  const [selectedFormatId, setSelectedFormatId] = useState('all')
  const [docTypeFilter, setDocTypeFilter] = useState('all') // 'all' | 'historical' | 'educational'
  const [searchQuery, setSearchQuery] = useState('')
  const [viewLayout, setViewLayout] = useState('grid') // 'grid' | 'catalog'

  // Carousel Nội dung nổi bật (Featured Spotlight)
  const [featuredIndex, setFeaturedIndex] = useState(0)

  // Lưu hiện vật yêu thích vào Bộ sưu tập cá nhân (localStorage)
  const [savedIds, setSavedIds] = useState(() => {
    if (typeof window === 'undefined') return []
    try {
      const raw = window.localStorage.getItem(SAVED_EXHIBITS_KEY)
      return raw ? JSON.parse(raw) : ['exh-101', 'exh-102']
    } catch {
      return ['exh-101', 'exh-102']
    }
  })

  // Lightbox Phóng to hình ảnh & Xem hồ sơ chi tiết
  const [activeLightboxItem, setActiveLightboxItem] = useState(null)
  const [zoomScale, setZoomScale] = useState(1)

  // Sổ vàng Cảm tưởng THPT
  const [guestbookNotes, setGuestbookNotes] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_GUESTBOOK_NOTES
    try {
      const raw = window.localStorage.getItem(GUESTBOOK_STORAGE_KEY)
      return raw ? JSON.parse(raw) : DEFAULT_GUESTBOOK_NOTES
    } catch {
      return DEFAULT_GUESTBOOK_NOTES
    }
  })
  const [studentAuthor, setStudentAuthor] = useState('')
  const [studentMessage, setStudentMessage] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(SAVED_EXHIBITS_KEY, JSON.stringify(savedIds))
    } catch {
      // Bỏ qua nếu bộ nhớ đầy
    }
  }, [savedIds])

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(
        GUESTBOOK_STORAGE_KEY,
        JSON.stringify(guestbookNotes)
      )
    } catch {
      // Bỏ qua nếu bộ nhớ đầy
    }
  }, [guestbookNotes])

  const toggleSaveExhibit = (itemId) => {
    setSavedIds((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    )
  }

  // Lọc danh sách hiện vật theo Phòng triển lãm, Bộ sưu tập, Hình thức trưng bày, Loại tư liệu và Từ khóa
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return ALL_EXHIBITION_ITEMS.filter((item) => {
      if (selectedHallId !== 'all' && item.hallId !== selectedHallId) {
        return false
      }
      if (selectedCollectionId === 'saved-personal') {
        if (!savedIds.includes(item.id)) return false
      } else if (
        selectedCollectionId !== 'all' &&
        item.collectionId !== selectedCollectionId
      ) {
        return false
      }
      if (
        selectedFormatId !== 'all' &&
        item.displayFormatId !== selectedFormatId
      ) {
        return false
      }
      if (docTypeFilter === 'historical' && !item.isHistoricalDocumentRecord) {
        return false
      }
      if (docTypeFilter === 'educational' && item.isHistoricalDocumentRecord) {
        return false
      }
      if (q) {
        const haystack = [
          item.title,
          item.code,
          item.period,
          item.authorOrProvider,
          item.summary,
          item.caption,
          item.sourceName,
          item.displayFormatLabel,
          item.thematicStoryTitle,
          item.thematicStoryNarrative,
          ...(item.detailedDescription || [])
        ]
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [
    selectedHallId,
    selectedCollectionId,
    selectedFormatId,
    docTypeFilter,
    searchQuery,
    savedIds
  ])

  const activeHallObj = useMemo(
    () => EXHIBITION_HALLS.find((h) => h.id === selectedHallId) || null,
    [selectedHallId]
  )

  const currentFeatured =
    FEATURED_EXHIBITION_ITEMS[featuredIndex] || FEATURED_EXHIBITION_ITEMS[0]

  const handleOpenLightbox = (item) => {
    setActiveLightboxItem(item)
    setZoomScale(1)
  }

  const handleCloseLightbox = () => {
    setActiveLightboxItem(null)
    setZoomScale(1)
  }

  const handleStepLightbox = (dir) => {
    if (!activeLightboxItem) return
    const list = filteredItems.length > 0 ? filteredItems : ALL_EXHIBITION_ITEMS
    const idx = list.findIndex((i) => i.id === activeLightboxItem.id)
    if (idx === -1) return
    const nextIdx = (idx + dir + list.length) % list.length
    setActiveLightboxItem(list[nextIdx])
    setZoomScale(1)
  }

  const handleResetFilters = () => {
    setSelectedHallId('all')
    setSelectedCollectionId('all')
    setSelectedFormatId('all')
    setDocTypeFilter('all')
    setSearchQuery('')
  }

  const handleAddGuestbookNote = (e) => {
    e.preventDefault()
    if (!studentMessage.trim()) return
    const newNote = {
      id: `gb-${Date.now()}`,
      author: studentAuthor.trim() || 'Học sinh THPT Việt Nam',
      createdAt: new Date().toLocaleDateString('vi-VN'),
      message: studentMessage.trim()
    }
    setGuestbookNotes((prev) => [newNote, ...prev].slice(0, 12))
    setStudentMessage('')
  }

  return (
    <div className="digital-exhibition-module">
      {/* 1. HERO SECTION BẢO TÀNG SỐ HIỆN ĐẠI: TRIỂN LÃM SỐ BIỂN ĐẢO VIỆT NAM */}
      <section className="exhibition-museum-hero">
        <div className="exhibition-museum-hero-grid">
          <div className="exhibition-museum-hero-content">
            <div className="exhibition-museum-badges">
              <span className="museum-eyebrow-gold">
                <Frame size={14} /> KHÔNG GIAN BẢO TÀNG SỐ HIỆN ĐẠI
              </span>
              <span className="museum-eyebrow-cyan">
                05 PHÒNG TRIỂN LÃM • 06 HÌNH THỨC TRƯNG BÀY
              </span>
            </div>

            <h2 className="exhibition-museum-title">
              TRIỂN LÃM SỐ BIỂN ĐẢO VIỆT NAM
            </h2>
            <p className="exhibition-museum-subtitle">
              Không gian trưng bày trực tuyến có chiều sâu lịch sử, pháp lý và giáo dục —
              kết nối di sản Châu bản triều Nguyễn, bản đồ cổ, hình ảnh người giữ biển,
              thiên nhiên đại dương và khát vọng tuổi trẻ học đường.
            </p>

            <div className="exhibition-museum-pillars">
              <div className="museum-pillar-chip">
                <strong>5 Phòng Triển lãm</strong>
                <span>
                  Dấu ấn lịch sử • Bản đồ &amp; tư liệu • Đời sống • Thiên nhiên • Tuổi trẻ
                </span>
              </div>
              <div className="museum-pillar-chip">
                <strong>6 Hình thức Trưng bày</strong>
                <span>
                  Ảnh lớn • Khung tư liệu • Bản đồ • Lưu trữ • Infographic • Câu chuyện
                </span>
              </div>
              <div className="museum-pillar-chip">
                <strong>Chuẩn Xác thực Học thuật</strong>
                <span>
                  Phân biệt rõ tư liệu lịch sử gốc &amp; đồ họa minh họa giáo dục THPT
                </span>
              </div>
            </div>

            <div className="exhibition-museum-actions">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => {
                  const el = document.getElementById('exhibition-halls-selector')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Layers size={17} />
                <span>Tham quan 5 Phòng Triển lãm</span>
              </button>

              <button
                type="button"
                className="exhibit-save-btn"
                onClick={() => handleOpenLightbox(currentFeatured)}
              >
                <ZoomIn size={16} />
                <span>Xem Tiêu điểm Bảo tàng Số</span>
              </button>
            </div>
          </div>

          <div className="exhibition-museum-hero-visual">
            <img
              src="/assets/exhibition/hero-trien-lam-so.svg"
              alt="TRIỂN LÃM SỐ BIỂN ĐẢO VIỆT NAM — Không gian bảo tàng số hiện đại"
              className="exhibition-museum-hero-img"
            />
          </div>
        </div>
      </section>

      {/* 2. KHU VỰC GIỚI THIỆU NỘI DUNG NỔI BẬT (FEATURED EXHIBITION SPOTLIGHT) */}
      <div className="exhibition-featured-spotlight">
        <div className="featured-spotlight-visual">
          <img
            src={currentFeatured.image}
            alt={currentFeatured.title}
            className="featured-spotlight-img"
            onClick={() => handleOpenLightbox(currentFeatured)}
          />
          <button
            type="button"
            className="featured-zoom-trigger"
            onClick={() => handleOpenLightbox(currentFeatured)}
          >
            <ZoomIn size={16} />
            <span>Nhấn để phóng to &amp; xem hồ sơ</span>
          </button>
        </div>

        <div className="featured-spotlight-content">
          <div className="featured-top-row">
            <span className="featured-badge-gold">
              <Sparkles size={14} /> TIÊU ĐIỂM TRIỂN LÃM SỐ ({featuredIndex + 1}/
              {FEATURED_EXHIBITION_ITEMS.length})
            </span>
            <span className="featured-hall-tag">
              {currentFeatured.hallCode}: {currentFeatured.hallTitle}
            </span>
            <span className="featured-format-tag">
              {currentFeatured.displayFormatLabel}
            </span>
          </div>

          <h3>{currentFeatured.title}</h3>
          <p className="featured-meta-line">
            <strong>Thời kỳ / Niên đại:</strong> {currentFeatured.period} •{' '}
            <strong>Đơn vị lưu trữ / Cung cấp:</strong>{' '}
            {currentFeatured.authorOrProvider}
          </p>
          <p className="featured-summary-text">{currentFeatured.summary}</p>

          <div className="featured-story-callout">
            <BookOpen size={15} />
            <div>
              <strong>{currentFeatured.thematicStoryTitle}:</strong>{' '}
              <span>{currentFeatured.thematicStoryNarrative}</span>
            </div>
          </div>

          <div className="featured-actions-row">
            <button
              type="button"
              className="btn-primary-gold"
              onClick={() => handleOpenLightbox(currentFeatured)}
            >
              <ZoomIn size={17} />
              <span>Xem hồ sơ chi tiết &amp; Phóng to</span>
            </button>

            <button
              type="button"
              className={`exhibit-save-btn ${
                savedIds.includes(currentFeatured.id) ? 'saved' : ''
              }`}
              onClick={() => toggleSaveExhibit(currentFeatured.id)}
            >
              <Bookmark size={16} />
              <span>
                {savedIds.includes(currentFeatured.id)
                  ? 'Đã lưu vào Bộ sưu tập'
                  : 'Lưu vào Bộ sưu tập'}
              </span>
            </button>

            <div className="featured-slider-controls">
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={() =>
                  setFeaturedIndex(
                    (i) =>
                      (i - 1 + FEATURED_EXHIBITION_ITEMS.length) %
                      FEATURED_EXHIBITION_ITEMS.length
                  )
                }
                aria-label="Hiện vật nổi bật trước"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={() =>
                  setFeaturedIndex(
                    (i) => (i + 1) % FEATURED_EXHIBITION_ITEMS.length
                  )
                }
                aria-label="Hiện vật nổi bật tiếp theo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SƠ ĐỒ 5 PHÒNG TRIỂN LÃM CỦA BẢO TÀNG SỐ (CÓ CHIỀU SÂU KHÔNG GIAN) */}
      <div
        id="exhibition-halls-selector"
        className="exhibition-halls-nav-section"
      >
        <div className="halls-nav-header">
          <div>
            <h3>Hệ thống 5 Phòng Triển lãm Chuyên đề</h3>
            <p>
              Chọn từng phòng triển lãm để bước vào không gian trưng bày chuyên sâu
              với đầy đủ tư liệu, bản đồ, hình ảnh và câu chuyện theo chủ đề
            </p>
          </div>
          <button
            type="button"
            className={`hall-all-btn ${selectedHallId === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedHallId('all')}
          >
            <Layers size={16} />
            <span>Xem toàn bộ 5 Phòng Triển lãm (20 Hồ sơ)</span>
          </button>
        </div>

        <div className="exhibition-halls-grid">
          {EXHIBITION_HALLS.map((hall) => {
            const isSelected = selectedHallId === hall.id
            return (
              <button
                key={hall.id}
                type="button"
                className={`exhibition-hall-card ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedHallId(hall.id)}
              >
                <div className="hall-card-thumb-wrap">
                  <img
                    src={hall.heroImage}
                    alt={hall.title}
                    className="hall-card-thumb-img"
                  />
                  <div className="hall-card-top">
                    <span className="hall-code-badge">{hall.code}</span>
                    <span className="hall-count-pill">
                      {hall.items.length} hồ sơ
                    </span>
                  </div>
                </div>
                <h4>{hall.title}</h4>
                <p>{hall.subtitle}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* 4. THANH CHỌN 6 HÌNH THỨC TRƯNG BÀY, BỘ SƯU TẬP & TÌM KIẾM TƯ LIỆU */}
      <div className="exhibition-filter-bar">
        <div className="exhibition-search-box">
          <Search size={18} className="exh-search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm tư liệu theo tên hiện vật, Châu bản, bản đồ cổ, Hoàng Sa, Trường Sa, DK1, rạn san hô..."
            aria-label="Tìm kiếm tư liệu triển lãm"
          />
          {searchQuery && (
            <button
              type="button"
              className="exh-clear-search"
              onClick={() => setSearchQuery('')}
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Bộ lọc 6 Hình thức trưng bày (Yêu cầu II.3) */}
        <div className="exhibition-format-strip">
          <span className="format-strip-label">
            <Frame size={15} /> 6 Hình thức trưng bày:
          </span>
          <div className="format-pills-list">
            {EXHIBITION_DISPLAY_FORMATS.map((fmt) => {
              const isActive = selectedFormatId === fmt.id
              return (
                <button
                  key={fmt.id}
                  type="button"
                  className={`display-format-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedFormatId(fmt.id)}
                  title={fmt.desc}
                >
                  <span>{fmt.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="exhibition-filter-controls">
          <div className="collection-pills-row">
            {EXHIBITION_COLLECTIONS.map((col) => (
              <button
                key={col.id}
                type="button"
                className={`collection-filter-pill ${
                  selectedCollectionId === col.id ? 'active' : ''
                }`}
                onClick={() => setSelectedCollectionId(col.id)}
              >
                <span>{col.shortLabel}</span>
              </button>
            ))}

            <button
              type="button"
              className={`collection-filter-pill is-saved-pill ${
                selectedCollectionId === 'saved-personal' ? 'active' : ''
              }`}
              onClick={() => setSelectedCollectionId('saved-personal')}
            >
              <Bookmark size={14} />
              <span>Bộ sưu tập đã lưu ({savedIds.length})</span>
            </button>
          </div>

          <div className="exhibition-sub-filters">
            <div className="doctype-switch">
              {[
                { id: 'all', label: 'Tất cả học liệu (20)' },
                {
                  id: 'historical',
                  label: 'Tư liệu Lịch sử – Pháp lý Gốc'
                },
                { id: 'educational', label: 'Đồ họa Minh họa Giáo dục' }
              ].map((dt) => (
                <button
                  key={dt.id}
                  type="button"
                  className={`doctype-btn ${
                    docTypeFilter === dt.id ? 'active' : ''
                  }`}
                  onClick={() => setDocTypeFilter(dt.id)}
                >
                  {dt.label}
                </button>
              ))}
            </div>

            <div className="layout-view-switch">
              <button
                type="button"
                className={`layout-btn ${viewLayout === 'grid' ? 'active' : ''}`}
                onClick={() => setViewLayout('grid')}
                title="Xem dạng Lưới Bảo tàng"
              >
                <Grid size={16} />
                <span>Không gian trưng bày</span>
              </button>
              <button
                type="button"
                className={`layout-btn ${
                  viewLayout === 'catalog' ? 'active' : ''
                }`}
                onClick={() => setViewLayout('catalog')}
                title="Xem dạng Danh mục Hồ sơ chi tiết"
              >
                <List size={16} />
                <span>Hồ sơ chi tiết</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BANNER GIỚI THIỆU PHÒNG TRIỂN LÃM ĐANG CHỌN */}
      {activeHallObj && (
        <div className="active-hall-intro-banner">
          <div className="active-hall-text">
            <span className="hall-intro-eyebrow">
              ĐANG THAM QUAN: {activeHallObj.code.toUpperCase()}
            </span>
            <h3>{activeHallObj.title}</h3>
            <p>{activeHallObj.shortDesc}</p>
            <div className="hall-curator-note">
              <Info size={16} />
              <span>
                <strong>Chú giải Học thuật &amp; Minh bạch Tư liệu:</strong>{' '}
                {activeHallObj.curatorNote}
              </span>
            </div>
          </div>
          <img
            src={activeHallObj.heroImage}
            alt={activeHallObj.title}
            className="active-hall-banner-img"
          />
        </div>
      )}

      {/* 5. DANH SÁCH HIỆN VẬT / HỒ SƠ TRƯNG BÀY TRONG KHÔNG GIAN BẢO TÀNG */}
      {filteredItems.length === 0 ? (
        <div className="exhibition-empty-state">
          <h4>Không tìm thấy hồ sơ trưng bày phù hợp với bộ lọc hiện tại</h4>
          <p>
            Hãy thử từ khóa khác hoặc nhấn nút bên dưới để xem lại toàn bộ 20 hồ
            sơ trong 5 phòng triển lãm.
          </p>
          <button
            type="button"
            className="btn-primary-gold"
            onClick={handleResetFilters}
          >
            <RotateCcw size={16} />
            <span>Hiển thị tất cả hồ sơ triển lãm</span>
          </button>
        </div>
      ) : (
        <div
          className={
            viewLayout === 'grid'
              ? 'exhibition-gallery-grid'
              : 'exhibition-catalog-stack'
          }
        >
          {filteredItems.map((item) => {
            const isSaved = savedIds.includes(item.id)
            return (
              <article
                key={item.id}
                className={`exhibit-artifact-card format-${item.displayFormatId}`}
              >
                <div className="exhibit-media-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="exhibit-card-img"
                    onClick={() => handleOpenLightbox(item)}
                  />
                  <div className="exhibit-media-badges">
                    <span className="exhibit-code-tag">{item.code}</span>
                    <span className="exhibit-format-badge">
                      {item.displayFormatLabel}
                    </span>
                    <span
                      className={`exhibit-type-tag ${
                        item.isHistoricalDocumentRecord
                          ? 'is-historical'
                          : 'is-illustration'
                      }`}
                    >
                      {item.isHistoricalDocumentRecord
                        ? 'Tư liệu Lịch sử – Pháp lý'
                        : 'Minh họa Giáo dục THPT'}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="exhibit-hover-zoom-btn"
                    onClick={() => handleOpenLightbox(item)}
                  >
                    <ZoomIn size={16} />
                    <span>Phóng to ảnh &amp; Xem tư liệu</span>
                  </button>
                </div>

                <div className="exhibit-card-body">
                  <div className="exhibit-hall-meta">
                    <span>
                      {item.hallCode}: {item.hallTitle}
                    </span>
                    <span>• {item.period}</span>
                  </div>

                  <h4
                    className="exhibit-card-title"
                    onClick={() => handleOpenLightbox(item)}
                  >
                    {item.title}
                  </h4>

                  <p className="exhibit-caption-box">
                    <strong>Chú thích tư liệu:</strong> {item.caption}
                  </p>

                  <p className="exhibit-summary-p">{item.summary}</p>

                  {/* Khối Câu chuyện theo chủ đề gắn với từng tư liệu */}
                  <div className="exhibit-thematic-story-box">
                    <div className="story-box-title">
                      <FileText size={14} />
                      <strong>{item.thematicStoryTitle}</strong>
                    </div>
                    <p>{item.thematicStoryNarrative}</p>
                  </div>

                  {viewLayout === 'catalog' && (
                    <div className="exhibit-catalog-extra">
                      {item.detailedDescription.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                      <div className="exhibit-edu-highlight">
                        <strong>Giá trị giáo dục THPT:</strong>{' '}
                        {item.educationalValue}
                      </div>
                    </div>
                  )}

                  <div className="exhibit-source-metadata">
                    <div>
                      <Building2 size={14} />
                      <span>
                        <strong>Đơn vị lưu trữ / Cung cấp:</strong>{' '}
                        {item.authorOrProvider}
                      </span>
                    </div>
                    <div>
                      <ShieldCheck size={14} />
                      <span>
                        <strong>Nguồn trích dẫn:</strong> {item.sourceName}
                      </span>
                    </div>
                  </div>

                  <div className="exhibit-card-footer">
                    <button
                      type="button"
                      className="exhibit-detail-btn"
                      onClick={() => handleOpenLightbox(item)}
                    >
                      <ZoomIn size={15} />
                      <span>Xem chi tiết &amp; Phóng to ảnh</span>
                    </button>

                    <button
                      type="button"
                      className={`exhibit-bookmark-icon-btn ${
                        isSaved ? 'saved' : ''
                      }`}
                      onClick={() => toggleSaveExhibit(item.id)}
                      title={
                        isSaved
                          ? 'Bỏ lưu khỏi Bộ sưu tập cá nhân'
                          : 'Lưu vào Bộ sưu tập cá nhân'
                      }
                    >
                      <Bookmark size={16} />
                      <span>{isSaved ? 'Đã lưu' : 'Lưu tư liệu'}</span>
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {/* 6. GÓC TƯƠNG TÁC HỌC SINH THPT: SỔ VÀNG CẢM TƯỞNG & THÔNG ĐIỆP GỬI BIỂN ĐẢO */}
      <div className="exhibition-guestbook-section">
        <div className="guestbook-grid">
          <div className="guestbook-form-panel">
            <span className="guestbook-eyebrow">
              GÓC TƯƠNG TÁC HỌC SINH &amp; GIÁO VIÊN THPT
            </span>
            <h3>Sổ vàng Tham quan Triển lãm &amp; Thông điệp gửi Đảo Xa</h3>
            <p>
              Sau khi tham quan 5 phòng triển lãm, hãy ghi lại cảm nhận của bạn
              về lịch sử chủ quyền dân tộc hoặc gửi lời chúc tới các cán bộ,
              chiến sĩ và đồng bào nơi biển đảo.
            </p>

            <form onSubmit={handleAddGuestbookNote} className="guestbook-form">
              <input
                type="text"
                value={studentAuthor}
                onChange={(e) => setStudentAuthor(e.target.value)}
                placeholder="Họ tên & Lớp / Trường của bạn (Ví dụ: Lê Hoàng Nam - Lớp 12A1)"
              />
              <textarea
                rows={3}
                value={studentMessage}
                onChange={(e) => setStudentMessage(e.target.value)}
                placeholder="Nhập cảm nghĩ tham quan triển lãm hoặc thông điệp hướng về Hoàng Sa - Trường Sa..."
                required
              />
              <button type="submit" className="btn-primary-gold">
                <Send size={16} />
                <span>Ghi vào Sổ vàng Triển lãm Số</span>
              </button>
            </form>
          </div>

          <div className="guestbook-wall-panel">
            <h4>
              Những dòng lưu bút &amp; thông điệp mới nhất ({guestbookNotes.length})
            </h4>
            <div className="guestbook-notes-list">
              {guestbookNotes.map((note) => (
                <div key={note.id} className="guestbook-note-card">
                  <div className="note-card-top">
                    <strong>{note.author}</strong>
                    <span>{note.createdAt}</span>
                  </div>
                  <p>"{note.message}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 7. CỬA SỔ LIGHTBOX PHÓNG TO HÌNH ẢNH (100% - 250%) & HỒ SƠ CHI TIẾT TƯ LIỆU */}
      {activeLightboxItem && (
        <div
          className="exhibition-lightbox-backdrop"
          onClick={handleCloseLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
        >
          <div
            className="exhibition-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Thanh công cụ Lightbox trên cùng */}
            <div className="lightbox-top-bar">
              <div className="lightbox-title-meta">
                <span className="exhibit-code-tag">
                  {activeLightboxItem.code}
                </span>
                <strong>
                  {activeLightboxItem.hallCode}: {activeLightboxItem.hallTitle}
                </strong>
                <span className="exhibit-format-badge">
                  {activeLightboxItem.displayFormatLabel}
                </span>
              </div>

              <div className="lightbox-zoom-controls">
                <button
                  type="button"
                  className="zoom-ctrl-btn"
                  onClick={() =>
                    setZoomScale((s) =>
                      Math.max(1, Number((s - 0.25).toFixed(2)))
                    )
                  }
                  disabled={zoomScale <= 1}
                >
                  <ZoomOut size={16} />
                  <span>Thu nhỏ</span>
                </button>
                <span className="zoom-percent-label">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  type="button"
                  className="zoom-ctrl-btn"
                  onClick={() =>
                    setZoomScale((s) =>
                      Math.min(2.5, Number((s + 0.25).toFixed(2)))
                    )
                  }
                  disabled={zoomScale >= 2.5}
                >
                  <ZoomIn size={16} />
                  <span>Phóng to</span>
                </button>
                <button
                  type="button"
                  className="zoom-ctrl-btn"
                  onClick={() => setZoomScale(1)}
                >
                  <RotateCcw size={15} />
                  <span>100%</span>
                </button>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={handleCloseLightbox}
                  aria-label="Đóng cửa sổ phóng to"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Nội dung chính Lightbox: Khung phóng to ảnh bên trái + Hồ sơ chi tiết bên phải */}
            <div className="lightbox-body-grid">
              <div className="lightbox-image-viewport">
                <div className="lightbox-image-scroll">
                  <img
                    src={activeLightboxItem.image}
                    alt={activeLightboxItem.title}
                    style={{
                      transform: `scale(${zoomScale})`,
                      transformOrigin: 'center center'
                    }}
                    className="lightbox-zoomable-img"
                  />
                </div>
                <div className="lightbox-caption-bar">
                  <strong>Chú thích hình ảnh:</strong>{' '}
                  {activeLightboxItem.caption}
                </div>
              </div>

              <div className="lightbox-dossier-panel">
                <span
                  className={`exhibit-type-tag ${
                    activeLightboxItem.isHistoricalDocumentRecord
                      ? 'is-historical'
                      : 'is-illustration'
                  }`}
                >
                  {activeLightboxItem.authenticityBadge}
                </span>

                <h3>{activeLightboxItem.title}</h3>

                <div className="dossier-meta-table">
                  <div className="dossier-meta-row">
                    <span>Thời gian / Niên đại:</span>
                    <strong>{activeLightboxItem.period}</strong>
                  </div>
                  <div className="dossier-meta-row">
                    <span>Tác giả / Cơ quan lưu trữ:</span>
                    <strong>{activeLightboxItem.authorOrProvider}</strong>
                  </div>
                  <div className="dossier-meta-row">
                    <span>Hình thức trưng bày:</span>
                    <strong>{activeLightboxItem.displayFormatLabel}</strong>
                  </div>
                  <div className="dossier-meta-row">
                    <span>Phân loại học liệu:</span>
                    <strong>{activeLightboxItem.mediaType}</strong>
                  </div>
                </div>

                <div className="dossier-description-block">
                  <h4>Nội dung chi tiết &amp; Phân tích tư liệu:</h4>
                  {activeLightboxItem.detailedDescription.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="dossier-edu-box">
                  <h4>{activeLightboxItem.thematicStoryTitle}:</h4>
                  <p>{activeLightboxItem.thematicStoryNarrative}</p>
                  <hr
                    style={{
                      border: 'none',
                      borderTop: '1px solid rgba(56, 189, 248, 0.2)',
                      margin: '0.65rem 0'
                    }}
                  />
                  <h4>Ý nghĩa &amp; Giá trị Giáo dục THPT:</h4>
                  <p>{activeLightboxItem.educationalValue}</p>
                </div>

                <div className="dossier-source-box">
                  <span>
                    <strong>Nguồn tham khảo chính thống:</strong>{' '}
                    {activeLightboxItem.sourceName}
                  </span>
                  {activeLightboxItem.sourceUrl && (
                    <a
                      href={activeLightboxItem.sourceUrl}
                      target={
                        activeLightboxItem.sourceUrl.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel="noreferrer"
                      className="dossier-source-link"
                    >
                      <span>Mở trang nguồn tham khảo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <div className="lightbox-bottom-nav">
                  <button
                    type="button"
                    className="quiz-nav-btn"
                    onClick={() => handleStepLightbox(-1)}
                  >
                    <ChevronLeft size={16} />
                    <span>Hồ sơ trước</span>
                  </button>
                  <button
                    type="button"
                    className={`exhibit-save-btn ${
                      savedIds.includes(activeLightboxItem.id) ? 'saved' : ''
                    }`}
                    onClick={() => toggleSaveExhibit(activeLightboxItem.id)}
                  >
                    <Bookmark size={16} />
                    <span>
                      {savedIds.includes(activeLightboxItem.id)
                        ? 'Đã lưu trong Bộ sưu tập'
                        : 'Lưu vào Bộ sưu tập'}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="quiz-nav-btn primary"
                    onClick={() => handleStepLightbox(1)}
                  >
                    <span>Hồ sơ tiếp theo</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
