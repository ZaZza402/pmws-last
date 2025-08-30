import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/390612345678?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20vostri%20servizi.";

  return (
    <motion.a
      href={whatsappUrl}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      title="Contattaci su WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 150, delay: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp size={28} color="#f6f6f6ff" />
    </motion.a>
  );
};

export default WhatsAppButton;