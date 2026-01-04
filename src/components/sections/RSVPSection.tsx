import { useState } from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';

export const RSVPSection = () => {
    const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    return (
        <section id="rsvp" className="py-32 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                <div className="absolute top-10 -left-10 md:left-10 text-[12rem] md:text-[18rem] font-serif italic select-none">W</div>
                <div className="absolute bottom-10 -right-10 md:right-10 text-[12rem] md:text-[18rem] font-serif italic select-none">B</div>
            </div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
                    <p className="font-script text-3xl md:text-4xl text-emerald-400">Będziesz z nami?</p>
                    <h2 className="text-4xl md:text-7xl font-serif italic">Potwierdź obecność</h2>
                    <div className="h-px w-20 bg-white/20 mx-auto my-6"></div>
                    <p className="text-slate-400 tracking-[0.2em] md:tracking-[0.4em] text-xs uppercase font-bold">Prosimy o informację do 15 sierpnia 2026</p>
                </div>

                <form className="space-y-8 md:space-y-12" onSubmit={(e) => {
                    e.preventDefault();
                    setRsvpStatus('loading');
                    setTimeout(() => setRsvpStatus('success'), 2000);
                }}>
                    <div className="space-y-3">
                        <label className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-emerald-500">Imię i Nazwisko</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white/10 border-b border-white/20 p-4 md:p-5 focus:border-emerald-400 outline-none transition-all placeholder:text-white/30 text-xl md:text-2xl font-light rounded-t-lg focus:bg-white/15"
                            placeholder="Np. Wiktoria i Bartek"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <div className="space-y-3">
                            <label className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-emerald-500">Obecność</label>
                            <div className="relative">
                                <select className="w-full bg-white/10 border-b border-white/20 p-4 md:p-5 focus:border-emerald-400 outline-none transition-all appearance-none text-white cursor-pointer text-base md:text-lg rounded-t-lg">
                                    <option className="bg-slate-900">Tak, przybędę</option>
                                    <option className="bg-slate-900">Niestety nie mogę</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">↓</div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-emerald-500">Nocleg</label>
                            <div className="relative">
                                <select className="w-full bg-white/10 border-b border-white/20 p-4 md:p-5 focus:border-emerald-400 outline-none transition-all appearance-none text-white cursor-pointer text-base md:text-lg rounded-t-lg">
                                    <option className="bg-slate-900">Nie potrzebuję</option>
                                    <option className="bg-slate-900">Tak, w Hotelu Mazovia</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">↓</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-emerald-500">Dieta / Uwagi</label>
                        <textarea
                            className="w-full bg-white/10 border-b border-white/20 p-4 md:p-5 focus:border-emerald-400 outline-none transition-all h-32 placeholder:text-white/30 font-light text-base md:text-lg rounded-t-lg focus:bg-white/15"
                            placeholder="Np. dieta wegetariańska, alergie..."
                        ></textarea>
                    </div>

                    <button
                        disabled={rsvpStatus !== 'idle'}
                        className="w-full py-8 bg-emerald-600 text-white rounded-full font-bold uppercase tracking-[0.5em] text-xs hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(5,150,105,0.3)] group mt-12"
                    >
                        {rsvpStatus === 'idle' && <>Wyślij Wiadomość <Heart size={18} className="group-hover:fill-current" /></>}
                        {rsvpStatus === 'loading' && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                        {rsvpStatus === 'success' && <><CheckCircle2 size={24} /> Do zobaczenia!</>}
                    </button>
                </form>
            </div>
        </section>
    );
};
