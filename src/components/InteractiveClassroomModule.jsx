import React, { useState, useMemo, useEffect } from 'react'
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Clock,
  Map,
  Award,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  UserCheck,
  BarChart3,
  Compass,
  HelpCircle,
  ShieldCheck,
  Layers,
  GraduationCap,
  Check,
  AlertTriangle
} from 'lucide-react'
import {
  CLASSROOM_TOPICS,
  ALL_MULTIPLE_CHOICE_QUESTIONS,
  DIFFICULTY_LEVELS,
  INTERACTIVE_ACTIVITIES,
  TRUE_FALSE_QUESTIONS,
  TIMELINE_MATCHING_SETS,
  MAP_GAME_LOCATIONS,
  CLASSROOM_ACHIEVEMENT_BADGES,
  buildComprehensiveExamQuestions
} from '../data/classroomData'
import {
  MAP_BOUNDS,
  VIETNAM_MAINLAND_COORDS,
  VIETNAM_COASTLINE_COORDS,
  projectLatLng
} from '../data/mapData'
import {
  loadClassroomRecords,
  recordLearningAttempt,
  updateStudentProfileBinding,
  clearAllClassroomRecords
} from '../utils/classroomStorage'
import ClassroomAnalyticsAndBadges from './ClassroomAnalyticsAndBadges'

const DIFFICULTY_LABELS = {
  easy: { text: 'Cấp độ Dễ', cls: 'diff-easy' },
  medium: { text: 'Trung bình', cls: 'diff-medium' },
  hard: { text: 'Nâng cao', cls: 'diff-hard' }
}

