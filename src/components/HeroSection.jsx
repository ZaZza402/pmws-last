import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import heroBackground from "../assets/brand-posters/young-family-hero-optimized.webp";
import logoIcon from "../assets/brand-logo/pm-logo-blue-orange.svg";
import "./HeroSection.css";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effect - image moves slower than the page scroll
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);

    // Preload the hero image
    const img = new Image();
    img.src = heroBackground;
    img.onload = () => setImageLoaded(true);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for logo elements - zoom in on load, then float
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  const sloganVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 1.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section id="home" className="new-hero" aria-label="Benvenuto">
      {/* Parallax Background with loading state */}
      <motion.div
        className={`new-hero__background ${imageLoaded ? "loaded" : "loading"}`}
        style={{
          y: backgroundY,
          backgroundImage: imageLoaded ? `url(${heroBackground})` : "none",
        }}
      />

      {/* Gradient Overlay for readability */}
      <div className="new-hero__overlay" />

      {/* Content Container */}
      <div className="container new-hero__content">
        <motion.div
          className="new-hero__logo-container"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Logo Icon with Reflective Mirror Finish */}
          <motion.div className="new-hero__logo-icon" variants={logoVariants}>
            <img
              src={logoIcon}
              alt="Punto Migrare Logo"
              className="new-hero__logo-svg"
              width="120"
              height="120"
              loading="eager"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="new-hero__tagline"
            variants={textVariants}
            custom={0.8}
          >
            Unire orizzonti, avvicinare persone
          </motion.div>

          {/* Value Proposition Headline */}
          <motion.h1
            className="new-hero__headline"
            custom={1}
            variants={textVariants}
          >
            Il tuo <span className="headline__punto">Punto</span> di riferimento
            <br />
            per un nuovo inizio
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p className="new-hero__description" variants={sloganVariants}>
            Affrontare la burocrazia non deve essere complicato. Ti guidiamo con
            un servizio chiaro, puntuale e costruito sulle tue reali esigenze.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="new-hero__cta"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={ctaVariants}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn--primary"
            href="https://wa.me/390612345678?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20vostri%20servizi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaWhatsapp size={20} />
            Contattaci su WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn--ghost"
            href="tel:+390612345678"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaPhoneAlt size={18} />
            Chiamaci Ora
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="new-hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          onClick={() => {
            document.getElementById("servizi")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14m0 0l7-7m-7 7l-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
