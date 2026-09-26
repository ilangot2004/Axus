import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
    User,
    Users,
    Building2,
    CheckCircle2,
    ArrowRight,
    Zap,
    Shield,
    Clock,
    Layers,
    Cpu,
    Sparkles,
    ChevronDown,
    Lock,
    GitBranch,
    FileCheck,
    MessageSquare,
    Server,
    ExternalLink
} from 'lucide-react';
import '../styles/SolutionsPage.css';

const tiers = {
    individuals: {
        id: 'individuals',
        title: 'For Individuals',
        badge: 'Solo Founders, Creators & Consultants',
        heroTagline: 'Validate fast, launch clean, and run your business like a 5-person agency.',
        heroDescription:
            'You have the vision, domain expertise, and ambition. You don’t have time for agency bloat, bureaucratic management layers, or inflated developer retainers. Axus Infotech acts as your on-demand technical co-builder—transforming your ideas into production-ready web apps, authority digital platforms, and automated business workflows in days, not months.',
        bestFor: 'Solo founders building 0-to-1 MVPs, independent consultants, boutique creators, and fractional executives.',
        turnaround: '10–14 Days Launch',
        keyMetrics: [
            { label: 'Time to First Launch', value: '14 Days' },
            { label: 'Intellectual Property', value: '100% Yours' },
            { label: 'Direct Senior Dev Access', value: '1-on-1' },
            { label: 'Platform Lock-in', value: '0%' }
        ],
        capabilities: [
            {
                icon: Zap,
                title: 'High-Velocity MVP Engineering',
                description:
                    'Turn wireframes or concepts into scalable, fully functional web and mobile MVPs. Built with React, Next.js, Node.js, and modern serverless backends ready for real customer transactions from day one.',
                deliverables: [
                    'Production React / Next.js web application',
                    'Secure user authentication (Clerk, Supabase, Auth0)',
                    'Integrated payments & subscriptions (Stripe / Razorpay)',
                    'Automated deployment on Vercel / AWS'
                ]
            },
            {
                icon: Layers,
                title: 'Authority Brand Platforms & Booking Portals',
                description:
                    'Bespoke, blazingly fast personal branding websites that convert casual traffic into high-ticket clients. Engineered with custom animations, editorial layouts, and friction-free booking funnels.',
                deliverables: [
                    '100/100 Google Lighthouse performance score',
                    'Built-in Cal.com / Calendly synchronization',
                    'Interactive lead capture funnels & CRM integration',
                    'Technical SEO metadata & social share optimization'
                ]
            },
            {
                icon: Cpu,
                title: 'Solo Operator AI Automations',
                description:
                    'Replace 20+ hours of manual administrative tasks each week. We wire up custom AI workflows, automated lead qualification, WhatsApp/Email autoresponders, and automated invoicing so your business operates 24/7.',
                deliverables: [
                    'Multi-channel inquiry triage & auto-response',
                    'CRM synchronization (Notion, Airtable, HubSpot)',
                    'Automated contract generation & invoice dispatch',
                    'Custom LLM assistants trained on your portfolio/services'
                ]
            },
            {
                icon: FileCheck,
                title: 'Complete IP Handover & Maintenance Handshake',
                description:
                    'You retain total ownership of every line of code, asset, and environment. We provide recorded walkthrough videos, clean documentation, and an optional lightweight retainer for feature iterations.',
                deliverables: [
                    'Clean GitHub repository with zero proprietary vendor lock-in',
                    'Step-by-step video documentation of systems',
                    'Domain, hosting, and API environment ownership transfer',
                    '30 days of post-launch bug warranty & support'
                ]
            }
        ],
        processSteps: [
            {
                step: '01',
                title: 'Concept & Blueprint Sprint',
                description: 'A 60-minute technical discovery session to define core user flows, database schema, and delivery milestones. No bloated decks—just clean execution specs.'
            },
            {
                step: '02',
                title: 'Continuous 14-Day Build',
                description: 'We build in rapid cycles with staging links updated every 48 hours. You test real features as they are coded, providing instant feedback.'
            },
            {
                step: '03',
                title: 'Payment & Infrastructure Wiring',
                description: 'We configure payment gateways, custom domains, transactional emails, analytics, and security hardening.'
            },
            {
                step: '04',
                title: 'Launch & Total IP Transfer',
                description: 'Your project goes live to production. We transfer all credentials, code repositories, and provide a 30-day warranty window.'
            }
        ],
        ctaTitle: 'Ready to launch your solo venture or MVP?',
        ctaSubtitle: 'Schedule a free 20-minute architecture discovery call. We’ll map out your tech stack and exact delivery roadmap.'
    },
    teams: {
        id: 'teams',
        title: 'For Teams',
        badge: 'Startups & Product Engineering Pods',
        heroTagline: 'High-velocity engineering pods that integrate into your sprints and accelerate roadmap execution.',
        heroDescription:
            'Recruiting senior developers takes months, carries huge equity/salary commitments, and slows your product momentum. Axus Infotech provides dedicated, battle-tested engineering pods—frontend, backend, UI/UX, and QA—that plug directly into your Jira, Slack, and GitHub workflows within 48 hours to ship mission-critical software.',
        bestFor: 'Seed to Series-B startups, high-growth digital businesses, agency partners, and tech teams needing elastic bandwidth.',
        turnaround: '48-Hour Sprint Onboarding',
        keyMetrics: [
            { label: 'Release Velocity', value: '2x Faster' },
            { label: 'Sprint Adherence Rate', value: '99.5%' },
            { label: 'Onboarding to Sprint', value: '48 Hours' },
            { label: 'Tech Stack Coverage', value: 'Full-Stack' }
        ],
        capabilities: [
            {
                icon: GitBranch,
                title: 'Embedded Engineering Pods',
                description:
                    'Senior engineers who work as a seamless extension of your in-house team. We attend daily standups, adhere to your git branching standards, and deliver clean, unit-tested PRs directly into your repositories.',
                deliverables: [
                    'Full-stack engineers (React, Node, Python, Next.js, Go)',
                    'Embedded UI/UX designers and automated QA engineers',
                    'Seamless Slack, Jira, Linear, and GitHub integration',
                    'Flexible capacity scaling up or down with 14-day notice'
                ]
            },
            {
                icon: Layers,
                title: 'Custom SaaS & Cloud Architecture',
                description:
                    'Scalable, multi-tenant web applications engineered for heavy concurrent usage. We design resilient relational/NoSQL schemas, microservices, and high-throughput REST and GraphQL APIs.',
                deliverables: [
                    'Multi-tenant architecture with isolated tenant data',
                    'Role-based permissions & team workspace management',
                    'Automated CI/CD pipelines with preview environments',
                    'Cloud native infrastructure on AWS, GCP, or Azure'
                ]
            },
            {
                icon: Zap,
                title: 'Cross-Platform iOS & Android Applications',
                description:
                    'Ship a single, unified codebase across iOS and Android with zero performance compromises. Built with React Native or Flutter, with native module bridges, offline-first caching, and biometric authentication.',
                deliverables: [
                    'App Store & Google Play submission and approval guarantee',
                    'Offline data persistence and background sync',
                    'Push notifications, deep linking & analytics integration',
                    'Native performance profiling and 60fps UI animations'
                ]
            },
            {
                icon: Cpu,
                title: 'Internal Ops Dashboards & Integration Hubs',
                description:
                    'Free your engineering team from building internal admin screens. We build robust operational dashboards, billing portals, customer support tools, and complex multi-API data synchronization engines.',
                deliverables: [
                    'Custom admin consoles with audit logging',
                    'Third-party integrations (Stripe, Salesforce, HubSpot, Twilio)',
                    'Automated batch data processing and webhook listeners',
                    'Custom reporting and real-time analytical metrics'
                ]
            }
        ],
        processSteps: [
            {
                step: '01',
                title: 'Sprint Alignment & Repo Access',
                description: 'We connect to your GitHub, Jira/Linear, and Slack within 24–48 hours, absorbing your architectural patterns, coding guidelines, and sprint cadence.'
            },
            {
                step: '02',
                title: 'Active Sprint Execution',
                description: 'Our engineers pick up story points, participate in planning, and submit well-documented PRs with automated unit and integration tests.'
            },
            {
                step: '03',
                title: 'Code Review & QA Staging',
                description: 'Rigorous peer reviews and automated QA staging ensure zero regressions reach your staging or production branches.'
            },
            {
                step: '04',
                title: 'Continuous Velocity Scaling',
                description: 'Monthly retrospectives and sprint reviews allow you to scale pod bandwidth up or down as roadmap priorities evolve.'
            }
        ],
        ctaTitle: 'Scale your engineering output this week',
        ctaSubtitle: 'Discuss your roadmap backlog with our engineering leads and integrate a dedicated pod in 48 hours.'
    }
};

