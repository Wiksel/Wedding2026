import { useState, useEffect, useMemo, type ReactNode, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
// Import isolated flower assets
import flowerOrange from '../../assets/flower-orange.png';
import flowerPink from '../../assets/flower-pink.png';
import flowerRed from '../../assets/flower-red.png';
import flowerLeaf from '../../assets/flower-leaf.png';
import { Lock, ArrowRight } from 'lucide-react';

interface PasswordGatewayProps {
    children: ReactNode;
}

const CORRECT_PASSWORD = 'wikbartest123';
const STORAGE_KEY = 'wedding_auth_token';

// Flower configuration
const FLOWER_ASSETS = [flowerOrange, flowerPink, flowerRed, flowerLeaf];

interface FlowerData {
    id: number;
    src: string;
    top: number;
    left: number;
    scale: number;
    rotation: number;
    delay: number;
    zIndex: number;
}

export function PasswordGateway({ children }: PasswordGatewayProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isRevealing, setIsRevealing] = useState(false); // Controls the explosion animation

    useEffect(() => {
        const storedAuth = sessionStorage.getItem(STORAGE_KEY);
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    // Generate random flower positions
    const flowers = useMemo<FlowerData[]>(() => {
        // Create a grid to ensure better coverage without too much overlap
        // 10x15 grid = 150 flowers
        const cols = 10;
        const rows = 15;
        const cellWidth = 100 / cols;
        const cellHeight = 100 / rows;

        const items: FlowerData[] = [];
        let idCount = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Randomize position within the cell
                const top = (r * cellHeight) + (Math.random() * cellHeight * 1.2) - 5; // -5 to +5 overlap
                const left = (c * cellWidth) + (Math.random() * cellWidth * 1.2) - 5;

                items.push({
                    id: idCount++,
                    src: FLOWER_ASSETS[Math.floor(Math.random() * FLOWER_ASSETS.length)],
                    top,
                    left,
                    scale: 0.2 + Math.random() * 0.3, // 0.2 to 0.5 scale
                    rotation: Math.random() * 360,
                    delay: 0, // No delay needed for static
                    zIndex: Math.floor(Math.random() * 50), // Higher z-index range for layering
                });
            }
        }
        // Shuffle the array so z-indexes don't look like a grid
        return items.sort(() => Math.random() - 0.5);
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            setIsRevealing(true); // Trigger explosion

            // Allow animation to play before unmounting
            setTimeout(() => {
                setIsAuthenticated(true);
                sessionStorage.setItem(STORAGE_KEY, 'true');
            }, 1500);
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
            {/* Main App Content - Always rendered behind, revealed as flowers fly away */}
            <div className={cn("transition-opacity duration-1000", isAuthenticated ? "opacity-100" : "opacity-0 fixed inset-0 overflow-hidden")}>
                {children}
            </div>

            {/* Auth Layer */}
            {!isAuthenticated && (
                <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">
                    {/* Note: pointer-events-none on container so we can click through if needed? 
                        No, we need to click the form. 
                        Actually, let's keep pointer-events-auto but make the flowers ignored.
                    */}
                    <div className="absolute inset-0 z-0 bg-transparent pointer-events-auto">

                        {/* Scattered Flowers */}
                        <AnimatePresence>
                            {(!isAuthenticated || isRevealing) && (
                                <>
                                    {
                                        flowers.map((flower) => {
                                            // Calculate explosion vector (away from center)
                                            const xDir = flower.left - 50;
                                            const yDir = flower.top - 50;
                                            // Normalize and scale magnitude
                                            const mag = Math.sqrt(xDir * xDir + yDir * yDir) || 1;
                                            const exitX = (xDir / mag) * 1500; // Fly far off screen
                                            const exitY = (yDir / mag) * 1500;

                                            return (
                                                <motion.img
                                                    key={flower.id}
                                                    src={flower.src}
                                                    alt=""
                                                    initial={{
                                                        top: `${flower.top}%`,
                                                        left: `${flower.left}%`,
                                                        x: "-50%",
                                                        y: "-50%",
                                                        scale: flower.scale,
                                                        rotate: flower.rotation,
                                                    }}
                                                    animate={isRevealing ? {
                                                        x: exitX,
                                                        y: exitY,
                                                        scale: flower.scale * 1.2,
                                                        opacity: 0,
                                                    } : {
                                                        // Static idle state
                                                        x: "-50%",
                                                        y: "-50%",
                                                        rotate: flower.rotation,
                                                        opacity: 1
                                                    }}
                                                    transition={isRevealing ? {
                                                        duration: 1.5,
                                                        ease: [0.22, 1, 0.36, 1], // Custom easy ease
                                                    } : {
                                                        duration: 0 // No animation for idle
                                                    }}
                                                    className="absolute pointer-events-none drop-shadow-md"
                                                    style={{ zIndex: flower.zIndex }}
                                                />
                                            );
                                        })
                                    }
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Login Form Container - Fades out on reveal */}
                    <AnimatePresence>
                        {!isRevealing && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
                                className="relative z-[200] w-full h-full flex items-center justify-center p-4 pointer-events-auto"
                            >
                                <div className="relative w-full max-w-sm">
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
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div >
            )
            }
        </>
    );
}
