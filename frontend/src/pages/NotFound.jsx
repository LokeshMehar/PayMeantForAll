// src/pages/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-6">The page you are looking for does not exist.</p>
            <Link to="/" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
