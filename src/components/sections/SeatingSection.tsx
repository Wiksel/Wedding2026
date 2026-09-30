import { useMemo, useState } from 'react';
import { Search, Users } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { SEATING } from '../../data/seating';

const MIN_QUERY = 3;

const normalize = (s: string) =>
    s.toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[̀-ͯ]/g, '');

const tableLabel = (table: number) => (table === 0 ? 'Stół prezydialny' : `Stół ${table}`);

// "Kowalski Jan" -> "Jan Kowalski"
const displayName = (name: string) => {
    if (name.startsWith('Osoba Towarzysząca')) return name;
    const [surname, ...first] = name.split(' ');
    return [...first, surname].join(' ');
};

export const SeatingSection = () => {
    const [query, setQuery] = useState('');

    const results = useMemo(() => {
        const q = normalize(query.trim());
        if (q.length < MIN_QUERY) return [];
        // Każde wpisane słowo musi pasować do początku innego członu imienia/nazwiska —
        // kolejność bez znaczenia ("jan kowalski" = "kowalski jan", "kow j").
        const tokens = q.split(/[\s-]+/).filter(Boolean);
        const isMatch = (name: string) => {
            const words = normalize(name).split(/[\s-]+/);
            const used = new Set<number>();
            return tokens.every(token => {
                const idx = words.findIndex((word, i) => !used.has(i) && word.startsWith(token));
                if (idx === -1) return false;
                used.add(idx);
                return true;
            });
        };
        const matches = new Set(SEATING.filter(([name]) => isMatch(name)).map(([name]) => name));
        const tables = [...new Set(SEATING.filter(([name]) => matches.has(name)).map(([, table]) => table))].sort((a, b) => a - b);
        return tables.map(table => ({
            table,
            everyone: SEATING.filter(([, t]) => t === table).map(([name]) => ({ name, isMatch: matches.has(name) })),
        }));
    }, [query]);

    const hasQuery = query.trim().length >= MIN_QUERY;

    return (
        <section id="stoly" className="py-16 md:py-24 relative scroll-mt-[68px]">
            <div className="max-w-3xl mx-auto px-6 relative z-10 w-full">
                <SectionTitle>Znajdź swoje miejsce</SectionTitle>

                <p className="text-center text-wed-text/70 -mt-4 md:-mt-6 mb-10 md:mb-12">
                    Wpisz swoje nazwisko, a pokażemy Ci, przy którym stole siedzisz.
                </p>

                <div className="relative max-w-xl mx-auto">
                    <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-wed-green/60 pointer-events-none" />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Np. Kowalski"
                        autoComplete="off"
                        className="w-full glass-card rounded-full py-5 pl-16 pr-8 text-center text-xl font-serif text-wed-green-dark placeholder:text-wed-text/40 focus:outline-none focus:border-wed-green/50 shadow-lg"
                    />
                </div>

                <div className={`space-y-6 ${hasQuery ? 'mt-10' : ''}`} aria-live="polite">
                    {hasQuery && results.length === 0 && (
                        <p className="text-center text-wed-text/60 italic">
                            Nie znaleźliśmy takiego nazwiska. Sprawdź pisownię albo zajrzyj na tablicę przy wejściu na salę.
                        </p>
                    )}

                    {results.map(({ table, everyone }) => (
                        <div key={table} className="glass-card rounded-[2.5rem] p-8 md:p-10 text-center animate-in fade-in zoom-in-95 duration-300">
                            <p className="text-5xl md:text-6xl font-script text-wed-green-dark mb-4">{tableLabel(table)}</p>
                            <div className="pt-6 mt-2 border-t border-wed-green-light/20">
                                <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-wed-green font-bold mb-4">
                                    <Users size={14} /> Przy stole
                                </p>
                                <ul className="flex flex-wrap justify-center gap-2">
                                    {everyone.map(({ name, isMatch }) => (
                                        <li
                                            key={name}
                                            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${isMatch
                                                ? 'bg-wed-green text-wed-beige-light font-semibold shadow-md'
                                                : 'bg-wed-green-light/10 text-wed-text/70'}`}
                                        >
                                            {displayName(name)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
