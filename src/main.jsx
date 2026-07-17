import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App.jsx';
import './i18n/index.js';
import './styles/global.css';
// Must stay after global.css — cv-site.css relies on source order to win ties.
import './styles/cv-site.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
