

import App from './App';
import rootReducer from './reducers'
import { renderRedux } from 'boringbits/client';

renderRedux(App, rootReducer);

if (module.hot)  module.hot.accept((err) => console.log("error reloading", err));


