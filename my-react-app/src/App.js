import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
        {name:"Sabina", age:31},
        {name:"Monsur", age:37},
        {name:"Aydin", age:7}
      ],
      otherState: 'some other value'
    }
    
    switchNameHandler = (newAge) => {
      this.setState({
        persons: [
          {name:"Sabina Barbhuiya", age:newAge},
          {name:"Monsur", age:36  },
          {name:"Aydin", age:7}
        ]
      });
    }

    nameChangeHandler = (event) => {
      this.setState({
        persons: [
          {name:"Sabina Barbhuiya", age:31},
          {name: event.target.value, age:36  },
          {name:"Aydin", age:7}
        ]
      });
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
        <h1>Hi, I'm a react app</h1>
        <p>This is working!</p>
        <button 
        style={style}
        onClick={() => {this.switchNameHandler(20)}}>Switch names</button>

        <Person 
        name={this.state.persons[0].name}
         age={this.state.persons[0].age} />

        <Person
         change={this.nameChangeHandler} 
         click={this.switchNameHandler.bind(this, 29)} 
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}>Hobbies: Racing
         </Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}


export default App;


 
