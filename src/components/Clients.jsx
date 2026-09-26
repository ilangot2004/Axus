import React from 'react';
import Marquee from 'react-fast-marquee';
import '../styles/Clients.css';

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

const Clients = () => {
    return (
        <section className="clients-section">
            <div className="container">
                <h4 className="clients-title">Some of our clients:</h4>
                <div className="clients-marquee-container">
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
        </section>
    );
};

export default Clients;
