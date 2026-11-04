/**
 * DỮ LIỆU DÒNG THỜI GIAN LỊCH SỬ CHỦ QUYỀN BIỂN ĐẢO - PHẦN 1
 * Gồm 3 giai đoạn đầu:
 * 1. Thời kỳ trước thế kỷ XVII
 * 2. Thế kỷ XVII – XVIII (Đội Hoàng Sa và Đội Bắc Hải)
 * 3. Thời Nguyễn (1802 – 1884)
 *
 * Phân biệt rõ:
 * - historicalFact: Sự kiện / dữ kiện lịch sử từ sử liệu và văn bản gốc
 * - historicalSignificance: Ý nghĩa lịch sử và nhận định nghiên cứu học thuật
 */

export const TIMELINE_ERAS_PART1 = [
  {
    id: 'era-1',
    code: 'Giai đoạn 01',
    periodRange: 'Trước thế kỷ XVII',
    title: 'Thời kỳ trước thế kỷ XVII',
    subtitle:
      'Quá trình cư dân Việt cổ chinh phục biển và những tư liệu địa chí, bản đồ cổ đầu tiên liên quan đến vùng biển đảo',
    summary:
      'Từ truyền thống văn hóa biển tiền sử – sơ sử đến các bộ địa chí, bản đồ quốc gia thời Lê sơ thế kỷ XV và ghi chép hàng hải thế kỷ XVI phản ánh quá trình người Việt nhận thức, khai thác không gian Biển Đông.',
    milestones: [
      {
        id: 'ms-101',
        eraId: 'era-1',
        timeDisplay: 'Thời kỳ Tiền sử – Sơ sử đến Thế kỷ X',
        title:
          'Truyền thống Văn hóa Biển của Cư dân Việt cổ (Văn hóa Hạ Long, Sa Huỳnh) và Giao thương Hàng hải',
        category: 'Khảo cổ & Văn hóa Biển',
        historicalFact:
          'Các di chỉ khảo cổ học dọc bờ biển và trên các đảo ven bờ miền Bắc, miền Trung, miền Nam (như văn hóa Hạ Long ở Quảng Ninh – Hải Phòng, văn hóa Bàu Tró ở Quảng Bình, văn hóa Sa Huỳnh ở Quảng Ngãi – Nam Trung Bộ, di chỉ trên đảo Lý Sơn, Cù Lao Chàm, Phú Quốc, Côn Đảo) đã phát hiện nhiều công cụ đi biển, đồ gốm và hiện vật trao đổi hàng hải có niên đại hàng nghìn năm.',
        historicalSignificance:
          'Nhận định nghiên cứu khảo cổ học khẳng định: Người Việt cổ đã sớm vươn ra sinh sống trên hệ thống đảo ven bờ và làm chủ kỹ thuật đóng thuyền, đi biển trên Biển Đông, tạo nền tảng truyền thống hàng hải cho các thế hệ sau vươn ra các quần đảo xa bờ.',
        documentQuote:
          'Di tích khảo cổ học văn hóa Sa Huỳnh tại đảo Lý Sơn (xóm Ốc, suối Chình) minh chứng cư dân cổ đã định cư và hoạt động hàng hải liên tục từ hơn 2.000 năm trước.',
        image: '/assets/exhibition/hall-lich-su.svg',
        imageCaption:
          'Đồ họa giáo dục mô phỏng không gian văn hóa biển và hải trình truyền thống của cư dân Việt trên Biển Đông.',
        sourceName:
          'Viện Khảo cổ học – Viện Hàn lâm Khoa học xã hội Việt Nam & SGK Lịch sử 10, 11',
        verificationStatus: 'Đã kiểm chứng từ tư liệu khảo cổ & sách giáo khoa'
      },
      {
        id: 'ms-102',
        eraId: 'era-1',
        timeDisplay: 'Thế kỷ XV (Năm 1435 & Năm 1490)',
        title:
          'Sách "Dư địa chí" của Nguyễn Trãi (1435) và bộ "Hồng Đức bản đồ" (1490) thời Lê sơ',
        category: 'Thư tịch & Bản đồ Quốc gia',
        historicalFact:
          'Năm 1435, danh nhân Nguyễn Trãi biên soạn cuốn "Dư địa chí" ghi chép về cương vực, núi sông, cửa biển và sản vật của nước Đại Việt. Đến năm Hồng Đức thứ 21 (1490), vua Lê Thánh Tông cho hoàn thành bộ "Hồng Đức bản đồ" vẽ địa hình các thừa tuyên cùng hệ thống cửa biển, hải đảo ven bờ của quốc gia Đại Việt.',
        historicalSignificance:
          'Đánh dấu bước phát triển quan trọng về tư duy quản lý lãnh thổ và vẽ bản đồ quốc gia (quốc đồ) của nhà nước quân chủ Đại Việt, đặt nền móng cho các tập bản đồ vẽ chi tiết Bãi Cát Vàng ở các thế kỷ tiếp theo.',
        documentQuote:
          'Hệ thống "Hồng Đức bản đồ" là tiền thân để các thế hệ nho sĩ thế kỷ XVII kế thừa và bổ sung chi tiết phần hải đảo ngoài khơi miền Trung.',
        image: '/assets/library/topic-lich-su.svg',
        imageCaption:
          'Đồ họa minh họa truyền thống biên soạn địa chí và bản đồ cương vực thời Lê sơ.',
        sourceName:
          'Viện Nghiên cứu Hán Nôm & Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)',
        verificationStatus: 'Đã kiểm chứng từ thư tịch cổ Việt Nam'
      },
      {
        id: 'ms-103',
        eraId: 'era-1',
        timeDisplay: 'Thế kỷ XVI',
        title:
          'Bản đồ Hàng hải Phương Tây Thế kỷ XVI ghi nhận mối liên hệ giữa Bãi Cát Vàng (Pracel) và Bờ biển Miền Trung Việt Nam',
        category: 'Tư liệu Bản đồ học Quốc tế',
        historicalFact:
          'Từ thế kỷ XVI, các nhà hàng hải và vẽ bản đồ phương Tây (như Lazaro Luis năm 1563, Fernão Vaz Dourado năm 1571, anh em nhà Van Langren năm 1595) khi vẽ vùng Biển Đông đã thể hiện một dải đảo cát dài ngoài khơi miền Trung Việt Nam với tên gọi "Pracel" (hoặc "Parcel") và gọi vùng bờ biển đối diện trong đất liền Quảng Ngãi là "Costa de Pracel" (Bờ biển Hoàng Sa).',
        historicalSignificance:
          'Nhận định của các nhà nghiên cứu lịch sử – bản đồ học cho thấy ngay từ thế kỷ XVI, trong nhận thức của các nhà hàng hải quốc tế, quần đảo Hoàng Sa (Pracel) và vùng bờ biển miền Trung Việt Nam (Costa de Pracel) đã có mối quan hệ địa lý – nhân văn gắn kết hữu cơ.',
        documentQuote:
          'Địa danh "Ilhas dos Pracel" (Quần đảo Hoàng Sa) và "Costa de Pracel" (Bờ biển Hoàng Sa tại miền Trung Việt Nam) xuất hiện song hành trên nhiều hải đồ châu Âu thế kỷ XVI–XVII.',
        image: '/assets/ecosystem/dong-thoi-gian-lich-su.svg',
        imageCaption:
          'Đồ họa minh họa đối chiếu địa danh Pracel và Costa de Pracel trên hải đồ cổ.',
        sourceName:
          'Bộ Thông tin và Truyền thông – Kỷ yếu Triển lãm Bản đồ và Tư liệu Hoàng Sa, Trường Sa',
        verificationStatus: 'Đã kiểm chứng từ bộ sưu tập bản đồ cổ quốc tế'
      }
    ]
  },
  {
    id: 'era-2',
    code: 'Giai đoạn 02',
    periodRange: 'Thế kỷ XVII – XVIII',
    title: 'Thế kỷ XVII – XVIII: Hoạt động của Đội Hoàng Sa và Đội Bắc Hải',
    subtitle:
      'Nhà nước Đàng Trong (chúa Nguyễn) và triều Tây Sơn thành lập, duy trì tổ chức dân binh chuyên trách thực thi chủ quyền tại Hoàng Sa và Trường Sa',
    summary:
      'Giai đoạn Nhà nước Việt Nam chính thức xác lập và thực thi chủ quyền một cách hòa bình, liên tục và có tổ chức thông qua hoạt động định kỳ hằng năm của đội Hoàng Sa và đội Bắc Hải.',
    milestones: [
      {
        id: 'ms-201',
        eraId: 'era-2',
        timeDisplay: 'Nửa đầu thế kỷ XVII (Thời chúa Nguyễn)',
        title:
          'Chính quyền Chúa Nguyễn ở Đàng Trong thành lập Đội Hoàng Sa hoạt động thường niên tại Bãi Cát Vàng',
        category: 'Thực thi Chủ quyền Nhà nước',
        historicalFact:
          'Từ nửa đầu thế kỷ XVII, chính quyền chúa Nguyễn ở Đàng Trong đã lập đội Hoàng Sa với biên chế quy định 70 suất đinh, tuyển chọn những trai tráng khỏe mạnh, giỏi nghề đi biển ở xã An Vĩnh, xã An Hải (huyện Bình Sơn, phủ Quảng Nghĩa, nay thuộc tỉnh Quảng Ngãi). Hằng năm cứ đến tháng 2 hoặc tháng 3 âm lịch, đội nhận lệnh bài (giấy sai) đi 5 chiếc thuyền câu nhỏ mang theo 6 tháng lương thực ra Bãi Cát Vàng làm nhiệm vụ thu lượm hóa vật và sản vật biển, đến tháng 8 âm lịch trở về cửa Eo (Thuận An, Phú Xuân) giao nộp cho triều đình.',
        historicalSignificance:
          'Ý nghĩa lịch sử – pháp lý: Việc lập đội Hoàng Sa chứng tỏ Nhà nước Việt Nam là nhà nước đầu tiên trong lịch sử đã chiếm hữu thực tế và quản lý liên tục quần đảo Hoàng Sa khi quần đảo này còn là đất vô chủ.',
        documentQuote:
          '"Họ Nguyễn đặt đội Hoàng Sa 70 suất, lấy người xã An Vĩnh sung vào, cắt phiên mỗi năm cứ tháng 2 nhận giấy sai đi..." (Trích Phủ biên tạp lục, 1776).',
        image: '/assets/exhibition/hall-lich-su.svg',
        imageCaption:
          'Đồ họa mô phỏng hải trình thường niên từ tháng 2 đến tháng 8 âm lịch của đội Hoàng Sa.',
        sourceName:
          'Lê Quý Đôn – Phủ biên tạp lục (1776) & Sách giáo khoa Lịch sử 11 (GDPT 2018)',
        verificationStatus: 'Đã kiểm chứng từ chính sử và sách giáo khoa'
      },
      {
        id: 'ms-202',
        eraId: 'era-2',
        timeDisplay: 'Năm 1686 (Thế kỷ XVII)',
        title:
          'Danh nhân Đỗ Bá hoàn thành "Toản tập Thiên Nam tứ chí lộ đồ thư" vẽ bản đồ và chú giải về Bãi Cát Vàng',
        category: 'Bản đồ & Thư tịch Cổ',
        historicalFact:
          'Năm 1686, nho sĩ Đỗ Bá (tự Công Đạo, người xã Bích Triều, huyện Thanh Chương, tỉnh Nghệ An) hoàn thành tập bản đồ "Toản tập Thiên Nam tứ chí lộ đồ thư". Trong tờ bản đồ phủ Quảng Nghĩa (Quảng Ngãi), tác giả vẽ rõ "Bãi Cát Vàng" ngoài biển và viết lời chú chữ Hán mô tả kích thước bãi cát dài khoảng 400 dặm, rộng 20 dặm cùng việc hằng năm chúa Nguyễn cử 18 chiếc thuyền ra thu lượm vàng bạc, tiền tệ, súng đạn từ các tàu đắm.',
        historicalSignificance:
          'Là tư liệu bản đồ và địa chí thành văn có niên đại xác định sớm nhất của Việt Nam khẳng định rõ ràng vị trí địa lý và thẩm quyền quản lý của chính quyền Đàng Trong đối với Bãi Cát Vàng (Hoàng Sa, Trường Sa).',
        documentQuote:
          '"Giữa biển có một dải cát dài, gọi là Bãi Cát Vàng, dài độ 400 dặm, rộng 20 dặm, đứng dựng giữa biển..." (Đỗ Bá, 1686).',
        image: '/assets/exhibition/hall-lich-su.svg',
        imageCaption:
          'Đồ họa mô phỏng hồ sơ bản đồ Toản tập Thiên Nam tứ chí lộ đồ thư (1686).',
        sourceName:
          'Viện Nghiên cứu Hán Nôm & Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)',
        verificationStatus: 'Đã kiểm chứng từ thư tịch cổ lưu trữ'
      },
      {
        id: 'ms-203',
        eraId: 'era-2',
        timeDisplay: 'Đầu thế kỷ XVIII (Thời chúa Nguyễn)',
        title:
          'Thành lập Đội Bắc Hải (do Đội Hoàng Sa kiêm quản) thực thi chủ quyền tại Quần đảo Trường Sa và Vùng biển Phía Nam',
        category: 'Thực thi Chủ quyền Nhà nước',
        historicalFact:
          'Do phạm vi của Đại Trường Sa (bao gồm cả Hoàng Sa và Trường Sa) trải rộng hàng trăm hải lý về phía Nam, chính quyền chúa Nguyễn đã lập thêm đội Bắc Hải, giao cho Cai đội Hoàng Sa kiêm quản. Đội Bắc Hải không định trước số suất cứng mà tuyển người thôn Tứ Chính ở Bình Thuận hoặc xã Cảnh Dương, đi thuyền câu nhỏ ra các xứ Bắc Hải (tức quần đảo Trường Sa), cù lao Côn Lôn (Côn Đảo) và các đảo ở Hà Tiên để thu lượm hóa vật và hải sản quý.',
        historicalSignificance:
          'Khẳng định quy mô quản lý toàn diện của Nhà nước Việt Nam: Đội Hoàng Sa phụ trách vùng biển đảo phía Bắc (quần đảo Hoàng Sa) và Đội Bắc Hải phụ trách vùng biển đảo phía Nam (quần đảo Trường Sa và vùng biển Nam Bộ).',
        documentQuote:
          '"Họ Nguyễn lại đặt đội Bắc Hải, không định bao nhiêu suất, hoặc người thôn Tứ Chính ở Bình Thuận, hoặc người xã Cảnh Dương, ai tình nguyện thì cấp giấy sai đi..." (Lê Quý Đôn, 1776).',
        image: '/assets/ecosystem/dong-thoi-gian-lich-su.svg',
        imageCaption:
          'Đồ họa minh họa phạm vi hoạt động phối hợp của đội Hoàng Sa và đội Bắc Hải.',
        sourceName:
          'Lê Quý Đôn – Phủ biên tạp lục (1776) & Ủy ban Biên giới Quốc gia',
        verificationStatus: 'Đã kiểm chứng từ sử liệu chính thống'
      },
      {
        id: 'ms-204',
        eraId: 'era-2',
        timeDisplay: 'Năm 1776',
        title:
          'Nhà bác học Lê Quý Đôn biên soạn bộ "Phủ biên tạp lục" ghi chép toàn diện về Hoàng Sa và Trường Sa',
        category: 'Thư tịch Chính thống',
        historicalFact:
          'Năm Bính Thân (1776), khi giữ chức Hiệp trấn Thuận Hóa, nhà bác học Lê Quý Đôn đã biên soạn bộ "Phủ biên tạp lục" (gồm 6 quyển). Tại Quyển 2, ông dành nhiều trang mô tả chi tiết địa hình, khoảng cách đường biển, sản vật của đảo Đại Trường Sa, quy chế tuyển mộ, miễn thuế sưu dịch, cấp lương thực của đội Hoàng Sa – Bắc Hải và dẫn lại bức thư của chúa Nguyễn trả lời quan tổng trấn nước ngoài khi giúp đưa binh đinh đội Hoàng Sa bị bão dạt vào bờ trở về nước.',
        historicalSignificance:
          'Cung cấp bằng chứng lịch sử – ngoại giao cực kỳ đắt giá: không chỉ ghi nhận hoạt động quản lý nội bộ mà còn chứng minh các nước láng giềng đương thời đã biết rõ và tôn trọng tư cách công vụ nhà nước của đội Hoàng Sa thuộc chính quyền Đàng Trong.',
        documentQuote:
          '"Trước họ Nguyễn có đặt đội Hoàng Sa 70 suất, lại đặt đội Bắc Hải... đều do đội Hoàng Sa cai quản." (Phủ biên tạp lục, Quyển 2, 1776).',
        image: '/assets/library/topic-lich-su.svg',
        imageCaption:
          'Đồ họa mô phỏng trích đoạn Quyển 2 bộ Phủ biên tạp lục của Lê Quý Đôn (1776).',
        sourceName:
          'Sách giáo khoa Lịch sử 11 (GDPT 2018) & Viện Sử học Việt Nam',
        verificationStatus: 'Đã kiểm chứng từ thư tịch cổ'
      },
      {
        id: 'ms-205',
        eraId: 'era-2',
        timeDisplay: 'Ngày 14/2 năm Thái Đức thứ 9 (Năm 1786)',
        title:
          'Chính quyền Tây Sơn ban Tờ sai cho Hội Đức hầu thống suất Đội Hoàng Sa ra đảo làm nhiệm vụ',
        category: 'Văn bản Hành chính Nhà nước',
        historicalFact:
          'Dưới triều đại Tây Sơn, ngày 14 tháng 2 năm Thái Đức thứ 9 (1786), Thái phó Tổng lý đại thần ban tờ chỉ dụ sai Hội Đức hầu (Cai đội Hoàng Sa) dẫn 4 chiếc thuyền câu vượt biển ra Hoàng Sa và các cù lao ngoài biển thu lượm các đồ vàng, bạc, đồng, súng đại bác, đồi mồi, hải ba... trở về kinh nộp theo đúng lệ cũ.',
        historicalSignificance:
          'Chứng minh dù có sự thay đổi triều đại từ chúa Nguyễn sang Tây Sơn, tư cách chủ quyền nhà nước và hoạt động thực thi chủ quyền của đội Hoàng Sa vẫn được duy trì liên tục, không hề gián đoạn.',
        documentQuote:
          '"Sai Hội Đức hầu, cai đội Hoàng Sa luôn xem xét đốc suất trong đội cắm biển hiệu đi 4 chiếc thuyền câu vượt biển thẳng đến Hoàng Sa..." (Tờ sai năm Thái Đức thứ 9 – 1786).',
        image: '/assets/exhibition/hall-lich-su.svg',
        imageCaption:
          'Đồ họa mô phỏng hồ sơ Tờ sai thời Tây Sơn lưu giữ tại nhà thờ tộc họ Võ trên đảo Lý Sơn.',
        sourceName:
          'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & Bảo tàng Lịch sử Quốc gia',
        verificationStatus: 'Đã kiểm chứng từ văn bản Hán Nôm lưu trữ'
      }
    ]
  },
  {
    id: 'era-3',
    code: 'Giai đoạn 03',
    periodRange: 'Thời Nguyễn (1802 – 1884)',
    title: 'Thời Nguyễn: Tổ chức quản lý, khảo sát, đo đạc và thực thi chủ quyền',
    subtitle:
      'Hoàng đế nhà Nguyễn trực tiếp ban Châu bản cử Thủy quân chính quy ra Hoàng Sa cắm cờ, đo đạc thủy trình, dựng miếu, lập bia và vẽ quốc đồ',
    summary:
      'Giai đoạn thực thi chủ quyền phát triển lên tầm cao mới: từ việc thu lượm hóa vật chuyển sang khảo sát khoa học hàng hải, đo vẽ bản đồ từng đảo, dựng cột mốc chủ quyền và cứu hộ tàu thuyền quốc tế.',
    milestones: [
      {
        id: 'ms-301',
        eraId: 'era-3',
        timeDisplay: 'Năm 1815 & Năm 1816 (Gia Long thứ 14 & 15)',
        title:
          'Vua Gia Long cử Phạm Quang Ảnh và Thủy quân cùng Đội Hoàng Sa ra thăm dò, đo đạc thủy trình và cắm cờ tại Hoàng Sa',
        category: 'Chính sử & Thực thi Chủ quyền',
        historicalFact:
          'Theo sách "Đại Nam thực lục chính biên" (Đệ nhất kỷ): Tháng Giêng năm Ất Hợi (1815), vua Gia Long sai bọn Phạm Quang Ảnh thuộc đội Hoàng Sa ra Hoàng Sa thăm dò, đo đạc đường biển (thủy trình). Đến tháng 3 năm Bính Tý (1816), vua Gia Long tiếp tục mệnh cho Thủy quân của triều đình cùng đội Hoàng Sa đi thuyền ra Hoàng Sa để xem xét, đo đạc thủy trình và chính thức khẳng định chủ quyền nhà nước.',
        historicalSignificance:
          'Sự kiện năm 1816 dưới triều vua Gia Long được nhiều học giả quốc tế và trong nước ghi nhận là mốc son chính quy hóa hoạt động thực thi chủ quyền của Vương triều Nguyễn bằng lực lượng Thủy quân nhà nước.',
        documentQuote:
          '"Năm Bính Tý, niên hiệu Gia Long thứ 15 (1816), mùa xuân, tháng 3, Vua mệnh cho Thủy quân và đội Hoàng Sa đi thuyền ra Hoàng Sa để xem xét đo đạc thủy trình." (Đại Nam thực lục chính biên, Đệ nhất kỷ, Quyển 52).',
        image: '/assets/library/topic-lich-su.svg',
        imageCaption:
          'Đồ họa minh họa Thủy quân triều Nguyễn cùng đội Hoàng Sa ra đảo đo đạc thủy trình năm 1816.',
        sourceName:
          'Quốc sử quán triều Nguyễn – Đại Nam thực lục & Sách giáo khoa Lịch sử 11',
        verificationStatus: 'Đã kiểm chứng từ chính sử triều Nguyễn'
      },
      {
        id: 'ms-302',
        eraId: 'era-3',
        timeDisplay: 'Năm 1833 & Năm 1835 (Minh Mạng thứ 14 & 16)',
        title:
          'Vua Minh Mạng chỉ dụ dựng miếu đá, lập bia chủ quyền và trồng cây xanh tại Quần đảo Hoàng Sa',
        category: 'Châu bản Triều Nguyễn (Di sản UNESCO)',
        historicalFact:
          'Năm Quý Tỵ (1833), vua Minh Mạng chỉ dụ Bộ Công chuẩn bị thuyền và cây giống để ra Hoàng Sa dựng miếu, lập bia và trồng cây trên các đảo nhằm giúp tàu thuyền qua lại nhận biết đảo từ xa, tránh mắc cạn. Năm Ất Mùi (1835), nhà vua cử Cai đội Thủy quân Phạm Văn Nguyên đem lính giám thành và phu thuyền tỉnh Quảng Ngãi, Bình Định chở vật liệu ra Hoàng Sa dựng miếu thờ (cách tòa miếu cổ 7 trượng), bên tả miếu dựng bia đá, phía trước xây bình phong.',
        historicalSignificance:
          'Chứng minh nhà nước Đại Nam không chỉ thực thi quyền lực tối cao trên đảo mà còn thực hiện trách nhiệm nhân đạo và bảo đảm an toàn hàng hải quốc tế trên Biển Đông.',
        documentQuote:
          '"Chỗ bãi Hoàng Sa thuộc mặt biển Quảng Ngãi, xa trông trời nước một màu, không phân biệt được nông hay sâu... Năm ngoái trẫm nghĩ tới muốn dựng miếu lập bia ở chỗ ấy, lại trồng nhiều cây cối..." (Châu bản Minh Mạng & Đại Nam thực lục).',
        image: '/assets/exhibition/hall-lich-su.svg',
        imageCaption:
          'Đồ họa mô phỏng hoạt động dựng miếu, lập bia và trồng cây tại Hoàng Sa dưới triều Minh Mạng.',
        sourceName:
          'Châu bản triều Nguyễn – Trung tâm Lưu trữ Quốc gia I & Đại Nam thực lục',
        verificationStatus: 'Đã kiểm chứng từ Châu bản gốc (Di sản tư liệu UNESCO)'
      },
      {
        id: 'ms-303',
        eraId: 'era-3',
        timeDisplay: 'Ngày 12/2 năm Bính Thân (Năm 1836 – Minh Mạng thứ 17)',
        title:
          'Châu bản cử Suất đội Thủy quân Phạm Hữu Nhật ra Hoàng Sa cắm 10 cột mốc gỗ khắc niên hiệu Minh Mạng và đo vẽ bản đồ',
        category: 'Châu bản Triều Nguyễn (Di sản UNESCO)',
        historicalFact:
          'Ngày 12 tháng 2 năm Minh Mạng thứ 17 (1836), vua Minh Mạng phê chữ "Chuẩn" bằng mực son lên bản tấu của Bộ Công cử Chánh đội trưởng suất đội Thủy quân Phạm Hữu Nhật đưa thuyền ra Hoàng Sa đo đạc, vẽ bản đồ từng đảo (chiều dài, chiều rộng, độ cao, bãi cát, đá ngầm xung quanh). Mỗi thuyền mang theo 10 tấm bài gỗ dài 4, 5 thước, rộng 5 tấc để cắm làm dấu mốc trên các đảo đến khảo sát.',
        historicalSignificance:
          'Mỗi cột mốc gỗ đều khắc rõ 33 chữ Hán ghi niên hiệu nhà vua và tên vị chỉ huy Thủy quân, là bằng chứng pháp lý hành chính trực tiếp, hoàn hảo theo tiêu chuẩn luật pháp quốc tế về thực thi chủ quyền nhà nước.',
        documentQuote:
          'Dòng chữ khắc trên cột mốc năm 1836: "Minh Mạng thập thất niên, tuế tại Bính Thân, Thủy quân Chánh đội trưởng suất đội Phạm Hữu Nhật phụng mệnh vãng Hoàng Sa tương độ chí thử lưu chí đẳng tự" (Năm Minh Mạng thứ 17, năm Bính Thân, Thủy quân Chánh đội trưởng suất đội Phạm Hữu Nhật vâng mệnh ra Hoàng Sa trông nom đo đạc đến đây lưu dấu để ghi nhớ).',
        image: '/assets/exhibition/hall-lich-su.svg',
        imageCaption:
          'Đồ họa mô phỏng Châu bản Minh Mạng thứ 17 (1836) và nội dung cột mốc chủ quyền của Phạm Hữu Nhật.',
        sourceName:
          'Trung tâm Lưu trữ Quốc gia I (Cục Văn thư và Lưu trữ nhà nước) & SGK Lịch sử 11',
        verificationStatus: 'Đã kiểm chứng từ Châu bản gốc (Di sản tư liệu UNESCO)'
      },
      {
        id: 'ms-304',
        eraId: 'era-3',
        timeDisplay: 'Khoảng năm 1838 (Triều Minh Mạng)',
        title:
          'Bản đồ "Đại Nam nhất thống toàn đồ" và "An Nam đại quốc họa đồ" khẳng định Hoàng Sa và Vạn Lý Trường Sa thuộc Việt Nam',
        category: 'Bản đồ Quốc gia & Quốc tế',
        historicalFact:
          'Khoảng năm 1838, triều đình nhà Nguyễn hoàn thành bức bản đồ "Đại Nam nhất thống toàn đồ", trên đó ngoài khơi miền Trung Việt Nam thể hiện rõ hai dải đảo ghi chữ "Hoàng Sa" và "Vạn Lý Trường Sa" nằm trong cương vực lãnh thổ Đại Nam. Cùng năm 1838, Giám mục Jean-Louis Taberd xuất bản tấm bản đồ "An Nam đại quốc họa đồ" (Tabula Geographica Imperii Anamitici) ghi rõ cụm từ Latinh "Paracel seu Cát Vàng" (Paracel tức là Cát Vàng) thuộc vùng biển An Nam.',
        historicalSignificance:
          'Sự thống nhất hoàn toàn giữa bản đồ chính thống của Nhà nước Việt Nam (Đại Nam nhất thống toàn đồ) và bản đồ của học giả phương Tây đương thời (An Nam đại quốc họa đồ) là chứng cứ khách quan bác bỏ mọi yêu sách phi lý từ bên ngoài.',
        documentQuote:
          'Trên "Đại Nam nhất thống toàn đồ" (1838), hai quần đảo "Hoàng Sa" và "Vạn Lý Trường Sa" được vẽ trong cùng một dải kiểm soát biển đảo với các đảo ven bờ của Đại Nam.',
        image: '/assets/library/topic-phap-luat.svg',
        imageCaption:
          'Đồ họa mô phỏng vị trí Hoàng Sa và Vạn Lý Trường Sa trên bản đồ cổ năm 1838.',
        sourceName:
          'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & Sách giáo khoa Lịch sử 11',
        verificationStatus: 'Đã kiểm chứng từ bản đồ lịch sử lưu trữ'
      }
    ]
  }
]
