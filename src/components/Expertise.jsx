import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import '../styles/Expertise.css';

// Import slick-carousel CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Expertise = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="expertise-container">
      <motion.div
        className="text-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
      >
        <h1>MY STAGING EXPERTISE</h1>
        <ul>
          <li>Unclutter and organize your home</li>
          <li>Neatly arrange drawers and cabinets</li>
          <li>Keep pets outdoors or off the premises</li>
          <li>Play soft music</li>
        </ul>
      </motion.div>
      <motion.div
        className="expertise-carousel"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
      >
        <Slider {...settings}>
          <div className="image-section">
            <img src="/img/face.jpeg" alt="Expertise" />
          </div>
          <div className="image-section">
            <img src="/img/slide1.png" alt="Another Expertise" />
          </div>
          <div className="image-section">
            <img src="/img/slide2.png" alt="Another Expertise" />
          </div>
        </Slider>
      </motion.div>
    </div>
  );
}

export default Expertise;
