import React from 'react';

interface SectionTitleProps {
    subtitle?: string;
    children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, children }) => {
    return (
        <div className="text-center mb-16 space-y-2">
            {subtitle && <p className="font-script text-3xl text-emerald-600 mb-2">{subtitle}</p>}
            <h2 className="text-4xl md:text-6xl font-serif text-slate-800 italic tracking-tight">{children}</h2>
            <div className="w-16 h-px bg-emerald-200 mx-auto mt-6"></div>
        </div>
    );
};
