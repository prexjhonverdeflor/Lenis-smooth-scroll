import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css'; // Import your CSS file for styling
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const leftSectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  const socialIconsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
  };

  const newsletterVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } },
  };

  const logosVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.0 } },
  };

  return (
    <footer id='footer' className="footer">
      <motion.div
        className="footer-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="footer-left"
          variants={leftSectionVariants}
        >
          <h2>AURELLE ESTATES</h2>
          <p>Find Your Place in the World. Aurelle Estates is a real estate company specializing in residential properties, condominiums, and premium homes, serving clients from Makati City, Metro Manila, Philippines.</p>
          <p className='bold'>ADDRESS:</p>
          <p>25th Floor, Aurelle Tower, Makati City, Philippines</p>
          <p className='bold'>CONTACT INFO:</p>
          <p>+63 917 000 1234</p>
          <p>hello@aurelleestates.example</p>
          <p className='bold'>BUSINESS HOURS:</p>
          <p>Monday–Friday: 9:00 AM–6:00 PM</p>
          <p>Saturday: 9:00 AM–1:00 PM</p>
          <p>Sunday: Closed</p>
          <p>Aurelle Estates | Established 2018 | Makati City, Metro Manila</p>

          <motion.div
            className="social-icons"
            variants={socialIconsVariants}
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Aurelle Estates on Facebook" aria-label="Aurelle Estates on Facebook">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Aurelle Estates on LinkedIn" aria-label="Aurelle Estates on LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="@aurelleestates on Instagram" aria-label="Aurelle Estates on Instagram">
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-right"
          variants={rightSectionVariants}
        >
          <motion.h2
            variants={newsletterVariants}
          >
            NEWSLETTER
          </motion.h2>
          <motion.p
            variants={newsletterVariants}
          >
            Subscribe to our Newsletter for the latest news and updates. Stay tuned!
          </motion.p>
          <input
            type="email"
            placeholder="Email address"
            className="footer-input"
          />
          <div className="footer-checkbox-group">
            <input
              type="checkbox"
              id="subscribe-checkbox"
              className="footer-checkbox"
            />
            <label htmlFor="subscribe-checkbox" className="footer-checkbox-label">
              By providing Aurelle Estates your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
            </label>
          </div>
          <button className="footer-button">Subscribe</button>

          <motion.div
            className='logo-group'
            variants={logosVariants}
          >
            <img src='/img/logo1.png' alt='Logo 1' className='logo-image' />
            <img src='/img/logo2.png' alt='Logo 2' className='logo-image' />
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
