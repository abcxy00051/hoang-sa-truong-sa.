import { EXHIBITION_HALL_1 } from './exhibition/hall1_LichSu.js'
import { EXHIBITION_HALL_2 } from './exhibition/hall2_HoangSaTruongSa.js'
import { EXHIBITION_HALL_3 } from './exhibition/hall3_NguoiGiuBien.js'
import { EXHIBITION_HALL_4 } from './exhibition/hall4_ThienNhien.js'
import { EXHIBITION_HALL_5 } from './exhibition/hall5_TuoiTre.js'

/**
 * 5 Phòng triển lãm chuyên đề của Bảo tàng số Biển Đảo Việt Nam:
 * 1. Dấu ấn lịch sử
 * 2. Bản đồ và tư liệu
 * 3. Con người và đời sống biển đảo
 * 4. Thiên nhiên và môi trường
 * 5. Tuổi trẻ với biển đảo
 */
export const EXHIBITION_HALLS = [
  EXHIBITION_HALL_1,
  EXHIBITION_HALL_2,
  EXHIBITION_HALL_3,
  EXHIBITION_HALL_4,
  EXHIBITION_HALL_5
]

/**
 * 6 Hình thức trưng bày chuyên nghiệp trong Bảo tàng số (Yêu cầu II.3)
 */
export const EXHIBITION_DISPLAY_FORMATS = [
  {
    id: 'all',
    label: 'Tất cả hình thức (6)',
    shortLabel: 'Mọi hình thức',
    desc: 'Hiển thị toàn bộ 6 hình thức trưng bày trong bảo tàng số.'
  },
  {
    id: 'anh-lon',
    label: 'Ảnh lớn',
    shortLabel: 'Ảnh lớn',
    desc: 'Trưng bày khổ lớn độ phân giải cao tái hiện diện mạo biển đảo, cột mốc chủ quyền và đời sống quân dân.'
  },
  {
    id: 'khung-tu-lieu',
    label: 'Khung tư liệu',
    shortLabel: 'Khung tư liệu',
    desc: 'Khung trưng bày bảo tàng kết hợp hình ảnh, niên đại, cơ quan lưu trữ và bảng thuyết minh học thuật.'
  },
  {
    id: 'ban-do',
    label: 'Bản đồ',
    shortLabel: 'Bản đồ',
    desc: 'Hệ thống bản đồ cổ Việt Nam, bản đồ phương Tây và bản đồ địa lý – hành chính Hoàng Sa, Trường Sa.'
  },
  {
    id: 'tai-lieu-luu-tru',
    label: 'Tài liệu lưu trữ',
    shortLabel: 'Tài liệu lưu trữ',
    desc: 'Hồ sơ Châu bản triều Nguyễn (Di sản tư liệu thế giới UNESCO), tờ sai, nghị định hành chính và văn kiện pháp lý.'
  },
  {
    id: 'infographic',
    label: 'Infographic',
    shortLabel: 'Infographic',
    desc: 'Đồ họa thông tin trực quan hóa số liệu hải đăng, đa dạng sinh học biển, môi trường và mô hình chuyển đổi số.'
  },
  {
    id: 'cau-chuyen-chu-de',
    label: 'Câu chuyện theo chủ đề',
    shortLabel: 'Câu chuyện chủ đề',
    desc: 'Chuỗi tự sự theo chủ đề kết nối mạch lịch sử cha ông mở cõi với nhịp sống người giữ biển và thế hệ trẻ hôm nay.'
  }
]

/**
 * Ánh xạ từng mã hồ sơ hiện vật sang đúng 1 trong 6 Hình thức trưng bày và Câu chuyện theo chủ đề
 */
