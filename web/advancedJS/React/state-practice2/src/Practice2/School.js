import React, { Component } from 'react';
import Student from './Student';
import './School.css';

class School extends Component{
    constructor(props){
        super(props);

        this.state = {
            students: [
                {name: 'Aydin', year: 4, age: 8},
                {name: 'Muskaan', year: 7, age: 12},
                {name: 'Umer', year: 4, age: 8},
                {name: 'Abu', year: 1, age: 5}
            ]
        }
    }

    render(){
        const {students} = this.state;
        const listOfStudentComponents = students.map((studentData, i) => (
            <Student key={i} data={studentData} />
        ))
        return(
            <div className="school-container">
                <div className="heading">The students in {this.props.name} are:</div>
                <ul>
                    {listOfStudentComponents}
                </ul>
                
            </div>
        )
    }
}

export default School;