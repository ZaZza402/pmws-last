import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import StructuredData from "./components/StructuredData";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";
import InstallPrompt from "./components/InstallPrompt";
import PageLoader from "./components/PageLoader";
import NotFoundPage from "./pages/NotFoundPage";
import ServiziPage from "./pages/ServiziPage"; // Import directly, no lazy loading

// Lazy load other pages
const HomePage = lazy(() => import("./pages/HomePage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContattiPage = lazy(() => import("./pages/ContattiPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <a href="#main-content" className="skip-to-main">
        Salta al contenuto principale
      </a>
      <StructuredData />
      <Header />
      <main id="main-content">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servizi" element={<ServiziPage />} />
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
      <InstallPrompt />
    </BrowserRouter>
  );
}

export default App;
