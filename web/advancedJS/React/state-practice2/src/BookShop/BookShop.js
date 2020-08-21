import React, { Component } from 'react';
import Genre from './Genre';

class BookShop extends Component {
    constructor(props){
        super(props);

        this.state = {
            genre: [
                {
                    name: 'Fiction',
                    products: [
                        { name: 'Bad Dad', price: 4, author: 'David Walliams' },
                        { name: '52 Storey Treehouse', price: 10, author: 'Andy Griffiths' }
                    ]
                },

                {
                    name: 'Non-Fiction',
                    products: [
                        { name: 'Horrible Histories', price: 8, author: 'Terry Deary' },
                        { name: 'Homo Sapiens', price: 5 , author: 'Yuval Noah Harari'}
                    ]
                }

            ]
        }
    }

    render(){
        const {genre} = this.state;
        const listOfGenreComponents = genre.map((genreObj, i) => {
           return <Genre key={i} data={genreObj} />
        })
        return (
            <div>
                {listOfGenreComponents}
            </div>
        )
    }
}

export default BookShop;