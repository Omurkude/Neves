import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n.js';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
