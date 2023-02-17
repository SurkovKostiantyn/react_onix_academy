import ReactDOMClient from 'react-dom/client';
import Home from './components/pages/Home';
import $ from 'jquery';

ReactDOMClient
    .createRoot($('#root'))
    .render( <Home /> );