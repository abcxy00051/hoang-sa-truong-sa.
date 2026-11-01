import { TOPIC_1_TONG_QUAN } from './library/topic1_TongQuan'
import { TOPIC_2_LICH_SU } from './library/topic2_LichSu'
import { TOPIC_3_PHAP_LY } from './library/topic3_PhapLy'
import { TOPIC_4_DOI_SONG } from './library/topic4_DoiSong'
import { TOPIC_5_KINH_TE } from './library/topic5_KinhTe'
import { TOPIC_6_MOI_TRUONG } from './library/topic6_MoiTruong'
import { TOPIC_7_TUOI_TRE } from './library/topic7_TuoiTre'

export const LIBRARY_THEMATIC_MODULES = [
  TOPIC_1_TONG_QUAN,
  TOPIC_2_LICH_SU,
  TOPIC_3_PHAP_LY,
  TOPIC_4_DOI_SONG,
  TOPIC_5_KINH_TE,
  TOPIC_6_MOI_TRUONG,
  TOPIC_7_TUOI_TRE
]

export const ALL_LIBRARY_LESSONS = LIBRARY_THEMATIC_MODULES.flatMap(
  (module) => module.lessons
)

export const LIBRARY_GRADES = [
  { id: 'all', label: 'Tất cả Khối lớp THPT' },
  { id: 'khoi-10', label: 'Khối 10' },
  { id: 'khoi-11', label: 'Khối 11' },
  { id: 'khoi-12', label: 'Khối 12' }
]

export const RESEARCH_PROJECT_INFO = {
  title:
    'Ứng dụng trí tuệ nhân tạo trong việc nâng cao nhận thức học sinh THPT về biển đảo Hoàng Sa và Trường Sa',
  standardNote:
    'Hệ thống học liệu số được biên soạn chuyên sâu thành 7 chuyên đề, phân biệt rõ dữ kiện lịch sử – quy định pháp luật – phân tích khoa học và đối chiếu từ các nguồn chính thống (Sách giáo khoa GDPT 2018, Luật Biển Việt Nam 2012, Công ước UNCLOS 1982, Cục Văn thư và Lưu trữ Nhà nước, Ủy ban Biên giới Quốc gia).'
}
