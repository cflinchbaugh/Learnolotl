import React from 'react';
import styled from 'styled-components';

import InputField from 'formElements/InputField';
import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`
    .navigation-button {
        float: right;
    }
`

function BuildFileName (props) {
    let navigationArrowData = {
        type: 'next',
        onClickFunction: props.handleBuildFileNameNext
    }
    return (
        <StyleWrapper className='mdCard clearfix'>
            <InputField {...props.fileIdData} />
            <NavigationArrow {...navigationArrowData} />
        </StyleWrapper>
    );
}

export default BuildFileName;