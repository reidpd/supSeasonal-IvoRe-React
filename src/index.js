import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware';
import initialState from './reducers/initialState';
import thunkMiddleware from 'redux-thunk';
import supseasonalReducers from './reducers';
import App from './App';
import './index.css';

const store = createStore(
  supseasonalReducers,
  initialState,
  composeWithDevTools(applyMiddleware( thunkMiddleware, promiseMiddleware() ))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log('render forthcoming');
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  console.log('module.hot === true');
  module.hot.accept()
}
