import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Printer } from 'lucide-react';
import '../styles/Legal.css';

const POLICIES = {
    privacy: {
        id: 'privacy',
        path: '/privacy-policy',
        title: 'Privacy Policy',
        label: 'Privacy & Data Protection',
        desc: 'Learn how Axus Infotech collects, protects, processes, and respects your personal and business information.',
        lastUpdated: 'October 2024',
        summary: 'We value your trust. We collect only the information necessary to provide high-quality software, design, and automation services. We never sell your personal information, and you have complete rights to review or request deletion of your data at any time.',
        next: 'terms',
        sections: [
            {
                id: 'collection',
                num: '01',
                title: 'Information We Collect',
                content: (
                    <>
                        <p>
                            We collect information directly from you when you submit a project inquiry, schedule a consultation call, or collaborate with our team. This includes:
                        </p>
                        <ul>
                            <li><strong>Contact Details:</strong> Your name, business email address, phone number, and company name.</li>
                            <li><strong>Project Requirements:</strong> Technical briefs, scope documents, budget allocations, and architectural preferences.</li>
                            <li><strong>Automated Analytics:</strong> Standard usage metrics, device information, browser type, and operating system collected anonymously to optimize website delivery.</li>
                        </ul>
                    </>
                )
            },
            {
                id: 'usage',
                num: '02',
                title: 'How We Use Your Information',
                content: (
                    <>
                        <p>All data collected is used strictly for legitimate commercial and project fulfillment purposes:</p>
                        <ul>
                            <li>Scoping, building, and deploying custom software, web platforms, and mobile apps.</li>
                            <li>Direct project communication, milestone sign-offs, and invoicing.</li>
                            <li>Maintaining platform security, preventing fraudulent activity, and verifying client credentials.</li>
                        </ul>
                        <div className="legal-callout">
                            <strong>Our Core Commitment:</strong> We never sell, monetize, or rent your personal contact details or business requirements to third-party data brokers.
                        </div>
                    </>
                )
            },
            {
                id: 'security',
                num: '03',
                title: 'Data Security & Storage',
                content: (
                    <>
                        <p>
                            We maintain strict physical, technical, and administrative controls to protect your data against unauthorized access, destruction, loss, or alteration. All code repositories and client assets are secured using enterprise-grade encrypted cloud infrastructure and multi-factor authentication.
                        </p>
                        <p>
                            Access to client code and sensitive credentials is strictly restricted to designated project engineers on a need-to-know basis under strict non-disclosure obligations.
                        </p>
                    </>
                )
            },
            {
                id: 'sharing',
                num: '04',
                title: 'Third-Party Service Providers',
                content: (
                    <>
                        <p>
                            We only share information with trusted operational partners required to conduct our business (such as hosting infrastructure, deployment pipelines, and analytics services). Each third-party provider is vetted for compliance with international privacy standards and bound by non-disclosure agreements.
                        </p>
                    </>
                )
            },
            {
                id: 'rights',
                num: '05',
                title: 'Your Rights & Control',
                content: (
                    <>
                        <p>You maintain full authority over your personal information. At any point, you may:</p>
                        <ul>
                            <li>Request a complete copy of the information we hold regarding your account or inquiries.</li>
                            <li>Request immediate correction of inaccurate or outdated details.</li>
                            <li>Request permanent deletion of your contact records, subject to statutory retention requirements.</li>
                        </ul>
                    </>
                )
            }
        ]
    },
    terms: {
        id: 'terms',
        path: '/terms-of-service',
        title: 'Terms of Service',
        label: 'Terms & Agreement',
        desc: 'The official contractual terms and service guidelines governing your relationship with Axus Infotech.',
        lastUpdated: 'October 2024',
        summary: 'These terms set forth the framework for commissioning digital engineering, web design, and AI automation services from Axus Infotech. They ensure mutual transparency, IP protection, and reliable project execution.',
        next: 'cookies',
        sections: [
            {
                id: 'acceptance',
                num: '01',
                title: 'Acceptance of Terms',
                content: (
                    <>
                        <p>
                            By accessing our website or retaining Axus Infotech for digital development and consulting services, you agree to comply with and be legally bound by these Terms of Service and all incorporated policies.
                        </p>
                    </>
                )
            },
            {
                id: 'scope',
                num: '02',
                title: 'Service Scope & Deliverables',
                content: (
                    <>
                        <p>
                            Axus Infotech provides bespoke digital engineering, including custom web development, mobile applications, AI workflow automation, and cloud system architecture.
                        </p>
                        <p>
                            Every project engagement is formalized through a dedicated Statement of Work (SOW) or proposal specifying milestones, delivery schedules, technical parameters, and payment stages.
                        </p>
                    </>
                )
            },
            {
                id: 'ip-rights',
                num: '03',
                title: 'Intellectual Property Ownership',
                content: (
                    <>
                        <p>
                            <strong>Client Ownership:</strong> Upon settlement of all agreed invoices, 100% of all custom source code, UI/UX designs, and bespoke architecture developed specifically for your project transfers to your ownership.
                        </p>
                        <div className="legal-callout">
                            <strong>Pre-existing Frameworks:</strong> General architectural templates, open-source libraries, and proprietary developer utilities remain the property of their respective owners or Axus Infotech, licensed to you perpetually for uninterrupted system operation.
                        </div>
                    </>
                )
            },
            {
                id: 'client-responsibilities',
                num: '04',
                title: 'Client Cooperation & Feedback',
                content: (
                    <>
                        <p>
                            Timely project delivery requires responsive collaboration. Clients agree to provide prompt approvals, necessary digital assets (logos, content copy, credentials), and milestone reviews within mutually agreed timeframes.
                        </p>
                    </>
                )
            },
            {
                id: 'liability',
                num: '05',
                title: 'Limitation of Liability & Jurisdiction',
                content: (
                    <>
                        <p>
                            Axus Infotech shall not be liable for indirect, incidental, or consequential damages resulting from platform downtime or third-party cloud outages. These terms are governed by the laws of India, under the jurisdiction of the courts of Erode, Tamil Nadu.
                        </p>
                    </>
                )
            }
        ]
    },
    cookies: {
        id: 'cookies',
        path: '/cookie-policy',
        title: 'Cookie Policy',
        label: 'Cookies & Tracking',
        desc: 'Understand how and why we utilize cookies, local storage, and anonymous telemetry on our website.',
        lastUpdated: 'October 2024',
        summary: 'We use cookies strictly to improve navigation speed, remember your site preferences, and gather aggregate traffic performance metrics. We never use invasive tracking cookies or sell your activity.',
        next: 'refund',
        sections: [
            {
                id: 'what-are-cookies',
                num: '01',
                title: 'What Are Cookies?',
                content: (
                    <>
                        <p>
                            Cookies are small data files stored securely on your browser when visiting a website. They allow the website to recognize your device, remember preferences across page visits, and ensure smooth security verification.
                        </p>
                    </>
                )
            },
            {
                id: 'categories',
                num: '02',
                title: 'Categories of Cookies We Use',
                content: (
                    <>
                        <p>We classify our cookies into three specific categories:</p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Required for fundamental site security, page routing, and theme rendering. These cannot be disabled.</li>
                            <li><strong>Analytics Cookies:</strong> Collect anonymous aggregate statistics (such as page visit counts and session duration) to help us identify slow pages and improve site usability.</li>
                            <li><strong>Functionality Cookies:</strong> Remember your choices (such as consent preferences or form draft states) so you do not have to re-enter them on return visits.</li>
                        </ul>
                    </>
                )
            },
            {
                id: 'managing-cookies',
                num: '03',
                title: 'Controlling Your Cookie Settings',
                content: (
                    <>
                        <p>
                            You have complete control over your cookie settings. You can review, update, or revoke your consent preferences at any time by clicking the <strong>Cookie Settings</strong> button located in the footer bottom bar.
                        </p>
                        <p>
                            Additionally, all modern browsers allow you to block or delete cookies through browser security settings.
                        </p>
                    </>
                )
            }
        ]
    },
    refund: {
        id: 'refund',
        path: '/refund-policy',
        title: 'Refund Policy',
        label: 'Billing & Refund Guidelines',
        desc: 'Transparent, milestone-based billing and cancellation terms designed for equitable collaboration.',
        lastUpdated: 'October 2024',
        summary: 'Our work is structured into transparent milestone phases. Because our engineering involves customized time and intellectual property, refunds are calculated based on work completed prior to milestone sign-off.',
        next: 'privacy',
        sections: [
            {
                id: 'milestones',
                num: '01',
                title: 'Milestone-Based Project Structure',
                content: (
                    <>
                        <p>
                            To ensure total clarity and risk reduction for our clients, digital development is segmented into verifiable milestones (Discovery, UI/UX Wireframing, Core Development, QA & Launch).
                        </p>
                        <p>
                            Each stage requires your formal written review and sign-off before proceeding to the subsequent phase.
                        </p>
                    </>
                )
            },
            {
                id: 'cancellation',
                num: '02',
                title: 'Cancellation & Refund Eligibility',
                content: (
                    <>
                        <ul>
                            <li><strong>Pre-Kickoff Cancellation:</strong> If you cancel before any discovery, design, or engineering work has commenced, a 100% refund is issued minus statutory payment processing fees.</li>
                            <li><strong>Active Milestone Cancellation:</strong> If a project is paused or cancelled midway through an active milestone, fees for hours accrued or work already executed will be accounted for, and any remaining balance refunded.</li>
                            <li><strong>Approved Deliverables:</strong> Once a deliverable is formally reviewed, accepted, and approved by the Client, payments associated with that milestone are non-refundable.</li>
                        </ul>
                    </>
                )
            },
            {
                id: 'processing',
                num: '03',
                title: 'Processing Time & Disputed Accounts',
                content: (
                    <>
                        <p>
                            All approved refunds are audited and credited back to the original funding account within <strong>7 to 10 business days</strong>. If you ever have a concern regarding a deliverable, our leadership team is committed to addressing revisions within your contractual warranty period.
                        </p>
                    </>
                )
            }
        ]
    }
};

