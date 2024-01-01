import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Lexend Peta font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Lexend+Peta&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Font Awesome (keeping the existing Font Awesome link)
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.integrity = 'sha512-KyA5WH3TkGKvwbhGdI+icuiDcfw+F/ZWUrXRVKqZaMkm2Tyfxz36raZzq37XBEr+e7VioXj7XNc/wIj+LvhKbg==';
fontAwesomeLink.crossOrigin = 'anonymous';
fontAwesomeLink.referrerPolicy = 'no-referrer';
document.head.appendChild(fontAwesomeLink);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
