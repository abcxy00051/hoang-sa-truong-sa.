/**
 * DỮ LIỆU HOẠT ĐỘNG TƯƠNG TÁC: CÂU HỎI ĐÚNG / SAI CÓ GIẢI THÍCH
 * Mỗi nhận định gắn với một chuyên đề cụ thể, cấp độ khó, đáp án boolean (true/false),
 * giải thích chi tiết lý do Đúng hoặc Sai và nguồn tham khảo chính thống.
 */

export const TRUE_FALSE_QUESTIONS = [
  {
    id: 'tf-01',
    topicId: 'cd-1',
    topicTitle: 'Tổng quan biển đảo Việt Nam',
    difficulty: 'easy',
    statement:
      'Đường bờ biển của đất liền Việt Nam dài khoảng 3.260 km, kéo dài từ tỉnh Quảng Ninh đến tỉnh Kiên Giang.',
    isTrue: true,
    explanation:
      'ĐÚNG. Đường bờ biển Việt Nam dài khoảng 3.260 km từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang).',
    source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
  },
  {
    id: 'tf-02',
    topicId: 'cd-1',
    topicTitle: 'Tổng quan biển đảo Việt Nam',
    difficulty: 'medium',
    statement:
      'Đảo Cát Bà (Hải Phòng) là đảo có diện tích tự nhiên lớn nhất trong hệ thống các đảo của Việt Nam.',
    isTrue: false,
    explanation:
      'SAI. Đảo có diện tích tự nhiên lớn nhất Việt Nam là đảo Phú Quốc (tỉnh Kiên Giang, diện tích khoảng 574 km²), không phải đảo Cát Bà.',
    source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
  },
  {
    id: 'tf-03',
    topicId: 'cd-2',
    topicTitle: 'Vị trí địa lý & tự nhiên Hoàng Sa, Trường Sa',
    difficulty: 'easy',
    statement:
      'Về mặt hành chính nhà nước hiện nay, huyện đảo Hoàng Sa trực thuộc thành phố Đà Nẵng, còn huyện đảo Trường Sa trực thuộc tỉnh Khánh Hòa.',
    isTrue: true,
    explanation:
      'ĐÚNG. Huyện Hoàng Sa trực thuộc thành phố Đà Nẵng và huyện Trường Sa trực thuộc tỉnh Khánh Hòa.',
    source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
  },
  {
    id: 'tf-04',
    topicId: 'cd-2',
    topicTitle: 'Vị trí địa lý & tự nhiên Hoàng Sa, Trường Sa',
    difficulty: 'medium',
    statement:
      'Quần đảo Hoàng Sa nằm ở vĩ độ thấp hơn (gần đường xích đạo hơn) so với quần đảo Trường Sa.',
    isTrue: false,
    explanation:
      'SAI. Quần đảo Hoàng Sa nằm ở phía Bắc (khoảng 15°45’B – 17°15’B), còn quần đảo Trường Sa nằm ở phía Nam (khoảng 6°30’B – 12°00’B) nên Trường Sa mới là quần đảo nằm ở vĩ độ thấp hơn (gần xích đạo hơn).',
    source: 'Sách giáo khoa Địa lý 12 & Lịch sử 11 (Chương trình GDPT 2018)'
  },
  {
    id: 'tf-05',
    topicId: 'cd-3',
    topicTitle: 'Lịch sử xác lập và thực thi chủ quyền',
    difficulty: 'easy',
    statement:
      'Từ nửa đầu thế kỷ XVII, chính quyền chúa Nguyễn ở Đàng Trong đã thành lập đội Hoàng Sa và đội Bắc Hải để khai thác sản vật và thực thi chủ quyền tại Hoàng Sa, Trường Sa.',
    isTrue: true,
    explanation:
      'ĐÚNG. Đội Hoàng Sa và đội Bắc Hải là hai tổ chức dân binh đặc biệt do nhà nước chúa Nguyễn thành lập và quản lý để thực thi chủ quyền liên tục hàng năm trên hai quần đảo.',
    source: 'Lê Quý Đôn – Phủ biên tạp lục (1776) & SGK Lịch sử 11'
  },
  {
    id: 'tf-06',
    topicId: 'cd-3',
    topicTitle: 'Lịch sử xác lập và thực thi chủ quyền',
    difficulty: 'hard',
    statement:
      'Dưới thời vua Minh Mạng, triều đình nhà Nguyễn chỉ cho dân binh tự đi đánh cá ở Hoàng Sa chứ chưa từng cử Thủy quân triều đình ra đo đạc, vẽ bản đồ hay dựng bia chủ quyền.',
    isTrue: false,
    explanation:
      'SAI. Dưới thời vua Minh Mạng (đặc biệt các năm 1833–1838), nhà vua liên tục ban chỉ dụ cử Thủy quân, Giám thành cùng đội Hoàng Sa ra đo đạc thủy trình, vẽ bản đồ chi tiết, dựng miếu, lập bia gỗ và trồng cây trên các đảo thuộc Hoàng Sa.',
    source: 'Châu bản triều Nguyễn – Trung tâm Lưu trữ Quốc gia I'
  },
  {
    id: 'tf-07',
    topicId: 'cd-4',
    topicTitle: 'Cơ sở lịch sử và pháp lý về biển đảo',
    difficulty: 'medium',
    statement:
      'Tác phẩm "Phủ biên tạp lục" (biên soạn năm 1776) ghi chép tỉ mỉ về địa lý, sản vật của Hoàng Sa và hoạt động của đội Hoàng Sa, đội Bắc Hải là của nhà bác học Lê Quý Đôn.',
    isTrue: true,
    explanation:
      'ĐÚNG. "Phủ biên tạp lục" do nhà bác học Lê Quý Đôn biên soạn năm 1776 tại Thuận Hóa là một trong những sử liệu quý giá và chi tiết nhất về Hoàng Sa, Trường Sa thế kỷ XVIII.',
    source: 'Sách giáo khoa Lịch sử 11 (Chương trình GDPT 2018)'
  },
  {
    id: 'tf-08',
    topicId: 'cd-4',
    topicTitle: 'Cơ sở lịch sử và pháp lý về biển đảo',
    difficulty: 'hard',
    statement:
      'Theo luật pháp quốc tế, chỉ cần một tàu buôn tư nhân đi ngang qua nhìn thấy một hòn đảo từ xa mà không có hành vi quản lý nhà nước thì quốc gia đó đã có chủ quyền hợp pháp.',
    isTrue: false,
    explanation:
      'SAI. Theo luật pháp quốc tế về thụ đắc lãnh thổ (nguyên tắc Chiếm hữu thực sự – Effective Occupation), việc xác lập chủ quyền hợp pháp phải được thực hiện dưới danh nghĩa Nhà nước một cách hòa bình, liên tục và thực tế, không thể chỉ dựa vào việc phát hiện bằng mắt thường của tư nhân.',
    source: 'Ủy ban Biên giới Quốc gia – Bộ Ngoại giao'
  },
  {
    id: 'tf-09',
    topicId: 'cd-5',
    topicTitle: 'Công ước Liên Hợp Quốc về Luật Biển 1982',
    difficulty: 'easy',
    statement:
      'Theo UNCLOS 1982 và Luật Biển Việt Nam năm 2012, Lãnh hải có chiều rộng 12 hải lý tính từ đường cơ sở ra phía biển, và ranh giới ngoài của lãnh hải chính là biên giới quốc gia trên biển.',
    isTrue: true,
    explanation:
      'ĐÚNG. Điều 11 Luật Biển Việt Nam năm 2012 quy định rõ lãnh hải rộng 12 hải lý tính từ đường cơ sở và ranh giới ngoài của lãnh hải là biên giới quốc gia trên biển của Việt Nam.',
    source: 'Điều 11 Luật Biển Việt Nam năm 2012 & Điều 3 UNCLOS 1982'
  },
  {
    id: 'tf-10',
    topicId: 'cd-5',
    topicTitle: 'Công ước Liên Hợp Quốc về Luật Biển 1982',
    difficulty: 'medium',
    statement:
      'Trong Vùng đặc quyền kinh tế (200 hải lý), quốc gia ven biển có chủ quyền tuyệt đối như đất liền nên tàu thuyền và máy bay nước ngoài bị cấm hoàn toàn quyền tự do hàng hải, hàng không.',
    isTrue: false,
    explanation:
      'SAI. Trong Vùng đặc quyền kinh tế (EEZ), quốc gia ven biển thực hiện Quyền chủ quyền về kinh tế/tài nguyên và Quyền tài phán theo quy định của UNCLOS 1982, đồng thời tôn trọng quyền tự do hàng hải, tự do hàng không hợp pháp của các quốc gia khác.',
    source: 'Điều 16 Luật Biển Việt Nam năm 2012 & Điều 56, 58 UNCLOS 1982'
  },
  {
    id: 'tf-11',
    topicId: 'cd-5',
    topicTitle: 'Công ước Liên Hợp Quốc về Luật Biển 1982',
    difficulty: 'hard',
    statement:
      'Theo Điều 23 Luật Biển Việt Nam năm 2012 và Điều 20 UNCLOS 1982, tàu ngầm nước ngoài khi thực hiện quyền đi qua không gây hại trong lãnh hải Việt Nam bắt buộc phải đi nổi và treo cờ quốc tịch.',
    isTrue: true,
    explanation:
      'ĐÚNG. Để bảo đảm nguyên tắc đi qua không gây hại trong lãnh hải, mọi tàu ngầm và các phương tiện đi ngầm nước ngoài bắt buộc phải hoạt động ở trạng thái nổi trên mặt nước và treo cờ quốc tịch.',
    source: 'Điều 23 Luật Biển Việt Nam năm 2012 & Điều 20 UNCLOS 1982'
  },
  {
    id: 'tf-12',
    topicId: 'cd-6',
    topicTitle: 'Vai trò kinh tế, quốc phòng và an ninh',
    difficulty: 'easy',
    statement:
      'Ngư trường quần đảo Hoàng Sa – quần đảo Trường Sa là một trong 4 ngư trường trọng điểm lớn nhất của Việt Nam.',
    isTrue: true,
    explanation:
      'ĐÚNG. Bốn ngư trường trọng điểm của nước ta gồm: Hải Phòng – Quảng Ninh; Ninh Thuận – Bình Thuận – Bà Rịa – Vũng Tàu; Cà Mau – Kiên Giang; và Quần đảo Hoàng Sa – Quần đảo Trường Sa.',
    source: 'Sách giáo khoa Địa lý 12 (Chương trình GDPT 2018)'
  },
  {
    id: 'tf-13',
    topicId: 'cd-6',
    topicTitle: 'Vai trò kinh tế, quốc phòng và an ninh',
    difficulty: 'medium',
    statement:
      'Hệ thống Nhà giàn DK1 của Việt Nam được xây dựng tại vùng biển Vịnh Bắc Bộ thuộc tỉnh Quảng Ninh.',
    isTrue: false,
    explanation:
      'SAI. Hệ thống Nhà giàn DK1 (Trạm dịch vụ kinh tế – khoa học – kỹ thuật) được xây dựng từ năm 1989 trên các bãi cạn thuộc vùng thềm lục địa phía Nam của Tổ quốc (như Tư Chính, Phúc Nguyên, Phúc Tần, Huyền Trân, Ba Kè...).',
    source: 'Bộ Tư lệnh Vùng 2 Hải quân'
  },
  {
    id: 'tf-14',
    topicId: 'cd-7',
    topicTitle: 'Bảo vệ tài nguyên và môi trường biển',
    difficulty: 'easy',
    statement:
      'Rừng ngập mặn ven biển có tác dụng chắn sóng, chống xói lở bờ biển, là nơi sinh sản của nhiều loài thủy sản và hấp thụ lượng lớn khí nhà kính CO₂.',
    isTrue: true,
    explanation:
      'ĐÚNG. Hệ sinh thái rừng ngập mặn là lá chắn tự nhiên bảo vệ đê biển, nuôi dưỡng nguồn lợi thủy sản và là bể chứa "Carbon xanh" (Blue Carbon) quan trọng.',
    source: 'Bộ Tài nguyên và Môi trường'
  },
  {
    id: 'tf-15',
    topicId: 'cd-7',
    topicTitle: 'Bảo vệ tài nguyên và môi trường biển',
    difficulty: 'medium',
    statement:
      'Luật Thủy sản năm 2017 cho phép ngư dân sử dụng chất nổ và xung điện để đánh bắt cá ở các vùng biển xa bờ nhằm tăng năng suất.',
    isTrue: false,
    explanation:
      'SAI. Điều 7 Luật Thủy sản năm 2017 nghiêm cấm tuyệt đối hành vi sử dụng chất nổ, xung điện, chất độc hại để khai thác thủy sản ở bất kỳ vùng biển nào vì gây tận diệt nguồn lợi sinh vật và phá hủy rạn san hô.',
    source: 'Điều 7 Luật Thủy sản năm 2017'
  },
  {
    id: 'tf-16',
    topicId: 'cd-8',
    topicTitle: 'Trách nhiệm của thanh niên đối với biển đảo',
    difficulty: 'easy',
    statement:
      'Khi làm bài thuyết trình hoặc sản phẩm truyền thông có bản đồ Việt Nam, học sinh THPT bắt buộc phải kiểm tra để bản đồ thể hiện đầy đủ hai quần đảo Hoàng Sa và Trường Sa.',
    isTrue: true,
    explanation:
      'ĐÚNG. Việc sử dụng bản đồ chuẩn thể hiện đầy đủ hai quần đảo Hoàng Sa và Trường Sa vừa là trách nhiệm công dân vừa tuân thủ quy định của Luật Đo đạc và Bản đồ năm 2018.',
    source: 'Luật Đo đạc và Bản đồ năm 2018'
  }
]
