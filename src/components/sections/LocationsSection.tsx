import { ExternalLink } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import churchImg from '../../assets/Locations/church.jpg';
import venueImg from '../../assets/Locations/venue.png';
import hotelMazovia from '../../assets/Locations/hotel-mazovia.png';

export const LocationsSection = () => {
    const locations = [
        {
            title: 'Ślub',
            place: 'Parafia św. Jana Chrzciciela',
            addr: 'ul. Kroczewo 52, 09-142 Kroczewo',
            url: 'https://maps.app.goo.gl/MihPNSyeNvz816ed9',
            img: churchImg
        },
        {
            title: 'Wesele',
            place: 'Rezydencja Miętowe Wzgórza',
            addr: 'Trębki Nowe 90, 05-170 Zakroczym',
            url: 'https://maps.app.goo.gl/zPwo1KwiYotGGfZ3A',
            img: venueImg
        },
        {
            title: 'Nocleg',
            place: 'Hotel Mazovia',
            addr: 'ul. Ignacego Paderewskiego 1c, 05-100 Nowy Dwór Mazowiecki',
            url: 'https://www.google.com/maps/place/Hotel+Mazovia/@52.426094,20.7162281,17z/data=!4m9!3m8!1s0x471ebaa9ebdbebb1:0x70a9f12ce8e33640!5m2!4m1!1i2!8m2!3d52.426094!4d20.718803!16s%2Fg%2F1tv22xn8?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D',
            img: hotelMazovia
        }
    ];

    return (
        <section id="lokalizacja" className="pt-8 pb-24 md:pt-12 md:pb-36 relative min-h-[calc(100svh-68px)] flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle>Kluczowe Miejsca</SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {locations.map((loc, idx) => (
                        <div key={idx} className="glass-card rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-700 group flex flex-col border-wed-green-light/20">
                            <div className="h-[320px] overflow-hidden relative">
                                <img src={loc.img} alt={loc.place} className="w-full h-full object-cover object-bottom group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-wed-green-light/80 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-10 flex-1 flex flex-col justify-between space-y-6 bg-white/40">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-serif italic text-wed-green-dark">{loc.title}</h3>
                                    <div className="space-y-1">
                                        <p className="text-lg font-bold text-wed-green tracking-tight">{loc.place}</p>
                                        <div className="text-wed-text/70 text-sm leading-relaxed">
                                            {loc.addr.split(', ').map((line, i) => (
                                                <p key={i}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={loc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-5 bg-wed-green text-wed-beige-light rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-wed-green-dark transition-all shadow-xl"
                                >
                                    Nawiguj do celu <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
