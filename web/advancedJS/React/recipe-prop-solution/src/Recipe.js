 import React from 'react';
import './Recipe.css';

function Recipe(props) {
    const {title, img, instructions} = props;
    // short way of saying => const title = props.title;
    const ingredients = props.ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
    ))
    return ( 
        <div className="recipe-card">
            <div className="recipe-card-image">
                <img src={img} alt={title} />
            </div>
            <div className="recipe-card-content">
                <h3 className="recipe-title"> Recipe {title}</h3>
                <h4>Ingredients:</h4>
                <ul>
                    {ingredients}
                </ul>
                <h4>Instructions:</h4>
                <p>{instructions}</p>
            </div>
        </div>
     );
}

export default Recipe;