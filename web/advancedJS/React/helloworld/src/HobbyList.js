import React from 'react';
import './App.css';

function HobbiesList() {
        const listyle = {fontSize: "1.5rem"};
        const hobbies = ["Sleeping", "Eating", "Cuddling"];
        return(
            <ul>
                {hobbies.map((hobby,index) => <li key={index} style={listyle}>{hobby}</li>)}
            </ul>
        )
}

export default HobbiesList;