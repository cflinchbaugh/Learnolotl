import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveItem from 'atoms/ActiveItem';
import RevealItem from 'atoms/RevealItem';
import RevealOptions from 'molecules/RevealOptions';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { revealOption } from '../../actions/cardActions';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
    padding: 0 0 20px 0;
    
    .active-wrapper,
    .translations-wrapper,
    .reveal-wrapper {
        margin-bottom: 20px;
        text-align: center;
    }

    .reveal-wrapper {
        min-height: 200px;
    }

    .translations-wrapper {
        min-height: 60px;
    }

    .content {
        min-height: 550px;
    }

`;
// TODO: Content min-height, is this necessary?
    // It's not lookin' so good on large-format monitors
class Card extends Component {
    constructor(props) {
        super(props);

        this.handleRevealClick = this.handleRevealClick.bind(this);
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

    render() {
        let activeValue = this._processActiveValue(),
            translationsArr = this.props.data.revealOptionData,
            fadeInVanishOutAnimationData = {
                timeout: 300,
                classNames: "fade-in-vanish-out" 
            },
            revealOptionsData = {
                display: this.props.flashCardDisplay,
                optionsArray: translationsArr,
                handleClickOption: this.handleRevealClick
            }


        return (
            <StyleWrapper>
                <div className="card">
                    <div className="content">
                        <div className="active-wrapper">
                            <ActiveItem value={activeValue}/>
                        </div>

                        <TransitionGroup className="reveal-wrapper">
                            {this.props.revealItem.map( ({ id, value }) => (
                                <CSSTransition key={id}
                                    {...fadeInVanishOutAnimationData}
                                >
                                    <div className="translations-wrapper">
                                        <RevealItem value={value}/>
                                    </div>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>

                    <div className="reveal-options-wrapper">
                        <RevealOptions {...revealOptionsData} />
                    </div>

                </div>
            </StyleWrapper>
        )
    }


    _processActiveValue() {
        let activeCardData;
        
        // Loop over all revealOptionData, 
            // return the one currently active 
            // (determined by current MODE)
        activeCardData = this.props.data.revealOptionData.find(function(obj) {
            return obj.id === this.props.mode; 
        }, this);

        //Return the value
        return activeCardData.value;
    }

   
}

const mapStateToProps = state => ({
    revealItem: state.cards.revealOption,
    flashCardDisplay: state.cards.flashCardsDisplay
});

export default connect(mapStateToProps, { revealOption })(Card);