import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMonth, getRecipes } from '../actions';

// import {ListGroup, ListGroupItem} from 'react-bootstrap';

const _renderRecipes = (recipes) => {
  // console.log('src/components/RecipesList/_renderRecipes');
  if (recipes.length === 0) {
    return 'Select your current month & see a list of awesome recipes that include ingredients listed above!'
  } else {
    // console.log('src/components/RecipesList/_renderRecipes/length>0');
    return recipes.map((item) => {
      return <div>
        <img src={item.image} />
        <header>{item.title}</header>
        <div>{item.servings}</div>
        <div>{item.readyInMinutes}</div>
        <div>
          <ul>
            {_renderRecipeExtendedIngredients(item.extendedIngredients)}
          </ul>
        </div>
        <div>
          {item.instructions}
        </div>
      </div>
    })
  }
}

const _renderRecipeExtendedIngredients = (ingredients) => {
  return ingredients.map((ingr) => {
    return <div>
      <img src={ingr.image} />
      <p>{ingr.name}</p>
      <p>{ingr.originalString}</p>
    </div>
  })
}

const mapStateToProps = (state, ownProps) => {
  console.log('src/components/recipesList/mapStateToProps');
  console.log(state.recipes);
  return {
    recipes: state.recipes,
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


  // const singleIngredient = props.ingredient.map((ingredient) => {}

  // return (
  //     <ListGroupItem>Ingredient1 </ListGroupItem>
  //     {/* <ListGroupItem>Ingredient2 </ListGroupItem>
  //     <ListGroupItem>Ingredient3 </ListGroupItem>
  //     <ListGroupItem>Ingredient4 </ListGroupItem>
  //     <ListGroupItem>Ingredient5 </ListGroupItem> */}
  //
  // )

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
