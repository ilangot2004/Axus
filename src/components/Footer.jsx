import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
                            <a href="#" aria-label="Instagram"><Instagram size={20} strokeWidth={1.5} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} strokeWidth={1.5} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} strokeWidth={1.5} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} strokeWidth={1.5} /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><HashLink smooth to="/#services">AI Automation</HashLink></li>
                            <li><HashLink smooth to="/#services">Software Development</HashLink></li>
                            <li><HashLink smooth to="/#services">Website Development</HashLink></li>
                            <li><HashLink smooth to="/#services">Mobile App Development</HashLink></li>
                            <li><HashLink smooth to="/#services">Managed Services</HashLink></li>
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
                            <li><HashLink smooth to="/#about">About Us</HashLink></li>
                            <li><HashLink smooth to="/#portfolio">Our Portfolio</HashLink></li>
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
                            <span>contact@axusinfotech.com</span>
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
