// src/components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import { navbarVariants, linkVariants } from '../animation.js';
import { useLenis } from '@studio-freight/react-lenis';
import '../styles/Navbar.css';

const Navbar = () => {
  const lenis = useLenis(); // Get the Lenis instance

  const handleScroll = (target) => {
    lenis.scrollTo(target);
  };

  return (
    <motion.nav
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar-logo">
        <a href="#hero" onClick={(e) => {e.preventDefault(); handleScroll('#hero');}}>
          <img src="/img/logo.png" alt="Logo" />
        </a>
      </div>

      <motion.ul
        className="navbar-links"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <motion.li variants={linkVariants}>
          <a href="#hero" onClick={(e) => {e.preventDefault(); handleScroll('#hero');}}>
            HOME
          </a>
        </motion.li>
        <motion.li variants={linkVariants}>
          <a href="#services" onClick={(e) => {e.preventDefault(); handleScroll('#services');}}>
            SERVICES
          </a>
        </motion.li>
        <motion.li variants={linkVariants}>
          <a href="#about" onClick={(e) => {e.preventDefault(); handleScroll('#about');}}>
            ABOUT
          </a>
        </motion.li>
        <motion.li variants={linkVariants}>
          <a href="#footer" onClick={(e) => {e.preventDefault(); handleScroll('#footer');}}>
            CONTACT
          </a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
