import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from '../sagas/sagas';
import creditCardsReducer from './creditCardsReducer';
import notificationReducer from './notificationReducer';

// now to create the saga middleware
const sagaMiddleware = createSagaMiddleware(rootSaga);

// combining the reducers but we only have one at the moment
const reducer = combineReducers({
  creditCardsReducer,
  notificationReducer
});

// adding the middleware and the logger to see what the current and next state is in the console
const store = createStore(reducer,
  applyMiddleware(sagaMiddleware, logger)
  // applyMiddleware(sagaMiddleware)
);

// run the root saga
sagaMiddleware.run(rootSaga);

export default store;