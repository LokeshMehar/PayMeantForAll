// src/store/themeAtom.js

import { atom } from 'recoil';

const themeAtom = atom({
    key: 'themeAtom',
    default: localStorage.getItem('theme') || 'dark', // Get theme from local storage or use default
});

export default themeAtom;
