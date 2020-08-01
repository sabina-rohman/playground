import React, { Component } from 'react';
import './App.css';
import ColorBoxes from './ColorBoxesProj/ColorBoxes';

class App extends Component {
  constructor(props){
    super(props);
    // const arrayOfRandomColors = Array(32).fill().map(x => this.props.allColors[random])
    // this.state = {backgroundColor: 'purple', name: 'monsur', randomNum: 0}

    // setInterval(() => {
    //   const myColor = this.state.backgroundColor === 'purple'? 'pink': 'purple'
    //   const myName = this.state.name === 'monsur'? 'sabina': 'monsur'
    //   const random = Math.floor(Math.random() * 32);
    //   this.setState({backgroundColor: myColor, name: myName, randomNum: random});
    // }, 1000)
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