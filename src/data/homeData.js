export const NAV_LINKS = [
  { id: 'home', label: 'Trang chủ', href: '#trang-chu', page: 'home' },
  { id: 'about', label: 'Giới thiệu dự án', href: '#gioi-thieu', page: 'home' },
  { id: 'features', label: 'Hệ sinh thái số', href: '#he-sinh-thai-so', page: 'ecosystem' },
  { id: 'audiences', label: 'Góc Học sinh & Giáo viên', href: '#doi-tuong', page: 'home' },
  { id: 'sovereignty', label: 'Cột mốc Chủ quyền', href: '#cot-moc', page: 'home' }
]

export const ECOSYSTEM_CATEGORIES = [
  { id: 'all', label: 'Tất cả 8 phân hệ' },
  { id: 'map-library', label: 'Bản đồ số & Hồ sơ bản đồ' },
  { id: 'ai-classroom', label: 'Thư viện, Trợ lý AI & Phòng học' },
  { id: 'history-exhibition', label: 'Dòng thời gian, 360° & Triển lãm' }
]

export const HERO_STATS = [
  {
    value: '3.260+ km',
    label: 'Đường bờ biển trải dài từ Bắc vào Nam',
    badge: 'Địa lý Biển Việt Nam'
  },
  {
    value: '3.000+ Đảo',
    label: 'Quần đảo Hoàng Sa, Trường Sa & đảo ven bờ',
    badge: 'Chủ quyền Thiêng liêng'
  },
  {
    value: '1.000.000 km²',
    label: 'Diện tích vùng biển thuộc chủ quyền & quyền tài phán',
    badge: 'UNCLOS 1982'
  },
  {
    value: '8 Phân hệ Số',
    label: 'Tích hợp Bản đồ GIS, AI, 360° & Học liệu chuẩn THPT',
    badge: 'Hệ sinh thái Số 4.0'
  }
]

export const PROJECT_PILLARS = [
  {
    id: 'knowledge',
    title: 'Chuẩn hóa Tri thức Lịch sử - Địa lý',
    description:
      'Hệ thống hóa kiến thức biển đảo bám sát chương trình Giáo dục phổ thông 2018 (Lịch sử, Địa lý, Giáo dục Kinh tế & Pháp luật, Giáo dục Quốc phòng & An ninh cấp THPT).',
    highlight: 'Chính xác - Khoa học - Trực quan'
  },
  {
    id: 'technology',
    title: 'Ứng dụng Công nghệ AI & Bản đồ số',
    description:
      'Kết hợp bản đồ tương tác tọa độ hải lý, không gian 360 độ, hồ sơ bản đồ cổ và Trợ lý AI thông minh giúp học sinh tra cứu tư liệu lịch sử, pháp lý quốc tế sinh động.',
    highlight: 'Trải nghiệm Học tập Tương tác'
  },
  {
    id: 'patriotism',
    title: 'Bồi đắp Tình yêu & Ý thức Chủ quyền',
    description:
      'Mỗi bài học, mỗi châu bản, mỗi cột mốc trên Hoàng Sa - Trường Sa là một nhịp cầu kết nối thế hệ trẻ hôm nay với lịch sử giữ biển hào hùng của cha ông.',
    highlight: 'Chạm tri thức - Vững chủ quyền'
  }
]

