import React from 'react';
import CountUp from 'react-countup';
import { ArrowUpRight } from 'lucide-react';
import '../styles/Portfolio.css';
const projects = [
    {
        title: "Demo1.ai",
        year: "2024",
        description: "Intelligent AI assistant platform empowering teams with automated decision-making and seamless workflows.",
        link: "#",
        bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        title: "Demo2.ai",
        year: "2024",
        description: "AI-powered interactive tools create engaging and Dynamic learning environments.",
        link: "#",
        bg: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)"
    },
    {
        title: "Demo3.ai",
        year: "2025",
        description: "With BPObox, every call becomes an opportunity to improve. AI tracks compliance, identifies important details, and helps teams respond faster.",
        link: "#",
        bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
        title: "Demo4.ai",
        year: "2025",
        description: "All Talent Agency uses AI in our Smart Talent Portal to effortlessly connect influencers, talent, and artists with ideal jobs.",
        link: "#",
        bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
    }
];

const Portfolio = () => {
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portfolio-header-area">
                <div className="container">
                    {/* Header Row */}
                    <div className="portfolio-header">
                        <h2 className="portfolio-main-title">Our Projects</h2>
                    </div>

                    {/* Stats Row */}
                    <div className="portfolio-stats-row">
                        <div className="stat-group">
                            <div className="stat-item">
                                <CountUp prefix="0" end={5} duration={2} enableScrollSpy={true} scrollSpyOnce={true} className="stat-number" />
                                <h3 className="stat-label">Completed Projects</h3>
                            </div>
                            <div className="stat-item">
                                <CountUp prefix="0" end={1} suffix="+" duration={2} enableScrollSpy={true} scrollSpyOnce={true} className="stat-number" />
                                <h3 className="stat-label">AI Integrations</h3>
                            </div>
                        </div>
                        <div className="stat-desc">
                            <p>We've excelled in various projects, including AI initiatives, as evidenced by our extensive case study portfolio.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects List: Full Bleed Cards */}
            {/* 
            <div className="portfolio-list">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-card" style={{ background: project.bg }}>
                        <div className="portfolio-card-overlay"></div>
                        <div className="portfolio-card-content container">
                            <div className="portfolio-card-info">
                                <h4 className="portfolio-title">{project.title}</h4>
                                <p className="portfolio-description">{project.description}</p>
                            </div>
                            <div className="portfolio-card-actions">
                                <span className="year-pill">{project.year}</span>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="explore-btn">
                                    Explore <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            */}

            <div className="container">
                {/* Explore More Footer */}
                <div className="portfolio-footer">
                    <h4 className="explore-title">Explore more?</h4>
                    <a href="#portfolio" className="btn btn-secondary view-projects-btn">
                        <span>View projects</span>
                        <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
