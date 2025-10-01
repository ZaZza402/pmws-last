import React from 'react';
import { motion } from 'framer-motion';
import ScrollingServices from './ScrollingServices';
import HeroAnimation from './HeroAnimation';
import HeroIconGrid from './HeroIconGrid';
import './HeroAnimation.css';
import './HeroIconGrid.css';

const HeroSection = () => {
  const [heroVisual, setHeroVisual] = React.useState('animation'); // Options: 'animation', 'icons', 'none'
  
  const renderHeroVisual = () => {
    switch(heroVisual) {
      case 'animation':
        return <HeroAnimation />;
      case 'icons':
        return <HeroIconGrid />;
      default:
        return null;
    }
  };

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
            Il tuo <span style={{ color: 'rgb(255, 107, 53)' }}>Punto</span> di riferimento per un nuovo inizio
          </motion.h1>
          
          <motion.p className="font-accent" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.6} } }}>
            Affrontare la burocrazia non deve essere complicato. Ti guidiamo con un servizio chiaro, puntuale e costruito sulle tue reali esigenze. Siamo due professioniste che lavorano al tuo fianco, con un unico obiettivo: darti risposte certe e la massima tranquillità.
          </motion.p>
          
          <motion.div className="hero__cta" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.6} } }}>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn--primary" href="#prenota">Prenota un Appuntamento</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn--ghost" href="tel:+390612345678">Parla con noi</motion.a>
          </motion.div>
          
          {/* Temporary visual switcher - remove this after deciding */}
          <motion.div 
            className="visual-switcher" 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.6} } }}
            style={{
              display: 'flex', 
              gap: '0.5rem', 
              marginTop: '1rem', 
              flexWrap: 'wrap'
            }}
          >
            <button 
              onClick={() => setHeroVisual('animation')} 
              style={{
                padding: '0.5rem 1rem',
                background: heroVisual === 'animation' ? 'rgba(255, 107, 53, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '20px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              SVG Animation
            </button>
            <button 
              onClick={() => setHeroVisual('icons')} 
              style={{
                padding: '0.5rem 1rem',
                background: heroVisual === 'icons' ? 'rgba(255, 107, 53, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '20px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Icon Grid
            </button>
            <button 
              onClick={() => setHeroVisual('none')} 
              style={{
                padding: '0.5rem 1rem',
                background: heroVisual === 'none' ? 'rgba(255, 107, 53, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '20px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Text Only
            </button>
          </motion.div>
        </motion.div>
        
        {heroVisual !== 'none' && (
          <motion.div 
            className="hero__visual-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            {renderHeroVisual()}
          </motion.div>
        )}

        {/* Scrolling immigration services at the end of the section */}
        <ScrollingServices />
      </div>
    </section>
  );
};

export default HeroSection;