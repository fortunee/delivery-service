import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';

import App from './App';
import rootReducer from './store/reducers/root.reducer';
import { setAuthorizationToken, setAuthData } from './store/actions/auth.actions';
import { fetchAllShipment } from './store/actions/shipment.actions';

import './index.scss'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? 
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setAuthData(jwt.decode(localStorage.jwtToken)));
  store.dispatch(fetchAllShipment())
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
