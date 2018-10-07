import React from 'react';
import styled from 'styled-components';

import Button from 'buttons/Button';
import Learn from './Learn';

const StyleWrapper = styled.div`

`

function LearnSampleData (props) {
    return (
        <StyleWrapper className="learn-container-wrapper mdCard">
            <Button {...props.cancelSampleButtonData} />
            <Learn {...props.learnData}/>
        </StyleWrapper>
    );
}


export default LearnSampleData;