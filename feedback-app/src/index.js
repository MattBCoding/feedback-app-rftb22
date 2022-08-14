import React from 'react';
// react 18 import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
// pre react 18 method
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// )