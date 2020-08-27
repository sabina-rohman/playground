import React, {Component} from 'react';
import Pet from './Pet';
import './PetList.css';

class PetList extends Component{
    render(){
        const {pets} = this.props;
        const petsList = pets.map((p) => (
            <Pet key={p.id} {...p} />
        ))
        return(
            <div className="pet-list">
                {petsList}
            </div>
        )
    }
}

export default PetList;