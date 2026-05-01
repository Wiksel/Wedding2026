
import { BedDouble, Gift } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const InfoSection = () => {
    const infos = [
        {
            icon: <BedDouble size={36} />,
            title: 'Nocleg',
            content: <>Jeśli potrzebujesz noclegu, daj nam znać. Spróbujemy coś na to poradzić. 😉<br /><a href="https://maps.app.goo.gl/cs4RusR6K2u2ebKH7" target="_blank" className="text-wed-green font-bold underline mt-4 inline-block text-[10px] uppercase tracking-widest hover:text-wed-green-dark transition-colors" rel="noreferrer">Mapa Dojazdu</a></>
        },
        {
            icon: <Gift size={36} />,
            title: 'Prezenty',
            content: <>Kwiaty szybko więdną, dlatego zamiast nich ucieszymy się z kuponów Lotto.<br />Kto wie, może to właśnie z Wami uśmiechnie się do nas szczęście?</>
        },
        /*{
            icon: <Waves size={36} />,
            title: 'Atrakcje',
            content: <>Na terenie rezydencji weselnej znajduje się podgrzewany basen.<br />Gości chętnych wrażeń zachęcamy do zabrania ubrań na zmianę!</>
        },*/
        /* {
            icon: <Sparkles size={36} />,
            title: 'Dla Dzieci',
            content: 'O doskonałą zabawę najmłodszych zadba profesjonalna animatorka. Rodzice mogą bawić się spokojnie!'
        } */
    ];

    return (
        <section id="informacje" className="pt-12 pb-20 md:pt-16 md:pb-32 relative min-h-[calc(100svh-68px)] flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle>Ważne Informacje</SectionTitle>
                <div className="flex flex-wrap justify-center gap-8 text-center mt-12">
                    {infos.filter(Boolean).map((item, i) => (
                        <div key={i} tabIndex={0} className="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 focus-within:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(158,181,163,0.5)] focus-within:shadow-[0_20px_40px_-15px_rgba(158,181,163,0.5)] transition-all duration-500 group flex flex-col items-center w-full md:max-w-[380px] outline-none">
                            <div className="w-20 h-20 bg-wed-green-light/20 rounded-2xl flex items-center justify-center text-wed-green group-hover:bg-wed-green group-hover:text-wed-beige-light group-hover:rotate-6 transition-all duration-500 mb-8 shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif italic mb-4 text-wed-green-dark">{item.title}</h3>
                            <div className="text-sm text-wed-text/80 leading-relaxed">{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
