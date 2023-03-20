import ReactDOMClient from 'react-dom/client';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeftLong, faArrowRightLong
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter, faFacebook, faYoutube, faPinterest, faBehanceSquare
} from '@fortawesome/free-brands-svg-icons';

import Home from './pages/Home';

library.add(faTwitter, faFacebook, faYoutube, faPinterest, faBehanceSquare, faArrowLeftLong, faArrowRightLong);

ReactDOMClient
  .createRoot(document.getElementById('root'))
  .render(<Home />);
