import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Expertise.css';

// Import slick-carousel CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Expertise = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger the animation once
    threshold: 0.2,     // Trigger when 20% of the element is in view
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Duration of the transition between slides (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 4000, // Duration between auto transitions (in milliseconds)
  };

  return (
    <div ref={ref} className="expertise-container">
      <motion.div
        className="text-section"
        initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
        animate={inView ? { opacity: 1, x: 0 } : {}} // Slide in when in view
        transition={{ duration: 1 }} // Adjust the duration as needed
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
        initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
        animate={inView ? { opacity: 1, x: 0 } : {}} // Slide in when in view
        transition={{ duration: 1 }} // Adjust the duration as needed
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
