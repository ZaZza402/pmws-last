// src/pages/ServiziPage.jsx
// Main Services Hub - 4 Main Categories

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FileText,
  Plane,
  Users,
  Briefcase,
  ArrowRight,
  Home,
  Flag,
  Calculator,
  ClipboardList,
  HeartPulse,
  TrendingUp,
  Umbrella,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import AnimateOnScroll from "../components/AnimateOnScroll";
import WhatsAppPopup from "../components/WhatsAppPopup";
import SEO from "../components/SEO";
import "./ServiziPage.css";

const ServiziPage = () => {
  const { hash } = useLocation();
  const breadcrumbItems = [{ label: "Home", path: "/" }, { label: "Servizi" }];

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2017;

  // Handle hash scrolling
  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready and animations don't interfere
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="servizi-hub">
      <SEO
        title="Tutti i Servizi per l'Immigrazione"
        description="Scopri i nostri servizi: Permessi di Soggiorno, Cittadinanza, Ricongiungimenti, Visti e CAF. Assistenza completa a Roma."
        canonical="/servizi"
      />
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Editorial Header */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <header className="editorial-header">
            <p className="editorial-kicker">I Nostri Servizi</p>
            <h1 className="editorial-headline">
              La Tua Guida Completa <br />
              per l'Immigrazione in Italia
            </h1>
            <p className="editorial-deck">
              Da oltre {yearsOfExperience} anni aiutiamo persone come te a
              navigare il sistema italiano di immigrazione. Dalla prima
              richiesta alla cittadinanza, siamo al tuo fianco in ogni passo.
            </p>
          </header>
        </AnimateOnScroll>

        {/* Quick Access Cards - Top Services */}
        <AnimateOnScroll animation="fade-up" delay={150}>
          <section className="quick-access">
            <h2 className="quick-access__title">Servizi Più Richiesti</h2>
            <div className="quick-access__grid">
              <Link
                to="/servizi/cittadinanza-italiana"
                className="quick-card quick-card--blue"
              >
                <div className="quick-card__header">
                  <div className="quick-card__icon">
                    <Flag size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="quick-card__title">Cittadinanza Italiana</h3>
                </div>
                <div className="quick-card__footer">
                  <span className="quick-card__badge">5 tipologie</span>
                  <p className="quick-card__description">
                    Per matrimonio, residenza e Jure Sanguinis
                  </p>
                </div>
              </Link>

              <Link
                to="/servizi/permessi-di-soggiorno"
                className="quick-card quick-card--orange"
              >
                <div className="quick-card__header">
                  <div className="quick-card__icon">
                    <FileText size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="quick-card__title">Permessi di Soggiorno</h3>
                </div>
                <div className="quick-card__footer">
                  <span className="quick-card__badge">8 tipologie</span>
                  <p className="quick-card__description">
                    Prima richiesta, rinnovi e conversioni
                  </p>
                </div>
              </Link>

              <Link
                to="/servizi/caf-patronato"
                className="quick-card quick-card--neutral"
              >
                <div className="quick-card__header">
                  <div className="quick-card__icon">
                    <Calculator size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="quick-card__title">CAF e Patronato</h3>
                </div>
                <div className="quick-card__footer">
                  <span className="quick-card__badge">2 servizi</span>
                  <p className="quick-card__description">
                    730, ISEE e pratiche fiscali
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Main Service Categories */}
        <div className="editorial-content">
          {/* MIGRANTI */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <section
              id="migranti"
              className="editorial-section editorial-section--featured"
            >
              <header className="section-header">
                <div className="section-header__icon">
                  <FileText size={32} strokeWidth={1.5} />
                </div>
                <div className="section-header__content">
                  <h2 className="section-title">Migranti</h2>
                  <p className="section-intro">
                    Servizi completi per cittadini extracomunitari: permessi di
                    soggiorno, cittadinanza, ricongiungimenti familiari,
                    compilazione kit e traduzioni certificate.
                  </p>
                </div>
              </header>

              <nav className="category-services-list">
                <Link
                  to="/servizi/permessi-di-soggiorno"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <FileText size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Permessi di Soggiorno
                      </span>
                      <span className="service-link-desc">
                        Prima richiesta, rinnovi, conversioni • 8 tipologie
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/migranti/ricongiungimenti-familiari"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Users size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Ricongiungimenti Familiari
                      </span>
                      <span className="service-link-desc">
                        Porta la tua famiglia in Italia
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/cittadinanza-italiana"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Flag size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Cittadinanza Italiana
                      </span>
                      <span className="service-link-desc">
                        Matrimonio, residenza, Jure Sanguinis • 5 tipologie
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/migranti/traduzioni-atti"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <FileText size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Traduzioni Atti
                      </span>
                      <span className="service-link-desc">
                        Traduzioni asseverate e legalizzazioni
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/migranti/compilazione-kit"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <ClipboardList size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Compilazione KIT
                      </span>
                      <span className="service-link-desc">
                        Compilazione kit postale per pratiche immigratorie
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              </nav>
            </section>
          </AnimateOnScroll>

          {/* VIAGGIATORI */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <section id="viaggiatori" className="editorial-section">
              <header className="section-header">
                <div className="section-header__icon">
                  <Plane size={32} strokeWidth={1.5} />
                </div>
                <div className="section-header__content">
                  <h2 className="section-title">Viaggiatori</h2>
                  <p className="section-intro">
                    Assistenza per visti d'ingresso, mediazione con ambasciate,
                    assicurazione sanitaria, fidejussione e pratiche consolari.
                  </p>
                </div>
              </header>

              <nav className="category-services-list">
                <Link
                  to="/servizi/viaggiatori/visti-italia"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Plane size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Visti per l'Italia
                      </span>
                      <span className="service-link-desc">
                        Turismo, lavoro, studio e famiglia
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/viaggiatori/mediazione-ambasciate"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Briefcase size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Mediazione con Ambasciate
                      </span>
                      <span className="service-link-desc">
                        Assistenza con enti consolari
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/viaggiatori/assicurazione-fidejussione"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <HeartPulse size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Assicurazione Sanitaria + Fidejussione
                      </span>
                      <span className="service-link-desc">
                        Pacchetto obbligatorio per visti turistici in Italia
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              </nav>
            </section>
          </AnimateOnScroll>

          {/* FAMIGLIE */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <section id="famiglie" className="editorial-section">
              <header className="section-header">
                <div className="section-header__icon">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <div className="section-header__content">
                  <h2 className="section-title">Famiglie</h2>
                  <p className="section-intro">
                    Gestione completa di contratti di lavoro domestico: colf,
                    badanti, baby-sitter. Assunzioni, buste paga, CUD e TFR.
                  </p>
                </div>
              </header>

              <div className="famiglie-logo">
                <img
                  src="/LOGO%20punto%20DOMINA.png"
                  alt="Associazione Domina"
                />
              </div>

              <nav className="category-services-list">
                <Link
                  to="/servizi/famiglie/gestione-lavoro-domestico"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Users size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Gestione Contratti Lavoro Domestico
                      </span>
                      <span className="service-link-desc">
                        Colf, badanti, baby-sitter: assunzioni e buste paga
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              </nav>
            </section>
          </AnimateOnScroll>

          {/* ALTRI SERVIZI */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <section id="altri-servizi" className="editorial-section">
              <header className="section-header">
                <div className="section-header__icon">
                  <Briefcase size={32} strokeWidth={1.5} />
                </div>
                <div className="section-header__content">
                  <h2 className="section-title">Altri Servizi</h2>
                  <p className="section-intro">
                    CAF, Patronato, successioni, contratti d'affitto, consulenza
                    legale, contabilità PIVA, assicurazioni e disbrigo pratiche.
                  </p>
                </div>
              </header>

              <nav className="category-services-list">
                <Link
                  to="/servizi/caf-patronato"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Calculator size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        CAF e Patronato
                      </span>
                      <span className="service-link-desc">
                        730, ISEE e pratiche fiscali • 2 servizi
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/altri/successioni"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <FileText size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">Successioni</span>
                      <span className="service-link-desc">
                        Gestione pratiche ereditarie
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/altri/contratti-affitto"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Home size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Contratti di Affitto
                      </span>
                      <span className="service-link-desc">
                        Registrazione e gestione contratti
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/altri/consulenza-legale"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Briefcase size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Consulenza Legale
                      </span>
                      <span className="service-link-desc">
                        Supporto legale per immigrazione
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/altri/disbrigo-pratiche"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <FileText size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Disbrigo Pratiche presso Enti Locali
                      </span>
                      <span className="service-link-desc">
                        Assistenza con comuni, prefetture e questure
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/altri/contabilita-piva"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <TrendingUp size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">
                        Apertura/Chiusura e Gestione Contabilità PIVA
                      </span>
                      <span className="service-link-desc">
                        Apertura, gestione e chiusura Partita IVA
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/servizi/altri/assicurazioni"
                  className="category-service-link"
                >
                  <div className="service-link-content">
                    <Umbrella size={20} className="service-link-icon" />
                    <div>
                      <span className="service-link-title">Assicurazioni</span>
                      <span className="service-link-desc">
                        Polizze assicurative per ogni esigenza
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              </nav>
            </section>
          </AnimateOnScroll>
        </div>

        {/* CTA Section */}
        <AnimateOnScroll animation="fade-up" delay={350}>
          <section className="hub-cta">
            <h2>Hai Bisogno di Aiuto?</h2>
            <p>
              Non sei sicuro quale servizio sia più adatto alla tua situazione?
              Il nostro team è pronto ad ascoltarti.
            </p>
            <WhatsAppPopup
              position="top"
              triggerElement={
                <button className="btn btn--primary btn--large">
                  Contattaci su WhatsApp
                </button>
              }
            />
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default ServiziPage;
