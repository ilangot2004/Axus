import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, CheckCircle2, ShieldAlert, FileText, Code2, Mail } from 'lucide-react';
import '../styles/Policy.css';

const TermsOfService = () => {
    return (
        <main className="policy-page">
            <div className="container">
                <header className="policy-header">
                    <div className="section-label-pill">Legal & Agreement</div>
                    <h1 className="policy-main-title">Terms of Service</h1>
                    <p className="policy-meta">Last Updated: October 2024</p>
                    <p className="policy-description">
                        Please read these terms and conditions carefully before using our website or commissioning services from Axus Infotech.
                    </p>
                </header>

                <div className="policy-content-wrapper">
                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <CheckCircle2 size={20} />
                            </div>
                            <h2>1. Acceptance of Terms</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                By accessing our website or engaging Axus Infotech for any services (including web development, mobile app development, software engineering, and AI automation), you agree to be bound by these Terms of Service and all applicable laws and regulations.
                            </p>
                            <p>
                                If you do not agree with any of these terms, you are prohibited from using our site and services.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Code2 size={20} />
                            </div>
                            <h2>2. Scope of Services</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                Axus Infotech provides digital technology services, including:
                            </p>
                            <ul>
                                <li>Custom Website & Web Application Development</li>
                                <li>Mobile Application Development (iOS & Android)</li>
                                <li>AI Automation & Workflow Integration</li>
                                <li>SaaS Development & Cloud Solutions</li>
                                <li>Ongoing Technical Maintenance & Support</li>
                            </ul>
                            <p>
                                Specific deliverables, project milestones, timelines, and fees will be outlined in individual Project Proposals or Statements of Work (SOW) mutually agreed upon between Axus Infotech and the Client.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <FileText size={20} />
                            </div>
                            <h2>3. Intellectual Property Rights</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                <strong>Client Ownership:</strong> Upon full and final payment for all agreed deliverables, all custom source code, assets, and design files created specifically for the Client shall become the property of the Client.
                            </p>
                            <p>
                                <strong>Axus Infotech Rights:</strong> Pre-existing frameworks, proprietary code libraries, tools, and general knowledge developed by Axus Infotech remain our intellectual property, with a perpetual, royalty-free license granted to the Client for project operation.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <ShieldAlert size={20} />
                            </div>
                            <h2>4. Client Responsibilities & Content</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                Clients agree to provide timely feedback, required materials (branding, copy, media, credentials), and approvals necessary for project completion.
                            </p>
                            <p>
                                The Client warrants that any content or assets provided to Axus Infotech do not violate any copyright, trademark, or proprietary rights of third parties.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Scale size={20} />
                            </div>
                            <h2>5. Limitation of Liability & Governing Law</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                To the maximum extent permitted by applicable law, Axus Infotech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or products.
                            </p>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the jurisdiction of the courts in Erode, Tamil Nadu, India.
                            </p>
                        </div>
                    </section>

                    <div className="policy-contact-box">
                        <h3>Questions About Our Terms?</h3>
                        <p>We are committed to clear and transparent collaboration. Feel free to contact our legal and project team.</p>
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

export default TermsOfService;
