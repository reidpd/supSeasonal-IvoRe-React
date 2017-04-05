import React from 'react';
import ReactDOM from 'react-dom';

const Recipes = (props) => {
  const recipes = props.____.map((recipe) => {
    return <RecipeListItem />
  })

  return (
    <ul>
      {recipes}
    </ul>
  )
}
