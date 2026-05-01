import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string;
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <span className="text-3xl md:text-5xl font-serif text-white">{value.toString().padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 mt-1">{label}</span>
    </div>
);

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex justify-center space-x-6 md:space-x-12 mt-12 animate-in fade-in zoom-in duration-1000 delay-500 bg-black/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
            <TimeUnit value={timeLeft.days} label="Dni" />
            <TimeUnit value={timeLeft.hours} label="Godz" />
            <TimeUnit value={timeLeft.minutes} label="Min" />
            <TimeUnit value={timeLeft.seconds} label="Sek" />
        </div>
    );
};
