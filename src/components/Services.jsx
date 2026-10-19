// src/components/Services.js
import React from 'react';
import Reveal from '../Reveal'; // Ensure correct path
import { motion } from 'framer-motion';
import '../styles/Services.css';

const ServiceItem = ({ src, alt, text, index }) => (
  <motion.div
    className="service-item"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
  >
    <img src={src} alt={alt} className="service-image" />
    <div className="service-text">{text}</div>
  </motion.div>
);

const Services = () => {
  return (
    <div className="services-container">
      <Reveal width="100%" duration={0.8} initialOpacity={0} initialY={50}>
        <h1 className="services-header">OUR SERVICES</h1>
      </Reveal>
      <div className="images-container">
        <ServiceItem src="/img/1.png" alt="Residential Property Sales" text="RESIDENTIAL SALES" index={0} />
        <ServiceItem src="/img/222.png" alt="Condominium Sales" text="CONDOMINIUM SALES" index={1} />
        <ServiceItem src="/img/3.png" alt="Property Rentals" text="PROPERTY RENTALS" index={2} />
        <ServiceItem src="/img/4.png" alt="Real Estate Investment" text="REAL ESTATE INVESTMENT" index={3} />
        <ServiceItem src="/img/5.png" alt="Property Consultation" text="PROPERTY CONSULTATION" index={4} />
      </div>
    </div>
  );
};

export default Services;
