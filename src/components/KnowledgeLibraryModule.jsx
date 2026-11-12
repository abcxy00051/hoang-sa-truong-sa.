import React, { useState, useMemo, useEffect, useRef } from 'react'
import {
  Search,
  BookOpen,
  ScrollText,
  Scale,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Clock,
  ExternalLink,
  Filter,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Award,
  FileText,
  List,
  Check,
  X,
  Map,
  BarChart3,
  Table2,
  Network,
  Info,
  Layers
} from 'lucide-react'
import {
  LIBRARY_THEMATIC_MODULES,
  ALL_LIBRARY_LESSONS,
  LIBRARY_GRADES
} from '../data/libraryData.js'
import {
  getCurrentUser,
  getUserProgressBundle,
  saveUserLibraryProgress,
  AUTH_EVENT_NAME
} from '../utils/authClassroomService'

const MODULE_ICONS = {
  Compass,
  ScrollText,
  Scale,
  Map,
  BarChart3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  BookOpen
}

export default function KnowledgeLibraryModule() {
  const [selectedTopicId, setSelectedTopicId] = useState('all')
  const [selectedGrade, setSelectedGrade] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all') // 'all' | 'unread' | 'completed' | 'saved'
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLessonId, setActiveLessonId] = useState(null)
  const [savedLessonIds, setSavedLessonIds] = useState(() => {
    try {
      const user = getCurrentUser()
      if (user) {
        const bundle = getUserProgressBundle(user.id)
        if (Array.isArray(bundle?.savedLessonIds)) return bundle.savedLessonIds
      }
      const raw = localStorage.getItem('biendao_saved_lessons_v2')
      return raw ? JSON.parse(raw) : ['cd01-bai-01', 'cd02-bai-01', 'cd03-bai-02']
    } catch {
      return ['cd01-bai-01', 'cd02-bai-01', 'cd03-bai-02']
    }
  })
  const [completedLessonIds, setCompletedLessonIds] = useState(() => {
    try {
      const user = getCurrentUser()
      if (user) {
        const bundle = getUserProgressBundle(user.id)
        if (Array.isArray(bundle?.completedLessonIds))
          return bundle.completedLessonIds
      }
      const raw = localStorage.getItem('biendao_completed_lessons_v2')
      return raw ? JSON.parse(raw) : ['cd01-bai-01']
    } catch {
      return ['cd01-bai-01']
    }
  })
  const [showSavedShelf, setShowSavedShelf] = useState(false)
  const [readerFontSize, setReaderFontSize] = useState('normal') // 'normal' | 'large'

  // State cho bài tập trắc nghiệm cuối mỗi bài học
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const readerTopRef = useRef(null)
  const directorySectionRef = useRef(null)

  useEffect(() => {
    const handleAuthSync = () => {
      const user = getCurrentUser()
      if (user) {
        const bundle = getUserProgressBundle(user.id)
        if (Array.isArray(bundle?.savedLessonIds)) {
          setSavedLessonIds(bundle.savedLessonIds)
        }
        if (Array.isArray(bundle?.completedLessonIds)) {
          setCompletedLessonIds(bundle.completedLessonIds)
        }
      }
    }
    window.addEventListener(AUTH_EVENT_NAME, handleAuthSync)
    return () => window.removeEventListener(AUTH_EVENT_NAME, handleAuthSync)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('biendao_saved_lessons_v2', JSON.stringify(savedLessonIds))
      saveUserLibraryProgress({ savedLessonIds, completedLessonIds })
    } catch {
      // ignore storage errors
    }
  }, [savedLessonIds])

  useEffect(() => {
    try {
      localStorage.setItem(
        'biendao_completed_lessons_v2',
        JSON.stringify(completedLessonIds)
      )
      saveUserLibraryProgress({ savedLessonIds, completedLessonIds })
    } catch {
      // ignore storage errors
    }
  }, [completedLessonIds])

  // Tìm bài học đang mở ở chế độ đọc chuyên sâu
  const activeLesson = useMemo(() => {
    if (!activeLessonId) return null
    return ALL_LIBRARY_LESSONS.find((l) => l.id === activeLessonId) || null
  }, [activeLessonId])

  // Tìm bài trước / bài tiếp theo để điều hướng liền mạch
  const { prevLesson, nextLesson } = useMemo(() => {
    if (!activeLesson) return { prevLesson: null, nextLesson: null }
    const idx = ALL_LIBRARY_LESSONS.findIndex((l) => l.id === activeLesson.id)
    return {
      prevLesson: idx > 0 ? ALL_LIBRARY_LESSONS[idx - 1] : null,
      nextLesson:
        idx >= 0 && idx < ALL_LIBRARY_LESSONS.length - 1
          ? ALL_LIBRARY_LESSONS[idx + 1]
          : null
    }
  }, [activeLesson])

  // Gợi ý bài đọc liên quan (cùng chuyên đề + chuyên đề liên đới)
  const relatedLessons = useMemo(() => {
    if (!activeLesson) return []
    const sameTopic = ALL_LIBRARY_LESSONS.filter(
      (l) => l.topicId === activeLesson.topicId && l.id !== activeLesson.id
    )
    const sameGradeOtherTopic = ALL_LIBRARY_LESSONS.filter(
      (l) =>
        l.topicId !== activeLesson.topicId &&
        (l.gradeId === activeLesson.gradeId || l.topicOrder === activeLesson.topicOrder + 1)
    ).slice(0, 2)
    return [...sameTopic, ...sameGradeOtherTopic].slice(0, 4)
  }, [activeLesson])

  // Lọc danh sách chuyên đề và bài học theo từ khóa, chuyên đề, khối lớp và trạng thái đọc
  const filteredModules = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()

    return LIBRARY_THEMATIC_MODULES.filter((mod) => {
      if (selectedTopicId !== 'all' && mod.id !== selectedTopicId) return false
      return true
    })
      .map((mod) => {
        const matchingLessons = mod.lessons.filter((lesson) => {
          const matchGrade =
            selectedGrade === 'all' || lesson.gradeId === selectedGrade
          const matchStatus =
            statusFilter === 'all' ||
            (statusFilter === 'completed' && completedLessonIds.includes(lesson.id)) ||
            (statusFilter === 'unread' && !completedLessonIds.includes(lesson.id)) ||
            (statusFilter === 'saved' && savedLessonIds.includes(lesson.id))

          const matchQuery =
            !q ||
            lesson.title.toLowerCase().includes(q) ||
            lesson.shortDesc.toLowerCase().includes(q) ||
            lesson.lessonNumber.toLowerCase().includes(q) ||
            lesson.topicTitle.toLowerCase().includes(q) ||
            lesson.knowledgeSections.some(
              (sec) =>
                sec.heading.toLowerCase().includes(q) ||
                sec.paragraphs.some((p) => p.toLowerCase().includes(q))
            ) ||
            lesson.analysisAndTerms.some(
              (t) =>
                t.term.toLowerCase().includes(q) ||
                t.explanation.toLowerCase().includes(q)
            )
          return matchGrade && matchStatus && matchQuery
        })

        return {
          ...mod,
          filteredLessons: matchingLessons
        }
      })
      .filter((mod) => mod.filteredLessons.length > 0)
  }, [selectedTopicId, selectedGrade, statusFilter, searchQuery, completedLessonIds, savedLessonIds])

  const savedLessonsList = useMemo(() => {
    return ALL_LIBRARY_LESSONS.filter((l) => savedLessonIds.includes(l.id))
  }, [savedLessonIds])

  const totalLessonsCount = ALL_LIBRARY_LESSONS.length
  const totalCompletedCount = completedLessonIds.length
  const progressPercentage = Math.round(
    (totalCompletedCount / Math.max(1, totalLessonsCount)) * 100
  )
  const totalEstimatedMinutes = useMemo(() => {
    return LIBRARY_THEMATIC_MODULES.reduce((sum, m) => sum + m.totalReadingMinutes, 0)
  }, [])

  const toggleSaveLesson = (id) => {
    setSavedLessonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const toggleCompleteLesson = (id) => {
    setCompletedLessonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleOpenLesson = (lessonId) => {
    setActiveLessonId(lessonId)
    setQuizAnswers({})
    setQuizSubmitted(false)
    setTimeout(() => {
      if (readerTopRef.current) {
        readerTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 60)
  }

  const handleExploreModule = (topicId) => {
    setSelectedTopicId(topicId)
    setActiveLessonId(null)
    setTimeout(() => {
      const targetEl = document.getElementById(`module-sec-${topicId}`)
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (directorySectionRef.current) {
        directorySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)
  }

  const handleSelectQuizOption = (qIndex, optIndex) => {
    if (quizSubmitted) return
    setQuizAnswers((prev) => ({
      ...prev,
      [qIndex]: optIndex
    }))
  }

  const handleSubmitQuiz = () => {
    if (!activeLesson) return
    setQuizSubmitted(true)
    if (!completedLessonIds.includes(activeLesson.id)) {
      setCompletedLessonIds((prev) => [...prev, activeLesson.id])
    }
  }

  const scrollToReaderSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Render Đồ họa học thuật (Sơ đồ tư duy, Infographic lịch sử, Biểu đồ kinh tế biển, Sơ đồ địa lý, Hệ sinh thái)
  const renderAcademicVisualSection = (visual) => {
    if (!visual) return null
    const isAtollDiagram =
      visual.visualType === 'geographicalDiagram' &&
      visual.zones?.[0]?.code?.includes('TẦNG')
    const isFiveMaritimeZones =
      visual.visualType === 'geographicalDiagram' &&
      visual.zones?.length === 5

    return (
      <section id="sec-academic-visual" className="reader-block lib-visual-block">
        <div className="lib-visual-header">
          <div className="lib-visual-badge-row">
            <span className="lib-visual-type-badge">
              <Network size={14} />
              <span>{visual.visualBadge}</span>
            </span>
            <span className="lib-visual-verify-pill">
              Đồ họa học thuật chuẩn hóa • Đối chiếu tư liệu pháp lý &amp; khoa học
            </span>
          </div>
          <h2>III. Đồ họa học thuật &amp; Sơ đồ trực quan</h2>
          <h3 className="lib-visual-title">{visual.visualTitle}</h3>
          <p className="lib-visual-subtitle">{visual.visualSubtitle}</p>
        </div>

        {/* 1. SƠ ĐỒ ĐỊA LÝ / MẶT CẮT VÙNG BIỂN / ĐỊA CHẤT ATOLL / PHÂN KHU ĐỊA LÝ – HẢI VĂN */}
        {visual.visualType === 'geographicalDiagram' && visual.zones && (
          <div className="lib-geo-diagram-wrapper">
            <div className="lib-svg-schematic-frame">
              {isFiveMaritimeZones ? (
                <svg
                  viewBox="0 0 860 280"
                  className="lib-interactive-schematic-svg"
                  role="img"
                  aria-label="Sơ đồ mặt cắt ngang 5 vùng biển Việt Nam theo UNCLOS 1982"
                >
                  <rect width="860" height="280" rx="14" fill="#113747" />
                  <rect x="24" y="16" width="286" height="28" rx="6" fill="#29B4D1" />
                  <text x="167" y="34" textAnchor="middle" fill="#113747" fontSize="11.5" fontWeight="900">
                    CHỦ QUYỀN QUỐC GIA HOÀN TOÀN, ĐẦY ĐỦ
                  </text>
                  <rect x="318" y="16" width="518" height="28" rx="6" fill="#1A718D" stroke="#29B4D1" strokeWidth="1.2" />
                  <text x="577" y="34" textAnchor="middle" fill="#B6E0EB" fontSize="11.5" fontWeight="800">
                    QUYỀN CHỦ QUYỀN &amp; QUYỀN TÀI PHÁN QUỐC GIA (UNCLOS 1982 &amp; LUẬT BIỂN 2012)
                  </text>

                  <line x1="168" y1="62" x2="820" y2="62" stroke="#29B4D1" strokeWidth="2" />
                  <circle cx="168" cy="62" r="5" fill="#B6E0EB" />
                  <circle cx="310" cy="62" r="5" fill="#29B4D1" />
                  <circle cx="452" cy="62" r="5" fill="#29B4D1" />
                  <circle cx="668" cy="62" r="5" fill="#29B4D1" />
                  <circle cx="820" cy="62" r="5" fill="#B6E0EB" />
                  <text x="168" y="55" textAnchor="middle" fill="#B6E0EB" fontSize="10" fontWeight="800">Đường cơ sở (0 HL)</text>
                  <text x="310" y="55" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="800">12 Hải lý</text>
                  <text x="452" y="55" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="800">24 Hải lý</text>
                  <text x="668" y="55" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="800">200 Hải lý (EEZ)</text>
                  <text x="795" y="55" textAnchor="middle" fill="#B6E0EB" fontSize="10" fontWeight="800">Đến 350 HL</text>

                  <rect x="24" y="74" width="140" height="128" rx="8" fill="#B6E0EB" />
                  <text x="94" y="96" textAnchor="middle" fill="#113747" fontSize="12" fontWeight="900">1. NỘI THỦY</text>
                  <text x="94" y="114" textAnchor="middle" fill="#1A718D" fontSize="10" fontWeight="800">Trong Đường cơ sở</text>
                  <text x="94" y="134" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="700">Chủ quyền hoàn toàn,</text>
                  <text x="94" y="149" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="700">tuyệt đối như đất liền</text>
                  <text x="94" y="186" textAnchor="middle" fill="#1A718D" fontSize="10" fontWeight="900">Điều 9–10 Luật Biển</text>

                  <rect x="170" y="74" width="136" height="128" rx="8" fill="#1A718D" stroke="#29B4D1" strokeWidth="1.5" />
                  <text x="238" y="96" textAnchor="middle" fill="#B6E0EB" fontSize="12" fontWeight="900">2. LÃNH HẢI</text>
                  <text x="238" y="114" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="800">0 → 12 Hải lý</text>
                  <text x="238" y="134" textAnchor="middle" fill="#B6E0EB" fontSize="10" fontWeight="600">Biên giới quốc gia</text>
                  <text x="238" y="149" textAnchor="middle" fill="#B6E0EB" fontSize="10" fontWeight="600">trên biển • Đi qua</text>
                  <text x="238" y="164" textAnchor="middle" fill="#B6E0EB" fontSize="10" fontWeight="600">không gây hại</text>
                  <text x="238" y="186" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="800">Điều 11–12 Luật Biển</text>

                  <rect x="312" y="74" width="136" height="128" rx="8" fill="#1A718D" stroke="#B6E0EB" strokeWidth="1.2" />
                  <text x="380" y="96" textAnchor="middle" fill="#B6E0EB" fontSize="12" fontWeight="900">3. TIẾP GIÁP</text>
                  <text x="380" y="114" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="800">12 → 24 Hải lý</text>
                  <text x="380" y="134" textAnchor="middle" fill="#B6E0EB" fontSize="10" fontWeight="600">Kiểm soát hải quan,</text>
                  <text x="380" y="149" textAnchor="middle" fill="#B6E0EB" fontSize="10" fontWeight="600">thuế, y tế, di cư</text>
                  <text x="380" y="186" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="800">Điều 13–14 Luật Biển</text>

                  <rect x="454" y="74" width="210" height="128" rx="8" fill="#29B4D1" />
                  <text x="559" y="96" textAnchor="middle" fill="#113747" fontSize="12" fontWeight="900">4. VÙNG ĐẶC QUYỀN KINH TẾ (EEZ)</text>
                  <text x="559" y="114" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="800">Rộng 200 Hải lý tính từ Đường cơ sở</text>
                  <text x="559" y="134" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="700">Quyền chủ quyền kinh tế (thăm dò, khai thác)</text>
                  <text x="559" y="149" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="700">&amp; Quyền tài phán (đảo nhân tạo, NCKH, môi trường)</text>
                  <text x="559" y="186" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="900">Điều 56, 58 UNCLOS • Điều 15–16 Luật Biển</text>

                  <rect x="670" y="74" width="166" height="128" rx="8" fill="#B6E0EB" />
                  <text x="753" y="96" textAnchor="middle" fill="#113747" fontSize="12" fontWeight="900">5. THỀM LỤC ĐỊA</text>
                  <text x="753" y="114" textAnchor="middle" fill="#1A718D" fontSize="10" fontWeight="800">200 → tối đa 350 HL</text>
                  <text x="753" y="134" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="700">Đáy biển &amp; lòng đất</text>
                  <text x="753" y="149" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="700">dưới đáy biển • Đặc</text>
                  <text x="753" y="164" textAnchor="middle" fill="#113747" fontSize="10" fontWeight="700">quyền khoan &amp; dầu khí</text>
                  <text x="753" y="186" textAnchor="middle" fill="#1A718D" fontSize="10" fontWeight="900">Điều 76, 77 UNCLOS</text>

                  <path d="M24 214 L306 220 L664 234 L836 250 L836 264 L24 264 Z" fill="#1A718D" stroke="#29B4D1" strokeWidth="1.5" />
                  <text x="430" y="252" textAnchor="middle" fill="#B6E0EB" fontSize="11" fontWeight="800">
                    MẶT CẮT ĐÁY BIỂN &amp; LÒNG ĐẤT DƯỚI ĐÁY BIỂN (1 HẢI LÝ QUỐC TẾ = 1.852 MÉT)
                  </text>
                </svg>
              ) : isAtollDiagram ? (
                <svg
                  viewBox="0 0 860 270"
                  className="lib-interactive-schematic-svg"
                  role="img"
                  aria-label="Mặt cắt địa chất đảo san hô vòng Atoll"
                >
                  <rect width="860" height="270" rx="14" fill="#113747" />
                  <text x="430" y="28" textAnchor="middle" fill="#29B4D1" fontSize="12.5" fontWeight="900">
                    MẶT CẮT ĐỊA CHẤT CẤU TRÚC ĐẢO SAN HÔ VÒNG (ATOLL) &amp; 8 CỤM ĐẢO TRƯỜNG SA
                  </text>
                  <line x1="40" y1="126" x2="820" y2="126" stroke="#29B4D1" strokeWidth="2" strokeDasharray="6 4" />
                  <text x="814" y="118" textAnchor="end" fill="#29B4D1" fontSize="10.5" fontWeight="800">
                    Mực nước biển trung bình (0m)
                  </text>
                  <path d="M90 250 L210 158 L650 158 L770 250 Z" fill="#455C68" stroke="#B6E0EB" strokeWidth="1.4" />
                  <text x="430" y="226" textAnchor="middle" fill="#B6E0EB" fontSize="12" fontWeight="800">
                    TẦNG 4: SƯỜN DỐC RẠN &amp; NỀN NÚI LỬA NGẦM CỔ ĐÁY BIỂN SÂU (&gt;1.000m – 4.000m)
                  </text>
                  <path d="M210 158 L238 114 L346 114 L366 150 L494 150 L514 114 L622 114 L650 158 Z" fill="#1A718D" stroke="#29B4D1" strokeWidth="1.8" />
                  <path d="M350 126 L366 150 L494 150 L510 126 Z" fill="#29B4D1" fillOpacity="0.45" />
                  <text x="430" y="143" textAnchor="middle" fill="#B6E0EB" fontSize="11" fontWeight="800">
                    TẦNG 3: VỤNG BIỂN (LAGOON 15–50m)
                  </text>
                  <path d="M250 114 Q292 86 334 114 Z" fill="#B6E0EB" />
                  <ellipse cx="292" cy="121" rx="28" ry="8" fill="#29B4D1" />
                  <text x="292" y="68" textAnchor="middle" fill="#B6E0EB" fontSize="11" fontWeight="800">
                    TẦNG 1: ĐẢO NỔI SAN HÔ (2–6m)
                  </text>
                  <text x="292" y="83" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="700">
                    Thấu kính nước ngọt &amp; Cây phong ba, bàng vuông
                  </text>
                  <text x="578" y="74" textAnchor="middle" fill="#B6E0EB" fontSize="11" fontWeight="800">
                    TẦNG 2: VÀNH ĐÁ SAN HÔ (0–3m)
                  </text>
                  <text x="578" y="89" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="700">
                    Đê chắn sóng tự nhiên bảo vệ đảo &amp; vụng biển
                  </text>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 860 220"
                  className="lib-interactive-schematic-svg"
                  role="img"
                  aria-label={visual.visualTitle}
                >
                  <rect width="860" height="220" rx="14" fill="#113747" />
                  <text x="430" y="28" textAnchor="middle" fill="#29B4D1" fontSize="12" fontWeight="900">
                    {visual.visualTitle.slice(0, 86).toUpperCase()}
                  </text>
                  {visual.zones.slice(0, 4).map((z, idx) => {
                    const x = 22 + idx * 206
                    const isEven = idx % 2 === 0
                    return (
                      <g key={idx}>
                        <rect
                          x={x}
                          y="44"
                          width="196"
                          height="154"
                          rx="12"
                          fill={isEven ? '#B6E0EB' : '#1A718D'}
                          stroke="#29B4D1"
                          strokeWidth="1.6"
                        />
                        <rect
                          x={x + 12}
                          y="56"
                          width="172"
                          height="24"
                          rx="6"
                          fill={isEven ? '#113747' : '#29B4D1'}
                        />
                        <text
                          x={x + 98}
                          y="72"
                          textAnchor="middle"
                          fill={isEven ? '#29B4D1' : '#113747'}
                          fontSize="10"
                          fontWeight="900"
                        >
                          {z.code} • {z.depthLabel.slice(0, 20)}
                        </text>
                        <text
                          x={x + 98}
                          y="102"
                          textAnchor="middle"
                          fill={isEven ? '#113747' : '#B6E0EB'}
                          fontSize="10.5"
                          fontWeight="800"
                        >
                          {z.name.slice(0, 28)}
                        </text>
                        <text
                          x={x + 98}
                          y="122"
                          textAnchor="middle"
                          fill={isEven ? '#455C68' : '#B6E0EB'}
                          fontSize="9.5"
                          fontWeight="700"
                        >
                          {z.range.slice(0, 32)}
                        </text>
                        <rect
                          x={x + 14}
                          y="156"
                          width="168"
                          height="28"
                          rx="6"
                          fill="#113747"
                        />
                        <text
                          x={x + 98}
                          y="174"
                          textAnchor="middle"
                          fill="#29B4D1"
                          fontSize="9.5"
                          fontWeight="800"
                        >
                          {z.depthLabel.slice(0, 28)}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              )}
            </div>

            <div className="lib-geo-diagram-grid">
              {visual.zones.map((z, idx) => (
                <div key={idx} className="lib-geo-zone-card">
                  <div className="lib-geo-zone-top">
                    <span className="lib-geo-zone-code">{z.code}</span>
                    <span className="lib-geo-zone-depth">{z.depthLabel}</span>
                  </div>
                  <h4>{z.name}</h4>
                  <p className="lib-geo-zone-range">
                    <strong>Phạm vi không gian:</strong> {z.range}
                  </p>
                  <p className="lib-geo-zone-regime">{z.regime}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. INFOGRAPHIC LỊCH SỬ / THIẾT CHẾ BIỂN ĐẢO */}
        {visual.visualType === 'historicalInfographic' && visual.milestones && (
          <div className="lib-infographic-wrapper">
            <div className="lib-svg-schematic-frame">
              <svg
                viewBox="0 0 860 155"
                className="lib-interactive-schematic-svg"
                role="img"
                aria-label={visual.visualTitle}
              >
                <rect width="860" height="155" rx="14" fill="#113747" />
                <text x="430" y="24" textAnchor="middle" fill="#29B4D1" fontSize="11.5" fontWeight="900">
                  {visual.visualTitle.slice(0, 88).toUpperCase()}
                </text>
                <line x1="115" y1="88" x2="745" y2="88" stroke="#29B4D1" strokeWidth="3" />
                {visual.milestones.slice(0, 4).map((m, idx) => {
                  const cx = 115 + idx * 210
                  return (
                    <g key={idx}>
                      <rect
                        x={cx - 92}
                        y="38"
                        width="184"
                        height="98"
                        rx="10"
                        fill={idx % 2 === 0 ? '#1A718D' : '#B6E0EB'}
                        stroke="#29B4D1"
                        strokeWidth="1.5"
                      />
                      <rect
                        x={cx - 78}
                        y="48"
                        width="156"
                        height="22"
                        rx="6"
                        fill="#113747"
                      />
                      <text
                        x={cx}
                        y="63"
                        textAnchor="middle"
                        fill="#29B4D1"
                        fontSize="9.5"
                        fontWeight="800"
                      >
                        0{idx + 1} • {m.period.slice(0, 22)}
                      </text>
                      <text
                        x={cx}
                        y="92"
                        textAnchor="middle"
                        fill={idx % 2 === 0 ? '#B6E0EB' : '#113747'}
                        fontSize="10"
                        fontWeight="800"
                      >
                        {m.title.slice(0, 26)}...
                      </text>
                      <text
                        x={cx}
                        y="114"
                        textAnchor="middle"
                        fill={idx % 2 === 0 ? '#29B4D1' : '#1A718D'}
                        fontSize="9"
                        fontWeight="700"
                      >
                        {m.primarySource.slice(0, 28)}...
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="lib-infographic-timeline">
              {visual.milestones.map((m, idx) => (
                <div key={idx} className="lib-infographic-step">
                  <div className="lib-infographic-marker">
                    <span className="lib-step-num">0{idx + 1}</span>
                    {idx < visual.milestones.length - 1 && (
                      <span className="lib-step-connector" aria-hidden="true" />
                    )}
                  </div>
                  <div className="lib-infographic-body">
                    <span className="lib-step-period">{m.period}</span>
                    <h4>{m.title}</h4>
                    <p>{m.detail}</p>
                    <div className="lib-step-source">
                      <strong>Tư liệu gốc đối chiếu:</strong> {m.primarySource}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. SƠ ĐỒ TƯ DUY (MINDMAP HỌC THUẬT CÓ ĐƯỜNG NỐI TRỰC QUAN) */}
        {visual.visualType === 'mindmap' && visual.branches && (
          <div className="lib-mindmap-container">
            <div className="lib-svg-schematic-frame">
              <svg
                viewBox="0 0 860 250"
                className="lib-interactive-schematic-svg"
                role="img"
                aria-label={visual.visualTitle}
              >
                <rect width="860" height="250" rx="14" fill="#113747" />
                <path d="M 330 110 C 270 110, 260 58, 220 58" stroke="#29B4D1" strokeWidth="2.2" fill="none" />
                <path d="M 330 140 C 270 140, 260 192, 220 192" stroke="#29B4D1" strokeWidth="2.2" fill="none" />
                <path d="M 530 110 C 590 110, 600 58, 640 58" stroke="#29B4D1" strokeWidth="2.2" fill="none" />
                <path d="M 530 140 C 590 140, 600 192, 640 192" stroke="#29B4D1" strokeWidth="2.2" fill="none" />

                <rect x="316" y="76" width="228" height="98" rx="16" fill="#1A718D" stroke="#29B4D1" strokeWidth="2.5" />
                <rect x="356" y="86" width="148" height="20" rx="10" fill="#29B4D1" />
                <text x="430" y="100" textAnchor="middle" fill="#113747" fontSize="9.5" fontWeight="900">
                  TRUNG TÂM HỆ THỐNG LOGIC
                </text>
                <text x="430" y="128" textAnchor="middle" fill="#B6E0EB" fontSize="11.5" fontWeight="900">
                  {visual.centerNode?.title?.slice(0, 32)}
                </text>
                <text x="430" y="148" textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="700">
                  {visual.centerNode?.subtitle?.slice(0, 36)}
                </text>

                {visual.branches.slice(0, 4).map((br, idx) => {
                  const isLeft = idx % 2 === 0
                  const isTop = idx < 2
                  const bx = isLeft ? 24 : 636
                  const by = isTop ? 24 : 156
                  return (
                    <g key={idx}>
                      <rect
                        x={bx}
                        y={by}
                        width="200"
                        height="70"
                        rx="10"
                        fill="#B6E0EB"
                        stroke="#29B4D1"
                        strokeWidth="1.8"
                      />
                      <rect x={bx + 10} y={by + 10} width="180" height="22" rx="6" fill="#113747" />
                      <text x={bx + 100} y={by + 25} textAnchor="middle" fill="#29B4D1" fontSize="10" fontWeight="800">
                        {br.title.slice(0, 28)}
                      </text>
                      <text x={bx + 100} y={by + 52} textAnchor="middle" fill="#113747" fontSize="9.5" fontWeight="700">
                        {br.items[0]?.slice(0, 29)}...
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="lib-mindmap-branches-grid">
              {visual.branches.map((br, idx) => (
                <div key={idx} className="lib-mindmap-branch-card">
                  <div className="mindmap-branch-head">
                    <span className="mindmap-branch-num">NHÁNH 0{idx + 1}</span>
                    <h4>{br.title}</h4>
                  </div>
                  <ul>
                    {br.items.map((it, i) => (
                      <li key={i}>
                        <Check size={14} className="mindmap-bullet" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. BIỂU ĐỒ KINH TẾ BIỂN (ĐỒ HỌA TRỰC QUAN + THẺ CHỈ SỐ) */}
        {visual.visualType === 'economicChart' && visual.metrics && (
          <div className="lib-econ-visual-wrapper">
            <div className="lib-svg-schematic-frame">
              <svg
                viewBox="0 0 860 230"
                className="lib-interactive-schematic-svg"
                role="img"
                aria-label={visual.visualTitle}
              >
                <rect width="860" height="230" rx="14" fill="#113747" />
                <text x="30" y="28" fill="#29B4D1" fontSize="11.5" fontWeight="900">
                  {visual.visualTitle.slice(0, 90).toUpperCase()}
                </text>
                {visual.metrics.map((item, idx) => {
                  const y = 46 + idx * 29
                  const barW = Math.round((item.progress / 100) * 470)
                  return (
                    <g key={idx}>
                      <text x="30" y={y + 15} fill="#B6E0EB" fontSize="10.5" fontWeight="700">
                        {idx + 1}. {item.sector.slice(0, 36)}
                      </text>
                      <rect x="290" y={y} width="480" height="20" rx="6" fill="#1A718D" />
                      <rect
                        x="290"
                        y={y}
                        width={barW}
                        height="20"
                        rx="6"
                        fill={idx % 2 === 0 ? '#29B4D1' : '#B6E0EB'}
                      />
                      <text
                        x={290 + barW - 10}
                        y={y + 14}
                        textAnchor="end"
                        fill="#113747"
                        fontSize="10"
                        fontWeight="900"
                      >
                        {item.progress}%
                      </text>
                      <text x="782" y={y + 14} fill="#29B4D1" fontSize="10" fontWeight="800">
                        {item.rank}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="lib-econ-chart-wrap">
              {visual.metrics.map((item, idx) => (
                <div key={idx} className="lib-econ-bar-card">
                  <div className="lib-econ-bar-header">
                    <div>
                      <span className="lib-econ-rank">{item.rank}</span>
                      <h4>{item.sector}</h4>
                    </div>
                    <span className="lib-econ-tag">{item.tag}</span>
                  </div>
                  <p className="lib-econ-indicator">{item.indicator}</p>
                  <div className="lib-econ-progress-track">
                    <div
                      className="lib-econ-progress-fill"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. SƠ ĐỒ HỆ SINH THÁI BIỂN & PHÂN VÙNG KHU BẢO TỒN BIỂN */}
        {visual.visualType === 'ecosystemDiagram' && visual.ecosystems && (
          <div className="lib-eco-visual-wrapper">
            <div className="lib-svg-schematic-frame">
              <svg
                viewBox="0 0 860 220"
                className="lib-interactive-schematic-svg"
                role="img"
                aria-label={visual.visualTitle}
              >
                <rect width="860" height="220" rx="14" fill="#113747" />
                <text x="430" y="28" textAnchor="middle" fill="#29B4D1" fontSize="11.5" fontWeight="900">
                  {visual.visualTitle.slice(0, 88).toUpperCase()}
                </text>

                {visual.ecosystems.slice(0, 3).map((eco, idx) => {
                  const x = 28 + idx * 276
                  const isMiddle = idx === 1
                  return (
                    <g key={idx}>
                      <rect
                        x={x}
                        y="46"
                        width="252"
                        height="148"
                        rx="12"
                        fill={isMiddle ? '#1A718D' : '#B6E0EB'}
                        stroke="#29B4D1"
                        strokeWidth="1.8"
                      />
                      <rect
                        x={x + 14}
                        y="58"
                        width="224"
                        height="24"
                        rx="6"
                        fill={isMiddle ? '#29B4D1' : '#113747'}
                      />
                      <text
                        x={x + 126}
                        y="74"
                        textAnchor="middle"
                        fill={isMiddle ? '#113747' : '#29B4D1'}
                        fontSize="10"
                        fontWeight="900"
                      >
                        {eco.name.slice(0, 30).toUpperCase()}
                      </text>
                      <text
                        x={x + 126}
                        y="102"
                        textAnchor="middle"
                        fill={isMiddle ? '#B6E0EB' : '#113747'}
                        fontSize="10"
                        fontWeight="800"
                      >
                        {eco.biodiversity.slice(0, 35)}...
                      </text>
                      <text
                        x={x + 126}
                        y="124"
                        textAnchor="middle"
                        fill={isMiddle ? '#B6E0EB' : '#455C68'}
                        fontSize="9.5"
                        fontWeight="700"
                      >
                        {eco.ecologicalRole.slice(0, 38)}...
                      </text>
                      <rect
                        x={x + 24}
                        y="154"
                        width="204"
                        height="24"
                        rx="6"
                        fill="#113747"
                      />
                      <text
                        x={x + 126}
                        y="170"
                        textAnchor="middle"
                        fill="#29B4D1"
                        fontSize="9.5"
                        fontWeight="800"
                      >
                        {eco.zone.slice(0, 32)}...
                      </text>
                      {idx < 2 && (
                        <line
                          x1={x + 254}
                          y1="120"
                          x2={x + 274}
                          y2="120"
                          stroke="#29B4D1"
                          strokeWidth="3"
                        />
                      )}
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="lib-eco-diagram-grid">
              {visual.ecosystems.map((eco, idx) => (
                <div key={idx} className="lib-eco-card">
                  <h4>{eco.name}</h4>
                  <p className="lib-eco-meta">
                    <strong>Phân bố điển hình:</strong> {eco.zone}
                  </p>
                  <p className="lib-eco-meta">
                    <strong>Đa dạng sinh học:</strong> {eco.biodiversity}
                  </p>
                  <p className="lib-eco-role">
                    <strong>Vai trò sinh thái &amp; bảo vệ đảo:</strong>{' '}
                    {eco.ecologicalRole}
                  </p>
                  <div className="lib-eco-threat">
                    <strong>Nguy cơ cần ngăn chặn:</strong> {eco.threat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    )
  }

  return (
    <div className="knowledge-library-wrapper" ref={readerTopRef}>
      {/* =================================================================
          I. HERO SECTION: THƯ VIỆN TRI THỨC BIỂN ĐẢO
          ================================================================= */}
      <div className="library-hero-banner lib-upgraded-hero">
        <div className="lib-hero-grid">
          <div className="library-hero-content">
            <div className="library-badge-row">
              <span className="library-verified-pill">
                <ShieldCheck size={14} />
                <span>HỌC LIỆU SỐ CHÍNH THỐNG • CHUẨN GDPT 2018 (CẤP THPT)</span>
              </span>
              <span className="library-count-pill">
                8 Chuyên đề • {totalLessonsCount} Bài học chuyên sâu • {totalEstimatedMinutes} phút đọc
              </span>
            </div>

            <h2 className="library-hero-title">THƯ VIỆN TRI THỨC BIỂN ĐẢO</h2>

            <p className="library-hero-subtitle lib-hero-lead-tagline">
              Kết nối lịch sử, địa lý, pháp luật và những câu chuyện về biển đảo Việt Nam.
            </p>

            <p className="library-hero-desc">
              Không gian học liệu số chuyên sâu dành cho học sinh và giáo viên THPT, tích hợp
              tư liệu lịch sử gốc (Châu bản, Mộc bản triều Nguyễn, bản đồ cổ), Công ước Luật Biển
              UNCLOS 1982, Luật Biển Việt Nam 2012 cùng hệ thống sơ đồ tư duy, bảng dữ liệu đối chiếu
              và câu hỏi trắc nghiệm kiểm chứng kiến thức.
            </p>

            {/* Phân biệt rõ 3 lớp thông tin học thuật theo yêu cầu */}
            <div className="lib-academic-legend-row">
              <span className="lib-legend-chip primary">
                <ScrollText size={13} /> Tư liệu gốc có trích dẫn nguồn
              </span>
              <span className="lib-legend-chip visual">
                <Network size={13} /> Đồ họa &amp; Sơ đồ minh họa giáo dục
              </span>
              <span className="lib-legend-chip commentary">
                <Scale size={13} /> Nhận định học thuật &amp; Pháp lý chuẩn
              </span>
            </div>

            {/* Thanh tiến độ đọc & Nút điều hướng nhanh */}
            <div className="lib-hero-progress-strip">
              <div className="lib-progress-info">
                <span>
                  Tiến độ nghiên cứu học liệu: <strong>{totalCompletedCount}/{totalLessonsCount} bài học</strong> ({progressPercentage}%)
                </span>
                <span>Đã lưu yêu thích: <strong>{savedLessonIds.length} bài</strong></span>
              </div>
              <div className="lib-progress-bar-track">
                <div
                  className="lib-progress-bar-fill"
                  style={{ width: `${Math.max(4, progressPercentage)}%` }}
                />
              </div>
            </div>

            <div className="lib-hero-cta-row">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => {
                  setActiveLessonId(null)
                  if (directorySectionRef.current) {
                    directorySectionRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }
                }}
              >
                <BookOpen size={17} />
                <span>Khám phá 8 Chuyên đề Học liệu</span>
              </button>

              <button
                type="button"
                className={`saved-shelf-toggle-btn ${showSavedShelf ? 'active' : ''}`}
                onClick={() => setShowSavedShelf((prev) => !prev)}
              >
                <Bookmark size={16} />
                <span>Tủ sách yêu thích ({savedLessonIds.length})</span>
              </button>
            </div>
          </div>

          {/* Hình ảnh mở đầu kết hợp tư liệu lịch sử, bản đồ và biển đảo */}
          <div className="lib-hero-visual-col">
            <div className="lib-hero-artwork-frame">
              <img
                src="/assets/library/hero-thu-vien-tri-thuc.svg"
                alt="Thư viện Tri thức Biển Đảo – Kết nối lịch sử, địa lý, pháp luật và biển đảo Việt Nam"
                className="lib-hero-artwork-img"
              />
              <div className="lib-hero-artwork-caption">
                <span>
                  Tư liệu Châu bản triều Nguyễn • Bản đồ chủ quyền Hoàng Sa – Trường Sa • UNCLOS 1982
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ngăn kéo Tủ bài học yêu thích đã lưu */}
      {showSavedShelf && (
        <div className="saved-bookshelf-drawer">
          <div className="saved-drawer-header">
            <h4>
              <Bookmark size={17} />
              <span>Tủ bài học yêu thích đã đánh dấu ({savedLessonsList.length})</span>
            </h4>
            <button
              type="button"
              className="close-shelf-btn"
              onClick={() => setShowSavedShelf(false)}
            >
              Đóng tủ sách
            </button>
          </div>
          {savedLessonsList.length === 0 ? (
            <p className="saved-empty-msg">
              Bạn chưa lưu bài học nào. Nhấn nút &ldquo;Yêu thích&rdquo; trên bất kỳ bài học
              nào để lưu vào tủ sách ôn tập nhanh.
            </p>
          ) : (
            <div className="saved-shelf-grid">
              {savedLessonsList.map((item) => (
                <div key={item.id} className="saved-mini-card">
                  <div>
                    <span className="saved-mini-topic">
                      {item.lessonNumber} • {item.topicTitle}
                    </span>
                    <h5>{item.title}</h5>
                  </div>
                  <div className="saved-mini-actions">
                    <button
                      type="button"
                      className="saved-open-btn"
                      onClick={() => handleOpenLesson(item.id)}
                    >
                      Mở bài học
                    </button>
                    <button
                      type="button"
                      className="saved-remove-btn"
                      onClick={() => toggleSaveLesson(item.id)}
                      title="Bỏ lưu"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =================================================================
          IV. TRANG ĐỌC CHI TIẾT (KHI HỌC SINH MỞ 1 BÀI HỌC CHUYÊN SÂU)
          ================================================================= */}
      {activeLesson ? (
        <div className="library-full-reader-container">
          {/* Top Reader Navigation Bar */}
          <div className="reader-top-ActionBar">
            <button
              type="button"
              className="reader-back-btn"
              onClick={() => setActiveLessonId(null)}
            >
              <ArrowLeft size={17} />
              <span>Quay lại Danh mục 8 Chuyên đề</span>
            </button>

            <div className="reader-toolbar-right">
              <div className="reader-font-toggle">
                <span>Cỡ chữ:</span>
                <button
                  type="button"
                  className={readerFontSize === 'normal' ? 'active' : ''}
                  onClick={() => setReaderFontSize('normal')}
                >
                  Chuẩn
                </button>
                <button
                  type="button"
                  className={readerFontSize === 'large' ? 'active' : ''}
                  onClick={() => setReaderFontSize('large')}
                >
                  Lớn (A+)
                </button>
              </div>

              <button
                type="button"
                className={`lib-bookmark-btn ${
                  savedLessonIds.includes(activeLesson.id) ? 'saved' : ''
                }`}
                onClick={() => toggleSaveLesson(activeLesson.id)}
              >
                <Bookmark size={15} />
                <span>
                  {savedLessonIds.includes(activeLesson.id)
                    ? 'Đã lưu yêu thích'
                    : 'Lưu bài học'}
                </span>
              </button>

              <button
                type="button"
                className={`lib-complete-btn ${
                  completedLessonIds.includes(activeLesson.id) ? 'completed' : ''
                }`}
                onClick={() => toggleCompleteLesson(activeLesson.id)}
              >
                <CheckCircle2 size={15} />
                <span>
                  {completedLessonIds.includes(activeLesson.id)
                    ? 'Đã hoàn thành'
                    : 'Đánh dấu đã đọc'}
                </span>
              </button>
            </div>
          </div>

          <div className="reader-main-layout-grid">
            {/* Left Sidebar: Interactive Table of Contents for the Lesson & Module */}
            <aside className="reader-sidebar-toc">
              <div className="toc-card">
                <h4>
                  <List size={16} />
                  <span>Mục lục Bài học</span>
                </h4>
                <ul className="toc-section-links">
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-objectives')}
                    >
                      I. Mục tiêu bài học
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-knowledge')}
                    >
                      II. Nội dung kiến thức trọng tâm
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-academic-visual')}
                    >
                      III. Đồ họa học thuật &amp; Sơ đồ
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-data-table')}
                    >
                      IV. Bảng dữ liệu chuẩn đối chiếu
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-terms')}
                    >
                      V. Phân tích &amp; Giải thích thuật ngữ
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-archive')}
                    >
                      VI. Khung trích dẫn tư liệu gốc
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-takeaways')}
                    >
                      VII. Hộp thông tin quan trọng
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-quiz')}
                    >
                      VIII. Câu hỏi ôn tập &amp; Trắc nghiệm
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-references')}
                    >
                      IX. Nguồn tham khảo &amp; Bài liên quan
                    </button>
                  </li>
                </ul>
              </div>

              <div className="toc-card">
                <h4>Các bài học trong cùng Chuyên đề</h4>
                <ul className="toc-sibling-lessons">
                  {ALL_LIBRARY_LESSONS.filter(
                    (l) => l.topicId === activeLesson.topicId
                  ).map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`sibling-lesson-btn ${
                          item.id === activeLesson.id ? 'active' : ''
                        }`}
                        onClick={() => handleOpenLesson(item.id)}
                      >
                        <span className="sibling-num">{item.lessonNumber}</span>
                        <span className="sibling-title">{item.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Main Article Column */}
            <article
              className={`reader-article-content font-${readerFontSize}`}
            >
              {/* Article Header */}
              <header className="reader-article-header">
                <div className="reader-badge-strip">
                  <span className="reader-topic-badge">
                    {activeLesson.topicTitle}
                  </span>
                  <span className="reader-lesson-num">
                    {activeLesson.lessonNumber}
                  </span>
                  <span className="reader-grade-badge">
                    {completedLessonIds.includes(activeLesson.id)
                      ? '✓ Đã hoàn thành'
                      : savedLessonIds.includes(activeLesson.id)
                      ? '★ Đã lưu yêu thích'
                      : 'Học liệu chuyên sâu'}
                  </span>
                  <span className="reader-time-badge">
                    <Clock size={13} /> {activeLesson.readingTime}
                  </span>
                </div>

                <h1 className="reader-article-title">{activeLesson.title}</h1>
                <p className="reader-article-lead">{activeLesson.shortDesc}</p>

                <div className="reader-verification-strip">
                  <ShieldCheck size={16} />
                  <span>{activeLesson.verificationNote}</span>
                </div>
              </header>

              {/* Ảnh mở đầu lớn & Nhãn phân loại hình minh họa */}
              <figure className="reader-figure-box lib-large-opening-figure">
                <div className="lib-figure-classification-bar">
                  <span className="lib-fig-tag">
                    Đồ họa minh họa chuyên đề: {activeLesson.topicTitle}
                  </span>
                  <span className="lib-fig-source">
                    Đối chiếu dữ liệu: SGK GDPT 2018 &amp; Văn bản pháp lý Việt Nam
                  </span>
                </div>
                <img
                  src={activeLesson.image}
                  alt={activeLesson.title}
                  className="reader-figure-img"
                />
                <figcaption>{activeLesson.imageCaption}</figcaption>
              </figure>

              {/* I. MỤC TIÊU BÀI HỌC */}
              <section id="sec-objectives" className="reader-block objectives-block">
                <h2>I. Mục tiêu bài học (Yêu cầu cần đạt)</h2>
                <ul className="objectives-list">
                  {activeLesson.objectives.map((obj, idx) => (
                    <li key={idx}>
                      <Check size={16} className="obj-icon" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* II. NỘI DUNG KIẾN THỨC TRỌNG TÂM */}
              <section id="sec-knowledge" className="reader-block knowledge-block">
                <h2>II. Nội dung kiến thức trọng tâm</h2>
                <div className="knowledge-sub-sections">
                  {activeLesson.knowledgeSections.map((sec, idx) => (
                    <div key={idx} className="knowledge-sub-card">
                      <h3>{sec.heading}</h3>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} style={{ whiteSpace: 'pre-line' }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              {/* III. ĐỒ HỌA HỌC THUẬT & SƠ ĐỒ MINH HỌA */}
              {renderAcademicVisualSection(activeLesson.academicVisual)}

              {/* IV. BẢNG DỮ LIỆU ĐỐI CHIẾU CHUẨN */}
              {activeLesson.academicVisual?.dataTable && (
                <section id="sec-data-table" className="reader-block lib-datatable-block">
                  <div className="lib-section-badge-head">
                    <span className="lib-sec-tag">
                      <Table2 size={14} /> BẢNG DỮ LIỆU HỌC THUẬT CHUẨN
                    </span>
                  </div>
                  <h2>IV. {activeLesson.academicVisual.dataTable.title}</h2>
                  <p className="lib-table-source-note">
                    {activeLesson.academicVisual.dataTable.sourceNote}
                  </p>
                  <div className="lib-responsive-table-wrap">
                    <table className="lib-academic-table">
                      <thead>
                        <tr>
                          {activeLesson.academicVisual.dataTable.columns.map(
                            (col, cIdx) => (
                              <th key={cIdx}>{col}</th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {activeLesson.academicVisual.dataTable.rows.map(
                          (row, rIdx) => (
                            <tr key={rIdx}>
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx}>{cell}</td>
                              ))}
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* V. PHÂN TÍCH & GIẢI THÍCH THUẬT NGỮ */}
              <section id="sec-terms" className="reader-block terms-block">
                <h2>
                  V. Phân tích chuyên sâu &amp; Giải thích thuật ngữ (Dành cho Học sinh THPT)
                </h2>
                <div className="terms-grid">
                  {activeLesson.analysisAndTerms.map((item, idx) => (
                    <div key={idx} className="term-explain-card">
                      <h4>📘 {item.term}</h4>
                      <p style={{ whiteSpace: 'pre-line' }}>{item.explanation}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* VI. KHUNG TRÍCH DẪN TƯ LIỆU GỐC */}
              <section id="sec-archive" className="reader-block archive-block">
                <div className="lib-section-badge-head">
                  <span className="lib-sec-tag archive">
                    <ScrollText size={14} /> KHUNG TRÍCH DẪN TƯ LIỆU GỐC
                  </span>
                </div>
                <h2>VI. Tư liệu gốc &amp; Trích dẫn lịch sử – pháp lý</h2>
                <div className="archive-quote-card">
                  <h4>{activeLesson.illustrativeArchive.title}</h4>
                  <blockquote style={{ whiteSpace: 'pre-line' }}>
                    {activeLesson.illustrativeArchive.content}
                  </blockquote>
                  <p className="archive-citation">
                    <strong>Chú thích nguồn tư liệu gốc:</strong>{' '}
                    {activeLesson.illustrativeArchive.citation}
                  </p>
                </div>
              </section>

              {/* VII. HỘP THÔNG TIN QUAN TRỌNG & KIẾN THỨC CỐT LÕI CẦN GHI NHỚ */}
              <section id="sec-takeaways" className="reader-block takeaways-block">
                <h2>VII. Hộp thông tin quan trọng &amp; Kiến thức cốt lõi cần ghi nhớ</h2>

                {activeLesson.academicVisual?.importantCallout && (
                  <div className="lib-important-callout-box">
                    <div className="lib-callout-header">
                      <Info size={18} />
                      <span>
                        {activeLesson.academicVisual.importantCallout.badge}:{' '}
                        {activeLesson.academicVisual.importantCallout.title}
                      </span>
                    </div>
                    <ul className="lib-callout-points">
                      {activeLesson.academicVisual.importantCallout.points.map(
                        (pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                <ul className="takeaways-list">
                  {activeLesson.keyTakeaways.map((point, idx) => (
                    <li key={idx}>
                      <span className="takeaway-num">0{idx + 1}</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* VIII. CÂU HỎI ÔN TẬP & BÀI TẬP TRẮC NGHIỆM CUỐI BÀI */}
              <section id="sec-quiz" className="reader-block quiz-block">
                <h2>VIII. Câu hỏi ôn tập &amp; Trắc nghiệm kiểm tra kiến thức</h2>

                {/* Open-ended review questions */}
                <div className="open-questions-box">
                  <h3>1. Câu hỏi thảo luận &amp; tự luận:</h3>
                  <ol>
                    {activeLesson.reviewQuestions.map((rq, idx) => (
                      <li key={idx}>{rq}</li>
                    ))}
                  </ol>
                </div>

                {/* Interactive Multiple Choice Quiz */}
                <div className="interactive-quiz-box">
                  <div className="quiz-box-header">
                    <h3>2. Trắc nghiệm khách quan cuối bài:</h3>
                    <span className="quiz-badge">
                      Chọn đáp án và nhấn Kiểm tra kết quả
                    </span>
                  </div>

                  <div className="quiz-questions-list">
                    {activeLesson.quizQuestions.map((q, qIdx) => {
                      const selectedOpt = quizAnswers[qIdx]
                      return (
                        <div key={qIdx} className="quiz-item-card">
                          <p className="quiz-q-text">
                            <strong>Câu {qIdx + 1}:</strong> {q.question}
                          </p>
                          <div className="quiz-options-grid">
                            {q.options.map((opt, optIdx) => {
                              const isChosen = selectedOpt === optIdx
                              const isCorrect = q.correctIndex === optIdx
                              let statusClass = ''
                              if (quizSubmitted) {
                                if (isCorrect) statusClass = 'correct'
                                else if (isChosen) statusClass = 'wrong'
                              } else if (isChosen) {
                                statusClass = 'selected'
                              }

                              return (
                                <button
                                  key={optIdx}
                                  type="button"
                                  className={`quiz-opt-btn ${statusClass}`}
                                  onClick={() =>
                                    handleSelectQuizOption(qIdx, optIdx)
                                  }
                                >
                                  <span className="opt-letter">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              )
                            })}
                          </div>

                          {quizSubmitted && (
                            <div className="quiz-explanation-box">
                              <strong>Giải thích đáp án chuẩn:</strong>{' '}
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  <div className="quiz-actions-row">
                    {!quizSubmitted ? (
                      <button
                        type="button"
                        className="btn-primary-gold"
                        onClick={handleSubmitQuiz}
                      >
                        <CheckCircle2 size={17} />
                        <span>Kiểm tra đáp án &amp; Hoàn thành bài học</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="quiz-retry-btn"
                        onClick={() => {
                          setQuizAnswers({})
                          setQuizSubmitted(false)
                        }}
                      >
                        <span>Làm lại câu hỏi trắc nghiệm</span>
                      </button>
                    )}
                  </div>
                </div>
              </section>

              {/* IX. NGUỒN TÀI LIỆU THAM KHẢO & GỢI Ý BÀI ĐỌC LIÊN QUAN */}
              <section id="sec-references" className="reader-block references-block">
                <h2>IX. Nguồn tài liệu tham khảo chính thống</h2>
                <div className="references-list">
                  {activeLesson.references.map((ref, idx) => (
                    <div key={idx} className="reference-item">
                      <div className="ref-main">
                        <strong>
                          [{idx + 1}] {ref.title}
                        </strong>
                        <span>
                          Cơ quan / Tác giả: {ref.author} • Năm: {ref.year}
                        </span>
                      </div>
                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ref-link-btn"
                        >
                          <span>Nguồn chính thức</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Gợi ý bài đọc liên quan */}
                {relatedLessons.length > 0 && (
                  <div className="lib-related-lessons-box">
                    <h3>Gợi ý bài đọc liên quan nên khám phá tiếp</h3>
                    <div className="lib-related-grid">
                      {relatedLessons.map((rel) => (
                        <div key={rel.id} className="lib-related-card">
                          <div className="lib-related-meta">
                            <span className="lib-related-num">{rel.lessonNumber}</span>
                            <span className="lib-related-topic">{rel.topicTitle}</span>
                          </div>
                          <h4>{rel.title}</h4>
                          <p>{rel.shortDesc}</p>
                          <div className="lib-related-footer">
                            <span>
                              <Clock size={12} /> {rel.readingTime}
                            </span>
                            <button
                              type="button"
                              className="lib-related-open-btn"
                              onClick={() => handleOpenLesson(rel.id)}
                            >
                              <span>Đọc bài này</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Bottom Prev / Next Lesson Navigation */}
              <div className="reader-bottom-lesson-nav">
                {prevLesson ? (
                  <button
                    type="button"
                    className="detail-nav-card prev"
                    onClick={() => handleOpenLesson(prevLesson.id)}
                  >
                    <span className="nav-dir-label">
                      <ArrowLeft size={14} /> Bài học trước
                    </span>
                    <strong>
                      {prevLesson.lessonNumber}: {prevLesson.title}
                    </strong>
                  </button>
                ) : (
                  <div />
                )}

                {nextLesson ? (
                  <button
                    type="button"
                    className="detail-nav-card next"
                    onClick={() => handleOpenLesson(nextLesson.id)}
                  >
                    <span className="nav-dir-label">
                      Bài học tiếp theo <ArrowRight size={14} />
                    </span>
                    <strong>
                      {nextLesson.lessonNumber}: {nextLesson.title}
                    </strong>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-primary-gold"
                    onClick={() => setActiveLessonId(null)}
                  >
                    <span>Quay về Mục lục 8 Chuyên đề</span>
                  </button>
                )}
              </div>
            </article>
          </div>
        </div>
      ) : (
        /* =================================================================
           II & III. 8 KHUNG CHUYÊN ĐỀ + TÌM KIẾM, BỘ LỌC & DANH SÁCH BÀI HỌC
           ================================================================= */
        <>
          {/* III. THIẾT KẾ CÁC KHUNG CHUYÊN ĐỀ (8 Chuyên đề với ảnh đại diện riêng) */}
          <div className="library-topics-showcase" ref={directorySectionRef}>
            <div className="library-topics-header">
              <div>
                <span className="library-eyebrow-tag">
                  HỆ THỐNG 8 CHUYÊN ĐỀ HỌC LIỆU SỐ TRỌNG TÂM CẤP THPT
                </span>
                <h3>Khám phá 8 chuyên đề kết nối Lịch sử, Địa lý, Pháp lý và Biển đảo</h3>
              </div>
              {selectedTopicId !== 'all' && (
                <button
                  type="button"
                  className="saved-shelf-toggle-btn"
                  onClick={() => setSelectedTopicId('all')}
                >
                  <span>Hiển thị tất cả 8 chuyên đề</span>
                </button>
              )}
            </div>

            <div className="lib-eight-visual-cards-grid">
              {LIBRARY_THEMATIC_MODULES.map((mod) => {
                const IconComp = MODULE_ICONS[mod.iconName] || BookOpen
                const isSelected = selectedTopicId === mod.id
                const modCompleted = mod.lessons.filter((l) =>
                  completedLessonIds.includes(l.id)
                ).length

                return (
                  <article
                    key={mod.id}
                    className={`lib-thematic-showcase-card accent-${mod.accent} ${
                      isSelected ? 'active' : ''
                    }`}
                  >
                    <div
                      className="lib-showcase-img-wrap"
                      onClick={() => handleExploreModule(mod.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleExploreModule(mod.id)
                      }
                    >
                      <img
                        src={mod.bannerImage}
                        alt={mod.title}
                        className="lib-showcase-img"
                        loading="lazy"
                      />
                      <div className="lib-showcase-overlay-top">
                        <span className="lib-showcase-code">{mod.code}</span>
                        <span className="lib-showcase-progress">
                          {modCompleted}/{mod.lessonCount} đã đọc
                        </span>
                      </div>
                    </div>

                    <div className="lib-showcase-body">
                      <div className="lib-showcase-title-row">
                        <div className="lib-showcase-icon">
                          <IconComp size={18} />
                        </div>
                        <h4>{mod.title}</h4>
                      </div>

                      <p className="lib-showcase-desc">
                        {mod.overview.summary}
                      </p>

                      <div className="lib-showcase-metrics-row">
                        <span className="lib-metric-chip">
                          <BookOpen size={13} />
                          <strong>{mod.lessonCount} bài học thực tế</strong>
                        </span>
                        <span className="lib-metric-chip">
                          <Clock size={13} />
                          <span>Dự kiến: {mod.totalReadingMinutes} phút đọc</span>
                        </span>
                      </div>

                      <div className="lib-showcase-actions">
                        <button
                          type="button"
                          className="lib-explore-topic-btn"
                          onClick={() => handleExploreModule(mod.id)}
                        >
                          <span>Khám phá chuyên đề</span>
                          <ArrowRight size={15} />
                        </button>
                        <button
                          type="button"
                          className="lib-quick-read-btn"
                          onClick={() => handleOpenLesson(mod.lessons[0]?.id)}
                          title="Đọc ngay bài mở đầu của chuyên đề"
                        >
                          <span>Đọc Bài {mod.orderIndex}.1</span>
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          {/* VI. THANH TÌM KIẾM THEO TỪ KHÓA & BỘ LỌC ĐA CHIỀU */}
          <div className="library-filter-toolbar">
            <div className="library-search-box">
              <Search size={18} className="lib-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm theo từ khóa: Hoàng Sa, Trường Sa, UNCLOS 1982, Châu bản, Đội Hoàng Sa, Rạn san hô, Kinh tế biển..."
                aria-label="Tìm kiếm học liệu chuyên sâu"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Xóa từ khóa"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="library-dropdown-filters">
              {/* Lọc theo Chuyên đề */}
              <div className="filter-group-item">
                <span className="filter-group-label">
                  <Layers size={14} /> Chuyên đề:
                </span>
                <div className="filter-pills-wrap">
                  <button
                    type="button"
                    className={`lib-filter-pill ${
                      selectedTopicId === 'all' ? 'active' : ''
                    }`}
                    onClick={() => setSelectedTopicId('all')}
                  >
                    Tất cả (8)
                  </button>
                  {LIBRARY_THEMATIC_MODULES.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      className={`lib-filter-pill ${
                        selectedTopicId === m.id ? 'active' : ''
                      }`}
                      onClick={() => setSelectedTopicId(m.id)}
                    >
                      CĐ 0{m.orderIndex}: {m.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lọc theo Tiến độ đọc (Đã lưu yêu thích & Đã hoàn thành) */}
              <div className="filter-group-item">
                <span className="filter-group-label">
                  <Filter size={14} /> Tiến độ:
                </span>
                <div className="filter-pills-wrap">
                  <button
                    type="button"
                    className={`lib-filter-pill ${
                      statusFilter === 'saved' ? 'active' : ''
                    }`}
                    onClick={() =>
                      setStatusFilter((prev) => (prev === 'saved' ? 'all' : 'saved'))
                    }
                  >
                    ★ Đã lưu yêu thích ({savedLessonIds.length})
                  </button>
                  <button
                    type="button"
                    className={`lib-filter-pill ${
                      statusFilter === 'completed' ? 'active' : ''
                    }`}
                    onClick={() =>
                      setStatusFilter((prev) =>
                        prev === 'completed' ? 'all' : 'completed'
                      )
                    }
                  >
                    ✓ Đã hoàn thành ({completedLessonIds.length})
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Dedicated Thematic Sections (Each with Overview + Lesson Cards) */}
          {filteredModules.length === 0 ? (
            <div className="lib-empty-filter-state">
              <p>
                Không tìm thấy bài học nào khớp với bộ lọc hiện tại. Hãy thử xóa từ khóa
                hoặc chọn &ldquo;Tất cả 8 Chuyên đề&rdquo;.
              </p>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => {
                  setSelectedTopicId('all')
                  setSelectedGrade('all')
                  setStatusFilter('all')
                  setSearchQuery('')
                }}
              >
                <span>Đặt lại toàn bộ bộ lọc</span>
              </button>
            </div>
          ) : (
            <div className="thematic-sections-stack">
              {filteredModules.map((mod) => {
                const IconComp = MODULE_ICONS[mod.iconName] || BookOpen
                return (
                  <section
                    key={mod.id}
                    id={`module-sec-${mod.id}`}
                    className="thematic-module-section"
                  >
                    {/* Module Overview Header Card */}
                    <div className="thematic-overview-banner">
                      <div className="thematic-overview-top">
                        <div className="thematic-title-group">
                          <div className="thematic-icon-box">
                            <IconComp size={26} />
                          </div>
                          <div>
                            <span className="thematic-code-pill">
                              {mod.code} • {mod.lessonCount} Bài học • {mod.totalReadingMinutes} phút đọc
                            </span>
                            <h2 className="thematic-main-title">{mod.title}</h2>
                            <p className="thematic-subtitle">{mod.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      <div className="thematic-overview-body">
                        <div className="overview-summary-col">
                          <h4>Bài giới thiệu tổng quan chuyên đề:</h4>
                          <p>{mod.overview.summary}</p>
                        </div>

                        <div className="overview-pillars-col">
                          <h4>Trọng tâm kiến thức chuyên đề:</h4>
                          <ul>
                            {mod.overview.keyPillarPoints.map((pt, i) => (
                              <li key={i}>
                                <CheckCircle2
                                  size={15}
                                  className="overview-check"
                                />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Lessons Grid inside this Thematic Module */}
                    <div className="thematic-lessons-grid">
                      {mod.filteredLessons.map((lesson) => {
                        const isSaved = savedLessonIds.includes(lesson.id)
                        const isCompleted = completedLessonIds.includes(lesson.id)

                        return (
                          <article
                            key={lesson.id}
                            className={`library-doc-card ${
                              isCompleted ? 'lesson-completed-card' : ''
                            }`}
                          >
                            <div
                              className="lib-doc-img-wrap"
                              onClick={() => handleOpenLesson(lesson.id)}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) =>
                                e.key === 'Enter' && handleOpenLesson(lesson.id)
                              }
                            >
                              <img
                                src={lesson.image}
                                alt={lesson.title}
                                className="lib-doc-img"
                                loading="lazy"
                              />
                              <div className="lib-doc-top-badges">
                                <span className="lib-topic-pill">
                                  {lesson.lessonNumber}
                                </span>
                                <span className="lib-format-pill">
                                  {isCompleted
                                    ? '✓ Đã hoàn thành'
                                    : isSaved
                                    ? '★ Đã lưu yêu thích'
                                    : 'Học liệu chuẩn'}
                                </span>
                              </div>
                              <div className="lib-doc-bottom-bar">
                                <span className="lib-verify-badge verified">
                                  <ShieldCheck size={13} />
                                  <span>Có sơ đồ, bảng dữ liệu &amp; nguồn chuẩn</span>
                                </span>
                                <span className="lib-read-time">
                                  <Clock size={12} /> {lesson.readingTime}
                                </span>
                              </div>
                            </div>

                            <div className="lib-doc-body">
                              <div className="lesson-status-strip">
                                {isCompleted ? (
                                  <span className="status-done-tag">
                                    <CheckCircle2 size={14} /> Đã hoàn thành bài học
                                  </span>
                                ) : (
                                  <span className="status-todo-tag">
                                    <FileText size={14} /> Bài học chuyên sâu (9 mục)
                                  </span>
                                )}
                                <span>
                                  {lesson.quizQuestions.length} câu trắc nghiệm
                                </span>
                              </div>

                              <h3
                                className="lib-doc-title"
                                onClick={() => handleOpenLesson(lesson.id)}
                              >
                                {lesson.title}
                              </h3>

                              <p className="lib-doc-desc">{lesson.shortDesc}</p>

                              <div className="lib-doc-source-box">
                                <strong>Nguồn tham khảo chính:</strong>{' '}
                                <span>
                                  {lesson.references[0]?.title} (
                                  {lesson.references[0]?.author})
                                </span>
                              </div>
                            </div>

                            <div className="lib-doc-footer">
                              <button
                                type="button"
                                className="lib-read-primary-btn"
                                onClick={() => handleOpenLesson(lesson.id)}
                              >
                                <BookOpen size={16} />
                                <span>Khám phá bài học</span>
                                <ArrowRight size={15} />
                              </button>

                              <button
                                type="button"
                                className={`lib-bookmark-btn ${
                                  isSaved ? 'saved' : ''
                                }`}
                                onClick={() => toggleSaveLesson(lesson.id)}
                                title="Đánh dấu bài học yêu thích"
                              >
                                <Bookmark size={16} />
                                <span>{isSaved ? 'Đã lưu' : 'Yêu thích'}</span>
                              </button>
                            </div>
                          </article>
                        )
                      })}
                    </div>
                  </section>
                )
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}
