import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/index.css';
import Home from './components/home/Home';

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
