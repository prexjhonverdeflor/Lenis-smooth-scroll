import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Footer.css'; // Import your CSS file for styling
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
    <footer id='footer' className="footer" ref={footerRef}>
      <motion.div
        className="footer-row"
        variants={containerVariants}
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
      >
        <motion.div
          className="footer-left"
          variants={leftSectionVariants}
        >
          <h2>JULIE HANSEN PARTNERSHIP</h2>
          <p>An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.</p>
          <p className='bold'>ADDRESS:</p>
          <p>4733 Chabot Drive #100 Pleasanton, CA 94588</p>
          <p className='bold'>CONTACT INFO:</p>
          <p>(925) 553-6707</p>
          <p>luxuryhomesinwc@icloud.com</p>
          <p>Julie Hansen-Orvis | CA DRE# 00934447</p>

          <motion.div
            className="social-icons"
            variants={socialIconsVariants}
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
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
              By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
            </label>
          </div>
          <button className="footer-button">Subscribe</button>

          <motion.div
            className='logo-group'
            variants={logosVariants}
          >
            <img src='/img/logo1.png' alt='Logo 1' className='logo-image' />
            <img src='/img/logo2.png' alt='Logo 2' className='logo-image' />
            <img src='/img/logo4.png' alt='Logo 3' className='logo-image3' />
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
