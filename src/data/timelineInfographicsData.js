/**
 * DỮ LIỆU SƠ ĐỒ, INFOGRAPHIC LỊCH SỬ, KHUNG TRÍCH DẪN CHÂU BẢN, BẢN ĐỒ LỊCH SỬ
 * VÀ BỐI CẢNH SỰ KIỆN CHO PHÂN HỆ DÒNG THỜI GIAN LỊCH SỬ (timelineInfographicsData.js)
 *
 * Nguyên tắc học thuật:
 * - Không tự bịa mốc thời gian, không tự tạo tư liệu lịch sử.
 * - Phân biệt rõ Tài liệu gốc (Primary Sources), Tài liệu nghiên cứu (Secondary Sources)
 *   và Đồ họa minh họa giáo dục.
 */

export const ERA_BANNER_IMAGES = {
  'era-1': '/assets/timeline/era-01-truoc-tk17.svg',
  'era-2': '/assets/timeline/era-02-tk17-18.svg',
  'era-3': '/assets/timeline/era-03-thoi-nguyen.svg',
  'era-4': '/assets/timeline/era-04-phap-thuoc.svg',
  'era-5': '/assets/timeline/era-05-1945-1975.svg',
  'era-6': '/assets/timeline/era-06-1975-nay.svg'
}

// 1. SƠ ĐỒ PHÂN CHIA 6 GIAI ĐOẠN LỊCH SỬ & TÍNH LIÊN TỤC CỦA CHỦ QUYỀN
export const ERA_DIVISION_DIAGRAM = [
  {
    eraCode: 'Giai đoạn 01',
    period: 'Trước thế kỷ XVII',
    stateActor: 'Cư dân Việt cổ & Nhà nước phong kiến Đại Việt (Lê sơ)',
    coreAction: 'Khai phá không gian biển đảo ven bờ, lập địa chí và quốc đồ (Dư địa chí 1435, Hồng Đức bản đồ 1490).',
    keyDocuments: 'Dư địa chí, Hồng Đức bản đồ, Hải đồ hàng hải thế kỷ XVI (Pracel – Costa de Pracel).'
  },
  {
    eraCode: 'Giai đoạn 02',
    period: 'Thế kỷ XVII – XVIII',
    stateActor: 'Chính quyền Chúa Nguyễn (Đàng Trong) & Vương triều Tây Sơn',
    coreAction: 'Thành lập và duy trì hoạt động thường niên của Đội Hoàng Sa (70 suất) kiêm quản Đội Bắc Hải.',
    keyDocuments: 'Toản tập Thiên Nam tứ chí lộ đồ thư (1686), Phủ biên tạp lục (1776), Sắc chỉ triều Tây Sơn (1786).'
  },
  {
    eraCode: 'Giai đoạn 03',
    period: 'Thời Nguyễn (1802–1884)',
    stateActor: 'Vương triều Nguyễn (Gia Long, Minh Mạng, Thiệu Trị, Tự Đức)',
    coreAction: 'Cử Thủy quân nhà nước ra khảo sát, đo đạc thủy trình, vẽ bản đồ, dựng miếu, trồng cây, cắm mốc chủ quyền.',
    keyDocuments: 'Châu bản triều Nguyễn (Di sản tư liệu thế giới UNESCO), Đại Nam thực lục, Đại Nam nhất thống toàn đồ (1838).'
  },
  {
    eraCode: 'Giai đoạn 04',
    period: 'Thời Pháp thuộc (1884–1945)',
    stateActor: 'Chính quyền Pháp nhân danh Nhà nước Việt Nam (An Nam)',
    coreAction: 'Khảo sát khoa học, xây dựng hải đăng, trạm khí tượng (48860, 48819), dựng bia chủ quyền và lập đơn vị hành chính.',
    keyDocuments: 'Nghị định 4762-CP (21/12/1933), Dụ số 10 của vua Bảo Đại (30/3/1938), Nghị định 156-SC (15/6/1938).'
  },
  {
    eraCode: 'Giai đoạn 05',
    period: 'Giai đoạn 1945–1975',
    stateActor: 'Nhà nước Việt Nam qua các thời kỳ quản lý hành chính & tiếp quản',
    coreAction: 'Tuyên bố chủ quyền tại Hội nghị San Francisco (1951), duy trì đơn vị hành chính cấp xã/tỉnh và Hải quân nhân dân Việt Nam tiếp quản Trường Sa (4/1975).',
    keyDocuments: 'Biên bản Hội nghị Hòa bình San Francisco (07/9/1951), Sắc lệnh 143-NV (1956), Sắc lệnh 174-NV (1961).'
  },
  {
    eraCode: 'Giai đoạn 06',
    period: 'Từ năm 1975 đến nay',
    stateActor: 'Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    coreAction: 'Tổ chức huyện đảo Hoàng Sa (Đà Nẵng) và huyện đảo Trường Sa (Khánh Hòa), xây dựng Nhà giàn DK1, phê chuẩn UNCLOS 1982 và ban hành Luật Biển Việt Nam 2012.',
    keyDocuments: 'Nghị định 194-HĐBT (1982), Nghị quyết Quốc hội (1994), Luật Biển Việt Nam năm 2012.'
  }
]

