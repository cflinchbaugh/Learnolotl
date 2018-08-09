import React, { Component } from 'react';
import Flashcards from 'organisms/Flashcards';


class LearnFlashcards extends Component {
    render() {
        return (
            <div>
                <Flashcards {...this.props.location.state}/>
            </div>
        );
    }
}

export default LearnFlashcards;