import React, { Component } from 'react';

export const setMonth = (queryMonth) => {
  return {
    type: 'SET_MONTH',
    month: queryMonth
  }
}

export const getIngredients = (queryMonth) => {
  const data = fetchIngredients(queryMonth);
  return {
    type: 'GET_INGREDIENTS',
    payload: data
  }
}

export const getRecipes = (queryMonth) => {
  const data = fetchRecipes(queryMonth);
  return {
    type: 'GET_RECIPES',
    payload: data
  }
}
