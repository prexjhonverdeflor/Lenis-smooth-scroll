// src/components/Hero.js
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {

    heroTextVariants,
    hrVariants,
    buttonContainerVariants,
    scrollButtonVariants
} from '../animation';
import '../styles/Hero.css';

const Hero = () => {
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <motion.div
            id='hero'
            className="hero-container"
            initial="hidden"
            animate="visible"

        >
            <motion.h5
                variants={heroTextVariants}
            >
                our services
            </motion.h5>
            <motion.hr
                className='center-line'
                variants={hrVariants}
            />
            <motion.h1
                variants={heroTextVariants}
            >
                Let us help you find your dream home.
            </motion.h1>
            <motion.div
                className="button-container"
                variants={buttonContainerVariants}
            >
                <button className="hero-button">BOOK NOW</button>
                <button className="hero-button">CONTACT US</button>
            </motion.div>
            <motion.div
                className="scroll-button"
                onClick={scrollDown}
                variants={scrollButtonVariants}
            >
                <FaChevronDown />
            </motion.div>
        </motion.div>
    );
}

export default Hero;
