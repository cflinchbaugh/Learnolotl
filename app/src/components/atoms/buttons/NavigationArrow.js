import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.secondaryColor};
    transition: all 0.35s; 
    display: inline-block;
    border-radius: 15px;
    padding: 8px 20px;
    box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.25);
    user-select: none;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.secondaryLight};
        color: ${props => props.theme.secondaryLightColor}
        box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.48);
    }
`

function Button (props) {
    let arrow = props.type === 'next' ? '=>' : '<=';

    return (
        <StyleWrapper 
            className="navigation-button"
            onClick={ props.onClickFunction } >
                {arrow}
        </StyleWrapper>
    )
}

export default Button