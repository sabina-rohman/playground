import React from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import './PetList.css';

function PetList(props){
    const pets = props.pets.map((pet, index) => (
        <Pet key={index} {...pet} />
    ))
                                
    return(
        <div className="pet-list">
            {pets}
        </div>
    )
}

PetList.defaultProps = {
    pets: [
        {
            name:"Fluffy",
            hobbies: ['Playing with butterflies', 'Cuddling'],
            instruction: 'Scratch her back, she likes it',
            img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        },
        {
            name: 'Doggie',
            hobbies: ['Eating', 'Biting'],
            instruction: 'Stay away',
            img: "https://images.unsplash.com/photo-1533069503512-c7d739db4bdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        },
        {
            name: "Birdie",
            hobbies: ['Singing', 'Napping'],
            instruction: 'Feed her on time, gets cranky',
            img: "https://images.unsplash.com/photo-1589924530350-de5b83173fd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        }
    ]
}

PetList.propTypee ={
    pets : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PetList;