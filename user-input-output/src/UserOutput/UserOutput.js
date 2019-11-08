import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.name}</p>
            <p>I love coding</p>
        </div>
    );
};

export default userOutput;