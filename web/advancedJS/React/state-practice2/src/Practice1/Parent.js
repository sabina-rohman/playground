import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component{
    constructor(props){
        super(props);

        this.state = {
            children : [
                {name: 'Umer', age: 8},
                {name: 'Abu', age: 5}
            ]
        }
    }

    render(){
        const {children} = this.state;
        const listOfChildComponents = children.map((childObj, i) => (
            <Child key={i}
                data={childObj} />
        ))
        return(
            <div>
                <div>My name is {this.props.name}</div>
                <p>My Children are: </p>
                <ul>
                    {listOfChildComponents}
                </ul>
            </div>
        )
    }
}

export default Parent;