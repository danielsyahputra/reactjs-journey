import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
    background-color: green;
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: lightgreen;
      color: black;
    },
  `;

class App extends Component {
  state = {
    persons: [
      { id: "abcd1",  name: "Daniel", age: 19 },
      { id: "asdf2",  name: "Harry", age: 20 },
      { id: "qwer3",  name: "Hermione", age: 19 },
    ],
    otherState: "some other value",
    showPersons: false,
  }; 

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {

    // With inline styles we can't assign our component with pseudo-selector and media quiries. 
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      },
    };

    // All pseudo-selector have to wrapped in quotation marks

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    // Don't forget to wrap our application with StyleRoot component provided by Radium
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton onClick={this.togglePersonsHandler}>
          Toggle Person
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;