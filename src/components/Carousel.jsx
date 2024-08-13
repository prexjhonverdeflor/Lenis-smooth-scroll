import React from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css'; // Ensure the path is correct

const Carousel = () => {
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
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="/img/bg2.png" alt="Slide 1" />
          <div className="text-overlay">
            <h2 className="heading">Leading Real Estate Companies of The World® & Luxury Portfolio International</h2>
            <p className="description">JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. </p>
            <div className="text-row">
              <div className="text-item">
                <p className="additional-info">500</p>
                <p className="additional-text">member firms</p>
              </div>
              <div className="text-item">
                <p className="additional-info">50</p>
                <p className="additional-text">buyers</p>
              </div>
              <div className="text-item">
                <p className="additional-info">50</p>
                <p className="additional-text">investors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src="/img/bg1.png" alt="Slide 2" />
          <div className="text-overlay">
            <h2 className="heading">WE ARE GLOBAL</h2>
            <p className="description">Through our international affiliations, we have a strong presence in over 50 countries. We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing.</p>
            <div className="text-row">
              <div className="text-item">
                <p className="additional-info">50</p>
                <p className="additional-text">countries</p>
              </div>
              <div className="text-item">
                <p className="additional-info">$70M</p>
                <p className="additional-text">potential buyer</p>
              </div>
              <div className="text-item">
                <p className="additional-info">50</p>
                <p className="additional-text">investors</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;