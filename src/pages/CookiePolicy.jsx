import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Eye, BarChart3, HelpCircle, Mail } from 'lucide-react';
import '../styles/Policy.css';

const CookiePolicy = () => {
    return (
        <main className="policy-page">
            <div className="container">
                <header className="policy-header">
                    <div className="section-label-pill">Preferences & Tracking</div>
                    <h1 className="policy-main-title">Cookie Policy</h1>
                    <p className="policy-meta">Last Updated: October 2024</p>
                    <p className="policy-description">
                        Learn how Axus Infotech uses cookies and similar tracking technologies to enhance your browsing experience on our website.
                    </p>
                </header>

                <div className="policy-content-wrapper">
                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Cookie size={20} />
                            </div>
                            <h2>1. What Are Cookies?</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide analytical reporting to website owners.
                            </p>
                            <p>
                                Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain until expired or manually deleted).
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <BarChart3 size={20} />
                            </div>
                            <h2>2. Cookies We Use</h2>
                        </div>
                        <div className="policy-body">
                            <p>We use the following categories of cookies on our site:</p>
                            <ul>
                                <li>
                                    <strong>Strictly Necessary Cookies:</strong> Essential for you to browse the site and use basic features such as navigation and secure form submissions.
                                </li>
                                <li>
                                    <strong>Performance & Analytics Cookies:</strong> Help us understand how visitors interact with our website by gathering anonymous metrics (e.g., page views, bounce rate, popular features).
                                </li>
                                <li>
                                    <strong>Functionality Cookies:</strong> Remember your preferences (such as theme or contact details) to deliver an optimized personal experience.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Eye size={20} />
                            </div>
                            <h2>3. Third-Party Services</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                In some instances, we may use trusted third-party services that set cookies on our behalf. These may include:
                            </p>
                            <ul>
                                <li><strong>Google Analytics:</strong> For aggregate statistical analysis of website traffic.</li>
                                <li><strong>Calendly:</strong> To enable smooth strategy call scheduling directly through our booking interface.</li>
                            </ul>
                            <p>
                                These third-party services operate under their own independent privacy and cookie policies.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Settings size={20} />
                            </div>
                            <h2>4. Managing Your Cookie Preferences</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                You can control and manage cookies through your web browser settings. Most browsers allow you to:
                            </p>
                            <ul>
                                <li>View what cookies are stored on your device and delete them individually.</li>
                                <li>Block third-party cookies or block all cookies entirely.</li>
                                <li>Set warnings before a cookie is saved.</li>
                            </ul>
                            <p>
                                Please note that disabling cookies may affect the usability and certain interactive features of our website.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <HelpCircle size={20} />
                            </div>
                            <h2>5. Policy Updates</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                We may update this Cookie Policy from time to time to reflect operational, legal, or regulatory changes. We encourage you to review this page periodically to stay informed about our use of cookies.
                            </p>
                        </div>
                    </section>

                    <div className="policy-contact-box">
                        <h3>Need More Information?</h3>
                        <p>Have questions regarding how cookies are used on Axus Infotech? Reach out to our technical support team.</p>
                        <div className="policy-contact-actions">
                            <Link to="/contact" className="btn btn-white">Contact Us</Link>
                            <a href="mailto:contact@axusinfotech.in" className="btn btn-outline">
                                <Mail size={16} /> contact@axusinfotech.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CookiePolicy;
