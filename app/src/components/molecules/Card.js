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
            translations = this._processTranslations(translationsArr);

        return (
            <div className="card">
                <div>
                    Active: {active}
                </div>
                <div>
                    Translations: {translations}
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
                    <div key={idx} onClick={() => this.handleClick(translationData.id) }>
                        {translationData.value}
                    </div>
                );
            } else {
                translations = (
                    <div key={idx} className="hide" onClick={() => this.handleClick(translationData.id) }>
                        {translationData.value}
                    </div>
                );
            }
            
            
            return translations;
        }, this);
    }
}

export default Card