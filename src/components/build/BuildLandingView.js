import React from 'react';
import styled from 'styled-components';

import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`
    width: 100%;
    
    .navigation-button {
        float: right;
    }
`

function BuildLandingView (props) {
    let navigationArrowData = {
        type: 'next',
        onClickFunction: props.handleBuildLandingViewNext
    }

    return (
        <StyleWrapper className='build-landing-view-wrapper clearfix'>
            <p>
                Create new Learnolotl cards here!
            </p>
            <p>
                You want to learn more than just the few sample cards that came with the app?  No problem!
                It's easy to make your own Learnolotl cards and share them with others.
            </p>
            <NavigationArrow {...navigationArrowData} />
        </StyleWrapper>
    )
}

export default BuildLandingView