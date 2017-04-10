import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMonth, getIngredients } from '../actions';

// import {ListGroup, ListGroupItem} from 'react-bootstrap';

const _renderIngredients = (ingredients) => {
  console.log('src/components/IngredientsList/_renderIngredients');
  if (ingredients.length === 0) {
    console.log('src/components/IngredientsList/_renderIngredients/ingredientsList.payload.length===0');
    return 'Select your current month & hit submit to see a list of all the freshest ingredients that can be found!';
  } else {
    console.log('src/components/IngredientsList/_renderIngredients/ingredientsList.payload.length!==0');
    return ingredients.map((item) => {
      console.log('src/components/IngredientsList/_renderIngredients/ingredientsList.ingredientsList===0/ingredientsList.map');
      return <li>{item.food_name}</li>
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('src/components/IngredientsList/mapStateToProps');
  console.log(state.ingredients);
  return {
    ingredients: state.ingredients,
    currentSelectedMonth: state.currentSelectedMonth
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('src/components/ingredientsList/mapDispatchToProps');
  return bindActionCreators({ getIngredients }, dispatch)
}

class IngredientsList extends Component {
  render() {
    console.log('src/components/IngredientsList/render()');
    return (
      <ul>
        {_renderIngredients(this.props.ingredients)}
      </ul>
    );
  }
}

  // const mapDispatchToProps = (dispatch) => {
  //   return bindActionCreators({ /* actions from line 4 */ }, dispatch);
  // }

  // const singleIngredient = props.ingredient.map((ingredient) => {}

export default connect(mapStateToProps)(IngredientsList);
