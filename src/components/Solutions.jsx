import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, User, Users, Building2, Zap, Shield, Sparkles } from 'lucide-react';
import '../styles/Solutions.css';

const solutionsData = [
    {
        id: 'individuals',
        icon: User,
        badge: 'Solo Founders & Creators',
        title: 'For Individuals',
        tagline: 'Move fast, launch clean, and automate operations as a team of one.',
        description: 'You don\'t need a bloated agency or full-time payroll to validate and scale your ideas. We partner directly with solo founders, independent consultants, and creators to build market-ready MVPs, authority personal brands, and automated pipelines.',
        timeline: '10–14 Days MVP Delivery',
        highlights: [
            'Full MVP build with modern stack (React/Node/Python)',
            'High-converting personal branding & portfolio sites',
            'No-code / AI automated workflows (Notion, Stripe, CRM)',
            '100% intellectual property ownership & zero lock-in'
        ],
        metrics: [
            { label: 'Time to Market', value: '14 Days' },
            { label: 'IP Ownership', value: '100%' },
            { label: 'Dev Overhead', value: 'Zero' }
        ],
        ctaText: 'Explore Individual Solutions',
        link: '/solutions?tier=individuals'
    },
    {
        id: 'teams',
        icon: Users,
        badge: 'Startups & Scale-Ups',
        title: 'For Teams',
        tagline: 'High-velocity engineering pods and custom software built to scale with your traction.',
        description: 'Accelerate your product roadmap without recruitment drag. We plug battle-tested engineering pods directly into your Jira, GitHub, and Slack sprints to build custom SaaS architectures, cross-platform apps, and scalable digital engines.',
        timeline: 'Immediate Sprint Integration',
        isPopular: true,
        highlights: [
            'Dedicated engineering pods (Frontend, Backend, UI/UX, QA)',
            'Custom SaaS development with multi-tenant architecture',
            'iOS & Android native/cross-platform apps (React Native, Flutter)',
            'Internal tooling, operations dashboards & API ecosystems'
        ],
        metrics: [
            { label: 'Release Velocity', value: '2x Faster' },
            { label: 'Sprint Adherence', value: '99.5%' },
            { label: 'Integration', value: '48 Hours' }
        ],
        ctaText: 'Explore Team Solutions',
        link: '/solutions?tier=teams'
    }
];

