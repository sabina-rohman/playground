import React from 'react';
import './Box.css';

const Box = props => {
    return(
        <div style={{backgroundColor: props.color}} className='box-common' >{props.color}</div>
        )
  }

export default Box;