const comparisonMatrix = [
    {
        feature: 'Target Team Size',
        individuals: '1 – 3 People (Solo operators)',
        teams: '5 – 50 People (Product teams)',
        enterprises: '—'
    },
    {
        feature: 'Primary Objective',
        individuals: 'Fast MVP, portfolio & automated workflows',
        teams: 'Accelerate sprint velocity & custom SaaS',
        enterprises: '—'
    },
    {
        feature: 'Time to First Delivery',
        individuals: '10 – 14 Days',
        teams: 'Continuous 2-Week Sprints',
        enterprises: '—'
    },
    {
        feature: 'Engagement Structure',
        individuals: 'Fixed-Price Sprint / Milestone',
        teams: 'Monthly Pod Retainer / Dedicated Devs',
        enterprises: '—'
    },
    {
        feature: 'Communications Channel',
        individuals: 'Direct WhatsApp, Email & Weekly Call',
        teams: 'Embedded in Slack, Jira & Daily Async',
        enterprises: '—'
    },
    {
        feature: 'Code Reviews & Testing',
        individuals: 'Senior Dev Review & Functional QA',
        teams: 'Automated CI/CD, Unit & E2E Testing',
        enterprises: '—'
    },
    {
        feature: 'Intellectual Property Ownership',
        individuals: '100% Owned by Client',
        teams: '100% Owned by Client',
        enterprises: '—'
    },
    {
        feature: 'SLA & Uptime Guarantee',
        individuals: 'Standard Hosting SLA',
        teams: '99.5% Sprint SLA',
        enterprises: '—'
    }
];

