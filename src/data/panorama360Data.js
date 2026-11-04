/**
 * DỮ LIỆU KHÔNG GIAN TRẢI NGHIỆM 360° BIỂN ĐẢO VIỆT NAM
 * Tuân thủ nghiêm ngặt yêu cầu dữ liệu:
 * - Không dùng ảnh thường (ảnh phẳng 2D) giả làm ảnh 360°.
 * - Không gán sai địa điểm.
 * - Phân biệt minh bạch giữa "Mô phỏng không gian 360° Equirectangular giáo dục (tỷ lệ 2:1)"
 *   và "Khu vực tích hợp / chờ bổ sung ảnh Panorama 360° thực địa".
 * - Ghi rõ nguồn tham khảo và quyền sử dụng học thuật trên từng không gian.
 */

export const PANORAMA_CONTROL_GUIDE = [
  {
    id: 'guide-drag',
    title: 'Kéo chuột hoặc Vuốt cảm ứng',
    desc: 'Nhấn giữ chuột trái (trên máy tính) hoặc chạm vuốt ngón tay (trên điện thoại) để xoay góc nhìn toàn cảnh 360° theo phương ngang (0°–360°) và phương đứng (-35° đến +35°).'
  },
  {
    id: 'guide-zoom',
    title: 'Phóng to & Thu nhỏ (100% – 220%)',
    desc: 'Sử dụng nút (+) / (-) trên thanh HUD hoặc thanh trượt tỷ lệ để quan sát cận cảnh các chi tiết cột mốc, hải đăng, rạn san hô và tư liệu.'
  },
  {
    id: 'guide-hotspot',
    title: 'Điểm thông tin tương tác (Hotspot)',
    desc: 'Nhấn vào các điểm ghim phát sáng trên không gian 360° để xoay tâm nhìn tới đúng tọa độ và mở hộp thông tin học thuật chi tiết.'
  },
  {
    id: 'guide-labels',
    title: 'Chú thích địa danh & La bàn số',
    desc: 'Bật/tắt lớp nhãn chú thích địa danh kèm tọa độ địa lý và nhấn trực tiếp vào thước độ la bàn (Bắc – Đông – Nam – Tây) để chuyển nhanh hướng nhìn.'
  },
  {
    id: 'guide-fullscreen',
    title: 'Chế độ Toàn màn hình (Fullscreen)',
    desc: 'Nhấn biểu tượng Toàn màn hình ở góc phải thanh công cụ hoặc phím ESC để mở rộng không gian trải nghiệm 360° toàn màn hình.'
  }
]

