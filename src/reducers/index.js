import { combineReducers } from 'redux';
import currentSelectedMonth from './monthReducer';
import ingredients from './ingredientsReducer';
import recipes from './recipesReducer';
import { createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const supseasonalReducers = combineReducers({
  ingredients,
  recipes,
  currentSelectedMonth,
  form: formReducer

});

export default supseasonalReducers;
