// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useRecoilState } from 'recoil';
// import themeAtom from '../store/themeAtom';
// import { signup } from '../services/authService';

// const Signup = () => {
//     const [theme] = useRecoilState(themeAtom);
//     const [username, setUsername] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await signup({ username, firstName, lastName, password });
//             console.log('Signup successful:', response);
//             navigate('/signin'); // Redirect to sign-in page after successful signup
//         } catch (err) {
//             setError(err.message || 'Signup failed');
//         }
//     };

//     return (
//         <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
//             <h1 className="text-3xl mb-4">Sign Up</h1>
//             {error && <p className="text-red-500">{error}</p>}
//             <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className={`p-2 rounded bg-${theme}-800`}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="First Name"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     className={`p-2 rounded bg-${theme}-800`}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Last Name"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     className={`p-2 rounded bg-${theme}-800`}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className={`p-2 rounded bg-${theme}-800`}
//                     required
//                 />
//                 <button
//                     type="submit"
//                     className={`bg-green-500 hover:bg-green-600 text-${theme}-100 font-bold py-2 px-4 rounded`}
//                 >
//                     Sign Up
//                 </button>
//                 <p className="text-center">
//                     Already have an account? <Link to="/signin" className="text-green-500 hover:underline">Sign In</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Signup;

// src/components/Signup.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';
import { signup } from '../services/authService';

const Signup = () => {
    const [theme] = useRecoilState(themeAtom);
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup({ username, firstName, lastName, password });
            console.log('Signup successful:', response);
            setSuccess(true);
            setError('');
            navigate('/signin'); // Redirect to sign-in page after successful signup
        } catch (err) {
            setError(err.message || 'Signup failed');
            setSuccess(false);
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
            <h1 className="text-3xl mb-4">Sign Up</h1>
            {error && <p className={`text-red-500`}>{error}</p>}
            {success && <p className={`text-green-500`}>Signup successful!</p>}
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
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`p-2 rounded bg-${theme}-800`}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    Sign Up
                </button>
                <p className="text-center">
                    Already have an account? <Link to="/signin" className="text-green-500 hover:underline">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;

