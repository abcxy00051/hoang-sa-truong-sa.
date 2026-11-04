// ============================================================================
// CƠ SỞ DỮ LIỆU ĐỊA LÝ CHUẨN GEOJSON (RFC 7946) & HỒ SƠ BẢN ĐỒ SỐ BIỂN ĐẢO
// Hệ tọa độ tham chiếu: WGS84 (Kinh độ, Vĩ độ xác thực từ văn bản pháp luật & học liệu)
// ============================================================================

/**
 * Chuyển đổi độ thập phân (Decimal Degrees) sang Độ - Phút - Giây (DMS)
 */
export function formatDMS(value, isLat = true) {
  const abs = Math.abs(Number(value) || 0)
  const deg = Math.floor(abs)
  const minFloat = (abs - deg) * 60
  const min = Math.floor(minFloat)
  const sec = Math.round((minFloat - min) * 60)
  const suffix = isLat ? (value >= 0 ? 'B' : 'N') : value >= 0 ? 'Đ' : 'T'
  const paddedDeg = String(deg).padStart(isLat ? 2 : 3, '0')
  const paddedMin = String(min).padStart(2, '0')
  const paddedSec = String(sec === 60 ? 59 : sec).padStart(2, '0')
  return `${paddedDeg}°${paddedMin}′${paddedSec}″${suffix}`
}

/**
 * Công thức Haversine tính khoảng cách đường tròn lớn (Great-Circle Distance)
 * trên mặt cầu Trái Đất (bán kính trung bình R = 6371.0088 km) và góc phương vị (Bearing)
 */
export function calculateGisMeasurement(lat1, lng1, lat2, lng2) {
  const toRad = (deg) => (deg * Math.PI) / 180
  const toDeg = (rad) => (rad * 180) / Math.PI

  const R_KM = 6371.0088
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const radLat1 = toRad(lat1)
  const radLat2 = toRad(lat2)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(radLat1) *
      Math.cos(radLat2) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distanceKm = R_KM * c
  const distanceNm = distanceKm / 1.852 // 1 Hải lý quốc tế = 1.852 km

  const y = Math.sin(dLng) * Math.cos(radLat2)
  const x =
    Math.cos(radLat1) * Math.sin(radLat2) -
    Math.sin(radLat1) * Math.cos(radLat2) * Math.cos(dLng)
  const bearingDeg = (toDeg(Math.atan2(y, x)) + 360) % 360

  return {
    distanceKm: Math.round(distanceKm * 10) / 10,
    distanceNm: Math.round(distanceNm * 10) / 10,
    bearingDeg: Math.round(bearingDeg * 10) / 10
  }
}

/**
 * 11 Điểm chuẩn Đường cơ sở thẳng dùng để tính chiều rộng lãnh hải ven bờ lục địa Việt Nam
 * Nguồn pháp lý chính thức: Phụ lục đính kèm Tuyên bố ngày 12/11/1982 của Chính phủ nước CHXHCN Việt Nam
 * (Tọa độ chính xác tuyệt đối theo văn bản pháp quy, không tự suy diễn)
 */
