import React, { useRef, useState, useEffect } from "react";
import { allServices } from "../servicesData";

const services = allServices.map((service) => service.shortTitle);

const ScrollingServices = () => {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef(null);

  // Manual scroll animation when not dragging
  useEffect(() => {
    if (isDragging || isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth / 2;

    const animate = () => {
      if (isDragging || isPaused) return;

      scrollPosition += 0.5; // Scroll speed
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isPaused]);

  // Mouse events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="scrolling-services"
      style={{
        overflow: "auto",
        whiteSpace: "nowrap",
        width: "100%",
        background: "linear-gradient(135deg, #a8d5ff, #d4e9ff)",
        margin: "0",
        padding: "0.75rem 0",
        position: "relative",
        cursor: "grab",
        userSelect: "none",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
      aria-label="Servizi di immigrazione"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        handleMouseLeave();
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <style>{`
        .scrolling-services::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        ref={scrollContentRef}
        style={{
          display: "inline-block",
          willChange: "transform",
        }}
      >
        {services.map((service, idx) => (
          <span
            key={idx}
            style={{
              display: "inline-block",
              margin: "0 2.5rem",
              fontWeight: "500",
              fontSize: "1.05rem",
              color: "#2b286f",
              pointerEvents: "none",
            }}
          >
            {service}
          </span>
        ))}
        {services.map((service, idx) => (
          <span
            key={`repeat-${idx}`}
            style={{
              display: "inline-block",
              margin: "0 2.5rem",
              fontWeight: "500",
              fontSize: "1.05rem",
              color: "#2b286f",
              pointerEvents: "none",
            }}
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingServices;
