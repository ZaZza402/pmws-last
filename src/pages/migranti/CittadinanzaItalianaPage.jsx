// src/pages/migranti/CittadinanzaItalianaPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Flag, ArrowRight } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import WhatsAppPopup from "../../components/WhatsAppPopup";
import SEO from "../../components/SEO";
import "./CittadinanzaItalianaPage.css";

/**
 * Cittadinanza Italiana Category Page
 * Editorial layout showing all citizenship types
 */
const CittadinanzaItalianaPage = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Servizi", path: "/servizi" },
    { label: "Cittadinanza Italiana" },
  ];

  return (
    <div className="servizi-hub">
      <SEO
        title="Cittadinanza Italiana: Requisiti e Domanda"
        description="Vuoi diventare cittadino italiano? Assistenza per cittadinanza per residenza, matrimonio e Jure Sanguinis. Verifica i requisiti con noi."
        canonical="/servizi/cittadinanza-italiana"
      />
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Editorial Header */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <header className="editorial-header">
            <p className="editorial-kicker">Cittadinanza Italiana</p>
            <h1 className="editorial-headline">
              Diventa Cittadino Italiano <br />
              Il Tuo Futuro in Italia
            </h1>
            <p className="editorial-deck">
              La cittadinanza italiana è un traguardo importante che apre nuove
              opportunità. Ti accompagniamo dall'analisi dei requisiti all'invio
              telematico, monitorando ogni fase fino al giuramento.
            </p>
          </header>
        </AnimateOnScroll>

        {/* Main Editorial Content */}
        <div className="editorial-content">
          {/* Cittadinanza Italiana */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <section className="editorial-section">
              <header className="section-header">
                <div className="section-header__icon">
                  <Flag size={28} strokeWidth={1.5} />
                </div>
                <div className="section-header__content">
                  <h2 className="section-title">
                    Richieste per Residenti in Italia
                  </h2>
                  <p className="section-intro">
                    Vivi in Italia e vuoi richiedere la cittadinanza? Scopri il
                    percorso più adatto alla tua situazione.
                  </p>
                </div>
              </header>

              <div className="section-content">
                <div className="subsection">
                  <nav className="service-list service-list--3col">
                    <Link
                      to="/servizi/cittadinanza/residenza"
                      className="service-link"
                    >
                      Cittadinanza per Residenza <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/cittadinanza/matrimonio"
                      className="service-link"
                    >
                      Cittadinanza per Matrimonio o Unione Civile{" "}
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/cittadinanza/nascita-italia"
                      className="service-link"
                    >
                      Cittadinanza per Nati in Italia (18 anni){" "}
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/cittadinanza/iure-sanguinis"
                      className="service-link"
                    >
                      Cittadinanza Iure Sanguinis <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/cittadinanza/servizio-stato"
                      className="service-link"
                    >
                      Cittadinanza per Servizio allo Stato{" "}
                      <ArrowRight size={16} />
                    </Link>
                  </nav>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Per Residenti all'Estero */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <section className="editorial-section">
              <header className="section-header">
                <div className="section-header__icon">
                  <Flag size={28} strokeWidth={1.5} />
                </div>
                <div className="section-header__content">
                  <h2 className="section-title">
                    Richieste per Residenti all'Estero
                  </h2>
                  <p className="section-intro">
                    Vivi fuori dall'Italia ma vuoi ottenere la cittadinanza
                    italiana? Ti assistiamo anche a distanza.
                  </p>
                </div>
              </header>

              <div className="section-content">
                <div className="subsection">
                  <nav className="service-list service-list--2col">
                    <Link
                      to="/servizi/cittadinanza/matrimonio-estero"
                      className="service-link"
                    >
                      Cittadinanza per Matrimonio o Unione Civile{" "}
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/cittadinanza/servizio-stato-estero"
                      className="service-link"
                    >
                      Cittadinanza per Servizio allo Stato{" "}
                      <ArrowRight size={16} />
                    </Link>
                  </nav>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* CTA Footer */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <aside className="editorial-cta">
              <h3>Hai Bisogno di Aiuto?</h3>
              <p>
                Contattaci per una consulenza personalizzata. Ti aiuteremo a
                scegliere il percorso giusto e a preparare tutta la
                documentazione necessaria.
              </p>
              <div className="editorial-cta__actions">
                <Link to="/contatti" className="btn btn--primary">
                  Contattaci
                </Link>
                <WhatsAppPopup
                  message="Vorrei informazioni sulla cittadinanza italiana."
                  position="bottom"
                  triggerElement={
                    <button className="btn btn--secondary">WhatsApp</button>
                  }
                />
              </div>
            </aside>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default CittadinanzaItalianaPage;
