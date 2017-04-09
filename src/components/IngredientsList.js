import React from 'react';
import { connect } from 'react-redux';
// import { setMonth, getIngredients } from '../actions';
// import { bindActionCreators } from 'redux';

import {ListGroup, ListGroupItem} from 'react-bootstrap';



const _renderIngredients = (ingrList) => (
  ingrList
  .map(item => {
    <ListGroupItem>{item.food_name}</ListGroupItem>
  })
)

const IngredientsList =  (ingrList) => {

  const mapStateToProps = (state, ownProps) => {
    return {
      ingrList: state.ingredients
    }
  }

  return (
    <ListGroup>
      {_renderIngredients(ingrList)}
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
