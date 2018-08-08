import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

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
            let reveal,
                buttonData = {
                    label: translationData.id
                }
            
            if (translationData.id === this.props.display) {
                reveal = (
                    <Button key={idx} {...buttonData}/>
                );
            } else {    
                buttonData.onClickFunction = (() => this.handleClick(translationData.id));
                
                reveal = (
                    <Button key={idx} {...buttonData}/>
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