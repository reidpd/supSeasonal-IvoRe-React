// import React, { Component } from 'react';
import axios from 'axios';
// import { fetchRecipes } from '../API_Docs/Recipes';

export const fetchIngredients = (queryMonth) => {
  const API_URL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}`
  return axios.get(API_URL)
    .then((response) => {
      return response.data;
    });
}

export const fetchRecipes = (queryMonth) => {
  const API_URL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}/recipes`;
  return axios.get(API_URL)
    .then((response) => {
      return response.data;
    });
}

export const allMonths = {
  January: 'jan',
  February: 'feb',
  March: 'mar',
  April: 'apr'
}


export const setMonth = (queryMonth) => {
  return {
    type: 'SET_MONTH',
    month: queryMonth
  }
}

export const getIngredients = (queryMonth) => {
  const data = fetchIngredients(queryMonth);
  console.log('ingredients data', data);
  return {
    type: 'GET_INGREDIENTS',
    payload: data
  }
}

export const getRecipes = (queryMonth) => {
  const data = fetchRecipes(queryMonth);
  console.log('recipe data', data);
  return {
    type: 'GET_RECIPES',
    payload: data
  }
}

// export default { setMonth, getIngredients, getRecipes, fetchIngredients, fetchRecipes }
