import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { timeoutMiddleware, testDelay } from './middleware/timeout.middleware'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

//add middlewares to this array.
const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store
