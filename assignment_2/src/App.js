import './App.css';
import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent"

class App extends Component {

  state = {
    inputString: "".split(),
    lengthText: 0,
    isTooShort: true
  }

  inputChangeHandler = (event) => {
    const text = event.target.value;
    this.setState({
      inputString: text.split(''),
      lengthText: text.length,
      isTooShort: (text.length <= 5)
    })
  }

  render() {

    const chars = this.state.inputString.map((char) => {
      return <CharComponent char={char} />;
    });

    return (
      <div className="App">
        <h1>Char Generator</h1>
        <input type="text" onChange={this.inputChangeHandler} />
        <ValidationComponent
          input={this.state.inputString}
          length={this.state.lengthText}
          isTooShort={ this.state.isTooShort } />
        {chars}
      </div>
    )
  }
}

export default App;
