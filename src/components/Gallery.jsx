import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import Reveal from '../Reveal'; // Import the Reveal component
import '../styles/Gallery.css'; // Assuming you have a CSS file for styling

const Gallery = () => {
  const [showBenefits, setShowBenefits] = useState(false);
  const controls = useAnimation();

  const toggleBenefits = () => {
    setShowBenefits(!showBenefits);
    if (!showBenefits) {
      controls.start({ opacity: 1, height: 'auto' });
    } else {
      controls.start({ opacity: 0, height: 0 });
    }
  };

  return (
    <div id='about' className="gallery-wrapper">
      <div className="gallery-container1">
        <Reveal>
          <div className="image-container">
            <img src="img/gallery2.jpg" alt="Gallery" />
          </div>
        </Reveal>
        <Reveal>
          <div className="text-container">
            <h1>REAL ESTATE EXPERTISE SINCE 2018</h1>
            <p>Aurelle Estates is a real estate company specializing in residential properties, condominiums, and premium homes. Founded in 2018 and based in Makati City, Metro Manila, we help individuals, families, and investors find properties that suit their lifestyles and goals.</p>
          </div>
        </Reveal>
      </div>

      <div className="gallery-container2">
        <Reveal>
          <div className="text-container">
            <h1>How Aurelle Estates Can Help You</h1>
            <p>Our services include residential property sales, condominium sales, property rentals, real estate investment, and property consultation. Whether you are buying, selling, renting, or investing, we help individuals, families, and investors find properties that suit their lifestyles and goals.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="image-container">
            <img src="img/gallery1.jpg" alt="Gallery" />
          </div>
        </Reveal>
      </div>

      <div className="gallery-container3">
        <Reveal>
          <div className="image-container">
            <img src="img/gallery3.jpg" alt="Gallery" />
          </div>
        </Reveal>
        <Reveal>
          <div className="text-container text-container-padded">
            <h1>The Aurelle Estates Communications Tablet</h1>
            <p>We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.</p>

            <motion.div
              className='benefits'
              animate={controls}
              initial={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {showBenefits && (
                <>
                  <p>Benefits:</p>
                  <ul>
                    <li>Review all documents and sign in the comfort of your home or anywhere.</li>
                    <li>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
                    <li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
                    <li>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our BombBomb video messaging system.</li>
                  </ul>
                  <p>
                    We believe that transparency and guiding you and your family through the process is key to having the best experience.  During these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on.  We will be here to handle your needs during the Real Estate process.  We think of it before a need even arises. Because, that is just what we do.  Who you work with does matter!
                  </p>
                </>
              )}
            </motion.div>

            <button onClick={toggleBenefits}>
              {showBenefits ? (
                <>
                  Show Less <FaChevronUp style={{ marginLeft: '2px', verticalAlign: 'top' }}/>
                </>
              ) : (
                <>
                  See More <FaChevronDown style={{ marginLeft: '2px', verticalAlign: 'top' }}/>
                </>
              )}
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Gallery;
