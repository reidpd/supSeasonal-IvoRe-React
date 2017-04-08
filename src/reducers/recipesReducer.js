import initialState from './initialState';

const recipesReducer = (state = initialState.recipes, action) => {
  switch(action.type) {
    case 'ACTION_1':
      return /*Important piece of state, translated via action  (eg action.text)*/;
    default:
      return state;
  }
}

export default recipesReducer;
