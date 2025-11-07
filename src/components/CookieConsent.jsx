import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite, FaTimes } from "react-icons/fa";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after 2 seconds
      setTimeout(() => setShowBanner(true), 2000);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Initialize Google Analytics if consent was given
      if (savedPreferences.analytics) {
        initializeAnalytics();
      }
    }
  }, []);

  const initializeAnalytics = () => {
    // This will be called when analytics consent is given
    // Google Analytics will be initialized here
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    initializeAnalytics();
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    if (preferences.analytics) {
      initializeAnalytics();
    }
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleTogglePreference = (key) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <div className="cookie-consent-overlay">
        <motion.div
          className="cookie-consent-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {!showSettings ? (
            // Main Banner
            <div className="cookie-banner-content">
              <div className="cookie-banner-icon">
                <FaCookieBite size={32} />
              </div>

              <div className="cookie-banner-text">
                <h3>Utilizziamo i Cookie</h3>
                <p>
                  Utilizziamo cookie per migliorare la tua esperienza di
                  navigazione, analizzare il traffico del sito e personalizzare
                  i contenuti.{" "}
                  <Link to="/cookie-policy">Leggi la nostra Cookie Policy</Link>
                </p>
              </div>

              <div className="cookie-banner-actions">
                <button
                  className="cookie-btn cookie-btn--primary"
                  onClick={handleAcceptAll}
                >
                  Accetta Tutti
                </button>
                <button
                  className="cookie-btn cookie-btn--secondary"
                  onClick={handleAcceptNecessary}
                >
                  Solo Necessari
                </button>
                <button
                  className="cookie-btn cookie-btn--text"
                  onClick={() => setShowSettings(true)}
                >
                  Personalizza
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="cookie-settings-content">
              <div className="cookie-settings-header">
                <h3>Impostazioni Cookie</h3>
                <button
                  className="cookie-close-btn"
                  onClick={() => setShowSettings(false)}
                  aria-label="Chiudi impostazioni"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="cookie-settings-body">
                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div>
                      <h4>Cookie Necessari</h4>
                      <p>
                        Essenziali per il funzionamento del sito. Non possono
                        essere disattivati.
                      </p>
                    </div>
                    <label className="cookie-toggle">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                      />
                      <span className="cookie-toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div>
                      <h4>Cookie Analitici</h4>
                      <p>
                        Ci aiutano a capire come i visitatori interagiscono con
                        il sito (Google Analytics).
                      </p>
                    </div>
                    <label className="cookie-toggle">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleTogglePreference("analytics")}
                      />
                      <span className="cookie-toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="cookie-category">
                  <div className="cookie-category-header">
                    <div>
                      <h4>Cookie di Marketing</h4>
                      <p>
                        Utilizzati per tracciare i visitatori attraverso diversi
                        siti web per mostrare annunci pertinenti.
                      </p>
                    </div>
                    <label className="cookie-toggle">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handleTogglePreference("marketing")}
                      />
                      <span className="cookie-toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="cookie-settings-footer">
                <button
                  className="cookie-btn cookie-btn--secondary"
                  onClick={() => setShowSettings(false)}
                >
                  Indietro
                </button>
                <button
                  className="cookie-btn cookie-btn--primary"
                  onClick={handleSavePreferences}
                >
                  Salva Preferenze
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CookieConsent;
