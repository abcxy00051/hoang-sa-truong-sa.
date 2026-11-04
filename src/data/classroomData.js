import { CLASSROOM_TOPICS_PART1 } from './classroom/topics_part1.js'
import { CLASSROOM_TOPICS_PART2 } from './classroom/topics_part2.js'
import { TRUE_FALSE_QUESTIONS } from './classroom/trueFalseData.js'
import { TIMELINE_MATCHING_SETS } from './classroom/timelineGameData.js'
import { MAP_GAME_LOCATIONS } from './classroom/mapGameData.js'

/**
 * Toàn bộ 8 chuyên đề học tập (mỗi chuyên đề 10 câu hỏi = 80 câu trắc nghiệm 4 lựa chọn)
 */
export const CLASSROOM_TOPICS = [
  ...CLASSROOM_TOPICS_PART1,
  ...CLASSROOM_TOPICS_PART2
]

/**
 * Ngân hàng tổng hợp 80 câu hỏi trắc nghiệm gắn kèm thông tin chuyên đề
 * phục vụ hoạt động "Thử thách kiến thức theo cấp độ" và "Bài kiểm tra tổng hợp"
 */
export const ALL_MULTIPLE_CHOICE_QUESTIONS = CLASSROOM_TOPICS.flatMap((topic) =>
  topic.questions.map((q) => ({
    ...q,
    topicId: topic.id,
    topicCode: topic.code,
    topicTitle: topic.title
  }))
)

export const DIFFICULTY_LEVELS = [
  {
    id: 'easy',
    label: 'Cấp độ Dễ — Khởi động Ra khơi',
    shortLabel: 'Dễ',
    badgeColor: 'easy',
    desc: 'Kiến thức nền tảng về địa lý tự nhiên, chiều dài bờ biển, đơn vị hành chính Hoàng Sa – Trường Sa và các khái niệm cơ bản.'
  },
  {
    id: 'medium',
    label: 'Cấp độ Trung bình — Vượt sóng Đại dương',
    shortLabel: 'Trung bình',
    badgeColor: 'medium',
    desc: 'Phân tích sử liệu cổ, quy chế pháp lý các vùng biển theo UNCLOS 1982, tiềm năng kinh tế biển và bảo tồn sinh thái biển.'
  },
  {
    id: 'hard',
    label: 'Cấp độ Nâng cao — Làm chủ Hải trình',
    shortLabel: 'Nâng cao',
    badgeColor: 'hard',
    desc: 'Vận dụng chuyên sâu các mốc văn bản pháp lý, điều khoản cụ thể của UNCLOS 1982, Luật Biển Việt Nam 2012 và Châu bản triều Nguyễn.'
  }
]

export const INTERACTIVE_ACTIVITIES = [
  {
    id: 'topic-quiz',
    code: 'HOẠT ĐỘNG 01',
    title: '1. Bài học & Trắc nghiệm theo Chủ đề',
    shortTitle: '1. Bài học & Trắc nghiệm',
    subtitle: '8 chuyên đề học tập • 80 câu hỏi trắc nghiệm có giải thích',
    iconName: 'BookOpen',
    image: '/assets/classroom/act-01-trac-nghiem-chu-de.svg',
    badge: '8 Chuyên đề × 10 Câu'
  },
  {
    id: 'true-false',
    code: 'HOẠT ĐỘNG 02',
    title: '2. Câu hỏi Đúng / Sai có Giải thích',
    shortTitle: '2. Câu hỏi Đúng / Sai',
    subtitle: '16 nhận định pháp lý, lịch sử và địa lý biển đảo',
    iconName: 'CheckCircle2',
    image: '/assets/classroom/act-02-dung-sai.svg',
    badge: '16 Nhận định Chuẩn'
  },
  {
    id: 'timeline-match',
    code: 'HOẠT ĐỘNG 03',
    title: '3. Ghép Sự kiện với Mốc thời gian',
    shortTitle: '3. Ghép Mốc Thời gian',
    subtitle: '3 chặng lịch sử – pháp lý với 18 cặp sự kiện tiêu biểu',
    iconName: 'Clock',
    image: '/assets/classroom/act-03-ghep-moc-thoi-gian.svg',
    badge: '3 Chặng • 18 Cặp Mốc'
  },
  {
    id: 'map-identify',
    code: 'HOẠT ĐỘNG 04',
    title: '4. Nhận diện Địa danh trên Bản đồ',
    shortTitle: '4. Nhận diện Địa danh',
    subtitle: 'Định vị trực tiếp 12 tọa độ trọng điểm trên bản đồ Biển Đông',
    iconName: 'Map',
    image: '/assets/classroom/act-04-nhan-dien-ban-do.svg',
    badge: '12 Tọa độ Bản đồ'
  },
  {
    id: 'level-challenge',
    code: 'HOẠT ĐỘNG 05',
    title: '5. Thử thách Kiến thức 3 Cấp độ',
    shortTitle: '5. Thử thách Kiến thức',
    subtitle: 'Phân hóa năng lực theo cấp độ Dễ, Trung bình và Nâng cao',
    iconName: 'Award',
    image: '/assets/classroom/act-05-thu-thach-cap-do.svg',
    badge: 'Dễ • Trung bình • Nâng cao'
  },
  {
    id: 'comprehensive-exam',
    code: 'HOẠT ĐỘNG 06',
    title: '6. Bài Kiểm tra Tổng hợp THPT',
    shortTitle: '6. Kiểm tra Tổng hợp',
    subtitle: 'Đề thi tổng hợp 20 câu liên chuyên đề có đồng hồ tính giờ',
    iconName: 'GraduationCap',
    image: '/assets/classroom/act-06-kiem-tra-tong-hop.svg',
    badge: '20 Câu • Thang 10 điểm'
  }
]

