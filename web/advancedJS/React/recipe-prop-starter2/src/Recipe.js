import React from 'react';

function Recipe(props) {
    const {title} = props;
    // short way of saying => const title = props.title;
    const ingredients = props.ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
    ))
return ( 
    <div>
        <div> Recipe {title}</div>
        <ul>
            {ingredients}
        </ul>
    </div>
    );
}

export default Recipe;