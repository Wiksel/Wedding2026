import { SectionTitle } from '../ui/SectionTitle';

export const TimelineSection = () => {
    const events = [
        {
            time: '16:00',
            event: 'Ślub',
            desc: 'Parafia św. Jana Chrzciciela w Kroczewie.',
            link: 'https://www.google.com/maps/place/Rzymskokatolicka+Parafia+%C5%9Bw.+Jana+Chrzciciela+w+Kroczewie/@52.4780955,20.5540151,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x471ea6486cd837c5:0x84182768b475442c!2sRzymskokatolicka+Parafia+%C5%9Bw.+Jana+Chrzciciela+w+Kroczewie,+Ko%C5%9Bcielna+2,+09-142+Kroczewo!2m2!1d20.5565389!2d52.478107!3m5!1s0x471ea6486cd837c5:0x84182768b475442c!8m2!3d52.4780923!4d20.55659!16s%2Fg%2F120j3pxg?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D',
            isHidden: false
        },
        { time: '18:00', event: 'Przyjazd na Salę', desc: 'Rezydencja Miętowe Wzgórza.', isHidden: true },
        { time: '18:30', event: 'Uroczysty Obiad', desc: 'Rozpoczęcie przyjęcia weselnego.', isHidden: true },
        { time: '20:00', event: 'Pierwszy Taniec', desc: 'Oficjalne otwarcie parkietu.', isHidden: true },
        { time: '22:00', event: 'Tort Weselny', desc: 'Słodka niespodzianka w ogrodzie.', isHidden: true },
        { time: '00:00', event: 'Oczepiny', desc: 'Tradycyjne zabawy weselne.', isHidden: true },
        { time: '04:00', event: 'Zakończenie', desc: 'Dziękujemy za wspólną zabawę!', isHidden: true }
    ];

    return (
        <section id="harmonogram" className="pt-12 pb-20 md:pt-16 md:pb-32 relative min-h-[calc(100svh-68px)] flex flex-col justify-center max-w-4xl mx-auto px-6">
            <SectionTitle>Plan Wydarzeń</SectionTitle>

            <div className="flex justify-center mt-12 relative z-10">
                <div className="relative border-l-2 border-wed-green-light/30 space-y-12 pb-8 pl-8 md:pl-12">
                    {events.filter(item => !item.isHidden).map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -left-[2.55rem] md:-left-[3.55rem] top-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-wed-green border-4 border-wed-beige shadow-lg group-hover:scale-150 transition-all duration-500"></div>
                            <div className="text-wed-green-dark font-bold mb-1 text-xs md:text-sm tracking-widest">{item.time}</div>
                            <h3 className="text-xl md:text-2xl font-serif mb-2 group-hover:text-wed-green transition-colors italic">{item.event}</h3>
                            <p className="text-wed-text/70 text-xs md:text-sm leading-relaxed max-w-xs mb-4">{item.desc}</p>

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-xs font-semibold text-wed-green hover:text-wed-green-dark transition-colors uppercase tracking-wider group/link"
                                >
                                    <span className="border-b border-wed-green-light/50 group-hover/link:border-wed-green pb-0.5">Nawiguj do kościoła</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1.5 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}

                    {/* Informacja o przyszłych wydarzeniach */}
                    <div className="relative group pt-4">
                        <div className="absolute -left-[2.55rem] md:-left-[3.55rem] top-4 w-4 h-4 md:w-5 md:h-5 rounded-full bg-wed-beige-dark border-4 border-wed-beige shadow-sm"></div>
                        <p className="text-wed-text/50 text-sm italic">
                            Więcej informacji pojawi się wkrótce...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

