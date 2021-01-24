// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Daniel", age: 19 },
      { name: "Harry", age: 20 },
      { name: "Hermione", age: 19 },
    ],
  });

  const [otherState, setOtherState] = useState({ otherStates: 'some other value' });

  // Di functional component, ketika kita memutasi component maka semua states nya akan di override
  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Don't do this
    //this.state.persons[0] = 'Daniel Syahputra';
    setPersonsState({
      persons: [
        { name: newName, age: 19 },
        { name: "Harry", age: 20 },
        { name: "Hermione", age: 19 },
      ],
    });
  };
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler.bind(this, 'Daniel Syahputra')}>Swith Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click = {switchNameHandler}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Programming
      </Person>
    </div>
  );
}

export default App;

/**
 * Note: our JSX element can just have one root element
 */