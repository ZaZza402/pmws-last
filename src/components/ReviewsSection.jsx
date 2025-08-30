// src/components/ReviewsSection.jsx

import React from 'react';

// 1. Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// 2. Import Swiper's core and module styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReviewsSection = () => {
  return (
    <section id="recensioni" className="section" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title">Le Loro Parole, La Nostra Garanzia</h2>
        
        {/* 3. Implement the Swiper component */}
        <Swiper
          // Load the modules you want to use
          modules={[Navigation, Pagination]}
          
          // Configuration options
          spaceBetween={30} // Space between slides
          slidesPerView={1}  // Default: show 1 slide
          loop={true}        // Enable continuous looping
          pagination={{ clickable: true }} // Enable clickable pagination dots
          navigation={true}  // Enable Next/Prev arrows
          
          // Responsive breakpoints
          breakpoints={{
            // When window width is >= 768px
            768: {
              slidesPerView: 2, // Show 2 slides
              spaceBetween: 20,
            },
            // When window width is >= 1024px
            1120: {
              slidesPerView: 3, // Show 3 slides
              spaceBetween: 30,
            },
          }}
          className="reviews__wrap mt-4" // Add our custom class
        >
          {/* Each SwiperSlide is a single review card */}
          <SwiperSlide>
            <figure className="review" aria-label="Recensione di Giulia M.">
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div className="avatar" aria-hidden="true">G</div>
                <div aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</div>
              </div>
              <blockquote className="mt-1" style={{ margin: 0 }}>«Servizio impeccabile, hanno seguito la mia pratica di cittadinanza in modo rapido e professionale. Finalmente un punto di riferimento sicuro.»</blockquote>
              <figcaption className="mt-2">— Giulia M.</figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="review" aria-label="Recensione di Ahmed K.">
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div className="avatar" aria-hidden="true">A</div>
                <div aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</div>
              </div>
              <blockquote className="mt-1" style={{ margin: 0 }}>«Finalmente un CAF dove ti ascoltano e ti spiegano tutto con pazienza. Hanno risolto un problema ISEE che mi portavo dietro da mesi. Consigliatissimi.»</blockquote>
              <figcaption className="mt-2">— Ahmed K.</figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="review" aria-label="Recensione di Andrei P.">
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div className="avatar" aria-hidden="true">P</div>
                <div aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</div>
              </div>
              <blockquote className="mt-1" style={{ margin: 0 }}>«Onesti, veloci e incredibilmente umani. Hanno gestito il mio ricongiungimento familiare senza un intoppo. Grazie di cuore.»</blockquote>
              <figcaption className="mt-2">— Andrei P.</figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="review" aria-label="Recensione di Samira L.">
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div className="avatar" aria-hidden="true">S</div>
                <div aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</div>
              </div>
              <blockquote className="mt-1" style={{ margin: 0 }}>«Gentili, veloci e precise. Mi hanno aiutata con la NASpI in un momento di difficoltà, togliendomi ogni preoccupazione.»</blockquote>
              <figcaption className="mt-2">— Samira L.</figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;