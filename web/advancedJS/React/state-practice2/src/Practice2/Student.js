import React from 'react';

const Student = (props) => {
    return(
        <div>
            <h1>Name: {props.data.name}</h1>
            <h4>Year: {props.data.year}</h4>
            <p>Age: {props.data.age}</p>
        </div>
    )
}

export default Student;