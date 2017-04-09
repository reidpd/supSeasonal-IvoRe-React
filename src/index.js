import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import supseasonalReducers from './reducers';
import App from './App';
import './index.css';

const store = createStore(
  supseasonalReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
<Provider store ={store}>
    <App />
</Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
