import React, { Component } from 'react';
import Card from '../molecules/Card';

class Deck extends Component {
    render() {
        let deck = this._buildDeck();

        if (deck.length) {
            return (
                <div className="deck-wrapper">
                    {deck}
                </div>
            );
        }
        return (
            <div className="deck-wrapper">
                Empty  
            </div>
        )
    }

    _buildDeck() {
        return this.props.deckData.cardData.map(function(cardData, idx) {
            return <Card 
                mode='hiragana'
                data={cardData}
                display={this.props.deckData.display}
                handleClickDisplay={this.props.deckData.handleClickDisplay}
                key={idx}/>
        }, this);
    }
}

export default Deck