import './App.css';
import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <ValidationComponent />
        <CharComponent />
      </div>
    )
  }
}

export default App;
