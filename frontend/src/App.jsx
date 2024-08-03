import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './router';
import './styles/tailwind.css'; // Import Tailwind CSS
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <RecoilRoot>

            {/* <Navbar/>
            <div className="content">
                <AppRouter />
            </div>
            <Footer/> */}
            {/* <div >chla</div> */}
            <Router>
            {/* <Navbar />
            <div className="content"> */}
                <AppRouter />
            {/* </div>
            <Footer /> */}
        </Router>

        </RecoilRoot>
    );
};

export default App;


// src/App.jsx

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Dashboard from './components/Dashboard';
// import SendMoney from './components/SendMoney';
// import ThemeToggle from './components/ThemeToggle';
// import { RecoilRoot } from 'recoil';

// const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleLogin = () => {
//         setIsLoggedIn(true);
//     };

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         // Clear token and user data here
//         localStorage.removeItem('authToken');
//         // Reset user data in your state management
//     };

//     return (
//         <RecoilRoot>
//             <Router>
//                 <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//                 <Routes>
//                     <Route path="/" element={<h1>Welcome to the App</h1>} />
//                     <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <h1>Please log in</h1>} />
//                     <Route path="/send" element={isLoggedIn ? <SendMoney /> : <h1>Please log in</h1>} />
//                 </Routes>
//             </Router>
//         </RecoilRoot>
//     );
// };

// export default App;
