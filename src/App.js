import React, { useLayoutEffect } from 'react';
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

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

const STORAGE_KEY = 'app-scroll-y';

const ScrollRestore = () => {
  const lenis = useLenis();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const apply = () => {
      const y = parseInt(sessionStorage.getItem(STORAGE_KEY) || '0', 10);
      if (y > 0) {
        if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
        else window.scrollTo(0, y);
      }
    };

    apply();

    const onLoad = () => apply();
    const onSave = () => sessionStorage.setItem(STORAGE_KEY, String(Math.round(window.scrollY)));

    window.addEventListener('load', onLoad);
    window.addEventListener('pagehide', onSave);
    window.addEventListener('beforeunload', onSave);

    return () => {
      window.removeEventListener('load', onLoad);
      window.removeEventListener('pagehide', onSave);
      window.removeEventListener('beforeunload', onSave);
    };
  }, [lenis]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ReactLenis root options={{ lerp: 0.1 }}>
        <ScrollRestore />
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Expertise />
        <Buy />
        <Gallery />
        <Marquee />
        <Market />
        <Carousel />
        <Footer />
      </ReactLenis>
    </BrowserRouter>
  );
}

export default App;