const faqs = [
    {
        q: 'How do I know which tier is right for my project?',
        a: 'If you are validating a new idea, building a personal authority site, or need solo automation, "For Individuals" is built for speed and low overhead. If you already have a product or active customer base and need continuous engineering velocity, "For Teams" embeds dedicated developers into your workflow. If you are an enterprise needing custom SLA guarantees or private on-prem AI, contact us directly for our Enterprise Private Preview.'
    },
    {
        q: 'Do I retain 100% intellectual property of everything built?',
        a: 'Yes, unconditionally. Across all solutions, all code, designs, database schemas, and intellectual property belong exclusively to you from the moment it is written. We never lock you into proprietary hosting or closed libraries.'
    },
    {
        q: 'Can we start as an Individual MVP and upgrade to a Team Pod later?',
        a: 'Absolutely. Many of our most successful clients began with a 14-day Individual MVP build. Once product-market fit was established and funding was secured, they transitioned seamlessly into a dedicated monthly Team Pod to maintain continuous feature velocity.'
    },
    {
        q: 'How quickly can an engineering pod or individual project start?',
        a: 'Individual MVP projects can kick off within 48 to 72 hours following the technical scoping call. Dedicated Team pods can be integrated into your Slack and Jira environments within 2 business days.'
    },
    {
        q: 'What technologies do you specialize in?',
        a: 'We specialize in modern, battle-tested technologies including React, Next.js, TypeScript, Node.js, Python (FastAPI, PyTorch, LangChain), Flutter, React Native, PostgreSQL, Redis, Docker, Kubernetes, AWS, GCP, and Azure.'
    }
];

