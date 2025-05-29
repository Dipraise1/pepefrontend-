"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimateInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const AnimateIn = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: AnimateInProps) => {
  
  const getDirectionValues = () => {
    switch (direction) {
      case 'up':
        return { initial: { y: 40 }, animate: { y: 0 } };
      case 'down':
        return { initial: { y: -40 }, animate: { y: 0 } };
      case 'left':
        return { initial: { x: 40 }, animate: { x: 0 } };
      case 'right':
        return { initial: { x: -40 }, animate: { x: 0 } };
      default:
        return { initial: { y: 40 }, animate: { y: 0 } };
    }
  };

  const { initial, animate } = getDirectionValues();

  return (
    <motion.div
      initial={{ ...initial, opacity: 0 }}
      whileInView={{ ...animate, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIn;
