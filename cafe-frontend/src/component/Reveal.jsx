import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children, direction = "up", delay = 0 }) => {
  // Define coordinates based on direction
    const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    };

    return (
    <motion.div
        initial={{ 
        opacity: 0, 
        y: directions[direction].y, 
        x: directions[direction].x 
        }}
        whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
        }}
      viewport={{ once: true, amount: 0.2 }} // amount: 0.2 means trigger when 20% visible
        transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: "easeOut" 
        }}
    >
        {children}
    </motion.div>
    );
};

export default Reveal;