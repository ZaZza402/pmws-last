import React from "react";
import { motion } from "framer-motion";

const WhyStatsIllustration = () => {
  return (
    <div className="why-stats-illustration">
      <svg
        viewBox="0 0 450 250"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Advanced gradients and patterns */}
        <defs>
          <radialGradient id="successGradient" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
          </radialGradient>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(247, 141, 35, 0.8)" />
            <stop offset="50%" stopColor="rgba(43, 40, 111, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.8)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating background elements for depth */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <circle cx="400" cy="60" r="25" fill="rgba(34, 197, 94, 0.08)" />
          <circle cx="80" cy="250" r="20" fill="rgba(247, 141, 35, 0.08)" />
          <circle cx="420" cy="220" r="18" fill="rgba(43, 40, 111, 0.08)" />
        </motion.g>

        {/* Main statistics dashboard */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Success rate visualization */}
          <motion.g
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <text
              x="100"
              y="40"
              textAnchor="middle"
              fontSize="12"
              fill="rgba(43, 40, 111, 0.8)"
              fontWeight="700"
            >
              Tasso di Successo
            </text>

            {/* Circular progress indicator */}
            <circle
              cx="100"
              cy="80"
              r="25"
              fill="none"
              stroke="rgba(43, 40, 111, 0.1)"
              strokeWidth="4"
            />
            <motion.circle
              cx="100"
              cy="80"
              r="25"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="157"
              initial={{ strokeDashoffset: 157 }}
              animate={{ strokeDashoffset: 15.7 }}
              transition={{ duration: 2, delay: 1.5 }}
              transform="rotate(-90 100 80)"
            />
            <text
              x="100"
              y="87"
              textAnchor="middle"
              fontSize="14"
              fill="rgba(34, 197, 94, 0.9)"
              fontWeight="800"
            >
              98%
            </text>
          </motion.g>

          {/* Response time metric */}
          <motion.g
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <text
              x="250"
              y="40"
              textAnchor="middle"
              fontSize="12"
              fill="rgba(43, 40, 111, 0.8)"
              fontWeight="700"
            >
              Tempo di Risposta
            </text>

            {/* Clock-like visualization */}
            <circle
              cx="250"
              cy="80"
              r="20"
              fill="rgba(247, 141, 35, 0.1)"
              stroke="rgba(247, 141, 35, 0.3)"
              strokeWidth="2"
            />
            <motion.line
              x1="250"
              y1="80"
              x2="250"
              y2="65"
              stroke="rgba(247, 141, 35, 0.8)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
              style={{ transformOrigin: "250px 80px" }}
            />
            <text
              x="250"
              y="120"
              textAnchor="middle"
              fontSize="14"
              fill="rgba(247, 141, 35, 0.9)"
              fontWeight="800"
            >
              ≤ 24h
            </text>
          </motion.g>

          {/* Client satisfaction */}
          <motion.g
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <text
              x="400"
              y="40"
              textAnchor="middle"
              fontSize="12"
              fill="rgba(43, 40, 111, 0.8)"
              fontWeight="700"
            >
              Clienti Soddisfatti
            </text>

            {/* Growing number animation */}
            <circle
              cx="400"
              cy="80"
              r="25"
              fill="rgba(43, 40, 111, 0.1)"
              stroke="rgba(43, 40, 111, 0.3)"
              strokeWidth="2"
            />
            <motion.text
              x="400"
              y="87"
              textAnchor="middle"
              fontSize="12"
              fill="rgba(43, 40, 111, 0.9)"
              fontWeight="800"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              500+
            </motion.text>
          </motion.g>
        </motion.g>

        {/* Performance trend visualization */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <text
            x="250"
            y="170"
            textAnchor="middle"
            fontSize="14"
            fill="rgba(43, 40, 111, 0.8)"
            fontWeight="700"
          >
            Crescita delle Performance
          </text>

          {/* Dynamic line chart */}
          <motion.path
            d="M 80 220 Q 150 200 220 190 Q 290 185 420 180"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
            filter="url(#glow)"
          />

          {/* Data points with animated appearance */}
          {[
            { x: 80, y: 220, year: "2020", delay: 2.2 },
            { x: 150, y: 200, year: "2021", delay: 2.4 },
            { x: 220, y: 190, year: "2022", delay: 2.6 },
            { x: 290, y: 185, year: "2023", delay: 2.8 },
            { x: 420, y: 180, year: "2024", delay: 3 },
          ].map((point, index) => (
            <motion.g
              key={point.year}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: point.delay }}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="rgba(255, 255, 255, 1)"
                stroke="url(#progressGradient)"
                strokeWidth="2"
              />
              <text
                x={point.x}
                y={point.y + 20}
                textAnchor="middle"
                fontSize="10"
                fill="rgba(43, 40, 111, 0.7)"
                fontWeight="600"
              >
                {point.year}
              </text>
            </motion.g>
          ))}
        </motion.g>

        {/* Quality indicators with floating animation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          {/* Floating quality badges */}
          {[
            {
              x: 60,
              y: 140,
              text: "Precisione",
              color: "rgba(34, 197, 94, 0.8)",
              delay: 3.4,
            },
            {
              x: 180,
              y: 260,
              text: "Affidabilità",
              color: "rgba(247, 141, 35, 0.8)",
              delay: 3.6,
            },
            {
              x: 360,
              y: 140,
              text: "Professionalità",
              color: "rgba(43, 40, 111, 0.8)",
              delay: 3.8,
            },
          ].map((badge, index) => (
            <motion.g
              key={badge.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 1],
                y: [20, 0, -5, 0],
              }}
              transition={{
                duration: 2,
                delay: badge.delay,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            >
              <rect
                x={badge.x - 35}
                y={badge.y - 8}
                width="70"
                height="16"
                rx="8"
                fill="rgba(255, 255, 255, 0.1)"
                stroke={badge.color}
                strokeWidth="1"
              />
              <text
                x={badge.x}
                y={badge.y + 2}
                textAnchor="middle"
                fontSize="9"
                fill={badge.color}
                fontWeight="600"
              >
                {badge.text}
              </text>
            </motion.g>
          ))}
        </motion.g>

        {/* Success particles animation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 4 }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.circle
              key={index}
              cx={100 + index * 50}
              cy={50 + Math.sin(index) * 20}
              r="2"
              fill="rgba(34, 197, 94, 0.6)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [-10, 0, 10],
              }}
              transition={{
                duration: 2,
                delay: 4 + index * 0.2,
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

export default WhyStatsIllustration;
