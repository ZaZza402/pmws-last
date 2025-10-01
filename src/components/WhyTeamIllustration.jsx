import React from 'react';
import { motion } from 'framer-motion';

const WhyTeamIllustration = () => {
  return (
    <div className="why-team-illustration">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 480 360"
        className="why-svg"
        role="img"
        aria-label="Illustrazione del team professionale CAF"
      >
        {/* Background elements */}
        <motion.rect
          x="40"
          y="40"
          width="400"
          height="280"
          rx="20"
          fill="rgba(15, 52, 96, 0.03)"
          stroke="rgba(15, 52, 96, 0.1)"
          strokeWidth="1.5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Office desk/table */}
        <motion.rect
          x="120"
          y="240"
          width="240"
          height="25"
          rx="12"
          fill="rgba(15, 52, 96, 0.08)"
          initial={{ y: 270, opacity: 0 }}
          animate={{ y: 240, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Professional figures */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* Professional 1 */}
          <g>
            <circle cx="180" cy="150" r="25" fill="rgba(255, 107, 53, 0.1)" stroke="rgba(255, 107, 53, 0.3)" strokeWidth="2" />
            <rect x="165" y="175" width="30" height="50" rx="15" fill="rgba(15, 52, 96, 0.1)" stroke="rgba(15, 52, 96, 0.2)" strokeWidth="2" />
            {/* Brief case */}
            <rect x="205" y="190" width="18" height="12" rx="3" fill="rgba(15, 52, 96, 0.2)" />
          </g>

          {/* Professional 2 */}
          <g>
            <circle cx="300" cy="150" r="25" fill="rgba(15, 52, 96, 0.1)" stroke="rgba(15, 52, 96, 0.3)" strokeWidth="2" />
            <rect x="285" y="175" width="30" height="50" rx="15" fill="rgba(255, 107, 53, 0.1)" stroke="rgba(255, 107, 53, 0.2)" strokeWidth="2" />
            {/* Documents in hand */}
            <rect x="255" y="185" width="15" height="20" rx="2" fill="rgba(255, 255, 255, 0.8)" stroke="rgba(15, 52, 96, 0.2)" strokeWidth="1" />
          </g>
        </motion.g>

        {/* Service excellence indicators */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Stars for quality */}
          {Array.from({length: 5}).map((_, i) => (
            <motion.g
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
            >
              <path
                d={`M ${150 + i * 40} 80 L ${154 + i * 40} 92 L ${166 + i * 40} 92 L ${157 + i * 40} 100 L ${161 + i * 40} 112 L ${150 + i * 40} 104 L ${139 + i * 40} 112 L ${143 + i * 40} 100 L ${134 + i * 40} 92 L ${146 + i * 40} 92 Z`}
                fill="rgba(255, 107, 53, 0.6)"
                stroke="rgba(255, 107, 53, 0.8)"
                strokeWidth="1"
              />
            </motion.g>
          ))}
        </motion.g>

        {/* Communication bubbles */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {/* Speech bubble 1 */}
          <ellipse cx="90" cy="80" rx="18" ry="10" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(15, 52, 96, 0.2)" strokeWidth="1" />
          <path d="M 85 88 L 82 95 L 88 88 Z" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(15, 52, 96, 0.2)" strokeWidth="1" />
          
          {/* Speech bubble 2 */}
          <ellipse cx="230" cy="75" rx="20" ry="12" fill="rgba(255, 107, 53, 0.1)" stroke="rgba(255, 107, 53, 0.3)" strokeWidth="1" />
          <path d="M 235 85 L 238 92 L 232 85 Z" fill="rgba(255, 107, 53, 0.1)" stroke="rgba(255, 107, 53, 0.3)" strokeWidth="1" />
          
          {/* Languages text */}
          <text x="230" y="80" textAnchor="middle" fontSize="7" fill="rgba(15, 52, 96, 0.7)" fontWeight="600">IT/EN/RO</text>
        </motion.g>

        {/* Process flow arrows */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.path
            d="M 50 120 Q 80 110 110 120"
            stroke="rgba(15, 52, 96, 0.3)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          />
          
          <motion.path
            d="M 140 120 Q 170 110 190 120"
            stroke="rgba(255, 107, 53, 0.4)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead2)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          />
          
          <motion.path
            d="M 220 120 Q 250 110 270 120"
            stroke="rgba(34, 197, 94, 0.4)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead3)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
          />
        </motion.g>

        {/* Success checkmarks */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 3 }}
        >
          <circle cx="50" cy="120" r="8" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1" />
          <path d="M 46 120 L 49 123 L 54 117" stroke="rgba(34, 197, 94, 0.8)" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          <circle cx="270" cy="120" r="8" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1" />
          <path d="M 266 120 L 269 123 L 274 117" stroke="rgba(34, 197, 94, 0.8)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </motion.g>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="rgba(15, 52, 96, 0.3)" />
          </marker>
          <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255, 107, 53, 0.4)" />
          </marker>
          <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="rgba(34, 197, 94, 0.4)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default WhyTeamIllustration;