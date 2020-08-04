import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: 'aydin'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState((prevState,props) => (
      {name: prevState.name.toUpperCase(), color:'red'}
    ))
  }
  

  render(){
    const style = {color: this.state.color}
    return(
      <div className="App">
        <p>{this.state.name}</p>
        <button type="text" onClick={this.handleClick} >CLICK ME!</button>
      </div>
    )
  }
}

export default App;
