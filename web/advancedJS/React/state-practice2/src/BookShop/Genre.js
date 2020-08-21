import React from 'react';
import Ebook from './Ebook';
import './Genre.css';

const Genre = (props) => {
    const ebookComponents = props.data.products.map((bookObj, i) => (
        <Ebook key={i} data={bookObj} />
    ))

    return (
        <div className="genre-container">
            <h1>{props.data.name}</h1>
            <p>{ebookComponents}</p>
        </div>
    )
}

export default Genre;