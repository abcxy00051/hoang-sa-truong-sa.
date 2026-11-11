import { TOPIC_1_TONG_QUAN } from './library/topic1_TongQuan.js'
import { TOPIC_2_LICH_SU } from './library/topic2_LichSu.js'
import { TOPIC_3_PHAP_LY } from './library/topic3_PhapLy.js'
import { TOPIC_4_DIA_LY_TU_NHIEN } from './library/topic8_DiaLyTuNhien.js'
import { TOPIC_5_KINH_TE } from './library/topic5_KinhTe.js'
import { TOPIC_4_DOI_SONG } from './library/topic4_DoiSong.js'
import { TOPIC_6_MOI_TRUONG } from './library/topic6_MoiTruong.js'
import { TOPIC_7_TUOI_TRE } from './library/topic7_TuoiTre.js'
import { TOPIC_ACADEMIC_VISUALS, LESSON_ACADEMIC_VISUALS } from './libraryVisualsData.js'

const RAW_MODULES_CONFIG = [
  {
    raw: TOPIC_1_TONG_QUAN,
    orderIndex: 1,
    code: 'CHUYÊN ĐỀ 01',
    title: 'Tổng quan biển đảo Việt Nam',
    shortTitle: '1. Tổng quan Biển đảo Việt Nam',
    bannerImage: '/assets/library/chuyen-de-01-tong-quan.svg',
    iconName: 'Compass',
    accent: 'ocean'
  },
  {
    raw: TOPIC_2_LICH_SU,
    orderIndex: 2,
    code: 'CHUYÊN ĐỀ 02',
    title: 'Lịch sử Hoàng Sa và Trường Sa',
    shortTitle: '2. Lịch sử Hoàng Sa và Trường Sa',
    bannerImage: '/assets/library/chuyen-de-02-lich-su.svg',
    iconName: 'ScrollText',
    accent: 'gold'
  },
  {
    raw: TOPIC_3_PHAP_LY,
    orderIndex: 3,
    code: 'CHUYÊN ĐỀ 03',
    title: 'Cơ sở lịch sử và pháp lý',
    shortTitle: '3. Cơ sở Lịch sử và Pháp lý',
    bannerImage: '/assets/library/chuyen-de-03-phap-ly.svg',
    iconName: 'Scale',
    accent: 'navy'
  },
  {
    raw: TOPIC_4_DIA_LY_TU_NHIEN,
    orderIndex: 4,
    code: 'CHUYÊN ĐỀ 04',
    title: 'Địa lý và tự nhiên biển đảo',
    shortTitle: '4. Địa lý và Tự nhiên Biển đảo',
    bannerImage: '/assets/library/chuyen-de-04-dia-ly-tu-nhien.svg',
    iconName: 'Map',
    accent: 'cyan'
  },
  {
    raw: TOPIC_5_KINH_TE,
    orderIndex: 5,
    code: 'CHUYÊN ĐỀ 05',
    title: 'Kinh tế và tài nguyên biển',
    shortTitle: '5. Kinh tế và Tài nguyên Biển',
    bannerImage: '/assets/library/chuyen-de-05-kinh-te.svg',
    iconName: 'BarChart3',
    accent: 'ocean'
  },
  {
    raw: TOPIC_4_DOI_SONG,
    orderIndex: 6,
    code: 'CHUYÊN ĐỀ 06',
    title: 'Đời sống con người nơi biển đảo',
    shortTitle: '6. Đời sống Con người nơi Biển đảo',
    bannerImage: '/assets/library/chuyen-de-06-doi-song.svg',
    iconName: 'HeartHandshake',
    accent: 'gold'
  },
  {
    raw: TOPIC_6_MOI_TRUONG,
    orderIndex: 7,
    code: 'CHUYÊN ĐỀ 07',
    title: 'Bảo vệ môi trường biển',
    shortTitle: '7. Bảo vệ Môi trường Biển',
    bannerImage: '/assets/library/chuyen-de-07-moi-truong.svg',
    iconName: 'ShieldCheck',
    accent: 'cyan'
  },
  {
    raw: TOPIC_7_TUOI_TRE,
    orderIndex: 8,
    code: 'CHUYÊN ĐỀ 08',
    title: 'Tuổi trẻ với trách nhiệm bảo vệ biển đảo',
    shortTitle: '8. Tuổi trẻ Bảo vệ Biển đảo',
    bannerImage: '/assets/library/chuyen-de-08-tuoi-tre.svg',
    iconName: 'Sparkles',
    accent: 'gold'
  }
]

function parseReadingMinutes(readingTimeStr) {
  if (!readingTimeStr) return 14
  const match = String(readingTimeStr).match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 14
}

