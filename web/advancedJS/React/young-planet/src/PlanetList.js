import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Planet from './Planet';

class PlanetList extends Component {
    constructor(props){
        super(props);
        this.state = {age: null, weight: 0}
    }

    render(){
        const planetNames = this.props.planets.map((planet, index) => (
            <Planet 
                key={index} 
                data={planet}
                age={this.state.age}
                weight={this.state.weight}
            />
        ));
        return(
            <div>
                <input 
                    placeholder="Enter your Age"
                    type="text"
                    className="newAge"
                    onChange={(e) => this.setState({age: this.props.getNumber(e.target.value)})}
                />
                <input 
                    placeholder="Enter your weight"
                    type="number"
                    onChange={(e) =>this.setState({weight: e.target.value})}
                />
                <div>Age:-{this.state.age}</div>
                <div>Weight:-{this.state.weight}</div>
                <ul>
                   {planetNames}
                </ul>
            </div>
        )
    }
}


PlanetList.defaultProps = {
    planets : [{name: 'mercury', earthYears: 0.2408467, earthWeight: 0.378},
                {name: 'venus', earthYears: 0.61519726, earthWeight: 0.907}, 
                {name: 'earth', earthYears: 1.0, earthWeight: 1}, 
                {name: 'mars', earthYears: 1.8808158, earthWeight: 0.377}, 
                {name: 'jupiter', earthYears: 11.862615, earthWeight: 0.2528}, 
                {name: 'saturn', earthYears: 29.447498, earthWeight: 0.1064}, 
                {name: 'uranus', earthYears: 84.016846, earthWeight: 0.889}, 
                {name: 'neptune', earthYears: 164.79132, earthWeight: 0.1125}],
    getNumber: (s) => {
        if(s.length > 0){
            return Number(s)
        } else {
            return 0
        }
    }
}



PlanetList.propTypes = {
    planet: PropTypes.arrayOf(PropTypes.object)
};

export default PlanetList;