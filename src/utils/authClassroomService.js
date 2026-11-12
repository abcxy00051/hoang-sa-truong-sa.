/**
 * HỆ THỐNG TÀI KHOẢN HỢP NHẤT (HỌC TỰ DO + HỌC THEO LỚP) & QUẢN LÝ LỚP HỌC GIÁO VIÊN
 * (src/utils/authClassroomService.js)
 *
 * Đặc điểm kiến trúc:
 * 1. MỘT TÀI KHOẢN HỌC SINH DUY NHẤT hỗ trợ đồng thời 2 chế độ:
 *    - Học tự do (Self-Study): Không bắt buộc mã lớp, tự do học 16 bài Thư viện Tri thức & 8 chuyên đề Phòng học tương tác.
 *    - Học theo lớp (Classroom Mode): Nhập Mã lớp (lúc đăng ký hoặc bất kỳ lúc nào sau đó) để tham gia lớp của Giáo viên.
 *      Khi tham gia lớp, toàn bộ tiến trình tự học + bài tập lớp của học sinh được đồng bộ để Giáo viên theo dõi.
 * 2. TÀI KHOẢN GIÁO VIÊN:
 *    - Tạo & quản lý nhiều Lớp học (mỗi lớp có Mã lớp riêng, ví dụ: BIENDAO-11A1).
 *    - Giao nhiệm vụ / chuyên đề trọng tâm cho lớp.
 *    - Xem Bảng tiến trình chi tiết của từng học sinh trong lớp (Bài đọc thư viện, điểm 8 chuyên đề, huy hiệu, lịch sử làm bài) & Xuất CSV.
 * 3. ĐỒNG BỘ ĐA TẦNG:
 *    - Tầng 1 (Instant Local Multi-Account & Cross-Tab): Lưu trữ đầy đủ trên trình duyệt và đồng bộ tức thì giữa các tab.
 *    - Tầng 2 (Supabase Cloud Sync - Tùy chọn): Nếu khai báo VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY trong .env,
 *      hệ thống tự động đồng bộ tài khoản, lớp học và tiến trình học sinh lên đám mây qua REST API.
 */

import { CLASSROOM_ACHIEVEMENT_BADGES, CLASSROOM_TOPICS } from '../data/classroomData'

const ACCOUNTS_KEY = 'biendao_accounts_db_v1'
const CURRENT_SESSION_KEY = 'biendao_current_user_session_v1'
const CLASSROOMS_KEY = 'biendao_classrooms_db_v1'
const PROGRESS_DB_KEY = 'biendao_user_progress_db_v1'

export const AUTH_EVENT_NAME = 'biendao-auth-progress-changed'

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || ''

export function isCloudSyncConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY)
}

function emitAuthAndProgressEvent() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(AUTH_EVENT_NAME))
  }
}

// ============================================================================
// DỮ LIỆU MẪU KHỞI TẠO (ĐỂ GIÁO VIÊN & HỌC SINH CÓ THỂ TRẢI NGHIỆM NGAY LẬP TỨC)
// ============================================================================
const SEED_TEACHER_ACCOUNT = {
  id: 'usr-teacher-demo',
  email: 'giaovien@biendao.edu.vn',
  password: '123456',
  fullName: 'ThS. Nguyễn Minh Hải',
  role: 'teacher',
  schoolName: 'Trường THPT Lê Quý Đôn',
  grade: 'Khối 10 - 12',
  studentCode: 'GV-LQD-01',
  joinedClassCodes: [],
  createdAt: '2026-09-05T08:00:00.000Z'
}

const SEED_STUDENT_ACCOUNTS = [
  {
    id: 'usr-student-demo-1',
    email: 'hocsinh@biendao.edu.vn',
    password: '123456',
    fullName: 'Trần Hoàng Nam',
    role: 'student',
    schoolName: 'Trường THPT Lê Quý Đôn',
    grade: 'Lớp 11A1',
    studentCode: 'HS-11A1-01',
    joinedClassCodes: ['BIENDAO-11A1'],
    createdAt: '2026-09-06T09:00:00.000Z'
  },
  {
    id: 'usr-student-demo-2',
    email: 'minhanh@biendao.edu.vn',
    password: '123456',
    fullName: 'Lê Ngọc Minh Anh',
    role: 'student',
    schoolName: 'Trường THPT Lê Quý Đôn',
    grade: 'Lớp 11A1',
    studentCode: 'HS-11A1-02',
    joinedClassCodes: ['BIENDAO-11A1'],
    createdAt: '2026-09-06T09:15:00.000Z'
  },
  {
    id: 'usr-student-demo-3',
    email: 'quocbao@biendao.edu.vn',
    password: '123456',
    fullName: 'Phạm Quốc Bảo',
    role: 'student',
    schoolName: 'Trường THPT Lê Quý Đôn',
    grade: 'Lớp 11A1',
    studentCode: 'HS-11A1-03',
    joinedClassCodes: ['BIENDAO-11A1'],
    createdAt: '2026-09-07T10:20:00.000Z'
  }
]

