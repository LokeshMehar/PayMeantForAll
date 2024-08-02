// src/hooks/useTheme.js

import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';

const useTheme = () => {
    const [theme, setTheme] = useRecoilState(themeAtom);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save theme to local storage
    };

    return [theme, toggleTheme];
};

export default useTheme;
