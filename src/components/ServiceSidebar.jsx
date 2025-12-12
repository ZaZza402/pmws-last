// src/components/ServiceSidebar.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhone, FaChevronRight } from "react-icons/fa";
import WhatsAppPopup from "./WhatsAppPopup";
import PhonePopup from "./PhonePopup";
import "./ServiceSidebar.css";

/**
 * ServiceSidebar Component
 * Sticky sidebar with in-page navigation and CTAs
 */
const ServiceSidebar = ({ sections, relatedServices }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -66%",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="service-sidebar">
      {/* In This Page Navigation */}
      <div className="service-sidebar__section">
        <h3 className="service-sidebar__title">In Questa Pagina</h3>
        <nav className="service-sidebar__nav">
          <ul className="service-sidebar__list">
            {sections.map((section) => (
              <li key={section.id} className="service-sidebar__item">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`service-sidebar__link ${
                    activeSection === section.id ? "active" : ""
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Contact CTA */}
      <div className="service-sidebar__section service-sidebar__cta">
        <h3 className="service-sidebar__title">Hai Domande?</h3>
        <p className="service-sidebar__cta-text">
          Contattaci per una consulenza gratuita
        </p>
        <div className="service-sidebar__cta-buttons">
          <WhatsAppPopup
            message="Vorrei informazioni su questo servizio."
            position="right"
            triggerElement={
              <button className="service-sidebar__button service-sidebar__button--whatsapp">
                <FaWhatsapp /> WhatsApp
              </button>
            }
          />
          <PhonePopup
            position="right"
            triggerElement={
              <button className="service-sidebar__button service-sidebar__button--phone">
                <FaPhone /> Chiama Ora
              </button>
            }
          />
        </div>
      </div>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <div className="service-sidebar__section">
          <h3 className="service-sidebar__title">Servizi Correlati</h3>
          <ul className="service-sidebar__related">
            {relatedServices.map((service) => (
              <li key={service.id} className="service-sidebar__related-item">
                <Link
                  to={service.path}
                  className="service-sidebar__related-link"
                >
                  <span>{service.title}</span>
                  <FaChevronRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default ServiceSidebar;
