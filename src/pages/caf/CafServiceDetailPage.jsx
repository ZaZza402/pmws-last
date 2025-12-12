// src/pages/caf/CafServiceDetailPage.jsx

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FileText, CheckCircle, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import WhatsAppPopup from "../../components/WhatsAppPopup";
import SimpleMarkdown from "../../components/SimpleMarkdown";
import "./CafPatronatoPage.css"; // Reusing the main CAF CSS

const CafServiceDetailPage = ({ serviceData }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!serviceData) {
    return <div>Servizio non trovato</div>;
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Servizi", path: "/servizi" },
    { label: "CAF e Patronato", path: "/servizi/caf-patronato" },
    { label: serviceData.title },
  ];

  return (
    <div className="servizi-hub">
      <Helmet>
        <title>{serviceData.metaTitle}</title>
        <meta name="description" content={serviceData.metaDescription} />
      </Helmet>

      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Header */}
        <AnimateOnScroll animation="fade-up">
          <header className="editorial-header">
            <div style={{ marginBottom: "1rem" }}>
              <Link
                to="/servizi/caf-patronato"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#666",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                <ArrowLeft size={16} /> Torna a CAF e Patronato
              </Link>
            </div>
            <p className="editorial-kicker">Servizio CAF</p>
            <h1 className="editorial-headline">{serviceData.title}</h1>
            <p className="editorial-deck">{serviceData.subtitle}</p>
          </header>
        </AnimateOnScroll>

        {/* Main Content */}
        <div className="editorial-content">
          {/* Requirements List - FIRST */}
          {serviceData.requirements && (
            <AnimateOnScroll animation="fade-up" delay={100}>
              <section className="editorial-section requirements-section">
                <h2 className="section-title">
                  {serviceData.slug === "730"
                    ? "Documenti Necessari per il 730/2026"
                    : serviceData.slug === "isee"
                    ? "Documenti Necessari per ISEE 2026"
                    : "Documenti Necessari"}
                </h2>
                <p className="section-intro" style={{ marginBottom: "1.5rem" }}>
                  {serviceData.slug === "730"
                    ? "Porta con te questi documenti per la dichiarazione dei redditi 2025:"
                    : "Porta con te questi documenti per richiedere il tuo ISEE:"}
                </p>
                <div className="requirements-grid">
                  {serviceData.requirements.map((req, index) => (
                    <div key={index} className="requirement-item">
                      <CheckCircle
                        size={18}
                        color="#2b286f"
                        className="requirement-icon"
                      />
                      <span className="requirement-text">{req}</span>
                    </div>
                  ))}
                </div>

                {serviceData.downloadLink && (
                  <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <a
                      href={serviceData.downloadLink}
                      download
                      className="btn btn--primary"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Download size={20} />
                      Scarica Checklist PDF
                    </a>
                  </div>
                )}
              </section>
            </AnimateOnScroll>
          )}

          {/* Rich Text Content */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <section className="editorial-section">
              <SimpleMarkdown content={serviceData.longDescription} />
            </section>
          </AnimateOnScroll>

          {/* CTA Footer */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <aside className="editorial-cta">
              <h3>Prenota il tuo appuntamento</h3>
              <p>
                Non aspettare l'ultimo momento. Contattaci per fissare un
                appuntamento e gestire la tua pratica senza stress.
              </p>
              <div className="editorial-cta__actions">
                <Link to="/contatti" className="btn btn--primary">
                  Contattaci
                </Link>
                <WhatsAppPopup
                  message={`Salve, vorrei prenotare un appuntamento per ${serviceData.title}.`}
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

export default CafServiceDetailPage;
