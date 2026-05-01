
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="py-24 text-center space-y-12 bg-[#fcfaf7]">
            <div className="text-6xl font-script text-slate-800 tracking-wider">Wiktoria & Bartek</div>
            <div className="flex justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1, 1.4, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        times: [0, 0.1, 0.2, 0.4, 0.6],
                        ease: "easeInOut"
                    }}
                >
                    <Heart className="w-8 h-8 fill-wed-green-light text-wed-green-light" />
                </motion.div>
            </div>
            <div className="space-y-2 opacity-60">
                <p className="text-[11px] uppercase tracking-[0.6em] text-slate-600">02.10.2026</p>
                <p className="text-[11px] uppercase tracking-[0.6em] text-slate-600 font-bold">Kroczewo</p>
            </div>
        </footer>
    );
};
