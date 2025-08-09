import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

async function initAxe() {
  if (process.env.NODE_ENV !== 'production') {
    const axe = await import('react-axe');
    axe.default(React, ReactDOM, 1000, {
      rules: [
        {
          id: 'color-contrast',
          enabled: true
        }
      ]
    });
  }
}

initAxe();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
