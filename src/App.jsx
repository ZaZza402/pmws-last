import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import WhatsAppButton from './components/WhatsAppButton';
import NotFoundPage from './pages/NotFoundPage';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServiziPage = lazy(() => import('./pages/ServiziPage'));
const ChiSiamoPage = lazy(() => import('./pages/ChiSiamoPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const ContattiPage = lazy(() => import('./pages/ContattiPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));

const ScrollToSection = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToSection />
      <main>
        <ErrorBoundary>
          <Suspense fallback={<div>Caricamento...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servizi" element={<ServiziPage />} />
              <Route path="/chi-siamo" element={<ChiSiamoPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contatti" element={<ContattiPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;