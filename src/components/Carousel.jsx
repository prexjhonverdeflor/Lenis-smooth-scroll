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
            <h2 className="heading">Find Your Place in the World</h2>
            <p className="description">Aurelle Estates is a real estate company specializing in residential properties, condominiums, and premium homes, helping individuals, families, and investors find properties that suit their lifestyles and goals. </p>
            <div className="text-row">
              <div className="text-item">
                <p className="additional-info">2018</p>
                <p className="additional-text">year founded</p>
              </div>
              <div className="text-item">
                <p className="additional-info">5</p>
                <p className="additional-text">real estate services</p>
              </div>
              <div className="text-item">
                <p className="additional-info">Makati</p>
                <p className="additional-text">Metro Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src="/img/bg1.png" alt="Slide 2" />
          <div className="text-overlay">
            <h2 className="heading">Property Services for Every Goal</h2>
            <p className="description">From residential property sales and condominium sales to property rentals, real estate investment, and property consultation, our team guides you through every step of your real estate journey in the Philippines.</p>
            <div className="text-row">
              <div className="text-item">
                <p className="additional-info">Sales</p>
                <p className="additional-text">residential &amp; condominium</p>
              </div>
              <div className="text-item">
                <p className="additional-info">Rentals</p>
                <p className="additional-text">properties for every lifestyle</p>
              </div>
              <div className="text-item">
                <p className="additional-info">Advice</p>
                <p className="additional-text">investment &amp; consultation</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;