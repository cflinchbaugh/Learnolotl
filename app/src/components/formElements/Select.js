import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    
`

function Select (props) {
    let options = props.options.map( (option, idx) => {
            let optionData = {
                key: idx,
                value: option.id
            }

            return (
                <option {...optionData}>
                    {option.value}
                </option>
            );
        });
    
    return (
        <StyleWrapper>
            <div>{props.label}</div>
            <select id={props.id} onChange={props.handleChange} value={props.selected}>
                {options}
            </select>
        </StyleWrapper>
    )
}

export default Select