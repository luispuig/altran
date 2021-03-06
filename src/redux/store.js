// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from "./reducers";


/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // Allow Redux Dev Tools
    applyMiddleware(thunk),
);
/* eslint-enable */

export default store;
