import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
        {id:'56673h', name:"Sabina", age:31},
        {id:'899090', name:"Monsur", age:37},
        {id:'668778', name:"Aydin", age:7} 
      ],
      otherState: 'some other value',
      showPersons: false
    }

    nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      // const person = Object.assign({}, this.state.persons[personIndex])
      
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons: persons} );
    }

    deletePersonsHandler = (personIndex) => {
      // const persons = this.state.persons.slice();        
      // MODERN WAY-SPREAD OPERATOR
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

    render() {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      let persons = null;

      if(this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangeHandler(event, person.id)} />
            })}
          </div> 
        );
      }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is working!</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Switch names</button>
        {persons}        
      </div>
    );
  }
}


export default App;


 
