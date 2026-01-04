import React from 'react';
import './LocationsSection.css';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface LocationCardProps {
    title: string;
    subtitle: string;
    address: string;
    mapLink: string;
    icon?: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ title, subtitle, address, mapLink }) => (
    <div className="location-card">
        <div className="card-icon">✧</div> {/* Placeholder icon */}
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
        <address className="card-address">{address}</address>
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="card-link">
            <Button variant="outline">Zobacz Mapę</Button>
        </a>
    </div>
);

export const LocationsSection: React.FC = () => {
    const revealRef = useScrollReveal();
    return (
        <section className="locations-section">
            <div className="reveal-hidden" ref={revealRef}>
                <h2 className="section-title">Lokalizacje</h2>
                <div className="locations-grid">
                    <LocationCard
                        title="Ceremonia"
                        subtitle="Kościół Św. Jana"
                        address="ul. Kościelna 1, 00-001 Miasto"
                        mapLink="https://maps.google.com"
                    />
                    <LocationCard
                        title="Wesele"
                        subtitle="Pałac w Ogrodach"
                        address="ul. Weselna 10, 00-002 Miasto"
                        mapLink="https://maps.google.com"
                    />
                    <LocationCard
                        title="Nocleg"
                        subtitle="Hotel Comfort"
                        address="ul. Hotelowa 5, 00-003 Miasto"
                        mapLink="https://maps.google.com"
                    />
                </div>
            </div>
        </section>
    );
};
