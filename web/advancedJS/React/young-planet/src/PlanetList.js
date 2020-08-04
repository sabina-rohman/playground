import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Planet from './Planet';

class PlanetList extends Component {
    constructor(props){
        super(props);

        this.state = {fontSize: '1.5em'}

        // setInterval(() => {
        //     const color = 'white'? 'black' : 'white'
        //     const fontSize = '1.5em'? '3em' : '1.5em'
        //     this.setState({fontSize: fontSize, color: color})
        // }, 300)
    }
    render(){
        const planetNames = this.props.planets.map((planet, index) => (
            <Planet 
                key={index} 
                data={planet} 
            />
        ));
        return(
            <div style={{backgroundColor: 'black', fontSize: this.state.fontSize}}>
                <ul>
                   {planetNames} 
                </ul>
            </div>
        )
    }
}

PlanetList.defaultProps = {
    planets : [{name: 'mercury', earthYears: 0.2408467},
                {name: 'venus', earthYears: 0.61519726}, 
                {name: 'earth', earthYears: 1.0}, 
                {name: 'mars', earthYears: 1.8808158}, 
                {name: 'jupiter', earthYears: 11.862615}, 
                {name: 'saturn', earthYears: 29.447498}, 
                {name: 'uranus', earthYears: 84.016846}, 
                {name: 'neptune', earthYears: 164.79132}]
}



PlanetList.propTypes = {
    planet: PropTypes.arrayOf(PropTypes.object)
};

export default PlanetList;