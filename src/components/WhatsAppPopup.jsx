// src/components/WhatsAppPopup.jsx

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  whatsappContacts,
  getWhatsAppUrl,
  isMobileDevice,
} from "../utils/whatsappHelper";
import "./WhatsAppPopup.css";

/**
 * WhatsAppPopup Component
 * Lightweight popup that appears near the button
 * Shows just names and phone numbers - no descriptions
 */
const WhatsAppPopup = ({
  message = "Buongiorno, vorrei informazioni sui vostri servizi.",
  triggerElement = null, // Custom trigger element
  showIcon = true,
  triggerText = null,
  className = "",
  position = "auto", // "top" | "bottom" | "left" | "right" | "auto"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const triggerRef = useRef(null);
  const mobile = isMobileDevice();

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleContactClick = (contact) => {
    const url = getWhatsAppUrl(contact.phone, message, mobile);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const renderTrigger = () => {
    if (triggerElement) {
      return React.cloneElement(triggerElement, {
        onClick: () => setIsOpen(!isOpen),
        ref: triggerRef,
      });
    }

    // Default trigger button
    return (
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`whatsapp-popup-trigger ${className}`}
        aria-label="Contattaci su WhatsApp"
      >
        {showIcon && <FaWhatsapp />}
        {triggerText && <span>{triggerText}</span>}
      </button>
    );
  };

  return (
    <div className="whatsapp-popup-wrapper">
      {renderTrigger()}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            className={`whatsapp-popup whatsapp-popup--${position}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            {/* Cute little arrow/tail */}
            <div className="whatsapp-popup__arrow" />

            {/* Contact options */}
            <div className="whatsapp-popup__contacts">
              {whatsappContacts.map((contact) => (
                <button
                  key={`wa-contact-${contact.id}`}
                  onClick={() => handleContactClick(contact)}
                  className="whatsapp-popup__contact"
                >
                  <div className="whatsapp-popup__contact-info">
                    <span className="whatsapp-popup__name">{contact.name}</span>
                    <span className="whatsapp-popup__phone">
                      {contact.phone}
                    </span>
                  </div>
                  <FaWhatsapp className="whatsapp-popup__icon" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppPopup;
