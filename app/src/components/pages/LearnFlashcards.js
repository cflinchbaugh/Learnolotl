import React, { Component } from 'react';
import DeckNavigation from 'organisms/DeckNavigation';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
`

class LearnFlashcards extends Component {

    constructor(props) {
        super(props);

        this.handleClickDisplay = this.handleClickDisplay.bind(this);
    }

    render() {
        let data = this._buildData();

        return (
            <StyleWrapper>
            <div className="flashcards">
                <h1>Flashcards</h1>

                <div className="deck-navigation-placeholder">
                    <DeckNavigation {...data}/>
                </div>
            </div>
            </StyleWrapper>
        );
    }

    _buildData() {
        let data = {
            deckData: this._buildDeckData()
        }

        return data;

    }

    _buildDeckData() {
        console.log(this.props.display);
        let deckData = {
                mode: 'english',
                cardData: this.fetch(this.props.idx),
                display: this.props.display,
                handleClickDisplay: this.handleClickDisplay
            };

        return deckData;
    }

    // Obviously this is not a real fetch right now,
        // but with a little TLC and a lot of grinding,
        // I'm pretty sure it can reach Mega-level 
        // digivolution in no time
    fetch(idx) {
        // console.log(this.props);
        let results = [],
            response = this.props.items,
            // validatedIdx = this._validateIdx(idx, response.length);
            validatedIdx = idx;
            

        // Build response, return an array so we can potentially
            // send more than one card at a time
            if (typeof(response[validatedIdx]) !== 'undefined') {
                results.push(response[validatedIdx]);
            }
        return results;
    }

    
    handleClickDisplay(e) {
        // console.log(e);
        
        // this.setState((prevState, props) => {
        //     return {display: e};
        // });
    }
}

const mapStateToProps = state => ({
    items: state.cards.items,
    idx: state.cards.flashCardIdx,
    display: state.cards.flashCardDisplay
});

export default connect(mapStateToProps, { })(LearnFlashcards);