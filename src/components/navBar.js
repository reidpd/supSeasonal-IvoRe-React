import React from 'react';

import { connect } from 'react-redux';
import { setMonth, getIngredients, getRecipes } from '../actions';
import { bindActionCreators } from 'redux';

import Months from './MonthDropdown';

// import {Navbar} from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => {
  return ({
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch);
}

const NavBar = () => {
  return (
    // <div>
    //   would like to render an image associated with the time of the month. might need to be a separate component.
    // </div>
    <nav>
      <header>
        <div>
          <a href="#">supSeasonal</a>
          {/* <div clasName={props.newDate}</div> */}
        </div>
      </header>
      <Months />
    </nav>
  )
}

// string will change, thus requiring mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
