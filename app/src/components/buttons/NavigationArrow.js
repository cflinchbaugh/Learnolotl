import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    color: orange;
    border: solid 1px orange;
    transition: all 0.35s; 
    display: inline-block;
    border-radius: 15px;
    padding: 8px 20px;
    box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.25);
    user-select: none;

    &:hover {
        cursor: pointer;
        background-color: #566184;
        color: ${props => props.theme.secondaryLightColor}
        box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.48);
    }
`

function NavigationArrow (props) {
    let arrow = props.type === 'next' ? '=>' : '<=',
        navigationArrowData ={
            className: 'navigation-button',
            onClick: props.onClickFunction
        }

    return (
        <StyleWrapper {...navigationArrowData} >
            {arrow}
        </StyleWrapper>
    )
}

export default NavigationArrow