const Solutions = () => {
    const [activeTab, setActiveTab] = useState('teams');

    const isLargeCompanies = activeTab === 'large-companies';
    const selectedSolution = solutionsData.find(s => s.id === activeTab) || solutionsData[1];

    return (
        <section className="solutions-section section" id="solutions">
            <div className="container">
                <div className="solutions-header">
                    <div className="section-label-pill">Tailored Solutions</div>
                    <h2 className="solutions-title">
                        Engineered for your <span className="italic-serif">Scale</span>
                    </h2>
                    <p className="solutions-subtitle">
                        Whether you are a solo visionary launching an MVP or a scaling product team needing engineering velocity, we deliver precision execution tailored to your stage.
                    </p>
                </div>

                {/* Segment Selector Tabs */}
                <div className="solutions-tabs-nav" role="tablist">
                    <button
                        role="tab"
                        aria-selected={activeTab === 'individuals'}
                        className={`solution-tab-btn ${activeTab === 'individuals' ? 'active' : ''}`}
                        onClick={() => setActiveTab('individuals')}
                    >
                        <User size={16} />
                        <span>For Individuals</span>
                    </button>
                    <button
                        role="tab"
                        aria-selected={activeTab === 'teams'}
                        className={`solution-tab-btn ${activeTab === 'teams' ? 'active' : ''}`}
                        onClick={() => setActiveTab('teams')}
                    >
                        <Users size={16} />
                        <span>For Teams</span>
                        <span className="tab-badge">Popular</span>
                    </button>
                    <button
                        role="tab"
                        aria-selected={activeTab === 'large-companies'}
                        className={`solution-tab-btn ${activeTab === 'large-companies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('large-companies')}
                    >
                        <Building2 size={16} />
                        <span>For Large Companies</span>
                        <span className="tab-soon-badge">Soon</span>
                    </button>
                </div>

                {/* Active Solution Showcase */}
                {isLargeCompanies ? (
                    /* Large Companies: Big Soon Teaser Card */
                    <div className="home-enterprise-soon-card">
                        <span className="home-soon-badge">Soon • Private Preview</span>
                        <h3 className="home-soon-title">Institutional & Enterprise Solutions</h3>
                        <p className="home-soon-tagline">
                            Dedicated SOC2-compliant engineering pipelines, air-gapped enterprise AI models, and Tier-3 SLA managed infrastructure for large corporations.
                        </p>
                        <div className="home-soon-pills">
                            <span className="home-soon-pill-item">Private AI & RAG</span>
                            <span className="home-soon-pill-item">Legacy Modernization</span>
                            <span className="home-soon-pill-item">SOC2 / ISO RBAC</span>
                            <span className="home-soon-pill-item">99.99% Uptime SLA</span>
                        </div>
                        <div className="home-soon-cta-row">
                            <Link to="/solutions?tier=large-companies" className="btn-home-enterprise-inquire">
                                <span>Learn More & Early Access</span>
                                <ArrowRight size={15} />
                            </Link>
                            <Link to="/contact" className="btn-secondary-action" style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.15)' }}>
                                Book Enterprise Consultation
                            </Link>
                        </div>
                    </div>
                ) : (
                    /* Revealed Tiers: Individuals and Teams */
                    <div className="solution-showcase-card">
                        <div className="showcase-content-grid">
                            {/* Left column: Overview & Highlights */}
                            <div className="showcase-left">
                                <div className="showcase-badge-row">
                                    <span className="showcase-badge">{selectedSolution.badge}</span>
                                    <span className="showcase-timeline">
                                        <Sparkles size={13} />
                                        {selectedSolution.timeline}
                                    </span>
                                </div>

                                <h3 className="showcase-title">{selectedSolution.title}</h3>
                                <p className="showcase-tagline">{selectedSolution.tagline}</p>
                                <p className="showcase-desc">{selectedSolution.description}</p>

                                <div className="showcase-deliverables">
                                    <h4 className="deliverables-heading">Core Deliverables:</h4>
                                    <ul className="deliverables-list">
                                        {selectedSolution.highlights.map((point, idx) => (
                                            <li key={idx} className="deliverable-item">
                                                <CheckCircle2 size={15} className="deliverable-check" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="showcase-actions">
                                    <Link to={selectedSolution.link} className="btn-primary-action">
                                        <span>{selectedSolution.ctaText}</span>
                                        <ArrowRight size={15} />
                                    </Link>
                                    <Link to="/contact" className="btn-secondary-action">
                                        Book a Discovery Call
                                    </Link>
                                </div>
                            </div>

                            {/* Right column: Metrics & Tier Highlights */}
                            <div className="showcase-right">
                                <div className="metrics-box">
                                    <h4 className="metrics-box-title">Key Commitments</h4>
                                    <div className="metrics-row">
                                        {selectedSolution.metrics.map((m, idx) => (
                                            <div key={idx} className="metric-stat-item">
                                                <div className="metric-stat-value">{m.value}</div>
                                                <div className="metric-stat-label">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="solutions-overview-card">
                                    <div className="overview-header">
                                        <Zap size={16} className="overview-icon" />
                                        <span>Why clients choose Axus</span>
                                    </div>
                                    <p className="overview-text">
                                        Direct senior developer access, zero technical debt, and modular codebases built to scale seamlessly.
                                    </p>
                                    <div className="overview-footer">
                                        <Shield size={14} className="shield-icon" />
                                        <span>100% Client IP Ownership & Strict NDA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Solutions;
