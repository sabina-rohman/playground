import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return(
        <div>
            <header>
                <h2>Pet App</h2>
                <nav>
                    <li
                    ><a  onClick={props.getNewPet}>New Pet</a></li>
                    <li><a>Home</a></li>
                    <li><a>Sign In</a></li>
                    <li><a>Register</a></li>
                </nav>
            </header>
        </div>
    )
}

Navbar.defaultProps = {
    getNewPet(){}
}

Navbar.propTypes = {
    getNewPet: PropTypes.func
}

export default Navbar;