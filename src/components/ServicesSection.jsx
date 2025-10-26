import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { allServices, serviceCategories } from "../servicesData";
import ScrollingServices from "./ScrollingServices";
import "./ServicesSection.css";

// Import images
import migrantiImg from "../assets/brand-posters/tourist-carrying-baggage.webp";
import viaggiatoriImg from "../assets/brand-posters/lady-is-sitting-airplane-looking-out-shiny-sun-through-window.webp";
import famiglieImg from "../assets/brand-posters/young-family-enjoying-trips-_2_.webp";
import altriServiziImg from "../assets/brand-posters/young-adult-organizing-documents.webp";

const categoryImages = {
  Migranti: migrantiImg,
  Viaggiatori: viaggiatoriImg,
  Famiglie: famiglieImg,
  "Altri Servizi": altriServiziImg,
};

const ServiceCard = ({ category, services, image }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={cardRef}
      className="service-card"
      style={{ backgroundImage: `url(${image})` }}
      data-category={category}
    >
      <motion.div className="service-card__parallax" style={{ y }} />

      {/* Category title on the right side */}
      <h3 className="service-card__category">{category}</h3>

      {/* Colored band at the bottom with services list */}
      <div className="service-card__band">
        <ul className="service-card__list">
          {services.map((service) => (
            <li key={service.id} className="service-card__item">
              <Link
                to={`/servizi#${service.id}`}
                className="service-card__link"
              >
                {service.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / (cardWidth + 24));
    setActiveCard(index);
  };

  return (
    <section id="servizi" className="section">
      {/* Scrolling Services Ticker - AT THE FUCKING TOP */}
      <ScrollingServices />

      <div className="container">
        <h2 className="section-title">I Nostri Servizi</h2>
        <p className="services-intro">
          Dallo sportello immigrazione alle pratiche CAF e patronato, copriamo
          ogni tua esigenza.
        </p>

        <div
          className="services-cards-wrapper"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {serviceCategories.map((category, index) => {
            const categoryServices = allServices.filter(
              (service) => service.category === category
            );
            return (
              <ServiceCard
                key={category}
                category={category}
                services={categoryServices}
                image={categoryImages[category]}
              />
            );
          })}
        </div>

        {/* Swipe Indicator Dots - Mobile Only */}
        <div className="swipe-dots">
          {serviceCategories.map((_, index) => (
            <span
              key={index}
              className={`swipe-dot ${index === activeCard ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="services-cta">
          <Link to="/servizi" className="btn btn--blue">
            Approfondisci
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
