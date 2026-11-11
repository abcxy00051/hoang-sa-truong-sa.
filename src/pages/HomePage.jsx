import React from 'react'
import { Link } from 'react-router-dom'
import {
  Layers,
  GraduationCap,
  ShieldCheck,
  Mail,
  ArrowRight,
  Award
} from 'lucide-react'
import HeroSection from '../components/HeroSection'

const PORTAL_SECTIONS = [
  {
    id: 'portal-about',
    badge: 'CHUYÊN TRANG 01',
    title: 'Giới thiệu Dự án Giáo dục Số',
    path: '/gioi-thieu',
    icon: Award,
    desc: 'Tìm hiểu tầm nhìn, sứ mệnh, 3 trụ cột cốt lõi, phương pháp sư phạm số chuẩn GDPT 2018 và hệ thống tư liệu chính thống của dự án.',
    cta: 'Xem trang Giới thiệu'
  },
  {
    id: 'portal-ecosystem',
    badge: 'CHUYÊN TRANG 02',
    title: 'Trung tâm Hệ sinh thái Số',
    path: '/he-sinh-thai-so',
    icon: Layers,
    desc: 'Không gian tích hợp 6 phân hệ công nghệ: Bản đồ số GIS, Thư viện tri thức, Trợ lý AI, Phòng học tương tác, Dòng thời gian lịch sử và Hồ sơ bản đồ.',
    cta: 'Vào Hệ sinh thái số'
  },
  {
    id: 'portal-audience',
    badge: 'CHUYÊN TRANG 03',
    title: 'Góc Học sinh & Giáo viên THPT',
    path: '/goc-hoc-sinh-giao-vien',
    icon: GraduationCap,
    desc: 'Lộ trình học tập phân hóa theo khối 10, 11, 12; kịch bản tổ chức tiết học liên môn 45 phút, ngoại khóa và kho tư liệu trình chiếu.',
    cta: 'Mở Góc Học sinh & Giáo viên'
  },
  {
    id: 'portal-sovereignty',
    badge: 'CHUYÊN TRANG 04',
    title: 'Cột mốc Chủ quyền & Lịch sử',
    path: '/cot-moc-chu-quyen',
    icon: ShieldCheck,
    desc: 'Trục thời gian tương tác chuyên sâu qua 6 thời kỳ lịch sử từ trước thế kỷ XVII, Đội Hoàng Sa, Châu bản triều Nguyễn đến UNCLOS 1982.',
    cta: 'Khám phá Cột mốc Chủ quyền'
  },
  {
    id: 'portal-contact',
    badge: 'CHUYÊN TRANG 05',
    title: 'Liên hệ & Hợp tác Giáo dục',
    path: '/lien-he',
    icon: Mail,
    desc: 'Kết nối với nhóm phát triển dự án KHKT, đóng góp tư liệu biển đảo và đăng ký triển khai mô hình học tập số tại trường THPT.',
    cta: 'Liên hệ ngay'
  }
]

export default function HomePage({
  onStartExplore,
  onNavigateFeature
}) {
  return (
    <div className="page-transition-wrapper">
      {/* 1. HERO BANNER */}
      <HeroSection
        onStartExplore={onStartExplore}
        onSelectFeature={onNavigateFeature}
      />

      {/* 2. CỔNG THÔNG TIN GIÁO DỤC BIỂN ĐẢO ĐA TRANG */}
      <section className="about-section home-portal-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">CỔNG THÔNG TIN GIÁO DỤC BIỂN ĐẢO ĐA TRANG</span>
            <h2 className="section-title">
              Khám phá Từng Chuyên mục Độc lập trong{' '}
              <span className="text-ocean">Không gian Số</span>
            </h2>
            <p className="section-subtitle">
              Website được tổ chức theo cấu trúc chuyên trang khoa học, giúp học sinh và giáo viên
              THPT truy cập trực tiếp từng lĩnh vực tri thức, học liệu, dòng thời gian lịch sử và
              công cụ tương tác.
            </p>
          </div>

          <div className="portal-directory-grid">
            {PORTAL_SECTIONS.map((item) => {
              const IconComp = item.icon
              return (
                <Link key={item.id} to={item.path} className="portal-directory-card">
                  <div className="portal-card-top">
                    <div className="pillar-icon-box">
                      <IconComp size={24} />
                    </div>
                    <span className="feature-badge">{item.badge}</span>
                  </div>
                  <h3 className="pillar-title">{item.title}</h3>
                  <p className="pillar-desc">{item.desc}</p>
                  <div className="portal-card-link">
                    <span>{item.cta}</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
