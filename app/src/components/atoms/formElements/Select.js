import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    
`

function Select (props) {
    let options = props.options.map( (option, idx) => {
            return (
                <option key={idx} value={option.id}>
                    {option.value}
                </option>
            );
        });
    
    return (
        <StyleWrapper>
            <div>{props.label}</div>
            <select>
                {options}
            </select>
        </StyleWrapper>
    )
}

export default Select