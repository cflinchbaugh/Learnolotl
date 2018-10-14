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
                    The Modes built here will show as buttons on every card. When clicked, the hidden answer will appear.  
                </p>
                <p>
                    In the Japanese Sample, the Modes were "English", "Romaji", and "Hiragana".  For non-language learning, you may want to set your  modes to "Question" and "Answer."
                </p>
                    
                <DynamicFormElementFactory {...props.dynamicFormElementFactoryData}/>
                <NavigationArrow {...props.saveFormatButtonData}/>
        </StyleWrapper>
    )
}

export default CardFormatBuilder;