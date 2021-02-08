import './App.css';
import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    todo: [
      { activity: "Kerjain soal leetcode", priority: 5 },
      { activity: "Belajar react dan express js", priority: 4 },
      {
        activity: "Belajar lebih lanjut struktur data dan algoritma",
        priority: 4,
      },
      { activity: "ISI BEBAS!!!", priority: 3 },
    ],
  };

  changeActivity = (event) => {
    this.setState({
      todo: [
        { activity: "Kerjain soal leetcode", priority: 5 },
        { activity: "Belajar react dan express js", priority: 4 },
        {
          activity: "Belajar lebih lanjut struktur data dan algoritma",
          priority: 4,
        },
        { activity: event.target.value , priority: 3 },
      ],
    });
  }

  switchActivity = (newActivity) => {
    this.setState({
      todo: [
        { activity: "Belajar react dan express js", priority: 4 },
        {
          activity: "Belajar lebih lanjut struktur data dan algoritma",
          priority: 4,
        },
        { activity: newActivity, priority: 3 },
        { activity: "Kerjain soal leetcode", priority: 5 },
      ],
    });
  }

  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      cursor: "pointer",
      border: "1px solid blue",
      padding: "8px",
      margin: "10px"
    };

    return (
      <div className="App">
        <h1>Todo List</h1>
        <p>Apa saja yang harus dikerjakan hari ini</p>
        <button style={style} onClick={() => this.switchActivity("Tidur siang!!!! :)")}>
          Switch Activity
        </button>
        <UserInput changed={this.changeActivity} />
        <UserOutput
          activity={this.state.todo[0].activity}
          priority={this.state.todo[0].priority}
        />
        <UserOutput
          activity={this.state.todo[1].activity}
          priority={this.state.todo[1].priority}
        />
        <UserOutput
          activity={this.state.todo[2].activity}
          priority={this.state.todo[2].priority}
        />
        <UserOutput
          activity={this.state.todo[3].activity}
          priority={this.state.todo[3].priority}
        />
      </div>
    );
  }
}

export default App;
