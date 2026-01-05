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
        <section id="transport" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-900/5 -skew-y-3 transform origin-bottom-right scale-110"></div>
            <div className="max-w-6xl mx-auto px-6 relative">
                <SectionTitle subtitle="Transport">Autokary dla Gości</SectionTitle>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {schedule.map((ride, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-100 relative group overflow-hidden animate-in slide-in-from-bottom duration-1000 fade-in fill-mode-backwards hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-out cursor-default" style={{ animationDelay: `${idx * 200}ms` }}>
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Bus size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                                    <Bus size={24} />
                                </div>

                                <h3 className="text-2xl font-serif italic mb-2 text-slate-800">{ride.route}</h3>
                                <p className="text-4xl font-bold text-emerald-600 mb-6">{ride.time}</p>

                                <div className="space-y-4">
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold border-b border-slate-100 pb-2">Trasa Przejazdu</p>
                                    <ul className="space-y-3">
                                        {ride.stops.map((stop, sIdx) => (
                                            <li key={sIdx} className="flex items-center text-slate-600 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3"></div>
                                                {stop}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-slate-500 italic max-w-2xl mx-auto">
                    Prosimy o punktualne przybycie na miejsca zbiórki. Autokary będą oznaczone tabliczkami "Wesele Wiktorii i Bartka".
                </p>
            </div>
        </section>
    );
};