const SolutionsPage = ({ defaultTier = 'individuals' }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tierParam = searchParams.get('tier');

    const validTiers = ['individuals', 'teams', 'large-companies'];
    const initialTier = tierParam && validTiers.includes(tierParam) ? tierParam : defaultTier;
    const [activeTier, setActiveTier] = useState(initialTier);
    const [openFaq, setOpenFaq] = useState(null);

    // Sync state with URL parameter if it changes
    useEffect(() => {
        if (tierParam && validTiers.includes(tierParam)) {
            setActiveTier(tierParam);
        }
    }, [tierParam]);

    const handleTierChange = (newTier) => {
        setActiveTier(newTier);
        setSearchParams({ tier: newTier });
        window.scrollTo({ top: 380, behavior: 'smooth' });
    };

    const isLargeCompanies = activeTier === 'large-companies';
    const currentTierData = tiers[activeTier] || tiers.individuals;

    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="solutions-page-root">
            {/* Page Hero */}
            <header className="solutions-page-hero">
                <div className="container">
                    <div className="hero-pill-badge">
                        <Sparkles size={14} className="hero-badge-icon" />
                        <span>Tailored Client Solutions</span>
                    </div>
                    <h1 className="solutions-page-h1">
                        High-Performance Engineering Built for Every <span className="italic-serif">Scale</span>
                    </h1>
                    <p className="solutions-page-subtitle">
                        From solo innovators launching their first MVP in two weeks to agile product teams shipping at 2x velocity. Pick your stage to see how Axus delivers precision execution.
                    </p>

                    {/* Segment Switcher */}
                    <div className="tier-navigation-bar" role="tablist">
                        <button
                            role="tab"
                            aria-selected={activeTier === 'individuals'}
                            className={`tier-nav-btn ${activeTier === 'individuals' ? 'active' : ''}`}
                            onClick={() => handleTierChange('individuals')}
                        >
                            <User size={18} />
                            <span>For Individuals</span>
                        </button>
                        <button
                            role="tab"
                            aria-selected={activeTier === 'teams'}
                            className={`tier-nav-btn ${activeTier === 'teams' ? 'active' : ''}`}
                            onClick={() => handleTierChange('teams')}
                        >
                            <Users size={18} />
                            <span>For Teams</span>
                            <span className="pill-popular">Popular</span>
                        </button>
                        <button
                            role="tab"
                            aria-selected={activeTier === 'large-companies'}
                            className={`tier-nav-btn ${activeTier === 'large-companies' ? 'active' : ''}`}
                            onClick={() => handleTierChange('large-companies')}
                        >
                            <Building2 size={18} />
                            <span>For Large Companies</span>
                            <span className="pill-soon">Soon</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Active Tier Deep-Dive Section */}
            <main className="container active-tier-section" id="tier-details">
                {/* When "For Large Companies" is selected: Reveal prominent Coming Soon enterprise card */}
                {isLargeCompanies ? (
                    <div className="enterprise-soon-container">
                        <div className="enterprise-soon-badge-row">
                            <span className="enterprise-status-badge">Soon</span>
                            <span className="enterprise-tier-pill">
                                <Building2 size={14} />
                                For Large Companies
                            </span>
                        </div>

                        <h2 className="enterprise-soon-title">
                            Coming Soon
                        </h2>

                        <p className="enterprise-soon-tagline">
                            Dedicated solutions and custom tier offerings for large companies and corporations are currently in development.
                        </p>

                        <div className="enterprise-early-access-box">
                            <div className="early-access-text">
                                <h4>Inquire for Enterprise Solutions</h4>
                                <p>
                                    Get in touch with our team for custom enterprise requirements and architectural consultations.
                                </p>
                            </div>
                            <div className="early-access-actions">
                                <Link to="/contact" className="btn-enterprise-inquire">
                                    <span>Contact Us</span>
                                    <ArrowRight size={16} />
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=917418332509&text=Hi%20Axus%20Infotech,%20I%20would%20like%20to%20inquire%20about%20enterprise%20solutions."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-enterprise-wa"
                                >
                                    <MessageSquare size={16} />
                                    <span>WhatsApp Inquiry</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Revealed Tiers: For Individuals & For Teams */
                    <>
                        {/* Hero Card for Active Tier */}
                        <div className="tier-spotlight-card">
                            <div className="spotlight-top">
                                <div className="spotlight-badge-row">
                                    <span className="tier-badge-label">{currentTierData.badge}</span>
                                    <span className="tier-turnaround-badge">
                                        <Clock size={14} />
                                        {currentTierData.turnaround}
                                    </span>
                                </div>
                                <h2 className="tier-spotlight-title">{currentTierData.title}</h2>
                                <p className="tier-spotlight-tagline">{currentTierData.heroTagline}</p>
                                <p className="tier-spotlight-description">{currentTierData.heroDescription}</p>

                                <div className="tier-ideal-for-box">
                                    <strong>Best Suited For:</strong> {currentTierData.bestFor}
                                </div>
                            </div>

                            {/* Key Metrics Grid */}
                            <div className="tier-metrics-grid">
                                {currentTierData.keyMetrics.map((metric, idx) => (
                                    <div key={idx} className="tier-metric-item">
                                        <div className="metric-number">{metric.value}</div>
                                        <div className="metric-name">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Capabilities Grid */}
                        <section className="tier-capabilities-section">
                            <div className="section-intro">
                                <h3 className="section-subheading">Core Capabilities & Technical Deliverables</h3>
                                <p className="section-subdesc">
                                    Every engagement is structured around concrete, production-ready deliverables with full transparency.
                                </p>
                            </div>

                            <div className="capabilities-grid">
                                {currentTierData.capabilities.map((cap, idx) => {
                                    const CapIcon = cap.icon;
                                    return (
                                        <div key={idx} className="capability-card">
                                            <div className="cap-header">
                                                <div className="cap-icon-box">
                                                    <CapIcon size={22} />
                                                </div>
                                                <h4 className="cap-title">{cap.title}</h4>
                                            </div>
                                            <p className="cap-desc">{cap.description}</p>
                                            <div className="cap-deliverables-wrap">
                                                <div className="cap-deliverables-title">What You Receive:</div>
                                                <ul className="cap-deliverables-list">
                                                    {cap.deliverables.map((item, dIdx) => (
                                                        <li key={dIdx}>
                                                            <CheckCircle2 size={15} className="cap-check" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Process Steps */}
                        <section className="tier-process-section">
                            <div className="section-intro">
                                <h3 className="section-subheading">How We Work Together</h3>
                                <p className="section-subdesc">
                                    A battle-tested execution framework designed for speed, clarity, and zero developer bloat.
                                </p>
                            </div>

                            <div className="process-timeline-grid">
                                {currentTierData.processSteps.map((step, idx) => (
                                    <div key={idx} className="process-step-card">
                                        <div className="step-number">{step.step}</div>
                                        <h4 className="step-title">{step.title}</h4>
                                        <p className="step-desc">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Tier Specific Callout Banner */}
                        <div className="tier-cta-banner">
                            <div className="cta-banner-text">
                                <h3 className="cta-banner-h3">{currentTierData.ctaTitle}</h3>
                                <p className="cta-banner-p">{currentTierData.ctaSubtitle}</p>
                            </div>
                            <div className="cta-banner-actions">
                                <Link to="/contact" className="btn-cta-white">
                                    <span>Get Started Today</span>
                                    <ArrowRight size={16} />
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=917418332509&text=Hi%20Axus%20Infotech,%20I%20am%20interested%20in%20your%20solutions."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-cta-whatsapp"
                                >
                                    <MessageSquare size={16} />
                                    <span>WhatsApp Us</span>
                                </a>
                            </div>
                        </div>
                    </>
                )}

                {/* Cross-Tier Comparison Matrix */}
                <section className="tier-comparison-section">
                    <div className="section-intro">
                        <h3 className="section-subheading">Tier Comparison Matrix</h3>
                        <p className="section-subdesc">
                            Compare engagement models, delivery timelines, and technical commitments across all tiers side-by-side.
                        </p>
                    </div>

                    <div className="table-scroll-hint">← Swipe horizontally to compare tiers →</div>
                    <div className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Criteria</th>
                                    <th className={activeTier === 'individuals' ? 'current-column' : ''}>For Individuals</th>
                                    <th className={activeTier === 'teams' ? 'current-column' : ''}>For Teams</th>
                                    <th className={activeTier === 'large-companies' ? 'current-column' : ''}>
                                        For Large Companies <span className="pill-soon" style={{ marginLeft: '6px' }}>Soon</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonMatrix.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="row-feature">{row.feature}</td>
                                        <td className={activeTier === 'individuals' ? 'current-cell' : ''}>{row.individuals}</td>
                                        <td className={activeTier === 'teams' ? 'current-cell' : ''}>{row.teams}</td>
                                        <td className={`coming-soon-cell ${activeTier === 'large-companies' ? 'current-cell' : ''}`}>
                                            {row.enterprises}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQs */}
                <section className="solutions-faq-section">
                    <div className="section-intro">
                        <h3 className="section-subheading">Frequently Asked Questions</h3>
                        <p className="section-subdesc">
                            Everything you need to know about working with Axus Infotech.
                        </p>
                    </div>

                    <div className="faq-accordion-list">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                                    <button
                                        className="faq-trigger"
                                        onClick={() => toggleFaq(idx)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="faq-question">{faq.q}</span>
                                        <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                                    </button>
                                    {isOpen && (
                                        <div className="faq-answer">
                                            <p>{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SolutionsPage;
