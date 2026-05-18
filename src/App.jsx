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
import CookieConsent from "./components/CookieConsent";
import PageLoader from "./components/PageLoader";
import NotFoundPage from "./pages/NotFoundPage";
import PermessoRedirect from "./components/PermessoRedirect";
import ServiceLayout from "./components/ServiceLayout";

// Lazy load other pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ServiziPage = lazy(() => import("./pages/ServiziPage"));
const PermessiSoggiornoPage = lazy(
  () => import("./pages/migranti/PermessiSoggiornoPage"),
);
const CittadinanzaItalianaPage = lazy(
  () => import("./pages/migranti/CittadinanzaItalianaPage"),
);
// const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ClusteredPermessoPage = lazy(
  () => import("./pages/migranti/ClusteredPermessoPage"),
);
const CafPatronatoPage = lazy(() => import("./pages/caf/CafPatronatoPage"));
const Modello730Page = lazy(() => import("./pages/caf/Modello730Page"));
const IseePage = lazy(() => import("./pages/caf/IseePage"));
const RicongiungimentiFamiliariPage = lazy(
  () => import("./pages/migranti/RicongiungimentiFamiliariPage"),
);
const TraduzioniAttiPage = lazy(
  () => import("./pages/migranti/TraduzioniAttiPage"),
);

// Cittadinanza Pages
const CittadinanzaResidenzaPage = lazy(
  () => import("./pages/migranti/CittadinanzaResidenzaPage"),
);
const CittadinanzaMatrimonioPage = lazy(
  () => import("./pages/migranti/CittadinanzaMatrimonioPage"),
);
const CittadinanzaJureSanguinisPage = lazy(
  () => import("./pages/migranti/CittadinanzaJureSanguinisPage"),
);
const CittadinanzaNascitaPage = lazy(
  () => import("./pages/migranti/CittadinanzaNascitaPage"),
);
const CittadinanzaMatrimonioEsteroPage = lazy(
  () => import("./pages/migranti/CittadinanzaMatrimonioEsteroPage"),
);
const CittadinanzaServizioStatoPage = lazy(
  () => import("./pages/migranti/CittadinanzaServizioStatoPage"),
);

