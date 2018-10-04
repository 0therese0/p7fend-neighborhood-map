import React, { Component } from 'react';
import './App.css';
import SquareAPI from "./API"

class App extends Component {

  componentDidMount() {
    SquareAPI.search({
      near: "Phoenix, AZ",
      query: "tacos",
      limit: 10
    }).then(results => console.log(results));
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
