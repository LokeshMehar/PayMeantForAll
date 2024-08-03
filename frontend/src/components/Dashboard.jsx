// import React from 'react';
// import { useRecoilState } from 'recoil';
// import themeAtom from '../store/themeAtom';

// const Dashboard = () => {
//     const [theme] = useRecoilState(themeAtom);

//     return (
//         <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
//             <h1 className="text-3xl mb-4">Dashboard</h1>
//             <p>Welcome to your dashboard!</p>
//             {/* Additional dashboard content can be added here */}
//         </div>
//     );
// };

// export default Dashboard;

// src/components/Dashboard.jsx

// import React from 'react';
// import { useRecoilState } from 'recoil';
// import themeAtom from '../store/themeAtom';

// const Dashboard = () => {
//     const [theme] = useRecoilState(themeAtom);

//     return (
//         <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
//             <h1 className="text-3xl mb-4">Dashboard</h1>
//             <p>Welcome to your dashboard!</p>
//             {/* Additional dashboard content can be added here */}
//         </div>
//     );
// };

// export default Dashboard;

// src/components/Dashboard.jsx

// src/components/Dashboard.jsx

// src/components/Dashboard.jsx

// src/components/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import themeAtom from '../store/themeAtom';
import { getBalance, updateUserDetails } from '../services/userService';
import authAtom from '../store/authAtom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const theme = useRecoilValue(themeAtom);
    const isLoggedIn = useRecoilValue(authAtom);
    const [balance, setBalance] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await getBalance();
                setBalance(response.balance); // Ensure this is the correct path
            } catch (err) {
                setError(err.message || 'Failed to fetch balance');
            }
        };

        fetchBalance();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserDetails({ firstName, lastName });
            setSuccess(true);
            setError('');
        } catch (err) {
            setError(err.message || 'Failed to update details');
            setSuccess(false);
        }
    };
    if(!isLoggedIn)
    {
        return (
            <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
        <Link to="/signin" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Sign In
        </Link>
        </div>)
    }

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
            {/* <h1 className="text-3xl mb-4">Dashboard</h1> */}
            <h1 className="text-4xl text-green-500 mb-8 py-2 px-4 border-green-500 border-2 rounded-lg font-bold">Current Balance: ${balance.toFixed(2)}</h1>
            {error && <p className={`text-red-500`}>{error}</p>}
            {success && <p className={`text-green-500`}>Details updated successfully!</p>}
            <form onSubmit={handleUpdate} className="flex flex-col space-y-4 w-full max-w-md">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`p-2 text-black rounded bg-${theme}-800`}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`p-2 text-black rounded bg-${theme}-800`}
                />
                <button
                    type="submit"
                    className={`bg-blue-500 hover:bg-blue-600 text-${theme}-100 font-bold py-2 px-4 rounded`}
                >
                    Update Details
                </button>
            </form>
        </div>
    );
};

export default Dashboard;





