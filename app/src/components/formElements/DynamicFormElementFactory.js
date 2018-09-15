import React, { Component } from 'react';
import styled from 'styled-components';

import Button from 'buttons/Button';
import FormElementFactory from 'formElements/FormElementFactory';

const StyleWrapper = styled.div`
`

function DynamicFormElementFactory(props) {
    let addInputButtonData = {
            label: 'Add Input',
            onClickFunction: props.addInputField
        }

    return (
        <StyleWrapper>
            <FormElementFactory {...props}/>
            <Button {...addInputButtonData}/>
        </StyleWrapper>

    )

}

export default DynamicFormElementFactory;