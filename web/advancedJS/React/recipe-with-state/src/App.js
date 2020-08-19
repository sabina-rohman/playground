import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      recipes: [
          {
            key: 1,
            title: 'Pasta',
            instructions: 'Combine tomato sauce and boiled pasta',
            ingredients: ["Pasta", "Tomato sauce"],
            img:"https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        },
        {
            key: 2,
            title: "Milkshake",
            instructions: "Combine ice cream and milk.  Blend until creamy",
            ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
            img:"https://images.unsplash.com/photo-1546470427-0d4db154ceb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        },
        {
            key: 3,
            title: "Avocado Toast",
            instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
            ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          }
      ],
      nextRecipeId: 3,
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <RecipeInput />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
