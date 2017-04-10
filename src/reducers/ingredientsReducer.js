import initialState from './initialState';
import { getIngredients } from '../actions';

const ingredients = (state = initialState.ingredients, action) => {
  switch(action.type) {
    case 'GET_INGREDIENTS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export default ingredients;
