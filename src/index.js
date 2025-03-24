// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './pages/StateManagement/Context'; // Adjust the import path as necessary
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();