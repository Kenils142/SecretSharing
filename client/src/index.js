import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-background min-h-screen flex justify-center'>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
