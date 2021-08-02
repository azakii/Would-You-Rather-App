import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import middleware from './redux/middleware';
import reducer from './redux/reducers';
import "./App.css";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
    <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
