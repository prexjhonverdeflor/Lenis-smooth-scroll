import React from 'react';
import Reveal from '../Reveal'; // Ensure correct path
import '../styles/Buy.css';

const Buy = () => {
  return (
    <div className="buying-container">
      <Reveal width="100%" duration={0.8} initialOpacity={0} initialY={50}>
        <h1 className='header1'>THE BUYING PROCESS</h1>
      </Reveal>
      <div className='buying-row'>
        <Reveal width="100%" duration={0.8} initialOpacity={0} initialY={50}>
          <div className='buying-item'>1. Initial Consultation & Planning</div>
        </Reveal>
        <Reveal width="100%" duration={0.8} initialOpacity={0} initialY={50} delay={0.2}>
          <div className='buying-item'>2. Search for a Home & Get Pre-Approved</div>
        </Reveal>
        <Reveal width="100%" duration={0.8} initialOpacity={0} initialY={50} delay={0.4}>
          <div className='buying-item'>3. Submit an Offer</div>
        </Reveal>
        <Reveal width="100%" duration={0.8} initialOpacity={0} initialY={50} delay={0.6}>
          <div className='buying-item'>4. Complete Settlement Process</div>
        </Reveal>
      </div>
    </div>
  );
};

export default Buy;
