import React from 'react';
import './Planet.css';
import PropTypes from 'prop-types'

function Planet(props){
    return(
    <div className="planet" >
        <p>{props.data.name}</p>
        <p>{props.data.earthYears}</p>
        <p>Age in this planet:{props.planetAge(props.data.earthYears, 32)}</p>
    </div>
    )
}


Planet.defaultProps = {
    planetAge: (earthYears, ageInYears) => Number((ageInYears/earthYears).toFixed(2))
}

Planet.propTypes = {
    secondsInEarthYear : PropTypes.number
}

export default Planet;