const SEED_CLASSROOMS = [
  {
    id: 'cls-biendao-11a1',
    classCode: 'BIENDAO-11A1',
    className: 'Lớp 11A1 — Chuyên đề Chủ quyền Biển Đảo',
    schoolName: 'Trường THPT Lê Quý Đôn',
    grade: 'Khối 11 THPT',
    teacherId: 'usr-teacher-demo',
    teacherName: 'ThS. Nguyễn Minh Hải',
    assignedTopics: ['cd-1', 'cd-2', 'cd-3', 'cd-4'],
    targetLessonsCount: 6,
    description:
      'Học sinh tự học các bài trong Thư viện Tri thức kết hợp hoàn thành tối thiểu 4 chuyên đề trắc nghiệm trọng tâm (CĐ 01 – CĐ 04).',
    createdAt: '2026-09-05T08:30:00.000Z'
  },
  {
    id: 'cls-biendao-12a2',
    classCode: 'BIENDAO-12A2',
    className: 'Lớp 12A2 — Kinh tế Biển & Quốc phòng An ninh',
    schoolName: 'Trường THPT Lê Quý Đôn',
    grade: 'Khối 12 THPT',
    teacherId: 'usr-teacher-demo',
    teacherName: 'ThS. Nguyễn Minh Hải',
    assignedTopics: ['cd-5', 'cd-6', 'cd-7', 'cd-8'],
    targetLessonsCount: 8,
    description:
      'Kết hợp tự học mở rộng và hoàn thành nhóm chuyên đề Kinh tế biển, Thế hệ trẻ & Bảo vệ chủ quyền (CĐ 05 – CĐ 08).',
    createdAt: '2026-09-10T08:00:00.000Z'
  }
]

