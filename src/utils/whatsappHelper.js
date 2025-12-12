// src/utils/whatsappHelper.js

/**
 * WhatsApp Contact Configuration
 * Centralized contact information for Paula and Mihaela
 */

export const whatsappContacts = [
  {
    id: "paula",
    name: "Paula",
    phone: "393456839875",
    displayPhone: "+39 345 683 9875",
    color: "#2b286f", // Purple - primary brand color
    role: "Consulente",
  },
  {
    id: "mihaela",
    name: "Mihaela",
    phone: "393459256257",
    displayPhone: "+39 345 925 6257",
    color: "#F78D23", // Orange - secondary brand color
    role: "Consulente",
  },
];

/**
 * Generate WhatsApp URL for web or mobile
 * @param {string} phone - Phone number (e.g., "393456839875")
 * @param {string} message - Pre-filled message text
 * @param {boolean} isMobile - Whether to use mobile deep link
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppUrl = (phone, message = "", isMobile = false) => {
  const encodedMessage = encodeURIComponent(message);

  if (isMobile) {
    return `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
  }

  return `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ""}`;
};

/**
 * Get default WhatsApp message for different contexts
 */
export const whatsappMessages = {
  general: "Buongiorno, vorrei informazioni sui vostri servizi.",
  service: (serviceName) =>
    `Buongiorno, vorrei informazioni su: ${serviceName}`,
  document: "Buongiorno, vorrei informazioni sui documenti necessari.",
  appointment: "Buongiorno, vorrei prenotare un appuntamento.",
  urgent: "Buongiorno, ho bisogno di assistenza urgente.",
};

/**
 * Check if user is on mobile device
 */
export const isMobileDevice = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

/**
 * Get full contact info for both numbers
 */
export const getAllContacts = () => whatsappContacts;

/**
 * Get contact by name
 */
export const getContactByName = (name) => {
  return whatsappContacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
};
