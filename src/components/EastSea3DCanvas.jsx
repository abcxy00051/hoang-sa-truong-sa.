import React, { useRef, useEffect, useState, useCallback } from 'react'
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Globe,
  Layers,
  Play,
  Pause,
  Compass,
  Info
} from 'lucide-react'
import {
  VIETNAM_MAINLAND_COORDS,
  VIETNAM_COASTLINE_COORDS
} from '../data/mapData'
import {
  OFFICIAL_BASELINE_POINTS_1982,
  MARINE_ENVIRONMENT_ZONES
} from '../data/mapGeoJsonData'

const DEG_TO_RAD = Math.PI / 180

/**
 * Phép chiếu Orthographic 3D trên mặt cầu (3D Globe Projection)
 */
function projectOrthographic3D(lat, lng, centerLat, centerLng, radius, cx, cy) {
  const phi = lat * DEG_TO_RAD
  const lambda = lng * DEG_TO_RAD
  const phi0 = centerLat * DEG_TO_RAD
  const lambda0 = centerLng * DEG_TO_RAD
  const dLambda = lambda - lambda0

  const cosC =
    Math.sin(phi0) * Math.sin(phi) +
    Math.cos(phi0) * Math.cos(phi) * Math.cos(dLambda)

  const x = cx + radius * Math.cos(phi) * Math.sin(dLambda)
  const y =
    cy -
    radius *
      (Math.cos(phi0) * Math.sin(phi) -
        Math.sin(phi0) * Math.cos(phi) * Math.cos(dLambda))

  return { x, y, visible: cosC >= -0.05, depth: cosC }
}

/**
 * Phép chiếu Phối cảnh Sa bàn Địa hình 3D (3D Bathymetric Terrain Block Projection)
 */
function projectTerrain3D(
  lat,
  lng,
  elevationZ,
  yawDeg,
  pitchDeg,
  scale,
  cx,
  cy
) {
  // Chuẩn hóa lat [6..23.5] -> [-1..1], lng [102..119.5] -> [-1..1]
  const normX = (lng - 110.75) / 8.75
  const normY = (14.75 - lat) / 8.75

  const yaw = yawDeg * DEG_TO_RAD
  const pitch = pitchDeg * DEG_TO_RAD

  // Xoay quanh trục Z (Yaw)
  const rx = normX * Math.cos(yaw) - normY * Math.sin(yaw)
  const ry = normX * Math.sin(yaw) + normY * Math.cos(yaw)

  // Nghiêng theo góc Pitch và cộng độ cao Z
  const screenX = cx + rx * scale
  const screenY =
    cy + ry * scale * Math.cos(pitch) - elevationZ * scale * Math.sin(pitch)

  return { x: screenX, y: screenY, depth: ry }
}