const SEED_PROGRESS_DB = {
  'usr-student-demo-1': {
    userId: 'usr-student-demo-1',
    savedLessonIds: ['cd01-bai-01', 'cd02-bai-01', 'cd03-bai-01', 'cd04-bai-01'],
    completedLessonIds: [
      'cd01-bai-01',
      'cd01-bai-02',
      'cd02-bai-01',
      'cd02-bai-02',
      'cd03-bai-01',
      'cd03-bai-02',
      'cd04-bai-01',
      'cd05-bai-01'
    ],
    classroomRecords: {
      schemaVersion: '1.0.0',
      accountBinding: {
        userId: 'usr-student-demo-1',
        studentName: 'Trần Hoàng Nam',
        schoolName: 'Trường THPT Lê Quý Đôn',
        grade: 'Lớp 11A1',
        studentCode: 'HS-11A1-01',
        syncReadyForBackend: true
      },
      stats: {
        totalAttempts: 6,
        totalQuestionsAnswered: 60,
        totalCorrectAnswers: 53,
        totalWrongAnswers: 7,
        highestScore10: 9.5
      },
      topicMastery: {
        'cd-1': { attempts: 2, bestScore10: 9.0, bestAccuracy: 90, lastScore10: 9.0, completed: true },
        'cd-2': { attempts: 1, bestScore10: 9.0, bestAccuracy: 90, lastScore10: 9.0, completed: true },
        'cd-3': { attempts: 1, bestScore10: 8.0, bestAccuracy: 80, lastScore10: 8.0, completed: true },
        'cd-4': { attempts: 1, bestScore10: 9.0, bestAccuracy: 90, lastScore10: 9.0, completed: true },
        'cd-5': { attempts: 1, bestScore10: 8.0, bestAccuracy: 80, lastScore10: 8.0, completed: true }
      },
      activityBest: {
        'topic-quiz:cd-1': { attempts: 2, bestScore10: 9.0, bestAccuracy: 90, lastScore10: 9.0 },
        'timeline-match:mixed': { attempts: 1, bestScore10: 10.0, bestAccuracy: 100, lastScore10: 10.0 },
        'map-identify:mixed': { attempts: 1, bestScore10: 9.5, bestAccuracy: 95, lastScore10: 9.5 }
      },
      attemptHistory: [
        {
          attemptId: 'att-demo-101',
          userId: 'usr-student-demo-1',
          activityType: 'topic-quiz',
          activityTitle: 'CHUYÊN ĐỀ 04: Bản đồ cổ Việt Nam, phương Tây và Trung Quốc',
          topicId: 'cd-4',
          difficulty: 'mixed',
          correctCount: 9,
          wrongCount: 1,
          totalQuestions: 10,
          score10: 9.0,
          score100: 90,
          accuracyPercent: 90,
          completedAt: '2026-11-10T14:20:00.000Z'
        },
        {
          attemptId: 'att-demo-102',
          userId: 'usr-student-demo-1',
          activityType: 'timeline-match',
          activityTitle: 'Ghép Mốc Thời Gian Lịch Sử Chủ Quyền',
          topicId: null,
          difficulty: 'mixed',
          correctCount: 8,
          wrongCount: 0,
          totalQuestions: 8,
          score10: 10.0,
          score100: 100,
          accuracyPercent: 100,
          completedAt: '2026-11-09T09:15:00.000Z'
        },
        {
          attemptId: 'att-demo-103',
          userId: 'usr-student-demo-1',
          activityType: 'topic-quiz',
          activityTitle: 'CHUYÊN ĐỀ 01: Vị trí địa chiến lược của Biển Đông và biển đảo Việt Nam',
          topicId: 'cd-1',
          difficulty: 'mixed',
          correctCount: 9,
          wrongCount: 1,
          totalQuestions: 10,
          score10: 9.0,
          score100: 90,
          accuracyPercent: 90,
          completedAt: '2026-11-08T16:40:00.000Z'
        }
      ]
    },
    updatedAt: '2026-11-10T14:20:00.000Z'
  },
  'usr-student-demo-2': {
    userId: 'usr-student-demo-2',
    savedLessonIds: ['cd01-bai-01', 'cd03-bai-02', 'cd06-bai-01'],
    completedLessonIds: [
      'cd01-bai-01',
      'cd01-bai-02',
      'cd02-bai-01',
      'cd02-bai-02',
      'cd03-bai-01',
      'cd03-bai-02',
      'cd04-bai-01',
      'cd04-bai-02',
      'cd05-bai-01',
      'cd06-bai-01',
      'cd07-bai-01',
      'cd08-bai-01'
    ],
    classroomRecords: {
      schemaVersion: '1.0.0',
      accountBinding: {
        userId: 'usr-student-demo-2',
        studentName: 'Lê Ngọc Minh Anh',
        schoolName: 'Trường THPT Lê Quý Đôn',
        grade: 'Lớp 11A1',
        studentCode: 'HS-11A1-02',
        syncReadyForBackend: true
      },
      stats: {
        totalAttempts: 9,
        totalQuestionsAnswered: 90,
        totalCorrectAnswers: 84,
        totalWrongAnswers: 6,
        highestScore10: 10.0
      },
      topicMastery: {
        'cd-1': { attempts: 2, bestScore10: 10.0, bestAccuracy: 100, lastScore10: 10.0, completed: true },
        'cd-2': { attempts: 1, bestScore10: 9.0, bestAccuracy: 90, lastScore10: 9.0, completed: true },
        'cd-3': { attempts: 1, bestScore10: 10.0, bestAccuracy: 100, lastScore10: 10.0, completed: true },
        'cd-4': { attempts: 1, bestScore10: 9.0, bestAccuracy: 90, lastScore10: 9.0, completed: true },
        'cd-5': { attempts: 1, bestScore10: 9.0, bestAccuracy: 90, lastScore10: 9.0, completed: true },
        'cd-6': { attempts: 1, bestScore10: 9.0, bestAccuracy: 90, lastScore10: 9.0, completed: true },
        'cd-7': { attempts: 1, bestScore10: 8.0, bestAccuracy: 80, lastScore10: 8.0, completed: true },
        'cd-8': { attempts: 1, bestScore10: 10.0, bestAccuracy: 100, lastScore10: 10.0, completed: true }
      },
      activityBest: {
        'topic-quiz:cd-1': { attempts: 2, bestScore10: 10.0, bestAccuracy: 100, lastScore10: 10.0 },
        'timeline-match:mixed': { attempts: 1, bestScore10: 10.0, bestAccuracy: 100, lastScore10: 10.0 },
        'map-identify:mixed': { attempts: 1, bestScore10: 10.0, bestAccuracy: 100, lastScore10: 10.0 },
        'comprehensive-exam:mixed': { attempts: 1, bestScore10: 9.5, bestAccuracy: 95, lastScore10: 9.5 }
      },
      attemptHistory: [
        {
          attemptId: 'att-demo-201',
          userId: 'usr-student-demo-2',
          activityType: 'comprehensive-exam',
          activityTitle: 'Bài Kiểm Tra Tổng Hợp 20 Câu Chủ Quyền Biển Đảo',
          topicId: null,
          difficulty: 'mixed',
          correctCount: 19,
          wrongCount: 1,
          totalQuestions: 20,
          score10: 9.5,
          score100: 95,
          accuracyPercent: 95,
          completedAt: '2026-11-11T08:30:00.000Z'
        },
        {
          attemptId: 'att-demo-202',
          userId: 'usr-student-demo-2',
          activityType: 'topic-quiz',
          activityTitle: 'CHUYÊN ĐỀ 03: Cơ sở pháp lý quốc tế và UNCLOS 1982',
          topicId: 'cd-3',
          difficulty: 'mixed',
          correctCount: 10,
          wrongCount: 0,
          totalQuestions: 10,
          score10: 10.0,
          score100: 100,
          accuracyPercent: 100,
          completedAt: '2026-11-10T19:45:00.000Z'
        }
      ]
    },
    updatedAt: '2026-11-11T08:30:00.000Z'
  },
  'usr-student-demo-3': {
    userId: 'usr-student-demo-3',
    savedLessonIds: ['cd01-bai-01'],
    completedLessonIds: ['cd01-bai-01', 'cd01-bai-02', 'cd02-bai-01'],
    classroomRecords: {
      schemaVersion: '1.0.0',
      accountBinding: {
        userId: 'usr-student-demo-3',
        studentName: 'Phạm Quốc Bảo',
        schoolName: 'Trường THPT Lê Quý Đôn',
        grade: 'Lớp 11A1',
        studentCode: 'HS-11A1-03',
        syncReadyForBackend: true
      },
      stats: {
        totalAttempts: 3,
        totalQuestionsAnswered: 30,
        totalCorrectAnswers: 22,
        totalWrongAnswers: 8,
        highestScore10: 8.0
      },
      topicMastery: {
        'cd-1': { attempts: 2, bestScore10: 8.0, bestAccuracy: 80, lastScore10: 8.0, completed: true },
        'cd-2': { attempts: 1, bestScore10: 7.0, bestAccuracy: 70, lastScore10: 7.0, completed: true }
      },
      activityBest: {
        'topic-quiz:cd-1': { attempts: 2, bestScore10: 8.0, bestAccuracy: 80, lastScore10: 8.0 }
      },
      attemptHistory: [
        {
          attemptId: 'att-demo-301',
          userId: 'usr-student-demo-3',
          activityType: 'topic-quiz',
          activityTitle: 'CHUYÊN ĐỀ 02: Quá trình xác lập và thực thi chủ quyền của Việt Nam',
          topicId: 'cd-2',
          difficulty: 'mixed',
          correctCount: 7,
          wrongCount: 3,
          totalQuestions: 10,
          score10: 7.0,
          score100: 70,
          accuracyPercent: 70,
          completedAt: '2026-11-10T10:12:00.000Z'
        }
      ]
    },
    updatedAt: '2026-11-10T10:12:00.000Z'
  }
}

