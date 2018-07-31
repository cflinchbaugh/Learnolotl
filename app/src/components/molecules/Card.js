import React, { Component } from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    background-color: yellow;
    transition: background-color 0.25s;

    &:hover {
        background-color: orange;
        cursor: pointer;
    }

    .active-wrapper,
    .translations-wrapper,
    .reveal-wrapper {
        margin-bottom: 20px;
        text-align: center;
    }

    .active-wrapper,
    .translations-wrapper {
        font-size: 2em;
    }

    .translations-wrapper {
        min-height: 60px;
    }

    .reveal-button {
        display: inline-block;
        min-width: 100px;
        margin: 20px;
        padding: 10px;
        background: rgb(219, 212, 212);
        border-radius: 5px;
        transition: background-color 0.25s;
    }

    .reveal-button:hover {
        cursor: pointer;
        background-color: rgb(204, 222, 241);
    }

    .reveal-button.active {
        background-color: rgba(38, 184, 228, 0.616)
    }
`;

class Card extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.handleClickDisplay(e);
    }

    render() {
        let active = this._buildActive(),
            translationsArr = this.props.data.langData,
            translations = this._processTranslations(translationsArr),
            reveal = this._processReveal(translationsArr);

        return (
            <StyleWrapper>
                <div className="card">
                    <div className="active-wrapper">
                        {active}
                    </div>
                    <div className="translations-wrapper">
                        {translations}
                    </div>
                    <div className="reveal-wrapper">
                        {reveal}
                    </div>
                </div>
            </StyleWrapper>
        )
    }

    _buildActive() {
        let activeCardData = this.props.data.langData.find(function(obj) {
            return obj.id === this.props.mode; 
        }, this);

        return activeCardData.value;
    }

    _processTranslations(translationsArr) {
        return translationsArr.map(function(translationData, idx) {
            let translations;
            
            if (translationData.id === this.props.display) {
                translations = (
                    <div key={idx} className="translation ">
                        {translationData.value}
                    </div>
                );
            } else {
                translations = (
                    <div key={idx} className="translation hide">
                        {translationData.value}
                    </div>
                );
            }
            
            
            return translations;
        }, this);
    }

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
}

export default Card