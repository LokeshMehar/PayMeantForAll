// src/store/userAtom.js

import { atom } from 'recoil';
import { getAuthToken } from '../utils/helpers';

const userAtom = atom({
    key: 'userAtom',
    default: {
        isAuthenticated: !!getAuthToken(),
        user: null,
    },
});

export default userAtom;
