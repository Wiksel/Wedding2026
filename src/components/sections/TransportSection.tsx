
import { Bus, MapPin, Clock } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const TransportSection = () => {
    const schedule = [
        {
            type: 'Do Ślubu',
            routes: [
                { time: '14:40', place: 'Hotel Mazovia (Nowy Dwór Mazowiecki)' },
                { time: '15:20', place: 'Parafia św. Jana Chrzciciela (Kroczewo)' }
            ]
        },
        {
            type: 'Powrót',
            routes: [
                { time: '23:00', place: 'Kurs I: Rezydencja -> Hotel Mazovia' },
                { time: '01:00', place: 'Kurs II: Rezydencja -> Hotel Mazovia' },
                { time: '03:00', place: 'Kurs III: Rezydencja -> Hotel Mazovia' },
                { time: '04:10', place: 'Kurs IV: Rezydencja -> Hotel Mazovia' }
            ]
        }
    ];

    return (
        <section id="transport" className="py-32 bg-stone-100">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle subtitle="Wygoda Gości">Transport</SectionTitle>

                <div className="grid md:grid-cols-2 gap-12">
                    {schedule.map((group, idx) => (
                        <div key={idx} className="bg-white rounded-[3rem] p-10 shadow-lg border border-stone-200">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800">
                                    <Bus size={32} />
                                </div>
                                <h3 className="text-3xl font-serif italic text-slate-800">{group.type}</h3>
                            </div>

                            <div className="space-y-8">
                                {group.routes.map((route, rIdx) => (
                                    <div key={rIdx} className="flex items-center gap-6 group">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                            {rIdx !== group.routes.length - 1 && <div className="h-full w-px bg-stone-200 my-1"></div>}
                                        </div>
                                        <div className="flex-1 pb-4 border-b border-stone-100 group-last:border-0 hover:pl-4 transition-all duration-300">
                                            <div className="flex items-center gap-2 text-emerald-700 font-bold mb-1">
                                                <Clock size={14} />
                                                <span>{route.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <MapPin size={14} />
                                                <span className="text-sm md:text-base">{route.place}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-slate-500 text-sm max-w-2xl mx-auto italic">
                    * Godziny odjazdów mogą ulec nieznacznym zmianom. Prosimy o przybycie na miejsce zbiórki 5 minut przed czasem.
                </div>
            </div>
        </section>
    );
};
