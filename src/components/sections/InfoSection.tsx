
import { Car, Gift, Music } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const InfoSection = () => {
    const infos = [
        {
            icon: <Car size={36} />,
            title: 'Nocleg',
            content: <>Zapewniamy nocleg w <b>Hotel Mazovia</b>.<br /><a href="https://maps.app.goo.gl/cs4RusR6K2u2ebKH7" target="_blank" className="text-emerald-700 font-bold underline mt-4 inline-block text-[10px] uppercase tracking-widest hover:text-slate-900 transition-colors" rel="noreferrer">Mapa Dojazdu</a></>
        },
        {
            icon: <Gift size={36} />,
            title: 'Prezenty',
            content: '"Zamiast kwiatów, które zwiędną nam w wazonie, prosimy o drobne wina, by pić za wspólne dłonie."'
        },
        {
            icon: <Music size={36} />,
            title: 'Dress Code',
            content: 'Elegant & Mint. Zachęcamy do strojów eleganckich, nawiązujących do klimatu Rezydencji.'
        }
    ];

    return (
        <section id="informacje" className="py-32 bg-stone-50">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle subtitle="Dla Gości">Ważne Informacje</SectionTitle>
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {infos.map((item, i) => (
                        <div key={i} className="glass-card p-12 rounded-[3rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                            <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 mb-8 shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif italic mb-4">{item.title}</h3>
                            <div className="text-sm text-slate-500 leading-relaxed">{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
