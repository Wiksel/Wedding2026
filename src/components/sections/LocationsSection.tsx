import { ExternalLink } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const LocationsSection = () => {
    const locations = [
        {
            title: 'Ceremonia Ślubna',
            place: 'Parafia św. Jana Chrzciciela',
            addr: 'ul. Kroczewo 52, 09-142 Kroczewo',
            url: 'https://maps.app.goo.gl/MihPNSyeNvz816ed9',
            img: '/images/venue.jpg'
        },
        {
            title: 'Przyjęcie Weselne',
            place: 'Rezydencja Miętowe Wzgórza',
            addr: 'Trębki Nowe 90, 05-170 Zakroczym',
            url: 'https://maps.app.goo.gl/zPwo1KwiYotGGfZ3A',
            img: '/images/church.png'
        }
    ];

    return (
        <section id="lokalizacja" className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle subtitle="Miejsca">Lokalizacja</SectionTitle>
                <div className="grid md:grid-cols-2 gap-16">
                    {locations.map((loc, idx) => (
                        <div key={idx} className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group border border-stone-100 flex flex-col">
                            <div className="h-[400px] overflow-hidden relative">
                                <img src={loc.img} alt={loc.place} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute top-6 left-6 glass-card px-6 py-2 rounded-full font-script text-xl text-slate-800">
                                    {idx === 0 ? 'Powiedzmy TAK' : 'Zatańczmy razem'}
                                </div>
                            </div>
                            <div className="p-12 flex-1 flex flex-col justify-between space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-4xl font-serif italic text-slate-800">{loc.title}</h3>
                                    <div className="space-y-1">
                                        <p className="text-xl font-bold text-emerald-800 tracking-tight">{loc.place}</p>
                                        <p className="text-slate-500">{loc.addr}</p>
                                    </div>
                                </div>
                                <a
                                    href={loc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-6 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-xl"
                                >
                                    Nawiguj do celu <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
