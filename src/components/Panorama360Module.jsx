import React, { useState, useEffect, useRef } from 'react'
import {
  Compass,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  MapPin,
  ShieldCheck,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Info,
  Navigation,
  Maximize2,
  Minimize2,
  HelpCircle,
  Eye,
  EyeOff,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Move,
  ExternalLink
} from 'lucide-react'
import {
  PANORAMA_THEMATIC_SPACES,
  PANORAMA_CONTROL_GUIDE
} from '../data/panorama360Data'

export default function Panorama360Module({
  activeRole = 'student',
  onNavigateFeature
}) {
  const viewportContainerRef = useRef(null)
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    startYaw: 180,
    startPitch: 0
  })

  // Lựa chọn giữa 5 Không gian Chủ đề 360°
  const [selectedSpaceId, setSelectedSpaceId] = useState(
    PANORAMA_THEMATIC_SPACES[0].id
  )
  const [yawAngle, setYawAngle] = useState(180) // 0 - 359 độ
  const [pitchAngle, setPitchAngle] = useState(0) // -30 đến +30 độ
  const [zoomLevel, setZoomLevel] = useState(1) // 1.0 đến 2.2
  const [autoRotate, setAutoRotate] = useState(false)
  const [showPlaceLabels, setShowPlaceLabels] = useState(true)
  const [showControlGuide, setShowControlGuide] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isDraggingUI, setIsDraggingUI] = useState(false)

  // Khu vực tích hợp ảnh Panorama 360° Equirectangular thực tế (Yêu cầu I.4)
  const [customPanoBySpace, setCustomPanoBySpace] = useState({})
  const [uploadNotice, setUploadNotice] = useState(null)

  const currentSpace =
    PANORAMA_THEMATIC_SPACES.find((s) => s.id === selectedSpaceId) ||
    PANORAMA_THEMATIC_SPACES[0]

  const [activeHotspotId, setActiveHotspotId] = useState(
    PANORAMA_THEMATIC_SPACES[0].hotspots[0].id
  )

  const activeHotspot =
    currentSpace.hotspots.find((h) => h.id === activeHotspotId) ||
    currentSpace.hotspots[0]

  const activeCustomPano = customPanoBySpace[currentSpace.id] || null

  // Tự động xoay 360° mượt mà
  useEffect(() => {
    if (!autoRotate || isDraggingUI) return undefined
    const timer = setInterval(() => {
      setYawAngle((prev) => (prev + 1) % 360)
    }, 65)
    return () => clearInterval(timer)
  }, [autoRotate, isDraggingUI])

  // Đồng bộ trạng thái Fullscreen của trình duyệt
  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false)
      }
    }
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  const handleSelectSpace = (space) => {
    setSelectedSpaceId(space.id)
    const firstSpot = space.hotspots[0]
    if (firstSpot) {
      setActiveHotspotId(firstSpot.id)
      setYawAngle(firstSpot.bearing)
      setPitchAngle(firstSpot.pitch || 0)
    } else {
      setYawAngle(180)
      setPitchAngle(0)
    }
    setZoomLevel(1)
    setUploadNotice(null)
  }

  const rotateBy = (deltaYaw, deltaPitch = 0) => {
    setAutoRotate(false)
    setYawAngle((prev) => Math.round((prev + deltaYaw + 360) % 360))
    if (deltaPitch !== 0) {
      setPitchAngle((prev) => Math.max(-30, Math.min(30, prev + deltaPitch)))
    }
  }

  // Xử lý kéo chuột xoay góc nhìn 360°
  const handleMouseDown = (e) => {
    if (e.target.closest('button') || e.target.closest('input')) return
    setAutoRotate(false)
    setIsDraggingUI(true)
    dragStateRef.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      startYaw: yawAngle,
      startPitch: pitchAngle
    }
  }

  const handleMouseMove = (e) => {
    if (!dragStateRef.current.isDragging) return
    const dx = e.clientX - dragStateRef.current.startX
    const dy = e.clientY - dragStateRef.current.startY
    const sensitivity = 0.32 / Math.max(1, zoomLevel * 0.75)
    const nextYaw =
      (dragStateRef.current.startYaw - dx * sensitivity + 3600) % 360
    const nextPitch = Math.max(
      -30,
      Math.min(30, dragStateRef.current.startPitch + dy * sensitivity * 0.55)
    )
    setYawAngle(Math.round(nextYaw))
    setPitchAngle(Math.round(nextPitch))
  }

  const handleMouseUp = () => {
    if (dragStateRef.current.isDragging) {
      dragStateRef.current.isDragging = false
      setIsDraggingUI(false)
    }
  }

  // Xử lý thao tác cảm ứng trên điện thoại / máy tính bảng
  const handleTouchStart = (e) => {
    if (e.target.closest('button') || e.target.closest('input')) return
    if (e.touches.length !== 1) return
    const touch = e.touches[0]
    setAutoRotate(false)
    setIsDraggingUI(true)
    dragStateRef.current = {
      isDragging: true,
      startX: touch.clientX,
      startY: touch.clientY,
      startYaw: yawAngle,
      startPitch: pitchAngle
    }
  }

  const handleTouchMove = (e) => {
    if (!dragStateRef.current.isDragging || e.touches.length !== 1) return
    const touch = e.touches[0]
    const dx = touch.clientX - dragStateRef.current.startX
    const dy = touch.clientY - dragStateRef.current.startY
    const sensitivity = 0.38 / Math.max(1, zoomLevel * 0.75)
    const nextYaw =
      (dragStateRef.current.startYaw - dx * sensitivity + 3600) % 360
    const nextPitch = Math.max(
      -30,
      Math.min(30, dragStateRef.current.startPitch + dy * sensitivity * 0.55)
    )
    setYawAngle(Math.round(nextYaw))
    setPitchAngle(Math.round(nextPitch))
  }

  const handleTouchEnd = () => {
    dragStateRef.current.isDragging = false
    setIsDraggingUI(false)
  }

  // Chế độ Toàn màn hình (Native Fullscreen API + CSS Fallback)
  const handleToggleFullscreen = async () => {
    const el = viewportContainerRef.current
    if (!isFullscreen) {
      setIsFullscreen(true)
      if (el && el.requestFullscreen) {
        try {
          await el.requestFullscreen()
        } catch {
          // Sử dụng CSS Fullscreen fallback nếu trình duyệt chặn
        }
      }
    } else {
      setIsFullscreen(false)
      if (document.fullscreenElement && document.exitFullscreen) {
        try {
          await document.exitFullscreen()
        } catch {
          // Bỏ qua
        }
      }
    }
  }

  // Xử lý tải ảnh Panorama 360° Equirectangular thực tế (kiểm tra tỷ lệ 2:1 để không dùng ảnh thường giả làm ảnh 360°)
  const handleUploadRealPanorama = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const objectUrl = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const ratio = img.width / Math.max(1, img.height)
      const isEquirectangular = ratio >= 1.75 && ratio <= 2.25
      if (!isEquirectangular) {
        setUploadNotice({
          type: 'warning',
          text: `Cảnh báo học thuật: Ảnh "${file.name}" (${img.width}×${img.height}px, tỷ lệ ${ratio.toFixed(
            2
          )}:1) là ảnh phẳng thông thường, KHÔNG phải ảnh Panorama 360° Equirectangular chuẩn tỷ lệ 2:1. Hệ thống từ chối gán ảnh thường giả làm ảnh 360° theo đúng quy chuẩn dữ liệu.`
        })
        URL.revokeObjectURL(objectUrl)
        return
      }
      setCustomPanoBySpace((prev) => ({
        ...prev,
        [currentSpace.id]: {
          url: objectUrl,
          fileName: file.name,
          dimensions: `${img.width}×${img.height}px`,
          ratio: `${ratio.toFixed(2)}:1`
        }
      }))
      setUploadNotice({
        type: 'success',
        text: `Đã nạp thành công ảnh Panorama 360° Equirectangular thực tế "${file.name}" (${img.width}×${img.height}px, chuẩn tỷ lệ 2:1) cho không gian "${currentSpace.categoryLabel}".`
      })
    }
    img.src = objectUrl
  }

  const getCompassCardinal = (deg) => {
    const normalized = ((deg % 360) + 360) % 360
    if (normalized >= 337.5 || normalized < 22.5) return 'BẮC (N)'
    if (normalized < 67.5) return 'ĐÔNG BẮC (NE)'
    if (normalized < 112.5) return 'ĐÔNG (E)'
    if (normalized < 157.5) return 'ĐÔNG NAM (SE)'
    if (normalized < 202.5) return 'NAM (S)'
    if (normalized < 247.5) return 'TÂY NAM (SW)'
    if (normalized < 292.5) return 'TÂY (W)'
    return 'TÂY BẮC (NW)'
  }

  // Tính toán vị trí hiển thị trên màn hình cho Hotspot và Chú thích địa danh theo góc quay yaw/pitch
  const computeScreenPosition = (targetYaw, targetPitch = 0) => {
    const rawDiff = ((targetYaw - yawAngle + 540) % 360) - 180
    const leftPercent = 50 + (rawDiff / 145) * 44
    const topPercent = 52 - ((targetPitch - pitchAngle) / 45) * 32
    const isVisible = Math.abs(rawDiff) <= 155
    return {
      leftPercent: Math.max(8, Math.min(92, leftPercent)),
      topPercent: Math.max(18, Math.min(82, topPercent)),
      isVisible,
      rawDiff
    }
  }

  // Dịch chuyển ngang mượt mà cho lớp nền Panorama 2:1 theo góc quay 0-360
  const bgOffsetX = ((180 - yawAngle) / 180) * 24
  const bgOffsetY = (pitchAngle / 30) * 10

  return (
    <div
      ref={viewportContainerRef}
      className={`pano360-module ${isFullscreen ? 'fullscreen-mode' : ''}`}
    >
      {/* 1. HERO SECTION: KHÔNG GIAN TRẢI NGHIỆM 360° */}
      <section className="pano360-hero-banner">
        <div className="pano360-hero-grid">
          <div className="pano360-hero-content">
            <div className="pano360-hero-badges">
              <span className="pano360-eyebrow-gold">
                <Compass size={14} /> HỆ SINH THÁI SỐ BIỂN ĐẢO VIỆT NAM
              </span>
              <span className="pano360-eyebrow-cyan">
                TƯƠNG TÁC TOÀN CẢNH 360° • CHUẨN EQUIRECTANGULAR 2:1
              </span>
            </div>

            <h2 className="pano360-hero-title">KHÔNG GIAN TRẢI NGHIỆM 360°</h2>
            <p className="pano360-hero-desc">
              Khám phá biển đảo qua góc nhìn toàn cảnh và tương tác không gian số.
            </p>

            <div className="pano360-hero-metrics">
              <div className="pano360-metric-chip">
                <strong>05 Không gian 360°</strong>
                <span>Cảnh quan • Sinh thái • Đời sống • Thiên nhiên • Tư liệu</span>
              </div>
              <div className="pano360-metric-chip">
                <strong>Xoay 0° – 360°</strong>
                <span>Kéo chuột, vuốt cảm ứng &amp; thu phóng 100%–220%</span>
              </div>
              <div className="pano360-metric-chip">
                <strong>Hotspot &amp; Địa danh</strong>
                <span>Tọa độ xác thực, rõ nguồn &amp; không dùng ảnh phẳng giả 360°</span>
              </div>
            </div>

            <div className="pano360-hero-actions">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => {
                  const stageEl = document.getElementById('pano360-interactive-stage')
                  if (stageEl) stageEl.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Compass size={17} />
                <span>Bắt đầu Xoay Không gian 360°</span>
              </button>

              <button
                type="button"
                className={`pano360-guide-toggle-btn ${showControlGuide ? 'active' : ''}`}
                onClick={() => setShowControlGuide((prev) => !prev)}
              >
                <HelpCircle size={16} />
                <span>
                  {showControlGuide ? 'Ẩn Hướng dẫn Điều khiển' : 'Hướng dẫn Điều khiển 360°'}
                </span>
              </button>
            </div>
          </div>

          <div className="pano360-hero-artwork-wrap">
            <img
              src="/assets/panorama/hero-trai-nghiem-360.svg"
              alt="KHÔNG GIAN TRẢI NGHIỆM 360° — Khám phá biển đảo qua góc nhìn toàn cảnh và tương tác không gian số"
              className="pano360-hero-artwork"
            />
          </div>
        </div>

        {/* HƯỚNG DẪN ĐIỀU KHIỂN (CONTROL GUIDE PANEL) */}
        {showControlGuide && (
          <div className="pano360-control-guide-panel">
            <div className="control-guide-header">
              <div>
                <h4>
                  <HelpCircle size={17} /> Hướng dẫn Điều khiển Không gian Trải nghiệm 360°
                </h4>
                <p>
                  Hỗ trợ đầy đủ thao tác chuột trên máy tính và cảm ứng đa điểm trên điện thoại, máy tính bảng
                </p>
              </div>
              <button
                type="button"
                className="guide-close-pill"
                onClick={() => setShowControlGuide(false)}
              >
                Đóng hướng dẫn
              </button>
            </div>
            <div className="control-guide-cards">
              {PANORAMA_CONTROL_GUIDE.map((g, idx) => (
                <div key={g.id} className="control-guide-card">
                  <span className="guide-step-num">0{idx + 1}</span>
                  <strong>{g.title}</strong>
                  <p>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 2. THANH CHỌN 5 KHÔNG GIAN CHỦ ĐỀ 360° */}
      <div
        id="pano360-interactive-stage"
        className="pano360-station-bar"
        role="tablist"
        aria-label="Chọn 5 không gian trải nghiệm 360 độ"
      >
        {PANORAMA_THEMATIC_SPACES.map((space) => {
          const isActive = space.id === currentSpace.id
          return (
            <button
              key={space.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`pano360-station-tab ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectSpace(space)}
            >
              <span className="pano360-station-code">{space.categoryLabel}</span>
              <strong>{space.title}</strong>
              <span className="pano360-station-region">{space.region}</span>
            </button>
          )
        })}
      </div>

      {/* 3. KHUNG TRẢI NGHIỆM 360° TƯƠNG TÁC & BẢNG CHÚ GIẢI HOTSPOT */}
      <div className="pano360-workspace-grid">
        {/* Cột trái: Khung nhìn Toàn cảnh 360° tương tác chuột & cảm ứng */}
        <div className="pano360-viewport-card">
          {/* Thanh HUD điều khiển phía trên */}
          <div className="pano360-hud-top">
            <div className="pano360-hud-coord">
              <Compass size={16} className="spin-slow" />
              <span>
                Góc nhìn: <strong>{yawAngle}° ({getCompassCardinal(yawAngle)})</strong> • Cao độ:{' '}
                <strong>{pitchAngle > 0 ? `+${pitchAngle}°` : `${pitchAngle}°`}</strong> • Thu phóng:{' '}
                <strong>{Math.round(zoomLevel * 100)}%</strong>
              </span>
            </div>

            <div className="pano360-hud-controls">
              <button
                type="button"
                className={`pano-ctrl-btn ${autoRotate ? 'active' : ''}`}
                onClick={() => setAutoRotate((prev) => !prev)}
                title="Tự động xoay toàn cảnh 360°"
              >
                {autoRotate ? <Pause size={14} /> : <Play size={14} />}
                <span>{autoRotate ? 'Dừng xoay' : 'Tự xoay 360°'}</span>
              </button>

              <button
                type="button"
                className={`pano-ctrl-btn ${showPlaceLabels ? 'active' : ''}`}
                onClick={() => setShowPlaceLabels((prev) => !prev)}
                title="Bật/tắt chú thích địa danh trên không gian 360°"
              >
                {showPlaceLabels ? <Eye size={14} /> : <EyeOff size={14} />}
                <span>Địa danh</span>
              </button>

              <button
                type="button"
                className="pano-ctrl-btn"
                onClick={() =>
                  setZoomLevel((z) => Math.min(2.2, +(z + 0.2).toFixed(2)))
                }
                title="Phóng to (+)"
              >
                <ZoomIn size={14} />
              </button>

              <button
                type="button"
                className="pano-ctrl-btn"
                onClick={() =>
                  setZoomLevel((z) => Math.max(1, +(z - 0.2).toFixed(2)))
                }
                title="Thu nhỏ (-)"
              >
                <ZoomOut size={14} />
              </button>

              <button
                type="button"
                className="pano-ctrl-btn"
                onClick={() => {
                  setYawAngle(180)
                  setPitchAngle(0)
                  setZoomLevel(1)
                  setAutoRotate(false)
                }}
                title="Đặt lại góc nhìn mặc định"
              >
                <RotateCcw size={14} />
              </button>

              <button
                type="button"
                className={`pano-ctrl-btn ${showControlGuide ? 'active' : ''}`}
                onClick={() => setShowControlGuide((prev) => !prev)}
                title="Hướng dẫn điều khiển"
              >
                <HelpCircle size={14} />
              </button>

              <button
                type="button"
                className={`pano-ctrl-btn ${isFullscreen ? 'active' : ''}`}
                onClick={handleToggleFullscreen}
                title="Chế độ Toàn màn hình"
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                <span>{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}</span>
              </button>
            </div>
          </div>

          {/* Sân khấu 360° (Hỗ trợ kéo chuột & vuốt cảm ứng) */}
          <div
            className={`pano360-stage ${isDraggingUI ? 'is-dragging' : ''}`}
            style={{ background: currentSpace.skyTheme }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label={`Không gian 360 độ: ${currentSpace.title}`}
          >
            {/* Thước đo La bàn 0° - 360° phía trên sân khấu */}
            <div className="pano360-compass-tape">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                const diff = ((deg - yawAngle + 540) % 360) - 180
                if (Math.abs(diff) > 115) return null
                const leftPercent = 50 + (diff / 115) * 44
                return (
                  <button
                    key={deg}
                    type="button"
                    className={`compass-tape-mark ${
                      Math.abs(diff) < 18 ? 'center-mark' : ''
                    }`}
                    style={{ left: `${leftPercent}%` }}
                    onClick={() => {
                      setAutoRotate(false)
                      setYawAngle(deg)
                    }}
                  >
                    <span>{deg}°</span>
                    <small>
                      {deg === 0
                        ? 'BẮC'
                        : deg === 45
                        ? 'ĐB'
                        : deg === 90
                        ? 'ĐÔNG'
                        : deg === 135
                        ? 'ĐN'
                        : deg === 180
                        ? 'NAM'
                        : deg === 225
                        ? 'TN'
                        : deg === 270
                        ? 'TÂY'
                        : 'TB'}
                    </small>
                  </button>
                )
              })}
            </div>

            {/* Nhãn phân biệt dữ liệu minh bạch trên góc trái sân khấu */}
            <div className="pano360-data-integrity-pill">
              <ShieldCheck size={14} />
              <span>
                {activeCustomPano
                  ? `Ảnh Panorama 360° Thực địa (${activeCustomPano.dimensions} • Chuẩn 2:1)`
                  : currentSpace.dataTypeBadge}
              </span>
            </div>

            {/* Chỉ báo thao tác kéo chuột / cảm ứng */}
            <div className="pano360-drag-hint-pill">
              <Move size={13} />
              <span>Kéo chuột hoặc vuốt cảm ứng để xoay góc nhìn 360°</span>
            </div>

            {/* Lớp hiển thị Panorama Equirectangular (SVG mô phỏng 2:1 hoặc Ảnh 360° thực địa đã nạp) */}
            <div
              className="pano360-scene-layer"
              style={{
                transform: `scale(${zoomLevel}) translate(${bgOffsetX}%, ${bgOffsetY}%)`
              }}
            >
              <img
                src={
                  activeCustomPano ? activeCustomPano.url : currentSpace.panoramaSvg
                }
                alt={currentSpace.title}
                className="pano360-equirect-img"
                draggable={false}
              />

              {/* LỚP CHÚ THÍCH ĐỊA DANH (PLACE ANNOTATIONS) */}
              {showPlaceLabels &&
                currentSpace.placeLabels.map((lbl) => {
                  const pos = computeScreenPosition(lbl.yaw, lbl.pitch)
                  if (!pos.isVisible) return null
                  return (
                    <div
                      key={lbl.id}
                      className="pano360-place-annotation"
                      style={{
                        left: `${pos.leftPercent}%`,
                        top: `${pos.topPercent}%`
                      }}
                    >
                      <span className="place-annotation-dot" />
                      <div className="place-annotation-box">
                        <strong>{lbl.name}</strong>
                        <span>{lbl.subLabel}</span>
                      </div>
                    </div>
                  )
                })}

              {/* LỚP ĐIỂM THÔNG TIN TƯƠNG TÁC (INTERACTIVE HOTSPOTS) */}
              {currentSpace.hotspots.map((spot) => {
                const isSelected = spot.id === activeHotspot?.id
                const pos = computeScreenPosition(spot.bearing, spot.pitch || 0)
                return (
                  <button
                    key={spot.id}
                    type="button"
                    className={`pano360-hotspot-pin ${isSelected ? 'active' : ''}`}
                    style={{
                      left: `${pos.leftPercent}%`,
                      top: `${pos.topPercent}%`,
                      opacity: pos.isVisible ? 1 : 0.35
                    }}
                    onClick={() => {
                      setAutoRotate(false)
                      setActiveHotspotId(spot.id)
                      setYawAngle(spot.bearing)
                      setPitchAngle(spot.pitch || 0)
                    }}
                  >
                    <span className="hotspot-pulse" />
                    <MapPin size={15} />
                    <span className="hotspot-pin-label">{spot.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Thanh điều khiển góc nhìn & Thu phóng phía dưới sân khấu */}
            <div className="pano360-stage-footer">
              <div className="pano360-angle-buttons">
                <button type="button" onClick={() => rotateBy(-45, 0)}>
                  <ChevronLeft size={16} /> Quay Trái (-45°)
                </button>
                <button type="button" onClick={() => rotateBy(0, 10)}>
                  Nhìn Lên (+10°)
                </button>
                <button type="button" onClick={() => rotateBy(0, -10)}>
                  Nhìn Xuống (-10°)
                </button>
                <button type="button" onClick={() => rotateBy(45, 0)}>
                  Quay Phải (+45°) <ChevronRight size={16} />
                </button>
              </div>

              <div className="pano360-zoom-slider-wrap">
                <span>Thu phóng:</span>
                <input
                  type="range"
                  min="1"
                  max="2.2"
                  step="0.05"
                  value={zoomLevel}
                  onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                  aria-label="Thanh trượt phóng to thu nhỏ không gian 360 độ"
                />
                <strong>{Math.round(zoomLevel * 100)}%</strong>
              </div>

              <span className="pano360-elevation-tag">{currentSpace.elevation}</span>
            </div>
          </div>

          {/* 4. KHU VỰC TÍCH HỢP & CHỜ BỔ SUNG ẢNH PANORAMA 360° THỰC ĐỊA (YÊU CẦU I.4) */}
          <div className="pano360-real-data-slot">
            <div className="real-data-slot-left">
              <div className="slot-title-row">
                <Layers size={17} />
                <strong>
                  Khu vực Ảnh Panorama 360° Thực địa &amp; Chuẩn Minh bạch Dữ liệu:
                </strong>
              </div>
              <p>
                Hệ thống tuyệt đối <strong>không dùng ảnh phẳng 2D giả làm ảnh 360°</strong> và{' '}
                <strong>không gán sai địa điểm</strong>. Mặc định sử dụng bản đồ họa Panorama
                Equirectangular chuẩn cầu 2:1 có ghi chú rõ ràng. Giáo viên và học sinh có thể nạp
                ảnh chụp Panorama 360° thực địa (tỷ lệ 2:1) cho từng không gian tại đây:
              </p>
              <div className="slot-rights-meta">
                <span>
                  <strong>Nguồn dữ liệu:</strong> {currentSpace.sourceAndRights.sourceName}
                </span>
                <span>
                  <strong>Quyền sử dụng:</strong> {currentSpace.sourceAndRights.usageRights}
                </span>
              </div>
            </div>

            <div className="real-data-slot-actions">
              <label className="pano-upload-label">
                <Upload size={16} />
                <span>Nạp Ảnh Panorama 360° Thực tế (Tỷ lệ 2:1)</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleUploadRealPanorama}
                  hidden
                />
              </label>

              {activeCustomPano && (
                <button
                  type="button"
                  className="pano-reset-sim-btn"
                  onClick={() => {
                    setCustomPanoBySpace((prev) => {
                      const next = { ...prev }
                      delete next[currentSpace.id]
                      return next
                    })
                    setUploadNotice(null)
                  }}
                >
                  <RotateCcw size={14} />
                  <span>Quay lại Mô phỏng 360° Mặc định</span>
                </button>
              )}
            </div>
          </div>

          {uploadNotice && (
            <div className={`pano360-upload-alert ${uploadNotice.type}`}>
              {uploadNotice.type === 'warning' ? (
                <AlertTriangle size={18} />
              ) : (
                <CheckCircle2 size={18} />
              )}
              <span>{uploadNotice.text}</span>
            </div>
          )}
        </div>

        {/* Cột phải: Bảng Chú giải Địa danh, Hotspot Tương tác & Nguồn Học thuật */}
        <aside className="pano360-inspector-card">
          <div className="pano360-inspector-header">
            <span className="pano360-badge-gold">{currentSpace.code}</span>
            <h3>{currentSpace.title}</h3>
            <p className="pano360-coord-line">
              <Navigation size={14} />
              <span>{currentSpace.coordinates}</span>
            </p>
          </div>

          <p className="pano360-station-summary">{currentSpace.summary}</p>

          {/* Chi tiết Điểm thông tin tương tác (Hotspot) đang chọn */}
          {activeHotspot && (
            <div className="pano360-active-hotspot-box">
              <div className="hotspot-box-top">
                <span className="hotspot-bearing-pill">
                  Hướng: {activeHotspot.directionLabel}
                </span>
                <span className="hotspot-cat-pill">{activeHotspot.category}</span>
              </div>
              <h4>{activeHotspot.title}</h4>
              <p className="hotspot-coord-sub">
                <strong>Vị trí / Tọa độ:</strong> {activeHotspot.coordinates}
              </p>
              <p>{activeHotspot.detail}</p>
              <div className="hotspot-source-line">
                <ShieldCheck size={14} />
                <span>
                  <strong>Nguồn xác thực:</strong> {activeHotspot.source}
                </span>
              </div>
            </div>
          )}

          {/* Danh sách chuyển nhanh các Hotspot trong Không gian hiện tại */}
          <div className="pano360-hotspot-list">
            <span className="hotspot-list-label">
              Điểm thông tin tương tác (Hotspot) trong không gian này (
              {currentSpace.hotspots.length}):
            </span>
            {currentSpace.hotspots.map((spot) => (
              <button
                key={spot.id}
                type="button"
                className={`hotspot-list-item ${
                  spot.id === activeHotspot?.id ? 'active' : ''
                }`}
                onClick={() => {
                  setAutoRotate(false)
                  setActiveHotspotId(spot.id)
                  setYawAngle(spot.bearing)
                  setPitchAngle(spot.pitch || 0)
                }}
              >
                <MapPin size={15} />
                <div>
                  <strong>{spot.title}</strong>
                  <span>
                    {spot.directionLabel} • {spot.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="pano360-historical-note">
            <Info size={17} />
            <div>
              <strong>Ghi chú Học thuật &amp; Pháp lý:</strong>
              <p>{currentSpace.historicalNote}</p>
            </div>
          </div>

          {onNavigateFeature && (
            <div className="pano360-cross-links">
              <button
                type="button"
                className="pano-cross-btn"
                onClick={() => onNavigateFeature('ban-do-so')}
              >
                <span>Mở Bản đồ số GIS</span>
                <ExternalLink size={14} />
              </button>
              <button
                type="button"
                className="pano-cross-btn"
                onClick={() => onNavigateFeature('trien-lam-so')}
              >
                <span>Vào Triển lãm Số Bảo tàng</span>
                <ExternalLink size={14} />
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
