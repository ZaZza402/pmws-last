// src/components/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component - Handles scroll position on route changes
 * Disables browser scroll restoration and manages it manually
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element after a short delay
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      // No hash - scroll to top immediately
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Use 'instant' instead of no behavior
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
