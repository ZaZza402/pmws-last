// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";
import logoInsegna from "../assets/brand-logo/insegna.png";
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
                src={logoInsegna}
                alt="PuntoMigrare Logo"
                style={{
                  height: "32px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </span>
            <span className="brand__text">
              <span style={{ color: "#F78D23" }}>Punto</span>
              <span style={{ color: "#2b286f" }}>Migrare</span>
            </span>
          </Link>

          <nav className="desktop-nav" id="desktopNav" aria-label="Principale">
            <NavLink to="/servizi">Servizi</NavLink>
            <NavLink to="/#perche">Perché noi</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contatti">Contatti</NavLink>
          </nav>

          <button
            className="mobile-toggle"
            id="menuToggle"
            aria-controls="mobileDrawer"
            aria-expanded={isDrawerOpen}
            aria-label="Apri menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7h22"
                stroke="#2b286f"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M3 14h22"
                stroke="#F78D23"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M3 21h22"
                stroke="#2b286f"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
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
