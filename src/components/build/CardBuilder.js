import React, { Component } from 'react';
import styled from 'styled-components';

import FormElementFactory from '../formElements/FormElementFactory';
import Button from '../buttons/Button';


const StyleWrapper = styled.div`
    .export-button-wrapper {
        text-align: center;
    }
    
    .export-directions-wrapper {
        margin: 20px;
    }
`

function CardBuilder (props) {
    return (
        <StyleWrapper className='card-builder-wrapper clearfix'>
            <p>Now, fill in as many cards as you like!</p>
            
            <form onSubmit={props.handleSubmitForm}>
                <FormElementFactory {...props.formElementFactoryData}/>
                <Button {...props.nextCardButtonData}/>

                <p className="export-directions-wrapper">
                    When you're all finished, click Download and you'll have a brand new set of Learnolotl cards to use in the Learn section!
                </p>
                
                <div className="export-button-wrapper">
                    <Button {...props.exportButtonData}/>
                </div>
            </form>
        </StyleWrapper>

    )
}

    

export default CardBuilder;