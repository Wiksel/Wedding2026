
import { SectionTitle } from '../ui/SectionTitle';

export const TimelineSection = () => {
    const events = [
        { time: '16:00', event: 'Ceremonia Zaślubin', desc: 'Parafia św. Jana Chrzciciela w Kroczewie.' },
        { time: '17:30', event: 'Przyjazd na Salę', desc: 'Rezydencja Miętowe Wzgórza.' },
        { time: '18:30', event: 'Uroczysty Obiad', desc: 'Rozpoczęcie przyjęcia weselnego.' },
        { time: '20:00', event: 'Pierwszy Taniec', desc: 'Oficjalne otwarcie parkietu.' }
    ];

    return (
        <section id="harmonogram" className="py-32 max-w-5xl mx-auto px-6">
            <SectionTitle subtitle="Wyjątkowe Chwile">Plan Wydarzeń</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative border-l-2 border-emerald-100 ml-2 md:ml-8 space-y-16 md:space-y-20 pb-8 pl-8 md:pl-12">
                    {events.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -left-[3.2rem] md:-left-[3.4rem] top-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-600 border-4 border-white shadow-lg group-hover:scale-150 transition-all duration-500"></div>
                            <div className="text-emerald-800 font-bold mb-1 text-xs md:text-sm tracking-widest">{item.time}</div>
                            <h3 className="text-xl md:text-2xl font-serif mb-2 group-hover:text-emerald-700 transition-colors italic">{item.event}</h3>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="hidden md:block rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 border-8 border-white">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" alt="Detale ślubne" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
};
