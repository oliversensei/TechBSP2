import React, { useState, useEffect } from 'react';
import logo1 from '../../image/dark-bg.jpg';
import logo2 from '../../image/light-bg.jpg';

const Header = () => {
    const [isDark, setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <header className="topbar">
            <a href="" className="logo">
                <img
                    src={isDark ? logo1 : logo2}  
                    alt="TechBSP2"
                    width="35"
                    height="35"
                />
            </a>

            <button onClick={toggleTheme} className="theme-toggle-btn">
                <span
                    className={`material-symbols-outlined ${isDark ? 'dark' : 'light'}`}
                >
                    {isDark ? 'sunny' : 'mode_night'} 
                </span>
                <div className="state-layer"></div>
            </button>
        </header>
    );
};

export default Header;
