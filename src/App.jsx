import React, { useState, useEffect } from 'react'
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InteractivePreviewModal from './components/InteractivePreviewModal'
import CozeFloatingChatbot from './components/CozeFloatingChatbot'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EcosystemPage from './pages/EcosystemPage'
import StudentTeacherPage from './pages/StudentTeacherPage'
import SovereigntyPage from './pages/SovereigntyPage'
import ContactPage from './pages/ContactPage'
import FeatureDetailPage from './pages/FeatureDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import { FEATURES_DATA, getFeatureRoutePath } from './data/homeData'

function DynamicFeatureRoute({
  activeRole,
  onRoleChange,
  onNavigateFeature,
  onBackEcosystem,
  onBackHome
}) {
  const { featureId } = useParams()
  const normalized =
    featureId === 'khong-gian-kham-pha' ? 'trien-lam-so' : featureId
  const exists = FEATURES_DATA.some((f) => f.id === normalized)
  if (!exists) {
    return <NotFoundPage />
  }
  return (
    <FeatureDetailPage
      featureId={normalized}
      activeRole={activeRole}
      onRoleChange={onRoleChange}
      onNavigateFeature={onNavigateFeature}
      onBackEcosystem={onBackEcosystem}
      onBackHome={onBackHome}
    />
  )
}

export default function App() {
  const [activeRole, setActiveRole] = useState('student')
  const [selectedFeatureId, setSelectedFeatureId] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Cuộn mượt lên đầu trang khi chuyển đường dẫn (Multi-page navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  // Tương thích ngược nếu người dùng mở link hash cũ (#he-sinh-thai-so, #he-sinh-thai/...)
  useEffect(() => {
    const cleanHash = (window.location.hash || '').replace(/^#/, '')
    if (!cleanHash) return
    if (cleanHash === 'he-sinh-thai-so') {
      navigate('/he-sinh-thai-so', { replace: true })
    } else if (cleanHash === 'gioi-thieu') {
      navigate('/gioi-thieu', { replace: true })
    } else if (cleanHash === 'doi-tuong') {
      navigate('/goc-hoc-sinh-giao-vien', { replace: true })
    } else if (cleanHash === 'cot-moc') {
      navigate('/cot-moc-chu-quyen', { replace: true })
    } else if (cleanHash.startsWith('he-sinh-thai/')) {
      const rawId = cleanHash.replace('he-sinh-thai/', '')
      navigate(getFeatureRoutePath(rawId), { replace: true })
    }
  }, [navigate])

  const openEcosystemPage = () => {
    navigate('/he-sinh-thai-so')
  }

  const navigateToFeaturePage = (featureId) => {
    const path = getFeatureRoutePath(featureId)
    navigate(path)
  }

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div className="app-wrapper">
      <Navbar
        activeRole={activeRole}
        onRoleChange={setActiveRole}
      />

      <main key={location.pathname} className="multi-page-main">
        <Routes>
          {/* I. CÁC TRANG CHÍNH ĐỘC LẬP */}
          <Route
            path="/"
            element={
              <HomePage
                onStartExplore={openEcosystemPage}
                onSelectFeature={(id) => setSelectedFeatureId(id)}
                onNavigateFeature={navigateToFeaturePage}
              />
            }
          />

          <Route path="/gioi-thieu" element={<AboutPage />} />

          <Route
            path="/he-sinh-thai-so"
            element={
              <EcosystemPage
                activeRole={activeRole}
                onRoleChange={setActiveRole}
                onNavigateFeature={navigateToFeaturePage}
                onQuickPreview={(id) => setSelectedFeatureId(id)}
                onBackHome={navigateToHome}
              />
            }
          />

          <Route
            path="/goc-hoc-sinh-giao-vien"
            element={
              <StudentTeacherPage
                activeRole={activeRole}
                onRoleChange={setActiveRole}
              />
            }
          />

          <Route
            path="/cot-moc-chu-quyen"
            element={
              <SovereigntyPage
                activeRole={activeRole}
                onNavigateFeature={navigateToFeaturePage}
              />
            }
          />

          <Route path="/lien-he" element={<ContactPage />} />

          {/* II. CÁC TRANG CON TRONG HỆ SINH THÁI SỐ */}
          <Route
            path="/ban-do-so"
            element={
              <FeatureDetailPage
                featureId="ban-do-so"
                activeRole={activeRole}
                onRoleChange={setActiveRole}
                onNavigateFeature={navigateToFeaturePage}
                onBackEcosystem={openEcosystemPage}
                onBackHome={navigateToHome}
              />
            }
          />

          <Route
            path="/thu-vien-tri-thuc"
            element={
              <FeatureDetailPage
                featureId="thu-vien-tri-thuc"
                activeRole={activeRole}
                onRoleChange={setActiveRole}
                onNavigateFeature={navigateToFeaturePage}
                onBackEcosystem={openEcosystemPage}
                onBackHome={navigateToHome}
              />
            }
          />

          <Route
            path="/tro-ly-ai"
            element={
              <FeatureDetailPage
                featureId="tro-ly-ai"
                activeRole={activeRole}
                onRoleChange={setActiveRole}
                onNavigateFeature={navigateToFeaturePage}
                onBackEcosystem={openEcosystemPage}
                onBackHome={navigateToHome}
              />
            }
          />

          <Route
            path="/phong-hoc-tuong-tac"
            element={
              <FeatureDetailPage
                featureId="phong-hoc-tuong-tac"
                activeRole={activeRole}
                onRoleChange={setActiveRole}
                onNavigateFeature={navigateToFeaturePage}
                onBackEcosystem={openEcosystemPage}
                onBackHome={navigateToHome}
              />
            }
          />

          <Route
            path="/dong-thoi-gian-lich-su"
            element={
              <FeatureDetailPage
                featureId="dong-thoi-gian-lich-su"
                activeRole={activeRole}
                onRoleChange={setActiveRole}
                onNavigateFeature={navigateToFeaturePage}
                onBackEcosystem={openEcosystemPage}
                onBackHome={navigateToHome}
              />
            }
          />

          <Route
            path="/ho-so-ban-do"
            element={
              <FeatureDetailPage
                featureId="ho-so-ban-do"
                activeRole={activeRole}
                onRoleChange={setActiveRole}
                onNavigateFeature={navigateToFeaturePage}
                onBackEcosystem={openEcosystemPage}
                onBackHome={navigateToHome}
              />
            }
          />

          <Route
            path="/he-sinh-thai-so/:featureId"
            element={
              <DynamicFeatureRoute
                activeRole={activeRole}
                onRoleChange={setActiveRole}
                onNavigateFeature={navigateToFeaturePage}
                onBackEcosystem={openEcosystemPage}
                onBackHome={navigateToHome}
              />
            }
          />

          {/* Trang 404 khi đường dẫn không tồn tại */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      <InteractivePreviewModal
        selectedFeatureId={selectedFeatureId}
        onClose={() => setSelectedFeatureId(null)}
        onSelectFeature={(id) => setSelectedFeatureId(id)}
        onNavigateFeature={(id) => {
          setSelectedFeatureId(null)
          navigateToFeaturePage(id)
        }}
      />

      {/* Nút Chatbot nổi "Trợ lý AI Biển Đảo Việt Nam" ở góc dưới bên phải toàn trang */}
      <CozeFloatingChatbot activeRole={activeRole} />
    </div>
  )
}
