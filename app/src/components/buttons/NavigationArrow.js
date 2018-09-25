import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    .navigation-button {
        color: orange;
        background: transparent;
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
            box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.48);
        }
    }
    
    .disabled {
        border: solid 1px darkgray;
        color: darkgray;
        
        &:hover {
            cursor: not-allowed;
            background-color: transparent;
        }
    }
`

function NavigationArrow (props) {
    let arrow = props.type === 'next' ? '=>' : '<=',
        navigationArrowData ={
            className: props.disabled ? 'navigation-button disabled' : 'navigation-button',
            onClick: props.onClickFunction
        }

    return (
        <StyleWrapper className='navigation-button-wrapper'>
            <button {...navigationArrowData} >
                {arrow}
            </button>
        </StyleWrapper>
    )
}

export default NavigationArrow