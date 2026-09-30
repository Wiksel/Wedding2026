import type { ReactNode } from 'react';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { LocationsSection } from './components/sections/LocationsSection';
import { InfoSection } from './components/sections/InfoSection';
import { BusSchedule } from './components/sections/BusSchedule';
import { SeatingSection } from './components/sections/SeatingSection';
import { MenuSection } from './components/sections/MenuSection';
import { DrinksSection } from './components/sections/DrinksSection';
import { PhotosSection } from './components/sections/PhotosSection';
import { PasswordGateway } from './components/auth/PasswordGateway';
import { useWeddingPhase, type WeddingPhase } from './lib/weddingPhase';
// RSVP zamknięte — komponent zostaje w kodzie (./components/sections/RSVPSection), ale nie jest renderowany.

type SectionId = 'harmonogram' | 'transport' | 'lokalizacje' | 'informacje' | 'stoly' | 'menu' | 'drinki' | 'zdjecia';

export type NavItem = { id: string; label: string };

const LABELS: Record<SectionId, string> = {
    harmonogram: 'Plan dnia',
    transport: 'Transport',
    lokalizacje: 'Miejsca',
    informacje: 'Informacje',
    stoly: 'Stoły',
    menu: 'Menu',
    drinki: 'Drinki',
    zdjecia: 'Zdjęcia',
};

const MAIN_ORDER: SectionId[] = ['lokalizacje', 'harmonogram', 'informacje', 'stoly', 'zdjecia', 'transport', 'menu', 'drinki'];

const ORDER: Record<WeddingPhase, SectionId[]> = {
    before: MAIN_ORDER,
    during: MAIN_ORDER,
    // Po weselu: podziękowanie w hero i album na pierwszym planie.
    after: ['zdjecia', 'informacje', 'harmonogram', 'menu', 'drinki', 'lokalizacje'],
};

function renderSection(id: SectionId, phase: WeddingPhase): ReactNode {
    switch (id) {
        case 'harmonogram': return <TimelineSection key={id} />;
        case 'transport': return <BusSchedule key={id} />;
        case 'lokalizacje': return <LocationsSection key={id} />;
        case 'informacje': return <InfoSection key={id} />;
        case 'stoly': return <SeatingSection key={id} />;
        case 'menu': return <MenuSection key={id} />;
        case 'drinki': return <DrinksSection key={id} />;
        case 'zdjecia': return <PhotosSection key={id} phase={phase} />;
    }
}

function App() {
    const phase = useWeddingPhase();
    const order = ORDER[phase];
    const navItems: NavItem[] = order.map(id => ({ id, label: LABELS[id] }));

    return (
        <PasswordGateway>
            <Layout navItems={navItems}>
                <HeroSection phase={phase} nextSectionId={order[0]} />
                {order.map(id => renderSection(id, phase))}
            </Layout>
        </PasswordGateway>
    );
}

export default App;
