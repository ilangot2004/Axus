import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import Solutions from '../components/Solutions';
import Creativity from '../components/Creativity';
import StickyVideoFlow from '../components/StickyVideoFlow';

const Home = ({ scrollTo = null }) => {
  useEffect(() => {
    if (scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollTo]);

  return (
    <main>
      <Hero />
      <StickyVideoFlow />
      <div className="content-over-sticky" style={{ position: 'relative', zIndex: 2, backgroundColor: '#ffffff' }}>
        <About />
        <Portfolio />
        <Clients />
        <Solutions />
        <Services />
        <Testimonials />
        <Creativity />
      </div>
    </main>
  );
};

export default Home;
