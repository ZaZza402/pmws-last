import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import WhatsAppPopup from "./WhatsAppPopup";
import "./MobileDrawer.css";

const MobileDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Handle rendering with proper timing for smooth animations
  useEffect(() => {
    if (isOpen) {
      // Start rendering
      setShouldRender(true);
      // Wait for next frame to trigger animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      // Start closing animation
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 350); // Faster animation timing
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const getFocusableElements = () => {
      if (!drawerRef.current) return [];

      const focusableSelectors = [
        "button:not([disabled])",
        "a[href]:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[tabindex]:not([tabindex="-1"]):not([disabled])',
      ].join(", ");

      return Array.from(drawerRef.current.querySelectorAll(focusableSelectors));
    };

    // Handle tab key to trap focus
    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

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
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleEscape);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Don't render at all if component hasn't been opened yet
  if (!shouldRender) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`mobile-drawer-backdrop ${isAnimating ? "open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sleek sliding menu panel */}
      <div
        ref={drawerRef}
        className={`mobile-drawer ${isAnimating ? "open" : ""}`}
        id="mobileDrawer"
        role="dialog"
        aria-label="Menu"
        {...(!isOpen ? { inert: true } : {})}
      >
        <div className="mobile-drawer__content">
          {/* Navigation - Minimal and elegant */}
          <nav className="mobile-drawer__nav" aria-label="Menu mobile">
            <Link to="/" onClick={onClose} className="mobile-drawer__link">
              Home
            </Link>

            {/* Services Accordion - Simplified */}
            <div className="mobile-drawer__category">
              <button
                className="mobile-drawer__category-trigger"
                onClick={() => toggleCategory("servizi")}
                aria-expanded={expandedCategory === "servizi"}
              >
                <span>Servizi</span>
                <ChevronDown
                  className={`mobile-drawer__chevron ${
                    expandedCategory === "servizi" ? "open" : ""
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`mobile-drawer__category-menu ${
                  expandedCategory === "servizi" ? "open" : ""
                }`}
              >
                <Link
                  to="/servizi"
                  onClick={onClose}
                  className="mobile-drawer__category-link mobile-drawer__category-link--main"
                >
                  Tutti i Servizi
                </Link>

                <Link
                  to="/servizi#migranti"
                  onClick={onClose}
                  className="mobile-drawer__category-link"
                >
                  Migranti
                </Link>

                <Link
                  to="/servizi#viaggiatori"
                  onClick={onClose}
                  className="mobile-drawer__category-link"
                >
                  Viaggiatori
                </Link>

                <Link
                  to="/servizi#famiglie"
                  onClick={onClose}
                  className="mobile-drawer__category-link"
                >
                  Famiglie
                </Link>

                <Link
                  to="/servizi#altri-servizi"
                  onClick={onClose}
                  className="mobile-drawer__category-link"
                >
                  Altri Servizi
                </Link>
              </div>
            </div>

            <Link to="/faq" onClick={onClose} className="mobile-drawer__link">
              FAQ
            </Link>
            <Link
              to="/contatti"
              onClick={onClose}
              className="mobile-drawer__link"
            >
              Contatti
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="mobile-drawer__cta">
            <p className="mobile-drawer__cta-title">Hai bisogno di aiuto?</p>
            <WhatsAppPopup
              message="Buongiorno, vorrei informazioni sui vostri servizi."
              position="top"
              triggerElement={
                <button className="mobile-drawer__whatsapp-btn">
                  <FaWhatsapp className="mobile-drawer__whatsapp-icon" />
                  <span>Contattaci su WhatsApp</span>
                </button>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
