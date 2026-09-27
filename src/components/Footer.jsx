import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import '../styles/Footer.css';
import LogoText from '../assets/AXUS INFOTECH.svg';
import ToggleBlue from '../assets/toggle_blue.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column brand-column">
                        <Link to="/" aria-label="Axus Infotech Home">
                            <img src={LogoText} alt="Axus Infotech" className="footer-logo" />
                        </Link>
                        <div className="social-links">
                            <button type="button" aria-label="Instagram"><Instagram size={20} strokeWidth={1.5} /></button>
                            <button type="button" aria-label="LinkedIn"><Linkedin size={20} strokeWidth={1.5} /></button>
                            <button type="button" aria-label="Twitter"><Twitter size={20} strokeWidth={1.5} /></button>
                            <button type="button" aria-label="Facebook"><Facebook size={20} strokeWidth={1.5} /></button>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">AI Automation</Link></li>
                            <li><Link to="/services">Software Development</Link></li>
                            <li><Link to="/services">Website Development</Link></li>
                            <li><Link to="/services">Mobile App Development</Link></li>
                            <li><Link to="/services">Managed Services</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link to="/solutions?tier=individuals">For individuals</Link></li>
                            <li><Link to="/solutions?tier=teams">For teams</Link></li>
                            <li>
                                <Link to="/solutions?tier=large-companies" className="footer-link-soon-wrap">
                                    <span>For large companies</span>
                                    <span className="footer-soon-badge">Soon</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/portfolio">Our Portfolio</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column global-contact-column">
                        <div className="global-item">
                            <span className="flag-icon">🇮🇳</span>
                            <span>India</span>
                            <ChevronDown size={14} className="dropdown-icon" />
                        </div>
                        <div className="global-item email-item" style={{ marginTop: '12px' }}>
                            <Mail size={18} strokeWidth={2} />
                            <span>contact@axusinfotech.in</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-policy-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-service">Terms of Service</Link>
                        <Link to="/refund-policy">Refund Policy</Link>
                        <button
                            type="button"
                            className="footer-policy-link-btn cookie-settings-btn"
                            onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-consent'))}
                        >
                            <img src={ToggleBlue} alt="Privacy Choices" className="privacy-toggle-icon" />
                            Cookie Settings
                        </button>
                    </div>
                    <div className="footer-copyright">
                        &copy; Copyright Axus Infotech. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
