import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import '../styles/WhyUs.css';

const WhyUs = () => {
    return (
        <section className="why-us section" id="why-us">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Freelancer vs. <span className="text-gradient">Agency Team</span></h2>
                    <p className="section-subtitle">Why smart businesses choose Axus Infotech over solo freelancers.</p>
                </div>

                <div className="comparison-table">
                    <div className="comparison-header">
                        <div className="col">Feature</div>
                        <div className="col freelancer">Typical Freelancer</div>
                        <div className="col us">Axus Team</div>
                    </div>

                    <div className="comparison-row">
                        <div className="col feature">Availability</div>
                        <div className="col freelancer">Limited (9-5)</div>
                        <div className="col us"><CheckCircle size={18} className="icon-check" /> Always Available</div>
                    </div>

                    <div className="comparison-row">
                        <div className="col feature">Skills</div>
                        <div className="col freelancer">Jack of all trades, master of none</div>
                        <div className="col us"><CheckCircle size={18} className="icon-check" /> Specialists for every role</div>
                    </div>

                    <div className="comparison-row">
                        <div className="col feature">Reliability</div>
                        <div className="col freelancer">Can get sick or ghost</div>
                        <div className="col us"><CheckCircle size={18} className="icon-check" /> 100% Retainer Guarantee</div>
                    </div>

                    <div className="comparison-row">
                        <div className="col feature">Systems</div>
                        <div className="col freelancer">Builds from scratch every time</div>
                        <div className="col us"><CheckCircle size={18} className="icon-check" /> Proven frameworks & AI</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
