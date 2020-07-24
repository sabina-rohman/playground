import React from 'react';
import './App.css';
import Vidyalay from './Vidyalay';

function App() {
  const studentList = [{name: 'Mons', age: 37}, {name: 'Sab', age: 32}]
  return (
    <div className="App">
      <Vidyalay chatros={studentList} />
    </div>
  );
}

export default App;
