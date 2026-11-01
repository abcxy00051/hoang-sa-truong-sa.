import React, { useState, useEffect } from 'react'
import {
  Search,
  BookOpen,
  ScrollText,
  Globe,
  Scale,
  HeartHandshake,
  Compass,
  ShieldCheck,
  Sparkles,
  Bookmark,
  CheckCircle2,
  Clock,
  ArrowLeft,
  ArrowRight,
  List,
  Award,
  ExternalLink,
  HelpCircle,
  FileText,
  Filter,
  X,
  Check
} from 'lucide-react'
import {
  LIBRARY_THEMATIC_MODULES,
  ALL_LIBRARY_LESSONS,
  LIBRARY_GRADES,
  RESEARCH_PROJECT_INFO
} from '../data/libraryData'

const MODULE_ICONS = {
  Globe: Globe,
  ScrollText: ScrollText,
  Scale: Scale,
  HeartHandshake: HeartHandshake,
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles
}

const STORAGE_SAVED_KEY = 'biendao_thpt_saved_lessons_v2'
const STORAGE_COMPLETED_KEY = 'biendao_thpt_completed_lessons_v2'

export default function KnowledgeLibraryModule({ activeRole = 'student' }) {
  const [selectedTopicId, setSelectedTopicId] = useState('all')
  const [selectedGrade, setSelectedGrade] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all') // 'all' | 'saved' | 'completed'
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLessonId, setActiveLessonId] = useState(null)
  const [readerFontSize, setReaderFontSize] = useState('normal') // 'normal' | 'large'

  // Quiz state for the currently open lesson
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  // Persistent Saved (Favorite) & Completed Progress State
  const [savedLessonIds, setSavedLessonIds] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_SAVED_KEY)
      return raw ? JSON.parse(raw) : ['cd01-bai-01', 'cd02-bai-01']
    } catch {
      return ['cd01-bai-01', 'cd02-bai-01']
    }
  })

  const [completedLessonIds, setCompletedLessonIds] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_COMPLETED_KEY)
      return raw ? JSON.parse(raw) : ['cd01-bai-01']
    } catch {
      return ['cd01-bai-01']
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(savedLessonIds))
    } catch {
      // Ignore storage errors
    }
  }, [savedLessonIds])

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_COMPLETED_KEY,
        JSON.stringify(completedLessonIds)
      )
    } catch {
      // Ignore storage errors
    }
  }, [completedLessonIds])

  const toggleSaveLesson = (lessonId) => {
    setSavedLessonIds((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const toggleCompleteLesson = (lessonId) => {
    setCompletedLessonIds((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const handleOpenLesson = (lessonId) => {
    setActiveLessonId(lessonId)
    setQuizAnswers({})
    setQuizSubmitted(false)
    const readerEl = document.getElementById('library-top-anchor')
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const totalLessonsCount = ALL_LIBRARY_LESSONS.length
  const completedCount = completedLessonIds.filter((id) =>
    ALL_LIBRARY_LESSONS.some((l) => l.id === id)
  ).length
  const progressPercent = Math.round(
    (completedCount / Math.max(1, totalLessonsCount)) * 100
  )

  // Filter modules & lessons for main view
  const filteredModules = LIBRARY_THEMATIC_MODULES.filter(
    (mod) => selectedTopicId === 'all' || mod.id === selectedTopicId
  )
    .map((mod) => {
      const matchingLessons = mod.lessons.filter((lesson) => {
        const matchGrade =
          selectedGrade === 'all' || lesson.gradeId === selectedGrade
        const matchStatus =
          statusFilter === 'all' ||
          (statusFilter === 'saved' && savedLessonIds.includes(lesson.id)) ||
          (statusFilter === 'completed' &&
            completedLessonIds.includes(lesson.id))

        const q = searchQuery.trim().toLowerCase()
        const matchSearch =
          !q ||
          lesson.title.toLowerCase().includes(q) ||
          lesson.shortDesc.toLowerCase().includes(q) ||
          mod.title.toLowerCase().includes(q) ||
          lesson.knowledgeSections.some((sec) =>
            sec.heading.toLowerCase().includes(q)
          )

        return matchGrade && matchStatus && matchSearch
      })

      return {
        ...mod,
        filteredLessons: matchingLessons
      }
    })
    .filter((mod) => mod.filteredLessons.length > 0)

  const activeLesson = activeLessonId
    ? ALL_LIBRARY_LESSONS.find((l) => l.id === activeLessonId)
    : null

  const activeLessonIndex = activeLesson
    ? ALL_LIBRARY_LESSONS.findIndex((l) => l.id === activeLesson.id)
    : -1

  const prevLesson =
    activeLessonIndex > 0 ? ALL_LIBRARY_LESSONS[activeLessonIndex - 1] : null
  const nextLesson =
    activeLessonIndex >= 0 && activeLessonIndex < ALL_LIBRARY_LESSONS.length - 1
      ? ALL_LIBRARY_LESSONS[activeLessonIndex + 1]
      : null

  const handleSelectQuizOption = (qIdx, optIdx) => {
    if (quizSubmitted) return
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
  }

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true)
    if (activeLesson && !completedLessonIds.includes(activeLesson.id)) {
      setCompletedLessonIds((prev) => [...prev, activeLesson.id])
    }
  }

  const scrollToReaderSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div id="library-top-anchor" className="knowledge-library-module">
      {/* =================================================================
          1. TOP RESEARCH BANNER & READING PROGRESS TRACKER
         ================================================================= */}
      <div className="lib-research-progress-bar">
        <div className="lib-research-info">
          <span className="lib-research-tag">
            HỌC LIỆU SỐ CHUYÊN SÂU • ĐỀ TÀI NGHIÊN CỨU KHOA HỌC THPT
          </span>
          <h3>“{RESEARCH_PROJECT_INFO.title}”</h3>
          <p>{RESEARCH_PROJECT_INFO.standardNote}</p>
        </div>

        <div className="lib-progress-widget">
          <div className="progress-widget-top">
            <span className="progress-label">
              <Award size={16} /> Tiến độ học tập của bạn:
            </span>
            <strong className="progress-numbers">
              {completedCount}/{totalLessonsCount} bài học ({progressPercent}%)
            </strong>
          </div>
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="progress-quick-filters">
            <button
              type="button"
              className={`prog-filter-btn ${statusFilter === 'all' ? 'active' : ''}`}
              onClick={() => {
                setStatusFilter('all')
                setActiveLessonId(null)
              }}
            >
              Tất cả ({totalLessonsCount})
            </button>
            <button
              type="button"
              className={`prog-filter-btn ${statusFilter === 'saved' ? 'active' : ''}`}
              onClick={() => {
                setStatusFilter(statusFilter === 'saved' ? 'all' : 'saved')
                setActiveLessonId(null)
              }}
            >
              <Bookmark size={13} /> Đã lưu ({savedLessonIds.length})
            </button>
            <button
              type="button"
              className={`prog-filter-btn ${
                statusFilter === 'completed' ? 'active' : ''
              }`}
              onClick={() => {
                setStatusFilter(
                  statusFilter === 'completed' ? 'all' : 'completed'
                )
                setActiveLessonId(null)
              }}
            >
              <CheckCircle2 size={13} /> Đã đọc ({completedCount})
            </button>
          </div>
        </div>
      </div>

      {/* =================================================================
          2. DEDICATED FULL LESSON READER PAGE VIEW (WHEN A LESSON IS OPEN)
         ================================================================= */}
      {activeLesson ? (
        <div className="lesson-dedicated-reader">
          {/* Top Reader Action Bar */}
          <div className="reader-top-nav-bar">
            <button
              type="button"
              className="reader-back-library-btn"
              onClick={() => setActiveLessonId(null)}
            >
              <ArrowLeft size={16} />
              <span>Quay lại Danh mục 7 Chuyên đề</span>
            </button>

            <div className="reader-top-controls">
              <div className="font-size-switch">
                <span>Cỡ chữ:</span>
                <button
                  type="button"
                  className={readerFontSize === 'normal' ? 'active' : ''}
                  onClick={() => setReaderFontSize('normal')}
                >
                  A
                </button>
                <button
                  type="button"
                  className={readerFontSize === 'large' ? 'active' : ''}
                  onClick={() => setReaderFontSize('large')}
                >
                  A+
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
                      onClick={() => scrollToReaderSection('sec-terms')}
                    >
                      III. Phân tích &amp; Giải thích thuật ngữ
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-archive')}
                    >
                      IV. Tư liệu &amp; Trích dẫn minh họa
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-takeaways')}
                    >
                      V. Kiến thức cần ghi nhớ
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-quiz')}
                    >
                      VI. Câu hỏi ôn tập &amp; Trắc nghiệm
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToReaderSection('sec-references')}
                    >
                      VII. Nguồn tài liệu tham khảo
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
                    {activeLesson.gradeLabel}
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

              {/* Featured Illustration & Source Caption */}
              <figure className="reader-figure-box">
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

              {/* III. PHÂN TÍCH & GIẢI THÍCH THUẬT NGỮ */}
              <section id="sec-terms" className="reader-block terms-block">
                <h2>
                  III. Phân tích chuyên sâu &amp; Giải thích thuật ngữ (Dành cho Học sinh THPT)
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

              {/* IV. TƯ LIỆU & VÍ DỤ MINH HỌA */}
              <section id="sec-archive" className="reader-block archive-block">
                <h2>IV. Tư liệu gốc &amp; Ví dụ minh họa</h2>
                <div className="archive-quote-card">
                  <h4>{activeLesson.illustrativeArchive.title}</h4>
                  <blockquote style={{ whiteSpace: 'pre-line' }}>
                    {activeLesson.illustrativeArchive.content}
                  </blockquote>
                  <p className="archive-citation">
                    <strong>Chú thích nguồn:</strong>{' '}
                    {activeLesson.illustrativeArchive.citation}
                  </p>
                </div>
              </section>

              {/* V. KIẾN THỨC CẦN GHI NHỚ */}
              <section id="sec-takeaways" className="reader-block takeaways-block">
                <h2>V. Kiến thức cốt lõi cần ghi nhớ</h2>
                <ul className="takeaways-list">
                  {activeLesson.keyTakeaways.map((point, idx) => (
                    <li key={idx}>
                      <span className="takeaway-num">0{idx + 1}</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* VI. CÂU HỎI ÔN TẬP & BÀI TẬP TRẮC NGHIỆM CUỐI BÀI */}
              <section id="sec-quiz" className="reader-block quiz-block">
                <h2>VI. Câu hỏi ôn tập &amp; Trắc nghiệm kiểm tra kiến thức</h2>

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

              {/* VII. NGUỒN TÀI LIỆU THAM KHẢO */}
              <section id="sec-references" className="reader-block references-block">
                <h2>VII. Nguồn tài liệu tham khảo chính thống</h2>
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
                    <span>Quay về Mục lục 7 Chuyên đề</span>
                  </button>
                )}
              </div>
            </article>
          </div>
        </div>
      ) : (
        /* =================================================================
           3. MAIN LIBRARY VIEW: TABLE OF CONTENTS, SEARCH & 7 THEMATIC AREAS
           ================================================================= */
        <>
          {/* 7 Thematic Modules Directory Cards (Table of Contents) */}
          <div className="library-topics-showcase">
            <div className="library-topics-header">
              <div>
                <span className="library-eyebrow-tag">
                  MỤC LỤC 7 CHUYÊN ĐỀ HỌC LIỆU CHUYÊN SÂU
                </span>
                <h3>Chọn chuyên đề hoặc xem toàn bộ hệ thống bài học</h3>
              </div>
              {selectedTopicId !== 'all' && (
                <button
                  type="button"
                  className="saved-shelf-toggle-btn"
                  onClick={() => setSelectedTopicId('all')}
                >
                  <span>Hiển thị tất cả 7 chuyên đề</span>
                </button>
              )}
            </div>

            <div
              className="library-seven-topics-grid"
              role="tablist"
              aria-label="Mục lục 7 chuyên đề"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedTopicId === 'all'}
                className={`library-topic-card ${
                  selectedTopicId === 'all' ? 'active' : ''
                }`}
                onClick={() => setSelectedTopicId('all')}
              >
                <div className="topic-card-top">
                  <div className="topic-icon-badge">
                    <BookOpen size={20} />
                  </div>
                  <span className="topic-count-pill">
                    7 Chuyên đề • {totalLessonsCount} Bài
                  </span>
                </div>
                <strong className="topic-short-title">
                  Tất cả 7 Chuyên đề
                </strong>
                <span className="topic-desc-snippet">
                  Xem toàn bộ bài giới thiệu tổng quan và hệ thống các bài học
                  chuyên sâu.
                </span>
              </button>

              {LIBRARY_THEMATIC_MODULES.map((mod) => {
                const IconComp = MODULE_ICONS[mod.iconName] || BookOpen
                const isSelected = selectedTopicId === mod.id
                const modCompleted = mod.lessons.filter((l) =>
                  completedLessonIds.includes(l.id)
                ).length

                return (
                  <button
                    key={mod.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`library-topic-card accent-${mod.accent} ${
                      isSelected ? 'active' : ''
                    }`}
                    onClick={() => setSelectedTopicId(mod.id)}
                  >
                    <div className="topic-card-top">
                      <div className="topic-icon-badge">
                        <IconComp size={20} />
                      </div>
                      <span className="topic-count-pill">
                        {modCompleted}/{mod.lessons.length} đã đọc
                      </span>
                    </div>
                    <strong className="topic-short-title">
                      {mod.shortTitle}
                    </strong>
                    <span className="topic-desc-snippet">{mod.subtitle}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Search & Grade Filter Bar */}
          <div className="library-filter-toolbar">
            <div className="library-search-box">
              <Search size={18} className="lib-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bài học, thuật ngữ, sự kiện lịch sử, điều luật (UNCLOS 1982, Châu bản, Đội Hoàng Sa, Kinh tế biển...)"
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
              <div className="filter-group-item">
                <span className="filter-group-label">
                  <Filter size={14} /> Khối lớp:
                </span>
                <div className="filter-pills-wrap">
                  {LIBRARY_GRADES.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      className={`lib-filter-pill ${
                        selectedGrade === g.id ? 'active' : ''
                      }`}
                      onClick={() => setSelectedGrade(g.id)}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7 Dedicated Thematic Sections (Each with Overview + Lesson Cards) */}
          <div className="thematic-sections-stack">
            {filteredModules.map((mod) => {
              const IconComp = MODULE_ICONS[mod.iconName] || BookOpen
              return (
                <section key={mod.id} className="thematic-module-section">
                  {/* Module Overview Header Card */}
                  <div className="thematic-overview-banner">
                    <div className="thematic-overview-top">
                      <div className="thematic-title-group">
                        <div className="thematic-icon-box">
                          <IconComp size={26} />
                        </div>
                        <div>
                          <span className="thematic-code-pill">
                            {mod.code} • {mod.gradeTarget}
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
                                {lesson.gradeLabel}
                              </span>
                            </div>
                            <div className="lib-doc-bottom-bar">
                              <span className="lib-verify-badge verified">
                                <ShieldCheck size={13} />
                                <span>Có nguồn tham khảo chuẩn</span>
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
                                  <FileText size={14} /> Bài học chuyên sâu (7 phần)
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
                              <span>Đọc toàn bộ bài học</span>
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
        </>
      )}
    </div>
  )
}
