import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveItem from '../atoms/ActiveItem';
import RevealOptions from './RevealOptions';

const StyleWrapper = styled.div`
    .active-wrapper,
    .translations-wrapper,
    .reveal-wrapper {
        margin-bottom: 20px;
        text-align: center;
    }


    .translations-wrapper {
        min-height: 60px;
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
        let activeValue = this._processActiveValue(),
            translationsArr = this.props.data.langData,
            translationValue = this._processTranslationValue(translationsArr);

        return (
            <StyleWrapper>
                <div className="card">
                    <div className="active-wrapper">
                        <ActiveItem value={activeValue}/>
                    </div>
                    <div className="translations-wrapper">
                        <ActiveItem value={translationValue}/>
                    </div>
                    <div className="reveal-wrapper">
                        <RevealOptions optionsArray={translationsArr} 
                            handleClickOption={this.handleClick}/>
                    </div>
                </div>
            </StyleWrapper>
        )
    }

    _processActiveValue() {
        let activeCardData;
        
        // Loop over all langData, 
            // return the one currently active 
            // (determined by current MODE)
        activeCardData = this.props.data.langData.find(function(obj) {
            return obj.id === this.props.mode; 
        }, this);

        //Return the value
        return activeCardData.value;
    }

    _processTranslationValue(translationsArr) {
        // Loop over all possible translations,
            // return the one that is currently displayed

        return translationsArr.map(function(translationData, idx) {
            let translation = '';
            
            if (translationData.id === this.props.display) {
                translation = translationData.value
            }
            return translation;
        }, this);
    }

}

export default Card