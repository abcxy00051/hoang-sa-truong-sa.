/**
 * DỮ LIỆU TRÒ CHƠI TƯƠNG TÁC: GHÉP SỰ KIỆN VỚI MỐC THỜI GIAN
 * Gồm 3 chặng thử thách (mỗi chặng 6 cặp Mốc thời gian - Sự kiện đã kiểm chứng)
 * kèm phần giải thích chi tiết và nguồn sử liệu / văn bản pháp luật.
 */

export const TIMELINE_MATCHING_SETS = [
  {
    id: 'tl-set-1',
    title: 'Chặng 01: Thời kỳ Chúa Nguyễn, Tây Sơn & Đầu triều Nguyễn',
    subtitle: 'Xác lập chủ quyền và hoạt động của đội Hoàng Sa – Bắc Hải (Thế kỷ XVII – đầu XIX)',
    difficulty: 'easy',
    pairs: [
      {
        id: 'p1-1',
        timeLabel: 'Nửa đầu thế kỷ XVII',
        eventText:
          'Chính quyền chúa Nguyễn ở Đàng Trong thành lập đội Hoàng Sa ra Bãi Cát Vàng thu lượm hóa vật và tuần tra vùng biển đảo.',
        explanation:
          'Đội Hoàng Sa được chúa Nguyễn lập từ nửa đầu thế kỷ XVII, tuyển đinh tráng xã An Vĩnh, An Hải (Quảng Ngãi) đi thuyền ra Hoàng Sa từ tháng 2 đến tháng 8 âm lịch hằng năm.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'p1-2',
        timeLabel: 'Năm 1686 (Thế kỷ XVII)',
        eventText:
          'Danh nhân Đỗ Bá hoàn thành bộ "Toản tập Thiên Nam tứ chí lộ đồ thư" vẽ bản đồ và ghi chép rõ về Bãi Cát Vàng.',
        explanation:
          'Tác phẩm địa chí và bản đồ cổ của Đỗ Bá là tư liệu thành văn sớm nhất mô tả chi tiết Bãi Cát Vàng (Hoàng Sa, Trường Sa) và hoạt động định kỳ hàng năm của đội Hoàng Sa.',
        source: 'Toản tập Thiên Nam tứ chí lộ đồ thư (1686)'
      },
      {
        id: 'p1-3',
        timeLabel: 'Năm 1776',
        eventText:
          'Nhà bác học Lê Quý Đôn biên soạn bộ "Phủ biên tạp lục", ghi chép chi tiết về đội Hoàng Sa và đội Bắc Hải.',
        explanation:
          'Khi giữ chức Hiệp trấn Thuận Hóa năm 1776, Lê Quý Đôn đã khảo cứu sổ sách và trực tiếp ghi lại số lượng thuyền, lộ trình và sản vật của đội Hoàng Sa cùng đội Bắc Hải.',
        source: 'Lê Quý Đôn – Phủ biên tạp lục (1776)'
      },
      {
        id: 'p1-4',
        timeLabel: 'Năm 1786 (Thái Đức thứ 9)',
        eventText:
          'Chính quyền Tây Sơn ban chỉ dụ sai Hội Đức hầu thống suất đội Hoàng Sa đi 4 chiếc thuyền câu vượt biển ra cù lao làm nhiệm vụ.',
        explanation:
          'Tư liệu tờ sai năm Thái Đức thứ 9 (1786) chứng minh triều đại Tây Sơn tiếp tục duy trì tổ chức và hoạt động thực thi chủ quyền của đội Hoàng Sa.',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
      },
      {
        id: 'p1-5',
        timeLabel: 'Năm 1815 (Gia Long thứ 14)',
        eventText:
          'Vua Gia Long sai Phạm Quang Ảnh thuộc đội Hoàng Sa ra Hoàng Sa thăm dò, đo đạc đường biển (thủy trình).',
        explanation:
          'Tháng Giêng năm Ất Hợi (1815), vua Gia Long cử Phạm Quang Ảnh dẫn đội Hoàng Sa ra khảo sát thủy trình, mở đầu giai đoạn nhà Nguyễn trực tiếp điều hành đo đạc hàng hải.',
        source: 'Quốc sử quán triều Nguyễn – Đại Nam thực lục'
      },
      {
        id: 'p1-6',
        timeLabel: 'Năm 1816 (Gia Long thứ 15)',
        eventText:
          'Vua Gia Long mệnh cho Thủy quân và đội Hoàng Sa ra Hoàng Sa xem xét, đo đạc thủy trình và chính thức cắm cờ khẳng định chủ quyền.',
        explanation:
          'Sự kiện năm 1816 đánh dấu bước phát triển quan trọng khi lực lượng Thủy quân chính quy của triều đình cùng đội Hoàng Sa trực tiếp ra đo đạc và cắm cờ tại quần đảo Hoàng Sa.',
        source: 'Quốc sử quán triều Nguyễn – Đại Nam thực lục & SGK Lịch sử 11'
      }
    ]
  },
  {
    id: 'tl-set-2',
    title: 'Chặng 02: Châu bản triều Nguyễn & Quản lý Hành chính thế kỷ XIX – XX',
    subtitle: 'Các mốc dựng miếu, lập bia, vẽ bản đồ và bảo vệ chủ quyền (1833 – 1951)',
    difficulty: 'medium',
    pairs: [
      {
        id: 'p2-1',
        timeLabel: 'Năm 1833 (Minh Mạng thứ 14)',
        eventText:
          'Vua Minh Mạng chỉ dụ Bộ Công chuẩn bị thuyền và cây cối để ra Hoàng Sa dựng miếu, lập bia và trồng cây làm dấu hiệu cho tàu thuyền.',
        explanation:
          'Nhằm giúp tàu thuyền qua lại Biển Đông nhận biết đảo từ xa tránh mắc cạn và khẳng định chủ quyền, vua Minh Mạng cho trồng cây xanh, dựng miếu và lập bia trên đảo Hoàng Sa.',
        source: 'Châu bản triều Nguyễn – Trung tâm Lưu trữ Quốc gia I'
      },
      {
        id: 'p2-2',
        timeLabel: 'Năm 1836 (Minh Mạng thứ 17)',
        eventText:
          'Vua Minh Mạng phê chuẩn tấu của Bộ Công cử Suất đội Thủy quân Phạm Hữu Nhật ra Hoàng Sa cắm cột mốc gỗ và đo vẽ bản đồ.',
        explanation:
          'Mỗi cột mốc gỗ năm 1836 đều khắc dòng chữ: "Năm Minh Mạng thứ 17, năm Bính Thân, Thủy quân Chánh đội trưởng suất đội Phạm Hữu Nhật vâng mệnh ra Hoàng Sa trông nom đo đạc đến đây lưu dấu để ghi nhớ".',
        source: 'Châu bản triều Nguyễn & Đại Nam thực lục'
      },
      {
        id: 'p2-3',
        timeLabel: 'Khoảng năm 1838',
        eventText:
          'Triều Nguyễn vẽ bản đồ "Đại Nam nhất thống toàn đồ" ghi rõ hai địa danh "Hoàng Sa" và "Vạn Lý Trường Sa" thuộc lãnh thổ Việt Nam.',
        explanation:
          'Đại Nam nhất thống toàn đồ thể hiện nhất quán quan điểm quản lý cương vực biển đảo bao gồm cả Hoàng Sa và Vạn Lý Trường Sa (Trường Sa) của nhà nước Đại Nam.',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
      },
      {
        id: 'p2-4',
        timeLabel: 'Ngày 21/12/1933',
        eventText:
          'Thống đốc Nam Kỳ J. Krautheimer ký Nghị định sáp nhập các đảo thuộc quần đảo Trường Sa vào tỉnh Bà Rịa.',
        explanation:
          'Chính quyền Pháp nhân danh nhà nước bảo hộ Việt Nam đã tổ chức quản lý hành chính hiện đại và sáp nhập quần đảo Trường Sa vào tỉnh Bà Rịa.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'p2-5',
        timeLabel: 'Ngày 15/6/1938',
        eventText:
          'Toàn quyền Đông Dương Jules Brévié ký Nghị định số 156-SC thiết lập đơn vị hành chính Hoàng Sa thuộc tỉnh Thừa Thiên.',
        explanation:
          'Sau Dụ số 10 của vua Bảo Đại (30/3/1938), Nghị định số 156-SC chính thức lập đơn vị hành chính Hoàng Sa thuộc tỉnh Thừa Thiên, đồng thời xây dựng trạm khí tượng và vô tuyến điện trên đảo.',
        source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
      },
      {
        id: 'p2-6',
        timeLabel: 'Ngày 07/9/1951',
        eventText:
          'Tại Hội nghị Hòa bình San Francisco (gồm 51 quốc gia), Trưởng phái đoàn Quốc gia Việt Nam tuyên bố khẳng định chủ quyền lâu đời đối với Hoàng Sa và Trường Sa.',
        explanation:
          'Tuyên bố chính thức của phái đoàn Việt Nam tại Hội nghị San Francisco năm 1951 không gặp bất kỳ sự phản đối hay bảo lưu nào từ 51 quốc gia tham dự.',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
      }
    ]
  },
  {
    id: 'tl-set-3',
    title: 'Chặng 03: Pháp luật Biển Hiện đại & Phát triển Bền vững (1982 – 2021)',
    subtitle: 'Các cột mốc pháp lý quốc gia và quốc tế về biển đảo (UNCLOS 1982 & Luật Biển Việt Nam)',
    difficulty: 'hard',
    pairs: [
      {
        id: 'p3-1',
        timeLabel: 'Ngày 12/11/1982',
        eventText:
          'Chính phủ Việt Nam ra Tuyên bố về đường cơ sở dùng để tính chiều rộng lãnh hải trên vùng biển lục địa Việt Nam (gồm 11 điểm từ A1 đến A11).',
        explanation:
          'Tuyên bố ngày 12/11/1982 xác định hệ thống đường cơ sở thẳng ven bờ lục địa Việt Nam nối 11 điểm chuẩn từ đảo Hòn Nhạn (Kiên Giang) đến đảo Cồn Cỏ (Quảng Trị).',
        source: 'Tuyên bố ngày 12/11/1982 của Chính phủ nước CHXHCN Việt Nam'
      },
      {
        id: 'p3-2',
        timeLabel: 'Ngày 10/12/1982',
        eventText:
          'Công ước của Liên Hợp Quốc về Luật Biển (UNCLOS 1982) được ký kết tại Montego Bay (Jamaica), Việt Nam là một trong những nước ký đầu tiên.',
        explanation:
          'Ngày 10/12/1982, đại diện 119 quốc gia và vùng lãnh thổ (trong đó có Việt Nam) đã ký Công ước Luật Biển tại Montego Bay.',
        source: 'Công ước Liên Hợp Quốc về Luật Biển năm 1982'
      },
      {
        id: 'p3-3',
        timeLabel: 'Ngày 23/6/1994',
        eventText:
          'Quốc hội nước CHXHCN Việt Nam khóa IX thông qua Nghị quyết phê chuẩn Công ước Liên Hợp Quốc về Luật Biển năm 1982.',
        explanation:
          'Nghị quyết ngày 23/6/1994 của Quốc hội Việt Nam khẳng định quyết tâm cùng cộng đồng quốc tế xây dựng một trật tự pháp lý công bằng trên biển và một lần nữa khẳng định chủ quyền đối với Hoàng Sa, Trường Sa.',
        source: 'Nghị quyết của Quốc hội khóa IX ngày 23/6/1994'
      },
      {
        id: 'p3-4',
        timeLabel: 'Ngày 21/6/2012',
        eventText:
          'Quốc hội khóa XIII thông qua Luật Biển Việt Nam (Luật số 18/2012/QH13) gồm 7 chương, 55 điều.',
        explanation:
          'Luật Biển Việt Nam năm 2012 nội luật hóa đầy đủ các quy định của UNCLOS 1982, quy định rõ quy chế pháp lý các vùng biển Việt Nam và hai quần đảo Hoàng Sa, Trường Sa.',
        source: 'Luật Biển Việt Nam số 18/2012/QH13'
      },
      {
        id: 'p3-5',
        timeLabel: 'Tháng 5/2014',
        eventText:
          'UNESCO công nhận "Châu bản triều Nguyễn" là Di sản tư liệu thuộc Chương trình Ký ức thế giới khu vực châu Á – Thái Bình Dương.',
        explanation:
          'Sự vinh danh của UNESCO khẳng định giá trị lịch sử độc bản, xác thực và toàn vẹn của khối tài liệu hành chính Châu bản triều Nguyễn, trong đó có các châu bản về Hoàng Sa, Trường Sa.',
        source: 'Trung tâm Lưu trữ Quốc gia I – Cục Văn thư và Lưu trữ nhà nước'
      },
      {
        id: 'p3-6',
        timeLabel: 'Tháng 10/2018',
        eventText:
          'Ban Chấp hành Trung ương Đảng khóa XII ban hành Nghị quyết số 36-NQ/TW về Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045.',
        explanation:
          'Nghị quyết 36-NQ/TW đặt mục tiêu đưa Việt Nam trở thành quốc gia mạnh về biển, giàu từ biển, phát triển bền vững, thịnh vượng, an ninh và an toàn.',
        source: 'Nghị quyết số 36-NQ/TW ngày 22/10/2018'
      }
    ]
  }
]
