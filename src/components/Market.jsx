import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Market.css'; // Assuming you have a separate CSS file for styling

const Market = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.5, } },
  };

  return (
    <div className="market-container">
      <motion.div
        className="heading-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={headingVariants}
      >
        <h1 className="market-heading">We Market Your Home to The World</h1>
        <p className="heading-description">
          Our Online Marketing Strategy
          <br />
          Metro Manila remains one of the Philippines' most sought-after regions to live in, and when looking to sell or rent, it is vital that your home be marketed online to audiences locally, nationally, and internationally.
        </p>
      </motion.div>

      <motion.div
        className="content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={contentVariants}
      >
        <motion.div className="column" variants={contentVariants}>
          <h3 className="column-header">Local Exposure</h3>
          <p className="column-description">
            Your listing is presented to buyers and renters searching in Makati City, Metro Manila, and the surrounding cities, so your property receives targeted local exposure. When you list your home with Aurelle Estates, it reaches the people already looking in your neighborhood.
          </p>
        </motion.div>

        <motion.div className="column" variants={contentVariants}>
          <h3 className="column-header">National Exposure</h3>
          <p className="column-description">
            We secure strong placement for your property on the leading online real estate portals and search platforms used across the Philippines, driving more buyers and renters to your home and increasing exposure. We will receive every inquiry about your property directly.
          </p>
        </motion.div>

        <motion.div className="column" variants={contentVariants}>
          <h3 className="column-header">International Exposure</h3>
          <p className="column-description">
            To expose your listing to potential homebuyers and investors worldwide, we promote your property on prominent international real estate portals, reaching overseas Filipinos and foreign buyers searching for homes, condominiums, and premium properties in the Philippines.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Market;
