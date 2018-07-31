import React, { Component } from 'react';
import Flashcards from '../organisms/Flashcards';
import Uploader from '../organisms/Uploader';


class Learn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardData: [],
            display: 'none'
        }

        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(updatedCardData) {
         this.setState((state) => ({
            cardData: updatedCardData
        }));
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
                
                <Flashcards {...flashcardsData}/>
            </div>
        );
    }
}

export default Learn;