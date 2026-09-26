import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, CheckCircle2, Clock, AlertTriangle, HelpCircle, Mail } from 'lucide-react';
import '../styles/Policy.css';

const RefundPolicy = () => {
    return (
        <main className="policy-page">
            <div className="container">
                <header className="policy-header">
                    <div className="section-label-pill">Billing & Guarantees</div>
                    <h1 className="policy-main-title">Refund Policy</h1>
                    <p className="policy-meta">Last Updated: October 2024</p>
                    <p className="policy-description">
                        Axus Infotech is dedicated to providing high-quality digital solutions. Our refund and cancellation guidelines are structured to be fair, transparent, and milestone-based.
                    </p>
                </header>

                <div className="policy-content-wrapper">
                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <CheckCircle2 size={20} />
                            </div>
                            <h2>1. Milestone-Based Deliverables</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                Because our services involve customized software development, custom UI/UX design, and AI automation engineering, all work is executed in phased milestones (e.g., Discovery/Design, Development, Testing, and Deployment).
                            </p>
                            <p>
                                Payment schedules and milestone sign-offs are explicitly established before beginning project execution.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <RefreshCw size={20} />
                            </div>
                            <h2>2. Cancellation & Eligibility</h2>
                        </div>
                        <div className="policy-body">
                            <p>Our refund policies are categorized as follows:</p>
                            <ul>
                                <li>
                                    <strong>Before Project Kickoff:</strong> If a project is cancelled prior to any design, architecture, or code execution, the client is eligible for a full refund minus any non-refundable transaction or administrative processing fees.
                                </li>
                                <li>
                                    <strong>During Active Milestone Work:</strong> If cancellation occurs during an active milestone, fees for work already completed, hours incurred, or resources reserved will be deducted, and any unearned portion will be refunded.
                                </li>
                                <li>
                                    <strong>Approved Milestones:</strong> Once a milestone deliverable is formally reviewed, accepted, and approved by the Client, payments associated with that milestone are non-refundable.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <AlertTriangle size={20} />
                            </div>
                            <h2>3. Non-Refundable Items</h2>
                        </div>
                        <div className="policy-body">
                            <p>The following expenses and services are strictly non-refundable:</p>
                            <ul>
                                <li>Third-party costs purchased on your behalf (such as domain registrations, cloud hosting, specialized APIs, or stock assets).</li>
                                <li>Completed and delivered software source code or digital design packages.</li>
                                <li>Consultation fees and strategy advisory sessions that have already been conducted.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <Clock size={20} />
                            </div>
                            <h2>4. Refund Processing Time</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                Approved refunds are processed within <strong>7 to 10 business days</strong>. Refunds will be issued via the original payment method or through direct bank transfer to the client's verified commercial account.
                            </p>
                        </div>
                    </section>

                    <section className="policy-card">
                        <div className="policy-card-header">
                            <div className="policy-card-icon">
                                <HelpCircle size={20} />
                            </div>
                            <h2>5. Dispute Resolution</h2>
                        </div>
                        <div className="policy-body">
                            <p>
                                Client satisfaction is our highest priority. If you encounter any issue with a deliverable, we encourage you to contact our project manager directly. We offer revision cycles within our contractual warranty period to address bugs and align deliverables with agreed specifications.
                            </p>
                        </div>
                    </section>

                    <div className="policy-contact-box">
                        <h3>Questions Regarding Billing or Refunds?</h3>
                        <p>Our billing and management team is available to assist you with any questions or account inquiries.</p>
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

export default RefundPolicy;
