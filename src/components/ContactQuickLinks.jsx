// src/components/ContactQuickLinks.jsx

import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./ContactQuickLinks.css";

const contactMethods = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    subtitle: "Risposta immediata",
    link: "https://wa.me/393459256257?text=Buongiorno%2C%20vorrei%20informazioni",
    color: "#25d366",
    external: true,
  },
  {
    icon: <FaPhoneAlt />,
    title: "+39 345 925 6257",
    subtitle: "Lun-Gio 9-18 | Ven 9-13",
    link: "tel:+393459256257",
    color: "#2b286f",
    external: false,
  },
  {
    icon: <FaEnvelope />,
    title: "info@puntomigrare.it",
    subtitle: "Ti rispondiamo in 24h",
    link: "mailto:info@puntomigrare.it",
    color: "#F78D23",
    external: false,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Via del Fuoco Sacro, 97",
    subtitle: "00133 Roma RM",
    link: "/contatti#mappa",
    color: "#2b286f",
    external: false,
  },
];

const ContactQuickLinks = () => {
  return (
    <section
      className="section section-bg-white contact-quick"
      aria-labelledby="contact-quick-title"
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 id="contact-quick-title">Parla con Noi</h2>
          <p style={{ maxWidth: "65ch", margin: "0.5rem auto 0" }}>
            Scegli il modo più comodo per contattarci. Siamo qui per rispondere
            a tutte le tue domande.
          </p>
        </div>

        <div className="contact-quick__grid">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="contact-quick__card"
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              style={{ "--card-color": method.color }}
            >
              <div className="contact-quick__icon" aria-hidden="true">
                {method.icon}
              </div>
              <div className="contact-quick__content">
                <strong className="contact-quick__title">{method.title}</strong>
                <span className="contact-quick__subtitle">
                  {method.subtitle}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="contact-quick__social">
          <p className="contact-quick__social-label">
            Seguici anche sui social
          </p>
          <div className="contact-quick__social-links">
            <a
              href="https://www.facebook.com/puntomigrare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguici su Facebook"
              className="social-icon social-icon--facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/puntomigrare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguici su Instagram"
              className="social-icon social-icon--instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuickLinks;
