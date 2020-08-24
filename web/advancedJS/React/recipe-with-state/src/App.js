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
            id: 0,
            title: 'Pasta',
            instructions: 'Combine tomato sauce and boiled pasta',
            ingredients: ["Pasta", "Tomato sauce"],
            img:"https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 1,
            title: "Milkshake",
            instructions: "Combine ice cream and milk.  Blend until creamy",
            ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
            img:"https://images.unsplash.com/photo-1588775226864-8f71b7b86420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 2,
            title: "Avocado Toast",
            instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
            ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          }
      ],
      nextRecipeId: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    // we call setState to add new recipe to the recipes array and update the nextRecipeId
    // use update function becase nextRecipeId depends on previous recipe id
    this.setState((prevState, props) => {
      // it gets the recipe from onSave() invokation
      const newRecipe = {...recipe, id: this.state.nextRecipeId}
      // return new version of state
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    })
  }

  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id !== id );
    this.setState({recipes});
  }

  render(){
    const {showForm} = this.state;
    return (
      <div className="App">
        {/* when the link in the navbar component is clicked the state in the App.js component can change */}
        {/* so we need to pass a callback function to the Navbar component inside a curly brackets */}
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />

        {/* pass the method handleSave inside RecipeInput Component as a prop */}
        {showForm? 
            <RecipeInput 
                onSave={this.handleSave}
                onClose={() => this.setState({showForm: false})}
               /> : null}
              
        <RecipeList 
          recipes={this.state.recipes} 
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default RecipeApp;
