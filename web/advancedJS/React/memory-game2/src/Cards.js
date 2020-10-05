import React, { Component } from 'react';
import Card from './Card';
import shuffle from 'shuffle-array';
import CardState from './CardState';

class Cards extends Component {
    constructor(props){
        super(props);
        let cards = [
            {id: 1, color: 'purple', cardState: CardState.HIDING},
            {id: 2, color: 'purple', cardState: CardState.HIDING},
            {id: 3, color: 'pink', cardState: CardState.HIDING},
            {id: 4, color: 'pink', cardState: CardState.HIDING},
            {id: 5, color: 'yellow', cardState: CardState.HIDING},
            {id: 6, color: 'yellow', cardState: CardState.HIDING},
            {id: 7, color: 'red', cardState: CardState.HIDING},
            {id: 8, color: 'red', cardState: CardState.HIDING},
            {id: 9, color: 'green', cardState: CardState.HIDING},
            {id: 10, color: 'green', cardState: CardState.HIDING},
            {id: 11, color: 'blue', cardState: CardState.HIDING},
            {id: 12, color: 'blue', cardState: CardState.HIDING},
            {id: 13, color: 'brown', cardState: CardState.HIDING},
            {id: 14, color: 'brown', cardState: CardState.HIDING},
            {id: 15, color: 'orange', cardState: CardState.HIDING},
            {id: 16, color: 'orange', cardState: CardState.HIDING},
        ];

        cards = shuffle(cards);
        this.state = {cards};
      }

    handleClick(id){
       const selectedCard = this.state.cards.filter(c => c.id === id)[0];

       if(selectedCard.cardState === CardState.MATCHING){
            return;
       }else if(selectedCard.cardState === CardState.SHOWING){
            return;
       }else{
        // clone this.state.cards and store in a variable x
        const oldState = [...this.state.cards];
        // map items in x
        const newState = oldState.map(c => {
             // if id not equal to card id return as it is.
            if(c.id === id){
                return {...c, cardState: CardState.SHOWING}
            } else {
                return c;
            }
        })
       
        this.setState({cards: newState});
       }
    }

    render(){
        const cardComponents = this.state.cards.map((card) => (
            <Card 
                key={card.id} 
                onClick={() => this.handleClick(card.id)}
                {...card}
             />
        ))
        return (
            <div>
                <ul>
                    {cardComponents}
                </ul>
            </div>
        )
    }
}

export default Cards;