// 2. INFOGRAPHIC CHUYÊN SÂU VỀ HOẠT ĐỘNG CỦA ĐỘI HOÀNG SA VÀ ĐỘI BẮC HẢI
export const HOANG_SA_BAC_HAI_INFOGRAPHIC = {
  title: 'Infographic Lịch sử: Cơ chế Tổ chức và Hải trình Thực thi Chủ quyền của Đội Hoàng Sa & Đội Bắc Hải (Thế kỷ XVII – XIX)',
  subtitle: 'Tổng hợp từ sử liệu gốc: "Phủ biên tạp lục" (1776) của Lê Quý Đôn và "Đại Nam thực lục" của Quốc sử quán triều Nguyễn',
  pillars: [
    {
      step: '01',
      title: 'Tuyển chọn & Biên chế Nhà nước',
      fact: 'Chính quyền chúa Nguyễn lập Đội Hoàng Sa gồm 70 suất đinh, tuyển chọn những trai tráng khỏe mạnh, giỏi bơi lội và thông thuộc luồng lạch biển cả tại xã An Vĩnh và xã An Hải (vùng cửa biển Sa Kỳ và đảo Cù lao Ré / Lý Sơn, Quảng Ngãi). Dân đinh vào đội được miễn thuế thân (thuế đinh), miễn sưu dịch và được cấp 6 tháng lương thực.',
      sourceType: 'Dữ kiện sử liệu gốc (Phủ biên tạp lục, 1776)'
    },
    {
      step: '02',
      title: 'Lệnh bài Sai phái & Thời gian Xuất phát',
      fact: 'Hằng năm, cứ vào tháng 2 hoặc tháng 3 âm lịch (khi gió mùa Đông Bắc giảm dần và biển êm), Đội Hoàng Sa nhận "Giấy sai" (Lệnh bài chính thức của Nhà nước), làm lễ Khao lề thế lính tại đảo Lý Sơn rồi đi 5 chiếc thuyền câu nhỏ vượt biển khoảng 3 ngày 3 đêm thì đến quần đảo Hoàng Sa (Bãi Cát Vàng).',
      sourceType: 'Dữ kiện sử liệu gốc & Di sản văn hóa phi vật thể quốc gia'
    },
    {
      step: '03',
      title: 'Đội Bắc Hải kiêm quản vùng biển Trường Sa',
      fact: 'Bên cạnh Đội Hoàng Sa, chúa Nguyễn còn lập Đội Bắc Hải (tuyển người ở thôn Tứ Chính hoặc xã Cảnh Dương thuộc phủ Bình Thuận), giao cho Cai đội Hoàng Sa kiêm quản. Đội Bắc Hải đi thuyền ra khu vực Bắc Hải, Côn Lôn, Hà Tiên và các đảo thuộc quần đảo Trường Sa (Vạn Lý Trường Sa) để tuần tiễu và thu lượm hóa vật.',
      sourceType: 'Dữ kiện sử liệu gốc (Phủ biên tạp lục & Đại Nam thực lục)'
    },
    {
      step: '04',
      title: 'Thực thi Nhiệm vụ & Trở về Kinh đô (Tháng 8 Âm lịch)',
      fact: 'Suốt 6 tháng trên các đảo (từ tháng 3 đến tháng 8 âm lịch), các đội thực hiện nhiệm vụ nhà nước: thu lượm hàng hóa từ tàu đắm (đồng, thiếc, súng ống, tiền cổ, đồ sứ) và hải sản quý (đồi mồi, hải sâm, ốc hoa); đến thời Nguyễn kết hợp cùng Thủy quân đo đạc thủy trình, vẽ bản đồ, trồng cây, dựng miếu và cắm mốc chủ quyền. Tháng 8 âm lịch, đội về thẳng cửa Eo (Thuận An – Phú Xuân) nộp hiện vật, cân nghiệm định hạng và nhận bằng sắc ban thưởng.',
      sourceType: 'Dữ kiện sử liệu gốc (Châu bản triều Nguyễn & Đại Nam thực lục)'
    }
  ]
}

