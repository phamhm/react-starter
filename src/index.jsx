import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import RootReducer from './root-reducer';
import '../style/style.css';

const createStoreWithMiddleware =
      applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
  </Provider>
  , document.querySelector('.container'));
