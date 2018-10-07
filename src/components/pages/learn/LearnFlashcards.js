import React, { Component } from 'react';
import styled from 'styled-components';

import DeckNavigation from 'learn/DeckNavigation';

const StyleWrapper = styled.div`
`

function LearnFlashcards(props) {
    return (
        <StyleWrapper className="deck-navigation-placeholder">
            <DeckNavigation deckData={props.deckNavigationData}/>
        </StyleWrapper>
    );
}

export default LearnFlashcards;