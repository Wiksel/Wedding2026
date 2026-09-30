import { SectionTitle } from '../ui/SectionTitle';

type Dish = { name: string; tag?: string };
type Course = { time?: string; title: string; note?: string; dishes: Dish[] };

const COURSES: Course[] = [
    {
        time: '18:30',
        title: 'Zupa',
        note: 'do wyboru',
        dishes: [
            { name: 'Krem z pieczonej dyni z imbirem, pestkami dyni i mascarpone' },
            { name: 'Tradycyjny rosół z pieczonego drobiu z domowym makaronem' },
        ],
    },
    {
        time: '18:30',
        title: 'Pierwszy posiłek',
        dishes: [
            { name: 'Polędwiczka wieprzowa w boczku z purée ziemniaczanym, pieczoną gruszką i marynowaną śliwką w sosie śliwkowym' },
            { name: 'Krokiet z kalafiora z purée z pieczonej cebuli i borowikami z crunchem', tag: 'Wege' },
            { name: 'Stripsy z kurczaka w płatkach kukurydzianych z frytkami i surówką z marchewki', tag: 'Dzieci' },
        ],
    },
    {
        time: '21:15',
        title: 'Drugi posiłek',
        dishes: [
            { name: 'Rolada z fileta drobiowego z grzybami, purée z topinamburu, sosem pieprzowym i sałatą rzymską' },
            { name: 'Wegańska kofta z dipem ziołowo-cytrusowym i warzywami', tag: 'Wege' },
            { name: 'Naleśniki z serem, bitą śmietaną i owocami', tag: 'Dzieci' },
        ],
    },
    {
        time: '21:45',
        title: 'Tort weselny',
        dishes: [{ name: 'Włoski tort z owocami' }],
    },
    {
        time: '23:00 – 02:00',
        title: 'Gorący bufet',
        dishes: [
            { name: 'Duszone żeberko wieprzowe z pieczonymi ziemniakami z rozmarynem, szalotką confit i brokułem bimi' },
            { name: 'Pierogi z mięsem i ruskie' },
        ],
    },
    {
        time: '02:30',
        title: 'Pora na barszczyk',
        dishes: [{ name: 'Barszcz czerwony z pasztecikiem' }],
    },
];

const BUFFET: Course[] = [
    {
        title: 'Sałatki',
        dishes: [
            { name: 'Hawajska z wędzonym kurczakiem, selerem naciowym i kukurydzą' },
            { name: 'Krewetki na chrupiących sałatach z dressingiem sweet chili' },
            { name: 'Sałaty z marynowaną gruszką, serem kozim i kremem balsamico' },
        ],
    },
    {
        title: 'Zimne przekąski',
        dishes: [
            { name: 'Polędwiczka tajska z kompresowanym ananasem, chili i kolendrą' },
            { name: 'Tatar wołowy z marynatami' },
            { name: 'Tortilla z kurczakiem, warzywami i salsą meksykańską' },
            { name: 'Łosoś w cieście francuskim ze szpinakiem i fetą' },
            { name: 'Włoska tarta z pomidorami i parmezanem' },
            { name: 'Carpaccio z buraka z rukolą i granatem' },
            { name: 'Śledzie w oleju z cebulką' },
            { name: 'Wege tatar z pieczonej cukinii i pomidorów na chrupiącej grzance' },
        ],
    },
];

const DishList = ({ dishes }: { dishes: Dish[] }) => (
    <ul className="space-y-3">
        {dishes.map((dish) => (
            <li key={dish.name} className="text-wed-text/80 leading-relaxed">
                {dish.tag && (
                    <span className="inline-block mr-2 px-2 py-0.5 rounded-full bg-wed-green-light/20 text-wed-green text-[10px] font-bold uppercase tracking-widest align-middle">
                        {dish.tag}
                    </span>
                )}
                {dish.name}
            </li>
        ))}
    </ul>
);

export const MenuSection = () => (
    <section id="menu" className="py-16 md:py-24 relative scroll-mt-[68px]">
        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
            <SectionTitle>Menu</SectionTitle>

            <div className="glass-card rounded-[3rem] p-8 md:p-14">
                <div className="divide-y divide-wed-green-light/20">
                    {COURSES.map((course) => (
                        <div key={course.title} className="grid md:grid-cols-[230px_1fr] md:items-center gap-2 md:gap-8 py-6 first:pt-0 last:pb-0">
                            <div>
                                {course.time && <p className="text-xs font-bold tracking-widest text-wed-green-dark">{course.time}</p>}
                                <h3 className="text-2xl font-serif italic text-wed-green-dark">{course.title}</h3>
                                {course.note && <p className="text-xs uppercase tracking-[0.2em] text-wed-text/50">{course.note}</p>}
                            </div>
                            <DishList dishes={course.dishes} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-card rounded-[3rem] p-8 md:p-14 mt-10">
                <h3 className="text-center text-4xl md:text-5xl font-script text-wed-green-dark">
                    Na stołach przez całe przyjęcie
                </h3>
                <div className="w-16 h-px mx-auto mt-4 mb-10 bg-wed-green/30" />

                <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14">
                    {BUFFET.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-wed-green mb-2">{group.title}</h4>
                            <ul className="divide-y divide-wed-green-light/20">
                                {group.dishes.map((dish) => (
                                    <li key={dish.name} className="py-3 text-wed-text/80 leading-snug">
                                        {dish.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
