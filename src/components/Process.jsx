import React from 'react';
import { Search, PenTool, Rocket, TrendingUp } from 'lucide-react';
import '../styles/Process.css';

const steps = [
    {
        icon: <Search size={32} />,
        title: "1. Discovery",
        desc: "We analyze your business, goals, and bottlenecks."
    },
    {
        icon: <PenTool size={32} />,
        title: "2. Build",
        desc: "We design and develop your custom solution."
    },
    {
        icon: <Rocket size={32} />,
        title: "3. Launch",
        desc: "We go live and test everything for perfection."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "4. Grow",
        desc: "We optimize and automate for continuous results."
    }
];

const Process = () => {
    return (
        <section className="process section" id="process">
            <div className="container">
                <h2 className="section-title text-center">How We Work</h2>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">0{index + 1}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
