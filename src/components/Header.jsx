// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileDrawer from './MobileDrawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHeaderCtaVisible, setHeaderCtaVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') { setIsDrawerOpen(false); } };
    if (isDrawerOpen) {
      document.body.classList.add('menu-open');
      document.addEventListener('keydown', handleKeyDown);
    }
    const handleScroll = () => { if (window.scrollY > 300) { setHeaderCtaVisible(true); } else { setHeaderCtaVisible(false); } };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <motion.header 
        className="header" 
        role="banner"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container header__inner">
          <Link to="/" className="brand" aria-label="PuntoMigrare home">
            <span className="brand__logo" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" role="img"><path d="M5 18V6h6a4 4 0 1 1 0 8H9v4H5Z" fill="#0A2E4E"/><path d="M15 6v12h4V6h-4Z" fill="#E87722"/></svg>
            </span>
            <span className="brand__text">Punto<span style={{ color: '#E87722' }}>Migrare</span></span>
          </Link>

          <nav className="desktop-nav" id="desktopNav" aria-label="Principale">
            <NavLink to="/chi-siamo">Chi Siamo</NavLink> {/* ADDED */}
            <NavLink to="/servizi">Servizi</NavLink>
            <a href="/#perche">Perché noi</a>
            <NavLink to="/faq">FAQ</NavLink>
            <a href="/#recensioni">Recensioni</a>
            <NavLink to="/contatti">Contatti</NavLink>
          </nav>
          
          <motion.a 
            className="btn btn--primary" 
            href="#prenota" 
            aria-label="Prenota un appuntamento" 
            style={{ display: isHeaderCtaVisible ? 'inline-flex' : 'none' }}
            id="headerCta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Prenota
          </motion.a>

          <button
            className="mobile-toggle" 
            id="menuToggle" 
            aria-controls="mobileDrawer" 
            aria-expanded={isDrawerOpen} 
            aria-label="Apri menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </motion.header>
      
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Header;