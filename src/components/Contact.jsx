import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const whatsappMessage =
        "Hi AXUS Infotech, I'm interested in your services!\n" +
        "I'd like to discuss my requirements and get a quote. Thank you!";

    return (
        <section className="contact-page section">
            <div className="container contact-page-container">
                <div className="contact-header">
                    <div className="section-label-pill">Contact Us</div>
                    <h2 className="contact-main-title">Let's Build Your Growth Engine</h2>
                    <p className="contact-description">
                        Have a project in mind? We'd love to hear about it. Drop us a line and we'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-form-wrapper">
                        {submitted ? (
                            <div className="success-message">
                                <CheckCircle size={48} className="success-icon" />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <div className="form-col">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" placeholder="John" required />
                                    </div>
                                    <div className="form-col">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="form-col">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="form-col">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject" required>
                                        <option value="">Select a subject...</option>
                                        <option value="ai-automation">AI Automation</option>
                                        <option value="software">Software Development</option>
                                        <option value="website">Website Development</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn">
                                    Send Message <ArrowRight size={20} />
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="contact-info-wrapper">
                        <div className="info-card">
                            <h3>Direct Contact</h3>
                            <p>Prefer to reach out directly? Use the details below.</p>
                            <div className="info-item">
                                <Mail className="info-icon" />
                                <div className="info-text-group">
                                    <strong>Email</strong>
                                    <a href="mailto:contact@axusinfotech.com">contact@axusinfotech.com</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <Phone className="info-icon" />
                                <div className="info-text-group">
                                    <strong>Phone</strong>
                                    <a href="tel:+918220185051">+91 82201 85051</a>
                                    <a href="tel:+917418332509">+91 74183 32509</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <div className="info-text-group">
                                    <strong>Location</strong>
                                    <p>Erode, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="quick-actions">
                            <h3>Quick Actions</h3>
                            <p>Schedule a meeting or chat with us instantly.</p>
                            <div className="quick-action-btns">
                                <a href="https://calendly.com/" className="btn btn-primary calendly-btn no-transform-btn" target="_blank" rel="noreferrer">
                                    Book Strategy Call <ArrowRight size={16} />
                                </a>
                                <a
                                    href={`https://wa.me/918220185051?text=${encodeURIComponent(whatsappMessage)}`}
                                    className="btn btn-secondary whatsapp-btn no-transform-btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <MessageCircle size={16} /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
