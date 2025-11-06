// src/components/Footer.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoWhite from "../assets/brand-logo/insegna bianco.png";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`footer section ${isLoaded ? "loaded" : ""}`}
      role="contentinfo"
    >
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link
              to="/"
              className="footer-brand"
              aria-label="PuntoMigrare home"
            >
              <img
                src={logoWhite}
                alt="Punto Migrare Logo"
                className="footer-brand__logo"
              />
              <span className="footer-brand__text">
                <span className="footer-brand__punto">Punto</span>
                <span className="footer-brand__migrare">Migrare</span>
              </span>
            </Link>
            <p className="footer-slogan">
              Il tuo punto di riferimento per un nuovo inizio. Risposte certe e
              la massima tranquillità.
            </p>
            <address className="footer-contact">
              <a href="tel:+393456839875">Paula: +39 345 683 9875</a>
              <a href="tel:+393459256257">Mihaela: +39 345 925 6257</a>
              <a href="mailto:info@puntomigrare.it">info@puntomigrare.it</a>
              <span>Via del Fuoco Sacro, 97, 00133 Roma RM</span>
            </address>
            <div className="footer-social">
              <h4 className="footer-social__title">Seguici</h4>
              <div className="footer-social__links">
                <a
                  href="https://www.facebook.com/puntomigrare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguici su Facebook"
                  className="social-link social-link--facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://www.instagram.com/puntomigrare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguici su Instagram"
                  className="social-link social-link--instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://wa.me/393459256257"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contattaci su WhatsApp"
                  className="social-link social-link--whatsapp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h3>Link Istituzionali</h3>
            <ul>
              <li>
                <a
                  href="https://www.portaleimmigrazione.it/ITA/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portale Immigrazione
                </a>
              </li>
              <li>
                <a
                  href="https://www.interno.gov.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ministero dell'Interno
                </a>
              </li>
              <li>
                <a
                  href="https://www.inps.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INPS
                </a>
              </li>
              <li>
                <a
                  href="https://www.agenziaentrate.gov.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenzia delle Entrate
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Navigazione</h3>
            <ul>
              <li>
                <Link to="/servizi">Tutti i Servizi</Link>
              </li>
              <li>
                <Link to="/faq">Domande Frequenti (FAQ)</Link>
              </li>
              <li>
                <Link to="/contatti">Contatti e Sede</Link>
              </li>
            </ul>
            <div className="footer-credit">
              <small>
                Website by{" "}
                <a
                  href="https://www.alecsdesign.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-designer-link"
                >
                  Alex
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <small>
            © {currentYear} Punto Migrare - Tutti i diritti riservati
          </small>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