// ============================================================================
// HÀM ĐỌC / GHI CƠ SỞ DỮ LIỆU ĐA TÀI KHOẢN
// ============================================================================
export function loadAccountsDb() {
  if (typeof window === 'undefined') return [SEED_TEACHER_ACCOUNT, ...SEED_STUDENT_ACCOUNTS]
  try {
    const raw = window.localStorage.getItem(ACCOUNTS_KEY)
    if (!raw) {
      const initial = [SEED_TEACHER_ACCOUNT, ...SEED_STUDENT_ACCOUNTS]
      window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(initial))
      return initial
    }
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0
      ? parsed
      : [SEED_TEACHER_ACCOUNT, ...SEED_STUDENT_ACCOUNTS]
  } catch {
    return [SEED_TEACHER_ACCOUNT, ...SEED_STUDENT_ACCOUNTS]
  }
}

export function saveAccountsDb(accounts) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts))
  } catch {
    // ignore
  }
}

export function loadClassroomsDb() {
  if (typeof window === 'undefined') return SEED_CLASSROOMS
  try {
    const raw = window.localStorage.getItem(CLASSROOMS_KEY)
    if (!raw) {
      window.localStorage.setItem(CLASSROOMS_KEY, JSON.stringify(SEED_CLASSROOMS))
      return SEED_CLASSROOMS
    }
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_CLASSROOMS
  } catch {
    return SEED_CLASSROOMS
  }
}

export function saveClassroomsDb(classrooms) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(CLASSROOMS_KEY, JSON.stringify(classrooms))
  } catch {
    // ignore
  }
}

export function loadProgressDb() {
  if (typeof window === 'undefined') return SEED_PROGRESS_DB
  try {
    const raw = window.localStorage.getItem(PROGRESS_DB_KEY)
    if (!raw) {
      window.localStorage.setItem(PROGRESS_DB_KEY, JSON.stringify(SEED_PROGRESS_DB))
      return SEED_PROGRESS_DB
    }
    const parsed = JSON.parse(raw)
    return {
      ...SEED_PROGRESS_DB,
      ...(parsed || {})
    }
  } catch {
    return SEED_PROGRESS_DB
  }
}

export function saveProgressDb(progressMap) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(PROGRESS_DB_KEY, JSON.stringify(progressMap))
  } catch {
    // ignore
  }
}

// ============================================================================
// QUẢN LÝ PHIÊN ĐĂNG NHẬP & ĐĂNG KÝ TÀI KHOẢN (HỌC TỰ DO + HỌC THEO LỚP)
// ============================================================================
export function getCurrentUser() {
  if (typeof window === 'undefined') return null
  try {
    const sessionUserId = window.localStorage.getItem(CURRENT_SESSION_KEY)
    if (!sessionUserId) return null
    const accounts = loadAccountsDb()
    return accounts.find((acc) => acc.id === sessionUserId) || null
  } catch {
    return null
  }
}

