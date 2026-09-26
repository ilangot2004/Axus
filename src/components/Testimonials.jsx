import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Star, User } from 'lucide-react';
import CountUp from 'react-countup';
import 'swiper/css';
import '../styles/Testimonials.css';

const testimonials = [
    {
        text: "Working with Axus Infotech has been an absolute pleasure. Their team truly understood what we needed to build scalable, automated workflows. Every sprint was solutions-driven and elevated our efficiency across the board. We appreciate their dedication and proactive communication!",
        name: "Cube Corp Solutions",
        title: "Enterprise Solutions"
    },
    {
        text: "Axus Infotech delivered our platform on time with exceptional craftsmanship, perfectly capturing our aesthetic vision. Their attention to detail, fluid UI animations, and precision engineering made them the ideal tech partner for our creative studio.",
        name: "DesignMe",
        title: "Design & Creative Studio"
    },
    {
        text: "Axus Infotech has been a game-changer for our wellness brand! They delivered a modern, fast, and seamless consultation and booking portal even though our launch timeline was tight. Their responsiveness and problem-solving approach made the whole process stress-free.",
        name: "Dirgha Wellness",
        title: "Health & Holistic Care"
    },
    {
        text: "I was ecstatic with the custom e-commerce and ordering web platform that Axus Infotech built for us. It looks terrific and handles high-volume orders effortlessly. The attention to detail and creative input made all the difference. Highly recommended!",
        name: "Magizhl Bakes",
        title: "Artisan Bakes, Made at Home"
    },
    {
        text: "What I love most about Axus Infotech is their proactive approach. They not only delivered what was promised but went the extra mile to ensure our digital furniture catalog is optimized, mobile-friendly, and converts inquiries reliably.",
        name: "Sri Krishna Furniture",
        title: "Interiors & Custom Furniture"
    },
    {
        text: "Axus Infotech has been an incredible partner—fast, detail-oriented, and highly reliable. Their engineers modernized our vehicle data workflows with smart design choices and robust APIs. Working with Axus feels like having an elite extension of our own team.",
        name: "AutoH2",
        title: "Automotive Technology"
    },
    {
        text: "Absolutely fantastic experience working with the Axus Infotech team! They understood our creative media portfolio requirements perfectly and delivered a silky-smooth, high-definition showcase that truly wows our clients. The final result exceeded all expectations.",
        name: "Mix n Match Productions",
        title: "Media & Video Production"
    },
    {
        text: "Axus Infotech created a stunning photography showcase and client gallery that our clients love using. Fast loading speeds, elegant presentation, and seamless navigation across mobile and desktop. Thank you Axus for bringing our vision to life!",
        name: "Nigazh Photography",
        title: "Photography & Studio Media"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section section" id="testimonials">
            <div className="container">
                <div className="testimonials-top-row">
                    <div className="testimonials-header">
                        <h2 className="testimonials-title">Testimonials</h2>
                    </div>

                    <div className="testimonials-stats-container">
                        <div className="stat-box">
                            <CountUp end={8} duration={2} separator="," enableScrollSpy={true} scrollSpyOnce={true} className="stat-number" />
                            <div className="stat-label">Verified Reviews</div>
                        </div>

                        <div className="stat-box">
                            <CountUp end={4.9} decimals={1} duration={2} separator="," enableScrollSpy={true} scrollSpyOnce={true} className="stat-number" />
                            <div className="stat-label with-icon">
                                <Star size={18} fill="#FFD700" color="#FFD700" className="star-icon" />
                                Average Rating
                            </div>
                        </div>

                        <div className="stat-text-box">
                            <p>A satisfied client is the best indicator of collaboration success and approach to a project.</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials-slider-container">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        speed={800}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 4,
                            }
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-card">
                                    <div className="testimonial-text">
                                        "{t.text}"
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="testimonial-avatar" aria-hidden="true">
                                            <User size={20} strokeWidth={1.8} />
                                        </div>
                                        <div className="testimonial-info">
                                            <div className="testimonial-name">{t.name}</div>
                                            <div className="testimonial-website">{t.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
