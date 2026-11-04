import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeatureGrid from './components/FeatureGrid'
import InteractivePreviewModal from './components/InteractivePreviewModal'
import Footer from './components/Footer'
import CozeFloatingChatbot from './components/CozeFloatingChatbot'
import EcosystemPage from './pages/EcosystemPage'
import FeatureDetailPage from './pages/FeatureDetailPage'
import { FEATURES_DATA } from './data/homeData'

function parseHashRoute(hash) {
  const cleanHash = (hash || '').replace(/^#/, '')
  if (cleanHash === 'he-sinh-thai-so') {
    return { page: 'ecosystem', featureId: null }
  }
  if (cleanHash.startsWith('he-sinh-thai/')) {
    const rawId = cleanHash.replace('he-sinh-thai/', '')
    const normalizedId =
      rawId === 'khong-gian-kham-pha' ? 'trien-lam-so' : rawId
    const exists = FEATURES_DATA.some((f) => f.id === normalizedId)
    if (exists) {
      return { page: 'feature', featureId: normalizedId }
    }
  }
  return { page: 'home', featureId: null, sectionId: cleanHash || null }
}

export default function App() {
  const [activeRole, setActiveRole] = useState('student')
  const [selectedFeatureId, setSelectedFeatureId] = useState(null)
  const [routeState, setRouteState] = useState(() =>
    parseHashRoute(window.location.hash)
  )

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHashRoute(window.location.hash)
      setRouteState(nextRoute)
      if (nextRoute.page !== 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const openEcosystemPage = () => {
    window.location.hash = 'he-sinh-thai-so'
    setRouteState({ page: 'ecosystem', featureId: null })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToFeaturePage = (featureId) => {
    const normalizedId =
      featureId === 'khong-gian-kham-pha' ? 'trien-lam-so' : featureId
    window.location.hash = `he-sinh-thai/${normalizedId}`
    setRouteState({ page: 'feature', featureId: normalizedId })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToHome = (sectionHash = '#trang-chu') => {
    const targetSection = sectionHash.replace(/^#/, '')
    window.location.hash = targetSection
    setRouteState({ page: 'home', featureId: null, sectionId: targetSection })
    setTimeout(() => {
      const el = document.getElementById(targetSection)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 40)
  }

  const handleNavigateNav = (navItem) => {
    if (navItem.page === 'ecosystem' || navItem.id === 'features') {
      openEcosystemPage()
    } else {
      navigateToHome(navItem.href || '#trang-chu')
    }
  }

  return (
    <div className="app-wrapper">
      <Navbar
        onStartExplore={openEcosystemPage}
        activeRole={activeRole}
        onRoleChange={setActiveRole}
        currentPage={routeState.page}
        onNavigateNav={handleNavigateNav}
      />

      <main>
        {routeState.page === 'home' && (
          <>
            <HeroSection
              onStartExplore={openEcosystemPage}
              onSelectFeature={(id) => navigateToFeaturePage(id)}
            />

            <AboutSection
              activeRole={activeRole}
              onRoleChange={setActiveRole}
              onStartExplore={openEcosystemPage}
            />

            <FeatureGrid
              onSelectFeature={(id) => setSelectedFeatureId(id)}
              onNavigateFeature={(id) => navigateToFeaturePage(id)}
              onOpenEcosystemPage={openEcosystemPage}
              onStartExplore={openEcosystemPage}
            />
          </>
        )}

        {routeState.page === 'ecosystem' && (
          <EcosystemPage
            activeRole={activeRole}
            onRoleChange={setActiveRole}
            onNavigateFeature={(id) => navigateToFeaturePage(id)}
            onQuickPreview={(id) => setSelectedFeatureId(id)}
            onBackHome={() => navigateToHome('#trang-chu')}
          />
        )}

        {routeState.page === 'feature' && (
          <FeatureDetailPage
            featureId={routeState.featureId}
            activeRole={activeRole}
            onRoleChange={setActiveRole}
            onNavigateFeature={(id) => navigateToFeaturePage(id)}
            onBackEcosystem={openEcosystemPage}
            onBackHome={() => navigateToHome('#trang-chu')}
          />
        )}
      </main>

      <Footer
        onSelectFeature={(id) => navigateToFeaturePage(id)}
        onNavigateNav={handleNavigateNav}
      />

      <InteractivePreviewModal
        selectedFeatureId={selectedFeatureId}
        onClose={() => setSelectedFeatureId(null)}
        onSelectFeature={(id) => setSelectedFeatureId(id)}
        onNavigateFeature={(id) => navigateToFeaturePage(id)}
      />

      {/* Nút Chatbot nổi "Trợ lý AI Biển Đảo Việt Nam" ở góc dưới bên phải toàn trang */}
      <CozeFloatingChatbot activeRole={activeRole} />
    </div>
  )
}
