// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import themeAtom from '../store/themeAtom';
import authAtom from '../store/authAtom';

const Home = () => {
    const theme = useRecoilValue(themeAtom);
    const isLoggedIn = useRecoilValue(authAtom);

    const loggedInMenuItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Send Money', path: '/send' },
    ];

    const loggedOutMenuItems = [
        { name: 'Sign In', path: '/signin' },
        { name: 'Sign Up', path: '/signup' },
    ];
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
            <h1 className={`text-4xl font-bold mb-4 text-${theme-100}`}>Welcome to the PayMeant App</h1>
            <p className={`text-lg mb-6 text-${theme}-100`}>Manage your transactions easily and securely.</p>
            <div className="space-x-4">
                {/* <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </Link> */}
                {/* <Link to="/signin" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </Link> */}

                    {isLoggedIn ? (
                        loggedInMenuItems.map((item) => (
                            <Link key={item.name} to={item.path} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={item.action}>
                                {item.name}
                            </Link>
                        ))
                    ) : (
                        loggedOutMenuItems.map((item) => (
                            <Link key={item.name} to={item.path} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                {item.name}
                            </Link>
                        ))
                    )}
            </div>
        </div>
    );
};

export default Home;
