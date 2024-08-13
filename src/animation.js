// src/animations.js
import { motion } from 'framer-motion';

// src/animations.js
export const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5  } },
};

export const linkVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
};


//hero
export const heroTextVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } },
};

export const hrVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut", delay: 1  } },
};

export const buttonContainerVariants = {
  hidden: {  y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2, delay: 2 } },
};

export const scrollButtonVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" , delay: 2.5} },
};



//global ani
