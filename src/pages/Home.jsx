import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import Solutions from '../components/Solutions';
import Creativity from '../components/Creativity';
import StickyVideoFlow from '../components/StickyVideoFlow';

const Home = () => {
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
