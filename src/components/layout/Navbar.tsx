import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '../../App';

export const Navbar = ({ items }: { items: NavItem[] }) => {
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

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'} py-4`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                <div
                    className={`text-3xl font-script tracking-wider cursor-pointer transition-all duration-500 whitespace-nowrap ${scrolled ? 'text-wed-green-darker' : 'text-wed-accent-light drop-shadow-md'}`}
                    onClick={() => scrollToSection('hero')}
                >
                    Wiktoria & Bartek
                </div>

                <div className="hidden xl:flex space-x-8 text-sm uppercase tracking-[0.2em] font-extrabold">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative group py-2 transition-all duration-500 hover:text-wed-green whitespace-nowrap ${scrolled ? 'text-wed-green-darker' : 'text-wed-accent-light drop-shadow-md'}`}
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-wed-green transition-all group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                <button className={`xl:hidden p-2 transition-all duration-500 ${scrolled ? 'text-wed-green-darker' : 'text-wed-accent-light drop-shadow-md'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className={`xl:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden rounded-b-[2rem]
                    ${scrolled
                        ? 'bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-xl'
                        : 'bg-black/30 backdrop-blur-sm border-b border-black/2 shadow-2xl'
                    } py-10 animate-in slide-in-from-top-5`}>
                    <div className="flex flex-col space-y-6 px-10">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-left text-sm uppercase tracking-[0.25em] font-extrabold transition-all duration-300
                                    ${scrolled
                                        ? 'text-wed-green-darker hover:text-wed-green'
                                        : 'text-wed-accent-light hover:text-white drop-shadow-md'}
                                `}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
