import React from 'react';
import './Ebook.css';

const Ebook = (props) => {
    return (
        <div class="ebook-container"> 
            <h1>{props.data.name}</h1>
            <h4>£{props.data.price}</h4>
            <p>--{props.data.author}</p>
        </div>
    )
}

export default Ebook;