// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="brand" aria-label="PuntoMigrare home">
              <span className="brand__logo" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" role="img"><path d="M5 18V6h6a4 4 0 1 1 0 8H9v4H5Z" fill="#0A2E4E"/><path d="M15 6v12h4V6h-4Z" fill="#E87722"/></svg>
              </span>
              <span className="brand__text">Punto<span style={{ color: '#E87722' }}>Migrare</span></span>
            </Link>
            <p className="footer-slogan">Il tuo punto di riferimento per un nuovo inizio. Risposte certe e la massima tranquillità.</p>
            <address className="footer-contact">
              <a href="tel:+390612345678">+39 06 1234 5678</a>
              <a href="mailto:info@puntomigrare.it">info@puntomigrare.it</a>
              <span>Via del Fuoco Sacro, 97, 00133 Roma RM</span>
            </address>
          </div>

          <div className="footer-col">
            <h3>Link Istituzionali</h3>
            <ul>
              <li><a href="https://www.portaleimmigrazione.it/ITA/index.html" target="_blank" rel="noopener noreferrer">Portale Immigrazione</a></li>
              <li><a href="https://www.interno.gov.it/" target="_blank" rel="noopener noreferrer">Ministero dell'Interno</a></li>
              <li><a href="https://www.inps.it/" target="_blank" rel="noopener noreferrer">INPS</a></li>
              <li><a href="https://www.agenziaentrate.gov.it/" target="_blank" rel="noopener noreferrer">Agenzia delle Entrate</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Navigazione</h3>
            <ul>
              <li><Link to="/chi-siamo">Chi Siamo</Link></li> {/* ADDED */}
              <li><Link to="/servizi">Tutti i Servizi</Link></li>
              <li><Link to="/faq">Domande Frequenti (FAQ)</Link></li>
              <li><Link to="/contatti">Contatti e Sede</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {currentYear} Punto Migrare • P.IVA IT01234567890</small>
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