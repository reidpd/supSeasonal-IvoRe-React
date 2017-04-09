import initialState from './initialState';

const recipes = (state = initialState.recipes, action) => {
  switch(action.type) {
    case 'GET_RECIPES':
      return action.payload;
    default:
      return state
  }
}

export default recipes;
