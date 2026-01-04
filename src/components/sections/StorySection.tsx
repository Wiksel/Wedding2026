import React from 'react';
import './StorySection.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const StorySection: React.FC = () => {
    const revealRef = useScrollReveal();

    return (
        <section className="story-section">
            <div className="story-container reveal-hidden" ref={revealRef}>
                <h2 className="story-title">Nasza Historia</h2>
                <div className="story-text">
                    <p>
                        Z radością zapraszamy Was na wspólne świętowanie początku naszej nowej drogi.
                        W otoczeniu natury, blasku świateł i najbliższych nam osób chcemy podzielić się z Wam naszą miłością.
                    </p>
                    <p className="story-signature">Wiktoria & Bartek</p>
                </div>
            </div>
        </section>
    );
};
