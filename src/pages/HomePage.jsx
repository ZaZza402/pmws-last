// src/pages/HomePage.jsx

import React from "react";
import PageTransition from "../components/PageTransition";
import AnimateOnScroll from "../components/AnimateOnScroll";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhySection from "../components/WhySection";
import FaqSection from "../components/FaqSection";
import ContactQuickLinks from "../components/ContactQuickLinks";
import DocumentSection from "../components/DocumentSection";

const HomePage = () => {
  return (
    <PageTransition>
      <title>PuntoMigrare - Immigrazione, CAF e Servizi a Roma</title>
      <meta
        name="description"
        content="Assistenza specializzata per permesso di soggiorno, cittadinanza, ricongiungimento familiare a Roma. Servizi CAF professionali e umani. Contattaci su WhatsApp."
      />
      <link rel="canonical" href="https://www.puntomigrare.it/" />

      <HeroSection />

      <AnimateOnScroll>
        <ServicesSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhySection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FaqSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ContactQuickLinks />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <DocumentSection />
      </AnimateOnScroll>
    </PageTransition>
  );
};

export default HomePage;
