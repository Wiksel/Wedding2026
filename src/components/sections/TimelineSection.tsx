
import { SectionTitle } from '../ui/SectionTitle';

export const TimelineSection = () => {
    const events = [
        { time: '16:00', event: 'Ceremonia Zaślubin', desc: 'Parafia św. Jana Chrzciciela w Kroczewie.' },
        { time: '18:00', event: 'Przyjazd na Salę', desc: 'Rezydencja Miętowe Wzgórza.' },
        { time: '18:30', event: 'Uroczysty Obiad', desc: 'Rozpoczęcie przyjęcia weselnego.' },
        { time: '20:00', event: 'Pierwszy Taniec', desc: 'Oficjalne otwarcie parkietu.' },
        { time: '22:00', event: 'Tort Weselny', desc: 'Słodka niespodzianka w ogrodzie.' },
        { time: '00:00', event: 'Oczepiny', desc: 'Tradycyjne zabawy weselne.' },
        { time: '04:00', event: 'Zakończenie', desc: 'Dziękujemy za wspólną zabawę!' }
    ];

    return (
        <section id="harmonogram" className="py-32 max-w-5xl mx-auto px-6">
            <SectionTitle subtitle="Wyjątkowe Chwile">Plan Wydarzeń</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
                <div className="relative border-l-2 border-emerald-100 ml-2 md:ml-8 space-y-16 md:space-y-20 pb-8 pl-8 md:pl-12 z-20">
                    {events.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -left-[3.2rem] md:-left-[3.4rem] top-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-600 border-4 border-white shadow-lg group-hover:scale-150 transition-all duration-500"></div>
                            <div className="text-emerald-800 font-bold mb-1 text-xs md:text-sm tracking-widest">{item.time}</div>
                            <h3 className="text-xl md:text-2xl font-serif mb-2 group-hover:text-emerald-700 transition-colors italic">{item.event}</h3>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="hidden md:block relative h-[1100px] w-full">
                    {/* Vertical Scatter Layout - Messy Pile Effect with Rounded Corners */}

                    {/* EXTRA 4. Magia (Top Right Corner) */}
                    <div className="absolute -top-6 right-2 w-52 aspect-[3/4] rounded-2xl shadow-xl border-[8px] border-white rotate-[18deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-0">
                        <img src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&q=80&w=600" alt="Magia" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* 1. Detale (Top Left) */}
                    <div className="absolute top-0 left-4 w-60 aspect-[3/4] rounded-2xl shadow-xl border-[8px] border-white -rotate-[6deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-10">
                        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600" alt="Detale" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* EXTRA 1. Emocje (Top Center-Right) */}
                    <div className="absolute top-12 right-[35%] w-52 aspect-[3/4] rounded-2xl shadow-xl border-[8px] border-white rotate-[4deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-[15]">
                        <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600" alt="Emocje" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* 2. Czułość (Upper Right) */}
                    <div className="absolute top-[140px] right-0 w-64 aspect-[3/4] rounded-2xl shadow-2xl border-[8px] border-white rotate-[12deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-20">
                        <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600" alt="Czułość" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* EXTRA 2. Spojrzenia (Upper Middle-Left) */}
                    <div className="absolute top-[260px] left-[25%] w-56 aspect-[3/4] rounded-2xl shadow-xl border-[8px] border-white -rotate-[8deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-[25]">
                        <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600" alt="Spojrzenia" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* 3. Toast (Middle Center-Left) */}
                    <div className="absolute top-[380px] left-[5%] w-56 aspect-[3/4] rounded-2xl shadow-xl border-[8px] border-white -rotate-[15deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-10">
                        <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=600" alt="Toast" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* EXTRA 3. Radość (Middle Upper-Right) */}
                    <div className="absolute top-[440px] right-[25%] w-52 aspect-[3/4] rounded-2xl shadow-xl border-[8px] border-white rotate-[5deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-[35]">
                        <img src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&q=80&w=600" alt="Radość" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* 4. Kwiaty (Middle Right) */}
                    <div className="absolute top-[520px] right-[5%] w-64 aspect-[3/4] rounded-2xl shadow-2xl border-[8px] border-white rotate-[8deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-30">
                        <img src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&q=80&w=600" alt="Kwiaty" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* 5. Styl (Lower Left) */}
                    <div className="absolute top-[720px] left-0 w-60 aspect-[3/4] rounded-2xl shadow-xl border-[8px] border-white -rotate-[3deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-20">
                        <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=600" alt="Styl" className="w-full h-full object-cover rounded-xl" />
                    </div>

                    {/* 6. Zabawa (Bottom Center) */}
                    <div className="absolute bottom-0 right-[20%] w-64 aspect-[3/4] rounded-2xl shadow-2xl border-[8px] border-white rotate-[18deg] hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-500 z-10">
                        <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=600" alt="Zabawa" className="w-full h-full object-cover rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

