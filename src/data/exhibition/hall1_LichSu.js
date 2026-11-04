/**
 * KHÔNG GIAN TRƯNG BÀY 01: DẤU ẤN LỊCH SỬ BIỂN ĐẢO
 * Gồm các hồ sơ tư liệu về Bản đồ cổ, Châu bản triều Nguyễn, Đội Hoàng Sa - Bắc Hải
 * và quá trình xác lập, thực thi chủ quyền của Nhà nước Việt Nam.
 */

export const EXHIBITION_HALL_1 = {
  id: 'hall-1',
  code: 'Phòng triển lãm 01',
  title: 'Dấu ấn lịch sử',
  subtitle:
    'Quá trình xác lập, thực thi chủ quyền của Việt Nam từ thời kỳ trước thế kỷ XVII, đội Hoàng Sa – Bắc Hải đến triều Nguyễn và hiện đại',
  shortDesc:
    'Trưng bày hệ thống hồ sơ tư liệu thành văn, bản đồ cổ Việt Nam và phương Tây cùng các văn bản hành chính nhà nước từ thế kỷ XVII đến thế kỷ XX khẳng định chủ quyền liên tục của Việt Nam đối với Hoàng Sa và Trường Sa.',
  heroImage: '/assets/exhibition/hall-lich-su.svg',
  curatorNote:
    'Các hồ sơ trong không gian này trích dẫn từ thư tịch chính sử, Châu bản triều Nguyễn (Di sản tư liệu thế giới khu vực châu Á - Thái Bình Dương của UNESCO) và các văn bản lưu trữ quốc gia. Phần hình ảnh sử dụng đồ họa mô phỏng hồ sơ lưu trữ phục vụ trực quan hóa giáo dục THPT.',
  items: [
    {
      id: 'exh-101',
      code: 'HS-LS-01',
      hallId: 'hall-1',
      collectionId: 'col-su-lieu-co',
      isFeatured: true,
      title:
        'Hồ sơ Bản đồ & Thư tịch: "Toản tập Thiên Nam tứ chí lộ đồ thư" (1686) và "Phủ biên tạp lục" (1776)',
      period: 'Thế kỷ XVII – Thế kỷ XVIII (1686 – 1776)',
      authorOrProvider:
        'Danh nhân Đỗ Bá (1686) & Nhà bác học Lê Quý Đôn (1776) • Lưu trữ tại Viện Nghiên cứu Hán Nôm',
      mediaType: 'Hồ sơ Thư tịch & Bản đồ cổ (Đồ họa mô phỏng hồ sơ lưu trữ)',
      isHistoricalDocumentRecord: true,
      image: '/assets/exhibition/hall-lich-su.svg',
      caption:
        'Đồ họa mô phỏng hồ sơ thư tịch cổ ghi chép về Bãi Cát Vàng (Hoàng Sa, Trường Sa) và hải trình từ Cù lao Ré (Lý Sơn) của đội Hoàng Sa.',
      summary:
        'Hai bộ thư tịch địa chí tiêu biểu nhất thế kỷ XVII–XVIII ghi chép chi tiết về vị trí địa lý của Bãi Cát Vàng (Đại Trường Sa) và quy chế tổ chức đội Hoàng Sa, đội Bắc Hải của chính quyền chúa Nguyễn.',
      detailedDescription: [
        'Trong "Toản tập Thiên Nam tứ chí lộ đồ thư" (soạn năm 1686), danh nhân Đỗ Bá Công Đạo đã vẽ bản đồ vùng biển phủ Quảng Nghĩa có địa danh "Bãi Cát Vàng" kèm lời chú giải rõ: giữa biển có một dải cát dài gọi là Bãi Cát Vàng, hằng năm vào tháng cuối mùa đông chúa Nguyễn đưa 18 chiếc thuyền ra đó lấy hóa vật.',
        'Đến năm 1776, trong bộ "Phủ biên tạp lục" (Quyển 2), nhà bác học Lê Quý Đôn tiếp tục ghi chép cụ thể về số lượng 70 suất đinh vùng An Vĩnh (Quảng Ngãi) của đội Hoàng Sa đi thuyền ra đảo từ tháng 2 đến tháng 8 âm lịch, đồng thời ghi rõ việc chúa Nguyễn lập thêm đội Bắc Hải (do đội Hoàng Sa kiêm quản) hoạt động ở khu vực Trường Sa, Côn Đảo.'
      ],
      educationalValue:
        'Chứng minh ngay từ thế kỷ XVII–XVIII, việc khai thác và quản lý Hoàng Sa, Trường Sa không phải là hoạt động tự phát của ngư dân mà được tổ chức chặt chẽ dưới danh nghĩa Nhà nước.',
      sourceName:
        'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018) & Viện Nghiên cứu Hán Nôm',
      sourceUrl: 'https://hannom.org.vn/'
    },
    {
      id: 'exh-102',
      code: 'HS-LS-02',
      hallId: 'hall-1',
      collectionId: 'col-chau-ban-nguyen',
      isFeatured: true,
      title:
        'Châu bản triều Nguyễn về việc cử Thủy quân ra Hoàng Sa cắm cột mốc, dựng miếu và đo vẽ bản đồ (1816 – 1838)',
      period: 'Triều đại nhà Nguyễn (Gia Long – Minh Mạng – Thiệu Trị)',
      authorOrProvider:
        'Nội các triều Nguyễn • Bảo quản tại Trung tâm Lưu trữ Quốc gia I (Cục Văn thư và Lưu trữ nhà nước)',
      mediaType: 'Hồ sơ Di sản Tư liệu UNESCO (Đồ họa mô phỏng hồ sơ lưu trữ)',
      isHistoricalDocumentRecord: true,
      image: '/assets/library/topic-lich-su.svg',
      caption:
        'Đồ họa mô phỏng Châu bản triều Nguyễn với dấu ấn và bút phê bằng mực son (châu phê) của Hoàng đế nhà Nguyễn về công vụ Hoàng Sa.',
      summary:
        'Khối tài liệu hành chính gốc duy nhất tại Việt Nam còn lưu giữ trực tiếp bút phê bằng mực son của các vua triều Nguyễn chỉ đạo việc cử Thủy quân và đội Hoàng Sa ra thực thi chủ quyền hàng năm.',
      detailedDescription: [
        'Châu bản triều Nguyễn gồm các bản tấu của Bộ Công, Bộ Hộ và bản phúc trình của các quan đầu tỉnh Quảng Ngãi được đệ trình lên nhà vua phê duyệt về việc chuẩn bị thuyền biển, cử suất đội Thủy quân (như Phạm Văn Nguyên năm 1835, Phạm Hữu Nhật năm 1836) ra Hoàng Sa.',
        'Nội dung các châu bản phản ánh đầy đủ chu trình quản lý nhà nước: tuyển chọn thủy thủ, cấp phát lương thực, đo đạc thủy trình, vẽ bản đồ từng đảo, dựng miếu thờ, trồng cây xanh trên đảo để tàu thuyền nhận biết, dựng cột mốc gỗ khắc niên hiệu Minh Mạng và thưởng phạt phân minh cho binh đinh sau khi hoàn thành nhiệm vụ trở về, thậm chí ban thưởng cho việc cứu nạn tàu buôn nước ngoài gặp bão tại Hoàng Sa.'
      ],
      educationalValue:
        'Tháng 5/2014, UNESCO đã công nhận Châu bản triều Nguyễn là Di sản tư liệu thuộc Chương trình Ký ức thế giới khu vực châu Á - Thái Bình Dương, khẳng định tính xác thực độc bản cấp quốc tế của bộ bằng chứng chủ quyền Việt Nam.',
      sourceName:
        'Trung tâm Lưu trữ Quốc gia I – Cục Văn thư và Lưu trữ nhà nước (Bộ Nội vụ)',
      sourceUrl: 'https://archives.org.vn/'
    },
    {
      id: 'exh-103',
      code: 'HS-LS-03',
      hallId: 'hall-1',
      collectionId: 'col-su-lieu-co',
      isFeatured: false,
      title:
        'Hồ sơ Hoạt động của Đội Hoàng Sa & Đội Bắc Hải cùng Tờ sai thời Tây Sơn (1786)',
      period: 'Thế kỷ XVII – Cuối thế kỷ XVIII',
      authorOrProvider:
        'Nhà thờ tộc họ Võ, họ Phạm tại đảo Lý Sơn (Quảng Ngãi) & Bảo tàng Lịch sử Quốc gia',
      mediaType: 'Hồ sơ Văn bản Hành chính cổ (Đồ họa minh họa giáo dục)',
      isHistoricalDocumentRecord: true,
      image: '/assets/ecosystem/dong-thoi-gian-lich-su.svg',
      caption:
        'Đồ họa giáo dục tái hiện tiến trình hoạt động liên tục của đội Hoàng Sa và đội Bắc Hải qua thời kỳ Chúa Nguyễn và Tây Sơn.',
      summary:
        'Tư liệu chứng minh sự tiếp nối liên tục không gián đoạn trong quản lý nhà nước đối với Hoàng Sa và Trường Sa qua các triều đại phong kiến Việt Nam.',
      detailedDescription: [
        'Tờ chỉ dụ ngày 14 tháng 2 năm Thái Đức thứ 9 (1786) của chính quyền Tây Sơn sai Hội Đức hầu thống suất đội Hoàng Sa đi 4 chiếc thuyền câu vượt biển ra các cù lao ngoài biển thu lượm hóa vật về nộp theo lệ.',
        'Gắn liền với lịch sử đội Hoàng Sa là "Lễ khao lề thế lính Hoàng Sa" được các tộc họ trên đảo Lý Sơn (tỉnh Quảng Ngãi) gìn giữ suốt hàng trăm năm qua để tri ân những hùng binh đã vâng mệnh triều đình vượt sóng ra canh giữ biển đảo Tổ quốc.'
      ],
      educationalValue:
        'Giúp học sinh THPT hiểu rõ sự kết hợp giữa bằng chứng pháp lý hành chính (tờ sai, chỉ dụ của nhà nước) và di sản văn hóa phi vật thể sống động trong cộng đồng cư dân biển đảo.',
      sourceName:
        'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & Sở Văn hóa, Thể thao và Du lịch tỉnh Quảng Ngãi',
      sourceUrl: 'https://www.mofa.gov.vn/'
    },
    {
      id: 'exh-104',
      code: 'HS-LS-04',
      hallId: 'hall-1',
      collectionId: 'col-chau-ban-nguyen',
      isFeatured: false,
      title:
        'Hồ sơ Bản đồ "Đại Nam nhất thống toàn đồ" (1838) và Quản lý Hành chính giai đoạn thế kỷ XIX – XX',
      period: 'Năm 1838 – Năm 1951',
      authorOrProvider:
        'Triều đình nhà Nguyễn & Cơ quan Lưu trữ Quốc gia / Bộ Ngoại giao Việt Nam',
      mediaType: 'Hồ sơ Bản đồ & Pháp lý Hành chính (Đồ họa mô phỏng hồ sơ lưu trữ)',
      isHistoricalDocumentRecord: true,
      image: '/assets/library/topic-phap-luat.svg',
      caption:
        'Đồ họa mô phỏng hệ thống chứng cứ bản đồ học và văn bản hành chính xác lập chủ quyền từ Đại Nam nhất thống toàn đồ (1838) đến Hội nghị San Francisco (1951).',
      summary:
        'Tổng hợp chuỗi chứng cứ pháp lý liên tục từ bản đồ "Đại Nam nhất thống toàn đồ" (1838), bản đồ "An Nam đại quốc họa đồ" (1838) đến Nghị định sáp nhập Trường Sa vào tỉnh Bà Rịa (1933), Nghị định lập đơn vị hành chính Hoàng Sa thuộc tỉnh Thừa Thiên (1938) và Tuyên bố tại Hội nghị San Francisco (1951).',
      detailedDescription: [
        'Trên bản đồ "Đại Nam nhất thống toàn đồ" (vẽ khoảng năm 1838 dưới triều Minh Mạng), cả hai quần đảo được vẽ trong dải biển Việt Nam với tên gọi "Hoàng Sa" và "Vạn Lý Trường Sa". Cùng năm 1838, Giám mục Jean-Louis Taberd xuất bản "An Nam đại quốc họa đồ" ghi rõ "Paracel seu Cát Vàng".',
        'Trong giai đoạn Pháp thuộc, chính quyền đại diện nhà nước Việt Nam tiếp tục lập trạm khí tượng, trạm vô tuyến điện, dựng bia chủ quyền, ban hành Nghị định ngày 21/12/1933 (sáp nhập Trường Sa vào tỉnh Bà Rịa) và Nghị định số 156-SC ngày 15/6/1938 (lập đơn vị hành chính Hoàng Sa thuộc tỉnh Thừa Thiên). Ngày 07/9/1951, tại Hội nghị San Francisco trước 51 quốc gia, phái đoàn Việt Nam tuyên bố khẳng định chủ quyền đối với cả hai quần đảo mà không gặp bất kỳ sự phản đối nào.'
      ],
      educationalValue:
        'Cung cấp bức tranh toàn diện về tính liên tục lịch sử và hiệu lực pháp lý quốc tế của chủ quyền Việt Nam qua mọi giai đoạn lịch sử.',
      sourceName:
        'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & Sách giáo khoa Lịch sử 11',
      sourceUrl: 'https://www.mofa.gov.vn/'
    }
  ]
}
