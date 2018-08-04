import React, { Component } from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    color: white;
    font-size: 3em;
    text-shadow: 0px 6px 3px rgba(0,0,0,0.4),
        0px 8px 13px rgba(0,0,0,0.1),
        0px 18px 23px rgba(0,0,0,0.1);
         

    
`;

const styles= {
    transition: 'all 0.25s ease-out'
};

class RevealItem extends Component {
    constructor() {
        super();

        this.state = {
            opacity: 0
        }
    }

    render() {
        return (
            <StyleWrapper>
                <div className="active-item"
                    style={{...styles, opacity: this.state.opacity}}>
                    { this.props.value }
                </div>
            </StyleWrapper>
        )
    }
}

export default RevealItem