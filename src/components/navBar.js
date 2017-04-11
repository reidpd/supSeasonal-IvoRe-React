import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setMonth, getIngredients, getRecipes } from '../actions';
import { bindActionCreators } from 'redux';
import MonthDropdown from './MonthDropdown';

const mapStateToProps = (state, ownProps) => {
  console.log('src/components/NavBar/mapStateToProps');
  return ({
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  console.log('src/components/NavBar/mapDispatchToProps');
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch);
}

class NavBar extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <a href="#"><h3>supSeasonal!!</h3></a>
          </div>
          <MonthDropdown />
        </header>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
