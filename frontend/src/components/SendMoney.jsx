// // // src/components/SendMoney.jsx

// // import React, { useState } from 'react';
// // import { useRecoilState } from 'recoil';
// // import themeAtom from '../store/themeAtom';
// // import { sendMoney } from '../services/transactionService'; // Import the new service

// // const SendMoney = () => {
// //     const [theme] = useRecoilState(themeAtom);
// //     const [amount, setAmount] = useState('');
// //     const [recipient, setRecipient] = useState('');
// //     const [message, setMessage] = useState('');
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState(false);

// //     const handleSend = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await sendMoney({ recipient, amount, message });
// //             console.log('Transaction successful:', response);
// //             setSuccess(true);
// //             setError('');
// //             // Clear form fields or perform any other actions
// //             setRecipient('');
// //             setAmount('');
// //             setMessage('');
// //         } catch (err) {
// //             setError(err.message || 'Failed to send money');
// //             setSuccess(false);
// //         }
// //     };

// //     return (
// //         <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
// //             <h1 className="text-3xl mb-4">Send Money</h1>
// //             {error && <p className={`text-red-500`}>{error}</p>}
// //             {success && <p className={`text-green-500`}>Transaction successful!</p>}
// //             <form onSubmit={handleSend} className="flex flex-col space-y-4 w-full max-w-md">
// //                 <input
// //                     type="text"
// //                     placeholder="Recipient Username"
// //                     value={recipient}
// //                     onChange={(e) => setRecipient(e.target.value)}
// //                     className={`p-2 rounded bg-${theme}-800`}
// //                     required
// //                 />
// //                 <input
// //                     type="number"
// //                     placeholder="Amount"
// //                     value={amount}
// //                     onChange={(e) => setAmount(e.target.value)}
// //                     className={`p-2 rounded bg-${theme}-800`}
// //                     required
// //                 />
// //                 <textarea
// //                     placeholder="Message (optional)"
// //                     value={message}
// //                     onChange={(e) => setMessage(e.target.value)}
// //                     className={`p-2 rounded bg-${theme}-800 h-20`}
// //                 />
// //                 <button
// //                     type="submit"
// //                     className={`bg-green-500 hover:bg-green-600 text-${theme}-100 font-bold py-2 px-4 rounded`}
// //                 >
// //                     Send Money
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default SendMoney;




// // src/components/SendMoney.jsx

// import React, { useState } from 'react';
// import { useRecoilState } from 'recoil';
// import themeAtom from '../store/themeAtom';
// import { sendMoney } from '../services/transactionService'; // Import the transaction service

// const SendMoney = () => {
//     const [theme] = useRecoilState(themeAtom);
//     const [amount, setAmount] = useState('');
//     const [recipient, setRecipient] = useState('');
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState(false);

//     const handleSend = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await sendMoney({ recipient, amount, message });
//             console.log('Transaction successful:', response);
//             setSuccess(true);
//             setError('');
//             // Clear form fields or perform any other actions
//             setRecipient('');
//             setAmount('');
//             setMessage('');
//         } catch (err) {
//             setError(err.message || 'Failed to send money');
//             setSuccess(false);
//         }
//     };

//     return (
//         <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
//             <h1 className="text-3xl mb-4">Send Money</h1>
//             {error && <p className={`text-red-500`}>{error}</p>}
//             {success && <p className={`text-green-500`}>Transaction successful!</p>}
//             <form onSubmit={handleSend} className="flex flex-col space-y-4 w-full max-w-md">
//                 <input
//                     type="text"
//                     placeholder="Recipient Username"
//                     value={recipient}
//                     onChange={(e) => setRecipient(e.target.value)}
//                     className={`p-2 rounded bg-${theme}-800`}
//                     required
//                 />
//                 <input
//                     type="number"
//                     placeholder="Amount"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     className={`p-2 rounded bg-${theme}-800`}
//                     required
//                 />
//                 <textarea
//                     placeholder="Message (optional)"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     className={`p-2 rounded bg-${theme}-800 h-20`}
//                 />
//                 <button
//                     type="submit"
//                     className={`bg-green-500 hover:bg-green-600 text-${theme}-100 font-bold py-2 px-4 rounded`}
//                 >
//                     Send Money
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default SendMoney;



// src/components/SendMoney.jsx

// src/components/SendMoney.jsx
// src/components/SendMoney.jsx

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';
import { sendMoney } from '../services/transactionService'; // Import the transaction service
import { getUsers } from '../services/userService'; // Import the user fetching service

const SendMoney = () => {
    const [theme] = useRecoilState(themeAtom);
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [recipientId, setRecipientId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [users, setUsers] = useState([]); // Initialize users as an empty array
    const [loading, setLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            const response = await sendMoney({ to: recipientId, amount });
            console.log('Transaction successful:', response);
            setSuccess(true);
            setError('');
            // Clear form fields
            setRecipient('');
            setAmount('');
            setMessage('');
            setRecipientId('');
            setUsers([]); // Clear users after successful transaction
        } catch (err) {
            setError(err.message || 'Failed to send money');
            setSuccess(false);
        }
    };

    const handleRecipientChange = async (e) => {
        const value = e.target.value;
        setRecipient(value);

        if (value) {
            setLoading(true);
            try {
                const response = await getUsers(value); // Fetch users based on input
                if (response && Array.isArray(response)) {
                    console.log(response);
                    setUsers(response);
                     // Ensure we set users to an empty array if undefined
                } else {
                    console.error('Unexpected response format:', response);
                    setUsers([]); // Reset users if the response is not as expected
                }
            } catch (error) {
                console.error('Error fetching users:', error);
                setUsers([]); // Reset users on error
            } finally {
                setLoading(false);
            }
        } else {
            setUsers([]); // Clear users if input is empty
        }
    };

    const handleUserSelect = (user) => {
        setRecipient(user.username);
        setRecipientId(user._id); // Set the recipient ID for the backend request
        setUsers([]); // Clear the user list after selection
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
            <h1 className="text-3xl mb-4">Send Money</h1>
            {error && <p className={`text-red-500`}>{error}</p>}
            {success && <p className={`text-green-500`}>Transaction successful!</p>}
            <form onSubmit={handleSend} className="flex flex-col space-y-4 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Recipient Username"
                    value={recipient}
                    onChange={handleRecipientChange}
                    className={`p-2 rounded bg-${theme}-800`}
                    required
                />
                {loading && <p className="text-gray-500">Loading...</p>}
                {users.length > 0 && (
                    <ul className="bg-white text-black rounded shadow-md w-full max-w-md">
                        {users.map((user) => (
                            <li
                                key={user._id}
                                onClick={() => handleUserSelect(user)}
                                className="p-2 cursor-pointer hover:bg-gray-200"
                            >
                                {user.username} ({user.firstName} {user.lastName})
                            </li>
                        ))}
                    </ul>
                )}
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={`p-2 rounded bg-${theme}-800`}
                    required
                />
                <textarea
                    placeholder="Message (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`p-2 rounded bg-${theme}-800 h-20`}
                />
                <button
                    type="submit"
                    className={`bg-green-500 hover:bg-green-600 text-${theme}-100 font-bold py-2 px-4 rounded`}
                >
                    Send Money
                </button>
            </form>
        </div>
    );
};

export default SendMoney;


