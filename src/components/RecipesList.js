import React from 'react';
import { connect } from 'react-redux';
import { setMonth, getRecipes } from '../actions';
// import { bindActionCreators } from 'redux';

// import {ListGroup, ListGroupItem} from 'react-bootstrap';

const _renderRecipes = (recipes) => {
  console.log(recipes);
  if (recipes.length === 0) { return (<div>No recipes here!</div>) } else {
    return recipes.recipes.map((item) => {
      return <li>{/* recipe info */}</li>
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.recipes);
  return {
    recipes: state.recipes
  }
}

const RecipesList =  (recipes) => {
  return (
    <ul>
      {_renderRecipes(recipes)}
    </ul>
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

export default connect(mapStateToProps)(RecipesList);
