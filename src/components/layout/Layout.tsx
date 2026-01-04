import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#fcfaf7] text-slate-900 font-sans selection:bg-emerald-50">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
