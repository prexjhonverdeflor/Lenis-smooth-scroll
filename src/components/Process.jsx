import React from 'react';
import '../styles/Process.css'; // Import the CSS file
import Reveal from '../Reveal';

const Process = () => {
  return (
    <div id='services' className="process-container">
      <Reveal>
      <h1 className='header'>THE SELLING PROCESS</h1>
      </Reveal>
      <div className='process-row'>
        <Reveal><div className='process-item'>1. Initial Consultation & Planning</div></Reveal>
        <Reveal><div className='process-item'>2. Devise & Execute Marketing Plan</div></Reveal>
        <Reveal><div className='process-item'>3. Review Offers & Reach Agreement with Buyer</div></Reveal>
        <Reveal><div className='process-item'>4. Complete Transaction Process</div></Reveal>
        <Reveal><div className='process-item'>5. After-Sale Service</div></Reveal>
      </div>
    </div>
  );
};

export default Process;
