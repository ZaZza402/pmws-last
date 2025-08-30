import React from 'react';
import { motion } from 'framer-motion';
import ScrollingServices from './ScrollingServices';

const HeroSection = () => {
  return (
    <section id="home" className="hero" aria-label="Introduzione">
      <div className="container hero__inner">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.6} } }}>
            Il tuo <span style={{ color: '#E87722' }}>Punto</span> di riferimento per un nuovo inizio
          </motion.h1>
          
          <motion.p className="font-accent" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.6} } }}>
            Affrontare la burocrazia non deve essere complicato. Ti guidiamo con un servizio chiaro, puntuale e costruito sulle tue reali esigenze. Siamo due professioniste che lavorano al tuo fianco, con un unico obiettivo: darti risposte certe e la massima tranquillità.
          </motion.p>
          
          <motion.div className="hero__cta" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.6} } }}>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn--primary" href="#prenota">Prenota un Appuntamento</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn--ghost" href="tel:+390612345678">Parla con noi</motion.a>
          </motion.div>
        </motion.div>
        
        <motion.figure 
          className="hero__card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <img className="hero__img" src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=1600&auto=format&fit=crop" alt="Due professioniste sorridenti accolgono un cliente in ufficio" loading="lazy"/>
        </motion.figure>

        {/* Scrolling immigration services at the end of the section */}
        <ScrollingServices />
      </div>
    </section>
  );
};

export default HeroSection;