import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, Database, Bell, Mail } from 'lucide-react';
import '../styles/Policy.css';

const PrivacyPolicy = () => {
    return (
        <main className="policy-page">
            <div className="container">
                <header className="policy-header">
                    <div className="section-label-pill">Legal & Privacy</div>
                    <h1 className="policy-main-title">Privacy Policy</h1>
                    <p className="policy-meta">Last Updated: October 2024</p>
                    <p className="policy-description">
                        At Axus Infotech, we respect your privacy and are committed to protecting the personal information you share with us.
                    </p>
                </header>

                <div className="policy-content-wrapper">
                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Eye size={20} />
                            </div>
                            <h2>1. Information We Collect</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                We collect information you provide directly to us when filling out our contact forms, requesting project consultations, or communicating with us. This may include:
                            </p>
                            <ul>
                                <li><strong>Contact Information:</strong> Name, email address, phone number, and company name.</li>
                                <li><strong>Project Information:</strong> Project requirements, scope details, budget ranges, and design preferences.</li>
                                <li><strong>Technical & Usage Data:</strong> IP address, browser type, device information, and site interaction data collected automatically via cookies and analytics.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Database size={20} />
                            </div>
                            <h2>2. How We Use Your Information</h2>
                        </div>
                        <div className="policy-body">
                            <p>We use the collected information for specific, legitimate business purposes, including:</p>
                            <ul>
                                <li>Delivering custom software, web development, app development, and AI automation services.</li>
                                <li>Communicating with you regarding project proposals, milestones, updates, and inquiries.</li>
                                <li>Improving our website performance, user experience, and service offerings.</li>
                                <li>Ensuring legal compliance, system security, and fraud prevention.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Lock size={20} />
                            </div>
                            <h2>3. Data Security & Storage</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                We implement industry-standard physical, technical, and administrative security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
                            </p>
                            <p>
                                While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <ShieldCheck size={20} />
                            </div>
                            <h2>4. Sharing & Disclosure</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                <strong>We do not sell, rent, or trade your personal information.</strong> We only share information with trusted third-party service providers (such as hosting partners, analytics services, and communication tools) who assist us in operating our website and delivering our services, subject to strict confidentiality agreements.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Bell size={20} />
                            </div>
                            <h2>5. Your Rights & Choices</h2>
                        </div>
                        <div className="policy-body">
                            <p>You have the right to:</p>
                            <ul>
                                <li>Request access to the personal data we hold about you.</li>
                                <li>Request correction of inaccurate or incomplete information.</li>
                                <li>Request deletion of your personal data, subject to legal and contractual obligations.</li>
                                <li>Opt-out of marketing communications at any time.</li>
                            </ul>
                        </div>
                    </section>

                    <div className="policy-contact-box">
                        <h3>Have Questions About Our Privacy Policy?</h3>
                        <p>If you have any questions or concerns regarding our privacy practices, our team is here to help.</p>
                        <div className="policy-contact-actions">
                            <Link to="/contact" className="btn btn-white">Contact Us</Link>
                            <a href="mailto:contact@axusinfotech.com" className="btn btn-outline">
                                <Mail size={16} /> contact@axusinfotech.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
