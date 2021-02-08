import './App.css';
import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

  state = {
    todo: [
      { activity: "Kerjain soal leetcode" },
      { activity: "Belajar react dan express js"}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <p>Apa saja yang harus dikerjakan hari ini</p>
        <UserInput />
        <UserOutput activity={this.state.todo[0].activity} />
        <UserOutput activity={this.state.todo[1].activity} />
      </div>
    );
  }
}

export default App;
