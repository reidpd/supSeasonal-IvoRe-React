import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import initialState from './reducers/initialState';
import thunkMiddleware from 'redux-thunk';
import supseasonalReducers from './reducers';
import App from './App';
import './index.css';

const store = createStore(
  supseasonalReducers,
  initialState,
  applyMiddleware( thunkMiddleware, promiseMiddleware() ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
