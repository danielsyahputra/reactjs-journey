import './App.css';
import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent"

class App extends Component {
  state = {
    inputString: "".split(),
    lengthText: 0,
    isTooShort: true,
    textShow: false,
  };

  inputChangeHandler = (event) => {
    const text = event.target.value;
    const length = text.length;
    this.setState({
      inputString: text.split(""),
      lengthText: length,
      isTooShort: length <= 5,
      textShow: length !== 0
    });
  };

  deleteChar = (indexChar) => {
    const chars = [...this.state.inputString];
    chars.splice(indexChar, 1);
    const length = chars.length;
    this.setState({
      inputString: chars,
      lengthText: length,
      isTooShort: length <= 5,
      textShow: length !== 0
    })
  }

  render() {
    let chars = null;

    if (this.state.textShow) {
      chars = this.state.inputString.map((char, index) => {
        return <CharComponent
          char={char}
          click={() => this.deleteChar(index)} />;
      });
    } else {
      chars = "There's no text here!"
    }

    return (
      <div className="App">
        <h1>Char Generator</h1>
        <input type="text" onChange={this.inputChangeHandler} />
        <ValidationComponent
          input={this.state.inputString}
          length={this.state.lengthText}
          isTooShort={this.state.isTooShort}
        />
        {chars}
      </div>
    );
  }
}

export default App;