export default function EastSea3DCanvas({
  subMode3D = 'globe', // 'globe' | 'terrain'
  onChangeSubMode3D,
  markers = [],
  selectedMarkerId,
  onSelectMarker,
  layers = {
    placeNames: true,
    islands: true,
    geoInfo: true,
    marineEnv: false
  }
}) {
  const canvasRef = useRef(null)
  const hitTargetsRef = useRef([])

  // Trạng thái góc nhìn 3D
  const [centerLng, setCenterLng] = useState(111.2)
  const [centerLat, setCenterLat] = useState(14.5)
  const [yawDeg, setYawDeg] = useState(-22)
  const [pitchDeg, setPitchDeg] = useState(56)
  const [zoom3D, setZoom3D] = useState(1.25)
  const [autoSpin, setAutoSpin] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [hoveredMarkerName, setHoveredMarkerName] = useState(null)

  const dragRef = useRef({
    startX: 0,
    startY: 0,
    initLng: 111.2,
    initLat: 14.5,
    initYaw: -22,
    initPitch: 56,
    moved: false
  })

  // Tự động xoay nhẹ khi bật Auto-Spin
  useEffect(() => {
    if (!autoSpin) return undefined
    const timer = setInterval(() => {
      if (subMode3D === 'globe') {
        setCenterLng((prev) => ((prev + 0.35 + 180) % 360) - 180)
      } else {
        setYawDeg((prev) => (prev + 0.6) % 360)
      }
    }, 45)
    return () => clearInterval(timer)
  }, [autoSpin, subMode3D])

  const handleReset3D = () => {
    setAutoSpin(false)
    setCenterLng(111.2)
    setCenterLat(14.5)
    setYawDeg(-22)
    setPitchDeg(56)
    setZoom3D(1.25)
  }

  const drawScene = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = canvas.clientWidth || 760
    const height = canvas.clientHeight || 560
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr
      canvas.height = height * dpr
    }
    ctx.save()
    ctx.scale(dpr, dpr)

    // Nền không gian đại dương sâu
    const bgGrad = ctx.createRadialGradient(
      width * 0.5,
      height * 0.48,
      40,
      width * 0.5,
      height * 0.5,
      Math.max(width, height) * 0.72
    )
    bgGrad.addColorStop(0, '#113747')
    bgGrad.addColorStop(0.55, '#113747')
    bgGrad.addColorStop(1, '#113747')
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, width, height)

    const nextHitTargets = []

    if (subMode3D === 'globe') {
      // ====================================================
      // CHẾ ĐỘ 1: ĐỊA CẦU 3D (ORTHOGRAPHIC SPHERICAL GLOBE)
      // ====================================================
      const cx = width * 0.5
      const cy = height * 0.52
      const baseRadius = Math.min(width, height) * 0.38 * zoom3D

      // Quầng sáng khí quyển bao quanh Địa cầu
      const atmoGrad = ctx.createRadialGradient(
        cx,
        cy,
        baseRadius * 0.92,
        cx,
        cy,
        baseRadius * 1.16
      )
      atmoGrad.addColorStop(0, 'rgba(169, 216, 210, 0.35)')
      atmoGrad.addColorStop(0.6, 'rgba(141, 191, 201, 0.14)')
      atmoGrad.addColorStop(1, 'rgba(71, 126, 131, 0)')
      ctx.fillStyle = atmoGrad
      ctx.beginPath()
      ctx.arc(cx, cy, baseRadius * 1.16, 0, Math.PI * 2)
      ctx.fill()

      // Khối cầu đại dương
      const sphereGrad = ctx.createRadialGradient(
        cx - baseRadius * 0.28,
        cy - baseRadius * 0.28,
        baseRadius * 0.1,
        cx,
        cy,
        baseRadius
      )
      sphereGrad.addColorStop(0, '#29B4D1')
      sphereGrad.addColorStop(0.55, '#113747')
      sphereGrad.addColorStop(1, '#113747')

      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2)
      ctx.fillStyle = sphereGrad
      ctx.fill()
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.55)'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.clip()

      // 1. Lưới Kinh tuyến - Vĩ tuyến trên mặt cầu 3D
      if (layers.geoInfo) {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.16)'
        ctx.lineWidth = 1

        // Vĩ tuyến
        for (let lat = -60; lat <= 75; lat += 15) {
          ctx.beginPath()
          let started = false
          for (let lng = -180; lng <= 180; lng += 4) {
            const pt = projectOrthographic3D(
              lat,
              lng,
              centerLat,
              centerLng,
              baseRadius,
              cx,
              cy
            )
            if (pt.visible) {
              if (!started) {
                ctx.moveTo(pt.x, pt.y)
                started = true
              } else {
                ctx.lineTo(pt.x, pt.y)
              }
            } else {
              started = false
            }
          }
          ctx.stroke()
        }

        // Kinh tuyến
        for (let lng = -180; lng < 180; lng += 15) {
          ctx.beginPath()
          let started = false
          for (let lat = -80; lat <= 80; lat += 4) {
            const pt = projectOrthographic3D(
              lat,
              lng,
              centerLat,
              centerLng,
              baseRadius,
              cx,
              cy
            )
            if (pt.visible) {
              if (!started) {
                ctx.moveTo(pt.x, pt.y)
                started = true
              } else {
                ctx.lineTo(pt.x, pt.y)
              }
            } else {
              started = false
            }
          }
          ctx.stroke()
        }

        // Lưới chi tiết khu vực Biển Đông (2 độ)
        ctx.strokeStyle = 'rgba(125, 211, 252, 0.22)'
        ctx.setLineDash([4, 4])
        for (let lat = 6; lat <= 24; lat += 2) {
          ctx.beginPath()
          for (let lng = 102; lng <= 120; lng += 1) {
            const pt = projectOrthographic3D(
              lat,
              lng,
              centerLat,
              centerLng,
              baseRadius,
              cx,
              cy
            )
            if (lng === 102) ctx.moveTo(pt.x, pt.y)
            else ctx.lineTo(pt.x, pt.y)
          }
          ctx.stroke()
        }
        ctx.setLineDash([])
      }

      // 2. Vùng thềm lục địa nông ven bờ Việt Nam (Continental Shelf Shading)
      const hsCenter = projectOrthographic3D(
        14.5,
        109.5,
        centerLat,
        centerLng,
        baseRadius,
        cx,
        cy
      )
      if (hsCenter.visible) {
        const shelfGrad = ctx.createRadialGradient(
          hsCenter.x,
          hsCenter.y,
          10,
          hsCenter.x,
          hsCenter.y,
          baseRadius * 0.42
        )
        shelfGrad.addColorStop(0, 'rgba(14, 165, 233, 0.34)')
        shelfGrad.addColorStop(1, 'rgba(14, 165, 233, 0)')
        ctx.fillStyle = shelfGrad
        ctx.beginPath()
        ctx.arc(hsCenter.x, hsCenter.y, baseRadius * 0.42, 0, Math.PI * 2)
        ctx.fill()
      }

      // 3. Đa giác Đất liền Việt Nam trên mặt cầu 3D
      ctx.beginPath()
      VIETNAM_MAINLAND_COORDS.forEach(([lat, lng], idx) => {
        const pt = projectOrthographic3D(
          lat,
          lng,
          centerLat,
          centerLng,
          baseRadius,
          cx,
          cy
        )
        if (idx === 0) ctx.moveTo(pt.x, pt.y)
        else ctx.lineTo(pt.x, pt.y)
      })
      ctx.closePath()
      ctx.fillStyle = 'rgba(30, 64, 104, 0.92)'
      ctx.fill()
      ctx.strokeStyle = '#29B4D1'
      ctx.lineWidth = 1.8
      ctx.stroke()

      // Đường bờ biển 3.260 km nổi bật
      ctx.beginPath()
      VIETNAM_COASTLINE_COORDS.forEach(([lat, lng], idx) => {
        const pt = projectOrthographic3D(
          lat,
          lng,
          centerLat,
          centerLng,
          baseRadius,
          cx,
          cy
        )
        if (idx === 0) ctx.moveTo(pt.x, pt.y)
        else ctx.lineTo(pt.x, pt.y)
      })
      ctx.strokeStyle = '#1A718D'
      ctx.lineWidth = 3
      ctx.stroke()

      // 4. Lớp Hệ thống 11 Điểm chuẩn Đường cơ sở (A1 - A11)
      if (layers.geoInfo) {
        ctx.beginPath()
        OFFICIAL_BASELINE_POINTS_1982.forEach((bPt, idx) => {
          const pt = projectOrthographic3D(
            bPt.lat,
            bPt.lng,
            centerLat,
            centerLng,
            baseRadius,
            cx,
            cy
          )
          if (idx === 0) ctx.moveTo(pt.x, pt.y)
          else ctx.lineTo(pt.x, pt.y)
        })
        ctx.strokeStyle = '#29B4D1'
        ctx.lineWidth = 1.8
        ctx.setLineDash([5, 4])
        ctx.stroke()
        ctx.setLineDash([])
      }

      // 5. Lớp Môi trường Biển & Khu bảo tồn biển
      if (layers.marineEnv) {
        MARINE_ENVIRONMENT_ZONES.forEach((zone) => {
          const pt = projectOrthographic3D(
            zone.lat,
            zone.lng,
            centerLat,
            centerLng,
            baseRadius,
            cx,
            cy
          )
          if (!pt.visible) return
          ctx.beginPath()
          ctx.arc(pt.x, pt.y, 16 * Math.sqrt(zoom3D), 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(16, 185, 129, 0.25)'
          ctx.fill()
          ctx.strokeStyle = '#29B4D1'
          ctx.lineWidth = 1.4
          ctx.stroke()
        })
      }

      // 6. Các Điểm Đánh Dấu Đảo & Quần Đảo trên Địa cầu 3D
      if (layers.islands) {
        markers.forEach((m) => {
          const pt = projectOrthographic3D(
            m.lat,
            m.lng,
            centerLat,
            centerLng,
            baseRadius,
            cx,
            cy
          )
          if (!pt.visible) return

          const isSelected = m.id === selectedMarkerId
          const isMajor = m.markerType === 'major-gold'
          const pinHeight = isMajor ? 22 : isSelected ? 18 : 11

          // Cột sáng 3D vươn lên từ mặt địa cầu
          const topX = pt.x
          const topY = pt.y - pinHeight

          ctx.beginPath()
          ctx.moveTo(pt.x, pt.y)
          ctx.lineTo(topX, topY)
          ctx.strokeStyle = isMajor ? '#29B4D1' : '#29B4D1'
          ctx.lineWidth = isSelected ? 2.5 : 1.5
          ctx.stroke()

          // Chân đế trên mặt biển
          ctx.beginPath()
          ctx.arc(pt.x, pt.y, isMajor ? 5 : 3.5, 0, Math.PI * 2)
          ctx.fillStyle = isMajor ? '#29B4D1' : '#29B4D1'
          ctx.fill()

          // Đỉnh kim đánh dấu 3D
          const r = isMajor ? 9 : isSelected ? 8 : 5.5
          ctx.beginPath()
          ctx.arc(topX, topY, r, 0, Math.PI * 2)
          ctx.fillStyle = isSelected
            ? '#1A718D'
            : isMajor
            ? '#29B4D1'
            : m.markerType === 'dk1-amber'
            ? '#113747'
            : m.markerType === 'coastal-emerald'
            ? '#29B4D1'
            : '#29B4D1'
          ctx.fill()
          ctx.strokeStyle = '#B6E0EB'
          ctx.lineWidth = isSelected ? 2.2 : 1.4
          ctx.stroke()

          if (layers.placeNames && (isMajor || isSelected || zoom3D >= 1.35)) {
            ctx.font = `${isMajor || isSelected ? '800 11px' : '700 10px'} sans-serif`
            const textWidth = ctx.measureText(m.name).width
            ctx.fillStyle = isSelected
              ? 'rgba(245, 158, 11, 0.95)'
              : 'rgba(4, 13, 29, 0.85)'
            ctx.fillRect(topX - textWidth / 2 - 6, topY - r - 20, textWidth + 12, 17)
            ctx.fillStyle = isSelected ? '#113747' : isMajor ? '#1A718D' : '#B6E0EB'
            ctx.textAlign = 'center'
            ctx.fillText(m.name, topX, topY - r - 8)
          }

          nextHitTargets.push({
            marker: m,
            x: topX,
            y: topY,
            r: Math.max(14, r + 6)
          })
        })
      }

      ctx.restore()
    } else {
      // ====================================================
      // CHẾ ĐỘ 2: SA BÀN ĐỊA HÌNH 3D (3D BATHYMETRIC TERRAIN)
      // ====================================================
      const cx = width * 0.5
      const cy = height * 0.54
      const scale = Math.min(width, height) * 0.34 * zoom3D

      // Vẽ mặt phẳng đáy thềm lục địa 3D
      const corners = [
        [23.5, 102.0],
        [23.5, 119.5],
        [6.0, 119.5],
        [6.0, 102.0]
      ]

      // Lớp đáy biển sâu (-0.18)
      ctx.beginPath()
      corners.forEach(([lat, lng], idx) => {
        const pt = projectTerrain3D(
          lat,
          lng,
          -0.18,
          yawDeg,
          pitchDeg,
          scale,
          cx,
          cy
        )
        if (idx === 0) ctx.moveTo(pt.x, pt.y)
        else ctx.lineTo(pt.x, pt.y)
      })
      ctx.closePath()
      ctx.fillStyle = 'rgba(4, 18, 41, 0.92)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Mặt phẳng mặt nước biển (Z = 0)
      ctx.beginPath()
      corners.forEach(([lat, lng], idx) => {
        const pt = projectTerrain3D(
          lat,
          lng,
          0,
          yawDeg,
          pitchDeg,
          scale,
          cx,
          cy
        )
        if (idx === 0) ctx.moveTo(pt.x, pt.y)
        else ctx.lineTo(pt.x, pt.y)
      })
      ctx.closePath()
      ctx.fillStyle = 'rgba(14, 165, 233, 0.16)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.55)'
      ctx.lineWidth = 1.8
      ctx.stroke()

      // Lưới địa hình 3D trên mặt biển
      if (layers.geoInfo) {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)'
        ctx.lineWidth = 1
        for (let lat = 8; lat <= 22; lat += 2) {
          const p1 = projectTerrain3D(
            lat,
            102.0,
            0,
            yawDeg,
            pitchDeg,
            scale,
            cx,
            cy
          )
          const p2 = projectTerrain3D(
            lat,
            119.5,
            0,
            yawDeg,
            pitchDeg,
            scale,
            cx,
            cy
          )
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
        for (let lng = 104; lng <= 118; lng += 2) {
          const p1 = projectTerrain3D(
            6.0,
            lng,
            0,
            yawDeg,
            pitchDeg,
            scale,
            cx,
            cy
          )
          const p2 = projectTerrain3D(
            23.5,
            lng,
            0,
            yawDeg,
            pitchDeg,
            scale,
            cx,
            cy
          )
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }

      // Khối nổi địa hình Đất liền Việt Nam (Z = +0.09)
      ctx.beginPath()
      VIETNAM_MAINLAND_COORDS.forEach(([lat, lng], idx) => {
        const pt = projectTerrain3D(
          lat,
          lng,
          0.09,
          yawDeg,
          pitchDeg,
          scale,
          cx,
          cy
        )
        if (idx === 0) ctx.moveTo(pt.x, pt.y)
        else ctx.lineTo(pt.x, pt.y)
      })
      ctx.closePath()
      ctx.fillStyle = 'rgba(30, 64, 104, 0.95)'
      ctx.fill()
      ctx.strokeStyle = '#29B4D1'
      ctx.lineWidth = 2
      ctx.stroke()

      // Khối thềm san hô ngầm Quần đảo Hoàng Sa & Trường Sa
      const drawSubmarinePlatform = (lat, lng, rxDeg, ryDeg, label) => {
        ctx.beginPath()
        for (let a = 0; a <= 360; a += 15) {
          const rad = a * DEG_TO_RAD
          const pLat = lat + Math.sin(rad) * ryDeg
          const pLng = lng + Math.cos(rad) * rxDeg
          const pt = projectTerrain3D(
            pLat,
            pLng,
            0.04,
            yawDeg,
            pitchDeg,
            scale,
            cx,
            cy
          )
          if (a === 0) ctx.moveTo(pt.x, pt.y)
          else ctx.lineTo(pt.x, pt.y)
        }
        ctx.closePath()
        ctx.fillStyle = 'rgba(41, 180, 209, 0.2)'
        ctx.fill()
        ctx.strokeStyle = '#29B4D1'
        ctx.setLineDash([5, 4])
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.setLineDash([])
        if (label) {
          const centerPt = projectTerrain3D(
            lat - ryDeg - 0.5,
            lng,
            0.04,
            yawDeg,
            pitchDeg,
            scale,
            cx,
            cy
          )
          ctx.font = '800 10px sans-serif'
          const lblWidth = ctx.measureText(label).width
          ctx.fillStyle = 'rgba(17, 55, 71, 0.9)'
          ctx.fillRect(centerPt.x - lblWidth / 2 - 6, centerPt.y - 11, lblWidth + 12, 16)
          ctx.strokeStyle = 'rgba(41, 180, 209, 0.6)'
          ctx.lineWidth = 1
          ctx.strokeRect(centerPt.x - lblWidth / 2 - 6, centerPt.y - 11, lblWidth + 12, 16)
          ctx.fillStyle = '#29B4D1'
          ctx.textAlign = 'center'
          ctx.fillText(label, centerPt.x, centerPt.y)
        }
      }

      drawSubmarinePlatform(16.4, 111.8, 1.3, 0.9, 'NỀN SAN HÔ HOÀNG SA')
      drawSubmarinePlatform(9.8, 113.8, 2.4, 1.6, 'NỀN SAN HÔ TRƯỜNG SA')

      // Các trụ cột mốc 3D cho từng địa danh
      if (layers.islands) {
        markers.forEach((m) => {
          const isSelected = m.id === selectedMarkerId
          const isMajor = m.markerType === 'major-gold'
          const zHeight = isMajor ? 0.26 : isSelected ? 0.22 : 0.15

          const basePt = projectTerrain3D(
            m.lat,
            m.lng,
            0.02,
            yawDeg,
            pitchDeg,
            scale,
            cx,
            cy
          )
          const topPt = projectTerrain3D(
            m.lat,
            m.lng,
            zHeight,
            yawDeg,
            pitchDeg,
            scale,
            cx,
            cy
          )

          // Trụ đứng 3D
          ctx.beginPath()
          ctx.moveTo(basePt.x, basePt.y)
          ctx.lineTo(topPt.x, topPt.y)
          ctx.strokeStyle = isSelected ? '#B6E0EB' : '#29B4D1'
          ctx.lineWidth = isSelected ? 3 : 1.8
          ctx.stroke()

          // Đỉnh mốc
          const r = isMajor ? 8.5 : isSelected ? 8 : 5.5
          ctx.beginPath()
          ctx.arc(topPt.x, topPt.y, r, 0, Math.PI * 2)
          ctx.fillStyle = isSelected
            ? '#29B4D1'
            : isMajor
            ? '#29B4D1'
            : m.markerType === 'dk1-amber'
            ? '#1A718D'
            : '#29B4D1'
          ctx.fill()
          ctx.strokeStyle = '#B6E0EB'
          ctx.lineWidth = isSelected ? 2.2 : 1.6
          ctx.stroke()

          if (layers.placeNames && (isMajor || isSelected || zoom3D >= 1.2)) {
            ctx.font = `${isMajor || isSelected ? '800 10.5px' : '700 9.5px'} sans-serif`
            const textWidth = ctx.measureText(m.name).width
            const boxX = topPt.x - textWidth / 2 - 6
            const boxY = topPt.y - r - 20
            const boxW = textWidth + 12
            const boxH = 17

            ctx.fillStyle = isSelected
              ? '#29B4D1'
              : 'rgba(17, 55, 71, 0.92)'
            ctx.fillRect(boxX, boxY, boxW, boxH)
            ctx.strokeStyle = isSelected ? '#B6E0EB' : '#29B4D1'
            ctx.lineWidth = 1
            ctx.strokeRect(boxX, boxY, boxW, boxH)

            ctx.fillStyle = isSelected
              ? '#113747'
              : isMajor
              ? '#29B4D1'
              : '#B6E0EB'
            ctx.textAlign = 'center'
            ctx.fillText(m.name, topPt.x, topPt.y - r - 8)
          }

          nextHitTargets.push({
            marker: m,
            x: topPt.x,
            y: topPt.y,
            r: Math.max(14, r + 6)
          })
        })
      }
    }

    hitTargetsRef.current = nextHitTargets
    ctx.restore()
  }, [
    subMode3D,
    centerLat,
    centerLng,
    yawDeg,
    pitchDeg,
    zoom3D,
    markers,
    selectedMarkerId,
    layers
  ])

  useEffect(() => {
    drawScene()
    const handleResize = () => drawScene()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [drawScene])

  const handlePointerDown = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    setIsDragging(true)
    setAutoSpin(false)
    dragRef.current = {
      startX: clientX,
      startY: clientY,
      initLng: centerLng,
      initLat: centerLat,
      initYaw: yawDeg,
      initPitch: pitchDeg,
      moved: false
    }
  }

  const handlePointerMove = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    const localX = clientX - rect.left
    const localY = clientY - rect.top

    if (!isDragging) {
      const hit = hitTargetsRef.current.find(
        (t) => Math.hypot(t.x - localX, t.y - localY) <= t.r
      )
      setHoveredMarkerName(hit ? hit.marker.name : null)
      return
    }

    const dx = clientX - dragRef.current.startX
    const dy = clientY - dragRef.current.startY
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      dragRef.current.moved = true
    }

    if (subMode3D === 'globe') {
      const nextLng = dragRef.current.initLng - dx * 0.25
      const nextLat = Math.max(
        -55,
        Math.min(65, dragRef.current.initLat + dy * 0.22)
      )
      setCenterLng(Math.round(nextLng * 100) / 100)
      setCenterLat(Math.round(nextLat * 100) / 100)
    } else {
      const nextYaw = (dragRef.current.initYaw + dx * 0.45) % 360
      const nextPitch = Math.max(
        25,
        Math.min(78, dragRef.current.initPitch - dy * 0.25)
      )
      setYawDeg(Math.round(nextYaw * 10) / 10)
      setPitchDeg(Math.round(nextPitch * 10) / 10)
    }
  }

  const handlePointerUp = (e) => {
    if (!dragRef.current.moved && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const clientX = e.changedTouches
        ? e.changedTouches[0].clientX
        : e.clientX
      const clientY = e.changedTouches
        ? e.changedTouches[0].clientY
        : e.clientY
      const localX = clientX - rect.left
      const localY = clientY - rect.top

      const hit = hitTargetsRef.current.find(
        (t) => Math.hypot(t.x - localX, t.y - localY) <= t.r
      )
      if (hit && onSelectMarker) {
        onSelectMarker(hit.marker, false)
      }
    }
    setIsDragging(false)
  }

  return (
    <div className="east-sea-3d-wrapper">
      {/* Top 3D Sub-Mode & Telemetry Bar */}
      <div className="map3d-top-hud">
        <div className="map3d-submode-pills">
          <button
            type="button"
            className="submode3d-btn active"
            onClick={() => onChangeSubMode3D && onChangeSubMode3D('terrain')}
          >
            <Layers size={15} />
            <span>Sa bàn Địa hình Biển 3D</span>
          </button>
        </div>

        <div className="map3d-telemetry-text">
          <Compass size={15} />
          <span>
            Góc xoay 3D: <strong>Yaw {Math.round(yawDeg)}° • Pitch {Math.round(pitchDeg)}°</strong> • Phóng đại: {Math.round(zoom3D * 100)}%
          </span>
        </div>

        <div className="map3d-action-btns">
          <button
            type="button"
            className={`map3d-ctrl-btn ${autoSpin ? 'active' : ''}`}
            onClick={() => setAutoSpin((s) => !s)}
          >
            {autoSpin ? <Pause size={14} /> : <Play size={14} />}
            <span>{autoSpin ? 'Dừng xoay' : 'Tự xoay 3D'}</span>
          </button>
          <button
            type="button"
            className="map3d-ctrl-btn"
            onClick={() => setZoom3D((z) => Math.min(2.4, +(z + 0.2).toFixed(2)))}
            title="Phóng to 3D"
          >
            <ZoomIn size={15} />
          </button>
          <button
            type="button"
            className="map3d-ctrl-btn"
            onClick={() => setZoom3D((z) => Math.max(0.8, +(z - 0.2).toFixed(2)))}
            title="Thu nhỏ 3D"
          >
            <ZoomOut size={15} />
          </button>
          <button
            type="button"
            className="map3d-ctrl-btn"
            onClick={handleReset3D}
            title="Đặt lại góc nhìn 3D"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Interactive HTML5 3D Canvas */}
      <div className="map3d-canvas-stage">
        <canvas
          ref={canvasRef}
          className={`east-sea-3d-canvas ${isDragging ? 'dragging' : ''}`}
          style={{ cursor: hoveredMarkerName ? 'pointer' : isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        />

        {hoveredMarkerName && (
          <div className="map3d-hover-tooltip">
            <span>Nhấn để xem chi tiết: </span>
            <strong>{hoveredMarkerName}</strong>
          </div>
        )}

        <div className="map3d-honesty-banner">
          <Info size={14} />
          <span>
            Mô hình 3D dựng từ dữ liệu tọa độ địa lý chuẩn WGS84; độ cao cột mốc và thềm lục địa được phóng đại tỷ lệ đứng để phục vụ quan sát trực quan (không làm giả dữ liệu địa hình).
          </span>
        </div>
      </div>
    </div>
  )
}
