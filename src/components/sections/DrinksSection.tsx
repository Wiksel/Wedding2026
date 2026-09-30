import { Clock } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

type Drink = { name: string; ingredients: string; story: string[] };

const COCKTAILS: Drink[] = [
    {
        name: 'Victoria Fruit',
        ingredients: 'Wódka, marakuja, sprite, angostura',
        story: ['Victoria, czyli zwycięstwo,', 'to nasze drugie imię (a połowy z nas pierwsze).', 'Niech owoc zwycięstwa będzie też z Wami.'],
    },
    {
        name: 'Bartek Star Martini',
        ingredients: 'Wódka, Passoa, syrop waniliowy, marakuja, sok z limonki, prosecco',
        story: ['Może nie Star, a na pewno nie Porn,', 'ale w wielu filmach można go znaleźć.'],
    },
    {
        name: 'Atak Modżajto',
        ingredients: 'Rum, limonka, cukier trzcinowy, mięta, sprite lub woda gazowana',
        story: ['Piłkę kopie się nogą czy odbija ręką?', 'Nam się jeszcze nie udało tego ustalić.', 'Może Wam się to uda przy odświeżającym modżajto?'],
    },
    {
        name: 'Zaręczyny on the Beach',
        ingredients: 'Wódka, likier brzoskwiniowy, sok żurawinowy, sok pomarańczowy',
        story: ['Hen daleko – za górami, za lasami i kilkoma morzami', 'na pewnej tajlandzkiej plaży, pewna para zadecydowała,', 'że chce, aby dzisiejszy dzień się wydarzył.'],
    },
    {
        name: 'Ruda Sour',
        ingredients: 'Whisky, sok z cytryny, syrop cukrowy, białko, angostura',
        story: ['Ta w białym? Ruda? Niektórzy twierdzą, że blond!', 'Ale chodzą legendy, że bywa czasem sour.', 'W tym drinku za to ruda jest na pewno.'],
    },
    {
        name: 'Kawalerka Sour',
        ingredients: 'Wódka, sok z cytryny, syrop cukrowy, białko, angostura',
        story: ['30 metrów kwadratowych – miejsca nie za dużo', 'i bywa czasem sour atmosfera. Jeśli to nam nie przeszkodziło tu być,', 'to już nic nie przeszkodzi. Wypijmy za to wódkę.'],
    },
    {
        name: 'Autostop Spritz',
        ingredients: 'Prosecco, aperol, woda gazowana',
        story: ['Od tego zaczęła się nasza przygoda.', 'Autostopem z Warszawy do Portugalii w 5 dni?', 'Czemu nie! A na miejscu Aperol się należy.'],
    },
    {
        name: 'S17',
        ingredients: 'Prosecco, likier z czarnego bzu, limonka, woda gazowana',
        story: ['Ta trasa jest nam tak samo dobrze znana jak Hugo.', '187 km – tyle dzieli domy naszych rodziców.'],
    },
];

const ZERO: Drink[] = [
    {
        name: 'Autostop Spritz 0%',
        ingredients: 'Aperol 0%, Prosecco 0%',
        story: ['Autostop zawsze zaczyna się od 0% pokonanej drogi.'],
    },
    {
        name: 'S17 0%',
        ingredients: 'Prosecco 0%, syrop z bzu, woda gazowana',
        story: ['Tą drogą najlepiej poruszać się na trzeźwo.'],
    },
    {
        name: 'Atak Modżajto 0%',
        ingredients: 'Limonka, mięta, cukier trzcinowy, woda lub sprite',
        story: ['Atak równie groźny, ale taki na spokojnie', '(techniczny tak zwany).'],
    },
];

const DrinkCard = ({ drink }: { drink: Drink }) => (
    <div className="glass-card rounded-[2.5rem] p-8 text-center flex flex-col">
        <h4 className="text-lg md:text-xl font-serif uppercase tracking-[0.2em] text-wed-green-dark">{drink.name}</h4>
        <p className="mt-3 text-sm text-wed-text/80 leading-relaxed">{drink.ingredients}</p>
        <div className="w-10 h-px bg-wed-green-light/50 mx-auto my-5" />
        <p className="text-[15px] font-serif italic text-wed-text/75 leading-relaxed">
            {drink.story.map((line, i) => (
                <span key={i}>{line} </span>
            ))}
        </p>
    </div>
);

export const DrinksSection = () => (
    <section id="drinki" className="py-16 md:py-24 relative scroll-mt-[68px]">
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
            <SectionTitle>Lista Drinków</SectionTitle>

            <p className="-mt-4 md:-mt-6 mb-10 md:mb-12 flex items-center justify-center gap-2 text-wed-text/70">
                <Clock size={16} className="text-wed-green" /> Bar czynny do <b className="text-wed-green-dark">02:00</b>
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {COCKTAILS.map((drink) => <DrinkCard key={drink.name} drink={drink} />)}
            </div>

            <h3 className="text-center text-4xl md:text-5xl font-script text-wed-green-dark mt-16 mb-8">
                Bez procentów
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {ZERO.map((drink) => <DrinkCard key={drink.name} drink={drink} />)}
            </div>
        </div>
    </section>
);
