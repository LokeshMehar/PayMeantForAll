import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';

const Navbar = () => {
    const [theme, setTheme] = useRecoilState(themeAtom);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save theme to local storage
    };

    return (
        <nav className={`bg-${theme}-900 text-${theme}-100 py-4`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src="/assets/logo.png" alt="Logo" className="h-8" />
                </Link>
                <div className="flex items-center space-x-4">
                    <button onClick={toggleTheme} className="text-white">
                        Toggle Theme
                    </button>
                    <Link to="/signup" className="hover:underline">
                        Sign Up
                    </Link>
                    <Link to="/signin" className="hover:underline">
                        Sign In
                    </Link>
                    <Link to="/send" className="hover:underline">
                        Send Money
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
