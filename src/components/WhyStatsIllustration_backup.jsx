import React from 'react';
import { motion } from 'framer-motion';

const WhyStatsIllustration = () => {
  return (
    <div className="why-stats-illustration">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 480 360"
        className="why-svg"
        role="img"
        aria-label="Statistiche e risultati dei servizi CAF"
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(15, 52, 96, 0.05)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="320" height="240" fill="url(#grid)" />

        {/* Chart container */}
        <motion.rect
          x="60"
          y="50"
          width="360"
          height="260"
          rx="12"
          fill="rgba(255, 255, 255, 0.8)"
          stroke="rgba(15, 52, 96, 0.1)"
          strokeWidth="1.5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Chart title */}
        <motion.text
          x="240"
          y="75"
          textAnchor="middle"
          fontSize="18"
          fill="rgba(15, 52, 96, 0.8)"
          fontWeight="700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I Nostri Risultati
        </motion.text>

        {/* Green trend arrow - positioned under title */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.path
            d="M 140 90 Q 190 85 240 88 Q 290 90 340 85"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <motion.path
            d="M 335 83 L 340 85 L 337 88"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 2.5 }}
          />
        </motion.g>

        {/* Bar chart */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Chart bars - properly spaced and positioned */}
          <motion.rect
            x="110"
            y="220"
            width="25"
            height="40"
            rx="3"
            fill="rgba(255, 107, 53, 0.7)"
            initial={{ height: 0, y: 260 }}
            animate={{ height: 40, y: 220 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          />
          <motion.rect
            x="155"
            y="205"
            width="25"
            height="55"
            rx="3"
            fill="rgba(15, 52, 96, 0.7)"
            initial={{ height: 0, y: 260 }}
            animate={{ height: 55, y: 205 }}
            transition={{ duration: 0.8, delay: 2 }}
          />
          <motion.rect
            x="200"
            y="185"
            width="25"
            height="75"
            rx="3"
            fill="rgba(34, 197, 94, 0.7)"
            initial={{ height: 0, y: 260 }}
            animate={{ height: 75, y: 185 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          />
          <motion.rect
            x="245"
            y="175"
            width="25"
            height="85"
            rx="3"
            fill="rgba(255, 107, 53, 0.8)"
            initial={{ height: 0, y: 260 }}
            animate={{ height: 85, y: 175 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          />
          <motion.rect
            x="290"
            y="165"
            width="25"
            height="95"
            rx="3"
            fill="rgba(15, 52, 96, 0.8)"
            initial={{ height: 0, y: 260 }}
            animate={{ height: 95, y: 165 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          />

          {/* Chart labels */}
          <text x="122" y="275" textAnchor="middle" fontSize="10" fill="rgba(15, 52, 96, 0.6)">2020</text>
          <text x="167" y="275" textAnchor="middle" fontSize="10" fill="rgba(15, 52, 96, 0.6)">2021</text>
          <text x="212" y="275" textAnchor="middle" fontSize="10" fill="rgba(15, 52, 96, 0.6)">2022</text>
          <text x="257" y="275" textAnchor="middle" fontSize="10" fill="rgba(15, 52, 96, 0.6)">2023</text>
          <text x="302" y="275" textAnchor="middle" fontSize="10" fill="rgba(15, 52, 96, 0.6)">2024</text>
        </motion.g>

        {/* Key statistics - positioned above chart */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          {/* Stat 1 - Successo */}
          <text x="140" y="115" textAnchor="middle" fontSize="10" fill="rgba(15, 52, 96, 0.7)" fontWeight="600">Successo</text>
          <circle cx="140" cy="130" r="15" fill="rgba(255, 107, 53, 0.1)" stroke="rgba(255, 107, 53, 0.4)" strokeWidth="2" />
          <text x="140" y="136" textAnchor="middle" fontSize="12" fill="rgba(255, 107, 53, 0.8)" fontWeight="700">98%</text>

          {/* Stat 2 - Risposta */}
          <text x="240" y="115" textAnchor="middle" fontSize="10" fill="rgba(15, 52, 96, 0.7)" fontWeight="600">Risposta</text>
          <circle cx="240" cy="130" r="15" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="2" />
          <text x="240" y="136" textAnchor="middle" fontSize="12" fill="rgba(34, 197, 94, 0.8)" fontWeight="700">24h</text>

          {/* Stat 3 - Clienti */}
          <text x="340" y="115" textAnchor="middle" fontSize="10" fill="rgba(15, 52, 96, 0.7)" fontWeight="600">Clienti</text>
          <circle cx="340" cy="130" r="15" fill="rgba(15, 52, 96, 0.1)" stroke="rgba(15, 52, 96, 0.4)" strokeWidth="2" />
          <text x="340" y="136" textAnchor="middle" fontSize="12" fill="rgba(15, 52, 96, 0.8)" fontWeight="700">500+</text>
        </motion.g>

        {/* Trend arrow */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <path
            d="M 90 100 Q 140 85 190 90 Q 220 92 240 88"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,2"
          />
          <path
            d="M 235 86 L 240 88 L 237 93"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Quality badges - positioned below chart with proper alignment */}
        <motion.g
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
        >
          {/* Badge 1 - Speed - aligned with first two bars */}
          <rect x="120" y="290" width="50" height="18" rx="9" fill="rgba(255, 107, 53, 0.1)" stroke="rgba(255, 107, 53, 0.3)" strokeWidth="1" />
          <text x="145" y="301" textAnchor="middle" fontSize="8" fill="rgba(255, 107, 53, 0.8)" fontWeight="600">Velocità</text>

          {/* Badge 2 - Quality - aligned with middle bar */}
          <rect x="185" y="290" width="50" height="18" rx="9" fill="rgba(15, 52, 96, 0.1)" stroke="rgba(15, 52, 96, 0.3)" strokeWidth="1" />
          <text x="210" y="301" textAnchor="middle" fontSize="8" fill="rgba(15, 52, 96, 0.8)" fontWeight="600">Qualità</text>

          {/* Badge 3 - Trust - aligned with last two bars */}
          <rect x="250" y="290" width="50" height="18" rx="9" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" />
          <text x="275" y="301" textAnchor="middle" fontSize="8" fill="rgba(34, 197, 94, 0.8)" fontWeight="600">Fiducia</text>
        </motion.g>

        {/* Connecting lines - subtle connections from bars to badges */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.3 }}
        >
          <path d="M 135 275 L 145 290" stroke="rgba(255, 107, 53, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M 212 275 L 210 290" stroke="rgba(15, 52, 96, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M 270 275 L 275 290" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
        </motion.g>
      </svg>
    </div>
  );
};

export default WhyStatsIllustration;