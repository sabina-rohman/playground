import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

const InstructorItem = props => {
    return (
      <li>
        <h3>{props.name}</h3>
        <h4>Hobbies: {props.hobbies.join(', ')}</h4>
      </li>
    );
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

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
        const instructorIndex = Math.floor(Math.random() * this.state.instructors.length);
        const hobbyIndex = Math.floor(Math.random() * this.state.instructors[instructorIndex].hobbies.length);

        const instructors = this.state.instructors.map((instructor, index) => {
          if(index === instructorIndex){
            const hobbies = [...instructor.hobbies];
            // const hobbies = instructor.hobbies.slice();
            hobbies.splice(hobbyIndex, 1)
            return {...instructor, hobbies}
          }
          return instructor;
        })
        this.setState({instructors});
      },5000);
    }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem 
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
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
