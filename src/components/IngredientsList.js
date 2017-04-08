// import ReactDOM from 'react-dom';
// import Single_ingredient from './Single_ingredient';
//
// const Ingredients_In_Season = (props) => {
//   const ingredients = props.____.map((ingredient) => {
//     return <IngredientListItem />
//   })
//
//   return (
//     <ul>
//       {ingredients}
//     </ul>
//   )
// }

import React from 'react';

import { connect } from 'react-redux';
import {/* actions */ } from '../actions';
import { bindActionCreators } from 'redux';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

const IngredientsList=  (props) => {
  constructor(props){
    super(props);
    this.state = {
      month: ''
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {   // state properties required   }
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ /* actions from line 4 */ }, dispatch);
  }

  // const singleIngredient = props.ingredient.map((ingredient) => {}

  return (
      <ListGroupItem>Ingredient1 </ListGroupItem>
      {/* <ListGroupItem>Ingredient2 </ListGroupItem>
      <ListGroupItem>Ingredient3 </ListGroupItem>
      <ListGroupItem>Ingredient4 </ListGroupItem>
      <ListGroupItem>Ingredient5 </ListGroupItem> */}

  )

}
export default IngredientsList
