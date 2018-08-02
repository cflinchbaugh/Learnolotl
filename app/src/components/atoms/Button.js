import React, { Component } from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    .button {
        color: white;
        background-color: blue;
        transition: background-color 0.25s; 
        display: inline-block;
        border-radius: 10px;
        padding: 5px 10px;
        box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.48);

        &:hover {
            cursor: pointer;
            background-color: purple;
            box-shadow: 1px 8px 19px 3px rgba(61,55,61,0.48);
        }
    }
`

function Button (props) {
    return (
        <StyleWrapper>
            <div className="button" onClick={ props.onClickFunction } onMouseOver={ props.onMouseOverFunction }>
                { props.label }
            </div>
        </StyleWrapper>
    )
}

export default Button