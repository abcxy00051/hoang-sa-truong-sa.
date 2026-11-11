/**
 * DỮ LIỆU CHUYÊN ĐỀ HỌC TẬP PHẦN 1 (CHUYÊN ĐỀ 1 -> CHUYÊN ĐỀ 4)
 * Mỗi chuyên đề gồm đúng 10 câu hỏi trắc nghiệm 4 lựa chọn (A, B, C, D)
 * có phân loại cấp độ (easy, medium, hard), giải thích chi tiết và nguồn chính thống.
 */

export const CLASSROOM_TOPICS_PART1 = [
  {
    id: 'cd-1',
    code: 'Chuyên đề 01',
    title: 'Tổng quan biển đảo Việt Nam',
    shortDesc:
      'Khám phá diện tích vùng biển, chiều dài bờ biển, 28 tỉnh thành ven biển và hệ thống hàng nghìn đảo lớn nhỏ của Tổ quốc.',
    iconName: 'Compass',
    badge: '10 câu hỏi • Địa lý THPT',
    image: '/assets/library/chuyen-de-01-dia-ly.svg',
    summaryPoints: [
      'Đường bờ biển Việt Nam dài khoảng 3.260 km kéo dài từ Quảng Ninh đến Kiên Giang.',
      'Vùng biển Việt Nam thuộc Biển Đông có diện tích khoảng 1 triệu km², gấp hơn 3 lần diện tích đất liền.',
      'Cả nước có 28/63 tỉnh, thành phố trực thuộc Trung ương giáp biển (trước các đợt sắp xếp hành chính mới) và 12 huyện đảo, thành phố đảo.'
    ],
    questions: [
      {
        id: 'cd1-q1',
        difficulty: 'easy',
        question:
          'Đường bờ biển của đất liền Việt Nam có chiều dài khoảng bao nhiêu ki-lô-mét và kéo dài từ tỉnh nào đến tỉnh nào?',
        options: [
          'Khoảng 3.260 km, kéo dài từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang)',
          'Khoảng 2.360 km, kéo dài từ Hải Phòng đến Cà Mau',
          'Khoảng 4.100 km, kéo dài từ Quảng Ninh đến Bạc Liêu',
          'Khoảng 1.850 km, kéo dài từ Thanh Hóa đến Kiên Giang'
        ],
        correctIndex: 0,
        explanation:
          'Theo Sách giáo khoa Địa lý 12 và Niên giám Thống kê Việt Nam, đường bờ biển Việt Nam dài khoảng 3.260 km, bắt đầu từ Móng Cái (tỉnh Quảng Ninh) đến Hà Tiên (tỉnh Kiên Giang).',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd1-q2',
        difficulty: 'easy',
        question:
          'Vùng biển thuộc chủ quyền, quyền chủ quyền và quyền tài phán của Việt Nam trên Biển Đông có diện tích khoảng bao nhiêu?',
        options: [
          'Khoảng 331.000 km²',
          'Khoảng 500.000 km²',
          'Khoảng 1 triệu km² (gấp khoảng 3 lần diện tích đất liền)',
          'Khoảng 3,5 triệu km²'
        ],
        correctIndex: 2,
        explanation:
          'Toàn bộ Biển Đông rộng khoảng 3,447 triệu km², trong đó vùng biển Việt Nam rộng khoảng 1 triệu km², gấp khoảng 3 lần diện tích phần đất liền (~331.000 km²).',
        source: 'Sách giáo khoa Địa lý 12 & Luật Biển Việt Nam năm 2012'
      },
      {
        id: 'cd1-q3',
        difficulty: 'easy',
        question:
          'Đảo nào có diện tích tự nhiên lớn nhất trong hệ thống các đảo của Việt Nam?',
        options: ['Đảo Cát Bà', 'Đảo Phú Quốc', 'Đảo Cái Bầu', 'Đảo Côn Sơn'],
        correctIndex: 1,
        explanation:
          'Đảo Phú Quốc (tỉnh Kiên Giang) là đảo lớn nhất Việt Nam với diện tích khoảng 574 km², nằm trong vùng biển Vịnh Thái Lan.',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd1-q4',
        difficulty: 'medium',
        question:
          'Vùng biển Việt Nam mang tính chất tự nhiên đặc trưng nào sau đây?',
        options: [
          'Biển ôn đới lạnh với dòng hải lưu băng giá quanh năm',
          'Biển nhiệt đới ẩm gió mùa, tương đối kín',
          'Biển cận cực có biên độ nhiệt năm rất lớn',
          'Biển hoang mạc khô hạn ít mưa'
        ],
        correctIndex: 1,
        explanation:
          'Biển Đông và vùng biển Việt Nam nằm trong vùng nội chí tuyến nên mang tính chất nhiệt đới ẩm gió mùa rõ rệt, được bao bọc bởi lục địa Á - Âu và các vòng cung đảo nên là một biển nửa kín (tương đối kín).',
        source: 'Sách giáo khoa Địa lý 12 – Thiên nhiên nhiệt đới ẩm gió mùa'
      },
      {
        id: 'cd1-q5',
        difficulty: 'medium',
        question:
          'Khu vực nào của nước ta tập trung số lượng đảo ven bờ nhiều nhất (chiếm hơn 2/3 tổng số đảo ven bờ cả nước)?',
        options: [
          'Vùng biển Bắc Bộ (đặc biệt là Quảng Ninh và Hải Phòng)',
          'Vùng biển Bắc Trung Bộ (Thanh Hóa – Hà Tĩnh)',
          'Vùng biển Đông Nam Bộ (Bà Rịa – Vũng Tàu – TP.HCM)',
          'Vùng biển Đồng bằng sông Cửu Long'
        ],
        correctIndex: 0,
        explanation:
          'Trong tổng số hơn 3.000 đảo lớn nhỏ ven bờ của Việt Nam, vùng biển Bắc Bộ (Quảng Ninh, Hải Phòng với vịnh Hạ Long, vịnh Bái Tử Long, quần đảo Cát Bà) tập trung hơn 2.000 đảo, chủ yếu là đảo đá vôi.',
        source: 'Cục Biển và Hải đảo Việt Nam – Bộ Tài nguyên và Môi trường'
      },
      {
        id: 'cd1-q6',
        difficulty: 'medium',
        question:
          'Hai vịnh biển lớn nhất tiếp giáp với bờ biển đất liền Việt Nam là:',
        options: [
          'Vịnh Bắc Bộ và Vịnh Thái Lan',
          'Vịnh Hạ Long và Vịnh Cam Ranh',
          'Vịnh Vân Phong và Vịnh Xuân Đài',
          'Vịnh Lăng Cô và Vịnh Nha Trang'
        ],
        correctIndex: 0,
        explanation:
          'Vịnh Bắc Bộ (ở phía Đông Bắc, diện tích khoảng 126.250 km²) và Vịnh Thái Lan (ở phía Tây Nam) là hai vịnh biển lớn nhất tiếp giáp với bờ biển Việt Nam.',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd1-q7',
        difficulty: 'medium',
        question:
          'Đảo Bạch Long Vĩ – một trong những đảo tiền tiêu quan trọng tại Vịnh Bắc Bộ – trực thuộc đơn vị hành chính cấp tỉnh/thành phố nào?',
        options: [
          'Tỉnh Quảng Ninh',
          'Thành phố Hải Phòng',
          'Tỉnh Thái Bình',
          'Tỉnh Quảng Trị'
        ],
        correctIndex: 1,
        explanation:
          'Huyện đảo Bạch Long Vĩ nằm ở vùng trung tâm Vịnh Bắc Bộ, là đơn vị hành chính cấp huyện trực thuộc thành phố Hải Phòng.',
        source: 'Cổng Thông tin điện tử thành phố Hải Phòng'
      },
      {
        id: 'cd1-q8',
        difficulty: 'hard',
        question:
          'Nhiệt độ trung bình năm của tầng nước mặt tại vùng biển Việt Nam thường dao động trong khoảng nào?',
        options: [
          'Từ 10°C đến 15°C',
          'Trên 23°C (phổ biến từ 24°C đến 28°C)',
          'Từ 5°C đến 12°C',
          'Dưới 18°C quanh năm'
        ],
        correctIndex: 1,
        explanation:
          'Do nằm trong vùng biển nhiệt đới nội chí tuyến, nhiệt độ trung bình năm của tầng nước mặt biển Việt Nam luôn cao trên 23°C (dao động phổ biến từ 24°C – 28°C), tạo điều kiện thuận lợi cho sinh vật biển nhiệt đới và du lịch biển quanh năm.',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd1-q9',
        difficulty: 'hard',
        question:
          'Độ muối trung bình của nước biển Đông tại vùng biển Việt Nam dao động ở mức bao nhiêu phần nghìn (‰)?',
        options: [
          'Khoảng 10 – 12‰',
          'Khoảng 32 – 33‰ (thay đổi theo mùa và khu vực cửa sông)',
          'Khoảng 55 – 60‰',
          'Khoảng 2 – 5‰'
        ],
        correctIndex: 1,
        explanation:
          'Độ muối trung bình của vùng biển Việt Nam vào khoảng 32 – 33‰, có sự biến động nhẹ giữa mùa mưa và mùa khô, cũng như giảm nhẹ ở vùng biển ven các cửa sông lớn (như sông Hồng, sông Cửu Long).',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd1-q10',
        difficulty: 'hard',
        question:
          'Ngày 21/01/2021, Ủy ban Thường vụ Quốc hội đã thông qua Nghị quyết thành lập thành phố đảo đầu tiên của Việt Nam. Đó là thành phố nào?',
        options: [
          'Thành phố Lý Sơn (tỉnh Quảng Ngãi)',
          'Thành phố Phú Quốc (tỉnh Kiên Giang)',
          'Thành phố Côn Đảo (tỉnh Bà Rịa – Vũng Tàu)',
          'Thành phố Cát Hải (thành phố Hải Phòng)'
        ],
        correctIndex: 1,
        explanation:
          'Theo Nghị quyết số 1109/NQ-UBTVQH14 (có hiệu lực từ năm 2021), Phú Quốc (tỉnh Kiên Giang) chính thức trở thành thành phố đảo đầu tiên của Việt Nam.',
        source: 'Nghị quyết số 1109/NQ-UBTVQH14 của Ủy ban Thường vụ Quốc hội'
      }
    ]
  },
  {
    id: 'cd-2',
    code: 'Chuyên đề 02',
    title: 'Vị trí địa lý và đặc điểm tự nhiên của Hoàng Sa, Trường Sa',
    shortDesc:
      'Tìm hiểu tọa độ địa lý, cấu trúc cụm đảo, đặc điểm địa hình san hô, khí hậu và vị trí hành chính của hai quần đảo Hoàng Sa và Trường Sa.',
    iconName: 'Map',
    badge: '10 câu hỏi • Hoàng Sa & Trường Sa',
    image: '/assets/library/chuyen-de-03-hoang-sa-truong-sa.svg',
    summaryPoints: [
      'Quần đảo Hoàng Sa trực thuộc thành phố Đà Nẵng, chia thành 2 nhóm chính: nhóm An Vĩnh (phía Đông) và nhóm Lưỡi Liềm (phía Tây).',
      'Quần đảo Trường Sa trực thuộc tỉnh Khánh Hòa, nằm ở phía Đông Nam vùng biển Việt Nam, chia thành 8 cụm đảo/đá san hô.',
      'Hai quần đảo có vị trí án ngữ tuyến hàng hải và hàng không quốc tế huyết mạch qua Biển Đông.'
    ],
    questions: [
      {
        id: 'cd2-q1',
        difficulty: 'easy',
        question:
          'Về mặt tổ chức hành chính nhà nước hiện nay, huyện đảo Hoàng Sa trực thuộc tỉnh/thành phố nào của Việt Nam?',
        options: [
          'Tỉnh Quảng Ngãi',
          'Thành phố Đà Nẵng',
          'Tỉnh Khánh Hòa',
          'Tỉnh Thừa Thiên Huế'
        ],
        correctIndex: 1,
        explanation:
          'Huyện Hoàng Sa là đơn vị hành chính cấp huyện trực thuộc thành phố Đà Nẵng (tách tỉnh Quảng Nam – Đà Nẵng từ ngày 01/01/1997 theo Nghị quyết của Quốc hội khóa IX).',
        source: 'UBND huyện Hoàng Sa – Thành phố Đà Nẵng'
      },
      {
        id: 'cd2-q2',
        difficulty: 'easy',
        question:
          'Về mặt tổ chức hành chính nhà nước hiện nay, huyện đảo Trường Sa trực thuộc tỉnh/thành phố nào của Việt Nam?',
        options: [
          'Tỉnh Bình Thuận',
          'Tỉnh Bà Rịa – Vũng Tàu',
          'Tỉnh Khánh Hòa',
          'Tỉnh Ninh Thuận'
        ],
        correctIndex: 2,
        explanation:
          'Huyện đảo Trường Sa trực thuộc tỉnh Khánh Hòa, bao gồm thị trấn Trường Sa và 2 xã đảo là xã Song Tử Tây và xã Sinh Tồn (theo Nghị định 65/2007/NĐ-CP).',
        source: 'Nghị định số 65/2007/NĐ-CP của Chính phủ'
      },
      {
        id: 'cd2-q3',
        difficulty: 'easy',
        question:
          'Quần đảo Hoàng Sa về mặt địa lý tự nhiên được chia thành hai nhóm đảo chính nào?',
        options: [
          'Nhóm An Vĩnh (phía Đông) và nhóm Lưỡi Liềm (phía Tây)',
          'Nhóm Song Tử và nhóm Sinh Tồn',
          'Nhóm Nam Yết và nhóm Thám Hiểm',
          'Nhóm Bạch Long và nhóm Cồn Cỏ'
        ],
        correctIndex: 0,
        explanation:
          'Quần đảo Hoàng Sa gồm trên 30 đảo, đá, cồn san hô, bãi cạn và được chia thành hai nhóm chính: nhóm An Vĩnh ở phía Đông (có đảo Phú Lâm, đảo Linh Côn...) và nhóm Lưỡi Liềm (Nguyệt Thiềm) ở phía Tây (có đảo Hoàng Sa, đảo Quang Ảnh, đảo Hữu Nhật...).',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd2-q4',
        difficulty: 'medium',
        question:
          'Đảo nào có diện tích tự nhiên lớn nhất trong quần đảo Hoàng Sa?',
        options: [
          'Đảo Phú Lâm',
          'Đảo Hoàng Sa (Pattle)',
          'Đảo Tri Tôn',
          'Đảo Quang Hòa'
        ],
        correctIndex: 0,
        explanation:
          'Đảo Phú Lâm (thuộc nhóm An Vĩnh) là đảo có diện tích tự nhiên lớn nhất trong quần đảo Hoàng Sa (khoảng trên 1,5 – 2 km² trước khi bị bồi đắp nhân tạo).',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
      },
      {
        id: 'cd2-q5',
        difficulty: 'medium',
        question:
          'Từ đảo Lý Sơn (tỉnh Quảng Ngãi) đến quần đảo Hoàng Sa có khoảng cách đường biển ngắn nhất là bao nhiêu hải lý?',
        options: [
          'Khoảng 15 hải lý',
          'Khoảng 120 hải lý',
          'Khoảng 550 hải lý',
          'Khoảng 800 hải lý'
        ],
        correctIndex: 1,
        explanation:
          'Điểm gần nhất của quần đảo Hoàng Sa (đảo Tri Tôn) cách đảo Lý Sơn (tỉnh Quảng Ngãi) khoảng 120 hải lý và cách đất liền miền Trung Việt Nam khoảng 140 – 170 hải lý.',
        source: 'UBND huyện Hoàng Sa – Thành phố Đà Nẵng'
      },
      {
        id: 'cd2-q6',
        difficulty: 'medium',
        question:
          'Theo Nghị định số 65/2007/NĐ-CP của Chính phủ, huyện đảo Trường Sa (tỉnh Khánh Hòa) gồm những đơn vị hành chính cấp xã nào?',
        options: [
          'Thị trấn Trường Sa, xã Song Tử Tây và xã Sinh Tồn',
          'Thị trấn Trường Sa, xã An Vĩnh và xã An Hải',
          'Xã Nam Yết, xã Sơn Ca và xã Phan Vinh',
          'Thị trấn Cam Ranh và xã đảo Trường Sa Đông'
        ],
        correctIndex: 0,
        explanation:
          'Ngày 11/4/2007, Chính phủ ban hành Nghị định số 65/2007/NĐ-CP thành lập 3 đơn vị hành chính cấp xã thuộc huyện Trường Sa (tỉnh Khánh Hòa) gồm: Thị trấn Trường Sa, xã Song Tử Tây và xã Sinh Tồn.',
        source: 'Nghị định số 65/2007/NĐ-CP ngày 11/4/2007 của Chính phủ'
      },
      {
        id: 'cd2-q7',
        difficulty: 'medium',
        question:
          'Về nguồn gốc cấu tạo địa chất, phần lớn các đảo nổi và bãi đá ngầm tại hai quần đảo Hoàng Sa và Trường Sa được hình thành từ:',
        options: [
          'Đá granite núi lửa lục địa cổ',
          'San hô và trầm tích sinh vật biển tích tụ trên nền địa hình ngầm dưới đáy biển',
          'Phù sa bồi đắp trực tiếp từ các con sông lớn trên đất liền',
          'Băng hà cổ đại tan chảy'
        ],
        correctIndex: 1,
        explanation:
          'Các đảo, đá, cồn tại Hoàng Sa và Trường Sa chủ yếu là các đảo san hô, rạn san hô vòng (atoll) và bãi cạn phát triển trên các khối nâng kiến tạo ngầm ở Biển Đông.',
        source: 'Viện Hải dương học – Viện Hàn lâm Khoa học và Công nghệ Việt Nam'
      },
      {
        id: 'cd2-q8',
        difficulty: 'hard',
        question:
          'Về mặt địa lý tự nhiên, quần đảo Trường Sa được các nhà địa lý – hải dương học Việt Nam phân chia thành bao nhiêu cụm đảo, đá, bãi cạn chính?',
        options: ['2 cụm', '4 cụm', '8 cụm', '15 cụm'],
        correctIndex: 2,
        explanation:
          'Quần đảo Trường Sa trải rộng trên vùng biển phía Nam Biển Đông và được chia thành 8 cụm chính: Song Tử, Thị Tứ, Loại Ta, Nam Yết, Sinh Tồn, Trường Sa, Thám Hiểm và Bình Nguyên.',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
      },
      {
        id: 'cd2-q9',
        difficulty: 'hard',
        question:
          'Loài cây thân gỗ chịu mặn và chịu gió bão đặc trưng nào thường gắn liền với cảnh quan tự nhiên và đời sống trên các đảo thuộc quần đảo Trường Sa?',
        options: [
          'Cây bàng vuông, cây phong ba và cây bão táp',
          'Cây thông đỏ và cây pơ-mu',
          'Cây sầu riêng và cây cao su',
          'Cây bạch đàn và cây tràm trà ôn đới'
        ],
        correctIndex: 0,
        explanation:
          'Cây bàng vuông, cây phong ba, cây bão táp và cây mù u là những loài thực vật bản địa có sức sống mãnh liệt trước gió bão, cát mặn, trở thành biểu tượng xanh kiên cường trên các đảo thuộc quần đảo Trường Sa.',
        source: 'Tài liệu tuyên truyền Biển đảo – Bộ Tư lệnh Hải quân'
      },
      {
        id: 'cd2-q10',
        difficulty: 'hard',
        question:
          'Trong lịch sử hàng hải cổ đại và trung đại của Việt Nam cũng như phương Tây, vùng biển bao quanh hai quần đảo Hoàng Sa và Trường Sa từng được gọi chung bằng tên địa danh cổ nào?',
        options: [
          'Bãi Cát Vàng (Hoàng Sa, Vạn Lý Trường Sa) / Pracel (Parcel)',
          'Vịnh Giao Chỉ',
          'Biển Nhật Bản',
          'Eo biển Malacca'
        ],
        correctIndex: 0,
        explanation:
          'Trong các thư tịch cổ Việt Nam (Toản tập Thiên Nam tứ chí lộ đồ thư, Phủ biên tạp lục) và bản đồ phương Tây thế kỷ XVI–XVIII, hai quần đảo Hoàng Sa và Trường Sa từng được gọi chung là Bãi Cát Vàng, Hoàng Sa, Đại Trường Sa hay Vạn Lý Trường Sa (bản đồ phương Tây ghi là Pracel / Parcel).',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      }
    ]
  },
  {
    id: 'cd-3',
    code: 'Chuyên đề 03',
    title: 'Lịch sử xác lập và thực thi chủ quyền của Việt Nam',
    shortDesc:
      'Tìm hiểu hoạt động của đội Hoàng Sa, đội Bắc Hải thời chúa Nguyễn – Tây Sơn, Châu bản triều Nguyễn và sự tiếp nối quản lý liên tục đến ngày nay.',
    iconName: 'Clock',
    badge: '10 câu hỏi • Lịch sử THPT',
    image: '/assets/library/chuyen-de-02-lich-su-chu-quyen.svg',
    summaryPoints: [
      'Chúa Nguyễn lập đội Hoàng Sa và đội Bắc Hải từ đầu thế kỷ XVII để khai thác sản vật và tuần tra vùng biển đảo.',
      'Vua Gia Long (1816) và vua Minh Mạng (1834–1838) cử Thủy quân và đội Hoàng Sa ra cắm cờ, đo đạc thủy trình, dựng miếu, trồng cây và vẽ bản đồ.',
      'Châu bản triều Nguyễn đã được UNESCO công nhận là Di sản tư liệu thuộc Chương trình Ký ức thế giới khu vực châu Á - Thái Bình Dương (2014).'
    ],
    questions: [
      {
        id: 'cd3-q1',
        difficulty: 'easy',
        question:
          'Tổ chức bán quân sự do chính quyền chúa Nguyễn ở Đàng Trong thành lập từ đầu thế kỷ XVII để ra khai thác, tuần tra và quản lý quần đảo Hoàng Sa có tên là gì?',
        options: [
          'Đội Hoàng Sa',
          'Đội Thần Cơ',
          'Đội Cẩm Y Vệ',
          'Đội Phấn Nghĩa'
        ],
        correctIndex: 0,
        explanation:
          'Ngay từ nửa đầu thế kỷ XVII, chính quyền chúa Nguyễn ở Đàng Trong đã lập đội Hoàng Sa (gồm những trai tráng vùng An Vĩnh, An Hải – Quảng Ngãi) hàng năm ra Bãi Cát Vàng làm nhiệm vụ thu lượm hóa vật và tuần tra thực thi chủ quyền.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd3-q2',
        difficulty: 'easy',
        question:
          'Bên cạnh đội Hoàng Sa, chúa Nguyễn còn lập thêm một đội chuyên trách hoạt động ở khu vực quần đảo Trường Sa, Côn Đảo và vùng biển phía Nam. Đội đó tên là gì?',
        options: [
          'Đội Bắc Hải',
          'Đội Đông Hải',
          'Đội Nam Hải',
          'Đội Tây Hải'
        ],
        correctIndex: 0,
        explanation:
          'Theo sách Phủ biên tạp lục của Lê Quý Đôn (1776), chúa Nguyễn còn lập đội Bắc Hải (do đội Hoàng Sa kiêm quản), tuyển người ở thôn Tứ Chính hoặc xã Cảnh Dương (Bình Thuận) ra các đảo vùng Bắc Hải (tức khu vực Trường Sa), Côn Lôn, Hà Tiên để thu lượm sản vật và thực thi chủ quyền.',
        source: 'Lê Quý Đôn – Phủ biên tạp lục (1776) & SGK Lịch sử 11'
      },
      {
        id: 'cd3-q3',
        difficulty: 'easy',
        question:
          'Theo thông lệ hàng năm được ghi trong sử liệu, đội Hoàng Sa thường căng buồm ra đảo vào tháng mấy và trở về đất liền vào tháng mấy âm lịch?',
        options: [
          'Đi vào tháng 2 (hoặc tháng 3) âm lịch và trở về vào tháng 8 âm lịch',
          'Đi vào tháng 11 âm lịch và trở về vào tháng Giêng',
          'Đi vào tháng 7 âm lịch và trở về vào tháng 12 âm lịch',
          'Chỉ đi một chuyến kéo dài 3 năm liên tục'
        ],
        correctIndex: 0,
        explanation:
          'Sách Phủ biên tạp lục ghi rõ: Hàng năm cứ đến tháng 2 (hoặc tháng 3) âm lịch nhận giấy sai đi, mang theo 6 tháng lương thực ra đảo làm nhiệm vụ, đến tháng 8 âm lịch thì về cửa Eo (Thuận An, Phú Xuân) để nộp hóa vật.',
        source: 'Lê Quý Đôn – Phủ biên tạp lục (1776)'
      },
      {
        id: 'cd3-q4',
        difficulty: 'medium',
        question:
          'Năm 1816 (năm Gia Long thứ 15), vị vua đầu tiên của Vương triều Nguyễn đã có quyết định lịch sử gì đối với quần đảo Hoàng Sa?',
        options: [
          'Mệnh cho Thủy quân cùng đội Hoàng Sa ra Hoàng Sa xem xét, đo đạc thủy trình và chính thức cắm cờ xác nhận chủ quyền',
          'Bãi bỏ hoàn toàn hoạt động của đội Hoàng Sa',
          'Nhượng lại quyền khai thác Hoàng Sa cho thương thuyền nước ngoài',
          'Chuyển toàn bộ dân cư từ Huế ra sinh sống tại đảo Phú Lâm'
        ],
        correctIndex: 0,
        explanation:
          'Theo bộ chính sử Đại Nam thực lục chính biên, năm Bính Tý (1816), vua Gia Long mệnh cho Thủy quân và đội Hoàng Sa đi thuyền ra Hoàng Sa để thăm dò, đo đạc đường biển (thủy trình) và khẳng định chủ quyền nhà nước.',
        source: 'Quốc sử quán triều Nguyễn – Đại Nam thực lục & SGK Lịch sử 11'
      },
      {
        id: 'cd3-q5',
        difficulty: 'medium',
        question:
          'Dưới thời vua Minh Mạng (1820–1841), các hoạt động thực thi chủ quyền nhà nước tại Hoàng Sa được triển khai thường xuyên gồm những việc nào?',
        options: [
          'Đo đạc thủy trình, vẽ bản đồ, dựng miếu thờ, lập bia chủ quyền và trồng cây làm dấu hiệu cho tàu thuyền',
          'Xây dựng tuyến đường sắt nối đất liền ra đảo',
          'Đóng cửa biển và cấm mọi tàu thuyền của triều đình ra đảo',
          'Chỉ gửi thư ngoại giao mà không cử người ra đảo'
        ],
        correctIndex: 0,
        explanation:
          'Thời vua Minh Mạng, triều đình nhà Nguyễn hằng năm cử Thủy quân và Giám thành cùng đội Hoàng Sa ra đảo để đo đạc, vẽ bản đồ chi tiết từng đảo, dựng miếu thờ, dựng bia gỗ ghi dấu mốc chủ quyền và trồng cây trên các đảo để tàu thuyền nhận biết, tránh mắc cạn.',
        source: 'Châu bản triều Nguyễn – Trung tâm Lưu trữ Quốc gia I'
      },
      {
        id: 'cd3-q6',
        difficulty: 'medium',
        question:
          'Năm 1938, dưới thời kỳ Pháp thuộc, Toàn quyền Đông Dương Jules Brévié đã ký Nghị định số 156-SC để thực hiện việc quản lý hành chính nào đối với quần đảo Hoàng Sa?',
        options: [
          'Tách quần đảo Hoàng Sa thành một đơn vị hành chính thuộc tỉnh Thừa Thiên',
          'Sáp nhập quần đảo Hoàng Sa vào tỉnh Hà Tiên',
          'Giao quần đảo Hoàng Sa cho tỉnh Lạng Sơn quản lý',
          'Giải thể đơn vị hành chính tại Hoàng Sa'
        ],
        correctIndex: 0,
        explanation:
          'Ngày 30/3/1938, vua Bảo Đại ký Dụ số 10 và ngày 15/6/1938, Toàn quyền Đông Dương Jules Brévié ký Nghị định số 156-SC thiết lập đơn vị hành chính tại quần đảo Hoàng Sa trực thuộc tỉnh Thừa Thiên. Chính quyền cũng dựng bia chủ quyền, xây trạm khí tượng và trạm vô tuyến điện trên đảo Hoàng Sa và đảo Phú Lâm.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd3-q7',
        difficulty: 'medium',
        question:
          'Năm 1933, chính quyền Pháp đại diện cho Việt Nam về đối ngoại đã ban hành văn bản hành chính sáp nhập quần đảo Trường Sa vào tỉnh nào của Nam Kỳ?',
        options: [
          'Tỉnh Bà Rịa (theo Nghị định của Thống đốc Nam Kỳ J. Krautheimer ngày 21/12/1933)',
          'Tỉnh Mỹ Tho',
          'Tỉnh Châu Đốc',
          'Tỉnh Cần Thơ'
        ],
        correctIndex: 0,
        explanation:
          'Ngày 21/12/1933, Thống đốc Nam Kỳ J. Krautheimer đã ký Nghị định sáp nhập các đảo thuộc quần đảo Trường Sa (đảo Trường Sa, An Bang, Itu Aba, nhóm Song Tử, Loại Ta, Thị Tứ...) vào tỉnh Bà Rịa.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd3-q8',
        difficulty: 'hard',
        question:
          'Tại Hội nghị Hòa bình San Francisco (tháng 9/1951) có sự tham dự của 51 quốc gia, sự kiện pháp lý – ngoại giao quan trọng nào đã diễn ra liên quan đến chủ quyền của Việt Nam?',
        options: [
          'Trưởng phái đoàn Quốc gia Việt Nam là Thủ tướng Trần Văn Hữu tuyên bố khẳng định chủ quyền lâu đời của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa mà không có quốc gia nào phản đối',
          'Các nước ký hiệp ước chia đều Biển Đông cho 51 quốc gia',
          'Hội nghị chưa từng đề cập đến khu vực châu Á - Thái Bình Dương',
          'Hội nghị quyết định xóa bỏ toàn bộ tên gọi các đảo trên Biển Đông'
        ],
        correctIndex: 0,
        explanation:
          'Ngày 07/9/1951, tại Hội nghị San Francisco (Hoa Kỳ), Trưởng phái đoàn Quốc gia Việt Nam là Thủ tướng kiêm Ngoại trưởng Trần Văn Hữu đã long trọng tuyên bố khẳng định chủ quyền đã có từ lâu đời của Việt Nam đối với quần đảo Hoàng Sa và Trường Sa trước 51 quốc gia tham dự và không gặp bất kỳ sự phản đối hay bảo lưu nào.',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & SGK Lịch sử 11'
      },
      {
        id: 'cd3-q9',
        difficulty: 'hard',
        question:
          'Lễ khao lề thế lính Hoàng Sa – di sản văn hóa phi vật thể quốc gia tưởng nhớ đội dân binh Hoàng Sa năm xưa – được người dân tổ chức hàng năm tại địa phương nào?',
        options: [
          'Đảo Lý Sơn (tỉnh Quảng Ngãi)',
          'Đảo Phú Quốc (tỉnh Kiên Giang)',
          'Đảo Cô Tô (tỉnh Quảng Ninh)',
          'Đảo Hòn Khoai (tỉnh Cà Mau)'
        ],
        correctIndex: 0,
        explanation:
          'Lễ khao lề thế lính Hoàng Sa được các tộc họ trên đảo Lý Sơn (Quảng Ngãi) duy trì qua hàng trăm năm vào tháng 3 âm lịch hằng năm để tri ân các hùng binh đội Hoàng Sa, và đã được Bộ Văn hóa, Thể thao và Du lịch công nhận là Di sản văn hóa phi vật thể quốc gia năm 2013.',
        source: 'Cục Di sản văn hóa – Bộ Văn hóa, Thể thao và Du lịch'
      },
      {
        id: 'cd3-q10',
        difficulty: 'hard',
        question:
          'Sau khi đất nước thống nhất (1975–1976), năm 1982 Hội đồng Bộ trưởng nước Cộng hòa Xã hội chủ nghĩa Việt Nam đã ban hành các quyết định hành chính quan trọng nào đối với Hoàng Sa và Trường Sa?',
        options: [
          'Thành lập huyện đảo Hoàng Sa (thuộc tỉnh Quảng Nam – Đà Nẵng) và huyện đảo Trường Sa (thuộc tỉnh Đồng Nai, sau chuyển về tỉnh Phú Khánh / Khánh Hòa)',
          'Sáp nhập cả hai quần đảo vào tỉnh Kiên Giang',
          'Chuyển cả hai quần đảo về trực thuộc tỉnh Quảng Ninh',
          'Chưa thành lập đơn vị hành chính cấp huyện cho hai quần đảo'
        ],
        correctIndex: 0,
        explanation:
          'Tháng 12/1982, Hội đồng Bộ trưởng ban hành Quyết định số 193-HĐBT thành lập huyện Trường Sa và Quyết định số 194-HĐBT thành lập huyện Hoàng Sa; sau đó Quốc hội khóa VII quyết nghị chuyển huyện Trường Sa về tỉnh Phú Khánh (nay là tỉnh Khánh Hòa).',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      }
    ]
  },
  {
    id: 'cd-4',
    code: 'Chuyên đề 04',
    title: 'Cơ sở lịch sử và pháp lý về biển đảo',
    shortDesc:
      'Nắm vững các thư tịch cổ Việt Nam, Châu bản, Mộc bản triều Nguyễn, bản đồ lịch sử và nguyên tắc chiếm hữu thực sự trong luật pháp quốc tế.',
    iconName: 'BookOpen',
    badge: '10 câu hỏi • Sử liệu & Pháp lý',
    image: '/assets/library/bai-04-chau-ban-trieu-nguyen.svg',
    summaryPoints: [
      'Các thư tịch cổ tiêu biểu: Toản tập Thiên Nam tứ chí lộ đồ thư (Đỗ Bá, thế kỷ XVII), Phủ biên tạp lục (Lê Quý Đôn, 1776), Đại Nam thực lục, Đại Nam nhất thống chí.',
      'Bản đồ Đại Nam nhất thống toàn đồ (khoảng 1838) vẽ rõ cả hai địa danh "Hoàng Sa" và "Vạn Lý Trường Sa" thuộc lãnh thổ Việt Nam.',
      'Việt Nam xác lập chủ quyền theo đúng nguyên tắc "chiếm hữu thực sự" (Effective Occupation): hòa bình, liên tục, công khai và dưới danh nghĩa nhà nước.'
    ],
    questions: [
      {
        id: 'cd4-q1',
        difficulty: 'easy',
        question:
          'Tác phẩm địa chí nổi tiếng nào của danh nhân Đỗ Bá (biên soạn vào thế kỷ XVII) là tư liệu cổ sớm nhất của Việt Nam ghi chép và vẽ bản đồ về "Bãi Cát Vàng" cùng hoạt động của đội Hoàng Sa?',
        options: [
          'Toản tập Thiên Nam tứ chí lộ đồ thư',
          'Dư địa chí của Nguyễn Trãi',
          'Bình Ngô đại cáo',
          'Lĩnh Nam chích quái'
        ],
        correctIndex: 0,
        explanation:
          'Trong "Toản tập Thiên Nam tứ chí lộ đồ thư" (soạn năm 1686), Đỗ Bá đã vẽ bản đồ vùng biển phủ Quảng Nghĩa có địa danh "Bãi Cát Vàng" và chú giải chi tiết về chiều dài, chiều rộng cũng như việc chúa Nguyễn lập đội Hoàng Sa ra thu lượm hàng hóa mỗi năm.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd4-q2',
        difficulty: 'easy',
        question:
          'Tác phẩm "Phủ biên tạp lục" (biên soạn năm 1776) – cuốn bách khoa thư ghi chép chi tiết về địa lý, sản vật của Hoàng Sa và hoạt động của đội Hoàng Sa, đội Bắc Hải – là của học giả nào?',
        options: [
          'Lê Quý Đôn',
          'Phan Huy Chú',
          'Ngô Sĩ Liên',
          'Trịnh Hoài Đức'
        ],
        correctIndex: 0,
        explanation:
          'Năm 1776, khi giữ chức Hiệp trấn Thuận Hóa, nhà bác học Lê Quý Đôn đã biên soạn bộ "Phủ biên tạp lục", trong đó quyển 2 ghi chép hết sức tỉ mỉ về đảo Đại Trường Sa (Hoàng Sa, Trường Sa) và quy chế hoạt động của đội Hoàng Sa, đội Bắc Hải.',
        source: 'Lê Quý Đôn – Phủ biên tạp lục (1776) & SGK Lịch sử 11'
      },
      {
        id: 'cd4-q3',
        difficulty: 'easy',
        question:
          'Trên tấm bản đồ cổ "Đại Nam nhất thống toàn đồ" được vẽ dưới triều Nguyễn (khoảng năm 1838), hai quần đảo Hoàng Sa và Trường Sa được ghi chú bằng hai tên gọi nào nằm trong vùng biển Việt Nam?',
        options: [
          '"Hoàng Sa" và "Vạn Lý Trường Sa"',
          '"Đông Sa" và "Tây Sa"',
          '"Bắc Đảo" và "Nam Đảo"',
          '"Châu Đảo" và "Ngọc Đảo"'
        ],
        correctIndex: 0,
        explanation:
          'Trên bản đồ "Đại Nam nhất thống toàn đồ" (triều vua Minh Mạng, khoảng năm 1838), ngoài khơi miền Trung Việt Nam thể hiện rõ hai dải đảo ghi chữ Hán là "Hoàng Sa" và "Vạn Lý Trường Sa" nằm trong cương vực lãnh thổ Đại Nam.',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
      },
      {
        id: 'cd4-q4',
        difficulty: 'medium',
        question:
          '"Châu bản triều Nguyễn" – khối tài liệu hành chính gốc lưu giữ hàng chục văn bản có bút phê bằng mực son của các hoàng đế nhà Nguyễn về việc cử thủy quân ra Hoàng Sa – hiện đang được bảo quản tại cơ quan nào?',
        options: [
          'Trung tâm Lưu trữ Quốc gia I (Hà Nội) – Cục Văn thư và Lưu trữ nhà nước',
          'Bảo tàng Mỹ thuật TP. Hồ Chí Minh',
          'Thư viện Quốc hội Hoa Kỳ',
          'Viện Nghiên cứu Hán Nôm Huế'
        ],
        correctIndex: 0,
        explanation:
          'Châu bản triều Nguyễn hiện được bảo quản nghiêm ngặt tại Trung tâm Lưu trữ Quốc gia I (thuộc Cục Văn thư và Lưu trữ nhà nước, Bộ Nội vụ) tại Hà Nội và đã được UNESCO công nhận là Di sản tư liệu thuộc Chương trình Ký ức thế giới khu vực châu Á - Thái Bình Dương năm 2014.',
        source: 'Trung tâm Lưu trữ Quốc gia I – Cục Văn thư và Lưu trữ nhà nước'
      },
      {
        id: 'cd4-q5',
        difficulty: 'medium',
        question:
          'Bộ bách khoa thư đầu tiên của Việt Nam mang tên "Lịch triều hiến chương loại chí" (1821) có ghi chép về Hoàng Sa là công trình của nhà sử học nào?',
        options: [
          'Phan Huy Chú',
          'Lê Văn Hưu',
          'Phan Thanh Giản',
          'Đặng Xuân Bảng'
        ],
        correctIndex: 0,
        explanation:
          'Trong phần "Dư địa chí" của bộ "Lịch triều hiến chương loại chí" (trình vua Minh Mạng năm 1821), học giả Phan Huy Chú đã chép rõ về địa danh Hoàng Sa thuộc phủ Tư Nghĩa (Quảng Ngãi) và hoạt động của đội Hoàng Sa.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd4-q6',
        difficulty: 'medium',
        question:
          'Trong luật pháp quốc tế về thụ đắc lãnh thổ, nguyên tắc pháp lý cốt lõi mà Việt Nam đã đáp ứng đầy đủ khi xác lập và thực thi chủ quyền đối với Hoàng Sa, Trường Sa từ thế kỷ XVII là nguyên tắc nào?',
        options: [
          'Nguyên tắc chiếm hữu thực sự (Effective Occupation) đối với lãnh thổ vô chủ',
          'Nguyên tắc kế cận địa lý đơn thuần không cần quản lý nhà nước',
          'Nguyên tắc mua bán chuyển nhượng lãnh thổ bằng hợp đồng thương mại',
          'Nguyên tắc phát hiện bằng mắt thường từ xa mà không đặt chân lên đảo'
        ],
        correctIndex: 0,
        explanation:
          'Theo luật pháp và thực tiễn án lệ quốc tế (như Phán quyết đảo Palmas năm 1928, đảo Clipperton năm 1931), việc xác lập chủ quyền hợp pháp dựa trên nguyên tắc chiếm hữu thực sự (Effective Occupation): nhà nước thực thi quyền lực đối với vùng lãnh thổ vô chủ một cách hòa bình, liên tục và rõ ràng.',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
      },
      {
        id: 'cd4-q7',
        difficulty: 'medium',
        question:
          'Tập bản đồ "An Nam đại quốc họa đồ" (xuất bản năm 1838) ghi nhận rành mạch cụm từ Latinh "Paracel seu Cát Vàng" thuộc lãnh thổ An Nam là tác phẩm của tác giả phương Tây nào?',
        options: [
          'Giám mục Jean-Louis Taberd',
          'Nhà hàng hải Ferdinand Magellan',
          'Nhà địa lý học Claudius Ptolemy',
          'Nhà thám hiểm Vasco da Gama'
        ],
        correctIndex: 0,
        explanation:
          'Năm 1838, Giám mục Jean-Louis Taberd xuất bản tấm bản đồ "An Nam đại quốc họa đồ" (Tabula Geographica Imperii Anamitici), trên đó tại khu vực quần đảo Hoàng Sa ghi rõ dòng chữ "Paracel seu Cát Vàng" (Paracel tức là Cát Vàng) thuộc vùng biển An Nam.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd4-q8',
        difficulty: 'hard',
        question:
          'Cuốn "Hoàng Việt địa dư chí" (xuất bản năm Minh Mạng thứ 14 – 1833) có ghi chép về Hoàng Sa là tác phẩm của ai?',
        options: [
          'Phan Huy Chú',
          'Nguyễn Trường Tộ',
          'Cao Bá Quát',
          'Nguyễn Công Trứ'
        ],
        correctIndex: 0,
        explanation:
          'Cuốn "Hoàng Việt địa dư chí" của Phan Huy Chú được khắc in năm 1833 là một trong những bộ sách địa lý chính thống thời Nguyễn khẳng định Hoàng Sa thuộc địa phận Quảng Ngãi của Việt Nam.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd4-q9',
        difficulty: 'hard',
        question:
          'Tập "기 (Atlas) Thế giới" (Atlas Universel) xuất bản năm 1827 tại Brussels (Bỉ), trong đó tờ bản đồ châu Á số 48 vẽ quần đảo Paracels nằm trong đường ranh giới vùng biển Đàng Trong (Empire d’Annam), do nhà địa lý nào biên soạn?',
        options: [
          'Philippe Vandermaelen',
          'Gerardus Mercator',
          'Abraham Ortelius',
          'James Cook'
        ],
        correctIndex: 0,
        explanation:
          'Nhà địa lý học hoàng gia Bỉ Philippe Vandermaelen đã biên soạn bộ "Atlas Universel" (1827), trong đó tờ bản đồ "Partie de la Cochinchine" (Một phần Đàng Trong) vẽ chi tiết quần đảo Paracels (Hoàng Sa) thuộc Đế chế An Nam.',
        source: 'Bộ Thông tin và Truyền thông – Triển lãm Bản đồ và Tư liệu Hoàng Sa, Trường Sa'
      },
      {
        id: 'cd4-q10',
        difficulty: 'hard',
        question:
          'Theo lập trường nhất quán được nêu trong Luật Biển Việt Nam năm 2012 và Sách trắng Quốc phòng Việt Nam, Việt Nam chủ trương giải quyết các tranh chấp ở Biển Đông bằng phương thức nào?',
        options: [
          'Bằng các biện pháp hòa bình trên cơ sở luật pháp quốc tế, đặc biệt là Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982)',
          'Bằng việc sử dụng vũ lực hoặc đe dọa sử dụng vũ lực',
          'Đóng cửa toàn bộ các tuyến hàng hải quốc tế qua Biển Đông',
          'Từ bỏ quyền tài phán tại vùng đặc quyền kinh tế'
        ],
        correctIndex: 0,
        explanation:
          'Khoản 3 Điều 4 Luật Biển Việt Nam năm 2012 quy định rõ: Nhà nước giải quyết các tranh chấp liên quan đến biển, đảo với các nước khác bằng các biện pháp hòa bình, phù hợp với Công ước của Liên Hợp Quốc về Luật Biển năm 1982, pháp luật và thực tiễn quốc tế.',
        source: 'Điều 4 Luật Biển Việt Nam năm 2012'
      }
    ]
  }
]
