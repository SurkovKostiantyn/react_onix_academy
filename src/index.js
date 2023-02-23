import ReactDOMClient from 'react-dom/client';
import Home from './components/pages/Home';

ReactDOMClient
    .createRoot(document.getElementById('root'))
    .render( <Home /> );