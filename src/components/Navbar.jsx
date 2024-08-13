// src/components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import { navbarVariants, linkVariants } from '../animation.js';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar-logo">
        <a href="#hero">
          <img src="/img/logo.png" alt="Logo" />
        </a>
      </div>

      <motion.ul
        className="navbar-links"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <motion.li variants={linkVariants}><a href="#hero">HOME</a></motion.li>
        <motion.li variants={linkVariants}><a href="#services">SERVICES</a></motion.li>
        <motion.li variants={linkVariants}><a href="#about">ABOUT</a></motion.li>
        <motion.li variants={linkVariants}><a href="#footer">CONTACT</a></motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
