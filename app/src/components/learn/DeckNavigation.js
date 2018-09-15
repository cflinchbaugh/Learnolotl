import React, { Component } from 'react';
import Deck from 'organisms/Deck';
import styled from 'styled-components';
import NavigationButton from 'buttons/NavigationArrow.js';
import { connect } from 'react-redux';
import { fetchCard } from '../../actions/cardActions';

const StyleWrapper = styled.div`
    .deck-navigation {
        justify-content: center;
        min-height: 350px;
    }

    .deck {
        width: 100%;
        display: flex;
        margin-bottom: 15px;
    }

    .navigation-wrapper {
        text-align: center;
    }

    .navigation-button-wrapper {
        display: inline-block;
        margin: 0 10px;
    }

`

class DeckNavigation extends Component {
    constructor(props) {
        super(props);

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
    }

    handleClickNext() {
        let updatedIdx = this.props.idx + 1,
            validatedIdx = this._validateIdx(updatedIdx);

        this.props.fetchCard(validatedIdx);
    }

    handleClickPrevious() {
        let updatedIdx = this.props.idx - 1,
            validatedIdx = this._validateIdx(updatedIdx);

        this.props.fetchCard(validatedIdx);
    }

    _validateIdx(idx, responseLen = this.props.items.length) {
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
    }

    render() {
        return (
            <StyleWrapper>
                <div className="deck-navigation">

                    <div className="deck">
                        <Deck deckData={this.props.deckData}/>
                    </div>

                    <div className="navigation-wrapper">
                        <div className="navigation-button-wrapper">
                            <NavigationButton 
                                type="previous"
                                onClickFunction={this.handleClickPrevious}/>
                        </div>

                        <div className="navigation-button-wrapper">
                            <NavigationButton 
                                type="next"
                                onClickFunction={this.handleClickNext}/>
                        </div>
                    </div>
                </div>
            </StyleWrapper>
        );
    }

   
}

const mapStateToProps = state => ({
    items: state.cards.items,
    idx: state.cards.flashCardIdx
});

export default connect(mapStateToProps, { fetchCard })(DeckNavigation);