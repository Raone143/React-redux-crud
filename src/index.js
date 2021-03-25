import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { transactionReducer } from './reducers/transactionReducer'

if(localStorage.getItem('transactions') == null)
localStorage.setItem('transactions',JSON.stringify([]))
let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('transactions'))
}


var store = createStore(transactionReducer,initialState)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


