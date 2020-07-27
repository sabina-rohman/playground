import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const PateintItem = props => {
  return (
      <li>
        <h3>{props.name}</h3>
        <h4>{props.diseases.join(', ')}</h4>
     </li>
  )
}

PateintItem.propTypes = {
  name: PropTypes.string,
  diseases: PropTypes.arrayOf(PropTypes.string)
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
          pateints: [
            {
              name: 'Shyam',
              diseases: ['hand and foot disease', 'Cold']
            },
            {
              name: 'Madhuri',
              diseases: ['Auto-immune disorder ', 'Flu']
            },
            {
              name: 'Sachin',
              diseases: ['Eczema', 'Psorasis']
            }
          ]
    }

    setTimeout(() => {
      const pateintIndex = Math.floor(Math.random() * this.state.pateints.length);
      const diseaseIndex = Math.floor(Math.random() * this.state.pateints[pateintIndex].diseases.length);

      const pateints = this.state.pateints.map((pateint, index) => {
        if(index === pateintIndex){
          const diseases = [...pateint.diseases]
          diseases.splice(diseaseIndex, 1);
          return {...pateint, diseases}
        }
        return pateint;
      })
      this.setState({pateints});
    }, 5000)
  }
  render(){
    const pateints = this.state.pateints.map((pateint, index) => (
      <PateintItem 
        key={index}
        name={pateint.name}
        diseases={pateint.diseases}
      />
    ))
    return (
      <div className="App">
        <ul>
          {pateints}
        </ul>
      </div>
    )
  }
}

export default App;
