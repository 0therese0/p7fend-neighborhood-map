import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SquareAPI from "./API"

class App extends Component {

  componentDidMount() {
    SquareAPI.search({

    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