// 3. SƠ ĐỒ MỐI LIÊN HỆ GIỮA SỰ KIỆN LỊCH SỬ – TƯ LIỆU GỐC – GIÁ TRỊ PHÁP LÝ
export const EVENT_TO_LEGAL_VALUE_FLOW = [
  {
    nodeCode: 'LỚP 1: HÀNH VI NHÀ NƯỚC THỰC TẾ (SỰ KIỆN)',
    title: 'Thực thi quyền lực với tư cách Nhà nước (À titre de souverain)',
    items: [
      'Thành lập đội dân binh chuyên trách (Đội Hoàng Sa, Đội Bắc Hải) hoạt động định kỳ hằng năm theo lệnh nhà nước.',
      'Hoàng đế trực tiếp phê duyệt cử Thủy quân đo đạc thủy trình, dựng bia, cắm mốc, lập miếu thờ và cứu hộ tàu nước ngoài gặp nạn.',
      'Ban hành nghị định lập đơn vị hành chính cấp xã/quận/huyện, xây dựng hải đăng và trạm khí tượng quốc tế.'
    ]
  },
  {
    nodeCode: 'LỚP 2: HỆ THỐNG TƯ LIỆU GỐC LƯU TRỮ (CHỨNG CỨ)',
    title: 'Văn bản hành chính gốc, Chính sử và Bản đồ quốc gia – quốc tế',
    items: [
      'Tài liệu gốc hành chính: Châu bản triều Nguyễn (có bút phê mực son của Hoàng đế), các Sắc chỉ, Dụ, Nghị định hành chính.',
      'Tài liệu gốc thư tịch & bản đồ: Mộc bản Đại Nam thực lục, Thiên Nam tứ chí lộ đồ thư (1686), Đại Nam nhất thống toàn đồ (1838).',
      'Tư liệu khách quan quốc tế: Hải đồ phương Tây (thế kỷ XVI–XIX), An Nam đại quốc họa đồ (1838), Biên bản Hội nghị San Francisco (1951).'
    ]
  },
  {
    nodeCode: 'LỚP 3: GIÁ TRỊ PHÁP LÝ QUỐC TẾ (NHẬN ĐỊNH HỌC THUẬT)',
    title: 'Đáp ứng trọn vẹn nguyên tắc "Chiếm hữu thật sự" (Effective Occupation)',
    items: [
      'Xác lập chủ quyền đầu tiên khi Hoàng Sa và Trường Sa còn là lãnh thổ vô chủ (Terra nullius).',
      'Quá trình thực thi chủ quyền diễn ra hòa bình, công khai, liên tục qua nhiều thế kỷ và không bị quốc gia nào phản đối hợp pháp.',
      'Kết hợp đồng bộ với các quyền và nghĩa vụ của quốc gia ven biển theo Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982).'
    ]
  }
]

