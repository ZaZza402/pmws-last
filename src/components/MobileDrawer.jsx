import React from 'react';
import { Link } from 'react-router-dom';

const MobileDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) { return null; }

  return (
    <div className="mobile-drawer open" id="mobileDrawer" aria-hidden="false" onClick={onClose}>
      <div className="mobile-panel" role="dialog" aria-label="Menu" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="mobile-panel__close" aria-label="Chiudi menu" onClick={onClose}>&times;</button>
        
        {/* Welcome/avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
          <div className="avatar" aria-hidden="true" style={{ width: '36px', height: '36px', fontSize: '.9rem', background: '#E87722', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PM</div>
          <strong style={{ fontFamily: 'Montserrat, sans-serif', color: '#0A2E4E' }}>Benvenuta/o 👋</strong>
        </div>
        
        {/* Navigation */}
        <nav className="mobile-panel__nav" aria-label="Menu mobile">
          <Link to="/">Home</Link>
          <Link to="/chi-siamo">Chi Siamo</Link>
          <Link to="/servizi">Servizi</Link>
          <a href="/#perche">Perché noi</a>
          <Link to="/faq">FAQ</Link>
          <a href="/#recensioni">Recensioni</a>
          <Link to="/contatti">Contatti</Link>
        </nav>
        
        {/* CTA buttons */}
        <div className="mobile-panel__cta">
          <a href="#prenota">Prenota un appuntamento</a>
          <a href="tel:+390612345678">Parla con noi</a>
          <a href="https://wa.me/390612345678?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20vostri%20servizi." target="_blank" rel="noopener">Chat WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;