import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/Hero.css';

const servicesList = [
    { title: "AI AUTOMATION", link: "/services" },
    { title: "SOFTWARE DEVELOPMENT", link: "/services" },
    { title: "WEBSITE DEVELOPMENT", link: "/services" },
    { title: "MANAGED SERVICES", link: "/services" },
    { title: "MOBILE APP DEVELOPMENT", link: "/services" }
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
                            <Link to="/about" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Know More <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-bar-wrapper">
                <div className="container">
                    <div className="services-nav-bar">
                        {servicesList.map((service, index) => (
                            <div key={index} className="service-nav-item">
                                <Link to={service.link}>{service.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