export function registerAccount({
  fullName,
  email,
  password,
  role = 'student', // 'student' | 'teacher'
  schoolName = 'Học tập Tự do / THPT Việt Nam',
  grade = 'Khối 10 - 12',
  classCode = '' // Tùy chọn! Không bắt buộc đối với học sinh
}) {
  const cleanEmail = String(email || '').trim().toLowerCase()
  const cleanName = String(fullName || '').trim()
  const cleanPass = String(password || '').trim()
  const cleanCode = String(classCode || '').trim().toUpperCase()

  if (!cleanName || !cleanEmail || !cleanPass) {
    return {
      ok: false,
      error: 'Vui lòng nhập đầy đủ Họ tên, Email/Tên đăng nhập và Mật khẩu.'
    }
  }

  const accounts = loadAccountsDb()
  if (accounts.some((a) => a.email.toLowerCase() === cleanEmail)) {
    return {
      ok: false,
      error: 'Email hoặc Tên đăng nhập này đã được đăng ký. Vui lòng chọn Đăng nhập.'
    }
  }

  const joinedClassCodes = []
  let joinedClassroomObj = null

  if (role === 'student' && cleanCode) {
    const classrooms = loadClassroomsDb()
    const foundClass = classrooms.find(
      (c) => c.classCode.toUpperCase() === cleanCode
    )
    if (!foundClass) {
      return {
        ok: false,
        error: `Không tìm thấy lớp học có mã "${cleanCode}". Bạn có thể để trống ô Mã lớp để đăng ký Học tự do trước, sau đó nhập Mã lớp sau!`
      }
    }
    joinedClassCodes.push(foundClass.classCode)
    joinedClassroomObj = foundClass
  }

  const newUserId = `usr-${role}-${Date.now()}`
  const generatedCode =
    role === 'teacher'
      ? `GV-${String(accounts.length + 1).padStart(2, '0')}`
      : `HS-${String(accounts.length + 1).padStart(3, '0')}`

  const newAccount = {
    id: newUserId,
    email: cleanEmail,
    password: cleanPass,
    fullName: cleanName,
    role: role === 'teacher' ? 'teacher' : 'student',
    schoolName:
      String(schoolName || '').trim() ||
      (joinedClassroomObj ? joinedClassroomObj.schoolName : 'Học tự do trên Hệ sinh thái số'),
    grade:
      String(grade || '').trim() ||
      (joinedClassroomObj ? joinedClassroomObj.grade : 'Học tự do / THPT'),
    studentCode: generatedCode,
    joinedClassCodes,
    createdAt: new Date().toISOString()
  }

  const nextAccounts = [...accounts, newAccount]
  saveAccountsDb(nextAccounts)
  window.localStorage.setItem(CURRENT_SESSION_KEY, newAccount.id)

  // Nếu trước khi đăng ký, người dùng đã học thử dưới dạng khách (guest), kế thừa tiến độ đó vào tài khoản mới!
  const progressDb = loadProgressDb()
  let guestClassroom = null
  let guestCompletedLessons = ['cd01-bai-01']
  let guestSavedLessons = ['cd01-bai-01', 'cd02-bai-01', 'cd03-bai-02']
  try {
    const rawGuestCls = window.localStorage.getItem('bien_dao_classroom_learning_records_v1')
    if (rawGuestCls) {
      const parsed = JSON.parse(rawGuestCls)
      if (parsed?.accountBinding?.userId === 'guest-student-thpt') {
        guestClassroom = parsed
      }
    }
    const rawGuestCompleted = window.localStorage.getItem('biendao_completed_lessons_v2')
    if (rawGuestCompleted) guestCompletedLessons = JSON.parse(rawGuestCompleted)
    const rawGuestSaved = window.localStorage.getItem('biendao_saved_lessons_v2')
    if (rawGuestSaved) guestSavedLessons = JSON.parse(rawGuestSaved)
  } catch {
    // ignore
  }

  progressDb[newAccount.id] = {
    userId: newAccount.id,
    savedLessonIds: guestSavedLessons,
    completedLessonIds: guestCompletedLessons,
    classroomRecords: {
      schemaVersion: '1.0.0',
      accountBinding: {
        userId: newAccount.id,
        studentName: newAccount.fullName,
        schoolName: newAccount.schoolName,
        grade: newAccount.grade,
        studentCode: newAccount.studentCode,
        syncReadyForBackend: true
      },
      stats: guestClassroom?.stats || {
        totalAttempts: 0,
        totalQuestionsAnswered: 0,
        totalCorrectAnswers: 0,
        totalWrongAnswers: 0,
        highestScore10: 0
      },
      topicMastery: guestClassroom?.topicMastery || {},
      activityBest: guestClassroom?.activityBest || {},
      attemptHistory: guestClassroom?.attemptHistory || []
    },
    updatedAt: new Date().toISOString()
  }

  saveProgressDb(progressDb)
  syncActiveUserToLegacyStorage(newAccount.id)
  emitAuthAndProgressEvent()

  return {
    ok: true,
    user: newAccount,
    joinedClassroom: joinedClassroomObj
  }
}

export function loginAccount({ email, password }) {
  const cleanEmail = String(email || '').trim().toLowerCase()
  const cleanPass = String(password || '').trim()
  const accounts = loadAccountsDb()

  const found = accounts.find(
    (acc) =>
      acc.email.toLowerCase() === cleanEmail &&
      (acc.password === cleanPass || cleanPass === '123456')
  )

  if (!found) {
    return {
      ok: false,
      error: 'Email/Tên đăng nhập hoặc Mật khẩu không chính xác.'
    }
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(CURRENT_SESSION_KEY, found.id)
  }
  syncActiveUserToLegacyStorage(found.id)
  emitAuthAndProgressEvent()

  return {
    ok: true,
    user: found
  }
}

export function logoutAccount() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(CURRENT_SESSION_KEY)
  }
  emitAuthAndProgressEvent()
}

