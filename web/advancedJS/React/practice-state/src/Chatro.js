import React from 'react';
import PropTypes from 'prop-types';

function Chatro(props) {
    const style = {border: '2px solid red'}
    return(
        <div style={style}>
            <h1>{props.naam}</h1>
            <h3>{props.boyosh}</h3>
        </div>
    )
}

Chatro.defaultProps = {
    boyosh: 10
}

Chatro.propTypes ={
    naam : PropTypes.string.isRequired
}

export default Chatro;