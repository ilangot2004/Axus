import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/AXUS LOGO.svg';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    // Close on Escape
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const closeMobile = useCallback(() => setMobileOpen(false), []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo-container" onClick={closeMobile} aria-label="Axus Infotech Home">
                    <img src={logo} alt="Axus Infotech" className="logo-icon" />
                </Link>

                <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    <li><HashLink smooth to="/#" className="nav-link" onClick={closeMobile}>Home</HashLink></li>
                    <li><HashLink smooth to="/#about" className="nav-link" onClick={closeMobile}>About Us</HashLink></li>
                    <li><Link to="/solutions" className="nav-link" onClick={closeMobile}>Solutions</Link></li>
                    <li><HashLink smooth to="/#services" className="nav-link" onClick={closeMobile}>What We Do</HashLink></li>
                    <li><HashLink smooth to="/#portfolio" className="nav-link" onClick={closeMobile}>Portfolio</HashLink></li>
                    <li className="nav-cta-mobile">
                        <Link to="/contact" className="btn" onClick={closeMobile}>Get Started</Link>
                    </li>
                </ul>

                <div className="nav-cta">
                    <Link to="/contact" className="btn">Get Started</Link>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Overlay — always in DOM, visibility via CSS class */}
            <div
                className={`nav-overlay ${mobileOpen ? 'visible' : ''}`}
                onClick={closeMobile}
            />
        </nav>
    );
};

export default Navbar;
