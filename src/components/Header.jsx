// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";
import logoSvg from "../assets/brand-logo/pm-logo-blue-orange.svg";
import "./Header.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const location = useLocation();

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
        setIsDropdownOpen(false);
      }
    };
    if (isDrawerOpen) {
      document.body.classList.add("menu-open");
      document.documentElement.classList.add("menu-open"); // Lock html as well
      document.addEventListener("keydown", handleKeyDown);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Add scrolled class after 50px
      setIsScrolled(scrollPosition > 50);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  // Hide header on /servizi routes
  if (location.pathname.startsWith("/servizi")) {
    return null;
  }

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

            {/* Services Dropdown */}
            <div className="nav-dropdown" ref={dropdownRef}>
              <button
                className="nav-dropdown__trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
              >
                Servizi
              </button>
              {isDropdownOpen && (
                <div className="nav-dropdown__menu">
                  <Link
                    to="/servizi"
                    onClick={() => setIsDropdownOpen(false)}
                    className="nav-dropdown__link nav-dropdown__link--main"
                  >
                    Tutti i Servizi
                  </Link>
                  <Link
                    to="/servizi#migranti"
                    onClick={() => setIsDropdownOpen(false)}
                    className="nav-dropdown__link"
                  >
                    Migranti
                  </Link>
                  <Link
                    to="/servizi#viaggiatori"
                    onClick={() => setIsDropdownOpen(false)}
                    className="nav-dropdown__link"
                  >
                    Viaggiatori
                  </Link>
                  <Link
                    to="/servizi#famiglie"
                    onClick={() => setIsDropdownOpen(false)}
                    className="nav-dropdown__link"
                  >
                    Famiglie
                  </Link>
                  <Link
                    to="/servizi#altri-servizi"
                    onClick={() => setIsDropdownOpen(false)}
                    className="nav-dropdown__link"
                  >
                    Altri Servizi
                  </Link>
                </div>
              )}
            </div>

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
