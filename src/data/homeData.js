export const NAV_LINKS = [
  { id: 'home', label: 'Trang chủ', href: '#trang-chu', page: 'home' },
  { id: 'about', label: 'Giới thiệu dự án', href: '#gioi-thieu', page: 'home' },
  { id: 'features', label: 'Hệ sinh thái số', href: '#he-sinh-thai-so', page: 'ecosystem' },
  { id: 'audiences', label: 'Góc Học sinh & Giáo viên', href: '#doi-tuong', page: 'home' },
  { id: 'sovereignty', label: 'Cột mốc Chủ quyền', href: '#cot-moc', page: 'home' }
]

export const ECOSYSTEM_CATEGORIES = [
  { id: 'all', label: 'Tất cả 6 khu vực chức năng' },
  { id: 'map-library', label: 'Bản đồ & Thư viện tri thức' },
  { id: 'ai-classroom', label: 'Trợ lý AI & Phòng học tương tác' },
  { id: 'history-exhibition', label: 'Lịch sử & Triển lãm số' }
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
    value: '6 Phân hệ',
    label: 'Tích hợp Bản đồ số, AI & Học liệu chuẩn THPT',
    badge: 'Giáo dục Số 4.0'
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
      'Kết hợp bản đồ tương tác toạ độ hải lý, sa bàn trực quan và Trợ lý AI thông minh giúp học sinh tra cứu tư liệu lịch sử, pháp lý quốc tế nhanh chóng và sinh động.',
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
    title: 'Bản đồ số Hoàng Sa – Trường Sa',
    subtitle: 'Hệ thống Tọa độ & Sa bàn Biển đảo',
    badge: 'Tương tác GIS',
    category: 'map-library',
    accentColor: 'ocean',
    iconName: 'Map',
    image: '/assets/ecosystem/ban-do-so.svg',
    routeHash: '#he-sinh-thai/ban-do-so',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Không gian quan sát trực quan vùng biển đảo Việt Nam, hai quần đảo Hoàng Sa và Trường Sa cùng các lớp thông tin địa lý phục vụ học tập cấp THPT.',
    highlights: [
      'Khung quan sát trực quan vị trí địa lý hai quần đảo Hoàng Sa và Trường Sa',
      'Bố cục các lớp hiển thị phục vụ bài học Địa lý và Giáo dục Quốc phòng - An ninh THPT',
      'Chế độ trình chiếu rõ nét trên máy tính, điện thoại và bảng tương tác tại lớp học'
    ],
    studentTip: 'Quan sát vị trí tương đối giữa đất liền và hai quần đảo tiền tiêu để ghi nhớ bài học Địa lý nhanh hơn.',
    teacherTip: 'Sử dụng chế độ toàn màn hình để minh họa trực quan trong tiết dạy Địa lý và ngoại khóa biển đảo.',
    samplePreview: {
      coordinate: 'Khung hiển thị Bản đồ số 2D/3D (Sẵn sàng tích hợp lớp bản đồ chuẩn thẩm định)',
      actionText: 'Khám phá Bản đồ số'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Khung Bản đồ số chỉ tích hợp dữ liệu bản đồ hành chính và pháp lý từ nguồn cơ quan nhà nước có thẩm quyền sau khi được kiểm chứng.',
    workspaceModules: [
      {
        title: 'Lớp hiển thị Quần đảo Hoàng Sa',
        desc: 'Khu vực hiển thị không gian địa lý quần đảo Hoàng Sa (trực thuộc TP. Đà Nẵng) phục vụ tra cứu học tập.',
        status: 'Khung hiển thị chuẩn'
      },
      {
        title: 'Lớp hiển thị Quần đảo Trường Sa',
        desc: 'Khu vực hiển thị không gian địa lý quần đảo Trường Sa (trực thuộc tỉnh Khánh Hòa) dành cho học sinh THPT.',
        status: 'Khung hiển thị chuẩn'
      },
      {
        title: 'Bộ công cụ Quan sát & Chú giải Học tập',
        desc: 'Gồm thước đo tỷ lệ minh họa, bật/tắt lớp nhãn địa danh và chế độ trình chiếu trên lớp.',
        status: 'Sẵn sàng tương tác'
      }
    ]
  },
  {
    id: 'thu-vien-tri-thuc',
    code: '02',
    title: 'Thư viện tri thức biển đảo',
    subtitle: 'Kho Tư liệu Lịch sử, Pháp lý & Địa lý',
    badge: 'Học liệu số',
    category: 'map-library',
    accentColor: 'gold',
    iconName: 'BookOpen',
    image: '/assets/ecosystem/thu-vien-tri-thuc.svg',
    routeHash: '#he-sinh-thai/thu-vien-tri-thuc',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Kho học liệu số được phân loại khoa học theo chương trình THPT, hỗ trợ học sinh và giáo viên tra cứu chuyên đề Lịch sử, Địa lý, Pháp luật và Văn hóa biển đảo.',
    highlights: [
      'Danh mục tư liệu phân chia rõ ràng theo các môn học Khối 10, 11, 12',
      'Không gian lưu trữ infographic, đề cương ôn tập và chuyên đề biển đảo',
      'Hỗ trợ tìm kiếm nhanh từ khóa và lọc học liệu dành cho Học sinh hoặc Giáo viên'
    ],
    studentTip: 'Lọc học liệu theo khối lớp (10, 11, 12) để ôn tập đúng trọng tâm bài học trên lớp.',
    teacherTip: 'Khai thác cấu trúc thư mục học liệu để chuẩn bị tư liệu minh họa và phiếu học tập.',
    samplePreview: {
      coordinate: 'Hệ thống danh mục học liệu số phân loại theo chương trình GDPT 2018',
      actionText: 'Khám phá Thư viện'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Mọi văn bản pháp lý, tư liệu lịch sử và trích dẫn trong thư viện được quản lý theo quy trình đối chiếu nguồn chính thống trước khi xuất bản.',
    workspaceModules: [
      {
        title: 'Chuyên mục Địa lý & Kinh tế Biển',
        desc: 'Tập hợp kiến thức nền tảng về tự nhiên, môi trường sinh thái và phát triển kinh tế biển bền vững.',
        status: 'Khối 10 • 11 • 12'
      },
      {
        title: 'Chuyên mục Tư liệu Lịch sử & Pháp lý',
        desc: 'Không gian lưu trữ các tài liệu, văn bản phục vụ giảng dạy chủ quyền biển đảo đã qua thẩm định.',
        status: 'Đang chờ nạp dữ liệu chuẩn'
      },
      {
        title: 'Kho Infographic & Học liệu Trực quan',
        desc: 'Sơ đồ tư duy, tóm tắt bài học và tài liệu hướng dẫn hoạt động ngoại khóa cấp THPT.',
        status: 'Học liệu THPT'
      }
    ]
  },
  {
    id: 'tro-ly-ai',
    code: '03',
    title: 'Trợ lý AI',
    subtitle: 'Bạn đồng hành Giải đáp Kiến thức 24/7',
    badge: 'AI Giáo dục',
    category: 'ai-classroom',
    accentColor: 'cyan',
    iconName: 'Sparkles',
    image: '/assets/ecosystem/tro-ly-ai.svg',
    routeHash: '#he-sinh-thai/tro-ly-ai',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Trợ lý trí tuệ nhân tạo hỗ trợ học sinh giải đáp thắc mắc bài học, tóm tắt kiến thức trọng tâm và gợi ý câu hỏi ôn tập về biển đảo Việt Nam.',
    highlights: [
      'Giao diện hỏi đáp thân thiện với các gợi ý câu hỏi theo chủ đề học tập THPT',
      'Hỗ trợ tóm tắt nội dung bài học và giải thích thuật ngữ dễ hiểu cho học sinh',
      'Giữ nguyên cổng kết nối (Adapter) để tích hợp mô-đun Chatbot AI độc lập'
    ],
    studentTip: 'Chọn các câu hỏi gợi ý sẵn hoặc đặt câu hỏi ngắn gọn để ôn tập kiến thức hiệu quả.',
    teacherTip: 'Sử dụng Trợ lý AI để gợi ý tình huống khởi động tiết học hoặc xây dựng câu hỏi thảo luận nhóm.',
    samplePreview: {
      coordinate: 'Cổng giao tiếp Trợ lý AI Giáo dục (Bảo toàn logic Chatbot AI độc lập)',
      actionText: 'Khám phá Trợ lý AI'
    },
    verificationNote:
      'Lưu ý kỹ thuật: Khu vực này giữ nguyên kiến trúc kết nối Chatbot AI hiện có của dự án, không xóa hoặc ghi đè logic xử lý AI.',
    workspaceModules: [
      {
        title: 'Hỏi đáp Kiến thức Học tập THPT',
        desc: 'Hỗ trợ giải thích các khái niệm trong chương trình Lịch sử, Địa lý, Giáo dục Kinh tế & Pháp luật.',
        status: 'Cổng Chatbot AI'
      },
      {
        title: 'Gợi ý Đề cương & Câu hỏi Ôn tập',
        desc: 'Hỗ trợ học sinh hệ thống hóa bài học dưới dạng sơ đồ ý chính và câu hỏi tự kiểm tra.',
        status: 'Tích hợp sẵn sàng'
      },
      {
        title: 'Hỗ trợ Hoạt động Dạy học của Giáo viên',
        desc: 'Gợi ý ý tưởng tổ chức sinh hoạt chuyên đề, ngoại khóa "Em yêu Biển đảo quê hương".',
        status: 'Dành cho Giáo viên'
      }
    ]
  },
  {
    id: 'phong-hoc-tuong-tac',
    code: '04',
    title: 'Phòng học tương tác và trò chơi học tập',
    subtitle: 'Không gian Dạy - Học & Trò chơi Giáo dục',
    badge: 'Lớp học số',
    category: 'ai-classroom',
    accentColor: 'navy',
    iconName: 'GraduationCap',
    image: '/assets/ecosystem/phong-hoc-tuong-tac.svg',
    routeHash: '#he-sinh-thai/phong-hoc-tuong-tac',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Không gian học tập kết hợp trò chơi giáo dục, thử thách trắc nghiệm tương tác và hoạt động nhóm sôi nổi dành cho học sinh THPT trên máy tính và điện thoại.',
    highlights: [
      'Các hình thức trò chơi học tập: Giải đố kiến thức, Ghép thẻ chủ đề, Vượt sóng ra khơi',
      'Chế độ luyện tập cá nhân hoặc thi đua nhóm trong giờ sinh hoạt ngoại khóa tại lớp',
      'Hệ thống điểm thưởng, bảng vinh danh và Huy hiệu học tập khích lệ tinh thần học sinh'
    ],
    studentTip: 'Tham gia các thử thách ngắn sau mỗi bài học để vừa giải trí vừa ghi nhớ kiến thức lâu hơn.',
    teacherTip: 'Tổ chức trò chơi tương tác trực tiếp trên màn hình chiếu để khuấy động không khí lớp học.',
    samplePreview: {
      coordinate: 'Không gian Lớp học số & Trò chơi giáo dục tương tác dành cho THPT',
      actionText: 'Khám phá Phòng học'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Ngân hàng câu hỏi trò chơi và bài tập tương tác bám sát chương trình sách giáo khoa THPT hiện hành.',
    workspaceModules: [
      {
        title: 'Trò chơi Học tập: "Hành trình Ra khơi"',
        desc: 'Trả lời câu hỏi trắc nghiệm theo từng chặng để mở khóa các trạm tri thức biển đảo.',
        status: 'Game Giáo dục'
      },
      {
        title: 'Thử thách Ghép thẻ & Giải ô chữ',
        desc: 'Rèn luyện phản xạ ghi nhớ thuật ngữ Địa lý biển và các khái niệm cơ bản.',
        status: 'Tương tác Nhanh'
      },
      {
        title: 'Bảng Thành tích & Huy hiệu Học sinh',
        desc: 'Theo dõi tiến độ hoàn thành chuyên đề và nhận chứng nhận hoàn thành thử thách số.',
        status: 'Gamification THPT'
      }
    ]
  },
  {
    id: 'dong-thoi-gian-lich-su',
    code: '05',
    title: 'Dòng thời gian lịch sử',
    subtitle: 'Biên niên sử Xác lập & Thực thi Chủ quyền',
    badge: 'Sử liệu Trực quan',
    category: 'history-exhibition',
    accentColor: 'gold',
    iconName: 'Clock',
    image: '/assets/ecosystem/dong-thoi-gian-lich-su.svg',
    routeHash: '#he-sinh-thai/dong-thoi-gian-lich-su',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Trục thời gian trực quan giúp học sinh theo dõi mạch lạc tiến trình lịch sử xác lập và bảo vệ chủ quyền biển đảo Việt Nam qua các thời kỳ.',
    highlights: [
      'Thiết kế trục thời gian trực quan theo từng giai đoạn lịch sử dễ theo dõi',
      'Trình bày kết hợp mốc thời gian, tóm tắt sự kiện và liên kết tư liệu học tập',
      'Giao diện tối ưu cho cả thao tác cuộn ngang trên máy tính và vuốt dọc trên điện thoại'
    ],
    studentTip: 'Theo dõi theo trình tự các giai đoạn trên trục thời gian để nắm vững mạch kiến thức môn Lịch sử.',
    teacherTip: 'Sử dụng trục thời gian để dẫn dắt học sinh kết nối các sự kiện lịch sử qua từng thời kỳ.',
    samplePreview: {
      coordinate: 'Trục thời gian tương tác theo giai đoạn lịch sử (Chuẩn hóa theo SGK)',
      actionText: 'Khám phá Dòng thời gian'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Chưa tự tạo dữ liệu lịch sử chưa được kiểm chứng; mọi mốc sự kiện chi tiết sẽ được nạp từ nguồn sử liệu và sách giáo khoa chính thống.',
    workspaceModules: [
      {
        title: 'Giai đoạn Lịch sử Phong kiến Việt Nam',
        desc: 'Khung hiển thị các mốc hoạt động xác lập và thực thi chủ quyền của cha ông qua các triều đại.',
        status: 'Khung niên biểu chuẩn'
      },
      {
        title: 'Giai đoạn Lịch sử Cận - Hiện đại',
        desc: 'Khung hiển thị tiến trình đấu tranh, quản lý và bảo vệ chủ quyền biển đảo trong thời đại mới.',
        status: 'Khung niên biểu chuẩn'
      },
      {
        title: 'Giai đoạn Pháp luật Biển Hiện đại',
        desc: 'Khung hiển thị các mốc văn bản pháp lý về biển đảo theo chương trình GDPT 2018.',
        status: 'Khung niên biểu chuẩn'
      }
    ]
  },
  {
    id: 'trien-lam-so',
    code: '06',
    title: 'Triển lãm số',
    subtitle: 'Không gian Trưng bày Ảo & Văn hóa Biển Đảo',
    badge: 'Trải nghiệm 360°',
    category: 'history-exhibition',
    accentColor: 'ocean',
    iconName: 'Compass',
    image: '/assets/ecosystem/trien-lam-so.svg',
    routeHash: '#he-sinh-thai/trien-lam-so',
    audience: 'Học sinh & Giáo viên',
    shortDesc:
      'Không gian triển lãm trực tuyến trưng bày hình ảnh, mô phỏng trực quan về văn hóa biển, đời sống nơi đảo xa và góc sáng tác thông điệp của học sinh THPT.',
    highlights: [
      'Các phòng trưng bày số theo chủ đề: Di sản văn hóa biển, Thiên nhiên đại dương, Nhịp sống đảo xa',
      'Trải nghiệm tham quan trực quan kèm thuyết minh tóm tắt phù hợp lứa tuổi THPT',
      'Góc tương tác "Gửi thông điệp ra đảo xa" dành cho học sinh và các trường THPT'
    ],
    studentTip: 'Tham quan các phòng trưng bày theo chủ đề để tìm chất liệu cho bài thuyết trình hoặc dự án học tập.',
    teacherTip: 'Tổ chức buổi tham quan Triển lãm số ngay tại lớp trong tiết hoạt động trải nghiệm, hướng nghiệp.',
    samplePreview: {
      coordinate: 'Không gian Triển lãm số đa phương tiện dành cho Học sinh & Giáo viên THPT',
      actionText: 'Khám phá Triển lãm số'
    },
    verificationNote:
      'Lưu ý chuẩn mực: Các hình ảnh tư liệu, bản đồ trưng bày và thông tin thuyết minh tại Triển lãm số chỉ hiển thị nội dung đã qua kiểm duyệt chính thống.',
    workspaceModules: [
      {
        title: 'Phòng trưng bày: Di sản & Văn hóa Biển',
        desc: 'Giới thiệu nét đẹp văn hóa truyền thống của cư dân vùng biển đảo Việt Nam.',
        status: 'Không gian Trưng bày'
      },
      {
        title: 'Phòng trưng bày: Sinh thái & Biển xanh',
        desc: 'Khám phá vẻ đẹp đa dạng sinh học đại dương và ý thức bảo vệ môi trường biển.',
        status: 'Không gian Trưng bày'
      },
      {
        title: 'Góc Sáng tác: Tuổi trẻ THPT với Biển đảo',
        desc: 'Nơi trưng bày tranh vẽ, bài viết, tập san và thông điệp của học sinh gửi tới biển đảo quê hương.',
        status: 'Tương tác Học sinh'
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
        title: 'Kho học liệu & Kế hoạch bài dạy chuẩn',
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
    title: 'Quan sát Không gian',
    moduleTitle: 'Bản đồ số Hoàng Sa – Trường Sa',
    moduleId: 'ban-do-so',
    desc: 'Định hình vị trí địa lý và không gian biển đảo Việt Nam thông qua giao diện bản đồ số trực quan.'
  },
  {
    step: 'Bước 02',
    title: 'Tra cứu & Kết nối Lịch sử',
    moduleTitle: 'Thư viện tri thức & Dòng thời gian',
    moduleId: 'thu-vien-tri-thuc',
    desc: 'Tìm hiểu hệ thống học liệu phân theo khối lớp 10, 11, 12 và theo dõi tiến trình lịch sử trên trục thời gian.'
  },
  {
    step: 'Bước 03',
    title: 'Hỏi đáp & Đào sâu',
    moduleTitle: 'Trợ lý AI Giáo dục',
    moduleId: 'tro-ly-ai',
    desc: 'Đặt câu hỏi với Trợ lý AI để làm rõ các thuật ngữ và tóm tắt nội dung trọng tâm của bài học.'
  },
  {
    step: 'Bước 04',
    title: 'Thực hành & Trải nghiệm',
    moduleTitle: 'Phòng học tương tác & Triển lãm số',
    moduleId: 'phong-hoc-tuong-tac',
    desc: 'Tham gia trò chơi học tập củng cố kiến thức và khám phá không gian trưng bày văn hóa biển đảo 360°.'
  }
]
