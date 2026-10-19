import React from 'react';
import Marquee from 'react-fast-marquee';
import '../styles/Marquee.css';

const MarqueeComponent = () => {
  // List of image URLs or paths
  const images = [
    '/img/img1.png',
    '/img/img2.png',
    '/img/img3.png',
    '/img/img4.png',
    '/img/img5.png',
    '/img/img6.png  ',
  ];

  return (
    <section className="marquee-section">
      <Marquee
        gradient={true}
        gradientColor="#f5f3ef"
        gradientWidth={200}
      >
        <div className="marquee-track">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Showcase property ${index + 1}`}
              className="marquee-image"
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default MarqueeComponent;
