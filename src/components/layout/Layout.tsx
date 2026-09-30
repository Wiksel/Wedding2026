import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import type { NavItem } from '../../App';

interface LayoutProps {
    children: React.ReactNode;
    navItems: NavItem[];
}

export const Layout: React.FC<LayoutProps> = ({ children, navItems }) => {
    return (
        <div className="min-h-screen bg-[#fcfaf7] text-slate-900 font-sans selection:bg-emerald-50">
            <Navbar items={navItems} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
