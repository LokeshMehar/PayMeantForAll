// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles/global.css'; // Import global CSS

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         {/* <App /> */}
//         <div>here</div>
//     </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // Import global CSS

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div>
//     <h1>Hello, World!</h1>
// </div>
// );

// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <div>
            <h1>Hello, World!</h1>
            <p>This is a simple test page to verify rendering.</p>
        </div> */}
        <App />
    </React.StrictMode>
);
