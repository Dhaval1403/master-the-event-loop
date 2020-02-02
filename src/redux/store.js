import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

//add middlewares to this array.
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
