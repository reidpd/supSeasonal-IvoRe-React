import React, {Component} from 'react';
import Login from './components/navBar';

// import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>supSeasonal</h2>
            <Login />
        </div>
      </div>
    );
  }
}


export default App
