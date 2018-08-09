import React, { Component } from 'react';
import Card from '../molecules/Card';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    margin: auto;
`

class Deck extends Component {
    render() {
        let builtDeck = this._buildDeck(),
            deck = builtDeck.length ? builtDeck : "No Cards Loaded!";

        return (
            <StyleWrapper>
                <div className="deck-wrapper">
                    {deck}
                </div>
            </StyleWrapper>

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