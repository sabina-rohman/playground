import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <div>
            <header>
            <h2><a>Recipe App</a></h2>
            <nav>
                <li><a onClick={props.onNewRecipe}>New Recipe</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </nav>
        </header>
    </div>
    );
}

Navbar.defaultProps = {
    onNewRecipe() {}
}

Navbar.propType = {
    onNewRecipe: PropTypes.func
}

export default Navbar;

