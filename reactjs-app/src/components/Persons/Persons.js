import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {

  // We shouldn't use shouldComponentUpdate if we are checking all properties. 
  //We can choose an alternative way which is replace our extended component to PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   return nextProps.persons !== this.props.persons || nextProps.clicked !== this.props.clicked || nextProps.changed !== this.props.changed;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return {
      message: 'Snapshot!'
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }
  
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;