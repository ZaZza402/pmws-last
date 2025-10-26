import React from "react";
import "./CustomLoader.css";

const CustomLoader = () => {
  return (
    <div className="custom-loader">
      <div className="custom-loader__content">
        {/* Animated Logo Pin */}
        <div className="loader-pin">
          <div className="loader-pin__top"></div>
          <div className="loader-pin__bottom"></div>
        </div>

        {/* Brand Name */}
        <div className="loader-brand">
          <span className="loader-brand__punto">Punto</span>
          <span className="loader-brand__migrare">Migrare</span>
        </div>

        {/* Loading Text */}
        <div className="loader-text">Caricamento in corso...</div>

        {/* Animated Dots */}
        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default CustomLoader;
