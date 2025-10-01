import React from 'react';
import { motion } from 'framer-motion';

const HeroAnimation = () => {
  return (
    <div className="hero-animation">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        className="hero-svg"
        role="img"
        aria-label="Animazione rappresentante i servizi di immigrazione e pratiche burocratiche"
      >
        {/* Background circles for depth */}
        <motion.circle
          cx="320"
          cy="80"
          r="60"
          fill="rgba(255, 255, 255, 0.03)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.circle
          cx="80"
          cy="220"
          r="40"
          fill="rgba(255, 107, 53, 0.06)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Central building/office */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Building base */}
          <rect
            x="150"
            y="180"
            width="100"
            height="80"
            rx="8"
            fill="rgba(255, 255, 255, 0.15)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1"
          />
          
          {/* Building details */}
          <rect x="165" y="195" width="15" height="15" rx="2" fill="rgba(255, 255, 255, 0.4)" />
          <rect x="185" y="195" width="15" height="15" rx="2" fill="rgba(255, 255, 255, 0.4)" />
          <rect x="205" y="195" width="15" height="15" rx="2" fill="rgba(255, 255, 255, 0.4)" />
          
          <rect x="165" y="215" width="15" height="15" rx="2" fill="rgba(255, 255, 255, 0.4)" />
          <rect x="185" y="215" width="15" height="15" rx="2" fill="rgba(255, 107, 53, 0.7)" />
          <rect x="205" y="215" width="15" height="15" rx="2" fill="rgba(255, 255, 255, 0.4)" />
          
          {/* Door */}
          <rect x="185" y="235" width="15" height="25" rx="7" fill="rgba(255, 255, 255, 0.6)" />
        </motion.g>

        {/* Floating documents */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Document 1 */}
          <motion.g
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect
              x="80"
              y="120"
              width="40"
              height="50"
              rx="4"
              fill="rgba(255, 255, 255, 0.2)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />
            <rect x="85" y="130" width="30" height="2" rx="1" fill="rgba(255, 255, 255, 0.6)" />
            <rect x="85" y="135" width="25" height="2" rx="1" fill="rgba(255, 255, 255, 0.5)" />
            <rect x="85" y="140" width="30" height="2" rx="1" fill="rgba(255, 255, 255, 0.5)" />
            <rect x="85" y="145" width="20" height="2" rx="1" fill="rgba(255, 107, 53, 0.8)" />
          </motion.g>

          {/* Document 2 */}
          <motion.g
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, -2, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <rect
              x="280"
              y="140"
              width="40"
              height="50"
              rx="4"
              fill="rgba(255, 255, 255, 0.2)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />
            <rect x="285" y="150" width="30" height="2" rx="1" fill="rgba(255, 255, 255, 0.6)" />
            <rect x="285" y="155" width="25" height="2" rx="1" fill="rgba(255, 255, 255, 0.5)" />
            <rect x="285" y="160" width="30" height="2" rx="1" fill="rgba(255, 255, 255, 0.5)" />
            
            {/* Checkmark */}
            <motion.path
              d="M 290 170 L 295 175 L 305 165"
              stroke="rgba(34, 197, 94, 0.8)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </motion.g>

          {/* Document 3 */}
          <motion.g
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <rect
              x="180"
              y="100"
              width="40"
              height="50"
              rx="4"
              fill="rgba(255, 255, 255, 0.2)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />
            <rect x="185" y="110" width="30" height="2" rx="1" fill="rgba(255, 255, 255, 0.6)" />
            <rect x="185" y="115" width="25" height="2" rx="1" fill="rgba(255, 255, 255, 0.5)" />
            <rect x="185" y="120" width="30" height="2" rx="1" fill="rgba(255, 255, 255, 0.5)" />
            <rect x="185" y="125" width="20" height="2" rx="1" fill="rgba(255, 107, 53, 0.8)" />
          </motion.g>
        </motion.g>

        {/* Arrow paths showing document flow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Arrow 1 */}
          <motion.path
            d="M 120 145 Q 150 135 180 125"
            stroke="rgba(255, 107, 53, 0.4)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          <motion.path
            d="M 175 128 L 180 125 L 177 120"
            stroke="rgba(255, 107, 53, 0.4)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 3 }}
          />

          {/* Arrow 2 */}
          <motion.path
            d="M 220 125 Q 250 135 280 165"
            stroke="rgba(255, 107, 53, 0.4)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
          <motion.path
            d="M 277 160 L 280 165 L 275 162"
            stroke="rgba(255, 107, 53, 0.4)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 3.3 }}
          />
        </motion.g>

        {/* Success badge */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <circle
            cx="320"
            cy="200"
            r="25"
            fill="rgba(34, 197, 94, 0.1)"
            stroke="rgba(34, 197, 94, 0.4)"
            strokeWidth="2"
          />
          <motion.path
            d="M 310 200 L 318 208 L 330 196"
            stroke="rgba(34, 197, 94, 0.8)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          />
        </motion.g>

        {/* Floating particles */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {Array.from({length: 6}).map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + i * 60}
              cy={60 + (i % 2) * 20}
              r="2"
              fill="rgba(255, 255, 255, 0.6)"
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

export default HeroAnimation;