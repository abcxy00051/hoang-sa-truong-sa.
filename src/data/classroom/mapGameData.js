/**
 * DỮ LIỆU TRÒ CHƠI TƯƠNG TÁC: NHẬN DIỆN ĐỊA DANH TRÊN BẢN ĐỒ BIỂN ĐÔNG
 * Sử dụng hệ tọa độ địa lý (lat, lng) đồng bộ với Bản đồ số Hoàng Sa - Trường Sa.
 */

export const MAP_GAME_LOCATIONS = [
  {
    id: 'loc-hoang-sa',
    code: 'M01',
    name: 'Quần đảo Hoàng Sa (TP. Đà Nẵng)',
    shortLabel: 'QĐ. Hoàng Sa',
    lat: 16.5,
    lng: 112.0,
    region: 'Quần đảo xa bờ',
    difficulty: 'easy',
    clueQuestion:
      'Hãy nhấp chọn vị trí của QUẦN ĐẢO HOÀNG SA – quần đảo nằm ở khu vực phía Bắc Biển Đông (giữa khoảng vĩ độ 15°45’B – 17°15’B), trực thuộc thành phố Đà Nẵng và gồm hai nhóm đảo An Vĩnh, Lưỡi Liềm.',
    explanation:
      'Quần đảo Hoàng Sa nằm ngang vùng biển miền Trung Việt Nam, cách đảo Lý Sơn (Quảng Ngãi) khoảng 120 hải lý, trực thuộc thành phố Đà Nẵng.',
    source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & SGK Địa lý 12'
  },
  {
    id: 'loc-truong-sa',
    code: 'M02',
    name: 'Quần đảo Trường Sa (Tỉnh Khánh Hòa)',
    shortLabel: 'QĐ. Trường Sa',
    lat: 9.8,
    lng: 114.2,
    region: 'Quần đảo xa bờ',
    difficulty: 'easy',
    clueQuestion:
      'Hãy nhấp chọn vị trí trung tâm của QUẦN ĐẢO TRƯỜNG SA – quần đảo nằm ở vùng biển phía Đông Nam nước ta, trực thuộc tỉnh Khánh Hòa (gồm thị trấn Trường Sa, xã Song Tử Tây và xã Sinh Tồn).',
    explanation:
      'Quần đảo Trường Sa trực thuộc tỉnh Khánh Hòa, được chia thành 8 cụm đảo, đá, bãi cạn san hô án ngữ tuyến hàng hải quốc tế qua phía Nam Biển Đông.',
    source: 'Nghị định 65/2007/NĐ-CP & SGK Địa lý 12'
  },
  {
    id: 'loc-phu-quoc',
    code: 'M03',
    name: 'Thành phố đảo Phú Quốc (Tỉnh Kiên Giang)',
    shortLabel: 'Đảo Phú Quốc',
    lat: 10.22,
    lng: 103.96,
    region: 'Đảo ven bờ Tây Nam',
    difficulty: 'easy',
    clueQuestion:
      'Hãy nhấp chọn vị trí của ĐẢO PHÚ QUỐC – hòn đảo có diện tích tự nhiên lớn nhất Việt Nam (~574 km²) nằm trong vùng biển Vịnh Thái Lan, thuộc tỉnh Kiên Giang.',
    explanation:
      'Phú Quốc (tỉnh Kiên Giang) nằm ở vùng biển Tây Nam trong Vịnh Thái Lan, là đảo lớn nhất Việt Nam và là thành phố đảo đầu tiên của cả nước (từ năm 2021).',
    source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
  },
  {
    id: 'loc-bach-long-vi',
    code: 'M04',
    name: 'Đảo Bạch Long Vĩ (TP. Hải Phòng)',
    shortLabel: 'Bạch Long Vĩ',
    lat: 20.13,
    lng: 107.72,
    region: 'Đảo tiền tiêu Vịnh Bắc Bộ',
    difficulty: 'medium',
    clueQuestion:
      'Hãy nhấp chọn vị trí của ĐẢO BẠCH LONG VĨ – đảo tiền tiêu nằm xa bờ nhất của Việt Nam trong Vịnh Bắc Bộ, trực thuộc thành phố Hải Phòng.',
    explanation:
      'Huyện đảo Bạch Long Vĩ (TP. Hải Phòng) nằm ở vị trí trung tâm Vịnh Bắc Bộ, giữ vai trò quan trọng trong phân định Vịnh Bắc Bộ và phát triển kinh tế thủy sản.',
    source: 'Cổng Thông tin điện tử TP. Hải Phòng'
  },
  {
    id: 'loc-ly-son',
    code: 'M05',
    name: 'Đảo Lý Sơn (Tỉnh Quảng Ngãi)',
    shortLabel: 'Đảo Lý Sơn',
    lat: 15.38,
    lng: 109.11,
    region: 'Đảo ven bờ miền Trung',
    difficulty: 'easy',
    clueQuestion:
      'Hãy nhấp chọn vị trí của ĐẢO LÝ SƠN (Cù lao Ré) thuộc tỉnh Quảng Ngãi – quê hương của đội dân binh Hoàng Sa năm xưa và nơi lưu giữ Lễ khao lề thế lính Hoàng Sa.',
    explanation:
      'Huyện đảo Lý Sơn (tỉnh Quảng Ngãi) nằm cách đất liền khoảng 15 hải lý và cách quần đảo Hoàng Sa khoảng 120 hải lý, là nơi tuyển chọn các dân binh đội Hoàng Sa từ thế kỷ XVII.',
    source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
  },
  {
    id: 'loc-con-co',
    code: 'M06',
    name: 'Đảo Cồn Cỏ (Tỉnh Quảng Trị)',
    shortLabel: 'Đảo Cồn Cỏ',
    lat: 17.16,
    lng: 107.34,
    region: 'Đảo tiền tiêu Bắc Trung Bộ',
    difficulty: 'medium',
    clueQuestion:
      'Hãy nhấp chọn vị trí của ĐẢO CỒN CỎ (tỉnh Quảng Trị) – hòn đảo nằm ở cửa ngõ phía Nam Vịnh Bắc Bộ và là điểm chuẩn A11 của hệ thống đường cơ sở thẳng ven bờ lục địa Việt Nam.',
    explanation:
      'Đảo Cồn Cỏ thuộc tỉnh Quảng Trị, là điểm chuẩn A11 trong Tuyên bố ngày 12/11/1982 của Chính phủ về đường cơ sở dùng để tính chiều rộng lãnh hải Việt Nam.',
    source: 'Tuyên bố ngày 12/11/1982 của Chính phủ nước CHXHCN Việt Nam'
  },
  {
    id: 'loc-con-dao',
    code: 'M07',
    name: 'Quần đảo Côn Đảo (Tỉnh Bà Rịa – Vũng Tàu)',
    shortLabel: 'Côn Đảo',
    lat: 8.68,
    lng: 106.6,
    region: 'Đảo vùng biển Đông Nam Bộ',
    difficulty: 'easy',
    clueQuestion:
      'Hãy nhấp chọn vị trí của QUẦN ĐẢO CÔN ĐẢO (tỉnh Bà Rịa – Vũng Tàu) nằm ở vùng biển phía Đông Nam đất nước, nơi có điểm chuẩn A3, A4, A5 của đường cơ sở và Vườn quốc gia bảo tồn rùa biển nổi tiếng.',
    explanation:
      'Huyện Côn Đảo (tỉnh Bà Rịa – Vũng Tàu) gồm 16 hòn đảo lớn nhỏ (lớn nhất là đảo Côn Sơn), vừa là di tích lịch sử quốc gia đặc biệt vừa là khu bảo tồn biển quan trọng.',
    source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
  },
  {
    id: 'loc-phu-quy',
    code: 'M08',
    name: 'Đảo Phú Quý (Tỉnh Bình Thuận)',
    shortLabel: 'Đảo Phú Quý',
    lat: 10.52,
    lng: 108.93,
    region: 'Đảo vùng biển Nam Trung Bộ',
    difficulty: 'medium',
    clueQuestion:
      'Hãy nhấp chọn vị trí của ĐẢO PHÚ QUÝ (Cù lao Thu) thuộc tỉnh Bình Thuận – hậu cứ quan trọng hướng ra quần đảo Trường Sa trên vùng biển Nam Trung Bộ.',
    explanation:
      'Huyện đảo Phú Quý cách thành phố Phan Thiết (tỉnh Bình Thuận) khoảng 56 hải lý về phía Đông Nam, là trung tâm dịch vụ hậu cần nghề cá và hậu cứ hướng ra Trường Sa.',
    source: 'Cổng Thông tin điện tử tỉnh Bình Thuận'
  },
  {
    id: 'loc-song-tu-tay',
    code: 'M09',
    name: 'Xã đảo Song Tử Tây (Huyện Trường Sa)',
    shortLabel: 'Đảo Song Tử Tây',
    lat: 11.43,
    lng: 114.33,
    region: 'Phía Bắc QĐ. Trường Sa',
    difficulty: 'hard',
    clueQuestion:
      'Hãy nhấp chọn vị trí của XÃ ĐẢO SONG TỬ TÂY – đơn vị hành chính cấp xã nằm ở cụm đảo cực Bắc của quần đảo Trường Sa (vĩ độ ~11°25’B), nơi có trạm khí tượng hải văn và ngọn hải đăng cấp quốc tế.',
    explanation:
      'Xã đảo Song Tử Tây nằm ở cụm Song Tử thuộc phía Bắc quần đảo Trường Sa (tỉnh Khánh Hòa), là một trong những đảo cao nhất của quần đảo Trường Sa.',
    source: 'Nghị định 65/2007/NĐ-CP & Bộ Tư lệnh Hải quân'
  },
  {
    id: 'loc-truong-sa-lon',
    code: 'M10',
    name: 'Đảo Trường Sa – Thị trấn Trường Sa',
    shortLabel: 'TT. Trường Sa',
    lat: 8.64,
    lng: 111.92,
    region: 'Trung tâm hành chính Huyện Trường Sa',
    difficulty: 'hard',
    clueQuestion:
      'Hãy nhấp chọn vị trí của ĐẢO TRƯỜNG SA (Trường Sa Lớn) – trung tâm hành chính của Thị trấn Trường Sa, huyện Trường Sa (tỉnh Khánh Hòa) nằm ở tọa độ khoảng 8°38’B, 111°55’Đ.',
    explanation:
      'Đảo Trường Sa (thường gọi là Trường Sa Lớn) là trung tâm hành chính của thị trấn Trường Sa (huyện Trường Sa, tỉnh Khánh Hòa), nơi có đường băng, âu tàu, trường học và bệnh xá.',
    source: 'Cổng Thông tin điện tử tỉnh Khánh Hòa'
  },
  {
    id: 'loc-dk1-tu-chinh',
    code: 'M11',
    name: 'Cụm Nhà giàn DK1 (Thềm lục địa phía Nam)',
    shortLabel: 'Nhà giàn DK1',
    lat: 7.9,
    lng: 109.85,
    region: 'Thềm lục địa phía Nam',
    difficulty: 'hard',
    clueQuestion:
      'Hãy nhấp chọn vị trí của CỤM NHÀ GIÀN DK1 – các trạm dịch vụ kinh tế – khoa học – kỹ thuật được xây dựng từ năm 1989 trên vùng thềm lục địa phía Nam của Tổ quốc (khu vực Tư Chính – Phúc Nguyên – Ba Kè).',
    explanation:
      'Hệ thống Nhà giàn DK1 sừng sững trên vùng thềm lục địa phía Nam Việt Nam là cột mốc khẳng định quyền chủ quyền và quyền tài phán hợp pháp của Việt Nam theo UNCLOS 1982.',
    source: 'Bộ Tư lệnh Vùng 2 Hải quân'
  },
  {
    id: 'loc-phu-lam',
    code: 'M12',
    name: 'Đảo Phú Lâm (Nhóm An Vĩnh – QĐ. Hoàng Sa)',
    shortLabel: 'Đảo Phú Lâm',
    lat: 16.83,
    lng: 112.33,
    region: 'Phía Đông QĐ. Hoàng Sa',
    difficulty: 'hard',
    clueQuestion:
      'Hãy nhấp chọn vị trí của ĐẢO PHÚ LÂM – hòn đảo có diện tích tự nhiên lớn nhất trong quần đảo Hoàng Sa, nằm ở nhóm An Vĩnh (phía Đông Bắc quần đảo Hoàng Sa).',
    explanation:
      'Đảo Phú Lâm thuộc nhóm An Vĩnh là đảo lớn nhất của quần đảo Hoàng Sa (huyện Hoàng Sa, TP. Đà Nẵng). Năm 1938, bia chủ quyền và trạm khí tượng cũng được thiết lập tại đây.',
    source: 'UBND huyện Hoàng Sa – TP. Đà Nẵng'
  }
]
