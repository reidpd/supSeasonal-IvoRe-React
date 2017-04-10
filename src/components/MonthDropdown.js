import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMonth, fetchIngredients, fetchRecipes, getIngredients, getRecipes } from '../actions';

// import { DropdownButton } from 'react-bootstrap';
// import {NavDropdown, MenuItem, Nav} from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';

let monthState;

const mapStateToProps = (state, ownProps) => {
  return ({
    ingredients: getIngredients(state.currentSelectedMonth),
    recipes: getRecipes(state.currentSelectedMonth),
    currentSelectedMonth: monthState
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMonth, getIngredients, getRecipes })
}

class Months extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'jan'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    monthState = this.state.value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your current month for fresh ingredients:
          <select value={this.state.value} onChange={this.handleChange}>
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

///////////////////////////////

// const Months = () => {
//   console.log('there');
//   return (
//     <div>
//       <select>
//           <option
//             onSelect={(event) => {  console.log('jan!'); setMonth(event.target.value);  }}
//             value='jan'>January</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='feb'>February</option>
//           <option
//             onSelect={(event) => {  console.log('selected');  }}
//             value='mar'>March</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='apr'>April</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='may'>May</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='jun'>June</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='jul'>July</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='aug'>August</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='sep'>September</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='oct'>October</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='nov'>November</option>
//           <option
//             onSelect={(event) => {  setMonth(event.target.value);  }}
//             value='dec'>December</option>
//       </select>
//       <input type="submit" onClick={(event) => {  }}></input>
//     </div>
//   );
// };

// export default Months;
export default connect(mapStateToProps, mapDispatchToProps)(Months);
