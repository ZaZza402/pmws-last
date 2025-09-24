import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MobileDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus the close button when the drawer opens
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Get all focusable elements within the drawer
    const getFocusableElements = () => {
      if (!drawerRef.current) return [];
      
      const focusableSelectors = [
        'button:not([disabled])',
        'a[href]:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"]):not([disabled])'
      ].join(', ');
      
      return Array.from(drawerRef.current.querySelectorAll(focusableSelectors));
    };

    // Handle tab key to trap focus
    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: moving backwards
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        // Tab: moving forwards
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleEscape);

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) { return null; }

  return (
    <div className="mobile-drawer open" id="mobileDrawer" aria-hidden="false" onClick={onClose}>
      <div 
        ref={drawerRef}
        className="mobile-panel" 
        role="dialog" 
        aria-label="Menu" 
        aria-modal="true" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          ref={closeButtonRef}
          className="mobile-panel__close" 
          aria-label="Chiudi menu" 
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Welcome/avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
          <div className="avatar" aria-hidden="true" style={{ width: '36px', height: '36px', fontSize: '.9rem', background: '#E87722', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PM</div>
          <strong style={{ fontFamily: 'Montserrat, sans-serif', color: '#0A2E4E' }}>Benvenuta/o 👋</strong>
        </div>
        
        {/* Navigation */}
        <nav className="mobile-panel__nav" aria-label="Menu mobile">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/chi-siamo" onClick={onClose}>Chi Siamo</Link>
          <Link to="/servizi" onClick={onClose}>Servizi</Link>
          <Link to="/#perche" onClick={onClose}>Perché noi</Link>
          <Link to="/faq" onClick={onClose}>FAQ</Link>
          <Link to="/#recensioni" onClick={onClose}>Recensioni</Link>
          <Link to="/contatti" onClick={onClose}>Contatti</Link>
        </nav>
        
        {/* CTA buttons */}
        <div className="mobile-panel__cta">
          <a href="#prenota" onClick={onClose}>Prenota un appuntamento</a>
          <a href="tel:+390612345678" onClick={onClose}>Parla con noi</a>
          <a href="https://wa.me/390612345678?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20vostri%20servizi." target="_blank" rel="noopener" onClick={onClose}>Chat WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;