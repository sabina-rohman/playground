import React from 'react';
import './Box.css';

const Box = props => {
    return(
        <div style={{
                      // background: "linear-gradient(#e66465, #9198e5);" 
                      backgroundImage: 'linear-gradient(to bottom, ' + props.color + ', #FFFF99)'
                    }} 
              className='box-common' >
            {props.color}
        </div>
        )
  }

export default Box;