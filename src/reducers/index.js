import { combineReducers } from 'redux';
import monthReducer from './monthReducer';
import ingredientsReducer from './ingredientsReducer';
import recipesReducer from './recipesReducer';

const supseasonalReducers = combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
  currentSelectedMonth: monthReducer
});

export default supseasonalReducers;
