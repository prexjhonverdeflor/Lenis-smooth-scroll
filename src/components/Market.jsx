import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Market.css'; // Assuming you have a separate CSS file for styling

const Market = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true });

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
        ref={headingRef}
        className="heading-container"
        initial="hidden"
        animate={headingInView ? 'visible' : 'hidden'}
        variants={headingVariants}
      >
        <h1 className="market-heading">We Market Your Home to The World</h1>
        <p className="heading-description">
          Our Online Marketing Strategy
          <br />
          The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.
        </p>
      </motion.div>

      <motion.div
        ref={contentRef}
        className="content"
        initial="hidden"
        animate={contentInView ? 'visible' : 'hidden'}
        variants={contentVariants}
      >
        <motion.div className="column" variants={contentVariants}>
          <h3 className="column-header">Local Exposure</h3>
          <p className="column-description">
            Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.
          </p>
        </motion.div>

        <motion.div className="column" variants={contentVariants}>
          <h3 className="column-header">National Exposure</h3>
          <p className="column-description">
            We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We will receive every inquiry about your property directly.
          </p>
        </motion.div>

        <motion.div className="column" variants={contentVariants}>
          <h3 className="column-header">International Exposure</h3>
          <p className="column-description">
            To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Market;
