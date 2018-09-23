import React, { Component } from 'react';
import styled from 'styled-components';

import FormElementFactory from '../formElements/FormElementFactory';
import Button from '../buttons/Button';


const StyleWrapper = styled.div`
    .export-button-wrapper {
        text-align: center;
    }
`

function CardBuilder (props) {
    return (
        <StyleWrapper className='card-builder-wrapper clearfix'>
            <p>Now, fill in as many cards as you like!  When you're all finished, click Download and you'll have a brand new set of Memorinity cards to use in the Learn section!</p>
            <form onSubmit={props.handleSubmitForm}>
                <FormElementFactory {...props.formElementFactoryData}/>
                <Button {...props.nextCardButtonData}/>

                <div className="export-button-wrapper">
                    <Button {...props.exportButtonData}/>
                </div>
            </form>
        </StyleWrapper>

    )
}

    

export default CardBuilder;