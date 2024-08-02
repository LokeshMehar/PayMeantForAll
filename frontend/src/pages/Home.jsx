// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Payment App</h1>
            <p className="text-lg mb-6">Manage your transactions easily and securely.</p>
            <div className="space-x-4">
                <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </Link>
                <Link to="/signin" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default Home;
