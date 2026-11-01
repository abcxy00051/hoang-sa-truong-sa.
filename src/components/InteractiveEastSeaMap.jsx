import React, { useState, useRef } from 'react'
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Compass,
  MapPin,
  Info,
  BookOpen,
  ShieldCheck,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Layers,
  Maximize2,
  Minimize2,
  Navigation
} from 'lucide-react'
import {
  MAP_BOUNDS,
  projectLatLng,
  unprojectXY,
  VIETNAM_MAINLAND_COORDS,
  VIETNAM_COASTLINE_COORDS,
  MAP_CATEGORIES,
  MAP_CAMERA_PRESETS,
  MAP_MARKERS,
  MAP_LEGEND_ITEMS,
  MAP_REFERENCE_SOURCES,
  MAP_LEGAL_DISCLAIMER
} from '../data/mapData'

const LAT_LINES = [8, 10, 12, 14, 16, 18, 20, 22]
const LNG_LINES = [104, 106, 108, 110, 112, 114, 116, 118]

function pointsToSvgPath(coordList, closePath = false) {
  if (!coordList || coordList.length === 0) return ''
  const segments = coordList.map(([lat, lng], index) => {
    const { x, y } = projectLatLng(lat, lng)
    return `${index === 0 ? 'M' : 'L'}${x},${y}`
  })
  return closePath ? `${segments.join(' ')} Z` : segments.join(' ')
}

const MAINLAND_PATH = pointsToSvgPath(VIETNAM_MAINLAND_COORDS, true)
const COASTLINE_PATH = pointsToSvgPath(VIETNAM_COASTLINE_COORDS, false)

