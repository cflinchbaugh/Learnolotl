import React, { Component } from 'react';
import styled from 'styled-components';

import DynamicFormElementFactory from 'formElements/DynamicFormElementFactory';
import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`
    .navigation-button {
        float: right;
    }
`

function CardFormatBuilder(props) {
    return (
        <StyleWrapper className='card-format-builder-wrapper clearfix'>
                <h2>Card Format</h2>
                <p>
                    The Modes built here will show as buttons on every card, when clicked the hidden answer will appear.  In the Japanese Sample, the Modes were "English", "Romaji", and "Hiragana".
                </p>
                    
                <DynamicFormElementFactory {...props.dynamicFormElementFactoryData}/>
                <NavigationArrow {...props.saveFormatButtonData}/>
        </StyleWrapper>
    )
}

export default CardFormatBuilder;