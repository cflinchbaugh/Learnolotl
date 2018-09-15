import React from 'react';
import styled from 'styled-components';

import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`

`

function BuildLandingView (props) {
    let navigationArrowData = {
        type: 'next',
        onClickFunction: props.handleBuildLandingViewNext
    }

    return (
        <StyleWrapper>
            <p>
                Create new Memorinity cards here!
            </p>
            <p>
                You want to learn more than just the few sample cards that came with the app?  No problem!
                It's easy to make your own Memorinity cards and share them with others.
            </p>
            <p>
                First, what do you want this set of cards to be called?  We'll use it as a filename, so please, just letters and underscores.
            </p>
            <NavigationArrow {...navigationArrowData} />
        </StyleWrapper>
    )
}

export default BuildLandingView