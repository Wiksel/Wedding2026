import React from 'react';
import './TimelineSection.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface TimelineItem {
    time: string;
    title: string;
    icon?: string;
}

const events: TimelineItem[] = [
    { time: '16:00', title: 'Ceremonia Zaślubin' },
    { time: '17:30', title: 'Przyjazd do Domu Weselnego' },
    { time: '18:00', title: 'Pierwszy Taniec i Kolacja' },
    { time: '22:00', title: 'Tort i Podziękowania' },
];

export const TimelineSection: React.FC = () => {
    const revealRef = useScrollReveal();
    return (
        <section className="timeline-section">
            <div className="reveal-hidden" ref={revealRef}>
                <h2 className="section-title">Przebieg Dnia</h2>
                <div className="timeline-container">
                    {events.map((event, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-time">{event.time}</div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{event.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
