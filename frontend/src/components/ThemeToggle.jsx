// src/components/ThemeToggle.jsx

import React from 'react';
import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';

const ThemeToggle = () => {
    const [theme, setTheme] = useRecoilState(themeAtom);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button 
            onClick={toggleTheme} 
            className={`p-2 rounded bg-${theme}-700 text-${theme}-100`}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;
