import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollAnimationComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0,  y: -150 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0,  y: -150 }}
      transition={{ duration: 0.7 }}
      
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationComponent;
