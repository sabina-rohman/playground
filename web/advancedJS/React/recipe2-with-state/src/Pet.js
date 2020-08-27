import React from 'react';
import './Pet.css';

const Pet = (props) => {
    const {name, instructions, img} = props;
    const hobbies = props.hobbies.map((h, i) => (
        <li key={i}>{h}</li>
    ))
    return (
        <div className="pet-card">
            <div className="pet-image">
                <img src={img} alt={name} />
            </div>

            <div className="pet-card-content">
                <h3 className="pet-name">{name}</h3>
                <h4>Hobbies:</h4>
                <ul>
                    {hobbies}
                </ul>
                <p>{instructions}</p>
            </div>
        </div>
    )
}

export default Pet;