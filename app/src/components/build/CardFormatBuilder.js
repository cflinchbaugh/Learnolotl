import React, { Component } from 'react';
import styled from 'styled-components';

import DynamicFormElementFactory from 'formElements/DynamicFormElementFactory';
import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`
    width: 100%;

    .navigation-button {
        float: right;
    }
`

function CardFormatBuilder(props) {
    return (
        <StyleWrapper className='card-format-builder-wrapper clearfix'>
                <h2>Card Format</h2>
                <p>
                    Here we configure the format each of the cards will have.
                    <br/>
                    <br/>
                    The button labels you build here will be the options clicked to show the hidden answers.  Every card in this set will have the same format, so be sure to include all the options, even if some cards might not have them (like "Hint" or "Misc.").
                </p>
                    
                <DynamicFormElementFactory {...props.dynamicFormElementFactoryData}/>
                <NavigationArrow {...props.saveFormatButtonData}/>
        </StyleWrapper>
    )
}

export default CardFormatBuilder;