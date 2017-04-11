import React, {Component} from 'react';
// import {FieldGroup} from 'react-bootstrap';
// import LogIn from './components/Login_page';

import NavBar from './components/NavBar';
import IngredientsList from './components/IngredientsList';
import RecipesList from './components/RecipesList';
import './App.css';

export default class App extends Component {

  render() {
    console.log('src/App.js/render');
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
          <IngredientsList />
          <RecipesList />
          {/*Insert and image */}
        </div>
      </div>
    );
  }
}


// export default App;