// 4. SƠ ĐỒ PHÂN LOẠI TƯ LIỆU LỊCH SỬ QUA TỪNG THỜI KỲ (TÀI LIỆU GỐC VS TÀI LIỆU NGHIÊN CỨU)
export const HISTORICAL_SOURCES_CLASSIFICATION = [
  {
    typeBadge: 'LOẠI 1: TÀI LIỆU GỐC (PRIMARY SOURCES)',
    color: '#D97706',
    definition:
      'Là các văn bản hành chính nhà nước, sắc chỉ, châu bản, mộc bản chính sử, bản đồ cổ, công báo, nghị định và bia chủ quyền được tạo lập ngay trong thời kỳ diễn ra sự kiện.',
    examples: [
      'Châu bản triều Nguyễn (Gia Long, Minh Mạng, Thiệu Trị, Tự Đức, Bảo Đại) có ngự phê mực son – Di sản tư liệu thế giới UNESCO (2014).',
      'Mộc bản triều Nguyễn (Đại Nam thực lục, Đại Nam nhất thống chí) – Di sản tư liệu thế giới UNESCO (2009).',
      'Sắc chỉ năm Thái Đức thứ 9 (1786) của triều Tây Sơn; Nghị định 4762-CP (1933); Nghị định 156-SC (1938); Luật Biển Việt Nam (2012).'
    ]
  },
  {
    typeBadge: 'LOẠI 2: TÀI LIỆU NGHIÊN CỨU & GIÁO DỤC (SECONDARY SOURCES)',
    color: '#0284C7',
    definition:
      'Là các công trình sử học, sách chuyên khảo, sách giáo khoa và bài phân tích pháp lý tổng hợp, đối chiếu và giải thích các tài liệu gốc.',
    examples: [
      'Sách giáo khoa Lịch sử 11, Địa lý 12, Giáo dục Kinh tế & Pháp luật (Chương trình GDPT 2018 – Bộ Giáo dục và Đào tạo).',
      'Các công trình công bố của Ủy ban Biên giới Quốc gia – Bộ Ngoại giao và Viện Sử học Việt Nam.',
      'Lưu ý học thuật: Khi một chi tiết cụ thể trong lịch sử chưa có văn bản gốc ghi chép tuyệt đối từng ngày tháng, các nhà sử học luôn ghi rõ khoảng niên đại (ví dụ: "Khoảng năm 1686" hoặc "Nửa đầu thế kỷ XVII") và ghi chú cần tiếp tục sưu tầm tư liệu.'
    ]
  }
]

// 5. KHUNG TRÍCH DẪN CHÂU BẢN & BẢN ĐỒ LỊCH SỬ CÓ NGUỒN XÁC THỰC
export const AUTHENTIC_ARCHIVES_SHOWCASE = [
  {
    id: 'arch-chau-ban-1835',
    category: 'Châu bản triều Nguyễn (Tài liệu gốc)',
    year: 'Năm Minh Mạng thứ 16 (1835)',
    title: 'Châu bản về việc Giám thành Đội trưởng Phạm Văn Nguyên đi công vụ Hoàng Sa dựng miếu, đặt bia đá',
    quote:
      '"Bọn Giám thành Đội trưởng Phạm Văn Nguyên đi công vụ Hoàng Sa trở về có đem bản đồ dâng trình... Truyền giao cho Bộ Công xem xét và thưởng cho cai đội, thủy quân cùng phu thuyền đi chuyến ấy theo thứ bậc."',
    repository: 'Trung tâm Lưu trữ Quốc gia I (Cục Văn thư và Lưu trữ nhà nước) – Tập Châu bản Minh Mạng.',
    verificationNote: 'Tài liệu hành chính gốc có bút phê mực son của vua Minh Mạng.'
  },
  {
    id: 'arch-chau-ban-1836',
    category: 'Châu bản triều Nguyễn (Tài liệu gốc)',
    year: 'Ngày 19 tháng 12 năm Minh Mạng thứ 16 (Đầu năm 1836)',
    title: 'Bản tấu của Bộ Công được vua Minh Mạng châu phê cử Thủy quân Chánh đội trưởng Phạm Hữu Nhật ra Hoàng Sa đo đạc và cắm mốc',
    quote:
      '"Phàm đi đến xứ sở nào, tức thì chiếu theo chỗ đất đó mà cắm mốc đánh dấu. Mỗi thuyền mang theo 10 tấm bài gỗ, dài 5 thước, rộng 5 tấc, dày 1 tấc, mặt bài khắc các chữ: Năm Minh Mạng thứ 17, năm Bính Thân, Thủy quân Chánh đội trưởng suất đội Phạm Hữu Nhật vâng mệnh đi Hoàng Sa trông nom đo đạc đến đây lưu dấu để ghi nhớ."',
    repository: 'Trung tâm Lưu trữ Quốc gia I – Châu bản triều Nguyễn (Tập 54, tờ 113).',
    verificationNote: 'Di sản tư liệu Chương trình Ký ức Thế giới khu vực Châu Á - Thái Bình Dương của UNESCO (2014).'
  },
  {
    id: 'arch-map-1686',
    category: 'Bản đồ lịch sử Việt Nam (Tư liệu gốc)',
    year: 'Khoảng năm 1686 (Thế kỷ XVII)',
    title: 'Toản tập Thiên Nam tứ chí lộ đồ thư – Đỗ Bá (Công Đạo)',
    quote:
      '"Giữa biển có một bãi cát dài, gọi là Bãi Cát Vàng, dài độ 400 dặm, rộng 20 dặm, đứng dựng giữa biển, từ cửa biển Đại Chiêm đến cửa biển Sa Vinh... Họ Nguyễn mỗi năm vào tháng cuối mùa đông đưa 18 chiếc thuyền đến đó lấy hóa vật."',
    repository: 'Lưu trữ tại Viện Nghiên cứu Hán Nôm (Hà Nội) và Thư viện Học viện Viễn Đông Bác cổ (EFEO).',
    verificationNote: 'Tập bản đồ và chú giải chữ Hán Nôm cổ nhất của Việt Nam ghi chép trực tiếp về Bãi Cát Vàng (Hoàng Sa).'
  },
  {
    id: 'arch-map-1838',
    category: 'Bản đồ Quốc gia & Quốc tế (Tư liệu gốc)',
    year: 'Năm 1838',
    title: 'Đại Nam nhất thống toàn đồ & An Nam đại quốc họa đồ (Taberd)',
    quote:
      'Trên "Đại Nam nhất thống toàn đồ" (triều Minh Mạng), hai địa danh "Hoàng Sa" và "Vạn Lý Trường Sa" được vẽ nằm trong dải biển thuộc lãnh thổ Đại Nam. Cùng năm 1838, Giám mục Jean-Louis Taberd xuất bản "An Nam đại quốc họa đồ" ghi rõ bằng tiếng Latinh và chữ Quốc ngữ: "Paracel seu Cát Vàng" (Paracel tức là Cát Vàng của An Nam).',
    repository: 'Viện Sử học Việt Nam & Thư viện Quốc gia Pháp (BnF).',
    verificationNote: 'Bằng chứng bản đồ học đối chiếu song phương giữa Quốc đồ Việt Nam và Bản đồ phương Tây thế kỷ XIX.'
  }
]

