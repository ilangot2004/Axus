import React from 'react';
import Marquee from 'react-fast-marquee';
import '../styles/ClientsAndCreativity.css';

import cubeCorpLogo from '../assets/clients/cube-corpsolutions.png';
import designMeLogo from '../assets/clients/designme.png';
import dirghaWellnessLogo from '../assets/clients/dirgha-wellness.png';
import magizhlBakesLogo from '../assets/clients/magizhl-bakes.png';
import sriKrishnaLogo from '../assets/clients/sri-krishna.png';
import autoLogo from '../assets/clients/auto.png';
import mixndmatchLogo from '../assets/clients/mixndmatch.png';
import nigazhLogo from '../assets/clients/nigazh.png';

const clients = [
    { name: "Cube Corp Solutions", logo: cubeCorpLogo },
    { name: "DesignMe", logo: designMeLogo },
    { name: "Dirgha Wellness", logo: dirghaWellnessLogo },
    { name: "Magizhl Bakes", logo: magizhlBakesLogo },
    { name: "Sri Krishna", logo: sriKrishnaLogo },
    { name: "Auto", logo: autoLogo },
    { name: "Mix n Match", logo: mixndmatchLogo },
    { name: "Nigazh", logo: nigazhLogo }
];

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

const ClientsAndCreativity = () => {
    return (
        <section className="clients-creativity-section">
            {/* Clients Marquee */}
            <div className="clients-area">
                <div className="container">
                    <h4 className="clients-title">Some of our clients:</h4>
                    <div className="elementor-element">
                        <Marquee 
                            speed={40} 
                            gradient={true} 
                            gradientColor={[255, 255, 255]} 
                            gradientWidth={100}
                            pauseOnHover={true}
                            className="clients-marquee"
                        >
                            {clients.map((client, index) => (
                                <div key={index} className="client-logo-wrapper">
                                    <img src={client.logo} alt={client.name} className="client-logo-img" />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>

            {/* Creativity Banner */}
            <div className="creativity-area">
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
                            Our creativity doesn't end<br/> on projects only
                        </h2>
                        <a href="#portfolio" className="btn btn-primary creativity-btn">
                            <span className="smile-icon">😀</span> 
                            <span>Know More</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsAndCreativity;
