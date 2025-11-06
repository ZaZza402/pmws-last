import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes } from "react-icons/fa";
import "./InstallPrompt.css";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      return; // Already installed as PWA
    }

    // Check if user has previously dismissed the prompt
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const daysSinceDismissed =
        (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) {
        return; // Don't show for 7 days after dismissal
      }
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Show prompt after 10 seconds on the site
      setTimeout(() => {
        setShowPrompt(true);
      }, 10000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    localStorage.setItem("pwa-install-dismissed", Date.now().toString());
    setShowPrompt(false);
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="install-prompt"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <button
          className="install-prompt__close"
          onClick={handleDismiss}
          aria-label="Chiudi"
        >
          <FaTimes />
        </button>

        <div className="install-prompt__content">
          <div className="install-prompt__icon">
            <FaDownload size={24} />
          </div>

          <div className="install-prompt__text">
            <h3 className="install-prompt__title">Installa Punto Migrare</h3>
            <p className="install-prompt__description">
              Accedi rapidamente ai nostri servizi dalla tua schermata home
            </p>
          </div>

          <button
            className="install-prompt__button"
            onClick={handleInstallClick}
          >
            Installa
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InstallPrompt;