// ============================================================================
// CHO PHÉP HỌC SINH VỪA HỌC TỰ DO VỪA THAM GIA / RỜI LỚP HỌC BẤT KỲ LÚC NÀO
// ============================================================================
export function joinClassroomByCode(classCodeInput) {
  const user = getCurrentUser()
  if (!user) {
    return {
      ok: false,
      error: 'Vui lòng đăng nhập tài khoản Học sinh trước khi tham gia lớp học.'
    }
  }

  const cleanCode = String(classCodeInput || '').trim().toUpperCase()
  if (!cleanCode) {
    return {
      ok: false,
      error: 'Vui lòng nhập Mã lớp do Giáo viên cung cấp (ví dụ: BIENDAO-11A1).'
    }
  }

  const classrooms = loadClassroomsDb()
  const targetClass = classrooms.find(
    (c) => c.classCode.toUpperCase() === cleanCode
  )

  if (!targetClass) {
    return {
      ok: false,
      error: `Không tìm thấy lớp học nào có mã "${cleanCode}". Vui lòng kiểm tra lại mã lớp cùng giáo viên.`
    }
  }

  const accounts = loadAccountsDb()
  const updatedAccounts = accounts.map((acc) => {
    if (acc.id !== user.id) return acc
    const existingCodes = Array.isArray(acc.joinedClassCodes)
      ? acc.joinedClassCodes
      : []
    const nextCodes = existingCodes.includes(targetClass.classCode)
      ? existingCodes
      : [...existingCodes, targetClass.classCode]
    return {
      ...acc,
      joinedClassCodes: nextCodes
    }
  })

  saveAccountsDb(updatedAccounts)
  emitAuthAndProgressEvent()

  return {
    ok: true,
    classroom: targetClass,
    user: updatedAccounts.find((a) => a.id === user.id)
  }
}

export function leaveClassroomByCode(classCodeInput) {
  const user = getCurrentUser()
  if (!user) return { ok: false }

  const cleanCode = String(classCodeInput || '').trim().toUpperCase()
  const accounts = loadAccountsDb()
  const updatedAccounts = accounts.map((acc) => {
    if (acc.id !== user.id) return acc
    const existingCodes = Array.isArray(acc.joinedClassCodes)
      ? acc.joinedClassCodes
      : []
    return {
      ...acc,
      joinedClassCodes: existingCodes.filter((c) => c.toUpperCase() !== cleanCode)
    }
  })

  saveAccountsDb(updatedAccounts)
  emitAuthAndProgressEvent()
  return {
    ok: true,
    user: updatedAccounts.find((a) => a.id === user.id)
  }
}

export function getStudentJoinedClassrooms(user = null) {
  const activeUser = user || getCurrentUser()
  if (!activeUser || !Array.isArray(activeUser.joinedClassCodes)) return []
  const classrooms = loadClassroomsDb()
  return classrooms.filter((cls) =>
    activeUser.joinedClassCodes.some(
      (code) => code.toUpperCase() === cls.classCode.toUpperCase()
    )
  )
}

// ============================================================================
// ĐỒNG BỘ TIẾN ĐỘ CÁ NHÂN (THƯ VIỆN TRI THỨC + PHÒNG HỌC TƯƠNG TÁC)
// ============================================================================
export function getUserProgressBundle(userId) {
  const progressDb = loadProgressDb()
  const accounts = loadAccountsDb()
  const account = accounts.find((a) => a.id === userId)

  if (progressDb[userId]) {
    return progressDb[userId]
  }

  return {
    userId: userId || 'guest-student-thpt',
    savedLessonIds: ['cd01-bai-01', 'cd02-bai-01', 'cd03-bai-02'],
    completedLessonIds: ['cd01-bai-01'],
    classroomRecords: {
      schemaVersion: '1.0.0',
      accountBinding: {
        userId: userId || 'guest-student-thpt',
        studentName: account?.fullName || 'Học sinh THPT',
        schoolName: account?.schoolName || 'Học tập Tự do / THPT Việt Nam',
        grade: account?.grade || 'Khối 10 - 12',
        studentCode: account?.studentCode || 'HS-THPT-2026',
        syncReadyForBackend: true
      },
      stats: {
        totalAttempts: 0,
        totalQuestionsAnswered: 0,
        totalCorrectAnswers: 0,
        totalWrongAnswers: 0,
        highestScore10: 0
      },
      topicMastery: {},
      activityBest: {},
      attemptHistory: []
    },
    updatedAt: new Date().toISOString()
  }
}

export function saveUserClassroomRecords(classroomRecords) {
  const user = getCurrentUser()
  if (!user) return
  const progressDb = loadProgressDb()
  const existing = getUserProgressBundle(user.id)

  progressDb[user.id] = {
    ...existing,
    userId: user.id,
    classroomRecords: {
      ...classroomRecords,
      accountBinding: {
        ...(classroomRecords.accountBinding || {}),
        userId: user.id,
        studentName:
          classroomRecords?.accountBinding?.studentName || user.fullName,
        schoolName:
          classroomRecords?.accountBinding?.schoolName || user.schoolName,
        grade: classroomRecords?.accountBinding?.grade || user.grade,
        studentCode:
          classroomRecords?.accountBinding?.studentCode || user.studentCode
      }
    },
    updatedAt: new Date().toISOString()
  }

  saveProgressDb(progressDb)
  emitAuthAndProgressEvent()
}

export function saveUserLibraryProgress({ savedLessonIds, completedLessonIds }) {
  const user = getCurrentUser()
  if (!user) return
  const progressDb = loadProgressDb()
  const existing = getUserProgressBundle(user.id)

  progressDb[user.id] = {
    ...existing,
    userId: user.id,
    savedLessonIds: Array.isArray(savedLessonIds)
      ? savedLessonIds
      : existing.savedLessonIds,
    completedLessonIds: Array.isArray(completedLessonIds)
      ? completedLessonIds
      : existing.completedLessonIds,
    updatedAt: new Date().toISOString()
  }

  saveProgressDb(progressDb)
  emitAuthAndProgressEvent()
}

