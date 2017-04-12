import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import {FieldGroup} from 'react-bootstrap';
// import LogIn from './components/Login_page';

import NavBar from './components/NavBar';
import MonthDropdown from './components/MonthDropdown';
import IngredientsList from './components/IngredientsList';
import RecipesList from './components/RecipesList';
import './App.css';

export default class App extends Component {
  render() {
    console.log('src/App.js/render');
    return (
      <Router>
        <div>
          {/* <NavBar /> */}
            <div>
              <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
              </ul>
            </div>
            {/* <Route exact path="/" component={NavBar} /> */}
            {/* <Route exact path="/" component={LoginPage} /> */}
            {/* <Route path="/home" component={NavBar} /> */}
            <Route path="/home" component={MonthDropdown} />
            <Route path="/home" component={IngredientsList} />
            <Route path="/home" component={RecipesList} />
          </div>
        </Router>
    );
  }
}
