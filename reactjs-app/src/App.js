// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <Person />
        <Person />
        <Person />
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