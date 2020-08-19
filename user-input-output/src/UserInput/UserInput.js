import React from 'react';

const userInput = (props) => {
    const style={
        border:'1px solid red',
        margin: '20px auto',
        textAlign: 'center'
    }
   return <input 
        type="text"
        style={style}
        onChange={props.changed}
    />
};

export default userInput;