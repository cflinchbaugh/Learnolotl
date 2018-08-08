import React, { Component } from 'react';
import Flashcards from '../organisms/Flashcards';
import Uploader from '../organisms/Uploader';

import { Link } from 'react-router-dom';


class Learn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    "metadata": ["101"],
                    "langData": [
                        {
                            "id": "english",
                            "value": "I"
                        }, {
                            "id": "romaji",
                            "value": "watashi"
                        }, {
                            "id": "hiragana",
                            "value": "\u308E\u305F\u3057"
                        }
                    ]
                },
        
                {
                    "metadata": ["101"],
                     "langData": [
                         {
                             "id": "english",
                             "value": "you"
                         }, {
                             "id": "romaji",
                             "value": "anata"
                         }, {
                             "id": "hiragana",
                             "value": "\u3041\u306A\u305F"
                         }
                     ]
                }
            ],
            display: 'none',
            defaultData: true
        }

        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(updatedCardData) {
        if (this.state.defaultData) {
            this.setState((state) => ({
                cardData: updatedCardData,
                defaultData: false
            }));
        } else {
            let mergedCardData = this._mergeCardData(updatedCardData);
            
            this.setState((state) => ({
                cardData: mergedCardData
            }));
        }

        console.log(this.state.cardData);
    }

    _mergeCardData(updatedCardData) {
        let mergedData = this.state.cardData,
            i = 0;

        for ( ; i < updatedCardData.length; i++) {
            mergedData.push(updatedCardData[i]);
        }

        return mergedData;
    }

    render() {
        let uploaderData = {
            handleFileUpload: this.handleFileUpload,
            cardData: this.state.cardData
        },
        flashcardsData = {
            cardData: this.state.cardData
        }

        return (
            <div>
                <Uploader {...uploaderData} />
                
                <Link to={{
                    pathname: '/learn/flashcards',
                    state: {...this.state}
                    
                    }}>Flashcards</Link>
            </div>
        );
    }
}

export default Learn;