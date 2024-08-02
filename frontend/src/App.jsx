import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './router';
import './styles/tailwind.css'; // Import Tailwind CSS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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