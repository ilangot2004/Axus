import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/About.css';

const features = [
    {
        title: 'End-to-End Digital Solutions',
        desc: 'From modern websites to AI-powered chatbots, we deliver the complete digital toolkit your business needs to thrive online.',
    },
    {
        title: 'Built for Growth',
        desc: 'Every solution we create is designed with scalability in mind — automated lead generation, smart follow-ups, and conversion-optimized pages.',
    },
    {
        title: 'Young & Agile Team',
        desc: "We're a talented team of engineers who move fast, think creatively, and bring fresh perspectives.",
    },
    {
        title: 'Affordable & Transparent',
        desc: 'Premium-quality work at startup-friendly pricing, with clear timelines and no hidden costs.',
    }
];

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content-left">
                        <div className="section-label-pill">About Axus</div>
                        <h2 className="about-main-title">
                            We don't just build.<br />We <span className="italic-serif">grow</span> your business.
                        </h2>
                        <p className="about-description">
                            Axus Infotech is a digital growth studio built by a talented team of engineers. We help businesses launch, scale, and automate their online presence through modern websites, intelligent automation, and conversion-focused strategies.
                        </p>
                        <a href="#portfolio" className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '1rem' }}>
                            View Our Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                    </div>

                    <div className="about-content-right">
                        <div className="features-list">
                            {features.map((f, i) => (
                                <div className="feature-item" key={i}>
                                    <div className="feature-number">0{i + 1}</div>
                                    <div className="feature-text">
                                        <h3 className="feature-title">{f.title}</h3>
                                        <p className="feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
