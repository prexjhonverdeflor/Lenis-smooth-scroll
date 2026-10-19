// src/components/Navbar.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarVariants, linkVariants } from '../animation.js';
import { useLenis } from '@studio-freight/react-lenis';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (target) => {
    setMenuOpen(false);
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

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.ul
        className={`navbar-links ${menuOpen ? 'open' : ''}`}
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
