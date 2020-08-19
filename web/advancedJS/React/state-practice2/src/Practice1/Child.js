import React, { Component } from 'react';

class Child extends Component{

    render(){
        return (
            <div>
                Name: {this.props.data.name}
                Age: {this.props.data.age}
            </div>
        )
    }
}

export default Child;