/**
 * KHÔNG GIAN TRƯNG BÀY 02: HOÀNG SA – TRƯỜNG SA QUA HÌNH ẢNH
 * Giới thiệu địa lý, cảnh quan, hệ thống cột mốc, hải đăng và đời sống trên hai quần đảo.
 */

export const EXHIBITION_HALL_2 = {
  id: 'hall-2',
  code: 'Phòng triển lãm 02',
  title: 'Bản đồ và tư liệu',
  subtitle:
    'Bản đồ cổ Việt Nam – phương Tây, hồ sơ pháp lý UNCLOS 1982 và bản đồ địa lý – hành chính quần đảo Hoàng Sa, Trường Sa',
  shortDesc:
    'Trưng bày hệ thống bản đồ cổ, tài liệu lưu trữ hành chính – pháp lý và sơ đồ địa lý tự nhiên của quần đảo Hoàng Sa (TP. Đà Nẵng) và quần đảo Trường Sa (tỉnh Khánh Hòa) cùng hệ thống cột mốc, hải đăng.',
  heroImage: '/assets/exhibition/hall-ban-do-tu-lieu.svg',
  curatorNote:
    'Không gian sử dụng đồ họa minh họa giáo dục độ phân giải cao kết hợp thông tin địa lý – hành chính chuẩn xác từ Ủy ban Biên giới Quốc gia, UBND huyện Hoàng Sa (Đà Nẵng) và UBND huyện Trường Sa (Khánh Hòa).',
  items: [
    {
      id: 'exh-201',
      code: 'HS-HA-01',
      hallId: 'hall-2',
      collectionId: 'col-cot-moc-hai-dang',
      isFeatured: true,
      title:
        'Không gian Địa lý Quần đảo Hoàng Sa (Huyện Hoàng Sa, TP. Đà Nẵng): Nhóm An Vĩnh và Nhóm Lưỡi Liềm',
      period: 'Hồ sơ Địa lý – Hành chính Đương đại',
      authorOrProvider:
        'Dữ liệu tổng hợp từ UBND huyện Hoàng Sa & Nhà Trưng bày Hoàng Sa (TP. Đà Nẵng)',
      mediaType: 'Đồ họa Bản đồ & Cảnh quan Giáo dục THPT',
      isHistoricalDocumentRecord: false,
      image: '/assets/ecosystem/ban-do-so.svg',
      caption:
        'Đồ họa minh họa vị trí địa lý quần đảo Hoàng Sa (15°45’B – 17°15’B, 111°00’Đ – 113°00’Đ) cách đảo Lý Sơn khoảng 120 hải lý.',
      summary:
        'Toàn cảnh cấu trúc địa lý tự nhiên của hơn 30 đảo, đá, cồn san hô và bãi cạn thuộc quần đảo Hoàng Sa được phân chia thành nhóm An Vĩnh (phía Đông) và nhóm Lưỡi Liềm (phía Tây).',
      detailedDescription: [
        'Quần đảo Hoàng Sa nằm ngang vùng biển miền Trung Việt Nam, án ngữ cửa ngõ phía Nam Vịnh Bắc Bộ và tuyến hàng hải quốc tế huyết mạch qua Biển Đông. Nhóm An Vĩnh ở phía Đông gồm các đảo lớn như đảo Phú Lâm (đảo có diện tích tự nhiên lớn nhất quần đảo Hoàng Sa), đảo Linh Côn, đảo Cây, cồn Bắc, cồn Giữa, cồn Nam...',
        'Nhóm Lưỡi Liềm (Nguyệt Thiềm) ở phía Tây có hình vòng cung ôm lấy một đầm nước sâu ở giữa, bao gồm đảo Hoàng Sa (Pattle), đảo Quang Ảnh, đảo Hữu Nhật, đảo Duy Mộng, đảo Quang Hòa, đảo Bạch Quy và đảo Tri Tôn ở cực Nam.'
      ],
      educationalValue:
        'Giúp học sinh THPT nắm vững vị trí chiến lược, phân bố hai nhóm đảo của quần đảo Hoàng Sa và đơn vị hành chính huyện Hoàng Sa trực thuộc thành phố Đà Nẵng.',
      sourceName:
        'Nhà Trưng bày Hoàng Sa – UBND huyện Hoàng Sa (Thành phố Đà Nẵng)',
      sourceUrl: 'https://hoangsa.danang.gov.vn/'
    },
    {
      id: 'exh-202',
      code: 'HS-HA-02',
      hallId: 'hall-2',
      collectionId: 'col-cot-moc-hai-dang',
      isFeatured: true,
      title:
        'Cột mốc Chủ quyền và Diện mạo Thị trấn Trường Sa (Huyện Trường Sa, Tỉnh Khánh Hòa)',
      period: 'Hồ sơ Địa lý – Hành chính Đương đại',
      authorOrProvider:
        'Thông tin chuẩn từ Cổng Thông tin điện tử tỉnh Khánh Hòa & Bộ Tư lệnh Hải quân',
      mediaType: 'Đồ họa Minh họa Cảnh quan Giáo dục THPT',
      isHistoricalDocumentRecord: false,
      image: '/assets/exhibition/hall-hoang-sa-truong-sa.svg',
      caption:
        'Đồ họa minh họa cột mốc chủ quyền, ngọn hải đăng và không gian xanh trên các đảo thuộc huyện đảo Trường Sa (tỉnh Khánh Hòa).',
      summary:
        'Giới thiệu diện mạo của thị trấn Trường Sa cùng hai xã đảo Song Tử Tây và Sinh Tồn với hệ thống cột mốc chủ quyền, trường học, bệnh xá, âu tàu và chùa trên đảo.',
      detailedDescription: [
        'Huyện đảo Trường Sa trực thuộc tỉnh Khánh Hòa, được tổ chức thành 3 đơn vị hành chính cấp xã theo Nghị định số 65/2007/NĐ-CP gồm: Thị trấn Trường Sa, xã Song Tử Tây và xã Sinh Tồn.',
        'Trên các đảo nổi như Trường Sa Lớn, Song Tử Tây, Sinh Tồn, Nam Yết, Sơn Ca, Phan Vinh..., những cột mốc chủ quyền uy nghiêm khắc tọa độ địa lý cùng hệ thống điện mặt trời, điện gió, trạm y tế, trường tiểu học và những hàng cây bàng vuông, phong ba xanh mát đã tạo nên sức sống vững chãi nơi đầu sóng ngọn gió.'
      ],
      educationalValue:
        'Khắc họa rõ nét đời sống hành chính – dân sự hiện đại và diện mạo tươi đẹp của huyện đảo Trường Sa trong lòng học sinh THPT.',
      sourceName:
        'Cổng Thông tin điện tử tỉnh Khánh Hòa & Nghị định 65/2007/NĐ-CP',
      sourceUrl: 'https://khanhhoa.gov.vn/'
    },
    {
      id: 'exh-203',
      code: 'HS-HA-03',
      hallId: 'hall-2',
      collectionId: 'col-cot-moc-hai-dang',
      isFeatured: false,
      title:
        'Hệ thống Hải đăng và Trạm Khí tượng Hải văn trên Quần đảo Trường Sa',
      period: 'Thế kỷ XX – Thế kỷ XXI',
      authorOrProvider:
        'Tổng công ty Bảo đảm An toàn Hàng hải Việt Nam & Trung tâm Dự báo Khí tượng Thủy văn Quốc gia',
      mediaType: 'Đồ họa Minh họa Kỹ thuật Hàng hải THPT',
      isHistoricalDocumentRecord: false,
      image: '/assets/library/topic-dia-ly.svg',
      caption:
        'Đồ họa minh họa hệ thống hải đăng quốc tế (Song Tử Tây, Đá Tây, Đá Lát, An Bang, Tiên Nữ...) dẫn đường cho tàu thuyền qua Biển Đông.',
      summary:
        'Những "mắt thần" rực sáng giữa đại dương đêm ngày hỗ trợ an toàn hàng hải quốc tế và cung cấp số liệu quan trắc thời tiết, cảnh báo bão từ sớm cho đất liền.',
      detailedDescription: [
        'Hệ thống các ngọn hải đăng trên quần đảo Trường Sa (như hải đăng Song Tử Tây xây dựng năm 1993 cao 36m, hải đăng Đá Lát, Đá Tây, An Bang, Sơn Ca, Nam Yết, Sinh Tồn, Trường Sa, Tiên Nữ) đều có tên trong danh bạ hải đăng quốc tế.',
        'Cùng với hệ thống hải đăng, các trạm khí tượng hải văn và radar thời tiết tại Trường Sa thực hiện quan trắc ngày đêm để phát báo quốc tế (WMO) và cảnh báo sớm các cơn bão hình thành trên Biển Đông.'
      ],
      educationalValue:
        'Chứng minh đóng góp tích cực, có trách nhiệm của Việt Nam đối với an toàn hàng hải quốc tế và nghiên cứu khí tượng biển tại khu vực Biển Đông.',
      sourceName:
        'Bộ Giao thông vận tải & Tổng công ty Bảo đảm An toàn Hàng hải Việt Nam',
      sourceUrl: 'https://vms-south.vn/'
    },
    {
      id: 'exh-204',
      code: 'HS-HA-04',
      hallId: 'hall-2',
      collectionId: 'col-sinh-thai-bien',
      isFeatured: false,
      title:
        'Biểu tượng Thực vật Nơi Đảo Xa: Cây Bàng Vuông, Cây Phong Ba và Cây Bão Táp',
      period: 'Hệ thực vật đặc hữu vùng biển đảo Việt Nam',
      authorOrProvider:
        'Tư liệu Sinh học – Địa lý THPT & Bảo tàng Hải quân Việt Nam',
      mediaType: 'Đồ họa Minh họa Sinh thái – Cảnh quan THPT',
      isHistoricalDocumentRecord: false,
      image: '/assets/library/topic-cau-chuyen.svg',
      caption:
        'Đồ họa minh họa sức sống kiên cường của cây bàng vuông, cây phong ba và cây bão táp trên nền cát san hô mặn tại Trường Sa.',
      summary:
        'Những loài cây thân gỗ đặc trưng có khả năng chịu mặn, chịu hạn và đứng vững trước sức gió bão cấp 12–15, che chở cho các đảo nhỏ giữa đại dương.',
      detailedDescription: [
        'Trên nền cát san hô nghèo dinh dưỡng và thường xuyên hứng chịu hơi nước biển mặn chát cùng gió bão nhiệt đới, cây bàng vuông (Barringtonia asiatica), cây phong ba (Heliotropium foertherianum) và cây bão táp (Scaevola taccada) vẫn đâm chồi, tỏa bóng mát quanh năm.',
        'Hoa bàng vuông nở về đêm với những chùm nhị trắng hồng viền tím và quả vuông vức 4 cạnh đã trở thành biểu tượng thiêng liêng gắn liền với ý chí kiên cường của quân và dân Trường Sa.'
      ],
      educationalValue:
        'Tích hợp kiến thức Sinh học – Địa lý tự nhiên với giá trị văn hóa tinh thần của biển đảo Việt Nam.',
      sourceName:
        'Tài liệu Giáo dục Địa phương & Sách giáo khoa Địa lý THPT',
      sourceUrl: 'https://moet.gov.vn/'
    }
  ]
}
