// This file contains informaiton on how a requests with a particular month
//will be resolved.
// First, install with npm: npm i redux-promise-middleware -S
//
// Second, import the middleware and include it in applyMiddleware when creating the Redux store:
//
// import promiseMiddleware from 'redux-promise-middleware';


// To use the middleware, dispatch a promise as the value of the payload
// property of the action. You can also explicitly dispatch a promise as the
// value of payload.promise.
// Link to Sup Seasonal API http://supseasonal.herokuapp.com/
// implicit promise
// const foo = () => ({
//   type: 'FOO',
//   payload: new Promise()
// });
// // explicit promise
// const foo = () => ({
//   type: 'FOO',
//   payload: {
//     promise: new Promise()
//   }
// });
// // A "pending" action is dispatched immediately with the original type string
// // and a suffix of _PENDING.
// // pending action
// {
//   type: 'FOO_PENDING'
// }
// // fulfilled action
// {
//   type: 'FOO_FULFILLED'
//   payload: {
//     ...
//   }
// }
// // rejected action
// {
//   type: 'FOO_REJECTED'
//   error: true,
//   payload: {
//     ...
//   }
// }
///////////////////////////
// example on how to make the call to the api.
//reducers and actions forlder
// Note: once the information from playload is passed to the reducers
//webpack will resolve the promised data
//create a fetch function that will format the URL we are sending.
//
import axios from 'axios';
import { promiseMiddleware, composeStoreWithMiddleware, applyMiddleware } from 'redux-promise-middleware';
import { createStore } from 'redux';

composeStoreWithMiddleware = applyMiddleware( promiseMiddleware() )(createStore);

const fetchIngredients = (queryMonth) => {
  const API_URL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}`
  return axios.get(API_URL)
    .then((response) => {
      return response.data;
    });
}

const fetchRecipes = (queryMonth) => {
  const API_URL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}/recipes`;
  return axios.get(API_URL)
    .then((response) => {
      return response.data;
    });
}

export default { fetchIngredients, fetchRecipes }
