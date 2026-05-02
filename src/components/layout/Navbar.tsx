import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 68;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    const navItems = ['RSVP', 'Lokalizacje', 'Informacje', 'Harmonogram', 'Transport'];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'} py-4`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                <div
                    className={`text-3xl font-script tracking-wider cursor-pointer transition-all duration-500 ${scrolled ? 'text-wed-green-darker' : 'text-wed-accent-light drop-shadow-md'}`}
                    onClick={() => scrollToSection('hero')}
                >
                    Wiktoria & Bartek
                </div>

                <div className="hidden md:flex space-x-12 text-sm uppercase tracking-[0.25em] font-extrabold">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className={`relative group py-2 transition-all duration-500 hover:text-wed-green ${scrolled ? 'text-wed-green-darker' : 'text-wed-accent-light drop-shadow-md'}`}
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-wed-green transition-all group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                <button className={`md:hidden p-2 transition-all duration-500 ${scrolled ? 'text-wed-green-darker' : 'text-wed-accent-light drop-shadow-md'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden rounded-b-[2rem]
                    ${scrolled
                        ? 'bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-xl'
                        : 'bg-black/30 backdrop-blur-sm border-b border-black/2 shadow-2xl'
                    } py-10 animate-in slide-in-from-top-5`}>
                    <div className="flex flex-col space-y-6 px-10">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`text-left text-sm uppercase tracking-[0.25em] font-extrabold transition-all duration-300
                                    ${scrolled
                                        ? 'text-wed-green-darker hover:text-wed-green'
                                        : 'text-wed-accent-light hover:text-white drop-shadow-md'}
                                `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
