import React, { Component } from 'react';
import Deck from 'learn/Deck';
import styled from 'styled-components';
import NavigationArrow from 'buttons/NavigationArrow.js';
import Button from 'buttons/Button.js';
import { connect } from 'react-redux';
import { fetchCard } from '../../actions/cardActions';

const StyleWrapper = styled.div`
    .deck-navigation {
        justify-content: center;
        min-height: 350px;
    }

    .deck {
        display: flex;
        margin-bottom: 15px;
    }

    .navigation-wrapper {
        text-align: center;
    }

    .navigation-button-wrapper {
        display: inline-block;
        margin: 0 5px;
    }

`

export class DeckNavigation extends Component {
    constructor(props) {
        super(props);

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickRandom = this.handleClickRandom.bind(this);
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

    handleClickRandom() {
        let updatedIdx = Math.floor(Math.random() * this.props.items.length),
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
        let prevDisabled = this.props.idx === 0 ? true : false,
            nextDisabled = this.props.idx === (this.props.items.length - 1) ? true : false;

        return (
            <StyleWrapper>
                <div className="deck-navigation">

                    <div className="deck">
                        <Deck deckData={this.props.deckData}/>
                    </div>

                    <div className="navigation-wrapper">
                        <div className="navigation-button-wrapper">
                            <NavigationArrow 
                                type="previous"
                                onClickFunction={this.handleClickPrevious}
                                disabled={prevDisabled}/>
                        </div>

                        <div className="navigation-button-wrapper">
                            <Button 
                                onClickFunction={this.handleClickRandom}
                                label="Random"
                            />
                        </div>

                        <div className="navigation-button-wrapper">
                            <NavigationArrow 
                                type="next"
                                onClickFunction={this.handleClickNext}
                                disabled={nextDisabled}/>
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