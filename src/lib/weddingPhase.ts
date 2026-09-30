import { useEffect, useState } from 'react';

// Czas polski (CEST, UTC+2) zapisany jawnie — niezależnie od strefy czasowej urządzenia gościa.
export const CEREMONY_START = '2026-10-02T16:00:00+02:00';
export const THANKS_FROM = '2026-10-03T06:00:00+02:00';

export type WeddingPhase = 'before' | 'during' | 'after';

const PHASES: WeddingPhase[] = ['before', 'during', 'after'];

export function getWeddingPhase(now = Date.now()): WeddingPhase {
    // Podgląd do testów: ?phase=during / ?phase=after
    const override = new URLSearchParams(window.location.search).get('phase') as WeddingPhase | null;
    if (override && PHASES.includes(override)) return override;

    if (now < new Date(CEREMONY_START).getTime()) return 'before';
    if (now < new Date(THANKS_FROM).getTime()) return 'during';
    return 'after';
}

export function useWeddingPhase() {
    const [phase, setPhase] = useState(getWeddingPhase);

    useEffect(() => {
        const timer = setInterval(() => setPhase(getWeddingPhase()), 1000);
        return () => clearInterval(timer);
    }, []);

    return phase;
}
