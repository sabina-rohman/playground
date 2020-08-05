import React from 'react';
import './Planet.css';
import PropTypes from 'prop-types'

function Planet(props){
    return(
    <div className="planet" >
        <p>{props.data.name}</p>
        <p>{props.data.earthYears}</p>
        <p>{props.age}</p>
        <p>{props.weight}</p>
        <p>Age in this planet:{props.planetAge(props.data.earthYears, props.age)}</p>
        <p>Weight in this planet:{props.planetWeight(props.data.earthWeight, props.weight)}</p>
    </div>
    )
}


Planet.defaultProps = {
    planetAge: (earthYears, ageInYears) => Number((ageInYears/earthYears).toFixed(2)),
    planetWeight: (earthWeight, weightInKg) => Number((earthWeight*weightInKg).toFixed(2))
}

// Planet.propTypes = {
//     secondsInEarthYear : PropTypes.number
// }

export default Planet;