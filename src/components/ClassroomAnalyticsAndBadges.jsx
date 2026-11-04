import React, { useState } from 'react'
import {
  Award,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Copy,
  Download,
  Lock,
  Map,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  UserCheck
} from 'lucide-react'
import {
  CLASSROOM_TOPICS,
  CLASSROOM_ACHIEVEMENT_BADGES
} from '../data/classroomData.js'

const BADGE_ICON_MAP = {
  Compass,
  BookOpen,
  Clock,
  Map,
  Award
}

export default function ClassroomAnalyticsAndBadges({
  records,
  onSaveProfile,
  onResetRecords,
  onSelectTopicQuiz,
  onSwitchActivity
}) {
  const [studentName, setStudentName] = useState(
    records?.accountBinding?.studentName || 'Học sinh THPT'
  )
  const [schoolName, setSchoolName] = useState(
    records?.accountBinding?.schoolName || 'Trường THPT Việt Nam'
  )
  const [grade, setGrade] = useState(
    records?.accountBinding?.grade || 'Khối 10 - 12'
  )
  const [studentCode, setStudentCode] = useState(
    records?.accountBinding?.studentCode || 'HS-THPT-2026'
  )
  const [copiedSyncJson, setCopiedSyncJson] = useState(false)
  const [profileSavedToast, setProfileSavedToast] = useState(false)

  const unlockedBadgesCount = CLASSROOM_ACHIEVEMENT_BADGES.filter((b) =>
    b.checkUnlocked(records)
  ).length

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSaveProfile({
      studentName: studentName.trim() || 'Học sinh THPT',
      schoolName: schoolName.trim() || 'Trường THPT Việt Nam',
      grade: grade.trim() || 'Khối 10 - 12',
      studentCode: studentCode.trim() || 'HS-THPT-2026'
    })
    setProfileSavedToast(true)
    setTimeout(() => setProfileSavedToast(false), 2500)
  }

  const handleCopyAccountPayload = () => {
    if (!navigator?.clipboard?.writeText) return
    const payload = JSON.stringify(records, null, 2)
    navigator.clipboard.writeText(payload)
    setCopiedSyncJson(true)
    setTimeout(() => setCopiedSyncJson(false), 2200)
  }

  const handleDownloadAccountPayload = () => {
    const payload = JSON.stringify(records, null, 2)
    const blob = new Blob([payload], { type: 'application/json;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ho-so-hoc-tap-bien-dao-${records?.accountBinding?.studentCode || 'thpt'}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="cls-analytics-badges-section">
      {/* 1. BIỂU ĐỒ ĐIỂM SỐ THỰC TẾ THEO 8 CHUYÊN ĐỀ & LỊCH SỬ LÀM BÀI */}
      <div className="cls-analytics-grid">
        <div className="cls-chart-card">
          <div className="cls-card-head">
            <div>
              <span className="cls-eyebrow-pill">
                <BarChart3 size={13} /> BIỂU ĐỒ ĐIỂM SỐ THỰC TẾ (THANG 10.0)
              </span>
              <h4>Biểu đồ Điểm số Cao nhất theo 8 Chuyên đề Học tập</h4>
            </div>
            <span className="cls-real-data-note">
              Chỉ hiển thị điểm từ bài làm thực tế của học sinh
            </span>
          </div>

          <div className="cls-topic-bars-chart">
            {CLASSROOM_TOPICS.map((topic) => {
              const mastery = records?.topicMastery?.[topic.id]
              const bestScore = mastery ? Number(mastery.bestScore10 || 0) : 0
              const attempts = mastery ? Number(mastery.attempts || 0) : 0
              const heightPercent = Math.max(6, Math.round(bestScore * 10))
              const hasAttempted = attempts > 0

              return (
                <div key={topic.id} className="cls-bar-col">
                  <div className="cls-bar-score-top">
                    {hasAttempted ? `${bestScore.toFixed(1)}đ` : '—'}
                  </div>
                  <div
                    className="cls-bar-vertical-track"
                    title={`${topic.code} - ${topic.title}: ${
                      hasAttempted
                        ? `Điểm cao nhất ${bestScore.toFixed(1)}/10 (${attempts} lượt làm)`
                        : 'Chưa làm bài'
                    }`}
                  >
                    <div
                      className={`cls-bar-vertical-fill ${
                        bestScore >= 8
                          ? 'tier-high'
                          : bestScore >= 5
                            ? 'tier-mid'
                            : hasAttempted
                              ? 'tier-low'
                              : 'tier-empty'
                      }`}
                      style={{ height: `${hasAttempted ? heightPercent : 6}%` }}
                    />
                  </div>
                  <button
                    type="button"
                    className="cls-bar-topic-btn"
                    onClick={() => onSelectTopicQuiz(topic.id)}
                    title={`Nhấn để làm bài ${topic.code}: ${topic.title}`}
                  >
                    <strong>{topic.code.replace('CHUYÊN ĐỀ ', 'CĐ ')}</strong>
                    <span>{hasAttempted ? `${attempts} lượt` : 'Làm ngay'}</span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* 2. HỆ THỐNG HUY HIỆU THÀNH TÍCH THỰC TẾ */}
        <div className="cls-badges-card">
          <div className="cls-card-head">
            <div>
              <span className="cls-eyebrow-pill gold">
                <Award size={13} /> HUY HIỆU THÀNH TÍCH ({unlockedBadgesCount}/
                {CLASSROOM_ACHIEVEMENT_BADGES.length} ĐÃ MỞ KHÓA)
              </span>
              <h4>Huy hiệu Chinh phục Tri thức Biển đảo</h4>
            </div>
          </div>

          <div className="cls-badges-list">
            {CLASSROOM_ACHIEVEMENT_BADGES.map((badge) => {
              const IconComp = BADGE_ICON_MAP[badge.iconName] || Award
              const isUnlocked = badge.checkUnlocked(records)
              const progressText = badge.getProgressText(records)

              return (
                <div
                  key={badge.id}
                  className={`cls-badge-item ${
                    isUnlocked ? 'is-unlocked' : 'is-locked'
                  }`}
                >
                  <div className="cls-badge-icon-wrap">
                    {isUnlocked ? <IconComp size={20} /> : <Lock size={18} />}
                  </div>
                  <div className="cls-badge-info">
                    <div className="cls-badge-title-row">
                      <h5>{badge.title}</h5>
                      <span
                        className={`cls-badge-status-pill ${
                          isUnlocked ? 'unlocked' : 'locked'
                        }`}
                      >
                        {isUnlocked ? '✓ Đã đạt huy hiệu' : 'Chưa mở khóa'}
                      </span>
                    </div>
                    <p>{badge.requirementText}</p>
                    <span className="cls-badge-progress-txt">
                      Tiến độ thực tế: <strong>{progressText}</strong>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 3. QUẢN LÝ HỒ SƠ HỌC SINH, LỊCH SỬ ĐIỂM & ĐỒNG BỘ TÀI KHOẢN */}
      <div className="classroom-profile-drawer cls-account-sync-panel">
        <div className="classroom-profile-grid">
          <form className="classroom-account-form" onSubmit={handleFormSubmit}>
            <div className="account-form-header">
              <UserCheck size={18} />
              <h4>Liên kết Hồ sơ Học sinh &amp; Lưu Kết quả theo Tài khoản</h4>
            </div>
            <p className="account-form-note">
              Toàn bộ kết quả làm bài, biểu đồ điểm số và huy hiệu được gắn với mã
              định danh học sinh (<code>accountBinding</code>) để lưu trữ bền vững
              và sẵn sàng đồng bộ lên cơ sở dữ liệu tài khoản.
            </p>

            <div className="account-inputs-row">
              <label>
                <span>Họ và tên học sinh:</span>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Nhập họ tên..."
                />
              </label>
              <label>
                <span>Trường THPT:</span>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="Nhập tên trường..."
                />
              </label>
              <label>
                <span>Khối / Lớp:</span>
                <input
                  type="text"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="Ví dụ: Lớp 11A1"
                />
              </label>
              <label>
                <span>Mã định danh / Tài khoản:</span>
                <input
                  type="text"
                  value={studentCode}
                  onChange={(e) => setStudentCode(e.target.value)}
                  placeholder="Ví dụ: HS-11A1-01"
                />
              </label>
            </div>

            <div className="account-form-actions">
              <button type="submit" className="btn-primary-gold">
                <Check size={15} />
                <span>
                  {profileSavedToast
                    ? 'Đã cập nhật Hồ sơ!'
                    : 'Lưu Hồ sơ Tài khoản'}
                </span>
              </button>

              <button
                type="button"
                className="coze-copy-btn"
                onClick={handleCopyAccountPayload}
              >
                {copiedSyncJson ? <Check size={14} /> : <Copy size={14} />}
                <span>
                  {copiedSyncJson
                    ? 'Đã chép JSON Tài khoản'
                    : 'Sao chép dữ liệu đồng bộ'}
                </span>
              </button>

              <button
                type="button"
                className="coze-copy-btn"
                onClick={handleDownloadAccountPayload}
              >
                <Download size={14} />
                <span>Tải tệp kết quả (.json)</span>
              </button>

              <button
                type="button"
                className="classroom-clear-btn"
                onClick={onResetRecords}
              >
                <RotateCcw size={14} />
                <span>Đặt lại toàn bộ lịch sử</span>
              </button>
            </div>
          </form>

          <div className="classroom-history-box">
            <h4>Nhật ký các lần làm bài thực tế ({records?.attemptHistory?.length || 0} lượt)</h4>
            {!records?.attemptHistory || records.attemptHistory.length === 0 ? (
              <div className="empty-history-msg">
                <p>
                  Chưa có bài kiểm tra nào được nộp. Hệ thống cam kết không tạo
                  điểm số giả — hãy hoàn thành một hoạt động bên dưới để ghi nhận
                  điểm số đầu tiên của bạn!
                </p>
                <button
                  type="button"
                  className="btn-primary-gold"
                  style={{ marginTop: '10px' }}
                  onClick={() => onSwitchActivity('comprehensive-exam')}
                >
                  <Sparkles size={15} />
                  <span>Làm thử Bài Kiểm tra Tổng hợp 20 câu</span>
                </button>
              </div>
            ) : (
              <div className="history-items-list">
                {records.attemptHistory.slice(0, 8).map((item) => (
                  <div key={item.attemptId} className="history-item-row">
                    <div>
                      <strong>{item.activityTitle}</strong>
                      <span className="history-meta">
                        Đúng {item.correctCount}/{item.totalQuestions} câu (Sai{' '}
                        {item.wrongCount}) • Độ chính xác {item.accuracyPercent}%
                      </span>
                    </div>
                    <span className="history-score-badge">
                      {item.score10.toFixed(1)} / 10 điểm
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
