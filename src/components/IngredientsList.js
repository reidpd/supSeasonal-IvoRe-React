import React from 'react';
import { connect } from 'react-redux';
import { setMonth, getIngredients } from '../actions';
// import { bindActionCreators } from 'redux';

// import {ListGroup, ListGroupItem} from 'react-bootstrap';

const _renderIngredients = (ingredientsList) => {
  console.log('ingredientList', ingredientsList);
  if (ingredientsList.ingredientsList.length === 0) { return 'No ingredients here!' } else {
    console.log(ingredientsList.ingredientsList);
    return ingredientsList.ingredientsList.map((item) => {
      return <li>{item.food_name}</li>
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('ingredients', state.ingredients);
  return {
    ingredientsList: state.ingredients
  }
}

const IngredientsList =  (ingredientsList) => {
  return (
    <ul>
      {_renderIngredients(ingredientsList)}
    </ul>
  )
}

  // const mapDispatchToProps = (dispatch) => {
  //   return bindActionCreators({ /* actions from line 4 */ }, dispatch);
  // }

  // const singleIngredient = props.ingredient.map((ingredient) => {}

export default connect(mapStateToProps)(IngredientsList);
