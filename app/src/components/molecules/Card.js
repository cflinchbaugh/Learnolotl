import React, { Component } from 'react';
import styles from './Card.css';

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