import React from 'react';
import './Box.css';

const Box = props => {
    return (
        <div style={{backgroundImage: 'linear-gradient(to bottom, ' + props.color + ', #FFFF99)'}} className="box-element" >
            <p>{props.color}</p>
        </div>
    )
}

export default Box;