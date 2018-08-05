import React, { Component } from 'react';
import Flashcards from '../organisms/Flashcards';


class LearnFlashcards extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Flashcards {...this.props.location.state}/>
            </div>
        );
    }
}

export default LearnFlashcards;