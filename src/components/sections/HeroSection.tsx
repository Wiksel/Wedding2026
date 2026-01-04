import React from 'react';
import './HeroSection.css';
import floralFrame from '../../assets/floral-frame.jpg';

export const HeroSection: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="hero-top">
                <span className="logo-text">W & B</span>
            </div>

            <div className="hero-content">
                <div className="floral-decoration top">
                    {/* Can use img or background div */}
                </div>

                <h1 className="main-title">Wiktoria & Bartek</h1>
                <p className="subtitle">02 Października 202X | Godzina 16:00</p>

                <div className="floral-decoration bottom">
                    {/* Bottom decoration if needed */}
                </div>
            </div>

            <div className="hero-bottom scroll-indicator">
                <div className="fairy-dot"></div>
                <span className="sr-only">Scroll Down</span>
            </div>

            {/* Background Floral Overlay */}
            <div className="floral-overlay" style={{ backgroundImage: `url(${floralFrame})` }}></div>
        </section>
    );
};
