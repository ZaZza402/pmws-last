// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";
import logoSvg from "../assets/brand-logo/pm-logo-blue-orange.svg";
import "./Header.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };
    if (isDrawerOpen) {
      document.body.classList.add("menu-open");
      document.addEventListener("keydown", handleKeyDown);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Add scrolled class after 50px
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header
        className={`header ${isScrolled ? "scrolled" : ""}`}
        role="banner"
      >
        <div className="container header__inner">
          <Link to="/" className="brand" aria-label="PuntoMigrare home">
            <span className="brand__logo" aria-hidden="true">
              <img
                src={logoSvg}
                alt="PuntoMigrare - Centro di Assistenza Fiscale e Servizi per l'Immigrazione a Roma"
                className="brand__logo-img"
              />
            </span>
            <span className="brand__text">
              <span style={{ color: "#F78D23" }}>Punto</span>
              <span style={{ color: "#2b286f" }}>Migrare</span>
            </span>
          </Link>

          <nav className="desktop-nav" id="desktopNav" aria-label="Principale">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/servizi">Servizi</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contatti">Contatti</NavLink>
          </nav>

          <button
            className={`mobile-toggle ${isDrawerOpen ? "open" : ""}`}
            id="menuToggle"
            aria-controls="mobileDrawer"
            aria-expanded={isDrawerOpen}
            aria-label={isDrawerOpen ? "Chiudi menu" : "Apri menu"}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <span className="mobile-toggle__line mobile-toggle__line--top"></span>
            <span className="mobile-toggle__line mobile-toggle__line--middle"></span>
            <span className="mobile-toggle__line mobile-toggle__line--bottom"></span>
          </button>
        </div>
      </header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Header;
