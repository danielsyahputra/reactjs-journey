import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Daniel", age: 19 },
      { name: "Harry", age: 20 },
      { name: "Hermione", age: 19 },
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 19 },
        { name: "Harry", age: 20 },
        { name: "Hermione", age: 20 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Daniel', age: 19 },
        { name: event.target.value, age: 20 },
        { name: "Hermione", age: 20 },
      ],
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !(this.state.showPersons)
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Toggle Person
        </button>
        {
          this.state.showPersons ?
            <div >
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Harry Potter!")}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
            </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;