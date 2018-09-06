import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    
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