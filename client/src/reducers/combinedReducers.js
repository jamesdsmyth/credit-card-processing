import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from '../sagas/sagas';
import creditCardsReducer from './creditCardsReducer';

// now to create the saga middleware
const sagaMiddleware = createSagaMiddleware(rootSaga);

// combining the reducers but we only have one at the moment
const reducer = combineReducers({
  creditCardsReducer
});

// adding the middleware and the logger to see what the current and next state is in the console
const store = createStore(reducer,
  applyMiddleware(sagaMiddleware, logger)
);

// run the root saga
sagaMiddleware.run(rootSaga);

export default store;