import { Bus, Clock } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

type Route = { label?: string; stops: string[] };
type Ride = { title: string; time: string; routes: Route[]; note?: string };

const APPROX_NOTE = 'Dokładne godziny odjazdu podamy na weselu.';

const SCHEDULE: Ride[] = [
    {
        title: 'Dojazd na ceremonię',
        time: '15:10',
        routes: [{ stops: ['Hotel Mazovia', 'Kościół w Kroczewie'] }],
    },
    {
        title: 'Przejazd na przyjęcie',
        time: 'Po życzeniach',
        routes: [{ stops: ['Kościół w Kroczewie', 'Rezydencja Miętowe Wzgórza'] }],
    },
    {
        title: 'Pierwsze kursy powrotne',
        time: '01:30 – 02:30',
        routes: [
            { label: 'Najpierw', stops: ['Rezydencja Miętowe Wzgórza', 'Omięciny'] },
            { label: 'Następnie', stops: ['Rezydencja Miętowe Wzgórza', 'Hotel Mazovia'] },
        ],
        note: APPROX_NOTE,
    },
    {
        title: 'Ostatnie kursy powrotne',
        time: '04:00 – 05:00',
        routes: [
            { label: 'Bus 1', stops: ['Rezydencja Miętowe Wzgórza', 'Hotel Mazovia'] },
            { label: 'Bus 2', stops: ['Rezydencja Miętowe Wzgórza', 'Józefów', 'Metro Młociny'] },
        ],
        note: APPROX_NOTE,
    },
];

const RouteStops = ({ stops }: { stops: string[] }) => (
    <ol className="relative">
        {stops.map((stop, i) => {
            const isLast = i === stops.length - 1;
            return (
                <li key={stop} className="relative flex items-start gap-3 pb-3 last:pb-0">
                    {!isLast && <span className="absolute left-[5px] top-3 bottom-0 w-px bg-wed-green-light/50" />}
                    <span className={`relative mt-1.5 w-[11px] h-[11px] rounded-full shrink-0 border-2 border-wed-green ${isLast ? 'bg-wed-green' : 'bg-[#fcfaf7]'}`} />
                    <span className={`text-sm leading-snug ${isLast ? 'font-semibold text-wed-green-dark' : 'text-wed-text/80'}`}>{stop}</span>
                </li>
            );
        })}
    </ol>
);

export const BusSchedule = () => (
    <section id="transport" className="py-16 md:py-24 relative overflow-hidden scroll-mt-[68px]">
        <div className="absolute inset-0 bg-wed-green-light/10 -skew-y-3 transform origin-bottom-right scale-110"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
            <SectionTitle>Transport dla Gości</SectionTitle>

            <p className="text-center text-wed-text/70 -mt-4 md:-mt-6 mb-10 md:mb-12">
                Prosimy o punktualne przybycie na miejsce zbiórki.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {SCHEDULE.map((ride) => (
                    <div key={ride.title} className="glass-card rounded-[2.5rem] p-8 md:p-10 flex flex-col">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.25em] font-bold text-wed-text/50">{ride.title}</p>
                                <p className="text-3xl md:text-4xl font-serif text-wed-green-dark mt-2 whitespace-nowrap">{ride.time}</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-wed-green-light/20 text-wed-green flex items-center justify-center shrink-0">
                                <Bus size={22} />
                            </div>
                        </div>

                        <div className={`mt-6 pt-6 border-t border-wed-green-light/20 grid gap-6 ${ride.routes.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                            {ride.routes.map((route) => (
                                <div key={route.label ?? route.stops.join()}>
                                    {route.label && (
                                        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-wed-green mb-3">{route.label}</p>
                                    )}
                                    <RouteStops stops={route.stops} />
                                </div>
                            ))}
                        </div>

                        {ride.note && (
                            <p className="mt-auto pt-6 flex items-center gap-2 text-xs text-wed-text/60 italic">
                                <Clock size={14} className="shrink-0 text-wed-green/70" /> {ride.note}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);
