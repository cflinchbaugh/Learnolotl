import React, { Component } from 'react';
import Card from 'molecules/Card';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
        console.log(this.props);
        return this.props.deckData.cardData.map(function(cardData, idx) {
            return <Card 
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