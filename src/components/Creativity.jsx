import React from 'react';
import '../styles/Creativity.css';

const floatingImages = [
    { src: "https://arcitech.ai/wp-content/uploads/2024/01/IMG-8-100.webp", alt: "Content Creator" },
    { src: "https://arcitech.ai/wp-content/uploads/2024/01/Img-7-100.webp", alt: "AI Image Generator" },
    { src: "https://arcitech.ai/wp-content/uploads/2024/01/IMG-2-100.webp", alt: "AI Image" },
    { src: "https://arcitech.ai/wp-content/uploads/2024/01/IMG-6-100.webp", alt: "AI speech to Text" },
    { src: "https://arcitech.ai/wp-content/uploads/2024/01/IMG-5-100.webp", alt: "Advanced AI Text Speech" },
    { src: "https://arcitech.ai/wp-content/uploads/2024/01/IMG-3-100.webp", alt: "Create Edit Image" },
    { src: "https://arcitech.ai/wp-content/uploads/2024/01/IMG-1-100.webp", alt: "AI Technology" },
    { src: "https://arcitech.ai/wp-content/uploads/2024/01/IMG-4-100.webp", alt: "AI Avatar" }
];

const Creativity = () => {
    return (
        <section className="creativity-section">
            <div className="creativity-container container">
                <div className="creativity-floating-bg">
                    {floatingImages.map((img, index) => (
                        <img 
                            key={index} 
                            src={img.src} 
                            alt={img.alt} 
                            className={`floating-item float-${index}`} 
                        />
                    ))}
                </div>
                
                <div className="creativity-content">
                    <h2 className="creativity-title">
                        Our creativity doesn't end <br className="desktop-break" />on projects only
                    </h2>
                    <a href="#portfolio" className="btn creativity-btn">
                        <span className="smile-icon">😀</span> 
                        <span>Know More</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Creativity;
