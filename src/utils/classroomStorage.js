/**
 * DỊCH VỤ LƯU TRỮ & ĐỒNG BỘ KẾT QUẢ HỌC TẬP (classroomStorage.js)
 * - Lưu trữ tức thì trên trình duyệt (localStorage) để học sinh theo dõi tiến độ.
 * - Thiết kế chuẩn cấu trúc Schema (User Account / Backend Sync Payload) để sẵn sàng
 *   lưu vào Database (Supabase / PostgreSQL / Firebase) cho từng tài khoản học sinh.
 */

import {
  getCurrentUser,
  getUserProgressBundle,
  saveUserClassroomRecords
} from './authClassroomService'

const STORAGE_KEY = 'bien_dao_classroom_learning_records_v1'

const DEFAULT_PROFILE_STATE = {
  schemaVersion: '1.0.0',
  accountBinding: {
    userId: 'guest-student-thpt',
    studentName: 'Học sinh THPT',
    schoolName: 'Trường THPT Việt Nam',
    grade: 'Khối 10 - 12',
    syncReadyForBackend: true
  },
  stats: {
    totalAttempts: 0,
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    totalWrongAnswers: 0,
    highestScore10: 0
  },
  // Lưu kết quả tốt nhất và gần nhất của từng chuyên đề (cd-1 -> cd-8)
  topicMastery: {},
  // Lưu kết quả của các hoạt động tương tác (true-false, timeline-match, map-identify, level-challenge)
  activityBest: {},
  // Lịch sử các lần làm bài gần nhất (tối đa 30 bản ghi để sẵn sàng đồng bộ Backend)
  attemptHistory: []
}

export function loadClassroomRecords() {
  if (typeof window === 'undefined') return DEFAULT_PROFILE_STATE
  try {
    const activeUser = getCurrentUser()
    if (activeUser) {
      const bundle = getUserProgressBundle(activeUser.id)
      if (bundle?.classroomRecords) {
        const usrRec = bundle.classroomRecords
        return {
          ...DEFAULT_PROFILE_STATE,
          ...usrRec,
          accountBinding: {
            ...DEFAULT_PROFILE_STATE.accountBinding,
            ...(usrRec.accountBinding || {}),
            userId: activeUser.id,
            studentName:
              usrRec.accountBinding?.studentName || activeUser.fullName,
            schoolName:
              usrRec.accountBinding?.schoolName || activeUser.schoolName,
            grade: usrRec.accountBinding?.grade || activeUser.grade,
            studentCode:
              usrRec.accountBinding?.studentCode || activeUser.studentCode
          }
        }
      }
    }

    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PROFILE_STATE
    const parsed = JSON.parse(raw)
    return {
      ...DEFAULT_PROFILE_STATE,
      ...parsed,
      accountBinding: {
        ...DEFAULT_PROFILE_STATE.accountBinding,
        ...(parsed.accountBinding || {})
      },
      stats: {
        ...DEFAULT_PROFILE_STATE.stats,
        ...(parsed.stats || {})
      },
      topicMastery: parsed.topicMastery || {},
      activityBest: parsed.activityBest || {},
      attemptHistory: Array.isArray(parsed.attemptHistory)
        ? parsed.attemptHistory
        : []
    }
  } catch {
    return DEFAULT_PROFILE_STATE
  }
}

export function saveClassroomRecords(nextState) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState))
    saveUserClassroomRecords(nextState)
  } catch {
    // Bỏ qua nếu bộ nhớ trình duyệt bị giới hạn
  }
}

/**
 * Ghi nhận một lần hoàn thành bài kiểm tra / trò chơi học tập
 */
export function recordLearningAttempt({
  activityType, // 'topic-quiz' | 'true-false' | 'timeline-match' | 'map-identify' | 'level-challenge'
  activityTitle,
  topicId = null,
  difficulty = 'mixed',
  correctCount,
  totalQuestions,
  details = []
}) {
  const current = loadClassroomRecords()
  const safeTotal = Math.max(1, Number(totalQuestions) || 1)
  const safeCorrect = Math.max(0, Math.min(safeTotal, Number(correctCount) || 0))
  const wrongCount = safeTotal - safeCorrect
  const accuracyPercent = Math.round((safeCorrect / safeTotal) * 100)
  const score10 = Math.round((safeCorrect / safeTotal) * 100) / 10
  const score100 = accuracyPercent
  const completedAt = new Date().toISOString()

  const attemptEntry = {
    attemptId: `att-${Date.now()}`,
    userId: current.accountBinding.userId,
    activityType,
    activityTitle,
    topicId,
    difficulty,
    correctCount: safeCorrect,
    wrongCount,
    totalQuestions: safeTotal,
    score10,
    score100,
    accuracyPercent,
    completedAt,
    details
  }

  const nextTopicMastery = { ...current.topicMastery }
  if (activityType === 'topic-quiz' && topicId) {
    const prevTopic = nextTopicMastery[topicId] || {
      attempts: 0,
      bestScore10: 0,
      bestAccuracy: 0,
      lastScore10: 0,
      completed: false
    }
    nextTopicMastery[topicId] = {
      attempts: prevTopic.attempts + 1,
      bestScore10: Math.max(prevTopic.bestScore10, score10),
      bestAccuracy: Math.max(prevTopic.bestAccuracy, accuracyPercent),
      lastScore10: score10,
      lastCompletedAt: completedAt,
      completed: accuracyPercent >= 50 || prevTopic.completed
    }
  }

  const activityKey = topicId ? `${activityType}:${topicId}` : `${activityType}:${difficulty}`
  const prevAct = current.activityBest[activityKey] || {
    attempts: 0,
    bestScore10: 0,
    bestAccuracy: 0
  }

  const nextActivityBest = {
    ...current.activityBest,
    [activityKey]: {
      attempts: prevAct.attempts + 1,
      bestScore10: Math.max(prevAct.bestScore10, score10),
      bestAccuracy: Math.max(prevAct.bestAccuracy, accuracyPercent),
      lastScore10: score10,
      lastCompletedAt: completedAt
    }
  }

  const nextState = {
    ...current,
    stats: {
      totalAttempts: current.stats.totalAttempts + 1,
      totalQuestionsAnswered: current.stats.totalQuestionsAnswered + safeTotal,
      totalCorrectAnswers: current.stats.totalCorrectAnswers + safeCorrect,
      totalWrongAnswers: current.stats.totalWrongAnswers + wrongCount,
      highestScore10: Math.max(current.stats.highestScore10, score10)
    },
    topicMastery: nextTopicMastery,
    activityBest: nextActivityBest,
    attemptHistory: [attemptEntry, ...current.attemptHistory].slice(0, 30)
  }

  saveClassroomRecords(nextState)
  return {
    updatedRecords: nextState,
    latestAttempt: attemptEntry
  }
}

export function updateStudentProfileBinding(profilePatch) {
  const current = loadClassroomRecords()
  const nextState = {
    ...current,
    accountBinding: {
      ...current.accountBinding,
      ...profilePatch
    }
  }
  saveClassroomRecords(nextState)
  return nextState
}

export function clearAllClassroomRecords() {
  saveClassroomRecords(DEFAULT_PROFILE_STATE)
  return DEFAULT_PROFILE_STATE
}
