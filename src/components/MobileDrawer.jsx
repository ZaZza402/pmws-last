import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./MobileDrawer.css";

const MobileDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent body scroll and touch events
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on body
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.touchAction = "none";
    } else {
      // Restore scrolling
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.touchAction = "";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Handle rendering with proper timing for animations
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
      }, 700);
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
    <div
      ref={drawerRef}
      className={`mobile-drawer ${isAnimating ? "open" : ""}`}
      id="mobileDrawer"
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Menu"
      aria-modal="true"
    >
      {/* Mobile Panel Container */}
      <div className="mobile-panel">
        {/* Close button - only show when open */}
        {isOpen && (
          <button
            className="mobile-panel__close"
            aria-label="Chiudi menu"
            onClick={onClose}
          >
            <span></span>
            <span></span>
          </button>
        )}

        {/* Navigation - Vertical Layout with CAPS - NO LOGO */}
        <nav className="mobile-panel__nav" aria-label="Menu mobile">
          <Link to="/" onClick={onClose}>
            HOME
          </Link>
          <Link to="/servizi" onClick={onClose}>
            SERVIZI
          </Link>
          <Link to="/#perche" onClick={onClose}>
            PERCHÉ NOI
          </Link>
          <Link to="/faq" onClick={onClose}>
            FAQ
          </Link>
          <Link to="/contatti" onClick={onClose}>
            CONTATTI
          </Link>
        </nav>

        {/* Single CTA Button */}
        <div className="mobile-panel__cta">
          <a
            href="https://wa.me/390612345678?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20vostri%20servizi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaWhatsapp size={20} />
            Contattaci su WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
