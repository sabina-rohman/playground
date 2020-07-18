import React from 'react';
import './App.css';
import Recipe from './Recipe';

function RecipeApp() {
  return (
    <div className="App">
      <Recipe 
        title="pasta" 
        ingredients={['flour', 'water']} 
        instructions="Mix ingredients"
        img="https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        />
    </div>
  );
}

export default RecipeApp;
