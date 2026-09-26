import React from 'react';
import '../styles/SocialProof.css';

const brands = [
    "TechFlow", "AutoGrow", "ScaleUp", "NextGen", "AlphaCorp", "DataWise"
];

const SocialProof = () => {
    return (
        <section className="social-proof">
            <div className="container">
                <p className="social-label">TRUSTED BY INNOVATIVE COMPANIES</p>
                <div className="brand-grid">
                    {brands.map((brand, index) => (
                        <div key={index} className="brand-item">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
