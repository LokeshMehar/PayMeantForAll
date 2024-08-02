// // src/components/SendMoney.jsx

// import React, { useState } from 'react';
// import { useRecoilState } from 'recoil';
// import themeAtom from '../store/themeAtom';
// import { sendMoney } from '../services/transactionService'; // Import the new service

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

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';
import { sendMoney } from '../services/transactionService'; // Import the transaction service

const SendMoney = () => {
    const [theme] = useRecoilState(themeAtom);
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            const response = await sendMoney({ recipient, amount, message });
            console.log('Transaction successful:', response);
            setSuccess(true);
            setError('');
            // Clear form fields or perform any other actions
            setRecipient('');
            setAmount('');
            setMessage('');
        } catch (err) {
            setError(err.message || 'Failed to send money');
            setSuccess(false);
        }
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
                    onChange={(e) => setRecipient(e.target.value)}
                    className={`p-2 rounded bg-${theme}-800`}
                    required
                />
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
