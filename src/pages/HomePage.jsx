// src/pages/HomePage.jsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimateOnScroll from '../components/AnimateOnScroll';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhySection from '../components/WhySection';
import FaqSection from '../components/FaqSection';
import BookingSection from '../components/BookingSection';
import ReviewsSection from '../components/ReviewsSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>PuntoMigrare  CAF e Servizi per l'Immigrazione a Roma</title>
        <meta name="description" content="Assistenza specializzata per permesso di soggiorno, cittadinanza, ricongiungimento familiare a Roma. Servizi CAF professionali e umani. Prenota online." />
        <link rel="canonical" href="https://www.puntomigrare.it/" />
      </Helmet>

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
        <BookingSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ReviewsSection />
      </AnimateOnScroll>
    </>
  );
};

export default HomePage;
