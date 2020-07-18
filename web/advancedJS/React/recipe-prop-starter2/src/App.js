import React from 'react';
import './App.css';

import Navbar from './Navbar';
import RecipeList from './RecipeList';

function RecipeApp() {
  return (
     <div className="App">
       <Navbar />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;
