
import { BedDouble, Gift, Waves, Sparkles, BookHeart, Mail } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const linkClass = "text-wed-green font-bold underline mt-4 inline-block text-[10px] uppercase tracking-widest hover:text-wed-green-dark transition-colors";

export const InfoSection = () => {
    const infos = [
        {
            icon: <BedDouble size={36} />,
            title: 'Nocleg',
            content: <>
                Śpicie w <b>Hotelu Mazovia</b>? Przy recepcji podajcie swoje nazwisko do zameldowania.
                <span className="block mt-4 space-y-1">
                    <span className="block">Zameldowanie: <b>od 14:00</b></span>
                    <span className="block">Śniadanie: <b>7:00 – 10:30</b></span>
                    <span className="block">Wymeldowanie: <b>do 11:00</b></span>
                </span>
                <a href="https://maps.app.goo.gl/cs4RusR6K2u2ebKH7" target="_blank" className={linkClass} rel="noreferrer">Mapa dojazdu</a>
            </>
        },
        {
            icon: <Gift size={36} />,
            title: 'Prezenty',
            content: <>Kwiaty szybko więdną, dlatego zamiast nich ucieszymy się z kuponów Lotto.<br />Kto wie, może to właśnie z Wami uśmiechnie się do nas szczęście?</>
        },
        {
            icon: <BookHeart size={36} />,
            title: 'Księga Gości',
            content: <>Czeka na Was ścianka do zdjęć i aparat instax. Zróbcie sobie zdjęcie, wklejcie je do naszej księgi gości i dopiszcie kilka słów od siebie. To będzie dla nas najpiękniejsza pamiątka.</>
        },
        {
            icon: <Mail size={36} />,
            title: 'Pocztówki',
            content: <>Na stołach znajdziecie pocztówki. Zabierzcie ze sobą jedną albo kilka, a kiedy traficie w ciekawe miejsce, bliżej lub dalej, napiszcie do nas kilka słów i wyślijcie je pocztą. Z radością będziemy wypatrywać każdej z nich!</>
        },
        {
            icon: <Waves size={36} />,
            title: 'Atrakcje',
            content: <>Na terenie sali weselnej znajduje się podgrzewany basen.<br />Gości chętnych wrażeń zachęcamy do zabrania ubrań na zmianę!</>
        },
        {
            icon: <Sparkles size={36} />,
            title: 'Dla Dzieci',
            content: <>O zabawę najmłodszych zadba dwójka profesjonalnych animatorów, w godzinach <b>19:30 – 23:30</b>. Rodzice mogą bawić się spokojnie!</>
        },
    ];

    return (
        <section id="informacje" className="py-16 md:py-24 relative scroll-mt-[68px]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle>Ważne Informacje</SectionTitle>
                <div className="flex flex-wrap justify-center gap-8 text-center">
                    {infos.map((item) => (
                        <div key={item.title} tabIndex={0} className="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 focus-within:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(158,181,163,0.5)] focus-within:shadow-[0_20px_40px_-15px_rgba(158,181,163,0.5)] transition-all duration-500 group flex flex-col items-center w-full md:max-w-[380px] outline-none">
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
