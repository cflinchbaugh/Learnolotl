import React, { Component } from 'react';
import { connect } from 'react-redux';
import LearnFlashcards from './LearnFlashcards';


class LearnFlashcardsContainer extends Component {
    render() {
        let deckNavigationData = this._buildDeckNavigationData();

        return (
            <LearnFlashcards {...deckNavigationData} />
        );
    }

    _buildDeckNavigationData() {
        let data = {
            deckData: {
                mode: this.props.location.state.mode,
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

export default connect(mapStateToProps, { })(LearnFlashcardsContainer);