const Legal = ({ defaultTab }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const getTabFromPath = useCallback(() => {
        if (defaultTab) return defaultTab;
        const path = location.pathname;
        if (path.includes('terms')) return 'terms';
        if (path.includes('cookie')) return 'cookies';
        if (path.includes('refund')) return 'refund';
        return 'privacy';
    }, [defaultTab, location.pathname]);

    const [activeTab, setActiveTab] = useState(getTabFromPath);

    useEffect(() => {
        setActiveTab(getTabFromPath());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [getTabFromPath]);

    const currentPolicy = POLICIES[activeTab] || POLICIES.privacy;

    const handleSwitch = (tabKey) => {
        setActiveTab(tabKey);
        navigate(POLICIES[tabKey].path);
    };

    return (
        <main className="legal-page">
            <div className="container">
                {/* Hero Header */}
                <header className="legal-hero">
                    <div className="legal-hero-top">
                        <div className="legal-breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Legal Hub</span>
                            <span>/</span>
                            <span>{currentPolicy.title}</span>
                        </div>
                        <div className="legal-status-pill">
                            <span className="status-dot"></span>
                            <span>Active Policy &bull; {currentPolicy.lastUpdated}</span>
                        </div>
                    </div>
                    <h1 className="legal-hero-title">{currentPolicy.title}</h1>
                    <p className="legal-hero-desc">{currentPolicy.desc}</p>
                </header>

                {/* Mobile / Tablet Horizontal Pills */}
                <div className="mobile-policy-pills">
                    <button
                        className={`mobile-pill ${activeTab === 'privacy' ? 'active' : ''}`}
                        onClick={() => handleSwitch('privacy')}
                    >
                        Privacy Policy
                    </button>
                    <button
                        className={`mobile-pill ${activeTab === 'terms' ? 'active' : ''}`}
                        onClick={() => handleSwitch('terms')}
                    >
                        Terms of Service
                    </button>
                    <button
                        className={`mobile-pill ${activeTab === 'cookies' ? 'active' : ''}`}
                        onClick={() => handleSwitch('cookies')}
                    >
                        Cookie Policy
                    </button>
                    <button
                        className={`mobile-pill ${activeTab === 'refund' ? 'active' : ''}`}
                        onClick={() => handleSwitch('refund')}
                    >
                        Refund Policy
                    </button>
                </div>

                {/* 2-Column Main Layout */}
                <div className="legal-layout">
                    {/* Sticky Sidebar */}
                    <aside className="legal-sidebar">
                        <div>
                            <div className="sidebar-section-title">Legal Documents</div>
                            <nav className="legal-nav-list" aria-label="Legal documents navigation">
                                <button
                                    className={`legal-nav-item ${activeTab === 'privacy' ? 'active' : ''}`}
                                    onClick={() => handleSwitch('privacy')}
                                >
                                    Privacy Policy
                                </button>
                                <button
                                    className={`legal-nav-item ${activeTab === 'terms' ? 'active' : ''}`}
                                    onClick={() => handleSwitch('terms')}
                                >
                                    Terms of Service
                                </button>
                                <button
                                    className={`legal-nav-item ${activeTab === 'cookies' ? 'active' : ''}`}
                                    onClick={() => handleSwitch('cookies')}
                                >
                                    Cookie Policy
                                </button>
                                <button
                                    className={`legal-nav-item ${activeTab === 'refund' ? 'active' : ''}`}
                                    onClick={() => handleSwitch('refund')}
                                >
                                    Refund Policy
                                </button>
                            </nav>
                        </div>

                        {/* Help / Contact Card */}
                        <div className="legal-help-card">
                            <h4>Need Clarification?</h4>
                            <p>Have questions regarding our legal agreements? Our advisory team is glad to assist.</p>
                            <Link to="/contact" className="legal-help-link">
                                Contact Our Team &rarr;
                            </Link>
                        </div>
                    </aside>

                    {/* Main Reading Column (Professional Legal Style) */}
                    <article className="legal-content">
                        {/* Numbered Sections */}
                        {currentPolicy.sections.map((sec, idx) => (
                            <section key={sec.id} id={sec.id} className="legal-section">
                                <h2 className="section-title">
                                    <span className="section-index">{idx + 1}.</span> {sec.title}
                                </h2>
                                <div className="section-body">
                                    {sec.content}
                                </div>
                            </section>
                        ))}

                        {/* Footer Document Actions */}
                        <div className="legal-doc-footer">
                            <button
                                type="button"
                                className="print-btn"
                                onClick={() => window.print()}
                            >
                                <Printer size={14} /> Print Document
                            </button>

                            <button
                                type="button"
                                className="next-policy-btn"
                                onClick={() => handleSwitch(currentPolicy.next)}
                            >
                                Next: {POLICIES[currentPolicy.next].title} <ArrowRight size={14} />
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
};

export default Legal;
