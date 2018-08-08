import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveItem from '../atoms/ActiveItem';
import RevealItem from '../atoms/RevealItem';
import RevealOptions from './RevealOptions';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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

        this.state = {
            revealItem: [{
                id: '',
                value: '',
            }]
        };

        this.handleRevealClick = this.handleRevealClick.bind(this);
    }

    handleRevealClick(e) {
        this.props.handleClickDisplay(e);

        let i = 0,
            translationsArr = this.props.data.langData,
            updatedState = [];

        for ( ; i < translationsArr.length; i++) {
            if (translationsArr[i].id === e) {
                updatedState.push(translationsArr[i]);
            }
        }

        this.setState(state => ({
            revealItem: updatedState
        }));
    }

    render() {
        let activeValue = this._processActiveValue(),
            translationsArr = this.props.data.langData;

        return (
            <StyleWrapper>
                <div className="card">
                    <div className="active-wrapper">
                        <ActiveItem value={activeValue}/>
                    </div>

                    <TransitionGroup className="reveal-wrapper">
                        {this.state.revealItem.map(({ id, value }) => (
                            <CSSTransition
                                key={id}
                                timeout={300}
                                classNames="fade" 
                            
                            >
                                <div className="translations-wrapper">
                                    <RevealItem value={value}/>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>

                    <div className="reveal-options-wrapper">

                        <RevealOptions optionsArray={translationsArr} 
                            handleClickOption={this.handleRevealClick}
                            />
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

   
}

export default Card