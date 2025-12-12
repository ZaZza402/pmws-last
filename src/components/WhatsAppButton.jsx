import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  whatsappContacts,
  getWhatsAppUrl,
  isMobileDevice,
} from "../utils/whatsappHelper";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const message = "Buongiorno, vorrei informazioni sui vostri servizi.";
  const mobile = isMobileDevice();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approximately 100vh)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition > heroHeight * 0.8);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Check initial position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (contact) => {
    const url = getWhatsAppUrl(contact.phone, message, mobile);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsPopupOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="whatsapp-btn-container">
          {/* Cute Popup */}
          <AnimatePresence>
            {isPopupOpen && (
              <motion.div
                className="whatsapp-fab-popup"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                {/* Arrow pointing down to button */}
                <div className="whatsapp-fab-popup__arrow" />

                {/* Contact options */}
                {whatsappContacts.map((contact, index) => (
                  <motion.button
                    key={contact.id}
                    onClick={() => handleContactClick(contact)}
                    className="whatsapp-fab-popup__contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="whatsapp-fab-popup__info">
                      <span className="whatsapp-fab-popup__name">
                        {contact.name}
                      </span>
                      <span className="whatsapp-fab-popup__phone">
                        {contact.phone}
                      </span>
                    </div>
                    <FaWhatsapp className="whatsapp-fab-popup__icon" />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp FAB */}
          <motion.button
            className="whatsapp-btn"
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            aria-label="Contattaci su WhatsApp"
            title="Contattaci su WhatsApp"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={28} color="#f6f6f6ff" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
