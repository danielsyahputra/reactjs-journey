// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Daniel', age: 19 },
      { name: 'Harry', age: 20 },
      { name: 'Hermione', age: 19},
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // Don't do this
    //this.state.persons[0] = 'Daniel Syahputra';
    this.setState({
      persons: [
        { name: "Daniel Syahputra", age: 19 },
        { name: "Harry", age: 20 },
        { name: "Hermione", age: 19 },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Swith Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Programming
        </Person>
      </div>
    );

    // This is another way to define jsx
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;

/**
 * Note: our JSX element can just have one root element
 */