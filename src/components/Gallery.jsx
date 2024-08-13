import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Gallery.css'; // Assuming you have a CSS file for styling

const Gallery = () => {
  const [showBenefits, setShowBenefits] = useState(false);

  const toggleBenefits = () => {
    setShowBenefits(!showBenefits);
  };

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  const animationVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'right' ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div id='about' className="gallery-wrapper">
      <motion.div
        ref={ref1}
        className="gallery-container1"
        custom="right"
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <div className="image-container">
          <img src="img/gallery2.jpg" alt="Gallery" />
        </div>
        <div className="text-container">
          <h1>OVER 33 YEARS OF REAL ESTATE SUCCESS</h1>
          <p>We provide every one of our clients with a level of service they won’t find anywhere else...</p>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        className="gallery-container2"
        custom="left"
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <div className="text-container">
          <h1>We Want To Create An Unforgettable Experience For You</h1>
          <p>We combine data gained from your home’s Comparative Market Analysis with local market research...</p>
        </div>
        <div className="image-container">
          <img src="img/gallery1.jpg" alt="Gallery" />
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        className="gallery-container3"
        custom="right"
        initial="hidden"
        animate={inView3 ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <div className="image-container">
          <img src="img/gallery3.jpg" alt="Gallery" />
        </div>
        <div className="text-container" style={{ paddingTop: '50px'}}>
          <h1>The Hansen Partners Communications Tablet</h1>
          <p>We have created this as a wonderful tool so that we can communicate with you daily...</p>

          {showBenefits && (
            <div className='benefits'>
              <p>Benefits:</p>
              <ul>
                <li>Review all documents and sign in the comfort of your home or anywhere.</li>
                <li>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
                <li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
                <li>You have your own email assigned just for you...</li>
              </ul>
              <p>
                We believe that transparency and guiding you and your family through the process is key...
              </p>
            </div>
          )}

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
      </motion.div>
    </div>
  );
};

export default Gallery;
