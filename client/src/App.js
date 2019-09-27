import React from 'react';
import { Provider } from 'react-redux';

import store from './reducers/combinedReducers';

import LandingPage from './components/templates/landingPage/LandingPage';

import './App.css';

const App = () => (
  <Provider store={store}>
    <LandingPage />
  </Provider>
)

export default App;
