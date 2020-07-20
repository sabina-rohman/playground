import React from 'react';
import './Pet.css';
import PropTypes from 'prop-types';

function Pet(props){
    const {name, instruction, img} = props;
    const hobbies = props.hobbies.map((h, index) => (
        <li key={index}>{h}</li>
    ))
    
    return (
        <div className="pet-card">
            <div className="pet-card-img">
                <img src={img} alt={name} />
            </div>
            <div className="pet-card-content">
                <h3 className="pet-name">{name}</h3>
                <h4>Hobbies: </h4>
                <ul className="list">
                    {hobbies}
                </ul>
                <h4>Instructions: </h4>
                <p>{instruction}</p>
            </div>
        </div>
    )
}

Pet.propTypes = {
    name: PropTypes.string.isRequired,
    instruction: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Pet;