import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    input {
        background-color: #535d81;
        color: white;
        border: solid 1px white;
        margin-bottom: 25px;
    }
`

function InputField (props) {
    return (
        <StyleWrapper>
            <div>{props.label}</div>
            <input {...props}></input>
        </StyleWrapper>
    )
}

export default InputField