import React, { Component } from 'react';
import CardWrapper from 'cards/CardWrapper';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
    margin: auto;
`

export class Deck extends Component {
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
            return <CardWrapper 
                mode={this.props.deckData.mode}
                data={cardData}
                display={this.props.display}
                key={idx}/>
        }, this);
    }
}

const mapStateToProps = state => ({
    display: state.cards.flashCardDisplay
});

export default connect(mapStateToProps, { })(Deck);