const ITEM_FORMAT_AND_STORY_MAP = {
  'exh-101': {
    displayFormatId: 'ban-do',
    displayFormatLabel: 'Bản đồ & Thư tịch cổ',
    thematicStoryTitle: 'Câu chuyện: Từ "Bãi Cát Vàng" trên bản đồ thế kỷ XVII đến Phủ biên tạp lục',
    thematicStoryNarrative:
      'Hơn 300 năm trước, các bậc tiền nhân như Đỗ Bá Công Đạo (1686) và Lê Quý Đôn (1776) đã ghi chép tỉ mỉ từng hải trình từ Cù lao Ré (Lý Sơn) ra Bãi Cát Vàng, đặt nền móng thư tịch đầu tiên cho chủ quyền biển đảo Việt Nam.'
  },
  'exh-102': {
    displayFormatId: 'tai-lieu-luu-tru',
    displayFormatLabel: 'Tài liệu lưu trữ (Di sản UNESCO)',
    thematicStoryTitle: 'Câu chuyện: Nét châu phê mực son của Hoàng đế nhà Nguyễn về công vụ Hoàng Sa',
    thematicStoryNarrative:
      'Trên từng trang giấy dó của Châu bản triều Nguyễn, những dòng phê duyệt bằng mực son (châu phê) của vua Minh Mạng vẫn còn nguyên vẹn, minh chứng cho hoạt động quản lý nhà nước bài bản, thường niên đối với Hoàng Sa.'
  },
  'exh-103': {
    displayFormatId: 'khung-tu-lieu',
    displayFormatLabel: 'Khung tư liệu Hành chính cổ',
    thematicStoryTitle: 'Câu chuyện: Lễ Khao lề thế lính Hoàng Sa và Tờ sai năm Thái Đức (1786)',
    thematicStoryNarrative:
      'Sự kết hợp giữa văn bản hành chính nhà nước (tờ sai, chỉ dụ) và nghi lễ dân gian trên đảo Lý Sơn khẳng định dòng chảy thực thi chủ quyền liên tục qua các triều đại Việt Nam.'
  },
  'exh-104': {
    displayFormatId: 'ban-do',
    displayFormatLabel: 'Bản đồ & Hồ sơ Pháp lý',
    thematicStoryTitle: 'Câu chuyện: Đại Nam nhất thống toàn đồ (1838) đến Hội nghị San Francisco (1951)',
    thematicStoryNarrative:
      'Chuỗi chứng cứ bản đồ học và hành chính xuyên suốt từ thế kỷ XIX đến tuyên bố quốc tế trước 51 quốc gia tại Hội nghị San Francisco ngày 07/9/1951.'
  },
  'exh-201': {
    displayFormatId: 'ban-do',
    displayFormatLabel: 'Bản đồ Địa lý – Hành chính',
    thematicStoryTitle: 'Câu chuyện: Hai nhóm đảo An Vĩnh và Lưỡi Liềm của huyện đảo Hoàng Sa',
    thematicStoryNarrative:
      'Khám phá cấu trúc địa lý tự nhiên của hơn 30 đảo, đá, cồn san hô thuộc quần đảo Hoàng Sa (TP. Đà Nẵng) án ngữ tuyến hàng hải huyết mạch qua Biển Đông.'
  },
  'exh-202': {
    displayFormatId: 'anh-lon',
    displayFormatLabel: 'Ảnh lớn Cảnh quan & Cột mốc',
    thematicStoryTitle: 'Câu chuyện: Cột mốc chủ quyền nơi thị trấn Trường Sa',
    thematicStoryNarrative:
      'Giữa trùng khơi nắng gió, cột mốc chủ quyền khắc tọa độ địa lý cùng mái chùa, trường học và hàng bàng vuông tạo nên diện mạo bình yên, vững chãi của huyện đảo Trường Sa (tỉnh Khánh Hòa).'
  },
  'exh-203': {
    displayFormatId: 'infographic',
    displayFormatLabel: 'Infographic Hàng hải & Khí tượng',
    thematicStoryTitle: 'Câu chuyện: Những ngọn hải đăng thức cùng Biển Đông',
    thematicStoryNarrative:
      'Hệ thống hải đăng và trạm khí tượng hải văn trên quần đảo Trường Sa hoạt động 24/24 giờ, đóng góp thiết thực cho an toàn hàng hải và dự báo bão quốc tế.'
  },
  'exh-204': {
    displayFormatId: 'khung-tu-lieu',
    displayFormatLabel: 'Khung tư liệu Sinh thái Đảo',
    thematicStoryTitle: 'Câu chuyện: Sức sống cây Bàng vuông, Phong ba nơi đầu sóng',
    thematicStoryNarrative:
      'Bám rễ sâu vào nền cát san hô mặn chát và đứng vững trước bão cấp 12–15, cây bàng vuông và cây phong ba là biểu tượng sinh thái gắn liền với ý chí người giữ đảo.'
  },
  'exh-301': {
    displayFormatId: 'anh-lon',
    displayFormatLabel: 'Ảnh lớn Nhà giàn DK1',
    thematicStoryTitle: 'Câu chuyện: Hơn 35 năm Nhà giàn DK1 sừng sững trên Thềm lục địa phía Nam',
    thematicStoryNarrative:
      'Từ ngày 05/7/1989 đến nay, các thế hệ cán bộ, chiến sĩ Nhà giàn DK1 luôn kiên cường bám trụ nơi thềm lục địa phía Nam, khẳng định quyền chủ quyền hợp pháp theo UNCLOS 1982.'
  },
  'exh-302': {
    displayFormatId: 'tai-lieu-luu-tru',
    displayFormatLabel: 'Tài liệu lưu trữ & Thực thi Pháp luật',
    thematicStoryTitle: 'Câu chuyện: Thượng tôn pháp luật và Cứu hộ cứu nạn giữa trùng khơi',
    thematicStoryNarrative:
      'Thực thi Luật Biển Việt Nam 2012 và Luật Cảnh sát biển 2018, các lực lượng tuần tra trên biển luôn là điểm tựa an toàn cho ngư dân trong nước và tàu thuyền quốc tế.'
  },
  'exh-303': {
    displayFormatId: 'cau-chuyen-chu-de',
    displayFormatLabel: 'Câu chuyện theo chủ đề Ngư dân',
    thematicStoryTitle: 'Câu chuyện: Mỗi con tàu ngư dân là một cột mốc sống trên biển',
    thematicStoryNarrative:
      'Lá cờ đỏ sao vàng tung bay trên hàng vạn tàu cá vươn khơi hợp pháp vừa mang lại nguồn lợi kinh tế biển bền vững vừa nối dài sự hiện diện dân sự truyền thống.'
  },
  'exh-304': {
    displayFormatId: 'cau-chuyen-chu-de',
    displayFormatLabel: 'Câu chuyện theo chủ đề Nhân văn',
    thematicStoryTitle: 'Câu chuyện: Tiếng trẻ thơ đọc bài và Áo trắng quân y nơi đảo xa',
    thematicStoryNarrative:
      'Hình ảnh thầy giáo trẻ gieo chữ tại trường tiểu học xã đảo và các y bác sĩ hội chẩn từ xa cứu chữa ngư dân làm ấm lòng mỗi người con đất Việt.'
  },
  'exh-401': {
    displayFormatId: 'anh-lon',
    displayFormatLabel: 'Ảnh lớn Rạn san hô Nhiệt đới',
    thematicStoryTitle: 'Câu chuyện: "Rừng mưa nhiệt đới" dưới đáy Biển Đông',
    thematicStoryNarrative:
      'Hơn 400 loài san hô tạo rạn tại vùng biển Việt Nam là ngôi nhà chung của 25% sinh vật biển và là nền móng địa chất tự nhiên bảo vệ các đảo san hô.'
  },
  'exh-402': {
    displayFormatId: 'khung-tu-lieu',
    displayFormatLabel: 'Khung tư liệu Bảo tồn Sách Đỏ',
    thematicStoryTitle: 'Câu chuyện: Hành trình bảo tồn Rùa biển Côn Đảo và Dugong Phú Quốc',
    thematicStoryNarrative:
      'Hàng chục nghìn cá thể rùa con được ấp nở và thả về đại dương mỗi năm tại Vườn quốc gia Côn Đảo là minh chứng cho nỗ lực bảo tồn đa dạng sinh học biển Việt Nam.'
  },
  'exh-403': {
    displayFormatId: 'infographic',
    displayFormatLabel: 'Infographic Carbon Xanh (Blue Carbon)',
    thematicStoryTitle: 'Câu chuyện: Bức tường xanh Rừng ngập mặn chống biến đổi khí hậu',
    thematicStoryNarrative:
      'Hệ sinh thái rừng ngập mặn và thảm cỏ biển tích trữ lượng Carbon cao gấp 3–5 lần rừng trên cạn, bảo vệ bền vững các dải bờ biển và hải đảo.'
  },
  'exh-404': {
    displayFormatId: 'infographic',
    displayFormatLabel: 'Infographic Môi trường Đại dương',
    thematicStoryTitle: 'Câu chuyện: Giảm 75% rác thải nhựa đại dương vào năm 2030',
    thematicStoryNarrative:
      'Mỗi hành động từ chối nhựa dùng một lần của học sinh hôm nay góp phần trực tiếp bảo vệ rạn san hô và các loài sinh vật biển khỏi hiểm họa vi nhựa.'
  },
  'exh-501': {
    displayFormatId: 'infographic',
    displayFormatLabel: 'Infographic Sáng kiến Số THPT',
    thematicStoryTitle: 'Câu chuyện: Học sinh THPT làm chủ công nghệ AI vì biển đảo quê hương',
    thematicStoryNarrative:
      'Tích hợp Bản đồ số GIS, Thư viện học liệu, Trợ lý AI Coze và Bảo tàng số giúp thế hệ trẻ tiếp cận tri thức chủ quyền biển đảo một cách khoa học, hiện đại.'
  },
  'exh-502': {
    displayFormatId: 'khung-tu-lieu',
    displayFormatLabel: 'Khung tư liệu Giáo dục Học đường',
    thematicStoryTitle: 'Câu chuyện: Đưa bản đồ và tư liệu lưu trữ quốc gia vào từng lớp học THPT',
    thematicStoryNarrative:
      'Các buổi triển lãm số tại trường học kết nối trực tiếp kiến thức Lịch sử, Địa lý, Giáo dục Kinh tế và Pháp luật với những bằng chứng chủ quyền xác thực.'
  },
  'exh-503': {
    displayFormatId: 'anh-lon',
    displayFormatLabel: 'Ảnh lớn Thanh niên Tình nguyện',
    thematicStoryTitle: 'Câu chuyện: Chiến dịch "Hãy làm sạch biển" và Trường học Xanh',
    thematicStoryNarrative:
      'Từ những ngày Chủ nhật xanh thu gom rác ven biển đến phong trào mang bình nước cá nhân tại lớp học, tuổi trẻ cả nước đang chung tay giữ màu xanh đại dương.'
  },
  'exh-504': {
    displayFormatId: 'cau-chuyen-chu-de',
    displayFormatLabel: 'Câu chuyện theo chủ đề Tuổi trẻ',
    thematicStoryTitle: 'Câu chuyện: Những cánh thư từ bàn học THPT vượt sóng ra Trường Sa, DK1',
    thematicStoryNarrative:
      'Hàng vạn lá thư tay và hạt giống rau xanh của học sinh cả nước theo tàu Hải quân ra đảo mỗi mùa xuân là sợi dây tình cảm bền chặt giữa hậu phương và tiền tuyến.'
  }
}

