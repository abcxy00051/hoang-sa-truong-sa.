/**
 * DỮ LIỆU DÒNG THỜI GIAN LỊCH SỬ CHỦ QUYỀN BIỂN ĐẢO - PHẦN 2
 * Gồm 3 giai đoạn tiếp theo:
 * 4. Thời Pháp thuộc (1884 – 1945)
 * 5. Giai đoạn 1945 – 1975
 * 6. Giai đoạn từ năm 1975 đến nay
 */

export const TIMELINE_ERAS_PART2 = [
  {
    id: 'era-4',
    code: 'Giai đoạn 04',
    periodRange: 'Thời Pháp thuộc (1884 – 1945)',
    title: 'Thời Pháp thuộc: Các hoạt động quản lý liên quan đến Hoàng Sa và Trường Sa',
    subtitle:
      'Chính quyền Pháp đại diện cho Việt Nam về đối ngoại tiếp tục khảo sát khoa học, xây trạm khí tượng, dựng bia chủ quyền và lập đơn vị hành chính tại hai quần đảo',
    summary:
      'Sau Hiệp ước Patenôtre (1884), Pháp nhân danh nhà nước bảo hộ Việt Nam tiếp tục thực thi và củng cố chủ quyền của Việt Nam đối với Hoàng Sa và Trường Sa bằng phương thức quản lý hành chính – khoa học hiện đại.',
    milestones: [
      {
        id: 'ms-401',
        eraId: 'era-4',
        timeDisplay: 'Năm 1925 – Năm 1927',
        title:
          'Viện Hải dương học Nha Trang đưa tàu De Lanessan khảo sát khoa học, địa chất và sinh vật biển tại Hoàng Sa và Trường Sa',
        category: 'Khảo sát Khoa học & Quản lý',
        historicalFact:
          'Từ năm 1925 đến năm 1927, Viện Hải dương học và Nghề cá Đông Dương (trụ sở tại Nha Trang, do Tiến sĩ Armand Krempf làm Giám đốc) đã cử tàu nghiên cứu khoa học De Lanessan tiến hành nhiều chuyến khảo sát địa chất, khoáng sản phosphat, độ sâu đáy biển và hệ sinh thái san hô tại quần đảo Hoàng Sa và quần đảo Trường Sa.',
        historicalSignificance:
          'Mở đầu giai đoạn quản lý kết hợp nghiên cứu hải dương học hiện đại đối với hai quần đảo Hoàng Sa và Trường Sa từ cơ sở khoa học đặt tại đất liền Việt Nam (Nha Trang).',
        documentQuote:
          'Báo cáo khoa học của Tiến sĩ A. Krempf (Giám đốc Viện Hải dương học Đông Dương tại Nha Trang) ghi nhận chi tiết cấu trúc địa chất san hô của Hoàng Sa và Trường Sa (1925–1927).',
        image: '/assets/exhibition/hall-thien-nhien.svg',
        imageCaption:
          'Đồ họa minh họa hoạt động khảo sát hải dương học tại Hoàng Sa và Trường Sa.',
        sourceName:
          'Viện Hải dương học Nha Trang & Ủy ban Biên giới Quốc gia – Bộ Ngoại giao',
        verificationStatus: 'Đã kiểm chứng từ hồ sơ lưu trữ lịch sử'
      },
      {
        id: 'ms-402',
        eraId: 'era-4',
        timeDisplay: 'Ngày 21/12/1933',
        title:
          'Thống đốc Nam Kỳ J. Krautheimer ký Nghị định sáp nhập Quần đảo Trường Sa vào tỉnh Bà Rịa',
        category: 'Văn bản Hành chính Hiện đại',
        historicalFact:
          'Sau khi các tàu hải quân Pháp (như tàu thông báo La Malicieuse, tàu Astrolabe, tàu Alerte) thực hiện các chuyến tuần tra và cắm cờ tại các đảo thuộc quần đảo Trường Sa (1930–1933), ngày 21 tháng 12 năm 1933, Thống đốc Nam Kỳ J. Krautheimer đã ký Nghị định số 4762-CP chính thức sáp nhập các đảo Trường Sa, An Bang, Itu Aba (Ba Bình), nhóm Song Tử, Loại Ta, Thị Tứ và các đảo phụ thuộc vào tỉnh Bà Rịa.',
        historicalSignificance:
          'Là văn bản pháp lý hành chính hiện đại đặt quần đảo Trường Sa trực thuộc một tỉnh đất liền của Việt Nam (tỉnh Bà Rịa), tạo tiền đề pháp lý liên tục cho các giai đoạn sau.',
        documentQuote:
          '"Điều 1: Đảo gọi là Spratly và các đảo nhỏ Caye d’Amboine, Itu-Aba, nhóm Deux-Îles, Loaito, Thi-Tu cùng các đảo phụ thuộc nằm trong Biển Đông nay được sáp nhập vào tỉnh Bà Rịa." (Nghị định ngày 21/12/1933).',
        image: '/assets/library/topic-phap-luat.svg',
        imageCaption:
          'Đồ họa mô phỏng Nghị định hành chính ngày 21/12/1933 sáp nhập quần đảo Trường Sa vào tỉnh Bà Rịa.',
        sourceName:
          'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018) & Trung tâm Lưu trữ Quốc gia II',
        verificationStatus: 'Đã kiểm chứng từ Công báo và lưu trữ quốc gia'
      },
      {
        id: 'ms-403',
        eraId: 'era-4',
        timeDisplay: 'Ngày 30/3/1938 & Ngày 15/6/1938',
        title:
          'Dụ số 10 của Vua Bảo Đại và Nghị định số 156-SC của Toàn quyền Jules Brévié lập đơn vị hành chính Hoàng Sa thuộc tỉnh Thừa Thiên',
        category: 'Văn bản Hành chính & Bia Chủ quyền',
        historicalFact:
          'Ngày 30/3/1938, vua Bảo Đại ký Dụ số 10 tách quần đảo Hoàng Sa khỏi địa hạt tỉnh Nam Ngãi để sáp nhập vào tỉnh Thừa Thiên. Tiếp đó, ngày 15/6/1938, Toàn quyền Đông Dương Jules Brévié ký Nghị định số 156-SC thiết lập đơn vị hành chính tại quần đảo Hoàng Sa trực thuộc tỉnh Thừa Thiên. Cùng năm 1938, chính quyền đã dựng Bia chủ quyền tại đảo Hoàng Sa (Pattle), xây dựng hải đăng, trạm khí tượng (mang số hiệu quốc tế 48860 ở đảo Hoàng Sa và 48859 ở đảo Phú Lâm) và trạm vô tuyến điện.',
        historicalSignificance:
          'Khẳng định rõ ràng việc Pháp thực thi chủ quyền tại Hoàng Sa là nhân danh vương quốc An Nam (Việt Nam) trên cơ sở chủ quyền lịch sử từ thời các vua Nguyễn ("các cù lao Hoàng Sa thuộc về chủ quyền nước Nam đã lâu đời").',
        documentQuote:
          'Dòng chữ khắc trên Bia chủ quyền năm 1938 tại đảo Hoàng Sa: "République Française – Royaume d’Annam – Archipel des Paracels 1816 – Île de Pattle 1938" (Cộng hòa Pháp – Vương quốc An Nam – Quần đảo Hoàng Sa 1816 – Đảo Hoàng Sa 1938).',
        image: '/assets/exhibition/hall-hoang-sa-truong-sa.svg',
        imageCaption:
          'Đồ họa mô phỏng hồ sơ Nghị định số 156-SC (15/6/1938) và Bia chủ quyền tại Hoàng Sa.',
        sourceName:
          'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018) & Ủy ban Biên giới Quốc gia',
        verificationStatus: 'Đã kiểm chứng từ tài liệu lưu trữ và sách giáo khoa'
      },
      {
        id: 'ms-404',
        eraId: 'era-4',
        timeDisplay: 'Ngày 05/5/1939',
        title:
          'Nghị định số 3282 chia đơn vị hành chính Hoàng Sa thành hai Đại lý Hành chính trực thuộc tỉnh Thừa Thiên',
        category: 'Quản lý Hành chính Nhà nước',
        historicalFact:
          'Ngày 05 tháng 5 năm 1939, Toàn quyền Đông Dương Jules Brévié ký Nghị định số 3282 sửa đổi Nghị định 156-SC, chia đơn vị hành chính quần đảo Hoàng Sa thành hai đại lý hành chính riêng biệt là "Croissant và phụ cận" (nhóm Lưỡi Liềm ở phía Tây) và "Amphitrite và phụ cận" (nhóm An Vĩnh ở phía Đông), có đồn binh Bảo an Việt Nam và nhân viên khí tượng thường trú.',
        historicalSignificance:
          'Minh chứng cho bộ máy quản lý hành chính ngày càng chi tiết, chặt chẽ và thường trực trên cả hai nhóm đảo Đông – Tây của quần đảo Hoàng Sa.',
        documentQuote:
          'Các trạm khí tượng trên đảo Hoàng Sa và đảo Phú Lâm đều đặn phát bản tin thời tiết phục vụ hàng hải và hàng không quốc tế trong mạng lưới Tổ chức Khí tượng Thế giới.',
        image: '/assets/ecosystem/ban-do-so.svg',
        imageCaption:
          'Đồ họa minh họa hai khu vực hành chính nhóm Lưỡi Liềm và nhóm An Vĩnh tại quần đảo Hoàng Sa.',
        sourceName:
          'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & Nhà Trưng bày Hoàng Sa Đà Nẵng',
        verificationStatus: 'Đã kiểm chứng từ hồ sơ hành chính lưu trữ'
      }
    ]
  },
  {
    id: 'era-5',
    code: 'Giai đoạn 05',
    periodRange: 'Giai đoạn 1945 – 1975',
    title: 'Giai đoạn 1945 – 1975: Tiếp nhận, quản lý hành chính và bảo vệ chủ quyền',
    subtitle:
      'Tuyên bố chủ quyền tại Hội nghị quốc tế San Francisco (1951), duy trì quản lý hành chính liên tục và giải phóng các đảo thuộc quần đảo Trường Sa (1975)',
    summary:
      'Trong bối cảnh đất nước trải qua chiến tranh và tạm thời chia cắt hai miền theo Hiệp định Genève (1954), chủ quyền của Việt Nam đối với Hoàng Sa và Trường Sa vẫn được khẳng định trên trường quốc tế và thực thi hành chính liên tục.',
    milestones: [
      {
        id: 'ms-501',
        eraId: 'era-5',
        timeDisplay: 'Ngày 07/9/1951',
        title:
          'Tuyên bố khẳng định chủ quyền của Việt Nam đối với Hoàng Sa và Trường Sa tại Hội nghị Hòa bình San Francisco (Hoa Kỳ)',
        category: 'Pháp lý & Ngoại giao Quốc tế',
        historicalFact:
          'Tháng 9 năm 1951, Hội nghị Hòa bình San Francisco được triệu tập tại Hoa Kỳ với sự tham dự của 51 quốc gia để ký Hòa ước với Nhật Bản sau Chiến tranh thế giới thứ hai (Điều 2 Chương II Hòa ước quy định Nhật Bản từ bỏ mọi quyền, danh nghĩa và đòi hỏi đối với hai quần đảo Hoàng Sa và Trường Sa). Ngày 07/9/1951, Trưởng phái đoàn Quốc gia Việt Nam là Thủ tướng kiêm Ngoại trưởng Trần Văn Hữu đã long trọng tuyên bố khẳng định chủ quyền đã có từ lâu đời của Việt Nam đối với quần đảo Hoàng Sa và quần đảo Trường Sa.',
        historicalSignificance:
          'Trước sự hiện diện của đại diện 51 quốc gia tại một hội nghị quốc tế lớn, tuyên bố chủ quyền của phái đoàn Việt Nam không gặp bất kỳ sự phản đối hay bảo lưu nào, khẳng định sự thừa nhận mặc nhiên của cộng đồng quốc tế đối với chủ quyền hợp pháp của Việt Nam.',
        documentQuote:
          '"...Và vì phải thẳng thắn lợi dụng tất cả mọi cơ hội để dập tắt những mầm mống tranh chấp sau này, chúng tôi khẳng định chủ quyền đã có từ lâu đời của chúng tôi trên quần đảo Trường Sa và Hoàng Sa..." (Biên bản Hội nghị San Francisco ngày 07/9/1951).',
        image: '/assets/library/topic-phap-luat.svg',
        imageCaption:
          'Đồ họa mô phỏng sự kiện pháp lý quốc tế tại Hội nghị Hòa bình San Francisco ngày 07/9/1951.',
        sourceName:
          'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & Sách giáo khoa Lịch sử 11 (GDPT 2018)',
        verificationStatus: 'Đã kiểm chứng từ Biên bản Hội nghị Quốc tế San Francisco 1951'
      },
      {
        id: 'ms-502',
        eraId: 'era-5',
        timeDisplay: 'Năm 1956 & Năm 1961 (Giai đoạn 1954 – 1973)',
        title:
          'Ban hành các văn bản đặt Trường Sa thuộc tỉnh Phước Tuy (1956), Hoàng Sa thuộc tỉnh Quảng Nam (1961) và duy trì quản lý hành chính',
        category: 'Quản lý Hành chính Nhà nước',
        historicalFact:
          'Theo Hiệp định Genève (1954), khu vực phía Nam vĩ tuyến 17 (bao gồm hai quần đảo Hoàng Sa và Trường Sa) tạm thời do chính quyền miền Nam quản lý hành chính. Ngày 22/10/1956, Sắc lệnh số 143-NV đặt quần đảo Trường Sa trực thuộc tỉnh Phước Tuy (nay thuộc Bà Rịa – Vũng Tàu); ngày 13/7/1961, Sắc lệnh số 174-NV đặt quần đảo Hoàng Sa thuộc tỉnh Quảng Nam và thành lập xã Định Hải thuộc quận Hòa Vang (đến ngày 21/10/1969 sáp nhập xã Định Hải vào xã Hòa Long, quận Hòa Vang, tỉnh Quảng Nam). Đến ngày 06/9/1973, Nghị định số 420-BNV/HCĐP/26 sáp nhập quần đảo Trường Sa vào xã Phước Hải, quận Đất Đỏ, tỉnh Phước Tuy.',
        historicalSignificance:
          'Chứng minh về mặt pháp luật quốc tế, chính quyền quản lý miền Nam Việt Nam lúc bấy giờ đã tiếp tục thực thi liên tục các quyền năng hành chính nhà nước đối với cả hai quần đảo Hoàng Sa và Trường Sa.',
        documentQuote:
          'Hệ thống Sắc lệnh 143-NV (1956), Sắc lệnh 174-NV (1961) và Nghị định 420-BNV (1973) duy trì tính liên tục về mặt địa giới hành chính của hai quần đảo.',
        image: '/assets/ecosystem/dong-thoi-gian-lich-su.svg',
        imageCaption:
          'Đồ họa minh họa hệ thống văn bản quản lý địa giới hành chính Hoàng Sa và Trường Sa giai đoạn 1956–1973.',
        sourceName:
          'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018) & Trung tâm Lưu trữ Quốc gia II',
        verificationStatus: 'Đã kiểm chứng từ tài liệu lưu trữ quốc gia'
      },
      {
        id: 'ms-503',
        eraId: 'era-5',
        timeDisplay: 'Tháng 01 năm 1974',
        title:
          'Tuyên bố lên án hành vi sử dụng vũ lực đánh chiếm Quần đảo Hoàng Sa và khẳng định chủ quyền bất khả xâm phạm của Việt Nam',
        category: 'Đấu tranh Bảo vệ Chủ quyền',
        historicalFact:
          'Tháng 01/1974 (đỉnh điểm là ngày 19/01/1974), bất chấp luật pháp quốc tế, lực lượng quân sự nước ngoài đã sử dụng vũ lực đánh chiếm nhóm đảo phía Tây và toàn bộ quần đảo Hoàng Sa. Chính quyền Việt Nam Cộng hòa và Chính phủ Cách mạng Lâm thời Cộng hòa miền Nam Việt Nam đều lên tiếng phản đối, khẳng định chủ quyền của Việt Nam và lập trường giải quyết tranh chấp bằng thương lượng hòa bình.',
        historicalSignificance:
          'Theo nguyên tắc cơ bản của Hiến chương Liên Hợp Quốc và luật pháp quốc tế hiện đại (nghiêm cấm sử dụng vũ lực để thôn tính lãnh thổ), việc sử dụng vũ lực quân sự năm 1974 hoàn toàn không thể tạo ra danh nghĩa chủ quyền hợp pháp đối với quần đảo Hoàng Sa của Việt Nam.',
        documentQuote:
          'Nguyên tắc pháp lý quốc tế hiện đại khẳng định: Hành vi chiếm đóng bằng vũ lực bất hợp pháp không bao giờ làm phát sinh chủ quyền lãnh thổ (Ex injuria jus non oritur).',
        image: '/assets/library/topic-phap-luat.svg',
        imageCaption:
          'Đồ họa minh họa nguyên tắc luật pháp quốc tế bác bỏ việc dùng vũ lực xâm chiếm lãnh thổ.',
        sourceName:
          'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao & Sách giáo khoa Lịch sử 11 (GDPT 2018)',
        verificationStatus: 'Đã kiểm chứng từ văn kiện Bộ Ngoại giao và sách giáo khoa'
      },
      {
        id: 'ms-504',
        eraId: 'era-5',
        timeDisplay: 'Từ ngày 14/4 đến ngày 29/4/1975',
        title:
          'Hải quân Nhân dân Việt Nam giải phóng các đảo thuộc Quần đảo Trường Sa trong Tổng tiến công và nổi dậy mùa Xuân 1975',
        category: 'Bảo vệ Toàn vẹn Lãnh thổ',
        historicalFact:
          'Thực hiện chỉ thị của Quân ủy Trung ương và Bộ Tổng Tư lệnh trong Chiến dịch Hồ Chí Minh lịch sử, từ ngày 14/4 đến ngày 29/4/1975, lực lượng Hải quân nhân dân Việt Nam (Đoàn 125 và Đoàn 126 đặc công Hải quân) phối hợp với lực lượng vũ trang Quân khu 5 đã thần tốc vượt biển, lần lượt giải phóng các đảo Song Tử Tây (14/4), Sơn Ca (25/4), Nam Yết (27/4), Sinh Tồn (28/4) và Trường Sa (29/4/1975).',
        historicalSignificance:
          'Việc kịp thời tiếp quản và giải phóng quần đảo Trường Sa vào tháng 4/1975 có ý nghĩa chiến lược to lớn, bảo vệ vững chắc chủ quyền thiêng liêng của Tổ quốc trên Biển Đông ngay trong thời khắc thống nhất đất nước.',
        documentQuote:
          'Lá cờ chiến thắng tung bay trên đảo Trường Sa ngày 29/4/1975 hòa chung niềm vui đại thắng mùa Xuân thống nhất non sông.',
        image: '/assets/exhibition/hall-nguoi-giu-bien.svg',
        imageCaption:
          'Đồ họa minh họa chiến công giải phóng và tiếp quản quần đảo Trường Sa tháng 4/1975.',
        sourceName:
          'Bộ Quốc phòng – Lịch sử Hải quân Nhân dân Việt Nam & SGK Lịch sử 11, 12',
        verificationStatus: 'Đã kiểm chứng từ lịch sử quân sự chính thống'
      }
    ]
  },
  {
    id: 'era-6',
    code: 'Giai đoạn 06',
    periodRange: 'Từ năm 1975 đến nay',
    title: 'Giai đoạn từ năm 1975 đến nay: Quản lý thống nhất, Luật Biển và Phát triển bền vững',
    subtitle:
      'Thành lập huyện đảo Hoàng Sa và Trường Sa, phê chuẩn UNCLOS 1982, thông qua Luật Biển Việt Nam 2012 và phát triển bền vững kinh tế biển',
    summary:
      'Nhà nước Cộng hòa Xã hội chủ nghĩa Việt Nam hoàn thiện hệ thống pháp luật biển đồng bộ với Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982), củng cố hành chính hai huyện đảo và kiên trì bảo vệ chủ quyền bằng biện pháp hòa bình.',
    milestones: [
      {
        id: 'ms-601',
        eraId: 'era-6',
        timeDisplay: 'Tháng 11 & Tháng 12 năm 1982',
        title:
          'Tuyên bố Đường cơ sở Lãnh hải Việt Nam (12/11/1982), ký UNCLOS 1982 (10/12/1982) và thành lập Huyện đảo Hoàng Sa, Huyện đảo Trường Sa',
        category: 'Pháp lý & Tổ chức Hành chính',
        historicalFact:
          'Ngày 12/11/1982, Chính phủ nước CHXHCN Việt Nam ra Tuyên bố về đường cơ sở dùng để tính chiều rộng lãnh hải trên vùng biển lục địa Việt Nam (nối 11 điểm chuẩn từ A1 đến A11). Ngày 10/12/1982, Việt Nam là một trong những quốc gia đầu tiên ký Công ước Liên Hợp Quốc về Luật Biển (UNCLOS 1982). Cùng tháng 12/1982, Hội đồng Bộ trưởng ban hành Quyết định số 193-HĐBT thành lập huyện Trường Sa (sau chuyển về tỉnh Phú Khánh / Khánh Hòa) và Quyết định số 194-HĐBT thành lập huyện Hoàng Sa (thuộc tỉnh Quảng Nam – Đà Nẵng, từ năm 1997 trực thuộc TP. Đà Nẵng).',
        historicalSignificance:
          'Đặt nền tảng pháp lý quốc gia và hành chính thống nhất cho việc quản lý các vùng biển, thềm lục địa cùng hai huyện đảo Hoàng Sa và Trường Sa của nước Việt Nam thống nhất.',
        documentQuote:
          'Quyết định số 193-HĐBT (09/12/1982) và Quyết định số 194-HĐBT (11/12/1982) chính thức thiết lập bộ máy hành chính cấp huyện cho Trường Sa và Hoàng Sa.',
        image: '/assets/ecosystem/ban-do-so.svg',
        imageCaption:
          'Đồ họa minh họa hệ thống đường cơ sở năm 1982 và hai huyện đảo Hoàng Sa, Trường Sa.',
        sourceName:
          'Cổng Thông tin điện tử Chính phủ & Sách giáo khoa Lịch sử 11 (GDPT 2018)',
        verificationStatus: 'Đã kiểm chứng từ văn bản quy phạm pháp luật chính thức'
      },
      {
        id: 'ms-602',
        eraId: 'era-6',
        timeDisplay: 'Tháng 3/1988 & Tháng 7/1989',
        title:
          'Chiến đấu bảo vệ chủ quyền tại Trường Sa (1988) và thành lập Cụm Trạm Kinh tế – Khoa học – Kỹ thuật Nhà giàn DK1 (1989)',
        category: 'Bảo vệ Chủ quyền & Thềm lục địa',
        historicalFact:
          'Tháng 3/1988, cán bộ, chiến sĩ Hải quân nhân dân Việt Nam đã anh dũng chiến đấu bảo vệ chủ quyền tại khu vực đảo Gạc Ma, Cô Lin, Len Đao thuộc quần đảo Trường Sa. Tiếp đó, ngày 05/7/1989, Chủ tịch Hội đồng Bộ trưởng ban hành Chỉ thị số 180/CT thành lập cụm Dịch vụ Kinh tế – Khoa học – Kỹ thuật (Nhà giàn DK1) trên các bãi cạn Tư Chính, Phúc Nguyên, Phúc Tần, Huyền Trân, Quế Đường, Ba Kè, Cà Mau thuộc thềm lục địa phía Nam.',
        historicalSignificance:
          'Khẳng định ý chí quyết tâm bảo vệ từng tấc đảo, từng sải biển thiêng liêng của Tổ quốc và thực thi quyền chủ quyền, quyền tài phán hợp pháp trên vùng thềm lục địa phía Nam.',
        documentQuote:
          'Hệ thống Nhà giàn DK1 từ năm 1989 đến nay là biểu tượng kiên cường nơi vùng biển thềm lục địa phía Nam của Tổ quốc.',
        image: '/assets/exhibition/hall-nguoi-giu-bien.svg',
        imageCaption:
          'Đồ họa minh họa cụm trạm Kinh tế – Khoa học – Kỹ thuật Nhà giàn DK1 trên thềm lục địa phía Nam.',
        sourceName:
          'Bộ Tư lệnh Hải quân & Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)',
        verificationStatus: 'Đã kiểm chứng từ tư liệu chính thống'
      },
      {
        id: 'ms-603',
        eraId: 'era-6',
        timeDisplay: 'Ngày 23/6/1994 & Ngày 11/4/2007',
        title:
          'Quốc hội phê chuẩn UNCLOS 1982 (1994) và Chính phủ ban hành Nghị định 65/2007/NĐ-CP thành lập Thị trấn Trường Sa, xã Song Tử Tây, xã Sinh Tồn',
        category: 'Luật pháp Quốc tế & Hành chính Đảo',
        historicalFact:
          'Ngày 23/6/1994, Quốc hội nước CHXHCN Việt Nam khóa IX thông qua Nghị quyết phê chuẩn Công ước của Liên Hợp Quốc về Luật Biển năm 1982 (trước khi Công ước có hiệu lực toàn cầu ngày 16/11/1994). Đến ngày 11/4/2007, Chính phủ ban hành Nghị định số 65/2007/NĐ-CP thành lập 3 đơn vị hành chính cấp xã thuộc huyện Trường Sa (tỉnh Khánh Hòa) gồm: Thị trấn Trường Sa, xã Song Tử Tây và xã Sinh Tồn.',
        historicalSignificance:
          'Gắn kết chặt chẽ việc thực thi pháp luật biển quốc tế (UNCLOS 1982) với việc kiện toàn hệ thống hành chính dân sự cấp xã, thị trấn trên quần đảo Trường Sa.',
        documentQuote:
          '"Quốc hội một lần nữa khẳng định chủ quyền của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa và chủ trương giải quyết các bất đồng liên quan đến Biển Đông thông qua thương lượng hòa bình..." (Nghị quyết Quốc hội ngày 23/6/1994).',
        image: '/assets/exhibition/hall-hoang-sa-truong-sa.svg',
        imageCaption:
          'Đồ họa minh họa diện mạo hành chính thị trấn Trường Sa và hai xã đảo Song Tử Tây, Sinh Tồn.',
        sourceName:
          'Văn phòng Quốc hội & Nghị định số 65/2007/NĐ-CP của Chính phủ',
        verificationStatus: 'Đã kiểm chứng từ văn bản pháp luật chính thức'
      },
      {
        id: 'ms-604',
        eraId: 'era-6',
        timeDisplay: 'Ngày 21/6/2012 (Hiệu lực từ 01/01/2013)',
        title:
          'Quốc hội khóa XIII thông qua Luật Biển Việt Nam (Luật số 18/2012/QH13)',
        category: 'Văn bản Luật Quốc gia Tối cao về Biển',
        historicalFact:
          'Ngày 21 tháng 6 năm 2012, Quốc hội khóa XIII thông qua Luật Biển Việt Nam gồm 7 chương, 55 điều (có hiệu lực thi hành từ ngày 01/01/2013). Luật quy định toàn diện về đường cơ sở, nội thủy, lãnh hải (12 hải lý), vùng tiếp giáp lãnh hải (12 hải lý), vùng đặc quyền kinh tế (200 hải lý), thềm lục địa, các đảo, quần đảo Hoàng Sa, quần đảo Trường Sa thuộc chủ quyền, quyền chủ quyền, quyền tài phán quốc gia của Việt Nam.',
        historicalSignificance:
          'Là mốc son lập pháp quan trọng bậc nhất trong lịch sử pháp luật biển Việt Nam, hoàn toàn phù hợp với UNCLOS 1982 và khẳng định nguyên tắc giải quyết tranh chấp bằng biện pháp hòa bình (Khoản 3 Điều 4).',
        documentQuote:
          '"Điều 1. Phạm vi điều chỉnh: Luật này quy định về đường cơ sở, nội thủy, lãnh hải, vùng tiếp giáp lãnh hải, vùng đặc quyền kinh tế, thềm lục địa, các đảo, quần đảo Hoàng Sa, quần đảo Trường Sa và quần đảo khác thuộc chủ quyền, quyền chủ quyền, quyền tài phán quốc gia của Việt Nam..." (Luật Biển Việt Nam 2012).',
        image: '/assets/library/topic-phap-luat.svg',
        imageCaption:
          'Đồ họa minh họa cấu trúc 5 vùng biển theo Luật Biển Việt Nam năm 2012 và UNCLOS 1982.',
        sourceName:
          'Luật Biển Việt Nam số 18/2012/QH13 – Cổng Thông tin điện tử Bộ Tư pháp',
        verificationStatus: 'Đã kiểm chứng từ văn bản Luật của Quốc hội'
      },
      {
        id: 'ms-605',
        eraId: 'era-6',
        timeDisplay: 'Năm 2014 & Năm 2018 đến nay',
        title:
          'UNESCO vinh danh Châu bản triều Nguyễn (2014) và Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn 2045 (Nghị quyết 36-NQ/TW năm 2018)',
        category: 'Di sản Tư liệu & Chiến lược Biển',
        historicalFact:
          'Tháng 5/2014, Chương trình Ký ức thế giới khu vực châu Á - Thái Bình Dương của UNESCO chính thức công nhận "Châu bản triều Nguyễn" (trong đó có các châu bản thực thi chủ quyền tại Hoàng Sa, Trường Sa) là Di sản tư liệu. Tháng 3/2018, Nhà Trưng bày Hoàng Sa tại Đà Nẵng được khánh thành. Ngày 22/10/2018, Ban Chấp hành Trung ương khóa XII ban hành Nghị quyết số 36-NQ/TW về Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045.',
        historicalSignificance:
          'Kết hợp chặt chẽ giữa việc bảo tồn, phát huy giá trị chứng cứ lịch sử – pháp lý cấp quốc tế với chiến lược đưa Việt Nam trở thành quốc gia mạnh về biển, giàu từ biển, bảo đảm vững chắc quốc phòng – an ninh và môi trường sinh thái biển.',
        documentQuote:
          '"Việt Nam phải trở thành quốc gia mạnh về biển, giàu từ biển, phát triển bền vững, thịnh vượng, an ninh và an toàn..." (Nghị quyết số 36-NQ/TW, 2018).',
        image: '/assets/exhibition/hall-tuoi-tre.svg',
        imageCaption:
          'Đồ họa minh họa định hướng phát triển bền vững kinh tế biển gắn với bảo vệ chủ quyền trong kỷ nguyên số.',
        sourceName:
          'Trung tâm Lưu trữ Quốc gia I & Nghị quyết số 36-NQ/TW ngày 22/10/2018',
        verificationStatus: 'Đã kiểm chứng từ hồ sơ UNESCO và văn kiện chính thức'
      }
    ]
  }
]
