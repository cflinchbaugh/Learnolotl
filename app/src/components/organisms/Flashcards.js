import React, { Component } from 'react';
import DeckNavigation from '../organisms/DeckNavigation';
import styled from 'styled-components';

const StyleWrapper = styled.div`
`

class FlashCards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            idx: 0,
            display: 'none'
        }

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
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

            // <div>Flashcards Go Here</div>
        );
    }

    _buildData() {
        let data = {
            deckData: this._buildDeckData(),
            handleClickNext: this.handleClickNext,
            handleClickPrevious: this.handleClickPrevious
        }

        return data;

    }

    _buildDeckData() {
        let deckData = {
                mode: 'english',
                cardData: this.fetch(this.state.idx),
                display: this.state.display,
                handleClickDisplay: this.handleClickDisplay
            };

        return deckData;
    }

    // Obviously this is not a real fetch right now,
        // but with a little TLC and a lot of grinding,
        // I'm pretty sure it can reach Mega-level 
        // digivolution in no time
    fetch(idx) {
        let results = [],
            response = this.props.cardData,
            validatedIdx = this._validateIdx(idx, response.length);
            

        // Build response, return an array so we can potentially
            // send more than one card at a time
            if (typeof(response[validatedIdx]) !== 'undefined') {
                results.push(response[validatedIdx]);
            }
        return results;
    }

    _validateIdx(idx, responseLen) {
        let validatedIdx = idx;
        
        // Lower-bound check
        if (idx < 0) {
            validatedIdx = 0;
            
            this._reboundIdx(validatedIdx);
        }

        // Upper-bound check
        if (idx >= responseLen && idx !== 0) {
            validatedIdx = (responseLen - 1);
            
            this._reboundIdx(validatedIdx);
        }
        
        return validatedIdx;
    }

    _reboundIdx(validIdx) {
        console.warn('Out of bounds: resetting to ' + validIdx);

        this.setState((state) => ({
            idx: validIdx
        }));
    }

    handleClickNext() {
        let updatedIdx = this.state.idx += 1;

        this._updateNavigationState(updatedIdx);
        
    }
    handleClickPrevious() {
        let updatedIdx = this.state.idx -= 1;

        this._updateNavigationState(updatedIdx);
    }
    
    _updateNavigationState(updatedIdx) {
        this.setState((state) => ({
            idx: updatedIdx,
            display: 'none'     //To avoid showing the answer immediately
        }));
    }

    handleClickDisplay(e) {
        this.setState((prevState, props) => {
            return {display: e};
        });
    }
}

export default FlashCards;