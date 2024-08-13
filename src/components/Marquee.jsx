import React from 'react';
import Marquee from 'react-fast-marquee';

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
    <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <Marquee
        gradient={true}
        gradientColor="#f5f3ef" // Example gradient color
        gradientWidth={200} // Width of the gradient on either side
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {images.map((src, index) => (

              <img
                src={src}
                alt={`Marquee Image ${index}`}
                style={{ margin: '0 40px', height: '80px' }}
              />

          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default MarqueeComponent;
