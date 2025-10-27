// src/components/AnimateOnScroll.jsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimateOnScroll = ({
  children,
  threshold = 0.1,
  triggerOnce = true,
  stagger = false,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        // Apply stagger to children if enabled
        when: "beforeChildren",
        staggerChildren: stagger ? 0.2 : 0,
      },
    },
  };

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ position: "relative" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateOnScroll;
