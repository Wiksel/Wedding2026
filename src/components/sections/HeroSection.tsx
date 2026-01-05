
import { ChevronDown } from 'lucide-react';
import { Countdown } from '../ui/Countdown';

export const HeroSection = () => {
    const scrollToHarmonogram = () => {
        const element = document.getElementById('harmonogram');
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg-luxury.png"
                    className="w-full h-full object-cover animate-pulse-slow brightness-[0.85]"
                    alt="Tło ślubne elegancja"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
            </div>

            <div className="relative text-center text-white px-4 pt-24 w-full max-w-7xl space-y-8">
                <p className="font-script text-2xl md:text-5xl text-emerald-100 animate-in fade-in duration-1000 mb-2 md:mb-4 drop-shadow-lg">Na zawsze zaczyna się dzisiaj</p>

                {/* Updated Typography and Layout */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-script leading-none animate-in slide-in-from-bottom duration-1000 tracking-wide drop-shadow-2xl whitespace-nowrap">
                    Wiktoria & Bartek
                </h1>

                <div className="flex items-center justify-center space-x-6 animate-in fade-in duration-1000 delay-300">
                    <div className="h-px w-12 md:w-24 bg-white/60"></div>
                    <p className="text-lg md:text-3xl font-light tracking-[0.4em] uppercase drop-shadow-md whitespace-nowrap">02.10.2026 • Kroczewo</p>
                    <div className="h-px w-12 md:w-24 bg-white/60"></div>
                </div>

                <div className="mt-8 md:mt-12">
                    <Countdown targetDate="2026-10-02T16:00:00" />
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity" onClick={scrollToHarmonogram}>
                <ChevronDown size={44} className="text-white" />
            </div>
        </section>
    );
};