// 6. BỔ SUNG TRƯỜNG "BỐI CẢNH LỊCH SỬ" & "PHÂN LOẠI TÀI LIỆU GỐC / NGHIÊN CỨU" CHO TỪNG SỰ KIỆN
export const ERA_DEFAULT_CONTEXT = {
  'era-1':
    'Bối cảnh quá trình cư dân Việt cổ hình thành cộng đồng cư trú ven biển và các vương triều độc lập Đại Việt (đặc biệt là thời Lê sơ thế kỷ XV) củng cố bộ máy hành chính, biên soạn địa chí và bản đồ cương vực quốc gia.',
  'era-2':
    'Bối cảnh thế kỷ XVII – XVIII khi chính quyền chúa Nguyễn ở Đàng Trong và sau đó là vương triều Tây Sơn đẩy mạnh khai phá vùng đất phương Nam, phát triển kinh tế hàng hải và thiết lập các đội dân binh nhà nước quản lý biển đảo.',
  'era-3':
    'Bối cảnh thế kỷ XIX sau khi vương triều Nguyễn thống nhất đất nước từ Bắc chí Nam (năm 1802), thiết lập nền hành chính tập quyền thống nhất và nâng hoạt động quản lý Hoàng Sa – Trường Sa lên cấp độ Thủy quân triều đình.',
  'era-4':
    'Bối cảnh sau Hiệp ước Patenôtre (1884), chính quyền Pháp đại diện cho Nhà nước Việt Nam về mặt đối ngoại đã áp dụng các phương thức quản lý hành chính, khoa học hải dương, khí tượng và hàng hải hiện đại tại Hoàng Sa và Trường Sa.',
  'era-5':
    'Bối cảnh sau Chiến tranh thế giới thứ hai (1945–1975), các quốc gia tái xác lập trật tự pháp lý quốc tế (như Hội nghị San Francisco 1951) và quá trình quản lý hành chính liên tục tiến tới thống nhất đất nước năm 1975.',
  'era-6':
    'Bối cảnh nước Việt Nam hoàn toàn thống nhất từ sau năm 1975, vừa củng cố hệ thống hành chính các huyện đảo và bảo vệ chủ quyền trên thực địa, vừa hội nhập và hoàn thiện khung pháp lý theo Công ước Luật Biển UNCLOS 1982.'
}