export const FEATURES_DATA = [
  {
    id: 'ban-do-so',
    code: '01',
    title: 'Bản đồ số',
    subtitle: 'Hệ thống Tọa độ GIS Hoàng Sa – Trường Sa',
    badge: 'Công nghệ GIS',
    category: 'map-library',
    accentColor: 'ocean',
    iconName: 'Map',
    image: '/assets/ecosystem/ban-do-so.svg',
    imageCaption: 'Sa bàn Bản đồ số GIS tọa độ Hoàng Sa – Trường Sa & vùng biển Việt Nam',
    routeHash: '#he-sinh-thai/ban-do-so',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Không gian bản đồ số tương tác hiển thị trực quan vùng biển đảo Việt Nam, hai quần đảo Hoàng Sa – Trường Sa, hệ thống đường cơ sở và các điểm đảo tiền tiêu.',
    highlights: [
      'Tra cứu tọa độ địa lý 20 điểm đảo, đá, cụm đảo thuộc Hoàng Sa, Trường Sa và đảo tiền tiêu',
      'Tích hợp lưới kinh vĩ độ, khoảng cách hải lý từ đất liền và các lớp dữ liệu hành chính',
      'Chế độ trình chiếu toàn màn hình sắc nét phục vụ tiết học Địa lý và Quốc phòng - An ninh'
    ],
    studentTip:
      'Quan sát vị trí tương đối giữa đất liền và hai quần đảo tiền tiêu để ghi nhớ tọa độ và khoảng cách hải lý nhanh hơn.',
    teacherTip:
      'Sử dụng chế độ toàn màn hình và các góc máy thiết lập sẵn để minh họa trực quan trên bảng tương tác lớp học.',
    samplePreview: {
      coordinate: 'Hệ tọa độ Địa lý Biển Đông (06°00′B – 23°30′B | 102°00′Đ – 118°00′Đ)',
      actionText: 'Khám phá Bản đồ số'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Bản đồ số sử dụng hệ tọa độ địa lý và thông tin hành chính từ nguồn cơ quan nhà nước có thẩm quyền đã qua kiểm chứng.',
    workspaceModules: [
      {
        title: 'Lớp dữ liệu Quần đảo Hoàng Sa (TP. Đà Nẵng)',
        desc: 'Hiển thị cụm An Vĩnh, cụm Lưỡi Liềm, đảo Hoàng Sa (Pattle), đảo Phú Lâm, đảo Linh Côn và đảo Tri Tôn.',
        status: 'Đã tích hợp tọa độ'
      },
      {
        title: 'Lớp dữ liệu Quần đảo Trường Sa (Tỉnh Khánh Hòa)',
        desc: 'Hiển thị thị trấn Trường Sa, xã Song Tử Tây, xã Sinh Tồn, đảo Nam Yết, Sơn Ca, An Bang, Tiên Nữ và cụm Nhà giàn DK1.',
        status: 'Đã tích hợp tọa độ'
      },
      {
        title: 'Bộ công cụ Đo đạc & Điều khiển Góc nhìn GIS',
        desc: 'Hỗ trợ phóng to 100%–350%, bật/tắt lưới kinh vĩ độ, đường khoảng cách hải lý và lọc theo nhóm đảo.',
        status: 'Tương tác thời gian thực'
      }
    ]
  },
  {
    id: 'thu-vien-tri-thuc',
    code: '02',
    title: 'Thư viện tri thức',
    subtitle: 'Kho Học liệu Lịch sử, Pháp lý & Địa lý Biển',
    badge: 'Học liệu Chuẩn',
    category: 'ai-classroom',
    accentColor: 'gold',
    iconName: 'BookOpen',
    image: '/assets/ecosystem/thu-vien-tri-thuc.svg',
    imageCaption: 'Hệ thống lưu trữ học liệu số phân loại theo chương trình GDPT 2018',
    routeHash: '#he-sinh-thai/thu-vien-tri-thuc',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Kho học liệu số gồm 7 chuyên đề học thuật về tự nhiên, lịch sử chủ quyền, UNCLOS 1982, Luật Biển Việt Nam 2012, kinh tế biển và bảo vệ môi trường đại dương.',
    highlights: [
      'Hệ thống 7 chuyên đề chuyên sâu bám sát chương trình Giáo dục phổ thông 2018 (Khối 10, 11, 12)',
      'Mỗi bài viết đều có tóm tắt trọng tâm, nội dung phân tích chi tiết, câu hỏi suy ngẫm và nguồn trích dẫn',
      'Hỗ trợ tìm kiếm tức thì theo từ khóa, lọc theo chuyên đề và lưu bài viết quan trọng để ôn tập'
    ],
    studentTip:
      'Lọc học liệu theo từng chuyên đề và đọc phần "Ghi nhớ trọng tâm" cuối mỗi bài để hệ thống hóa kiến thức nhanh chóng.',
    teacherTip:
      'Khai thác các câu hỏi thảo luận và nguồn văn bản pháp lý trong thư viện để xây dựng kế hoạch bài dạy.',
    samplePreview: {
      coordinate: '7 Chuyên đề Học thuật • Văn bản UNCLOS 1982 & Luật Biển Việt Nam 2012',
      actionText: 'Khám phá Thư viện'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Toàn bộ văn bản pháp lý, số liệu địa lý và trích dẫn lịch sử trong thư viện đều ghi rõ nguồn tài liệu chính thống.',
    workspaceModules: [
      {
        title: 'Chuyên đề Địa lý, Kinh tế & Môi trường Biển',
        desc: 'Tổng quan vùng biển 1 triệu km², tài nguyên sinh vật – khoáng sản và chiến lược kinh tế biển bền vững.',
        status: 'Chuẩn GDPT 2018'
      },
      {
        title: 'Chuyên đề Lịch sử & Pháp lý Chủ quyền',
        desc: 'Hệ thống hóa chứng cứ lịch sử đội Hoàng Sa – Bắc Hải, Châu bản triều Nguyễn và 5 vùng biển theo UNCLOS 1982.',
        status: 'Nguồn kiểm chứng'
      },
      {
        title: 'Chuyên đề Đời sống Đảo xa & Trách nhiệm Tuổi trẻ',
        desc: 'Khắc họa cuộc sống quân dân nơi đầu sóng và vai trò của học sinh THPT với biển đảo Tổ quốc.',
        status: 'Giáo dục công dân'
      }
    ]
  },
  {
    id: 'tro-ly-ai',
    code: '03',
    title: 'Trợ lý AI',
    subtitle: 'Trí tuệ Nhân tạo Giải đáp Kiến thức Biển Đảo 24/7',
    badge: 'Coze AI SDK',
    category: 'ai-classroom',
    accentColor: 'cyan',
    iconName: 'Sparkles',
    image: '/assets/ecosystem/tro-ly-ai.svg',
    imageCaption: 'Trung tâm đối thoại thông minh tích hợp nền tảng Coze AI Giáo dục',
    routeHash: '#he-sinh-thai/tro-ly-ai',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Trợ lý AI tích hợp trực tiếp Coze WebChat SDK với cơ chế bảo mật Backend Token, hỗ trợ giải đáp kiến thức lịch sử, địa lý, pháp lý biển đảo nhanh chóng và chuẩn xác.',
    highlights: [
      'Kết nối trực tiếp với Chatbot AI chuyên biệt về Biển Đảo Việt Nam trên nền tảng Coze',
      'Cung cấp bộ câu hỏi gợi ý theo từng môn học THPT (Lịch sử, Địa lý, Giáo dục Kinh tế & Pháp luật)',
      'Cơ chế xác thực bảo mật qua Backend API, bảo vệ tuyệt đối khóa kết nối và hoạt động ổn định trên mọi thiết bị'
    ],
    studentTip:
      'Nhấn vào các thẻ câu hỏi gợi ý hoặc khởi chạy cửa sổ hội thoại Coze AI để hỏi đáp sâu từng khái niệm pháp lý biển.',
    teacherTip:
      'Sử dụng Trợ lý AI để thiết kế nhanh câu hỏi khởi động đầu giờ hoặc giải đáp mở rộng cho học sinh ngay tại lớp.',
    samplePreview: {
      coordinate: 'Tích hợp Coze WebChat SDK 1.2.0 • Bảo mật Token qua Backend API',
      actionText: 'Khám phá Trợ lý AI'
    },
    verificationNote:
      'Lưu ý kỹ thuật: Phân hệ Trợ lý AI kết nối trực tiếp với Bot Coze đã cấu hình tri thức biển đảo, không dùng dữ liệu giả lập.',
    workspaceModules: [
      {
        title: 'Trạm Đối thoại Trực tiếp Coze AI',
        desc: 'Khởi chạy giao diện trò chuyện thông minh giúp giải đáp tức thì các câu hỏi về Hoàng Sa – Trường Sa.',
        status: 'Coze SDK Active'
      },
      {
        title: 'Ngân hàng Gợi ý Câu hỏi theo Môn học',
        desc: 'Sao chép hoặc gửi nhanh các câu hỏi trọng tâm về UNCLOS 1982, Châu bản triều Nguyễn và địa lý biển.',
        status: 'Hỗ trợ Học sinh'
      },
      {
        title: 'Cổng Bảo mật Token Server-Side',
        desc: 'Quản lý phiên kết nối an toàn qua biến môi trường máy chủ, không lộ khóa bí mật trên trình duyệt.',
        status: 'Bảo mật Chuẩn'
      }
    ]
  },
  {
    id: 'phong-hoc-tuong-tac',
    code: '04',
    title: 'Phòng học tương tác',
    subtitle: 'Không gian Luyện tập 8 Chuyên đề & Trò chơi Học tập',
    badge: '80+ Câu hỏi',
    category: 'ai-classroom',
    accentColor: 'navy',
    iconName: 'GraduationCap',
    image: '/assets/ecosystem/phong-hoc-tuong-tac.svg',
    imageCaption: 'Không gian lớp học số với 5 phương thức tương tác và thử thách 3 cấp độ',
    routeHash: '#he-sinh-thai/phong-hoc-tuong-tac',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Không gian học tập số gồm 8 chuyên đề (80 câu hỏi trắc nghiệm có giải thích), câu hỏi Đúng/Sai, trò chơi ghép mốc sự kiện, nhận diện địa danh bản đồ và thử thách 3 cấp độ.',
    highlights: [
      '8 chuyên đề học tập toàn diện với 80 câu hỏi trắc nghiệm khách quan kèm giải thích nguồn học liệu rõ ràng',
      'Đa dạng hoạt động: Đúng/Sai có giải thích, Ghép sự kiện với mốc thời gian, Nhận diện địa danh trên bản đồ',
      'Theo dõi tiến độ học tập cá nhân, chấm điểm tự động và lưu lịch sử kết quả cho từng học sinh'
    ],
    studentTip:
      'Hoàn thành lần lượt 8 chuyên đề để mở khóa Thử thách 3 cấp độ (Dễ – Trung bình – Nâng cao) và đạt danh hiệu Vững Chủ quyền.',
    teacherTip:
      'Sử dụng chế độ Trò chơi ghép mốc thời gian và Nhận diện bản đồ để tổ chức hoạt động thi đua nhóm trên lớp.',
    samplePreview: {
      coordinate: '8 Chuyên đề • 80 Câu trắc nghiệm • 4 Trò chơi tương tác & Lưu tiến độ',
      actionText: 'Khám phá Phòng học'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Mỗi câu hỏi trong Phòng học tương tác đều có đáp án duy nhất chính xác và phần giải thích đối chiếu sử liệu, pháp luật.',
    workspaceModules: [
      {
        title: 'Hệ thống 8 Chuyên đề Trắc nghiệm (80 Câu hỏi)',
        desc: 'Bao quát từ địa lý tự nhiên, lịch sử chủ quyền, UNCLOS 1982 đến kinh tế biển và trách nhiệm thanh niên.',
        status: 'Có giải thích chi tiết'
      },
      {
        title: 'Trò chơi Ghép Niên biểu & Nhận diện Bản đồ',
        desc: 'Rèn luyện tư duy liên kết mốc thời gian lịch sử và định vị chính xác các đảo tiền tiêu trên Biển Đông.',
        status: 'Tương tác Trực quan'
      },
      {
        title: 'Thử thách 3 Cấp độ & Hồ sơ Tiến độ Học tập',
        desc: 'Thống kê số câu đúng/sai, điểm số trung bình và lưu trữ tiến độ sẵn sàng đồng bộ tài khoản học sinh.',
        status: 'Lưu kết quả tự động'
      }
    ]
  },
  {
    id: 'dong-thoi-gian-lich-su',
    code: '05',
    title: 'Dòng thời gian lịch sử',
    subtitle: 'Biên niên sử 6 Giai đoạn & 25 Cột mốc Chủ quyền',
    badge: 'Sử liệu Gốc',
    category: 'history-exhibition',
    accentColor: 'gold',
    iconName: 'Clock',
    image: '/assets/ecosystem/dong-thoi-gian-lich-su.svg',
    imageCaption: 'Trục biên niên sử 6 thời kỳ xác lập và thực thi chủ quyền biển đảo Việt Nam',
    routeHash: '#he-sinh-thai/dong-thoi-gian-lich-su',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Dòng thời gian tương tác chuyên sâu tái hiện liên tục 6 giai đoạn lịch sử từ trước thế kỷ XVII, đội Hoàng Sa – Bắc Hải, Châu bản triều Nguyễn đến UNCLOS 1982 và Luật Biển 2012.',
    highlights: [
      'Hệ thống 6 thời kỳ lịch sử với 25 cột mốc tiêu biểu có ngày tháng, nhân vật và văn bản pháp lý xác thực',
      'Phân biệt khoa học giữa "Sự kiện lịch sử" và "Ý nghĩa – Nhận định nghiên cứu" kèm trích dẫn nguyên văn',
      'Hỗ trợ lọc theo từng thời kỳ, lọc theo vùng biển (Hoàng Sa / Trường Sa) và mở hồ sơ tư liệu chi tiết'
    ],
    studentTip:
      'Chọn từng giai đoạn từ thời chúa Nguyễn đến hiện đại để hiểu vì sao chủ quyền của Việt Nam là liên tục, hòa bình và hợp pháp.',
    teacherTip:
      'Mở hộp thoại Hồ sơ tư liệu của từng cột mốc để trình chiếu nguyên văn trích đoạn Phủ biên tạp lục và Châu bản triều Nguyễn.',
    samplePreview: {
      coordinate: '6 Thời kỳ Lịch sử • 25 Cột mốc Chủ quyền • Đối chiếu Châu bản & Công ước quốc tế',
      actionText: 'Khám phá Dòng thời gian'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Mọi cột mốc trên dòng thời gian đều có nguồn kiểm chứng rõ ràng từ chính sử, Châu bản lưu trữ và văn bản pháp luật.',
    workspaceModules: [
      {
        title: 'Thời kỳ Trước Thế kỷ XVII đến Thế kỷ XVIII',
        desc: 'Từ Dư địa chí (1435), Hồng Đức bản đồ (1490) đến hoạt động của đội Hoàng Sa kiêm quản Bắc Hải.',
        status: 'Sử liệu Cổ – Trung đại'
      },
      {
        title: 'Thời Nguyễn, Thời Pháp thuộc & Giai đoạn 1945–1975',
        desc: 'Hoạt động đo đạc, dựng bia thời Gia Long – Minh Mạng, Nghị định 156-SC (1938), Hội nghị San Francisco (1951) và giải phóng Trường Sa (1975).',
        status: 'Hồ sơ Lưu trữ Quốc gia'
      },
      {
        title: 'Giai đoạn từ năm 1975 đến nay',
        desc: 'Tuyên bố đường cơ sở (1982), UNCLOS 1982, thành lập huyện đảo Hoàng Sa – Trường Sa, Nhà giàn DK1 và Luật Biển Việt Nam (2012).',
        status: 'Pháp lý Hiện đại'
      }
    ]
  },
  {
    id: 'trai-nghiem-360',
    code: '06',
    title: 'Trải nghiệm 360 độ',
    subtitle: 'Không gian Quan sát Toàn cảnh Đảo Tiền tiêu & Hải đăng',
    badge: 'Toàn cảnh 360°',
    category: 'history-exhibition',
    accentColor: 'cyan',
    iconName: 'Compass',
    image: '/assets/ecosystem/trai-nghiem-360.svg',
    imageCaption: 'Mô phỏng góc nhìn toàn cảnh 360° theo phương vị la bàn tại các đảo tiền tiêu và Nhà giàn DK1',
    routeHash: '#he-sinh-thai/trai-nghiem-360',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Trạm quan sát toàn cảnh 360° giúp học sinh xoay góc nhìn theo phương vị la bàn (0°–360°) khám phá Đảo Trường Sa Lớn, Đảo Hoàng Sa (Pattle), Nhà giàn DK1, Hải đăng Tiên Nữ và Đảo Lý Sơn.',
    highlights: [
      '5 trạm quan sát 360° gắn với tọa độ địa lý thực tế tại Hoàng Sa, Trường Sa, Nhà giàn DK1 và đảo Lý Sơn',
      'Điều khiển góc quay la bàn 360° (Bắc – Đông – Nam – Tây), phóng to/thu nhỏ và tự động xoay toàn cảnh',
      'Tích hợp các điểm chạm (Hotspots) thuyết minh chi tiết về Cột mốc chủ quyền, Hải đăng, Âu tàu và Trạm khí tượng'
    ],
    studentTip:
      'Nhấn vào các điểm chạm phát sáng trên khung cảnh 360° hoặc xoay thước la bàn để khám phá từng công trình trên đảo.',
    teacherTip:
      'Bật chế độ toàn màn hình và chức năng Tự động xoay 360° để dẫn dắt học sinh tham quan đảo tiền tiêu trong giờ học trải nghiệm.',
    samplePreview: {
      coordinate: '5 Trạm Quan sát 360° • Phương vị La bàn 0°–360° • Điểm chạm Thuyết minh Tương tác',
      actionText: 'Khám phá Không gian 360°'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Không gian 360° sử dụng mô hình đồ họa trực quan dựa trên tọa độ địa lý kiểm chứng, không dùng ảnh AI giả làm ảnh tư liệu lịch sử.',
    workspaceModules: [
      {
        title: 'Trạm 360° Đảo Trường Sa Lớn & Hải đăng Tiên Nữ',
        desc: 'Quan sát Cột mốc chủ quyền, trạm hải đăng, âu tàu và nơi đón ánh bình minh đầu tiên trên Biển Đông.',
        status: 'Quần đảo Trường Sa'
      },
      {
        title: 'Trạm 360° Đảo Hoàng Sa (Pattle) & Đảo Lý Sơn',
        desc: 'Tìm hiểu vị trí Bia chủ quyền 1938, Trạm khí tượng WMO 48860 và quê hương Đội Hoàng Sa tại Đình làng An Vĩnh.',
        status: 'Quần đảo Hoàng Sa & Lý Sơn'
      },
      {
        title: 'Trạm 360° Cụm Nhà giàn DK1 Thềm lục địa phía Nam',
        desc: 'Khám phá kiến trúc nhà giàn trên nền san hô ngập nước và đời sống kiên cường của cán bộ chiến sĩ Hải quân.',
        status: 'Thềm lục địa phía Nam'
      }
    ]
  },
  {
    id: 'trien-lam-so',
    code: '07',
    title: 'Không gian triển lãm',
    subtitle: 'Bảo tàng Số 5 Chuyên đề Tư liệu & Văn hóa Biển Đảo',
    badge: 'Bảo tàng Số',
    category: 'history-exhibition',
    accentColor: 'ocean',
    iconName: 'Compass',
    image: '/assets/ecosystem/trien-lam-so.svg',
    imageCaption: 'Bảo tàng số 5 không gian trưng bày Châu bản, hình ảnh đảo xa, người giữ biển và sinh thái đại dương',
    routeHash: '#he-sinh-thai/trien-lam-so',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Bảo tàng trực tuyến gồm 5 không gian trưng bày chuyên đề: Dấu ấn lịch sử biển đảo, Hoàng Sa – Trường Sa qua hình ảnh, Người giữ biển, Biển đảo và thiên nhiên, Tuổi trẻ hướng về biển đảo.',
    highlights: [
      '5 không gian trưng bày chuyên đề với 20+ hồ sơ tư liệu, bản đồ cổ, Châu bản triều Nguyễn và hình ảnh sinh thái biển',
      'Hộp đèn (Lightbox) phóng to hình ảnh 100%–250% kèm thông tin tác giả, thời gian, nguồn lưu trữ và phân loại tư liệu rõ ràng',
      'Tích hợp Bộ sưu tập nổi bật, chức năng lưu hiện vật yêu thích và Sổ vàng cảm tưởng dành cho học sinh THPT'
    ],
    studentTip:
      'Sử dụng bộ lọc "Tư liệu lịch sử gốc" và "Đồ họa minh họa giáo dục" để nắm rõ nguồn gốc và giá trị của từng hiện vật.',
    teacherTip:
      'Tổ chức hoạt động tham quan Bảo tàng số theo 4 Bộ sưu tập chuyên đề và khuyến khích học sinh viết cảm nghĩ vào Sổ vàng.',
    samplePreview: {
      coordinate: '5 Không gian Trưng bày • 20 Hồ sơ Tư liệu • Phóng to Chi tiết & Sổ vàng THPT',
      actionText: 'Khám phá Triển lãm'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Mỗi hiện vật trưng bày đều ghi rõ nguồn lưu trữ và phân biệt minh bạch giữa tư liệu lịch sử gốc với đồ họa minh họa giáo dục.',
    workspaceModules: [
      {
        title: 'Không gian I & II: Dấu ấn Lịch sử & Hình ảnh Hoàng Sa – Trường Sa',
        desc: 'Trưng bày Châu bản triều Nguyễn (Di sản tư liệu thế giới UNESCO), tư liệu đội Hoàng Sa và địa lý hai quần đảo.',
        status: 'Hồ sơ Tư liệu Chuẩn'
      },
      {
        title: 'Không gian III & IV: Người giữ biển & Thiên nhiên Đại dương',
        desc: 'Tôn vinh cán bộ chiến sĩ Hải quân, ngư dân bám biển và hệ sinh thái rạn san hô, rừng ngập mặn Việt Nam.',
        status: 'Giáo dục Trực quan'
      },
      {
        title: 'Không gian V: Tuổi trẻ THPT Hướng về Biển đảo',
        desc: 'Giới thiệu các sáng kiến học sinh, hoạt động bảo vệ môi trường biển và Sổ vàng lưu bút gửi ra đảo xa.',
        status: 'Tương tác Học sinh'
      }
    ]
  },
  {
    id: 'ho-so-ban-do',
    code: '08',
    title: 'Hồ sơ bản đồ',
    subtitle: 'Kho Lưu trữ Bản đồ Cổ Việt Nam, Phương Tây & Pháp lý Biển',
    badge: 'Atlas Chủ quyền',
    category: 'map-library',
    accentColor: 'gold',
    iconName: 'Map',
    image: '/assets/ecosystem/ho-so-ban-do.svg',
    imageCaption: 'Hồ sơ đối chứng bản đồ cổ Việt Nam, hải đồ phương Tây thế kỷ XVI–XIX và bản đồ pháp lý hiện đại',
    routeHash: '#he-sinh-thai/ho-so-ban-do',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Hệ thống hóa các bộ hồ sơ bản đồ lịch sử và pháp lý: Bản đồ cổ nhà nước phong kiến Việt Nam, Hải đồ phương Tây thế kỷ XVI–XIX, Bản đồ cổ Trung Quốc đối chứng và Bản đồ hành chính – pháp lý hiện đại.',
    highlights: [
      '8 hồ sơ bản đồ trọng tâm: Hồng Đức bản đồ (1490), Toản tập Thiên Nam tứ chí lộ đồ thư (1686), Đại Nam nhất thống toàn đồ (1838), An Nam đại quốc họa đồ (1838)...',
      'Phân tích chi tiết các địa danh cổ trên bản đồ: Bãi Cát Vàng, Hoàng Sa, Vạn Lý Trường Sa, Costa de Pracel, Paracel seu Cát Vàng',
      'Công cụ kính lúp phóng to bản đồ (100%–200%), lọc theo nhóm nguồn bản đồ và đối chiếu trực tiếp với Bản đồ số GIS'
    ],
    studentTip:
      'Tra cứu các nhãn địa danh "Bãi Cát Vàng", "Vạn Lý Trường Sa" và "Paracel seu Cát Vàng" để hiểu giá trị chứng cứ của bản đồ cổ.',
    teacherTip:
      'Sử dụng 4 nhóm bản đồ (Việt Nam, Phương Tây, Trung Quốc cuối thời Thanh, Pháp lý hiện đại) làm tư liệu giảng dạy chuyên đề Chủ quyền.',
    samplePreview: {
      coordinate: '8 Hồ sơ Atlas Trọng tâm • Thế kỷ XV đến Luật Biển 2012 • Kính lúp Đối chứng Địa danh',
      actionText: 'Khám phá Hồ sơ Bản đồ'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Tất cả hồ sơ bản đồ đều trích dẫn từ nguồn lưu trữ quốc gia, Viện Nghiên cứu Hán Nôm và Bộ Thông tin & Truyền thông.',
    workspaceModules: [
      {
        title: 'Hồ sơ Bản đồ cổ Nhà nước Việt Nam (Thế kỷ XV – XIX)',
        desc: 'Gồm Hồng Đức bản đồ (1490), Toản tập Thiên Nam tứ chí lộ đồ thư (1686) và Đại Nam nhất thống toàn đồ (1838).',
        status: 'Bản đồ Quốc gia Cổ'
      },
      {
        title: 'Hồ sơ Hải đồ Phương Tây & Bản đồ Đối chứng Quốc tế',
        desc: 'Gồm Hải đồ Bồ Đào Nha – Hà Lan thế kỷ XVI–XVII, An Nam đại quốc họa đồ (1838) và Hoàng triều trực tỉnh địa dư toàn đồ (1904).',
        status: 'Chứng cứ Quốc tế'
      },
      {
        title: 'Hồ sơ Bản đồ Đường cơ sở & Hành chính Biển Hiện đại',
        desc: 'Sơ đồ 11 điểm đường cơ sở thẳng (A1–A11), 5 vùng biển UNCLOS 1982 và bản đồ hành chính huyện Hoàng Sa, Trường Sa.',
        status: 'Pháp lý Hiện hành'
      }
    ]
  }
]

export const AUDIENCE_MODES = {
  student: {
    key: 'student',
    title: 'Dành cho Học sinh THPT (Khối 10 - 11 - 12)',
    badge: 'Chủ động Khám phá',
    subtitle: 'Học Lịch sử - Địa lý biển đảo qua trải nghiệm trực quan, không còn khô khan',
    benefits: [
      {
        title: 'Ôn luyện kiến thức bám sát SGK mới',
        desc: 'Tích hợp nội dung Địa lý tự nhiên - kinh tế biển và Lịch sử bảo vệ chủ quyền biển đảo Việt Nam.'
      },
      {
        title: 'Hỏi đáp tức thì cùng Trợ lý AI',
        desc: 'Giải thích dễ hiểu các khái niệm: Đường cơ sở, Lãnh hải 12 hải lý, Vùng đặc quyền kinh tế 200 hải lý.'
      },
      {
        title: 'Thử thách & Nhận huy hiệu Chủ quyền',
        desc: 'Tham gia hành trình chinh phục các cột mốc đảo qua trò chơi giải đố và dự án học tập.'
      }
    ],
    ctaLabel: 'Bắt đầu lộ trình Học sinh'
  },
  teacher: {
    key: 'teacher',
    title: 'Dành cho Giáo viên THPT',
    badge: 'Hỗ trợ Giảng dạy',
    subtitle: 'Công cụ trực quan hóa bài giảng và tổ chức hoạt động ngoại khóa biển đảo',
    benefits: [
      {
        title: 'Bản đồ số & Timeline dùng ngay trên lớp',
        desc: 'Chế độ toàn màn hình sắc nét, giúp giáo viên minh họa trực tiếp tọa độ Hoàng Sa - Trường Sa trên máy chiếu.'
      },
      {
        title: 'Kho học liệu & Hồ sơ bản đồ chuẩn',
        desc: 'Cung cấp tư liệu gốc (Châu bản, bản đồ cổ, trích đoạn UNCLOS 1982) phục vụ dạy học phát triển phẩm chất, năng lực.'
      },
      {
        title: 'Tổ chức tiết học tương tác nhanh chóng',
        desc: 'Khởi tạo câu hỏi thảo luận nhóm, bài kiểm tra nhanh 15 phút hoặc ngoại khóa chuyên đề biển đảo.'
      }
    ],
    ctaLabel: 'Mở Bộ công cụ Giáo viên'
  }
}

export const HISTORICAL_MILESTONES_PREVIEW = [
  {
    period: 'Thế kỷ XVII',
    title: 'Đội Hoàng Sa kiêm quản Bắc Hải',
    summary: 'Chúa Nguyễn lập đội Hoàng Sa và đội Bắc Hải hằng năm ra khai thác sản vật, đo đạc thủy trình và dựng bia chủ quyền.'
  },
  {
    period: 'Năm 1816 & 1836',
    title: 'Triều Nguyễn cắm cờ, đo đạc & dựng bia',
    summary: 'Vua Gia Long và Vua Minh Mạng cử thủy quân ra Hoàng Sa cắm cờ, vẽ bản đồ, dựng miếu và trồng cây làm dấu mốc quốc gia.'
  },
  {
    period: 'Năm 1982 & 2012',
    title: 'UNCLOS 1982 & Luật Biển Việt Nam',
    summary: 'Khẳng định cơ sở pháp lý vững chắc về chủ quyền, quyền chủ quyền và quyền tài phán quốc gia trên các vùng biển đảo.'
  }
]

export const ECOSYSTEM_LEARNING_FLOW = [
  {
    step: 'Bước 01',
    title: 'Định vị Không gian & Bản đồ',
    moduleTitle: 'Bản đồ số & Hồ sơ bản đồ',
    moduleId: 'ban-do-so',
    desc: 'Quan sát tọa độ địa lý Hoàng Sa – Trường Sa trên Bản đồ số GIS và đối chiếu với kho Hồ sơ bản đồ cổ.'
  },
  {
    step: 'Bước 02',
    title: 'Tra cứu Sử liệu & Pháp lý',
    moduleTitle: 'Thư viện tri thức & Dòng thời gian',
    moduleId: 'thu-vien-tri-thuc',
    desc: 'Nghiên cứu 7 chuyên đề học liệu chuẩn GDPT 2018 và theo dõi 25 cột mốc chủ quyền qua 6 thời kỳ lịch sử.'
  },
  {
    step: 'Bước 03',
    title: 'Đối thoại AI & Tham quan 360°',
    moduleTitle: 'Trợ lý AI & Trải nghiệm 360 độ',
    moduleId: 'tro-ly-ai',
    desc: 'Hỏi đáp chuyên sâu cùng Trợ lý AI Coze và xoay góc nhìn toàn cảnh 360° tại các trạm đảo tiền tiêu, Nhà giàn DK1.'
  },
  {
    step: 'Bước 04',
    title: 'Thực hành & Triển lãm Số',
    moduleTitle: 'Phòng học tương tác & Không gian triển lãm',
    moduleId: 'phong-hoc-tuong-tac',
    desc: 'Chinh phục 80 câu hỏi trắc nghiệm, trò chơi học tập và khám phá 5 không gian trưng bày tại Bảo tàng số.'
  }
]
