// import React from 'react';
// import { useRecoilState } from 'recoil';
// import themeAtom from '../store/themeAtom';

// const Loader = () => {
//     const [theme] = useRecoilState(themeAtom);

//     return (
//         <div className={`flex items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
//             <div className="loader"></div>
//             <style jsx>{`
//                 .loader {
//                     border: 8px solid rgba(255, 255, 255, 0.1);
//                     border-left-color: #4caf50;
//                     border-radius: 50%;
//                     width: 50px;
//                     height: 50px;
//                     animation: spin 1s linear infinite;
//                 }
//                 @keyframes spin {
//                     to {
//                         transform: rotate(360deg);
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Loader;



// src/components/Loader.jsx

import React from 'react';
import { useRecoilState } from 'recoil';
import themeAtom from '../store/themeAtom';

const Loader = () => {
    const [theme] = useRecoilState(themeAtom);

    return (
        <div className={`flex items-center justify-center min-h-screen bg-${theme}-900 text-${theme}-100`}>
            <div className="loader"></div>
            <style jsx>{`
                .loader {
                    border: 8px solid rgba(255, 255, 255, 0.1);
                    border-left-color: #4caf50;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Loader;
