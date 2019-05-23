import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './data/foods.json'
import FoodList from './components/FoodList';
import 'bulma/css/bulma.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <SearchBar />
          </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div>
          <FoodList foods={foods} />
        </div>
      </div>
    );
  }
}

export default App;
