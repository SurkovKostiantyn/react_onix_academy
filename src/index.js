import ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faFacebook, faGithub, faInstagram, faTelegram
} from '@fortawesome/free-brands-svg-icons';

import Home from './pages/Home';
import Header from './pages/Router';
import Customers from './pages/Customers';
import News from './pages/News';
import NoPage from './pages/NoPage';

import './styles/main.css';

library.add(faFacebook, faGithub, faInstagram, faTelegram);

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOMClient
  .createRoot(document.getElementById('root'))
  .render(
    <App />
  );
