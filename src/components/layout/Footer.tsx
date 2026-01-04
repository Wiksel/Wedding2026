

export const Footer = () => {
    return (
        <footer className="py-24 text-center space-y-12 bg-[#fcfaf7]">
            <div className="text-6xl font-script text-slate-800 tracking-wider">Wiktoria & Bartek</div>
            <div className="flex justify-center space-x-8">
                <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center text-emerald-600 animate-pulse bg-white shadow-sm">♥</div>
            </div>
            <div className="space-y-2 opacity-60">
                <p className="text-[11px] uppercase tracking-[0.6em] text-slate-600">02.10.2026</p>
                <p className="text-[11px] uppercase tracking-[0.6em] text-slate-600 font-bold">Kroczewo</p>
            </div>
        </footer>
    );
};
