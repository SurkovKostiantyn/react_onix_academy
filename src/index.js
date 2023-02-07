import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';

import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Field from "./components/Field.js";
import Footer from './components/Footer.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Field />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();