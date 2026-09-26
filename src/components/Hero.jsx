import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ArrowRight } from 'lucide-react';
import '../styles/Hero.css';

const servicesList = [
    { title: "AI AUTOMATION", link: "#" },
    { title: "SOFTWARE DEVELOPMENT", link: "#" },
    { title: "WEBSITE DEVELOPMENT", link: "#" },
    { title: "MANAGED SERVICES", link: "#" },
    { title: "MOBILE APP DEVELOPMENT", link: "#" }
];

const Hero = () => {
    return (
        <section className="hero section">
            <div className="container hero-container">
                <div className="hero-top-grid">
                    <div className="hero-title-wrapper">
                        <h1 className="hero-title">
                            Transforming Businesses through <br />
                            <span className="title-pill">Web, Design & AI</span> Solutions
                        </h1>
                    </div>
                    <div className="hero-content-wrapper">
                        <p className="hero-subtitle">
                            At Axus Infotech, we revolutionize businesses with data-driven solutions. Leveraging AI to drive growth through innovation, engagement, and measurable outcomes.
                        </p>
                        <div className="hero-cta-group">
                            <HashLink smooth to="/#about" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Know More <ArrowRight size={18} />
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-bar-wrapper">
                <div className="container">
                    <div className="services-nav-bar">
                        {servicesList.map((service, index) => (
                            <div key={index} className="service-nav-item">
                                <a href={service.link}>{service.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
