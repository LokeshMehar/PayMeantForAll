import React from 'react';
import { useRecoilValue } from 'recoil';
import themeAtom from '../store/themeAtom';

const Footer = () => {
    const theme = useRecoilValue(themeAtom);
    return (
        <footer className={`bg-${theme}-900 text-${theme}-100 py-4`}>
            <div className="container mx-auto text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-700 h-1 mb-2"></div>
                <p>This is the payMeant app by me.</p>
            </div>
        </footer>
    );
};

export default Footer;





// src/components/Footer.jsx

// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-800 text-white py-4">
//             <div className="container mx-auto text-center">
//                 <div className="bg-gradient-to-r from-green-500 to-green-700 h-1 mb-2"></div>
//                 <p>This is the payment app by me.</p>
//                 <p>License info here.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

