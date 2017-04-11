import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRecipes } from '../actions';

import { Card, CardTitle } from 'react-materialize';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table';

const _renderRecipeExtendedIngredients = (ingredients) => {
  console.log('src/components/RecipesList/_renderRecipeExtendedIngredients');
  return ingredients.map((ingr) => {
    return  <TableRow>
      <TableRowColumn><img src={ingr.image} alt="" /></TableRowColumn>
      <TableRowColumn>{ingr.name}</TableRowColumn>
      <TableRowColumn>{ingr.originalString}</TableRowColumn>
    </TableRow>
  })
}

const _renderRecipes = (recipes) => {
  console.log('src/components/RecipesList/_renderRecipes');
  console.log('recipes === ', recipes);
  if (recipes.length === 0) {
    return 'Select your current month & see a list of awesome recipes that include ingredients listed above!'
  } else if (recipes === 'Recipes Loading!') {
    return 'Recipes Loading!';
  } else {
    console.log('src/components/RecipesList/_renderRecipes/length>0');
    return recipes.map((item) => {
      return (
        <div>
          <Card header={<CardTitle reveal image={item.image} waves="light" />}
                title={item.title}
                reveal={
                  <div>
                    <Table>
                      <TableHeader>
                        <TableHeaderColumn>Visual</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                      </TableHeader>
                      <TableBody>
                        {_renderRecipeExtendedIngredients(item.extendedIngredients)}
                      </TableBody>
                    </Table>
                    <p>{item.instructions}</p>
                  </div>
                  }>
                   <p>Ready to Eat in {item.readyInMinutes} Minutes</p>
                   <p>Yields {item.servings} Servings</p>
          </Card>
        </div>
      )
    })
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log('src/components/recipesList/mapStateToProps');
  console.log('state.recipes === ', state.recipes);
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
    currentSelectedMonth: state.currentSelectedMonth
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('src/components/recipesList/mapDispatchToProps');
  return bindActionCreators({ getRecipes }, dispatch);
}

class RecipesList extends Component {
  render() {
    console.log('src/components/RecipesList/render()');
    return (
      <div>
        {_renderRecipes(this.props.recipes)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
