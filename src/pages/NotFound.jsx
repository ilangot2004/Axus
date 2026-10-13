import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Mail } from 'lucide-react';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-badge">
          <Sparkles size={14} />
          <span>Error 404</span>
        </div>

        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          The page you are looking for doesn't exist, may have been relocated, or the link you followed might be broken.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-btn-primary">
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <Link to="/services" className="not-found-btn-secondary">
            <span>Explore Services</span>
          </Link>
          <Link to="/contact" className="not-found-btn-secondary">
            <Mail size={16} />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
