import React, { Component } from 'react';
import DeckNavigation from '../organisms/DeckNavigation';
import styles from './Flashcards.css';

class Fashcards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            idx: 0
        }

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
    }

    render() {
        let data = this._buildData();

        return (
            <div>
                <h1>Flashcards</h1>

                <div className="deck-navigation-placeholder">
                    <DeckNavigation {...data}/>
                </div>
            </div>
        );
    }

    _buildData() {
        let data = {
            deckData: this._buildDeckData(),
            handleClickNext: this.handleClickNext,
            handleClickPrevious: this.handleClickPrevious,
        }

        return data;

    }

    _buildDeckData() {
        let deckData = {
                mode: 'english',
                cardData: this.fetch(this.state.idx)
            };

        return deckData;
    }

    // Obviously this is not a real fetch right now,
        // but with a little TLC and a lot of grinding,
        // I'm pretty sure it can reach Mega-level 
        // digivolution in no time
    fetch(idx) {
        let results = [],
            response = [
                {
                    metadata: ['101'],
                    langData: [
                        {
                            id: 'english',
                            value: 'I'
                        }, {
                            id: 'romaji',
                            value: 'watashi'
                        }, {
                            id: 'hiragana',
                            value: '\u308E\u305F\u3057'
                        }
                    ]
                }, {
                    metadata: ['101'],
                    langData: [
                        {
                            id: 'english',
                            value: 'you'
                        }, {
                            id: 'romaji',
                            value: 'anata'
                        }, {
                            id: 'hiragana',
                            value: '\u3041\u306A\u305F'
                        }
                    ]
                }
            ],
            validatedIdx = this._validateIdx(idx, response.length);
            

        // Build response, return an array so we can potentially
            // send more than one card at a time
        results.push(response[validatedIdx]);

        return results;
    }

    _validateIdx(idx, responseLen) {
        let validatedIdx;
        
        // Lower-bound check
        validatedIdx = (idx < 0) ? 0 : idx;

        // Upper-bound check
        validatedIdx = (idx >= responseLen) ? responseLen : idx;

        return validatedIdx;
    }

    handleClickNext() {
        let updatedIdx = this.state.idx += 1;

        this.setState((state) => ({
            idx: updatedIdx
        }));
    }
    handleClickPrevious() {
        let updatedIdx = this.state.idx -= 1;

        this.setState((state) => ({
            idx: updatedIdx
        }));
    }
}

export default Fashcards;