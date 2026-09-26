import React from 'react';
import { AlertCircle, Clock, ZapOff } from 'lucide-react';
import '../styles/Problem.css';

const Problem = () => {
    return (
        <section className="problem section" id="problem">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Is Your Business Falling Behind?</h2>
                    <p className="section-subtitle">Most small businesses struggle with the same 3 problems online.</p>
                </div>

                <div className="problem-grid">
                    <div className="problem-card">
                        <div className="icon-box warning">
                            <ZapOff size={32} />
                        </div>
                        <h3>Outdated Website</h3>
                        <p>Your site looks old, doesn't work on mobile, and scares away potential customers instead of converting them.</p>
                    </div>

                    <div className="problem-card">
                        <div className="icon-box warning">
                            <AlertCircle size={32} />
                        </div>
                        <h3>No Predictable Leads</h3>
                        <p>You rely on word-of-mouth or random luck. You don't have a system that brings in new clients consistently.</p>
                    </div>

                    <div className="problem-card">
                        <div className="icon-box warning">
                            <Clock size={32} />
                        </div>
                        <h3>Wasting Time</h3>
                        <p>You spend hours manually replying to messages and chasing leads instead of focusing on your actual work.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
