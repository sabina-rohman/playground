import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Colt',
          hobbies: ['CSS', 'Hiking']
        },
        {
          name: 'Tim',
          hobbies: ['Sailing', 'React']
        },
        {
          name: 'Elie',
          hobbies: ['Music', 'ES2015']
        }
      ]
     }

     setTimeout(() => {
       const randomInstructor = Math.floor(Math.random()* this.state.instructors.length);
       const hobbyIndex = Math.floor(Math.random() * this.state.instructors[randomInstructor].hobbies.length);
       
      //  const instructors = this.state.instructors.slice()
      //  instructors[randomInstructor].hobbies = instructors[randomInstructor].hobbies.slice()
      //  instructors[randomInstructor].hobbies.splice(hobbyIndex, 1)
      //  this.setState({instructors})

      const instructors = this.state.instructors.map((inst, i) => {
        if(i === randomInstructor){
          const hobbies = inst.hobbies.slice();
          // const hobbies = [...inst.hobbies];
          hobbies.splice(hobbyIndex, 1);
          return {...inst, hobbies}
        }
        return inst;
      });
      this.setState({instructors})
     }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h4>{instructor.name}</h4>
        <h3>{instructor.hobbies.join(', ')}</h3>  
      </li>
    ))
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
