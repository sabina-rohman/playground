import React from 'react';
import './Card.css';
import CardState from './CardState';

const Card = (props) => {
    let {id, color, cardState, onClick} = props;
    const style = {};
    if(cardState === CardState.SHOWING || cardState === CardState.MATCHING){
        style.backgroundColor = color;
    } else {
        style.backgroundColor = "gray";
    }
    return (
        <div className="card"
            style={style}
            onClick={onClick}
            >
            <h1>{id}</h1>
        </div>
    )
}

export default Card;