import React from 'react';
import Chatro from './Chatro';

function Vidyalay(props) {
    const chatros = props.chatros
    return(
        <div>
            <p>{chatros.length}</p>
            <Chatro naam={'haga'} />
        </div>
    )
}


export default Vidyalay