function shuffleArray(items, seedOffset = 0) {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = (i * 7 + 3 + seedOffset) % (i + 1)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export default function InteractiveClassroomModule({ activeRole = 'student' }) {
  // Hồ sơ kết quả học tập lưu trữ thực tế (chuẩn bị sẵn cấu trúc đồng bộ tài khoản Backend)
  const [records, setRecords] = useState(() => loadClassroomRecords())
  const [showAnalyticsDrawer, setShowAnalyticsDrawer] = useState(true)

  // Tab hoạt động tương tác hiện tại (6 hoạt động)
  const [activeActivity, setActiveActivity] = useState('topic-quiz')

  // Hiệu ứng phản hồi tức thì khi chọn câu trả lời
  const [instantFeedbackBanner, setInstantFeedbackBanner] = useState(null)

  // ============================================================================
  // 1. STATE CHO HOẠT ĐỘNG 1: BÀI HỌC & TRẮC NGHIỆM THEO CHỦ ĐỀ (8 CHUYÊN ĐỀ x 10 CÂU)
  // ============================================================================
  const [selectedTopicId, setSelectedTopicId] = useState(CLASSROOM_TOPICS[0].id)
  const [topicCurrentQIdx, setTopicCurrentQIdx] = useState(0)
  const [topicUserAnswers, setTopicUserAnswers] = useState({})
  const [topicInstantCheck, setTopicInstantCheck] = useState(true)
  const [topicSubmitted, setTopicSubmitted] = useState(false)
  const [topicResultSummary, setTopicResultSummary] = useState(null)

  const currentTopic = useMemo(
    () =>
      CLASSROOM_TOPICS.find((t) => t.id === selectedTopicId) ||
      CLASSROOM_TOPICS[0],
    [selectedTopicId]
  )

  const handleSelectTopic = (topicId) => {
    setSelectedTopicId(topicId)
    setTopicCurrentQIdx(0)
    setTopicUserAnswers({})
    setTopicSubmitted(false)
    setTopicResultSummary(null)
    setInstantFeedbackBanner(null)
  }

  const handleChooseTopicOption = (q, optionIdx) => {
    if (topicSubmitted) return
    setTopicUserAnswers((prev) => ({
      ...prev,
      [q.id]: optionIdx
    }))
    if (topicInstantCheck) {
      const isRight = optionIdx === q.correctIndex
      setInstantFeedbackBanner({
        isCorrect: isRight,
        title: isRight
          ? `✓ Phản hồi tức thì: Đáp án ${String.fromCharCode(65 + optionIdx)} hoàn toàn chính xác!`
          : `✗ Phản hồi tức thì: Đáp án chuẩn của câu này là ${String.fromCharCode(65 + q.correctIndex)}`,
        explanation: q.explanation,
        source: q.source
      })
    }
  }

  const handleSubmitTopicQuiz = () => {
    const questions = currentTopic.questions
    let correctCount = 0
    const details = questions.map((q) => {
      const chosen = topicUserAnswers[q.id]
      const isCorrect = chosen === q.correctIndex
      if (isCorrect) correctCount += 1
      return {
        questionId: q.id,
        chosenIndex: chosen ?? null,
        correctIndex: q.correctIndex,
        isCorrect
      }
    })

    const { updatedRecords, latestAttempt } = recordLearningAttempt({
      activityType: 'topic-quiz',
      activityTitle: `${currentTopic.code}: ${currentTopic.title}`,
      topicId: currentTopic.id,
      difficulty: 'mixed',
      correctCount,
      totalQuestions: questions.length,
      details
    })

    setRecords(updatedRecords)
    setTopicResultSummary(latestAttempt)
    setTopicSubmitted(true)
    setInstantFeedbackBanner(null)
  }

  const handleRetryTopicQuiz = () => {
    setTopicCurrentQIdx(0)
    setTopicUserAnswers({})
    setTopicSubmitted(false)
    setTopicResultSummary(null)
    setInstantFeedbackBanner(null)
  }

  // ============================================================================
  // 2. STATE CHO HOẠT ĐỘNG 2: CÂU HỎI ĐÚNG / SAI CÓ GIẢI THÍCH (16 CÂU)
  // ============================================================================
  const [tfFilterDiff, setTfFilterDiff] = useState('all')
  const [tfUserAnswers, setTfUserAnswers] = useState({})
  const [tfSubmitted, setTfSubmitted] = useState(false)
  const [tfResultSummary, setTfResultSummary] = useState(null)

  const filteredTfQuestions = useMemo(() => {
    if (tfFilterDiff === 'all') return TRUE_FALSE_QUESTIONS
    return TRUE_FALSE_QUESTIONS.filter((q) => q.difficulty === tfFilterDiff)
  }, [tfFilterDiff])

  const handleAnswerTrueFalse = (qId, boolVal) => {
    if (tfSubmitted) return
    setTfUserAnswers((prev) => ({
      ...prev,
      [qId]: boolVal
    }))
  }

  const handleSubmitTrueFalse = () => {
    let correctCount = 0
    const details = filteredTfQuestions.map((q) => {
      const chosen = tfUserAnswers[q.id]
      const isCorrect = chosen === q.isTrue
      if (isCorrect) correctCount += 1
      return {
        questionId: q.id,
        chosenValue: chosen ?? null,
        correctValue: q.isTrue,
        isCorrect
      }
    })

    const { updatedRecords, latestAttempt } = recordLearningAttempt({
      activityType: 'true-false',
      activityTitle: `Câu hỏi Đúng/Sai (${
        tfFilterDiff === 'all'
          ? 'Tất cả cấp độ'
          : DIFFICULTY_LABELS[tfFilterDiff]?.text
      })`,
      difficulty: tfFilterDiff,
      correctCount,
      totalQuestions: filteredTfQuestions.length,
      details
    })

    setRecords(updatedRecords)
    setTfResultSummary(latestAttempt)
    setTfSubmitted(true)
  }

  const handleResetTrueFalse = (newDiff = tfFilterDiff) => {
    setTfFilterDiff(newDiff)
    setTfUserAnswers({})
    setTfSubmitted(false)
    setTfResultSummary(null)
  }

  // ============================================================================
  // 3. STATE CHO HOẠT ĐỘNG 3: TRÒ CHƠI GHÉP SỰ KIỆN VỚI MỐC THỜI GIAN
  // ============================================================================
  const [activeTimelineSetId, setActiveTimelineSetId] = useState(
    TIMELINE_MATCHING_SETS[0].id
  )
  const [selectedTimePairId, setSelectedTimePairId] = useState(null)
  const [selectedEventPairId, setSelectedEventPairId] = useState(null)
  const [matchedPairIds, setMatchedPairIds] = useState([])
  const [wrongMatchAttempts, setWrongMatchAttempts] = useState(0)
  const [matchFeedback, setMatchFeedback] = useState(null)
  const [timelineSeed, setTimelineSeed] = useState(1)
  const [timelineSavedSummary, setTimelineSavedSummary] = useState(null)

  const currentTimelineSet = useMemo(
    () =>
      TIMELINE_MATCHING_SETS.find((s) => s.id === activeTimelineSetId) ||
      TIMELINE_MATCHING_SETS[0],
    [activeTimelineSetId]
  )

  const shuffledEventsColumn = useMemo(
    () => shuffleArray(currentTimelineSet.pairs, timelineSeed),
    [currentTimelineSet, timelineSeed]
  )

  const handleSelectTimelineSet = (setId) => {
    setActiveTimelineSetId(setId)
    setSelectedTimePairId(null)
    setSelectedEventPairId(null)
    setMatchedPairIds([])
    setWrongMatchAttempts(0)
    setMatchFeedback(null)
    setTimelineSeed((s) => s + 1)
    setTimelineSavedSummary(null)
  }

  const evaluateTimelineMatch = (timeId, eventId) => {
    if (!timeId || !eventId) return
    if (timeId === eventId) {
      const matchedItem = currentTimelineSet.pairs.find((p) => p.id === timeId)
      const nextMatched = [...matchedPairIds, timeId]
      setMatchedPairIds(nextMatched)
      setSelectedTimePairId(null)
      setSelectedEventPairId(null)
      setMatchFeedback({
        type: 'success',
        title: `Ghép chính xác: ${matchedItem.timeLabel}`,
        text: matchedItem.explanation,
        source: matchedItem.source
      })

      if (nextMatched.length === currentTimelineSet.pairs.length) {
        const totalPairs = currentTimelineSet.pairs.length
        const effectiveCorrect = Math.max(
          1,
          totalPairs - Math.min(totalPairs - 1, Math.floor(wrongMatchAttempts / 2))
        )
        const { updatedRecords, latestAttempt } = recordLearningAttempt({
          activityType: 'timeline-match',
          activityTitle: currentTimelineSet.title,
          difficulty: currentTimelineSet.difficulty,
          correctCount: effectiveCorrect,
          totalQuestions: totalPairs
        })
        setRecords(updatedRecords)
        setTimelineSavedSummary(latestAttempt)
      }
    } else {
      setWrongMatchAttempts((w) => w + 1)
      setSelectedTimePairId(null)
      setSelectedEventPairId(null)
      setMatchFeedback({
        type: 'error',
        title: 'Chưa khớp mốc thời gian và sự kiện!',
        text: 'Hãy đọc kỹ từ khóa nhân vật lịch sử, tên văn bản hoặc triều đại để chọn lại cặp tương ứng.'
      })
    }
  }

  const handleClickTimeCard = (pairId) => {
    if (matchedPairIds.includes(pairId)) return
    setSelectedTimePairId(pairId)
    if (selectedEventPairId) {
      evaluateTimelineMatch(pairId, selectedEventPairId)
    }
  }

  const handleClickEventCard = (pairId) => {
    if (matchedPairIds.includes(pairId)) return
    setSelectedEventPairId(pairId)
    if (selectedTimePairId) {
      evaluateTimelineMatch(selectedTimePairId, pairId)
    }
  }

  const handleResetTimelineGame = () => {
    setSelectedTimePairId(null)
    setSelectedEventPairId(null)
    setMatchedPairIds([])
    setWrongMatchAttempts(0)
    setMatchFeedback(null)
    setTimelineSeed((s) => s + 1)
    setTimelineSavedSummary(null)
  }

  // ============================================================================
  // 4. STATE CHO HOẠT ĐỘNG 4: TRÒ CHƠI NHẬN DIỆN ĐỊA DANH TRÊN BẢN ĐỒ
  // ============================================================================
  const [mapRoundIdx, setMapRoundIdx] = useState(0)
  const [mapAnswers, setMapAnswers] = useState({})
  const [mapLastFeedback, setMapLastFeedback] = useState(null)
  const [mapGameFinished, setMapGameFinished] = useState(false)
  const [mapResultSummary, setMapResultSummary] = useState(null)

  const currentTargetLocation =
    MAP_GAME_LOCATIONS[mapRoundIdx] || MAP_GAME_LOCATIONS[0]

  const mainlandPolygonPoints = useMemo(
    () =>
      VIETNAM_MAINLAND_COORDS.map(([lat, lng]) => {
        const pt = projectLatLng(lat, lng)
        return `${pt.x},${pt.y}`
      }).join(' '),
    []
  )

  const coastlinePolylinePoints = useMemo(
    () =>
      VIETNAM_COASTLINE_COORDS.map(([lat, lng]) => {
        const pt = projectLatLng(lat, lng)
        return `${pt.x},${pt.y}`
      }).join(' '),
    []
  )

  function lngOrDefault(lng) {
    return typeof lng === 'number' ? lng : 110.0
  }

  const projectedMapLocations = useMemo(
    () =>
      MAP_GAME_LOCATIONS.map((loc) => ({
        ...loc,
        pos: projectLatLng(loc.lat, lngOrDefault(loc.lng))
      })),
    []
  )

  const handlePickMapMarker = (clickedLoc) => {
    if (mapGameFinished) return
    if (mapAnswers[currentTargetLocation.id]) return

    const isCorrect = clickedLoc.id === currentTargetLocation.id
    const nextMapAnswers = {
      ...mapAnswers,
      [currentTargetLocation.id]: {
        targetId: currentTargetLocation.id,
        chosenId: clickedLoc.id,
        chosenName: clickedLoc.name,
        isCorrect
      }
    }

    setMapAnswers(nextMapAnswers)
    setMapLastFeedback({
      isCorrect,
      target: currentTargetLocation,
      chosen: clickedLoc
    })

    if (Object.keys(nextMapAnswers).length === MAP_GAME_LOCATIONS.length) {
      const correctCount = Object.values(nextMapAnswers).filter(
        (a) => a.isCorrect
      ).length
      const { updatedRecords, latestAttempt } = recordLearningAttempt({
        activityType: 'map-identify',
        activityTitle: 'Trò chơi Nhận diện 12 Địa danh Bản đồ Biển Đông',
        difficulty: 'mixed',
        correctCount,
        totalQuestions: MAP_GAME_LOCATIONS.length
      })
      setRecords(updatedRecords)
      setMapResultSummary(latestAttempt)
      setMapGameFinished(true)
    }
  }

  const handleNextMapQuestion = () => {
    setMapLastFeedback(null)
    if (mapRoundIdx < MAP_GAME_LOCATIONS.length - 1) {
      setMapRoundIdx((i) => i + 1)
    }
  }

  const handleResetMapGame = () => {
    setMapRoundIdx(0)
    setMapAnswers({})
    setMapLastFeedback(null)
    setMapGameFinished(false)
    setMapResultSummary(null)
  }

  // ============================================================================
  // 5. STATE CHO HOẠT ĐỘNG 5: THỬ THÁCH THEO CẤP ĐỘ (DỄ • TRUNG BÌNH • NÂNG CAO)
  // ============================================================================
  const [selectedLevelId, setSelectedLevelId] = useState('easy')
  const [levelUserAnswers, setLevelUserAnswers] = useState({})
  const [levelSubmitted, setLevelSubmitted] = useState(false)
  const [levelResultSummary, setLevelResultSummary] = useState(null)

  const levelQuestions = useMemo(
    () =>
      ALL_MULTIPLE_CHOICE_QUESTIONS.filter(
        (q) => q.difficulty === selectedLevelId
      ),
    [selectedLevelId]
  )

  const handleSelectDifficultyLevel = (lvlId) => {
    setSelectedLevelId(lvlId)
    setLevelUserAnswers({})
    setLevelSubmitted(false)
    setLevelResultSummary(null)
  }

  const handleChooseLevelOption = (qId, optionIdx) => {
    if (levelSubmitted) return
    setLevelUserAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx
    }))
  }

  const handleSubmitLevelChallenge = () => {
    let correctCount = 0
    const details = levelQuestions.map((q) => {
      const chosen = levelUserAnswers[q.id]
      const isCorrect = chosen === q.correctIndex
      if (isCorrect) correctCount += 1
      return {
        questionId: q.id,
        chosenIndex: chosen ?? null,
        correctIndex: q.correctIndex,
        isCorrect
      }
    })

    const levelMeta = DIFFICULTY_LEVELS.find((l) => l.id === selectedLevelId)
    const { updatedRecords, latestAttempt } = recordLearningAttempt({
      activityType: 'level-challenge',
      activityTitle: `Thử thách Cấp độ: ${levelMeta?.shortLabel || selectedLevelId}`,
      difficulty: selectedLevelId,
      correctCount,
      totalQuestions: levelQuestions.length,
      details
    })

    setRecords(updatedRecords)
    setLevelResultSummary(latestAttempt)
    setLevelSubmitted(true)
  }

  const handleRetryLevelChallenge = () => {
    setLevelUserAnswers({})
    setLevelSubmitted(false)
    setLevelResultSummary(null)
  }

  // ============================================================================
  // 6. STATE CHO HOẠT ĐỘNG 6: BÀI KIỂM TRA TỔNG HỢP THPT (20 CÂU CÓ TÍNH GIỜ)
  // ============================================================================
  const [examSeed, setExamSeed] = useState(1)
  const [examAnswers, setExamAnswers] = useState({})
  const [examSubmitted, setExamSubmitted] = useState(false)
  const [examResultSummary, setExamResultSummary] = useState(null)
  const [examElapsedSeconds, setExamElapsedSeconds] = useState(0)

  const examQuestions = useMemo(
    () => buildComprehensiveExamQuestions(examSeed),
    [examSeed]
  )

  // Đồng hồ tính thời gian làm bài thực tế khi học sinh đang mở tab Kiểm tra tổng hợp
  useEffect(() => {
    if (activeActivity !== 'comprehensive-exam' || examSubmitted) return undefined
    const timer = setInterval(() => {
      setExamElapsedSeconds((s) => s + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [activeActivity, examSubmitted])

  const handleChooseExamOption = (qId, optIdx) => {
    if (examSubmitted) return
    setExamAnswers((prev) => ({
      ...prev,
      [qId]: optIdx
    }))
  }

  const handleSubmitComprehensiveExam = () => {
    let correctCount = 0
    const details = examQuestions.map((q) => {
      const chosen = examAnswers[q.id]
      const isCorrect = chosen === q.correctIndex
      if (isCorrect) correctCount += 1
      return {
        questionId: q.id,
        topicId: q.topicId,
        topicCode: q.topicCode,
        chosenIndex: chosen ?? null,
        correctIndex: q.correctIndex,
        isCorrect
      }
    })

    const { updatedRecords, latestAttempt } = recordLearningAttempt({
      activityType: 'comprehensive-exam',
      activityTitle: `Bài Kiểm tra Tổng hợp THPT (Đề số #${examSeed} • ${formatDuration(examElapsedSeconds)})`,
      difficulty: 'mixed',
      correctCount,
      totalQuestions: examQuestions.length,
      details
    })

    setRecords(updatedRecords)
    setExamResultSummary(latestAttempt)
    setExamSubmitted(true)
  }

  const handleGenerateNewExam = (incrementSeed = true) => {
    if (incrementSeed) {
      setExamSeed((s) => s + 1)
    }
    setExamAnswers({})
    setExamSubmitted(false)
    setExamResultSummary(null)
    setExamElapsedSeconds(0)
  }

  // ============================================================================
  // QUẢN LÝ HỒ SƠ HỌC SINH & THỐNG KÊ TIẾN ĐỘ THỰC TẾ
  // ============================================================================
  const completedTopicsCount = Object.values(records.topicMastery || {}).filter(
    (m) => m.completed
  ).length
  const overallProgressPercent = Math.round(
    (completedTopicsCount / CLASSROOM_TOPICS.length) * 100
  )
  const unlockedBadgesCount = CLASSROOM_ACHIEVEMENT_BADGES.filter((b) =>
    b.checkUnlocked(records)
  ).length

  const handleSaveStudentProfile = (profilePatch) => {
    const next = updateStudentProfileBinding(profilePatch)
    setRecords(next)
  }

  const handleResetAllRecords = () => {
    const next = clearAllClassroomRecords()
    setRecords(next)
  }

  const handleJumpToTopicQuiz = (topicId) => {
    setSelectedTopicId(topicId)
    setActiveActivity('topic-quiz')
    setTopicCurrentQIdx(0)
    setTopicUserAnswers({})
    setTopicSubmitted(false)
    setTopicResultSummary(null)
  }

  const activeTopicQuestion =
    currentTopic.questions[topicCurrentQIdx] || currentTopic.questions[0]
  const answeredCountInTopic = Object.keys(topicUserAnswers).length
  const answeredCountInExam = Object.keys(examAnswers).length

  return (
    <div className="interactive-classroom-module">
      {/* ==========================================================================
          1. HERO SECTION RIÊNG: PHÒNG HỌC TƯƠNG TÁC
          ========================================================================== */}
      <section className="cls-hero-banner">
        <div className="cls-hero-grid">
          <div className="cls-hero-content">
            <div className="cls-hero-badges">
              <span className="cls-hero-pill gold">
                <GraduationCap size={15} />
                <span>
                  LỚP HỌC SỐ THPT • {records.accountBinding.studentName} (
                  {records.accountBinding.grade})
                </span>
              </span>
              <span className="cls-hero-pill cyan">
                <Award size={14} />
                <span>
                  {unlockedBadgesCount}/{CLASSROOM_ACHIEVEMENT_BADGES.length} Huy hiệu đã mở khóa
                </span>
              </span>
            </div>

            <h2 className="cls-hero-title">PHÒNG HỌC TƯƠNG TÁC</h2>

            <p className="cls-hero-lead">
              Học tập chủ động – Khám phá kiến thức – Thử thách bản thân.
            </p>

            <p className="cls-hero-desc">
              Không gian rèn luyện và kiểm chứng kiến thức biển đảo dành cho học
              sinh THPT với <strong>8 chuyên đề học tập</strong> và{' '}
              <strong>6 hình thức hoạt động tương tác</strong> (Trắc nghiệm chủ đề,
              Nhận định Đúng/Sai, Ghép mốc thời gian, Định vị bản đồ Biển Đông,
              Thử thách 3 cấp độ và Bài kiểm tra tổng hợp). Toàn bộ câu hỏi đều có
              đáp án, giải thích chi tiết và nguồn tham khảo kiểm chứng.
            </p>

            {/* Thanh tiến độ chinh phục 8 chuyên đề thực tế */}
            <div className="classroom-overall-progress-wrap cls-hero-progress">
              <div className="classroom-progress-labels">
                <span>
                  Tiến độ hoàn thành chuyên đề:{' '}
                  <strong>{completedTopicsCount}/8 chuyên đề</strong>
                </span>
                <strong>{overallProgressPercent}%</strong>
              </div>
              <div className="classroom-progress-track">
                <div
                  className="classroom-progress-fill"
                  style={{ width: `${overallProgressPercent}%` }}
                />
              </div>
            </div>

            {/* Thống kê kết quả thực tế (Tuyệt đối không tạo điểm giả) */}
            <div className="cls-hero-stats-strip">
              <div className="classroom-stat-box">
                <span className="stat-num">{records.stats.totalAttempts}</span>
                <span className="stat-lbl">Lượt làm bài thực tế</span>
              </div>
              <div className="classroom-stat-box is-correct">
                <span className="stat-num">
                  {records.stats.totalCorrectAnswers}
                </span>
                <span className="stat-lbl">Câu trả lời đúng</span>
              </div>
              <div className="classroom-stat-box is-wrong">
                <span className="stat-num">
                  {records.stats.totalWrongAnswers}
                </span>
                <span className="stat-lbl">Câu trả lời sai</span>
              </div>
              <div className="classroom-stat-box is-gold">
                <span className="stat-num">
                  {records.stats.highestScore10.toFixed(1)}
                  <small>/10</small>
                </span>
                <span className="stat-lbl">Điểm cao nhất</span>
              </div>

              <button
                type="button"
                className="classroom-profile-btn"
                onClick={() => setShowAnalyticsDrawer((v) => !v)}
              >
                <BarChart3 size={16} />
                <span>
                  {showAnalyticsDrawer
                    ? 'Thu gọn Biểu đồ & Huy hiệu'
                    : 'Mở Biểu đồ điểm & Huy hiệu'}
                </span>
              </button>
            </div>
          </div>

          <div className="cls-hero-visual-col">
            <div className="cls-hero-artwork-frame">
              <img
                src="/assets/classroom/hero-phong-hoc-tuong-tac.svg"
                alt="Phòng học tương tác – Lớp học số và học sinh khám phá biển đảo Việt Nam"
                className="cls-hero-artwork-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          2. BIỂU ĐỒ ĐIỂM SỐ, HUY HIỆU THÀNH TÍCH & HỒ SƠ ĐỒNG BỘ TÀI KHOẢN
          ========================================================================== */}
      {showAnalyticsDrawer && (
        <ClassroomAnalyticsAndBadges
          records={records}
          onSaveProfile={handleSaveStudentProfile}
          onResetRecords={handleResetAllRecords}
          onSelectTopicQuiz={handleJumpToTopicQuiz}
          onSwitchActivity={setActiveActivity}
        />
      )}

      {/* ==========================================================================
          3. LƯỚI 6 HOẠT ĐỘNG TƯƠNG TÁC (CÓ HÌNH ẢNH RIÊNG CHO TỪNG HOẠT ĐỘNG)
          ========================================================================== */}
      <div className="cls-six-activities-showcase">
        <div className="cls-activities-head">
          <div>
            <span className="cls-section-eyebrow">
              HỆ THỐNG 6 HOẠT ĐỘNG TƯƠNG TÁC &amp; KIỂM TRA ĐÁNH GIÁ
            </span>
            <h3>Chọn hình thức học tập hoặc thử thách để bắt đầu</h3>
          </div>
        </div>

        <div
          className="cls-six-activities-grid"
          role="tablist"
          aria-label="6 hoạt động học tập tương tác"
        >
          {INTERACTIVE_ACTIVITIES.map((act) => {
            const isActive = activeActivity === act.id
            return (
              <button
                key={act.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`cls-activity-visual-card ${
                  isActive ? 'active' : ''
                }`}
                onClick={() => {
                  setActiveActivity(act.id)
                  setInstantFeedbackBanner(null)
                }}
              >
                <div className="cls-act-card-img-wrap">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="cls-act-card-img"
                    loading="lazy"
                  />
                  <span className="cls-act-card-badge">{act.badge}</span>
                </div>
                <div className="cls-act-card-body">
                  <strong>{act.shortTitle}</strong>
                  <span>{act.subtitle}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* ==========================================================================
          HOẠT ĐỘNG 1: BÀI HỌC & TRẮC NGHIỆM THEO CHỦ ĐỀ (8 CHUYÊN ĐỀ x 10 CÂU)
          ========================================================================== */}
      {activeActivity === 'topic-quiz' && (
        <div className="classroom-topic-quiz-layout">
          {/* Danh sách 8 Chuyên đề bên trái */}
          <aside className="classroom-topics-sidebar">
            <div className="sidebar-section-head">
              <h4>8 Chuyên đề Học tập THPT</h4>
              <span>Mỗi chuyên đề gồm tóm tắt bài học &amp; 10 câu hỏi</span>
            </div>

            <div className="topics-selector-list">
              {CLASSROOM_TOPICS.map((topic) => {
                const isSelected = topic.id === currentTopic.id
                const mastery = records.topicMastery?.[topic.id]
                return (
                  <button
                    key={topic.id}
                    type="button"
                    className={`topic-selector-card ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelectTopic(topic.id)}
                  >
                    <div className="topic-selector-top">
                      <span className="topic-code-pill">{topic.code}</span>
                      {mastery?.completed ? (
                        <span className="topic-done-badge">
                          <CheckCircle2 size={13} /> {mastery.bestScore10}/10
                        </span>
                      ) : (
                        <span className="topic-count-badge">10 câu</span>
                      )}
                    </div>
                    <h5>{topic.title}</h5>
                    <p>{topic.shortDesc}</p>
                  </button>
                )
              })}
            </div>
          </aside>

          {/* Khung Bài học tóm tắt & Làm bài Trắc nghiệm bên phải */}
          <div className="classroom-quiz-main-panel">
            {/* Thẻ Tóm tắt kiến thức trọng tâm của Chuyên đề đang chọn */}
            <div className="topic-overview-card">
              <div className="topic-overview-head">
                <div>
                  <span className="topic-overview-eyebrow">
                    {currentTopic.code} • {currentTopic.badge}
                  </span>
                  <h3>{currentTopic.title}</h3>
                </div>
                <img
                  src={currentTopic.image}
                  alt={currentTopic.title}
                  className="topic-overview-thumb"
                />
              </div>

              <div className="topic-summary-bullets">
                <strong>Kiến thức cốt lõi cần nắm trước khi làm bài:</strong>
                <ul>
                  {currentTopic.summaryPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>

            {!topicSubmitted ? (
              <div className="quiz-interactive-box">
                <div className="quiz-progress-strip">
                  <div className="quiz-progress-info">
                    <span>
                      Câu hỏi <strong>{topicCurrentQIdx + 1}</strong> /{' '}
                      {currentTopic.questions.length}
                    </span>
                    <span
                      className={`quiz-diff-tag ${
                        DIFFICULTY_LABELS[activeTopicQuestion.difficulty]?.cls || ''
                      }`}
                    >
                      {DIFFICULTY_LABELS[activeTopicQuestion.difficulty]?.text}
                    </span>
                  </div>

                  <div className="cls-instant-toggle-wrap">
                    <label className="cls-instant-checkbox">
                      <input
                        type="checkbox"
                        checked={topicInstantCheck}
                        onChange={(e) => {
                          setTopicInstantCheck(e.target.checked)
                          if (!e.target.checked) setInstantFeedbackBanner(null)
                        }}
                      />
                      <span>Phản hồi đáp án tức thì</span>
                    </label>
                    <span className="quiz-answered-counter">
                      Đã chọn: <strong>{answeredCountInTopic}</strong>/
                      {currentTopic.questions.length} câu
                    </span>
                  </div>
                </div>

                {/* Dải số thứ tự câu hỏi 1 -> 10 */}
                <div className="quiz-number-pills">
                  {currentTopic.questions.map((q, idx) => {
                    const isAnswered = topicUserAnswers[q.id] !== undefined
                    const isCurrent = idx === topicCurrentQIdx
                    return (
                      <button
                        key={q.id}
                        type="button"
                        className={`quiz-num-pill ${isCurrent ? 'current' : ''} ${
                          isAnswered ? 'answered' : ''
                        }`}
                        onClick={() => {
                          setTopicCurrentQIdx(idx)
                          setInstantFeedbackBanner(null)
                        }}
                      >
                        {idx + 1}
                      </button>
                    )
                  })}
                </div>

                {/* Nội dung câu hỏi hiện tại */}
                <div className="quiz-question-card">
                  <h4 className="quiz-question-title">
                    Câu {topicCurrentQIdx + 1}: {activeTopicQuestion.question}
                  </h4>

                  <div className="quiz-options-grid">
                    {activeTopicQuestion.options.map((optText, optIdx) => {
                      const chosenIdx = topicUserAnswers[activeTopicQuestion.id]
                      const isChosen = chosenIdx === optIdx
                      const optionLetter = String.fromCharCode(65 + optIdx)
                      let feedbackCls = ''
                      if (topicInstantCheck && chosenIdx !== undefined) {
                        if (optIdx === activeTopicQuestion.correctIndex) {
                          feedbackCls = 'correct-ans'
                        } else if (isChosen) {
                          feedbackCls = 'wrong-ans'
                        }
                      } else if (isChosen) {
                        feedbackCls = 'selected'
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          className={`quiz-option-btn ${feedbackCls}`}
                          onClick={() =>
                            handleChooseTopicOption(
                              activeTopicQuestion,
                              optIdx
                            )
                          }
                        >
                          <span className="option-letter">{optionLetter}</span>
                          <span className="option-text">{optText}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Hiệu ứng phản hồi câu trả lời tức thì */}
                  {instantFeedbackBanner &&
                    topicUserAnswers[activeTopicQuestion.id] !== undefined && (
                      <div
                        className={`cls-instant-feedback-box ${
                          instantFeedbackBanner.isCorrect
                            ? 'is-correct'
                            : 'is-wrong'
                        }`}
                      >
                        <strong>{instantFeedbackBanner.title}</strong>
                        <p>{instantFeedbackBanner.explanation}</p>
                        <small>
                          Nguồn kiểm chứng: {instantFeedbackBanner.source}
                        </small>
                      </div>
                    )}
                </div>

                {/* Điều hướng Câu trước / Câu tiếp / Nộp bài */}
                <div className="quiz-bottom-controls">
                  <button
                    type="button"
                    className="quiz-nav-btn"
                    disabled={topicCurrentQIdx === 0}
                    onClick={() => {
                      setTopicCurrentQIdx((i) => Math.max(0, i - 1))
                      setInstantFeedbackBanner(null)
                    }}
                  >
                    <ArrowLeft size={16} />
                    <span>Câu trước</span>
                  </button>

                  <div className="quiz-submit-group">
                    {topicCurrentQIdx < currentTopic.questions.length - 1 ? (
                      <button
                        type="button"
                        className="quiz-nav-btn primary"
                        onClick={() => {
                          setTopicCurrentQIdx((i) =>
                            Math.min(currentTopic.questions.length - 1, i + 1)
                          )
                          setInstantFeedbackBanner(null)
                        }}
                      >
                        <span>Câu tiếp theo</span>
                        <ArrowRight size={16} />
                      </button>
                    ) : null}

                    <button
                      type="button"
                      className="btn-primary-gold"
                      onClick={handleSubmitTopicQuiz}
                    >
                      <CheckCircle2 size={17} />
                      <span>
                        Nộp bài &amp; Chấm điểm ({answeredCountInTopic}/
                        {currentTopic.questions.length})
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* BẢNG KẾT QUẢ & ĐÁP ÁN CHI TIẾT SAU KHI HOÀN THÀNH */
              <div className="quiz-result-report">
                <div className="result-summary-banner">
                  <div className="result-score-circle">
                    <strong>{topicResultSummary?.score10.toFixed(1)}</strong>
                    <span>/ 10 điểm</span>
                  </div>
                  <div className="result-summary-info">
                    <h4>
                      Kết quả hoàn thành: {currentTopic.code} —{' '}
                      {currentTopic.title}
                    </h4>
                    <div className="result-metrics-row">
                      <span className="metric-pill correct">
                        <CheckCircle2 size={15} /> Trả lời đúng:{' '}
                        <strong>{topicResultSummary?.correctCount} câu</strong>
                      </span>
                      <span className="metric-pill wrong">
                        <XCircle size={15} /> Trả lời sai / Chưa chọn:{' '}
                        <strong>{topicResultSummary?.wrongCount} câu</strong>
                      </span>
                      <span className="metric-pill accuracy">
                        Tỷ lệ chính xác:{' '}
                        <strong>{topicResultSummary?.accuracyPercent}%</strong>
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-primary-gold"
                    onClick={handleRetryTopicQuiz}
                  >
                    <RotateCcw size={16} />
                    <span>Làm lại bài này</span>
                  </button>
                </div>

                <h4 className="review-list-heading">
                  Chi tiết Đáp án, Giải thích &amp; Nguồn tham khảo (10 câu):
                </h4>

                <div className="review-questions-list">
                  {currentTopic.questions.map((q, idx) => {
                    const userChoice = topicUserAnswers[q.id]
                    const isCorrect = userChoice === q.correctIndex
                    return (
                      <div
                        key={q.id}
                        className={`review-question-item ${
                          isCorrect ? 'is-correct' : 'is-wrong'
                        }`}
                      >
                        <div className="review-q-header">
                          <span className="review-q-status">
                            {isCorrect ? (
                              <>
                                <CheckCircle2 size={16} /> Câu {idx + 1}: Chính xác
                              </>
                            ) : (
                              <>
                                <XCircle size={16} /> Câu {idx + 1}: Chưa chính xác
                              </>
                            )}
                          </span>
                          <span
                            className={`quiz-diff-tag ${
                              DIFFICULTY_LABELS[q.difficulty]?.cls || ''
                            }`}
                          >
                            {DIFFICULTY_LABELS[q.difficulty]?.text}
                          </span>
                        </div>

                        <h5>{q.question}</h5>

                        <div className="review-answers-compare">
                          <div className="ans-row">
                            <span>Lựa chọn của bạn:</span>
                            <strong className={isCorrect ? 'txt-green' : 'txt-red'}>
                              {userChoice !== undefined
                                ? `${String.fromCharCode(65 + userChoice)}. ${
                                    q.options[userChoice]
                                  }`
                                : 'Chưa chọn đáp án'}
                            </strong>
                          </div>
                          {!isCorrect && (
                            <div className="ans-row">
                              <span>Đáp án đúng:</span>
                              <strong className="txt-green">
                                {String.fromCharCode(65 + q.correctIndex)}.{' '}
                                {q.options[q.correctIndex]}
                              </strong>
                            </div>
                          )}
                        </div>

                        <div className="review-explanation-box">
                          <p>
                            <strong>Giải thích kiến thức:</strong> {q.explanation}
                          </p>
                          <span className="review-source-tag">
                            Nguồn tham khảo: {q.source}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================================================
          HOẠT ĐỘNG 2: CÂU HỎI ĐÚNG / SAI CÓ GIẢI THÍCH (16 NHẬN ĐỊNH)
          ========================================================================== */}
      {activeActivity === 'true-false' && (
        <div className="classroom-tf-section">
          <div className="tf-top-toolbar">
            <div>
              <h3>Hoạt động Đúng / Sai có Giải thích Pháp lý &amp; Lịch sử</h3>
              <p>
                Đọc kỹ từng nhận định dưới đây và chọn <strong>ĐÚNG</strong> hoặc{' '}
                <strong>SAI</strong>. Sau khi nộp bài, hệ thống sẽ chấm điểm và
                giải thích chi tiết từng câu.
              </p>
            </div>

            <div className="tf-filter-pills">
              {[
                { id: 'all', label: 'Tất cả (16 câu)' },
                { id: 'easy', label: 'Cấp độ Dễ' },
                { id: 'medium', label: 'Trung bình' },
                { id: 'hard', label: 'Nâng cao' }
              ].map((flt) => (
                <button
                  key={flt.id}
                  type="button"
                  className={`toolbar-pill-btn ${
                    tfFilterDiff === flt.id ? 'active' : ''
                  }`}
                  onClick={() => handleResetTrueFalse(flt.id)}
                >
                  {flt.label}
                </button>
              ))}
            </div>
          </div>

          {tfSubmitted && tfResultSummary && (
            <div className="result-summary-banner">
              <div className="result-score-circle">
                <strong>{tfResultSummary.score10.toFixed(1)}</strong>
                <span>/ 10 điểm</span>
              </div>
              <div className="result-summary-info">
                <h4>Kết quả bài tập Nhận định Đúng / Sai</h4>
                <div className="result-metrics-row">
                  <span className="metric-pill correct">
                    <CheckCircle2 size={15} /> Số câu đúng:{' '}
                    <strong>{tfResultSummary.correctCount}</strong>
                  </span>
                  <span className="metric-pill wrong">
                    <XCircle size={15} /> Số câu sai:{' '}
                    <strong>{tfResultSummary.wrongCount}</strong>
                  </span>
                  <span className="metric-pill accuracy">
                    Độ chính xác: <strong>{tfResultSummary.accuracyPercent}%</strong>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => handleResetTrueFalse(tfFilterDiff)}
              >
                <RotateCcw size={16} />
                <span>Làm lại bài Đúng/Sai</span>
              </button>
            </div>
          )}

          <div className="tf-questions-grid">
            {filteredTfQuestions.map((item, idx) => {
              const chosen = tfUserAnswers[item.id]
              const isCorrect = chosen === item.isTrue
              return (
                <div
                  key={item.id}
                  className={`tf-card ${
                    tfSubmitted
                      ? isCorrect
                        ? 'tf-correct'
                        : 'tf-wrong'
                      : chosen !== undefined
                        ? 'tf-answered'
                        : ''
                  }`}
                >
                  <div className="tf-card-top">
                    <span className="tf-topic-badge">
                      Câu {idx + 1} • {item.topicTitle}
                    </span>
                    <span
                      className={`quiz-diff-tag ${
                        DIFFICULTY_LABELS[item.difficulty]?.cls || ''
                      }`}
                    >
                      {DIFFICULTY_LABELS[item.difficulty]?.text}
                    </span>
                  </div>

                  <p className="tf-statement-text">&ldquo;{item.statement}&rdquo;</p>

                  <div className="tf-choice-buttons">
                    <button
                      type="button"
                      className={`tf-choice-btn true-btn ${
                        chosen === true ? 'selected' : ''
                      }`}
                      onClick={() => handleAnswerTrueFalse(item.id, true)}
                    >
                      <CheckCircle2 size={16} />
                      <span>ĐÚNG</span>
                    </button>
                    <button
                      type="button"
                      className={`tf-choice-btn false-btn ${
                        chosen === false ? 'selected' : ''
                      }`}
                      onClick={() => handleAnswerTrueFalse(item.id, false)}
                    >
                      <XCircle size={16} />
                      <span>SAI</span>
                    </button>
                  </div>

                  {tfSubmitted && (
                    <div className="review-explanation-box">
                      <p>
                        <strong>
                          {isCorrect ? '✓ Bạn trả lời ĐÚNG:' : '✗ Bạn trả lời SAI:'}
                        </strong>{' '}
                        {item.explanation}
                      </p>
                      <span className="review-source-tag">
                        Nguồn: {item.source}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {!tfSubmitted && (
            <div className="tf-submit-footer">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={handleSubmitTrueFalse}
              >
                <CheckCircle2 size={18} />
                <span>
                  Chấm điểm &amp; Xem Giải thích ({Object.keys(tfUserAnswers).length}/
                  {filteredTfQuestions.length} câu đã chọn)
                </span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==========================================================================
          HOẠT ĐỘNG 3: TRÒ CHƠI GHÉP SỰ KIỆN VỚI MỐC THỜI GIAN
          ========================================================================== */}
      {activeActivity === 'timeline-match' && (
        <div className="classroom-timeline-game">
          <div className="timeline-game-header">
            <div>
              <h3>Trò chơi Ghép Sự kiện Lịch sử – Pháp lý với Mốc thời gian</h3>
              <p>
                Hướng dẫn: Nhấp chọn <strong>1 Mốc thời gian</strong> ở cột bên
                trái, sau đó nhấp chọn <strong>1 Sự kiện tương ứng</strong> ở
                cột bên phải để nối chúng với nhau!
              </p>
            </div>

            <div className="timeline-set-switcher">
              {TIMELINE_MATCHING_SETS.map((set) => (
                <button
                  key={set.id}
                  type="button"
                  className={`toolbar-pill-btn ${
                    activeTimelineSetId === set.id ? 'active' : ''
                  }`}
                  onClick={() => handleSelectTimelineSet(set.id)}
                >
                  <Clock size={15} />
                  <span>{set.title.split(':')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="timeline-set-banner">
            <div>
              <h4>{currentTimelineSet.title}</h4>
              <p>{currentTimelineSet.subtitle}</p>
            </div>
            <div className="timeline-live-score">
              <span>
                Đã ghép đúng:{' '}
                <strong>
                  {matchedPairIds.length}/{currentTimelineSet.pairs.length}
                </strong>
              </span>
              <span>
                Lượt chọn sai: <strong>{wrongMatchAttempts}</strong>
              </span>
              <button
                type="button"
                className="coze-copy-btn"
                onClick={handleResetTimelineGame}
              >
                <RotateCcw size={14} />
                <span>Chơi lại màn này</span>
              </button>
            </div>
          </div>

          {matchFeedback && (
            <div
              className={`timeline-match-feedback ${
                matchFeedback.type === 'success' ? 'is-success' : 'is-error'
              }`}
            >
              <div>
                <strong>{matchFeedback.title}</strong>
                <p>{matchFeedback.text}</p>
                {matchFeedback.source && (
                  <small>Nguồn sử liệu: {matchFeedback.source}</small>
                )}
              </div>
            </div>
          )}

          {timelineSavedSummary && (
            <div className="result-summary-banner">
              <div className="result-score-circle">
                <strong>{timelineSavedSummary.score10.toFixed(1)}</strong>
                <span>/ 10 điểm</span>
              </div>
              <div className="result-summary-info">
                <h4>
                  Chúc mừng! Bạn đã ghép hoàn chỉnh toàn bộ 6 mốc thời gian của{' '}
                  {currentTimelineSet.title.split(':')[0]}
                </h4>
                <p>
                  Số cặp ghép đúng: {currentTimelineSet.pairs.length}/6 • Số lượt
                  nhầm: {wrongMatchAttempts} lượt.
                </p>
              </div>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={handleResetTimelineGame}
              >
                <RotateCcw size={16} />
                <span>Chơi lại từ đầu</span>
              </button>
            </div>
          )}

          <div className="timeline-matching-columns">
            <div className="matching-col">
              <h5>CỘT A: MỐC THỜI GIAN LỊCH SỬ</h5>
              <div className="matching-cards-stack">
                {currentTimelineSet.pairs.map((pair) => {
                  const isMatched = matchedPairIds.includes(pair.id)
                  const isSelected = selectedTimePairId === pair.id
                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={isMatched}
                      className={`matching-card time-card ${
                        isMatched
                          ? 'matched'
                          : isSelected
                            ? 'selected'
                            : ''
                      }`}
                      onClick={() => handleClickTimeCard(pair.id)}
                    >
                      <Clock size={17} />
                      <span>{pair.timeLabel}</span>
                      {isMatched && <CheckCircle2 size={17} className="match-ok-icon" />}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="matching-col">
              <h5>CỘT B: SỰ KIỆN LỊCH SỬ &amp; PHÁP LÝ</h5>
              <div className="matching-cards-stack">
                {shuffledEventsColumn.map((pair) => {
                  const isMatched = matchedPairIds.includes(pair.id)
                  const isSelected = selectedEventPairId === pair.id
                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={isMatched}
                      className={`matching-card event-card ${
                        isMatched
                          ? 'matched'
                          : isSelected
                            ? 'selected'
                            : ''
                      }`}
                      onClick={() => handleClickEventCard(pair.id)}
                    >
                      <p>{pair.eventText}</p>
                      {isMatched && (
                        <span className="matched-time-tag">
                          ✓ {pair.timeLabel}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
          HOẠT ĐỘNG 4: TRÒ CHƠI NHẬN DIỆN ĐỊA DANH TRÊN BẢN ĐỒ BIỂN ĐÔNG
          ========================================================================== */}
      {activeActivity === 'map-identify' && (
        <div className="classroom-map-game">
          <div className="map-game-top-bar">
            <div>
              <h3>
                Trò chơi Nhận diện Địa danh trên Bản đồ Biển Đông (12 Tọa độ Trọng điểm)
              </h3>
              <p>
                Đọc mô tả địa danh ở bảng câu hỏi bên trái, sau đó{' '}
                <strong>nhấp trực tiếp vào điểm đánh dấu trên Bản đồ</strong>{' '}
                (hoặc chọn nút tọa độ tương ứng) để xác định vị trí!
              </p>
            </div>
            <button
              type="button"
              className="coze-refresh-btn map-reset-dark"
              onClick={handleResetMapGame}
            >
              <RotateCcw size={15} />
              <span>Chơi lại từ câu 1</span>
            </button>
          </div>

          {mapGameFinished && mapResultSummary && (
            <div className="result-summary-banner">
              <div className="result-score-circle">
                <strong>{mapResultSummary.score10.toFixed(1)}</strong>
                <span>/ 10 điểm</span>
              </div>
              <div className="result-summary-info">
                <h4>Hoàn thành Trò chơi Nhận diện 12 Địa danh Bản đồ Biển Đông!</h4>
                <div className="result-metrics-row">
                  <span className="metric-pill correct">
                    <CheckCircle2 size={15} /> Nhận diện đúng:{' '}
                    <strong>{mapResultSummary.correctCount}/12 địa danh</strong>
                  </span>
                  <span className="metric-pill wrong">
                    <XCircle size={15} /> Nhầm lẫn:{' '}
                    <strong>{mapResultSummary.wrongCount} địa danh</strong>
                  </span>
                  <span className="metric-pill accuracy">
                    Độ chính xác: <strong>{mapResultSummary.accuracyPercent}%</strong>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={handleResetMapGame}
              >
                <RotateCcw size={16} />
                <span>Chơi lại Bản đồ</span>
              </button>
            </div>
          )}

          <div className="map-game-workspace-grid">
            <div className="map-game-prompt-panel">
              <div className="map-prompt-progress">
                <span>
                  Thử thách bản đồ: <strong>{mapRoundIdx + 1} / 12</strong>
                </span>
                <span
                  className={`quiz-diff-tag ${
                    DIFFICULTY_LABELS[currentTargetLocation.difficulty]?.cls || ''
                  }`}
                >
                  {DIFFICULTY_LABELS[currentTargetLocation.difficulty]?.text}
                </span>
              </div>

              <div className="map-clue-box">
                <span className="map-clue-region">
                  Khu vực: {currentTargetLocation.region}
                </span>
                <h4>Nhiệm vụ định vị #{mapRoundIdx + 1}:</h4>
                <p>{currentTargetLocation.clueQuestion}</p>
              </div>

              {mapLastFeedback && (
                <div
                  className={`map-click-feedback ${
                    mapLastFeedback.isCorrect ? 'is-correct' : 'is-wrong'
                  }`}
                >
                  <h5>
                    {mapLastFeedback.isCorrect
                      ? `✓ Chính xác! Đó là ${mapLastFeedback.target.name}`
                      : `✗ Chưa đúng! Bạn vừa chọn ${mapLastFeedback.chosen.name}`}
                  </h5>
                  <p>{mapLastFeedback.target.explanation}</p>
                  <small>Nguồn: {mapLastFeedback.target.source}</small>

                  {mapRoundIdx < MAP_GAME_LOCATIONS.length - 1 && (
                    <button
                      type="button"
                      className="btn-primary-gold map-next-btn"
                      onClick={handleNextMapQuestion}
                    >
                      <span>Sang địa danh tiếp theo</span>
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              )}

              <div className="map-quick-buttons-box">
                <span>
                  Hoặc nhấn chọn trực tiếp tên/mã điểm tương ứng trên bản đồ:
                </span>
                <div className="map-quick-buttons-grid">
                  {MAP_GAME_LOCATIONS.map((loc) => {
                    const ansForCurrent = mapAnswers[currentTargetLocation.id]
                    const isAlreadySolvedCorrectly = Object.values(
                      mapAnswers
                    ).some((a) => a.targetId === loc.id && a.isCorrect)
                    return (
                      <button
                        key={loc.id}
                        type="button"
                        disabled={Boolean(ansForCurrent)}
                        className={`map-quick-loc-btn ${
                          isAlreadySolvedCorrectly ? 'solved' : ''
                        }`}
                        onClick={() => handlePickMapMarker(loc)}
                      >
                        <strong>{loc.code}:</strong> {loc.shortLabel}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="map-game-canvas-wrap">
              <svg
                viewBox={`0 0 ${MAP_BOUNDS.width} ${MAP_BOUNDS.height}`}
                className="map-game-svg"
                role="img"
                aria-label="Bản đồ trò chơi nhận diện địa danh Biển Đông"
              >
                <defs>
                  <radialGradient id="gameSeaGrad" cx="55%" cy="48%" r="65%">
                    <stop offset="0%" stopColor="#29B4D1" />
                    <stop offset="65%" stopColor="#113747" />
                    <stop offset="100%" stopColor="#113747" />
                  </radialGradient>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width={MAP_BOUNDS.width}
                  height={MAP_BOUNDS.height}
                  fill="url(#gameSeaGrad)"
                />

                {[10, 14, 18, 22].map((lat) => {
                  const { y } = projectLatLng(lat, MAP_BOUNDS.minLng)
                  return (
                    <g key={`lat-${lat}`}>
                      <line
                        x1="0"
                        y1={y}
                        x2={MAP_BOUNDS.width}
                        y2={y}
                        stroke="rgba(125, 211, 252, 0.14)"
                        strokeDasharray="5 5"
                      />
                      <text
                        x="14"
                        y={y - 6}
                        fill="rgba(186, 230, 253, 0.6)"
                        fontSize="13"
                      >
                        {lat}°B
                      </text>
                    </g>
                  )
                })}

                <polygon
                  points={mainlandPolygonPoints}
                  fill="#113747"
                  stroke="#29B4D1"
                  strokeWidth="2"
                />

                <polyline
                  points={coastlinePolylinePoints}
                  fill="none"
                  stroke="#29B4D1"
                  strokeWidth="3.5"
                />

                <text
                  x="490"
                  y="415"
                  fill="rgba(255,255,255,0.22)"
                  fontSize="30"
                  fontWeight="800"
                  letterSpacing="5"
                >
                  BIỂN ĐÔNG
                </text>

                {projectedMapLocations.map((loc) => {
                  const isSolvedTarget =
                    mapAnswers[loc.id]?.isCorrect === true
                  const isCurrentAnsweredTarget =
                    mapAnswers[currentTargetLocation.id] &&
                    loc.id === currentTargetLocation.id

                  return (
                    <g
                      key={loc.id}
                      transform={`translate(${loc.pos.x}, ${loc.pos.y})`}
                      className="map-game-marker"
                      onClick={() => handlePickMapMarker(loc)}
                    >
                      <circle
                        r="22"
                        fill={
                          isSolvedTarget || isCurrentAnsweredTarget
                            ? 'rgba(16, 185, 129, 0.28)'
                            : 'rgba(251, 191, 36, 0.2)'
                        }
                      />
                      <circle
                        r="11"
                        fill={
                          isSolvedTarget || isCurrentAnsweredTarget
                            ? '#29B4D1'
                            : '#29B4D1'
                        }
                        stroke="#B6E0EB"
                        strokeWidth="2.5"
                      />
                      <text
                        y="-16"
                        textAnchor="middle"
                        fill="#B6E0EB"
                        fontSize="13"
                        fontWeight="800"
                        style={{
                          textShadow: '0 2px 4px rgba(0,0,0,0.9)'
                        }}
                      >
                        {isSolvedTarget || isCurrentAnsweredTarget
                          ? `${loc.code} (${loc.shortLabel})`
                          : loc.code}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
          HOẠT ĐỘNG 5: THỬ THÁCH KIẾN THỨC THEO CẤP ĐỘ (DỄ • TRUNG BÌNH • NÂNG CAO)
          ========================================================================== */}
      {activeActivity === 'level-challenge' && (
        <div className="classroom-level-challenge">
          <div className="level-selector-cards">
            {DIFFICULTY_LEVELS.map((lvl) => {
              const isSelected = selectedLevelId === lvl.id
              const countForLvl = ALL_MULTIPLE_CHOICE_QUESTIONS.filter(
                (q) => q.difficulty === lvl.id
              ).length
              return (
                <button
                  key={lvl.id}
                  type="button"
                  className={`level-tier-card ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectDifficultyLevel(lvl.id)}
                >
                  <div className="level-tier-top">
                    <Award size={20} />
                    <span className={`quiz-diff-tag diff-${lvl.id}`}>
                      {countForLvl} câu hỏi tổng hợp
                    </span>
                  </div>
                  <h4>{lvl.label}</h4>
                  <p>{lvl.desc}</p>
                </button>
              )
            })}
          </div>

          {levelSubmitted && levelResultSummary && (
            <div className="result-summary-banner">
              <div className="result-score-circle">
                <strong>{levelResultSummary.score10.toFixed(1)}</strong>
                <span>/ 10 điểm</span>
              </div>
              <div className="result-summary-info">
                <h4>Kết quả {levelResultSummary.activityTitle}</h4>
                <div className="result-metrics-row">
                  <span className="metric-pill correct">
                    <CheckCircle2 size={15} /> Trả lời đúng:{' '}
                    <strong>
                      {levelResultSummary.correctCount}/
                      {levelResultSummary.totalQuestions}
                    </strong>
                  </span>
                  <span className="metric-pill wrong">
                    <XCircle size={15} /> Trả lời sai:{' '}
                    <strong>{levelResultSummary.wrongCount}</strong>
                  </span>
                  <span className="metric-pill accuracy">
                    Độ chính xác:{' '}
                    <strong>{levelResultSummary.accuracyPercent}%</strong>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={handleRetryLevelChallenge}
              >
                <RotateCcw size={16} />
                <span>Thử sức lại cấp độ này</span>
              </button>
            </div>
          )}

          <div className="level-questions-stack">
            {levelQuestions.map((q, idx) => {
              const chosen = levelUserAnswers[q.id]
              const isCorrect = chosen === q.correctIndex
              return (
                <div key={q.id} className="level-question-card">
                  <div className="level-q-head">
                    <span className="topic-code-pill">
                      Câu {idx + 1} • {q.topicCode}: {q.topicTitle}
                    </span>
                    <span
                      className={`quiz-diff-tag ${
                        DIFFICULTY_LABELS[q.difficulty]?.cls || ''
                      }`}
                    >
                      {DIFFICULTY_LABELS[q.difficulty]?.text}
                    </span>
                  </div>

                  <h4>{q.question}</h4>

                  <div className="quiz-options-grid">
                    {q.options.map((optText, optIdx) => {
                      const isSelected = chosen === optIdx
                      const isRightOption = q.correctIndex === optIdx
                      let statusCls = ''
                      if (levelSubmitted) {
                        if (isRightOption) statusCls = 'correct-ans'
                        else if (isSelected && !isRightOption)
                          statusCls = 'wrong-ans'
                      } else if (isSelected) {
                        statusCls = 'selected'
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          className={`quiz-option-btn ${statusCls}`}
                          onClick={() => handleChooseLevelOption(q.id, optIdx)}
                        >
                          <span className="option-letter">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="option-text">{optText}</span>
                        </button>
                      )
                    })}
                  </div>

                  {levelSubmitted && (
                    <div className="review-explanation-box">
                      <p>
                        <strong>
                          {isCorrect
                            ? '✓ Chính xác!'
                            : `✗ Đáp án đúng là ${String.fromCharCode(
                                65 + q.correctIndex
                              )}:`}
                        </strong>{' '}
                        {q.explanation}
                      </p>
                      <span className="review-source-tag">
                        Nguồn: {q.source}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {!levelSubmitted && (
            <div className="tf-submit-footer">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={handleSubmitLevelChallenge}
              >
                <CheckCircle2 size={18} />
                <span>
                  Nộp bài Thử thách Cấp độ ({Object.keys(levelUserAnswers).length}/
                  {levelQuestions.length} câu đã chọn)
                </span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==========================================================================
          HOẠT ĐỘNG 6: BÀI KIỂM TRA TỔNG HỢP THPT (20 CÂU LIÊN CHUYÊN ĐỀ)
          ========================================================================== */}
      {activeActivity === 'comprehensive-exam' && (
        <div className="classroom-comprehensive-exam">
          <div className="cls-exam-top-banner">
            <div>
              <span className="cls-section-eyebrow">
                ĐỀ KIỂM TRA TỔNG HỢP KIẾN THỨC BIỂN ĐẢO CẤP THPT (ĐỀ SỐ #{examSeed})
              </span>
              <h3>Bài Kiểm tra Tổng hợp 20 Câu hỏi Liên Chuyên đề</h3>
              <p>
                Đề kiểm tra kết hợp 8 chuyên đề học tập (Tổng quan, Hoàng Sa –
                Trường Sa, Lịch sử, Pháp lý, UNCLOS 1982, Kinh tế – Quốc phòng, Môi
                trường và Trách nhiệm thanh niên). Đạt từ{' '}
                <strong>8.0/10 điểm</strong> để mở khóa huy hiệu{' '}
                <em>&ldquo;Thủ khoa Chủ quyền Biển đảo&rdquo;</em>!
              </p>
            </div>

            <div className="cls-exam-status-box">
              <div className="cls-exam-timer-pill">
                <Clock size={16} />
                <span>
                  Thời gian làm bài:{' '}
                  <strong>{formatDuration(examElapsedSeconds)}</strong>
                </span>
              </div>
              <div className="cls-exam-progress-pill">
                <span>
                  Đã trả lời:{' '}
                  <strong>
                    {answeredCountInExam}/{examQuestions.length} câu
                  </strong>
                </span>
              </div>
              <button
                type="button"
                className="coze-copy-btn"
                onClick={() => handleGenerateNewExam(true)}
              >
                <RotateCcw size={14} />
                <span>Đổi đề kiểm tra mới</span>
              </button>
            </div>
          </div>

          {/* Thanh tiến độ trả lời 20 câu của Đề kiểm tra tổng hợp */}
          <div className="cls-exam-progress-bar-wrap">
            <div
              className="cls-exam-progress-bar-fill"
              style={{
                width: `${Math.round(
                  (answeredCountInExam / Math.max(1, examQuestions.length)) * 100
                )}%`
              }}
            />
          </div>

          {examSubmitted && examResultSummary && (
            <div className="result-summary-banner">
              <div className="result-score-circle">
                <strong>{examResultSummary.score10.toFixed(1)}</strong>
                <span>/ 10 điểm</span>
              </div>
              <div className="result-summary-info">
                <h4>
                  Kết quả Bài Kiểm tra Tổng hợp 20 Câu (Đề số #{examSeed})
                </h4>
                <div className="result-metrics-row">
                  <span className="metric-pill correct">
                    <CheckCircle2 size={15} /> Số câu đúng:{' '}
                    <strong>
                      {examResultSummary.correctCount}/
                      {examResultSummary.totalQuestions}
                    </strong>
                  </span>
                  <span className="metric-pill wrong">
                    <XCircle size={15} /> Số câu sai:{' '}
                    <strong>{examResultSummary.wrongCount}</strong>
                  </span>
                  <span className="metric-pill accuracy">
                    Thời gian hoàn thành:{' '}
                    <strong>{formatDuration(examElapsedSeconds)}</strong>
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn-primary-gold"
                  onClick={() => handleGenerateNewExam(false)}
                >
                  <RotateCcw size={16} />
                  <span>Làm lại đề này</span>
                </button>
                <button
                  type="button"
                  className="coze-copy-btn"
                  onClick={() => handleGenerateNewExam(true)}
                >
                  <Sparkles size={15} />
                  <span>Thi đề tổng hợp mới</span>
                </button>
              </div>
            </div>
          )}

          <div className="level-questions-stack">
            {examQuestions.map((q, idx) => {
              const chosen = examAnswers[q.id]
              const isCorrect = chosen === q.correctIndex
              return (
                <div key={q.id} className="level-question-card">
                  <div className="level-q-head">
                    <span className="topic-code-pill">
                      Câu {idx + 1}/20 • {q.topicCode}: {q.topicTitle}
                    </span>
                    <span
                      className={`quiz-diff-tag ${
                        DIFFICULTY_LABELS[q.difficulty]?.cls || ''
                      }`}
                    >
                      {DIFFICULTY_LABELS[q.difficulty]?.text}
                    </span>
                  </div>

                  <h4>{q.question}</h4>

                  <div className="quiz-options-grid">
                    {q.options.map((optText, optIdx) => {
                      const isSelected = chosen === optIdx
                      const isRightOption = q.correctIndex === optIdx
                      let statusCls = ''
                      if (examSubmitted) {
                        if (isRightOption) statusCls = 'correct-ans'
                        else if (isSelected && !isRightOption)
                          statusCls = 'wrong-ans'
                      } else if (isSelected) {
                        statusCls = 'selected'
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          className={`quiz-option-btn ${statusCls}`}
                          onClick={() => handleChooseExamOption(q.id, optIdx)}
                        >
                          <span className="option-letter">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="option-text">{optText}</span>
                        </button>
                      )
                    })}
                  </div>

                  {examSubmitted && (
                    <div className="review-explanation-box">
                      <p>
                        <strong>
                          {isCorrect
                            ? '✓ Chính xác!'
                            : `✗ Đáp án đúng là ${String.fromCharCode(
                                65 + q.correctIndex
                              )}:`}
                        </strong>{' '}
                        {q.explanation}
                      </p>
                      <span className="review-source-tag">
                        Nguồn kiểm chứng: {q.source}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {!examSubmitted && (
            <div className="tf-submit-footer">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={handleSubmitComprehensiveExam}
              >
                <CheckCircle2 size={18} />
                <span>
                  Nộp Bài Kiểm tra Tổng hợp ({answeredCountInExam}/
                  {examQuestions.length} câu đã chọn)
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
