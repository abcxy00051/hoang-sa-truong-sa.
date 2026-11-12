import React, { useState } from 'react'
import {
  Map,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ShieldCheck,
  BookOpen,
  Compass,
  CheckCircle2,
  FileText,
  Layers,
  ExternalLink
} from 'lucide-react'

const CARTOGRAPHIC_CATEGORIES = [
  { id: 'all', label: 'Tất cả Hồ sơ Bản đồ (08)' },
  { id: 'vietnam-ancient', label: 'Bản đồ cổ Nhà nước Việt Nam' },
  { id: 'western-maps', label: 'Bản đồ & Hải đồ Phương Tây' },
  { id: 'qing-maps', label: 'Bản đồ cổ Trung Quốc (Đối chứng)' },
  { id: 'modern-legal', label: 'Bản đồ Pháp lý & Hành chính Hiện đại' }
]

const CARTOGRAPHIC_DOSSIERS = [
  {
    id: 'map-doc-01',
    code: 'HỒ SƠ BẢN ĐỒ #01',
    category: 'vietnam-ancient',
    period: 'Năm 1490 (Thế kỷ XV)',
    title: 'Hồng Đức bản đồ — Tập bản đồ Quốc gia thời Vua Lê Thánh Tông',
    origin: 'Triều đại nhà Lê sơ (Việt Nam)',
    toponyms: ['Bãi Cát Vàng', 'Cù lao Ré', 'Phủ Tư Nghĩa'],
    image: '/assets/timeline/era-01-truoc-tk17.svg?v=ocean3',
    cartographicFact:
      'Tập bản đồ địa lý hành chính quốc gia được biên绘 dưới triều vua Lê Thánh Tông (1490), tiếp nối bằng các truyền bản thế kỷ XVII ghi nhận vùng biển đảo ngoài khơi miền Trung gắn liền với hệ thống phòng thủ ven biển Đại Việt.',
    legalSignificance:
      'Khẳng định truyền thống quản lý cương vực lãnh thổ và vùng biển đảo của Nhà nước phong kiến Việt Nam từ thế kỷ XV.',
    sourceCitation:
      'Hồng Đức bản đồ (Tư liệu Hán Nôm lưu trữ tại Viện Nghiên cứu Hán Nôm & Thư viện Quốc gia Việt Nam).',
    sourceUrl: 'https://hannom.org.vn/'
  },
  {
    id: 'map-doc-02',
    code: 'HỒ SƠ BẢN ĐỒ #02',
    category: 'vietnam-ancient',
    period: 'Năm 1686 (Thế kỷ XVII)',
    title: 'Toản tập Thiên Nam tứ chí lộ đồ thư — Bản đồ Bãi Cát Vàng của Đỗ Bá Công Đạo',
    origin: 'Chúa Nguyễn (Đàng Trong — Việt Nam)',
    toponyms: ['Bãi Cát Vàng', 'Đội Hoàng Sa', 'Cửa Đại Chiêm', 'Cửa Sa Kỳ'],
    image: '/assets/timeline/era-02-tk17-18.svg?v=ocean3',
    cartographicFact:
      'Trong phần bản đồ phủ Quảng Ngãi thuộc "Toản tập Thiên Nam tứ chí lộ đồ thư" (1686), tác giả Đỗ Bá Công Đạo vẽ rõ "Bãi Cát Vàng" ngoài khơi và chú thích: "Giữa biển có một dải cát dài gọi là Bãi Cát Vàng, dài độ 400 dặm, rộng 20 dặm... Họ Nguyễn mỗi năm vào tháng cuối mùa đông đưa 18 chiếc thuyền đến đấy lấy hóa vật".',
    legalSignificance:
      'Tư liệu bản đồ kèm chú giải chữ Hán thế kỷ XVII xác nhận vị trí địa lý, quy mô 18 chiếc thuyền và hoạt động thường niên của đội Hoàng Sa dưới sự quản lý nhà nước của chúa Nguyễn.',
    sourceCitation:
      'Đỗ Bá Công Đạo (1686), Toản tập Thiên Nam tứ chí lộ đồ thư — Ủy ban Biên giới Quốc gia (Bộ Ngoại giao).',
    sourceUrl: 'https://biengioilanhtho.gov.vn/vi/chu-quyen-bien-dao.html'
  },
  {
    id: 'map-doc-03',
    code: 'HỒ SƠ BẢN ĐỒ #03',
    category: 'vietnam-ancient',
    period: 'Khoảng năm 1838 (Triều Vua Minh Mạng)',
    title: 'Đại Nam nhất thống toàn đồ — Bản đồ Quốc gia Triều Nguyễn',
    origin: 'Triều Nguyễn (Quốc sử quán / Nội các triều Nguyễn)',
    toponyms: ['Hoàng Sa', 'Vạn Lý Trường Sa', 'Đảo Lý Sơn'],
    image: '/assets/timeline/era-03-thoi-nguyen.svg?v=ocean3',
    cartographicFact:
      'Bản đồ hành chính toàn quốc của triều Nguyễn vẽ rõ hai địa danh "Hoàng Sa" và "Vạn Lý Trường Sa" nằm trong vùng biển thuộc chủ quyền của nước Đại Nam, tách biệt hoàn toàn với vùng biển đảo Hải Nam.',
    legalSignificance:
      'Minh chứng bản đồ chính thức của Nhà nước quân chủ Việt Nam thể hiện Hoàng Sa và Trường Sa là bộ phận không thể tách rời của lãnh thổ Đại Nam.',
    sourceCitation:
      'Đại Nam nhất thống toàn đồ (khoảng năm 1838) — Bảo tàng Lịch sử Quốc gia Việt Nam & Trung tâm Lưu trữ Quốc gia I.',
    sourceUrl: 'https://archives.org.vn/index.php/vi/chau-ban-trieu-nguyen/'
  },
  {
    id: 'map-doc-04',
    code: 'HỒ SƠ BẢN ĐỒ #04',
    category: 'western-maps',
    period: 'Thế kỷ XVI – XVII',
    title: 'Hải đồ Hàng hải Bồ Đào Nha & Hà Lan ghi nhận "Costa de Pracel" và "I. de Pracel"',
    origin: 'Các nhà bản đồ học phương Tây (Fernão Vaz Dourado, Van Langren, Willem Blaeu)',
    toponyms: ['I. de Pracel', 'Costa de Pracel', 'C. Varella', 'Pulo Canton'],
    image: '/assets/library/bai-16-kiem-chung-ban-do-so.svg?v=ocean3',
    cartographicFact:
      'Các bản đồ hàng hải châu Âu thế kỷ XVI–XVII vẽ quần đảo ngoài khơi miền Trung Việt Nam với tên gọi "I. de Pracel" (Quần đảo Hoàng Sa – Trường Sa) và đồng thời gọi vùng bờ biển miền Trung Việt Nam đối diện là "Costa de Pracel" (Bờ biển Hoàng Sa).',
    legalSignificance:
      'Sự tương ứng địa danh "Pracel" giữa quần đảo ngoài khơi và bờ biển miền Trung Việt Nam trên bản đồ phương Tây độc lập chứng tỏ các nhà hàng hải quốc tế từ thế kỷ XVI đã thừa nhận mối liên hệ địa lý – lịch sử hữu cơ giữa quần đảo này với Việt Nam.',
    sourceCitation:
      'Bộ sưu tập bản đồ cổ phương Tây về chủ quyền Hoàng Sa – Trường Sa, Nhà Trưng bày Hoàng Sa (TP. Đà Nẵng).',
    sourceUrl: 'https://hoangsa.danang.gov.vn/'
  },
  {
    id: 'map-doc-05',
    code: 'HỒ SƠ BẢN ĐỒ #05',
    category: 'western-maps',
    period: 'Năm 1838 (Xuất bản tại Calcutta)',
    title: 'An Nam đại quốc họa đồ (Tabula Geographica Imperii Anamitici) — Giám mục Jean-Louis Taberd',
    origin: 'Giám mục Jean-Louis Taberd (Pháp)',
    toponyms: ['Paracel seu Cát Vàng', 'Imperium Anamiticum'],
    image: '/assets/ecosystem/ho-so-ban-do.svg?v=ocean3',
    cartographicFact:
      'Bản đồ thể hiện lãnh thổ Đế chế An Nam năm 1838, tại khu vực vĩ độ 16°–17° Bắc và kinh độ 111°–112° Đông vẽ cụm đảo kèm dòng chữ Latinh và chữ Quốc ngữ: "Paracel seu Cát Vàng" (nghĩa là Paracel hay Cát Vàng thuộc An Nam).',
    legalSignificance:
      'Bằng chứng bản đồ phương Tây thế kỷ XIX xác nhận trực tiếp địa danh phương Tây "Paracel" chính là "Cát Vàng" (Hoàng Sa) thuộc chủ quyền của Việt Nam.',
    sourceCitation:
      'Jean-Louis Taberd (1838), Tabula Geographica Imperii Anamitici & Tập san Hội Châu Á Hoàng gia tại Bengal (1837).',
    sourceUrl: 'https://baochinhphu.vn/bien-dao-viet-nam.html'
  },
  {
    id: 'map-doc-06',
    code: 'HỒ SƠ BẢN ĐỒ #06',
    category: 'qing-maps',
    period: 'Năm 1904 & 1908 (Cuối triều Thanh)',
    title: 'Hoàng triều trực tỉnh địa dư toàn đồ (1904) & Trung Quốc địa đồ (1908)',
    origin: 'Bản đồ chính thức xuất bản tại Trung Quốc thời nhà Thanh',
    toponyms: ['Đảo Hải Nam (Châu Nhai — 18°10′B)', 'Cực Nam lãnh thổ nhà Thanh'],
    image: '/assets/library/bai-04-thuc-thi-chu-quyen.svg?v=ocean3',
    cartographicFact:
      'Các tập bản đồ chính thống của nhà Thanh như "Hoàng triều trực tỉnh địa dư toàn đồ" (1904) và "Trung Quốc địa đồ" (1908) đều thể hiện cực Nam của lãnh thổ Trung Quốc dừng lại ở đảo Hải Nam (khoảng vĩ độ 18°10′ Bắc), hoàn toàn không bao gồm hai quần đảo Hoàng Sa và Trường Sa.',
    legalSignificance:
      'Tư liệu bản đồ đối chứng khách quan chứng minh cho đến đầu thế kỷ XX, chính các bản đồ chính thống của Trung Quốc cũng xác nhận cương vực cực Nam của họ chỉ dừng ở đảo Hải Nam.',
    sourceCitation:
      'Hoàng triều trực tỉnh địa dư toàn đồ (1904) — Trưng bày tại Triển lãm Bản đồ và Tư liệu "Hoàng Sa, Trường Sa của Việt Nam — Những bằng chứng lịch sử và pháp lý".',
    sourceUrl: 'https://hoangsa.danang.gov.vn/'
  },
  {
    id: 'map-doc-07',
    code: 'HỒ SƠ BẢN ĐỒ #07',
    category: 'modern-legal',
    period: 'Ngày 12/11/1982 & Luật Biển Việt Nam 2012',
    title: 'Sơ đồ Hệ thống Đường cơ sở thẳng ven bờ lục địa Việt Nam (11 điểm A1 – A11)',
    origin: 'Chính phủ nước Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    toponyms: ['A1 (Hòn Nhạn)', 'A6 (Hòn Hải)', 'A8 (Mũi Đại Lãnh)', 'A11 (Đảo Cồn Cỏ)'],
    image: '/assets/library/bai-02-5-vung-bien.svg?v=ocean3',
    cartographicFact:
      'Hệ thống đường cơ sở thẳng dùng để tính chiều rộng lãnh hải ven bờ lục địa Việt Nam gồm 10 đoạn thẳng nối 11 điểm chuẩn từ điểm A1 (tại đảo Hòn Nhạn, quần đảo Thổ Chu, tỉnh Kiên Giang) đến điểm A11 (tại đảo Cồn Cỏ, tỉnh Quảng Trị).',
    legalSignificance:
      'Là ranh giới phía trong của lãnh hải và ranh giới phía ngoài của nội thủy, làm căn cứ pháp lý quốc tế để xác định Lãnh hải 12 hải lý, Vùng tiếp giáp lãnh hải 24 hải lý, Vùng đặc quyền kinh tế 200 hải lý và Thềm lục địa Việt Nam theo UNCLOS 1982.',
    sourceCitation:
      'Tuyên bố của Chính phủ nước CHXHCN Việt Nam ngày 12/11/1982 & Luật Biển Việt Nam số 18/2012/QH13.',
    sourceUrl: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=27694'
  },
  {
    id: 'map-doc-08',
    code: 'HỒ SƠ BẢN ĐỒ #08',
    category: 'modern-legal',
    period: 'Hiện hành (Chuẩn GDPT 2018)',
    title: 'Hồ sơ Bản đồ Hành chính Huyện Hoàng Sa (TP. Đà Nẵng) & Huyện Trường Sa (Tỉnh Khánh Hòa)',
    origin: 'Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam',
    toponyms: ['Huyện Hoàng Sa (Đà Nẵng)', 'Huyện Trường Sa (Khánh Hòa)', 'Thị trấn Trường Sa', 'Xã Song Tử Tây', 'Xã Sinh Tồn'],
    image: '/assets/timeline/era-06-1975-nay.svg?v=ocean3',
    cartographicFact:
      'Thể hiện đầy đủ ranh giới hành chính quốc gia trên đất liền và trên biển, trong đó huyện Hoàng Sa trực thuộc thành phố Đà Nẵng và huyện Trường Sa (gồm thị trấn Trường Sa, xã đảo Song Tử Tây, xã đảo Sinh Tồn) trực thuộc tỉnh Khánh Hòa.',
    legalSignificance:
      'Chuẩn mực bắt buộc trong xuất bản bản đồ hành chính, sách giáo khoa và học liệu giáo dục tại Việt Nam: mọi bản đồ Việt Nam phải thể hiện đầy đủ hai quần đảo Hoàng Sa và Trường Sa.',
    sourceCitation:
      'Luật Đo đạc và Bản đồ năm 2018 (Điều 6) & Nghị định số 65/2007/NĐ-CP của Chính phủ.',
    sourceUrl: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=15066'
  }
]

