import React, { Component } from 'react';
import DeckNavigation from 'organisms/DeckNavigation';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
`

class LearnFlashcards extends Component {

    render() {
        let deckNavigationData = this._buildDeckNavigationData();

        return (
            <StyleWrapper>
            <div className="flashcards">
                <h1>Flashcards</h1>

                <div className="deck-navigation-placeholder">
                    <DeckNavigation {...deckNavigationData}/>
                </div>
            </div>
            </StyleWrapper>
        );
    }

    _buildDeckNavigationData() {
        let data = {
            deckData: {
                mode: 'english',
                cardData: this.fetch(this.props.idx),
                display: this.props.display
            }
        }

        return data;
    }

    // Obviously this is not a real fetch right now,
        // but with a little TLC and a lot of grinding,
        // I'm pretty sure it can reach Mega-level 
        // digivolution in no time
    fetch(idx) {
        let results = [],
            response = this.props.items,
            validatedIdx = idx;

        // Build response, return an array so we can potentially
            // send more than one card at a time
            if (typeof(response[validatedIdx]) !== 'undefined') {
                results.push(response[validatedIdx]);
            }
        return results;
    }
}

const mapStateToProps = state => ({
    items: state.cards.items,
    idx: state.cards.flashCardIdx,
    display: state.cards.flashCardDisplay
});

export default connect(mapStateToProps, { })(LearnFlashcards);