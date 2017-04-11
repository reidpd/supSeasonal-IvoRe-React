import React, {Component} from 'react';
// import {FieldGroup} from 'react-bootstrap';
// import LogIn from './components/Login_page';

import NavBar from './components/NavBar';
import IngredientsList from './components/IngredientsList';
import RecipesList from './components/RecipesList';
import './Home.css';

export default class Home extends Component {

  render() {
    console.log('src/Home.js/render');
    return (
      <div className="Home">
        <div className="Home-header">
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
