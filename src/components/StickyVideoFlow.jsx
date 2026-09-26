import React from 'react';
import '../styles/StickyVideoFlow.css';
import astronautVideo from '../assets/astronaut.mp4';

const StickyVideoFlow = () => {
    return (
        <section className="sticky-video-section">
            <video 
                className="sticky-background-video" 
                autoPlay 
                muted 
                loop 
                playsInline
            >
                <source src={astronautVideo} type="video/mp4" />
            </video>
            <div className="sticky-video-overlay">
                <h2 className="sticky-video-text">
                    Fly into the future<br />
                    with Axus Infotech.
                </h2>
            </div>
        </section>
    );
};

export default StickyVideoFlow;
