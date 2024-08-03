// src/store/authAtom.js

import { atom } from 'recoil';

const authAtom = atom({
    key: 'authState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (initial state)
});

export default authAtom;
