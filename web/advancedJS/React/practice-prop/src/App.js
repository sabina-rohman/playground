import React from 'react';
import './App.css';
import PetList from './PetList';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PetList />
    </div>
  );
}

export default App;
