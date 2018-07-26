import React, { Component } from 'react';
import Deck from '../organisms/Deck';

class Test extends Component {

    render() {
        let deckData = {
            mode: 'english',
            cardData: [{
                metadata: ['101'],
                langData: [{
                    id: 'english',
                    value: 'I'
                }, {
                    id: 'romaji',
                    value: 'watashi'
                }, {
                    id: 'hiragana',
                    value: '\u308E\u305F\u3057'
                }]
            }, {
                metadata: ['101'],
                langData: [{
                    id: 'english',
                    value: 'you'
                }, {
                    id: 'romaji',
                    value: 'anata'
                }, {
                    id: 'hiragana',
                    value: '\u3041\u306A\u305F'
                }]
            }]
        };

        return (
            <div>
                <h1>Deck Test</h1>

                <div>
                    <Deck deckData={deckData}/>
                </div>
            </div>
        );
    }
}

export default Test;