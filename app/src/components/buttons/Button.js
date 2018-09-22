import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    .button {
        color: ${props => props.theme.primaryColor};
        background: transparent;
        transition: all 0.35s; 
        display: inline-block;
        border: solid 1px orange;
        border-radius: 15px;
        padding: 8px 20px;
        box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.25);
        user-select: none;

        &:hover {
            cursor: pointer;
            background-color: #566184;
            color: ${props => props.theme.primaryLightColor}
            box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.48);
        }
    }
`

function Button (props) {
    let buttonData = {
        className: 'button',
        onClick: props.onClickFunction,
        onMouseOver: props.onMouseOverFunction
    }

    return (
        <StyleWrapper>
            <button {...buttonData }>
                { props.label }
            </button>
        </StyleWrapper>
    )
}

export default Button