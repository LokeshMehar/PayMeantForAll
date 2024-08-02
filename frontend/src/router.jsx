// // src/router.jsx

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import Signup from './components/Signup';
// import Signin from './components/Signin';
// import Dashboard from './components/Dashboard';
// import SendMoney from './components/SendMoney';

// const AppRouter = () => {
//     return (
//         // <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/signin" element={<Signin />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/send" element={<SendMoney />} />
//                 <Route path="*" element={<NotFound />} />
//             </Routes>
//         // </Router>
//     );
// };

// export default AppRouter;


// src/router.jsx

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import SendMoney from './components/SendMoney';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = () => {
    console.log("here");
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/send" element={<SendMoney />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;

