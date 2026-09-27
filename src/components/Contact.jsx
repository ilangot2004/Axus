import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Mail, Phone, MapPin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const form = e.target;
        const formData = new FormData(form);

        // Web3Forms configuration
        formData.append("access_key", "4194b6f9-a6cb-4ae9-b0f6-16e198d4d1ee");
        formData.append("from_name", "Axus Infotech Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                form.reset();
                setTimeout(() => setSubmitted(false), 7000);
            } else {
                setErrorMessage(data.message || "Something went wrong. Please try again or reach out directly.");
            }
        } catch (error) {
            setErrorMessage("Network error. Please check your connection or reach out via email.");
        } finally {
            setLoading(false);
        }
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
                                <p>Thank you for reaching out. We have received your inquiry and will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                {/* Honeypot Spam Protection */}
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                                <div className="form-group row">
                                    <div className="form-col">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" name="First Name" placeholder="John" required disabled={loading} />
                                    </div>
                                    <div className="form-col">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="Last Name" placeholder="Doe" required disabled={loading} />
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="form-col">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="Email" placeholder="john@example.com" required disabled={loading} />
                                    </div>
                                    <div className="form-col">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="Phone" placeholder="+1 (555) 000-0000" disabled={loading} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject" name="Subject" required disabled={loading}>
                                        <option value="">Select a subject...</option>
                                        <option value="AI Automation">AI Automation</option>
                                        <option value="Software Development">Software Development</option>
                                        <option value="Website Development">Website Development</option>
                                        <option value="Other Inquiry">Other Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="Message" rows="5" placeholder="Tell us about your project..." required disabled={loading}></textarea>
                                </div>

                                {errorMessage && (
                                    <div className="contact-error-message">
                                        <AlertCircle size={16} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                                    {loading ? (
                                        <>
                                            Sending Message... <Loader2 size={18} className="spinner-icon" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message <ArrowRight size={20} />
                                        </>
                                    )}
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
                                    <a href="mailto:contact@axusinfotech.in">contact@axusinfotech.in</a>
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