/**
 * Toàn bộ các hiện vật / hồ sơ tư liệu trưng bày kèm thông tin Phòng triển lãm & Hình thức trưng bày
 */
export const ALL_EXHIBITION_ITEMS = EXHIBITION_HALLS.flatMap((hall) =>
  hall.items.map((item) => {
    const mapped = ITEM_FORMAT_AND_STORY_MAP[item.id] || {
      displayFormatId: item.isHistoricalDocumentRecord
        ? 'tai-lieu-luu-tru'
        : 'khung-tu-lieu',
      displayFormatLabel: item.isHistoricalDocumentRecord
        ? 'Tài liệu lưu trữ'
        : 'Khung tư liệu',
      thematicStoryTitle: `Câu chuyện chuyên đề: ${item.title}`,
      thematicStoryNarrative: item.summary
    }
    return {
      ...item,
      hallCode: hall.code,
      hallTitle: hall.title,
      displayFormatId: mapped.displayFormatId,
      displayFormatLabel: mapped.displayFormatLabel,
      thematicStoryTitle: mapped.thematicStoryTitle,
      thematicStoryNarrative: mapped.thematicStoryNarrative,
      authenticityBadge: item.isHistoricalDocumentRecord
        ? 'Hồ sơ Tư liệu Lịch sử – Pháp lý gốc (Trích dẫn lưu trữ quốc gia • Đồ họa mô phỏng trực quan)'
        : 'Đồ họa Minh họa Giáo dục THPT (Tổng hợp từ nguồn khoa học & hành chính chính thống)'
    }
  })
)

