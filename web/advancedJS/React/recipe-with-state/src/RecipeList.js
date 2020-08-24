import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component{
    render(){
        const { recipes, onDelete } = this.props;
        const recipesList = recipes.map((r) => (
            <Recipe key={r.id} {...r} onDelete={onDelete} />
        ))
        return(
            <div className="recipe-list">
                {recipesList}
            </div>
        )
    }
}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
}

export default RecipeList;