export const OFFICIAL_BASELINE_POINTS_1982 = [
  {
    code: 'A1',
    name: 'Đảo Hòn Nhạn (Quần đảo Thổ Chu, Kiên Giang)',
    lat: 9 + 15 / 60, // 09°15.0'B
    lng: 103 + 27 / 60, // 103°27.0'Đ
    dmsLat: '09°15′00″B',
    dmsLng: '103°27′00″Đ',
    province: 'Tỉnh Kiên Giang'
  },
  {
    code: 'A2',
    name: 'Hòn Đá Lẻ (Đông Nam Hòn Khoai, Cà Mau)',
    lat: 8 + 22.8 / 60, // 08°22.8'B
    lng: 104 + 52.4 / 60, // 104°52.4'Đ
    dmsLat: '08°22′48″B',
    dmsLng: '104°52′24″Đ',
    province: 'Tỉnh Cà Mau'
  },
  {
    code: 'A3',
    name: 'Hòn Tài Lớn (Quần đảo Côn Đảo, Bà Rịa - Vũng Tàu)',
    lat: 8 + 37.8 / 60, // 08°37.8'B
    lng: 106 + 37.5 / 60, // 106°37.5'Đ
    dmsLat: '08°37′48″B',
    dmsLng: '106°37′30″Đ',
    province: 'Tỉnh Bà Rịa - Vũng Tàu'
  },
  {
    code: 'A4',
    name: 'Hòn Bông Lang (Quần đảo Côn Đảo, Bà Rịa - Vũng Tàu)',
    lat: 8 + 38.9 / 60, // 08°38.9'B
    lng: 106 + 40.3 / 60, // 106°40.3'Đ
    dmsLat: '08°38′54″B',
    dmsLng: '106°40′18″Đ',
    province: 'Tỉnh Bà Rịa - Vũng Tàu'
  },
  {
    code: 'A5',
    name: 'Hòn Bảy Cạnh (Quần đảo Côn Đảo, Bà Rịa - Vũng Tàu)',
    lat: 8 + 39.7 / 60, // 08°39.7'B
    lng: 106 + 42.1 / 60, // 106°42.1'Đ
    dmsLat: '08°39′42″B',
    dmsLng: '106°42′06″Đ',
    province: 'Tỉnh Bà Rịa - Vũng Tàu'
  },
  {
    code: 'A6',
    name: 'Hòn Hải (Nhóm đảo Phú Quý, Bình Thuận)',
    lat: 9 + 58.0 / 60, // 09°58.0'B
    lng: 109 + 5.0 / 60, // 109°05.0'Đ
    dmsLat: '09°58′00″B',
    dmsLng: '109°05′00″Đ',
    province: 'Tỉnh Bình Thuận'
  },
  {
    code: 'A7',
    name: 'Hòn Đôi (Bán đảo Hòn Gốm, Khánh Hòa)',
    lat: 12 + 39.0 / 60, // 12°39.0'B
    lng: 109 + 28.0 / 60, // 109°28.0'Đ
    dmsLat: '12°39′00″B',
    dmsLng: '109°28′00″Đ',
    province: 'Tỉnh Khánh Hòa'
  },
  {
    code: 'A8',
    name: 'Mũi Đại Lãnh (Phú Yên)',
    lat: 12 + 53.8 / 60, // 12°53.8'B
    lng: 109 + 27.2 / 60, // 109°27.2'Đ
    dmsLat: '12°53′48″B',
    dmsLng: '109°27′12″Đ',
    province: 'Tỉnh Phú Yên'
  },
  {
    code: 'A9',
    name: 'Hòn Ông Căn (Phía Nam đảo Lý Sơn, Quảng Ngãi)',
    lat: 15 + 23.1 / 60, // 15°23.1'B
    lng: 109 + 9.0 / 60, // 109°09.0'Đ
    dmsLat: '15°23′06″B',
    dmsLng: '109°09′00″Đ',
    province: 'Tỉnh Quảng Ngãi'
  },
  {
    code: 'A10',
    name: 'Đảo Lý Sơn (Cù lao Ré, Quảng Ngãi)',
    lat: 15 + 23.1 / 60, // 15°23.1'B
    lng: 109 + 9.0 / 60, // 109°09.0'Đ
    dmsLat: '15°23′06″B',
    dmsLng: '109°09′00″Đ',
    province: 'Tỉnh Quảng Ngãi'
  },
  {
    code: 'A11',
    name: 'Đảo Cồn Cỏ (Quảng Trị)',
    lat: 17 + 10.0 / 60, // 17°10.0'B
    lng: 107 + 20.6 / 60, // 107°20.6'Đ
    dmsLat: '17°10′00″B',
    dmsLng: '107°20′36″Đ',
    province: 'Tỉnh Quảng Trị'
  }
]

/**
 * Lớp dữ liệu Môi trường Biển & Khu bảo tồn biển Việt Nam (Marine Protected Areas - MPAs)
 * Nguồn: Quyết định số 742/QĐ-TTg của Thủ tướng Chính phủ phê duyệt Quy hoạch hệ thống Khu bảo tồn biển Việt Nam
 */
