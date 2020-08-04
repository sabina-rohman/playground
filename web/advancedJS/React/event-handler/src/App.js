import React, { Component } from 'react';
import './App.css';

// SECOND PRACTICE

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: 'sabina'}
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    this.setState((prevState, props) => ({
      name: prevState.name.toUpperCase()
    }))
  }
  render(){
    return(
      <div className="App">
        <p>{this.state.name}</p>
        <button onClick={this.clickEvent} >CLICK ME</button>
      </div>
    )
  }
}

export default App;

{/* <form onSubmit={(e) => {
  e.preventDefault();
  const data = [...this.state.data,
                this.state.inputText];
  this.setState({data, inputText: ''});
}}>
<input 
  type="text" 
  name='inputText'
  value={this.state.inputText}
  onChange={(e) => {
    this.setState({inputText: e.target.value})
  }}
/>
</form> */}
