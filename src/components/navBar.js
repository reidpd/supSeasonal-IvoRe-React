import React from 'react';

import { connect } from 'react-redux';
import { setMonth, getIngredients, getRecipes } from '../actions';
import { bindActionCreators } from 'redux';
import MonthDropdown from './MonthDropdown';
import {Navbar,Row, Input} from 'react-materialize';

// import {Navbar} from 'react-bootstrap';

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

const NavBar = () => {
  console.log('src/components/NavBar/const_NavBar()');
  return (
        <MonthDropdown/>
  )
}

// string will change, thus requiring mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
