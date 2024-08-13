import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Marquee from './components/Marquee';
import Gallery from './components/Gallery';
import Buy from './components/Buy';
import Market from './components/Market';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Services/>
      <Process/>
      <Expertise/>
      <Buy/>
      <Gallery/>
      <Marquee/>
      <Market/>
      <Carousel/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;