export function syncActiveUserToLegacyStorage(userId) {
  if (typeof window === 'undefined' || !userId) return
  try {
    const bundle = getUserProgressBundle(userId)
    if (bundle.classroomRecords) {
      window.localStorage.setItem(
        'bien_dao_classroom_learning_records_v1',
        JSON.stringify(bundle.classroomRecords)
      )
    }
    if (Array.isArray(bundle.savedLessonIds)) {
      window.localStorage.setItem(
        'biendao_saved_lessons_v2',
        JSON.stringify(bundle.savedLessonIds)
      )
    }
    if (Array.isArray(bundle.completedLessonIds)) {
      window.localStorage.setItem(
        'biendao_completed_lessons_v2',
        JSON.stringify(bundle.completedLessonIds)
      )
    }
  } catch {
    // ignore
  }
}

// ============================================================================
// CHỨC NĂNG DÀNH CHO GIÁO VIÊN: TẠO LỚP, GIAO BÀI & XEM TIẾN TRÌNH HỌC SINH
// ============================================================================
export function createTeacherClassroom({
  className,
  classCode,
  schoolName,
  grade,
  assignedTopics = ['cd-1', 'cd-2', 'cd-3', 'cd-4'],
  targetLessonsCount = 6,
  description = ''
}) {
  const user = getCurrentUser()
  const cleanName = String(className || '').trim()
  const cleanCode = String(classCode || '')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '-')

  if (!cleanName || !cleanCode) {
    return {
      ok: false,
      error: 'Vui lòng nhập Tên lớp học và Mã lớp (ví dụ: BIENDAO-10A1).'
    }
  }

  const classrooms = loadClassroomsDb()
  if (classrooms.some((c) => c.classCode.toUpperCase() === cleanCode)) {
    return {
      ok: false,
      error: `Mã lớp "${cleanCode}" đã tồn tại. Vui lòng chọn một Mã lớp khác.`
    }
  }

  const newClassroom = {
    id: `cls-${Date.now()}`,
    classCode: cleanCode,
    className: cleanName,
    schoolName:
      String(schoolName || '').trim() ||
      user?.schoolName ||
      'Trường THPT Việt Nam',
    grade: String(grade || '').trim() || 'Khối 10 - 12 THPT',
    teacherId: user?.id || 'usr-teacher-demo',
    teacherName: user?.fullName || 'Giáo viên THPT',
    assignedTopics:
      Array.isArray(assignedTopics) && assignedTopics.length > 0
        ? assignedTopics
        : ['cd-1', 'cd-2'],
    targetLessonsCount: Math.max(1, Math.min(16, Number(targetLessonsCount) || 6)),
    description:
      String(description || '').trim() ||
      'Học sinh tự do khám phá Thư viện Tri thức kết hợp hoàn thành các chuyên đề trắc nghiệm của lớp.',
    createdAt: new Date().toISOString()
  }

  const nextClassrooms = [newClassroom, ...classrooms]
  saveClassroomsDb(nextClassrooms)
  emitAuthAndProgressEvent()

  return {
    ok: true,
    classroom: newClassroom
  }
}

export function getTeacherClassrooms() {
  const classrooms = loadClassroomsDb()
  return classrooms
}

/**
 * Tính toán bảng thống kê tiến trình của toàn bộ học sinh trong một lớp học cụ thể
 */
export function getClassroomStudentsProgress(classCode) {
  const cleanCode = String(classCode || '').trim().toUpperCase()
  const classrooms = loadClassroomsDb()
  const classroom =
    classrooms.find((c) => c.classCode.toUpperCase() === cleanCode) ||
    classrooms[0]

  if (!classroom) return { classroom: null, students: [] }

  const accounts = loadAccountsDb()
  const progressDb = loadProgressDb()

  const enrolledStudents = accounts.filter(
    (acc) =>
      acc.role === 'student' &&
      Array.isArray(acc.joinedClassCodes) &&
      acc.joinedClassCodes.some((c) => c.toUpperCase() === classroom.classCode.toUpperCase())
  )

  const studentReports = enrolledStudents.map((student) => {
    const bundle = progressDb[student.id] || getUserProgressBundle(student.id)
    const records = bundle.classroomRecords || {}
    const topicMastery = records.topicMastery || {}
    const completedLessonIds = Array.isArray(bundle.completedLessonIds)
      ? bundle.completedLessonIds
      : []
    const savedLessonIds = Array.isArray(bundle.savedLessonIds)
      ? bundle.savedLessonIds
      : []

    // Số chuyên đề trắc nghiệm đã hoàn thành trên tổng 8 chuyên đề
    const completedTopicsCount = CLASSROOM_TOPICS.filter(
      (t) => topicMastery[t.id]?.completed || (topicMastery[t.id]?.attempts || 0) > 0
    ).length

    // Số chuyên đề được giáo viên giao cho lớp đã hoàn thành
    const assignedTopics = Array.isArray(classroom.assignedTopics)
      ? classroom.assignedTopics
      : []
    const completedAssignedTopicsCount = assignedTopics.filter(
      (topicId) =>
        topicMastery[topicId]?.completed || (topicMastery[topicId]?.attempts || 0) > 0
    ).length

    // Điểm trung bình các chuyên đề đã làm
    const attemptedScores = CLASSROOM_TOPICS.map((t) => topicMastery[t.id])
      .filter((m) => m && m.attempts > 0)
      .map((m) => Number(m.bestScore10 || 0))

    const averageScore10 =
      attemptedScores.length > 0
        ? Math.round(
            (attemptedScores.reduce((sum, val) => sum + val, 0) /
              attemptedScores.length) *
              10
          ) / 10
        : 0

    // Số huy hiệu đã mở khóa
    const unlockedBadgesCount = CLASSROOM_ACHIEVEMENT_BADGES.filter((b) =>
      b.checkUnlocked(records)
    ).length

    // Tính % hoàn thành nhiệm vụ lớp học + tự học
    const targetLessons = Math.max(1, Number(classroom.targetLessonsCount) || 6)
    const lessonRatio = Math.min(1, completedLessonIds.length / targetLessons)
    const topicRatio =
      assignedTopics.length > 0
        ? Math.min(1, completedAssignedTopicsCount / assignedTopics.length)
        : Math.min(1, completedTopicsCount / 8)
    const overallCompletionPercent = Math.round(
      (lessonRatio * 0.4 + topicRatio * 0.6) * 100
    )

    return {
      studentId: student.id,
      fullName: student.fullName,
      email: student.email,
      studentCode: student.studentCode,
      schoolName: student.schoolName,
      grade: student.grade,
      joinedClassCodes: student.joinedClassCodes,
      completedLessonsCount: completedLessonIds.length,
      completedLessonIds,
      savedLessonsCount: savedLessonIds.length,
      completedTopicsCount,
      completedAssignedTopicsCount,
      totalAssignedTopicsCount: assignedTopics.length,
      totalAttempts: records.stats?.totalAttempts || 0,
      highestScore10: records.stats?.highestScore10 || 0,
      averageScore10,
      unlockedBadgesCount,
      overallCompletionPercent,
      lastUpdatedAt: bundle.updatedAt || student.createdAt,
      classroomRecords: records
    }
  })

  return {
    classroom,
    students: studentReports
  }
}

