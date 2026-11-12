import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  Copy,
  Check,
  PlusCircle,
  Download,
  Upload,
  Eye,
  KeyRound,
  BarChart3,
  ArrowRight,
  UserPlus,
  LogIn,
  ShieldCheck,
  X,
  Clock
} from 'lucide-react'
import {
  getCurrentUser,
  getTeacherClassrooms,
  createTeacherClassroom,
  getClassroomStudentsProgress,
  joinClassroomByCode,
  leaveClassroomByCode,
  getStudentJoinedClassrooms,
  getUserProgressBundle,
  importStudentProgressSnapshotToClass,
  AUTH_EVENT_NAME
} from '../utils/authClassroomService'
import { CLASSROOM_TOPICS } from '../data/classroomData'
import { ALL_LIBRARY_LESSONS } from '../data/libraryData'

export default function TeacherClassroomDashboard({
  activeRole = 'student',
  onRoleChange,
  onOpenAuthModal,
  onSelectTopicQuiz = null
}) {
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser())
  const [classrooms, setClassrooms] = useState(() => getTeacherClassrooms())
  const [selectedClassCode, setSelectedClassCode] = useState('BIENDAO-11A1')
  const [refreshTick, setRefreshTick] = useState(0)

  // State cho Giáo viên tạo lớp mới
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newClassName, setNewClassName] = useState('')
  const [newClassCode, setNewClassCode] = useState('')
  const [newSchoolName, setNewSchoolName] = useState('')
  const [newGrade, setNewGrade] = useState('Khối 11 THPT')
  const [newTargetLessons, setNewTargetLessons] = useState(6)
  const [newAssignedTopics, setNewAssignedTopics] = useState([
    'cd-1',
    'cd-2',
    'cd-3',
    'cd-4'
  ])
  const [createClassMsg, setCreateClassMsg] = useState(null)

  // State cho Giáo viên xem chi tiết 1 học sinh
  const [inspectedStudent, setInspectedStudent] = useState(null)

  // State cho Giáo viên nhập gói tiến độ học sinh từ máy khác
  const [showImportModal, setShowImportModal] = useState(false)
  const [importJsonText, setImportJsonText] = useState('')
  const [importMsg, setImportMsg] = useState(null)

  // State cho Học sinh nhập mã lớp trực tiếp trên trang
  const [studentJoinCode, setStudentJoinCode] = useState('')
  const [studentJoinMsg, setStudentJoinMsg] = useState(null)
  const [copiedCode, setCopiedCode] = useState(false)

  useEffect(() => {
    const handleSync = () => {
      setCurrentUser(getCurrentUser())
      setClassrooms(getTeacherClassrooms())
      setRefreshTick((t) => t + 1)
    }
    window.addEventListener(AUTH_EVENT_NAME, handleSync)
    return () => window.removeEventListener(AUTH_EVENT_NAME, handleSync)
  }, [])

  // Dữ liệu lớp học hiện tại của Giáo viên
  const { classroom: activeClassroom, students: classStudents } =
    getClassroomStudentsProgress(selectedClassCode)

  // Dữ liệu tiến độ của Học sinh hiện tại (vừa học tự do vừa học theo lớp)
  const effectiveStudentId = currentUser?.id || 'guest-student-thpt'
  const studentBundle = getUserProgressBundle(effectiveStudentId)
  const joinedClassrooms = currentUser
    ? getStudentJoinedClassrooms(currentUser)
    : []

  const handleToggleAssignedTopic = (topicId) => {
    setNewAssignedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    )
  }

  const handleCreateClassroom = (e) => {
    e.preventDefault()
    setCreateClassMsg(null)
    const res = createTeacherClassroom({
      className: newClassName,
      classCode: newClassCode,
      schoolName: newSchoolName,
      grade: newGrade,
      assignedTopics: newAssignedTopics,
      targetLessonsCount: newTargetLessons
    })
    if (!res.ok) {
      setCreateClassMsg({ type: 'error', text: res.error })
      return
    }
    setClassrooms(getTeacherClassrooms())
    setSelectedClassCode(res.classroom.classCode)
    setNewClassName('')
    setNewClassCode('')
    setShowCreateForm(false)
    setCreateClassMsg({
      type: 'success',
      text: `Đã tạo lớp "${res.classroom.className}" thành công! Hãy gửi Mã lớp "${res.classroom.classCode}" cho học sinh tham gia.`
    })
  }

  const handleCopyClassCode = (code) => {
    if (!navigator?.clipboard?.writeText) return
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const handleExportClassCsv = () => {
    if (!activeClassroom || !classStudents) return
    const headers = [
      'STT',
      'Ma Hoc Sinh',
      'Ho va Ten',
      'Email',
      'Truong / Lop',
      'Bai Thu Vien Hoan Thanh (/16)',
      'Chuyen De Trac Nghiem (/8)',
      'Chuyen De Lop Giao',
      'Diem Trung Binh (He 10)',
      'Diem Cao Nhat (He 10)',
      'So Luot Lam Bai',
      'Huy Hieu Dat Duoc (/5)',
      'Tien Do Tong The (%)'
    ]
    const rows = classStudents.map((st, idx) => [
      idx + 1,
      `"${st.studentCode}"`,
      `"${st.fullName}"`,
      `"${st.email}"`,
      `"${st.grade} - ${st.schoolName}"`,
      `${st.completedLessonsCount}/16`,
      `${st.completedTopicsCount}/8`,
      `${st.completedAssignedTopicsCount}/${st.totalAssignedTopicsCount}`,
      st.averageScore10.toFixed(1),
      st.highestScore10.toFixed(1),
      st.totalAttempts,
      `${st.unlockedBadgesCount}/5`,
      `${st.overallCompletionPercent}%`
    ])
    const csvContent =
      '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `bang-diem-tien-trinh-${activeClassroom.classCode}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleImportStudentSubmit = (e) => {
    e.preventDefault()
    setImportMsg(null)
    const res = importStudentProgressSnapshotToClass(
      importJsonText,
      selectedClassCode
    )
    if (!res.ok) {
      setImportMsg({ type: 'error', text: res.error })
      return
    }
    setImportJsonText('')
    setShowImportModal(false)
    setRefreshTick((t) => t + 1)
    setCreateClassMsg({
      type: 'success',
      text: `Đã cập nhật hồ sơ tiến trình của học sinh "${res.student.fullName}" vào lớp ${selectedClassCode}!`
    })
  }

  const handleStudentJoinSubmit = (e) => {
    e.preventDefault()
    setStudentJoinMsg(null)
    if (!currentUser) {
      if (onOpenAuthModal) onOpenAuthModal('register')
      return
    }
    const res = joinClassroomByCode(studentJoinCode)
    if (!res.ok) {
      setStudentJoinMsg({ type: 'error', text: res.error })
      return
    }
    setStudentJoinCode('')
    setCurrentUser(res.user)
    setStudentJoinMsg({
      type: 'success',
      text: `Tham gia thành công lớp "${res.classroom.className}" (${res.classroom.classCode})! Bạn vừa có thể học tự do toàn web, vừa đồng bộ kết quả cho Giáo viên ${res.classroom.teacherName}.`
    })
  }

  return (
    <div className="dual-learning-hub-wrapper" data-tick={refreshTick}>
      {/* THANH TIÊU ĐỀ & TRẠNG THÁI TÀI KHOẢN HỢP NHẤT */}
      <div className="dual-hub-top-banner">
        <div className="dual-hub-top-left">
          <span className="dual-hub-eyebrow">
            <ShieldCheck size={14} />
            <span>MÔ HÌNH HỌC TẬP KÉP: VỪA HỌC TỰ DO • VỪA HỌC THEO LỚP</span>
          </span>
          <h3>
            {activeRole === 'teacher'
              ? 'Bảng Quản lý Lớp học & Theo dõi Tiến trình Học sinh (Dành cho Giáo viên)'
              : 'Không gian Học tập Cá nhân: Tự học Tự do & Lớp học của Tôi'}
          </h3>
          <p>
            {activeRole === 'teacher'
              ? 'Giáo viên tạo Mã lớp riêng, giao chuyên đề và theo dõi trực quan số bài đọc, điểm số 8 chuyên đề, huy hiệu và nhật ký làm bài của từng học sinh.'
              : 'Một tài khoản Học sinh duy nhất: Vừa thoải mái học tự do không cần lớp, vừa có thể nhập Mã lớp bất kỳ lúc nào để đồng bộ tiến trình với Giáo viên.'}
          </p>
        </div>

        <div className="dual-hub-top-right">
          {currentUser ? (
            <div className="dual-hub-logged-card">
              <div className="dual-logged-meta">
                <span className="logged-status-dot">
                  ● Đang đăng nhập ({currentUser.role === 'teacher' ? 'Giáo viên' : 'Học sinh'})
                </span>
                <strong>{currentUser.fullName}</strong>
                <span>
                  Mã: <code>{currentUser.studentCode}</code>
                  {currentUser.role === 'student' && (
                    <>
                      {' '}
                      • Lớp đã tham gia:{' '}
                      <strong>
                        {joinedClassrooms.length > 0
                          ? joinedClassrooms.map((c) => c.classCode).join(', ')
                          : 'Học tự do (Chưa gắn lớp)'}
                      </strong>
                    </>
                  )}
                </span>
              </div>
              {onOpenAuthModal && (
                <button
                  type="button"
                  className="btn-secondary-glass"
                  onClick={() => onOpenAuthModal('profile')}
                >
                  <Users size={15} />
                  <span>Quản lý Tài khoản &amp; Mã lớp</span>
                </button>
              )}
            </div>
          ) : (
            <div className="dual-hub-guest-actions">
              {onOpenAuthModal && (
                <>
                  <button
                    type="button"
                    className="btn-primary-gold"
                    onClick={() => onOpenAuthModal('register')}
                  >
                    <UserPlus size={16} />
                    <span>Đăng ký Tài khoản (Tự học / Theo lớp)</span>
                  </button>
                  <button
                    type="button"
                    className="btn-secondary-glass"
                    onClick={() => onOpenAuthModal('login')}
                  >
                    <LogIn size={16} />
                    <span>Đăng nhập / Dùng thử Mẫu</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* CHUYỂN ĐỔI GÓC NHÌN HỌC SINH / GIÁO VIÊN NGAY TRÊN BẢNG */}
      <div className="dual-role-switch-strip">
        <button
          type="button"
          className={`dual-role-tab ${activeRole === 'student' ? 'active' : ''}`}
          onClick={() => onRoleChange && onRoleChange('student')}
        >
          <Sparkles size={16} />
          <span>Chế độ Học sinh: Vừa Học tự do + Vừa Học theo Lớp</span>
        </button>
        <button
          type="button"
          className={`dual-role-tab ${activeRole === 'teacher' ? 'active' : ''}`}
          onClick={() => onRoleChange && onRoleChange('teacher')}
        >
          <GraduationCap size={16} />
          <span>Chế độ Giáo viên: Quản lý Mã Lớp &amp; Xem Tiến trình Học sinh</span>
        </button>
      </div>

      {/* ======================================================================
          PHẦN A: GIAO DIỆN DÀNH CHO HỌC SINH (VỪA HỌC TỰ DO + VỪA HỌC THEO LỚP)
      ====================================================================== */}
      {activeRole === 'student' && (
        <div className="student-dual-workspace">
          {studentJoinMsg && (
            <div className={`auth-feedback-banner ${studentJoinMsg.type}`}>
              <CheckCircle2 size={16} />
              <span>{studentJoinMsg.text}</span>
            </div>
          )}

          <div className="student-dual-cards-row">
            {/* THẺ 1: CHẾ ĐỘ HỌC TỰ DO (LUÔN HOẠT ĐỘNG) */}
            <div className="student-mode-card free-mode">
              <div className="smc-header">
                <span className="smc-pill cyan">HƯỚNG 01 • HỌC TỰ DO ĐỘC LẬP</span>
                <span className="smc-active-tag">● Luôn kích hoạt</span>
              </div>
              <h4>Tự do Khám phá Toàn bộ Hệ sinh thái Học liệu</h4>
              <p>
                Không cần phụ thuộc vào trường lớp cố định — bạn được toàn quyền
                học tập 16 bài học chuyên sâu và thử sức 8 chuyên đề tương tác,
                lưu tiến độ riêng theo tài khoản cá nhân:
              </p>

              <div className="smc-metrics-row">
                <div className="smc-metric">
                  <strong>
                    {studentBundle?.completedLessonIds?.length || 0} / 16
                  </strong>
                  <span>Bài Thư viện đã đọc</span>
                </div>
                <div className="smc-metric">
                  <strong>
                    {
                      CLASSROOM_TOPICS.filter(
                        (t) =>
                          studentBundle?.classroomRecords?.topicMastery?.[t.id]
                            ?.attempts > 0
                      ).length
                    }{' '}
                    / 8
                  </strong>
                  <span>Chuyên đề đã làm</span>
                </div>
                <div className="smc-metric">
                  <strong>
                    {(
                      studentBundle?.classroomRecords?.stats?.highestScore10 || 0
                    ).toFixed(1)}{' '}
                    đ
                  </strong>
                  <span>Điểm cao nhất</span>
                </div>
              </div>

              <div className="smc-cta-row">
                <Link to="/thu-vien-tri-thuc" className="btn-secondary-glass">
                  <BookOpen size={15} />
                  <span>Học tự do tại Thư viện</span>
                </Link>
                <Link to="/phong-hoc-tuong-tac" className="btn-primary-gold">
                  <Award size={15} />
                  <span>Luyện tập Phòng học</span>
                </Link>
              </div>
            </div>

            {/* THẺ 2: CHẾ ĐỘ HỌC THEO LỚP CỦA GIÁO VIÊN */}
            <div className="student-mode-card class-mode">
              <div className="smc-header">
                <span className="smc-pill gold">
                  HƯỚNG 02 • HỌC THEO LỚP CỦA GIÁO VIÊN
                </span>
                <span className="smc-active-tag">
                  {joinedClassrooms.length > 0
                    ? `● Đã tham gia ${joinedClassrooms.length} lớp`
                    : '○ Tùy chọn nhập Mã lớp'}
                </span>
              </div>
              <h4>Liên kết Lớp học bằng Mã Lớp &amp; Báo cáo Tiến trình</h4>
              <p>
                Khi Giáo viên trên trường cấp cho bạn một <strong>Mã lớp</strong>{' '}
                (ví dụ: <code>BIENDAO-11A1</code> hoặc <code>BIENDAO-12A2</code>),
                hãy nhập vào dưới đây. Bạn vẫn học tự do bình thường, đồng thời
                Giáo viên sẽ xem được tiến trình của bạn!
              </p>

              <form
                className="student-join-class-bar"
                onSubmit={handleStudentJoinSubmit}
              >
                <div className="sjc-input">
                  <KeyRound size={16} />
                  <input
                    type="text"
                    value={studentJoinCode}
                    onChange={(e) => setStudentJoinCode(e.target.value)}
                    placeholder="Nhập Mã lớp của Giáo viên (VD: BIENDAO-11A1)..."
                  />
                </div>
                <button type="submit" className="btn-primary-gold">
                  <PlusCircle size={15} />
                  <span>
                    {currentUser ? 'Tham gia Lớp' : 'Đăng ký & Vào Lớp'}
                  </span>
                </button>
              </form>

              {joinedClassrooms.length === 0 ? (
                <div className="smc-empty-class-box">
                  <span>
                    💡 Mẹo thử nghiệm nhanh: Hãy bấm{' '}
                    <strong>Đăng nhập / Dùng thử Mẫu</strong> ở góc trên hoặc nhập
                    mã lớp mẫu <code>BIENDAO-11A1</code> sau khi đăng nhập!
                  </span>
                </div>
              ) : (
                <div className="smc-joined-classes-stack">
                  {joinedClassrooms.map((cls) => {
                    const mastery =
                      studentBundle?.classroomRecords?.topicMastery || {}
                    const doneAssigned = (cls.assignedTopics || []).filter(
                      (tid) => mastery[tid]?.attempts > 0
                    ).length
                    return (
                      <div key={cls.id} className="smc-joined-class-card">
                        <div className="smc-jc-top">
                          <div>
                            <strong>{cls.className}</strong>
                            <span>
                              Mã lớp: <code>{cls.classCode}</code> • GV:{' '}
                              <strong>{cls.teacherName}</strong>
                            </span>
                          </div>
                          <span className="smc-jc-progress-badge">
                            Hoàn thành {doneAssigned}/
                            {cls.assignedTopics?.length || 0} chuyên đề lớp giao
                          </span>
                        </div>

                        <div className="smc-jc-topics-list">
                          {(cls.assignedTopics || []).map((tid) => {
                            const topicObj = CLASSROOM_TOPICS.find(
                              (t) => t.id === tid
                            )
                            const isDone = mastery[tid]?.attempts > 0
                            const bestScore = mastery[tid]?.bestScore10 || 0
                            return (
                              <button
                                key={tid}
                                type="button"
                                className={`smc-topic-task-chip ${
                                  isDone ? 'done' : 'pending'
                                }`}
                                onClick={() => {
                                  if (onSelectTopicQuiz) {
                                    onSelectTopicQuiz(tid)
                                  }
                                }}
                                title={
                                  topicObj
                                    ? `${topicObj.code}: ${topicObj.title}`
                                    : tid
                                }
                              >
                                <CheckCircle2 size={13} />
                                <span>
                                  {topicObj
                                    ? topicObj.code.replace('CHUYÊN ĐỀ ', 'CĐ ')
                                    : tid}
                                  {isDone ? ` (${bestScore.toFixed(1)}đ)` : ' (Làm bài)'}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          PHẦN B: GIAO DIỆN DÀNH CHO GIÁO VIÊN (QUẢN LÝ LỚP & THEO DÕI HỌC SINH)
      ====================================================================== */}
      {activeRole === 'teacher' && (
        <div className="teacher-dashboard-workspace">
          {createClassMsg && (
            <div className={`auth-feedback-banner ${createClassMsg.type}`}>
              <CheckCircle2 size={16} />
              <span>{createClassMsg.text}</span>
            </div>
          )}

          {/* THANH CHỌN LỚP HỌC & NÚT TẠO LỚP MỚI */}
          <div className="teacher-class-selector-bar">
            <div className="tcs-left">
              <span className="tcs-label">LỚP HỌC ĐANG QUẢN LÝ:</span>
              <div className="tcs-pills">
                {classrooms.map((cls) => (
                  <button
                    key={cls.id}
                    type="button"
                    className={`tcs-class-pill ${
                      selectedClassCode === cls.classCode ? 'active' : ''
                    }`}
                    onClick={() => setSelectedClassCode(cls.classCode)}
                  >
                    <strong>{cls.classCode}</strong>
                    <span>{cls.className}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="tcs-right">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => setShowCreateForm((v) => !v)}
              >
                <PlusCircle size={16} />
                <span>
                  {showCreateForm ? 'Đóng biểu mẫu' : 'Tạo Lớp học Mới'}
                </span>
              </button>
              <button
                type="button"
                className="btn-secondary-glass"
                onClick={() => setShowImportModal(true)}
              >
                <Upload size={15} />
                <span>Nhập Hồ sơ Học sinh</span>
              </button>
              <button
                type="button"
                className="btn-secondary-glass"
                onClick={handleExportClassCsv}
              >
                <Download size={15} />
                <span>Xuất Bảng điểm (.CSV)</span>
              </button>
            </div>
          </div>

          {/* BIỂU MẪU GIÁO VIÊN TẠO LỚP MỚI */}
          {showCreateForm && (
            <form
              className="teacher-create-class-form"
              onSubmit={handleCreateClassroom}
            >
              <h4>Khởi tạo Lớp học Mới &amp; Cấp Mã Lớp cho Học sinh</h4>
              <div className="tccf-grid">
                <label className="auth-field">
                  <span>Tên Lớp học (*):</span>
                  <input
                    type="text"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    placeholder="VD: Lớp 10A1 — Lịch sử & Địa lý Biển Đảo"
                    required
                  />
                </label>
                <label className="auth-field">
                  <span>Mã Lớp để Học sinh nhập (*):</span>
                  <input
                    type="text"
                    value={newClassCode}
                    onChange={(e) => setNewClassCode(e.target.value)}
                    placeholder="VD: BIENDAO-10A1"
                    required
                  />
                </label>
                <label className="auth-field">
                  <span>Trường THPT:</span>
                  <input
                    type="text"
                    value={newSchoolName}
                    onChange={(e) => setNewSchoolName(e.target.value)}
                    placeholder="VD: Trường THPT Lê Quý Đôn"
                  />
                </label>
                <label className="auth-field">
                  <span>Số bài Thư viện mục tiêu (1 – 16 bài):</span>
                  <input
                    type="number"
                    min={1}
                    max={16}
                    value={newTargetLessons}
                    onChange={(e) => setNewTargetLessons(e.target.value)}
                  />
                </label>
              </div>

              <div className="tccf-topics-picker">
                <span>Chọn các Chuyên đề Trắc nghiệm trọng tâm giao cho lớp:</span>
                <div className="tccf-topic-chips">
                  {CLASSROOM_TOPICS.map((t) => {
                    const checked = newAssignedTopics.includes(t.id)
                    return (
                      <button
                        key={t.id}
                        type="button"
                        className={`tccf-topic-chip ${
                          checked ? 'selected' : ''
                        }`}
                        onClick={() => handleToggleAssignedTopic(t.id)}
                      >
                        <CheckCircle2 size={14} />
                        <span>
                          {t.code.replace('CHUYÊN ĐỀ ', 'CĐ ')}: {t.title}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="tccf-actions">
                <button type="submit" className="btn-primary-gold">
                  <Check size={16} />
                  <span>Xác nhận Tạo Lớp học</span>
                </button>
              </div>
            </form>
          )}

          {/* THÔNG TIN TỔNG QUAN LỚP ĐANG CHỌN */}
          {activeClassroom && (
            <div className="teacher-class-overview-card">
              <div className="tcoc-info">
                <div className="tcoc-badge-row">
                  <span className="tcoc-code-pill">
                    MÃ LỚP: <strong>{activeClassroom.classCode}</strong>
                  </span>
                  <button
                    type="button"
                    className="tcoc-copy-btn"
                    onClick={() => handleCopyClassCode(activeClassroom.classCode)}
                  >
                    {copiedCode ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedCode ? 'Đã sao chép Mã lớp' : 'Chép Mã lớp gửi HS'}</span>
                  </button>
                  <span className="tcoc-meta-pill">
                    GV Phụ trách: <strong>{activeClassroom.teacherName}</strong>
                  </span>
                </div>
                <h4>{activeClassroom.className}</h4>
                <p>{activeClassroom.description}</p>
              </div>

              <div className="tcoc-kpis">
                <div className="tcoc-kpi-box">
                  <strong>{classStudents.length}</strong>
                  <span>Học sinh trong lớp</span>
                </div>
                <div className="tcoc-kpi-box">
                  <strong>
                    {classStudents.length > 0
                      ? (
                          classStudents.reduce(
                            (s, st) => s + st.averageScore10,
                            0
                          ) / classStudents.length
                        ).toFixed(1)
                      : '0.0'}{' '}
                    / 10
                  </strong>
                  <span>Điểm TB toàn lớp</span>
                </div>
                <div className="tcoc-kpi-box">
                  <strong>
                    {classStudents.length > 0
                      ? Math.round(
                          classStudents.reduce(
                            (s, st) => s + st.overallCompletionPercent,
                            0
                          ) / classStudents.length
                        )
                      : 0}
                    %
                  </strong>
                  <span>Tỷ lệ hoàn thành TB</span>
                </div>
              </div>
            </div>
          )}

          {/* BẢNG DANH SÁCH HỌC SINH & TIẾN TRÌNH CHI TIẾT */}
          <div className="teacher-students-table-card">
            <div className="tstc-head">
              <h4>
                <BarChart3 size={18} />
                <span>
                  Bảng Theo dõi Tiến trình Học tập của Từng Học sinh ({classStudents.length}{' '}
                  học sinh)
                </span>
              </h4>
              <span className="tstc-hint">
                Học sinh vừa học tự do vừa làm bài của lớp — dữ liệu tự động cập
                nhật theo thời gian thực
              </span>
            </div>

            {classStudents.length === 0 ? (
              <div className="tstc-empty">
                <p>
                  Lớp học <strong>{activeClassroom?.classCode}</strong> hiện chưa
                  có học sinh nào tham gia. Hãy gửi Mã lớp{' '}
                  <code>{activeClassroom?.classCode}</code> cho học sinh nhập vào
                  mục <strong>Học theo Lớp</strong>!
                </p>
              </div>
            ) : (
              <div className="tstc-table-scroll">
                <table className="teacher-progress-table">
                  <thead>
                    <tr>
                      <th>Mã HS</th>
                      <th>Họ và tên Học sinh</th>
                      <th>Thư viện đã đọc</th>
                      <th>Chuyên đề Lớp giao</th>
                      <th>Tổng CĐ Tự học</th>
                      <th>Điểm TB / Cao nhất</th>
                      <th>Huy hiệu</th>
                      <th>Tiến độ Lớp</th>
                      <th>Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classStudents.map((st) => (
                      <tr key={st.studentId}>
                        <td>
                          <code className="st-code-tag">{st.studentCode}</code>
                        </td>
                        <td>
                          <div className="st-name-cell">
                            <strong>{st.fullName}</strong>
                            <span>
                              {st.grade} • {st.email}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="st-metric-pill">
                            <BookOpen size={13} /> {st.completedLessonsCount} / 16
                            bài
                          </span>
                        </td>
                        <td>
                          <span className="st-metric-pill highlight">
                            <CheckCircle2 size={13} />{' '}
                            {st.completedAssignedTopicsCount} /{' '}
                            {st.totalAssignedTopicsCount} CĐ
                          </span>
                        </td>
                        <td>
                          <span className="st-metric-pill">
                            {st.completedTopicsCount} / 8 CĐ ({st.totalAttempts}{' '}
                            lượt)
                          </span>
                        </td>
                        <td>
                          <div className="st-score-cell">
                            <strong>TB: {st.averageScore10.toFixed(1)}đ</strong>
                            <span>Cao nhất: {st.highestScore10.toFixed(1)}đ</span>
                          </div>
                        </td>
                        <td>
                          <span className="st-badge-count">
                            <Award size={14} /> {st.unlockedBadgesCount} / 5
                          </span>
                        </td>
                        <td>
                          <div className="st-progress-bar-cell">
                            <div className="st-prog-track">
                              <div
                                className="st-prog-fill"
                                style={{
                                  width: `${Math.max(
                                    6,
                                    st.overallCompletionPercent
                                  )}%`
                                }}
                              />
                            </div>
                            <strong>{st.overallCompletionPercent}%</strong>
                          </div>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="st-inspect-btn"
                            onClick={() => setInspectedStudent(st)}
                          >
                            <Eye size={14} />
                            <span>Xem hồ sơ</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================================
          MODAL XEM CHI TIẾT HỒ SƠ TIẾN TRÌNH CỦA 1 HỌC SINH (DÀNH CHO GIÁO VIÊN)
      ====================================================================== */}
      {inspectedStudent && (
        <div
          className="auth-modal-backdrop"
          onClick={() => setInspectedStudent(null)}
        >
          <div
            className="auth-modal-container student-inspect-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="auth-modal-header">
              <div>
                <span className="auth-modal-badge">
                  <GraduationCap size={14} />
                  <span>
                    BÁO CÁO CHI TIẾT TIẾN TRÌNH HỌC SINH • MÃ HS:{' '}
                    {inspectedStudent.studentCode}
                  </span>
                </span>
                <h3>
                  Học sinh: {inspectedStudent.fullName} ({inspectedStudent.grade})
                </h3>
              </div>
              <button
                type="button"
                className="auth-modal-close-btn"
                onClick={() => setInspectedStudent(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="auth-modal-body">
              <div className="inspect-summary-row">
                <div className="inspect-stat-box">
                  <span>Bài đọc Thư viện</span>
                  <strong>{inspectedStudent.completedLessonsCount} / 16 bài</strong>
                </div>
                <div className="inspect-stat-box">
                  <span>Chuyên đề đã làm</span>
                  <strong>{inspectedStudent.completedTopicsCount} / 8 CĐ</strong>
                </div>
                <div className="inspect-stat-box">
                  <span>Điểm Trung bình</span>
                  <strong>{inspectedStudent.averageScore10.toFixed(1)} / 10</strong>
                </div>
                <div className="inspect-stat-box">
                  <span>Điểm Cao nhất</span>
                  <strong>{inspectedStudent.highestScore10.toFixed(1)} / 10</strong>
                </div>
                <div className="inspect-stat-box">
                  <span>Huy hiệu đạt được</span>
                  <strong>{inspectedStudent.unlockedBadgesCount} / 5</strong>
                </div>
              </div>

              <div className="inspect-grid-2">
                {/* CỘT 1: ĐIỂM SỐ TỪNG CHUYÊN ĐỀ (CĐ 01 -> CĐ 08) */}
                <div className="inspect-panel">
                  <h5>1. Kết quả 8 Chuyên đề Trắc nghiệm</h5>
                  <div className="inspect-topics-list">
                    {CLASSROOM_TOPICS.map((topic) => {
                      const m =
                        inspectedStudent.classroomRecords?.topicMastery?.[
                          topic.id
                        ]
                      const isAssigned =
                        activeClassroom?.assignedTopics?.includes(topic.id)
                      return (
                        <div key={topic.id} className="inspect-topic-row">
                          <div>
                            <strong>
                              {topic.code.replace('CHUYÊN ĐỀ ', 'CĐ ')}:{' '}
                              {topic.title}
                            </strong>
                            {isAssigned && (
                              <span className="assigned-mini-badge">
                                Bài lớp giao
                              </span>
                            )}
                          </div>
                          {m && m.attempts > 0 ? (
                            <span className="inspect-score-pill done">
                              {m.bestScore10.toFixed(1)}/10 ({m.attempts} lượt)
                            </span>
                          ) : (
                            <span className="inspect-score-pill empty">
                              Chưa làm
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* CỘT 2: BÀI ĐỌC THƯ VIỆN & LỊCH SỬ NỘP BÀI */}
                <div className="inspect-panel">
                  <h5>
                    2. Bài học Thư viện Tri thức đã hoàn thành (
                    {inspectedStudent.completedLessonsCount}/16)
                  </h5>
                  <div className="inspect-lessons-chips">
                    {ALL_LIBRARY_LESSONS.map((lesson) => {
                      const isRead =
                        inspectedStudent.completedLessonIds?.includes(lesson.id)
                      return (
                        <span
                          key={lesson.id}
                          className={`inspect-lesson-chip ${
                            isRead ? 'read' : 'unread'
                          }`}
                        >
                          {isRead ? '✓ ' : '○ '}
                          {lesson.code}: {lesson.title}
                        </span>
                      )
                    })}
                  </div>

                  <h5 style={{ marginTop: '18px' }}>
                    3. Nhật ký các lần làm bài gần nhất (
                    {inspectedStudent.classroomRecords?.attemptHistory?.length ||
                      0}{' '}
                    lượt)
                  </h5>
                  <div className="inspect-history-list">
                    {(
                      inspectedStudent.classroomRecords?.attemptHistory || []
                    ).map((att) => (
                      <div key={att.attemptId} className="inspect-history-item">
                        <div>
                          <strong>{att.activityTitle}</strong>
                          <span>
                            Đúng {att.correctCount}/{att.totalQuestions} câu •{' '}
                            <Clock size={11} />{' '}
                            {new Date(att.completedAt).toLocaleDateString('vi-VN')}
                          </span>
                        </div>
                        <span className="inspect-score-pill done">
                          {Number(att.score10 || 0).toFixed(1)}đ
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL NHẬP HỒ SƠ TIẾN ĐỘ HỌC SINH TỪ THIẾT BỊ KHÁC */}
      {showImportModal && (
        <div
          className="auth-modal-backdrop"
          onClick={() => setShowImportModal(false)}
        >
          <div
            className="auth-modal-container"
            style={{ maxWidth: '620px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="auth-modal-header">
              <div>
                <span className="auth-modal-badge">
                  <Upload size={14} /> ĐỒNG BỘ HỒ SƠ HỌC SINH VÀO LỚP{' '}
                  {selectedClassCode}
                </span>
                <h3>Nhập Mã Đồng bộ Tiến độ từ Học sinh</h3>
              </div>
              <button
                type="button"
                className="auth-modal-close-btn"
                onClick={() => setShowImportModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="auth-modal-body">
              {importMsg && (
                <div className={`auth-feedback-banner ${importMsg.type}`}>
                  <span>{importMsg.text}</span>
                </div>
              )}
              <form onSubmit={handleImportStudentSubmit}>
                <p style={{ color: '#B6E0EB', marginBottom: '12px' }}>
                  Nếu học sinh làm bài trên một thiết bị khác (khi chưa bật
                  Supabase Cloud), học sinh chỉ cần bấm nút{' '}
                  <strong>&ldquo;Sao chép Mã đồng bộ Tiến độ&rdquo;</strong> trong
                  hồ sơ tài khoản và gửi cho Giáo viên dán vào ô dưới đây:
                </p>
                <textarea
                  rows={6}
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  placeholder='Dán chuỗi JSON "BIENDAO_STUDENT_PROGRESS_V1" của học sinh vào đây...'
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    padding: '12px',
                    background: '#113747',
                    border: '1px solid rgba(41, 180, 209, 0.4)',
                    color: '#FFFFFF',
                    fontFamily: 'monospace',
                    fontSize: '0.84rem',
                    marginBottom: '14px'
                  }}
                  required
                />
                <button type="submit" className="btn-primary-gold">
                  <Check size={16} />
                  <span>Cập nhật Học sinh vào Lớp {selectedClassCode}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