const VistiItaliaPage = lazy(
  () => import("./pages/viaggiatori/VistiItaliaPage"),
);
const MediazioneAmbasciataPage = lazy(
  () => import("./pages/viaggiatori/MediazioneAmbasciataPage"),
);
const LavoroDomesticoPage = lazy(
  () => import("./pages/famiglie/LavoroDomesticoPage"),
);
const SuccessioniPage = lazy(() => import("./pages/altri/SuccessioniPage"));
const ContrattiAffittoPage = lazy(
  () => import("./pages/altri/ContrattiAffittoPage"),
);
const ConsulenzaLegalePage = lazy(
  () => import("./pages/altri/ConsulenzaLegalePage"),
);
const DisbrigoPratichePage = lazy(
  () => import("./pages/altri/DisbrigoPratichePage"),
);
const CompilazioneKitPage = lazy(
  () => import("./pages/migranti/CompilazioneKitPage"),
);
const AssicurazioneFidejussionePage = lazy(
  () => import("./pages/viaggiatori/AssicurazioneFidejussionePage"),
);
const ContabilitaPivaPage = lazy(
  () => import("./pages/altri/ContabilitaPivaPage"),
);
const AssicurazioniPage = lazy(() => import("./pages/altri/AssicurazioniPage"));
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
              <Route element={<ServiceLayout />}>
                <Route path="/servizi" element={<ServiziPage />} />
                <Route
                  path="/servizi/permessi-di-soggiorno"
                  element={<PermessiSoggiornoPage />}
                />
                <Route
                  path="/servizi/cittadinanza-italiana"
                  element={<CittadinanzaItalianaPage />}
                />
                <Route
                  path="/servizi/caf-patronato"
                  element={<CafPatronatoPage />}
                />
                <Route
                  path="/servizi/caf-patronato/730"
                  element={<Modello730Page />}
                />
                <Route
                  path="/servizi/caf-patronato/isee"
                  element={<IseePage />}
                />
                {/* Migranti services */}
                <Route
                  path="/servizi/migranti/ricongiungimenti-familiari"
                  element={<RicongiungimentiFamiliariPage />}
                />
                <Route
                  path="/servizi/migranti/traduzioni-atti"
                  element={<TraduzioniAttiPage />}
                />
                <Route
                  path="/servizi/migranti/compilazione-kit"
                  element={<CompilazioneKitPage />}
                />

                {/* Cittadinanza Specific Pages */}
                <Route
                  path="/servizi/cittadinanza/residenza"
                  element={<CittadinanzaResidenzaPage />}
                />
                <Route
                  path="/servizi/cittadinanza/matrimonio"
                  element={<CittadinanzaMatrimonioPage />}
                />
                <Route
                  path="/servizi/cittadinanza/iure-sanguinis"
                  element={<CittadinanzaJureSanguinisPage />}
                />
                <Route
                  path="/servizi/cittadinanza/nascita-italia"
                  element={<CittadinanzaNascitaPage />}
                />
                <Route
                  path="/servizi/cittadinanza/extracomunitario-nato-italia"
                  element={<CittadinanzaNascitaPage />}
                />
                <Route
                  path="/servizi/cittadinanza/matrimonio-estero"
                  element={<CittadinanzaMatrimonioEsteroPage />}
                />
                <Route
                  path="/servizi/cittadinanza/servizio-stato"
                  element={<CittadinanzaServizioStatoPage />}
                />
                <Route
                  path="/servizi/cittadinanza/servizio-stato-estero"
                  element={<CittadinanzaServizioStatoPage />}
                />

                {/* Viaggiatori services */}
                <Route
                  path="/servizi/viaggiatori/visti-italia"
                  element={<VistiItaliaPage />}
                />
                <Route
                  path="/servizi/viaggiatori/mediazione-ambasciate"
                  element={<MediazioneAmbasciataPage />}
                />
                <Route
                  path="/servizi/viaggiatori/assicurazione-fidejussione"
                  element={<AssicurazioneFidejussionePage />}
                />
                {/* Famiglie services */}
                <Route
                  path="/servizi/famiglie/gestione-lavoro-domestico"
                  element={<LavoroDomesticoPage />}
                />
                {/* Altri servizi */}
                <Route
                  path="/servizi/altri/successioni"
                  element={<SuccessioniPage />}
                />
                <Route
                  path="/servizi/altri/contratti-affitto"
                  element={<ContrattiAffittoPage />}
                />
                <Route
                  path="/servizi/altri/consulenza-legale"
                  element={<ConsulenzaLegalePage />}
                />
                <Route
                  path="/servizi/altri/disbrigo-pratiche"
                  element={<DisbrigoPratichePage />}
                />
                <Route
                  path="/servizi/altri/contabilita-piva"
                  element={<ContabilitaPivaPage />}
                />
                <Route
                  path="/servizi/altri/assicurazioni"
                  element={<AssicurazioniPage />}
                />
                {/* Clustered permit pages - the actual detailed content pages */}
                <Route
                  path="/servizi/permessi-di-soggiorno/lavoro-subordinato"
                  element={
                    <ClusteredPermessoPage cluster="lavoro-subordinato" />
                  }
                />
                <Route
                  path="/servizi/permessi-di-soggiorno/lavoro-autonomo"
                  element={<ClusteredPermessoPage cluster="lavoro-autonomo" />}
                />
                <Route
                  path="/servizi/permessi-di-soggiorno/studio-formazione"
                  element={
                    <ClusteredPermessoPage cluster="studio-formazione" />
                  }
                />
                <Route
                  path="/servizi/permessi-di-soggiorno/famiglia-minori"
                  element={<ClusteredPermessoPage cluster="famiglia-minori" />}
                />
                <Route
                  path="/servizi/permessi-di-soggiorno/residenza-elettiva"
                  element={
                    <ClusteredPermessoPage cluster="residenza-elettiva" />
                  }
                />
                <Route
                  path="/servizi/permessi-di-soggiorno/protezione-casi-speciali"
                  element={
                    <ClusteredPermessoPage cluster="protezione-casi-speciali" />
                  }
                />
                <Route
                  path="/servizi/permessi-di-soggiorno/permesso-ue-lungo-periodo"
                  element={
                    <ClusteredPermessoPage cluster="permesso-ue-lungo-periodo" />
                  }
                />
                <Route
                  path="/servizi/permessi-di-soggiorno/conversione-duplicati"
                  element={
                    <ClusteredPermessoPage cluster="conversione-duplicati" />
                  }
                />
                {/* Redirect old individual permit slugs to clustered pages with anchors */}
                <Route
                  path="/servizi/permessi-di-soggiorno/:slug"
                  element={<PermessoRedirect />}
                />
              </Route>
              {/* 
              <Route
                path="/servizi/cittadinanza/:slug"
                element={<ServiceDetailPage />}
              />
              <Route path="/servizi/:slug" element={<ServiceDetailPage />} /> 
              */}
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
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
