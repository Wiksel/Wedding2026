import { Bus } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const BusSchedule = () => {
    const schedule = [
        {
            route: 'Dojazd Gości',
            time: '15:15',
            stops: [
                'Hotel Mazovia',
                'Parafia w Kroczewie'
            ]
        },
        {
            route: 'Przejazd na Salę',
            time: 'Po życzeniach',
            stops: [
                'Parafia w Kroczewie',
                'Rezydencja Miętowe Wzgórza'
            ]
        },
        {
            route: 'Powrót',
            time: '04:10',
            stops: [
                'Rezydencja Miętowe Wzgórza',
                'Hotel Mazovia',
                'Metro Młociny'
            ]
        }
    ];

    return (
        <section id="transport" className="pt-12 pb-20 md:pt-16 md:pb-32 relative overflow-hidden min-h-[calc(100svh-68px)] flex flex-col justify-center">
            <div className="absolute inset-0 bg-wed-green-light/10 -skew-y-3 transform origin-bottom-right scale-110"></div>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionTitle>Transport dla Gości</SectionTitle>

                {/* Schedule hidden for now as per user request */}
                {false && (
                    <>
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            {schedule.map((ride, idx) => (
                                <div key={idx} className="glass-card p-10 rounded-[2.5rem] border-wed-green-light/20 relative group overflow-hidden animate-in slide-in-from-bottom duration-1000 fade-in fill-mode-backwards hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out cursor-default" style={{ animationDelay: `${idx * 200}ms` }}>
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Bus size={120} />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wed-green-light/20 text-wed-green mb-6 group-hover:bg-wed-green group-hover:text-wed-beige-light transition-colors duration-500">
                                            <Bus size={24} />
                                        </div>

                                        <h3 className="text-2xl font-serif italic mb-2 text-wed-green-dark">{ride.route}</h3>
                                        <p className="text-4xl font-bold text-wed-green mb-6">{ride.time}</p>

                                        <div className="space-y-4">
                                            <p className="text-xs uppercase tracking-widest text-wed-text/50 font-bold border-b border-wed-green-light/20 pb-2">Trasa Przejazdu</p>
                                            <ul className="space-y-3">
                                                {ride.stops.map((stop, sIdx) => (
                                                    <li key={sIdx} className="flex items-center text-wed-text/80 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-wed-green mr-3"></div>
                                                        {stop}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-center mt-12 text-wed-text/70 italic max-w-2xl mx-auto">
                            Prosimy o punktualne przybycie na miejsca zbiórki. Autokary będą oznaczone tabliczkami "Wesele Wiktorii i Bartka".
                        </p>
                    </>
                )}

                {/* Very casual and readable placeholder message */}
                <div className="mt-12 text-center max-w-2xl mx-auto animate-in fade-in duration-1000">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-wed-text leading-relaxed font-sans">
                            Podczas tego dnia będzie możliwość skorzystania <br />ze zorganizowanego transportu pomiędzy różnymi lokacjami.<br />Jeśli wiesz, że będziesz potrzebować pomocy <br />w przemieszczaniu się pomiędzy lokacjami, <br /><b>koniecznie daj nam znać</b>.
                        </p>
                        <p className="text-wed-green font-bold text-sm tracking-widest uppercase">
                            Rozkład jazdy wkrótce...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
