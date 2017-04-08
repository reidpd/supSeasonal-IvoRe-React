import React, {Component} from 'react';
// import {FieldGroup} from 'react-bootstrap';
// import LogIn from './components/Login_page';

import NavBar from './components/NavBar';
import IngredientsList from './components/IngredientsList';
import RecipesList from './components/RecipesList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      recipes: [],
      currentSelectedMonth: "",
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
          <IngredientsList ingrList={ingrList}/>
          <RecipesList recList={recList}/>
          {/*Insert and image */}
        </div>
      </div>
    );
  }
}


export default App
