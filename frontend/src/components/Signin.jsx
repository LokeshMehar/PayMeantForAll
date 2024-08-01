import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';
import { signin } from '../services/authService';

const Signin = () => {
    const [theme] = useRecoilState(themeAtom);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signin({ username, password });
            console.log('Signin successful:', response);
            localStorage.setItem('authToken', response.token); // Store the token
            navigate('/dashboard'); // Redirect to dashboard after successful signin
        } catch (err) {
            setError(err.message || 'Signin failed');
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
            <h1 className="text-3xl mb-4">Sign In</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`p-2 rounded bg-${theme}-800`}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`p-2 rounded bg-${theme}-800`}
                    required
                />
                <button
                    type="submit"
                    className={`bg-green-500 hover:bg-green-600 text-${theme}-100 font-bold py-2 px-4 rounded`}
                >
                    Sign In
                </button>
                <p className="text-center">
                    Don't have an account? <Link to="/signup" className="text-green-500 hover:underline">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Signin;
