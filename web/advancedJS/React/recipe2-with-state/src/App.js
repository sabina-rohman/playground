import React, { Component } from 'react';
import './App.css';
import PetList from './PetList';
import Navbar from  './Navbar';
import PetInput from './PetInput';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        pets: [
            {
              id: 0,
              name: 'Rusty',
              hobbies: ['Playing', 'Napping', 'Eating'],
              instructions: 'Take him for walk everyday',
              img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
            },
            {
              id: 0,
              name: 'Snowy',
              hobbies: ['Bathing', 'Napping', 'Barking'],
              instructions: 'Take him for walk everyday',
              img: "https://images.unsplash.com/photo-1562462863-42d40916e6b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
            },
            {
              id: 0,
              name: 'Fluffy',
              hobbies: ['Scratching', 'Eating', 'Yapping'],
              instructions: 'Take him for walk everyday',
              img: "https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            },
          ],
        nextPetId: 3,
        showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(pet){
    this.setState((prevState, props) => {
      const newPet = {...pet, id: this.state.nextPetId}
      return {
        pets: [...this.state.pets, newPet],
        nextPetId: prevState.nextPetId + 1,
        showForm: false
      }
    })
  }

  render(){
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar getNewPet={() => this.setState({showForm: true})} />
        
        {showForm?
          <PetInput 
          onSave={this.handleSave}
          onClose={() => this.setState({showForm: false})} />
          : null}
        
        <PetList pets={this.state.pets} />
      </div>
    );
  }
}

export default App;
