import initialState from './initialState';

const ingredients = (state = [], action) => {
  console.log('src/reducers/ingredientsReducer/const_ingredients()');
  switch(action.type) {
    case 'GET_INGREDIENTS_PENDING':
      return 'Ingredients Loading!';
    case 'GET_INGREDIENTS_FULFILLED':
      console.log('src/reducers/ingredientsReducer/const_ingredients()/GET_INGREDIENTS_FULFILLED');
      return action.payload;
    default:
      console.log('src/reducers/ingredientsReducer/const_ingredients()/default');
      return state;
  }
}

export default ingredients;