/**
 * Các nội dung tiêu điểm nổi bật (Featured Exhibition Items)
 */
export const FEATURED_EXHIBITION_ITEMS = ALL_EXHIBITION_ITEMS.filter(
  (item) => item.isFeatured
)

/**
 * Các Bộ sưu tập Tư liệu chuyên đề (Curated Collections)
 */
export const EXHIBITION_COLLECTIONS = [
  {
    id: 'all',
    title: 'Tất cả Bộ sưu tập (20 Hồ sơ)',
    shortLabel: 'Tất cả bộ sưu tập',
    desc: 'Toàn bộ 20 hồ sơ tư liệu và đồ họa giáo dục thuộc 5 phòng triển lãm của Bảo tàng số Biển Đảo.'
  },
  {
    id: 'col-su-lieu-co',
    title: 'Bộ sưu tập Thư tịch cổ & Đội Hoàng Sa – Bắc Hải',
    shortLabel: 'Thư tịch & Đội Hoàng Sa',
    desc: 'Các bộ địa chí cổ thế kỷ XVII–XVIII và văn bản chỉ dụ về hoạt động của đội Hoàng Sa, đội Bắc Hải.'
  },
  {
    id: 'col-chau-ban-nguyen',
    title: 'Bộ sưu tập Di sản Châu bản & Bản đồ Chủ quyền',
    shortLabel: 'Châu bản & Bản đồ cổ',
    desc: 'Hồ sơ Di sản tư liệu UNESCO Châu bản triều Nguyễn, Đại Nam nhất thống toàn đồ và văn bản hành chính thế kỷ XIX–XX.'
  },
  {
    id: 'col-cot-moc-hai-dang',
    title: 'Bộ sưu tập Địa lý, Cột mốc & Hải đăng Biển Đông',
    shortLabel: 'Cột mốc & Hải đăng',
    desc: 'Không gian địa lý Hoàng Sa – Trường Sa, hệ thống cột mốc chủ quyền và các ngọn hải đăng quốc tế.'
  },
  {
    id: 'col-nguoi-giu-bien',
    title: 'Bộ sưu tập Người Giữ Biển & Nhà giàn DK1',
    shortLabel: 'Người Giữ Biển & DK1',
    desc: 'Hình ảnh chiến sĩ Hải quân, Nhà giàn DK1, lực lượng thực thi pháp luật, y tế – giáo dục đảo xa và ngư dân bám biển.'
  },
  {
    id: 'col-sinh-thai-bien',
    title: 'Bộ sưu tập Đa dạng Sinh học & Bảo tồn Đại dương',
    shortLabel: 'Sinh thái & Bảo tồn',
    desc: 'Hệ sinh thái rạn san hô, rừng ngập mặn, rùa biển Côn Đảo và hành trình giảm thiểu rác thải nhựa đại dương.'
  },
  {
    id: 'col-tuoi-tre-thpt',
    title: 'Bộ sưu tập Sáng kiến & Hành động Tuổi trẻ THPT',
    shortLabel: 'Tuổi trẻ THPT',
    desc: 'Các sáng kiến nghiên cứu khoa học ứng dụng AI, triển lãm số học đường và phong trào tình nguyện hướng về biển đảo.'
  }
]