/**
 * Tạo đề Kiểm tra Tổng hợp 20 câu hỏi cân bằng từ 8 chuyên đề
 * (mỗi chuyên đề lấy 2-3 câu đại diện ở các mức độ Dễ, Trung bình, Nâng cao)
 */
export function buildComprehensiveExamQuestions(seed = 1) {
  const selected = []
  CLASSROOM_TOPICS.forEach((topic, tIdx) => {
    const questions = topic.questions || []
    const takeCount = tIdx < 4 ? 3 : 2 // 4*3 + 4*2 = 20 câu hỏi chuẩn
    for (let i = 0; i < takeCount; i += 1) {
      const pickIdx = (i * 3 + seed + tIdx) % questions.length
      const q = questions[pickIdx]
      if (q) {
        selected.push({
          ...q,
          topicId: topic.id,
          topicCode: topic.code,
          topicTitle: topic.title
        })
      }
    }
  })
  return selected
}

/**
 * Hệ thống Huy hiệu Thành tích Thực tế (Tuyệt đối không tạo thành tích giả:
 * Chỉ mở khóa khi dữ liệu làm bài thực tế của học sinh đạt đúng điều kiện)
 */
export const CLASSROOM_ACHIEVEMENT_BADGES = [
  {
    id: 'badge-first-sail',
    title: 'Khởi hành Ra khơi',
    requirementText: 'Hoàn thành ít nhất 1 bài tập hoặc hoạt động bất kỳ trong Phòng học tương tác.',
    iconName: 'Compass',
    accent: 'cyan',
    checkUnlocked: (records) => (records?.stats?.totalAttempts || 0) >= 1,
    getProgressText: (records) =>
      `${Math.min(1, records?.stats?.totalAttempts || 0)}/1 lượt hoàn thành`
  },
  {
    id: 'badge-topic-explorer',
    title: 'Nhà Nghiên cứu Chuyên đề',
    requirementText: 'Hoàn thành đạt yêu cầu (từ 5.0/10 điểm trở lên) tối thiểu 4/8 chuyên đề học tập.',
    iconName: 'BookOpen',
    accent: 'ocean',
    checkUnlocked: (records) => {
      const done = Object.values(records?.topicMastery || {}).filter(
        (m) => m.completed
      ).length
      return done >= 4
    },
    getProgressText: (records) => {
      const done = Object.values(records?.topicMastery || {}).filter(
        (m) => m.completed
      ).length
      return `${done}/4 chuyên đề đạt yêu cầu`
    }
  },
  {
    id: 'badge-historian',
    title: 'Sứ giả Lịch sử & Pháp lý',
    requirementText: 'Hoàn thành cả bài tập Đúng/Sai và trò chơi Ghép Sự kiện với Mốc thời gian đạt từ 7.0/10 điểm.',
    iconName: 'Clock',
    accent: 'gold',
    checkUnlocked: (records) => {
      const history = records?.attemptHistory || []
      const hasTF = history.some(
        (a) => a.activityType === 'true-false' && a.score10 >= 7
      )
      const hasTimeline = history.some(
        (a) => a.activityType === 'timeline-match' && a.score10 >= 7
      )
      return hasTF && hasTimeline
    },
    getProgressText: (records) => {
      const history = records?.attemptHistory || []
      const hasTF = history.some(
        (a) => a.activityType === 'true-false' && a.score10 >= 7
      )
      const hasTimeline = history.some(
        (a) => a.activityType === 'timeline-match' && a.score10 >= 7
      )
      const count = (hasTF ? 1 : 0) + (hasTimeline ? 1 : 0)
      return `${count}/2 hoạt động đạt ≥ 7.0đ`
    }
  },
  {
    id: 'badge-navigator',
    title: 'Hoa tiêu Bản đồ Biển Đông',
    requirementText: 'Hoàn thành Trò chơi Nhận diện 12 Địa danh Bản đồ Biển Đông với độ chính xác từ 75% trở lên.',
    iconName: 'Map',
    accent: 'cyan',
    checkUnlocked: (records) => {
      const history = records?.attemptHistory || []
      return history.some(
        (a) => a.activityType === 'map-identify' && a.accuracyPercent >= 75
      )
    },
    getProgressText: (records) => {
      const history = records?.attemptHistory || []
      const bestMap = history
        .filter((a) => a.activityType === 'map-identify')
        .reduce((max, a) => Math.max(max, a.accuracyPercent || 0), 0)
      return `Độ chính xác cao nhất: ${bestMap}% (Cần ≥ 75%)`
    }
  },
  {
    id: 'badge-comprehensive-master',
    title: 'Thủ khoa Chủ quyền Biển đảo',
    requirementText: 'Hoàn thành Bài Kiểm tra Tổng hợp 20 câu đạt từ 8.0/10 điểm trở lên.',
    iconName: 'Award',
    accent: 'gold',
    checkUnlocked: (records) => {
      const history = records?.attemptHistory || []
      return history.some(
        (a) => a.activityType === 'comprehensive-exam' && a.score10 >= 8
      )
    },
    getProgressText: (records) => {
      const history = records?.attemptHistory || []
      const bestExam = history
        .filter((a) => a.activityType === 'comprehensive-exam')
        .reduce((max, a) => Math.max(max, a.score10 || 0), 0)
      return `Điểm kiểm tra tổng hợp cao nhất: ${bestExam.toFixed(1)}/10 (Cần ≥ 8.0)`
    }
  }
]

export {
  TRUE_FALSE_QUESTIONS,
  TIMELINE_MATCHING_SETS,
  MAP_GAME_LOCATIONS
}
