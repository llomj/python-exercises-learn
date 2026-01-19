import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Use base path for production (GitHub Pages), '/' for local development
    const basePath = import.meta.env.PROD ? '/python-exercises-learn/' : '/';
    navigator.serviceWorker.register(`${basePath}sw.js`)
      .then(registration => {
        console.log('Python Exercises Learn SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('Python Exercises Learn SW registration failed: ', registrationError);
      });
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);