export const PANORAMA_THEMATIC_SPACES = [
  {
    id: 'canh-quan-bien-dao',
    order: 1,
    code: 'KHÔNG GIAN 360° #01',
    categoryLabel: '1. Cảnh quan biển đảo',
    title: 'Cảnh quan Biển đảo: Quần đảo Hoàng Sa & Quần đảo Trường Sa',
    region: 'Huyện Hoàng Sa (TP. Đà Nẵng) & Huyện Trường Sa (Tỉnh Khánh Hòa)',
    coordinates: '16°32′05″B, 111°37′20″Đ (Hoàng Sa) • 08°38′30″B, 111°55′55″Đ (Trường Sa)',
    elevation: 'Cao độ quan sát: +15m so với mực nước biển',
    panoramaSvg: '/assets/panorama/scene-01-canh-quan-bien-dao.svg',
    skyTheme: 'linear-gradient(180deg, #030B1C 0%, #072A58 46%, #0284C7 76%, #04142E 100%)',
    dataTypeBadge: 'Mô phỏng Không gian 360° Equirectangular Giáo dục (Tỷ lệ 2:1)',
    summary:
      'Góc nhìn toàn cảnh 360° kết nối không gian địa lý hai quần đảo tiền tiêu Hoàng Sa và Trường Sa: từ Cột mốc chủ quyền thiêng liêng, ngọn Hải đăng quốc tế, Trạm khí tượng hải văn đến những rặng bàng vuông, phong ba xanh mát giữa đại dương.',
    historicalNote:
      'Việt Nam đã xác lập và thực thi chủ quyền liên tục, hòa bình đối với quần đảo Hoàng Sa và quần đảo Trường Sa từ thế kỷ XVII qua hoạt động của đội Hoàng Sa, đội Bắc Hải, Thủy quân triều Nguyễn đến hệ thống hành chính hiện đại.',
    sourceAndRights: {
      sourceName:
        'Dữ liệu tọa độ và địa danh chuẩn hóa từ Ủy ban Biên giới Quốc gia (Bộ Ngoại giao), UBND huyện Hoàng Sa (Đà Nẵng) & UBND huyện Trường Sa (Khánh Hòa).',
      usageRights:
        'Đồ họa Panorama 360° Equirectangular (2400×1200) thuộc bản quyền Hệ sinh thái số Biển Đảo Việt Nam phục vụ giáo dục THPT phi thương mại.',
      fieldPhotoStatus:
        'Đã tích hợp khung tải ảnh Equirectangular 2:1 thực địa từ Nhà Trưng bày Hoàng Sa & Bảo tàng Hải quân.'
    },
    placeLabels: [
      {
        id: 'lbl-hs-pattle',
        yaw: 55,
        pitch: -6,
        name: 'Đảo Hoàng Sa (Pattle) — Nhóm Lưỡi Liềm',
        subLabel: '16°32′05″B - 111°37′20″Đ • Cách Lý Sơn ~120 hải lý'
      },
      {
        id: 'lbl-ts-lon',
        yaw: 180,
        pitch: -8,
        name: 'Đảo Trường Sa Lớn — Thị trấn Trường Sa',
        subLabel: '08°38′30″B - 111°55′55″Đ • Cách Cam Ranh ~254 hải lý'
      },
      {
        id: 'lbl-song-tu-tay',
        yaw: 300,
        pitch: -5,
        name: 'Cụm Hải đăng & Âu tàu Song Tử Tây',
        subLabel: '11°25′45″B - 114°19′55″Đ • Hải đăng cấp quốc tế'
      }
    ],
    hotspots: [
      {
        id: 'hs-cq-01',
        bearing: 55,
        pitch: 4,
        directionLabel: 'Đông Bắc (55°)',
        category: 'Di tích Chủ quyền',
        title: 'Bia Chủ quyền 1938 & Trạm Khí tượng Hoàng Sa (WMO 48860)',
        coordinates: '16°32′05″ Vĩ Bắc — 111°37′20″ Kinh Đông',
        detail:
          'Tại đảo Hoàng Sa (Pattle) thuộc nhóm Lưỡi Liềm, chính quyền đại diện nhà nước Việt Nam đã dựng Bia chủ quyền năm 1938 (theo Nghị định 156-SC) và vận hành Trạm khí tượng Hoàng Sa mang số hiệu quốc tế WMO 48860.',
        source: 'Nhà Trưng bày Hoàng Sa (TP. Đà Nẵng) & Tổ chức Khí tượng Thế giới (WMO)'
      },
      {
        id: 'hs-cq-02',
        bearing: 165,
        pitch: -2,
        directionLabel: 'Nam Đông Nam (165°)',
        category: 'Cột mốc Quốc gia',
        title: 'Cột mốc Chủ quyền Đảo Trường Sa Lớn',
        coordinates: '08°38′30″ Vĩ Bắc — 111°55′55″ Kinh Đông',
        detail:
          'Công trình biểu tượng khẳng định chủ quyền quốc gia Việt Nam tại trung tâm thị trấn Trường Sa (huyện Trường Sa, tỉnh Khánh Hòa), nơi diễn ra lễ chào cờ và duyệt đội ngũ thiêng liêng nơi đầu sóng.',
        source: 'Cổng Thông tin điện tử tỉnh Khánh Hòa & Nghị định 65/2007/NĐ-CP'
      },
      {
        id: 'hs-cq-03',
        bearing: 215,
        pitch: -10,
        directionLabel: 'Tây Nam (215°)',
        category: 'An toàn Hàng hải',
        title: 'Hệ thống Hải đăng Quốc tế trên Quần đảo Trường Sa',
        coordinates: 'Song Tử Tây, Đá Lát, Đá Tây, An Bang, Trường Sa, Tiên Nữ',
        detail:
          'Các ngọn hải đăng trên quần đảo Trường Sa có tên trong danh bạ hải đăng quốc tế, hoạt động liên tục ngày đêm dẫn đường cho tàu thuyền quốc tế qua Biển Đông.',
        source: 'Tổng công ty Bảo đảm An toàn Hàng hải Việt Nam'
      },
      {
        id: 'hs-cq-04',
        bearing: 305,
        pitch: 6,
        directionLabel: 'Tây Bắc (305°)',
        category: 'Cảnh quan Sinh thái Đảo',
        title: 'Không gian Chùa Trường Sa & Rặng Bàng vuông Kiên cường',
        coordinates: 'Thị trấn Trường Sa, huyện Trường Sa, tỉnh Khánh Hòa',
        detail:
          'Kiến trúc văn hóa tâm linh thuần Việt với mái chùa cong hướng ra biển lớn, bao quanh là những hàng cây bàng vuông, phong ba, bão táp vươn mình xanh tốt trong gió biển mặn.',
        source: 'Báo Hải quân Việt Nam & Sở Văn hóa - Thể thao tỉnh Khánh Hòa'
      }
    ]
  },
  {
    id: 'he-sinh-thai-bien',
    order: 2,
    code: 'KHÔNG GIAN 360° #02',
    categoryLabel: '2. Hệ sinh thái biển',
    title: 'Hệ sinh thái Biển: Rạn San hô, Thảm Cỏ biển & Rừng Ngập mặn',
    region: 'Vùng biển Hoàng Sa, Trường Sa & Mạng lưới 16 Khu Bảo tồn Biển Việt Nam',
    coordinates: 'Vùng biển nhiệt đới Biển Đông (06°00′B – 21°30′B)',
    elevation: 'Độ sâu quan sát thủy sinh: -5m đến +2m đới bờ',
    panoramaSvg: '/assets/panorama/scene-02-he-sinh-thai-bien.svg',
    skyTheme: 'linear-gradient(180deg, #083344 0%, #0E7490 42%, #0369A1 75%, #031026 100%)',
    dataTypeBadge: 'Mô phỏng Không gian 360° Thủy sinh & Đới bờ (Tỷ lệ 2:1)',
    summary:
      'Khám phá toàn cảnh 360° dưới lòng đại dương và vùng đới bờ Việt Nam với 3 hệ sinh thái trụ cột: Rạn san hô nhiệt đới (hơn 400 loài tạo rạn), Thảm cỏ biển nuôi dưỡng Rùa biển – Bò biển (Dugong), và Rừng ngập mặn tích trữ Carbon xanh.',
    historicalNote:
      'Theo Viện Hải dương học (Viện Hàn lâm KH&CN Việt Nam), vùng biển Việt Nam là một trong những trung tâm đa dạng sinh học biển cao của thế giới, cung cấp nguồn ấu trùng thủy sản tự nhiên cho toàn khu vực Biển Đông.',
    sourceAndRights: {
      sourceName:
        'Dữ liệu khoa học từ Viện Hải dương học Nha Trang, Vườn Quốc gia Côn Đảo & Cục Biển và Hải đảo Việt Nam.',
      usageRights:
        'Đồ họa mô phỏng thủy sinh 360° phục vụ giảng dạy môn Sinh học & Địa lý THPT (Chương trình GDPT 2018).',
      fieldPhotoStatus:
        'Hỗ trợ tải ảnh Panorama 360° dưới nước (Underwater Equirectangular 2:1) từ các Khu bảo tồn biển Hòn Mun, Cù Lao Chàm, Côn Đảo.'
    },
    placeLabels: [
      {
        id: 'lbl-eco-mangrove',
        yaw: 60,
        pitch: -5,
        name: 'Hệ sinh thái Rừng ngập mặn & Thảm cỏ biển',
        subLabel: 'Cần Giờ, Mũi Cà Mau, Phú Quốc • Bể chứa Carbon Xanh'
      },
      {
        id: 'lbl-eco-coral',
        yaw: 180,
        pitch: 8,
        name: 'Rạn San hô Nhiệt đới Hoàng Sa – Trường Sa',
        subLabel: 'Hơn 400 loài san hô tạo rạn • Nơi cư trú của 25% sinh vật biển'
      },
      {
        id: 'lbl-eco-turtle',
        yaw: 300,
        pitch: 2,
        name: 'Khu Bảo tồn Rùa biển Côn Đảo & Dugong Phú Quốc',
        subLabel: '5 loài rùa biển quý hiếm trong Sách Đỏ Việt Nam'
      }
    ],
    hotspots: [
      {
        id: 'hs-eco-01',
        bearing: 60,
        pitch: 5,
        directionLabel: 'Đông Bắc (60°)',
        category: 'Carbon Xanh (Blue Carbon)',
        title: 'Thảm Cỏ biển & Rừng Ngập mặn Ven biển, Hải đảo',
        coordinates: 'Khu Dự trữ Sinh quyển UNESCO Cần Giờ, Cà Mau, Cát Bà, Kiên Giang',
        detail:
          'Rừng ngập mặn và thảm cỏ biển hấp thụ lượng CO₂ cao gấp 3–5 lần rừng trên cạn, vừa làm lá chắn tự nhiên giảm 50–70% năng lượng sóng bão vừa là bãi đẻ của các loài thủy sản.',
        source: 'Ủy ban Quốc gia Chương trình Con người và Sinh quyển (MAB) Việt Nam'
      },
      {
        id: 'hs-eco-02',
        bearing: 180,
        pitch: 10,
        directionLabel: 'Chính Nam (180°)',
        category: 'Đa dạng Sinh học',
        title: 'Quần xã Rạn San hô Nhiệt đới (Hơn 400 loài tạo rạn)',
        coordinates: 'Hoàng Sa, Trường Sa, Hòn Mun (Khánh Hòa), Cù Lao Chàm, Lý Sơn',
        detail:
          'Rạn san hô tạo nên cấu trúc nền tảng địa chất cho các đảo san hô ngoài khơi và là "rừng mưa nhiệt đới dưới đáy biển" nuôi dưỡng hàng nghìn loài cá rạn, giáp xác, thân mềm.',
        source: 'Viện Hải dương học – Viện Hàn lâm Khoa học và Công nghệ Việt Nam'
      },
      {
        id: 'hs-eco-03',
        bearing: 295,
        pitch: 0,
        directionLabel: 'Tây Tây Bắc (295°)',
        category: 'Bảo tồn Sách Đỏ',
        title: 'Bảo tồn Rùa biển (Vích, Đồi mồi) & Bò biển (Dugong)',
        coordinates: 'Vườn Quốc gia Côn Đảo (Bà Rịa – Vũng Tàu) & Phú Quốc (Kiên Giang)',
        detail:
          'Hằng năm tại Côn Đảo có hàng trăm cá thể rùa mẹ lên bãi cát đẻ trứng và hàng chục nghìn rùa con được thả về biển an toàn. Thảm cỏ biển Phú Quốc – Côn Đảo còn là nơi sinh sống của loài thú biển quý hiếm Dugong.',
        source: 'Vườn Quốc gia Côn Đảo & Tổ chức Bảo tồn Thiên nhiên Quốc tế (IUCN)'
      }
    ]
  },
  {
    id: 'doi-song-tren-dao',
    order: 3,
    code: 'KHÔNG GIAN 360° #03',
    categoryLabel: '3. Đời sống trên đảo',
    title: 'Đời sống trên Đảo: Trường học, Bệnh xá, Âu tàu & Nhà giàn DK1',
    region: 'Thị trấn Trường Sa, Xã Song Tử Tây, Xã Sinh Tồn & Cụm Nhà giàn DK1',
    coordinates: '08°38′30″B, 111°55′55″Đ (Trường Sa) • 07°50′00″B, 109°30′00″Đ (DK1)',
    elevation: 'Cao độ quan sát: +10m trên đảo & +28m trên sàn Nhà giàn DK1',
    panoramaSvg: '/assets/panorama/scene-03-doi-song-tren-dao.svg',
    skyTheme: 'linear-gradient(180deg, #041026 0%, #0C2D5E 45%, #0284C7 76%, #051833 100%)',
    dataTypeBadge: 'Mô phỏng Không gian 360° Sinh hoạt Quân – Dân (Tỷ lệ 2:1)',
    summary:
      'Trải nghiệm nhịp sống kiên cường và ấm áp tình quân dân nơi đầu sóng: từ lớp học tiếng trẻ thơ tại thị trấn Trường Sa, trung tâm y tế kết nối Telemedicine, âu tàu hậu cần nghề cá đến những vườn rau xanh trên sàn thép Nhà giàn DK1.',
    historicalNote:
      'Hệ thống hành chính dân sự tại huyện đảo Trường Sa cùng cụm Trạm Kinh tế – Khoa học – Dịch vụ DK1 (thành lập ngày 05/7/1989) là điểm tựa vững chắc cho ngư dân Việt Nam vươn khơi bám biển.',
    sourceAndRights: {
      sourceName:
        'Thông tin từ Quân chủng Hải quân Việt Nam, UBND huyện Trường Sa & Sở GD&ĐT tỉnh Khánh Hòa.',
      usageRights:
        'Đồ họa mô phỏng 360° phục vụ giáo dục công dân, quốc phòng – an ninh và hướng nghiệp THPT.',
      fieldPhotoStatus:
        'Sẵn sàng tích hợp ảnh 360° thực tế về đời sống đảo xa từ Báo Hải quân Việt Nam.'
    },
    placeLabels: [
      {
        id: 'lbl-life-school',
        yaw: 55,
        pitch: -4,
        name: 'Trường Tiểu học & Bệnh xá Quân dân y Trường Sa',
        subLabel: 'Thị trấn Trường Sa, xã Song Tử Tây, xã Sinh Tồn'
      },
      {
        id: 'lbl-life-dk1',
        yaw: 180,
        pitch: -10,
        name: 'Cụm Nhà giàn DK1 — Thềm lục địa phía Nam',
        subLabel: 'Tư Chính, Phúc Nguyên, Phúc Tần, Huyền Trân, Ba Kè'
      },
      {
        id: 'lbl-life-harbor',
        yaw: 305,
        pitch: 4,
        name: 'Âu tàu Dịch vụ Hậu cần Nghề cá & Làng chài',
        subLabel: 'Cung cấp nước ngọt, nhiên liệu, tránh bão miễn phí cho ngư dân'
      }
    ],
    hotspots: [
      {
        id: 'hs-life-01',
        bearing: 55,
        pitch: 2,
        directionLabel: 'Đông Bắc (55°)',
        category: 'Giáo dục & Y tế Đảo xa',
        title: 'Trường Tiểu học trên Đảo & Hệ thống Quân dân y Telemedicine',
        coordinates: 'Thị trấn Trường Sa, xã Song Tử Tây, xã Sinh Tồn (Tỉnh Khánh Hòa)',
        detail:
          'Những lớp học vang tiếng trẻ thơ giữa trùng khơi và Trung tâm Y tế thị trấn Trường Sa kết nối hội chẩn trực tuyến vệ tinh (Telemedicine) với Bệnh viện Quân y 175 đã cứu sống hàng trăm ngư dân gặp nạn.',
        source: 'Sở Giáo dục và Đào tạo tỉnh Khánh Hòa & Bệnh viện Quân y 175'
      },
      {
        id: 'hs-life-02',
        bearing: 180,
        pitch: -4,
        directionLabel: 'Chính Nam (180°)',
        category: 'Cột mốc Thềm lục địa',
        title: 'Đời sống Chiến sĩ trên Cụm Nhà giàn DK1 Thế hệ mới',
        coordinates: 'Thềm lục địa phía Nam Việt Nam (Thành lập ngày 05/7/1989)',
        detail:
          'Giữa bốn bề sóng gió cách đất liền hàng trăm hải lý, các chiến sĩ Nhà giàn DK1 vẫn vận hành hệ thống năng lượng mặt trời, trạm đèn biển và chăm sóc từng khay rau xanh che chắn gió mặn.',
        source: 'Bộ Tư lệnh Vùng 2 Hải quân – Quân chủng Hải quân Việt Nam'
      },
      {
        id: 'hs-life-03',
        bearing: 305,
        pitch: 6,
        directionLabel: 'Tây Bắc (305°)',
        category: 'Hậu cần Ngư trường',
        title: 'Âu tàu Tránh trú bão & Đội tàu Ngư dân Bám biển',
        coordinates: 'Đảo Trường Sa, Đá Tây, Song Tử Tây, Sinh Tồn',
        detail:
          'Hệ thống âu tàu hiện đại có sức chứa hàng trăm tàu cá công suất lớn vào tránh bão an toàn, tiếp nhận nước ngọt, đá lạnh và sửa chữa máy tàu miễn phí giữa ngư trường truyền thống.',
        source: 'Bộ Nông nghiệp và Phát triển nông thôn & Báo Hải quân Việt Nam'
      }
    ]
  },
  {
    id: 'khong-gian-thien-nhien',
    order: 4,
    code: 'KHÔNG GIAN 360° #04',
    categoryLabel: '4. Không gian thiên nhiên',
    title: 'Không gian Thiên nhiên: Bình minh Cực Đông & Kỳ quan Địa chất Đảo',
    region: 'Đảo Tiên Nữ (Trường Sa), Đảo Lý Sơn (Quảng Ngãi) & Quần đảo Cát Bà – Hạ Long',
    coordinates: '08°51′18″B, 114°39′18″Đ (Tiên Nữ) • 15°22′51″B, 109°07′03″Đ (Lý Sơn)',
    elevation: 'Cao độ quan sát: +22m từ Hải đăng Tiên Nữ & đỉnh Thới Lới',
    panoramaSvg: '/assets/panorama/scene-04-khong-gian-thien-nhien.svg',
    skyTheme: 'linear-gradient(180deg, #071936 0%, #1E3A8A 40%, #D97706 78%, #0284C7 100%)',
    dataTypeBadge: 'Mô phỏng Không gian 360° Địa chất & Hải văn (Tỷ lệ 2:1)',
    summary:
      'Chiêm ngưỡng vẻ đẹp hùng vĩ 360° của thiên nhiên biển đảo Việt Nam: từ khoảnh khắc đón ánh bình minh đầu tiên của Tổ quốc tại đảo Tiên Nữ (Kinh độ 114°39′18″Đ), vách đá núi lửa triệu năm tại đảo Lý Sơn đến di sản thiên nhiên thế giới Vịnh Hạ Long – Quần đảo Cát Bà.',
    historicalNote:
      'Cấu trúc địa chất vùng biển đảo Việt Nam hội tụ đầy đủ các dạng địa hình đặc sắc: đảo núi lửa базальт (Lý Sơn, Phú Quý, Cồn Cỏ), đảo đá vôi карст (Hạ Long – Cát Bà) và đảo san hô vòng (Hoàng Sa – Trường Sa).',
    sourceAndRights: {
      sourceName:
        'Dữ liệu địa chất – tự nhiên từ Viện Địa chất và Địa vật lý biển, UBND huyện Lý Sơn & UNESCO Việt Nam.',
      usageRights:
        'Đồ họa mô phỏng 360° phục vụ giáo dục Địa lý tự nhiên và Di sản thiên nhiên THPT.',
      fieldPhotoStatus:
        'Hỗ trợ gắn ảnh Panorama 360° bình minh và địa chất đảo từ nguồn mở được cấp phép.'
    },
    placeLabels: [
      {
        id: 'lbl-nat-tien-nu',
        yaw: 65,
        pitch: -5,
        name: 'Đảo Tiên Nữ — Nơi đón Bình minh đầu tiên trên Biển Đông',
        subLabel: '08°51′18″B - 114°39′18″Đ • Cực Đông Quần đảo Trường Sa'
      },
      {
        id: 'lbl-nat-ly-son',
        yaw: 180,
        pitch: -2,
        name: 'Thắng cảnh Núi lửa cổ Thới Lới & Cổng Tò Vò (Đảo Lý Sơn)',
        subLabel: '15°22′51″B - 109°07′03″Đ • Quê hương Đội Hoàng Sa'
      },
      {
        id: 'lbl-nat-cat-ba',
        yaw: 300,
        pitch: -4,
        name: 'Di sản Thiên nhiên Thế giới Vịnh Hạ Long – Quần đảo Cát Bà',
        subLabel: '20°48′00″B - 107°05′00″Đ • Địa hình Karst biển tiêu biểu'
      }
    ],
    hotspots: [
      {
        id: 'hs-nat-01',
        bearing: 65,
        pitch: 0,
        directionLabel: 'Đông Đông Bắc (65°)',
        category: 'Tọa độ Cực Đông',
        title: 'Ánh Bình minh Đầu tiên của Tổ quốc tại Đảo Tiên Nữ (114°39′18″Đ)',
        coordinates: '08°51′18″ Vĩ Bắc — 114°39′18″ Kinh Đông',
        detail:
          'Nằm ở vị trí cực Đông của quần đảo Trường Sa, đảo Tiên Nữ đón những tia nắng mặt trời đầu tiên trên lãnh thổ Việt Nam sớm hơn đất liền gần 30 phút, nổi bật với tháp hải đăng vàng óng giữa thềm san hô.',
        source: 'Báo Hải quân Việt Nam & Tổng công ty Bảo đảm An toàn Hàng hải'
      },
      {
        id: 'hs-nat-02',
        bearing: 180,
        pitch: 4,
        directionLabel: 'Chính Nam (180°)',
        category: 'Di sản Địa chất',
        title: 'Miệng Núi lửa Cổ Thới Lới, Cổng Tò Vò & Đình làng An Vĩnh (Lý Sơn)',
        coordinates: '15°22′51″ Vĩ Bắc — 109°07′03″ Kinh Đông (Huyện đảo Lý Sơn, Quảng Ngãi)',
        detail:
          'Hình thành từ các đợt phun trào núi lửa cách đây hàng triệu năm, đảo Lý Sơn không chỉ có thắng cảnh địa chất độc đáo mà còn là quê hương của Đội Hoàng Sa kiêm quản Bắc Hải.',
        source: 'Sở Văn hóa, Thể thao và Du lịch tỉnh Quảng Ngãi'
      },
      {
        id: 'hs-nat-03',
        bearing: 300,
        pitch: 2,
        directionLabel: 'Tây Bắc (300°)',
        category: 'Di sản UNESCO',
        title: 'Quần thể Đảo Đá vôi Vịnh Hạ Long – Quần đảo Cát Bà',
        coordinates: 'Tỉnh Quảng Ninh & Thành phố Hải Phòng',
        detail:
          'Tháng 9/2023, UNESCO đã công nhận quần thể Vịnh Hạ Long – Quần đảo Cát Bà là Di sản thiên nhiên thế giới liên tỉnh đầu tiên của Việt Nam với hàng nghìn đảo đá vôi và hệ sinh thái đặc hữu.',
        source: 'Ủy ban Quốc gia UNESCO Việt Nam & Bộ Văn hóa, Thể thao và Du lịch'
      }
    ]
  },
  {
    id: 'khu-vuc-trung-bay-tu-lieu',
    order: 5,
    code: 'KHÔNG GIAN 360° #05',
    categoryLabel: '5. Các khu vực trưng bày tư liệu',
    title: 'Không gian Bảo tàng 360°: Khu vực Trưng bày Tư liệu & Bản đồ Chủ quyền',
    region: 'Không gian Trưng bày Ảo 360° tích hợp Tư liệu Lưu trữ Quốc gia',
    coordinates: 'Trục tham quan 360°: Thư tịch cổ (0°–120°) • Bản đồ (120°–240°) • Hiện đại (240°–360°)',
    elevation: 'Góc nhìn tham quan trung tâm Sảnh Bảo tàng Số 360°',
    panoramaSvg: '/assets/panorama/scene-05-trung-bay-tu-lieu.svg',
    skyTheme: 'linear-gradient(180deg, #030916 0%, #0A1E3F 45%, #0F2952 80%, #040D1E 100%)',
    dataTypeBadge: 'Không gian Trưng bày Tư liệu Ảo 360° (Mô phỏng Kiến trúc Bảo tàng Số)',
    summary:
      'Đứng tại tâm điểm sảnh Bảo tàng Số và xoay 360° để tham quan 3 phân khu trưng bày tư liệu cốt lõi: Khu Châu bản & Mộc bản triều Nguyễn (Di sản tư liệu thế giới UNESCO), Khu Bản đồ cổ Việt Nam – phương Tây, và Khu Sa bàn Đội Hoàng Sa & Văn bản Pháp lý Hiện đại.',
    historicalNote:
      'Toàn bộ các tư liệu được giới thiệu trong sảnh trưng bày 360° đều dựa trên danh mục hồ sơ lưu trữ thực tế tại Trung tâm Lưu trữ Quốc gia I, Trung tâm Lưu trữ Quốc gia IV và Ủy ban Biên giới Quốc gia.',
    sourceAndRights: {
      sourceName:
        'Cục Văn thư và Lưu trữ nhà nước (Bộ Nội vụ), Ủy ban Biên giới Quốc gia (Bộ Ngoại giao) & Bộ Thông tin và Truyền thông.',
      usageRights:
        'Mô hình không gian bảo tàng số 360° phục vụ mục đích học tập, tra cứu lịch sử – pháp lý THPT.',
      fieldPhotoStatus:
        'Kết nối trực tiếp với phân hệ Không gian Triển lãm Số để phóng to từng hồ sơ tư liệu.'
    },
    placeLabels: [
      {
        id: 'lbl-mus-chauban',
        yaw: 60,
        pitch: -3,
        name: 'Phân khu A: Châu bản & Mộc bản Triều Nguyễn (Di sản UNESCO)',
        subLabel: 'Các bản tấu và châu phê mực son năm 1816 – 1838 về Hoàng Sa'
      },
      {
        id: 'lbl-mus-maps',
        yaw: 180,
        pitch: -5,
        name: 'Phân khu B: Đại Nam Nhất Thống Toàn Đồ & Bản đồ Cổ',
        subLabel: 'Thiên Nam tứ chí lộ đồ thư (1686) • Đại Nam nhất thống toàn đồ (1838)'
      },
      {
        id: 'lbl-mus-modern',
        yaw: 300,
        pitch: -3,
        name: 'Phân khu C: Sa bàn Đội Hoàng Sa & Hồ sơ Pháp lý UNCLOS 1982',
        subLabel: 'Hội nghị San Francisco (1951) • UNCLOS 1982 • Luật Biển Việt Nam 2012'
      }
    ],
    hotspots: [
      {
        id: 'hs-mus-01',
        bearing: 60,
        pitch: 2,
        directionLabel: 'Đông Bắc (60°)',
        category: 'Di sản Tư liệu UNESCO',
        title: 'Tủ Trưng bày Châu bản & Mộc bản Triều Nguyễn về Hoàng Sa, Trường Sa',
        coordinates: 'Lưu trữ gốc tại Trung tâm Lưu trữ Quốc gia I (Hà Nội) & IV (Đà Lạt)',
        detail:
          'Trưng bày các bản tấu của Bộ Công và châu phê bằng mực son của vua Minh Mạng (như châu bản ngày 12 tháng 2 năm Minh Mạng thứ 17 - 1836) cử Thủy quân ra Hoàng Sa cắm cột mốc, đo đạc thủy trình và vẽ bản đồ.',
        source: 'Cục Văn thư và Lưu trữ nhà nước – Bộ Nội vụ'
      },
      {
        id: 'hs-mus-02',
        bearing: 180,
        pitch: 0,
        directionLabel: 'Chính Nam (180°)',
        category: 'Bản đồ Chủ quyền',
        title: 'Khung Trưng bày Trung tâm: "Đại Nam nhất thống toàn đồ" (1838)',
        coordinates: 'Hồ sơ Bản đồ Cổ Việt Nam & Bản đồ Phương Tây thế kỷ XVII–XIX',
        detail:
          'Bản đồ "Đại Nam nhất thống toàn đồ" (1838) vẽ rõ hai địa danh "Hoàng Sa" và "Vạn Lý Trường Sa" nằm trong dải biển thuộc chủ quyền Việt Nam, đối chiếu đồng bộ với "An Nam đại quốc họa đồ" (1838) của Giám mục Taberd.',
        source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & Viện Nghiên cứu Hán Nôm'
      },
      {
        id: 'hs-mus-03',
        bearing: 300,
        pitch: 2,
        directionLabel: 'Tây Bắc (300°)',
        category: 'Pháp lý Hiện đại',
        title: 'Khu Trưng bày UNCLOS 1982, Luật Biển Việt Nam 2012 & Sa bàn Đội Hoàng Sa',
        coordinates: 'Hệ thống Pháp luật Quốc gia & Công ước Quốc tế về Luật Biển',
        detail:
          'Giới thiệu sơ đồ 5 vùng biển theo UNCLOS 1982, Luật Biển Việt Nam năm 2012 và mô hình thuyền câu của Đội Hoàng Sa kiêm quản Bắc Hải xuất phát từ Cù lao Ré (Lý Sơn).',
        source: 'Bộ Ngoại giao & Bộ Thông tin và Truyền thông'
      }
    ]
  }
]
