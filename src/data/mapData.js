// Hệ quy chiếu địa lý khu vực Biển Đông (WGS84 giản lược phục vụ trực quan hóa giáo dục THPT)
// Khung kinh độ: 102.0°Đ -> 119.5°Đ | Khung vĩ độ: 6.0°B -> 23.5°B
export const MAP_BOUNDS = {
  minLng: 102.0,
  maxLng: 119.5,
  minLat: 6.0,
  maxLat: 23.5,
  width: 1000,
  height: 880
}

export function projectLatLng(lat, lng) {
  const x =
    ((lng - MAP_BOUNDS.minLng) / (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng)) *
    MAP_BOUNDS.width
  const y =
    ((MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) *
    MAP_BOUNDS.height
  return {
    x: Math.round(x * 10) / 10,
    y: Math.round(y * 10) / 10
  }
}

export function unprojectXY(x, y) {
  const lng =
    MAP_BOUNDS.minLng +
    (x / MAP_BOUNDS.width) * (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng)
  const lat =
    MAP_BOUNDS.maxLat -
    (y / MAP_BOUNDS.height) * (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)
  return {
    lat: Math.max(MAP_BOUNDS.minLat, Math.min(MAP_BOUNDS.maxLat, lat)),
    lng: Math.max(MAP_BOUNDS.minLng, Math.min(MAP_BOUNDS.maxLng, lng))
  }
}

// Tọa độ đường nét địa lý phần đất liền Việt Nam (khái quát hóa theo tọa độ địa lý tự nhiên)
export const VIETNAM_MAINLAND_COORDS = [
  [23.35, 105.32],
  [22.8, 106.75],
  [21.52, 107.98],
  [20.82, 106.72],
  [20.0, 106.12],
  [19.3, 105.82],
  [18.35, 105.92],
  [17.48, 106.62],
  [16.8, 107.18],
  [16.12, 108.15],
  [15.45, 108.82],
  [14.4, 109.12],
  [13.4, 109.28],
  [12.65, 109.42],
  [11.88, 109.2],
  [11.15, 108.65],
  [10.65, 107.82],
  [10.35, 107.08],
  [9.78, 106.62],
  [9.05, 105.45],
  [8.6, 104.72],
  [9.25, 104.82],
  [10.05, 105.05],
  [10.38, 104.48],
  [10.95, 106.15],
  [11.65, 105.95],
  [12.35, 107.52],
  [13.95, 107.45],
  [14.7, 107.55],
  [16.1, 107.25],
  [16.65, 106.58],
  [17.65, 105.75],
  [18.6, 105.12],
  [19.55, 104.05],
  [20.42, 104.58],
  [21.45, 102.85],
  [22.45, 102.22],
  [22.75, 103.85],
  [23.35, 105.32]
]

// Đường bờ biển phía Đông Việt Nam để tô nổi bật dải bờ biển 3.260 km
export const VIETNAM_COASTLINE_COORDS = [
  [21.52, 107.98],
  [20.82, 106.72],
  [20.0, 106.12],
  [19.3, 105.82],
  [18.35, 105.92],
  [17.48, 106.62],
  [16.8, 107.18],
  [16.12, 108.15],
  [15.45, 108.82],
  [14.4, 109.12],
  [13.4, 109.28],
  [12.65, 109.42],
  [11.88, 109.2],
  [11.15, 108.65],
  [10.65, 107.82],
  [10.35, 107.08],
  [9.78, 106.62],
  [9.05, 105.45],
  [8.6, 104.72],
  [9.25, 104.82],
  [10.05, 105.05],
  [10.38, 104.48]
]

export const MAP_CATEGORIES = [
  { id: 'all', label: 'Tất cả địa danh (16)' },
  { id: 'archipelago', label: '2 Quần đảo Hoàng Sa – Trường Sa' },
  { id: 'hoang-sa-point', label: 'Khu vực Hoàng Sa' },
  { id: 'truong-sa-point', label: 'Khu vực Trường Sa & DK1' },
  { id: 'coastal-island', label: 'Đảo ven bờ & Căn cứ đất liền' }
]

export const MAP_CAMERA_PRESETS = [
  {
    id: 'overview',
    label: 'Toàn cảnh Biển Đông',
    zoom: 1,
    panX: 0,
    panY: 0
  },
  {
    id: 'hoang-sa',
    label: 'Quần đảo Hoàng Sa',
    zoom: 2.35,
    targetLat: 16.45,
    targetLng: 111.75
  },
  {
    id: 'truong-sa',
    label: 'Quần đảo Trường Sa',
    zoom: 2.15,
    targetLat: 9.75,
    targetLng: 113.35
  },
  {
    id: 'coastal',
    label: 'Dải ven biển & Đảo tiền tiêu',
    zoom: 1.65,
    targetLat: 14.5,
    targetLng: 108.0
  }
]

export const MAP_MARKERS = [
  // === 1. HAI QUẦN ĐẢO TIỀN TIÊU ===
  {
    id: 'quan-dao-hoang-sa',
    name: 'Quần đảo Hoàng Sa',
    subtitle: 'Đơn vị hành chính thuộc thành phố Đà Nẵng',
    category: 'archipelago',
    categoryLabel: 'Quần đảo tiền tiêu',
    markerType: 'major-gold',
    lat: 16.53,
    lng: 111.63,
    coordText: 'Khoảng 15°45′B – 17°05′B | 111°00′Đ – 113°00′Đ',
    adminUnit: 'Huyện đảo Hoàng Sa, Thành phố Đà Nẵng',
    summary:
      'Quần đảo Hoàng Sa nằm ở khu vực phía Bắc Biển Đông, cách thành phố Đà Nẵng khoảng 170 hải lý (và cách đảo Lý Sơn khoảng 120 hải lý), gồm hai nhóm đảo chính là nhóm An Vĩnh ở phía Đông và nhóm Lưỡi Liềm ở phía Tây.',
    geoFeatures:
      'Bao gồm hơn 30 đảo, đá, cồn san hô và bãi cạn. Địa hình chủ yếu là các đảo san hô thấp, có vị trí án ngữ tuyến hàng hải quốc tế huyết mạch qua Biển Đông.',
    educationalNote:
      'Trọng tâm bài học Lịch sử & Địa lý THPT: Quá trình nhà nước Việt Nam xác lập và thực thi chủ quyền liên tục từ đội Hoàng Sa thế kỷ XVII, thời kỳ các chúa Nguyễn, triều Tây Sơn, triều Nguyễn đến ngày nay.',
    tags: ['Huyện đảo Hoàng Sa', 'TP. Đà Nẵng', 'Nhóm An Vĩnh', 'Nhóm Lưỡi Liềm'],
    sourceRef: 'SGK Lịch sử & Địa lý lớp 10, 11, 12 (GDPT 2018); Cổng TTĐT Chính phủ'
  },
  {
    id: 'quan-dao-truong-sa',
    name: 'Quần đảo Trường Sa',
    subtitle: 'Đơn vị hành chính thuộc tỉnh Khánh Hòa',
    category: 'archipelago',
    categoryLabel: 'Quần đảo tiền tiêu',
    markerType: 'major-gold',
    lat: 9.8,
    lng: 114.2,
    coordText: 'Khoảng 06°30′B – 12°00′B | 111°30′Đ – 117°20′Đ',
    adminUnit: 'Huyện đảo Trường Sa, Tỉnh Khánh Hòa',
    summary:
      'Quần đảo Trường Sa nằm ở khu vực phía Nam Biển Đông, cách vịnh Cam Ranh (tỉnh Khánh Hòa) khoảng 248 hải lý, gồm hơn 100 đảo, đá, cồn san hô và bãi ngầm trải rộng trên vùng biển lớn.',
    geoFeatures:
      'Được chia thành 8 cụm (Song Tử, Thị Tứ, Loại Ta, Nam Yết, Sinh Tồn, Trường Sa, Thám Hiểm, Bình Nguyên). Có ý nghĩa chiến lược đặc biệt về quốc phòng - an ninh và kinh tế biển.',
    educationalNote:
      'Trọng tâm Địa lý & GDQP-AN THPT: Vai trò của huyện đảo Trường Sa (gồm thị trấn Trường Sa và các xã đảo Song Tử Tây, Sinh Tồn) trong bảo vệ chủ quyền và phát triển kinh tế biển.',
    tags: ['Huyện đảo Trường Sa', 'Tỉnh Khánh Hòa', 'Thị trấn Trường Sa', '8 Cụm đảo'],
    sourceRef: 'SGK Địa lý 12 & GDQP-AN THPT (GDPT 2018); Cổng TTĐT tỉnh Khánh Hòa'
  },

  // === 2. CÁC ĐỊA DANH TIÊU BIỂU THUỘC QUẦN ĐẢO HOÀNG SA ===
  {
    id: 'dao-hoang-sa',
    name: 'Đảo Hoàng Sa (Pattle Island)',
    subtitle: 'Thuộc nhóm Lưỡi Liềm – Quần đảo Hoàng Sa',
    category: 'hoang-sa-point',
    categoryLabel: 'Thuộc Quần đảo Hoàng Sa',
    markerType: 'island-cyan',
    lat: 16.53,
    lng: 111.6,
    coordText: '16°32′05″B – 111°36′30″Đ',
    adminUnit: 'Huyện đảo Hoàng Sa, TP. Đà Nẵng',
    summary:
      'Đảo Hoàng Sa là một trong những đảo chính thuộc nhóm Lưỡi Liềm ở phía Tây quần đảo Hoàng Sa, nơi từng đặt trạm khí tượng Hoàng Sa (số hiệu quốc tế 48860 của Tổ chức Khí tượng Thế giới WMO).',
    geoFeatures:
      'Đảo san hô có diện tích khoảng 0,32 km², có lớp phủ thực vật tự nhiên và giếng nước lợ.',
    educationalNote:
      'Tư liệu lịch sử THPT: Trạm khí tượng Hoàng Sa hoạt động liên tục và phát tin khí tượng quốc tế mang tên Việt Nam từ thập niên 1930.',
    tags: ['Nhóm Lưỡi Liềm', 'Trạm khí tượng 48860', 'Quần đảo Hoàng Sa'],
    sourceRef: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao; SGK Lịch sử THPT'
  },
  {
    id: 'dao-phu-lam',
    name: 'Đảo Phú Lâm (Woody Island)',
    subtitle: 'Thuộc nhóm An Vĩnh – Quần đảo Hoàng Sa',
    category: 'hoang-sa-point',
    categoryLabel: 'Thuộc Quần đảo Hoàng Sa',
    markerType: 'island-cyan',
    lat: 16.83,
    lng: 112.33,
    coordText: '16°50′00″B – 112°20′00″Đ',
    adminUnit: 'Huyện đảo Hoàng Sa, TP. Đà Nẵng',
    summary:
      'Đảo Phú Lâm là đảo có diện tích tự nhiên lớn nhất trong quần đảo Hoàng Sa, thuộc nhóm đảo An Vĩnh ở phía Đông Bắc.',
    geoFeatures:
      'Đảo có địa hình bằng phẳng, xưa kia có nhiều cây cối rậm rạp nên ngư dân và thủy quân Việt Nam gọi là Phú Lâm (rừng cây trù phú).',
    educationalNote:
      'Giúp học sinh THPT phân biệt hai nhóm đảo chính của quần đảo Hoàng Sa: Nhóm An Vĩnh (phía Đông) và Nhóm Lưỡi Liềm (phía Tây).',
    tags: ['Nhóm An Vĩnh', 'Đảo lớn nhất Hoàng Sa', 'Quần đảo Hoàng Sa'],
    sourceRef: 'Sách chuyên đề Lịch sử & Địa lý THPT (GDPT 2018)'
  },
  {
    id: 'dao-tri-ton',
    name: 'Đảo Tri Tôn (Triton Island)',
    subtitle: 'Điểm đảo phía Tây Nam Quần đảo Hoàng Sa',
    category: 'hoang-sa-point',
    categoryLabel: 'Thuộc Quần đảo Hoàng Sa',
    markerType: 'island-cyan',
    lat: 15.78,
    lng: 111.2,
    coordText: '15°46′30″B – 111°12′00″Đ',
    adminUnit: 'Huyện đảo Hoàng Sa, TP. Đà Nẵng',
    summary:
      'Đảo Tri Tôn nằm ở cực Tây Nam của quần đảo Hoàng Sa, là đảo nằm gần đất liền Việt Nam và đảo Lý Sơn (Quảng Ngãi) nhất trong quần đảo Hoàng Sa.',
    geoFeatures:
      'Là một đảo cát và san hô nằm trên rạn san hô độc lập ở phía Nam nhóm Lưỡi Liềm.',
    educationalNote:
      'Giúp học sinh quan sát khoảng cách địa lý gần gũi giữa bờ biển miền Trung Việt Nam (Quảng Ngãi, Đà Nẵng) với quần đảo Hoàng Sa.',
    tags: ['Cực Tây Nam Hoàng Sa', 'Gần đảo Lý Sơn', 'Quần đảo Hoàng Sa'],
    sourceRef: 'Tư liệu Địa lý Biển đảo Việt Nam – NXB Giáo dục Việt Nam'
  },

  // === 3. CÁC ĐỊA DANH TIÊU BIỂU THUỘC QUẦN ĐẢO TRƯỜNG SA & THỀM LỤC ĐỊA ===
  {
    id: 'dao-truong-sa-lon',
    name: 'Đảo Trường Sa (Trường Sa Lớn)',
    subtitle: 'Trung tâm hành chính Thị trấn Trường Sa',
    category: 'truong-sa-point',
    categoryLabel: 'Thuộc Quần đảo Trường Sa',
    markerType: 'island-cyan',
    lat: 8.64,
    lng: 111.92,
    coordText: '08°38′30″B – 111°55′55″Đ',
    adminUnit: 'Thị trấn Trường Sa, Huyện Trường Sa, Tỉnh Khánh Hòa',
    summary:
      'Đảo Trường Sa (thường gọi là Trường Sa Lớn) là trung tâm hành chính của thị trấn Trường Sa, huyện đảo Trường Sa, tỉnh Khánh Hòa.',
    geoFeatures:
      'Trên đảo có Cột mốc chủ quyền, Trạm khí tượng hải văn, Hải đăng Trường Sa, Âu tàu, trường tiểu học, bệnh xá, chùa Trường Sa và khu dân cư sinh sống.',
    educationalNote:
      'Điểm nhấn giáo dục THPT về sức sống nơi đảo tiền tiêu: Quân và dân thị trấn Trường Sa xây dựng đảo xanh, sạch, đẹp và hỗ trợ ngư dân vươn khơi bám biển.',
    tags: ['Thị trấn Trường Sa', 'Thủ phủ huyện đảo', 'Cột mốc chủ quyền'],
    sourceRef: 'SGK Địa lý 12 (GDPT 2018); Cổng TTĐT tỉnh Khánh Hòa'
  },
  {
    id: 'dao-song-tu-tay',
    name: 'Đảo Song Tử Tây',
    subtitle: 'Xã đảo cực Bắc của Huyện đảo Trường Sa',
    category: 'truong-sa-point',
    categoryLabel: 'Thuộc Quần đảo Trường Sa',
    markerType: 'island-cyan',
    lat: 11.43,
    lng: 114.33,
    coordText: '11°25′45″B – 114°19′50″Đ',
    adminUnit: 'Xã Song Tử Tây, Huyện Trường Sa, Tỉnh Khánh Hòa',
    summary:
      'Đảo Song Tử Tây nằm ở phía Bắc quần đảo Trường Sa, là trung tâm hành chính của xã đảo Song Tử Tây thuộc huyện Trường Sa.',
    geoFeatures:
      'Trên đảo có ngọn Hải đăng Song Tử Tây cao 36m (hải đăng cấp I quốc tế), trạm khí tượng hải văn, âu tàu lớn cho tàu thuyền ngư dân tránh trú bão và chùa Song Tử Tây.',
    educationalNote:
      'Minh họa sinh động về hệ thống hải đăng Việt Nam trên quần đảo Trường Sa phục vụ an toàn hàng hải quốc tế.',
    tags: ['Xã đảo Song Tử Tây', 'Hải đăng Song Tử Tây', 'Âu tàu ngư dân'],
    sourceRef: 'Tổng công ty Bảo đảm an toàn hàng hải Việt Nam; SGK Địa lý THPT'
  },
  {
    id: 'dao-sinh-ton',
    name: 'Đảo Sinh Tồn',
    subtitle: 'Trung tâm hành chính Xã đảo Sinh Tồn',
    category: 'truong-sa-point',
    categoryLabel: 'Thuộc Quần đảo Trường Sa',
    markerType: 'island-cyan',
    lat: 9.88,
    lng: 114.32,
    coordText: '09°53′07″B – 114°19′47″Đ',
    adminUnit: 'Xã Sinh Tồn, Huyện Trường Sa, Tỉnh Khánh Hòa',
    summary:
      'Đảo Sinh Tồn thuộc cụm Sinh Tồn, là trung tâm hành chính của xã đảo Sinh Tồn (một trong 3 đơn vị hành chính cấp xã/thị trấn của huyện đảo Trường Sa).',
    geoFeatures:
      'Đảo chạy dài theo hướng Đông – Tây, có hệ thống cây xanh chắn gió (bàng vuông, phong ba, mù u), trường học, chùa Sinh Tồn và khu dân cư.',
    educationalNote:
      'Giúp học sinh THPT nắm rõ cơ cấu hành chính của huyện đảo Trường Sa gồm: Thị trấn Trường Sa, Xã Song Tử Tây và Xã Sinh Tồn.',
    tags: ['Xã đảo Sinh Tồn', 'Cây phong ba - bàng vuông', 'Huyện đảo Trường Sa'],
    sourceRef: 'Cổng TTĐT Chính phủ; SGK Giáo dục Kinh tế & Pháp luật THPT'
  },
  {
    id: 'dao-nam-yet',
    name: 'Đảo Nam Yết',
    subtitle: 'Trung tâm Khu bảo tồn biển Nam Yết – Trường Sa',
    category: 'truong-sa-point',
    categoryLabel: 'Thuộc Quần đảo Trường Sa',
    markerType: 'island-cyan',
    lat: 10.18,
    lng: 114.37,
    coordText: '10°10′45″B – 114°22′00″Đ',
    adminUnit: 'Huyện Trường Sa, Tỉnh Khánh Hòa',
    summary:
      'Đảo Nam Yết thuộc cụm Nam Yết của quần đảo Trường Sa, nổi bật với hệ sinh thái rừng cây xanh tốt và đa dạng sinh học rạn san hô vùng biển xung quanh.',
    geoFeatures:
      'Khu bảo tồn biển Nam Yết có diện tích lớn với hàng trăm loài san hô cứng, san hô mềm, cá rạn và sinh vật biển quý hiếm.',
    educationalNote:
      'Liên hệ kiến thức Sinh học & Địa lý THPT: Bảo tồn đa dạng sinh học biển và phát triển bền vững môi trường đại dương.',
    tags: ['Cụm Nam Yết', 'Khu bảo tồn biển', 'Đa dạng sinh học san hô'],
    sourceRef: 'Bộ Nông nghiệp & Phát triển nông thôn; SGK Địa lý 12'
  },
  {
    id: 'nha-gian-dk1',
    name: 'Cụm Nhà giàn DK1',
    subtitle: 'Cột mốc chủ quyền trên Thềm lục địa phía Nam',
    category: 'truong-sa-point',
    categoryLabel: 'Thềm lục địa phía Nam',
    markerType: 'dk1-amber',
    lat: 8.05,
    lng: 110.5,
    coordText: 'Khu vực các bãi ngầm Phúc Tần, Phúc Nguyên, Tư Chính, Ba Kè...',
    adminUnit: 'Thềm lục địa phía Nam Tổ quốc',
    summary:
      'Hệ thống Nhà giàn DK1 (Trạm dịch vụ Kinh tế – Khoa học – Kỹ thuật) được xây dựng từ năm 1989 trên các bãi đá ngầm thuộc thềm lục địa phía Nam của Việt Nam.',
    geoFeatures:
      'Các nhà giàn vươn cao kiên cường giữa biển khơi trên nền san hô ngập nước (Tư Chính, Phúc Nguyên, Phúc Tần, Huyền Trân, Quế Đường, Ba Kè, Cà Mau).',
    educationalNote:
      'Biểu tượng của ý chí bảo vệ quyền chủ quyền và quyền tài phán quốc gia trên thềm lục địa Việt Nam theo Công ước UNCLOS 1982.',
    tags: ['Nhà giàn DK1', 'Thềm lục địa phía Nam', 'Kinh tế - Khoa học - Kỹ thuật'],
    sourceRef: 'Quân chủng Hải quân Việt Nam; SGK Giáo dục Quốc phòng & An ninh THPT'
  },

  // === 4. CÁC ĐẢO VEN BỜ & CĂN CỨ ĐẤT LIỀN LIÊN QUAN ===
  {
    id: 'dao-bach-long-vi',
    name: 'Đảo Bạch Long Vĩ',
    subtitle: 'Huyện đảo xa bờ nhất trong Vịnh Bắc Bộ',
    category: 'coastal-island',
    categoryLabel: 'Đảo tiền tiêu Vịnh Bắc Bộ',
    markerType: 'coastal-emerald',
    lat: 20.13,
    lng: 107.72,
    coordText: '20°08′00″B – 107°43′00″Đ',
    adminUnit: 'Huyện đảo Bạch Long Vĩ, Thành phố Hải Phòng',
    summary:
      'Đảo Bạch Long Vĩ nằm ở khoảng giữa Vịnh Bắc Bộ, cách đất liền Hải Phòng khoảng 110 km, là một trong những ngư trường lớn và trung tâm hậu cần nghề cá phía Bắc.',
    geoFeatures:
      'Có âu cảng lớn cho tàu cá tránh trú bão, trạm hải đăng Bạch Long Vĩ và khu bảo tồn biển.',
    educationalNote:
      'Bài học Địa lý 12 (Vùng Đồng bằng sông Hồng & Kinh tế biển): Vai trò của các huyện đảo trong phát triển tổng hợp kinh tế biển.',
    tags: ['Vịnh Bắc Bộ', 'TP. Hải Phòng', 'Hậu cần nghề cá'],
    sourceRef: 'SGK Địa lý 12 (GDPT 2018)'
  },
  {
    id: 'dao-con-co',
    name: 'Đảo Cồn Cỏ',
    subtitle: 'Đảo tiền tiêu vùng biển Bắc Trung Bộ',
    category: 'coastal-island',
    categoryLabel: 'Đảo tiền tiêu miền Trung',
    markerType: 'coastal-emerald',
    lat: 17.16,
    lng: 107.34,
    coordText: '17°09′30″B – 107°20′30″Đ',
    adminUnit: 'Huyện đảo Cồn Cỏ, Tỉnh Quảng Trị',
    summary:
      'Đảo Cồn Cỏ cách bờ biển Cửa Tùng (Quảng Trị) khoảng 15 hải lý, là điểm A11 trên đường cơ sở dùng để tính chiều rộng lãnh hải Việt Nam.',
    geoFeatures:
      'Được hình thành từ đá bazan núi lửa trẻ, có hệ sinh thái rừng nguyên sinh trên đảo và rạn san hô phong phú.',
    educationalNote:
      'Kiến thức Pháp luật & Địa lý THPT: Tìm hiểu hệ thống 11 điểm chuẩn đường cơ sở (từ A1 đến A11) của Việt Nam.',
    tags: ['Điểm chuẩn A11', 'Tỉnh Quảng Trị', 'Đảo đá bazan'],
    sourceRef: 'Tuyên bố ngày 12/11/1982 của Chính phủ Việt Nam; SGK Địa lý 12'
  },
  {
    id: 'tp-da-nang',
    name: 'Thành phố Đà Nẵng',
    subtitle: 'Đơn vị hành chính quản lý Huyện đảo Hoàng Sa',
    category: 'coastal-island',
    categoryLabel: 'Đô thị biển & Quản lý hành chính',
    markerType: 'coastal-emerald',
    lat: 16.05,
    lng: 108.2,
    coordText: '16°03′B – 108°12′Đ',
    adminUnit: 'Thành phố Đà Nẵng (Trực thuộc Trung ương)',
    summary:
      'Thành phố Đà Nẵng là trung tâm kinh tế biển lớn của miền Trung và là đơn vị hành chính cấp tỉnh trực tiếp quản lý huyện đảo Hoàng Sa. Tại đây có Nhà trưng bày Hoàng Sa lưu giữ nhiều tư liệu lịch sử quý giá.',
    geoFeatures:
      'Sở hữu cảng biển nước sâu Tiên Sa – Liên Chiểu, bán đảo Sơn Trà và kết nối trực tiếp với tuyến hàng hải ra quần đảo Hoàng Sa.',
    educationalNote:
      'Địa chỉ đỏ giáo dục ngoại khóa THPT: Nhà trưng bày Hoàng Sa (đường Hoàng Sa, quận Sơn Trà, TP. Đà Nẵng).',
    tags: ['Quản lý Huyện đảo Hoàng Sa', 'Nhà trưng bày Hoàng Sa', 'Kinh tế biển miền Trung'],
    sourceRef: 'UBND Thành phố Đà Nẵng; Nhà trưng bày Hoàng Sa'
  },
  {
    id: 'dao-ly-son',
    name: 'Đảo Lý Sơn',
    subtitle: 'Quê hương của Đội hùng binh Hoàng Sa kiêm quản Bắc Hải',
    category: 'coastal-island',
    categoryLabel: 'Di sản văn hóa & Điểm chuẩn A9',
    markerType: 'coastal-emerald',
    lat: 15.38,
    lng: 109.12,
    coordText: '15°22′50″B – 109°07′00″Đ',
    adminUnit: 'Huyện đảo Lý Sơn, Tỉnh Quảng Ngãi',
    summary:
      'Huyện đảo Lý Sơn (cù lao Ré) là quê hương của Đội Hoàng Sa kiêm quản Bắc Hải từ thế kỷ XVII, nơi lưu giữ Lễ Khao lề thế lính Hoàng Sa (Di sản văn hóa phi vật thể quốc gia) và cũng là điểm A9 của đường cơ sở.',
    geoFeatures:
      'Đảo có địa hình miệng núi lửa cổ độc đáo, cách đất liền khoảng 15 hải lý và là điểm xuất phát gần nhất ra quần đảo Hoàng Sa.',
    educationalNote:
      'Kết nối Lịch sử & Văn hóa THPT: Tri ân các thế hệ hùng binh Hoàng Sa dong thuyền ra cắm mốc, đo đạc thủy trình bảo vệ chủ quyền.',
    tags: ['Đội Hoàng Sa', 'Lễ Khao lề thế lính Hoàng Sa', 'Điểm chuẩn A9', 'Tỉnh Quảng Ngãi'],
    sourceRef: 'Bộ Văn hóa, Thể thao và Du lịch; SGK Lịch sử 11 (GDPT 2018)'
  },
  {
    id: 'tinh-khanh-hoa',
    name: 'Tỉnh Khánh Hòa (Vịnh Cam Ranh)',
    subtitle: 'Đơn vị hành chính quản lý Huyện đảo Trường Sa',
    category: 'coastal-island',
    categoryLabel: 'Trung tâm biển & Quản lý hành chính',
    markerType: 'coastal-emerald',
    lat: 11.9,
    lng: 109.2,
    coordText: '11°54′B – 109°12′Đ',
    adminUnit: 'Tỉnh Khánh Hòa',
    summary:
      'Tỉnh Khánh Hòa là đơn vị hành chính quản lý huyện đảo Trường Sa. Nơi đây có Vịnh Cam Ranh, Viện Hải dương học Nha Trang và Khu tưởng niệm Chiến sĩ Gạc Ma.',
    geoFeatures:
      'Có đường bờ biển dài, nhiều vịnh nước sâu kín gió (Vân Phong, Nha Trang, Cam Ranh) thuận lợi bậc nhất Đông Nam Á.',
    educationalNote:
      'Giáo dục truyền thống và khoa học biển THPT: Tìm hiểu Viện Hải dương học Nha Trang và mối gắn kết đất liền – Trường Sa.',
    tags: ['Quản lý Huyện đảo Trường Sa', 'Vịnh Cam Ranh', 'Viện Hải dương học'],
    sourceRef: 'Cổng TTĐT tỉnh Khánh Hòa; SGK Địa lý 12'
  },
  {
    id: 'dao-phu-quy',
    name: 'Đảo Phú Quý & Côn Đảo – Phú Quốc',
    subtitle: 'Hệ thống đảo tiền tiêu vùng biển phía Nam (A6, A3 – A1)',
    category: 'coastal-island',
    categoryLabel: 'Đảo tiền tiêu phía Nam',
    markerType: 'coastal-emerald',
    lat: 10.52,
    lng: 108.93,
    coordText: '10°31′B – 108°56′Đ (Đảo Phú Quý - Bình Thuận)',
    adminUnit: 'Tỉnh Bình Thuận, Bà Rịa - Vũng Tàu & Kiên Giang',
    summary:
      'Dải đảo phía Nam từ đảo Phú Quý (Bình Thuận, có Hòn Hải là điểm chuẩn A6), Côn Đảo (Bà Rịa - Vũng Tàu, điểm A3) đến quần đảo Thổ Chu (điểm A1) và đảo Phú Quốc (Kiên Giang) tạo thành thế trận biển đảo liên hoàn vững chắc.',
    geoFeatures:
      'Vùng biển rộng lớn, giàu tài nguyên thủy sản, dầu khí thềm lục địa và du lịch sinh thái biển đảo.',
    educationalNote:
      'Tổng kết bài học Địa lý biển đảo THPT: Hệ thống 12 huyện đảo và thành phố đảo của Việt Nam dọc từ Bắc vào Nam.',
    tags: ['Huyện đảo Phú Quý', 'Côn Đảo', 'TP. Phú Quốc', 'Điểm chuẩn A6 - A3 - A1'],
    sourceRef: 'SGK Địa lý 12 (GDPT 2018); Luật Biển Việt Nam 2012'
  }
]

export const MAP_LEGEND_ITEMS = [
  {
    color: '#F59E0B',
    border: '#FEF3C7',
    symbol: '★',
    label: 'Hai quần đảo tiền tiêu (Quần đảo Hoàng Sa, Quần đảo Trường Sa)'
  },
  {
    color: '#38BDF8',
    border: '#E0F2FE',
    symbol: '●',
    label: 'Các đảo, điểm đảo tiêu biểu thuộc Hoàng Sa & Trường Sa'
  },
  {
    color: '#F97316',
    border: '#FFEDD5',
    symbol: '◆',
    label: 'Cụm Nhà giàn DK1 trên Thềm lục địa phía Nam'
  },
  {
    color: '#10B981',
    border: '#D1FAE5',
    symbol: '▲',
    label: 'Đảo tiền tiêu ven bờ & Trung tâm hành chính đất liền quản lý huyện đảo'
  },
  {
    color: 'transparent',
    border: '#38BDF8',
    symbol: '┼',
    label: 'Lưới tọa độ Kinh độ – Vĩ độ địa lý tự nhiên (WGS84)'
  }
]

export const MAP_REFERENCE_SOURCES = [
  {
    id: 'src-1',
    title: 'Chương trình Giáo dục Phổ thông 2018 & Sách Giáo khoa THPT',
    organization: 'Bộ Giáo dục và Đào tạo – NXB Giáo dục Việt Nam',
    detail:
      'Sách giáo khoa và Chuyên đề học tập môn Địa lý, Lịch sử, Giáo dục Kinh tế & Pháp luật, Giáo dục Quốc phòng & An ninh lớp 10, 11, 12.'
  },
  {
    id: 'src-2',
    title: 'Luật Biển Việt Nam năm 2012 (Luật số 18/2012/QH13)',
    organization: 'Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam',
    detail:
      'Quy định về đường cơ sở, nội thủy, lãnh hải, vùng tiếp giáp lãnh hải, vùng đặc quyền kinh tế, thềm lục địa, các đảo, quần đảo Hoàng Sa, quần đảo Trường Sa và quần đảo khác thuộc chủ quyền Việt Nam.'
  },
  {
    id: 'src-3',
    title: 'Công ước của Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982)',
    organization: 'Liên Hợp Quốc (Việt Nam phê chuẩn năm 1994)',
    detail:
      'Khuôn khổ pháp lý quốc tế xác định các vùng biển và quyền lợi hợp pháp của quốc gia ven biển.'
  },
  {
    id: 'src-4',
    title: 'Cơ sở dữ liệu Bản đồ hành chính & Địa danh Việt Nam',
    organization: 'Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam (Bộ Tài nguyên và Môi trường)',
    detail:
      'Nguồn tham chiếu chính thức về bản đồ hành chính quốc gia và tọa độ địa danh biển đảo Việt Nam.'
  }
]

export const MAP_LEGAL_DISCLAIMER =
  'Lưu ý chuẩn mực pháp lý & học thuật: Bản đồ tương tác dưới đây hiển thị vị trí địa lý tự nhiên và thông tin giáo dục phục vụ học sinh THPT. Hệ thống tuyệt đối không tự ý vẽ hoặc khẳng định các đường ranh giới pháp lý trên biển khi chưa tích hợp trực tiếp lớp bản đồ chuẩn từ Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam.'
