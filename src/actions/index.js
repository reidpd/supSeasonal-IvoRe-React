import axios from 'axios';

export const fetchIngredients = (queryMonth) => {
  console.log('src/actions/index/fetchIngredients');
  const API_URL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}`
  return axios.get(API_URL)
    .then((response) => {
      return response.data;
    });
}

export const getIngredients = (queryMonth) => {
  console.log('src/actions/index/getIngredients');
  const data = fetchIngredients(queryMonth);
  console.log('ingredients data', data);
  return {
    type: 'GET_INGREDIENTS',
    payload: data
  }
}

export const fetchRecipes = (queryMonth) => {
  console.log('src/actions/index/fetchRecipes');
  const API_URL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}/recipes`;
  return axios.get(API_URL)
  .then((response) => {
    return response.data;
  });
}

export const getRecipes = (queryMonth) => {
  console.log('src/actions/index/getRecipes');
  const data = fetchRecipes(queryMonth);
  console.log('recipe data', data);
  return {
    type: 'GET_RECIPES',
    payload: data
  }
}


export const setMonth = (queryMonth) => {
  console.log('src/actions/index/setMonth');
  return {
    type: 'SET_MONTH',
    month: queryMonth
  }
}


// export const setRecipes = () => {
//
// }
// export default { setMonth, getIngredients, getRecipes, fetchIngredients, fetchRecipes }
