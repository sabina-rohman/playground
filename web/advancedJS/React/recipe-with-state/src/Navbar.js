import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <header>
            <h2><a>Recipe App</a></h2>
            <nav>
                <li><a href="#">New Recipe</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </nav>
        </header>
    </div>
    );
}

export default Navbar;