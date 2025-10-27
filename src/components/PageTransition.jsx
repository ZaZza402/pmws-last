// src/components/PageTransition.jsx

import React from "react";
import "./PageTransition.css";

/**
 * PageTransition - Wraps page content with subtle fade-in animation
 * Creates an elegant transition effect when navigating between pages
 * The animation is intentionally subtle - felt more than seen
 */
const PageTransition = ({ children }) => {
  return <div className="page-transition-wrapper">{children}</div>;
};

export default PageTransition;
