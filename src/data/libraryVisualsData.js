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

// DỮ LIỆU ĐỒ HỌA HỌC THUẬT RIÊNG BIỆT CHO TỪNG BÀI HỌC (19 BÀI HỌC = 19 SƠ ĐỒ & BẢNG DỮ LIỆU ĐỘC LẬP)
export const LESSON_ACADEMIC_VISUALS = {
  // ================= CHUYÊN ĐỀ 01 (3 BÀI) =================
  'cd01-bai-01': {
    visualType: 'geographicalDiagram',
    diagramVariant: 'geo-regions',
    visualBadge: 'Sơ đồ Không gian Địa lý – Địa chiến lược Biển Việt Nam',
    visualTitle: 'Sơ đồ phân vùng không gian bờ biển Việt Nam (3.260 km) và vị trí địa chiến lược Biển Đông',
    visualSubtitle:
      'Trải dài từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang) qua 28 tỉnh, thành phố ven biển gắn liền với đại dương khoảng 3,447 triệu km²',
    zones: [
      {
        code: 'PHÂN KHU 1',
        name: 'Vùng biển & Bờ biển Bắc Bộ (Quảng Ninh – Ninh Bình)',
        range: 'Vịnh Bắc Bộ rộng ~126.250 km² (độ sâu trung bình < 50m)',
        regime: 'Bờ biển khúc khuỷu với hàng nghìn đảo đá vôi (Hạ Long – Bái Tử Long – Cát Bà), châu thổ sông Hồng bồi tụ và chế độ nhật triều đều điển hình.',
        depthLabel: 'Móng Cái → Kim Sơn (~500 km)',
        color: '#29B4D1'
      },
      {
        code: 'PHÂN KHU 2',
        name: 'Dải bờ biển Bắc & Nam Trung Bộ (Thanh Hóa – Bình Thuận)',
        range: 'Tiếp giáp trực tiếp vùng biển sâu trung tâm Biển Đông',
        regime: 'Bờ biển mài mòn – bồi tụ xen kẽ nhiều vũng, vịnh nước sâu (Chân Mây, Đà Nẵng, Dung Quất, Quy Nhơn, Vân Phong, Cam Ranh) và 11 điểm mốc đường cơ sở.',
        depthLabel: 'Nga Sơn → Tuy Phong (~1.900 km)',
        color: '#113747'
      },
      {
        code: 'PHÂN KHU 3',
        name: 'Vùng biển Đông Nam Bộ & Cửa sông Cửu Long (Bà Rịa - Vũng Tàu – Cà Mau)',
        range: 'Thềm lục địa phía Nam rộng, thoải và giàu trầm tích dầu khí',
        regime: 'Gắn với cụm cảng nước sâu Cái Mép – Thị Vải, quần đảo Côn Đảo, các bể trầm tích Cửu Long – Nam Côn Sơn và hệ rừng ngập mặn châu thổ.',
        depthLabel: 'Vũng Tàu → Mũi Cà Mau (~500 km)',
        color: '#1A718D'
      },
      {
        code: 'PHÂN KHU 4',
        name: 'Vùng biển Tây Nam & Vịnh Thái Lan (Cà Mau – Kiên Giang)',
        range: 'Từ Mũi Cà Mau đến Hà Tiên (Vĩ độ ~8°34\'B – 10°22\'B)',
        regime: 'Vùng biển nông, kín gió, ít bão trực tiếp; quy tụ Thành phố đảo Phú Quốc (574 km²), quần đảo Thổ Chu, Nam Du, Bà Lụa và ngư trường trọng điểm Tây Nam.',
        depthLabel: 'Mũi Cà Mau → Hà Tiên (~360 km)',
        color: '#29B4D1'
      }
    ],
    dataTable: {
      title: 'Bảng thông số địa lý – tự nhiên tổng quát của Biển Đông và vùng biển Việt Nam',
      sourceNote: 'Nguồn: SGK Địa lý 12 (GDPT 2018), Atlat Địa lý Việt Nam và Ủy ban Biên giới Quốc gia.',
      columns: ['Chỉ tiêu địa lý tự nhiên', 'Thông số chuẩn xác', 'Ý nghĩa địa chiến lược & kinh tế'],
      rows: [
        [
          '1. Diện tích toàn Biển Đông',
          'Khoảng 3.447.000 km² (Biển lớn thứ 2 ở Thái Bình Dương)',
          'Cầu nối hàng hải huyết mạch giữa Thái Bình Dương và Ấn Độ Dương qua eo biển Malacca.'
        ],
        [
          '2. Diện tích vùng biển Việt Nam',
          'Khoảng trên 1.000.000 km² (Gấp ~3 lần diện tích đất liền)',
          'Mở rộng không gian sinh tồn, phát triển kinh tế biển xanh và bảo vệ Tổ quốc từ hướng biển.'
        ],
        [
          '3. Chiều dài đường bờ biển',
          '3.260 km (Từ Móng Cái, Quảng Ninh đến Hà Tiên, Kiên Giang)',
          '28/63 tỉnh, thành phố giáp biển; bình quân cứ 100 km² đất liền có 1 km bờ biển (gấp 6 lần trung bình thế giới).'
        ],
        [
          '4. Hệ thống các eo biển thông ra đại dương',
          'Malacca, Sunda, Lombok (phía Nam); Bashi, Đài Loan (phía Bắc)',
          '45% khối lượng hàng hóa thương mại hàng hải toàn cầu đi qua tuyến đường biển quốc tế này.'
        ]
      ]
    },
    importantCallout: {
      badge: 'TRỌNG TÂM ĐỊA LÝ BIỂN ĐÔNG',
      title: 'Hai đặc trưng tự nhiên cốt lõi quy định toàn bộ thiên nhiên vùng biển Việt Nam',
      points: [
        'Tư liệu SGK Địa lý 12: Biển Đông là một biển tương đối kín (được bao bọc bởi lục địa châu Á và vòng cung đảo) và nằm hoàn toàn trong vùng nhiệt đới ẩm gió mùa Đông Nam Á.',
        'Hệ quả tự nhiên: Tính chất khép kín kết hợp với hai mùa gió Đông Bắc – Tây Nam tạo nên hệ thống dòng hải lưu chảy khép kín đổi chiều theo mùa và chế độ thủy triều phức tạp, độc đáo bậc nhất thế giới.'
      ]
    }
  },

  'cd01-bai-02': TOPIC_ACADEMIC_VISUALS['cd-01-tong-quan'],

  'cd01-bai-03': {
    visualType: 'mindmap',
    diagramVariant: 'island-system-mindmap',
    visualBadge: 'Sơ đồ Hệ thống Đảo, Quần đảo & Thế trận Biển đảo',
    visualTitle: 'Sơ đồ cấu trúc hệ thống hơn 3.000 đảo ven bờ, 12 đơn vị hành chính đảo và 2 quần đảo tiền tiêu',
    visualSubtitle:
      'Sự gắn kết chặt chẽ giữa dải bờ biển đất liền – hệ thống đảo ven bờ – quần đảo Hoàng Sa, Trường Sa ngoài khơi xa',
    centerNode: {
      title: 'HỆ THỐNG ĐẢO & QUẦN ĐẢO VN',
      subtitle: '3.000+ Đảo ven bờ • 12 Huyện/TP Đảo • 2 Quần đảo xa bờ'
    },
    branches: [
      {
        title: '1. Hệ thống hơn 3.000 đảo ven bờ',
        color: '#113747',
        items: [
          'Khoảng 80% số đảo tập trung tại vùng biển Đông Bắc và Vịnh Bắc Bộ (Quảng Ninh, Hải Phòng).',
          'Các đảo có diện tích lớn: Phú Quốc (574 km²), Cái Bầu (~172 km²), Cát Bà (~140 km²), Côn Sơn (~51,5 km²).',
          'Đảo tiền tiêu dùng làm điểm chuẩn xác định Đường cơ sở: Cồn Cỏ, Lý Sơn, Cù Lao Chàm, Phú Quý, Côn Đảo, Thổ Chu, Hòn Khoai.'
        ]
      },
      {
        title: '2. Hai quần đảo xa bờ giữa Biển Đông',
        color: '#29B4D1',
        items: [
          'Quần đảo Hoàng Sa (Huyện Hoàng Sa, TP. Đà Nẵng): Gồm nhóm An Vĩnh và nhóm Lưỡi Liềm ở phía Bắc Biển Đông.',
          'Quần đảo Trường Sa (Huyện Trường Sa, tỉnh Khánh Hòa): Gồm 8 cụm đảo, đá, bãi san hô ở phía Nam Biển Đông.',
          'Pháo đài tiền tiêu bảo vệ sườn phía Đông Tổ quốc và bảo đảm an toàn hàng hải quốc tế.'
        ]
      },
      {
        title: '3. Mạng lưới 12 Huyện đảo & Thành phố đảo',
        color: '#1A718D',
        items: [
          'Miền Bắc (4 huyện đảo): Cô Tô, Vân Đồn (Quảng Ninh); Cát Hải, Bạch Long Vĩ (Hải Phòng).',
          'Miền Trung (5 huyện đảo): Cồn Cỏ (Quảng Trị), Hoàng Sa (Đà Nẵng), Lý Sơn (Quảng Ngãi), Trường Sa (Khánh Hòa), Phú Quý (Bình Thuận).',
          'Miền Nam (2 huyện đảo, 1 TP đảo): Côn Đảo (BR-VT); Kiên Hải và TP. Phú Quốc (Kiên Giang).'
        ]
      },
      {
        title: '4. Vai trò Chiến lược Kinh tế – Quốc phòng',
        color: '#29B4D1',
        items: [
          'Căn cứ hậu cần nghề cá, tránh trú bão, tìm kiếm cứu nạn và phát triển kinh tế biển xa bờ.',
          'Mốc tọa độ pháp lý xác lập lãnh hải, vùng đặc quyền kinh tế và thềm lục địa.',
          'Tuyến phòng thủ liên hoàn nhiều tầng bảo vệ vững chắc chủ quyền đất liền và vùng trời, vùng biển.'
        ]
      }
    ],
    dataTable: {
      title: 'Bảng phân loại hệ thống đảo, quần đảo Việt Nam theo vị trí địa lý và chức năng chiến lược',
      sourceNote: 'Nguồn: SGK Địa lý 12 (GDPT 2018) và Luật Biển Việt Nam năm 2012.',
      columns: ['Nhóm đảo / Quần đảo', 'Các đảo tiêu biểu', 'Đặc điểm tự nhiên & Dân cư', 'Vai trò chiến lược trọng tâm'],
      rows: [
        [
          '1. Hệ thống đảo vùng Đông Bắc & Vịnh Bắc Bộ',
          'Cái Bầu, Cát Bà, Cô Tô, Vĩnh Thực, Bạch Long Vĩ',
          'Đảo đá vôi karst và đảo cấu tạo trầm tích; Bạch Long Vĩ nằm giữa Vịnh Bắc Bộ.',
          'Phát triển du lịch sinh thái biển đảo quốc tế, cảng nước sâu, bảo tồn sinh quyển và hậu cần nghề cá Vịnh Bắc Bộ.'
        ],
        [
          '2. Chuỗi đảo ven bờ Bắc & Nam Trung Bộ',
          'Hòn Mê, Cồn Cỏ, Cù Lao Chàm, Lý Sơn, Hòn Lớn, Phú Quý',
          'Cấu tạo đá núi lửa bazan (Cồn Cỏ, Lý Sơn, Phú Quý) hoặc đá granit; dân cư mật độ cao.',
          'Các điểm mốc đường cơ sở quốc gia (A6–A11), trung tâm kinh tế huyện đảo và căn cứ vươn khơi Hoàng Sa – Trường Sa.'
        ],
        [
          '3. Hệ thống đảo vùng biển Nam Bộ & Tây Nam',
          'Côn Đảo, Hòn Khoai, Phú Quốc, Thổ Chu, Nam Du',
          'Đảo lục địa diện tích lớn, thảm rừng nguyên sinh phong phú, nguồn nước ngọt dồi dào.',
          'Điểm mốc đường cơ sở (A1–A5), trung tâm du lịch – dịch vụ quốc tế (Phú Quốc) và bảo tồn lịch sử – sinh thái (Côn Đảo).'
        ],
        [
          '4. Hai quần đảo xa bờ (Hoàng Sa & Trường Sa)',
          'Phú Lâm, Hoàng Sa, Tri Tôn; Trường Sa, Song Tử Tây, Sinh Tồn, Ba Bình, An Bang...',
          'Quần đảo san hô vòng (Atoll) nằm giữa vùng biển sâu Biển Đông.',
          'Lãnh thổ thiêng liêng bất khả xâm phạm; lá chắn quốc phòng – an ninh và trạm khí tượng, hải đăng quốc tế.'
        ]
      ]
    },
    importantCallout: {
      badge: 'GHI NHỚ CHIẾN LƯỢC BIỂN ĐẢO',
      title: 'Mối quan hệ biện chứng giữa Đất liền – Đảo ven bờ – Quần đảo xa bờ',
      points: [
        'Tư liệu chiến lược: Đất liền là hậu phương vững chắc cung cấp nguồn lực; hệ thống đảo ven bờ là bàn đạp trung chuyển hậu cần; hai quần đảo Hoàng Sa và Trường Sa là tiền đồn bảo vệ từ xa.',
        'Nhận định học thuật: Hệ thống 11 điểm chuẩn Đường cơ sở (A1 đến A11) của Việt Nam có tới 10 điểm đặt trên các đảo tiền tiêu ven bờ (từ Hòn Nhạn ở Thổ Chu đến Cồn Cỏ ở Quảng Trị).'
      ]
    }
  },

  // ================= CHUYÊN ĐỀ 02 (3 BÀI) =================
  'cd02-bai-01': {
    visualType: 'historicalInfographic',
    diagramVariant: 'hoang-sa-flotilla',
    visualBadge: 'Infographic Lịch sử Thế kỷ XVII – XVIII (Chúa Nguyễn & Triều Tây Sơn)',
    visualTitle: 'Chu kỳ hải trình hằng năm (Tháng 2 – Tháng 8 âm lịch) và Cơ cấu tổ chức Đội Hoàng Sa kiêm quản Bắc Hải',
    visualSubtitle:
      'Tổ chức bán quân sự đặc biệt do Nhà nước thành lập, cấp giấy sai phái, cấp 6 tháng lương thực thực thi chủ quyền liên tục suốt hơn 2 thế kỷ',
    milestones: [
      {
        period: 'Bước 1: Tuyển chọn & Lễ Khao lề',
        title: 'Tuyển 70 suất đinh xã An Vĩnh, An Hải & Lễ Khao lề thế lính Hoàng Sa',
        detail:
          'Chúa Nguyễn tuyển chọn 70 suất đinh khỏe mạnh, giỏi bơi lội và thôngạo luồng lạch biển khơi tại hai xã An Vĩnh, An Hải (huyện Bình Sơn, phủ Quảng Ngãi). Trước khi ra khơi làm lễ Khao lề thế lính tại đình làng Lý Sơn.',
        primarySource: 'Phủ biên tạp lục (Lê Quý Đôn, 1776) & Di sản văn hóa phi vật thể quốc gia Lễ Khao lề thế lính Hoàng Sa.'
      },
      {
        period: 'Bước 2: Cấp Bằng sắc & Xuất phát (Tháng 2 ÂL)',
        title: 'Nhận Giấy sai phái Nhà nước, 6 tháng lương thực và xuất phát từ cửa biển Sa Kỳ – Cù Lao Ré',
        detail:
          'Tháng 2 âm lịch hằng năm, Nhà nước cấp giấy sai phái (trát sai), mỗi suất đinh được cấp 6 tháng lương ăn, miễn thuế sưu dịch; đi trên 5 chiếc thuyền câu vượt biển suốt 3 ngày 3 đêm ra quần đảo Hoàng Sa.',
        primarySource: 'Toản tập Thiên Nam tứ chí lộ đồ thư (Đỗ Bá, 1686) và Đại Nam thực lục tiền biên.'
      },
      {
        period: 'Bước 3: Tuần tiễu & Thực thi tại Quần đảo (Tháng 3 – 7 ÂL)',
        title: 'Thu lượm hóa vật, hải sản quý tại Hoàng Sa & Đội Bắc Hải tuần tiễu Trường Sa',
        detail:
          'Tại Hoàng Sa, các đội binh dựng lều cỏ, thu lượm súng đồng, gươm, bạc, tiền cổ từ các tàu đắm và đồi mồi, hải sâm, ốc hoa. Đồng thời lập thêm Đội Bắc Hải do Đội Hoàng Sa kiêm quản đi ra khu vực Bắc Hải, Côn Lôn, Hà Tiên (Trường Sa).',
        primarySource: 'Tờ đơn xin cấp chỉ sai ngày 15 tháng Giêng năm Cảnh Hưng thứ 36 (1775) của Hà Liễu (Lý Sơn).'
      },
      {
        period: 'Bước 4: Hồi hương & Dâng nộp Phú Xuân (Tháng 8 ÂL)',
        title: 'Trở về cửa Eo (Thuận An), dâng nộp hóa vật tại kinh thành Phú Xuân và nhận ban thưởng',
        detail:
          'Đến tháng 8 âm lịch, Đội Hoàng Sa và Đội Bắc Hải dong thuyền về cửa Eo (Thuận An, Huế), đến dinh Phú Xuân khám nghiệm, cân đếm và nộp các hóa vật thu được cho triều đình, được cấp bằng chứng nhận và ban thưởng.',
        primarySource: 'Sắc chỉ của Thái sư Thượng phụ Bùi Đắc Tuyên triều Tây Sơn ngày 14/2 năm Cảnh Thịnh thứ 2 (1794) giao Đội trưởng Hội Đức hầu.'
      }
    ],
    dataTable: {
      title: 'Bảng đối chiếu cơ cấu tổ chức, phạm vi hoạt động và quy chế Nhà nước của Đội Hoàng Sa và Đội Bắc Hải',
      sourceNote: 'Nguồn: Phủ biên tạp lục (Lê Quý Đôn, 1776), Đại Nam thực lục tiền biên và Tư liệu tộc họ tại huyện đảo Lý Sơn.',
      columns: ['Tiêu chí sử học', 'Đội Hoàng Sa (Thế kỷ XVII – XVIII)', 'Đội Bắc Hải (Do Đội Hoàng Sa kiêm quản)'],
      rows: [
        [
          'Nguồn tuyển quân & Biên chế',
          'Định ngạch 70 suất đinh luân phiên từ hai xã An Vĩnh và An Hải (cửa biển Sa Kỳ và đảo Cù Lao Ré / Lý Sơn).',
          'Không định ngạch số người cố định; tuyển dân đinh thôn Tứ Chính (Bình Thuận) hoặc xã Cảnh Dương, do Cai đội Hoàng Sa chỉ huy.'
        ],
        [
          'Phạm vi không gian thực thi',
          'Quần đảo Hoàng Sa (Bãi Cát Vàng / Vạn Lý Hoàng Sa) ở phía Bắc Biển Đông.',
          'Khu vực Bắc Hải (Quần đảo Trường Sa), các đảo vùng Côn Lôn và vùng biển Hà Tiên ở phía Nam.'
        ],
        [
          'Chế độ đãi ngộ & Quản lý Nhà nước',
          'Được cấp "trát sai" (giấy công vụ nhà nước), cấp 6 tháng lương thực, miễn thuế thân và phu dịch.',
          'Được cấp lệnh chỉ của Nhà nước để sai phái đi tuần tiễu, khai thác và nộp sản vật về kinh đô Phú Xuân.'
        ],
        [
          'Tư liệu gốc tiêu biểu minh chứng',
          'Toản tập Thiên Nam tứ chí lộ đồ thư (1686), Phủ biên tạp lục (1776), Đơn xin thế lập đội Hoàng Sa (1775).',
          'Phủ biên tạp lục (Quyển 2 – Lê Quý Đôn, 1776), Sắc chỉ triều Tây Sơn năm Thái Đức thứ 9 (1786).'
        ]
      ]
    },
    importantCallout: {
      badge: 'GIÁ TRỊ PHÁP LÝ QUỐC TẾ CỦA ĐỘI HOÀNG SA',
      title: 'Vì sao hoạt động của Đội Hoàng Sa – Bắc Hải là hành vi "Thực thi quyền lực Nhà nước" chứ không phải ngư dân tự phát?',
      points: [
        'Bằng chứng sử học: Đội Hoàng Sa do chính quyền Chúa Nguyễn và Triều Tây Sơn trực tiếp ra sắc lệnh thành lập, bổ nhiệm Cai đội (võ quan nhà nước), cấp lương thực từ kho công và kiểm kê sản vật nộp vào ngân khố triều đình.',
        'Nhận định công pháp quốc tế: Đây là hoạt động công vụ mang tính Nhà nước (À titre de souverain) diễn ra định kỳ hằng năm từ tháng 2 đến tháng 8 âm lịch suốt hơn hai thế kỷ.'
      ]
    }
  },

  'cd02-bai-02': TOPIC_ACADEMIC_VISUALS['cd-02-lich-su'],

  'cd02-bai-03': {
    visualType: 'historicalInfographic',
    diagramVariant: 'modern-sovereignty-timeline',
    visualBadge: 'Infographic Lịch sử Cận – Hiện đại (1884 đến nay)',
    visualTitle: 'Tiến trình kế thừa và thực thi chủ quyền liên tục của Nhà nước Việt Nam từ thời Pháp thuộc, Hội nghị San Francisco 1951 đến nay',
    visualSubtitle:
      'Sự liên tục về quản lý hành chính, khoa học khí tượng, đấu tranh ngoại giao và bảo vệ chủ quyền bằng pháp luật hiện đại',
    milestones: [
      {
        period: 'Giai đoạn 1884 – 1945',
        title: 'Chính quyền Đông Dương nhân danh Việt Nam lập đơn vị hành chính, xây hải đăng & trạm khí tượng',
        detail:
          'Nghị định 4702-CP (21/12/1933) sáp nhập quần đảo Trường Sa vào tỉnh Bà Rịa; Nghị định 156-SC (15/6/1938) thiết lập đơn vị hành chính Hoàng Sa thuộc tỉnh Thừa Thiên. Xây dựng hải đăng, đài vô tuyến và Trạm khí tượng quốc tế Hoàng Sa (mã WMO 48860), Ba Bình (mã WMO 48819).',
        primarySource: 'Công báo Đông Dương (Journal Officiel de l’Indochine Française 1933, 1938) & Bia chủ quyền đảo Hoàng Sa 1938.'
      },
      {
        period: 'Ngày 07/09/1951',
        title: 'Tuyên bố chủ quyền tại Hội nghị Hòa bình San Francisco trước 51 quốc gia',
        detail:
          'Tại Hội nghị Hòa bình San Francisco (Hoa Kỳ) giải quyết vấn đề lãnh thổ sau Thế chiến II, Trưởng phái đoàn Quốc gia Việt Nam Trần Văn Hữu long trọng tuyên bố khẳng định chủ quyền từ lâu đời của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa. Không một quốc gia nào trong 51 nước tham dự phản đối.',
        primarySource: 'Biên bản chính thức Hội nghị Hòa bình San Francisco ngày 07/09/1951.'
      },
      {
        period: 'Giai đoạn 1954 – 1975',
        title: 'Quản lý hành chính liên tục, đóng quân bảo vệ và đấu tranh bảo vệ quần đảo',
        detail:
          'Ban hành Sắc lệnh 143-NV (22/10/1956) đặt Trường Sa thuộc tỉnh Phước Tuy; Sắc lệnh 174-NV (13/7/1961) đặt Hoàng Sa (xã Định Hải) thuộc quận Hòa Vang, tỉnh Quảng Nam; Nghị định 420-BNV (06/9/1973) sáp nhập Trường Sa vào xã Phước Hải, tỉnh Phước Tuy. Tháng 1/1974, lực lượng đồn trú chiến đấu bảo vệ Hoàng Sa và ra Tuyên cáo phản đối hành vi cưỡng chiếm bằng vũ lực.',
        primarySource: 'Sắc lệnh 143-NV (1956), Sắc lệnh 174-NV (1961), Bạch thư về Hoàng Sa và Trường Sa (1975).'
      },
      {
        period: 'Từ năm 1975 đến nay',
        title: 'Nước CHXHCN Việt Nam thống nhất quản lý huyện đảo Hoàng Sa, Trường Sa & hoàn thiện Luật Biển',
        detail:
          'Tháng 4/1975, Hải quân nhân dân Việt Nam tiếp quản các đảo ở Trường Sa. Năm 1982 thành lập huyện Hoàng Sa (nay thuộc TP. Đà Nẵng) và huyện Trường Sa (thuộc tỉnh Khánh Hòa); năm 1989 lập cụm Nhà giàn DK1; năm 1994 phê chuẩn UNCLOS 1982; năm 2012 ban hành Luật Biển Việt Nam.',
        primarySource: 'Nghị định 194-HĐBT (1982), Nghị định 65/2007/NĐ-CP (lập thị trấn Trường Sa, xã Song Tử Tây, xã Sinh Tồn), Luật Biển VN 2012.'
      }
    ],
    dataTable: {
      title: 'Bảng tổng hợp các văn bản hành chính, ngoại giao và thiết chế khoa học quốc tế khẳng định chủ quyền từ thế kỷ XX đến nay',
      sourceNote: 'Nguồn: Ủy ban Biên giới Quốc gia – Bộ Ngoại giao và Sách giáo khoa Lịch sử 11 (Chủ đề Biển Đông – GDPT 2018).',
      columns: ['Mốc thời gian', 'Văn bản pháp lý / Sự kiện lịch sử', 'Nội dung quản lý Nhà nước cốt lõi', 'Ý nghĩa pháp lý quốc tế'],
      rows: [
        [
          'Ngày 21/12/1933',
          'Nghị định số 4702-CP của Thống đốc Nam Kỳ J. Krautheimer',
          'Sáp nhập đảo Trường Sa, An Bang, Itu Aba (Ba Bình), nhóm Song Tử, Loại Ta, Thị Tứ vào tỉnh Bà Rịa.',
          'Khẳng định quản lý hành chính nhà nước hiện đại đối với toàn bộ quần đảo Trường Sa.'
        ],
        [
          'Ngày 15/06/1938',
          'Nghị định số 156-SC của Toàn quyền Đông Dương Jules Brévié (theo Dụ số 10 của Vua Bảo Đại)',
          'Thành lập đơn vị hành chính quần đảo Hoàng Sa trực thuộc tỉnh Thừa Thiên; dựng bia đá chủ quyền và xây hải đăng, trạm khí tượng Pattle.',
          'Trạm khí tượng Hoàng Sa được Tổ chức Khí tượng Thế giới (WMO) cấp mã số quốc tế 48860 trong mạng lưới của Việt Nam.'
        ],
        [
          'Ngày 07/09/1951',
          'Hội nghị Hòa bình San Francisco (51 quốc gia tham dự)',
          'Nhật Bản từ bỏ mọi quyền đối với Hoàng Sa, Trường Sa (Điều 2 Hiệp ước); Việt Nam tuyên bố khẳng định chủ quyền không gặp bất kỳ sự phản đối nào.',
          'Sự công nhận mặc nhiên của cộng đồng quốc tế đối với danh nghĩa chủ quyền hợp pháp của Việt Nam.'
        ],
        [
          'Thập niên 1982 – 2012',
          'Quyết định 194-HĐBT (1982), Nghị định 65/2007/NĐ-CP & Luật Biển Việt Nam (2012)',
          'Tổ chức bộ máy chính quyền huyện Hoàng Sa (Đà Nẵng) và huyện Trường Sa (Khánh Hòa), tổ chức bầu cử Quốc hội và HĐND các cấp trên đảo.',
          'Thực thi chủ quyền toàn diện theo pháp luật Việt Nam và phù hợp với UNCLOS 1982.'
        ]
      ]
    },
    importantCallout: {
      badge: 'NGUYÊN TẮC CÔNG PHÁP QUỐC TẾ',
      title: 'Bất hợp pháp của hành vi sử dụng vũ lực xâm chiếm lãnh thổ và Nguyên tắc Kế thừa Nhà nước',
      points: [
        'Tư liệu Hiến chương Liên Hợp Quốc (Điều 2 Khoản 4) & Nghị quyết 2625 (1970): Mọi sự chiếm đóng lãnh thổ do việc đe dọa hoặc sử dụng vũ lực gây ra đều không bao giờ được công nhận là hợp pháp (Ex injuria jus non oritur – Hành vi phi pháp không thể tạo ra quyền hợp pháp).',
        'Nhận định pháp lý: Việc nước ngoài dùng vũ lực cưỡng chiếm Hoàng Sa (1956, 1974) và một số bãi đá ở Trường Sa (1988) là vi phạm Hiến chương LHQ và không thể làm mất đi chủ quyền hợp pháp của Việt Nam.'
      ]
    }
  },

  // ================= CHUYÊN ĐỀ 03 (2 BÀI) =================
  'cd03-bai-01': {
    visualType: 'mindmap',
    diagramVariant: 'effective-occupation-mindmap',
    visualBadge: 'Sơ đồ tư duy Công pháp Quốc tế & Thụ đắc Lãnh thổ',
    visualTitle: 'Sơ đồ tư duy: Nguyên tắc "Chiếm hữu thật sự" (Effective Occupation) và Hệ thống bằng chứng "Effectivités" của Việt Nam',
    visualSubtitle:
      'Đối chiếu 4 tiêu chuẩn khắt khe của Tòa án Công lý Quốc tế (ICJ) với chuỗi bằng chứng lịch sử – pháp lý của Nhà nước Việt Nam',
    centerNode: {
      title: 'CHIẾM HỮU THẬT SỰ (EFFECTIVITÉS)',
      subtitle: 'Hòa bình • Liên tục • Công khai • Danh nghĩa Nhà nước'
    },
    branches: [
      {
        title: '1. Đối tượng: Lãnh thổ vô chủ (Terra nullius)',
        color: '#113747',
        items: [
          'Vào thế kỷ XVII, Hoàng Sa và Trường Sa hoàn toàn là đất vô chủ (Terra nullius) trước khi Nhà nước Việt Nam xác lập chủ quyền.',
          'Pháp luật quốc tế bác bỏ thuyết "phát hiện đơn thuần" (nhìn thấy từ xa hoặc ghi chép mơ hồ của ngư dân, thương nhân tư nhân).',
          'Chỉ Nhà nước đầu tiên tổ chức quản lý thực tế mới xác lập được danh nghĩa chủ quyền gốc hợp pháp.'
        ]
      },
      {
        title: '2. Chủ thể: Với tư cách Nhà nước (À titre de souverain)',
        color: '#29B4D1',
        items: [
          'Chúa Nguyễn, Triều Tây Sơn lập Đội Hoàng Sa – Bắc Hải bằng sắc lệnh nhà nước, bổ nhiệm Cai đội.',
          'Vua Gia Long (1816), Vua Minh Mạng (1833–1838) ban Châu bản cử Thủy quân nhà nước ra đo đạc, dựng bia, cắm mốc.',
          'Chính quyền Đông Dương và các chính quyền Việt Nam kế tiếp ban hành nghị định hành chính, lập trạm khí tượng, hải đăng.'
        ]
      },
      {
        title: '3. Phương thức: Hòa bình, Liên tục & Công khai',
        color: '#1A718D',
        items: [
          'Diễn ra đều đặn hằng năm suốt từ thế kỷ XVII đến thế kỷ XX không gặp sự phản đối của quốc gia nào.',
          'Ghi chép công khai trong chính sử quốc gia (Đại Nam thực lục, Đại Nam nhất thống chí) và bản đồ nhà nước.',
          'Được các nhà hàng hải, giáo sĩ và học giả phương Tây đương thời (Taberd 1838, Gutzlaff 1849) ghi nhận khách quan.'
        ]
      },
      {
        title: '4. Đối chiếu Án lệ Quốc tế Điển hình',
        color: '#29B4D1',
        items: [
          'Án lệ Đảo Palmas (1928 – Trọng tài Max Huber): Thực thi quyền lực thực tế, liên tục thắng "phát hiện hình thức".',
          'Án lệ Đông Greenland (1933 – PCIJ) & Clipperton (1931): Mức độ thực thi phù hợp với điều kiện đảo xa khắc nghiệt.',
          'Án lệ Minquiers & Ecrehos (1953 – ICJ): Bằng chứng hành chính nhà nước trực tiếp có giá trị quyết định.'
        ]
      }
    ],
    dataTable: {
      title: 'Bảng đối chiếu các tiêu chí của nguyên tắc "Chiếm hữu thật sự" trong Công pháp quốc tế với bằng chứng của Việt Nam',
      sourceNote: 'Nguồn: Ủy ban Biên giới Quốc gia, Học viện Ngoại giao và Các phán quyết của Tòa án Công lý Quốc tế (ICJ).',
      columns: ['Tiêu chí Công pháp quốc tế', 'Yêu cầu của Án lệ quốc tế (Palmas, Minquiers...)', 'Bằng chứng lịch sử – pháp lý cụ thể của Nhà nước Việt Nam'],
      rows: [
        [
          '1. Ý định xác lập chủ quyền (Animus occupandi)',
          'Phải thể hiện ý chí chính thức của Nhà nước muốn làm chủ lãnh thổ đó.',
          'Vua Gia Long (1816) và Vua Minh Mạng ban các Dụ, Châu bản khẳng định Hoàng Sa là cương vực hiểm yếu của quốc gia Đại Nam.'
        ],
        [
          '2. Hành vi thực thi quyền lực thực tế (Corpus occupandi)',
          'Phải có các hành vi quản lý hành chính, quân sự, thuế khóa, cứu hộ thực tế trên đảo.',
          'Cử Đội Hoàng Sa – Bắc Hải hằng năm, thu thuế, đo đạc thủy trình, dựng miếu, trồng cây, cắm mốc gỗ, lập huyện đảo và trạm khí tượng.'
        ],
        [
          '3. Tính phù hợp với điều kiện tự nhiên đảo xa',
          'Án lệ Clipperton (1931) & Đông Greenland (1933): Không đòi hỏi cư trú thường xuyên quanh năm ở đảo cát khắc nghiệt thời cổ.',
          'Tổ chức Đội Hoàng Sa ra đảo làm nhiệm vụ suốt 6 tháng mùa biển lặng (tháng 2 – tháng 8 âm lịch) hằng năm là mức thực thi cao nhất thời cận đại.'
        ],
        [
          '4. Sự công nhận quốc tế & Không bị phản đối',
          'Hoạt động thực thi diễn ra công khai và được quốc tế ghi nhận.',
          'Bản đồ An Nam đại quốc họa đồ (1838), Tuyên bố tại Hội nghị San Francisco (1951) trước 51 quốc gia không có nước nào phản đối.'
        ]
      ]
    },
    importantCallout: {
      badge: 'GHI NHỚ ÁN LỆ QUỐC TẾ',
      title: 'Phán quyết Đảo Palmas (1928) – Chuẩn mực vàng của Luật Quốc tế về chủ quyền hải đảo',
      points: [
        'Tư liệu án lệ quốc tế: Trong phán quyết vụ Đảo Palmas (1928) giữa Hoa Kỳ và Hà Lan, Trọng tài viên duy nhất Max Huber khẳng định: Sự thực thi chủ quyền lãnh thổ một cách liên tục và hòa bình (Continuous and peaceful display of territorial sovereignty) có giá trị cao như một danh nghĩa pháp lý hoàn chỉnh.',
        'Nhận định đối chiếu: Chuỗi Châu bản triều Nguyễn (Di sản tư liệu thế giới UNESCO) chính là bằng chứng văn bản hành chính nhà nước nguyên bản đáp ứng trọn vẹn tiêu chuẩn của Án lệ Đảo Palmas.'
      ]
    }
  },

  'cd03-bai-02': TOPIC_ACADEMIC_VISUALS['cd-03-phap-ly'],

  // ================= CHUYÊN ĐỀ 04 (3 BÀI) =================
  'cd04-tn-bai-01': {
    visualType: 'geographicalDiagram',
    diagramVariant: 'paracel-structure',
    visualBadge: 'Sơ đồ Địa lý – Địa hình Quần đảo Hoàng Sa (Huyện Hoàng Sa, TP. Đà Nẵng)',
    visualTitle: 'Sơ đồ phân khu địa hình Quần đảo Hoàng Sa: Nhóm An Vĩnh (Phía Đông) và Nhóm Lưỡi Liềm (Phía Tây)',
    visualSubtitle:
      'Tọa độ 15°45\'B – 17°15\'B và 111°00\'Đ – 113°00\'Đ • Cách đảo Lý Sơn ~120 hải lý và cách đất liền TP. Đà Nẵng ~170 hải lý',
    zones: [
      {
        code: 'NHÓM ĐÔNG',
        name: 'Nhóm An Vĩnh (Amphitrite Group) – Phía Đông Bắc Quần đảo',
        range: 'Kinh độ ~112°10\'Đ – 112°55\'Đ • Gồm các đảo san hô diện tích lớn và điểm cao nhất',
        regime: 'Quy tụ Đảo Phú Lâm (~1,5–2,1 km² – đảo tự nhiên lớn nhất Hoàng Sa), Đảo Linh Côn (~1,5 km²), Đảo Cây, Đảo Đá Bắc (cao 15,9m – điểm cao nhất Hoàng Sa), Đảo Trung, Đảo Bắc, Đảo Nam và Bãi Đá Bông Bay.',
        depthLabel: 'Đảo Phú Lâm • Linh Côn • Đá Bắc (+15,9m)',
        color: '#29B4D1'
      },
      {
        code: 'NHÓM TÂY',
        name: 'Nhóm Lưỡi Liềm (Crescent Group) – Phía Tây Nam Quần đảo',
        range: 'Kinh độ ~111°10\'Đ – 112°00\'Đ • Xếp thành vòng cung khép kín ôm lấy vụng biển sâu ở giữa',
        regime: 'Quy tụ Đảo Hoàng Sa (Pattle – nơi đặt Trạm khí tượng 48860, hải đăng và Bia chủ quyền 1938), Đảo Hữu Nhật, Đảo Quang Ảnh, Đảo Quang Hòa, Đảo Duy Mộng, Đảo琛 Hàng (Đảo Tiền), Đá Bạch Quy và Đảo Tri Tôn (cực Nam Hoàng Sa, gần Lý Sơn nhất).',
        depthLabel: 'Đảo Hoàng Sa • Hữu Nhật • Quang Hòa • Tri Tôn',
        color: '#113747'
      },
      {
        code: 'ĐỊA CHẤT',
        name: 'Nền san hô, Lớp phân chim Phosphorit & Thấu kính nước ngọt',
        range: 'Độ cao trung bình các đảo nổi từ 3 m – 6 m trên mực nước biển',
        regime: 'Trên bề mặt cát san hô của các đảo Phú Lâm, Hoàng Sa, Hữu Nhật, Quang Ảnh có lớp đất giàu lân (phosphorit phân chim biển tích tụ dày 0,5–1,5m) giúp cây phong ba, bàng vuông, nhàu, dừa phát triển xanh tốt.',
        depthLabel: 'Trữ lượng hàng triệu tấn Phosphorit & Đá san hô',
        color: '#1A718D'
      },
      {
        code: 'HÀNH CHÍNH',
        name: 'Huyện Hoàng Sa trực thuộc Thành phố Đà Nẵng',
        range: 'Vùng biển rộng khoảng 30.000 km² án ngữ cửa ngõ Vịnh Bắc Bộ và miền Trung',
        regime: 'Đơn vị hành chính cấp huyện thuộc TP. Đà Nẵng (Nhà trưng bày Hoàng Sa đặt tại đường Hoàng Sa, quận Sơn Trà, TP. Đà Nẵng – nơi lưu giữ tư liệu gốc về chủ quyền của Việt Nam).',
        depthLabel: 'Cách Lý Sơn ~120 HL • Cách Đà Nẵng ~170 HL',
        color: '#29B4D1'
      }
    ],
    dataTable: {
      title: 'Bảng thông số địa lý các đảo, đá, bãi tiêu biểu thuộc hai nhóm của Quần đảo Hoàng Sa',
      sourceNote: 'Nguồn: Ủy ban Biên giới Quốc gia, UBND Huyện Hoàng Sa (TP. Đà Nẵng) và SGK Địa lý 12.',
      columns: ['Tên đảo / Đá / Bãi', 'Thuộc phân nhóm', 'Đặc điểm tự nhiên & Diện tích tự nhiên', 'Dấu ấn lịch sử chủ quyền Việt Nam'],
      rows: [
        [
          '1. Đảo Phú Lâm (Woody Island)',
          'Nhóm An Vĩnh (Phía Đông)',
          'Đảo tự nhiên lớn nhất quần đảo Hoàng Sa (~1,5–2,1 km²), nhiều cây xanh và mỏ lân.',
          'Nơi Đội Hoàng Sa dựng lều khai thác và triều Nguyễn khảo sát đo đạc.'
        ],
        [
          '2. Đảo Hoàng Sa (Pattle Island)',
          'Nhóm Lưỡi Liềm (Phía Tây)',
          'Diện tích ~0,32 km², cao ~6–9m, có giếng nước lợ và thảm thực vật dày.',
          'Đặt Bia chủ quyền năm 1938 ("République Française – Empire d’Annam – Archipel des Paracels 1816 – Île de Pattle 1938"), Hải đăng và Trạm khí tượng 48860.'
        ],
        [
          '3. Đảo Hữu Nhật (Robert Island) & Quang Ảnh (Money Island)',
          'Nhóm Lưỡi Liềm (Phía Tây)',
          'Đảo san hô hình bầu dục nằm gần đảo Hoàng Sa.',
          'Đảo Hữu Nhật được đặt tên vinh danh Chánh đội trưởng Thủy quân Phạm Hữu Nhật (người dẫn thủy quân ra cắm mốc năm Minh Mạng thứ 17 – 1836).'
        ],
        [
          '4. Đảo Tri Tôn (Triton Island)',
          'Cực Tây Nam Nhóm Lưỡi Liềm',
          'Diện tích ~1,2 km², đảo nằm gần bờ biển miền Trung Việt Nam nhất.',
          'Cách đảo Lý Sơn (Quảng Ngãi) chỉ khoảng 120 hải lý.'
        ]
      ]
    },
    importantCallout: {
      badge: 'ĐỊA DANH LỊCH SỬ HOÀNG SA',
      title: 'Ý nghĩa tên gọi các đảo thuộc Quần đảo Hoàng Sa gắn liền với các danh tướng Thủy quân Việt Nam',
      points: [
        'Tư liệu địa danh học: Nhiều đảo trong nhóm Lưỡi Liềm tại Hoàng Sa mang tên các vị Cai đội, Chánh đội trưởng Thủy quân nhà Nguyễn từng trực tiếp ra đo đạc, cắm mốc như: Đảo Hữu Nhật (Phạm Hữu Nhật), Đảo Quang Ảnh (Phạm Quang Ảnh), Đảo Duy Mộng.',
        'Nhận định địa chiến lược: Quần đảo Hoàng Sa nằm án ngữ ngay trên tuyến hàng hải quốc tế huyết mạch đi qua phía Bắc Biển Đông và cửa ngõ ra vào Vịnh Bắc Bộ.'
      ]
    }
  },

  'cd04-tn-bai-02': TOPIC_ACADEMIC_VISUALS['cd-04-dia-ly-tu-nhien'],

  'cd04-tn-bai-03': {
    visualType: 'geographicalDiagram',
    diagramVariant: 'monsoon-oceanography',
    visualBadge: 'Sơ đồ Khí hậu – Hải văn Biển Đông & Chế độ Thủy triều',
    visualTitle: 'Sơ đồ hoàn lưu dòng biển theo hai mùa gió (Đông Bắc – Tây Nam), vùng nước trồi và chế độ thủy triều Biển Đông',
    visualSubtitle:
      'Sự chi phối của Gió mùa Đông Nam Á tạo nên hệ thống dòng chảy đổi chiều 180° theo mùa và phân hóa thủy triều dọc 3.260 km bờ biển',
    zones: [
      {
        code: 'MÙA ĐÔNG',
        name: 'Hoàn lưu Gió mùa Đông Bắc (Từ tháng 11 đến tháng 4 năm sau)',
        range: 'Gió hướng Đông Bắc thịnh hành • Vòng hoàn lưu chảy ngược chiều kim đồng hồ',
        regime: 'Dòng biển lạnh hơn từ phía Bắc chảy ép sát ven bờ biển miền Trung Việt Nam theo hướng Bắc – Nam xuống vùng biển Nam Bộ, tốc độ dòng chảy mạnh (30–50 cm/s).',
        depthLabel: 'Tháng 11 → Tháng 4 • Chảy hướng Đông Bắc → Tây Nam',
        color: '#113747'
      },
      {
        code: 'MÙA HẠ',
        name: 'Hoàn lưu Gió mùa Tây Nam (Từ tháng 5 đến tháng 10 hằng năm)',
        range: 'Gió hướng Tây Nam thịnh hành • Vòng hoàn lưu chảy thuận chiều kim đồng hồ',
        regime: 'Dòng biển ấm từ vùng biển phía Nam chảy dọc bờ biển Việt Nam theo hướng Tây Nam – Đông Bắc lên phía Bắc Biển Đông; nhiệt độ nước biển tầng mặt đồng nhất (28°C – 30°C).',
        depthLabel: 'Tháng 5 → Tháng 10 • Chảy hướng Tây Nam → Đông Bắc',
        color: '#29B4D1'
      },
      {
        code: 'NƯỚC TRỒI',
        name: 'Hiện tượng Nước trồi (Upwelling) vùng biển Nam Trung Bộ',
        range: 'Vùng biển Khánh Hòa – Ninh Thuận – Bình Thuận vào mùa gió Tây Nam (tháng 6 – tháng 8)',
        regime: 'Gió Tây Nam thổi đẩy lớp nước mặt ra xa bờ, kéo khối nước tầng sâu (100–200m) lạnh và cực kỳ giàu muối dinh dưỡng (Nitrat, Phosphat) trồi lên tầng mặt, tạo nên ngư trường cá nổi lớn nhất cả nước.',
        depthLabel: 'Ninh Thuận – Bình Thuận • Nhiệt độ nước giảm 2–4°C',
        color: '#29B4D1'
      },
      {
        code: 'THỦY TRIỀU',
        name: 'Phân hóa Chế độ Thủy triều đặc sắc từ Bắc vào Nam',
        range: 'Nhật triều đều (Vịnh Bắc Bộ) → Triều không đều (Trung Bộ) → Bán nhật triều (Nam Bộ)',
        regime: 'Vịnh Bắc Bộ có chế độ nhật triều đều điển hình nhất thế giới (1 lần nước lên, 1 lần nước xuống/ngày, biên độ 3,5–4m); vùng biển Nam Bộ có bán nhật triều không đều biên độ lớn (3,5–4,5m).',
        depthLabel: 'Nhật triều đều (Bắc Bộ) & Bán nhật triều (Nam Bộ)',
        color: '#1A718D'
      }
    ],
    dataTable: {
      title: 'Bảng đối chiếu đặc điểm Khí hậu – Hải văn Biển Đông theo hai mùa gió và các vùng thủy triều ven bờ Việt Nam',
      sourceNote: 'Nguồn: SGK Địa lý 12 (Chương trình GDPT 2018), Viện Hải dương học Nha Trang và Tổng cục Khí tượng Thủy văn.',
      columns: ['Yếu tố hải văn – khí hậu', 'Mùa gió Đông Bắc (Tháng 11 – Tháng 4)', 'Mùa gió Tây Nam (Tháng 5 – Tháng 10)', 'Ảnh hưởng tới Kinh tế biển & Hàng hải'],
      rows: [
        [
          '1. Hướng gió & Chiều dòng chảy hoàn lưu',
          'Gió Đông Bắc; dòng biển chảy hướng Đông Bắc – Tây Nam (vòng hoàn lưu ngược chiều kim đồng hồ).',
          'Gió Tây Nam; dòng biển chảy hướng Tây Nam – Đông Bắc (vòng hoàn lưu thuận chiều kim đồng hồ).',
          'Thời xưa Đội Hoàng Sa tận dụng gió Tây Nam đầu mùa đi ra đảo và dòng chảy cuối mùa hồi hương; nay hỗ trợ điều hướng tàu biển.'
        ],
        [
          '2. Nhiệt độ nước biển tầng mặt & Độ muối',
          'Phân hóa Bắc – Nam rõ rệt (Vịnh Bắc Bộ 18–20°C; vùng biển phía Nam 26–28°C). Độ muối trung bình 32–34‰.',
          'Đồng nhất cao trên toàn Biển Đông (28–30°C); riêng vùng nước trồi Bình Thuận – Ninh Thuận mát hơn (24–26°C).',
          'Nước biển ấm quanh năm giúp sinh vật biển nhiệt đới sinh trưởng nhanh, tạo 4 ngư trường lớn và nghề làm muối Sa Huỳnh, Cà Ná.'
        ],
        [
          '3. Chế độ mưa bão & Áp thấp nhiệt đới',
          'Ít bão ở phía Bắc, cuối mùa có thể có bão muộn ở vùng biển Nam Trung Bộ và Trường Sa (tháng 11–12).',
          'Mùa bão chính trên Biển Đông (trung bình 9–10 cơn bão và 3–4 ATNĐ/năm), tập trung từ tháng 7 đến tháng 11.',
          'Hệ thống trạm khí tượng hải văn và âu tàu tại Hoàng Sa, Trường Sa đóng vai trò cảnh báo sớm thiên tai cho đất liền.'
        ],
        [
          '4. Phân bố chế độ Thủy triều',
          'Vịnh Bắc Bộ: Nhật triều đều (1 lần lên, 1 lần xuống/24h). Trung Bộ: Nhật triều/Bán nhật triều không đều.',
          'Đông Nam Bộ (Vũng Tàu – Cửu Long): Bán nhật triều không đều (2 lần lên, 2 lần xuống/24h, biên độ 4m).',
          'Thuận lợi cho tàu trọng tải lớn ra vào cảng Hải Phòng, Cái Mép – Thị Vải, làm muối và nuôi trồng thủy sản vùng triều.'
        ]
      ]
    },
    importantCallout: {
      badge: 'HIỆN TƯỢNG HẢI DƯƠNG HỌC ĐẶC BIỆT',
      title: 'Vì sao vùng biển Ninh Thuận – Bình Thuận lại đồng thời là ngư trường lớn và vựa muối hàng đầu cả nước?',
      points: [
        'Cơ sở hải dương học: Vào mùa hạ, gió Tây Nam thổi song song với đường bờ biển Nam Trung Bộ gây ra lực Coriolis đẩy lớp nước mặt ra khơi, tạo hiện tượng "nước trồi" (Upwelling) đưa nguồn dinh dưỡng từ đáy sâu lên nuôi dưỡng sinh vật phù du và đàn cá.',
        'Cơ sở khí hậu học: Địa hình bờ biển chạy song song với hướng gió mùa kết hợp dãy Trường Sơn chắn gió gây hiệu ứng phơn khô nóng, số giờ nắng cao bậc nhất cả nước và nước biển có độ mặn cao (34–35‰), cực kỳ lý tưởng cho sản xuất muối công nghiệp Cà Ná, Đầm Vua.'
      ]
    }
  },

  // ================= CHUYÊN ĐỀ 05 (2 BÀI) =================
  'cd05-bai-01': TOPIC_ACADEMIC_VISUALS['cd-05-kinh-te'],

  'cd05-bai-02': {
    visualType: 'economicChart',
    diagramVariant: 'fisheries-renewable-chart',
    visualBadge: 'Biểu đồ Thủy sản Bền vững & Năng lượng Tái tạo Biển',
    visualTitle: 'Biểu đồ chỉ số phát triển 4 Ngư trường trọng điểm, Chống khai thác IUU và Điện gió ngoài khơi Việt Nam',
    visualSubtitle:
      'Chuyển dịch cơ cấu từ khai thác ven bờ sang nuôi biển công nghệ cao, đánh bắt xa bờ hợp pháp và năng lượng sạch Net Zero 2050',
    metrics: [
      {
        rank: 'Trọng điểm 01',
        sector: 'Ngư trường Hoàng Sa – Trường Sa & Khai thác xa bờ',
        indicator: 'Đội tàu cá công suất lớn đánh bắt cá ngừ đại dương, mực xà gắn giám sát hành trình VMS khẳng định chủ quyền',
        progress: 95,
        tag: 'Kinh tế gắn Quốc phòng',
        color: '#113747'
      },
      {
        rank: 'Trọng điểm 02',
        sector: 'Chống khai thác IUU & Truy xuất nguồn gốc thủy sản',
        indicator: '100% tàu cá dài từ 15m trở lên lắp thiết bị VMS, ghi nhật ký khai thác điện tử tuân thủ Luật Thủy sản 2017',
        progress: 93,
        tag: 'Hội nhập quốc tế bền vững',
        color: '#29B4D1'
      },
      {
        rank: 'Trọng điểm 03',
        sector: 'Nuôi biển công nghệ cao (Lồng HDPE xa bờ)',
        indicator: 'Phát triển tại Quảng Ninh, Hải Phòng, Khánh Hòa (Vân Phong), Ninh Thuận, Kiên Giang giảm áp lực khai thác tự nhiên',
        progress: 90,
        tag: 'Nuôi biển công nghiệp sinh thái',
        color: '#1A718D'
      },
      {
        rank: 'Trọng điểm 04',
        sector: 'Điện gió ngoài khơi & Điện gió gần bờ (Offshore Wind)',
        indicator: 'Tiềm năng kỹ thuật ước tính hàng trăm GW tại vùng biển Bình Thuận, Ninh Thuận, Bà Rịa – Vũng Tàu, Bạc Liêu, Cà Mau',
        progress: 92,
        tag: 'Quy hoạch điện VIII • Net Zero',
        color: '#29B4D1'
      },
      {
        rank: 'Trọng điểm 05',
        sector: 'Công nghệ sinh học biển, Dược liệu biển & Muối công nghiệp',
        indicator: 'Chiết xuất hoạt chất sinh học từ rong biển, tảo biển, vi sinh vật biển và sản xuất muối sạch công nghệ cao',
        progress: 84,
        tag: 'Kinh tế biển tri thức cao',
        color: '#1A718D'
      }
    ],
    dataTable: {
      title: 'Bảng đối chiếu 3 quy định chống khai thác thủy sản bất hợp pháp (IUU) và Tiềm năng năng lượng tái tạo biển Việt Nam',
      sourceNote: 'Nguồn: Luật Thủy sản năm 2017, Quy hoạch điện VIII và Chiến lược phát triển bền vững kinh tế biển Việt Nam.',
      columns: ['Lĩnh vực trọng tâm', 'Nội dung quy định / Tiềm năng kỹ thuật', 'Khu vực triển khai tiêu biểu', 'Ý nghĩa Kinh tế – Sinh thái – Chủ quyền'],
      rows: [
        [
          '1. Chống khai thác bất hợp pháp (Illegal)',
          'Không đánh bắt trái phép ở vùng biển nước ngoài; tàu cá ≥15m bắt buộc bật thiết bị giám sát hành trình VMS 24/24h.',
          '28 tỉnh, thành phố ven biển trên cả nước.',
          'Gỡ "thẻ vàng" thủy sản, nâng cao uy tín xuất khẩu hải sản Việt Nam trên thị trường EU, Mỹ, Nhật Bản.'
        ],
        [
          '2. Chống khai thác không báo cáo & không theo quy định (Unreported & Unregulated)',
          'Ghi và nộp nhật ký khai thác tại cảng cá chỉ định; cấm tuyệt đối chất nổ, xung điện, chất độc và ngư cụ hủy diệt.',
          'Hệ thống cảng cá loại I, loại II và các khu bảo tồn biển.',
          'Bảo vệ nguồn lợi thủy sản tái sinh cho thế hệ tương lai và bảo đảm truy xuất nguồn gốc minh bạch.'
        ],
        [
          '3. Nuôi trồng hải sản công nghệ cao trên biển',
          'Ứng dụng lồng tròn nhựa HDPE chịu bão cấp 12, hệ thống cho ăn tự động và quan trắc môi trường bằng AI/IoT.',
          'Vịnh Vân Phong (Khánh Hòa), Vân Đồn (Quảng Ninh), Phú Quốc – Kiên Hải (Kiên Giang).',
          'Nâng cao giá trị gia tăng xuất khẩu, giảm phụ thuộc vào đánh bắt ven bờ.'
        ],
        [
          '4. Năng lượng tái tạo biển (Điện gió ngoài khơi, Điện mặt trời)',
          'Tốc độ gió trung bình vùng biển Nam Trung Bộ và Nam Bộ đạt 7–10 m/s ở độ cao 100m; thềm lục địa thoải thuận lợi thi công.',
          'Bình Thuận, Ninh Thuận, Bạc Liêu, Trà Vinh, Sóc Trăng, Cà Mau và các đảo tiền tiêu.',
          'Đảm bảo an ninh năng lượng quốc gia, cung cấp điện tự chủ cho các đảo Trường Sa, Phú Quý, Côn Đảo.'
        ]
      ]
    },
    importantCallout: {
      badge: 'THUẬT NGỮ KINH TẾ – PHÁP LUẬT BIỂN',
      title: 'Giải mã thuật ngữ "Khai thác IUU" mà học sinh THPT cần nắm vững',
      points: [
        'Tư liệu Luật Thủy sản 2017: IUU là viết tắt của cụm từ tiếng Anh "Illegal, Unreported and Unregulated Fishing" (Khai thác thủy sản bất hợp pháp, không báo cáo và không theo quy định).',
        'Nhận định thực tiễn: Chấm dứt hoàn toàn khai thác IUU không chỉ giúp bảo vệ hệ sinh thái biển khỏi cạn kiệt mà còn khẳng định hình ảnh một quốc gia biển có trách nhiệm, tuân thủ nghiêm túc UNCLOS 1982.'
      ]
    }
  },

  // ================= CHUYÊN ĐỀ 06 (2 BÀI) =================
  'cd04-bai-01': TOPIC_ACADEMIC_VISUALS['cd-04-doi-song'],

  'cd04-bai-02': {
    visualType: 'historicalInfographic',
    diagramVariant: 'dk1-lighthouses-support',
    visualBadge: 'Infographic Hải đăng, Nhà giàn DK1 & Điểm tựa Ngư dân',
    visualTitle: 'Hệ thống Hải đăng Biển Đông, Cụm Nhà giàn DK1 trên thềm lục địa phía Nam và Thế trận bảo vệ ngư dân vươn khơi',
    visualSubtitle:
      'Những "mắt thần" dẫn đường hàng hải quốc tế và "cột mốc thép" khẳng định quyền chủ quyền trên thềm lục địa Tổ quốc',
    milestones: [
      {
        period: 'Hệ thống Hải đăng',
        title: 'Hơn 90 ngọn hải đăng dọc bờ biển & 9 ngọn hải đăng sừng sững tại Quần đảo Trường Sa',
        detail:
          'Các ngọn hải đăng tại Song Tử Tây (cao 38m – xây năm 1993), Đá Lát, Đá Tây, An Bang, Tiên Nữ, Nam Yết, Sinh Tồn, Sơn Ca, Trường Sa hoạt động 24/24h, phát tín hiệu ánh sáng và vô tuyến dẫn đường cho tàu thuyền quốc tế qua Biển Đông.',
        primarySource: 'Tổng công ty Bảo đảm an toàn hàng hải Việt Nam (VMS) & Hiệp hội Báo hiệu Hàng hải Quốc tế (IALA).'
      },
      {
        period: 'Cụm Nhà giàn DK1 (1989)',
        title: 'Hệ thống Trạm Dịch vụ Kinh tế – Khoa học – Kỹ thuật (DK1) trên thềm lục địa phía Nam',
        detail:
          'Thành lập ngày 05/07/1989 tại các bãi cạn Tư Chính, Phúc Nguyên, Phúc Tần, Huyền Trân, Quế Đường, Ba Kè và Cà Mau. Thế hệ nhà giàn mới có kết cấu chân đế vững chắc, trang bị điện mặt trời, trạm khí tượng hải văn và sân đỗ trực thăng.',
        primarySource: 'Bộ Tư lệnh Vùng 2 Hải quân nhân dân Việt Nam.'
      },
      {
        period: 'Lực lượng Thực thi Pháp luật',
        title: 'Phối hợp Hải quân, Cảnh sát biển, Bộ đội Biên phòng và Kiểm ngư Việt Nam',
        detail:
          'Các lực lượng tuần tra, kiểm soát, thực thi pháp luật theo đúng Luật Biển Việt Nam 2012, Luật Cảnh sát biển 2018 và UNCLOS 1982; trực tiếp cứu hộ cứu nạn, cấp thuốc men, nước ngọt và bảo vệ ngư dân hoạt động hợp pháp trên ngư trường truyền thống.',
        primarySource: 'Luật Cảnh sát biển Việt Nam năm 2018 & Luật Thủy sản năm 2017.'
      },
      {
        period: 'Hậu cần & Cứu nạn Biển xa',
        title: 'Mạng lưới Âu tàu tránh bão, Làng chài và Cấp cứu y tế đường không – đường biển',
        detail:
          'Hệ thống âu tàu tại Song Tử Tây, Sinh Tồn, Đá Tây, Trường Sa cung cấp nơi neo đậu an toàn cho hàng trăm tàu cá trong mùa bão; máy bay trực thăng và tàu quân y sẵn sàng bay vượt hàng trăm hải lý đưa ngư dân gặp nạn về đất liền điều trị.',
        primarySource: 'Chương trình "Hải quân Việt Nam làm điểm tựa cho ngư dân vươn khơi, bám biển" & "Cảnh sát biển đồng hành với ngư dân".'
      }
    ],
    dataTable: {
      title: 'Bảng tổng hợp các ngọn Hải đăng tiền tiêu, Cụm Nhà giàn DK1 và Lực lượng bảo vệ chủ quyền, hỗ trợ ngư dân trên biển',
      sourceNote: 'Nguồn: Bộ Quốc phòng, Bộ Giao thông Vận tải và SGK Giáo dục Quốc phòng & An ninh THPT.',
      columns: ['Thiết chế / Lực lượng trên biển', 'Vị trí không gian chiến lược', 'Nhiệm vụ cốt lõi & Hoạt động thực tế', 'Ý nghĩa Pháp lý & Nhân văn'],
      rows: [
        [
          '1. Hệ thống Hải đăng Trường Sa (Song Tử Tây, Đá Lát, An Bang, Tiên Nữ...)',
          'Trải đều từ cực Bắc (Song Tử Tây) đến cực Đông (Tiên Nữ) và cực Tây (Đá Lát) của quần đảo Trường Sa.',
          'Chiếu sáng dẫn luồng hàng hải quốc tế ban đêm (tầm hiệu lực 15–22 hải lý), khẳng định trách nhiệm quốc gia ven biển.',
          'Mỗi ngọn hải đăng được ghi danh trên Hải đồ quốc tế là một bằng chứng thực thi chủ quyền hòa bình, minh bạch.'
        ],
        [
          '2. Cụm Nhà giàn DK1 (Tư Chính, Phúc Nguyên, Phúc Tần, Huyền Trân, Quế Đường, Ba Kè)',
          'Vùng đặc quyền kinh tế và Thềm lục địa phía Nam (cách Vũng Tàu 250–350 hải lý).',
          'Quan trắc khí tượng hải văn, bảo vệ mỏ dầu khí thềm lục địa, hỗ trợ ngư dân đánh bắt xa bờ và cứu nạn.',
          'Khẳng định quyền chủ quyền và quyền tài phán đối với thềm lục địa kéo dài tự nhiên của Việt Nam theo Điều 76, 77 UNCLOS.'
        ],
        [
          '3. Hải quân nhân dân & Bộ đội Biên phòng Việt Nam',
          'Các đảo tiền tiêu, nhà giàn, vùng biển chủ quyền và tuyến biên giới biển 28 tỉnh, thành phố.',
          'Sẵn sàng chiến đấu bảo vệ chủ quyền; vận hành các trung tâm y tế, âu tàu, trường học và cứu hộ trên biển.',
          'Nòng cốt trong thế trận quốc phòng toàn dân trên biển gắn với phát triển kinh tế – xã hội.'
        ],
        [
          '4. Cảnh sát biển Việt Nam & Lực lượng Kiểm ngư',
          'Toàn bộ các vùng biển thuộc chủ quyền, quyền chủ quyền và quyền tài phán của Việt Nam.',
          'Thực thi pháp luật dân sự trên biển, chống buôn lậu, chống cướp biển, bảo vệ ngư dân và hướng dẫn chống khai thác IUU.',
          'Thực hiện biện pháp hòa bình, đúng chuẩn mực pháp luật quốc tế trong bảo vệ quyền lợi hợp pháp trên biển.'
        ]
      ]
    },
    importantCallout: {
      badge: 'BIỂU TƯỢNG Ý CHÍ VIỆT NAM GIỮA TRÙNG KHƠI',
      title: 'Ý nghĩa tên gọi "DK1" trên thềm lục địa phía Nam Tổ quốc',
      points: [
        'Tư liệu lịch sử: "DK1" là viết tắt của cụm từ "Dịch vụ – Kinh tế – Khoa học – Kỹ thuật" khu vực 1, được thành lập ngày 05/07/1989 theo chỉ thị của Chủ tịch Hội đồng Bộ trưởng.',
        'Nhận định giáo dục: Giữa sóng dữ đại dương, các thế hệ cán bộ, chiến sĩ Nhà giàn DK1 luôn kiên cường bám trụ với phương châm "Còn người, còn nhà giàn, còn chủ quyền biển đảo Tổ quốc".'
      ]
    }
  },

  // ================= CHUYÊN ĐỀ 07 (2 BÀI) =================
  'cd06-bai-01': TOPIC_ACADEMIC_VISUALS['cd-06-moi-truong'],

  'cd06-bai-02': {
    visualType: 'ecosystemDiagram',
    diagramVariant: 'mpa-conservation-network',
    visualBadge: 'Sơ đồ Mạng lưới 16 Khu Bảo tồn Biển (MPA) & Giải pháp Phục hồi Sinh thái',
    visualTitle: 'Sơ đồ phân vùng chức năng Khu Bảo tồn Biển (MPA), Phục hồi San hô nhân tạo và Kinh tế tuần hoàn giảm nhựa đại dương',
    visualSubtitle:
      'Chiến lược bảo tồn đa dạng sinh học biển Việt Nam gắn liền với phát triển bền vững và hành động xanh của Học sinh THPT',
    ecosystems: [
      {
        name: '1. Phân vùng Bảo vệ nghiêm ngặt (Vùng lõi Khu Bảo tồn Biển – Core Zone)',
        zone: 'Các rạn san hô nguyên sơ, bãi đẻ của rùa biển và vùng sinh sản thủy sản tại 16 Khu Bảo tồn Biển quốc gia (Bạch Long Vĩ, Cát Bà, Cồn Cỏ, Cù Lao Chàm, Lý Sơn, vịnh Nha Trang, Núi Chúa, Hòn Cau, Phú Quý, Côn Đảo, Phú Quốc, Nam Yết...)',
        biodiversity: 'Bảo tồn nguồn gen quý hiếm: Rùa biển (Vích, Đồi mồi), Bò biển (Dugong), san hô cứng tạo rạn, trai tai tượng khổng lồ.',
        ecologicalRole:
          'Nghiêm cấm mọi hoạt động khai thác thủy sản và neo đậu tàu thuyền; đóng vai trò "ngân hàng giống tự nhiên" phát tán ấu trùng tôm cá ra các ngư trường lân cận.',
        threat: 'Cần giám sát chặt chẽ bằng tuần tra cộng đồng và công nghệ camera/AI để ngăn chặn xâm nhập đánh bắt lén.',
        color: '#29B4D1'
      },
      {
        name: '2. Phân vùng Phục hồi Sinh thái & Nuôi cấy San hô (Ecological Restoration Zone)',
        zone: 'Vùng rạn san hô và thảm cỏ biển đang được tái tạo quanh vùng lõi (Vịnh Nha Trang, Cù Lao Chàm, Côn Đảo, Phú Quốc, Nam Yết – Trường Sa)',
        biodiversity: 'Vườn ươm cấy ghép cành san hô trên giá thể nhân tạo, phục hồi thảm cỏ biển và trồng mới rừng ngập mặn ven bờ.',
        ecologicalRole:
          'Tái thiết lập cấu trúc rạn san hô đã bị tẩy trắng hoặc hư hại do bão; cho phép du lịch sinh thái có kiểm soát và nghiên cứu khoa học biển.',
        threat: 'Biến đổi nhiệt độ nước biển (El Niño) đòi hỏi chọn lọc các giống san hô chịu nhiệt cao để cấy ghép.',
        color: '#29B4D1'
      },
      {
        name: '3. Vùng Đệm phát triển Sinh kế xanh & Giảm nhựa đại dương (Buffer & Circular Zone)',
        zone: 'Cộng đồng cư dân các xã đảo, huyện đảo và trường học ven biển (Mô hình "Đảo không túi nilon" tại Cù Lao Chàm, Cô Tô, Côn Đảo)',
        biodiversity: 'Gắn kết cộng đồng ngư dân và học sinh trong thu gom rác thải nhựa, ngư cụ thất lạc ("Tàu cá thu gom rác nhựa về bờ").',
        ecologicalRole:
          'Ngăn chặn nguồn rác thải nhựa từ đất liền ra biển thông qua mô hình 3R (Reduce – Reuse – Recycle), chuyển đổi sinh kế ngư dân sang du lịch sinh thái cộng đồng.',
        threat: 'Thói quen sử dụng đồ nhựa dùng một lần của du khách cần được thay thế bằng vật liệu thân thiện môi trường.',
        color: '#29B4D1'
      }
    ],
    dataTable: {
      title: 'Bảng tổng hợp các Khu Bảo tồn Biển (MPA) tiêu biểu trong mạng lưới 16 Khu Bảo tồn Biển quốc gia Việt Nam',
      sourceNote: 'Nguồn: Quyết định 742/QĐ-TTg về Quy hoạch hệ thống Khu bảo tồn biển Việt Nam và Luật Đa dạng sinh học.',
      columns: ['Tên Khu Bảo tồn Biển', 'Tỉnh / Thành phố', 'Tổng diện tích / Vùng biển', 'Đối tượng bảo tồn đặc trưng & Giá trị nổi bật'],
      rows: [
        [
          '1. KBTB Bạch Long Vĩ & Cát Bà',
          'TP. Hải Phòng',
          'Vịnh Bắc Bộ (>20.000 ha)',
          'Rạn san hô nước lạnh hơn ở vĩ độ Bắc, bào ngư chín lỗ, hệ sinh thái đảo đá vôi – rừng ngập mặn.'
        ],
        [
          '2. KBTB Cù Lao Chàm & Lý Sơn',
          'Quảng Nam & Quảng Ngãi',
          'Biển miền Trung (~23.500 ha & ~7.900 ha)',
          'Khu dự trữ sinh quyển thế giới Cù Lao Chàm (đi đầu phong trào "Nói không với túi nilon"); hệ cỏ biển và địa chất núi lửa Lý Sơn.'
        ],
        [
          '3. KBTB Vịnh Nha Trang, Nam Yết (Trường Sa) & Núi Chúa',
          'Khánh Hòa & Ninh Thuận',
          'Nam Trung Bộ & Quần đảo Trường Sa (~35.000 ha tại Nam Yết)',
          'Trung tâm đa dạng san hô cao nhất Việt Nam (>350 loài), bãi đẻ rùa biển tự nhiên tại Vườn quốc gia Núi Chúa và đảo Nam Yết.'
        ],
        [
          '4. KBTB Côn Đảo & Phú Quốc',
          'Bà Rịa – Vũng Tàu & Kiên Giang',
          'Biển Đông Nam Bộ & Tây Nam Bộ (>29.000 ha & >40.000 ha)',
          'Khu Ramsar biển đầu tiên của Việt Nam (Côn Đảo – nơi bảo tồn rùa biển lớn nhất nước ta); thảm cỏ biển nuôi dưỡng Bò biển (Dugong) tại Phú Quốc.'
        ]
      ]
    },
    importantCallout: {
      badge: 'CẨM NANG HÀNH ĐỘNG XANH CỦA HỌC SINH THPT',
      title: '4 hành động thiết thực mỗi học sinh THPT có thể thực hiện ngay để bảo vệ đại dương',
      points: [
        'Hành động tại trường và gia đình: Sử dụng bình nước cá nhân, túi vải thay cho chai nhựa và túi nilon dùng một lần; phân loại rác tại nguồn.',
        'Hành động khi du lịch biển đảo: Tuyệt đối không xả rác xuống bãi biển, không bẻ hoặc mua bán san hô làm quà lưu niệm, tuân thủ quy định "Không mang túi nilon ra đảo" tại Cù Lao Chàm, Cô Tô, Côn Đảo.'
      ]
    }
  },

  // ================= CHUYÊN ĐỀ 08 (2 BÀI) =================
  'cd07-bai-01': TOPIC_ACADEMIC_VISUALS['cd-07-tuoi-tre'],

  'cd07-bai-02': {
    visualType: 'mindmap',
    diagramVariant: 'youth-career-action',
    visualBadge: 'Sơ đồ tư duy Phong trào Thanh niên & Định hướng Nghề nghiệp Biển',
    visualTitle: 'Sơ đồ tư duy: Phong trào "Tuổi trẻ hướng về Biển đảo" và Bản đồ định hướng Nghề nghiệp Nhân lực biển chất lượng cao',
    visualSubtitle:
      'Kết nối tình yêu Tổ quốc từ ghế nhà trường THPT tới lựa chọn ngành nghề đóng góp trực tiếp cho Chiến lược Biển Việt Nam đến năm 2045',
    centerNode: {
      title: 'TUỔI TRẺ & TƯƠNG LAI BIỂN',
      subtitle: 'Tuyên truyền sáng tạo • Nghiên cứu KH • Nhân lực biển 4.0'
    },
    branches: [
      {
        title: '1. Phong trào Học đường & Tình nguyện Biển đảo',
        color: '#29B4D1',
        items: [
          'Cuộc thi "Em yêu biển, đảo quê hương" do Cảnh sát biển Việt Nam phối hợp các trường THPT tổ chức.',
          'Chương trình "Góp đá xây Trường Sa", "Xanh hóa Trường Sa", "Nghĩa tình biên giới, hải đảo".',
          'Chiến dịch "Hãy làm sạch biển" (Clean Up the Sea), "Ngày Chủ nhật Xanh" thu gom rác nhựa ven biển.'
        ]
      },
      {
        title: '2. Truyền thông Số & Nghiên cứu KHKT Học sinh',
        color: '#113747',
        items: [
          'Thiết kế website học tập, bản đồ số, sa bàn 3D, podcast và triển lãm số giới thiệu Hoàng Sa – Trường Sa.',
          'Đề tài Khoa học Kỹ thuật cấp THPT: Lọc nước biển thành nước ngọt bằng năng lượng mặt trời cho đảo xa.',
          'Nghiên cứu phao quan trắc môi trường biển IoT, vật liệu sinh học thay thế nhựa dùng một lần.'
        ]
      },
      {
        title: '3. Nhóm ngành Bảo vệ Chủ quyền, Pháp lý & Hàng hải',
        color: '#1A718D',
        items: [
          'Học viện Hải quân (Nha Trang), Học viện Biên phòng, Hệ đào tạo Cảnh sát biển.',
          'Trường Đại học Hàng hải Việt Nam (Hải Phòng), Đại học Giao thông Vận tải TP.HCM (Điều khiển tàu biển, Logistics cảng biển).',
          'Học viện Ngoại giao, Đại học Luật Hà Nội / TP.HCM (Chuyên ngành Luật Quốc tế & Luật Biển UNCLOS).'
        ]
      },
      {
        title: '4. Nhóm ngành Khoa học Biển, Năng lượng & Kinh tế Xanh',
        color: '#29B4D1',
        items: [
          'Hải dương học, Khí tượng Thủy văn, Địa chất – Dầu khí (ĐHQG Hà Nội, ĐHQG TP.HCM, ĐH Mỏ – Địa chất).',
          'Công nghệ sinh học biển, Nuôi trồng thủy sản công nghệ cao (ĐH Nha Trang, ĐH Cần Thơ, ĐH Nông Lâm).',
          'Kỹ thuật Năng lượng tái tạo (Điện gió ngoài khơi), Quản trị Du lịch biển đảo và Kinh tế Hàng hải.'
        ]
      }
    ],
    dataTable: {
      title: 'Bảng định hướng các nhóm ngành nghề đại học – học viện gắn với Chiến lược phát triển bền vững kinh tế biển và bảo vệ chủ quyền',
      sourceNote: 'Nguồn: Cẩm nang Tuyển sinh Đại học – Học viện và Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn 2045.',
      columns: ['Nhóm lĩnh vực nghề nghiệp', 'Các ngành đào tạo tiêu biểu', 'Tổ hợp môn xét tuyển THPT phổ biến', 'Các trường Đại học / Học viện đào tạo trọng điểm'],
      rows: [
        [
          '1. Quốc phòng – An ninh & Thực thi pháp luật trên biển',
          'Chỉ huy tham mưu Hải quân, Cảnh sát biển, Quản lý biên giới, Thông tin – Radar hàng hải',
          'A00 (Toán–Lý–Hóa), A01 (Toán–Lý–Anh), C00 (Văn–Sử–Địa)',
          'Học viện Hải quân (Khánh Hòa), Học viện Biên phòng, Trường Sĩ quan Kỹ thuật Quân sự (Vinhempich).'
        ],
        [
          '2. Kinh tế Hàng hải, Cảng biển & Chuỗi cung ứng (Logistics)',
          'Khoa học hàng hải, Kỹ thuật tàu thủy, Khai thác cảng biển, Logistics và Quản lý chuỗi cung ứng quốc tế',
          'A00, A01, D01 (Toán–Văn–Anh), D07 (Toán–Hóa–Anh)',
          'ĐH Hàng hải Việt Nam (VMU – Hải Phòng), ĐH Giao thông Vận tải TP.HCM (UTH), ĐH Ngoại thương, ĐH Kinh tế Quốc dân.'
        ],
        [
          '3. Khoa học Biển, Dầu khí & Năng lượng tái tạo ngoài khơi',
          'Hải dương học, Khí tượng thủy văn biển, Kỹ thuật dầu khí, Kỹ thuật điện gió ngoài khơi, Sinh thái biển',
          'A00 (Toán–Lý–Hóa), A01 (Toán–Lý–Anh), B00 (Toán–Hóa–Sinh)',
          'ĐH Khoa học Tự nhiên (ĐHQG Hà Nội & ĐHQG TP.HCM), ĐH Bách khoa, ĐH Mỏ – Địa chất, ĐH Dầu khí Việt Nam.'
        ],
        [
          '4. Luật Biển Quốc tế, Ngoại giao & Truyền thông đối ngoại',
          'Luật Quốc tế, Quan hệ quốc tế, Đông Nam Á học, Truyền thông quốc tế, Du lịch biển đảo',
          'D01 (Toán–Văn–Anh), C00 (Văn–Sử–Địa), D14 (Văn–Sử–Anh), D15 (Văn–Địa–Anh)',
          'Học viện Ngoại giao (DAV), ĐH Luật Hà Nội, ĐH Luật TP.HCM, ĐH Khoa học Xã hội và Nhân văn.'
        ]
      ]
    },
    importantCallout: {
      badge: 'THÔNG ĐIỆP DÀNH CHO THẾ HỆ TRẺ VIỆT NAM',
      title: 'Từ nhận thức chủ quyền trên ghế nhà trường đến khát vọng đưa Việt Nam trở thành Quốc gia mạnh về biển, giàu từ biển',
      points: [
        'Tầm nhìn chiến lược 2045: Việt Nam phấn đấu trở thành quốc gia biển mạnh, phát triển bền vững, thịnh vượng, an ninh và an toàn; kinh tế biển đóng góp quan trọng vào nền kinh tế đất nước.',
        'Sứ mệnh học sinh THPT: Dù lựa chọn trở thành chiến sĩ Hải quân, kỹ sư điện gió ngoài khơi, chuyên gia luật quốc tế, nhà hải dương học hay giáo viên, bác sĩ, mỗi học sinh hôm nay đều có thể đóng góp trí tuệ bảo vệ và làm giàu vùng biển đảo thiêng liêng của Tổ quốc.'
      ]
    }
  }
}

