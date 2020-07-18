import React from 'react';
import './Pet.css';
import HobbyList from './HobbyList';

function Pet() {
        return (
            <div className="card">
                <h2 className="name">Moxie</h2>
                <img 
                    src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=50"
                    alt="Moxie" />    
                <h5 style={{fontSize: '2em', margin: '2px'}}>  Hobbies:</h5>
                    <HobbyList />
            </div>
        )
}

export default Pet;