export const MARINE_ENVIRONMENT_ZONES = [
  {
    id: 'mpa-bach-long-vi',
    name: 'Khu bảo tồn biển Bạch Long Vĩ',
    lat: 20.13,
    lng: 107.72,
    radiusKm: 42,
    ecosystemType: 'Rạn san hô, bãi giống – bãi đẻ thủy sản Vịnh Bắc Bộ',
    biodiversityNote:
      'Ghi nhận hơn 100 loài san hô, bào ngư chín lỗ và hệ sinh thái rong biển đặc trưng vùng biển phía Bắc.',
    source: 'Quyết định 742/QĐ-TTg về Quy hoạch hệ thống Khu bảo tồn biển Việt Nam'
  },
  {
    id: 'mpa-con-co',
    name: 'Khu bảo tồn biển Đảo Cồn Cỏ',
    lat: 17.16,
    lng: 107.34,
    radiusKm: 36,
    ecosystemType: 'Hệ sinh thái rạn san hô đá bazan & rừng nguyên sinh trên đảo',
    biodiversityNote:
      'Nơi bảo tồn các loài san hô đen, san hô sừng và sinh vật đáy vùng biển Bắc Trung Bộ.',
    source: 'Quyết định 742/QĐ-TTg & UBND tỉnh Quảng Trị'
  },
  {
    id: 'mpa-ly-son',
    name: 'Khu bảo tồn biển Lý Sơn',
    lat: 15.38,
    lng: 109.12,
    radiusKm: 40,
    ecosystemType: 'Thảm cỏ biển, rạn san hô & di sản địa chất núi lửa biển',
    biodiversityNote:
      'Bảo vệ hệ sinh thái thảm cỏ biển, rạn san hô và nguồn lợi thủy sản ven đảo Lý Sơn (Quảng Ngãi).',
    source: 'Quyết định 742/QĐ-TTg & UBND tỉnh Quảng Ngãi'
  },
  {
    id: 'mpa-nha-trang',
    name: 'Khu bảo tồn biển Vịnh Nha Trang (Hòn Mun)',
    lat: 12.16,
    lng: 109.3,
    radiusKm: 44,
    ecosystemType: 'Khu bảo tồn biển đầu tiên của Việt Nam • Đa dạng san hô bậc nhất',
    biodiversityNote:
      'Nơi ghi nhận khoảng 350 loài san hô cứng và hàng trăm loài cá rạn san hô nhiệt đới.',
    source: 'Viện Hải dương học Nha Trang & Quyết định 742/QĐ-TTg'
  },
  {
    id: 'mpa-nam-yet',
    name: 'Khu bảo tồn biển Nam Yết (Quần đảo Trường Sa)',
    lat: 10.18,
    lng: 114.37,
    radiusKm: 65,
    ecosystemType: 'Hệ sinh thái rạn san hô vòng (Atoll) đại dương giữa Biển Đông',
    biodiversityNote:
      'Trung tâm phát tán ấu trùng sinh vật biển quan trọng trên Biển Đông với rùa biển, trai tai tượng khổng lồ và hơn 300 loài san hô.',
    source: 'Quyết định 742/QĐ-TTg của Thủ tướng Chính phủ'
  },
  {
    id: 'mpa-con-dao',
    name: 'Vườn Quốc gia & Khu bảo tồn biển Côn Đảo',
    lat: 8.68,
    lng: 106.6,
    radiusKm: 52,
    ecosystemType: 'Khu Ramsar biển đầu tiên của Việt Nam • Bãi đẻ Rùa biển & Bò biển (Dugong)',
    biodiversityNote:
      'Nơi bảo tồn quần thể rùa xanh (Chelonia mydas) lớn nhất Việt Nam, thảm cỏ biển và rừng ngập mặn nguyên sinh.',
    source: 'Công ước Ramsar & Quyết định 742/QĐ-TTg'
  }
]

/**
 * Chuẩn hóa dữ liệu địa lý theo định dạng GeoJSON (RFC 7946 FeatureCollection)
 */
