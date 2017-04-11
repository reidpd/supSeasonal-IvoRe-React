import initialState from './initialState';

const recipes = (state = initialState.recipes, action) => {
  console.log('src/reducers/recipesReducer/const_recipesReducer()');
  switch(action.type) {
    case 'GET_RECIPES_PENDING':
      console.log('src/reducers/recipesReducer/const_recipesReducer()/GET_RECIPES_PENDING');
      return 'Recipes Loading!';
    case 'GET_RECIPES_FULFILLED':
      console.log('src/reducers/recipesReducer/const_recipesReducer()/GET_RECIPES');
      return action.payload;
    default:
      console.log('src/reducers/recipesReducer/const_recipesReducer()/default');
      return state
  }
}

export default recipes;
