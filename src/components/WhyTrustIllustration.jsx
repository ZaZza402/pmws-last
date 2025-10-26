import React from 'react';
import { motion } from 'framer-motion';

const WhyTrustIllustration = () => {
  return (
    <div className="why-trust-illustration">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 480 360"
        className="why-svg"
        role="img"
        aria-label="Illustrazione di fiducia e sicurezza per servizi CAF"
      >
        {/* Background elements */}
        <motion.circle
          cx="380"
          cy="80"
          r="60"
          fill="rgba(43, 40, 111, 0.05)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.circle
          cx="100"
          cy="280"
          r="45"
          fill="rgba(247, 141, 35, 0.08)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />

        {/* Central shield (trust/security) */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <path
            d="M240 130 L210 145 L210 230 Q210 245 225 252 L240 260 L255 252 Q270 245 270 230 L270 145 Z"
            fill="rgba(43, 40, 111, 0.1)"
            stroke="rgba(43, 40, 111, 0.3)"
            strokeWidth="3"
          />
          
          {/* Shield checkmark */}
          <motion.path
            d="M 220 200 L 235 215 L 260 185"
            stroke="rgba(34, 197, 94, 0.8)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.g>

        {/* Document icons around shield */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Document 1 - left */}
          <motion.g
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect
              x="100"
              y="160"
              width="40"
              height="55"
              rx="4"
              fill="rgba(255, 255, 255, 0.9)"
              stroke="rgba(43, 40, 111, 0.2)"
              strokeWidth="1.5"
            />
            <rect x="108" y="172" width="24" height="2.5" rx="1" fill="rgba(43, 40, 111, 0.4)" />
            <rect x="108" y="178" width="20" height="2.5" rx="1" fill="rgba(43, 40, 111, 0.3)" />
            <rect x="108" y="184" width="24" height="2.5" rx="1" fill="rgba(247, 141, 35, 0.6)" />
          </motion.g>

          {/* Document 2 - right */}
          <motion.g
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -1, 0]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <rect
              x="340"
              y="170"
              width="40"
              height="55"
              rx="4"
              fill="rgba(255, 255, 255, 0.9)"
              stroke="rgba(43, 40, 111, 0.2)"
              strokeWidth="1.5"
            />
            <rect x="348" y="182" width="24" height="2.5" rx="1" fill="rgba(43, 40, 111, 0.4)" />
            <rect x="348" y="188" width="20" height="2.5" rx="1" fill="rgba(43, 40, 111, 0.3)" />
            <rect x="348" y="194" width="24" height="2.5" rx="1" fill="rgba(247, 141, 35, 0.6)" />
          </motion.g>
        </motion.g>

        {/* Clock icon (time efficiency) */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <circle
            cx="140"
            cy="80"
            r="28"
            fill="rgba(255, 255, 255, 0.8)"
            stroke="rgba(43, 40, 111, 0.3)"
            strokeWidth="2"
          />
          <motion.path
            d="M 140 65 L 140 80 L 155 95"
            stroke="rgba(43, 40, 111, 0.7)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          />
        </motion.g>

        {/* Language/communication bubbles */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <ellipse
            cx="360"
            cy="270"
            rx="30"
            ry="18"
            fill="rgba(247, 141, 35, 0.1)"
            stroke="rgba(247, 141, 35, 0.3)"
            strokeWidth="1.5"
          />
          <text
            x="360"
            y="276"
            textAnchor="middle"
            fontSize="12"
            fill="rgba(43, 40, 111, 0.7)"
            fontWeight="600"
          >
            IT/EN/RO
          </text>
        </motion.g>

        {/* Connecting lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.path
            d="M 168 100 Q 200 120 210 145"
            stroke="rgba(43, 40, 111, 0.2)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          />
          <motion.path
            d="M 270 145 Q 310 200 340 195"
            stroke="rgba(247, 141, 35, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          />
        </motion.g>

        {/* Floating particles */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          {Array.from({length: 10}).map((_, i) => (
            <motion.circle
              key={i}
              cx={60 + i * 40}
              cy={40 + (i % 2) * 25}
              r="2.5"
              fill="rgba(43, 40, 111, 0.3)"
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

export default WhyTrustIllustration;
