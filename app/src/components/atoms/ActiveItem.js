import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    color: ${props => props.theme.dark};
    font-size: 3em;
    text-shadow: 0px 6px 3px rgba(0,0,0,0.3),
         0px 8px 13px rgba(0,0,0,0.1),
         0px 18px 23px rgba(0,0,0,0.1);
`;


function ActiveItem (props) {
    return (
        <StyleWrapper>
            { props.value }
        </StyleWrapper>
    )
}

export default ActiveItem