import React, { Component } from 'react';
import { connect } from 'react-redux';
import { revealOption } from '../../actions/cardActions';
import Card from './Card';


// TODO: Content min-height, is this necessary?
    // It's not lookin' so good on large-format monitors
class CardWrapper extends Component {
    constructor(props) {
        super(props);

        this.handleRevealClick = this.handleRevealClick.bind(this);
    }

    render() {
        let activeValue = this._processActiveValue(),
            translationsArr = this._processRevealOptions(),
            cardData = {
                activeValue,
                revealItem: this.props.revealItem,
                fadeInVanishOutAnimationData: {
                    timeout: 300,
                    classNames: "fade-in-vanish-out" 
                },
                revealOptionsData: {
                    display: this.props.flashCardDisplay,
                    optionsArray: translationsArr,
                    handleClickOption: this.handleRevealClick
                }
            }

        return (
            <Card {...cardData}/>
        )
    }

    _processRevealOptions() {
        let revealOptions = this.props.data.revealOptionData.filter( (item) => {
            return item.id !== this.props.mode;
        });

        return revealOptions;
    }

    handleRevealClick(e) {
        let i = 0,
            translationsArr = this.props.data.revealOptionData,
            updatedRevealOptionData = [];

        for ( ; i < translationsArr.length; i++) {
            if (translationsArr[i].id === e) {
                updatedRevealOptionData.push(translationsArr[i]);
            }
        }

        this.props.revealOption(updatedRevealOptionData);
    }

    _processActiveValue() {
        let activeCardData;

        // Loop over all revealOptionData, 
            // return the one currently active 
            // (determined by current MODE)
        activeCardData = this.props.data.revealOptionData.find(function(obj) {
            return obj.id.toLowerCase() === this.props.mode.toLowerCase();
        }, this);

        //Return the value
        return activeCardData.value;
    }

   
}

const mapStateToProps = state => ({
    revealItem: state.cards.revealOption,
    flashCardDisplay: state.cards.flashCardsDisplay
});

export default connect(mapStateToProps, { revealOption })(CardWrapper);