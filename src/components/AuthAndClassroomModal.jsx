import React, { useState, useEffect } from 'react'
import {
  X,
  UserCheck,
  UserPlus,
  LogIn,
  LogOut,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  PlusCircle,
  KeyRound,
  ShieldCheck,
  Copy,
  Check,
  Users,
  Compass
} from 'lucide-react'
import {
  getCurrentUser,
  registerAccount,
  loginAccount,
  logoutAccount,
  joinClassroomByCode,
  leaveClassroomByCode,
  getStudentJoinedClassrooms,
  getUserProgressBundle,
  exportStudentProgressSnapshot,
  AUTH_EVENT_NAME
} from '../utils/authClassroomService'
import { CLASSROOM_TOPICS } from '../data/classroomData'

export default function AuthAndClassroomModal({
  isOpen,
  onClose,
  onRoleChange,
  initialTab = 'login'
}) {
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser())
  const [activeTab, setActiveTab] = useState(initialTab) // 'login' | 'register' | 'profile'

  // State đăng nhập
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // State đăng ký
  const [regRole, setRegRole] = useState('student')
  const [regName, setRegName] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regSchool, setRegSchool] = useState('')
  const [regGrade, setRegGrade] = useState('')
  const [regClassCode, setRegClassCode] = useState('')

  // State nhập mã lớp cho học sinh đã đăng nhập
  const [joinCodeInput, setJoinCodeInput] = useState('')
  const [feedbackMsg, setFeedbackMsg] = useState(null)
  const [copiedSnapshot, setCopiedSnapshot] = useState(false)

  useEffect(() => {
    const syncUser = () => {
      const usr = getCurrentUser()
      setCurrentUser(usr)
      if (usr) {
        setActiveTab('profile')
      }
    }
    syncUser()
    window.addEventListener(AUTH_EVENT_NAME, syncUser)
    return () => window.removeEventListener(AUTH_EVENT_NAME, syncUser)
  }, [isOpen])

  if (!isOpen) return null

  const joinedClassrooms = currentUser
    ? getStudentJoinedClassrooms(currentUser)
    : []
  const userBundle = currentUser ? getUserProgressBundle(currentUser.id) : null

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setFeedbackMsg(null)
    const res = loginAccount({ email: loginEmail, password: loginPassword })
    if (!res.ok) {
      setFeedbackMsg({ type: 'error', text: res.error })
      return
    }
    setCurrentUser(res.user)
    if (onRoleChange && res.user?.role) {
      onRoleChange(res.user.role)
    }
    setFeedbackMsg({
      type: 'success',
      text: `Đăng nhập thành công! Chào mừng ${res.user.fullName}.`
    })
    setActiveTab('profile')
  }

  const handleQuickDemoLogin = (demoType) => {
    setFeedbackMsg(null)
    const credentials =
      demoType === 'teacher'
        ? { email: 'giaovien@biendao.edu.vn', password: '123456' }
        : { email: 'hocsinh@biendao.edu.vn', password: '123456' }

    const res = loginAccount(credentials)
    if (res.ok) {
      setCurrentUser(res.user)
      if (onRoleChange && res.user?.role) {
        onRoleChange(res.user.role)
      }
      setFeedbackMsg({
        type: 'success',
        text: `Đã đăng nhập nhanh tài khoản mẫu: ${res.user.fullName} (${
          res.user.role === 'teacher' ? 'Giáo viên' : 'Học sinh'
        })`
      })
      setActiveTab('profile')
    }
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    setFeedbackMsg(null)
    const res = registerAccount({
      fullName: regName,
      email: regEmail,
      password: regPassword,
      role: regRole,
      schoolName: regSchool,
      grade: regGrade,
      classCode: regRole === 'student' ? regClassCode : ''
    })
    if (!res.ok) {
      setFeedbackMsg({ type: 'error', text: res.error })
      return
    }
    setCurrentUser(res.user)
    if (onRoleChange && res.user?.role) {
      onRoleChange(res.user.role)
    }
    setFeedbackMsg({
      type: 'success',
      text: res.joinedClassroom
        ? `Đăng ký thành công! Bạn đã kích hoạt chế độ Học tự do kết hợp tham gia lớp "${res.joinedClassroom.className}" (${res.joinedClassroom.classCode}).`
        : 'Đăng ký tài khoản thành công! Bạn có thể bắt đầu Học tự do ngay và nhập Mã lớp bất cứ lúc nào.'
    })
    setActiveTab('profile')
  }

  const handleJoinClass = (e) => {
    e.preventDefault()
    setFeedbackMsg(null)
    const res = joinClassroomByCode(joinCodeInput)
    if (!res.ok) {
      setFeedbackMsg({ type: 'error', text: res.error })
      return
    }
    setCurrentUser(res.user)
    setJoinCodeInput('')
    setFeedbackMsg({
      type: 'success',
      text: `Đã tham gia lớp "${res.classroom.className}" (${res.classroom.classCode})! Tiến trình tự học và làm bài của bạn hiện đã được đồng bộ cho Giáo viên ${res.classroom.teacherName}.`
    })
  }

  const handleLeaveClass = (code) => {
    const res = leaveClassroomByCode(code)
    if (res.ok) {
      setCurrentUser(res.user)
      setFeedbackMsg({
        type: 'success',
        text: `Đã rời khỏi mã lớp ${code}. Toàn bộ tiến trình tự học cá nhân của bạn vẫn được giữ nguyên 100%.`
      })
    }
  }

  const handleLogout = () => {
    logoutAccount()
    setCurrentUser(null)
    setFeedbackMsg({
      type: 'success',
      text: 'Đã đăng xuất tài khoản. Bạn đang ở chế độ Khách (Học tự do trên trình duyệt).'
    })
    setActiveTab('login')
  }

  const handleCopyProgressSnapshot = () => {
    if (!navigator?.clipboard?.writeText) return
    const json = exportStudentProgressSnapshot()
    navigator.clipboard.writeText(json)
    setCopiedSnapshot(true)
    setTimeout(() => setCopiedSnapshot(false), 2400)
  }

  return (
    <div className="auth-modal-backdrop" onClick={onClose}>
      <div
        className="auth-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-modal-header">
          <div>
            <span className="auth-modal-badge">
              <ShieldCheck size={14} />
              <span>HỆ THỐNG TÀI KHOẢN HỢP NHẤT: HỌC TỰ DO &amp; HỌC THEO LỚP</span>
            </span>
            <h3>
              {currentUser
                ? `Hồ sơ Tài khoản: ${currentUser.fullName}`
                : 'Đăng nhập / Đăng ký Tài khoản Học tập & Giảng dạy'}
            </h3>
          </div>
          <button
            type="button"
            className="auth-modal-close-btn"
            onClick={onClose}
            aria-label="Đóng hộp thoại"
          >
            <X size={20} />
          </button>
        </div>

        {/* THANH CHUYỂN ĐỔI TAB */}
        {!currentUser && (
          <div className="auth-modal-tabs">
            <button
              type="button"
              className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('login')
                setFeedbackMsg(null)
              }}
            >
              <LogIn size={16} />
              <span>Đăng nhập</span>
            </button>
            <button
              type="button"
              className={`auth-tab-btn ${
                activeTab === 'register' ? 'active' : ''
              }`}
              onClick={() => {
                setActiveTab('register')
                setFeedbackMsg(null)
              }}
            >
              <UserPlus size={16} />
              <span>Đăng ký Tài khoản mới</span>
            </button>
          </div>
        )}

        {feedbackMsg && (
          <div className={`auth-feedback-banner ${feedbackMsg.type}`}>
            <CheckCircle2 size={16} />
            <span>{feedbackMsg.text}</span>
          </div>
        )}

        <div className="auth-modal-body">
          {/* ================================================================
              TRƯỜNG HỢP 1: CHƯA ĐĂNG NHẬP -> HIỂN THỊ ĐĂNG NHẬP HOẶC ĐĂNG KÝ
          ================================================================ */}
          {!currentUser && activeTab === 'login' && (
            <div className="auth-login-layout">
              <form className="auth-form-card" onSubmit={handleLoginSubmit}>
                <h4>Đăng nhập vào Hệ sinh thái Số Biển Đảo</h4>
                <p className="auth-form-desc">
                  Lưu trữ xuyên suốt tiến trình <strong>Học tự do</strong> trên
                  mọi chuyên đề và đồng bộ tự động với <strong>Lớp học</strong>{' '}
                  của Giáo viên.
                </p>

                <label className="auth-field">
                  <span>Email hoặc Tên đăng nhập:</span>
                  <input
                    type="text"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Ví dụ: hocsinh@biendao.edu.vn"
                    required
                  />
                </label>

                <label className="auth-field">
                  <span>Mật khẩu:</span>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    required
                  />
                </label>

                <button type="submit" className="btn-primary-gold auth-submit-btn">
                  <LogIn size={17} />
                  <span>Đăng nhập ngay</span>
                </button>
              </form>

              <div className="auth-quick-demo-box">
                <span className="auth-demo-tag">TRẢI NGHIỆM NHANH 1 CHẠM</span>
                <h4>Dùng thử Tài khoản Mẫu có sẵn dữ liệu</h4>
                <p>
                  Bạn có thể bấm vào 1 trong 2 nút dưới đây để trải nghiệm ngay
                  góc nhìn của <strong>Học sinh (vừa học tự do vừa có lớp)</strong>{' '}
                  hoặc <strong>Giáo viên (quản lý lớp &amp; xem điểm học sinh)</strong>:
                </p>

                <div className="auth-demo-buttons">
                  <button
                    type="button"
                    className="auth-demo-card-btn student"
                    onClick={() => handleQuickDemoLogin('student')}
                  >
                    <Sparkles size={20} />
                    <div>
                      <strong>Đăng nhập Học sinh Mẫu (Trần Hoàng Nam)</strong>
                      <span>
                        Chế độ Kép: Tự học tự do + Đang tham gia lớp BIENDAO-11A1
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="auth-demo-card-btn teacher"
                    onClick={() => handleQuickDemoLogin('teacher')}
                  >
                    <GraduationCap size={20} />
                    <div>
                      <strong>Đăng nhập Giáo viên Mẫu (ThS. Nguyễn Minh Hải)</strong>
                      <span>
                        Quản lý lớp BIENDAO-11A1 &amp; BIENDAO-12A2, xem tiến độ 3
                        học sinh
                      </span>
                    </div>
                  </button>
                </div>

                <div className="auth-dual-mode-explainer">
                  <h5>
                    <Compass size={16} /> Cơ chế Học tự do + Học theo lớp hoạt
                    động thế nào?
                  </h5>
                  <ul>
                    <li>
                      <strong>Học tự do 100%:</strong> Không cần mã lớp, học
                      sinh vẫn đọc trọn vẹn 16 bài Thư viện và làm 8 chuyên đề
                      trắc nghiệm, tích lũy 5 huy hiệu riêng.
                    </li>
                    <li>
                      <strong>Vừa học tự do vừa học theo lớp:</strong> Khi nhập
                      thêm <code>Mã lớp</code> (như <code>BIENDAO-11A1</code>),
                      học sinh nhận thêm nhiệm vụ của lớp và giáo viên lớp đó sẽ
                      xem được tiến trình học tập của học sinh.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {!currentUser && activeTab === 'register' && (
            <form className="auth-register-form" onSubmit={handleRegisterSubmit}>
              <div className="auth-role-picker">
                <button
                  type="button"
                  className={`auth-role-option ${
                    regRole === 'student' ? 'selected' : ''
                  }`}
                  onClick={() => setRegRole('student')}
                >
                  <Sparkles size={18} />
                  <div>
                    <strong>Tài khoản Học sinh / Người học</strong>
                    <span>Vừa học tự do trên web, vừa có thể tham gia lớp bằng Mã lớp</span>
                  </div>
                </button>
                <button
                  type="button"
                  className={`auth-role-option ${
                    regRole === 'teacher' ? 'selected' : ''
                  }`}
                  onClick={() => setRegRole('teacher')}
                >
                  <GraduationCap size={18} />
                  <div>
                    <strong>Tài khoản Giáo viên</strong>
                    <span>Tạo mã lớp riêng, giao chuyên đề &amp; theo dõi tiến trình từng học sinh</span>
                  </div>
                </button>
              </div>

              <div className="auth-form-grid-2">
                <label className="auth-field">
                  <span>Họ và tên đầy đủ (*):</span>
                  <input
                    type="text"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    required
                  />
                </label>

                <label className="auth-field">
                  <span>Email hoặc Tên đăng nhập (*):</span>
                  <input
                    type="text"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="Ví dụ: nguyenvanan@gmail.com"
                    required
                  />
                </label>

                <label className="auth-field">
                  <span>Mật khẩu (*):</span>
                  <input
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Tối thiểu 6 ký tự..."
                    required
                  />
                </label>

                <label className="auth-field">
                  <span>Trường / Đơn vị (Tùy chọn):</span>
                  <input
                    type="text"
                    value={regSchool}
                    onChange={(e) => setRegSchool(e.target.value)}
                    placeholder="Để trống nếu bạn Học tự do..."
                  />
                </label>

                <label className="auth-field">
                  <span>Khối / Lớp hiển thị (Tùy chọn):</span>
                  <input
                    type="text"
                    value={regGrade}
                    onChange={(e) => setRegGrade(e.target.value)}
                    placeholder="Ví dụ: Lớp 11A1 hoặc Học tự do"
                  />
                </label>

                {regRole === 'student' && (
                  <label className="auth-field highlight-class-code">
                    <span>
                      Mã Lớp của Giáo viên (Tùy chọn — Để trống nếu chỉ Học tự do):
                    </span>
                    <input
                      type="text"
                      value={regClassCode}
                      onChange={(e) => setRegClassCode(e.target.value)}
                      placeholder="VD: BIENDAO-11A1 (Hoặc nhập sau bất kỳ lúc nào)"
                    />
                  </label>
                )}
              </div>

              <button type="submit" className="btn-primary-gold auth-submit-btn">
                <UserPlus size={17} />
                <span>
                  {regRole === 'teacher'
                    ? 'Tạo Tài khoản Giáo viên & Quản lý Lớp'
                    : 'Tạo Tài khoản Học sinh (Học tự do + Học theo lớp)'}
                </span>
              </button>
            </form>
          )}

          {/* ================================================================
              TRƯỜNG HỢP 2: ĐÃ ĐĂNG NHẬP -> HIỂN THỊ HỒ SƠ & QUẢN LÝ LỚP KÉP
          ================================================================ */}
          {currentUser && (
            <div className="auth-profile-dashboard">
              <div className="auth-user-summary-card">
                <div className="auth-user-main-info">
                  <span className="auth-role-pill">
                    {currentUser.role === 'teacher' ? (
                      <>
                        <GraduationCap size={14} /> TÀI KHOẢN GIÁO VIÊN
                      </>
                    ) : (
                      <>
                        <Sparkles size={14} /> TÀI KHOẢN HỌC SINH (CHẾ ĐỘ KÉP: TỰ
                        HỌC + THEO LỚP)
                      </>
                    )}
                  </span>
                  <h4>{currentUser.fullName}</h4>
                  <p>
                    Email/ID: <strong>{currentUser.email}</strong> • Mã định danh:{' '}
                    <code>{currentUser.studentCode}</code> • Đơn vị:{' '}
                    <strong>{currentUser.schoolName}</strong>
                  </p>
                </div>

                <div className="auth-user-actions">
                  <button
                    type="button"
                    className="coze-copy-btn"
                    onClick={handleCopyProgressSnapshot}
                  >
                    {copiedSnapshot ? <Check size={14} /> : <Copy size={14} />}
                    <span>
                      {copiedSnapshot
                        ? 'Đã chép Hồ sơ Đồng bộ'
                        : 'Sao chép Mã đồng bộ Tiến độ'}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="classroom-clear-btn"
                    onClick={handleLogout}
                  >
                    <LogOut size={14} />
                    <span>Đăng xuất</span>
                  </button>
                </div>
              </div>

              {/* NẾU LÀ HỌC SINH: HIỂN THỊ CẢ 2 CHẾ ĐỘ (HỌC TỰ DO + LỚP HỌC ĐÃ THAM GIA) */}
              {currentUser.role === 'student' && (
                <div className="student-dual-mode-grid">
                  {/* CỘT 1: TIẾN ĐỘ TỰ HỌC TỰ DO */}
                  <div className="dual-mode-panel self-study">
                    <div className="dual-panel-head">
                      <span className="dual-badge cyan">CHẾ ĐỘ 01 • LUÔN BẬT</span>
                      <h5>Không gian Học tập Tự do Cá nhân</h5>
                    </div>
                    <p className="dual-panel-desc">
                      Bạn tự do học toàn bộ 16 bài học trong Thư viện Tri thức và
                      luyện tập 8 chuyên đề tại Phòng học Tương tác không giới hạn.
                    </p>
                    <div className="dual-stats-mini-grid">
                      <div className="dual-stat-box">
                        <BookOpen size={16} />
                        <strong>
                          {userBundle?.completedLessonIds?.length || 0} / 16 bài
                        </strong>
                        <span>Thư viện đã hoàn thành</span>
                      </div>
                      <div className="dual-stat-box">
                        <Award size={16} />
                        <strong>
                          {userBundle?.classroomRecords?.stats?.highestScore10 ||
                            0}{' '}
                          / 10đ
                        </strong>
                        <span>Điểm trắc nghiệm cao nhất</span>
                      </div>
                      <div className="dual-stat-box">
                        <CheckCircle2 size={16} />
                        <strong>
                          {userBundle?.classroomRecords?.stats?.totalAttempts ||
                            0}{' '}
                          lượt
                        </strong>
                        <span>Tổng số lần làm bài</span>
                      </div>
                    </div>
                  </div>

                  {/* CỘT 2: THAM GIA LỚP HỌC CỦA GIÁO VIÊN BẰNG MÃ LỚP */}
                  <div className="dual-mode-panel classroom-study">
                    <div className="dual-panel-head">
                      <span className="dual-badge gold">
                        CHẾ ĐỘ 02 • HỌC THEO LỚP ({joinedClassrooms.length} LỚP)
                      </span>
                      <h5>Kết nối Lớp học của Giáo viên bằng Mã lớp</h5>
                    </div>
                    <p className="dual-panel-desc">
                      Nhập <strong>Mã lớp</strong> do giáo viên cung cấp (thử nhập{' '}
                      <code>BIENDAO-11A1</code> hoặc <code>BIENDAO-12A2</code>) để
                      giáo viên theo dõi được tiến trình của bạn:
                    </p>

                    <form className="join-class-inline-form" onSubmit={handleJoinClass}>
                      <div className="join-input-wrap">
                        <KeyRound size={16} />
                        <input
                          type="text"
                          value={joinCodeInput}
                          onChange={(e) => setJoinCodeInput(e.target.value)}
                          placeholder="Nhập Mã lớp (VD: BIENDAO-11A1)..."
                        />
                      </div>
                      <button type="submit" className="btn-primary-gold">
                        <PlusCircle size={15} />
                        <span>Tham gia Lớp</span>
                      </button>
                    </form>

                    {joinedClassrooms.length === 0 ? (
                      <div className="empty-joined-class-note">
                        Hiện bạn đang ở chế độ <strong>Học tự do độc lập</strong>{' '}
                        (chưa gắn với lớp nào). Bất cứ khi nào có Mã lớp của giáo
                        viên, hãy nhập vào ô trên!
                      </div>
                    ) : (
                      <div className="joined-classes-list">
                        {joinedClassrooms.map((cls) => (
                          <div key={cls.id} className="joined-class-item">
                            <div>
                              <div className="joined-class-title-row">
                                <strong>{cls.className}</strong>
                                <span className="class-code-chip">
                                  Mã lớp: {cls.classCode}
                                </span>
                              </div>
                              <span className="joined-class-meta">
                                Giáo viên: <strong>{cls.teacherName}</strong> •{' '}
                                {cls.schoolName}
                              </span>
                              <div className="joined-class-topics">
                                Chuyên đề trọng tâm lớp giao:{' '}
                                {cls.assignedTopics?.map((tid) => {
                                  const tObj = CLASSROOM_TOPICS.find(
                                    (t) => t.id === tid
                                  )
                                  return (
                                    <span key={tid} className="topic-mini-tag">
                                      {tObj
                                        ? tObj.code.replace('CHUYÊN ĐỀ ', 'CĐ ')
                                        : tid}
                                    </span>
                                  )
                                })}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="leave-class-btn"
                              onClick={() => handleLeaveClass(cls.classCode)}
                            >
                              Rời lớp
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* NẾU LÀ GIÁO VIÊN: HƯỚNG DẪN MỞ BẢNG THEO DÕI HỌC SINH */}
              {currentUser.role === 'teacher' && (
                <div className="teacher-modal-notice">
                  <Users size={22} />
                  <div>
                    <h5>
                      Bạn đang đăng nhập với quyền Giáo viên ({currentUser.fullName})
                    </h5>
                    <p>
                      Tại trang <strong>Góc Học sinh &amp; Giáo viên</strong> hoặc{' '}
                      <strong>Phòng học Tương tác</strong>, bạn có thể tạo lớp học
                      mới, lấy <code>Mã lớp</code> gửi cho học sinh và xem chi tiết
                      bảng điểm, số bài đã đọc, lịch sử làm bài của từng học sinh!
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
