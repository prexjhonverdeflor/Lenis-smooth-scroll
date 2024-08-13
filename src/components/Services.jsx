// src/components/Services.js
import React from 'react';
import Reveal from '../Reveal'; // Ensure correct path
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Services.css';

const ServiceItem = ({ src, alt, text, custom, inView }) => (
  <motion.div
    className="service-item"
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: custom * 0.3 }}
  >
    <img src={src} alt={alt} className="service-image" />
    <div className="service-text">{text}</div>
  </motion.div>
);

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger the animation once
    threshold: 0.2,     // Trigger when 20% of the element is in view
  });

  return (
    <div className="services-container">
      <Reveal width="100%" duration={0.8} initialOpacity={0} initialY={50}>
        <h1 className="services-header">COMPREHENSIVE MARKETING PLAN</h1>
      </Reveal>
      <div ref={ref} className="images-container">
        <ServiceItem src="/img/1.png" alt="Service 1" text="RESPONSIVE" custom={1} inView={inView} />
        <ServiceItem src="/img/222.png" alt="Service 22" text="SYNDICATION" custom={2} inView={inView} />
        <ServiceItem src="/img/3.png" alt="Service 3" text="VIRTUAL TOUR" custom={3} inView={inView} />
        <ServiceItem src="/img/4.png" alt="Service 4" text="PHOTOGRAPHY" custom={4} inView={inView} />
        <ServiceItem src="/img/5.png" alt="Service 5" text="DECOR GUIDANCE" custom={5} inView={inView} />
        <ServiceItem src="/img/6.png" alt="Service 6" text="INTENTIONAL LAYOUT" custom={6} inView={inView} />
      </div>
    </div>
  );
};

export default Services;
