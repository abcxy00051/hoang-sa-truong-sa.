import React, { useState, useRef, useMemo } from 'react'
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
  Navigation,
  Ruler,
  Crosshair,
  Globe,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Code
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
import {
  formatDMS,
  calculateGisMeasurement,
  OFFICIAL_BASELINE_POINTS_1982,
  MARINE_ENVIRONMENT_ZONES,
  buildEastSeaGeoJson,
  MARITIME_LEGAL_REGIMES,
  MAP_DOSSIER_RECORDS
} from '../data/mapGeoJsonData'
import EastSea3DCanvas from './EastSea3DCanvas'

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
const BASELINE_1982_PATH = pointsToSvgPath(
  OFFICIAL_BASELINE_POINTS_1982.map((p) => [p.lat, p.lng]),
  false
)

export default function InteractiveEastSeaMap({ activeRole = 'student' }) {
  // Chế độ hiển thị Bản đồ: '2d' | '3d-globe' | '3d-terrain'
  const [viewMode, setViewMode] = useState('2d')

  // Bật/tắt 4 lớp dữ liệu GIS theo Mục IV
  const [gisLayers, setGisLayers] = useState({
    placeNames: true, // Lớp địa danh
    islands: true, // Lớp đảo và quần đảo
    geoInfo: true, // Lớp thông tin địa lý (Lưới kinh vĩ độ, Điểm chuẩn A1-A11, Khoảng cách hải lý)
    marineEnv: false // Lớp môi trường biển & Khu bảo tồn biển
  })

  // Công cụ GIS đang kích hoạt: 'inspect' | 'measure' | 'locator'
  const [activeGisTool, setActiveGisTool] = useState('inspect')

  // Trạng thái Công cụ Đo khoảng cách GIS (Haversine)
  const [measureFromId, setMeasureFromId] = useState('tp-da-nang')
  const [measureToId, setMeasureToId] = useState('quan-dao-hoang-sa')
  const [customMeasurePts, setCustomMeasurePts] = useState([]) // [{ lat, lng, label }]

  // Trạng thái Công cụ Xác định Tọa độ (Coordinate Locator)
  const [pinnedCoord, setPinnedCoord] = useState({
    lat: 16.53,
    lng: 111.63,
    label: 'Tọa độ tra cứu mẫu (Quần đảo Hoàng Sa)'
  })
  const [inputLat, setInputLat] = useState('16.53')
  const [inputLng, setInputLng] = useState('111.63')

  // Trạng thái chọn đối tượng trên bản đồ
  const [selectedMarkerId, setSelectedMarkerId] = useState('quan-dao-hoang-sa')
  const [selectedSpecialFeature, setSelectedSpecialFeature] = useState(null) // Dùng cho Điểm đường cơ sở A1-A11 hoặc Khu bảo tồn biển
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isFullscreenMode, setIsFullscreenMode] = useState(false)
  const [hoverCoord, setHoverCoord] = useState({ lat: 16.53, lng: 111.63 })

  // Hồ sơ bản đồ đang chọn (Mục V) & Xem mã GeoJSON (Mục VI)
  const [selectedDossierId, setSelectedDossierId] = useState(
    MAP_DOSSIER_RECORDS[0].id
  )
  const [showGeoJsonModal, setShowGeoJsonModal] = useState(false)
  const [dataError, setDataError] = useState(null)

  const dragStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 })
  const viewportRef = useRef(null)
  const workspaceAnchorRef = useRef(null)

  // Chuẩn hóa dữ liệu GeoJSON (RFC 7946) và kiểm tra tính toàn vẹn
  const geoJsonCollection = useMemo(() => {
    try {
      if (!Array.isArray(MAP_MARKERS) || MAP_MARKERS.length === 0) {
        throw new Error('Không tìm thấy dữ liệu đối tượng địa lý.')
      }
      setDataError(null)
      return buildEastSeaGeoJson(MAP_MARKERS)
    } catch (err) {
      setDataError(
        err.message || 'Không thể tải dữ liệu bản đồ GeoJSON. Vui lòng thử lại.'
      )
      return { type: 'FeatureCollection', features: [] }
    }
  }, [])

  const filteredMarkers = useMemo(() => {
    return MAP_MARKERS.filter((m) => {
      const matchCategory =
        activeCategory === 'all' || m.category === activeCategory
      const q = searchQuery.trim().toLowerCase()
      const matchSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.subtitle.toLowerCase().includes(q) ||
        m.adminUnit.toLowerCase().includes(q) ||
        m.coordText.toLowerCase().includes(q)
      return matchCategory && matchSearch
    })
  }, [activeCategory, searchQuery])

  const selectedMarker =
    MAP_MARKERS.find((m) => m.id === selectedMarkerId) || MAP_MARKERS[0]

  const activeDossier =
    MAP_DOSSIER_RECORDS.find((d) => d.id === selectedDossierId) ||
    MAP_DOSSIER_RECORDS[0]

  // Tính toán khoảng cách GIS giữa 2 điểm đo
  const measurementResult = useMemo(() => {
    if (customMeasurePts.length === 2) {
      const [pA, pB] = customMeasurePts
      return {
        fromName: pA.label,
        fromCoord: `${pA.lat.toFixed(2)}°B, ${pA.lng.toFixed(2)}°Đ`,
        toName: pB.label,
        toCoord: `${pB.lat.toFixed(2)}°B, ${pB.lng.toFixed(2)}°Đ`,
        lat1: pA.lat,
        lng1: pA.lng,
        lat2: pB.lat,
        lng2: pB.lng,
        ...calculateGisMeasurement(pA.lat, pA.lng, pB.lat, pB.lng)
      }
    }
    const fromMarker =
      MAP_MARKERS.find((m) => m.id === measureFromId) || MAP_MARKERS[0]
    const toMarker =
      MAP_MARKERS.find((m) => m.id === measureToId) || MAP_MARKERS[1]
    return {
      fromName: fromMarker.name,
      fromCoord: `${fromMarker.lat.toFixed(2)}°B, ${fromMarker.lng.toFixed(2)}°Đ`,
      toName: toMarker.name,
      toCoord: `${toMarker.lat.toFixed(2)}°B, ${toMarker.lng.toFixed(2)}°Đ`,
      lat1: fromMarker.lat,
      lng1: fromMarker.lng,
      lat2: toMarker.lat,
      lng2: toMarker.lng,
      ...calculateGisMeasurement(
        fromMarker.lat,
        fromMarker.lng,
        toMarker.lat,
        toMarker.lng
      )
    }
  }, [measureFromId, measureToId, customMeasurePts])

  const toggleLayer = (layerKey) => {
    setGisLayers((prev) => ({
      ...prev,
      [layerKey]: !prev[layerKey]
    }))
  }

  const clampPan = (nextX, nextY, targetZoom = zoom) => {
    const maxOffset = Math.max(0, (targetZoom - 1) * 360 + 120)
    return {
      x: Math.max(-maxOffset, Math.min(maxOffset, nextX)),
      y: Math.max(-maxOffset, Math.min(maxOffset, nextY))
    }
  }

  const handleZoomChange = (delta) => {
    setZoom((prev) => {
      const next = Math.max(
        1,
        Math.min(3.5, Math.round((prev + delta) * 100) / 100)
      )
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
    setViewMode('2d')
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
    if (preset.id === 'hoang-sa') {
      setSelectedSpecialFeature(null)
      setSelectedMarkerId('quan-dao-hoang-sa')
    }
    if (preset.id === 'truong-sa') {
      setSelectedSpecialFeature(null)
      setSelectedMarkerId('quan-dao-truong-sa')
    }
  }

  const handleSelectMarker = (marker, shouldFocus = false) => {
    setSelectedSpecialFeature(null)
    setSelectedMarkerId(marker.id)
    if (shouldFocus) {
      focusOnLatLng(marker.lat, marker.lng, Math.max(zoom, 2.0))
    }
  }

  const handleNudgePan = (dx, dy) => {
    setPan((prev) => clampPan(prev.x + dx, prev.y + dy, zoom))
  }

  const handleMapCanvasClick = (e) => {
    if (
      e.target.closest('.map-marker-node') ||
      e.target.closest('.map-floating-controls') ||
      !viewportRef.current
    ) {
      return
    }
    const rect = viewportRef.current.getBoundingClientRect()
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY
    const relX = ((clientX - rect.left) / rect.width) * MAP_BOUNDS.width
    const relY = ((clientY - rect.top) / rect.height) * MAP_BOUNDS.height
    const coords = unprojectXY(relX, relY)
    const roundedLat = Math.round(coords.lat * 100) / 100
    const roundedLng = Math.round(coords.lng * 100) / 100

    if (activeGisTool === 'locator') {
      setPinnedCoord({
        lat: roundedLat,
        lng: roundedLng,
        label: `Điểm ghim trên bản đồ (${formatDMS(roundedLat, true)}, ${formatDMS(roundedLng, false)})`
      })
      setInputLat(String(roundedLat))
      setInputLng(String(roundedLng))
    } else if (activeGisTool === 'measure') {
      setCustomMeasurePts((prev) => {
        if (prev.length === 0 || prev.length >= 2) {
          return [
            {
              lat: roundedLat,
              lng: roundedLng,
              label: `Điểm A (${roundedLat}°B, ${roundedLng}°Đ)`
            }
          ]
        }
        return [
          ...prev,
          {
            lat: roundedLat,
            lng: roundedLng,
            label: `Điểm B (${roundedLat}°B, ${roundedLng}°Đ)`
          }
        ]
      })
    }
  }

  const handleApplyInputCoord = (e) => {
    e.preventDefault()
    const parsedLat = parseFloat(inputLat)
    const parsedLng = parseFloat(inputLng)
    if (Number.isNaN(parsedLat) || Number.isNaN(parsedLng)) return
    const clampedLat = Math.max(
      MAP_BOUNDS.minLat,
      Math.min(MAP_BOUNDS.maxLat, parsedLat)
    )
    const clampedLng = Math.max(
      MAP_BOUNDS.minLng,
      Math.min(MAP_BOUNDS.maxLng, parsedLng)
    )
    setPinnedCoord({
      lat: clampedLat,
      lng: clampedLng,
      label: `Tọa độ nhập tay (${formatDMS(clampedLat, true)}, ${formatDMS(clampedLng, false)})`
    })
    focusOnLatLng(clampedLat, clampedLng, 2.0)
  }

  // Mouse & Touch Drag Handlers
  const handlePointerDown = (e) => {
    if (
      e.target.closest('.map-marker-node') ||
      e.target.closest('.map-floating-controls')
    ) {
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
    setPan(
      clampPan(
        dragStartRef.current.panX + dx,
        dragStartRef.current.panY + dy,
        zoom
      )
    )
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  const currentMarkerIndex = MAP_MARKERS.findIndex(
    (m) => m.id === selectedMarker.id
  )
  const handlePrevMarker = () => {
    const prevIdx =
      (currentMarkerIndex - 1 + MAP_MARKERS.length) % MAP_MARKERS.length
    handleSelectMarker(MAP_MARKERS[prevIdx], false)
  }
  const handleNextMarker = () => {
    const nextIdx = (currentMarkerIndex + 1) % MAP_MARKERS.length
    handleSelectMarker(MAP_MARKERS[nextIdx], false)
  }

  const scrollToWorkspace = () => {
    if (workspaceAnchorRef.current) {
      workspaceAnchorRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Các điểm tọa độ chuẩn để vẽ tuyến hải lý trên bản đồ 2D
  const daNangPt = projectLatLng(16.05, 108.2)
  const lySonPt = projectLatLng(15.38, 109.12)
  const hoangSaPt = projectLatLng(16.53, 111.63)
  const camRanhPt = projectLatLng(11.9, 109.2)
  const truongSaPt = projectLatLng(9.8, 114.2)
  const truongSaLonPt = projectLatLng(8.64, 111.92)

  // Tọa độ đường đo khoảng cách đang hoạt động
  const measureStartSvg = projectLatLng(
    measurementResult.lat1,
    measurementResult.lng1
  )
  const measureEndSvg = projectLatLng(
    measurementResult.lat2,
    measurementResult.lng2
  )
  const pinnedSvg = projectLatLng(pinnedCoord.lat, pinnedCoord.lng)

  return (
    <div
      className={`east-sea-map-module ${
        isFullscreenMode ? 'map-fullscreen-active' : ''
      }`}
    >
      {/* ================================================================
          I. GIAO DIỆN MỞ ĐẦU — HERO SECTION RIÊNG CHO BẢN ĐỒ SỐ
          ================================================================ */}
      <section className="digital-map-hero-banner">
        <div className="digital-map-hero-bg" aria-hidden="true">
          <div className="digital-map-hero-overlay" />
        </div>

        <div className="digital-map-hero-content">
          <div className="digital-map-hero-left">
            <div className="digital-map-badges">
              <span className="hero-badge-gold">
                <Compass size={14} />
                <span>HỆ THỐNG THÔNG TIN ĐỊA LÝ BIỂN ĐẢO (WEBGIS)</span>
              </span>
              <span className="hero-badge-coordinates">
                <Globe size={14} />
                <span>Chuẩn dữ liệu GeoJSON • Hệ tọa độ WGS84</span>
              </span>
            </div>

            <h2 className="digital-map-hero-title">
              BẢN ĐỒ SỐ <span className="text-gold-highlight">BIỂN ĐẢO VIỆT NAM</span>
            </h2>

            <p className="digital-map-hero-desc">
              Khám phá không gian địa lý và các vùng biển đảo bằng công nghệ bản đồ tương tác.
              Hệ thống tích hợp đồng bộ <strong>Bản đồ 2D GIS</strong>,{' '}
              <strong>Sa bàn Địa hình Biển 3D</strong>, bộ công cụ đo khoảng cách
              hải lý Haversine, tra cứu hệ thống điểm chuẩn đường cơ sở và kho{' '}
              <strong>Hồ sơ Bản đồ</strong> chính thống.
            </p>

            <div className="digital-map-hero-actions">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={scrollToWorkspace}
              >
                <Navigation size={18} />
                <span>Bắt đầu khám phá</span>
              </button>

              <button
                type="button"
                className={`btn-secondary-glass ${viewMode !== '2d' ? 'active-3d-btn' : ''}`}
                onClick={() => {
                  setViewMode(viewMode === '2d' ? '3d-terrain' : '2d')
                  scrollToWorkspace()
                }}
              >
                <Compass size={18} />
                <span>
                  {viewMode === '2d'
                    ? 'Xem Địa hình Biển 3D'
                    : 'Quay lại Bản đồ 2D'}
                </span>
              </button>

              <button
                type="button"
                className="btn-secondary-glass"
                onClick={() => setShowGeoJsonModal(true)}
              >
                <Code size={17} />
                <span>Dữ liệu GeoJSON ({geoJsonCollection.features.length})</span>
              </button>
            </div>
          </div>

          <div className="digital-map-hero-stats">
            <div className="map-stat-tile">
              <span className="tile-tag">ĐỊA DANH &amp; ĐẢO</span>
              <strong>{MAP_MARKERS.length} Điểm chuẩn</strong>
              <span>Hoàng Sa, Trường Sa, DK1 &amp; Đảo tiền tiêu</span>
            </div>
            <div className="map-stat-tile">
              <span className="tile-tag">ĐƯỜNG CƠ SỞ 1982</span>
              <strong>11 Điểm (A1–A11)</strong>
              <span>Tọa độ pháp lý theo Tuyên bố ngày 12/11/1982</span>
            </div>
            <div className="map-stat-tile">
              <span className="tile-tag">CHẾ ĐỘ KẾT XUẤT</span>
              <strong>Bản đồ 2D &amp; Địa hình 3D</strong>
              <span>Bản đồ phẳng GIS &amp; Sa bàn địa hình biển</span>
            </div>
            <div className="map-stat-tile">
              <span className="tile-tag">HỒ SƠ BẢN ĐỒ</span>
              <strong>{MAP_DOSSIER_RECORDS.length} Bộ Hồ sơ</strong>
              <span>Đầy đủ 10 trường thông tin lưu trữ chuẩn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Thông báo nếu có lỗi nạp dữ liệu (Mục VIII) */}
      {dataError && (
        <div className="map-error-alert" role="alert">
          <AlertTriangle size={20} />
          <div>
            <strong>Cảnh báo tải dữ liệu bản đồ:</strong> {dataError}
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="map-retry-btn"
          >
            Tải lại bản đồ
          </button>
        </div>
      )}

      {/* ================================================================
          II, III & IV. TRẠM ĐIỀU KHIỂN GIS (CHẾ ĐỘ 2D/3D, LỚP DỮ LIỆU, CÔNG CỤ ĐO)
          ================================================================ */}
      <div ref={workspaceAnchorRef} className="gis-master-toolbar">
        {/* 1. Chuyển đổi chế độ Bản đồ 2D / Địa hình Biển 3D */}
        <div className="gis-mode-switcher" role="tablist" aria-label="Chế độ hiển thị Bản đồ 2D và Địa hình 3D">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === '2d'}
            className={`gis-mode-btn ${viewMode === '2d' ? 'active' : ''}`}
            onClick={() => setViewMode('2d')}
          >
            <Layers size={16} />
            <span>Bản đồ 2D GIS</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === '3d-terrain'}
            className={`gis-mode-btn ${viewMode === '3d-terrain' ? 'active' : ''}`}
            onClick={() => setViewMode('3d-terrain')}
          >
            <Compass size={16} />
            <span>Địa hình Biển 3D</span>
          </button>
        </div>

        {/* 2. Công cụ Tương tác GIS: Xem thông tin / Đo khoảng cách / Xác định tọa độ */}
        <div className="gis-tools-switcher">
          <span className="gis-toolbar-label">Công cụ GIS:</span>
          <button
            type="button"
            className={`gis-tool-pill ${activeGisTool === 'inspect' ? 'active' : ''}`}
            onClick={() => setActiveGisTool('inspect')}
          >
            <MapPin size={15} />
            <span>Tra cứu Đối tượng</span>
          </button>
          <button
            type="button"
            className={`gis-tool-pill ${activeGisTool === 'measure' ? 'active' : ''}`}
            onClick={() => setActiveGisTool('measure')}
          >
            <Ruler size={15} />
            <span>Đo khoảng cách Hải lý</span>
          </button>
          <button
            type="button"
            className={`gis-tool-pill ${activeGisTool === 'locator' ? 'active' : ''}`}
            onClick={() => setActiveGisTool('locator')}
          >
            <Crosshair size={15} />
            <span>Xác định Tọa độ</span>
          </button>
        </div>

        {/* 3. Bật / Tắt 4 Lớp Dữ liệu GIS */}
        <div className="gis-layers-bar">
          <span className="gis-toolbar-label">
            <Layers size={14} /> Lớp dữ liệu:
          </span>
          <label className={`gis-layer-chip ${gisLayers.placeNames ? 'on' : ''}`}>
            <input
              type="checkbox"
              checked={gisLayers.placeNames}
              onChange={() => toggleLayer('placeNames')}
            />
            <span>Lớp địa danh</span>
          </label>
          <label className={`gis-layer-chip ${gisLayers.islands ? 'on' : ''}`}>
            <input
              type="checkbox"
              checked={gisLayers.islands}
              onChange={() => toggleLayer('islands')}
            />
            <span>Lớp đảo &amp; quần đảo</span>
          </label>
          <label className={`gis-layer-chip ${gisLayers.geoInfo ? 'on' : ''}`}>
            <input
              type="checkbox"
              checked={gisLayers.geoInfo}
              onChange={() => toggleLayer('geoInfo')}
            />
            <span>Thông tin địa lý &amp; Đường cơ sở (A1–A11)</span>
          </label>
          <label className={`gis-layer-chip ${gisLayers.marineEnv ? 'on' : ''}`}>
            <input
              type="checkbox"
              checked={gisLayers.marineEnv}
              onChange={() => toggleLayer('marineEnv')}
            />
            <span>Lớp môi trường biển (Khu bảo tồn)</span>
          </label>
        </div>
      </div>

      {/* Bảng điều khiển chuyên biệt khi bật Công cụ Đo khoảng cách hoặc Công cụ Xác định tọa độ */}
      {activeGisTool === 'measure' && (
        <div className="gis-active-tool-drawer">
          <div className="tool-drawer-header">
            <div className="tool-drawer-title">
              <Ruler size={18} />
              <strong>
                Công cụ Đo khoảng cách Đường tròn lớn (Haversine WGS84)
              </strong>
            </div>
            <span className="tool-drawer-hint">
              Chọn 2 địa danh bên dưới hoặc nhấp 2 điểm bất kỳ trên Bản đồ 2D để đo
            </span>
          </div>

          <div className="measure-tool-grid">
            <div className="measure-select-group">
              <label>Điểm xuất phát (A):</label>
              <select
                value={measureFromId}
                onChange={(e) => {
                  setCustomMeasurePts([])
                  setMeasureFromId(e.target.value)
                }}
              >
                {MAP_MARKERS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.lat.toFixed(2)}°B, {m.lng.toFixed(2)}°Đ)
                  </option>
                ))}
              </select>
            </div>

            <div className="measure-select-group">
              <label>Điểm đích (B):</label>
              <select
                value={measureToId}
                onChange={(e) => {
                  setCustomMeasurePts([])
                  setMeasureToId(e.target.value)
                }}
              >
                {MAP_MARKERS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.lat.toFixed(2)}°B, {m.lng.toFixed(2)}°Đ)
                  </option>
                ))}
              </select>
            </div>

            <div className="measure-result-card">
              <div className="measure-metric">
                <span>Khoảng cách Hải lý</span>
                <strong>{measurementResult.distanceNm} NM</strong>
              </div>
              <div className="measure-metric">
                <span>Khoảng cách Đường chim bay</span>
                <strong>{measurementResult.distanceKm} km</strong>
              </div>
              <div className="measure-metric">
                <span>Phương vị La bàn</span>
                <strong>{measurementResult.bearingDeg}°</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeGisTool === 'locator' && (
        <div className="gis-active-tool-drawer">
          <div className="tool-drawer-header">
            <div className="tool-drawer-title">
              <Crosshair size={18} />
              <strong>Công cụ Xác định Tọa độ Địa lý (WGS84 / DMS)</strong>
            </div>
            <span className="tool-drawer-hint">
              Nhấp vào vị trí bất kỳ trên bản đồ 2D hoặc nhập Vĩ độ / Kinh độ để định vị
            </span>
          </div>

          <div className="locator-tool-grid">
            <form onSubmit={handleApplyInputCoord} className="locator-input-form">
              <label>
                Vĩ độ Bắc (6.0° – 23.5°):
                <input
                  type="number"
                  step="0.01"
                  min="6"
                  max="23.5"
                  value={inputLat}
                  onChange={(e) => setInputLat(e.target.value)}
                />
              </label>
              <label>
                Kinh độ Đông (102.0° – 119.5°):
                <input
                  type="number"
                  step="0.01"
                  min="102"
                  max="119.5"
                  value={inputLng}
                  onChange={(e) => setInputLng(e.target.value)}
                />
              </label>
              <button type="submit" className="locator-submit-btn">
                Định vị trên Bản đồ
              </button>
            </form>

            <div className="locator-readout-card">
              <div>
                <span className="locator-tag">Tọa độ Độ - Phút - Giây (DMS):</span>
                <strong>
                  {formatDMS(pinnedCoord.lat, true)} — {formatDMS(pinnedCoord.lng, false)}
                </strong>
              </div>
              <div>
                <span className="locator-tag">Khoảng cách tới Hoàng Sa / Trường Sa:</span>
                <span>
                  Cách Hoàng Sa:{' '}
                  <strong>
                    {
                      calculateGisMeasurement(
                        pinnedCoord.lat,
                        pinnedCoord.lng,
                        16.53,
                        111.63
                      ).distanceNm
                    }{' '}
                    hải lý
                  </strong>{' '}
                  • Cách Trường Sa:{' '}
                  <strong>
                    {
                      calculateGisMeasurement(
                        pinnedCoord.lat,
                        pinnedCoord.lng,
                        8.64,
                        111.92
                      ).distanceNm
                    }{' '}
                    hải lý
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thanh lọc nhóm địa danh & Tìm kiếm */}
      <div className="map-top-control-bar">
        <div
          className="map-category-pills"
          role="tablist"
          aria-label="Lọc nhóm địa danh trên bản đồ"
        >
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
              placeholder="Tìm đảo, quần đảo, tọa độ, đơn vị hành chính..."
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

      {/* Góc nhìn nhanh Camera Presets */}
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
          <span className="coord-status-live">
            Tọa độ con trỏ: <strong>{formatDMS(hoverCoord.lat, true)}</strong> |{' '}
            <strong>{formatDMS(hoverCoord.lng, false)}</strong> ({hoverCoord.lat.toFixed(2)}°B,{' '}
            {hoverCoord.lng.toFixed(2)}°Đ)
          </span>
        </div>
      </div>

      {/* ================================================================
          KHÔNG GIAN CHÍNH: KHUNG BẢN ĐỒ (2D HOẶC 3D) + BẢNG THÔNG TIN CHI TIẾT
          ================================================================ */}
      <div className="map-main-workspace-grid">
        {/* CỘT TRÁI: KHUNG BẢN ĐỒ 2D HOẶC MÔ HÌNH 3D */}
        <div className="map-canvas-column">
          {viewMode !== '2d' ? (
            <EastSea3DCanvas
              subMode3D="terrain"
              onChangeSubMode3D={() => setViewMode('3d-terrain')}
              markers={filteredMarkers}
              selectedMarkerId={selectedMarker.id}
              onSelectMarker={(m) => handleSelectMarker(m, false)}
              layers={gisLayers}
            />
          ) : (
            <div
              ref={viewportRef}
              className={`map-interactive-viewport ${isDragging ? 'dragging' : ''}`}
              onClick={handleMapCanvasClick}
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
                  <strong>BẢN ĐỒ ĐỊA LÝ 2D GIS — KHU VỰC BIỂN ĐÔNG</strong>
                </div>
                <span className="hud-coord-readout">
                  WGS84: {hoverCoord.lat.toFixed(2)}°B — {hoverCoord.lng.toFixed(2)}°Đ (
                  {formatDMS(hoverCoord.lat, true)}, {formatDMS(hoverCoord.lng, false)})
                </span>
              </div>

              {/* Top-Right Compass Rose */}
              <div className="map-compass-hud" aria-hidden="true">
                <Compass size={32} className="compass-hud-icon" />
                <span className="compass-north">BẮC (N)</span>
              </div>

              {/* Floating Zoom & Pan Controls */}
              <div
                className="map-floating-controls"
                role="group"
                aria-label="Điều khiển phóng to thu nhỏ và di chuyển bản đồ"
              >
                <button
                  type="button"
                  className="map-ctrl-btn"
                  onClick={() => handleZoomChange(0.35)}
                  title="Phóng to bản đồ"
                >
                  <ZoomIn size={18} />
                </button>
                <span className="map-zoom-level">{Math.round(zoom * 100)}%</span>
                <button
                  type="button"
                  className="map-ctrl-btn"
                  onClick={() => handleZoomChange(-0.35)}
                  title="Thu nhỏ bản đồ"
                >
                  <ZoomOut size={18} />
                </button>
                <button
                  type="button"
                  className="map-ctrl-btn reset"
                  onClick={handleResetView}
                  title="Đặt lại toàn cảnh"
                >
                  <RotateCcw size={17} />
                </button>

                <div className="map-dpad-grid">
                  <button
                    type="button"
                    className="dpad-btn up"
                    onClick={() => handleNudgePan(0, 75)}
                    title="Di chuyển lên Bắc"
                  >
                    <ArrowUp size={14} />
                  </button>
                  <div className="dpad-middle-row">
                    <button
                      type="button"
                      className="dpad-btn left"
                      onClick={() => handleNudgePan(75, 0)}
                      title="Di chuyển sang Tây"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <button
                      type="button"
                      className="dpad-btn right"
                      onClick={() => handleNudgePan(-75, 0)}
                      title="Di chuyển sang Đông"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="dpad-btn down"
                    onClick={() => handleNudgePan(0, -75)}
                    title="Di chuyển xuống Nam"
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
                  💡 Kéo để di chuyển • Nhấn vào điểm đánh dấu, điểm chuẩn A1–A11 hoặc khu bảo tồn để xem hộp thông tin
                </span>
              </div>

              {/* SVG Geographic Canvas */}
              <svg
                viewBox={`0 0 ${MAP_BOUNDS.width} ${MAP_BOUNDS.height}`}
                className="east-sea-svg-canvas"
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: 'center center'
                }}
              >
                <defs>
                  <linearGradient
                    id="oceanDepthGrad"
                    x1="0"
                    y1="0"
                    x2="1000"
                    y2="880"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#113747" />
                    <stop offset="45%" stopColor="#113747" />
                    <stop offset="100%" stopColor="#113747" />
                  </linearGradient>
                  <radialGradient id="shelfGlow" cx="35%" cy="48%" r="55%">
                    <stop offset="0%" stopColor="#29B4D1" stopOpacity="0.38" />
                    <stop offset="65%" stopColor="#29B4D1" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#113747" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="archipelagoHalo" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#B6E0EB" stopOpacity="0.38" />
                    <stop offset="70%" stopColor="#29B4D1" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#113747" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="vietnamLandGrad"
                    x1="150"
                    y1="20"
                    x2="420"
                    y2="760"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#29B4D1" />
                    <stop offset="50%" stopColor="#29B4D1" />
                    <stop offset="100%" stopColor="#29B4D1" />
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
                <ellipse
                  cx="320"
                  cy="430"
                  rx="280"
                  ry="390"
                  fill="url(#shelfGlow)"
                />

                {/* LỚP 3: THÔNG TIN ĐỊA LÝ (Lưới Kinh - Vĩ độ & Đường cơ sở A1-A11) */}
                {gisLayers.geoInfo && (
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
                            stroke="#29B4D1"
                            strokeOpacity="0.15"
                            strokeDasharray="4 6"
                          />
                           <text
                            x="14"
                            y={y - 6}
                            fill="#B6E0EB"
                            fontSize="11"
                            fontFamily="monospace"
                            opacity="0.82"
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
                            stroke="#29B4D1"
                            strokeOpacity="0.15"
                            strokeDasharray="4 6"
                          />
                          <text
                            x={x + 6}
                            y="22"
                            fill="#B6E0EB"
                            fontSize="11"
                            fontFamily="monospace"
                            opacity="0.82"
                          >
                            {lng}°Đ
                          </text>
                        </g>
                      )
                    })}
                  </g>
                )}

                {/* Đa giác Đất liền Việt Nam & Bờ biển 3.260km */}
                <path
                  d={MAINLAND_PATH}
                  fill="url(#vietnamLandGrad)"
                  stroke="#B6E0EB"
                  strokeWidth="1.5"
                  strokeOpacity="0.65"
                />
                <path
                  d={COASTLINE_PATH}
                  fill="none"
                  stroke="#B6E0EB"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* LỚP 1: ĐỊA DANH CỐ ĐỊNH TRÊN ĐẤT LIỀN & BIỂN */}
                {gisLayers.placeNames && (
                  <g>
                    <text
                      x="235"
                      y="135"
                      fill="#113747"
                      fontSize="13.5"
                      fontWeight="900"
                      letterSpacing="0.8"
                    >
                      ★ THỦ ĐÔ HÀ NỘI
                    </text>
                    <circle
                      cx="220"
                      cy="124"
                      r="5"
                      fill="#113747"
                      stroke="#B6E0EB"
                      strokeWidth="2"
                    />

                    <text
                      x="182"
                      y="650"
                      fill="#113747"
                      fontSize="12"
                      fontWeight="900"
                    >
                      TP. HỒ CHÍ MINH
                    </text>
                    <circle cx="268" cy="642" r="4.5" fill="#113747" stroke="#B6E0EB" strokeWidth="1.5" />

                    <text
                      x="355"
                      y="198"
                      textAnchor="middle"
                      fill="#B6E0EB"
                      fontSize="13"
                      fontWeight="800"
                      letterSpacing="1.5"
                      opacity="0.85"
                    >
                      VỊNH BẮC BỘ
                    </text>

                    <text
                      x="110"
                      y="725"
                      textAnchor="middle"
                      fill="#B6E0EB"
                      fontSize="12.5"
                      fontWeight="800"
                      letterSpacing="1.2"
                      opacity="0.85"
                    >
                      VỊNH THÁI LAN
                    </text>

                    <text
                      x="635"
                      y="470"
                      textAnchor="middle"
                      fill="#29B4D1"
                      fontSize="26"
                      fontWeight="800"
                      letterSpacing="6"
                      opacity="0.32"
                    >
                      BIỂN ĐÔNG
                    </text>
                  </g>
                )}

                {/* LỚP 4: LỚP MÔI TRƯỜNG BIỂN & KHU BẢO TỒN BIỂN */}
                {gisLayers.marineEnv && (
                  <g className="map-marine-env-layer">
                    {MARINE_ENVIRONMENT_ZONES.map((zone) => {
                      const { x, y } = projectLatLng(zone.lat, zone.lng)
                      return (
                        <g
                          key={zone.id}
                          transform={`translate(${x}, ${y})`}
                          className="map-marker-node"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedSpecialFeature({
                              type: 'marine-mpa',
                              title: zone.name,
                              subtitle: 'Khu bảo tồn biển & Đa dạng sinh học đại dương',
                              coordText: `${formatDMS(zone.lat, true)} — ${formatDMS(zone.lng, false)}`,
                              adminUnit: zone.ecosystemType,
                              summary: zone.biodiversityNote,
                              sourceRef: zone.source
                            })
                          }}
                        >
                          <circle
                            cx="0"
                            cy="0"
                            r="26"
                            fill="#29B4D1"
                            fillOpacity="0.2"
                            stroke="#29B4D1"
                            strokeWidth="1.6"
                            strokeDasharray="4 3"
                          />
                          <circle cx="0" cy="0" r="5" fill="#29B4D1" />
                          {gisLayers.placeNames && (
                            <text
                              x="0"
                              y="38"
                              textAnchor="middle"
                              fill="#B6E0EB"
                              fontSize="9.5"
                              fontWeight="700"
                            >
                              🌿 {zone.name}
                            </text>
                          )}
                        </g>
                      )
                    })}
                  </g>
                )}

                {/* LỚP 3 (TIẾP): HỆ THỐNG 11 ĐIỂM CHUẨN ĐƯỜNG CƠ SỞ (A1 – A11) & KHOẢNG CÁCH HẢI LÝ */}
                {gisLayers.geoInfo && (
                  <g className="map-baseline-and-distance-layer">
                    {/* Đường nối 11 điểm chuẩn đường cơ sở thẳng ven bờ lục địa */}
                    <path
                      d={BASELINE_1982_PATH}
                      fill="none"
                      stroke="#29B4D1"
                      strokeWidth="2.2"
                      strokeDasharray="6 4"
                    />
                    {OFFICIAL_BASELINE_POINTS_1982.map((bPt) => {
                      const { x, y } = projectLatLng(bPt.lat, bPt.lng)
                      return (
                        <g
                          key={bPt.code}
                          transform={`translate(${x}, ${y})`}
                          className="map-marker-node"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedSpecialFeature({
                              type: 'baseline-point',
                              title: `Điểm chuẩn Đường cơ sở ${bPt.code}: ${bPt.name}`,
                              subtitle:
                                'Hệ thống Đường cơ sở thẳng ven bờ lục địa Việt Nam (Tuyên bố ngày 12/11/1982)',
                              coordText: `${bPt.dmsLat} — ${bPt.dmsLng}`,
                              adminUnit: bPt.province,
                              summary: `Điểm chuẩn ${bPt.code} tại ${bPt.name} là một trong 11 điểm tọa độ pháp lý quốc gia dùng để nối các đoạn thẳng đường cơ sở tính chiều rộng lãnh hải Việt Nam.`,
                              sourceRef:
                                'Phụ lục Tuyên bố ngày 12/11/1982 của Chính phủ nước CHXHCN Việt Nam & Luật Biển Việt Nam 2012'
                            })
                          }}
                        >
                          <rect
                            x="-5"
                            y="-5"
                            width="10"
                            height="10"
                            rx="2"
                            fill="#29B4D1"
                            stroke="#B6E0EB"
                            strokeWidth="1.4"
                          />
                          {gisLayers.placeNames && (
                            <text
                              x="-8"
                              y="4"
                              textAnchor="end"
                              fill="#B6E0EB"
                              fontSize="9"
                              fontFamily="monospace"
                              fontWeight="800"
                            >
                              {bPt.code}
                            </text>
                          )}
                        </g>
                      )
                    })}

                    {/* Tuyến khoảng cách hải lý tham chiếu ra Hoàng Sa & Trường Sa */}
                    <line
                      x1={daNangPt.x}
                      y1={daNangPt.y}
                      x2={hoangSaPt.x}
                      y2={hoangSaPt.y}
                      stroke="#29B4D1"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      opacity="0.75"
                    />
                    <rect
                      x={(daNangPt.x + hoangSaPt.x) / 2 - 58}
                      y={(daNangPt.y + hoangSaPt.y) / 2 - 22}
                      width="116"
                      height="20"
                      rx="10"
                      fill="#113747"
                      fillOpacity="0.92"
                      stroke="#29B4D1"
                      strokeWidth="1"
                    />
                    <text
                      x={(daNangPt.x + hoangSaPt.x) / 2}
                      y={(daNangPt.y + hoangSaPt.y) / 2 - 9}
                      textAnchor="middle"
                      fill="#B6E0EB"
                      fontSize="9.5"
                      fontWeight="700"
                    >
                      ~170 hải lý (Đà Nẵng)
                    </text>

                    <line
                      x1={lySonPt.x}
                      y1={lySonPt.y}
                      x2={hoangSaPt.x}
                      y2={hoangSaPt.y}
                      stroke="#29B4D1"
                      strokeWidth="1.2"
                      strokeDasharray="3 4"
                      opacity="0.65"
                    />

                    <line
                      x1={camRanhPt.x}
                      y1={camRanhPt.y}
                      x2={truongSaLonPt.x}
                      y2={truongSaLonPt.y}
                      stroke="#29B4D1"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      opacity="0.75"
                    />
                    <rect
                      x={(camRanhPt.x + truongSaLonPt.x) / 2 - 64}
                      y={(camRanhPt.y + truongSaLonPt.y) / 2 - 12}
                      width="128"
                      height="20"
                      rx="10"
                      fill="#113747"
                      fillOpacity="0.92"
                      stroke="#29B4D1"
                      strokeWidth="1"
                    />
                    <text
                      x={(camRanhPt.x + truongSaLonPt.x) / 2}
                      y={(camRanhPt.y + truongSaLonPt.y) / 2 + 1}
                      textAnchor="middle"
                      fill="#B6E0EB"
                      fontSize="9.5"
                      fontWeight="700"
                    >
                      ~248 hải lý (Cam Ranh)
                    </text>
                  </g>
                )}

                {/* Đường đo khoảng cách khi đang bật Công cụ Đo khoảng cách GIS */}
                {activeGisTool === 'measure' && (
                  <g className="gis-measure-overlay">
                    <line
                      x1={measureStartSvg.x}
                      y1={measureStartSvg.y}
                      x2={measureEndSvg.x}
                      y2={measureEndSvg.y}
                      stroke="#29B4D1"
                      strokeWidth="2.8"
                      strokeDasharray="7 4"
                    />
                    <circle
                      cx={measureStartSvg.x}
                      cy={measureStartSvg.y}
                      r="7"
                      fill="#29B4D1"
                      stroke="#B6E0EB"
                      strokeWidth="2"
                    />
                    <circle
                      cx={measureEndSvg.x}
                      cy={measureEndSvg.y}
                      r="7"
                      fill="#29B4D1"
                      stroke="#B6E0EB"
                      strokeWidth="2"
                    />
                    <rect
                      x={(measureStartSvg.x + measureEndSvg.x) / 2 - 80}
                      y={(measureStartSvg.y + measureEndSvg.y) / 2 - 14}
                      width="160"
                      height="24"
                      rx="12"
                      fill="#113747"
                      stroke="#29B4D1"
                      strokeWidth="1.5"
                    />
                    <text
                      x={(measureStartSvg.x + measureEndSvg.x) / 2}
                      y={(measureStartSvg.y + measureEndSvg.y) / 2 + 2}
                      textAnchor="middle"
                      fill="#B6E0EB"
                      fontSize="10.5"
                      fontWeight="800"
                    >
                      {measurementResult.distanceNm} NM ({measurementResult.distanceKm} km)
                    </text>
                  </g>
                )}

                {/* Điểm ghim khi bật Công cụ Xác định Tọa độ */}
                {activeGisTool === 'locator' && (
                  <g transform={`translate(${pinnedSvg.x}, ${pinnedSvg.y})`}>
                    <circle
                      cx="0"
                      cy="0"
                      r="20"
                      fill="#29B4D1"
                      fillOpacity="0.25"
                      stroke="#1A718D"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="-14"
                      y1="0"
                      x2="14"
                      y2="0"
                      stroke="#1A718D"
                      strokeWidth="1.8"
                    />
                    <line
                      x1="0"
                      y1="-14"
                      x2="0"
                      y2="14"
                      stroke="#1A718D"
                      strokeWidth="1.8"
                    />
                    <circle cx="0" cy="0" r="5" fill="#29B4D1" stroke="#B6E0EB" />
                  </g>
                )}

                {/* LỚP 2: LỚP ĐẢO VÀ QUẦN ĐẢO (HOÀNG SA, TRƯỜNG SA, DK1 & ĐẢO VEN BỜ) */}
                {gisLayers.islands && (
                  <g className="map-islands-layer">
                    <ellipse
                      cx={hoangSaPt.x + 15}
                      cy={hoangSaPt.y}
                      rx="92"
                      ry="58"
                      fill="url(#archipelagoHalo)"
                      stroke="#29B4D1"
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
                      stroke="#29B4D1"
                      strokeOpacity="0.4"
                      strokeWidth="1.4"
                      strokeDasharray="6 5"
                    />

                    {filteredMarkers.map((marker) => {
                      const { x, y } = projectLatLng(marker.lat, marker.lng)
                      const isSelected =
                        !selectedSpecialFeature && marker.id === selectedMarker.id
                      const isMajor = marker.markerType === 'major-gold'
                      const isDk1 = marker.markerType === 'dk1-amber'
                      const isCoastal = marker.markerType === 'coastal-emerald'

                      const fillColor = isMajor
                        ? '#29B4D1'
                        : isDk1
                        ? '#1A718D'
                        : isCoastal
                        ? '#29B4D1'
                        : '#29B4D1'

                      const radius = isMajor ? 11 : isSelected ? 9 : 6.5

                      return (
                        <g
                          key={marker.id}
                          transform={`translate(${x}, ${y})`}
                          className={`map-marker-node ${
                            isSelected ? 'selected' : ''
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleSelectMarker(marker, false)
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`Điểm đánh dấu ${marker.name}`}
                        >
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

                          <circle
                            cx="0"
                            cy="0"
                            r={radius}
                            fill={fillColor}
                            stroke="#B6E0EB"
                            strokeWidth={isSelected ? '2.5' : '1.5'}
                          />

                          {isMajor && (
                            <text
                              x="0"
                              y="3.8"
                              textAnchor="middle"
                              fill="#113747"
                              fontSize="11"
                              fontWeight="900"
                            >
                              ★
                            </text>
                          )}

                          {(gisLayers.placeNames || isSelected || isMajor) && (
                            <g
                              transform={`translate(${isMajor ? 0 : 12}, ${
                                isMajor ? -18 : 4
                              })`}
                            >
                              <rect
                                x={isMajor ? -82 : -4}
                                y="-13"
                                width={
                                  isMajor ? 164 : marker.name.length * 6.4 + 14
                                }
                                height="19"
                                rx="6"
                                fill={isSelected ? '#29B4D1' : '#113747'}
                                fillOpacity={isSelected ? '0.96' : '0.9'}
                                stroke={isSelected ? '#B6E0EB' : fillColor}
                                strokeWidth="1"
                              />
                              <text
                                x={isMajor ? 0 : 3}
                                y="0"
                                textAnchor={isMajor ? 'middle' : 'start'}
                                fill={
                                  isSelected
                                    ? '#113747'
                                    : isMajor
                                    ? '#29B4D1'
                                    : '#B6E0EB'
                                }
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
                  </g>
                )}
              </svg>
            </div>
          )}
        </div>

        {/* CỘT PHẢI: HỘP THÔNG TIN ĐỐI TƯỢNG ĐỊA LÝ (INSPECTOR PANEL) */}
        <div className="map-inspector-column">
          <div className="map-inspector-card">
            {selectedSpecialFeature ? (
              <>
                <div className="inspector-header">
                  <div className="inspector-badge-row">
                    <span className="inspector-category-tag">
                      <Layers size={13} />
                      <span>
                        {selectedSpecialFeature.type === 'baseline-point'
                          ? 'Điểm chuẩn Đường cơ sở 1982'
                          : 'Lớp Môi trường & Bảo tồn biển'}
                      </span>
                    </span>
                    <button
                      type="button"
                      className="inspector-index-tag"
                      onClick={() => setSelectedSpecialFeature(null)}
                    >
                      ← Quay lại Điểm đảo
                    </button>
                  </div>
                  <h3 className="inspector-title">
                    {selectedSpecialFeature.title}
                  </h3>
                  <p className="inspector-subtitle">
                    {selectedSpecialFeature.subtitle}
                  </p>
                  <div className="inspector-coord-box">
                    <strong>Tọa độ xác thực:</strong>{' '}
                    <span>{selectedSpecialFeature.coordText}</span>
                  </div>
                </div>

                <div className="inspector-body">
                  <div className="inspector-info-block">
                    <h4>
                      <ShieldCheck size={16} />
                      <span>Thuộc khu vực / Hệ sinh thái</span>
                    </h4>
                    <p className="admin-highlight">
                      {selectedSpecialFeature.adminUnit}
                    </p>
                  </div>
                  <div className="inspector-info-block">
                    <h4>
                      <Info size={16} />
                      <span>Thông tin chi tiết</span>
                    </h4>
                    <p>{selectedSpecialFeature.summary}</p>
                  </div>
                  <div className="inspector-source-strip">
                    <strong>Nguồn pháp lý / khoa học:</strong>{' '}
                    {selectedSpecialFeature.sourceRef}
                  </div>
                </div>
              </>
            ) : (
              <>
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
                    <strong>Tọa độ tham khảo (WGS84):</strong>{' '}
                    <span>
                      {selectedMarker.coordText} ({formatDMS(selectedMarker.lat, true)},{' '}
                      {formatDMS(selectedMarker.lng, false)})
                    </span>
                  </div>
                </div>

                <div className="inspector-body">
                  <div className="inspector-info-block">
                    <h4>
                      <ShieldCheck size={16} />
                      <span>Đơn vị hành chính &amp; Quy chế pháp lý</span>
                    </h4>
                    <p className="admin-highlight">{selectedMarker.adminUnit}</p>
                    <small className="legal-status-subnote">
                      {selectedMarker.id === 'nha-gian-dk1'
                        ? '✦ Quy chế: Quyền chủ quyền và quyền tài phán quốc gia trên Thềm lục địa Việt Nam (UNCLOS 1982 & Luật Biển 2012).'
                        : '✦ Quy chế: Chủ quyền lãnh thổ quốc gia hoàn toàn và đầy đủ của Việt Nam.'}
                    </small>
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
                    <span>Phóng tới vị trí 2D</span>
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
              </>
            )}
          </div>

          {/* Danh sách nhanh các điểm đánh dấu */}
          <div className="map-quick-directory-card">
            <h4>Danh sách nhanh các địa danh ({filteredMarkers.length})</h4>
            <div className="quick-directory-list">
              {filteredMarkers.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`directory-item-btn ${
                    !selectedSpecialFeature && item.id === selectedMarker.id
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => handleSelectMarker(item, viewMode === '2d')}
                >
                  <span className={`dir-dot ${item.markerType}`} />
                  <span className="dir-name">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================
          V. KHU VỰC LƯU TRỮ HỒ SƠ BẢN ĐỒ (10 TRƯỜNG THÔNG TIN CHUẨN)
          ================================================================ */}
      <section className="map-dossier-registry-section">
        <div className="dossier-registry-header">
          <div>
            <span className="section-eyebrow">
              KHU VỰC LƯU TRỮ HỒ SƠ BẢN ĐỒ • CHUẨN DỮ LIỆU GIS &amp; LỊCH SỬ
            </span>
            <h3>Hệ thống Hồ sơ Bản đồ &amp; Đặc tả Kỹ thuật (10 Trường Chuẩn mực)</h3>
            <p>
              Phân biệt rõ ràng giữa <strong>Bản đồ địa lý tự nhiên</strong>,{' '}
              <strong>Bản đồ lịch sử</strong> và <strong>Bản đồ có nội dung pháp lý</strong>,
              kèm đầy đủ mã hồ sơ, nguồn dữ liệu, cơ quan phát hành và giới hạn sử dụng.
            </p>
          </div>
        </div>

        {/* Thanh chọn Hồ sơ Bản đồ */}
        <div className="dossier-selector-tabs" role="tablist" aria-label="Chọn hồ sơ bản đồ">
          {MAP_DOSSIER_RECORDS.map((rec) => {
            const isActive = rec.id === activeDossier.id
            return (
              <button
                key={rec.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`dossier-tab-pill ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedDossierId(rec.id)}
              >
                <FileText size={15} />
                <div>
                  <small>{rec.internalCode}</small>
                  <strong>{rec.mapTitle}</strong>
                </div>
              </button>
            )
          })}
        </div>

        {/* Bảng 10 trường thông tin chuẩn của Hồ sơ Bản đồ đang chọn */}
        <div className="dossier-10fields-card">
          <div className="dossier-card-top-bar">
            <span className="dossier-internal-badge">
              Mã hồ sơ nội bộ: {activeDossier.internalCode}
            </span>
            <span className="dossier-type-badge">{activeDossier.mapType}</span>
          </div>

          <div className="dossier-fields-grid">
            <div className="dossier-field-item">
              <span className="field-num">01. Tên bản đồ</span>
              <strong>{activeDossier.mapTitle}</strong>
            </div>
            <div className="dossier-field-item">
              <span className="field-num">02. Mã hồ sơ nội bộ</span>
              <code>{activeDossier.internalCode}</code>
            </div>
            <div className="dossier-field-item">
              <span className="field-num">03. Khu vực địa lý</span>
              <p>{activeDossier.geographicArea}</p>
            </div>
            <div className="dossier-field-item">
              <span className="field-num">04. Loại bản đồ</span>
              <p>{activeDossier.mapType}</p>
            </div>
            <div className="dossier-field-item">
              <span className="field-num">05. Nguồn dữ liệu</span>
              <p>{activeDossier.dataSource}</p>
            </div>
            <div className="dossier-field-item">
              <span className="field-num">06. Cơ quan phát hành</span>
              <p>{activeDossier.issuingAgency}</p>
            </div>
            <div className="dossier-field-item">
              <span className="field-num">07. Thời gian xuất bản</span>
              <p>{activeDossier.publicationDate}</p>
            </div>
            <div className="dossier-field-item">
              <span className="field-num">08. Chú giải bản đồ</span>
              <p>{activeDossier.legendDescription}</p>
            </div>
            <div className="dossier-field-item full-span">
              <span className="field-num">09. Mục đích sử dụng</span>
              <p>{activeDossier.usagePurpose}</p>
            </div>
            <div className="dossier-field-item full-span warning-note">
              <span className="field-num">10. Ghi chú và giới hạn dữ liệu</span>
              <p>{activeDossier.notesAndLimitations}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          VII. PHÂN BIỆT CHỦ QUYỀN LÃNH THỔ VỚI QUYỀN CHỦ QUYỀN & QUYỀN TÀI PHÁN
          ================================================================ */}
      <section className="map-legal-regimes-box">
        <div className="legal-regimes-header">
          <ShieldCheck size={22} />
          <div>
            <h3>
              Chuẩn mực Pháp lý: Phân biệt Chủ quyền lãnh thổ, Quyền chủ quyền và Quyền tài phán
            </h3>
            <p>
              Theo Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982) và Luật Biển Việt Nam
              năm 2012 (Luật số 18/2012/QH13)
            </p>
          </div>
        </div>

        <div className="legal-regimes-grid">
          {MARITIME_LEGAL_REGIMES.map((regime, idx) => (
            <div key={idx} className={`legal-regime-card badge-${regime.badgeColor}`}>
              <span className="regime-nature-tag">{regime.legalNature}</span>
              <h4>{regime.zone}</h4>
              <p>{regime.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bảng Chú giải Ký hiệu & Nguồn Tham khảo Chính thống */}
      <div className="map-legend-and-sources-grid">
        <div className="map-legend-card">
          <h3>
            <Compass size={19} />
            <span>Bảng Chú giải Ký hiệu Bản đồ GIS</span>
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
            <li>
              <span
                className="legend-symbol-badge"
                style={{ backgroundColor: '#29B4D1', borderColor: '#B6E0EB' }}
              >
                ■
              </span>
              <span>Hệ thống 11 điểm chuẩn đường cơ sở thẳng (A1 – A11) năm 1982</span>
            </li>
            <li>
              <span
                className="legend-symbol-badge"
                style={{ backgroundColor: '#29B4D1', borderColor: '#1A718D' }}
              >
                🌿
              </span>
              <span>Lớp môi trường biển &amp; Khu bảo tồn biển quốc gia</span>
            </li>
          </ul>

          <div className="map-legal-note-box">
            <p>{MAP_LEGAL_DISCLAIMER}</p>
          </div>
        </div>

        <div className="map-sources-card">
          <h3>
            <BookOpen size={19} />
            <span>Nguồn Dữ liệu Chính thống &amp; Thời điểm Cập nhật (2026)</span>
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

      {/* Hộp thoại Xem cấu trúc Dữ liệu Địa lý GeoJSON (RFC 7946) */}
      {showGeoJsonModal && (
        <div
          className="modal-backdrop"
          onClick={() => setShowGeoJsonModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-panel geojson-modal-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="modal-eyebrow">CHUẨN DỮ LIỆU ĐỊA LÝ QUỐC TẾ RFC 7946</span>
                <h3 className="modal-title">
                  Cấu trúc Dữ liệu GeoJSON — Bản đồ Số Biển Đảo Việt Nam
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowGeoJsonModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <pre className="geojson-code-preview">
                {JSON.stringify(geoJsonCollection, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
