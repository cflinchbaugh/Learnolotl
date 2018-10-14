import React from 'react';
import styled from 'styled-components';

import CancelPopButton from 'buttons/CancelPopButton';
import Learn from './Learn';

const StyleWrapper = styled.div`
    .cancel-pop-button-wrapper {
        display: inline-block;
    }
`

function LearnSampleData (props) {
    return (
        <StyleWrapper className="learn-container-wrapper mdCard">
            <div className="cancel-pop-button-wrapper">
                <CancelPopButton {...props.cancelSampleButtonData} />
            </div>

            <Learn {...props.learnData}/>
        </StyleWrapper>
    );
}


export default LearnSampleData;