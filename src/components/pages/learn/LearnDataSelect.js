import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Button from 'buttons/Button';

const StyleWrapper = styled.div`

`

function LearnDataSelect (props) {
    let demoButtonData = {
            label: 'Japanese Demo',
            onClickFunction: props.handleDemoDataClick
        }
    return (
        <StyleWrapper className="learn-data-selectwrapper">
            <Button {...demoButtonData} />
        </StyleWrapper>
    );
}


export default LearnDataSelect;