import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, ChevronDown, Minus, Plus } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const CustomSelect = ({ options, value, onChange, label, className = "" }: { options: string[], value: string, onChange: (val: string) => void, label?: string, className?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            {label && <label className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 block mb-4 text-center">{label}</label>}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 flex items-center justify-center text-slate-300 hover:border-emerald-500/50 transition-all shadow-lg backdrop-blur-md group relative"
            >
                <span className="font-serif text-xl md:text-2xl">{value}</span>
                <ChevronDown size={20} className={`absolute right-6 text-emerald-400/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full left-0 w-full mt-2 bg-[#1a1c1a]/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden z-50 transition-all duration-300 origin-top shadow-2xl ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                {options.map((option) => (
                    <div
                        key={option}
                        onClick={() => { onChange(option); setIsOpen(false); }}
                        className={`p-4 text-center cursor-pointer transition-colors hover:bg-emerald-900/30 text-lg ${value === option ? 'text-emerald-400 font-bold bg-white/5' : 'text-slate-300'}`}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

const GuestCounter = ({ label, value, onChange }: { label: string, value: number, onChange: (val: number) => void }) => (
    <div className="flex-1">
        <label className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 block mb-4 text-center">{label}</label>
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-full py-3 px-6 shadow-lg backdrop-blur-md hover:border-emerald-500/30 transition-all h-[74px]">
            <button
                onClick={() => onChange(Math.max(0, value - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-emerald-500/20 text-slate-300 transition-colors"
                type="button"
            >
                <Minus size={16} />
            </button>
            <span className="font-serif text-xl md:text-2xl min-w-[2ch] text-center text-slate-300">{value}</span>
            <button
                onClick={() => onChange(value + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-emerald-500/20 text-slate-300 transition-colors"
                type="button"
            >
                <Plus size={16} />
            </button>
        </div>
    </div>
);

export const RSVPSection = () => {
    const [presence, setPresence] = useState("Tak, z przyjemnością");
    const [accommodation, setAccommodation] = useState("Nie potrzebuję noclegu");
    const [transport, setTransport] = useState("Dojadę we własnym zakresie");
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    return (
        <section id="rsvp" className="py-32 relative bg-neutral-900">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <SectionTitle subtitle="RSVP" theme="dark">Potwierdzenie Przybycia</SectionTitle>

                <div className="mt-16 space-y-16">
                    {/* Name Input - Hero Style */}
                    <div className="w-full">
                        <label className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 block mb-4 text-center">Imię i Nazwisko</label>
                        <input
                            type="text"
                            placeholder="Wpisz swoje imię i nazwisko"
                            className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-center text-xl md:text-2xl font-serif text-slate-300 placeholder:text-slate-500/50 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all shadow-lg backdrop-blur-md"
                        />
                    </div>

                    {/* Row 1: Obecność & Goście */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <CustomSelect
                            label="Czy będziesz z nami?"
                            options={['Tak, z przyjemnością', 'Niestety, nie mogę']}
                            value={presence}
                            onChange={setPresence}
                        />

                        <div className="flex gap-6">
                            <GuestCounter label="Dorośli" value={adults} onChange={setAdults} />
                            <GuestCounter label="Dzieci" value={children} onChange={setChildren} />
                        </div>
                    </div>

                    {/* Row 2: Logistyka */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <CustomSelect
                            label="Nocleg"
                            options={['Nie potrzebuję noclegu', 'Tak, poproszę o rezerwację']}
                            value={accommodation}
                            onChange={setAccommodation}
                        />

                        <CustomSelect
                            label="Transport"
                            options={['Dojadę we własnym zakresie', 'Chcę skorzystać z autokaru']}
                            value={transport}
                            onChange={setTransport}
                        />
                    </div>

                    {/* Row 3: Preferencje */}
                    <div className="text-center">
                        <label className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 block mb-8">Dieta</label>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Mięsna', 'Wegetariańska', 'Wegańska', 'Bezglutenowa'].map((diet) => (
                                <label key={diet} className="flex items-center space-x-3 cursor-pointer group bg-white/5 hover:bg-emerald-900/20 px-8 py-4 rounded-full transition-all border border-white/10 hover:border-emerald-500/30 shadow-lg backdrop-blur-md">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer sr-only" defaultChecked={diet === 'Mięsna'} />
                                        <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center peer-checked:border-emerald-400 peer-checked:bg-emerald-400 transition-all">
                                            <CheckCircle2 size={14} className="opacity-0 peer-checked:opacity-100 text-black font-bold" />
                                        </div>
                                    </div>
                                    <span className="text-lg font-serif text-slate-300 group-hover:text-emerald-100 transition-colors">{diet}</span>
                                </label>
                            ))}
                        </div>
                        <div className="mt-8 w-full">
                            <input
                                type="text"
                                placeholder="Uwagi do diety (np. alergie)"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-center text-lg font-serif text-slate-300 placeholder:text-slate-500/50 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all shadow-lg backdrop-blur-md"
                            />
                        </div>
                    </div>

                    {/* Row 4: Komentarz */}
                    <div>
                        <label className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400 block mb-6 text-center">Dodatkowe Wiadomości</label>
                        <textarea
                            placeholder="Zostaw wiadomość dla Pary Młodej..."
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 p-8 text-xl font-serif text-slate-300 focus:border-emerald-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-slate-500/50 rounded-[2rem] resize-none text-center shadow-lg backdrop-blur-md"
                        />
                    </div>

                    <div className="text-center pt-8">
                        <button className="bg-emerald-600/90 hover:bg-emerald-500 text-white px-16 py-6 rounded-full text-sm uppercase tracking-[0.3em] font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] border border-emerald-400/20">
                            Potwierdź Obecność
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
