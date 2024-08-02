import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './router';
import './styles/tailwind.css'; // Import Tailwind CSS
import Navbar from './components/Navbar';

const App = () => {
    return (
        <RecoilRoot>
            <AppRouter />
            {/* <Navbar/> */}
            {/* <div >chla</div> */}
        </RecoilRoot>
    );
};