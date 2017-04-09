import React from 'react';
import { connect } from 'react-redux';
// import { setMonth, getIngredients } from '../actions';
// import { bindActionCreators } from 'redux';

import {ListGroup, ListGroupItem} from 'react-bootstrap';



const _renderIngredients = (ingredientsList) => {
  console.log(ingredientsList);
  if (ingredientsList.ingredientsList.length === 0) { return 'No ingredients here!' } else {
    console.log(ingredientsList);
    return ingredientsList.ingredientsList.map((item) => {
      return <ListGroupItem>{item.food_name}</ListGroupItem>
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.ingredients);
  return {
    ingredientsList: state.ingredients
  }
}

const IngredientsList =  (ingredientsList) => {
  return (
    <ListGroup>
      {_renderIngredients(ingredientsList)}
    </ListGroup>
  )
}

  // const mapDispatchToProps = (dispatch) => {
  //   return bindActionCreators({ /* actions from line 4 */ }, dispatch);
  // }

  // const singleIngredient = props.ingredient.map((ingredient) => {}

  // return (
  //     <ListGroupItem>Ingredient1 </ListGroupItem>
  //     {/* <ListGroupItem>Ingredient2 </ListGroupItem>
  //     <ListGroupItem>Ingredient3 </ListGroupItem>
  //     <ListGroupItem>Ingredient4 </ListGroupItem>
  //     <ListGroupItem>Ingredient5 </ListGroupItem> */}
  //
  // )

export default connect(mapStateToProps)(IngredientsList);
