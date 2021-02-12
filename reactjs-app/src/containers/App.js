import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
    // All pseudo-selector have to wrapped in quotation marks

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    // Don't forget to wrap our application with StyleRoot component provided by Radium
    return (
      <div className={classes.App}>
        <Cockpit
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={ this.state.persons } />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;