const LESSON_BANNERS_BY_ID = {
  'cd01-bai-01': '/assets/library/chuyen-de-01-tong-quan.svg',
  'cd01-bai-02': '/assets/library/bai-02-5-vung-bien.svg',
  'cd01-bai-03': '/assets/library/bai-03-he-thong-dao-chien-luoc.svg',
  'cd02-bai-01': '/assets/library/chuyen-de-02-lich-su.svg',
  'cd02-bai-02': '/assets/library/bai-04-thuc-thi-chu-quyen.svg',
  'cd02-bai-03': '/assets/library/bai-05-thuc-thi-hien-dai.svg',
  'cd03-bai-01': '/assets/library/chuyen-de-03-phap-ly.svg',
  'cd03-bai-02': '/assets/library/bai-06-unclos-luat-bien.svg',
  'cd04-tn-bai-01': '/assets/library/chuyen-de-04-dia-ly-tu-nhien.svg',
  'cd04-tn-bai-02': '/assets/library/bai-07-8-cum-dao-truong-sa.svg',
  'cd04-tn-bai-03': '/assets/library/bai-08-khi-hau-hai-van.svg',
  'cd05-bai-01': '/assets/library/chuyen-de-05-kinh-te.svg',
  'cd05-bai-02': '/assets/library/bai-10-tai-nguyen-hang-hai.svg',
  'cd04-bai-01': '/assets/library/chuyen-de-06-doi-song.svg',
  'cd04-bai-02': '/assets/library/bai-12-hai-dang-nha-gian-dk1.svg',
  'cd06-bai-01': '/assets/library/chuyen-de-07-moi-truong.svg',
  'cd06-bai-02': '/assets/library/bai-14-16-khu-bao-ton-bien.svg',
  'cd07-bai-01': '/assets/library/bai-16-kiem-chung-ban-do-so.svg',
  'cd07-bai-02': '/assets/library/chuyen-de-08-tuoi-tre.svg'
}

// Danh sách 8 Chuyên đề Học liệu Số chính thống
export const LIBRARY_THEMATIC_MODULES = RAW_MODULES_CONFIG.map((cfg) => {
  const { raw, orderIndex, code, title, shortTitle, bannerImage, iconName, accent } = cfg
  const academicVisual = TOPIC_ACADEMIC_VISUALS[raw.id] || null

  const enrichedLessons = raw.lessons.map((lesson, lIdx) => {
    const lessonNumber = `Bài ${orderIndex}.${lIdx + 1}`
    const minutes = parseReadingMinutes(lesson.readingTime)
    const lessonImage = LESSON_BANNERS_BY_ID[lesson.id] || bannerImage
    const lessonAcademicVisual = LESSON_ACADEMIC_VISUALS[lesson.id] || academicVisual
    return {
      ...lesson,
      topicOrder: orderIndex,
      topicCode: code,
      topicTitle: `${orderIndex}. ${title}`,
      lessonNumber,
      image: lessonImage,
      readingMinutes: minutes,
      documentClassification: {
        primaryArchiveLabel: 'Tư liệu gốc trích dẫn chính thống',
        illustrationLabel: 'Đồ họa học thuật chuẩn hóa',
        commentaryLabel: 'Phân tích & Nhận định học thuật chuyên sâu'
      },
      academicVisual: lessonAcademicVisual
    }
  })

  const totalMinutes = enrichedLessons.reduce((sum, l) => sum + l.readingMinutes, 0)

  return {
    ...raw,
    orderIndex,
    code,
    title,
    shortTitle,
    bannerImage,
    iconName,
    accent,
    lessonCount: enrichedLessons.length,
    totalReadingMinutes: totalMinutes,
    estimatedReadingTime: `${totalMinutes} phút đọc (${enrichedLessons.length} bài học)`,
    academicVisual,
    lessons: enrichedLessons
  }
})

// Mảng phẳng tất cả bài học để tra cứu nhanh, lọc và tìm kiếm
export const ALL_LIBRARY_LESSONS = LIBRARY_THEMATIC_MODULES.flatMap(
  (topic) => topic.lessons
)

// Danh mục bộ lọc Chuyên đề trên giao diện Thư viện Tri thức
export const LIBRARY_TOPICS = [
  { id: 'all', label: 'Tất cả 8 Chuyên đề', icon: 'Layers' },
  ...LIBRARY_THEMATIC_MODULES.map((t) => ({
    id: t.id,
    label: t.shortTitle,
    icon: t.iconName
  }))
]

// Danh mục bộ lọc theo Khối lớp / Môn học THPT (Chương trình GDPT 2018)
export const LIBRARY_GRADES = [
  { id: 'all', label: 'Tất cả khối lớp THPT' },
  { id: 'khoi-10', label: 'Khối 10 (Địa lý • GDQP-AN • Trải nghiệm)' },
  { id: 'khoi-11', label: 'Khối 11 (Lịch sử 11 – Chủ đề Biển Đông • Pháp luật)' },
  { id: 'khoi-12', label: 'Khối 12 (Địa lý 12 – Kinh tế & Chủ quyền Biển đảo)' }
]

// Giữ tương thích ngược với các component khác nếu có import LIBRARY_DOCUMENTS
export const LIBRARY_DOCUMENTS = ALL_LIBRARY_LESSONS
export const LIBRARY_FORMATS = [
  { id: 'all', label: 'Tất cả định dạng' },
  { id: 'bai-hoc-chuyen-sau', label: 'Bài học chuyên sâu (Có trắc nghiệm)' }
]
