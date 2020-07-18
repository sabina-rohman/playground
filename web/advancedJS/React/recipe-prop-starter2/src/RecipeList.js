import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

function RecipeList (props){
    const recipes = props.recipes.map((r, index) => (
        <Recipe key={index} {...r} />
    ))
    return(
        <div className="recipe-list">{recipes}</div>
    )
}

RecipeList.defaultProps = {
    recipes: [
         {
            title: 'Pasta',
            instructions: 'Combine tomato sauce and boiled pasta',
            ingredients: ["Pasta", "Tomato sauce"],
            img:"https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Milkshake",
            instructions: "Combine ice cream and milk.  Blend until creamy",
            ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
            img: "milkshake.jpg"
        },
        {
            title: "Avocado Toast",
            instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
            ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            img: "avocado_toast.jpg"
          }
    ]
}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
}

export default RecipeList;