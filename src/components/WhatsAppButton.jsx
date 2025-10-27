import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl =
    "https://wa.me/390612345678?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20vostri%20servizi.";

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
        <motion.a
          href={whatsappUrl}
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
          title="Contattaci su WhatsApp"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp size={28} color="#f6f6f6ff" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
