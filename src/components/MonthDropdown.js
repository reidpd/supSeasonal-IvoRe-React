import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMonth, fetchIngredients, fetchRecipes, getIngredients, getRecipes } from '../actions';

// import { DropdownButton } from 'react-bootstrap';
// import {NavDropdown, MenuItem, Nav} from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => {
  console.log('src/components/MonthDropdown/mapStateToProps');
  return ({
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  console.log('src/components/MonthDropdown/mapDispatchToProps');
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch)
}

class MonthDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'jan'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('src/components/MonthDropdown/handleChange');
    console.log('event.target.value', event.target.value);
    this.props.setMonth(event.target.value);
  }

  handleSubmit(event) {
    console.log('src/components/MonthDropdown/handleSubmit');
    event.preventDefault();
    this.props.getIngredients(this.props.currentSelectedMonth);
  }

  render() {
    console.log('src/components/MonthDropdown/render');
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your current month for fresh ingredients:
          <select value={this.props.currentSelectedMonth} onChange={this.handleChange}>
            <option value="jan">January</option>
            <option value="feb">February</option>
            <option value="mar">March</option>
            <option value="apr">April</option>
            <option value="may">May</option>
            <option value="jun">June</option>
            <option value="jul">July</option>
            <option value="aug">August</option>
            <option value="sep">September</option>
            <option value="oct">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthDropdown);
