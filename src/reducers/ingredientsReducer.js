import initialState from './initialState';

const ingredients = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_INGREDIENTS':
      console.log('this is action.payload', action.payload);
      return action.payload;
    default:
      return state.ingredients;
  }
}

export default ingredients;
