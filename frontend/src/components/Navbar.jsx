// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useRecoilState } from 'recoil';
// import themeAtom from '../store/themeAtom';

// const Navbar = () => {
//     const [theme, setTheme] = useRecoilState(themeAtom);

//     const toggleTheme = () => {
//         const newTheme = theme === 'dark' ? 'light' : 'dark';
//         setTheme(newTheme);
//         localStorage.setItem('theme', newTheme); // Save theme to local storage
//     };

//     return (
//         <nav className={`bg-${theme}-900 text-${theme}-100 py-4`}>
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link to="/">
//                     <img src="/assets/logo.png" alt="Logo" className="h-8" />
//                 </Link>
//                 <div className="flex items-center space-x-4">
//                     <button onClick={toggleTheme} className="text-white">
//                         Toggle Theme
//                     </button>
//                     <Link to="/signup" className="hover:underline">
//                         Sign Up
//                     </Link>
//                     <Link to="/signin" className="hover:underline">
//                         Sign In
//                     </Link>
//                     <Link to="/send" className="hover:underline">
//                         Send Money
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// src/components/Navbar.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useRecoilState } from 'recoil';
// import themeAtom from '../store/themeAtom';

// const Navbar = () => {
//     const [theme, setTheme] = useRecoilState(themeAtom);

//     const toggleTheme = () => {
//         const newTheme = theme === 'dark' ? 'light' : 'dark';
//         setTheme(newTheme);
//         localStorage.setItem('theme', newTheme); // Save theme to local storage
//     };

//     return (
//         <nav className={`bg-${theme}-900 text-${theme}-100 py-4`}>
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link to="/">
//                     <img src="/assets/logo.png" alt="Logo" className="h-8" />
//                 </Link>
//                 <div className="flex items-center space-x-4">
//                     <button onClick={toggleTheme} className="text-white">
//                         Toggle Theme
//                     </button>
//                     <Link to="/signup" className="hover:underline">Sign Up</Link>
//                     <Link to="/signin" className="hover:underline">Sign In</Link>
//                     <Link to="/send" className="hover:underline">Send Money</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


// src/components/Navbar.jsx

// src/components/Navbar.jsx

// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';
import ThemeToggle from './ThemeToggle';
import { clearAuthToken } from '../utils/helpers';
import authAtom from '../store/authAtom';

const Navbar = () => {
    const theme = useRecoilValue(themeAtom);
    const [isOpen, setIsOpen] = useState(false);

    const isLoggedIn = useRecoilValue(authAtom); // Get the auth state
    const setIsLoggedIn = useSetRecoilState(authAtom); // Setter for auth state

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        // Clear token and user data here
        clearAuthToken();
        setIsLoggedIn(false); // Update auth state
    };

    const loggedInMenuItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Send Money', path: '/send' },
        { name: 'Logout', action: handleLogout },
    ];

    const loggedOutMenuItems = [
        { name: 'Sign In', path: '/signin' },
        { name: 'Sign Up', path: '/signup' },
    ];

    return (
        <nav className={`flex items-center justify-between p-4  bg-${theme}-900 text-${theme}-100`}>
            <div className="flex items-center w-full justify-between">
            <Link to="/" className="mr-4">
            
                <img src="vite.svg" alt="Logo" className="h-8 w-8" /> {/* Add your logo here */}
            </Link>
                <button onClick={toggleMenu} className="ml-4 md:hidden">
                    {isOpen ? '✖️' : '☰'}
                </button>
                <div className={`flex-col md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} md:block mr-3`}>
                    {/* <Link to="/" className="mr-4">Home</Link> */}
                    {isLoggedIn ? (
                        loggedInMenuItems.map((item) => (
                            <Link key={item.name} to={item.path} className="mr-4" onClick={item.action}>
                                {item.name}
                            </Link>
                        ))
                    ) : (
                        loggedOutMenuItems.map((item) => (
                            <Link key={item.name} to={item.path} className="mr-4">
                                {item.name}
                            </Link>
                        ))
                    )}
                </div>
            <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;



