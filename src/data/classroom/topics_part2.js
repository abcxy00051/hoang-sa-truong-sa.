/**
 * DỮ LIỆU CHUYÊN ĐỀ HỌC TẬP PHẦN 2 (CHUYÊN ĐỀ 5 -> CHUYÊN ĐỀ 8)
 * Mỗi chuyên đề gồm đúng 10 câu hỏi trắc nghiệm 4 lựa chọn (A, B, C, D)
 * có phân loại cấp độ (easy, medium, hard), giải thích chi tiết và nguồn chính thống.
 */

export const CLASSROOM_TOPICS_PART2 = [
  {
    id: 'cd-5',
    code: 'Chuyên đề 05',
    title: 'Công ước Liên Hợp Quốc về Luật Biển năm 1982',
    shortDesc:
      'Hệ thống hóa quy chế pháp lý của 5 vùng biển (Nội thủy, Lãnh hải, Tiếp giáp lãnh hải, Đặc quyền kinh tế, Thềm lục địa) theo UNCLOS 1982 và Luật Biển Việt Nam 2012.',
    iconName: 'Scale',
    badge: '10 câu hỏi • UNCLOS 1982',
    image: '/assets/library/topic-phap-luat.svg',
    summaryPoints: [
      'UNCLOS 1982 được ký kết ngày 10/12/1982 tại Montego Bay (Jamaica), có hiệu lực từ ngày 16/11/1994.',
      'Quốc hội Việt Nam phê chuẩn UNCLOS 1982 ngày 23/6/1994 và thông qua Luật Biển Việt Nam ngày 21/6/2012.',
      'Phân biệt rõ: Chủ quyền hoàn toàn/đầy đủ (Nội thủy, Lãnh hải) và Quyền chủ quyền, Quyền tài phán (Vùng đặc quyền kinh tế 200 hải lý, Thềm lục địa).'
    ],
    questions: [
      {
        id: 'cd5-q1',
        difficulty: 'easy',
        question:
          'Công ước của Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982) được ký kết vào ngày 10/12/1982 tại địa điểm nào?',
        options: [
          'Montego Bay (Jamaica)',
          'Geneva (Thụy Sĩ)',
          'Paris (Pháp)',
          'Tokyo (Nhật Bản)'
        ],
        correctIndex: 0,
        explanation:
          'Sau 9 năm đàm phán (1973–1982), UNCLOS 1982 được mở ký ngày 10/12/1982 tại Montego Bay (Jamaica) và được mệnh danh là "Hiến pháp về đại dương" của thế giới.',
        source: 'Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982)'
      },
      {
        id: 'cd5-q2',
        difficulty: 'easy',
        question:
          'Theo UNCLOS 1982 và Điều 11 Luật Biển Việt Nam năm 2012, Lãnh hải của Việt Nam có chiều rộng là bao nhiêu hải lý tính từ đường cơ sở ra phía biển?',
        options: [
          '12 hải lý',
          '24 hải lý',
          '200 hải lý',
          '350 hải lý'
        ],
        correctIndex: 0,
        explanation:
          'Điều 11 Luật Biển Việt Nam năm 2012 (phù hợp với Điều 3 UNCLOS 1982) quy định: Lãnh hải là vùng biển có chiều rộng 12 hải lý tính từ đường cơ sở ra phía biển. Ranh giới ngoài của lãnh hải là biên giới quốc gia trên biển của Việt Nam.',
        source: 'Điều 11 Luật Biển Việt Nam năm 2012 & Điều 3 UNCLOS 1982'
      },
      {
        id: 'cd5-q3',
        difficulty: 'easy',
        question:
          'Theo quy định của UNCLOS 1982 và Luật Biển Việt Nam năm 2012, vùng biển nào nằm ở phía trong đường cơ sở và tiếp giáp với bờ biển, nơi Nhà nước thực hiện chủ quyền hoàn toàn, tuyệt đối và đầy đủ như trên lãnh thổ đất liền?',
        options: [
          'Nội thủy',
          'Vùng tiếp giáp lãnh hải',
          'Vùng đặc quyền kinh tế',
          'Biển cả (Công hải)'
        ],
        correctIndex: 0,
        explanation:
          'Theo Điều 9 và Điều 10 Luật Biển Việt Nam năm 2012: Nội thủy là vùng nước tiếp giáp với bờ biển, ở phía trong đường cơ sở và là bộ phận lãnh thổ của Việt Nam; Nhà nước thực hiện chủ quyền hoàn toàn, tuyệt đối và đầy đủ đối với nội thủy như trên lãnh thổ đất liền.',
        source: 'Điều 9, Điều 10 Luật Biển Việt Nam năm 2012'
      },
      {
        id: 'cd5-q4',
        difficulty: 'medium',
        question:
          'Theo Điều 15 Luật Biển Việt Nam năm 2012 và Điều 57 UNCLOS 1982, Vùng đặc quyền kinh tế (EEZ) có chiều rộng bao nhiêu hải lý tính từ đường cơ sở?',
        options: [
          '200 hải lý tính từ đường cơ sở',
          '12 hải lý tính từ đường cơ sở',
          '24 hải lý tính từ đường cơ sở',
          '500 hải lý tính từ đường cơ sở'
        ],
        correctIndex: 0,
        explanation:
          'Vùng đặc quyền kinh tế là vùng biển tiếp liền và nằm ngoài lãnh hải Việt Nam, hợp với lãnh hải thành một vùng biển có chiều rộng 200 hải lý tính từ đường cơ sở.',
        source: 'Điều 15 Luật Biển Việt Nam năm 2012 & Điều 57 UNCLOS 1982'
      },
      {
        id: 'cd5-q5',
        difficulty: 'medium',
        question:
          'Vùng tiếp giáp lãnh hải là vùng biển tiếp liền và nằm ngoài lãnh hải, có chiều rộng bao nhiêu hải lý tính từ ranh giới ngoài của lãnh hải (tức hợp với lãnh hải thành 24 hải lý tính từ đường cơ sở)?',
        options: [
          '12 hải lý tính từ ranh giới ngoài của lãnh hải',
          '36 hải lý tính từ ranh giới ngoài của lãnh hải',
          '188 hải lý tính từ ranh giới ngoài của lãnh hải',
          '100 hải lý tính từ ranh giới ngoài của lãnh hải'
        ],
        correctIndex: 0,
        explanation:
          'Theo Điều 13 Luật Biển Việt Nam năm 2012: Vùng tiếp giáp lãnh hải là vùng biển tiếp liền và nằm ngoài lãnh hải Việt Nam, có chiều rộng 12 hải lý tính từ ranh giới ngoài của lãnh hải (tổng cộng 24 hải lý tính từ đường cơ sở).',
        source: 'Điều 13 Luật Biển Việt Nam năm 2012 & Điều 33 UNCLOS 1982'
      },
      {
        id: 'cd5-q6',
        difficulty: 'medium',
        question:
          'Trong Lãnh hải của quốc gia ven biển, tàu thuyền của tất cả các quốc gia khác được hưởng quyền pháp lý nào theo UNCLOS 1982 (với điều kiện không gây phương hại đến hòa bình, trật tự, an ninh)?',
        options: [
          'Quyền đi qua không gây hại (Innocent Passage)',
          'Quyền tự do đánh bắt hải sản không cần xin phép',
          'Quyền tự do diễn tập quân sự bắn đạn thật',
          'Quyền tự do thăm dò và khai thác dầu khí dưới đáy biển'
        ],
        correctIndex: 0,
        explanation:
          'Trong lãnh hải, Nhà nước ven biển có chủ quyền đầy đủ và toàn vẹn, nhưng theo Điều 17 UNCLOS 1982 và Điều 12 Luật Biển Việt Nam 2012, tàu thuyền nước ngoài được hưởng quyền đi qua không gây hại (Innocent Passage). Đối với tàu ngầm trong lãnh hải thì bắt buộc phải đi nổi và treo cờ quốc tịch.',
        source: 'Điều 12, Điều 23 Luật Biển Việt Nam 2012 & Điều 17 UNCLOS 1982'
      },
      {
        id: 'cd5-q7',
        difficulty: 'medium',
        question:
          'Tại Vùng đặc quyền kinh tế (EEZ) và Thềm lục địa, quốc gia ven biển thực hiện các quyền pháp lý nào sau đây theo UNCLOS 1982?',
        options: [
          'Quyền chủ quyền (về thăm dò, khai thác, bảo tồn tài nguyên) và Quyền tài phán (về đảo nhân tạo, nghiên cứu khoa học biển, bảo vệ môi trường biển)',
          'Chủ quyền tuyệt đối như vùng nội thủy, cấm mọi tàu thuyền và máy bay quốc tế đi qua',
          'Không có bất kỳ quyền lợi kinh tế hay tài phán nào',
          'Chỉ có quyền thu phí hàng hải đối với mọi tàu buôn quốc tế đi ngang qua'
        ],
        correctIndex: 0,
        explanation:
          'Khác với Nội thủy và Lãnh hải (nơi quốc gia có chủ quyền lãnh thổ), tại Vùng đặc quyền kinh tế và Thềm lục địa, quốc gia ven biển có Quyền chủ quyền (Sovereign Rights) đối với tài nguyên thiên nhiên và Quyền tài phán (Jurisdiction) đối với công trình nhân tạo, nghiên cứu khoa học và bảo vệ môi trường biển; trong khi các nước khác vẫn được hưởng quyền tự do hàng hải, hàng không và đặt dây cáp, ống dẫn ngầm hợp pháp.',
        source: 'Điều 16, Điều 18 Luật Biển Việt Nam 2012 & Điều 56, 77 UNCLOS 1982'
      },
      {
        id: 'cd5-q8',
        difficulty: 'hard',
        question:
          'Quốc hội nước Cộng hòa Xã hội chủ nghĩa Việt Nam khóa IX đã ban hành Nghị quyết phê chuẩn Công ước Liên Hợp Quốc về Luật Biển năm 1982 vào ngày tháng năm nào?',
        options: [
          'Ngày 23/6/1994',
          'Ngày 02/9/1945',
          'Ngày 30/4/1975',
          'Ngày 01/01/2020'
        ],
        correctIndex: 0,
        explanation:
          'Ngày 23/6/1994, Quốc hội Việt Nam khóa IX, kỳ họp thứ 5 đã thông qua Nghị quyết phê chuẩn UNCLOS 1982, trước khi Công ước chính thức có hiệu lực trên toàn cầu vào ngày 16/11/1994.',
        source: 'Nghị quyết của Quốc hội khóa IX ngày 23/6/1994'
      },
      {
        id: 'cd5-q9',
        difficulty: 'hard',
        question:
          'Theo khoản 3 Điều 121 của UNCLOS 1982 về "Chế độ các đảo", những "đá" (rocks) không thích hợp cho con người đến ở hoặc cho một đời sống kinh tế riêng thì có quy chế vùng biển như thế nào?',
        options: [
          'Không có vùng đặc quyền kinh tế và không có thềm lục địa (chỉ có thể có lãnh hải tối đa 12 hải lý)',
          'Có vùng đặc quyền kinh tế rộng 500 hải lý',
          'Có thềm lục địa mở rộng 350 hải lý',
          'Được hưởng vùng nội thủy rộng 200 hải lý'
        ],
        correctIndex: 0,
        explanation:
          'Khoản 3 Điều 121 UNCLOS 1982 quy định rõ: "Những đá nào không thích hợp cho con người đến ở hoặc cho một đời sống kinh tế riêng, thì không có vùng đặc quyền về kinh tế và thềm lục địa."',
        source: 'Khoản 3 Điều 121 Công ước Liên Hợp Quốc về Luật Biển năm 1982'
      },
      {
        id: 'cd5-q10',
        difficulty: 'hard',
        question:
          'Luật Biển Việt Nam gồm 7 chương, 55 điều được Quốc hội khóa XIII thông qua ngày 21/6/2012 và chính thức có hiệu lực thi hành từ thời điểm nào?',
        options: [
          'Từ ngày 01/01/2013',
          'Từ ngày 01/01/2000',
          'Từ ngày 15/8/1995',
          'Từ ngày 01/7/2022'
        ],
        correctIndex: 0,
        explanation:
          'Luật Biển Việt Nam (Luật số 18/2012/QH13) được Quốc hội khóa XIII thông qua ngày 21/6/2012 và có hiệu lực thi hành kể từ ngày 01/01/2013.',
        source: 'Luật Biển Việt Nam số 18/2012/QH13'
      }
    ]
  },
  {
    id: 'cd-6',
    code: 'Chuyên đề 06',
    title: 'Vai trò của biển đảo đối với kinh tế, quốc phòng và an ninh',
    shortDesc:
      'Phân tích tầm quan trọng chiến lược của các ngành kinh tế biển mũi nhọn, giao thông hàng hải và thế trận quốc phòng – an ninh trên biển.',
    iconName: 'ShieldAlert',
    badge: '10 câu hỏi • Kinh tế & Quốc phòng',
    image: '/assets/ecosystem/phong-hoc-tuong-tac.svg',
    summaryPoints: [
      'Nghị quyết số 36-NQ/TW (năm 2018) xác định Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045.',
      '6 ngành kinh tế biển trọng điểm: Du lịch & dịch vụ biển; Kinh tế hàng hải; Khai thác dầu khí & tài nguyên khoáng sản biển; Nuôi trồng & khai thác hải sản; Công nghiệp ven biển; Năng lượng tái tạo & các ngành kinh tế biển mới.',
      'Hệ thống đảo tiền tiêu và quần đảo Hoàng Sa, Trường Sa tạo thành lá chắn phòng thủ chiến lược bảo vệ Tổ quốc từ hướng biển.'
    ],
    questions: [
      {
        id: 'cd6-q1',
        difficulty: 'easy',
        question:
          'Bốn ngư trường trọng điểm lớn nhất của nước ta được xác định trong chương trình Địa lý THPT bao gồm:',
        options: [
          'Hải Phòng – Quảng Ninh; Ninh Thuận – Bình Thuận – Bà Rịa – Vũng Tàu; Cà Mau – Kiên Giang; Quần đảo Hoàng Sa – Quần đảo Trường Sa',
          'Thanh Hóa – Nghệ An; Hà Tĩnh – Quảng Bình; Huế – Đà Nẵng; Quảng Nam – Quảng Ngãi',
          'Vịnh Hạ Long; Hồ Ba Bể; Hồ Dầu Tiếng; Hồ Trị An',
          'Sông Hồng; Sông Đà; Sông Mã; Sông Cửu Long'
        ],
        correctIndex: 0,
        explanation:
          'Theo SGK Địa lý 12, nước ta có 4 ngư trường trọng điểm: (1) Ngư trường Hải Phòng – Quảng Ninh (Vịnh Bắc Bộ), (2) Ngư trường Ninh Thuận – Bình Thuận – Bà Rịa – Vũng Tàu, (3) Ngư trường Cà Mau – Kiên Giang, và (4) Ngư trường quần đảo Hoàng Sa – quần đảo Trường Sa.',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd6-q2',
        difficulty: 'easy',
        question:
          'Khoáng sản có trữ lượng và giá trị kinh tế hàng đầu đang được khai thác tại vùng thềm lục địa Việt Nam (đặc biệt là bể Cửu Long, bể Nam Côn Sơn) là gì?',
        options: [
          'Dầu mỏ và khí tự nhiên (dầu khí)',
          'Than bùn đồng bằng',
          'Quặng bô-xít',
          'Đá quý ruby'
        ],
        correctIndex: 0,
        explanation:
          'Thềm lục địa Việt Nam có nhiều bể trầm tích chứa dầu mỏ và khí tự nhiên lớn như bể Sông Hồng, bể Phú Khánh, bể Cửu Long, bể Nam Côn Sơn, bể Mã Lai – Thổ Chu, bể Tư Chính – Vũng Mây.',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd6-q3',
        difficulty: 'easy',
        question:
          'Vùng ven biển khu vực nào của nước ta có điều kiện tự nhiên thuận lợi nhất (nhiều nắng, nhiệt độ cao, ít sông lớn đổ ra biển, độ mặn cao) để sản xuất muối công nghiệp (như Cà Ná, Sa Huỳnh)?',
        options: [
          'Duyên hải Nam Trung Bộ',
          'Đồng bằng sông Hồng',
          'Trung du và miền núi Bắc Bộ',
          'Tây Nguyên'
        ],
        correctIndex: 0,
        explanation:
          'Vùng biển Duyên hải Nam Trung Bộ (Quảng Ngãi, Ninh Thuận, Bình Thuận...) có số giờ nắng cao, ít mưa, ít cửa sông lớn đổ ra nên nước biển có độ mặn cao, nổi tiếng với các cánh đồng muối lớn như Sa Huỳnh (Quảng Ngãi), Cà Ná (Ninh Thuận).',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd6-q4',
        difficulty: 'medium',
        question:
          'Di sản thiên nhiên thế giới nào tại vùng biển tỉnh Quảng Ninh đã nhiều lần được UNESCO vinh danh nhờ giá trị ngoại hạng về cảnh quan thẩm mỹ và địa chất – địa mạo?',
        options: [
          'Vịnh Hạ Long (và quần đảo Cát Bà mở rộng)',
          'Vườn quốc gia Phong Nha – Kẻ Bàng',
          'Cao nguyên đá Đồng Văn',
          'Quần thể danh thắng Tràng An'
        ],
        correctIndex: 0,
        explanation:
          'Vịnh Hạ Long (Quảng Ninh) được UNESCO công nhận là Di sản thiên nhiên thế giới năm 1994 và năm 2000; đến tháng 9/2023 được mở rộng phạm vi di sản thành Vịnh Hạ Long – Quần đảo Cát Bà (Quảng Ninh – Hải Phòng).',
        source: 'Ủy ban Quốc gia UNESCO Việt Nam'
      },
      {
        id: 'cd6-q5',
        difficulty: 'medium',
        question:
          'Nghị quyết số 36-NQ/TW ngày 22/10/2018 của Ban Chấp hành Trung ương Đảng khóa XII về "Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045" đã xác định thứ tự ưu tiên phát triển mấy ngành kinh tế biển chủ đạo?',
        options: [
          '6 ngành kinh tế biển chủ đạo',
          '2 ngành kinh tế biển',
          '15 ngành kinh tế biển',
          'Chỉ 1 ngành duy nhất là đánh bắt cá'
        ],
        correctIndex: 0,
        explanation:
          'Nghị quyết số 36-NQ/TW xác định 6 ngành kinh tế biển theo thứ tự ưu tiên: (1) Du lịch và dịch vụ biển; (2) Kinh tế hàng hải; (3) Khai thác dầu khí và các tài nguyên khoáng sản biển khác; (4) Nuôi trồng và khai thác hải sản; (5) Công nghiệp ven biển; (6) Năng lượng tái tạo và các ngành kinh tế biển mới.',
        source: 'Nghị quyết số 36-NQ/TW ngày 22/10/2018 của BCH Trung ương Đảng khóa XII'
      },
      {
        id: 'cd6-q6',
        difficulty: 'medium',
        question:
          'Về mặt quốc phòng – an ninh, hệ thống các đảo ven bờ và các quần đảo xa bờ (Hoàng Sa, Trường Sa) có vai trò chiến lược như thế nào?',
        options: [
          'Là hệ thống tiền tiêu, tuyến phòng thủ từ xa bảo vệ sườn phía Đông của đất nước và kiểm soát các tuyến giao thông biển, hàng không huyết mạch',
          'Chỉ có giá trị du lịch nghỉ dưỡng, không liên quan đến quốc phòng',
          'Chỉ dùng làm nơi neo đậu tàu thuyền khi mùa khô',
          'Không có ảnh hưởng đến an ninh vùng trời và vùng đất liền'
        ],
        correctIndex: 0,
        explanation:
          'Với chiều dài bờ biển 3.260 km chạy dọc đất nước, vùng biển và hệ thống các đảo tiền tiêu cùng quần đảo Hoàng Sa, Trường Sa tạo thành lá chắn phòng thủ không gian biển – trời chiến lược, bảo vệ chủ quyền, an ninh quốc gia ngay từ hướng biển.',
        source: 'Sách giáo khoa Giáo dục Quốc phòng và An ninh THPT'
      },
      {
        id: 'cd6-q7',
        difficulty: 'medium',
        question:
          'Trong phát triển nghề cá hiện đại của Việt Nam, vì sao Nhà nước chủ trương đẩy mạnh đánh bắt xa bờ gắn với bảo vệ ngư trường thay vì chỉ tập trung đánh bắt ven bờ?',
        options: [
          'Để giảm áp lực cạn kiệt nguồn lợi thủy sản ven bờ, nâng cao hiệu quả kinh tế và góp phần hiện diện dân sự khẳng định chủ quyền trên vùng biển thuộc quyền chủ quyền của Tổ quốc',
          'Vì vùng biển ven bờ hoàn toàn không có sinh vật biển',
          'Vì đánh bắt xa bờ không cần trang bị tàu thuyền hay thiết bị liên lạc',
          'Để thay thế hoàn toàn ngành nuôi trồng thủy sản'
        ],
        correctIndex: 0,
        explanation:
          'Đẩy mạnh khai thác xa bờ vừa giúp bảo vệ và phục hồi nguồn lợi thủy sản ven bờ đang bị khai thác quá mức, vừa mang lại sản lượng hải sản có giá trị kinh tế cao và khẳng định sự hiện diện thường xuyên của ngư dân Việt Nam trên các vùng biển của Tổ quốc.',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd6-q8',
        difficulty: 'hard',
        question:
          'Lực lượng chuyên trách của Nhà nước Việt Nam thực hiện chức năng quản lý về an ninh, trật tự, an toàn và bảo đảm việc chấp hành pháp luật Việt Nam cùng điều ước quốc tế trên các vùng biển và thềm lục địa là lực lượng nào?',
        options: [
          'Cảnh sát biển Việt Nam (phối hợp cùng Hải quân nhân dân, Bộ đội Biên phòng và Kiểm ngư)',
          'Lực lượng Kiểm lâm vùng núi cao',
          'Cảnh sát giao thông đường sắt',
          'Thanh tra xây dựng đô thị nội địa'
        ],
        correctIndex: 0,
        explanation:
          'Theo Luật Cảnh sát biển Việt Nam năm 2018, Cảnh sát biển Việt Nam là lực lượng vũ trang nhân dân, lực lượng chuyên trách của Nhà nước, làm nòng cốt thực thi pháp luật và bảo vệ an ninh quốc gia, trật tự, an toàn trên biển (phối hợp chặt chẽ với Hải quân, Biên phòng, Kiểm ngư).',
        source: 'Luật Cảnh sát biển Việt Nam năm 2018'
      },
      {
        id: 'cd6-q9',
        difficulty: 'hard',
        question:
          'Nhà giàn DK1 – biểu tượng kiên cường của chủ quyền và trạm dịch vụ kinh tế – khoa học – kỹ thuật trên biển của Việt Nam – được xây dựng tại khu vực nào?',
        options: [
          'Trên vùng thềm lục địa phía Nam của Tổ quốc (các bãi cạn Tư Chính, Phúc Nguyên, Phúc Tần, Huyền Trân, Quế Đường, Ba Kè, Cà Mau)',
          'Tại khu vực Vịnh Bắc Bộ (Quảng Ninh)',
          'Tại vùng cửa sông Hồng (Thái Bình)',
          'Trên hồ Thủy điện Hòa Bình'
        ],
        correctIndex: 0,
        explanation:
          'Từ năm 1989, cụm trạm Dịch vụ Kinh tế – Khoa học – Kỹ thuật (gọi tắt là Nhà giàn DK1) đã được thiết lập trên các bãi đá ngầm thuộc vùng thềm lục địa phía Nam của Tổ quốc, đóng vai trò cột mốc chủ quyền, nghiên cứu khí tượng hải văn và điểm tựa cho ngư dân vươn khơi.',
        source: 'Bộ Tư lệnh Vùng 2 Hải quân – Quân chủng Hải quân'
      },
      {
        id: 'cd6-q10',
        difficulty: 'hard',
        question:
          'Các quy định chống khai thác hải sản bất hợp pháp, không báo cáo và không theo quy định của quốc tế và Việt Nam thường được viết tắt bằng thuật ngữ tiếng Anh nào?',
        options: [
          'IUU (Illegal, Unreported and Unregulated Fishing)',
          'WTO (World Trade Organization)',
          'UNESCO',
          'UNICEF'
        ],
        correctIndex: 0,
        explanation:
          'IUU (Illegal, Unreported and Unregulated Fishing) là hoạt động khai thác hải sản bất hợp pháp, không báo cáo và không theo quy định. Việc tuân thủ chống khai thác IUU giúp bảo vệ bền vững nguồn lợi thủy sản và uy tín xuất khẩu thủy sản của Việt Nam.',
        source: 'Luật Thủy sản năm 2017 & Bộ Nông nghiệp và Phát triển nông thôn'
      }
    ]
  },
  {
    id: 'cd-7',
    code: 'Chuyên đề 07',
    title: 'Bảo vệ tài nguyên và môi trường biển',
    shortDesc:
      'Nhận diện các hệ sinh thái biển tiêu biểu (rạn san hô, thảm cỏ biển, rừng ngập mặn), nguy cơ ô nhiễm rác thải nhựa và giải pháp bảo tồn bền vững.',
    iconName: 'Layers',
    badge: '10 câu hỏi • Sinh thái & Môi trường',
    image: '/assets/library/topic-da-phuong-tien.svg',
    summaryPoints: [
      'Ba hệ sinh thái biển – ven biển quan trọng bậc nhất: Rừng ngập mặn, Rạn san hô và Thảm cỏ biển.',
      'Rừng ngập mặn Việt Nam phát triển mạnh nhất ở vùng ven biển Nam Bộ (đặc biệt là Mũi Cà Mau, Cần Giờ), giúp chắn sóng, chống xói lở và hấp thụ carbon xanh (Blue Carbon).',
      'Giảm thiểu rác thải nhựa đại dương, ngăn chặn khai thác hủy diệt và ứng phó biến đổi khí hậu là nhiệm vụ cấp bách.'
    ],
    questions: [
      {
        id: 'cd7-q1',
        difficulty: 'easy',
        question:
          'Ba hệ sinh thái tự nhiên tiêu biểu, có giá trị đa dạng sinh học cao nhất ở vùng biển và ven biển Việt Nam là:',
        options: [
          'Hệ sinh thái rừng ngập mặn, hệ sinh thái rạn san hô và hệ sinh thái thảm cỏ biển',
          'Hệ sinh thái thảo nguyên ôn đới, hệ sinh thái rừng lá kim và hệ sinh thái sa mạc',
          'Hệ sinh thái đài nguyên băng giá và rừng thông núi cao',
          'Hệ sinh thái rừng mưa Amazon và thảo nguyên Savan'
        ],
        correctIndex: 0,
        explanation:
          'Vùng biển và đới bờ Việt Nam nổi bật với 3 hệ sinh thái nhiệt đới có năng suất sinh học và đa dạng sinh học rất cao là: rừng ngập mặn ven biển, rạn san hô và thảm cỏ biển.',
        source: 'Sách giáo khoa Địa lý 12 & Bộ Tài nguyên và Môi trường'
      },
      {
        id: 'cd7-q2',
        difficulty: 'easy',
        question:
          'Vùng nào ở nước ta có diện tích rừng ngập mặn tự nhiên lớn nhất cả nước?',
        options: [
          'Vùng ven biển Nam Bộ (đặc biệt là bán đảo Cà Mau và Cần Giờ)',
          'Vùng núi Tây Bắc',
          'Vùng Tây Nguyên',
          'Vùng trung du Bắc Bộ'
        ],
        correctIndex: 0,
        explanation:
          'Nam Bộ (đặc biệt là tỉnh Cà Mau và Khu dự trữ sinh quyển rừng ngập mặn Cần Giờ – TP. Hồ Chí Minh) là nơi có diện tích rừng ngập mặn lớn nhất Việt Nam và đứng thứ hai thế giới (sau rừng ngập mặn cửa sông Amazon).',
        source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
      },
      {
        id: 'cd7-q3',
        difficulty: 'easy',
        question:
          'Loại chất thải rắn nhân tạo nào hiện đang là mối đe dọa ô nhiễm lâu dài nhất đối với đại dương và sinh vật biển do phải mất hàng trăm năm mới phân hủy?',
        options: [
          'Rác thải nhựa dùng một lần (túi ni-lông, chai nhựa, lưới đánh cá bỏ rơi) và hạt vi nhựa',
          'Lá cây khô tự nhiên rụng xuống biển',
          'Vỏ sò và vỏ ốc tự nhiên',
          'Cát biển và sỏi tự nhiên'
        ],
        correctIndex: 0,
        explanation:
          'Rác thải nhựa đại dương (bao gồm túi ni-lông, đồ nhựa dùng một lần, ngư cụ bị thất lạc) tồn tại hàng trăm năm trong môi trường biển, phân rã thành hạt vi nhựa đi vào chuỗi thức ăn của sinh vật biển và con người.',
        source: 'Quyết định số 1746/QĐ-TTg năm 2019 về Kế hoạch hành động quốc gia về quản lý rác thải nhựa đại dương'
      },
      {
        id: 'cd7-q4',
        difficulty: 'medium',
        question:
          'Hệ sinh thái rừng ngập mặn ven biển đóng vai trò như một "bức tường xanh" tự nhiên vì những chức năng nào sau đây?',
        options: [
          'Chắn sóng, giảm sức tàn phá của bão và triều cường, chống xói lở bờ biển, là nơi sinh sản của thủy sản và hấp thụ lượng lớn khí CO₂',
          'Làm tăng tốc độ gió bão khi đổ bộ vào đất liền',
          'Làm cho nước biển trở nên ngọt hoàn toàn',
          'Ngăn cản các loài cá và tôm sinh trưởng'
        ],
        correctIndex: 0,
        explanation:
          'Rừng ngập mặn giúp giảm tới 50–80% năng lượng sóng biển, giữ phù sa bồi tụ bờ biển, là "vườn ươm" cho ấu trùng tôm cá và có khả năng lưu giữ carbon (Blue Carbon) cao gấp nhiều lần rừng trên cạn.',
        source: 'Bộ Tài nguyên và Môi trường – Tổng cục Biển và Hải đảo Việt Nam'
      },
      {
        id: 'cd7-q5',
        difficulty: 'medium',
        question:
          'Hiện tượng "tẩy trắng san hô" (Coral Bleaching) làm suy thoái các rạn san hô ở Biển Đông chủ yếu bắt nguồn từ nguyên nhân tự nhiên – môi trường nào?',
        options: [
          'Nhiệt độ nước biển tăng cao bất thường do biến đổi khí hậu và hiện tượng axit hóa đại dương',
          'Do nước biển có quá nhiều đàn cá nhỏ bơi lội',
          'Do ánh trăng chiếu xuống mặt biển vào ban đêm',
          'Do thủy triều lên xuống hàng ngày'
        ],
        correctIndex: 0,
        explanation:
          'Khi nhiệt độ nước biển tăng cao kéo dài do biến đổi khí hậu (cùng với ô nhiễm và axit hóa đại dương), san hô bị căng thẳng sinh học và trục xuất các loài tảo cộng sinh (zooxanthellae) sống trong mô của chúng, khiến san hô mất màu (hiện tượng tẩy trắng) và có nguy cơ chết hàng loạt.',
        source: 'Viện Hải dương học Nha Trang'
      },
      {
        id: 'cd7-q6',
        difficulty: 'medium',
        question:
          'Theo Luật Thủy sản năm 2017, những hành vi khai thác thủy sản nào sau đây bị nghiêm cấm tuyệt đối vì gây hủy diệt hệ sinh thái biển?',
        options: [
          'Sử dụng chất nổ (thuốc nổ), xung điện, hóa chất độc hại và ngư cụ có kích thước mắt lưới nhỏ hơn quy định',
          'Khai thác đúng mùa vụ và kích thước cho phép theo quy định',
          'Nuôi trồng thủy sản sinh thái kết hợp bảo vệ rừng ngập mặn',
          'Thả giống tái tạo nguồn lợi thủy sản tự nhiên'
        ],
        correctIndex: 0,
        explanation:
          'Khoản 7 Điều 7 Luật Thủy sản năm 2017 nghiêm cấm tuyệt đối việc sử dụng chất độc, chất nổ, xung điện, dòng điện hoặc phương pháp, ngư cụ có tính hủy diệt để khai thác nguồn lợi thủy sản.',
        source: 'Điều 7 Luật Thủy sản năm 2017'
      },
      {
        id: 'cd7-q7',
        difficulty: 'medium',
        question:
          '"Tuần lễ Biển và Hải đảo Việt Nam" được tổ chức định kỳ hàng năm trên phạm vi toàn quốc diễn ra vào khoảng thời gian nào (gắn với Ngày Đại dương Thế giới)?',
        options: [
          'Từ ngày 01 tháng 6 đến ngày 08 tháng 6 hàng năm',
          'Từ ngày 01 tháng 01 đến ngày 08 tháng 01 hàng năm',
          'Từ ngày 10 tháng 10 đến ngày 18 tháng 10 hàng năm',
          'Từ ngày 20 tháng 11 đến ngày 28 tháng 11 hàng năm'
        ],
        correctIndex: 0,
        explanation:
          'Theo Luật Tài nguyên, môi trường biển và hải đảo năm 2015, Tuần lễ Biển và Hải đảo Việt Nam được tổ chức từ ngày 01/6 đến ngày 08/6 hằng năm để hưởng ứng Ngày Môi trường Thế giới (05/6) và Ngày Đại dương Thế giới (08/6).',
        source: 'Luật Tài nguyên, môi trường biển và hải đảo năm 2015'
      },
      {
        id: 'cd7-q8',
        difficulty: 'hard',
        question:
          'Nếu mực nước biển dâng cao thêm 1 mét do biến đổi khí hậu toàn cầu, vùng kinh tế nào của Việt Nam sẽ chịu nguy cơ ngập lụt và xâm nhập mặn nghiêm trọng nhất?',
        options: [
          'Vùng Đồng bằng sông Cửu Long (và vùng ven biển Đồng bằng sông Hồng, TP. Hồ Chí Minh)',
          'Vùng núi cao Hoàng Liên Sơn (Lào Cai)',
          'Vùng cao nguyên Lâm Viên (Lâm Đồng)',
          'Vùng biên giới núi cao Hà Giang'
        ],
        correctIndex: 0,
        explanation:
          'Theo Kịch bản biến đổi khí hậu và nước biển dâng cho Việt Nam của Bộ Tài nguyên và Môi trường, Đồng bằng sông Cửu Long có địa hình thấp phẳng (trung bình chỉ cao 0,8 – 1,5m so với mực nước biển) nên là khu vực chịu tác động nặng nề nhất của nước biển dâng và xâm nhập mặn.',
        source: 'Bộ Tài nguyên và Môi trường – Kịch bản Biến đổi khí hậu và Nước biển dâng'
      },
      {
        id: 'cd7-q9',
        difficulty: 'hard',
        question:
          'Khu bảo tồn biển đầu tiên của Việt Nam được thành lập tại tỉnh Khánh Hòa – nơi nổi tiếng với hệ sinh thái rạn san hô đa dạng bậc nhất nước ta – có tên là gì?',
        options: [
          'Khu bảo tồn biển Hòn Mun (Vịnh Nha Trang, tỉnh Khánh Hòa)',
          'Vườn quốc gia Ba Vì (Hà Nội)',
          'Khu bảo tồn thiên nhiên Pù Luông (Thanh Hóa)',
          'Vườn quốc gia Cúc Phương (Ninh Bình)'
        ],
        correctIndex: 0,
        explanation:
          'Khu bảo tồn biển Hòn Mun (nằm trong Vịnh Nha Trang, tỉnh Khánh Hòa) được thành lập năm 2001 là khu bảo tồn biển đầu tiên của Việt Nam, nơi ghi nhận khoảng 350 loài san hô tạo rạn cùng hàng nghìn loài sinh vật biển quý hiếm.',
        source: 'Bộ Nông nghiệp và Phát triển nông thôn & UBND tỉnh Khánh Hòa'
      },
      {
        id: 'cd7-q10',
        difficulty: 'hard',
        question:
          'Theo Quyết định số 1746/QĐ-TTg của Thủ tướng Chính phủ về Kế hoạch hành động quốc gia quản lý rác thải nhựa đại dương đến năm 2030, Việt Nam đặt mục tiêu tại các khu bảo tồn biển sẽ đạt kết quả nào?',
        options: [
          '100% các khu bảo tồn biển không còn rác thải nhựa dùng một lần',
          'Cho phép xả tự do chất thải nhựa tại các khu bảo tồn biển',
          'Thay thế toàn bộ rạn san hô tự nhiên bằng nhựa tổng hợp',
          'Giảm diện tích các khu bảo tồn biển xuống còn 0%'
        ],
        correctIndex: 0,
        explanation:
          'Quyết định số 1746/QĐ-TTg đặt mục tiêu đến năm 2030 giảm 75% rác thải nhựa trên biển và đại dương, đồng thời 100% các khu du lịch, dịch vụ ven biển và 100% các khu bảo tồn biển không còn sử dụng sản phẩm nhựa dùng một lần và túi ni-lông khó phân hủy.',
        source: 'Quyết định số 1746/QĐ-TTg ngày 04/12/2019 của Thủ tướng Chính phủ'
      }
    ]
  },
  {
    id: 'cd-8',
    code: 'Chuyên đề 08',
    title: 'Trách nhiệm của thanh niên đối với biển đảo quê hương',
    shortDesc:
      'Xác định vai trò, nghĩa vụ công dân của học sinh THPT trong học tập lịch sử – pháp luật, nhận diện thông tin xấu độc trên không gian mạng và hành động thiết thực hướng về biển đảo.',
    iconName: 'GraduationCap',
    badge: '10 câu hỏi • Công dân & Tuổi trẻ',
    image: '/assets/library/topic-cau-chuyen.svg',
    summaryPoints: [
      'Chủ động học tập, nắm vững kiến thức Lịch sử, Địa lý, Luật Biển Việt Nam 2012 và UNCLOS 1982.',
      'Kiểm chứng nguồn bản đồ, tuyệt đối không chia sẻ hoặc sử dụng ấn phẩm có đường yêu sách phi pháp vi phạm chủ quyền biển đảo Việt Nam.',
      'Tham gia các phong trào thiết thực: "Hãy làm sạch biển", "Nghĩa tình biên giới, hải đảo", gửi thư và quà động viên chiến sĩ Trường Sa, Nhà giàn DK1.'
    ],
    questions: [
      {
        id: 'cd8-q1',
        difficulty: 'easy',
        question:
          'Theo Điều 11 Hiến pháp nước Cộng hòa Xã hội chủ nghĩa Việt Nam năm 2013, việc bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa (bao gồm vùng đất, vùng nước, vùng biển, hải đảo và vùng trời) được quy định như thế nào?',
        options: [
          'Tổ quốc Việt Nam là thiêng liêng, bất khả xâm phạm; mọi hành vi chống lại độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ đều bị nghiêm trị',
          'Chỉ là nhiệm vụ riêng của những người sinh sống ở các tỉnh ven biển',
          'Là công việc tự nguyện, không phải nghĩa vụ pháp lý của công dân',
          'Chỉ áp dụng đối với phần đất liền, không bao gồm các hải đảo xa bờ'
        ],
        correctIndex: 0,
        explanation:
          'Điều 11 và Điều 45 Hiến pháp năm 2013 khẳng định: Tổ quốc Việt Nam là thiêng liêng, bất khả xâm phạm; Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của công dân.',
        source: 'Điều 11, Điều 45 Hiến pháp nước CHXHCN Việt Nam năm 2013'
      },
      {
        id: 'cd8-q2',
        difficulty: 'easy',
        question:
          'Khi thiết kế bài thuyết trình, video học tập hoặc ấn phẩm truyền thông ở trường THPT có sử dụng bản đồ Việt Nam, học sinh cần lưu ý nguyên tắc bắt buộc nào để thể hiện đúng chủ quyền quốc gia?',
        options: [
          'Bắt buộc sử dụng bản đồ chuẩn từ nguồn chính thống có thể hiện đầy đủ hai quần đảo Hoàng Sa và Trường Sa của Việt Nam',
          'Có thể cắt bỏ phần vùng biển và hai quần đảo để khung ảnh gọn hơn',
          'Tải bất kỳ bản đồ trôi nổi nào trên mạng mà không cần kiểm tra đường biên giới, hải đảo',
          'Tự ý vẽ thêm các đường ranh giới pháp lý theo suy đoán cá nhân'
        ],
        correctIndex: 0,
        explanation:
          'Theo quy định của Luật Đo đạc và Bản đồ năm 2018, mọi bản đồ hành chính, giáo dục, truyền thông thể hiện lãnh thổ Việt Nam bắt buộc phải thể hiện đầy đủ chủ quyền quốc gia đối với hai quần đảo Hoàng Sa và Trường Sa.',
        source: 'Luật Đo đạc và Bản đồ năm 2018'
      },
      {
        id: 'cd8-q3',
        difficulty: 'easy',
        question:
          'Hành động nào sau đây của học sinh THPT trực tiếp góp phần bảo vệ môi trường biển ngay trong sinh hoạt hằng ngày?',
        options: [
          'Hạn chế sử dụng đồ nhựa dùng một lần, phân loại rác tại nguồn và không xả rác bừa bãi khi đi du lịch biển',
          'Vứt chai nhựa và túi ni-lông xuống bãi biển vì sóng sẽ cuốn đi',
          'Mua các đồ lưu niệm làm từ san hô tự nhiên hoặc mai đồi mồi quý hiếm',
          'Bẻ cành san hô khi lặn biển để mang về làm kỷ niệm'
        ],
        correctIndex: 0,
        explanation:
          'Khoảng 80% rác thải nhựa đại dương có nguồn gốc từ các hoạt động trên đất liền. Vì vậy, việc giảm nhựa dùng một lần, phân loại rác và giữ gìn vệ sinh bãi biển là hành động thiết thực nhất của mỗi học sinh.',
        source: 'Chiến dịch "Hãy làm sạch biển" – Trung ương Đoàn TNCS Hồ Chí Minh'
      },
      {
        id: 'cd8-q4',
        difficulty: 'medium',
        question:
          'Khi phát hiện một ứng dụng điện thoại, bộ phim, trò chơi điện tử hoặc trang web có chèn hình ảnh bản đồ chứa đường yêu sách phi pháp xâm phạm chủ quyền biển đảo Việt Nam, ứng xử đúng đắn của học sinh THPT là gì?',
        options: [
          'Không chia sẻ, không cổ xúy sản phẩm vi phạm; cảnh báo bạn bè và báo cáo (report) hoặc phản ánh tới cơ quan chức năng có thẩm quyền',
          'Chia sẻ rộng rãi lên mạng xã hội kèm bình luận kích động bạo lực',
          'Tiếp tục tải về và phát tán cho nhiều người cùng dùng',
          'Chỉnh sửa lại bằng cách xóa luôn tên hai quần đảo Hoàng Sa và Trường Sa'
        ],
        correctIndex: 0,
        explanation:
          'Việc cảnh giác, tẩy chay sản phẩm văn hóa – công nghệ lồng ghép bản đồ phi pháp và thông báo cho cơ quan chức năng (như Bộ Thông tin và Truyền thông, Bộ Văn hóa, Thể thao và Du lịch) là hành động văn minh, thượng tôn pháp luật và bảo vệ chủ quyền số.',
        source: 'Bộ Quy tắc ứng xử trên mạng xã hội – Bộ Thông tin và Truyền thông'
      },
      {
        id: 'cd8-q5',
        difficulty: 'medium',
        question:
          'Cuộc vận động lớn nào do Trung ương Đoàn TNCS Hồ Chí Minh phát động nhằm khơi dậy tinh thần yêu nước, hướng tuổi trẻ cả nước về các vùng biên cương và hải đảo của Tổ quốc?',
        options: [
          'Cuộc vận động "Nghĩa tình biên giới, hải đảo" và chương trình "Tuổi trẻ vì biển, đảo quê hương"',
          'Cuộc vận động chỉ dành cho du học sinh ở nước ngoài',
          'Phong trào khai thác khoáng sản tự phát',
          'Chương trình miễn học môn Lịch sử và Địa lý'
        ],
        correctIndex: 0,
        explanation:
          'Cuộc vận động "Nghĩa tình biên giới, hải đảo" (triển khai từ năm 1999) và hành trình "Tuổi trẻ vì biển, đảo quê hương" là các hoạt động truyền thống tiêu biểu của Đoàn TNCS Hồ Chí Minh nhằm giáo dục lòng yêu nước và hỗ trợ cán bộ, chiến sĩ, nhân dân vùng biển đảo.',
        source: 'Trung ương Đoàn TNCS Hồ Chí Minh'
      },
      {
        id: 'cd8-q6',
        difficulty: 'medium',
        question:
          'Vì sao việc trang bị kiến thức vững chắc về lịch sử và pháp luật quốc tế (như UNCLOS 1982) lại quan trọng đối với thế hệ trẻ Việt Nam trong bối cảnh hội nhập hiện nay?',
        options: [
          'Giúp giới trẻ có lập luận khoa học, sắc bén và đúng pháp luật để bảo vệ lẽ phải, giới thiệu chính nghĩa của Việt Nam với bạn bè quốc tế và phản bác thông tin sai trái',
          'Chỉ để phục vụ việc làm bài kiểm tra trắc nghiệm trên lớp rồi quên đi',
          'Để thay thế hoàn toàn vai trò của các cơ quan ngoại giao',
          'Không cần thiết vì học sinh chỉ cần học các môn khoa học tự nhiên'
        ],
        correctIndex: 0,
        explanation:
          'Lòng yêu nước chân chính cần đi đôi với tri thức. Nắm vững bằng chứng lịch sử và cơ sở pháp lý quốc tế giúp học sinh, sinh viên trở thành những "đại sứ truyền thông" có bản lĩnh, thuyết phục bạn bè quốc tế bằng lý lẽ khoa học và luật pháp.',
        source: 'Sách giáo khoa Giáo dục Kinh tế và Pháp luật / Lịch sử THPT'
      },
      {
        id: 'cd8-q7',
        difficulty: 'medium',
        question:
          'Trước một thông tin giật gân, chưa được kiểm chứng về tình hình Biển Đông xuất hiện trên mạng xã hội, nguyên tắc kiểm chứng thông tin (Fact-checking) nào mà học sinh THPT cần áp dụng?',
        options: [
          'Đối chiếu thông tin với các cơ quan thông tấn, báo chí chính thống của Nhà nước (TTXVN, Báo Nhân Dân, VTV, Cổng Thông tin Chính phủ, Bộ Ngoại giao) trước khi tin hoặc chia sẻ',
          'Tin ngay lập tức nếu bài đăng có nhiều lượt thích (like) và bình luận',
          'Chia sẻ ngay vào các nhóm lớp để câu tương tác',
          'Tự suy diễn thêm tình tiết để câu chuyện hấp dẫn hơn'
        ],
        correctIndex: 0,
        explanation:
          'Trên không gian mạng có nhiều tin giả (Fake News) nhằm gây hoang mang dư luận hoặc xuyên tạc chủ trương đối ngoại. Học sinh cần giữ cái đầu lạnh, kiểm chứng tại các nguồn chính thống của Nhà nước và tuân thủ Luật An ninh mạng.',
        source: 'Luật An ninh mạng năm 2018 & Cẩm nang phòng chống tin giả'
      },
      {
        id: 'cd8-q8',
        difficulty: 'hard',
        question:
          'Theo Luật Đo đạc và Bản đồ năm 2018 (Điều 6), những hành vi nào liên quan đến xuất bản, lưu hành sản phẩm bản đồ bị pháp luật Việt Nam nghiêm cấm tuyệt đối?',
        options: [
          'Xuất bản, lưu hành sản phẩm đo đạc và bản đồ thể hiện không đúng hoặc không thể hiện chủ quyền, biên giới quốc gia',
          'Sử dụng bản đồ hành chính chuẩn của Nhà xuất bản Tài nguyên – Môi trường và Bản đồ Việt Nam trong giảng dạy',
          'Tra cứu tọa độ địa lý trên cổng thông tin chính phủ',
          'Vẽ sơ đồ trường học phục vụ hoạt động ngoại khóa'
        ],
        correctIndex: 0,
        explanation:
          'Khoản 3 và khoản 4 Điều 6 Luật Đo đạc và Bản đồ năm 2018 nghiêm cấm việc làm sai lệch, xuất bản, lưu hành các sản phẩm bản đồ không thể hiện hoặc thể hiện không đúng chủ quyền, biên giới quốc gia Việt Nam.',
        source: 'Điều 6 Luật Đo đạc và Bản đồ năm 2018'
      },
      {
        id: 'cd8-q9',
        difficulty: 'hard',
        question:
          'Chiến dịch "Hãy làm sạch biển" do Trung ương Đoàn TNCS Hồ Chí Minh phối hợp phát động tại 28 tỉnh, thành phố ven biển hướng tới mục tiêu cốt lõi nào?',
        options: [
          'Nâng cao nhận thức cộng đồng về rác thải đại dương, tổ chức các đội hình thanh niên tình nguyện thu gom rác và bảo vệ cảnh quan môi trường biển bền vững',
          'Đóng cửa tất cả các bãi biển du lịch trên cả nước',
          'Khai thác cát biển quy mô lớn tại các bãi tắm',
          'Chỉ tổ chức một lần duy nhất rồi dừng hẳn'
        ],
        correctIndex: 0,
        explanation:
          'Chiến dịch "Hãy làm sạch biển" được triển khai thường xuyên tại khắp 28 tỉnh, thành phố có biển với sự tham gia của hàng trăm nghìn đoàn viên, học sinh, ngư dân nhằm thu gom rác thải nhựa và lan tỏa lối sống xanh bảo vệ đại dương.',
        source: 'Trung ương Đoàn TNCS Hồ Chí Minh'
      },
      {
        id: 'cd8-q10',
        difficulty: 'hard',
        question:
          'Đâu là phương châm kết hợp hài hòa giữa "tình cảm yêu nước" và "hành động đúng pháp luật" của học sinh THPT đối với vấn đề chủ quyền biển đảo?',
        options: [
          '"Trái tim nóng, cái đầu lạnh": Yêu nước nồng nàn nhưng luôn tỉnh táo, thượng tôn pháp luật Việt Nam và luật pháp quốc tế, tích cực học tập để xây dựng đất nước giàu mạnh',
          'Bỏ bê việc học tập trên lớp để tranh cãi cực đoan trên mạng xã hội',
          'Thờ ơ, coi vấn đề biển đảo là chuyện của người lớn và quân đội',
          'Tự ý tụ tập gây mất trật tự công cộng khi nghe tin đồn chưa kiểm chứng'
        ],
        correctIndex: 0,
        explanation:
          'Bày tỏ lòng yêu nước đúng đắn là kết hợp giữa "trái tim nóng" (nhiệt huyết, trách nhiệm, tri ân thế hệ đi trước) và "cái đầu lạnh" (hiểu biết lịch sử, nắm vững pháp luật, ứng xử văn minh, không để các thế lực xấu lợi dụng kích động).',
        source: 'Tài liệu Giáo dục Quốc phòng và An ninh & Giáo dục Kinh tế và Pháp luật THPT'
      }
    ]
  }
]
