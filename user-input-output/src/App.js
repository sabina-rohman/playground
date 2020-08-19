import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

// class App extends Component {
//   state = {
//     username: 'Super Sabina'
//   };

// inputChangedHandler = (event) => {
//   this.setState({username: event.target.value});
// };

//   render() {
//     return (
//       <div className="App">
//         <UserInput 
//             changed={this.inputChangedHandler}
//             currentName={this.state.username} />
//         <UserOutput userName={this.state.username} />        
//         <UserOutput userName={this.state.username} />        
//         <UserOutput userName="Aydin" />        
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component{
  state = {
    username: 'Super Human'
  };

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render(){
    return (
      <div className="App">
        <UserInput 
          changed={this.changeNameHandler}
          name={this.state.username}
         />
        <UserOutput name={this.state.username} />
        <UserOutput name='Monsur' />
        <UserOutput name='Aydin' />
      </div>
    )
  }
}

export default App;