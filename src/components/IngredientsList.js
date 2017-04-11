import React, { Component } from 'react';
import { connect } from 'react-redux';

import './IngredientsList.css';
import { Row, Col, Chip } from 'react-materialize';

const _renderIngredients = (ingredients) => {
  console.log('src/components/IngredientsList/_renderIngredients');
  console.log('ingredients === ', ingredients);
  if (ingredients.length === 0) {
    console.log('src/components/IngredientsList/_renderIngredients/ingredients.length===0');
    return 'Select your current month & hit submit to see a list of all the freshest ingredients that can be found!';
  } else if (ingredients === 'Ingredients Loading!') {
    return 'Ingredients Loading!';
  } else {
    console.log('src/components/IngredientsList/_renderIngredients/ingredients.length!==0');
    return ingredients.map((item) => {
      console.log('src/components/IngredientsList/_renderIngredients/ingredients.length===0/ingredientsList.map');
      if (item.food_name === '') { return '' } else {
        return    <Chip className="ingredientChip">
                    {item.food_name}
                  </Chip>
      }
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('src/components/IngredientsList/mapStateToProps');
  console.log('state.ingredients === ', state.ingredients);
  return {
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  }
}

class IngredientsList extends Component {
  render() {
    console.log('src/components/IngredientsList/render()');
    return (
      <Row>
        <Col s={12}>
          {_renderIngredients(this.props.ingredients)}
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps)(IngredientsList);
