import React from 'react';
import './Layout.css';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <div className="fairy-lights-container">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="fairy-light"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                    />
                ))}
            </div>
            <main className="content-wrapper">
                {children}
            </main>
        </div>
    );
};