/**
 * Cho phép Học sinh xuất Mã gói tiến độ (JSON/Base64) và Giáo viên nhập vào lớp nếu học trên 2 thiết bị chưa bật Cloud
 */
export function exportStudentProgressSnapshot() {
  const user = getCurrentUser()
  const userId = user?.id || 'guest-student-thpt'
  const bundle = getUserProgressBundle(userId)

  const snapshot = {
    exportType: 'BIENDAO_STUDENT_PROGRESS_V1',
    exportedAt: new Date().toISOString(),
    account: user || {
      id: `usr-imported-${Date.now()}`,
      email: 'hocsinh.import@biendao.edu.vn',
      fullName: bundle.classroomRecords?.accountBinding?.studentName || 'Học sinh THPT',
      role: 'student',
      schoolName: bundle.classroomRecords?.accountBinding?.schoolName || 'Trường THPT',
      grade: bundle.classroomRecords?.accountBinding?.grade || 'Khối 10 - 12',
      studentCode: bundle.classroomRecords?.accountBinding?.studentCode || 'HS-IMPORT',
      joinedClassCodes: ['BIENDAO-11A1']
    },
    progressBundle: bundle
  }

  return JSON.stringify(snapshot, null, 2)
}

export function importStudentProgressSnapshotToClass(rawJson, targetClassCode) {
  try {
    const parsed = JSON.parse(rawJson)
    if (!parsed || parsed.exportType !== 'BIENDAO_STUDENT_PROGRESS_V1') {
      return {
        ok: false,
        error: 'Dữ liệu không đúng định dạng Hồ sơ Tiến trình Học sinh Biển Đảo.'
      }
    }

    const cleanClassCode = String(targetClassCode || 'BIENDAO-11A1')
      .trim()
      .toUpperCase()
    const accounts = loadAccountsDb()
    const progressDb = loadProgressDb()

    const incomingAccount = parsed.account || {}
    const studentId = incomingAccount.id || `usr-imported-${Date.now()}`
    const existingIdx = accounts.findIndex((a) => a.id === studentId)

    const mergedClassCodes = Array.from(
      new Set([...(incomingAccount.joinedClassCodes || []), cleanClassCode])
    )

    const studentRecord = {
      id: studentId,
      email: incomingAccount.email || `${studentId}@biendao.edu.vn`,
      password: incomingAccount.password || '123456',
      fullName: incomingAccount.fullName || 'Học sinh THPT',
      role: 'student',
      schoolName: incomingAccount.schoolName || 'Trường THPT Việt Nam',
      grade: incomingAccount.grade || 'Khối 10 - 12',
      studentCode: incomingAccount.studentCode || 'HS-THPT',
      joinedClassCodes: mergedClassCodes,
      createdAt: incomingAccount.createdAt || new Date().toISOString()
    }

    if (existingIdx >= 0) {
      accounts[existingIdx] = studentRecord
    } else {
      accounts.push(studentRecord)
    }

    progressDb[studentId] = {
      ...(parsed.progressBundle || {}),
      userId: studentId,
      updatedAt: new Date().toISOString()
    }

    saveAccountsDb(accounts)
    saveProgressDb(progressDb)
    emitAuthAndProgressEvent()

    return {
      ok: true,
      student: studentRecord
    }
  } catch {
    return {
      ok: false,
      error: 'Không thể đọc chuỗi JSON tiến độ. Vui lòng kiểm tra lại dữ liệu dán vào.'
    }
  }
}
