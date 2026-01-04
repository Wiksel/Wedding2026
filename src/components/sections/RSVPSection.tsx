import { useState } from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';

export const RSVPSection = () => {
    const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    return (
        <section id="rsvp" className="py-32 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 text-[18rem] font-serif italic select-none">W</div>
                <div className="absolute bottom-10 right-10 text-[18rem] font-serif italic select-none">B</div>
            </div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <p className="font-script text-4xl text-emerald-400">Będziesz z nami?</p>
                    <h2 className="text-5xl md:text-7xl font-serif italic">Potwierdź obecność</h2>
                    <div className="h-px w-20 bg-white/20 mx-auto my-6"></div>
                    <p className="text-slate-500 tracking-[0.4em] text-[10px] uppercase font-bold">Prosimy o informację do 15 sierpnia 2026</p>
                </div>

                <form className="space-y-12" onSubmit={(e) => {
                    e.preventDefault();
                    setRsvpStatus('loading');
                    setTimeout(() => setRsvpStatus('success'), 2000);
                }}>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500/80">Imię i Nazwisko</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white/5 border-b border-white/10 p-5 focus:border-emerald-400 outline-none transition-all placeholder:text-white/5 text-2xl font-light"
                            placeholder="Np. Wiktoria i Bartek"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500/80">Obecność</label>
                            <select className="w-full bg-white/5 border-b border-white/10 p-5 focus:border-emerald-400 outline-none transition-all appearance-none text-white cursor-pointer text-lg">
                                <option className="bg-slate-900">Tak, przybędę</option>
                                <option className="bg-slate-900">Niestety nie mogę</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500/80">Nocleg</label>
                            <select className="w-full bg-white/5 border-b border-white/20 p-5 focus:border-emerald-400 outline-none transition-all appearance-none text-white cursor-pointer text-lg">
                                <option className="bg-slate-900">Nie potrzebuję</option>
                                <option className="bg-slate-900">Tak, w Hotelu Mazovia</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500/80">Dieta / Uwagi</label>
                        <textarea
                            className="w-full bg-white/5 border-b border-white/10 p-5 focus:border-emerald-400 outline-none transition-all h-32 placeholder:text-white/5 font-light text-lg"
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
