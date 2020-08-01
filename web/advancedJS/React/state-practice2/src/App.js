import React, { Component } from 'react';
import './App.css';
import ColorBoxes from './ColorBoxesProj/ColorBoxes';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ColorBoxes />
      </div>
    )
  }
}


export default App;