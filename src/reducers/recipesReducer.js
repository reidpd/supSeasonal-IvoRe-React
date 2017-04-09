import initialState from './initialState';

const recipes = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_RECIPES':
      return action.payload;
    default:
      return state.recipes;
  }
}

export default recipes;
