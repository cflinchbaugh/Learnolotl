import React, { Component } from 'react';
import styled from 'styled-components';

import DeckNavigation from 'learn/DeckNavigation';

const StyleWrapper = styled.div`
`

function LearnFlashcards(props) {
    return (
        <StyleWrapper>
        <div className="flashcards">
            <h1>Flashcards</h1>

            <div className="deck-navigation-placeholder">
                <DeckNavigation deckData={props.deckNavigationData}/>
            </div>
        </div>
        </StyleWrapper>
    );
}

export default LearnFlashcards;