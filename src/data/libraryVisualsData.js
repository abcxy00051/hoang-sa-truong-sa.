// DỮ LIỆU ĐỒ HỌA HỌC THUẬT, BẢNG DỮ LIỆU ĐỐI CHIẾU & HỘP THÔNG TIN QUAN TRỌNG
// Phục vụ 8 Chuyên đề Thư viện Tri thức Biển Đảo Việt Nam (Chuẩn THPT – GDPT 2018)

export const TOPIC_ACADEMIC_VISUALS = {
  'cd-01-tong-quan': {
    visualType: 'geographicalDiagram',
    visualBadge: 'Sơ đồ địa lý – Pháp lý biển (Đồ họa minh họa giáo dục)',
    visualTitle: 'Sơ đồ mặt cắt ngang 5 vùng biển Việt Nam theo Công ước Luật Biển UNCLOS 1982 & Luật Biển Việt Nam 2012',
    visualSubtitle:
      'Tính từ Hệ thống đường cơ sở dùng để tính chiều rộng lãnh hải Việt Nam hướng ra Biển Đông',
    zones: [
      {
        code: 'VÙNG 1',
        name: 'Nội thủy (Internal Waters)',
        range: 'Phía trong đường cơ sở giáp bờ biển',
        regime: 'Chủ quyền hoàn toàn, tuyệt đối và đầy đủ như trên lãnh thổ đất liền (Điều 9, 10 Luật Biển VN 2012).',
        depthLabel: '0 HL (Trong đường cơ sở)',
        color: '#29B4D1'
      },
      {
        code: 'VÙNG 2',
        name: 'Lãnh hải (Territorial Sea)',
        range: 'Rộng 12 hải lý tính từ đường cơ sở',
        regime: 'Chủ quyền hoàn toàn và đầy đủ (vùng nước, đáy biển, lòng đất dưới đáy biển và vùng trời). Tàu thuyền nước ngoài hưởng quyền đi qua không gây hại (Điều 11, 12).',
        depthLabel: '0 → 12 Hải lý',
        color: '#113747'
      },
      {
        code: 'VÙNG 3',
        name: 'Vùng tiếp giáp lãnh hải (Contiguous Zone)',
        range: 'Rộng 12 hải lý tiếp liền biên giới ngoài lãnh hải (12–24 HL)',
        regime: 'Thực hiện quyền chủ quyền, quyền tài phán và kiểm soát về hải quan, thuế khóa, y tế, xuất nhập cảnh (Điều 13, 14).',
        depthLabel: '12 → 24 Hải lý',
        color: '#29B4D1'
      },
      {
        code: 'VÙNG 4',
        name: 'Vùng đặc quyền kinh tế (EEZ)',
        range: 'Rộng 200 hải lý tính từ đường cơ sở',
        regime: 'Quyền chủ quyền về thăm dò, khai thác, quản lý, bảo tồn tài nguyên và Quyền tài phán về đảo nhân tạo, nghiên cứu khoa học biển, bảo vệ môi trường biển (Điều 15, 16).',
        depthLabel: '12 → 200 Hải lý',
        color: '#113747'
      },
      {
        code: 'VÙNG 5',
        name: 'Thềm lục địa (Continental Shelf)',
        range: 'Kéo dài tự nhiên của lãnh thổ đất liền (tối thiểu 200 HL đến rìa ngoài rìa lục địa)',
        regime: 'Quyền chủ quyền hoàn toàn, riêng biệt đối với thăm dò và khai thác tài nguyên không sinh vật (dầu khí, khoáng sản) và sinh vật thuộc loài định cư ở đáy biển (Điều 17, 18).',
        depthLabel: 'Đáy biển & lòng đất dưới đáy biển ≥ 200 HL',
        color: '#113747'
      }
    ],
    dataTable: {
      title: 'Bảng đối chiếu 5 vùng biển thuộc chủ quyền, quyền chủ quyền và quyền tài phán của Việt Nam',
      sourceNote: 'Nguồn: Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982) và Luật Biển Việt Nam năm 2012 (Chương II).',
      columns: ['Tên vùng biển', 'Phạm vi chiều rộng', 'Quy chế pháp lý cốt lõi', 'Cơ sở pháp lý'],
      rows: [
        [
          '1. Nội thủy',
          'Vùng nước phía trong đường cơ sở và giáp bờ biển',
          'Chủ quyền hoàn toàn, tuyệt đối và đầy đủ như trên đất liền; tàu thuyền quân sự/nước ngoài muốn vào phải xin phép.',
          'Điều 8 UNCLOS 1982; Điều 9, 10 Luật Biển VN 2012'
        ],
        [
          '2. Lãnh hải',
          '12 hải lý tính từ đường cơ sở ra phía biển (~22,22 km)',
          'Chủ quyền hoàn toàn và đầy đủ; biên giới ngoài của lãnh hải là biên giới quốc gia trên biển.',
          'Điều 2, 3 UNCLOS 1982; Điều 11, 12 Luật Biển VN 2012'
        ],
        [
          '3. Vùng tiếp giáp lãnh hải',
          '12 hải lý tiếp liền biên giới ngoài của lãnh hải (tổng 24 HL từ đường cơ sở)',
          'Quyền chủ quyền, quyền tài phán kiểm soát an ninh, hải quan, thuế khóa, y tế và di cư.',
          'Điều 33 UNCLOS 1982; Điều 13, 14 Luật Biển VN 2012'
        ],
        [
          '4. Vùng đặc quyền kinh tế (EEZ)',
          '200 hải lý tính từ đường cơ sở (~370,4 km)',
          'Quyền chủ quyền kinh tế (thăm dò, khai thác tài nguyên) và Quyền tài phán (nghiên cứu khoa học, môi trường, công trình).',
          'Điều 55–58 UNCLOS 1982; Điều 15, 16 Luật Biển VN 2012'
        ],
        [
          '5. Thềm lục địa',
          'Đáy biển và lòng đất dưới đáy biển kéo dài tự nhiên (tối thiểu 200 HL, tối đa 350 HL hoặc 100 HL từ đường đẳng sâu 2.500m)',
          'Quyền chủ quyền đương nhiên và riêng biệt đối với tài nguyên khoáng sản, dầu khí và sinh vật đáy.',
          'Điều 76, 77 UNCLOS 1982; Điều 17, 18 Luật Biển VN 2012'
        ]
      ]
    },
    importantCallout: {
      badge: 'PHÂN BIỆT HỌC THUẬT QUAN TRỌNG',
      title: 'Lưu ý chuẩn xác khi sử dụng thuật ngữ pháp lý biển ở cấp THPT',
      points: [
        'Tư liệu gốc pháp lý: Luật Biển Việt Nam năm 2012 và UNCLOS 1982 quy định rõ: 1 hải lý quốc tế = 1.852 mét.',
        'Nhận định học thuật chuẩn: Chỉ sử dụng thuật ngữ "Chủ quyền quốc gia" đối với Nội thủy, Lãnh hải và hai quần đảo Hoàng Sa, Trường Sa; sử dụng thuật ngữ "Quyền chủ quyền và Quyền tài phán quốc gia" đối với Vùng tiếp giáp lãnh hải, Vùng đặc quyền kinh tế và Thềm lục địa.'
      ]
    }
  },

  'cd-02-lich-su': {
    visualType: 'historicalInfographic',
    visualBadge: 'Infographic lịch sử (Tổng hợp từ Chính sử & Châu bản)',
    visualTitle: 'Tiến trình lịch sử Nhà nước Việt Nam xác lập và thực thi chủ quyền liên tục tại Hoàng Sa – Trường Sa',
    visualSubtitle:
      'Dòng chảy tư liệu gốc từ thế kỷ XVII đến nay được lưu giữ tại Việt Nam và quốc tế',
    milestones: [
      {
        period: 'Thế kỷ XVII – XVIII',
        title: 'Chúa Nguyễn & Triều Tây Sơn: Đội Hoàng Sa kiêm quản Bắc Hải',
        detail:
          'Lập Đội Hoàng Sa (70 suất dân đinh An Vĩnh, An Hải) đi thuyền ra Hoàng Sa từ tháng 2 đến tháng 8 âm lịch hằng năm; lập Đội Bắc Hải đi khai thác và tuần tiễu khu vực Trường Sa.',
        primarySource: 'Toản tập Thiên Nam tứ chí lộ đồ thư (1686), Phủ biên tạp lục (1776), Thái tổ Vũ Hoàng đế sắc chỉ (1786).'
      },
      {
        period: 'Thế kỷ XIX (1802–1884)',
        title: 'Vương triều Nguyễn: Thủy quân nhà nước đo đạc, cắm mốc, dựng bia',
        detail:
          'Vua Gia Long (1816) sai thủy quân và đội Hoàng Sa ra khảo sát thủy trình; Vua Minh Mạng (1833–1838) cử Phạm Văn Nguyên, Trương Phúc Sĩ, Phạm Hữu Nhật ra dựng miếu, trồng cây, cắm mốc gỗ và vẽ Đại Nam nhất thống toàn đồ.',
        primarySource: 'Châu bản triều Nguyễn (Di sản tư liệu thế giới UNESCO 2014), Đại Nam thực lục (Mộc bản triều Nguyễn).'
      },
      {
        period: 'Giai đoạn 1884–1945',
        title: 'Thời Pháp thuộc: Quản lý hành chính, xây hải đăng, trạm khí tượng',
        detail:
          'Chính quyền Đông Dương nhân danh Nhà nước Việt Nam tuần tra chống buôn lậu, xây dựng hải đăng, trạm vô tuyến điện và Trạm khí tượng Hoàng Sa (48860), Ba Bình (48819); ban hành Nghị định số 156-SC (1938) lập đơn vị hành chính Hoàng Sa thuộc tỉnh Thừa Thiên.',
        primarySource: 'Nghị định 4702-CP (1933), Nghị định 156-SC (15/6/1938), Bia chủ quyền trên đảo Hoàng Sa (1938).'
      },
      {
        period: 'Giai đoạn 1945–1975',
        title: 'Hội nghị San Francisco 1951 & Quản lý hành chính liên tục',
        detail:
          'Ngày 7/9/1951, tại Hội nghị Hòa bình San Francisco (51 quốc gia), phái đoàn Quốc gia Việt Nam tuyên bố khẳng định chủ quyền từ lâu đời đối với Hoàng Sa và Trường Sa mà không gặp bất kỳ sự phản đối nào. Đặt Trường Sa thuộc tỉnh Phước Tuy (1956), Hoàng Sa thuộc tỉnh Quảng Nam (1961).',
        primarySource: 'Biên bản Hội nghị Hòa bình San Francisco (7/9/1951), Sắc lệnh 143-NV (1956), Sắc lệnh 174-NV (1961).'
      },
      {
        period: 'Từ năm 1975 đến nay',
        title: 'Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam thực thi và bảo vệ chủ quyền',
        detail:
          'Tháng 4/1975, Hải quân nhân dân Việt Nam tiếp quản các đảo thuộc quần đảo Trường Sa. Thành lập huyện Hoàng Sa (thuộc TP. Đà Nẵng) và huyện Trường Sa (thuộc tỉnh Khánh Hòa); xây dựng cụm Nhà giàn DK1 (1989) và thông qua Luật Biển Việt Nam (2012).',
        primarySource: 'Nghị định 194-HĐBT (1982), Nghị định 65/2007/NĐ-CP, Luật Biển Việt Nam năm 2012.'
      }
    ],
    dataTable: {
      title: 'Bảng tổng hợp các tư liệu lịch sử gốc tiêu biểu khẳng định chủ quyền của Việt Nam',
      sourceNote: 'Nguồn: Ủy ban Biên giới Quốc gia – Bộ Ngoại giao và Trung tâm Lưu trữ Quốc gia I.',
      columns: ['Tên tư liệu gốc', 'Niên đại / Thời kỳ', 'Tác giả / Cơ quan ban hành', 'Nội dung chứng minh cốt lõi'],
      rows: [
        [
          'Toản tập Thiên Nam tứ chí lộ đồ thư',
          'Khoảng năm 1686 (Thế kỷ XVII)',
          'Đỗ Bá (Công Đạo) biên tập',
          'Bản đồ và chú giải sớm nhất mô tả "Bãi Cát Vàng" (Hoàng Sa) và hoạt động thường niên của Đội Hoàng Sa dưới thời chúa Nguyễn.'
        ],
        [
          'Phủ biên tạp lục',
          'Năm 1776 (Thế kỷ XVIII)',
          'Nhà bác học Lê Quý Đôn (Hiệp trấn Thuận Hóa)',
          'Ghi chép chi tiết cơ cấu 70 suất Đội Hoàng Sa, Đội Bắc Hải, lộ trình từ cù lao Ré (Lý Sơn) và chế độ cấp phát lương thực, giấy sai phái của nhà nước.'
        ],
        [
          'Châu bản triều Nguyễn về Hoàng Sa',
          'Thế kỷ XIX (Gia Long – Minh Mạng – Thiệu Trị)',
          'Nội các và các Bộ triều Nguyễn (có ngự phê bằng mực son của Hoàng đế)',
          'Các bản tấu, dụ cử thủy quân ra đo đạc, vẽ bản đồ, dựng miếu, cắm mốc gỗ khắc chữ năm Minh Mạng thứ 17 (1836) của Chánh đội trưởng Phạm Hữu Nhật.'
        ],
        [
          'Đại Nam nhất thống toàn đồ',
          'Khoảng năm 1838 (Triều Minh Mạng)',
          'Triều đình nhà Nguyễn ấn hành',
          'Vẽ rõ hai địa danh "Hoàng Sa" và "Vạn Lý Trường Sa" nằm trong dải cương vực biển thuộc lãnh thổ nước Đại Nam.'
        ],
        [
          'An Nam đại quốc họa đồ (Tabula Geographica Imperii Anamitici)',
          'Năm 1838',
          'Giám mục Jean-Louis Taberd xuất bản tại Ấn Độ',
          'Ghi rõ bằng tiếng Latinh và quốc ngữ: "Paracel seu Cát Vàng" (Paracel tức là Cát Vàng của An Nam).'
        ]
      ]
    },
    importantCallout: {
      badge: 'PHÂN BIỆT TƯ LIỆU GỐC & ĐỒ HỌA MINH HỌA',
      title: 'Nguyên tắc tiếp cận sử liệu trong nghiên cứu chủ quyền biển đảo',
      points: [
        'Tư liệu gốc (Primary Sources): Là văn bản hành chính nhà nước có bút tích phê duyệt (Châu bản), mộc bản chính sử (Đại Nam thực lục), sắc chỉ, nghị định và bia đá nguyên bản.',
        'Đồ họa minh họa giáo dục: Là các sơ đồ, bản đồ số hóa lại trên website nhằm giúp học sinh THPT dễ quan sát trực quan, luôn đi kèm trích dẫn về tư liệu gốc tương ứng.'
      ]
    }
  },

  'cd-03-phap-ly': {
    visualType: 'mindmap',
    visualBadge: 'Sơ đồ tư duy Pháp lý Quốc tế & Việt Nam',
    visualTitle: 'Sơ đồ tư duy: Hệ thống cơ sở pháp lý bảo vệ chủ quyền, quyền chủ quyền biển đảo Việt Nam',
    visualSubtitle:
      'Kết hợp hài hòa giữa Danh nghĩa lịch sử hợp pháp (chiếm hữu thật sự) và Công ước Luật Biển UNCLOS 1982',
    centerNode: {
      title: 'CƠ SỞ PHÁP LÝ BIỂN ĐẢO VIỆT NAM',
      subtitle: 'Hòa bình • Công lý • Luật pháp quốc tế'
    },
    branches: [
      {
        title: '1. Nguyên tắc Thụ đắc lãnh thổ (Công pháp quốc tế)',
        color: '#113747',
        items: [
          'Nguyên tắc Chiếm hữu thật sự (Effective Occupation) đối với lãnh thổ vô chủ (Terra nullius).',
          'Thực thi với tư cách Nhà nước (À titre de souverain), không phải hành vi tư nhân.',
          'Diễn ra hòa bình, liên tục, công khai qua nhiều thế kỷ (từ thế kỷ XVII đến nay).',
          'Án lệ quốc tế: Phán quyết Đảo Palmas (1928), Đông Greenland (1933), Minquiers & Ecrehos (1953).'
        ]
      },
      {
        title: '2. Công ước LHQ về Luật Biển (UNCLOS 1982)',
        color: '#29B4D1',
        items: [
          '"Hiến pháp về biển và đại dương" (17 phần, 320 điều, 9 phụ lục; có hiệu lực 16/11/1994).',
          'Nguyên tắc "Đất thống trị biển" (La terre domine la mer): Quyền vùng biển phát sinh từ chủ quyền đất liền.',
          'Quy định 5 vùng biển của quốc gia ven biển và quy chế pháp lý của Đảo (Điều 121).',
          'Bác bỏ các yêu sách lịch sử phi lý trái với quy định vùng đặc quyền kinh tế 200 HL và thềm lục địa.'
        ]
      },
      {
        title: '3. Hệ thống Pháp luật Quốc gia Việt Nam',
        color: '#29B4D1',
        items: [
          'Tuyên bố của Chính phủ ngày 12/5/1977 về các vùng biển và ngày 12/11/1982 về đường cơ sở.',
          'Nghị quyết của Quốc hội ngày 23/6/1994 phê chuẩn UNCLOS 1982.',
          'Luật Biển Việt Nam năm 2012 (7 Chương, 55 Điều, có hiệu lực từ 01/01/2013).',
          'Luật Biên giới quốc gia (2003), Luật Tài nguyên, môi trường biển và hải đảo (2015), Luật Cảnh sát biển (2018).'
        ]
      },
      {
        title: '4. Cơ chế Giải quyết tranh chấp hòa bình',
        color: '#1A718D',
        items: [
          'Điều 2 Khoản 3 & Điều 33 Hiến chương Liên Hợp Quốc; Điều 279 UNCLOS 1982.',
          'Không sử dụng vũ lực hoặc đe dọa sử dụng vũ lực trong quan hệ quốc tế.',
          'Thực hiện đầy đủ Tuyên bố về ứng xử của các bên ở Biển Đông (DOC – 2002) và hướng tới COC thực chất, hiệu lực.',
          'Các cơ quan tài phán quốc tế theo Điều 287 UNCLOS (ITLOS, ICJ, Tòa Trọng tài Phụ lục VII).'
        ]
      }
    ],
    dataTable: {
      title: 'Bảng phân biệt chuẩn xác 3 khái niệm pháp lý: Chủ quyền – Quyền chủ quyền – Quyền tài phán quốc gia',
      sourceNote: 'Nguồn: Học viện Ngoại giao, Ủy ban Biên giới Quốc gia và SGK Giáo dục Kinh tế & Pháp luật / Lịch sử 11.',
      columns: ['Tiêu chí so sánh', 'Chủ quyền quốc gia (Sovereignty)', 'Quyền chủ quyền (Sovereign Rights)', 'Quyền tài phán (Jurisdiction)'],
      rows: [
        [
          'Bản chất pháp lý',
          'Quyền tối cao, hoàn toàn và đầy đủ của quốc gia đối với lãnh thổ (lập pháp, hành pháp, tư pháp).',
          'Các quyền riêng biệt của quốc gia ven biển gắn với mục đích kinh tế (thăm dò, khai thác, bảo tồn, quản lý tài nguyên).',
          'Quyền thẩm phán, kiểm tra, giám sát và xử lý hành vi vi phạm trong những lĩnh vực xác định.'
        ],
        [
          'Phạm vi không gian áp dụng trên biển',
          'Nội thủy, Lãnh hải (12 HL) và phần đất nổi, nội thủy, lãnh hải của các đảo, quần đảo (Hoàng Sa, Trường Sa).',
          'Vùng tiếp giáp lãnh hải (12 HL), Vùng đặc quyền kinh tế (200 HL) và Thềm lục địa.',
          'Vùng tiếp giáp lãnh hải, Vùng đặc quyền kinh tế (EEZ) và Thềm lục địa.'
        ],
        [
          'Quyền của các quốc gia khác',
          'Ngoại trừ quyền "đi qua không gây hại" trong Lãnh hải, mọi hoạt động khác phải được phép của Việt Nam.',
          'Không ai có quyền thăm dò, khai thác tài nguyên nếu không có sự đồng ý rõ ràng của Việt Nam.',
          'Các quốc gia khác được hưởng quyền tự do hàng hải, hàng không, đặt dây cáp/ống dẫn ngầm hợp pháp nhưng phải tôn trọng pháp luật Việt Nam.'
        ]
      ]
    },
    importantCallout: {
      badge: 'GHI NHỚ PHÁP LÝ CỐT LÕI',
      title: 'Giá trị của nguyên tắc "Chiếm hữu thật sự" (Effective Occupation)',
      points: [
        'Tư liệu pháp lý quốc tế: Trong các vụ kiện tranh chấp chủ quyền đảo trên thế giới (như vụ Đảo Palmas 1928, vụ Pulau Ligitan & Pulau Sipadan 2002), Tòa án Quốc tế luôn coi trọng bằng chứng thực thi quyền lực Nhà nước thực tế, liên tục và hòa bình (Effectivités) hơn là những ghi chép mơ hồ của tư nhân.',
        'Nhận định học thuật: Châu bản triều Nguyễn và hoạt động của Đội Hoàng Sa do Nhà nước thành lập, cấp bằng sắc, thu thuế và cử thủy quân đo đạc chính là bằng chứng "Effectivités" cấp Nhà nước tiêu biểu nhất.'
      ]
    }
  },

  'cd-04-dia-ly-tu-nhien': {
    visualType: 'geographicalDiagram',
    visualBadge: 'Sơ đồ Địa lý Tự nhiên & Hải văn Biển Đông',
    visualTitle: 'Sơ đồ phân tầng cấu trúc địa chất đảo san hô vòng (Atoll) và chế độ hải văn Biển Đông',
    visualSubtitle:
      'Minh họa cấu tạo tự nhiên các đảo, đá, bãi thuộc hai quần đảo Hoàng Sa và Trường Sa',
    zones: [
      {
        code: 'TẦNG 1',
        name: 'Đảo nổi san hô & Thấu kính nước ngọt (Coral Cay / Island)',
        range: 'Độ cao 3 – 6 m trên mực nước biển (cao nhất Đá Bắc 15,9m; Song Tử Tây ~6m)',
        regime: 'Cấu tạo từ cát san hô, vụn vỏ sinh vật biển và lớp đất giàu lân (phosphorit phân chim). Ở các đảo lớn có túi "thấu kính nước ngọt/nước lợ" nằm nổi trên tầng nước mặn.',
        depthLabel: '+2m đến +15,9m (Luôn nổi khi triều cường)',
        color: '#29B4D1'
      },
      {
        code: 'TẦNG 2',
        name: 'Vành đai thềm rạn san hô & Vụng biển (Reef Flat & Lagoon)',
        range: 'Độ sâu từ 0 m đến -30 m',
        regime: 'Vành đai đá san hô bao quanh đảo hoặc khép kín thành hình vành khăn (Atoll) ôm lấy đầm phá nước êm (Lagoon) ở giữa – nơi trú đậu tàu thuyền tránh bão.',
        depthLabel: '0m đến -30m (Đới sáng rạn san hô)',
        color: '#29B4D1'
      },
      {
        code: 'TẦNG 3',
        name: 'Sườn dốc rạn san hô ngoài khơi (Fore-reef Slope)',
        range: 'Độ sâu từ -30 m đến -1.500 m',
        regime: 'Sườn núi ngầm dốc đứng từ mép rạn san hô xuống vùng biển sâu; nơi diễn ra trao đổi dòng nước trồi giàu dinh dưỡng cho hệ sinh thái cá rạn và cá đại dương.',
        depthLabel: '-30m đến -1.500m',
        color: '#29B4D1'
      },
      {
        code: 'TẦNG 4',
        name: 'Nền núi ngầm đáy biển & Thềm lục địa mở rộng',
        range: 'Độ sâu từ -1.500 m đến trên -4.000 m',
        regime: 'Chân đế địa chất cổ nâng đỡ toàn bộ quần đảo Hoàng Sa ở phía Bắc và quần đảo Trường Sa ở phía Nam Biển Đông; riêng cụm Tư Chính – Phúc Nguyên nằm trên thềm lục địa Nam Bộ.',
        depthLabel: '> -1.500m (Đáy Biển Đông)',
        color: '#113747'
      }
    ],
    dataTable: {
      title: 'Bảng so sánh đặc điểm địa lý tự nhiên và hành chính của Quần đảo Hoàng Sa và Quần đảo Trường Sa',
      sourceNote: 'Nguồn: SGK Địa lý 12 (GDPT 2018), Atlat Địa lý Việt Nam và Ủy ban Biên giới Quốc gia.',
      columns: ['Tiêu chí địa lý', 'Quần đảo Hoàng Sa', 'Quần đảo Trường Sa'],
      rows: [
        [
          'Phạm vi tọa độ địa lý',
          'Vĩ độ: 15°45\'B – 17°15\'B; Kinh độ: 111°00\'Đ – 113°00\'Đ (Phía Bắc Biển Đông).',
          'Vĩ độ: 06°30\'B – 12°00\'B; Kinh độ: 111°30\'Đ – 117°20\'Đ (Phía Nam Biển Đông).'
        ],
        [
          'Đơn vị hành chính trực thuộc',
          'Huyện Hoàng Sa, trực thuộc thành phố Đà Nẵng.',
          'Huyện Trường Sa, trực thuộc tỉnh Khánh Hòa (gồm thị trấn Trường Sa, xã Song Tử Tây, xã Sinh Tồn).'
        ],
        [
          'Khoảng cách tới đất liền / đảo gần nhất',
          'Cách đảo Lý Sơn (Quảng Ngãi) ~120 hải lý; cách TP. Đà Nẵng ~170 hải lý.',
          'Cách bán đảo Cam Ranh (Khánh Hòa) ~248 hải lý; cách đảo Phú Quý (Bình Thuận) ~205 hải lý.'
        ],
        [
          'Phân nhóm cấu trúc địa hình',
          'Chia thành 2 nhóm: Nhóm An Vĩnh (phía Đông) và Nhóm Lưỡi Liềm (phía Tây) với hơn 30 đảo, đá, cồn, bãi.',
          'Chia thành 8 cụm: Song Tử, Thị Tứ, Loại Ta, Nam Yết, Sinh Tồn, Trường Sa, Thám Hiểm và Bình Nguyên (hơn 100 đảo, đá, bãi).'
        ],
        [
          'Đảo tự nhiên lớn nhất & Điểm cao nhất',
          'Đảo lớn nhất: Đảo Phú Lâm (~1,5–2,1 km²). Cao nhất: Đảo Đá Bắc (~15,9 m).',
          'Đảo tự nhiên lớn nhất: Đảo Ba Bình (~0,46–0,5 km²). Cao nhất: Đảo Song Tử Tây (~4–6 m).'
        ]
      ]
    },
    importantCallout: {
      badge: 'KIẾN THỨC ĐỊA LÝ TRỌNG TÂM THPT',
      title: 'Đặc điểm khí hậu – hải văn Biển Đông cần nhớ trong kỳ thi Tốt nghiệp THPT',
      points: [
        'Tư liệu SGK Địa lý 12: Biển Đông có nhiệt độ nước biển tầng mặt trung bình năm trên 23°C; độ muối trung bình từ 32‰ – 34‰; dòng biển chảy thành các vòng hoàn lưu đổi chiều theo hai mùa gió (Đông Bắc và Tây Nam).',
        'Nhận định địa lý: Vịnh Bắc Bộ có chế độ nhật triều đều điển hình nhất thế giới; vùng biển Nam Trung Bộ (Khánh Hòa – Ninh Thuận – Bình Thuận) có vùng nước trồi tạo ngư trường lớn và độ mặn thuận lợi cho nghề làm muối.'
      ]
    }
  },

  'cd-05-kinh-te': {
    visualType: 'economicChart',
    visualBadge: 'Biểu đồ Kinh tế Biển (Đồ họa học thuật THPT)',
    visualTitle: 'Biểu đồ cấu trúc 6 ngành kinh tế biển chủ lực và Hệ thống cảng biển cửa ngõ quốc tế Việt Nam',
    visualSubtitle:
      'Theo thứ tự ưu tiên của Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045 và SGK Địa lý 12',
    metrics: [
      {
        rank: 'Ưu tiên số 1',
        sector: 'Du lịch và dịch vụ biển',
        indicator: 'Chuỗi trung tâm du lịch biển đảo quốc tế (Hạ Long – Cát Bà, Đà Nẵng – Hội An, Nha Trang, Phú Quốc)',
        progress: 96,
        tag: 'Động lực tăng trưởng xanh',
        color: '#113747'
      },
      {
        rank: 'Ưu tiên số 2',
        sector: 'Kinh tế hàng hải & Cảng biển nước sâu',
        indicator: '34 cảng biển quốc gia; cụm cảng cửa ngõ quốc tế Lạch Huyện (Hải Phòng), Liên Chiểu (Đà Nẵng), Cái Mép – Thị Vải',
        progress: 92,
        tag: 'Huyết mạch thương mại toàn cầu',
        color: '#29B4D1'
      },
      {
        rank: 'Ưu tiên số 3',
        sector: 'Khai thác dầu khí và tài nguyên khoáng sản biển',
        indicator: 'Các bể trầm tích Cửu Long, Nam Côn Sơn, Mã Lai – Thổ Chu, Sông Hồng; nâng cao năng lực chế biến sâu',
        progress: 86,
        tag: 'An ninh năng lượng quốc gia',
        color: '#1A718D'
      },
      {
        rank: 'Ưu tiên số 4',
        sector: 'Nuôi trồng và khai thác hải sản bền vững',
        indicator: '4 ngư trường trọng điểm; chuyển mạnh sang nuôi biển công nghệ cao và khai thác xa bờ gắn với chống khai thác IUU',
        progress: 89,
        tag: 'Sinh kế hàng triệu ngư dân',
        color: '#29B4D1'
      },
      {
        rank: 'Ưu tiên số 5',
        sector: 'Công nghiệp ven biển',
        indicator: '19 khu kinh tế ven biển (Vân Đồn, Đình Vũ – Cát Hải, Nghi Sơn, Vũng Áng, Chu Lai, Dung Quất, Vân Phong...)',
        progress: 82,
        tag: 'Công nghiệp công nghệ cao, sinh thái',
        color: '#1A718D'
      },
      {
        rank: 'Ưu tiên số 6',
        sector: 'Năng lượng tái tạo và các ngành kinh tế biển mới',
        indicator: 'Điện gió ngoài khơi, điện mặt trời ven biển, dược liệu biển, công nghệ sinh học biển',
        progress: 88,
        tag: 'Chuyển đổi năng lượng Net Zero 2050',
        color: '#29B4D1'
      }
    ],
    dataTable: {
      title: 'Bảng tổng hợp 4 ngư trường trọng điểm và các vùng kinh tế biển chủ lực của Việt Nam',
      sourceNote: 'Nguồn: SGK Địa lý 12 (Chương trình GDPT 2018) và Chiến lược phát triển bền vững kinh tế biển Việt Nam.',
      columns: ['Vùng biển / Ngư trường', 'Các tỉnh, thành phố và đảo trọng tâm', 'Thế mạnh kinh tế biển đặc trưng'],
      rows: [
        [
          '1. Ngư trường Hải Phòng – Quảng Ninh (Vịnh Bắc Bộ)',
          'Quảng Ninh, Hải Phòng; đảo Cát Bà, Cô Tô, Vân Đồn, Bạch Long Vĩ',
          'Cảng cửa ngõ quốc tế Lạch Huyện, Di sản thiên nhiên thế giới Vịnh Hạ Long – Cát Bà, nuôi trồng hải sản và đóng tàu.'
        ],
        [
          '2. Ngư trường Hoàng Sa – Trường Sa (Biển miền Trung)',
          'Đà Nẵng, Quảng Ngãi (Lý Sơn), Bình Định, Phú Yên, Khánh Hòa (Trường Sa)',
          'Đánh bắt cá ngừ đại dương xa bờ, cảng nước sâu Liên Chiểu – Dung Quất – Vân Phong – Cam Ranh, du lịch biển đảo.'
        ],
        [
          '3. Ngư trường Ninh Thuận – Bình Thuận – Bà Rịa - Vũng Tàu',
          'Ninh Thuận, Bình Thuận (Phú Quý), Bà Rịa – Vũng Tàu (Côn Đảo)',
          'Vùng nước trồi giàu tôm cá, trung tâm khai thác dầu khí thềm lục địa phía Nam, cảng Cái Mép – Thị Vải, điện gió ngoài khơi.'
        ],
        [
          '4. Ngư trường Cà Mau – Kiên Giang (Vịnh Thái Lan)',
          'Cà Mau, Kiên Giang (Phú Quốc, Thổ Chu, Nam Du, Kiên Hải)',
          'Ngư trường khai thác và nuôi biển quy mô lớn, trung tâm du lịch sinh thái biển đảo quốc tế Phú Quốc, cụm khí – điện – đạm.'
        ]
      ]
    },
    importantCallout: {
      badge: 'KIẾN THỨC KINH TẾ BIỂN XANH',
      title: 'Mối quan hệ hữu cơ giữa phát triển Kinh tế biển và Bảo vệ chủ quyền quốc gia',
      points: [
        'Tư liệu chính sách: Nghị quyết số 36-NQ/TW khẳng định phát triển bền vững kinh tế biển trên nền tảng tăng trưởng xanh, bảo tồn đa dạng sinh học luôn gắn chặt với bảo đảm quốc phòng – an ninh.',
        'Nhận định học thuật: Mỗi con tàu cá hợp pháp của ngư dân vươn khơi, mỗi giàn khoan dầu khí, tua-bin điện gió ngoài khơi và tuyến vận tải biển chính là những "cột mốc sống" khẳng định quyền chủ quyền và quyền tài phán của Việt Nam trên biển.'
      ]
    }
  },

  'cd-04-doi-song': {
    visualType: 'historicalInfographic',
    visualBadge: 'Infographic Đời sống & Hậu cần Biển đảo',
    visualTitle: 'Hệ thống thiết chế dân sinh, văn hóa, y tế, giáo dục và hậu cần nơi các xã đảo, thị trấn đảo tiền tiêu',
    visualSubtitle:
      'Sự kết hợp chặt chẽ giữa thế trận quốc phòng toàn dân và chăm lo đời sống quân – dân trên đảo',
    milestones: [
      {
        period: 'Hành chính & Dân cư',
        title: 'Hệ thống 12 huyện đảo, thành phố đảo và các xã đảo tiền tiêu',
        detail:
          'Từ Cô Tô, Vân Đồn, Cát Hải, Bạch Long Vĩ ở miền Bắc; Cồn Cỏ, Hoàng Sa, Lý Sơn ở miền Trung; Trường Sa, Phú Quý, Côn Đảo, Phú Quốc, Kiên Hải ở miền Nam với các hộ dân sinh sống ổn định.',
        primarySource: 'Niên giám Thống kê Việt Nam & Dữ liệu hành chính địa phương.'
      },
      {
        period: 'Giáo dục & Y tế',
        title: 'Trường học nơi đảo xa & Bệnh xá Quân dân y cấp cứu trên biển',
        detail:
          'Các trường tiểu học khang trang tại thị trấn Trường Sa, xã đảo Song Tử Tây, xã đảo Sinh Tồn, Đá Tây; hệ thống Trung tâm Y tế thị trấn Trường Sa và các bệnh xá kết nối hội chẩn y học từ xa (Telemedicine) với Bệnh viện Quân y 175, 108.',
        primarySource: 'Tư liệu Bộ Tư lệnh Hải quân & Sở Giáo dục - Đào tạo tỉnh Khánh Hòa.'
      },
      {
        period: 'Điểm tựa Ngư dân',
        title: 'Hệ thống Âu tàu, Làng chài & Trung tâm dịch vụ hậu cần nghề cá',
        detail:
          'Các âu tàu tại Song Tử Tây, Sinh Tồn, Trường Sa, Đá Tây, Tốc Tan... có sức chứa hàng trăm tàu cá tránh bão an toàn, cấp nước ngọt miễn phí, cung ứng nhiên liệu bằng giá đất liền và sửa chữa tàu thuyền.',
        primarySource: 'Chương trình "Hải quân Việt Nam làm điểm tựa cho ngư dân vươn khơi, bám biển".'
      },
      {
        period: 'Văn hóa & Tâm linh',
        title: 'Hải đăng, Trạm khí tượng, Chùa đảo và Đài tưởng niệm liệt sĩ',
        detail:
          'Hệ thống 9 ngọn hải đăng tại Trường Sa và các nhà giàn DK1 dẫn đường hàng hải quốc tế; các ngôi chùa trên đảo Trường Sa, Song Tử Tây, Sinh Tồn, Nam Yết, Sơn Ca, Phan Vinh với mái cong truyền thống hướng về Thủ đô Hà Nội.',
        primarySource: 'Tổng công ty Bảo đảm an toàn hàng hải Việt Nam & Tư liệu văn hóa biển đảo.'
      }
    ],
    dataTable: {
      title: 'Bảng tổng hợp hệ thống 12 đơn vị hành chính cấp huyện đảo và thành phố đảo của Việt Nam',
      sourceNote: 'Nguồn: Tổng cục Thống kê và Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018).',
      columns: ['STT', 'Đơn vị hành chính biển đảo', 'Tỉnh / Thành phố trực thuộc', 'Vùng biển / Đặc điểm nổi bật'],
      rows: [
        ['1', 'Huyện đảo Cô Tô', 'Tỉnh Quảng Ninh', 'Vịnh Bắc Bộ – Đảo tiền tiêu vùng Đông Bắc, giàu tiềm năng du lịch và thủy sản'],
        ['2', 'Huyện đảo Vân Đồn', 'Tỉnh Quảng Ninh', 'Vịnh Bái Tử Long – Khu kinh tế ven biển, thương cảng cổ Vân Đồn lịch sử'],
        ['3', 'Huyện đảo Cát Hải (gồm quần đảo Cát Bà)', 'Thành phố Hải Phòng', 'Cảng cửa ngõ quốc tế Lạch Huyện & Khu dự trữ sinh quyển thế giới Cát Bà'],
        ['4', 'Huyện đảo Bạch Long Vĩ', 'Thành phố Hải Phòng', 'Đảo xa bờ nhất trong Vịnh Bắc Bộ, trung tâm hậu cần nghề cá và bảo tồn biển'],
        ['5', 'Huyện đảo Cồn Cỏ', 'Tỉnh Quảng Trị', 'Đảo tiền tiêu anh hùng cửa ngõ phía Nam Vịnh Bắc Bộ, cấu tạo đá bazan'],
        ['6', 'Huyện đảo Hoàng Sa', 'Thành phố Đà Nẵng', 'Quần đảo tiền tiêu phía Bắc Biển Đông (Nhóm An Vĩnh và Nhóm Lưỡi Liềm)'],
        ['7', 'Huyện đảo Lý Sơn', 'Tỉnh Quảng Ngãi', 'Quê hương Đội Hoàng Sa kiêm quản Bắc Hải, di sản địa chất núi lửa cổ'],
        ['8', 'Huyện đảo Trường Sa', 'Tỉnh Khánh Hòa', 'Quần đảo tiền tiêu phía Nam Biển Đông (Thị trấn Trường Sa, xã Song Tử Tây, xã Sinh Tồn)'],
        ['9', 'Huyện đảo Phú Quý', 'Tỉnh Bình Thuận', 'Trung tâm dịch vụ hậu cần nghề cá xa bờ và năng lượng tái tạo Nam Trung Bộ'],
        ['10', 'Huyện đảo Côn Đảo', 'Tỉnh Bà Rịa – Vũng Tàu', 'Di tích lịch sử quốc gia đặc biệt và Vườn quốc gia bảo tồn rùa biển'],
        ['11', 'Huyện đảo Kiên Hải (Nam Du, Hòn Tre, Bà Lụa)', 'Tỉnh Kiên Giang', 'Vùng biển Tây Nam, phát triển mạnh nghề nuôi biển lồng bè và du lịch'],
        ['12', 'Thành phố đảo Phú Quốc (gồm quần đảo Thổ Chu, An Thới)', 'Tỉnh Kiên Giang', 'Thành phố đảo đầu tiên của Việt Nam, đảo lớn nhất nước ta (574 km²)']
      ]
    },
    importantCallout: {
      badge: 'CÂU CHUYỆN NHÂN VĂN NƠI ĐẢO XA',
      title: 'Sức sống mãnh liệt của những loài cây biểu tượng nơi quần đảo Trường Sa',
      points: [
        'Tư liệu thực tế: Trên các đảo thuộc quần đảo Trường Sa, bốn loài cây biểu tượng có khả năng chịu gió bão, hơi muối mặn và nắng hạn khắc nghiệt nhất là: Cây Bàng vuông, Cây Phong ba, Cây Bão táp và Cây Mù u.',
        'Nhận định giáo dục: Chương trình "Xanh hóa Trường Sa" cùng hệ thống nhà lưới trồng rau và điện mặt trời – điện gió đã biến những đảo cát san hô nắng gió thành những pháo đài xanh giữa trùng khơi.'
      ]
    }
  },

  'cd-06-moi-truong': {
    visualType: 'ecosystemDiagram',
    visualBadge: 'Sơ đồ Sinh thái & Bảo tồn Biển (Đồ họa học thuật Sinh – Địa THPT)',
    visualTitle: 'Sơ đồ liên kết 3 Hệ sinh thái biển trọng yếu của Việt Nam: Rừng ngập mặn – Thảm cỏ biển – Rạn san hô',
    visualSubtitle:
      'Chuỗi lá chắn sinh học tự nhiên bảo vệ bờ biển, lưu trữ Carbon xanh (Blue Carbon) và duy trì nguồn lợi thủy sản',
    ecosystems: [
      {
        name: '1. Hệ sinh thái Rừng ngập mặn (Mangrove Forests)',
        zone: 'Vùng triều ven bờ và cửa sông (Quảng Ninh, Hải Phòng, Thái Bình, Nam Định, Cần Giờ, Cà Mau, Kiên Giang)',
        biodiversity: 'Cây đước, mắm, vẹt, bần, trang; nơi sinh sản của tôm, cua, cá con và chim nước di cư.',
        ecologicalRole:
          '"Bức tường xanh" giảm tới 50–80% năng lượng sóng bão, chống xói lở bờ biển, lọc chất ô nhiễm từ lục địa và hấp thụ Carbon gấp 3–5 lần rừng trên cạn.',
        threat: 'Chặt phá rừng làm đầm nuôi quảng canh, sạt lở bờ biển và nước biển dâng.',
        color: '#29B4D1'
      },
      {
        name: '2. Hệ sinh thái Thảm cỏ biển (Seagrass Beds)',
        zone: 'Vùng nước nông ven bờ và đầm phá quanh đảo (Hạ Long, Tam Giang – Cầu Hai, Nha Trang, Phú Quý, Côn Đảo, Phú Quốc)',
        biodiversity: 'Hơn 14 loài cỏ biển; nơi kiếm ăn duy nhất của bò biển (Dugong), rùa biển xanh (Vích) và cá ngựa.',
        ecologicalRole:
          'Ổn định nền đáy cát bùn, làm trong nước biển nhờ giữ trầm tích lơ lửng, cung cấp oxy hòa tan và làm cầu nối dinh dưỡng giữa rừng ngập mặn và rạn san hô.',
        threat: 'Giã cào đáy hủy diệt, ô nhiễm bùn cát bồi lấp và suy giảm chất lượng nước ven bờ.',
        color: '#29B4D1'
      },
      {
        name: '3. Hệ sinh thái Rạn san hô (Coral Reefs)',
        zone: 'Vùng biển nước trong, ấm quanh các đảo (Hoàng Sa, Trường Sa, Cù Lao Chàm, Lý Sơn, Nha Trang, Ninh Thuận, Côn Đảo, Phú Quốc)',
        biodiversity: 'Khoảng 400+ loài san hô tạo rạn (diện tích >1.100 km²); nơi cư trú của hơn 25% tổng số loài sinh vật biển.',
        ecologicalRole:
          '"Rừng mưa nhiệt đới dưới đáy đại dương", tạo đê chắn sóng tự nhiên bảo vệ nền móng các đảo san hô Hoàng Sa, Trường Sa khỏi sạt lở.',
        threat: 'Hiện tượng tẩy trắng san hô (Coral Bleaching) do nhiệt độ nước biển tăng, rác thải nhựa, lưới ma và khai thác tận diệt.',
        color: '#29B4D1'
      }
    ],
    dataTable: {
      title: 'Bảng phân tích các nguy cơ môi trường biển và giải pháp bảo tồn theo Luật Bảo vệ môi trường & Luật Tài nguyên biển',
      sourceNote: 'Nguồn: Bộ Tài nguyên và Môi trường, SGK Sinh học 12 & Địa lý 12 (GDPT 2018).',
      columns: ['Thách thức môi trường biển', 'Nguyên nhân chủ yếu', 'Hậu quả sinh thái – kinh tế', 'Giải pháp khoa học & Hành động của Học sinh THPT'],
      rows: [
        [
          '1. Ô nhiễm rác thải nhựa đại dương & hạt vi nhựa',
          'Nhựa dùng một lần từ đất liền theo sông ra biển, ngư cụ bị thất lạc ("lưới ma").',
          'Sinh vật biển (rùa biển, cá, chim biển) nuốt phải nhựa; hạt vi nhựa đi vào chuỗi thức ăn của con người.',
          'Thực hành 3R (Giảm thiểu – Tái sử dụng – Tái chế), nói không với đồ nhựa dùng một lần khi đi du lịch biển đảo.'
        ],
        [
          '2. Suy thoái & tẩy trắng rạn san hô',
          'Nhiệt độ nước biển tăng do biến đổi khí hậu (El Niño), ô nhiễm nước, khai thác san hô trái phép.',
          'San hô mất tảo cộng sinh Zooxanthellae dẫn đến chết trắng, làm mất nơi cư trú của các loài cá rạn.',
          'Bảo vệ nghiêm ngặt 16 khu bảo tồn biển quốc gia; phục hồi và trồng cấy san hô nhân tạo; không giẫm đạp lên san hô.'
        ],
        [
          '3. Khai thác thủy sản bất hợp pháp (IUU) & Tận diệt',
          'Sử dụng chất nổ, xung điện, chất độc, lưới mắt nhỏ hoặc đánh bắt vào mùa sinh sản.',
          'Cạn kiệt nguồn lợi thủy sản ven bờ, hủy hoại nền đáy thảm cỏ biển và rạn san hô.',
          'Tuân thủ Luật Thủy sản 2017, chống khai thác IUU, chuyển sang nuôi biển sinh thái bền vững.'
        ],
        [
          '4. Biến đổi khí hậu, nước biển dâng & Xâm nhập mặn',
          'Phát thải khí nhà kính toàn cầu làm băng tan và giãn nở nhiệt nước đại dương.',
          'Xói lở bờ biển, xâm nhập mặn sâu vào Đồng bằng sông Cửu Long, đe dọa các đảo thấp.',
          'Trồng và phục hồi rừng ngập mặn ven biển, phát triển năng lượng tái tạo (điện gió, điện mặt trời).'
        ]
      ]
    },
    importantCallout: {
      badge: 'KIẾN THỨC SINH HỌC – ĐỊA LÝ LIÊN MÔN',
      title: 'Vì sao Rạn san hô có vai trò sống còn đối với sự tồn tại của Hoàng Sa và Trường Sa?',
      points: [
        'Cơ sở khoa học tự nhiên: Toàn bộ các đảo, đá thuộc hai quần đảo Hoàng Sa và Trường Sa đều được kiến tạo từ bộ khung đá vôi canxi cacbonat (CaCO₃) của san hô qua hàng vạn năm.',
        'Nhận định bảo tồn: Bảo vệ rạn san hô khỏe mạnh quanh đảo chính là bảo vệ phần "chân đế tự nhiên" và "đê chắn sóng sinh học" giúp các đảo đứng vững trước sóng bão đại dương.'
      ]
    }
  },

  'cd-07-tuoi-tre': {
    visualType: 'mindmap',
    visualBadge: 'Sơ đồ tư duy Công dân số & Trách nhiệm Thanh niên',
    visualTitle: 'Sơ đồ tư duy: Cẩm nang "Chủ quyền số" và Trách nhiệm của Học sinh THPT đối với Biển đảo Tổ quốc',
    visualSubtitle:
      'Kết hợp tri thức Lịch sử – Pháp lý với bản lĩnh nhận diện thông tin trên không gian mạng và trí tuệ nhân tạo (AI)',
    centerNode: {
      title: 'HỌC SINH THPT VỚI BIỂN ĐẢO',
      subtitle: 'Hiểu đúng • Tin chuẩn • Hành động thiết thực'
    },
    branches: [
      {
        title: '1. Trang bị Tri thức Chuẩn mực',
        color: '#29B4D1',
        items: [
          'Nắm vững sử liệu gốc: Đội Hoàng Sa – Bắc Hải, Châu bản triều Nguyễn, Đại Nam nhất thống toàn đồ.',
          'Hiểu rõ cơ sở pháp lý: Công ước Luật Biển UNCLOS 1982 và Luật Biển Việt Nam năm 2012.',
          'Phân biệt chính xác: Chủ quyền quốc gia, Quyền chủ quyền và Quyền tài phán trên 5 vùng biển.',
          'Biết rõ tọa độ, đơn vị hành chính của huyện đảo Hoàng Sa (Đà Nẵng) và huyện đảo Trường Sa (Khánh Hòa).'
        ]
      },
      {
        title: '2. Bảo vệ Chủ quyền trên Không gian mạng',
        color: '#113747',
        items: [
          'Kiên quyết kiểm tra bản đồ Việt Nam trước khi đưa vào bài thuyết trình, video, poster, ấn phẩm học tập.',
          'Bản đồ Việt Nam bắt buộc phải thể hiện đầy đủ hai quần đảo Hoàng Sa và Trường Sa.',
          'Tuyệt đối không tải, không sử dụng, không chia sẻ hình ảnh/ứng dụng/phim ảnh cài cắm "đường lưỡi bò" phi pháp.',
          'Báo cáo (Report) và thông tin cho thầy cô, cơ quan chức năng khi phát hiện ấn phẩm vi phạm chủ quyền.'
        ]
      },
      {
        title: '3. Ứng dụng AI & Công nghệ số có trách nhiệm',
        color: '#113747',
        items: [
          'Luôn kiểm chứng (Fact-check) các câu trả lời hoặc hình ảnh bản đồ do AI tạo sinh bằng nguồn chính thống.',
          'Sử dụng tên gọi tiếng Việt chuẩn xác: Biển Đông (East Sea), Quần đảo Hoàng Sa, Quần đảo Trường Sa.',
          'Xây dựng các sản phẩm số (website, infographic, podcast, triển lãm số) giới thiệu biển đảo Việt Nam ra thế giới.'
        ]
      },
      {
        title: '4. Phong trào Hành động & Định hướng Nghề nghiệp',
        color: '#29B4D1',
        items: [
          'Tham gia cuộc thi "Em yêu biển, đảo quê hương", viết thư và gửi quà tặng chiến sĩ Trường Sa, Nhà giàn DK1.',
          'Thực hành lối sống xanh, giảm rác thải nhựa bảo vệ môi trường biển.',
          'Định hướng nghề nghiệp tương lai: Hải quân, Cảnh sát biển, Hàng hải, Logistics, Hải dương học, Năng lượng tái tạo, Luật quốc tế.'
        ]
      }
    ],
    dataTable: {
      title: 'Bảng quy tắc "5 KIỂM CHỨNG" dành cho Học sinh THPT khi sử dụng bản đồ và tư liệu biển đảo trên môi trường số',
      sourceNote: 'Nguồn: Luật Đo đạc và Bản đồ năm 2018 (Điều 11, Điều 29) và Hướng dẫn giáo dục chủ quyền biển đảo cấp THPT.',
      columns: ['Bước kiểm tra', 'Nội dung cần rà soát kỹ', 'Dấu hiệu vi phạm cần loại bỏ ngay', 'Cách xử lý chuẩn mực của Học sinh THPT'],
      rows: [
        [
          '1. Kiểm tra hai quần đảo Hoàng Sa & Trường Sa',
          'Quan sát vùng biển phía Đông bản đồ Việt Nam trong slide, poster, video.',
          'Bản đồ lãnh thổ Việt Nam nhưng cắt bỏ hoặc làm mờ không vẽ Hoàng Sa, Trường Sa.',
          'Thay thế ngay bằng bản đồ chuẩn từ Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam hoặc Atlat Địa lý Việt Nam.'
        ],
        [
          '2. Kiểm tra đường biên giới và vùng biển',
          'Quan sát các đường kẻ đứt đoạn trên khu vực Biển Đông.',
          'Xuất hiện đường đứt khúc 9 đoạn / 10 đoạn ("đường lưỡi bò") phi pháp bao chiếm Biển Đông.',
          'Tuyệt đối không sử dụng hình ảnh, mẫu template (Canva, PowerPoint...) hoặc ứng dụng có chứa đường yêu sách phi pháp này.'
        ],
        [
          '3. Kiểm tra danh xưng địa lý (Toponymy)',
          'Kiểm tra tên gọi vùng biển và tên các đảo trên bản đồ tiếng Việt/tiếng Anh.',
          'Ghi sai tên Biển Đông hoặc ghi tên nước ngoài trái phép cho các đảo thuộc chủ quyền Việt Nam.',
          'Sử dụng chuẩn danh xưng "Biển Đông" (quốc tế: East Sea / Bien Dong Sea), "Quần đảo Hoàng Sa" (Paracel Islands), "Quần đảo Trường Sa" (Spratly Islands).'
        ],
        [
          '4. Kiểm tra kết quả từ công cụ AI tạo sinh',
          'Đọc kỹ thông tin lịch sử, tọa độ, số liệu hoặc hình ảnh bản đồ do AI vẽ.',
          'AI tự bịa ra niên đại, tên văn bản không có thật hoặc vẽ sai hình dáng lãnh thổ, hải đảo.',
          'Đối chiếu chéo với Sách giáo khoa GDPT 2018, Luật Biển Việt Nam 2012 và Thư viện Tri thức chính thống trước khi trích dẫn.'
        ],
        [
          '5. Kiểm tra nguồn trích dẫn học thuật',
          'Kiểm tra tác giả, cơ quan xuất bản và năm công bố của tư liệu.',
          'Tin đồn thất thiệt, bài viết ẩn danh câu view, cắt ghép lịch sử thiếu kiểm chứng.',
          'Chỉ trích dẫn nguồn từ cơ quan nhà nước, sách giáo khoa, công trình sử học – pháp lý đã được thẩm định.'
        ]
      ]
    },
    importantCallout: {
      badge: 'QUY ĐỊNH PHÁP LUẬT VỀ BẢN ĐỒ QUỐC GIA',
      title: 'Hành vi thể hiện sai hoặc không thể hiện chủ quyền quốc gia trên bản đồ là vi phạm pháp luật',
      points: [
        'Tư liệu pháp luật: Khoản 1 Điều 6 Luật Đo đạc và Bản đồ năm 2018 nghiêm cấm hành vi: "Xuất bản, lưu hành sản phẩm đo đạc và bản đồ, xuất bản phẩm bản đồ có liên quan đến chủ quyền lãnh thổ quốc gia mà không thể hiện hoặc thể hiện không đúng chủ quyền, biên giới quốc gia theo quy định của pháp luật".',
        'Nhận định công dân số: Mỗi học sinh THPT khi thuyết trình, thiết kế báo tường hay đăng bài trên mạng xã hội đều là một "đại sứ chủ quyền số" bảo vệ sự toàn vẹn lãnh thổ Việt Nam.'
      ]
    }
  }
}
