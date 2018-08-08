import React, { Component } from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    .reveal-button {
        display: inline-block;
        min-width: 100px;
        margin: 20px;
        padding: 10px;
        background: rgb(219, 212, 212);
        border-radius: 5px;
        transition: background-color 0.25s;
        text-align: center;
    }

    .reveal-button:hover {
        cursor: pointer;
        background-color: rgb(204, 222, 241);
    }

    .reveal-button.active {
        background-color: rgba(38, 184, 228, 0.616)
    }
`;

class RevealOptions extends Component {    
    _processReveal(translationsArr) {
        return translationsArr.map(function(translationData, idx) {
            let reveal;
            
            if (translationData.id === this.props.display) {
                reveal = (
                    <div key={idx} className="reveal-button active">
                    {translationData.id}
                    </div>
                );
            } else {
                reveal = (
                    <div key={idx} className="reveal-button" onClick={() => this.handleClick(translationData.id) }>
                    {translationData.id}
                    </div>
                );
            }
            
            
            return reveal;
        }, this);
    }
    
    render() {
        let reveal = this._processReveal(this.props.optionsArray);
        
        return (
            <StyleWrapper>
                <div className="RevealOptions">
                    {reveal}
                </div>
            </StyleWrapper>
        )
    }

    handleClick(e) {
        this.props.handleClickOption(e);
    }

}

export default RevealOptions