import React from 'react';

interface SectionTitleProps {
    subtitle?: string;
    children: React.ReactNode;
    theme?: 'light' | 'dark';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, children, theme = 'light' }) => {
    return (
        <div className="text-center mb-16 space-y-2">
            {subtitle && (
                <p className={`font-script text-3xl mb-2 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {subtitle}
                </p>
            )}
            <h2 className={`text-4xl md:text-6xl font-serif italic tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                {children}
            </h2>
            <div className={`w-16 h-px mx-auto mt-6 ${theme === 'dark' ? 'bg-emerald-500/50' : 'bg-emerald-200'}`}></div>
        </div>
    );
};
