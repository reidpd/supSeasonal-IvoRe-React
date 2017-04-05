import React from 'react';
import ReactDOM from 'react-dom';

const Ingredients_In_Season = (props) => {
  const ingredients = props.____.map((ingredient) => {
    return <IngredientListItem />
  })

  return (
    <ul>
      {ingredients}
    </ul>
  )
}
