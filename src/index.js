import ReactDOMClient from 'react-dom/client';
import Home from './pages/Home';

ReactDOMClient
    .createRoot(document.getElementById('root'))
    .render( <Home /> );