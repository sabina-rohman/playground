import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div>
            <header>
                <h2><a>PetProject</a></h2>
                <nav>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Adopt</a></li>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;