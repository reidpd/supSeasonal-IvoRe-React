import React from 'react';
// import { Component } from 'react';
import { connect } from 'react-redux';
import months from '../data/months';
import { bindActionCreators } from 'redux';
import { setMonth, getIngredients, getRecipes } from '../actions';

import { Dropdown, Button } from 'semantic-ui-react'
// import { Dropdown, MenuItem, Button } from 'react-materialize';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';

const mapStateToProps = (state, ownProps) => {
  console.log('src/components/MonthDropdown/mapStateToProps');
  console.log('dropdown state', state);
  return ({
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  // console.log('src/components/MonthDropdown/mapDispatchToProps');
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch)
}

class MonthDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange = (event) => {
  //   this.props.setMonth(event.target.value);
  // }

  // componentWillMount = () => {
  //   jquery('select>option:eq(3)').attr('selected', true);
  // }


  handleChange(event) {
    console.log('src/components/MonthDropdown/handleChange');
    console.log('event.target.value', event.target.value);
    this.props.setMonth(event.target.value);
    // this.props.getIngredients(this.props.currentSelectedMonth);
    // this.props.getRecipes(this.props.currentSelectedMonth);
  }

  handleSubmit(event) {
    console.log('src/components/MonthDropdown/handleSubmit');
    event.preventDefault();
    this.props.getIngredients(this.props.currentSelectedMonth);
    this.props.getRecipes(this.props.currentSelectedMonth);
  }

  render() {
    console.log('src/components/MonthDropdown/render');
    return (
      // <div>
      //   <DropDownMenu value={this.props.currentSelectedMonth} onChange={this.handleChange}>
      //     <MenuItem value="jan" primaryText="January" />
      //     <MenuItem value="feb" primaryText="February" />
      //     <MenuItem value="mar" primaryText="March" />
      //     <MenuItem value="apr" primaryText="April" />
      //     <MenuItem value="may" primaryText="May" />
      //     <MenuItem value="jun" primaryText="June" />
      //     <MenuItem value="jul" primaryText="July" />
      //     <MenuItem value="aug" primaryText="Aug" />
      //     <MenuItem value="sep" primaryText="September" />
      //     <MenuItem value="oct" primaryText="October" />
      //     <MenuItem value="nov" primaryText="November" />
      //     <MenuItem value="dec" primaryText="December" />
      //   </DropDownMenu>
      // </div>

      <form onSubmit={this.handleSubmit}>
        <div className="dropdownMonth">
          <Dropdown placeholder='Select A Month' fluid selection options={months} onChange={(event, result) => { const {value} = result; this.props.setMonth(value) } } />
        </div>
        <div className="SearchButton">
          <Button color='blue'>Submit!</Button>
        </div>
      </form>

      /* <form onSubmit={this.handleSubmit}>
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
      </form> */

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthDropdown);
