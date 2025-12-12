// src/components/PhonePopup.jsx

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import "./WhatsAppPopup.css"; // Reuse the same styles

/**
 * PhonePopup Component
 * Same style as WhatsAppPopup but opens phone app
 * Shows just names and phone numbers
 */

// Contact data - Paula and Mihaela
const phoneContacts = [
  {
    id: "paula",
    name: "Paula",
    phone: "+39 345 683 9875",
    phoneLink: "tel:+393456839875",
  },
  {
    id: "mihaela",
    name: "Mihaela",
    phone: "+39 345 925 6257",
    phoneLink: "tel:+393459256257",
  },
];

const PhonePopup = ({
  triggerElement = null,
  showIcon = true,
  triggerText = null,
  className = "",
  position = "auto", // "top" | "bottom" | "left" | "right" | "auto"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const triggerRef = useRef(null);

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
    window.location.href = contact.phoneLink;
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
        aria-label="Chiamaci"
      >
        {showIcon && <FaPhoneAlt />}
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
              {phoneContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => handleContactClick(contact)}
                  className="whatsapp-popup__contact"
                >
                  <div className="whatsapp-popup__contact-info">
                    <span className="whatsapp-popup__name">{contact.name}</span>
                    <span className="whatsapp-popup__phone">
                      {contact.phone}
                    </span>
                  </div>
                  <FaPhoneAlt className="whatsapp-popup__icon whatsapp-popup__icon--phone" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhonePopup;
