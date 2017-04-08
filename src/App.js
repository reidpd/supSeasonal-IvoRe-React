import React, {Component} from 'react';
import NavBar from './components/NavBar';
// import {FieldGroup} from 'react-bootstrap';
import Month from './components/MonthDropdown';
import IngredientListItem from './components/SingleIngredient';
import IngredientsList from './components/IngredientsList';
// import LogIn from './components/Login_page';
// import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      months: ""
    }

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
          <Month />
          <IngredientListItem />
          <IngredientsList/>

          {/*Insert and image */}
        </div>
      </div>
    );
  }
}


export default App
