import { useState, useEffect, type ReactNode, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Lock, ArrowRight } from 'lucide-react';
import passwordBg from '../../assets/Backgrounds/Password_BG.webp';

interface PasswordGatewayProps {
    children: ReactNode;
}

const CORRECT_PASSWORD = 'wikbartest123';
const STORAGE_KEY = 'wedding_auth_token';

export function PasswordGateway({ children }: PasswordGatewayProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isRevealing, setIsRevealing] = useState(false);

    useEffect(() => {
        const storedAuth = sessionStorage.getItem(STORAGE_KEY);
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            setIsRevealing(true);
            setTimeout(() => {
                setIsAuthenticated(true);
                sessionStorage.setItem(STORAGE_KEY, 'true');
            }, 2000);
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    if (isAuthenticated && !isRevealing) {
        return <>{children}</>;
    }

    return (
        <>
            {/* Main App Content - Always rendered behind, revealed as auth layer fades */}
            <div className={cn(
                "transition-opacity duration-[2000ms] ease-in-out",
                (isAuthenticated || isRevealing) ? "opacity-100" : "opacity-0 fixed inset-0 overflow-hidden"
            )}>
                {children}
            </div>

            {/* Auth Layer */}
            {!isAuthenticated && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isRevealing ? 0 : 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] overflow-hidden"
                >
                    {/* Background Image */}
                    <motion.div 
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 z-0"
                    >
                        <picture>
                            <img 
                                src={passwordBg} 
                                alt="" 
                                className="w-full h-full object-cover"
                                // @ts-ignore
                                fetchpriority="high"
                            />
                        </picture>
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                    </motion.div>

                    {/* Login Form Container */}
                    <div className="relative z-[200] w-full h-full flex items-center justify-center p-4">
                        <AnimatePresence>
                            {!isRevealing && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98, transition: { duration: 1.2, ease: "easeInOut" } }}
                                    className="relative w-full max-w-sm"
                                >
                                    {/* Frosted Glass Card for Input */}
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl transform -rotate-1" />
                                    <div className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl">

                                        <div className="text-center mb-8">
                                            <h1 className="font-serif text-3xl text-white mb-2 tracking-wider">
                                                Wiktoria & Bartek
                                            </h1>
                                            <p className="text-white/70 text-xs uppercase tracking-[0.2em]">
                                                Wedding 2026
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className={cn(
                                                "relative group transition-all duration-300 rounded-xl overflow-hidden",
                                                error ? "ring-2 ring-red-400" : "focus-within:ring-1 focus-within:ring-white/50"
                                            )}>
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                                <div className="relative flex items-center px-4 py-3">
                                                    <Lock className="w-4 h-4 text-white/60 mr-3" />
                                                    <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 text-sm font-medium tracking-wide"
                                                        placeholder="Enter access code..."
                                                        autoFocus
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="p-2 -mr-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-all active:scale-95"
                                                    >
                                                        <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {error && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="text-red-300 text-xs text-center font-medium bg-red-900/20 py-1 rounded-lg"
                                                >
                                                    Incorrect password
                                                </motion.p>
                                            )}
                                        </form>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </>
    );
}