export default function CartographicDossierModule({ activeRole = 'student', onNavigateFeature }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDossierId, setSelectedDossierId] = useState(CARTOGRAPHIC_DOSSIERS[0].id)
  const [zoomScale, setZoomScale] = useState(1)

  const filteredDossiers = CARTOGRAPHIC_DOSSIERS.filter((item) => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory
    const q = searchQuery.trim().toLowerCase()
    const matchSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.period.toLowerCase().includes(q) ||
      item.toponyms.some((t) => t.toLowerCase().includes(q)) ||
      item.cartographicFact.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  const activeDossier =
    CARTOGRAPHIC_DOSSIERS.find((d) => d.id === selectedDossierId) ||
    filteredDossiers[0] ||
    CARTOGRAPHIC_DOSSIERS[0]

  return (
    <div className="atlas-dossier-module">
      {/* Filter & Search Header */}
      <div className="atlas-toolbar">
        <div className="atlas-cat-pills" role="tablist" aria-label="Phân loại hồ sơ bản đồ">
          {CARTOGRAPHIC_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`atlas-cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="atlas-search-wrap">
          <Search size={16} className="atlas-search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm tên bản đồ, Bãi Cát Vàng, Paracel, năm 1838..."
            aria-label="Tìm kiếm hồ sơ bản đồ"
          />
        </div>
      </div>

      {/* Main Split View: Catalog List Left + Map Loupe Inspector Right */}
      <div className="atlas-workspace-grid">
        {/* Left: Dossier List */}
        <div className="atlas-dossier-list">
          {filteredDossiers.map((dossier) => {
            const isSelected = dossier.id === activeDossier.id
            return (
              <article
                key={dossier.id}
                className={`atlas-dossier-item ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  setSelectedDossierId(dossier.id)
                  setZoomScale(1)
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSelectedDossierId(dossier.id)
                    setZoomScale(1)
                  }
                }}
              >
                <div className="atlas-item-top">
                  <span className="atlas-item-code">{dossier.code}</span>
                  <span className="atlas-item-period">{dossier.period}</span>
                </div>
                <h4>{dossier.title}</h4>
                <p className="atlas-item-origin">{dossier.origin}</p>
                <div className="atlas-toponym-row">
                  {dossier.toponyms.map((t, i) => (
                    <span key={i} className="atlas-toponym-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        {/* Right: Detailed Cartographic Dossier Inspector */}
        <div className="atlas-inspector-panel">
          <div className="atlas-inspector-visual">
            <div className="atlas-visual-toolbar">
              <span className="atlas-visual-tag">
                <FileText size={14} /> {activeDossier.code} • {activeDossier.period}
              </span>
              <div className="atlas-zoom-controls">
                <button
                  type="button"
                  onClick={() => setZoomScale((z) => Math.min(2, +(z + 0.25).toFixed(2)))}
                  title="Phóng to bản đồ"
                >
                  <ZoomIn size={15} />
                </button>
                <span>{Math.round(zoomScale * 100)}%</span>
                <button
                  type="button"
                  onClick={() => setZoomScale((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
                  title="Thu nhỏ"
                >
                  <ZoomOut size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomScale(1)}
                  title="Mặc định 100%"
                >
                  <RotateCcw size={15} />
                </button>
              </div>
            </div>

            <div className="atlas-visual-canvas">
              <img
                src={activeDossier.image}
                alt={activeDossier.title}
                style={{ transform: `scale(${zoomScale})` }}
              />
            </div>
          </div>

          <div className="atlas-inspector-body">
            <h3>{activeDossier.title}</h3>
            <p className="atlas-origin-subtitle">
              <strong>Đơn vị / Tác giả lập bản đồ:</strong> {activeDossier.origin}
            </p>

            <div className="atlas-toponym-box">
              <strong>Địa danh ghi nhận trên bản đồ:</strong>
              <div className="atlas-toponym-row">
                {activeDossier.toponyms.map((t, idx) => (
                  <span key={idx} className="atlas-toponym-chip highlight">
                    <CheckCircle2 size={13} /> {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="atlas-analysis-grid">
              <div className="atlas-analysis-card fact">
                <h5>1. Nội dung &amp; Đặc điểm Bản đồ học</h5>
                <p>{activeDossier.cartographicFact}</p>
              </div>
              <div className="atlas-analysis-card legal">
                <h5>2. Giá trị Lịch sử – Pháp lý</h5>
                <p>{activeDossier.legalSignificance}</p>
              </div>
            </div>

            <div className="atlas-source-footer">
              <ShieldCheck size={18} className="atlas-source-icon" />
              <div>
                <strong>Nguồn lưu trữ &amp; Tham khảo kiểm chứng:</strong>
                <p>{activeDossier.sourceCitation}</p>
                {activeDossier.sourceUrl && (
                  <a
                    href={activeDossier.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atlas-source-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: '#38bdf8',
                      textDecoration: 'underline'
                    }}
                  >
                    <ExternalLink size={14} />
                    <span>Tra cứu nguồn chính thống: {activeDossier.sourceUrl}</span>
                  </a>
                )}
              </div>
            </div>

            {onNavigateFeature && (
              <div className="atlas-action-links">
                <button
                  type="button"
                  className="btn-primary-gold"
                  onClick={() => onNavigateFeature('ban-do-so')}
                >
                  <Map size={17} />
                  <span>Đối chiếu trên Bản đồ số GIS</span>
                </button>
                <button
                  type="button"
                  className="atlas-secondary-btn"
                  onClick={() => onNavigateFeature('dong-thoi-gian-lich-su')}
                >
                  <Compass size={17} />
                  <span>Xem Dòng thời gian Lịch sử</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
