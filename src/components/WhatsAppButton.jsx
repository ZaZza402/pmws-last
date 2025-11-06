import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const message = "Buongiorno, vorrei informazioni sui vostri servizi.";

  // Detect mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Contact options
  const contacts = [
    {
      name: "Paola",
      phone: "393456839875",
      displayPhone: "+39 345 683 9875",
      color: "#2b286f",
    },
    {
      name: "Michela",
      phone: "393459256257",
      displayPhone: "+39 345 925 6257",
      color: "#F78D23",
    },
  ];

  const getWhatsAppUrl = (phone) => {
    return isMobile
      ? `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`
      : `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

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

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="whatsapp-btn-container">
          {/* Contact Options Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="whatsapp-menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {contacts.map((contact, index) => (
                  <motion.a
                    key={contact.name}
                    href={getWhatsAppUrl(contact.phone)}
                    className="whatsapp-menu-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ "--contact-color": contact.color }}
                  >
                    <div className="whatsapp-menu-item-content">
                      <span className="whatsapp-menu-name">{contact.name}</span>
                      <span className="whatsapp-menu-phone">
                        {contact.displayPhone}
                      </span>
                    </div>
                    <FaWhatsapp className="whatsapp-menu-icon" size={20} />
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            className={`whatsapp-btn ${isMenuOpen ? "whatsapp-btn--open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Chiudi menu WhatsApp" : "Apri menu WhatsApp"}
            title={isMenuOpen ? "Chiudi menu" : "Contattaci su WhatsApp"}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: isMenuOpen ? 90 : 0 
            }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={28} color="#f6f6f6ff" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaWhatsapp size={28} color="#f6f6f6ff" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
