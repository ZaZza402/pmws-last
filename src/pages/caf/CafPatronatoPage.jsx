// src/pages/caf/CafPatronatoPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import WhatsAppPopup from "../../components/WhatsAppPopup";
import SEO from "../../components/SEO";
import "./CafPatronatoPage.css";

/**
 * CAF & Patronato Category Page
 * Editorial layout showing CAF services
 */
const CafPatronatoPage = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Servizi", path: "/servizi" },
    { label: "CAF e Patronato" },
  ];

  return (
    <div className="servizi-hub">
      <SEO
        title="CAF e Patronato Roma | 730, ISEE e Bonus"
        description="Servizi CAF e Patronato a Roma. Modello 730, ISEE, Assegno Unico, Bonus Sociali. Assistenza fiscale professionale e veloce."
        canonical="/servizi/caf-patronato"
      />
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Editorial Header */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <header className="editorial-header">
            <p className="editorial-kicker">CAF e Patronato</p>
            <h1 className="editorial-headline">
              Assistenza Fiscale e <br />
              Previdenziale Completa
            </h1>
            <p className="editorial-deck">
              Dalla dichiarazione dei redditi alle pratiche ISEE, ti aiutiamo a
              gestire i tuoi adempimenti fiscali con semplicità e precisione.
            </p>
          </header>
        </AnimateOnScroll>

        {/* Main Editorial Content */}
        <div className="editorial-content">
          {/* Servizi Fiscali */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <section className="editorial-section">
              <header className="section-header">
                <div className="section-header__icon">
                  <Calculator size={28} strokeWidth={1.5} />
                </div>
                <div className="section-header__content">
                  <h2 className="section-title">Servizi Fiscali</h2>
                  <p className="section-intro">
                    Gestiamo le tue pratiche fiscali per garantirti il rispetto
                    delle scadenze e l'accesso a tutte le agevolazioni previste.
                  </p>
                </div>
              </header>

              <div className="section-content">
                <div className="subsection">
                  <nav className="service-list service-list--2col">
                    <Link
                      to="/servizi/caf-patronato/730"
                      className="service-link"
                    >
                      Modello 730 <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/servizi/caf-patronato/isee"
                      className="service-link"
                    >
                      Modello ISEE <ArrowRight size={16} />
                    </Link>
                  </nav>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* CTA Footer */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <aside className="editorial-cta">
              <h3>Hai Bisogno di Aiuto?</h3>
              <p>
                Contattaci per una consulenza personalizzata. Ti aiuteremo a
                capire quali documenti servono per la tua pratica.
              </p>
              <div className="editorial-cta__actions">
                <Link to="/contatti" className="btn btn--primary">
                  Contattaci
                </Link>
                <WhatsAppPopup
                  message="Vorrei informazioni sui servizi CAF."
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

export default CafPatronatoPage;