export default function InteractiveEastSeaMap({ activeRole = 'student' }) {
  const [selectedMarkerId, setSelectedMarkerId] = useState('quan-dao-hoang-sa')
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [showGrid, setShowGrid] = useState(true)
  const [showDistances, setShowDistances] = useState(true)
  const [showAllLabels, setShowAllLabels] = useState(true)
  const [isFullscreenMode, setIsFullscreenMode] = useState(false)
  const [hoverCoord, setHoverCoord] = useState({ lat: 16.53, lng: 111.63 })

  const dragStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 })
  const viewportRef = useRef(null)

  const filteredMarkers = MAP_MARKERS.filter((m) => {
    const matchCategory =
      activeCategory === 'all' || m.category === activeCategory
    const q = searchQuery.trim().toLowerCase()
    const matchSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.subtitle.toLowerCase().includes(q) ||
      m.adminUnit.toLowerCase().includes(q)
    return matchCategory && matchSearch
  })

  const selectedMarker =
    MAP_MARKERS.find((m) => m.id === selectedMarkerId) || MAP_MARKERS[0]

  const clampPan = (nextX, nextY, targetZoom = zoom) => {
    const maxOffset = Math.max(0, (targetZoom - 1) * 360 + 120)
    return {
      x: Math.max(-maxOffset, Math.min(maxOffset, nextX)),
      y: Math.max(-maxOffset, Math.min(maxOffset, nextY))
    }
  }

  const handleZoomChange = (delta) => {
    setZoom((prev) => {
      const next = Math.max(1, Math.min(3.5, Math.round((prev + delta) * 100) / 100))
      if (next === 1) {
        setPan({ x: 0, y: 0 })
      } else {
        setPan((oldPan) => clampPan(oldPan.x, oldPan.y, next))
      }
      return next
    })
  }

  const handleResetView = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const focusOnLatLng = (lat, lng, targetZoom = 2.2) => {
    const { x, y } = projectLatLng(lat, lng)
    const centerX = MAP_BOUNDS.width / 2
    const centerY = MAP_BOUNDS.height / 2
    const rawPanX = (centerX - x) * (targetZoom * 0.55)
    const rawPanY = (centerY - y) * (targetZoom * 0.55)
    setZoom(targetZoom)
    setPan(clampPan(rawPanX, rawPanY, targetZoom))
  }

  const handlePresetClick = (preset) => {
    if (preset.id === 'overview') {
      handleResetView()
      return
    }
    focusOnLatLng(preset.targetLat, preset.targetLng, preset.zoom)
    if (preset.id === 'hoang-sa') setSelectedMarkerId('quan-dao-hoang-sa')
    if (preset.id === 'truong-sa') setSelectedMarkerId('quan-dao-truong-sa')
  }

  const handleSelectMarker = (marker, shouldFocus = false) => {
    setSelectedMarkerId(marker.id)
    if (shouldFocus) {
      focusOnLatLng(marker.lat, marker.lng, Math.max(zoom, 2.0))
    }
  }

  const handleNudgePan = (dx, dy) => {
    setPan((prev) => clampPan(prev.x + dx, prev.y + dy, zoom))
  }

  // Mouse & Touch Drag Handlers
  const handlePointerDown = (e) => {
    if (e.target.closest('.map-marker-node') || e.target.closest('.map-floating-controls')) {
      return
    }
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    setIsDragging(true)
    dragStartRef.current = {
      x: clientX,
      y: clientY,
      panX: pan.x,
      panY: pan.y
    }
  }

  const handlePointerMove = (e) => {
    if (viewportRef.current) {
      const rect = viewportRef.current.getBoundingClientRect()
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      const relX = ((clientX - rect.left) / rect.width) * MAP_BOUNDS.width
      const relY = ((clientY - rect.top) / rect.height) * MAP_BOUNDS.height
      const coords = unprojectXY(relX, relY)
      setHoverCoord({
        lat: Math.round(coords.lat * 100) / 100,
        lng: Math.round(coords.lng * 100) / 100
      })
    }

    if (!isDragging) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    const dx = clientX - dragStartRef.current.x
    const dy = clientY - dragStartRef.current.y
    setPan(clampPan(dragStartRef.current.panX + dx, dragStartRef.current.panY + dy, zoom))
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  // Cycle Previous / Next Marker in Inspector
  const currentMarkerIndex = MAP_MARKERS.findIndex((m) => m.id === selectedMarker.id)
  const handlePrevMarker = () => {
    const prevIdx = (currentMarkerIndex - 1 + MAP_MARKERS.length) % MAP_MARKERS.length
    handleSelectMarker(MAP_MARKERS[prevIdx], false)
  }
  const handleNextMarker = () => {
    const nextIdx = (currentMarkerIndex + 1) % MAP_MARKERS.length
    handleSelectMarker(MAP_MARKERS[nextIdx], false)
  }

  // Pre-calculate key reference points for distance lines
  const daNangPt = projectLatLng(16.05, 108.2)
  const lySonPt = projectLatLng(15.38, 109.12)
  const hoangSaPt = projectLatLng(16.53, 111.63)
  const camRanhPt = projectLatLng(11.9, 109.2)
  const truongSaPt = projectLatLng(9.8, 114.2)
  const truongSaLonPt = projectLatLng(8.64, 111.92)

  return (
    <div className={`east-sea-map-module ${isFullscreenMode ? 'map-fullscreen-active' : ''}`}>
      {/* 1. Top Control & Filter Bar */}
      <div className="map-top-control-bar">
        <div className="map-category-pills" role="tablist" aria-label="Lọc nhóm địa danh trên bản đồ">
          {MAP_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`map-cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="map-top-right-tools">
          <div className="map-search-input-wrap">
            <Search size={16} className="map-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm đảo, quần đảo, địa danh..."
              aria-label="Tìm địa danh trên bản đồ"
            />
          </div>

          <button
            type="button"
            className="map-Presentation-btn"
            onClick={() => setIsFullscreenMode(!isFullscreenMode)}
            title="Chế độ mở rộng cho tiết học trên lớp"
          >
            {isFullscreenMode ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span>{isFullscreenMode ? 'Thu gọn khung' : 'Mở rộng trình chiếu'}</span>
          </button>
        </div>
      </div>

      {/* 2. Camera Presets & Layer Toggles Strip */}
      <div className="map-presets-strip">
        <div className="presets-group">
          <span className="presets-label">
            <Navigation size={14} />
            Góc nhìn nhanh:
          </span>
          {MAP_CAMERA_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className="preset-jump-btn"
              onClick={() => handlePresetClick(preset)}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="layer-toggles-group">
          <label className="map-toggle-check">
            <input
              type="checkbox"
              checked={showGrid}
              onChange={(e) => setShowGrid(e.target.checked)}
            />
            <span>Lưới Kinh - Vĩ độ</span>
          </label>
          <label className="map-toggle-check">
            <input
              type="checkbox"
              checked={showDistances}
              onChange={(e) => setShowDistances(e.target.checked)}
            />
            <span>Khoảng cách Hải lý</span>
          </label>
          <label className="map-toggle-check">
            <input
              type="checkbox"
              checked={showAllLabels}
              onChange={(e) => setShowAllLabels(e.target.checked)}
            />
            <span>Tên địa danh</span>
          </label>
        </div>
      </div>

      {/* 3. Main Two-Column Map & Information Inspector Layout */}
      <div className="map-main-workspace-grid">
        {/* LEFT COLUMN: Interactive East Sea Geographic Map Canvas */}
        <div className="map-canvas-column">
          <div
            ref={viewportRef}
            className={`map-interactive-viewport ${isDragging ? 'dragging' : ''}`}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            {/* Top-Left Live Coordinate Telemetry Badge */}
            <div className="map-telemetry-hud">
              <div className="hud-title-row">
                <span className="hud-live-dot" />
                <strong>BẢN ĐỒ ĐỊA LÝ KHU VỰC BIỂN ĐÔNG</strong>
              </div>
              <span className="hud-coord-readout">
                Tọa độ con trỏ: {hoverCoord.lat.toFixed(2)}° Vĩ Bắc — {hoverCoord.lng.toFixed(2)}° Kinh Đông
              </span>
            </div>

            {/* Top-Right Compass Rose */}
            <div className="map-compass-hud" aria-hidden="true">
              <Compass size={32} className="compass-hud-icon" />
              <span className="compass-north">BẮC (N)</span>
            </div>

            {/* Floating Zoom & Pan Controls */}
            <div className="map-floating-controls" role="group" aria-label="Điều khiển phóng to thu nhỏ và di chuyển bản đồ">
              <button
                type="button"
                className="map-ctrl-btn"
                onClick={() => handleZoomChange(0.35)}
                title="Phóng to bản đồ"
                aria-label="Phóng to bản đồ"
              >
                <ZoomIn size={18} />
              </button>
              <span className="map-zoom-level">{Math.round(zoom * 100)}%</span>
              <button
                type="button"
                className="map-ctrl-btn"
                onClick={() => handleZoomChange(-0.35)}
                title="Thu nhỏ bản đồ"
                aria-label="Thu nhỏ bản đồ"
              >
                <ZoomOut size={18} />
              </button>
              <button
                type="button"
                className="map-ctrl-btn reset"
                onClick={handleResetView}
                title="Đặt lại toàn cảnh"
                aria-label="Đặt lại toàn cảnh"
              >
                <RotateCcw size={17} />
              </button>

              {/* Directional Pan Buttons for easy Mobile & Desktop use */}
              <div className="map-dpad-grid">
                <button
                  type="button"
                  className="dpad-btn up"
                  onClick={() => handleNudgePan(0, 75)}
                  title="Di chuyển lên Bắc"
                  aria-label="Di chuyển lên"
                >
                  <ArrowUp size={14} />
                </button>
                <div className="dpad-middle-row">
                  <button
                    type="button"
                    className="dpad-btn left"
                    onClick={() => handleNudgePan(75, 0)}
                    title="Di chuyển sang Tây"
                    aria-label="Di chuyển sang trái"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <button
                    type="button"
                    className="dpad-btn right"
                    onClick={() => handleNudgePan(-75, 0)}
                    title="Di chuyển sang Đông"
                    aria-label="Di chuyển sang phải"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
                <button
                  type="button"
                  className="dpad-btn down"
                  onClick={() => handleNudgePan(0, -75)}
                  title="Di chuyển xuống Nam"
                  aria-label="Di chuyển xuống"
                >
                  <ArrowDown size={14} />
                </button>
              </div>
            </div>

            {/* Bottom-Left Scale & Drag Hint */}
            <div className="map-scale-bar-hud">
              <div className="scale-graphic">
                <span>0</span>
                <div className="scale-line" />
                <span>{Math.round(200 / zoom)} Hải lý</span>
              </div>
              <span className="map-drag-hint">
                💡 Giữ chuột hoặc chạm kéo để di chuyển • Nhấn vào điểm đánh dấu để xem chi tiết
              </span>
            </div>

            {/* SVG Geographic Canvas with Transform (Zoom & Pan) */}
            <svg
              viewBox={`0 0 ${MAP_BOUNDS.width} ${MAP_BOUNDS.height}`}
              className="east-sea-svg-canvas"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: 'center center'
              }}
            >
              <defs>
                <linearGradient id="oceanDepthGrad" x1="0" y1="0" x2="1000" y2="880" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#061A38" />
                  <stop offset="45%" stopColor="#0A2B58" />
                  <stop offset="100%" stopColor="#04152D" />
                </linearGradient>
                <radialGradient id="shelfGlow" cx="35%" cy="48%" r="55%">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.38" />
                  <stop offset="65%" stopColor="#0369A1" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#061A38" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="archipelagoHalo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                  <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#071936" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="vietnamLandGrad" x1="150" y1="20" x2="420" y2="760" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1E3A5F" />
                  <stop offset="50%" stopColor="#1E4068" />
                  <stop offset="100%" stopColor="#163554" />
                </linearGradient>
              </defs>

              {/* Base Sea Background */}
              <rect
                x="0"
                y="0"
                width={MAP_BOUNDS.width}
                height={MAP_BOUNDS.height}
                fill="url(#oceanDepthGrad)"
              />

              {/* Natural Continental Shelf Shallow Water Shading (Illustrative Relief Only) */}
              <ellipse cx="320" cy="430" rx="280" ry="390" fill="url(#shelfGlow)" />

              {/* Geographic Graticule Grid (Latitude & Longitude Lines) */}
              {showGrid && (
                <g className="map-graticule-layer">
                  {LAT_LINES.map((lat) => {
                    const { y } = projectLatLng(lat, MAP_BOUNDS.minLng)
                    return (
                      <g key={`lat-${lat}`}>
                        <line
                          x1="0"
                          y1={y}
                          x2={MAP_BOUNDS.width}
                          y2={y}
                          stroke="#38BDF8"
                          strokeOpacity="0.15"
                          strokeDasharray="4 6"
                        />
                        <text
                          x="14"
                          y={y - 6}
                          fill="#7DD3FC"
                          fontSize="11"
                          fontFamily="monospace"
                          opacity="0.75"
                        >
                          {lat}°B
                        </text>
                      </g>
                    )
                  })}

                  {LNG_LINES.map((lng) => {
                    const { x } = projectLatLng(MAP_BOUNDS.maxLat, lng)
                    return (
                      <g key={`lng-${lng}`}>
                        <line
                          x1={x}
                          y1="0"
                          x2={x}
                          y2={MAP_BOUNDS.height}
                          stroke="#38BDF8"
                          strokeOpacity="0.15"
                          strokeDasharray="4 6"
                        />
                        <text
                          x={x + 6}
                          y="22"
                          fill="#7DD3FC"
                          fontSize="11"
                          fontFamily="monospace"
                          opacity="0.75"
                        >
                          {lng}°Đ
                        </text>
                      </g>
                    )
                  })}
                </g>
              )}

              {/* Vietnam Mainland Geographic Polygon */}
              <path
                d={MAINLAND_PATH}
                fill="url(#vietnamLandGrad)"
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeOpacity="0.55"
              />

              {/* Highlighted Vietnam 3,260km Coastline */}
              <path
                d={COASTLINE_PATH}
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Geographic Labels on Mainland & Sea Regions */}
              <text
                x="235"
                y="135"
                fill="#FCD34D"
                fontSize="14"
                fontWeight="800"
                letterSpacing="1"
              >
                ★ THỦ ĐÔ HÀ NỘI
              </text>
              <circle cx="220" cy="124" r="5" fill="#EF4444" stroke="#FCD34D" strokeWidth="2" />

              <text
                x="210"
                y="650"
                fill="#E2E8F0"
                fontSize="12"
                fontWeight="700"
              >
                TP. HỒ CHÍ MINH
              </text>
              <circle cx="268" cy="642" r="4" fill="#FCD34D" />

              <text
                x="215"
                y="340"
                fill="#93C5FD"
                fontSize="16"
                fontWeight="800"
                letterSpacing="3"
                opacity="0.45"
                transform="rotate(52, 215, 340)"
              >
                VIỆT NAM
              </text>

              {/* Major Sea Region Titles */}
              <text
                x="355"
                y="198"
                textAnchor="middle"
                fill="#7DD3FC"
                fontSize="13"
                fontWeight="700"
                letterSpacing="1.5"
                opacity="0.75"
              >
                VỊNH BẮC BỘ
              </text>

              <text
                x="110"
                y="725"
                textAnchor="middle"
                fill="#7DD3FC"
                fontSize="12.5"
                fontWeight="700"
                letterSpacing="1.2"
                opacity="0.7"
              >
                VỊNH THÁI LAN
              </text>

              <text
                x="635"
                y="470"
                textAnchor="middle"
                fill="#38BDF8"
                fontSize="26"
                fontWeight="800"
                letterSpacing="6"
                opacity="0.28"
              >
                BIỂN ĐÔNG
              </text>

              {/* Soft Geographic Halo Around Hoang Sa & Truong Sa Archipelagos (Natural Cluster Zone) */}
              <ellipse
                cx={hoangSaPt.x + 15}
                cy={hoangSaPt.y}
                rx="92"
                ry="58"
                fill="url(#archipelagoHalo)"
                stroke="#FBBF24"
                strokeOpacity="0.4"
                strokeWidth="1.4"
                strokeDasharray="6 5"
              />
              <ellipse
                cx={truongSaPt.x - 25}
                cy={truongSaPt.y + 15}
                rx="155"
                ry="110"
                fill="url(#archipelagoHalo)"
                stroke="#FBBF24"
                strokeOpacity="0.4"
                strokeWidth="1.4"
                strokeDasharray="6 5"
              />

              {/* Optional Nautical Distance Reference Lines */}
              {showDistances && (
                <g className="map-distance-lines">
                  {/* Da Nang / Ly Son -> Hoang Sa */}
                  <line
                    x1={daNangPt.x}
                    y1={daNangPt.y}
                    x2={hoangSaPt.x}
                    y2={hoangSaPt.y}
                    stroke="#FBBF24"
                    strokeWidth="1.6"
                    strokeDasharray="5 5"
                    opacity="0.8"
                  />
                  <rect
                    x={(daNangPt.x + hoangSaPt.x) / 2 - 58}
                    y={(daNangPt.y + hoangSaPt.y) / 2 - 22}
                    width="116"
                    height="20"
                    rx="10"
                    fill="#040D1D"
                    fillOpacity="0.85"
                    stroke="#FBBF24"
                    strokeWidth="0.8"
                  />
                  <text
                    x={(daNangPt.x + hoangSaPt.x) / 2}
                    y={(daNangPt.y + hoangSaPt.y) / 2 - 9}
                    textAnchor="middle"
                    fill="#FDE68A"
                    fontSize="9.5"
                    fontWeight="700"
                  >
                    ~170 hải lý (Đà Nẵng)
                  </text>

                  {/* Ly Son -> Hoang Sa */}
                  <line
                    x1={lySonPt.x}
                    y1={lySonPt.y}
                    x2={hoangSaPt.x}
                    y2={hoangSaPt.y}
                    stroke="#38BDF8"
                    strokeWidth="1.2"
                    strokeDasharray="3 4"
                    opacity="0.65"
                  />

                  {/* Cam Ranh (Khanh Hoa) -> Truong Sa */}
                  <line
                    x1={camRanhPt.x}
                    y1={camRanhPt.y}
                    x2={truongSaLonPt.x}
                    y2={truongSaLonPt.y}
                    stroke="#FBBF24"
                    strokeWidth="1.6"
                    strokeDasharray="5 5"
                    opacity="0.8"
                  />
                  <rect
                    x={(camRanhPt.x + truongSaLonPt.x) / 2 - 64}
                    y={(camRanhPt.y + truongSaLonPt.y) / 2 - 12}
                    width="128"
                    height="20"
                    rx="10"
                    fill="#040D1D"
                    fillOpacity="0.85"
                    stroke="#FBBF24"
                    strokeWidth="0.8"
                  />
                  <text
                    x={(camRanhPt.x + truongSaLonPt.x) / 2}
                    y={(camRanhPt.y + truongSaLonPt.y) / 2 + 1}
                    textAnchor="middle"
                    fill="#FDE68A"
                    fontSize="9.5"
                    fontWeight="700"
                  >
                    ~248 hải lý (Cam Ranh)
                  </text>
                </g>
              )}

              {/* Interactive Markers Layer */}
              {filteredMarkers.map((marker) => {
                const { x, y } = projectLatLng(marker.lat, marker.lng)
                const isSelected = marker.id === selectedMarker.id
                const isMajor = marker.markerType === 'major-gold'
                const isDk1 = marker.markerType === 'dk1-amber'
                const isCoastal = marker.markerType === 'coastal-emerald'

                const fillColor = isMajor
                  ? '#F59E0B'
                  : isDk1
                  ? '#F97316'
                  : isCoastal
                  ? '#10B981'
                  : '#38BDF8'

                const radius = isMajor ? 11 : isSelected ? 9 : 6.5

                return (
                  <g
                    key={marker.id}
                    transform={`translate(${x}, ${y})`}
                    className={`map-marker-node ${isSelected ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelectMarker(marker, false)
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Điểm đánh dấu ${marker.name}`}
                  >
                    {/* Outer Pulse Ring for Selected or Major Archipelago */}
                    {(isSelected || isMajor) && (
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 22 : 18}
                        fill={fillColor}
                        fillOpacity={isSelected ? '0.32' : '0.18'}
                        stroke={fillColor}
                        strokeWidth={isSelected ? '2' : '1'}
                      />
                    )}

                    {/* Marker Pin Circle */}
                    <circle
                      cx="0"
                      cy="0"
                      r={radius}
                      fill={fillColor}
                      stroke="#FFFFFF"
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                    />

                    {/* Star Symbol Inside Major Archipelago Markers */}
                    {isMajor && (
                      <text
                        x="0"
                        y="3.8"
                        textAnchor="middle"
                        fill="#040D1D"
                        fontSize="11"
                        fontWeight="900"
                      >
                        ★
                      </text>
                    )}

                    {/* Label Tag Next to Marker */}
                    {(showAllLabels || isSelected || isMajor) && (
                      <g transform={`translate(${isMajor ? 0 : 12}, ${isMajor ? -18 : 4})`}>
                        <rect
                          x={isMajor ? -82 : -4}
                          y="-13"
                          width={isMajor ? 164 : marker.name.length * 6.4 + 14}
                          height="19"
                          rx="6"
                          fill={isSelected ? '#F59E0B' : '#040D1D'}
                          fillOpacity={isSelected ? '0.96' : '0.82'}
                          stroke={isSelected ? '#FEF3C7' : fillColor}
                          strokeWidth="1"
                        />
                        <text
                          x={isMajor ? 0 : 3}
                          y="0"
                          textAnchor={isMajor ? 'middle' : 'start'}
                          fill={isSelected ? '#040D1D' : isMajor ? '#FCD34D' : '#F8FAFC'}
                          fontSize={isMajor ? '11' : '10'}
                          fontWeight="800"
                        >
                          {marker.name}
                        </text>
                      </g>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* RIGHT COLUMN: Location Information Inspector Panel */}
        <div className="map-inspector-column">
          <div className="map-inspector-card">
            <div className="inspector-header">
              <div className="inspector-badge-row">
                <span className="inspector-category-tag">
                  <MapPin size={13} />
                  <span>{selectedMarker.categoryLabel}</span>
                </span>
                <span className="inspector-index-tag">
                  Điểm {currentMarkerIndex + 1}/{MAP_MARKERS.length}
                </span>
              </div>

              <h3 className="inspector-title">{selectedMarker.name}</h3>
              <p className="inspector-subtitle">{selectedMarker.subtitle}</p>

              <div className="inspector-coord-box">
                <strong>Tọa độ tham khảo:</strong>{' '}
                <span>{selectedMarker.coordText}</span>
              </div>
            </div>

            <div className="inspector-body">
              <div className="inspector-info-block">
                <h4>
                  <ShieldCheck size={16} />
                  <span>Đơn vị hành chính</span>
                </h4>
                <p className="admin-highlight">{selectedMarker.adminUnit}</p>
              </div>

              <div className="inspector-info-block">
                <h4>
                  <Info size={16} />
                  <span>Giới thiệu địa danh</span>
                </h4>
                <p>{selectedMarker.summary}</p>
              </div>

              <div className="inspector-info-block">
                <h4>
                  <Layers size={16} />
                  <span>Đặc điểm địa lý tự nhiên</span>
                </h4>
                <p>{selectedMarker.geoFeatures}</p>
              </div>

              <div className="inspector-edu-highlight">
                <h4>
                  <BookOpen size={16} />
                  <span>
                    {activeRole === 'student'
                      ? 'Trọng tâm Kiến thức THPT:'
                      : 'Gợi ý Giảng dạy THPT:'}
                  </span>
                </h4>
                <p>{selectedMarker.educationalNote}</p>
              </div>

              <div className="inspector-tags-row">
                {selectedMarker.tags.map((tag, idx) => (
                  <span key={idx} className="inspector-tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="inspector-source-strip">
                <strong>Nguồn tham chiếu:</strong> {selectedMarker.sourceRef}
              </div>
            </div>

            <div className="inspector-footer">
              <button
                type="button"
                className="inspector-nav-btn"
                onClick={handlePrevMarker}
              >
                <ChevronLeft size={16} />
                <span>Trước</span>
              </button>

              <button
                type="button"
                className="inspector-focus-btn"
                onClick={() =>
                  focusOnLatLng(selectedMarker.lat, selectedMarker.lng, 2.3)
                }
              >
                <ZoomIn size={15} />
                <span>Phóng tới vị trí này</span>
              </button>

              <button
                type="button"
                className="inspector-nav-btn"
                onClick={handleNextMarker}
              >
                <span>Tiếp</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Quick Clickable Directory of All 16 Landmarks */}
          <div className="map-quick-directory-card">
            <h4>Danh sách nhanh các điểm đánh dấu ({filteredMarkers.length})</h4>
            <div className="quick-directory-list">
              {filteredMarkers.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`directory-item-btn ${
                    item.id === selectedMarker.id ? 'active' : ''
                  }`}
                  onClick={() => handleSelectMarker(item, true)}
                >
                  <span className={`dir-dot ${item.markerType}`} />
                  <span className="dir-name">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Map Legend & Reliable Reference Sources Section */}
      <div className="map-legend-and-sources-grid">
        {/* Map Legend Card */}
        <div className="map-legend-card">
          <h3>
            <Compass size={19} />
            <span>Bảng Chú thích Ký hiệu Bản đồ</span>
          </h3>
          <ul className="map-legend-list">
            {MAP_LEGEND_ITEMS.map((item, idx) => (
              <li key={idx}>
                <span
                  className="legend-symbol-badge"
                  style={{
                    backgroundColor: item.color,
                    borderColor: item.border
                  }}
                >
                  {item.symbol}
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="map-legal-note-box">
            <p>{MAP_LEGAL_DISCLAIMER}</p>
          </div>
        </div>

        {/* Reliable Reference Sources Card */}
        <div className="map-sources-card">
          <h3>
            <BookOpen size={19} />
            <span>Nguồn Tham khảo Chính thống &amp; Đáng tin cậy</span>
          </h3>
          <div className="map-sources-list">
            {MAP_REFERENCE_SOURCES.map((src) => (
              <div key={src.id} className="map-source-item">
                <div className="source-item-top">
                  <strong>{src.title}</strong>
                  <span className="source-org-badge">{src.organization}</span>
                </div>
                <p>{src.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
