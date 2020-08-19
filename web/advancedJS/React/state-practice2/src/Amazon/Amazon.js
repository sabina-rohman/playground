import React, { Component } from 'react';
import Category from './Category';

class Amazon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {
                    name: 'Clothes',
                    products: [
                        { name: 'Jeans', price: 24 },
                        { name: 'Shirt', price: 12 }
                    ]
                },

                {
                    name: 'Food',
                    products: [
                        { name: 'Pasta', price: 8 },
                        { name: 'Chicken', price: 5 }
                    ]
                }

            ]
        }
    }

    render(){
        const { categories } = this.state;
        const listOfCategoryComponents = categories.map((categoryobj, i) => (
            <Category key={i} data={categoryobj} />
        ))
        return(
            <div>
                {listOfCategoryComponents}
            </div>
        )
    }
}

export default Amazon;