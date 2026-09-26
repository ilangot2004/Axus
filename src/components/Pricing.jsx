import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import '../styles/Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Simple, Transparent Pricing</h2>
                    <p className="section-subtitle">Choose the package that fits your stage of growth.</p>
                </div>

                <div className="pricing-grid">
                    {/* Starter */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Starter</h3>
                        <div className="price">Contact Us</div>
                        <p className="plan-desc">Perfect for new businesses needing a professional presence.</p>
                        <ul className="features-list">
                            <li><Check size={16} /> Custom 5-Page Website</li>
                            <li><Check size={16} /> Mobile Responsive</li>
                            <li><Check size={16} /> Speed Optimization</li>
                            <li><Check size={16} /> 1 Month Support</li>
                        </ul>
                        <Link to="/contact" className="btn btn-secondary full-width">Get Started</Link>
                    </div>

                    {/* Growth - Featured */}
                    <div className="pricing-card featured">
                        <div className="featured-badge">MOST POPULAR</div>
                        <h3 className="plan-name">Growth</h3>
                        <div className="price">Contact Us</div>
                        <p className="plan-desc">For businesses ready to automate and scale leads.</p>
                        <ul className="features-list">
                            <li><Check size={16} /> <strong>Everything in Starter</strong></li>
                            <li><Check size={16} /> Lead Gen Funnel</li>
                            <li><Check size={16} /> SEO Setup</li>
                            <li><Check size={16} /> WhatsApp Chat Widget</li>
                            <li><Check size={16} /> 3 Months Support</li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary full-width">Get Started</Link>
                    </div>

                    {/* Pro */}
                    <div className="pricing-card">
                        <h3 className="plan-name">Pro / AI</h3>
                        <div className="price">Contact Us</div>
                        <p className="plan-desc">Full automation and AI integration for maximum efficiency.</p>
                        <ul className="features-list">
                            <li><Check size={16} /> <strong>Everything in Growth</strong></li>
                            <li><Check size={16} /> AI Chatbot Configuration</li>
                            <li><Check size={16} /> CRM Integration</li>
                            <li><Check size={16} /> Email Automation</li>
                            <li><Check size={16} /> Priority Support</li>
                        </ul>
                        <Link to="/contact" className="btn btn-secondary full-width">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