export function buildEastSeaGeoJson(markers) {
  const pointFeatures = (markers || []).map((m) => ({
    type: 'Feature',
    id: m.id,
    geometry: {
      type: 'Point',
      coordinates: [m.lng, m.lat] // GeoJSON standard: [longitude, latitude]
    },
    properties: {
      ...m,
      dmsCoordinate: `${formatDMS(m.lat, true)} — ${formatDMS(m.lng, false)}`,
      legalStatusNote:
        m.category === 'archipelago' ||
        m.category === 'hoang-sa-point' ||
        m.category === 'truong-sa-point'
          ? 'Chủ quyền lãnh thổ quốc gia Việt Nam (Sovereignty)'
          : m.id === 'nha-gian-dk1'
          ? 'Quyền chủ quyền và quyền tài phán trên Thềm lục địa Việt Nam (UNCLOS 1982)'
          : 'Lãnh thổ đất liền, nội thủy và lãnh hải thuộc chủ quyền Việt Nam'
    }
  }))

  const baselineFeature = {
    type: 'Feature',
    id: 'vietnam-straight-baseline-1982',
    geometry: {
      type: 'LineString',
      coordinates: OFFICIAL_BASELINE_POINTS_1982.map((pt) => [pt.lng, pt.lat])
    },
    properties: {
      name: 'Hệ thống Đường cơ sở thẳng ven bờ lục địa Việt Nam (A1 – A11)',
      source: 'Tuyên bố ngày 12/11/1982 của Chính phủ nước CHXHCN Việt Nam',
      pointCount: OFFICIAL_BASELINE_POINTS_1982.length
    }
  }

  return {
    type: 'FeatureCollection',
    metadata: {
      title: 'Cơ sở dữ liệu Địa lý Biển Đảo Việt Nam (GeoJSON WGS84)',
      crs: 'urn:ogc:def:crs:OGC:1.3:CRS84',
      updatedAt: '2026',
      disclaimer:
        'Tọa độ điểm chuẩn dựa trên văn bản pháp quy và học liệu chính thống; không tự suy diễn đường biên giới trên biển.'
    },
    features: [...pointFeatures, baselineFeature]
  }
}

/**
 * Bảng phân biệt chuẩn xác Chủ quyền lãnh thổ vs. Quyền chủ quyền & Quyền tài phán
 * Theo UNCLOS 1982 và Luật Biển Việt Nam năm 2012 (Mục VII yêu cầu độ chính xác)
 */
export const MARITIME_LEGAL_REGIMES = [
  {
    zone: 'Đất liền, các Đảo, Quần đảo Hoàng Sa & Trường Sa, Nội thủy, Lãnh hải (12 hải lý)',
    legalNature: 'CHỦ QUYỀN QUỐC GIA (Sovereignty)',
    explanation:
      'Nhà nước Việt Nam thực hiện chủ quyền hoàn toàn, đầy đủ và tuyệt đối (riêng tại Lãnh hải có quyền đi qua không gây hại của tàu thuyền nước ngoài theo UNCLOS 1982). Hai quần đảo Hoàng Sa và Trường Sa thuộc chủ quyền lãnh thổ thiêng liêng của Việt Nam.',
    badgeColor: 'gold'
  },
  {
    zone: 'Vùng tiếp giáp lãnh hải (12 hải lý tiếp liền phía ngoài Lãnh hải)',
    legalNature: 'QUYỀN CHỦ QUYỀN & QUYỀN KIỂM SOÁT (Contiguous Zone Control)',
    explanation:
      'Nhà nước thực hiện quyền chủ quyền, quyền tài phán và quyền kiểm soát nhằm ngăn ngừa, trừng trị các hành vi vi phạm pháp luật về hải quan, thuế khóa, y tế và xuất nhập cảnh.',
    badgeColor: 'cyan'
  },
  {
    zone: 'Vùng đặc quyền kinh tế (200 hải lý tính từ Đường cơ sở) & Thềm lục địa',
    legalNature: 'QUYỀN CHỦ QUYỀN & QUYỀN TÀI PHÁN (Sovereign Rights & Jurisdiction)',
    explanation:
      'Nhà nước có quyền chủ quyền về thăm dò, khai thác, bảo tồn và quản lý tài nguyên thiên nhiên (sinh vật và không sinh vật); có quyền tài phán quốc gia về lắp đặt đảo nhân tạo, thiết bị công trình (như Nhà giàn DK1), nghiên cứu khoa học biển và bảo vệ môi trường biển.',
    badgeColor: 'ocean'
  }
]

/**
 * KHU VỰC LƯU TRỮ HỒ SƠ BẢN ĐỒ (Mục V — Đầy đủ 10 trường thông tin chuẩn mực cho từng hồ sơ)
 */
