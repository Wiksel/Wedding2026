import { Church, UtensilsCrossed, Cake, Soup, Moon, Wine } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const TimelineSection = () => {
    const events = [
        { time: '16:00', icon: Church, event: 'Ceremonia ślubna' },
        { time: '18:30', icon: UtensilsCrossed, event: 'Pierwszy posiłek' },
        { time: '21:15', icon: Wine, event: 'Drugi posiłek' },
        { time: '21:45', icon: Cake, event: 'Tort weselny' },
        { time: '23:00 – 02:00', icon: UtensilsCrossed, event: 'Gorący bufet' },
        { time: '02:30', icon: Soup, event: 'Barszczyk' },
        { time: '04:00 – 05:00', icon: Moon, event: 'Zakończenie przyjęcia' },
    ];

    return (
        <section id="harmonogram" className="py-16 md:py-24 relative scroll-mt-[68px] max-w-4xl mx-auto px-6">
            <SectionTitle>Plan Dnia</SectionTitle>

            <p className="text-center text-sm text-wed-text/60 italic -mt-4 md:-mt-6 mb-10 md:mb-12">
                Godziny są orientacyjne i mogą ulec nieznacznym zmianom.
            </p>

            <div className="flex justify-center relative z-10">
                <ol className="relative border-l-2 border-wed-green-light/30 space-y-10 pl-8 md:pl-12">
                    {events.map(({ time, icon: Icon, event }) => (
                        <li key={event} className="relative group">
                            <div className="absolute -left-[3.05rem] md:-left-[4.1rem] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-wed-green text-wed-beige-light border-4 border-[#fcfaf7] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <Icon size={14} className="md:w-[18px] md:h-[18px]" />
                            </div>
                            <div className="text-wed-green-dark font-bold mb-1 text-xs md:text-sm tracking-widest">{time}</div>
                            <h3 className="text-xl md:text-2xl font-serif group-hover:text-wed-green transition-colors italic">{event}</h3>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};
