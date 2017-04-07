import React, {Component} from 'react';
import Login from './components/navBar';
import NavBar from './components/navBar';
import Month from './components/month_dropdown'
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

          {/*Insert and image */}
        </div>
      </div>
    );
  }
}


export default App
