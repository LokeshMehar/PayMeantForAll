import React from 'react';
import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';

const Dashboard = () => {
    const [theme] = useRecoilState(themeAtom);

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
            <h1 className="text-3xl mb-4">Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            {/* Additional dashboard content can be added here */}
        </div>
    );
};

export default Dashboard;
