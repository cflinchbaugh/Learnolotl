import React, { Component } from 'react';
import styles from './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            display: 'none'
        }
    }

    handleClick(e) {
        this.setState((prevState, props) => {
            return {display: e};
        });
    }

    render() {
        let active = this._buildActive(),
            translationsArr = this.props.data.langData,
            translations = this._processTranslations(translationsArr),
            reveal = this._processReveal(translationsArr);

        return (
            <div className="card">
                <div className="active-wrapper">
                    Active: {active}
                </div>
                <div className="translations-wrapper">
                    Translations: {translations}
                </div>
                <div className="reveal-wrapper">
                    Reveal: {reveal}
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
            
            if (translationData.id === this.state.display) {
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
            
            if (translationData.id === this.state.display) {
                reveal = (
                    <div key={idx} className="active reveal-button">
                    {translationData.id}
                    </div>
                );
            } else {
                reveal = (
                    <div key={idx} className="inactive reveal-button" onClick={() => this.handleClick(translationData.id) }>
                    {translationData.id}
                    </div>
                );
            }
            
            
            return reveal;
        }, this);
    }
}

export default Card