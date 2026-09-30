import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    theme?: 'light' | 'dark';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, theme = 'light' }) => {
    return (
        <div className="text-center mb-10 md:mb-14 space-y-2 relative z-10">
            <h2 className={`text-5xl md:text-7xl font-script ${theme === 'dark' ? 'text-wed-beige' : 'text-wed-green-dark'} drop-shadow-sm tracking-wide`}>
                {children}
            </h2>
            <div className={`w-24 h-px mx-auto mt-4 ${theme === 'dark' ? 'bg-wed-green-light/50' : 'bg-wed-green/30'}`}></div>
        </div>
    );
};
