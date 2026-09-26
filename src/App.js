import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Legal from './pages/Legal';
import SolutionsPage from './pages/SolutionsPage';
import CookieConsent from './components/CookieConsent';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/for-individuals" element={<SolutionsPage defaultTier="individuals" />} />
          <Route path="/for-teams" element={<SolutionsPage defaultTier="teams" />} />
          <Route path="/for-large-companies" element={<SolutionsPage defaultTier="large-companies" />} />
          <Route path="/privacy-policy" element={<Legal defaultTab="privacy" />} />
          <Route path="/terms-of-service" element={<Legal defaultTab="terms" />} />
          <Route path="/cookie-policy" element={<Legal defaultTab="cookies" />} />
          <Route path="/refund-policy" element={<Legal defaultTab="refund" />} />
          <Route path="/legal" element={<Legal defaultTab="privacy" />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
