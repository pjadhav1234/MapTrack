import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM.createRoot is correct for React 18+
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure #root exists in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