export const MAP_DOSSIER_RECORDS = [
  {
    id: 'hsbd-gis-01',
    mapTitle: 'Bản đồ Địa lý Tự nhiên & Hệ thống Đảo, Quần đảo Biển Đông Việt Nam',
    internalCode: 'HS-GIS-GEO-2026-01',
    geographicArea: 'Khu vực Biển Đông (06°00′B – 23°30′B | 102°00′Đ – 119°30′Đ)',
    mapType: 'Bản đồ địa lý tự nhiên & hành chính giáo dục',
    dataSource:
      'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018), Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam',
    issuingAgency: 'Nhà xuất bản Giáo dục Việt Nam & Bộ Tài nguyên và Môi trường (Tham chiếu)',
    publicationDate: 'Cập nhật học liệu năm 2024 – 2026',
    legendDescription:
      'Ký hiệu ★ Vàng: 2 quần đảo tiền tiêu (Hoàng Sa, Trường Sa); ● Xanh lam: Các điểm đảo thuộc Hoàng Sa – Trường Sa; ◆ Cam: Cụm Nhà giàn DK1; ▲ Xanh lục: Đảo ven bờ & đô thị biển; Đường nét đứt: Lưới tọa độ WGS84.',
    usagePurpose:
      'Phục vụ học tập, giảng dạy môn Địa lý, Lịch sử và Giáo dục Quốc phòng – An ninh cấp THPT; giúp học sinh định vị trực quan vị trí các đảo, quần đảo.',
    notesAndLimitations:
      'Bản đồ thể hiện vị trí địa lý khái quát phục vụ giáo dục phổ thông; không thay thế hải đồ hàng hải chuyên dụng và không tự vẽ đường ranh giới phân định biển chưa được công bố chính thức.'
  },
  {
    id: 'hsbd-legal-02',
    mapTitle: 'Sơ đồ Hệ thống Điểm chuẩn Đường cơ sở thẳng ven bờ lục địa Việt Nam (A1 – A11)',
    internalCode: 'HS-GIS-LAW-1982-02',
    geographicArea: 'Vùng biển ven bờ lục địa Việt Nam từ Vịnh Thái Lan (A1) đến Đảo Cồn Cỏ (A11)',
    mapType: 'Bản đồ có nội dung pháp lý biển',
    dataSource:
      'Tuyên bố ngày 12/11/1982 của Chính phủ nước CHXHCN Việt Nam về đường cơ sở dùng để tính chiều rộng lãnh hải; Luật Biển Việt Nam số 18/2012/QH13',
    issuingAgency: 'Chính phủ nước Cộng hòa Xã hội Chủ nghĩa Việt Nam (Công bố tại Liên Hợp Quốc)',
    publicationDate: 'Ban hành ngày 12/11/1982 • Luật Biển thông qua ngày 21/6/2012',
    legendDescription:
      'Ký hiệu hình lục giác tím/vàng (A1 đến A11): 11 điểm chuẩn tọa độ pháp lý quốc gia; Đoạn thẳng nối tiếp: Hệ thống 10 đoạn thẳng đường cơ sở ven bờ lục địa.',
    usagePurpose:
      'Minh họa cơ sở pháp lý xác định Nội thủy, Lãnh hải 12 hải lý, Vùng tiếp giáp lãnh hải 24 hải lý, Vùng đặc quyền kinh tế 200 hải lý và Thềm lục địa Việt Nam trong môn Giáo dục Kinh tế & Pháp luật THPT.',
    notesAndLimitations:
      'Chỉ hiển thị chính xác 11 điểm chuẩn từ A1 đến A11 theo đúng phụ lục Tuyên bố ngày 12/11/1982; không tự suy diễn các điểm đường cơ sở chưa được Chính phủ công bố.'
  },
  {
    id: 'hsbd-hist-03',
    mapTitle: 'Đại Nam nhất thống toàn đồ — Bản đồ Lịch sử Chủ quyền Hoàng Sa & Vạn Lý Trường Sa',
    internalCode: 'HS-GIS-HIS-1838-03',
    geographicArea: 'Toàn bộ lãnh thổ đất liền và vùng biển đảo Đại Nam (Việt Nam thế kỷ XIX)',
    mapType: 'Bản đồ lịch sử (Tư liệu gốc triều Nguyễn)',
    dataSource:
      'Tư liệu lưu trữ tại Bảo tàng Lịch sử Quốc gia Việt Nam & Ủy ban Biên giới Quốc gia (Bộ Ngoại giao)',
    issuingAgency: 'Triều đình nhà Nguyễn (Thời vua Minh Mạng)',
    publicationDate: 'Khoảng năm 1838 (Thế kỷ XIX)',
    legendDescription:
      'Thể hiện dải đảo ngoài khơi miền Trung và phía Nam với hai danh xưng chính thức "Hoàng Sa" và "Vạn Lý Trường Sa" nằm trong cương vực lãnh thổ Đại Nam.',
    usagePurpose:
      'Làm tư liệu gốc chứng minh Nhà nước quân chủ Việt Nam đã xác lập và quản lý liên tục cả hai quần đảo Hoàng Sa và Trường Sa từ nhiều thế kỷ trước.',
    notesAndLimitations:
      'Là bản đồ cổ vẽ theo phương pháp truyền thống phương Đông thế kỷ XIX (không theo phép chiếu trắc địa kinh vĩ độ hiện đại), có giá trị chứng cứ lịch sử – pháp lý về chủ quyền quốc gia.'
  },
  {
    id: 'hsbd-hist-04',
    mapTitle: 'An Nam đại quốc họa đồ (Tabula Geographica Imperii Anamitici — 1838)',
    internalCode: 'HS-GIS-HIS-1838-04',
    geographicArea: 'Lãnh thổ An Nam (Việt Nam) và khu vực Biển Đông (Vĩ độ 08°B – 23°B)',
    mapType: 'Bản đồ lịch sử phương Tây (Có lưới kinh vĩ độ)',
    dataSource:
      'Phụ bản từ điển Latinh – An Nam của Giám mục Jean-Louis Taberd; Tập san Hội Châu Á Hoàng gia tại Bengal',
    issuingAgency: 'Xuất bản tại Calcutta (Ấn Độ) bởi Giám mục Jean-Louis Taberd',
    publicationDate: 'Năm 1838',
    legendDescription:
      'Tại khu vực vĩ độ 16°–17° Bắc, kinh độ 111°–112° Đông vẽ cụm đảo kèm chú thích song ngữ Latinh – Quốc ngữ: "Paracel seu Cát Vàng" (Paracel tức là Cát Vàng).',
    usagePurpose:
      'Chứng minh giới bản đồ học và hàng hải phương Tây thế kỷ XIX công nhận địa danh "Paracel" chính là "Cát Vàng" (Hoàng Sa) thuộc chủ quyền của Việt Nam.',
    notesAndLimitations:
      'Kinh độ trên bản đồ gốc năm 1838 được tính theo kinh tuyến gốc Paris (cách kinh tuyến Greenwich khoảng 2°20′ Đông) và cả kinh tuyến Greenwich.'
  },
  {
    id: 'hsbd-env-05',
    mapTitle: 'Bản đồ Chuyên đề Hệ thống Khu Bảo tồn Biển & Đa dạng Sinh học Biển Việt Nam',
    internalCode: 'HS-GIS-ENV-2026-05',
    geographicArea: 'Hệ thống 16 Khu bảo tồn biển từ Bạch Long Vĩ đến Phú Quốc và Nam Yết (Trường Sa)',
    mapType: 'Bản đồ chuyên đề Địa lý – Môi trường biển',
    dataSource:
      'Quyết định số 742/QĐ-TTg của Thủ tướng Chính phủ phê duyệt Quy hoạch hệ thống Khu bảo tồn biển Việt Nam; Viện Hải dương học',
    issuingAgency: 'Chính phủ & Bộ Nông nghiệp và Phát triển nông thôn / Bộ Tài nguyên và Môi trường',
    publicationDate: 'Quy hoạch giai đoạn 2010 – 2020, định hướng 2030',
    legendDescription:
      'Vòng tròn sinh thái xanh ngọc: Phạm vi khu bảo tồn biển quốc gia (rạn san hô, thảm cỏ biển, bãi đẻ rùa biển và nguồn lợi thủy sản).',
    usagePurpose:
      'Phục vụ chuyên đề "Bảo vệ tài nguyên và môi trường biển đảo" trong chương trình Địa lý và Sinh học cấp THPT.',
    notesAndLimitations:
      'Bán kính hiển thị trên bản đồ GIS mang tính biểu trưng vị trí trung tâm khu bảo tồn biển để dễ quan sát ở tỷ lệ toàn Biển Đông.'
  }
]
