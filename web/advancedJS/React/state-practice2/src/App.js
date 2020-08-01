import React, { Component } from 'react';
import './App.css';
import Boxes from './ColorBoxesWedding/Boxes';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Boxes />
      </div>
    )
  }
}


export default App;