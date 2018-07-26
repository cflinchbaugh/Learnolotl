import React, { Component } from 'react';

class Card extends Component {
    render() {
        let active = this._buildActive(),
            translationsArr = this._buildTranslations(),
            translations = this._processTranslations(translationsArr);

        return (
            <div className="card-wrapper">
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

    _buildTranslations() {
        let langData = this.props.data.langData,
            filterByMode = (item) => {
                if (item.id !== this.props.mode) {
                    return true;
                }
            },
            translations = langData.filter(filterByMode);

        return translations;
    }

    _processTranslations(translationsArr) {
        return translationsArr.map(function(translationData, idx) {
            return <div key={idx}>{translationData.value}</div>
        }, this);
    }
}

export default Card