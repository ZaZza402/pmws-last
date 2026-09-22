// src/pages/GenericServicePage.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import AnimateOnScroll from "../components/AnimateOnScroll";
import WhatsAppPopup from "../components/WhatsAppPopup";
import SimpleMarkdown from "../components/SimpleMarkdown";
import SEO from "../components/SEO";
import PageSchema from "../components/PageSchema";
import "./caf/CafPatronatoPage.css"; // Reusing CAF styles

const GenericServicePage = ({ serviceData }) => {
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
    { label: serviceData.title },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.title,
    description: serviceData.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "PuntoMigrare",
      image: "https://www.puntomigrare.it/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via del Fuoco Sacro, 97",
        addressLocality: "Roma",
        addressRegion: "RM",
        postalCode: "00133",
        addressCountry: "IT",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Roma",
    },
    url: `https://www.puntomigrare.it${location.pathname}`,
  };

  return (
    <div className="servizi-hub">
      <SEO
        title={serviceData.metaTitle}
        description={serviceData.metaDescription}
        canonical={location.pathname}
      />
      <PageSchema data={serviceSchema} />

      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Header */}
        <AnimateOnScroll animation="fade-up" delay={0}>
          <header className="editorial-header">
            {serviceData.parentPath && (
              <div style={{ marginBottom: "1rem" }}>
                <Link
                  to={serviceData.parentPath}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  <ArrowLeft size={16} /> Torna a {serviceData.parentLabel}
                </Link>
              </div>
            )}
            <p className="editorial-kicker">{serviceData.category}</p>
            <h1 className="editorial-headline">{serviceData.title}</h1>
            <p className="editorial-deck">{serviceData.subtitle}</p>
          </header>
        </AnimateOnScroll>

        {/* Main Content */}
        <div className="editorial-content">
          {/* Requirements List - If exists, show FIRST */}
          {serviceData.requirements && (
            <section className="editorial-section requirements-section">
              <h2 className="section-title">
                {serviceData.requirementsTitle || "Documenti Necessari"}
              </h2>
              {serviceData.requirementsIntro && (
                <p className="section-intro" style={{ marginBottom: "1.5rem" }}>
                  {serviceData.requirementsIntro}
                </p>
              )}
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
            </section>
          )}

          {/* Rich Text Content */}
          <section className="editorial-section">
            <SimpleMarkdown content={serviceData.longDescription} />
          </section>

          {/* CTA Footer */}
          <aside className="editorial-cta">
            <h3>Prenota il tuo appuntamento</h3>
            <p>
              Non aspettare. Contattaci per fissare un appuntamento e gestire la
              tua pratica senza stress.
            </p>
            <div className="editorial-cta__actions">
              <Link to="/contatti" className="btn btn--primary">
                Contattaci
              </Link>
              <WhatsAppPopup
                message={`Vorrei informazioni su: ${serviceData.title}`}
                position="bottom"
                triggerElement={
                  <button className="btn btn--secondary">WhatsApp</button>
                }
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GenericServicePage;
